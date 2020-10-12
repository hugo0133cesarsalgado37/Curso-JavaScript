'use strict'
/*
// JSON - JavaScript Object Notation
*/
var pelicula = {
titulo: 'batman vs superman',
year: 2017,
pais: 'Estados Unidos'
};
var peliculas = [
{titulo: "la verdad duele", year: 2016, pais: "francia"},
];
var caja_peliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
	var p = document.createElement("p");
	p.append(peliculas[index].titulo+ " - "+ peliculas[index].year);
	caja_peliculas.append(p);
}