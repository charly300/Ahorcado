var ahorcado = new Ahorcado();
var ventana = new Ventana();
var i = 0;
String.prototype.countLetterNoSpace = function(){
	var p = this.replace(/\:/g, ''); //QUITA LOS DOS PUNTOS
	p = p.replace(/\s/g, '');		 //QUITA LOS ESPACIOS
	p = p.replace(/\'/g, '');		 //QUITA LAS COMILLAS SIMPLES 
	p = p.replace(/\./g, '');		 //QUITA LOS PUNTOS
	return p.length;
};


function test(){
//	var vector = [];
//	
//	vector.push(f1);
//	vector.push(f2);
//	vector.push(f3);
//	
//	vector[i++]();
	

	
}



function f1(){
	console.log('Ejecutando F1');
}

function f2(){
	console.log('Ejecutando F2');	
}

function f3(){
	console.log('Ejecutando F3');
}