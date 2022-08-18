var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    numeroPedido: Number,
    nombreProducto:   String,  
    precio:   Number,  
    cantidad: Number
});
                                
                                //nombre de la coleccion
module.exports = mongoose.model('pedidosproductos', esquema);
                                            //el esquema que creamos
                                            