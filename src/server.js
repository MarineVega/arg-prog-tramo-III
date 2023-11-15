require('dotenv').config();

const express = require('express');
const usuarioRouter = require('./routes/UsuarioRouter.js');

const app = express();

const PORT = 3000;
/*
app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});
*/

app.use(usuarioRouter);

app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);

  //Muestro variables de entorno
  /*
  console.log(process.env);  
  console.log(process.env.DB_USER);
  */
});
