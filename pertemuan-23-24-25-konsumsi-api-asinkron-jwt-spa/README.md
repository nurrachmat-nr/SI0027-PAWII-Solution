# Pertemuan 23-24-25 - Konsumsi API Asinkron (Axios/Fetch) & Autentikasi JWT dari SPA

Solusi referensi untuk materi slide `Materi-Pertemuan-23-24-25-Konsumsi-API-Asinkron-JWT-SPA.pptx`.

## Tujuan

Menghubungkan aplikasi React & Angular dari Pertemuan 17-22 ke **backend sungguhan** (Pertemuan 13-14): mengambil & mengirim data lewat Axios (React) / HttpClient (Angular), menangani status loading/error, login dari SPA, dan menyertakan token JWT otomatis lewat interceptor. Disediakan dalam **dua varian stack** - pilih salah satu sesuai stack project akhir Anda.

## Struktur

```
pertemuan-23-24-25-konsumsi-api-asinkron-jwt-spa/
├── react/     # React (Vite) - solusi referensi lengkap
└── angular/   # Angular Standalone - solusi referensi lengkap
```

Component tree bertambah satu komponen baru: `App`/`AppComponent` -> `PageHeader`, **`LoginForm`**/`MahasiswaForm` (bergantian sesuai status login), `SearchBar`, `MahasiswaList` -> `MahasiswaCard`. Data mahasiswa **tidak lagi statis** - diambil & disimpan lewat backend Pertemuan 13-14 yang sungguhan.

## Menjalankan Backend (Wajib Dijalankan Lebih Dahulu)

Kedua frontend di folder ini memanggil backend Pertemuan 13-14. Jalankan itu terlebih dahulu:

```bash
cd ../pertemuan-13-14-autentikasi-jwt-keamanan-api
npm install
cp .env.example .env   # isi MONGODB_URI & JWT_SECRET
npm start
# lalu daftarkan akun untuk login dari SPA:
curl -X POST http://localhost:3000/auth/register -H "Content-Type: application/json" -d '{"username":"dosen1","password":"rahasia123"}'
```

## Menjalankan Frontend

**React (Vite):**

```bash
cd react
cp .env.example .env   # VITE_API_BASE_URL harus menunjuk ke backend di atas
npm install
npm run dev
```

**Angular Standalone:**

```bash
cd angular
npm install
npm start
```

Alur pemakaian: buka aplikasi -> daftar mahasiswa tampil dari GET /mahasiswa (publik) -> login dengan akun yang didaftarkan di atas -> form "Tambah Mahasiswa" muncul -> data baru dikirim lewat POST /mahasiswa dengan token disertakan otomatis.

Starter kit latihan (berisi `// TODO` baru Axios/HttpClient GET/POST & login) tersedia di repositori terpisah [SI0027-PAWII-Project](https://github.com/nurrachmat-nr/SI0027-PAWII-Project).

## Kaitan dengan Tugas Project Mandiri

Folder ini adalah latihan pendamping di kelas menggunakan entitas contoh (`mahasiswa`), **bukan** jawaban dari Tugas Project Mandiri pada slide materi (menghubungkan **project akhir Anda sendiri** ke backend Anda sendiri, lengkap dengan autentikasi JWT). Tugas tersebut dinilai secara terpisah.
