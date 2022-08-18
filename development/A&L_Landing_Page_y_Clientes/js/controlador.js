var ofertas = {
    imagenOferta: "img/oferta.png",
    imgCarrusel: "img/fotoCarrusel.webp",
}

//Validaciones
var validacionCorreo = function(etiqueta){
  if(etiqueta.value.match(`^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$`)){
      etiqueta.classList.remove('campoValido');
      etiqueta.classList.remove('campoNoValido');
      etiqueta.classList.add('campoValido');
  }else{
      etiqueta.classList.remove('campoValido');
      etiqueta.classList.remove('campoNoValido');
      etiqueta.classList.add('campoNoValido');
  }
}

var validacionContraseña = function(etiqueta){
  if(etiqueta.value.match(`^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$`)){
      etiqueta.classList.remove('campoValido');
      etiqueta.classList.remove('campoNoValido');
      etiqueta.classList.add('campoValido');
  }else{
      etiqueta.classList.remove('campoValido');
      etiqueta.classList.remove('campoNoValido');
      etiqueta.classList.add('campoNoValido');
  }
}

var confirmarContraseña = function(etiqueta){
  let contraseña = document.getElementById('inputPassword');
  if(etiqueta.value==(contraseña.value)){
      etiqueta.classList.remove('campoValido');
      etiqueta.classList.remove('campoNoValido');
      etiqueta.classList.add('campoValido');
  }else{
      etiqueta.classList.remove('campoValido');
      etiqueta.classList.remove('campoNoValido');
      etiqueta.classList.add('campoNoValido');
  }
}

var validarCamposVaciosInicioSesion = function(){
  let email = document.getElementById('inputEmail-login');
  let contraseña = document.getElementById('inputPassword-login');

  if (email.value=='') {
      email.classList.remove('campoValido');
      email.classList.remove('campoNoValido');
      email.classList.add('campoNoValido');
  }else{
      email.classList.remove('campoValido');
      email.classList.remove('campoNoValido');
      email.classList.add('campoValido');
  }

  if (contraseña.value=='') {
      contraseña.classList.remove('campoValido');
      contraseña.classList.remove('campoNoValido');
      contraseña.classList.add('campoNoValido');
  }else{
      contraseña.classList.remove('campoValido');
      contraseña.classList.remove('campoNoValido');
      contraseña.classList.add('campoValido');
  }
}

var validarCamposVaciosCrearCuenta = function(){
  let email = document.getElementById('inputEmail');
  let contraseña = document.getElementById('inputPassword');
  let nombre=document.getElementById('inputName');
  let apellido=document.getElementById('inputLastName');
  let confirmarcontrasenia=document.getElementById('confirmPassword');

  if (email.value=='') {
      email.classList.remove('campoValido');
      email.classList.remove('campoNoValido');
      email.classList.add('campoNoValido');
  }else{
      email.classList.remove('campoValido');
      email.classList.remove('campoNoValido');
      email.classList.add('campoValido');
  }

  if (contraseña.value=='') {
      contraseña.classList.remove('campoValido');
      contraseña.classList.remove('campoNoValido');
      contraseña.classList.add('campoNoValido');
  }else{
      contraseña.classList.remove('campoValido');
      contraseña.classList.remove('campoNoValido');
      contraseña.classList.add('campoValido');
  }

  if (nombre.value=='') {
      nombre.classList.remove('campoValido');
      nombre.classList.remove('campoNoValido');
      nombre.classList.add('campoNoValido');
  }else{
      nombre.classList.remove('campoValido');
      nombre.classList.remove('campoNoValido');
      nombre.classList.add('campoValido');
  }

  if(apellido.value==''){
      apellido.classList.remove('campoValido');
      apellido.classList.remove('campoNoValido');
      apellido.classList.add('campoNoValido');
  }else{
      apellido.classList.remove('campoValido');
      apellido.classList.remove('campoNoValido');
      apellido.classList.add('campoValido');
  }

  if(confirmarcontrasenia.value==''){
      confirmarcontrasenia.classList.remove('campoValido');
      confirmarcontrasenia.classList.remove('campoNoValido');
      confirmarcontrasenia.classList.add('campoNoValido');
  }else{
      confirmarcontrasenia.classList.remove('campoValido');
      confirmarcontrasenia.classList.remove('campoNoValido');
      confirmarcontrasenia.classList.add('campoValido');
  }

}

