var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    numeroPedido: Number,
    nombreProducto:   String,  
    precio:   String,  
    cantidad: Number
});
                                
                                //nombre de la coleccion
module.exports = mongoose.model('pedidosproductos', esquema);
