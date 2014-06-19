function LevelEasy(){
	this.lives = 6;
	
	this.lost = function() {
		this.lives--;
	}
}