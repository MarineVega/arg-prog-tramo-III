require('dotenv').config();

const express = require('express');
const app = express();

const PORT = 3000;

//Rutas
app.get('/',(req, res)=> {
    res.send('Hola Mundo!');
});



app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);
  
  //Muestro variables de entorno
  /*
  console.log(process.env);  
  console.log(process.env.DB_USER);
  */
});
