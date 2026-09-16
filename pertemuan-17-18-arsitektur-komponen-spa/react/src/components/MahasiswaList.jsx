// Solusi Referensi - Pertemuan 17-18: Komponen induk, mengelola data & merender banyak MahasiswaCard

import MahasiswaCard from "./MahasiswaCard";

function MahasiswaList({ mahasiswa }) {
  if (mahasiswa.length === 0) {
    return <p className="empty">Tidak ada mahasiswa yang cocok.</p>;
  }

  return (
    <div className="mahasiswa-list">
      {mahasiswa.map((m) => (
        <MahasiswaCard key={m.id} nama={m.nama} nim={m.nim} />
      ))}
    </div>
  );
}

export default MahasiswaList;
