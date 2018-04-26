//@prepros-prepend jquery-3.1.1.js

$(document).ready(function(){
	$("h3").click(function(e){
	    e.preventDefault();
		var contenido = $(this).next(".bloueEvento");
		if(contenido.css("display")=="none"){ //open        
	        contenido.slideDown(400);
	        $(this).addClass("open");
	    }else{
	    	
	    	contenido.slideUp(400);
	    	$(this).removeClass("open"); 
	    }
	});
});