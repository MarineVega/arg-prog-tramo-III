const UsuarioModel = require('./../models/UsuarioModel.js');

const UsuariosController = {}

const lista_usuarios = [
    { nombre: 'Juan' },
    { nombre: 'Carlos' }
];

// Ver usuarios
UsuariosController.verUsuarios = async (req, res) => {
    //return lista_usuarios;

    try {
        const listaUsuarios = await UsuarioModel.findAll();
        return res.json(listaUsuarios);     

    } catch (error) {
        return res.status(500).json({ 
            mensaje: 'Ocurrió un error interno',
            error : error
        });        
    }   
};

// Ver usuario
UsuariosController.verUsuario = async (req, res) => {
    // Ver un usuario en particular por nombre, apellido o ID
    // OJO!!!!! esto no está funcionando
    try {
        const usuario = await UsuarioModel.findOne({ where: { id: id } });
        return res.json({mensaje: usuario}); 
    } catch (error) {
        return res.status(500).json({ 
            mensaje: 'Ocurrió un error interno',
            error : error
        });        
    }      
   
    return res.json({mensaje: 'Ruta: ver usuario'});    
};

// Crear usuario
UsuariosController.crearUsuario = (req, res) => {
    return res.json({mensaje: 'Ruta: crear usuario'});   
};

// Editar usuario
UsuariosController.editarUsuario = (req, res) => {
    return res.json({mensaje: 'Ruta: editar usuario'});    
};

// Eliminar usuario
UsuariosController.eliminarUsuario = (req, res) => {
    return res.json({mensaje: 'Ruta: eliminar usuario'});   
};

//Exporto
module.exports = UsuariosController;