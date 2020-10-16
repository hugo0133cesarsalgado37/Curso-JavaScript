$(document).ready(function (){
	//console.log("Estamos listos!");
    //Selectro de id
    $("#rojo").css("background","red")
               .css("color","while");
   $("#amarillo").css("background","yellow")
               .css("color","green");
   $("#verde").css("background","green")
               .css("color","while");            
//selectores de clase
var mi_clase = $('.zebra').css("padding","5px");

$('.sin_borde').click(function(){
console.log("Click dado!!");
$(this).addClass('zebra');
});
//Selectores de etiqueta
var parrafos = $('p').css("cursor","pointer");
parrafos.click(function(){
	var that = $(this);
	if($(that).hasClass('zebra')){
      $(that).removeClass('grande');
    }else{
    	that.removeClass('grande')
    }
});
//selectores por atributos
$('[title="Google"]').css('background','#ccc');
$('[title="Facebook"]').css('background','blue');
//Otros
var busqueda = $("#elemento2").parent().parent().find('.resaltado');
console.log(busqueda);
});