var validarCampoVacio = function(etiqueta){
if(etiqueta.value==''){
  etiqueta.classList.remove('campoValido');
  etiqueta.classList.remove('campoNoValido');
  etiqueta.classList.add('campoNoValido');
} else{
  etiqueta.classList.remove('campoValido');
  etiqueta.classList.remove('campoNoValido');
  etiqueta.classList.add('campoValido');
}  
}




//Crea la landing
function landing(){

    $.ajax({
        url: "/categorias", 
        method: "GET",
        dataType: "json",
        success:(res)=>{      
            for(let i = 1; i<4 ; i++){
                document.getElementById('oferta '+i).innerHTML += `
                <img src="${ofertas.imagenOferta}" class="col-12">
                `
            }
            
            
                document.getElementById('fotosCarrusel').innerHTML += `
                <div class="carousel-item active" >
                <img src="${ofertas.imgCarrusel}" class="d-block w-100" alt="...">          
                </div>
                <div class="carousel-item"  >
                <img src="${ofertas.imgCarrusel}" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" >
                <img src="${ofertas.imgCarrusel}" class="d-block w-100" alt="...">         
                </div>       
                `;
            
                document.getElementById('fotosCarrusel2').innerHTML += `
                <div class="carousel-item active" >
                <img src="${ofertas.imgCarrusel}" class="d-block w-100" alt="...">          
                </div>
                <div class="carousel-item"  >
                <img src="${ofertas.imgCarrusel}" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" >
                <img src="${ofertas.imgCarrusel}" class="d-block w-100" alt="...">         
                </div>       
                `;
            
                document.getElementById('productosLanding').innerHTML += '';

                for(let i =0 ; i<res.length ; i++){
                    document.getElementById('productosLanding').innerHTML +=`
                    <div class="col float-end" >
                        <div class="card" >
                        <h3 class="card-title mx-auto">${res[i].nombreCategoria}</h3>
                        <div class="row" id="categoriaL${res[i].nombreCategoria}">
                        </div>
                        </div>
                        </div>
                    `
            
                }
            
                for(let i =0 ; i<res.length ; i++){
                   
                    document.getElementById('categoriaL'+res[i].nombreCategoria).innerHTML +=`
                          
                          <img class="col-6 mx-auto imgLanding" src="${res[i].img}" class="card-img-top" alt="...">
                         
                          
                       
                      `
                }
            
        },
        error:(error)=>{
            console.log(error);
        } 
    });
    

}
    
landing();


//Funcion del boton Inicio
function cargarLanding(){

    

    
    
    document.getElementById('landing').style.display = 'block'; 
    document.getElementById('cat').style.display = 'none'; 
    document.getElementById('emp').style.display = 'none';  
    document.getElementById('car').style.display = 'none';   
    document.getElementById('botonInicio').style = 'color: var(--bs-navbar-active-color);';
    document.getElementById('botonCategorias').style = 'color: var(--bs-nav-link-hover-color);';
    document.getElementById('botonEmpresas').style = 'color: var(--bs-navbar-hover-color);';
   
   
}


//Funcion del boton Categorias

