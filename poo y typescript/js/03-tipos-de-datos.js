// String
var cadena = "Hugo Cesar Salgado";
cadena = 12;
// number
var numero = 12;
// Boleano
var verdadero_falso = true;
// Any
var cualquiera = "hola";
//Arrays
var lenguajes = ["PHP", "JS", "CSS"];
var years = [12, 13, 14];
// Let y var
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44; // Let actua de manera de bloque
    var numero2 = 55; // var de manera global
    console.log(numero1_1, numero2);
}
console.log(numero1, numero2);
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);
