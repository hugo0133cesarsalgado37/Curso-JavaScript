'use strict'
/*
BoM Browser Object Moidel
*/
function getBom(){
console.log(window.innerHeight);
console.log(window.innerWidth);
//console.log(screen.innerHeight/innerWidth);
console.log(window.location.href);
}
function redirect(url){
	window.location.href = url;
}
function abrirventana(url){
	window.open(url,"","width=400, height=300");
}
getBom();