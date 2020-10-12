'use strict'
/*
Arrays Avanzados
*/
var nombre = "Hugo C";
var nombres = ["hugo", "cesar", "eugenio", 43,true];
var lenguajes = new Array("PHP","JS","java");
            //pisicion      0  ,  1 ,  2   ...

/*console.log(nombres[1]);
console.log(nombres.length);
var elemento = parseInt(prompt("que elemento del array quieres", 0));
if(elemento>= nombres.length){
	alert("introduce un numero correcto menor a 4");
}else{
alert("el usuario es: "+ nombres[elemento]);
}*/
document.write("<h1>Lenguajes del 2020</h1>");
for(var i=0; i < lenguajes.length; i++){
	document.write("<li>"+lenguajes[i]+"</li>");
}
document.write("</ul>");