function cargarCategorias(){
    $.ajax({
        url: "/productos/juguetes", 
        method: "GET",
        dataType: "json",
        success:(res)=>{
        
                document.getElementById('categoriasTipos').innerHTML += `
                    <div class="titulosCategorias"><h4>Juguetes</h4></div>
                    <div class="scrollLateral" id="categoria${res[0].categoria}">
                  
                     </div>
                    `;
               
                    document.getElementById('categoriajuguetes').innerHTML = '';
            for(let i = 0 ; i<res.length ; i++){
                    document.getElementById('categoria'+res[i].categoria).innerHTML +=
                    `
                    <div class="productoScroll row">
                    <div id="pdt" class="productosCategorias" type="button" data-bs-toggle="modal" data-bs-target="#productosModal" value="${res[i]._id}" onclick="modalProductos('${res[i]._id}')" >
                  <img src="${res[i].img}" class="card-img-top imagenCategoria" alt="..." ">
                    <h5 >${res[i].nombreProducto}</h5>
                    </div>
                    </div>
                    `
                
            }

            


        },
        error:(error)=>{
            console.log(error);
        } 
    });

    $.ajax({
        url: "/productos/electronicos", 
        method: "GET",
        dataType: "json",
        success:(res)=>{
           
                document.getElementById('categoriasTipos').innerHTML = `
                    <div class="titulosCategorias"><h4>Electronicos</h4></div>
                
                    <div class="scrollLateral" id="categoria${res[0].categoria}">
                  
                     </div>
                    `;
               
                    document.getElementById('categoriaelectronicos').innerHTML += '';
            for(let i = 0 ; i<res.length ; i++){
                    document.getElementById('categoria'+res[i].categoria).innerHTML +=
                    `
                    <div class="productoScroll row">
                    <div id="pdt" class="productosCategorias" type="button" data-bs-toggle="modal" data-bs-target="#productosModal" value="${res[i]._id}" onclick="modalProductos('${res[i]._id}')" >
                  <img src="${res[i].img}" class="card-img-top imagenCategoria" alt="..." ">
                    <h6 >${res[i].nombreProducto}</h6>
                
                    </div>
                    </div>
                    `
                
            }

            
        },
        error:(error)=>{
            console.log(error);
        } 
    });

    $.ajax({
        url: "/productos/zapatos", 
        method: "GET",
        dataType: "json",
        success:(res)=>{
           
                document.getElementById('categoriasTipos').innerHTML += `
                    <div class="titulosCategorias"><h4>Zapatos</h4></div>
                
                    <div class="scrollLateral" id="categoria${res[0].categoria}">
                  
                     </div>
                    `;
               
                    document.getElementById('categoriazapatos').innerHTML = '';
            for(let i = 0 ; i<res.length ; i++){
                    document.getElementById('categoria'+res[i].categoria).innerHTML +=
                    `
                    <div class="productoScroll row">
                    <div id="pdt" class="productosCategorias" type="button" data-bs-toggle="modal" data-bs-target="#productosModal" value="${res[i]._id}" onclick="modalProductos('${res[i]._id}')" >
                  <img src="${res[i].img}" class="card-img-top imagenCategoria" alt="..." ">
                    <h5 >${res[i].nombreProducto}</h5>
            
                    </div>
                    </div>
                    `
                
            }

            
        },
        error:(error)=>{
            console.log(error);
        } 
    });

    

    
    
    document.getElementById('cat').style.display = 'block';  
    document.getElementById('emp').style.display = 'none';   
    document.getElementById('landing').style.display = 'none';
    document.getElementById('car').style.display = 'none'; 
    document.getElementById('botonCategorias').style = 'color: var(--bs-navbar-active-color);';
    document.getElementById('botonInicio').style = 'color: var(--bs-nav-link-hover-color);';
    document.getElementById('botonEmpresas').style = 'color: var(--bs-navbar-hover-color);';
    
}

//Funcion del boton Empresas


