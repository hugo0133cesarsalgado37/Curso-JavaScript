'use strict'
/*
Parametros opcionales
*/
function cal(numero1, numero2, mostrar = false){
  
  if(mostrar == false){
  	console.log("suma: "+ (numero1+numero2));
	console.log("resta: "+ (numero1-numero2));
	console.log("Multiplicacion: "+ (numero1*numero2));
	console.log("Division: "+ (numero1/numero2));
	console.log("--------------------");
          console.log("El valor es: "+ mostrar);
  }else{
  	document.write("suma: "+ (numero1+numero2)+"<br/>");
	document.write("resta: "+ (numero1-numero2)+"<br/>");
	document.write("Multiplicacion: "+ (numero1*numero2)+"<br/>");
	document.write("Division: "+ (numero1/numero2)+"<br/>");
	document.write("--------------------"+"<br/>");
           alert("El valor es: "+mostrar);
  }
}
cal(2, 2);
cal(8, 2, true);