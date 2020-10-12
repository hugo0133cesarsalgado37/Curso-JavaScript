'use strict'
/*
1.- pida 6 numeros por pantalla en un array
2.- mostrar el array entero(todos los elementos)
3.- ordenarlo y mostrarlo
4.- invertirlo y mostrarlo
5.- Cuantos elementos tiene el array
6.- Busqueda de un valor introducido por el usuario
*/
function Mostrarelementos(elementos, textoCustom=""){
document.write("<h1>Contenido del Array"+textoCustom+"</h1>");
document.write("<ul/>");
numeros.forEach((elemento, index) => {
	document.write("<li> "+elemento+" </li>");
});
document.write("<ul/>");
}
//pedir numeros
var numeros =new Array(6);
for (var i = 0; i <= 5 ; i++){
	numeros[i] = parseInt(prompt("ingresa un numero", 0));
}
//mostrar array
Mostrarelementos(numeros);
console.log(numeros);

//ordenar y mostrarlo
numeros.sort(function(a, b){return a-b});
Mostrarelementos(numeros, 'ordenado');

//invertir y mostrar
numeros.reverse();
Mostrarelementos(numeros, 'invertido');
//contar
document.write("<h1>El array tiene: "+numeros.length+" elementos");
//busqueda
var busqueda = parseInt(prompt("busca un numero", 0));
var posicion = numeros.findIndex(numero => numero == busqueda);
if(posicion && posicion != -1 ){
	document.write("<h1> Encontrado </h1>");
document.write("<h1>posicion de la busqueda "+posicion+"</h1>");
}else{
	document.write("<h1> No Encontrado </h1>");
}
