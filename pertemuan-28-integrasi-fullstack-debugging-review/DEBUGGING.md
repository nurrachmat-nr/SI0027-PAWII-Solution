# DEBUGGING.md - Kunci Jawaban Latihan Debugging

Dokumen ini adalah kunci jawaban untuk latihan debugging pada `pertemuan-28-integrasi-fullstack-debugging-review` (backend, react, angular) di repositori **[SI0027-PAWII-Project](https://github.com/nurrachmat-nr/SI0027-PAWII-Project)**. **Baca setelah Anda selesai mencoba menemukan bug sendiri**, atau setelah benar-benar mentok - bukan sebagai langkah pertama.

Terdapat **3 bug**, masing-masing pada lapisan arsitektur yang berbeda. Ketiganya saling menutupi (bug pertama harus diperbaiki lebih dulu agar bug berikutnya bisa terlihat), sehingga urutan penemuan di bawah ini kemungkinan besar sama dengan urutan yang akan Anda alami sendiri.

## Bug 1 - Frontend: Environment Variable API Salah

**Lapisan:** Frontend (konfigurasi)

**Gejala:** Begitu aplikasi dibuka, daftar mahasiswa tidak pernah muncul - hanya pesan "Gagal memuat data mahasiswa" (React) atau kondisi serupa (Angular). Network tab menunjukkan request ke `/mahasiswa` gagal dengan `net::ERR_CONNECTION_REFUSED`.

**Cara menemukan:** Buka Network tab, perhatikan URL request yang gagal - port pada URL tersebut tidak sama dengan port tempat backend benar-benar berjalan (`http://localhost:3000`, terlihat dari log terminal backend saat `npm start`).

**Akar masalah:**
- React (`react/.env.example`): `VITE_API_BASE_URL=http://localhost:3001` - seharusnya `3000`.
- Angular (`angular/src/environments/environment.development.ts`): `apiBaseUrl: 'http://localhost:3001'` - seharusnya `'http://localhost:3000'`.

**Perbaikan:** Ubah nilai port menjadi `3000` (sesuai `PORT` pada `.env` backend), lalu restart dev server (`npm run dev` / `ng serve`).

## Bug 2 - Backend: Urutan Argumen `bcrypt.compare` Terbalik

**Lapisan:** Backend

**Gejala:** Setelah Bug 1 diperbaiki, daftar mahasiswa berhasil dimuat. Namun login **selalu gagal** ("Username/password salah") walau username & password yang dimasukkan benar - termasuk akun yang baru saja didaftarkan lewat `/auth/register`.

**Cara menemukan:** Karena gejalanya konsisten (bukan sesekali), dan tampil di form login, langkah isolasi berikutnya adalah memastikan apakah masalah ada di frontend atau backend: kirim request `/auth/login` langsung lewat curl dengan kredensial yang baru saja didaftarkan.

```bash
curl -X POST http://localhost:3000/auth/register -H "Content-Type: application/json" -d '{"username":"tes","password":"rahasia123"}'
curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d '{"username":"tes","password":"rahasia123"}'
```

Jika curl (tanpa melibatkan kode frontend sama sekali) tetap mengembalikan `401`, bug pasti ada di backend.

**Akar masalah (`backend/controllers/authController.js`):**

```js
const cocok = await bcrypt.compare(user.password, password); // urutan argumen terbalik
```

`bcrypt.compare(data, hash)` mengharapkan argumen pertama adalah password mentah (plaintext) dan argumen kedua adalah hash tersimpan. Pada kode di atas urutannya tertukar - `user.password` (hash) diperlakukan sebagai plaintext dan `password` (plaintext) diperlakukan sebagai hash - sehingga perbandingan hampir selalu bernilai `false`, berapa pun password yang dimasukkan.

**Perbaikan:**

```js
const cocok = await bcrypt.compare(password, user.password);
```

## Bug 3 - Frontend: Kesalahan Ketik Key `localStorage` pada Interceptor

**Lapisan:** Frontend

**Gejala:** Setelah Bug 1 & 2 diperbaiki, login berhasil (form login berganti menjadi form tambah mahasiswa). Namun saat mencoba menambah data mahasiswa baru, muncul pesan gagal / `401 Unauthorized` - padahal Anda sudah login.

**Cara menemukan:** Buka Network tab saat menekan tombol "Tambah", periksa tab Headers pada request POST `/mahasiswa` - header `Authorization` tidak ada sama sekali, padahal seharusnya berisi `Bearer <token>`.

**Akar masalah:**
- React (`react/src/api/axiosInstance.js`): `localStorage.getItem("Token")` - seharusnya `"token"` (huruf kecil semua), sesuai key yang dipakai saat menyimpan token di `LoginForm.jsx` (`localStorage.setItem("token", ...)`).
- Angular (`angular/src/app/interceptors/auth.interceptor.ts`): `localStorage.getItem('Token')` - seharusnya `'token'`, sesuai key yang dipakai saat menyimpan token di `login-form.component.ts` (`localStorage.setItem('token', ...)`).

Karena key yang dibaca interceptor tidak cocok dengan key yang dipakai saat menyimpan token, `localStorage.getItem(...)` selalu mengembalikan `null`, sehingga header `Authorization` tidak pernah disertakan pada request mana pun - meski pengguna sudah berhasil login.

**Perbaikan:** Samakan key menjadi `"token"` (React) / `'token'` (Angular) pada baris `localStorage.getItem(...)` di dalam interceptor.

## Ringkasan

| # | Lapisan | Bug | Gejala Awal |
|---|---|---|---|
| 1 | Frontend (config) | Port API salah pada `.env.example` / `environment.development.ts` | Semua data gagal dimuat (`ERR_CONNECTION_REFUSED`) |
| 2 | Backend | Urutan argumen `bcrypt.compare` terbalik | Login selalu gagal walau kredensial benar |
| 3 | Frontend | Key `localStorage` salah ketik pada interceptor (`"Token"` vs `"token"`) | Aksi setelah login (tambah data) selalu `401` |

Urutan ini sengaja dirancang berlapis: memperbaiki satu bug baru mengungkap gejala bug berikutnya - sama seperti debugging pada aplikasi sungguhan, di mana Anda jarang melihat semua masalah sekaligus di awal.
