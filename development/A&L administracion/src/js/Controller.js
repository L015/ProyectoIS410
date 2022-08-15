
var empresas = [
    {
        codigo:"ab032",
        nombreDeEmpresa:"Sony",
        descripcion:"empresa dedicada a la produccion de electronicos",
        productos:[
            {
                nombreProducto:"juguete",
                descripcion:"ninguna",
                precio:1440,
            },
            {
                nombreProducto:"laptop hp",
                descripcion:"ninguna",
                precio:1440,
            },
            {
                nombreProducto:"aire acondicionado",
                descripcion:"ninguna",
                precio:3131,
            },
            {
                nombreProducto:"televisor sonic",
                descripcion:"ninguna",
                precio:3131,
            }
        ]
    },
    {
        codigo:"ab21",
        nombreDeEmpresa:"General Electric",
        descripcion:"empresa dedicada a la produccion de electrodomesticos",
        productos:[
            {
                nombreProducto:"juguete",
                descripcion:"ninguna",
                precio:1440,
            },
            {
                nombreProducto:"laptop hp",
                descripcion:"ninguna",
                precio:1440,
            },
            {
                nombreProducto:"aire acondicionado",
                descripcion:"ninguna",
                precio:3131,
            },
            {
                nombreProducto:"televisor sonic",
                descripcion:"ninguna",
                precio:3131,
            }
        ]
    },
    {
        codigo:"ab0362",
        nombreDeEmpresa:"Apple",
        descripcion:"empresa dedicada a la produccion de electronicos",
        productos:[
            {
                nombreProducto:"juguete",
                descripcion:"ninguna",
                precio:1440,
            },
            {
                nombreProducto:"laptop hp",
                descripcion:"ninguna",
                precio:1440,
            },
            {
                nombreProducto:"aire acondicionado",
                descripcion:"ninguna",
                precio:3131,
            },
            {
                nombreProducto:"televisor sonic",
                descripcion:"ninguna",
                precio:3131,
            }
        ]
    },
    {
        codigo:"ab032",
        nombreDeEmpresa:"Frigidaire",
        descripcion:"empresa dedicada a la produccion de refrigeradores y aires acondicionados",
        productos:[
            {
                nombreProducto:"juguete",
                descripcion:"ninguna",
                precio:1440,
            },
            {
                nombreProducto:"laptop hp",
                descripcion:"ninguna",
                precio:1440,
            },
            {
                nombreProducto:"aire acondicionado",
                descripcion:"ninguna",
                precio:3131,
            },
            {
                nombreProducto:"televisor sonic",
                descripcion:"ninguna",
                precio:3131,
            }
        ]
    },
];

var productos = [
    {
        codigo:"ab032",
        nombreDeProducto:"Playstation 5",
        descripcion:"consola de video juegos",
        empresa:"sony",
        precio:1234,
    },
    {
        codigo:"ab021",
        nombreDeProducto:"xbox one",
        descripcion:"consola de video juegos",
        empresa:"sony",
        precio:1234,
    },
    {
        codigo:"ab032",
        nombreDeProducto:"nintendo 64",
        descripcion:"consola de video juegos",
        empresa:"sony",
        precio:1234,
    },
    {
        codigo:"ab032",
        nombreDeProducto:"nintendo switch",
        descripcion:"consola de video juegos",
        empresa:"sony",
        precio:1234,
    },
    {
        codigo:"ab032",
        nombreDeProducto:"gamecube",
        descripcion:"consola de video juegos",
        empresa:"sony",
        precio:1234,
    },
];

var motoristas = [
    {
        codigo:"ab032",
        nombreMotoristas:"Luis Lainez",
        calificacion:4,
        pedidosEntregados:10,
        pedidosPendintes:21,
        habilitado:"si",
    },
    {
        codigo:"ab032",
        nombreMotoristas:"Ricardo espinoza",
        calificacion:4,
        pedidosEntregados:10,
        pedidosPendintes:21,
        habilitado:"si",
    },
    {
        codigo:"ab032",
        nombreMotoristas:"Mercedez Lina",
        calificacion:4,
        pedidosEntregados:10,
        pedidosPendintes:21,
        habilitado:"no",
    },
    {
        codigo:"ab032",
        nombreMotoristas:"Angie Lopez",
        calificacion:4,
        pedidosEntregados:10,
        pedidosPendintes:21,
        habilitado:"si",
    },
    {
        codigo:"ab032",
        nombreMotoristas:"Luis Lainez",
        calificacion:4,
        pedidosEntregados:10,
        pedidosPendintes:21,
        habilitado:"no",
    },
    {
        codigo:"ab032",
        nombreMotoristas:"Luis Lainez",
        calificacion:4,
        pedidosEntregados:10,
        pedidosPendintes:21,
        habilitado:"si",
    },
    
];

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
            alert('sesion iniciada');
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
    empresas.forEach(element => {
    espacio.innerHTML+=`
    <div class="tarjeta">
    <section>
        <div class="titulo-tarjeta">
            ${element.nombreDeEmpresa}
        </div>
        <div class="subtitulo-tarjeta">
        ${element.descripcion}
        </div>
    </section>
    <section>
        <button class="btn btn-ver" onclick="verModalAdministrar()">Ver</button>
    </section>

</div>
    `
   });


   let buscador = document.getElementById('buscador-container');
   buscador.innerHTML=`
   <button class="btn btn-aceptar" onclick="verModalAdministrar()">Ingresar Nuevo</button>
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
    productos.forEach(element => {
    espacio.innerHTML+=`
    <div class="tarjeta">
    <section>
        <div class="titulo-tarjeta">
            ${element.nombreDeProducto}
        </div>
        <div class="subtitulo-tarjeta">
        ${element.descripcion}
        </div>
    </section>
    <section>
        <button class="btn btn-ver" onclick="verModalAdministrar()">Ver</button>
    </section>

</div>
    `
   });

   let buscador = document.getElementById('buscador-container');
   buscador.innerHTML=`
   <button class="btn btn-aceptar" onclick="verModalAdministrar()">Ingresar Nuevo</button>
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
    motoristas.forEach(element => {
    espacio.innerHTML+=`
    <div class="tarjeta">
    <section>
        <div class="titulo-tarjeta">
            ${element.nombreMotoristas}
        </div>
        <div class="subtitulo-tarjeta">
        Calificacion :  ${element.calificacion}
        </div>
    </section>
    <section>
        <button class="btn btn-ver" onclick="verModalAdministrar()">Ver</button>
    </section>

</div>
    `
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

var verModalAdministrar = function(){

    let contenidoModal = document.getElementById('myModal');

    contenidoModal.innerHTML=`
    
        <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Distintas Opciones a Administrar</h5>
        </div>
        <div class="modal-body">
        opciones
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-cerrar" data-bs-dismiss="modal">Cerrar</button>
        </div>
        </div>
        </div>    
    `;



    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();
}