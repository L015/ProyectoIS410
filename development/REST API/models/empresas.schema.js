var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    nombreEmpresa : String,
    descripcion : String,
    calificacion: String,
    categoria: String,
    img: String,
});
                                
                                //nombre de la coleccion
module.exports = mongoose.model('empresas', esquema);
                                            //el esquema que creamos
                                            