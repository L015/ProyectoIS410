var express= require('express');
var motoristasRoutes = require('./routes/motoristas-router');
var landingPageRoutes = require('./routes/landingPage-router');
var administracionRoutes = require('./routes/administracion-router');



var app = express();

app.use('/motoristas',motoristasRoutes);
app.use('/',landingPageRoutes);
app.use('/administracion',administracionRoutes);


app.listen(8888,function(){
console.log('servidor desplegado');
});