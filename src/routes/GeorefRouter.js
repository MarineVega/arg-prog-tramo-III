//Traigo el módulo de rutas que utiliza express
const georefRouter = require('express').Router();
const { obtenerProvincias } = require('./../controllers/GeorefController.js');

georefRouter.get('/obtenerProvincias', obtenerProvincias);

module.exports = georefRouter;
