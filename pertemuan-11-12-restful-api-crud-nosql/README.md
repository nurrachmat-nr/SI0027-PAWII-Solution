# Pertemuan 11-12 - RESTful API CRUD untuk Data NoSQL

Solusi referensi untuk materi slide `Materi-Pertemuan-11-12-RESTful-API-CRUD-NoSQL.pptx`.

## Tujuan

Melengkapi RESTful API CRUD (Mahasiswa & Prodi, dari Pertemuan 9-10) dengan **filtering**, **sorting**, **pagination**, **projection**, dan **error handling terpusat** agar siap menangani data dalam jumlah besar.

## Struktur

```
pertemuan-11-12-restful-api-crud-nosql/
├── models/
├── controllers/
├── routes/
├── middlewares/
├── app.js
└── .env.example
```

## Fitur Baru pada Endpoint `/mahasiswa`

| Query Parameter | Contoh | Fungsi |
|---|---|---|
| `prodiId` | `?prodiId=<ObjectId>` | Filtering - hanya mahasiswa pada prodi tsb |
| `sort` | `?sort=nama` | Sorting berdasarkan field tertentu (ascending) |
| `page`, `limit` | `?page=2&limit=10` | Pagination - `limit` dibatasi maksimum 100 |
| `fields` | `?fields=nama,nim` | Projection - hanya field yang diminta yang dikirim |

Response `GET /mahasiswa` berbentuk `{ data, page, limit, total }`, bukan array langsung, agar frontend dapat menampilkan info halaman.

## Error Handling

`middlewares/errorHandler.js` menangani seluruh error secara terpusat:

- `ValidationError` (Mongoose) & `CastError` (format id salah) -> `400`
- Duplicate key (`error.code === 11000`, mis. `nim` yang sama) -> `400`
- Data tidak ditemukan (`throw { status: 404, ... }` pada controller) -> `404`
- Error tak terduga lainnya -> `500`, dicatat ke `console.error`, pesan ke client tetap generik (stack trace tidak dibocorkan)

`express-async-errors` di-require pada baris pertama `app.js` agar error pada fungsi `async` controller otomatis diteruskan ke `errorHandler`, tanpa `try/catch` manual.

## Menjalankan

**Prasyarat:** cluster MongoDB Atlas (paket gratis M0) beserta connection string-nya.

```bash
npm install
cp .env.example .env   # isi MONGODB_URI dengan connection string Atlas Anda
npm start
```

Starter kit latihan (berisi `// TODO` pada `getAll` & error handling) tersedia di repositori terpisah [SI0027-PAWII-Project](https://github.com/nurrachmat-nr/SI0027-PAWII-Project).

## Kaitan dengan Tugas Project Mandiri

Folder ini adalah latihan pendamping di kelas menggunakan entitas contoh (`mahasiswa`, `prodi`), **bukan** jawaban dari Tugas Project Mandiri pada slide materi (menambahkan filtering, sorting, pagination, dan error handling pada RESTful API **project akhir Anda sendiri**). Tugas tersebut dinilai secara terpisah.
