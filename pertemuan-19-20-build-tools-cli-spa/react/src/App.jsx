// Solusi Referensi - Pertemuan 19-20: menambahkan environment variable (VITE_API_BASE_URL)
// dari Pertemuan 17-18. Component tree: App (state) -> PageHeader, SearchBar, MahasiswaList -> MahasiswaCard
// Routing: "/" menampilkan daftar mahasiswa, "/tentang" menampilkan halaman Tentang

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import PageHeader from "./components/PageHeader";
import SearchBar from "./components/SearchBar";
import MahasiswaList from "./components/MahasiswaList";
import Tentang from "./components/Tentang";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const DATA_MAHASISWA = [
  { id: 1, nama: "Andi", nim: "2024001" },
  { id: 2, nama: "Budi", nim: "2024002" },
  { id: 3, nama: "Citra", nim: "2024003" },
];

function DaftarMahasiswaPage() {
  const [keyword, setKeyword] = useState("");

  const mahasiswaTersaring = DATA_MAHASISWA.filter((m) =>
    m.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <>
      <SearchBar keyword={keyword} onSearch={setKeyword} />
      <MahasiswaList mahasiswa={mahasiswaTersaring} />
      <footer className="env-footer">Terhubung ke: {API_BASE_URL}</footer>
    </>
  );
}

function App() {
  return (
    <div className="app">
      <PageHeader judul="Daftar Mahasiswa" />
      <Routes>
        <Route path="/" element={<DaftarMahasiswaPage />} />
        <Route path="/tentang" element={<Tentang />} />
      </Routes>
    </div>
  );
}

export default App;
