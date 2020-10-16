$(document).ready(function(){
	// Mover elemento `por la pantalla
	$('.elemento').draggable();
	// Redimensionar
	$('.elemento').resizable();
	// Seleccionar elementos
	//$('.lista_seleccionable').selectable();
	// Ordenar elementos
	$('.lista_seleccionable').sortable({
		update: function(event, ui){
			console.log("ha cambiado la lista");
		}
	});
	 //Drop
	 $("#elemento_movido").draggable();
	 $("#area").droppable({
	 	drop: function(){
	 		console.log("has soltado algo dentro");
	 	}
	 });
	 //Efectos
	 $("#mostrar").click(function(){
        $(".caja_efectos").toggle("puff");
	 });
  // Tooltip
     $(document).tooltip();
  //Dialogo
  $("#lanzar_popup").click(function(){
  	$("#popup").dialog();
  });
  //calendario
  $("#calendario").datepicker();
  //Tabs
  $("#pestanas").tabs();
});