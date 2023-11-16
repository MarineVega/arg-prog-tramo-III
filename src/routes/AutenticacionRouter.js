//Traigo el módulo de rutas que utiliza express
const AutenticacionRouter = require('express').Router();
const { 
    autenticar,
    registrar,
    verificarToken,
} = require('../controllers/AutenticacionController.js');

AutenticacionRouter.post('/autenticar', autenticar);

AutenticacionRouter.post('/verificarToken', verificarToken);

module.exports = AutenticacionRouter