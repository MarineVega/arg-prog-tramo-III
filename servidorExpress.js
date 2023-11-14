const express = require('express');
const app = express();

const PORT = 3000;

//Rutas
app.get('/',(req, res)=> {
    res.send('Hola Mundo!');
});

app.get('/usuarios',(req, res)=> {
    res.send('Lista de usuarios');
});

app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`)
});
