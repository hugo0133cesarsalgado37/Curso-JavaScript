$(document).ready(function(){
	//MouseOver y MouseOut
	var caja = $("#caja");
	/*caja.mouseover(function(){
		$(this).css("background","red");
	});
	caja.mouseout(function(){
		$(this).css("background","green");
	});*/
	function cambiarojo(){
		$(this).css("background","red");
	}
	function cambiaverde(){
		$(this).css("background","green");
	}
	caja.hover(cambiarojo,cambiaverde);

	//click y doble click
	caja.click(function(){
        $(this).css("background","blue")
               .css("color","white");
	});
	caja.dblclick(function(){
        $(this).css("background","pink")
               .css("color","yellow");
	});
	// focus y blur
	var nombre = $("#nombre");
	var datos = $("#datos");
	nombre.focus(function(){
		$(this).css("border","2px solid green");
	});
	nombre.blur(function(){
		$(this).css("border","1px solid #ccc");
	    datos.text($(this).val()).show();
	    
	});
	// Mousedown y Mouseup
	datos.mousedown(function(){
		$(this).css("border-color","gray");
	});
	datos.mouseup(function(){
		$(this).css("border-color","black");
	});
//Mousemove
$(document).mousemove(function(){
var sigueme = $("#sigueme");
sigueme.css("left",event.clientX);
sigueme.css("top",event.clientY);
});

});