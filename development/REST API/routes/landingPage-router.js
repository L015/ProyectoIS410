var express =require('express');
var usuarioSchema = require('../models/usuario.schema');
var empresaSchema = require('../models/empresas.schema');
var productoSchema = require('../models/productos.schema');
var categoriaSchema = require ('../models/categorias.schema');
var pedidosproductosSchema = require('../models/pedidosproductos.schema');
var pedidosSchema  = require('../models/pedidos.schema');
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');
var router = express.Router();


router.use(express.static('A&L_Landing_Page_y_Clientes'))

router.use(express.urlencoded({extended:true}))
router.use(express.json())

router.get('/usuarios', function(req,res){
    usuarioSchema.find({})
    .then((data)=>{
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    })
});

router.get('/empresas', function(req,res){
    empresaSchema.find({})
    .then((data)=>{
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    })
});


router.get('/productos', function(req,res){
    productoSchema.find({})
    .then((data)=>{
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    })
});


router.get('/productos/juguetes', function(req,res){
    productoSchema.find({categoria: "juguetes"})
    .then((data)=>{
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    })
});

router.get('/productos/electronicos', function(req,res){
    productoSchema.find({categoria: "electronicos"})
    .then((data)=>{
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    })
});

router.get('/productos/zapatos', function(req,res){
    productoSchema.find({categoria: "zapatos"})
    .then((data)=>{
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    })
});


router.get('/productos/:id', function(req,res){
    productoSchema.find({_id:req.params.id})
    .then((data)=>{
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    })
});


router.get('/categorias', function(req,res){
    categoriaSchema.find()
    .then((data)=>{
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    })
});

router.post('/registro' , function(req,res){
usuarioSchema.insertMany(req.body)
.then((data)=>{
    res.send(data);
    res.end();
}).catch((error)=>{
    res.send(error);
    res.end();
});

});

router.get('/login' , function(req,res){
    usuarioSchema.find({tipoUsuario: 'Cliente'})
    .then((data)=>{
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    });
    
    });


router.get('/pedidos' , function(req,res){
    pedidosproductosSchema.find()
    .then((data)=>{
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    });
    
    });


router.post('/agregarCarrito' , function(req,res){
    pedidosproductosSchema.insertMany(req.body)
    .then((data)=>{
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    });
    
    });

router.post('/agregarPedido' , function(req,res){
    pedidosSchema.insertMany(req.body)
    .then((data)=>{
        res.send(data);
        res.end();
    }).catch((error)=>{
        res.send(error);
        res.end();
    });
    
    });


module.exports = router;