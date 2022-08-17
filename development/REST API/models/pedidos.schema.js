var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    numeroPedido : String,
    nombreCliente : String,
    ubicacion: String,
    estado: String,
    conductor: String,
    fecha: String,
});
                                
                                //nombre de la coleccion
module.exports = mongoose.model('pedidos', esquema);
                                            //el esquema que creamos
                                            