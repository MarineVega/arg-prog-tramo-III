require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const usuarioRouter = require('./routes/UsuarioRouter.js');
const autenticacionRouter = require('./routes/AutenticacionRouter.js');

const app = express();
const PORT = 3000;

//Middleware
app.use(bodyParser.json());

app.use(usuarioRouter);
app.use(autenticacionRouter);

app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);

  //Muestro variables de entorno
  /*
  console.log(process.env);  
  console.log(process.env.DB_USER);
  */
});
