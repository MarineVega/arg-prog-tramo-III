const ArchivosController = {};

const rutaPrincipal = __dirname + '/../../tmp/';

ArchivosController.subirArchivo = (req, res) => {
    //console.log(req.files.miArchivo);

    try { 
        const archivo = req.files.miArchivo;
        const rutaGuardar = rutaPrincipal + archivo.name;

        return archivo.mv(rutaGuardar, function(err){
            if (err) {
                return res.status(500).json({ error: err });
            } else {
            res.json({ mensaje: 'El archivo se subió correctamente' });
            }
         });
    } catch(err) {
        return res.status(500).json({ error: err });
    }

    //Pruebo que ingrese a este endpoint y que el controlador no de error 
    //return res.json({ mensaje: 'Éxito'});
};

module.exports = ArchivosController;
