var mongoose = require('mongoose');

var esquema = new mongoose.Schema({
    nombreCategoria: String,
    img: String
});
                                
                                //nombre de la coleccion
module.exports = mongoose.model('categorias', esquema);
                                            //el esquema que creamos
                                            