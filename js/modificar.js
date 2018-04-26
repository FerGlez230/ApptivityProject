//@prepros-prepend jquery-3.1.1.js

$(document).ready(function(){
	$('.agregarPeriodoMP a').on("click", function(event){
		event.preventDefault();
    	$(this).prop('disabled', false);

		var dates = "";
		var hourin = "";
		var hourend = "";

		hourin += $('#HoraInicioMP').val();
		hourend += $('#HoraTerminoMP').val();
		dates += $('#calendario').multiDatesPicker('getDates');
		
		if(dates != "" && hourin != "" && hourend != ""){
			$('.muestraHorarioMP').css('display', 'block');
			
			var cadena = dates.split(",");
			var dia = '<div class="selHour"> <select id="time"' + cadena[0] + '>';
			
			for(var i=0; i<cadena.length; i++){
				dia += '<option value="' + cadena[i] + '">' + cadena[i] + '</option>' ;
				//alert(cadena[i]);
			}

			dia += '</select> </div>';
			var row = createMP({
				dateS: dia,
		    	inicio: $('#HoraInicioMP').val(),
		    	termino: $('#HoraTerminoMP').val()
		  	});
		 	
		 	$('.muestraHorarioMP table tbody').append(row); 
		 	$('#calendario').multiDatesPicker('resetDates', 'picked');
		}else{
			alert("Ingrese datos antes");
		}
    	
	});

	function createMP(data){
		var total = $('.muestraHorarioMP tbody tr').length + 1;

		var tr = '<tr id="filaMP' + total + '">' ;
       	var boton = '<div class="elimiFile"> <a> Eliminar </a> </div>';
	        tr += '<td>' + total  + '</td>';
	        tr += '<td>' + data.dateS  + '</td>';
	        tr += '<td>' + data.inicio  + '</td>';
	        tr += '<td>' + data.termino  + '</td>';
	        tr += '<td>' + boton + '</td>';  
	    tr +='</tr>';
	    return tr;
	}	

	$('.muestraHorarioMP').on('click', 'tbody tr .elimiFile', function(event){
		event.preventDefault();
    	$(this).closest('tr').remove();

    	var arreglo = [];
    	var nimI, i = -1, j;

    	$('.muestraHorarioMP tbody tr').each(function(){
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
		    		var idFila = '#filaMP' + nimI;
		    		var trr = '<tr id="filaMP' + j + '">' ;
			       	var botonn = '<div class="elimiFile"> <a> Eliminar </a> </div>';
			       	var diaa =  '<select> <option value="volvo">Volvo</option> </select>';
				        trr += '<td>' + j  + '</td>';
				        trr += '<td>' + arreglo[i+1]  + '</td>';
				        trr += '<td>' + arreglo[i+2]  + '</td>';
				        trr += '<td>' + arreglo[i+3]  + '</td>';
				        trr += '<td>' + botonn + '</td>';  
				    trr +='</tr>';
		    		$('.muestraHorarioMP table tbody').append(trr);
		    		$(idFila).closest('tr').remove();
		    	}
		    }
	    }else{
	    	$('.muestraHorarioMP').css('display', 'none');
	    }
    });

    $('#fileInputMP').change(function(e) {
		addImage4(e);
	});

	function addImage4(e){
		var file = e.target.files[0],
		imageType = /image.*/;

		if (!file.type.match(imageType))
		return;

		var reader = new FileReader();
		reader.onload = fileOnload4;
		reader.readAsDataURL(file);
	}

	function fileOnload4(e) {
		var result = e.target.result;
		
		$('.prevImageMP').css('display', 'block');

  		var anchorE = ($('.prevImageMP').width() / 15)*9;
	  	$('.showImgMP').css({ 'height': anchorE + "px" });
	  	$('.showImgMP').css({ 'width': anchorE + "px" });

	  	$('#imgExitMP').attr("src",result);
	}


	$('.agregarPeriodoME a').on("click", function(event){
		event.preventDefault();
    	$(this).prop('disabled', false);

		var dates = "";
		var hourin = "";
		var hourend = "";

		hourin += $('#HoraInicioME').val();
		hourend += $('#HoraTerminoME').val();
		dates += $('#calendario').multiDatesPicker('getDates');
		
		if(dates != "" && hourin != "" && hourend != ""){
			$('.muestraHorarioME').css('display', 'block');
			
			var cadena = dates.split(",");
			var dia = '<div class="selHour"> <select id="time"' + cadena[0] + '>';
			
			for(var i=0; i<cadena.length; i++){
				dia += '<option value="' + cadena[i] + '">' + cadena[i] + '</option>' ;
				//alert(cadena[i]);
			}

			dia += '</select> </div>';
			var row = createME({
				dateS: dia,
		    	inicio: $('#HoraInicioME').val(),
		    	termino: $('#HoraTerminoME').val()
		  	});
		 	
		 	$('.muestraHorarioME table tbody').append(row); 
		 	$('#calendario').multiDatesPicker('resetDates', 'picked');
		}else{
			alert("Ingrese datos antes");
		}
    	
	});

	function createME(data){
		var total = $('.muestraHorarioME tbody tr').length + 1;

		var tr = '<tr id="filaME' + total + '">' ;
       	var boton = '<div class="elimiFile"> <a> Eliminar </a> </div>';
	        tr += '<td>' + total  + '</td>';
	        tr += '<td>' + data.dateS  + '</td>';
	        tr += '<td>' + data.inicio  + '</td>';
	        tr += '<td>' + data.termino  + '</td>';
	        tr += '<td>' + boton + '</td>';  
	    tr +='</tr>';
	    return tr;
	}	

	$('.muestraHorarioME').on('click', 'tbody tr .elimiFile', function(event){
		event.preventDefault();
    	$(this).closest('tr').remove();

    	var arreglo = [];
    	var nimI, i = -1, j;

    	$('.muestraHorarioME tbody tr').each(function(){
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
		    		var idFila = '#filaME' + nimI;
		    		var trr = '<tr id="filaME' + j + '">' ;
			       	var botonn = '<div class="elimiFile"> <a> Eliminar </a> </div>';
			       	var diaa =  '<select> <option value="volvo">Volvo</option> </select>';
				        trr += '<td>' + j  + '</td>';
				        trr += '<td>' + arreglo[i+1]  + '</td>';
				        trr += '<td>' + arreglo[i+2]  + '</td>';
				        trr += '<td>' + arreglo[i+3]  + '</td>';
				        trr += '<td>' + botonn + '</td>';  
				    trr +='</tr>';
		    		$('.muestraHorarioME table tbody').append(trr);
		    		$(idFila).closest('tr').remove();
		    	}
		    }
	    }else{
	    	$('.muestraHorarioME').css('display', 'none');
	    }
    });

    $('#fileInputME').change(function(e) {
		addImage5(e);
	});

	function addImage5(e){
		var file = e.target.files[0],
		imageType = /image.*/;

		if (!file.type.match(imageType))
		return;

		var reader = new FileReader();
		reader.onload = fileOnload5;
		reader.readAsDataURL(file);
	}

	function fileOnload5(e) {
		var result = e.target.result;
		
		$('.prevImageME').css('display', 'block');

  		var anchorE = ($('.prevImageME').width() / 15)*9;
	  	$('.showImgME').css({ 'height': anchorE + "px" });
	  	$('.showImgME').css({ 'width': anchorE + "px" });

	  	$('#imgExitME').attr("src",result);
	}

});