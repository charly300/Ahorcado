function Controller() {
	this.ventana = new Ventana();
	this.ahorcado = new Ahorcado();
	
	this.keyPressed = function(letra){
		try{
			ahorcado.tryLetter(letra);
			ventana.setPalabraUser(ahorcado.getPalabraUser());
		}
		catch(c){
			if(c instanceof WinFilmException){
				this.win();
				return;
			}
			if(c  instanceof LostFilmException){
				ventana.lostLife();
				this.lostFilm();
				ventana.setPalabraUser(c.title);
				return;
			}
			else{
				ventana.appendWrongLetter(c);
				ventana.lostLife();
			}
		}
	};
	
	
	this.win = function() {
		this.finishFilm();
		ventana.displayWinnerFilm();
	};
	
	this.updatePalabraUser = function(){
		ventana.setPalabraUser(ahorcado.getPalabraUser());
	};
	
	this.lostFilm = function() {
		this.finishFilm();
		ventana.displayLostFilm();
	};
	
	this.finishFilm = function(){
		ventana.hideInput();
		this.updatePalabraUser();
		ventana.displayFilmPoster(this.ahorcado.getPoster());
		ventana.setPoints(ahorcado.getPoints());
	};
	
	this.startGame = function(){
		ventana.deleteStart();
		ventana.displayLoading();
		ahorcado.setObserver(this);
		ahorcado.start();
	};
	
	
	this.filmReady = function(){
		ventana.setPalabraUser(ahorcado.getPalabraUser());
		ventana.setPoints(ahorcado.getPoints());
		ventana.createEnvironment();
	};
	
	this.playAgain = function() {
		ventana.displayLoading();
		ventana.cleanWrongLetters();
		ventana.clearPistas();
		ventana.clearPosterFilm();
		ventana.clearLifes();
		ahorcado.setObserver(this);
		ahorcado.playAgain();
	};
	
	this.solicitarPista = function(){
		try{
			ventana.addPista(ahorcado.getPista());
			ventana.setPoints(ahorcado.getPoints());
		}
		catch(e){
			if(e instanceof MaxCantPistasException)
				ventana.maxCantPistas();
		}
	};
}
