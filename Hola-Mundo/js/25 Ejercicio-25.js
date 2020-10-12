'use strict'
/*
Operaciones con Arrays 
*/
var categorias = ["accion","terror","comedia"];
var peliculas = ["la vida duele", "la vida es bella","scary movie"];
peliculas.sort(); // ordena el array alfabeticamente
peliculas.reverse(); //orden inverso al array
var cine = [categorias, peliculas];
//console.log(cine[0][1]);
//console.log(cine[0][2]);
/*var elemento = prompt("");
do{
elemento = prompt("introduce tu pelicula");
	peliculas.push(elemento);
}while(elemento != "ACABAR");
*/
var indice = peliculas.indexOf("scary movie");
if(indice > -1){
	peliculas.splice(indice, 1);
}	
var peli = peliculas.join();// convertir un array a String 
var cadena = "tex1", " tex2";
var cadena_array = cadena.split(", "); // covertir String a un array por separacion(", ")
console.log(peli);
console.log(cadena_array);
