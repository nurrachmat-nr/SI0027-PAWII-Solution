// Solusi Referensi - Pertemuan 5: Middleware & Konfigurasi Backend
// Melanjutkan RESTful API "mahasiswa" dari Pertemuan 3-4 dengan
// logger middleware, CORS, dotenv, dan error handling terpusat.

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware kustom: mencatat setiap request yang masuk
function logger(req, res, next) {
  const waktu = new Date().toISOString();
  console.log(`[${waktu}] ${req.method} ${req.url}`);
  next();
}
app.use(logger);

// Mengizinkan akses dari frontend pada origin berikut
app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

let mahasiswa = [
  { id: 1, nama: "Andi", jurusan: "Sistem Informasi" },
  { id: 2, nama: "Budi", jurusan: "Informatika" },
];

app.get("/mahasiswa", (req, res) => {
  res.json(mahasiswa);
});

app.get("/mahasiswa/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const data = mahasiswa.find((m) => m.id === id);
    if (!data) throw new Error("Data tidak ditemukan");
    res.json(data);
  } catch (err) {
    next(err);
  }
});

app.post("/mahasiswa", (req, res) => {
  const { nama, jurusan } = req.body;
  const baru = { id: mahasiswa.length + 1, nama, jurusan };
  mahasiswa.push(baru);
  res.status(201).json(baru);
});

app.put("/mahasiswa/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = mahasiswa.findIndex((m) => m.id === id);
  if (index === -1) return res.status(404).json({ message: "Data tidak ditemukan" });
  mahasiswa[index] = { ...mahasiswa[index], ...req.body };
  res.json(mahasiswa[index]);
});

app.delete("/mahasiswa/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = mahasiswa.findIndex((m) => m.id === id);
  if (index === -1) return res.status(404).json({ message: "Data tidak ditemukan" });
  mahasiswa.splice(index, 1);
  res.status(204).send();
});

// Middleware error-handling terpusat: harus di paling bawah
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Terjadi kesalahan pada server" });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
