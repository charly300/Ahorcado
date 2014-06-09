String.prototype.replaceAt = function(index, character) {
	return this.substr(0, index) + character + this.substr(index+character.length);
}


function Imdb(){
	/*
	var api = new ImdbApi();
	api.orderFilm('tt1580057', afterSend);	
	*/
	
	
	var ahorcado = new Ahorcado();
	ahorcado.inicializarPalabraUser();
	try{
		ahorcado.tryLetter('a');
		console.log(ahorcado.getPalabraUser());
		console.log(ahorcado.getPalabraUser());
	}
	catch(e){
		console.log('Letra incorrecta: ' + e);
	}
	
	
	
	/*
	var nombre = 'Juancito';
	console.log(nombre);

	nombre = nombre.replaceAt(2, 'n');
	console.log(nombre);
	*/
}


function afterSend(rta){
	console.log(rta);
	var film = eval("(" + rta + ")");
	
	document.getElementById('rta').innerHTML = film.Title;
	
	document.getElementById('rta').innerHTML += '<br/><img src="' + film.Poster + '" height="200" width="130" >';
	getRandom();
}

function getRandom(){
	return Math.floor((Math.random() * 100) + 1); 
}
