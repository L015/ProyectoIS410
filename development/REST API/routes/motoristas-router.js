var express =require('express');
var router = express.Router();
var pedidoModel=require('../models/pedidos.schema');
var pedidoProductosModel=require('../models/pedidosproductos.schema');
var mongoose=require('mongoose');

router.use(express.static('A&L motoristas'));


router.get('/pedidos/',function(req,res){
    pedidoModel.find({}).then((data)=>{
        res.send(data);
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    })
});

router.get('/productosPedido/',function(req,res){
    pedidoProductosModel.find({}).then((data)=>{
        res.send(data);
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    })
});

router.put('/pedidos/:id/:nombre/:estado',function(req,res){
    console.log(req.params.id);
    pedidoModel.updateOne({"_id":req.params.id},{$set:{"conductor":req.params.nombre,"estado":req.params.estado}}).then((data)=>{
        res.send(data);
        res.end();
        
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    })
});



module.exports = router;