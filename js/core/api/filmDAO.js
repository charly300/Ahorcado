function FilmDAO(observer) {
	this.observer = observer;
	this.api = new ImdbApi();
	this.film = '';
	
	
	this.orderFilm = function(){
		this.api.orderFilm('tt01111' +
							this.randomNumber().toString() + 
							this.randomNumber().toString(),
							this.after);
	}
	

	this.randomNumber = function(){
		return Math.floor((Math.random() * 10)); 
	}
	
	this.after = function(rta) {
		this.film = eval("(" + rta + ")");
		
		if(this.film.Type = 'movie')
			observer.filmReady(this.film);
	}
	
	
}