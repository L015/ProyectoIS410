var mongoose = require('mongoose');

//El nombre de la base de datos
let bd = 'mongodb+srv://pooPagina:poo1234@cluster0.wegnsc7.mongodb.net/proyectoPoo';


class database{
    constructor(){
        this.conectar();
    }
    conectar(){
        mongoose.connect(`${bd}`)
        .then(()=>{console.log('Se conecto a MongoDB')})
        .catch(error=>{console.log(error)});
        //Aqui no sabemos si ya se conecto a la base de datos
    }
}

module.exports = new database;