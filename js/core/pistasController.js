function PistasController(film){
	this.film; 
	this.cant = 3;
	this.film = film;
	var i = 0;
	var f = [];
	
	
	
	this.getPista = function(){
		var r;
		if(--this.cant < 0)
			throw new MaxCantPistasException();
		
		r = f[i++]();
		while(!r)
			r = f[i++]();
		
		return r;
	}
	
	this.getPistaDirector = function(){
		if(film.Director == 'N/A')
			return false;
		return new Pista("Director", film.Director);
	}
	
	this.getPistaYear = function(){
		if(film.anio == 'N/A')
			return false;
		return new Pista("Year", film.Year);
	}
	
	this.getPistaActors = function(){
		return new Pista("Actors", film.Actors);
	}
	
	
	f.push(this.getPistaDirector);
	f.push(this.getPistaYear);
	f.push(this.getPistaActors);
}