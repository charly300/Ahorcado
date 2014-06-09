function Ventana(){
	this.deleteStart = function(){
		var element = document.getElementById('start');
 		element.parentNode.removeChild(element);
	}

	this.createEnvironment = function(){
		/*document.getElementById('letraInputDiv').style.display = 'block';*/
		document.getElementById('resultUser').style.display = 'block';
		document.getElementById('keyBoard').style.display = 'block';
		document.getElementById('wrongLetters').style.display = 'block';
	}

	this.setPalabraUser = function(p){
		document.getElementById('resultUser').innerHTML = p;
	}

	this.appendWrongLetter = function(c){
		document.getElementById('wrongLetters').innerHTML += c;
	}


	this.getInputLetter = function(){
		return document.getElementById('inputLetter').value;
	}
}	
