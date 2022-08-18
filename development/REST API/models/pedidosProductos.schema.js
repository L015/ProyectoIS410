var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    numeroPedido: Number,
    nombreProducto:   String,  
    precio:    Number,  
    cantidad: Number,
    img: String
});
                                
                                //nombre de la coleccion
module.exports = mongoose.model('pedidosproductos', esquema);