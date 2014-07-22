function ImdbApi(){
	
	this.orderFilm = function(id, after){
		send('http://www.omdbapi.com/?i='+id,
		null,
		null,
		after);
	};

}
