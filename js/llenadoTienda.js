 export function pintarTienda (){
//ARREGLO DE OBJETOS

let productos = [
    {nombre:"Lampara", 
    precio: 450000, 
    foto:'img/producto1.jpg',
    descripcion:"Batimovil de la ultima pelicula de Batman original."   
    },
    
    {nombre:"Poster",
    precio: 50000,
    foto: 'img/producto2.jpg',
    descripcion: "Puzzle 3D de la ultima pelicula de Batman original.",
    },

    {nombre:"Cobija ",
    precio: 10000,
    foto: 'img/producto3.jpg',
    descripcion: "POP de la ultima pelicula de Batman original."
    },

    {nombre:"Pelicula ",
    precio: 20000,
    foto: 'img/producto4.jpg',
    descripcion: "PenDrive de la ultima pelicula de Batman original."
    },

    {nombre:"Batimovil ",
    precio: 15000,
    foto: 'img/producto5.jpg',
    descripcion: "Figura de la ultima pelicula de Batman original."
    },

    {nombre:"Banner ",
    precio: 35000,
    foto: 'img/producto6.jpg',
    descripcion: "Camiseta de la ultima pelicula de Batman original."
    },

    {nombre:"Almohada ",
    precio: 450000,
    foto: 'img/producto7.jpg',
    descripcion: "Batimovil de la ultima pelicula de Batman original."
    },

    {nombre:"Cubrecama ",
    precio: 50000,
    foto: 'img/producto8.jpg',
    descripcion: "Figura batman de la ultima pelicula de Batman original."
    },

    {nombre:"Sudadera ",
    precio: 90000,
    foto: 'img/producto9.png',
    descripcion: "Films de la ultima pelicula de Batman original."
    },

    {nombre:"Reloj ",
    precio: 10000,
    foto: 'img/producto10.jpg',
    descripcion: "Film Blu Ray de la ultima pelicula de Batman original."
    },
        
]

// CREO LA REFERENCIA AL COMPONENTE PADRE
// CREO UNA VARIABLE PARA ALMACENAR LA BASE
// SOBRE LA CUAL VOY A PINTAR

let fila=document.getElementById("fila")

//RECORRIENDO UN ARREGLO CON JS - BUSCAR, SELECCIONAR, ESCULCAR

productos.forEach(function(producto){
   /*
    console.log(producto.nombre)
    console.log(producto.precio)
    console.log(producto.foto)
    */
    
    // RECETA PARA PINTAR CON JS
    //1. COMIENCE A CREAR LA ESTRUCTURA Q NECESITA

    //CREO LA COLUMNA
    let columna=document.createElement("div")
    columna.classList.add("col")
    
    //CREO LA TARJETA
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    //CREO LA IMAGEN
    let foto=document.createElement("img")
    foto.classList.add("card-im-top")
    foto.src=producto.foto

    //CREO NOMBRE
    let titulo=document.createElement("h4")
    titulo.classList.add("text-center")
    titulo.textContent=producto.nombre

    //CREAR BOTON
    let boton=document.createElement("button")
    boton.setAttribute("type","button")
    boton.classList.add("btn","btn-warning","mx-4", "mb-4")
    boton.textContent="ver producto"

    //2. ORDENAR LA ESTRUCTURA -PADRES E HIJOS
    tarjeta.appendChild(foto)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(boton)

})

/*
//ESCUCHANDO CLIC EN EL BOTON
let boton = document.getElementById("boton")

//DETECTANDO EL PRIMER EVENTO 
boton.addEventListener("click", cambiarFoto)

//CREANDO UNA FUNCION
function cambiarFoto(){
    let foto = document.getElementById("fotoPrueba")
    foto.src="img/producto1.jpg"
}

*/
// RECORRER ARREGLO - LA MEJOR OPCION ES FOREACH
// RECORRER ARREGLO - LA MEJOR OPCION ES FOREACH


}






