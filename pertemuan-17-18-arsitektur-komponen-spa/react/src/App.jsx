// Solusi Referensi - Pertemuan 17-18: Component tree
// App (state) -> PageHeader, SearchBar, MahasiswaList -> MahasiswaCard

import { useState } from "react";
import "./App.css";
import PageHeader from "./components/PageHeader";
import SearchBar from "./components/SearchBar";
import MahasiswaList from "./components/MahasiswaList";

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
    </div>
  );
}

export default App;
