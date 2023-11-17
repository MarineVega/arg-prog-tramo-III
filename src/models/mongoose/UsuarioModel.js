const mongoose = require('mongoose');
const usuarioRouter = require('../../routes/UsuarioRouter');

const UsuarioSchema = new mongoose.Schema({  
  nombre: String,
  apellido: String
});

const UsuarioModel = mongoose.model('usuario', UsuarioSchema);

module.exports = UsuarioModel;