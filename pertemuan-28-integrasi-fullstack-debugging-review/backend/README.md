# Solusi Referensi - Backend (Integrasi Full Stack & Debugging)

Disalin dari [`pertemuan-26-27-deployment-backend-frontend/backend/project-solution`](../../../pertemuan-26-27-deployment-backend-frontend/backend/project-solution). Kode aplikasi **identik**, **bebas bug**, dan sudah diuji - dipakai sebagai pembanding jika Anda ingin memverifikasi hasil debugging pada `mini-project`.

Lihat README utama pada folder [`pertemuan-28-integrasi-fullstack-debugging-review`](../README.md) untuk penjelasan skenario debugging dan cara memakai folder ini.

Jalankan cepat secara lokal:

```bash
cp .env.example .env   # isi MONGODB_URI, JWT_SECRET; FRONTEND_ORIGIN default cocok untuk React (Vite, port 5173)
npm install
npm start
```

**Catatan:** jika Anda menguji dengan frontend Angular (`ng serve`, port default 4200), ubah `FRONTEND_ORIGIN` pada `.env` menjadi `http://localhost:4200` sebelum menjalankan `npm start`.
