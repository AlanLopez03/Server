var email = require("emailjs/email");
console.log("hola");
module.exports = (formulario: any) => {
    var server = email.server.connect(
    {
        user: "destellojoyeria3@gmail.com",
        password:"vbuc itgi wucg cava",
        host: "smtp.gmail.com",
        ssl: true,
    });
    console.log("formulario.correo: " + formulario.correo);
    var message: any ={};
    message = {
        from: "destellojoyeria3@gmail.com",
        to: formulario.correo,
        bcc: "",
        subject: "Reestablece tu contraseña",
        attachment: [
            { data: `Hemos recibido una solicitud para reestablecer tu contraseña.
            Da click en el siguiente enlace:
            https://zoominformatica.com/blog/como-configurar-email-a-traves-de-una-contrasena-de-aplicacion-google/#google_vignette
            Si no fuiste tu, ignora este correo.`, alternative: true }
        ]
    };
    server.send(message, function(err:any, message:any) { console.log(err); });
    console.log("Llega despues.");
}