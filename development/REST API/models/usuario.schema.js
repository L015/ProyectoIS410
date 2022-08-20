var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    nombre : String,
    apellido : String,
    email: String,
    contraseña: String,
    tipoUsuario: String,
    validado: Boolean
});
                                
                                //nombre de la coleccion
module.exports = mongoose.model('usuarios', esquema);
                                            //el esquema que creamos
                                            