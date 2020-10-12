'use strict'
// Localstorage
//comprobar disponibilidad de Localstorage
if(typeof(Storage) !== 'undefined'){
        console.log("Localstorage compatible");
}else{
         console.log("Localstorage incompatible");
}
//guardar datos
localStorage.setItem("titulo", "Curso de Symphony");
//Recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");
//guardar datos
var usuario = {
nombre: "hugo cesar",
email: "hg@gmail.com",
web: "hugoweb.org"
};
localStorage.setItem("usuario", JSON.stringify(usuario));
// recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#peliculas").append(" "+userjs.web+" - "+userjs.nombre);
