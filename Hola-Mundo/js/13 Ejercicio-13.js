'use strict'
/*
Parametros rest( ...parametro_resto_de datos) y spread(...primeros_datos)
*/
function listadoFrustas(fruta1, fruta2, ...resto_de_frutas){
	console.log("fruta 1: "+fruta1);
	console.log("fruta 2: "+fruta2);
	console.log(resto_de_frutas);
}
listadoFrustas("naranja", "manzana", "sandia", "pera", "melon", "coco");
var frutas =["naranja", "manzana"]
listadoFrustas( ...frutas, "sandia", "pera", "melon", "coco");
