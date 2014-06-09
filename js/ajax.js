function objetoAjax(){
       var xmlhttp = false;
       try {
           xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
       } catch (e) {

           try {
               xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
           } catch (E) {
               xmlhttp = false; }
       }

       if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
         xmlhttp = new XMLHttpRequest();
       }
       return xmlhttp;
}


function send(url, parametros, before, after){

	Ajax = objetoAjax();

	if(before != null)
		before();
   //Abrimos una conexión AJAX pasando como parámetros el método de envío, y el archivo que realizará las operaciones deseadas
   	Ajax.open("GET", url, true);
	Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	Ajax.send(null);

	Ajax.onreadystatechange = function() {
  		if (Ajax.readyState == 4 && (Ajax.status == 200 || Ajax.status == 501)){
  			after(Ajax.responseText);
  		}
	};

}
