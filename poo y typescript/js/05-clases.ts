// interface
interface ClasesBase{
	setColor(color);
	getColor();
}
// Clase (molde del objeto)
class Clases implements ClasesBase{
	//Propiedades (carac. del objeto)
	private color: string;
	private modelo: string;
	private marca: string;
	private talla: string;
	private precio: number;

//Metodos (Funciones del objeto)
constructor(color, modelo, marca, talla, precio){
	this.color = color;
	this.modelo = modelo;
	this.marca = marca;
	this.talla = talla;
	this.precio = precio;
}
public setColor(color){
	this.color = color;
}
public getColor(){
	return this.color
}
}
//clase hija
class Sudadera extends Clases{
public capucha: boolean;
setCapucha(capucha: boolean){
	this.capucha = capucha;
}
getCapucha():boolean{
    return this.capucha;
}
}

var clases = new Clases("rojo","manga larga","nike","l",14);

console.log(clases);
var sudadera_nike = new Sudadera();
console.log(sudadera_nike);