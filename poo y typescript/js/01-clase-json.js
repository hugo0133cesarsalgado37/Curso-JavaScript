var bicicleta = {
       color: 'Rojo',
       modelo: 'BMX',
       frenos: 'De disco',
       VelocidadMaxima: '60km',
       cambiarColor: function(nuevo_color){
       	// bicicleta.color -nuevo_color
       	this.color= nuevo_color;
       	console.log(this);
       }
};
bicicleta.cambiarColor("Azul");