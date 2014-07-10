var ahorcado = new Ahorcado();
var ventana = new Ventana();

String.prototype.countLetterNoSpace = function(){
	var p = this.replace(/\:/g, ''); //QUITA LOS DOS PUNTOS
	p = p.replace(/\s/g, '');		// QUITA LOS ESPACIOS
	return p.length;
}


function test(){
	contar('H:ol : a');
//	ahorcado.orderFilm();
	
//	document.getElementById('solicitarPista').className = 'disabled';
	
	/*
	this.after = function(rta) {
		console.log(rta);
	}
	
	var api = new ImdbApi();
	api.orderFilm('tt0111161', this.after);
	*/
}


function contar(palabra){
	console.log(palabra);
	var p = palabra.countLetterNoSpace();
	console.log(p);
}