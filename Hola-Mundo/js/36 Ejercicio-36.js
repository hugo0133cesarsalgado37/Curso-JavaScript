'use strict'
// fetch (ajax) y peticiones / apis rest
var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
     getUsuarios()
        .then(data => data.json())
        .then(users => {
        	listadoUsuarios(users.data);
        	return getJanet();
        	})
             .then(data => data.json())
             .then(user => {
                  mostrarJanet(user.data);
             });
function getUsuarios(){
	return fetch('https://reqres.in/api/users');
}
function getJanet(){
	return fetch('https://reqres.in/api/users/2');
}

    function listadoUsuarios(usuarios){    	
        	usuarios.map((user, i) => {
        		let nombre = document.createElement('h3');
        		nombre.innerHTML = i + '. '+ user.first_name+ " "+ user.last_name;
                div_usuarios.appendChild(nombre);
                document.querySelector(".loading").style.display = 'none';
        		        	});
        }
     function mostrarJanet(user){    	
        	     console.log(user);
        		let nombre = document.createElement('h4');
        		nombre.innerHTML =  user.first_name+ " "+ user.last_name;
                div_janet.appendChild(nombre);
                document.querySelector("#janet .loading").style.display = 'none';
        		        	
      }
        