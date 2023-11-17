//Traigo el módulo de rutas que utiliza express
const ArchivoRouter = require('express').Router();

//Importo los controladores -> ya desestructurado
const { 
    subirArchivo 
} = require('./../controllers/ArchivosController.js');

ArchivoRouter.post('/subirArchivo',subirArchivo);


module.exports = ArchivoRouter;