function verOpcionesMotoristas(){


}

function iniciarSesion(){
    let email= document.getElementById('inicioEmail').value;
    let password = document.getElementById('InicoContraseña').value;

    $.ajax({
        url: "/administracion/usuarios", 
        method: "GET",
        dataType: "json",
        success:(res)=>{
          res.forEach(element => {
            if((element.email==email) && (element.contraseña==password)){
            //desaparecer modal,no ocupamos mongo, sino logica pura  
            }
            
          });       

        },
        error:(error)=>{
            console.log(error);
        } 
    });

}

var verInicioDeSesion = function(){

    let contenidoModal = document.getElementById('myModal');

    contenidoModal.innerHTML=`
    
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Inicio De Sesion</h5>
        </div>
        <div class="modal-body">

        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Direccion De correo Electronico</label>
                <input type="email" class="form-control" id="inicioEmail" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Constraseña</label>
                <input type="password" class="form-control" id="InicoContraseña">
            </div>

            </form>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-ver" onclick="iniciarSesion()" data-bs-dismiss="modal">Iniciar Sesion</button>
        </div>
        </div>
        </div>    
    `;



    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
}

verInicioDeSesion();

var llenarEmpresas = function(){
    let espacio = document.getElementById('empresas-productos-motoristas');
    let titulo = document.getElementById('nombre-titulo');
    titulo.innerHTML='Administrar Empresas';
    espacio.innerHTML=' ';

    $.ajax({
        url: "/administracion/empresas", 
        method: "GET",
        dataType: "json",
        success:(res)=>{
          res.forEach(element => {
            espacio.innerHTML+=`
            <div class="tarjeta">
            <section>
                <div class="titulo-tarjeta">
                    ${element.nombreEmpresa}
                </div>
                <div class="subtitulo-tarjeta">
                ${element.descripcion}
                </div>
            </section>
            <section>
                <button class="btn btn-ver" onclick="verModalAdministrarEmpresas('${element._id}')">Ver</button>
            </section>
        
        </div>
            `          
          });       

        },
        error:(error)=>{
            console.log(error);
        } 
    });

   let buscador = document.getElementById('buscador-container');
   buscador.innerHTML=`
   <button class="btn btn-aceptar" onclick="verModalAdministrarIngresarEmpresa()">Ingresar Nuevo</button>
                    <hr>
                    <input type="text" class="form-control" id="buscador" placeholder="buscar">
                    <hr>
                    <h6>Filtrar Por</h6>
                    <p>1 filtro</p>
                    <p>2 filtro</p>
                    <p>3 filtro</p>
                    <p>4 filtro</p>
                    <p>5 filtro</p>
   `;
}

var llenarProductos = function(){
    let espacio = document.getElementById('empresas-productos-motoristas');
    let titulo = document.getElementById('nombre-titulo');
    titulo.innerHTML='Administrar Productos';
    espacio.innerHTML=' ';


    $.ajax({
        url: "/administracion/productos", 
        method: "GET",
        dataType: "json",
        success:(res)=>{
          res.forEach(element => {
            espacio.innerHTML+=`
            <div class="tarjeta">
            <section>
                <div class="titulo-tarjeta">
                    ${element.nombreProducto}
                </div>
                <div class="subtitulo-tarjeta">
                ${element.descripcion}
                </div>
            </section>
            <section>
                <button class="btn btn-ver" onclick="verModalAdministrarProductos('${element._id}')">Ver</button>
            </section>
        
        </div>
            `            
          });       

        },
        error:(error)=>{
            console.log(error);
        } 
    });

   let buscador = document.getElementById('buscador-container');
   buscador.innerHTML=`
   <button class="btn btn-aceptar" onclick="verModalAdministrarIngresarProducto()">Ingresar Nuevo</button>
                    <hr>
                    <input type="text" class="form-control" id="buscador" placeholder="buscar">
                    <hr>
                    <h6>Filtrar Por</h6>
                    <p>1 filtro</p>
                    <p>2 filtro</p>
                    <p>3 filtro</p>
                    <p>4 filtro</p>
                    <p>5 filtro</p>
   `;
}

var llenarMotoristas = function(){

    let espacio = document.getElementById('empresas-productos-motoristas');
    let titulo = document.getElementById('nombre-titulo');
    titulo.innerHTML='Administrar Motoristas';
    espacio.innerHTML=' ';
    

    $.ajax({
        url: "/administracion/usuarios", 
        method: "GET",
        dataType: "json",
        success:(res)=>{
          res.forEach(element => {
            if((element.tipoUsuario=="Motorista")){

                espacio.innerHTML+=`
                <div class="tarjeta">
                <section>
                    <div class="titulo-tarjeta">
                        ${element.nombre + ' ' + element.apellido}
                    </div>
                    <div class="subtitulo-tarjeta">
                    email :  ${element.email}
                    </div>
                </section>
                <section>
                    <button class="btn btn-ver" onclick="verModalAdministrarMotoristas('${element._id}')">Ver</button>
                </section>
            
            </div>
                ` 
            }
            
          });       

        },
        error:(error)=>{
            console.log(error);
        } 
    });

   let buscador = document.getElementById('buscador-container');
   buscador.innerHTML=`
   <button class="btn btn-aceptar" onclick="verModalAdministrar()">Pedidos: (N)</button>
                    <hr>
                    <input type="text" class="form-control" id="buscador" placeholder="buscar">
                    <hr>
                    <h6>Filtrar Por</h6>
                    <p>1 filtro</p>
                    <p>2 filtro</p>
                    <p>3 filtro</p>
                    <p>4 filtro</p>
                    <p>5 filtro</p>
   `;
}

