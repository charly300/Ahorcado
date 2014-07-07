function PistasController(film){
	this.film; 
	this.cant = 3;
	this.film = film;
	
	this.getPista = function(){
		if(--this.cant < 0)
			throw new MaxCantPistasException();
		return new Pista("Director", film.Director);
	}
}