var express =require('express');
var router = express.Router();
var usuarioModel=require('../models/usuario.schema');
var empresasModel=require('../models/empresas.schema');
var productosModel=require('../models/productos.schema');
var mongoose=require('mongoose');


router.use(express.static('A&L administracion'));
router.get('/usuarios/',function(req,res){
    usuarioModel.find({}).then((data)=>{
        res.send(data);
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    })
});
router.put('/usuarios/:id/:validacion',function(req,res){
    usuarioModel.updateOne({"_id":req.params.id},{$set:{"validado":req.params.validacion}}).then((data)=>{
        res.send(data);
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    })
});

router.get('/empresas/',function(req,res){
    empresasModel.find({}).then((data)=>{
        res.send(data);
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    })
});
// router.put('/usuarios/:id/:validacion',function(req,res){
//     usuarioModel.updateOne({"_id":req.params.id},{$set:{"validado":req.params.validacion}}).then((data)=>{
//         res.send(data);
//         res.end();
//     })
//     .catch((error)=>{
//         res.send(error);
//         res.end();
//     })
// });


router.get('/productos/',function(req,res){
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