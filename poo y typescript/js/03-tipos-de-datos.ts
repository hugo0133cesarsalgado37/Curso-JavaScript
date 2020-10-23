type alfanumerico = string | number;
// String
let cadena: alfanumerico ="Hugo Cesar Salgado";
cadena = 12;
// number
let numero: number = 12;
// Boleano
let verdadero_falso: boolean = true;
// Any
let cualquiera: any ="hola";
//Arrays
var lenguajes: Array<string> = ["PHP","JS","CSS"]; 
let years: number[] = [12, 13, 14];
// Let y var
var numero1 = 10;
var numero2 = 12;
if(numero1 == 10){
	let numero1 = 44; // Let actua de manera de bloque
	var numero2 = 55; // var de manera global
	console.log(numero1, numero2);
}
console.log(numero1, numero2);
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);