/*
//VARIABLES 
let nombreUsuario="Gilma"
let estaturaUsuario=1.70
let edadUsuario=32
let telefonoUsuario="3332255"
let esPaisa= false //(banderas o controladores del codigo)

const APELLIDOS_USUARIO="Monsalve Gauna"

//SALIDAS
console.log(nombreUsuario);

//UNIR LOS MENSAJES CON LAS VARIABLES 
//(CONCATENER)
/*
console.log("Buenas tardes " + nombreUsuario + ", su edad es: " + edadUsuario);
console.log(`buenas tardes ${nombreUsuario}, su edad es: ${edadUsuario}`);

//UTILIZANDO EL DOM
let etiquetaTitulo=document.getElementById("titulo")
console.log(etiquetaTitulo)

etiquetaTitulo.textContent="Solo verde"
etiquetaTitulo.classList.add("text-danger")
etiquetaTitulo.classList.add("text-center")


let etiquetaMenu = document.getElementById("nombreMenu")
etiquetaMenu.textContent="BATMAN"

let etiquetaFotoLateral = document.getElementById("fotolateralbatman")
etiquetaFotoLateral.src="img/fotoBatman.jpg"

*/


// IMPORTANDO MODULOS
import { pintarTienda } from './llenadoTienda.js'
import { ampliarInformacion} from './ampliarInfo.js'

//LLAMANDO AL MODULO DE PINTAR
pintarTienda()

//LLAMANDO AL MODULO ampliarInfo
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click", function(event){

    let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
    ampliarInformacion(event)
    modalinfoproducto.show()

})