var controller = new Controller();

function keyBoard(letra){
	controller.keyPressed(letra);
}

function start(){	
	controller.startGame();
}

function playAgain() {
	controller.playAgain();
}