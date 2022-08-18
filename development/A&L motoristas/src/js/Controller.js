
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

var llenarEnviosEchos = function(){
    let espacio = document.getElementById('envios-echos');
    espacio.innerHTML=' ';
    $.ajax({
        url: "/motoristas/pedidos", 
        method: "GET",
        dataType: "json",
        success:(res)=>{
            
                res.forEach(element => {     
                    if(element.estado=='Entregada'){

                        espacio.innerHTML+=`
                    <div class="envios">
                        <section><i class="fa-solid fa-location-dot"></i>${element.ubicacion}</section>
                        <button class="ver-pedido" onclick="verFactura(this)" value="${element.numeroPedido}">ver pedido</button>
                    </div>
                `      
                    }    
                          })
         },
        error:(error)=>{
            console.log(error);
        } 
    });
}

llenarEnviosEchos();

var llenarEnviosNoTomados = function(){
    let espacio = document.getElementById('envios-no-tomados');
    espacio.innerHTML=' ';

    $.ajax({
        url: "/motoristas/pedidos", 
        method: "GET",
        dataType: "json",
        success:(res)=>{
            
                res.forEach(element => {     
                    if(element.estado=='No aceptado'){
                        espacio.innerHTML+=`
                        <div class="envios">
                        <section><i class="fa-solid fa-location-dot"></i>${element.ubicacion}</section>
                        <button class="ver-pedido" onclick="verPedidoDisponible(this)" value="${element.numeroPedido}">ver pedido</button>
                        </div>
`     
                    }    
                          })
         },
        error:(error)=>{
            console.log(error);
        } 
    });
}

llenarEnviosNoTomados();

var llenarEnviosTomadosNoEntregados = function(){
    let espacio = document.getElementById('envios-tomados-no-realizados');
    espacio.innerHTML=' ';

    $.ajax({
        url: "/motoristas/pedidos", 
        method: "GET",
        dataType: "json",
        success:(res)=>{
            
                res.forEach(element => {     
                    if((element.estado!='No aceptado') && (element.estado!='Entregada')){
                        espacio.innerHTML+=`
                        <div class="envios">
                        <section><i class="fa-solid fa-location-dot"></i>${element.ubicacion}</section>
                        <button class="ver-pedido" onclick="verPedidoPendiente(this)" value="${element.numeroPedido}">ver pedido</button>
                        </div>
                        `
                    }
                    
                    
                          })
         },
        error:(error)=>{
            console.log(error);
        } 
    });
}

llenarEnviosTomadosNoEntregados();



var verFactura = function(etiqueta){

    let contenidoModal = document.getElementById('myModal');

    contenidoModal.innerHTML=`
    
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Factura Pedido  ${etiqueta.value}</h5>
        </div>
        <div class="modal-body">
        <i class="fa-solid fa-cart-shopping"></i>
        <section class="ProductosYPrecio">
        <div class="productos" id="productosFacturaId">
        Productos
        </div>
        <div class="precios" id="cantidadFacturaId">
        Cantidad
        </div>
        <div class="precios" id="preciosFacturaId">
        Precio
        </div>
        
        </section>
        <section class="DescripcionPedido"  id="bodyFacturaId">
        </section> 
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-cerrar" data-bs-dismiss="modal">Cerrar</button>
        </div>
        </div>
        </div>    
    
    `;

    buscarPorCodigoPedidosEchos(etiqueta.value)

    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
}


var buscarPorCodigoPedidosEchos = function(codigo){

        let cadenaProductos=document.getElementById('productosFacturaId');
        let cadenaPrecios=document.getElementById('preciosFacturaId');
        let contenidotag=document.getElementById('bodyFacturaId');
        let cadenaCantidad=document.getElementById('cantidadFacturaId');


          $.ajax({
            url: "/motoristas/pedidos", 
            method: "GET",
            dataType: "json",
            success:(res)=>{
               
                    res.forEach(element => {   
                        if (element.numeroPedido==codigo) {
                            contenidotag.innerHTML=`
                             
                            <div>
                            Nombre Del Cliente: ${element.nombreCliente}
                            </div>
                            <div>
                            Direccion: ${element.ubicacion}
                            </div>
                            <div>
                            Nombre Del Motorista: ${element.conductor}
                            </div>
                            <div>
                            Fecha De Entrega: ${element.fecha}
                            </div>
    
                            `
                            ;                                      
                        }            
                  })
             },
            error:(error)=>{
                console.log(error);
            } 
        });



        $.ajax({
            url: "/motoristas/productosPedido", 
            method: "GET",
            dataType: "json",
            success:(res)=>{
                    res.forEach(element => {   
                        if(element.numeroPedido==codigo){
                            cadenaProductos.innerHTML+=`
                            <div class="producto">
                            ${element.nombreProducto}
                            </div>
                            `;
                            cadenaPrecios.innerHTML+=`
                            <div class="precio">
                            ${element.precio}
                            </div>  
                            
                            `   ;
                            cadenaCantidad.innerHTML+=`
                            <div class="precio">
                            ${element.cantidad}
                            </div>  
                            
                            `                           
                        } 
                                                                
                         })
                         
             },
            error:(error)=>{
                console.log(error);
            } 
        });
}


