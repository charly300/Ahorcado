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
			if(c  instanceof LostFilmException)
				this.livesLost();
			else
				ventana.appendWrongLetter(c);
		}
	}
	
	
	this.win = function() {
		ventana.displayWinner();
	}
	
	
	this.livesLost = function(){
		ventana.displayLivesLost();
		console.log(this.ahorcado.getPoster());
		ventana.displayFilmPoster(this.ahorcado.getPoster());
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
