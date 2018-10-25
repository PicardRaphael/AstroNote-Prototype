const mongoose = require('mongoose');

// Création du schéma pour les Notes
const NoteSchema = new mongoose.Schema({
  author: String,
  title: String,
  content: String,
});

// Création du Model pour les Notes
const NoteModel = mongoose.model('notes', NoteSchema);

module.exports = NoteModel;
