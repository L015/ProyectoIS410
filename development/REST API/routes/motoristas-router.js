var express =require('express');
var router = express.Router();
var productosModel=require('../models/pedidos.schema');
var mongoose=require('mongoose');

router.use(express.static('A&L motoristas'));


router.get('/pedidos/',function(req,res){
    productosModel.find({}).then((data)=>{
        res.send(data);
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    })
});


module.exports = router;