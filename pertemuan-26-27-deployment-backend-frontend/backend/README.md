# Solusi Referensi - Backend (Deployment)

Dipindahkan dari [`pertemuan-13-14-autentikasi-jwt-keamanan-api/project-solution`](../../pertemuan-13-14-autentikasi-jwt-keamanan-api/project-solution). Kode aplikasi (routes/controllers/models/middlewares) **identik** dengan Pertemuan 13-14 - lihat README pertemuan tersebut untuk penjelasan lengkap endpoint & autentikasi JWT.

Lihat README utama pada folder [`pertemuan-26-27-deployment-backend-frontend`](../README.md) untuk penjelasan lengkap deployment.

## Yang Berbeda dari Pertemuan 13-14

- **CORS dibatasi ke satu origin** lewat environment variable `FRONTEND_ORIGIN` (`app.use(cors({ origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173" }))`), bukan lagi terbuka untuk semua origin.
- **`Procfile`** (`web: npm start`) ditambahkan sebagai referensi start command untuk Render/Railway.

Jalankan cepat secara lokal:

```bash
cp .env.example .env   # isi MONGODB_URI, JWT_SECRET & FRONTEND_ORIGIN
npm install
npm start
```
