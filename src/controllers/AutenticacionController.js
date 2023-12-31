const jwt = require('jsonwebtoken');
const UsuarioModel = require('./../models/UsuarioModel.js');

const AutenticacionController = {};

const JWT_KEY = process.env.JWT_KEY;

// const usuarios = [
//     { id: 1, usuario: 'Lord', contrasenia: '123456'},
//     { id: 2, usuario: 'Lady', contrasenia: 'abcdef'},
// ];

AutenticacionController.autenticar = async (req, res) => {
    
    try {
        const { usuario, psw } = req.body;

        const usuarioEncontrado = await UsuarioModel.findOne({ where: { usuario, psw } });

        if (!usuarioEncontrado) {
            return res.status(404).json({ mensaje: 'El usuario no fue encontrado.' });
        }

        const datos = {
            id: usuarioEncontrado._id,
            usuario: usuarioEncontrado._usuario,
            nombre: usuarioEncontrado._nombre,
            apellido: usuarioEncontrado._apellido,
        }

        let token = jwt.sign(datos, JWT_KEY);

        res.json({ token: token, datos: datos });   
        
    } catch (error) {
        return res.status(500).json({mensaje: 'Se produjo un error interno.' });
    }      
};

AutenticacionController.registrar = (req, res) => {
    // Simular registro    
};

AutenticacionController.verificarToken = (req, res) => {
    const token = req.body.token;   
    
    try {
        let desencriptado = jwt.verify(token, JWT_KEY);

        res.json({ datos: desencriptado });
    } catch (error) {
        res.status(500).json({
            mensaje: "Se ha generado un error",
            error: error,
        });
    }    
};

module.exports = AutenticacionController;
