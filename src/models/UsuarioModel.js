const { DataTypes } = require('sequelize');

const { sequelize } = require('./../config/SequelizeConfig');

const UsuarioModel = sequelize.define('Usuario', {
    // Definición del modelo
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = UsuarioModel;

