//@prepros-prepend jquery-3.1.1.js

$(document).ready(function(){

	$(".lista").click(function(e){
        e.preventDefault();
        var contenido = $(this).next(".contenidoLista");
        var siguiente = $(this).children().children(".cruz");
        var fama = contenido.children().children(".beautifulStar");
        var estrellado = contenido.children().children().children(".starComen");

        if(contenido.css("display")=="none"){ //open        
        	contenido.slideDown(250);
        	siguiente.html('<i aria-hidden="true" class="fa fa-minus"></i>');
        	$(this).addClass("open");
     	}else{ //close       
        	contenido.slideUp(250);
        	siguiente.html('<i aria-hidden="true" class="fa fa-plus"></i>');
        	$(this).removeClass("open");  
        }

        if(estrellado.length){
        	estrellado.remove('slow');
        }else{
        	var col = '<div class="starComen">';
			for(var n = 1; n<=7; n++){
				col += '<i class="fa fa-star"></i>';
			}
		    col += '</div>';
		    fama.append(col);
		}

    });

	$(".eventLink").click(function(e){
		window.location.href = "informaEvento.html";
	});
	

});