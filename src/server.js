require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const usuarioRouter = require('./routes/UsuarioRouter.js');
const autenticacionRouter = require('./routes/AutenticacionRouter.js');
const archivoRouter = require('./routes/ArchivoRouter.js');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(fileUpload());

// Rutas
app.use(usuarioRouter);
app.use(autenticacionRouter);
app.use(archivoRouter);

app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);

  //Muestro variables de entorno
  /*
  console.log(process.env);  
  console.log(process.env.DB_USER);
  */
});
