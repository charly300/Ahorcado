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
				ventana.setPalabraUser(ahorcado.getPalabraUser());
				this.win();
				return;
			}
			if(c  instanceof LostFilmException)
				this.lostFilm();
			else
				ventana.appendWrongLetter(c);
		}
	}
	
	
	this.win = function() {
		this.finishFilm();
		ventana.displayWinnerFilm();
	}
	
	
	this.lostFilm = function() {
		this.finishFilm();
		ventana.displayLostFilm();
	}
	
	this.finishFilm = function(){
		ventana.hideInput();
		ventana.displayFilmPoster(this.ahorcado.getPoster());
		ventana.setPoints(ahorcado.getPoints());
	}
	
	this.startGame = function(){
		ventana.deleteStart();
		ventana.displayLoading();
		ahorcado.setObserver(this);
		ahorcado.start();
	}
	
	
	this.filmReady = function(){
		ventana.setPalabraUser(ahorcado.getPalabraUser());
		ventana.setPoints(ahorcado.getPoints());
		ventana.createEnvironment();
	}
	
	this.playAgain = function() {
		ventana.displayLoading();
		ventana.cleanWrongLetters();
		ahorcado.setObserver(this);
		ahorcado.playAgain();
	}
}
