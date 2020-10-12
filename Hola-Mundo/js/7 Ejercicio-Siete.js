'use strict'
/*
Programa donde se hara la tabla de multiplicar de un numero introducido
*/
var numero = parseInt(prompt("Ingresa un numero", 0));
for(var i = 1; i <= 10; i++){
	document.write(i+" X "+ numero+" = "+ (i*numero)+"<br/>");
}
// todas las tablas
for(var c = 1; c <= 10; c++){
	document.write("<h1> Tabla del "+ c +"</h1>");
for(var i = 1; i <= 10; i++){
	document.write(i+" X "+ c+" = "+ (i*c)+"<br/>");
}
}