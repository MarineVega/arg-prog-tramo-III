//Traigo el módulo de rutas que utiliza express
const usuarioRouter = require('express').Router();

//Acá recibo el objeto completo, sin desestructurar, lo desestructuro en cada función.
//const UsuariosController = require{'./../controllers/UsuariosController.js'};

//Puedo recibir el objeto y desestructurarlo:
const { verUsuarios ,
        verUsuario ,
        crearUsuario ,
        editarUsuario ,
        eliminarUsuario ,
} = require('./../controllers/UsuariosController.js');


// Ver usuarios
//get post put y delete son métodos
usuarioRouter.get('/usuarios', verUsuarios);

// Ver usuarios
usuarioRouter.get('/usuario', verUsuario);

// Crear usuario
usuarioRouter.post('/usuario', crearUsuario);

// Editar usuario
usuarioRouter.put('/usuario', editarUsuario);

// Eliminar usuario
usuarioRouter.delete('/usuario', eliminarUsuario);

module.exports = usuarioRouter;
