'use strict'
// DOM Document Object Model
function cambiacolor(color){
	caja.style.background= color;
}
//conseguir elementos con un ID concreto
//var caja = document.getElementById("micaja");
var caja = document.querySelector('#micaja');
caja.innerHTML="Textojs";
caja.style.background="red";
caja.style.padding = " 20px";
caja.style.color="while";
caja.className="hola";

// conseguir elemento por su etiqueta 
var todoslosDivs = document.getElementsByTagName('div');
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");
//todoslosDivs.forEach((valor, indice) => {
	var valor;
for(valor in todoslosDivs){
	if(typeof todoslosDivs[valor].textContent == 'string'){
	var parrafo = document.createElement("p");
	var texto = document.createTextNode(todoslosDivs[valor].textConten);
	parrafo.append(texto);
	seccion.append(parrafo);
	}
}
seccion.append(hr);
// conseguir elemento por su clase css
var divsrojos = document.getElementsByClassName('rojo');
var divsamarillos = document.getElementsByClassName('amarillo');
divsamarillos[0].style.background ="yellow";
var div;
for(div in divsrojos){
	if(divsrojos[div].className == "rojo"){
		divsrojos[div].style.background = "red";
	}
	
}
var id = document.querySelector("#encabezado");
console.log(id);
var clases = document.querySelector(".rojo");
console.log(clases);
var etiqueta = document.querySelector("div");
console.log(etiqueta);