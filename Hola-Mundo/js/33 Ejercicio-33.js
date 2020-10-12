'use strict'
window.addEventListener('load', function(){
	console.log("DOM cargando!!");

var formulario = document.querySelector("#formulario");
var box_dashed= document.querySelector(".dashed");
box_dashed.style.display = "none";
formulario.addEventListener('submit', function(){
       console.log("evento submit capturado");
var nombre = document.querySelector("#nombre").value; 
var apellido = document.querySelector("#apellidos").value; 
var edad = document.querySelector("#edad").value;

if(nombre.trim() == null || nombre.trim().length == 0){
	alert("el nombre no es valido");
	document.querySelector("#error_nombre").innerHTML = "el nombre no es valido";
	return false;
}else{

}
if(apellidos.trim() == null || apellidos.trim().length == 0){
	alert("los apellidos no son validos");
	document.querySelector("#error_nombre").innerHTML = "el nombre no es valido";
	return false;
}else{

}
if(edad == null ||  edad <= 0 || isNaN(edad)){
	alert("la edad no es valida");
	return false;
}else{

}
box_dashed.style.display = "block";

var datos_usuario = [nombre, apellido, edad];
var indice;
for(indice in datos_usuario){
var parrafo = document.createElement("p");
parrafo.append(datos_usuario[indice]);	
box_dashed.append(parrafo);
} 


});
});