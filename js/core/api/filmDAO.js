function FilmDAO(observer) {
	this.observer = observer;
	this.api = new ImdbApi();
	this.film = '';
	
	
	this.orderFilm = function(){
		this.api.orderFilm('tt0111161', this.after);
	}
	
	this.after = function(rta) {
		this.film = eval("(" + rta + ")");
		observer.filmReady(this.film);
	}
	
	
}