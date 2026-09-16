// Solusi Referensi - Pertemuan 6-7: Layer Controller (Dosen)

const dosenModel = require("../models/dosenModel");

exports.getAll = (req, res) => {
  res.json(dosenModel.getAll());
};

exports.getById = (req, res) => {
  const id = parseInt(req.params.id);
  const data = dosenModel.getById(id);
  if (!data) return res.status(404).json({ message: "Tidak ditemukan" });
  res.json(data);
};

exports.create = (req, res) => {
  const baru = dosenModel.create(req.body);
  res.status(201).json(baru);
};
