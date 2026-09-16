# Pertemuan 19-20 - Build Tools/CLI Modern untuk Proyek SPA

Solusi referensi untuk materi slide `Materi-Pertemuan-19-20-Build-Tools-CLI-SPA.pptx`.

## Tujuan

Melanjutkan aplikasi React & Angular dari Pertemuan 17-18 dengan menambahkan **environment variable** untuk menyimpan konfigurasi (alamat API) secara terpisah dari kode sumber, serta memahami perbedaan build **development** dan **production**. Disediakan dalam **dua varian stack** - pilih salah satu sesuai stack project akhir Anda.

## Struktur

```
pertemuan-19-20-build-tools-cli-spa/
├── react/     # React (Vite) - solusi referensi lengkap
└── angular/   # Angular Standalone - solusi referensi lengkap
```

Component tree identik dengan Pertemuan 17-18 (`App`/`AppComponent` -> `PageHeader`, `SearchBar`, `MahasiswaList` -> `MahasiswaCard`).

## Environment Variable pada Kedua Stack

| Stack | Berkas | Dipakai Saat | Cara Akses |
|---|---|---|---|
| React (Vite) | `.env` (nilai) / `.env.example` (contoh) | `npm run dev` & `npm run build` | `import.meta.env.VITE_API_BASE_URL` |
| Angular | `src/environments/environment.development.ts` | `ng serve` (mode development) | `environment.apiBaseUrl` |
| Angular | `src/environments/environment.ts` | `ng build` (mode production, default) | `environment.apiBaseUrl` |

Kedua aplikasi menampilkan nilai environment variable tsb pada bagian footer ("Terhubung ke: ..."), agar terlihat jelas alamat API yang sedang dipakai berbeda antara mode pengembangan dan production.

## Menjalankan

**React (Vite):**

```bash
cd react
cp .env.example .env
npm install
npm run dev
```

**Angular Standalone:**

```bash
cd angular
npm install
npm start              # mode development -> environment.development.ts
npm run build          # mode production  -> environment.ts, hasil di dist/
```

Starter kit latihan (berisi `// TODO` baru untuk environment variable) tersedia di repositori terpisah [SI0027-PAWII-Project](https://github.com/nurrachmat-nr/SI0027-PAWII-Project).

## Kaitan dengan Tugas Project Mandiri

Folder ini adalah latihan pendamping di kelas menggunakan data statis contoh, **bukan** jawaban dari Tugas Project Mandiri pada slide materi (menyiapkan environment variable & menjalankan build production untuk **project akhir Anda sendiri**). Tugas tersebut dinilai secara terpisah.
