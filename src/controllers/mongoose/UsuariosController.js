const UsuarioModel = require('./../../models/mongoose/UsuarioModel.js');

const UsuariosController = {}

// Ver usuarios
UsuariosController.verUsuarios = async (req, res) => {
     try {
        const listaUsuarios = await UsuarioModel.find();

        return res.json(listaUsuarios);     

    } catch (error) {
        console.log(error);
        return res.status(500).json({ 
            mensaje: 'Ocurrió un error interno',
            error : error
        });        
    }   
};

// Ver usuario
UsuariosController.verUsuario = async (req, res) => {
        try {
            const { id } = req.params;

            const usuarioEncontrado = await UsuarioModel.findById(id);
   
            return res.json(usuarioEncontrado);     
   
       } catch (error) {
            let mensaje =  'Ocurrió un error interno al intentar obtener el usuario';
 
            if (error.kind === 'ObjectId') {
                mensaje = 'No se pudo obtener el usuario';
            }

           return res.status(500).json({ 
               mensaje: mensaje,
               error : error
           });        
       }   
   };

// Crear usuario
UsuariosController.crearUsuario = async (req, res) => {
    try {
        const { nombre, apellido } = req.body;

        const nuevoUsuario = new UsuarioModel({
            nombre: nombre,
            apellido: apellido,
        });

        await nuevoUsuario.save();

        return res.json({mensaje: 'Usuario creado con éxito'}); 

    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno al intentar crear un usuario',
            error: error
        });        
    };     
};

// Editar usuario
UsuariosController.editarUsuario = async (req, res) => {
    try {
        const { id, nombre, apellido } = req.body;

        await UsuarioModel.findByIdAndUpdate(
            id,
            { nombre: nombre, apellido: apellido }
        );

        

    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno al intentar editar el usuario',
            error: error
        });        
    };
};

// Eliminar usuario
UsuariosController.eliminarUsuario = async (req, res) => {
    try {
        const { id } = req.body;

        await UsuarioModel.findByIdAndDelete(id);
        
        return res.json({mensaje: 'Usuario eliminado con éxito'}); 

    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno al intentar eliminar el usuario',
            error: error
        });    
    };   
};

//Exporto
module.exports = UsuariosController;
