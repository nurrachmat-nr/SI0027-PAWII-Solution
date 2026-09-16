// Solusi Referensi - Pertemuan 19-20: menambahkan environment variable (VITE_API_BASE_URL)
// dari Pertemuan 17-18. Component tree: App (state) -> PageHeader, SearchBar, MahasiswaList -> MahasiswaCard

import { useState } from "react";
import "./App.css";
import PageHeader from "./components/PageHeader";
import SearchBar from "./components/SearchBar";
import MahasiswaList from "./components/MahasiswaList";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const DATA_MAHASISWA = [
  { id: 1, nama: "Andi", nim: "2024001" },
  { id: 2, nama: "Budi", nim: "2024002" },
  { id: 3, nama: "Citra", nim: "2024003" },
];

function App() {
  const [keyword, setKeyword] = useState("");

  const mahasiswaTersaring = DATA_MAHASISWA.filter((m) =>
    m.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="app">
      <PageHeader judul="Daftar Mahasiswa" />
      <SearchBar keyword={keyword} onSearch={setKeyword} />
      <MahasiswaList mahasiswa={mahasiswaTersaring} />
      <footer className="env-footer">Terhubung ke: {API_BASE_URL}</footer>
    </div>
  );
}

export default App;
