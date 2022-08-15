var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    nombreProducto : String,
    precio : Number,
    descripcionProducto: String,
    categoria: String,
    empresa: String,
    img: String,
});
                                
                                //nombre de la coleccion
module.exports = mongoose.model('productos', esquema);
                                            //el esquema que creamos
                                            