var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    nombreProducto : String,
    precio : Number,
    descripcion: String,
    categoria: String,
    empresa: String,
    img: String,
});
                                
                                //nombre de la coleccion
module.exports = mongoose.model('productos', esquema);
                                            //el esquema que creamos