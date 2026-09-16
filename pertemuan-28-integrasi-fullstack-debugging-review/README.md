# Pertemuan 28 - Integrasi Full Stack, Debugging & Review Proyek

Solusi referensi untuk materi slide `Materi-Pertemuan-28-Integrasi-Fullstack-Debugging-Review.pptx`.

## Tujuan

Berlatih menelusuri dan memperbaiki bug pada aplikasi full stack berarsitektur decoupled (frontend SPA <-> backend API <-> database), menggunakan aplikasi Mahasiswa yang sama dari Pertemuan 13-27. Disediakan dalam **dua varian stack frontend** - pilih salah satu sesuai stack project akhir Anda.

## Berbeda dari Pertemuan Sebelumnya

Pertemuan ini **tidak menambahkan fitur aplikasi baru**. Folder ini berisi kode pembanding **bebas bug** - dipakai sebagai acuan setelah mahasiswa mencoba menemukan & memperbaiki 3 bug tersembunyi pada mini-project (repositori [SI0027-PAWII-Project](https://github.com/nurrachmat-nr/SI0027-PAWII-Project)), bukan untuk dikerjakan langsung.

## Struktur

```
pertemuan-28-integrasi-fullstack-debugging-review/
├── DEBUGGING.md   # Kunci jawaban: gejala, akar masalah & perbaikan tiap bug (baca setelah mencoba sendiri)
├── backend/       # Disalin dari Pertemuan 26-27 - bebas bug (pembanding)
├── react/         # React (Vite) - bebas bug (pembanding)
└── angular/       # Angular Standalone - bebas bug (pembanding)
```

**Catatan penting:** folder ini adalah salinan mandiri dari `pertemuan-26-27-deployment-backend-frontend/`, bukan referensi langsung - folder Pertemuan 26-27 itu sendiri tidak disentuh. `backend/` dipakai bersama oleh kedua varian frontend (satu backend, pilih salah satu frontend sesuai stack Anda).

## Cara Menggunakan

1. Jalankan `backend/` (lihat README di dalamnya untuk konfigurasi `.env`).
2. Jalankan `react/` **atau** `angular/` (pilih salah satu, sesuai stack Anda).
3. Mahasiswa mengikuti metodologi debugging dari slide materi pada mini-project di [SI0027-PAWII-Project](https://github.com/nurrachmat-nr/SI0027-PAWII-Project) untuk menemukan **3 bug** yang tersebar di lapisan berbeda, membandingkan hasilnya dengan kode bebas bug di sini bila diperlukan.
4. Setelah selesai (atau benar-benar mentok), baca `DEBUGGING.md` untuk mencocokkan hasil temuan.

## Kaitan dengan Tugas Project Mandiri

Folder ini adalah latihan pendamping di kelas menggunakan entitas contoh (`mahasiswa`), **bukan** jawaban dari Tugas Project Mandiri pada slide materi (melakukan review arsitektur & debugging pada **project akhir Anda sendiri**). Tugas tersebut dinilai secara terpisah, dan tidak memiliki daftar bug yang sudah diketahui sebelumnya - Anda perlu menerapkan checklist review dan metodologi debugging yang sama untuk menemukan masalah nyata pada project Anda.
