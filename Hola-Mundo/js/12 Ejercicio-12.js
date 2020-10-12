'use strict'
/*
Funciones anidadas(dentro de otras)
*/
function porConsola(numero1, numero2){
console.log("suma: "+ (numero1+numero2));
	console.log("resta: "+ (numero1-numero2));
	console.log("Multiplicacion: "+ (numero1*numero2));
	console.log("Division: "+ (numero1/numero2));
	console.log("--------------------");
}
function porPantalla(numero1, numero2){
document.write("suma: "+ (numero1+numero2)+"<br/>");
	document.write("resta: "+ (numero1-numero2)+"<br/>");
	document.write("Multiplicacion: "+ (numero1*numero2)+"<br/>");
	document.write("Division: "+ (numero1/numero2)+"<br/>");
	document.write("--------------------"+"<br/>");
}
function cal(numero1, numero2, mostrar = false){
  
  if(mostrar == false){
  	
          porConsola(numero1, numero2);
  }else{
  	
           porPantalla(numero1, numero2);
  }
  return true;
}
cal(2, 2);
cal(8, 2, true);