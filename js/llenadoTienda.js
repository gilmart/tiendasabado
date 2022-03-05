//ARREGLO DE OBJETOS

let productos = [
    {nombre:"Lampara", 
    precio: 450000, 
    foto:'img/producto1.jpg',
    descripcion:"Batimovil de la ultima pelicula de Batman original."},
    
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

//RECORRIENDO UN ARREGLO CON JS - BUSCAR, SELECCIONAR, ESCULCAR

productos.forEach(function(producto){
    console.log("LOREM IPSUM BATMAN")
})



//ESCUCHANDO CLIC EN EL BOTON
let boton = document.getElementById("boton")

//DETECTANDO EL PRIMER EVENTO 
boton.addEventListener("click", cambiarFoto)

//CREANDO UNA FUNCION
function cambiarFoto(){
    let foto = document.getElementById("fotoPrueba")
    foto.src="img/producto1.jpg"

}