var verModalAdministrarMotoristas = function(myId){

   let contenidoModal = document.getElementById('myModal');
    let validTrue=true;
    let validFalse=false;


    $.ajax({
        url: "/administracion/usuarios", 
        method: "GET",
        dataType: "json",
        success:(res)=>{
          res.forEach(element => {
            if((element._id==myId)){
                contenidoModal.innerHTML=`
    
                <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Distintas Opciones a Administrar</h5>
                </div>
                <div class="modal-body">
                <div>Nombre: ${element.nombre}</div>
                <div>Apellido: ${element.apellido}</div>
                <div>Email: ${element.email}</div>
                <div>Contraseña: ${element.contraseña}</div>
                <div>Validado: ${element.validado}</div>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-cerrar" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-ver" onclick="actualizarValidado('${myId}','${validTrue}')" data-bs-dismiss="modal">Validar</button>
                <button type="button" class="btn btn-ver"  onclick="actualizarValidado('${myId}','${validFalse}')" data-bs-dismiss="modal">Invalidar</button>
                </div>
                </div>
                </div>    
            `;
        
            }
          });       

        },
        error:(error)=>{
            console.log(error);
        } 
    });


    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
}

function actualizarValidado(myId,validacion){
    $.ajax({
        url: `/administracion/usuarios/${myId}/${validacion}`, 
        method: "PUT",
        dataType: "json",
        success:(res)=>{
        },
        error:(error)=>{
            console.log(error);
        } 
    });
}


var verModalAdministrarIngresarEmpresa = function(){

    let contenidoModal = document.getElementById('myModal'); 
                 contenidoModal.innerHTML=`
     
                 <div class="modal-dialog">
                 <div class="modal-content">
                 <div class="modal-header">
                     <h5 class="modal-title" id="exampleModalLabel">Distintas Opciones a Administrar</h5>
                 </div>
                 <div class="modal-body">
                 <form>
                 <div class="mb-3">
                     <label for="exampleInputEmail1" class="form-label">Nombre De La Empresa</label>
                     <input type="email" class="form-control" id="nombreIngresarEmpresa" aria-describedby="emailHelp">
                 </div>
                 <div class="mb-3">
                     <label for="exampleInputPassword1" class="form-label">Descripcion De La Empresa</label>
                     <input type="text" class="form-control" id="descripcionIngresarEmpresa">
                 </div>
                 <div class="mb-3">
                 <label for="exampleInputPassword1" class="form-label">Calificacion</label>
                 <input type="text" class="form-control" id="calificacionIngresarEmpresa">
                 </div>
                 <div class="mb-3">
                 <label for="exampleInputPassword1" class="form-label">Categoria</label>
                 <input type="text" class="form-control" id="categoriaIngresarEmpresa">
                 </div>
                 <div class="mb-3">
                 <label for="exampleInputPassword1" class="form-label">Imagen</label>
                 <input type="text" class="form-control" id="imgIngresarEmpresa">
                </div>     
                 </form>
                 </div>
                 <div class="modal-footer">
                 <button type="button" class="btn btn-cerrar" data-bs-dismiss="modal">Cerrar</button>
                 <button type="button" class="btn btn-ver" onclick="btnIngresarEmpresa()" data-bs-dismiss="modal">Ingresar</button>
                 </div>
                 </div>
                 </div>    
             `;
         
 
 
     const myModal = new bootstrap.Modal(document.getElementById('myModal'));
     myModal.show();
 }
 
