'use strict'
/*
programa donde se muestra todos los numeros divisores de un numero introducido
*/
var numero1 = parseInt(prompt("ingresa un numero", 1));

for(var i = 1; i <= numero1; i++){
	if(numero1%i == 0){
		console.log("Divisor" + i);
	}
   
}