String.prototype.replaceAt = function(index, character) {
	return this.substr(0, index) + character + this.substr(index+character.length);
}

function Ahorcado(){
	//var film = {Title: 'RAPIDO Y FURIOSO'};
	this.film;
	var palabraUser = '';
	var level = new LevelEasy();
	var filmDao = new FilmDAO(this);
	
	this.inicializarPalabraUser = function(){
		for(var i = 0; i < film.Title.length; i++)
			if(film.Title[i] == ' ')
				palabraUser += ' ';
			else
				palabraUser += '_';
			
	};

	this.getTitle = function(){
		return film.Title;
	};

	this.tryLetter = function(c){
		if(this.letterExists(c))
			this.modificarPalabraUser(c);
	}

	this.letterExists = function(c){
		for(var i = 0; i < film.Title.length; i++)
			if(film.Title[i] == c)
				return true;
			
		throw c;		
	};

	this.modificarPalabraUser = function(c){			
		for(var i = 0; i < film.Title.length; i++){
			if(film.Title[i] == c)
				palabraUser = palabraUser.replaceAt(i, c);
		}
	};

	this.getPalabraUser = function(){
		return palabraUser;	
	};

	
	this.orderFilm = function() {
		filmDao.orderFilm();
	};
	
	//METODO OBSERVER
	this.filmReady = function(film){
		this.film = film;
		this.inicializarPalabraUser();
		this.film.Title = this.film.Title.toUpperCase(); 
		console.log(this.film.Title);
	};
	
	this.start = function() {
		this.orderFilm();
	}
}
