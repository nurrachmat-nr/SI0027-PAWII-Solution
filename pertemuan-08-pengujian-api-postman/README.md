# Pertemuan 8 - Pengujian API dengan Postman Automation

Solusi referensi untuk materi slide `Materi-Pertemuan-08-Pengujian-API-Postman-Automation.pptx`.

## Tujuan

Membuat Postman Collection beserta automated test script (assertion) untuk menguji RESTful API `mahasiswa` (hasil Pertemuan 6-7), lalu menjalankannya melalui Collection Runner maupun command line (Newman).

## Struktur

```
pertemuan-08-pengujian-api-postman/
├── PAWII-Mahasiswa-API.postman_collection.json
├── development.postman_environment.json
└── package.json
```

## Isi Collection

3 request yang saling berantai (chaining) melalui environment variable `mahasiswaId`:

1. **GET All Mahasiswa** - memeriksa status code 200 & response berupa array.
2. **POST Tambah Mahasiswa** - memeriksa status code 201, menyimpan `id` hasil response ke `mahasiswaId`.
3. **GET Satu Mahasiswa** (`{{mahasiswaId}}`) - memeriksa status code 200 & properti `nama` pada data.

## Menjalankan

**Prasyarat:** jalankan API `mahasiswa` (Pertemuan 6-7) di `http://localhost:3000` terlebih dahulu:

```bash
cd ../pertemuan-06-07-arsitektur-mvc-layered
npm install
npm start
```

**Opsi A - Melalui aplikasi Postman:**

Impor `PAWII-Mahasiswa-API.postman_collection.json` dan `development.postman_environment.json` ke Postman, pilih Environment "PAWII Development", lalu jalankan lewat Collection Runner.

**Opsi B - Melalui command line (Newman):**

```bash
npm install
npm test
```

Starter kit latihan (tab Tests berisi `// TODO`) tersedia di repositori terpisah [SI0027-PAWII-Project](https://github.com/nurrachmat-nr/SI0027-PAWII-Project).

## Kaitan dengan Tugas Project Mandiri (Tugas 2)

Folder ini adalah latihan pendamping di kelas menggunakan entitas contoh (`mahasiswa`), **bukan** jawaban dari Tugas 2/Tugas Project Mandiri pada slide materi (membuat Postman Collection & automated test script untuk RESTful API **project akhir Anda sendiri**). Tugas tersebut dinilai secara terpisah.
