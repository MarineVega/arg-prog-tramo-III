 const { Sequelize } = require('sequelize');

 const DB_NAME = process.env.DB_NAME;
 const DB_USER = process.env.DB_USER;
 const DB_PASSWORD = process.env.DB_PASSWORD;
 const DB_HOST = process.env.DB_HOST;

 const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,    
    dialect : 'mysql',
 });

// Testing de conexión
const database = async () => {
   try {
      //await sequelize.authenticate();
      await sequelize.sync();          // uso sync para que, si la tabla NO existe, la crea con la configuración que usamos en UsuarioModel.js
      console.log('Conexión establecida con éxito.');
   } catch (error) {
      console.error('No se pudo conectar a la base de datos:', error);
   }
};

module.exports = { database, sequelize };
