'use strict'
/*
// Funciones de reemplazo
*/
var texto1 = "Bienvenido al curso de JavaScript con H";
var busqueda = texto1.replace("curso", "master");//reemplazar palabras
var busqueda1 = texto1.slice(10);//corta el string apartir del numero de letras(14)
//.slice(14, 22); esto es un rango determinado del string
var busqueda2 = texto1.split(" ");//separa el string por el separador asignado (" ")
var busqueda3 = texto1.trim();// para quitar espacios sobrantes por adelante y detras

console.log(busqueda);