var verPedidoDisponible = function(etiqueta){
    $.ajax({
        url: "/motoristas/pedidos", 
        method: "GET",
        dataType: "json",
        success:(res)=>{
           
                res.forEach(element => {   
                    if (element.numeroPedido==etiqueta.value) {
    let contenidoModal = document.getElementById('myModal');

                        contenidoModal.innerHTML=`
                        
                            <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Pedido  ${etiqueta.value}</h5>
                            </div>
                            <div class="modal-body">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <section class="ProductosYPrecio">
                            <div class="productos" id="productosFacturaId">
                            Productos
                            </div>
                            <div class="precios" id="cantidadFacturaId">
                            Cantidad
                            </div>
                            <div class="precios" id="preciosFacturaId">
                            Precio
                            </div>
                            
                            </section>
                            <section class="DescripcionPedido"  id="bodyFacturaId">
                            </section> 
                            
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-cerrar" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" class="btn btn-aceptar" onclick="tomarOrdenPedidoDisponible('${element._id}')" data-bs-dismiss="modal">Tomar Orden</button>
                            </div>
                            </div>
                            </div>    
                        
                        `;
                    
                    
                        buscarPorCodigoPedidoDisponible(etiqueta.value);
                        const myModal = new bootstrap.Modal(document.getElementById('myModal'));
                        myModal.show();
                        ;                                      
                    }            
                })
           },
          error:(error)=>{
              console.log(error);
          } 
      });

  
}

var tomarOrdenPedidoDisponible = function(codigo){
    $.ajax({
        url: "/motoristas/pedidos", 
        method: "GET",
        dataType: "json",
        success:(res)=>{
           
                res.forEach(element => {   
                    if (element.numeroPedido==codigo) {
                        $.ajax({
                            url: `/motoristas/pedidos/${codigo}/${element.conductor}/Tomada`, 
                            method: "PUT",
                            dataType: "json",
                            success:(res)=>{
                            },
                            error:(error)=>{
                                console.log(error);
                            } 
                        });            
                    }            
              })
         },
        error:(error)=>{
            console.log(error);
        } 
    });


    
}

var buscarPorCodigoPedidoDisponible = function(codigo){

    
    let cadenaProductos=document.getElementById('productosFacturaId');
    let cadenaPrecios=document.getElementById('preciosFacturaId');
    let contenidotag=document.getElementById('bodyFacturaId');
    let cadenaCantidad=document.getElementById('cantidadFacturaId');

    $.ajax({
        url: "/motoristas/productosPedido", 
        method: "GET",
        dataType: "json",
        success:(res)=>{
                res.forEach(element => {   
                    if(element.numeroPedido==codigo){
                        cadenaProductos.innerHTML+=`
                        <div class="producto">
                        ${element.nombreProducto}
                        </div>
                        `;
                        cadenaPrecios.innerHTML+=`
                        <div class="precio">
                        ${element.precio}
                        </div>  
                        
                        `   ;
                        cadenaCantidad.innerHTML+=`
                        <div class="precio">
                        ${element.cantidad}
                        </div>  
                        
                        `                            
                    } 
                                                            
                     })
                     
         },
        error:(error)=>{
            console.log(error);
        } 
    });


    $.ajax({
        url: "/motoristas/pedidos", 
        method: "GET",
        dataType: "json",
        success:(res)=>{
           
                res.forEach(element => {   
                    if (element.numeroPedido==codigo) {
                        contenidotag.innerHTML=`
                         
                        <div>
                        Nombre Del Cliente: ${element.nombreCliente}
                        </div>
                        <div>
                        Direccion: ${element.ubicacion}
                        </div>
                        `
                        ;                                      
                    }            
              })
         },
        error:(error)=>{
            console.log(error);
        } 
    });
}


 var verPedidoPendiente = function(etiqueta){

        let contenidoModal = document.getElementById('myModal');
    
        contenidoModal.innerHTML=`
        
            <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Pedido Pendiente ${etiqueta.value}</h5>
            </div>
            <div class="modal-body">
            <i class="fa-solid fa-cart-shopping"></i>
            <section class="ProductosYPrecio">
            <div class="productos" id="productosFacturaId">
            Productos
            </div>
            <div class="precios" id="cantidadFacturaId">
            Cantidad
            </div>
            <div class="precios" id="preciosFacturaId">
            Precio
            </div>
            
            </section>
            <section class="DescripcionPedido"  id="bodyFacturaId">
            </section>

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-cerrar" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-aceptar" onclick="verFormularioProcesoEnvio('${etiqueta.value}')">Actualizar Progreso De Envio</button>
            </div>
            </div>
            </div>    
        
        `;
    
        buscarPorCodigoPedidoPendiente(etiqueta.value);
    
        const myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();

        
    }
    
