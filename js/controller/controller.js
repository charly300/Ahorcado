var ahorcado = new Ahorcado();
var ventana = new Ventana();

function keyBoard(letra){
	try{
		ahorcado.tryLetter(letra);
		ventana.setPalabraUser(ahorcado.getPalabraUser());
	}
	catch(c){
		ventana.appendWrongLetter(c);
	}
}

function start(){	
	ventana.deleteStart();
	ventana.createEnvironment();

	ventana.setPalabraUser(ahorcado.getPalabraUser());
}


