'use strict'
/*
Plantillas de texto Javascript
*/
var nombre = prompt("ingresa un nombre");
var apellidos = prompt("ingresa tus apellidos");
//var texto = "mi nombre es: "+ nombre+ " Mis apellidos son: "+apellidos;
var texto = `
<h1>Hola que tal</h1>
<h3>mi nombre es: ${nombre}</h3>
<h3>Mis apellidos son: ${apellidos}</h3>
`;
document.write(texto);