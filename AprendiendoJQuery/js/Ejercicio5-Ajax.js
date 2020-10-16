$(document).ready(function(){
//Load

//$("#datos").load("https://reqres.in/");
// Get y Post
 
$.get("https://reqres.in/api/users", {page: 3}, function(response){
response.data.forEach((element, index) => {
	$("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>" );
});
});

$("#formulario").submit(function(){
var usuario = {
	"name" : $('input[name="name"]').val(),
	"web" : $('input[name="web"]').val()
};
/*$.post("https://reqres.in/api/users", usuario, function(response){
	console.log(response);
}).done(function(){
alert("Usuario Agregado Correctamente");
});*/
$.ajax({
  type: 'POST',
  url: $(this).attr("action"),
  data: usuario,
  beforeSend: function(){
  	console.log("Enviando usuario..");
  },
  success: function(response){
console.log(response);
  },
  error: function(){
  	console.log("Error");
  },
timeout: 1000
});
return false;
});
});