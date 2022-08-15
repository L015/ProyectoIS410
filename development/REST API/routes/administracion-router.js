var express =require('express');
var router = express.Router();
var usuarioModel=require('../models/usuario.schema');
var mongoose=require('mongoose');


router.use(express.static('A&L administracion'));
router.get('/usuarios',function(req,res){
    usuarioModel.find({}).then((data)=>{
        res.send(data);
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    })
})

module.exports = router;