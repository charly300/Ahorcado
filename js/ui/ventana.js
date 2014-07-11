function Ventana(){
	var vidas = 0;
	
	this.deleteStart = function(){
		var element = document.getElementById('start');
 		element.parentNode.removeChild(element);
	}

	this.displayLoading = function(){
		document.getElementById('loadingFilm').style.display = 'block';
	}
	
	this.createEnvironment = function(){
		document.getElementById('loadingFilm').style.display = 'none';
		document.getElementById('wordUser').style.display = 'block';
		document.getElementById('keyBoard').style.display = 'block';
		document.getElementById('wrongLetters').style.display = 'block';
		document.getElementById('divPistas').style.display = 'block';
		document.getElementById('divFilmPoster').style.display = 'block';
		document.getElementById('ahorcado').style.display = 'block';
		document.getElementById('solicitarPista').style.display = 'block';	
		this.clearLifes();
		this.clearPosterFilm();
		
		document.getElementById('playAgain').style.display = 'none';
		document.getElementById('resultUser').style.display = 'none';
		
	}

	this.cleanWrongLetters = function() {
		document.getElementById('wrongLetters').innerHTML = '';
	}
	
	this.hideInput = function(){
		document.getElementById('keyBoard').style.display = 'none';
		document.getElementById('wrongLetters').style.display = 'none';
		document.getElementById('solicitarPista').style.display = 'none';
		document.getElementById('playAgain').style.display = 'block';		
	}
	
	this.displayLostFilm = function() {
		document.getElementById('resultUser').innerHTML = "Perdiste";
		document.getElementById('resultUser').style.display = 'block';
	} 
	
	this.displayWinnerFilm = function() {
		document.getElementById('resultUser').innerHTML = "Ganaste";
		document.getElementById('resultUser').style.display = 'block';
	}
	
	this.displayFilmPoster = function(src){
		document.getElementById('filmPoster').src = src;	
		document.getElementById('filmPoster').style.display = 'block';		
	}
	
	this.clearPosterFilm = function(){
		document.getElementById('filmPoster').src = 'img/question.png';
	}
	
	this.setPoints = function(p) {
		document.getElementById('points').innerHTML = p;
		document.getElementById('points').style.display = 'block';	
	}
	
	
	this.setPalabraUser = function(p){
		document.getElementById('wordUser').innerHTML = p;
	}

	this.appendWrongLetter = function(c){
		document.getElementById('wrongLetters').innerHTML += c;
	}

	this.lostLife = function(){
		vidas++;
		document.getElementById('ahorcadoImg').src = 'img/vidas/vidas' + vidas + '.jpg';	
	}
	
	
	this.addPista = function(pista){
		document.getElementById('pistas').innerHTML += '<li>' + pista.key + ": " + pista.value + '</li>';
	}
	
	this.maxCantPistas = function(){
		document.getElementById('msjPistas').innerHTML = 'No se puede pedir mas pistas';
		document.getElementById('solicitarPista').className = 'disabled';
	}
	
	this.clearPistas = function(){
		document.getElementById('pistas').innerHTML = '';
		document.getElementById('msjPistas').innerHTML = '';
		document.getElementById('solicitarPista').className = 'enabled';
	}
	
	this.clearLifes = function(){
		vidas = 0;
		document.getElementById('ahorcadoImg').src = 'img/vidas/vidas0.jpg';
	}
}	
