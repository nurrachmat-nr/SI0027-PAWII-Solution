# Pertemuan 1 - Full Stack Development & Arsitektur Aplikasi Web Decoupled

Solusi referensi untuk materi slide `Materi-Pertemuan-01-Full-Stack-Arsitektur-Decoupled.pptx`.

## Tujuan

Mendemonstrasikan secara langsung perbedaan antara:

- **Arsitektur Monolitik** - server merender tampilan HTML langsung ke browser.
- **Arsitektur Decoupled** - backend hanya menyediakan REST API (JSON), frontend berdiri sendiri dan mengonsumsi API tersebut.

## Struktur

```
pertemuan-01-full-stack-arsitektur-decoupled/
├── monolitik/
└── decoupled/
    ├── backend/
    └── frontend/
```

## Menjalankan

**1. Arsitektur Monolitik**

```bash
cd monolitik
npm install
npm start
# buka http://localhost:3000/produk
```

**2. Arsitektur Decoupled**

```bash
# Terminal 1 - backend
cd decoupled/backend
npm install
npm start
# API tersedia di http://localhost:4000/api/produk

# Terminal 2 - frontend (contoh menggunakan http-server atau ekstensi Live Server)
cd decoupled/frontend
npx http-server -p 5500
# buka http://localhost:5500
```

Starter kit latihan (berisi `// TODO`) tersedia di repositori terpisah [SI0027-PAWII-Project](https://github.com/nurrachmat-nr/SI0027-PAWII-Project).

## Kaitan dengan Tugas Project Mandiri

Folder ini adalah solusi referensi latihan di kelas, **bukan** jawaban dari Tugas Project Mandiri pada slide materi (analisis arsitektur aplikasi nyata & proposal arsitektur project akhir). Tugas tersebut dikumpulkan secara terpisah melalui LMS.
