//@prepros-prepend jquery-3.1.1.js

$(document).ready(function(){

    $(".optionState").val(1);

    var opcion;
    $( ".optionState" ).change(function () {
        $( ".optionState option:selected" ).each(function() {
            opcion = $(this).val();
            creaBloque(opcion);
        });
    }).change();

    //var valor = $(".busqueda form input:first").val();
    $(".busqueda form").submit( function(event){
        creaBloque($(".optionState option:selected").val());
        //alert(valor);
        //$(location).attr('href', 'topEvento.php');
        //$.when(alert("jaj")).then(alert("Fuck"));
        //$("input:first").val("Hola");
        event.preventDefault();
    });

    /*$(".busqueda form input:first").on('keyup', function(){
        creaBloque($(".optionState option:selected").val());
    }).keyup();*/
    
    function creaBloque(opc){
        valor = $(".busqueda form input:first").val();
        var datos = {
                "opc" : opc,
                "valor" : valor
        };
        $.ajax({
            type: 'POST',
            url: 'lib/listaEvento.php',
            data: datos,
            success:function(data){
                //alert(data);
                var valores = eval(data);
                
                var evento = valores[0];
                var estrella = valores[1];

                $(".mitadC").remove();

                for(var i=0; i<valores.length; i++){
                    var evento = valores[i];

                    var eventoNum = evento[0];
                    var visitaTotal = evento[1];
                    var estrellas = evento[2];
                    var comentarios = evento[3];
                    var cuenta = evento[4];
                    var llave = evento[5];

                    var columna = '<div class="mitadC">';

                    if(i) columna += '<h1> Eventos con más estrellas </h1><div class="estrellado">';
                    else columna += '<h1> Eventos más visitados </h1><div class="concurrencia">';

                    var limite;

                    if(eventoNum.length >= 15 && valor.length > 0) limite = 15;
                    else limite = eventoNum.length;

                    for(var y=0; y<limite; y++){
                        columna += '<div class="lista"><ul>';
                        var num = y+1;
                        columna += '<li><p>' + cuenta[y] + '.</p></li>';
                        columna += '<li class="eventLink"><form action="informaEvento.php" method="post" id="testForm">';
                        columna += '<input type="hidden" name="eventoId" value="' + llave[y] + '">';
                        columna += '<a>' + eventoNum[y] + '</a></form></li>';
                        columna += '<li class="cruz"><i aria-hidden="true" class="fa fa-plus"></i></li>';
                        columna += '</ul></div>';

                        columna += '<div class="contenidoLista"><div class="contenerilo">';

                        columna += '<div class="beautifulStar"><div class="starComen">';

                        var numero = estrellas[y]/visitaTotal[y];
                        numero = numero.toFixed();

                        for(var n = 1; n<=7; n++){
                            if(n<=numero){
                                columna += '<i class="fa fa-star"></i>';
                            }else{
                                columna += '<i class="fa fa-star-o"></i>';
                            }
                        }

                        columna += '</div></div>';

                        var fragmento = comentarios[y];
                        for(var z=0; z<fragmento.length; z++){
                            var pedazo = fragmento[z];
                            var usuario = pedazo[0];
                            var fecha = pedazo[1];
                            var texto = pedazo[2];

                            columna += '<div class="comentario"><div class="datoComen">';
                            columna += '<div class="nombre"><h1>' + usuario + '</h1></div>';
                            columna += '<div class="fecha"><h1>' + fecha + '</h1></div></div>';

                            columna += '<div class="contenidoComen">' + texto +'</div></div>';

                        }

                        columna += '</div></div>';

                    }

                    columna += '</div></div>';

                    $('.informacionTop').append(columna);
                }


            }

        });
    }

    //$(".lista").off('click');
	$(document).on("click", ".lista", function(e){
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

    });

    $(document).on("click", ".eventLink", function(e){
		$('#testForm').submit();
	});

});