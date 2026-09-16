# Pertemuan 6-7 - Arsitektur Backend Terstruktur (MVC/Layered)

Solusi referensi untuk materi slide `Materi-Pertemuan-06-07-Arsitektur-MVC-Layered.pptx`.

## Tujuan

Merefactor RESTful API `mahasiswa` (dari Pertemuan 3-4) dari satu file `app.js` menjadi struktur berlapis: **Route - Controller - Model**, lalu memperluasnya dengan modul baru (`Fakultas`, `Prodi`, `Dosen`) mengikuti pola yang sama.

## Struktur

```
pertemuan-06-07-arsitektur-mvc-layered/
├── app.js
├── routes/{mahasiswa,fakultas,prodi,dosen}Routes.js
├── controllers/{mahasiswa,fakultas,prodi,dosen}Controller.js
└── models/{mahasiswa,fakultas,prodi,dosen}Model.js
```

## Pemetaan Layer

| Layer | Contoh File | Tanggung Jawab |
|---|---|---|
| Route | `routes/mahasiswaRoutes.js` | Mendefinisikan endpoint & HTTP method |
| Controller | `controllers/mahasiswaController.js` | Menangani logika request-response |
| Model | `models/mahasiswaModel.js` | Mengelola struktur & akses data |

Pola yang sama diterapkan identik pada modul `fakultas`, `prodi`, dan `dosen`.

## Endpoint

| Modul | Endpoint | Relasi |
|---|---|---|
| Mahasiswa | `GET/POST /mahasiswa`, `GET /mahasiswa/:id` | - |
| Fakultas | `GET/POST /fakultas`, `GET /fakultas/:id` | Induk dari Prodi |
| Prodi | `GET/POST /prodi`, `GET /prodi/:id` | `fakultasId` → Fakultas; induk dari Dosen |
| Dosen | `GET/POST /dosen`, `GET /dosen/:id` | `prodiId` → Prodi |

## Menjalankan

```bash
npm install
npm start
# server berjalan di http://localhost:3000
```

```bash
curl http://localhost:3000/mahasiswa
curl http://localhost:3000/fakultas
curl http://localhost:3000/prodi
curl http://localhost:3000/dosen
curl -X POST http://localhost:3000/prodi -H "Content-Type: application/json" -d "{\"nama\":\"Manajemen Informatika\",\"jenjang\":\"D3\",\"fakultasId\":1}"
```

Semua endpoint di atas sudah diuji (GET semua/satu data, POST, dan kasus 404 untuk id yang tidak ditemukan). Starter kit latihan (hanya modul `mahasiswa`, berisi `// TODO`) tersedia di repositori terpisah [SI0027-PAWII-Project](https://github.com/nurrachmat-nr/SI0027-PAWII-Project).

## Kaitan dengan Tugas Project Mandiri (Kuis 1)

Tugas Project Mandiri pada slide materi meminta Anda untuk:

1. Merefactor RESTful API **project akhir Anda sendiri** menjadi struktur MVC/Layered.
2. Menambahkan 3 modul baru — `Prodi`, `Fakultas`, dan `Dosen` — masing-masing dengan file model, controller, dan route sendiri.

**Catatan penting:** folder ini mendemonstrasikan pola lengkap di atas (termasuk keempat modul beserta relasinya) menggunakan data akademik contoh sebagai referensi cara menyusun layer dan relasi antar modul. Ini **bukan pengganti** pengerjaan Tugas Project Mandiri Anda — tugas tetap harus diterapkan pada entitas dan basis kode **project akhir Anda sendiri** (bukan menyalin domain "mahasiswa/prodi/fakultas/dosen" ini), lalu dikumpulkan secara terpisah sebagai persiapan Kuis 1.
