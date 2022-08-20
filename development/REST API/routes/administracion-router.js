var express =require('express');
var usuarioSchema = require('../models/usuario.schema');
var empresaSchema = require('../models/empresas.schema');
var productoSchema = require('../models/productos.schema');
var pedidosproductosSchema = require('../models/pedidosproductos.schema');
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');
var router = express.Router();


router.use(express.static('A&L administracion'));

router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.get('/usuarios/',function(req,res){
    usuarioSchema.find({}).then((data)=>{
        res.send(data);
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    })
});
router.put('/usuarios/:id/:validacion',function(req,res){
    usuarioSchema.updateOne({"_id":req.params.id},{$set:{"validado":req.params.validacion}}).then((data)=>{
        res.send(data);
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    })
});

router.get('/empresas/',function(req,res){
    empresaSchema.find({}).then((data)=>{
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
    productoSchema.find({}).then((data)=>{
        res.send(data);
        res.end();
    })
    .catch((error)=>{
        res.send(error);
        res.end();
    })
});



router.post('/nuevaEmpresa/' , function(req,res){
    empresaSchema.insertMany(req.body)
    .then((data)=>{
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    });
    
    });

router.post('/nuevoProducto/' , function(req,res){
productoSchema.insertMany(req.body)
.then((data)=>{
    res.send(data);
    res.end();
}).catch((error)=>{
    res.send(error);
    res.end();
});

});



router.delete('/productos/:id/' , function(req,res){
    productoSchema.remove({"_id": req.params.id},true)
    .then((data)=>{
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    }); 
    
    });


module.exports = router;