'use strict'
/*
crear un programa donde diga si un numero es par o impar
1.- ventana prompt
2.- si no es valido que lo pida de nuevo
3.-Mostrar resultado
*/

var numero = parseInt(prompt("ingresa un numero", 0));
while(isNaN(numero)){
	numero = parseInt(prompt("ingresa un numero", 0));
}
if(numero % 2 == 0){
	alert("numero par");
}else{
	alert("numero impar");
}
