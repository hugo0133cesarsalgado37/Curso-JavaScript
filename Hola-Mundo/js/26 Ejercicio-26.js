'use strict'
/*
Recorer Arreglos con For in
*/
var categorias = ["accion","terror","comedia"];
var peliculas = ["la vida duele", "la vida es bella","scary movie"];
for( let pelicula in peliculas){
	document.write("<li>"+peliculas[pelicula]+"</li>"); // recorrer el array(for in)
}

//peliculas.sort(); // ordena el array alfabeticamente
//peliculas.reverse(); //orden inverso al array
var cine = [categorias, peliculas];
var indice = peliculas.indexOf("scary movie");
if(indice > -1){
	peliculas.splice(indice, 1);
}	
var peli = peliculas.join();// convertir un array a String 
//var cadena = "tex1", " tex2";
//var cadena_array = cadena.split(", "); // covertir String a un array por separacion(", ")
console.log(peli);
//console.log(cadena_array);
