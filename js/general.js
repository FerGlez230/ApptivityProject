//@prepros-prepend Chart.min.js
//@prepros-prepend jquery-3.1.1.js
//@prepros-prepend jquery.js
//@prepros-prepend jquery-ui.js
//@prepros-prepend jquery-ui.multidatespicker-v1.6.6.js
//@prepros-prepend jquery.magnific-popup.js
//@prepros-prepend jquery-confirm.min.js
//@prepros-prepend multiple-select.js

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
    
$(document).ready(function(){
  	//$('body').css({ 'width': $(window).width() + "px" });
  	//
  	
  	$('body').css({ 'margin-bottom': $(".footer").height() + "px" });

  	////////////////////////////////////////////////////////////////
  	///Pop up

    $('.simple-ajax-popup-align-top').click(function(e){
		$('.simple-ajax-popup-align-top').magnificPopup({
			type: 'ajax',
			alignTop: false,
			settings: null,
			closeOnBgClick: true,
			closeBtnInside: true,
	  		cursor: 'mfp-ajax-cur', // CSS class that will be added to body during the loading (adds "progress" cursor)
	 		tError: '<a href="%url%">The content</a> could not be loaded.', 
			overflowY: 'scroll'
		}).magnificPopup('open');
    	return false;
    });

    ////////////////////////////////////////////////////////////////
	
    ////////////////////////////////////////////////////////////////
    ///Lista desplegable

	$('.menD').find('ul').find('li').hover(function() {
    	$(this).children('ul').stop();
		$(this).children('ul').slideDown();
	}, function() {
		$(this).children('ul').stop();
		$(this).children('ul').slideUp();
	});

    ////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////
    ///Esconder formularios

    $('.raro').css({ 'padding-top': $('.local').height() - $('.contenedorRegistro').height() + $('.titulo').height() + "px" });

    $('#textUser').click(function(e){
    	//$('.raro').css({ 'padding-top': "0px" });
		$('.formularioUsuario').slideDown();
		$('.formularioInicio').slideUp();
    });

    $('#textCount').click(function(e){
		$('.formularioInicio').slideDown();
		$('.formularioUsuario').slideUp();
    });

    ////////////////////////////////////////////////////////////////
    ///Calendario

    $('#calendario').multiDatesPicker({
		minDate: 0,//hoy
		maxDate: 365,// 1 año de vigencia
		firstDay: 0,//comienza en domingo
		closeText: 'Cerrar',
	 	prevText: 'Anterior',
		nextText: 'Siguiente',
		currentText: 'Hoy',
		monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
		dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
		dayNamesShort: ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'],
		dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
		weekHeader: 'Sm',
		dateFormat: 'yy-mm-dd',
	});

	////////////////////////////////////////////////////////////////

	////////////////////////////////////////////////////////////////
	///Diseño para input file

    /* registroEvento, inicioEstablecimiento*/
    //Función para modificar el boton de examinar

	( function( $, window, document, undefined ){
		$('.inputfile' ).each( function()
		{
			var $input	 = $( this ),
				$label	 = $input.next( 'label' );
			$input.on( 'change', function( e )
			{
				var fileName = '';
				if( e.target.value )
					fileName = e.target.value.split( '\\' ).pop();

				if( fileName )
					$label.find('span').html(fileName);
			});
		});
	})( jQuery, window, document );

	////////////////////////////////////////////////////////////////

	////////////////////////////////////////////////////////////////
	///Contenedores de imagenes

	/* inicioEstablecimiento */
    //Establecer tamaño del contenedor de imagen

    var ancho = ($('.colum').width() / 12)*5;

  	$('.colimg').css({ 'height': ancho + "px" });
  	$('.colimg').css({ 'width': ancho + "px" });

  	/* evento */
  	//Establecer tamaño del contenedor de imagen
  	
  	var anchoE = ($('.bloqueEvento').width() / 15)*3;

  	$('.ilustracion').css({ 'height': anchoE + "px" });
  	$('.ilustracion').css({ 'width': anchoE + "px" });

  	////////////////////////////////////////////////////////////////

  	////////////////////////////////////////////////////////////////
  	///Previzualización de imagenes

  	/* inicioEstablecimiento */
  	//Función para previsualizar imagen

	$('#file-input').change(function(e) {
		addImage(e); 
	});

	function addImage(e){
		var file = e.target.files[0],
		imageType = /image.*/;

		if (!file.type.match(imageType))
		return;

		var reader = new FileReader();
		reader.onload = fileOnload;
		reader.readAsDataURL(file);
	}

	function fileOnload(e) {
		var result=e.target.result;
		$('#imgSalida').attr("src",result);
	}

	/* registroEvento */
  	//Función para previsualizar imagen

	$('#fileInput').change(function(e) {
		addImage2(e); 
	});

	function addImage2(e){
		var file = e.target.files[0],
		imageType = /image.*/;

		if (!file.type.match(imageType))
		return;

		var reader = new FileReader();
		reader.onload = fileOnload2;
		reader.readAsDataURL(file);
	}

	function fileOnload2(e) {
		var result = e.target.result;
		
		$('.prevImage').css('display', 'block');

  		var anchorE = ($('.prevImage').width() / 15)*9;
	  	$('.showImg').css({ 'height': anchorE + "px" });
	  	$('.showImg').css({ 'width': anchorE + "px" });

	  	$('#imgExit').attr("src",result);
	}

	/* registroPromocion */
  	//Función para previsualizar imagen

	$('#fileInputP').change(function(e) {
		addImage3(e); 
	});

	function addImage3(e){
		var file = e.target.files[0],
		imageType = /image.*/;

		if (!file.type.match(imageType))
		return;

		var reader = new FileReader();
		reader.onload = fileOnload3;
		reader.readAsDataURL(file);
	}

	function fileOnload3(e) {
		var result = e.target.result;
		
		$('.prevImageP').css('display', 'block');

  		var anchorE = ($('.prevImageP').width() / 15)*9;
	  	$('.showImgP').css({ 'height': anchorE + "px" });
	  	$('.showImgP').css({ 'width': anchorE + "px" });

	  	$('#imgExitP').attr("src",result);
	}

	////////////////////////////////////////////////////////////////
	
	////////////////////////////////////////////////////////////////
	///Agregar tablas de horario

	////////////////////////////////////////////////////////////////
	///Agregar tablas de horario

	/* registroEvento */
	//Funcion para agregar un nuevo bloque
	$('.agregarPeriodo a').on("click", function(event){
		event.preventDefault();
    	$(this).prop('disabled', false);

		var dates = "";
		var hourin = "";
		var hourend = "";

		hourin += $('#HoraInicio').val();
		hourend += $('#HoraTermino').val();
		dates += $('#calendario').multiDatesPicker('getDates');
		
		if(dates != "" && hourin != "" && hourend != ""){
			$('.muestraHorario').css('display', 'block');
			var id=$('#idDiasEv').val();
    	
			var cadena = dates.split(",");
			var dia = '<div class="selHour"> <select id=time' + id + '>';
			id++;
			$('#idDiasEv').val(id);
			for(var i=0; i<cadena.length; i++){
				dia += '<option value="' + cadena[i] + '">' + cadena[i] + '</option>' ;
				//alert(cadena[i]);
			}

			dia += '</select> </div>';
			var row = createRow({
				dateS: dia,
		    	inicio: $('#HoraInicio').val(),
		    	termino: $('#HoraTermino').val()
		  	});
		 	
		 	$('.muestraHorario table tbody').append(row); 
		 	$('#calendario').multiDatesPicker('resetDates', 'picked');
		}else{
			$.alert({
				icon: 'fa fa-warning',
			    title: '¡Datos sin seleccionar!',
			    content: 'Asegurese de haber seleccionado los días y, establecido una hora de inicio y fin.',
			    boxWidth: '30%',
    			useBootstrap: false,
			});
		}
    	
	});

	function createRow(data){
		var total = $('.muestraHorario tbody tr').length + 1;

		var tr = '<tr id="fila' + total + '">' ;
       	var boton = '<div class="elimiFile"> <a> Eliminar </a> </div>';
	        tr += '<td>' + total  + '</td>';
	        tr += '<td>' + data.dateS  + '</td>';
	        tr += '<td>' + data.inicio  + '</td>';
	        tr += '<td>' + data.termino  + '</td>';
	        tr += '<td>' + boton + '</td>';  
	    tr +='</tr>';
	    return tr;
	}	

	$('.muestraHorario').on('click', 'tbody tr .elimiFile', function(event){
		event.preventDefault();
    	$(this).closest('tr').remove();

    	var arreglo = [];
    	var nimI, i = -1, j;

    	$('.muestraHorario tbody tr').each(function(){
	    	var celdas = $(this).find('td');

	        celdas.each(function(){
	        	i++;
	        	arreglo[i] = $(this).html();
	     	});
	    
	    });

	    var tamanio = arreglo.length;

	    if(i > 0){
	    	j=0;
	    	for(i=0; i<=tamanio; i+=5){
	    		j++;
	    		nimI = parseInt(arreglo[i]);
		    	if(nimI != j && nimI > 0){
		    		var idFila = '#fila' + nimI;
		    		var trr = '<tr id="fila' + j + '">' ;
			       	var botonn = '<div class="elimiFile"> <a> Eliminar </a> </div>';
			       	var diaa =  '<select> <option value="volvo">Volvo</option> </select>';
				        trr += '<td>' + j  + '</td>';
				        trr += '<td>' + arreglo[i+1]  + '</td>';
				        trr += '<td>' + arreglo[i+2]  + '</td>';
				        trr += '<td>' + arreglo[i+3]  + '</td>';
				        trr += '<td>' + botonn + '</td>';  
				    trr +='</tr>';
		    		$('.muestraHorario table tbody').append(trr);
		    		$(idFila).closest('tr').remove();
		    	}
		    }
	    }else{
	    	$('.muestraHorario').css('display', 'none');
	    }
    });

    /* registroPromocion */
	//Funcion para agregar un nuevo bloque
	$('.agregarPeriodoP a').on("click", function(event){
		event.preventDefault();
    	$(this).prop('disabled', false);

		var dates = "";
		var hourin = "";
		var hourend = "";

		hourin += $('#HoraInicioP').val();
		hourend += $('#HoraTerminoP').val();
		dates += $('#calendario').multiDatesPicker('getDates');
		
		if(dates != "" && hourin != "" && hourend != ""){
			$('.muestraHorarioP').css('display', 'block');
			var id=$('#idDiasP').val();
			var cadena = dates.split(",");
			var dia = '<div class="selHourP"> <select id=timep' + id + '>';
			id++;
			$('#idDiasP').val(id);
			
			for(var i=0; i<cadena.length; i++){
				dia += '<option value="' + cadena[i] + '">' + cadena[i] + '</option>' ;
				//alert(cadena[i]);
			}

			dia += '</select> </div>';
			
			var row = createRowP({
				dateS: dia,
		    	inicio: $('#HoraInicioP').val(),
		    	termino: $('#HoraTerminoP').val()
		  	});
		 	
		 	$('.muestraHorarioP table tbody').append(row); 
		 	$('#calendario').multiDatesPicker('resetDates', 'picked');
		}else{
			$.alert({
				icon: 'fa fa-warning',
			    title: '¡Datos sin seleccionar!',
			    content: 'Asegurese de haber seleccionado los días y, establecido una hora de inicio y fin.',
			    boxWidth: '30%',
    			useBootstrap: false,
			});
		}
    	
	});

	function createRowP(data){
		var total = $('.muestraHorarioP tbody tr').length + 1;

		var tr = '<tr id="filap' + total + '">' ;
       	var boton = '<div class="elimiFile"> <a> Eliminar </a> </div>';
	        tr += '<td>' + total  + '</td>';
	        tr += '<td>' + data.dateS  + '</td>';
	        tr += '<td>' + data.inicio  + '</td>';
	        tr += '<td>' + data.termino  + '</td>';
	        tr += '<td>' + boton + '</td>';  
	    tr +='</tr>';
	    return tr;
	}	

	$('.muestraHorarioP').on('click', 'tbody tr .elimiFile', function(event){
		event.preventDefault();
    	$(this).closest('tr').remove();

    	var arreglo = [];
    	var nimI, i = -1, j;

    	$('.muestraHorarioP tbody tr').each(function(){
	    	var celdas = $(this).find('td');

	        celdas.each(function(){
	        	i++;
	        	arreglo[i] = $(this).html();
	     	});
	    
	    });

	    var tamanio = arreglo.length;

	    if(i > 0){
	    	j=0;
	    	for(i=0; i<=tamanio; i+=5){
	    		j++;
	    		nimI = parseInt(arreglo[i]);
		    	if(nimI != j && nimI > 0){
		    		var idFila = '#filap' + nimI;
		    		var trr = '<tr id="filap' + j + '">' ;
			       	var botonn = '<div class="elimiFile"> <a> Eliminar </a> </div>';
				        trr += '<td>' + j  + '</td>';
				        trr += '<td>' + arreglo[i+1]  + '</td>';
				        trr += '<td>' + arreglo[i+2]  + '</td>';
				        trr += '<td>' + arreglo[i+3]  + '</td>';
				        trr += '<td>' + botonn + '</td>';  
				    trr +='</tr>';
		    		$('.muestraHorarioP table tbody').append(trr);
		    		$(idFila).closest('tr').remove();
		    	}
		    }
	    }else{
	    	$('.muestraHorarioP').css('display', 'none');
	    }
    });

    /*Registro Establecimiento*/
    //función para agregar horario

    $('.agregarHorario a').on("click", function(event){

    	var hourin = "";
		var hourend = "";
		var dates = "";
		var id=$('#idDias').val();
    	var sema = '<div class="selDay"> <select id=dias' +id+'>';
    	id++;
		$('#idDias').val(id);
		$(".contenedorDias input:checkbox:checked").each(function() {
            //alert($(this).val());
            dates += $(this).val();
        	sema += '<option value="' + $(this).val() + '">' + $(this).val() + '</option>' ;
        });

        hourin += $('#HoraInicioE').val();
		hourend += $('#HoraTerminoE').val();
		
		sema += '</select> </div>';

		if(dates != "" && hourin != "" && hourend != ""){
			//alert("Hola");
			$('.muestraTime').css('display', 'block');
			
			var row = createRD({
				dateS: sema,
		    	inicio: $('#HoraInicioE').val(),
		    	termino: $('#HoraTerminoE').val()
		  	});
		 	
		 	$('.muestraTime table tbody').append(row);
		 	$(".contenedorDias input:checkbox").each(function(){
	            //alert($(this).val());
	            //$(this).attr('checked', false);
	            $(this).prop('checked', false);
	        });
		}else{
			$.alert({
				icon: 'fa fa-warning',
			    title: '¡Datos sin seleccionar!',
			    content: 'Asegurese de haber seleccionado los días y, establecido una hora de inicio y fin.',
			    boxWidth: '30%',
    			useBootstrap: false,
			});
		}
    });

    function createRD(data){
		var total = $('.muestraTime tbody tr').length + 1;

		var tr = '<tr id="filaR' + total + '">' ;
       	var boton = '<div class="elimiFiles"> <a> Eliminar </a> </div>';
	        tr += '<td>' + total  + '</td>';
	        tr += '<td>' + data.dateS  + '</td>';
	        tr += '<td>' + data.inicio  + '</td>';
	        tr += '<td>' + data.termino  + '</td>';
	        tr += '<td>' + boton + '</td>';  
	    tr +='</tr>';
	    return tr;
	}

	$('.muestraTime').on('click', 'tbody tr .elimiFiles', function(event){
		event.preventDefault();
    	$(this).closest('tr').remove();

    	var arreglo = [];
    	var nimI, i = -1, j;

    	$('.muestraTime tbody tr').each(function(){
	    	var celdas = $(this).find('td');

	        celdas.each(function(){
	        	i++;
	        	arreglo[i] = $(this).html();
	     	});
	    
	    });

	    var tamanio = arreglo.length;

	    if(i > 0){
	    	j=0;
	    	for(i=0; i<=tamanio; i+=5){
	    		j++;
	    		nimI = parseInt(arreglo[i]);
		    	if(nimI != j && nimI > 0){
		    		var idFila = '#filaR' + nimI;
		    		var trr = '<tr id="filaR' + j + '">' ;
			       	var botonn = '<div class="elimiFiles"> <a> Eliminar </a> </div>';
				        trr += '<td>' + j  + '</td>';
				        trr += '<td>' + arreglo[i+1]  + '</td>';
				        trr += '<td>' + arreglo[i+2]  + '</td>';
				        trr += '<td>' + arreglo[i+3]  + '</td>';
				        trr += '<td>' + botonn + '</td>';  
				    trr +='</tr>';
		    		$('.muestraTime table tbody').append(trr);
		    		$(idFila).closest('tr').remove();
		    	}
		    }
	    }else{
	    	$('.muestraTime').css('display', 'none');
	    }
    });

    ////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////
    ///Diseño del multiple select
    
    /*registroEvento*/
    //Funcion para múltiple select
    
    $('#categorias').multipleSelect({
        multiple: true,
        multipleWidth: 150,
        width: '100%'
    });

    ////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    ///Inicio Cliente
    
  	$('.userImage').css({ 'height': $('.imagen').width() + "px" });
  	$('.userImage').css({ 'width': $('.imagen').width() + "px" });
	
	$(".eventoTitulo").click(function(e){
	    e.preventDefault();
		var contenido = $(this).next(".bloqueEvento");
		if(contenido.css("display")=="none"){ //open        
	        contenido.slideDown(400);
	        $(this).addClass("open");
	    }else{
	    	
	    	contenido.slideUp(400);
	    	$(this).removeClass("open"); 
	    }
	});

});

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