function cargarEmpresas(){
  
    
    $.ajax({
        url: "/empresas", 
        method: "GET",
        dataType: "json",
        success:(res)=>{

                document.getElementById('empresasTipos').innerHTML = '';
                for(let j = 0 ; j< res.length;j++){
        
                    document.getElementById('empresasTipos').innerHTML +=`   
                    <div class="col">
                    <div class="card " style="max-width: 600px;">
                    <div class="row g-0" style="min-height:200px;">
                      <div class="col-md-4 imagenCardEmpresa">
                        <img src="${res[j].img}" class="img-fluid rounded-start imagenEmpresa  " alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">${res[j].nombreEmpresa}</h5>
                          <p class="card-text">${res[j].descripcion}</p>
                          <p class="card-text"><small class="text-muted">${res[j].calificacion}</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                      `
                }
              
            
        },
        error:(error)=>{
            console.log(error);
        } 
    });
    
    
   
    document.getElementById('cat').style.display = 'none';    
    document.getElementById('landing').style.display = 'none';
    document.getElementById('car').style.display = 'none'; 
    document.getElementById('emp').style.display = 'block'; 
    document.getElementById('botonEmpresas').style = 'color: var(--bs-navbar-active-color);';
    document.getElementById('botonCategorias').style = 'color: var(--bs-navbar-hover-color);';
    document.getElementById('botonInicio').style = 'color: var(--bs-nav-link-hover-color);';
}

function cargarCarrito(){
  
    

    for(let i = 0 ;i<3;i++){
        document.getElementById('carritoPag').innerHTML = '';
        for(let j = 0 ; j< 4;j++){

            document.getElementById('carritoPag').innerHTML +=`   
            <div class="col">
            <div class="card " style="max-width: 600px;">
            <div class="row g-0" >
              <div class="col-md-4 imagenCardCarrito">
                <img src="" class="img-fluid rounded-start imagenEmpresa  " alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Prueba</h5>
                  <p class="card-text">Prueba</p>
                  <p class="card-text"><small class="text-muted"></p>
                </div>
              </div>
            </div>
          </div>
          </div>
              `
        }
      
    }

    document.getElementById('carritoConfirmar').innerHTML = `<div class="col-12">
    <h3>Total de compra: 99999$</h3>
  </div>
  <div style="margin-top:1rem ;">
    <button  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalConfirmarCompra">Confirmar Compra</button>
    <br><br>
  </div>`
 
   
    document.getElementById('cat').style.display = 'none';    
    document.getElementById('landing').style.display = 'none';   
    document.getElementById('emp').style.display = 'none'; 
    document.getElementById('car').style.display = 'block'; 
    document.getElementById('botonEmpresas').style = 'color: var(--bs-navbar-active-color);';
    document.getElementById('botonCategorias').style = 'color: var(--bs-navbar-hover-color);';
    document.getElementById('botonInicio').style = 'color: var(--bs-nav-link-hover-color);';
}



function modalProductos(id){
               
          
          $.ajax({
            url: `/productos/${id}`, 
            method: "GET",
            dataType: "json",
            success:(res)=>{
                let producto = res[0];

                document.getElementById("productosModal").innerHTML = `
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">${producto.nombreProducto}</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    Precio ${producto.precio}
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                      <button type="button" class="btn btn-primary">Agregar al carrito</button>
                    </div>
                  </div>
                </div>
              </div>`
              
             
                
            },
            error:(error)=>{
                console.log(error);
            } 
        });     
   
}

function crearCuenta(){
  $.ajax({
    url: "/registro", 
    method: "Post",
    data: {
      nombre : document.getElementById('inputNameR').value,
      apellido : document.getElementById('inputLastNameR').value,
      email: document.getElementById('inputEmailR').value,
      contraseña: document.getElementById('inputPasswordR').value,
      tipoUsuario: 'Cliente',
      validado: false
    },
    success:(res)=>{
        
        console.log(res);  
    },
    error:(error)=>{
        console.log(error);
    } 
});

}

function kek(){
  document.getElementById('botonIngresar').removeAttribute("data-bs-dismiss",'modal');
}

 function ingresar(){
  
  
 
  $.ajax({
      url: `/login`, 
      method: "GET",
      dataType: "json",
      success:(res)=>{
        console.log(res);

        for(let i = 0; i<res.length ; i++){
          const emailU = res[i].email;
        if( emailU == document.getElementById('inputEmailL').value) {
          document.getElementById('botonIngresar').setAttribute("data-bs-dismiss",'modal');
        } else{
        }   
      }
      },
      error:(error)=>{
          console.log(error);
      } 
  });   
 }

