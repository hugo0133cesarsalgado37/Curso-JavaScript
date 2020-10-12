'use strict'
/*
Parametros 
*/
function calculadora(numero1, numero2){
	console.log("suma: "+ (numero1+numero2));
	console.log("resta: "+ (numero1-numero2));
	console.log("Multiplicacion: "+ (numero1*numero2));
	console.log("Division: "+ (numero1/numero2));
	console.log("--------------------");
}
calculadora(12, 34);
calculadora(2, 2);

for(var i =1; i<= 10; i++){
	console.log(i);
	calculadora(i, 2);
}