function btnIngresarEmpresa()  {

$.ajax({
    url: "/administracion/nuevaEmpresa", 
    method: "POST",
    data: {
      nombreEmpresa : document.getElementById('nombreIngresarEmpresa').value,
      descripcion : document.getElementById('descripcionIngresarEmpresa').value,
      calificacion: document.getElementById('calificacionIngresarEmpresa').value,
      categoria: document.getElementById('categoriaIngresarEmpresa').value,
      img: document.getElementById('imgIngresarEmpresa').value,
    },
    success:(res)=>{
        
        console.log(res);  
    },
    error:(error)=>{
        console.log(error);
    } 

});

 }

 var verModalAdministrarEmpresas = function(myId){

    let contenidoModal = document.getElementById('myModal');

 
     $.ajax({
         url: "/administracion/empresas", 
         method: "GET",
         dataType: "json",
         success:(res)=>{
           res.forEach(element => {
             if((element._id==myId)){
                 contenidoModal.innerHTML=`
     
                 <div class="modal-dialog">
                 <div class="modal-content">
                 <div class="modal-header">
                     <h5 class="modal-title" id="exampleModalLabel">Distintas Opciones a Administrar</h5>
                 </div>
                 <div class="modal-body">
                 <div>Nombre: ${element.nombreEmpresa}</div>
                 <div>Descripcion: ${element.descripcion}</div>
                 <div>Calificacion: ${element.calificacion}</div>
                 <div>Categoria: ${element.categoria}</div>
                 <div>Img: ${element.img}</div>
                 </div>
                 <div class="modal-footer">
                 <button type="button" class="btn btn-cerrar" data-bs-dismiss="modal">Cerrar</button>
                 </div>
                 </div>
                 </div>    
             `;
         
             }
           });       
 
         },
         error:(error)=>{
             console.log(error);
         } 
     });
 
 
     const myModal = new bootstrap.Modal(document.getElementById('myModal'));
     myModal.show();
 }

 var verModalAdministrarProductos = function(myId){

    let contenidoModal = document.getElementById('myModal');

 
     $.ajax({
         url: "/administracion/productos", 
         method: "GET",
         dataType: "json",
         success:(res)=>{
           res.forEach(element => {
             if((element._id==myId)){
                 contenidoModal.innerHTML=`
     
                 <div class="modal-dialog">
                 <div class="modal-content">
                 <div class="modal-header">
                     <h5 class="modal-title" id="exampleModalLabel">Distintas Opciones a Administrar</h5>
                 </div>
                 <div class="modal-body">
                 <div>Nombre: ${element.nombreProducto}</div>
                 <div>Descripcion: ${element.descripcion}</div>
                 <div>Precio: ${element.precio}</div>
                 <div>Categoria: ${element.categoria}</div>
                 <div>Empresa: ${element.empresa}</div>
                 <div>img: ${element.img}</div>
                 </div>
                 <div class="modal-footer">
                 <button type="button" class="btn btn-cerrar" data-bs-dismiss="modal">Cerrar</button>
                 
                 </div>
                 </div>
                 </div>    
             `;
         
             }
           });       
 
         },
         error:(error)=>{
             console.log(error);
         } 
     });
 
 
     const myModal = new bootstrap.Modal(document.getElementById('myModal'));
     myModal.show();
 }
 
 function verModalAdministrarIngresarProducto(){
    let contenidoModal = document.getElementById('myModal'); 
                 contenidoModal.innerHTML=`
     
                 <div class="modal-dialog">
                 <div class="modal-content">
                 <div class="modal-header">
                     <h5 class="modal-title" id="exampleModalLabel">Distintas Opciones a Administrar</h5>
                 </div>
                 <div class="modal-body">
                 <form>
                 <div class="mb-3">
                     <label for="exampleInputEmail1" class="form-label">Nombre Del Producto</label>
                     <input type="email" class="form-control" id="nombreIngresarProducto" aria-describedby="emailHelp">
                 </div>
                 <div class="mb-3">
                     <label for="exampleInputPassword1" class="form-label">Descripcion Del Producto</label>
                     <input type="text" class="form-control" id="descripcionIngresarProducto">
                 </div>
                 <div class="mb-3">
                 <label for="exampleInputPassword1" class="form-label">Precio</label>
                 <input type="number" class="form-control" id="precioIngresarProducto">
                 </div>
                 <div class="mb-3">
                 <label for="exampleInputPassword1" class="form-label">Categoria</label>
                 <input type="text" class="form-control" id="categoriaIngresarProducto">
                 </div>
                 <div class="mb-3">
                 <label for="exampleInputPassword1" class="form-label">Empresa</label>
                 <input type="text" class="form-control" id="empresaIngresarProducto">
                 </div>
                 <div class="mb-3">
                 <label for="exampleInputPassword1" class="form-label">Imagen</label>
                 <input type="text" class="form-control" id="imgIngresarProducto">
                </div>     
                 </form>
                 </div>
                 <div class="modal-footer">
                 <button type="button" class="btn btn-cerrar" data-bs-dismiss="modal">Cerrar</button>
                 <button type="button" class="btn btn-ver" onclick="btnIngresarProducto()" data-bs-dismiss="modal">Ingresar</button>
                 </div>
                 </div>
                 </div>    
             `;
         
 
 
     const myModal = new bootstrap.Modal(document.getElementById('myModal'));
     myModal.show();
 }

 function btnIngresarProducto(){
    $.ajax({
        url: "/administracion/nuevoProducto", 
        method: "POST",
        data: {
          nombreProducto : document.getElementById('nombreIngresarProducto').value,
          descripcion : document.getElementById('descripcionIngresarProducto').value,
          precio: document.getElementById('precioIngresarProducto').value,
          categoria: document.getElementById('categoriaIngresarProducto').value,
          empresa: document.getElementById('empresaIngresarProducto').value,
          img: document.getElementById('imgIngresarProducto').value,
        },
        success:(res)=>{
            
            console.log(res);  
        },
        error:(error)=>{
            console.log(error);
        } 
    
    });
 }