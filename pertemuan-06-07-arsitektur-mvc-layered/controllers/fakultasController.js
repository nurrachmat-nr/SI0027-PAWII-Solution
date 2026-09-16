// Solusi Referensi - Pertemuan 6-7: Layer Controller (Fakultas)

const fakultasModel = require("../models/fakultasModel");

exports.getAll = (req, res) => {
  res.json(fakultasModel.getAll());
};

exports.getById = (req, res) => {
  const id = parseInt(req.params.id);
  const data = fakultasModel.getById(id);
  if (!data) return res.status(404).json({ message: "Tidak ditemukan" });
  res.json(data);
};

exports.create = (req, res) => {
  const baru = fakultasModel.create(req.body);
  res.status(201).json(baru);
};