var buscarPorCodigoPedidoPendiente = function(codigo){

    let cadenaProductos=document.getElementById('productosFacturaId');
    let cadenaPrecios=document.getElementById('preciosFacturaId');
    let contenidotag=document.getElementById('bodyFacturaId');
    let cadenaCantidad=document.getElementById('cantidadFacturaId');
        
    $.ajax({
        url: "/motoristas/pedidos", 
        method: "GET",
        dataType: "json",
        success:(res)=>{
           
                res.forEach(element => {   
                    if (element.numeroPedido==codigo) {
                        contenidotag.innerHTML=`
                         
                        <div>
                        Nombre Del Cliente: ${element.nombreCliente}
                        </div>
                        <div>
                        Direccion: ${element.ubicacion}
                        </div>
                        <div>
                        Nombre Del Motorista: ${element.conductor}
                        </div>
                        `
                        ;                                      
                    }            
              })
         },
        error:(error)=>{
            console.log(error);
        } 
    });



    $.ajax({
        url: "/motoristas/productosPedido", 
        method: "GET",
        dataType: "json",
        success:(res)=>{
                res.forEach(element => {   
                    if(element.numeroPedido==codigo){
                        cadenaProductos.innerHTML+=`
                        <div class="producto">
                        ${element.nombreProducto}
                        </div>
                        `;
                        cadenaPrecios.innerHTML+=`
                        <div class="precio">
                        ${element.precio}
                        </div>  
                        
                        `   ;
                        cadenaCantidad.innerHTML+=`
                        <div class="precio">
                        ${element.cantidad}
                        </div>  
                        
                        `                            
                    } 
                                                            
                     })
                     
         },
        error:(error)=>{
            console.log(error);
        } 
    });
}


var  verFormularioProcesoEnvio = function(codigo){
    let contenidoModal = document.getElementById('myModal');
    
    contenidoModal.innerHTML=`
    
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Proceso del Pedido ${codigo}</h5>
        </div>
        <div class="modal-body">
        <button type="button" class="btn btn-actualizar" disabled="true">Tomada</button>
        <button type="button" class="btn btn-actualizar" disabled="true" onclick="actualizarProceso('${codigo}')">En El Origen</button>
        <button type="button" class="btn btn-actualizar" disabled="true" onclick="actualizarProceso('${codigo}')">En Camino</button>
        <button type="button" class="btn btn-actualizar" disabled="true" onclick="actualizarProceso('${codigo}')">En El Destino</button> 
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-cerrar" data-bs-dismiss="modal">Cerrar</button>
        </div>
        </div>
        </div>    
    
    `;

    buscarPorCodigoProcesoEnvio(codigo);
}

var buscarPorCodigoProcesoEnvio = function(codigo){
    let botones = document.getElementsByClassName('btn-actualizar');

    for (let index = 0; index < enviosTomadosNoEntregados.length; index++) {
        if(enviosTomadosNoEntregados[index].codigo==codigo){
            if(enviosTomadosNoEntregados[index].procesodeEnvio=='tomada'){
                botones[1].disabled=false;
            }
            if(enviosTomadosNoEntregados[index].procesodeEnvio=='en el origen'){
                botones[1].disabled=true;
                botones[2].disabled=false;

            }
            if(enviosTomadosNoEntregados[index].procesodeEnvio=='en camino'){
                botones[2].disabled=true;
                botones[3].disabled=false;

            }
            if(enviosTomadosNoEntregados[index].procesodeEnvio=='en el destino'){
                botones[3].disabled=true;
            }
            break;
        }
    }
    }

    var actualizarProceso = function(codigo){    
        for (let index = 0; index < enviosTomadosNoEntregados.length; index++) {
            if(enviosTomadosNoEntregados[index].codigo==codigo){
                console.log(enviosTomadosNoEntregados[index].procesodeEnvio);
                if(enviosTomadosNoEntregados[index].procesodeEnvio=='en camino'){
                    enviosTomadosNoEntregados[index].procesodeEnvio='en el destino';
                }
                if(enviosTomadosNoEntregados[index].procesodeEnvio=='en el origen'){
                    enviosTomadosNoEntregados[index].procesodeEnvio='en camino';
    
                }
                if(enviosTomadosNoEntregados[index].procesodeEnvio=='tomada'){
                    enviosTomadosNoEntregados[index].procesodeEnvio='en el origen';
                }
                buscarPorCodigoProcesoEnvio(codigo);
                console.log(enviosTomadosNoEntregados[index].procesodeEnvio);
                break;
              
            }
        }
  

}