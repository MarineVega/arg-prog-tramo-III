const {
    //verUsuarios, tengo q cambiarle el nombre (verUsuarios) para utilizarlo abajo con otro nombre, porque ya lo estoy usando en el objeto que recibo --> lo renombro a verUsuariosMongoose
    verUsuarios: verUsuarios,
    crearUsuario: crearUsuario,
    editarUsuario: editarUsuario,
    eliminarUsuario: eliminarUsuario,
    verUsuario: verUsuario,
} = require('./../controllers/mongoose/UsuariosController.js');

// Ver usuarios (Mongoose)
usuarioRouter.get('/usuarios',verUsuarios);

// Ver usuario (Mongoose)
usuarioRouter.get('/usuario/:id', verUsuario);

// Crear usuario (Mongoose)
usuarioRouter.post('/usuario', crearUsuario);

// Editar usuario (Mongoose)
usuarioRouter.put('/usuario', editarUsuario);

// Eliminar usuario (Mongoose)
usuarioRouter.delete('/usuario', eliminarUsuario);

module.exports = usuarioRouter;



//Traigo el módulo de rutas que utiliza express
//const usuarioRouter = require('express').Router();

//Acá recibo el objeto completo, sin desestructurar, lo desestructuro en cada función.
//const UsuariosController = require{'./../controllers/UsuariosController.js'};

//Puedo recibir el objeto y desestructurarlo:
// const { verUsuarios ,
//         verUsuario ,
//         crearUsuario ,
//         editarUsuario ,
//         eliminarUsuario ,
// } = require('./../controllers/UsuariosController.js');

// const {
//     //verUsuarios, tengo q cambiarle el nombre (verUsuarios) para utilizarlo abajo con otro nombre, porque ya lo estoy usando en el objeto que recibo --> lo renombro a verUsuariosMongoose
//     verUsuarios: verUsuariosMongoose,
//     crearUsuario: crearUsuarioMongoose,
//     editarUsuario: editarUsuarioMongoose,
//     eliminarUsuario: eliminarUsuarioMongoose,
//     verUsuario: verUsuarioMongoose,
// } = require('./../controllers/mongoose/UsuariosController.js');

// Ver usuarios
//get post put y delete son métodos
// usuarioRouter.get('/usuarios', verUsuarios);

// // Ver usuario
// usuarioRouter.get('/usuario/:id', verUsuario);

// // Crear usuario
// usuarioRouter.post('/usuario', crearUsuario);

// // Editar usuario
// usuarioRouter.put('/usuario', editarUsuario);

// // Eliminar usuario
// usuarioRouter.delete('/usuario', eliminarUsuario);

/* ***************************************************************************/

// // Ver usuarios (Mongoose)
// usuarioRouter.get('/m/usuarios',verUsuariosMongoose);

// // Ver usuario (Mongoose)
// usuarioRouter.get('/m/usuario/:id', verUsuarioMongoose);

// // Crear usuario (Mongoose)
// usuarioRouter.post('/m/usuario', crearUsuarioMongoose);

// // Editar usuario (Mongoose)
// usuarioRouter.put('/m/usuario', editarUsuarioMongoose);

// // Eliminar usuario (Mongoose)
// usuarioRouter.delete('/m/usuario', eliminarUsuarioMongoose);

