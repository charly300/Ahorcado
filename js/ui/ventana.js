function Ventana(){
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
		
		document.getElementById('playAgain').style.display = 'none';
		document.getElementById('filmPoster').style.display = 'none';
		document.getElementById('resultUser').style.display = 'none';
		
	}

	this.cleanWrongLetters = function() {
		document.getElementById('wrongLetters').innerHTML = '';
	}
	
	this.hideInput = function(){
		document.getElementById('keyBoard').style.display = 'none';
		document.getElementById('wrongLetters').style.display = 'none';
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
		document.getElementById('filmPoster').innerHTML = '<img src="' + src + '" alt="Folder" height="300" width="180">';		
		document.getElementById('filmPoster').style.display = 'block';		
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


	this.getInputLetter = function(){
		return document.getElementById('inputLetter').value;
	}
}	