//OJO: hace falta validación de precios
/*function ValidarEvento()
{
	var contador=true;
	var NombrePromocion=document.Promocion.NombrePromocion.value;
	var Descripcion=document.Promocion.DescripcionProm.value;
	var PrecioInferior=document.Promocion.PrecioInferior.value;
	var PrecioSuperior=document.Promocion.PrecioSuperior.value;
	contador=ValidarSoloNumeros(PrecioSuperior, " precio superior ")
	if(contador==false){return contador;}
	contador=ValidarSoloNumeros(PrecioInferior, " precio inferior ")
	if(contador==false){return contador;}
	if(PrecioInferior>PrecioSuperior)
	{
		alert("El precio inferior no puede ser mayor al superior");
		return false;
	}
	contador=VerificarHorario(HoraInicio, HoraTermino);
	if(contador==false){return contador;}
}*/

/*function EnviarDatosRegistro()
{
	try
    {
    	 $.ajax({
            method: 'POST',
            url: 'http://localhost:15178/WebService.asmx/HelloWorld',            
            data: "{'Usuario':'" + "Roy Cruz" + "'}",
            contentType: 'application/json; utf-8',
            dataType: 'json',
            success: function (data) {
                if (data.d != null) {
                    alert(data.d);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {                
            }
 
        }); 
      /* $.ajax({
       	 //type: 'POST',
    	 dataType: 'jsonp',
    	 cache: false,
         type: "POST",
         url: "http://localhost:15178/WebService.asmx/agregarEstablecimiento",
          data: JSON.stringify({username: "jin", correo: "jin@gmail.com", password: "1423232", Nombre: "Jin", ApellidoPaterno: "Seok", ApellidoMaterno: "Kim"}),
         contentType: "application/json; charset=utf-8",
         //beforeSend: function(request) {
      		//request.setRequestHeader("Access-Control-Allow-Origin", '*');
   			 //},
         success: function (response) {
                 var names = response.d;
                 alert(names);},
         //dataType: "json",
         failure:  function (response) {
                 alert(response.d);
             }
      });
    }
    catch (e)
    {
        alert('failed to call web service. Error: ' + e);
    }
}*/


////////////////////////////////////////////////////////////////////////////////////////////////////



/*$('#r').on("click", function(event){
	    	resultadoAnio(2018);
	    });*/

/*$("#diasEvento select[name=dias]").change(function(event){
		alert("jin");
    	var id=$(".contenidoSelect select[name=dias] option:selected").val();
    	//alert("fer");
    	$("select[name=hora] > option[value="+ id +"]").attr("selected",true)
    	//$Siguiente=$(this).next(".contenidoHora select[name=hora] option[value="+ id +"]");
    	//$Siguiente.attr("selected",true);
	});*/