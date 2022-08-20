var express= require('express');
var motoristasRoutes = require('./routes/motoristas-router');
var landingPageRoutes = require('./routes/landingPage-router');
var administracionRoutes = require('./routes/administracion-router');

var database = require('./utils/database');


var app = express();

app.use('/',landingPageRoutes);

app.use('/motoristas',motoristasRoutes);

app.use('/administracion',administracionRoutes);



app.listen(3005,function(){
console.log('servidor desplegado');
});