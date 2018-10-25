const mongoose = require('mongoose');

// Création du schéma pour les Users
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// Création du Model pour les Users
const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
