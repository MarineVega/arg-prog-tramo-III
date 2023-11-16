const nodemailer = require("nodemailer");

const EmailController = {};

const transporter = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 587,
    //secure: false,
    auth: {
        user: 'postmaster@sandboxdff14eba017b424992b4c4ef4f0e2d21.mailgun.org',
        pass: 'hola123',
    },
});


//EmailController.enviarEmail = (req, res) => {
    //console.log(transporter);

EmailController.enviarEmail = async (req, res) => {
/*
    const info = await transporter.sendMail({
        from: '"Equipo de Argentina Programa" <argentina@programa.com>', 
        to: "marinev33@hotmail.com",
        subject: "Bienvenido",          //texto plano
        html: "<b>Prueba de envío de email</b>", //cuerpo en HTML
    });

    console.log("Message sent: %s", info.messageId);
*/

    transporter.verify(function(error, success){
        if(error) {
            console.log(error);
        } else {
            console.log("Server is... ");
        }

    });

    
    return res.json({ mensaje: 'Ingresó correctamente' });

};

module.exports = EmailController;