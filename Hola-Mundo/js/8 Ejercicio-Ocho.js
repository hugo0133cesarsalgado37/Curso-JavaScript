'use strict'
/*
crear un programa donde se hara una calculadora
1.-pida 2 numero spor pantalla
2.- si metemos uno mal, que los vuelva a apedir
3.- el en cuerpo de la pagina, en una alerta y por consola el resultado 
de sumar, restar, multiplicar y dividir 
*/
var numero1 = parseInt(prompt("ingresa el primer numero", 0));
var numero2 = parseInt(prompt("ingresa el segundo numero", 0));
while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
numero1 = parseInt(prompt("ingresa el primer numero", 0));
numero2 = parseInt(prompt("ingresa el segundo numero", 0));	
}
var res = "La suma es: "+ (numero1+numero2)+" <br/>"+
          "la resta es: "+ (numero1-numero2)+" <br/>"+
          "La multiplicacion es: "+ (numero1*numero2)+" <br/>"+
          "La division es: "+ (numero1/numero2)+" <br/>";
          document.write(res);