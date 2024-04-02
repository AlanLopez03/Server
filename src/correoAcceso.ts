class CorreoController
{

}
export const usuariosController = new CorreoController();
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

var email = require("emailjs/email");

function enviarCorreo(body: any) { 
    var server = email.server.connect( {
        user: "destellojoyeria3@gmail.com",
        password:"vbuc itgi wucg cava",
        host: "smtp.gmail.com",
        tls: {
            rejectUnauthorized: false
        }
    });

    //Tokenizamos el correo para poder ponerlo en la liga
    var correo = body.Email;
    const token : string = jwt.sign(correo, process.env.TOKEN_SECRET || 'prueba');
    console.log(token);


    var message = {
        from: "destellojoyeria3@gmail.com",
        to: "<" + body.Email + ">",
        bbc: "",
        subject: "Reestablece tu contraseña",
        attachment: [
            {data: `Hemos recibido una solicitud para reestablecer tu contraseña.<p>
            <a href="http://localhost:4200/reestablecerContrasena/${token}">Click Aquí<a/>`, alternative: true }
        ]
    };

    server.send(message, function(err: any, message: any) {
        if (err) {
            console.error("Error sending email:", err);
        } else {
            console.log("Email sent successfully!");
        }
    });

}

module.exports = enviarCorreo;