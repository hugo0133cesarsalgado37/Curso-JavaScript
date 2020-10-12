'use strict'
/*
Programa que identifique numero menor , mayor o iguales
*/

var numero1 = parseInt(prompt('Introduce el primer numero', 0));
var numero2 = parseInt(prompt('Introduce el segundo numero', 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
	numero1 = parseInt(prompt('Introduce el primer numero', 0));
    numero2 = parseInt(prompt('Introduce el segundo numero', 0));
}

if(numero1 == numero2){
alert("Los numeros son iguales");
}else if(numero1 > numero2){
	alert(numero1 + " es mayor que " + numero2);
}else if(numero1 < numero2){
	alert(numero1 + " es menor que " + numero2);
}else{
	alert("Introduce numeros correctos");
}