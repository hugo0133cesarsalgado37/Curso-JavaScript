'use strict'
/*
Metodos de búsqueda
*/
var texto1 = "es muy bien curso";
var busqueda = texto1.indexOf("curso"); // busqueda por indice
var busqueda2 = texto1.search("bien");// busqueda
var busqueda3 = texto1.match("curso");//array
var busqueda4 = texto1.substr(2, 5); //Encuentra caracteres en especifico
var busqueda5 = texto1.charAt(3);// letra concreta de un string
var busqueda6 = texto1.startsWith("este"); // buscar el inicio del string(true)
var busqueda7 = texto1.includes("curso"); // buscar una palabra en especifico
console.log(busqueda);