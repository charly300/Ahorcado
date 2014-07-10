/*
 * HACE FALTA EXTENDER LA CLASE "String"
 * PARA REEMPLAZAR UN CARCATER EN UNA POSICION
 */
String.prototype.replaceAt = function(index, character) {
	return this.substr(0, index) + character + this.substr(index+character.length);
}

String.prototype.countLetterNoSpace = function(){
	var p = this.replace(/\:/g, ''); //QUITA LOS DOS PUNTOS
	p = p.replace(/\s/g, '');		 //QUITA LOS ESPACIOS
	p = p.replace(/\'/g, '');		 //QUITA LAS COMILLAS SIMPLES 
	p = p.replace(/\./g, '');		 //QUITA LOS PUNTOS
	return p.length;
}


//CLASE AHORACADO
function Ahorcado(){
	this.film = null;
	
	var lives;
	var points;
	var observer;
	var palabraUser = '';
	var cantLetters;
	var pressedLetters = [];
	var pistaController;
	var level = new LevelEasy();
	var filmDao = new FilmDAO(this);
	
	this.inicializarPalabraUser = function(){
		for(var i = 0; i < film.Title.length; i++)
			if(film.Title[i] == ' ')
				palabraUser += ' ';
			else
				palabraUser += '_';
			
	};
	
	
	
	this.setObserver = function(ob) {
		observer = ob;
	}
	
	this.getTitle = function(){
		return film.Title;
	}

	this.getPoster = function() {
		return film.Poster;
	}
	
	

	this.getPoints = function() {
		return points;
	}
	
	
	this.winFilm = function(){
		points += 10;
		throw new WinFilmException();
	}
	
	this.tryLetter = function(c){
		if(!this.wasPressed(c)){
			pressedLetters.push(c);
		
			if(this.letterExists(c)){
				this.modificarPalabraUser(c);
				if(cantLetters <= 0)
					this.winFilm();
			}
			else{
				this.lostLive();
				throw c;
			}
		}
	
	}
	

	this.wasPressed = function(c) {
		for(var i = 0; i < pressedLetters.length; i++)
			if(pressedLetters[i] == c)
				return true;
		
		return false;
	}
	
	this.lostLive = function(){
		if(--lives < 0)
			this.lostFilm();
	}
	
	this.lostFilm = function() {
		points -= 10;
		throw new LostFilmException(film.Title);		
	}
	
	this.letterExists = function(c){
		for(var i = 0; i < film.Title.length; i++)
			if(film.Title[i] == c)
				return true;
			
		return false;
	};

	this.modificarPalabraUser = function(c){			
		for(var i = 0; i < film.Title.length; i++){
			if(film.Title[i] == c){
				cantLetters--;
				palabraUser = palabraUser.replaceAt(i, c);
			}
		}
	}

	this.getPalabraUser = function(){
		return palabraUser;	
	}

	
	this.orderFilm = function() {
		filmDao.orderFilm();
	}
	
	//METODO OBSERVER
	this.filmReady = function(film){
		this.film = film;
		this.inicializarPalabraUser();
		this.film.Title = this.film.Title.toUpperCase(); 
		cantLetters = this.film.Title.countLetterNoSpace();
		pistaController = new PistasController(this.film);
		
		console.log(this.film.Title);
		console.log('Cant: ' + cantLetters);
		observer.filmReady();
	}
	
	this.start = function() {
		points = 50;
		this.playAgain();
	}
	
	this.playAgain = function(){
		lives = 4;
		palabraUser = '';
		pressedLetters = [];
		this.orderFilm();
	}
	
	this.getPista = function(){
		if(points >= 5){
			points -= 5;
			return pistaController.getPista();
		}
	}
}
