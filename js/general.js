//@prepros-prepend jquery-3.1.1.js
//@prepros-prepend jquery-ui.js
//@prepros-prepend slick.js
//@prepros-prepend jquery-ui.multidatespicker-v1.6.6.js
//@prepros-prepend jquery.magnific-popup.js 

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
	//alert("Hola");
  	$('body').css({ 'width': $(window).width() + "px" });
  	
  	$("body").on('submit','.formData1',function(e){
        if($("#form1")[0].checkValidity()){
            $(':input[type="submit"]').prop('disabled', 'disabled');
            $(':input[type="submit"]').attr("disabled","disabled").css("cursor", "not-allowed").fadeTo(500,0.2);
            var data = new FormData(this);
            $.ajax({
                url: "lib/recopilarDatos.php",
                type: "post",
                data: data,
                cache: false,
                contentType: false,
                processData: false,
                success: function(data){
                    console.log(data);
                    $(':input[type="submit"]').prop('abled', 'abled');
                    $(':input[type="submit"]').attr("abled", "abled").css("cursor", "pointer").fadeTo(500, 1);
                    if(data=="true"){
                        alert("Data was sent, thank you");
                    }
                    else{
                        alert("An error happened ):");
                    }
                }
            });
            return false;
        }
        else{
            $("#validador1").click();
            return false;
        }
    });

    $('.simple-ajax-popup-align-top').click(function(e){
    	//console.log("Hola");
    	//alert("Hola");
		$('.simple-ajax-popup-align-top').magnificPopup({
			type: 'ajax',
			alignTop: false,
			settings: null, 
	  		cursor: 'mfp-ajax-cur', // CSS class that will be added to body during the loading (adds "progress" cursor)
	 		tError: '<a href="%url%">The content</a> could not be loaded.', 
			overflowY: 'scroll'
		}).magnificPopup('open');
		//$('.simple-ajax-popup-align-top').magnificPopup('open');
    	//e.preventDefault();
    	return false;
    });

    /*$('.popup-with-form').unbind( "click" ).click(function(e){
    	//console.log("Hola");
    	alert("Hola");
		$('.popup-with-form').magnificPopup({
			type: 'ajax',
			alignTop: false,
			settings: null, 
	  		cursor: 'mfp-ajax-cur', // CSS class that will be added to body during the loading (adds "progress" cursor)
	 		tError: '<a href="%url%">The content</a> could not be loaded.', 
			overflowY: 'scroll'
		}).magnificPopup('open');
		//$('.simple-ajax-popup-align-top').magnificPopup('open');
    	e.preventDefault();
    	$('.formImage').remove();
    	return false;
    });*/

    
    //Formularios del index

    //$('.raro').css({ 'padding-top': $('.formularioUsuario').height()-130 + "px" });
    
    $('.raro').css({ 'padding-top': $('.formularioUsuario').height() - $('.formularioInicio').height() + "px" });

    $('#textUser').click(function(e){
    	//$('.raro').css({ 'padding-top': $('.formularioInicio').height()-130 + "px" });
    	$('.raro').css({ 'padding-top': "0px" });
    	$('.formularioUsuario').css('display', 'block');
		$('.formularioInicio').css('display', 'none');
		//alert($('html').height());
    });

    $('#textCount').click(function(e){
    	//$('.raro').css({ 'padding-top': $('.formularioUsuario').height()-130 + "px" });
		$('.raro').css({ 'padding-top': $('.formularioUsuario').height() - $('.formularioInicio').height() + "px" });
		$('.formularioInicio').css('display', 'block');
		$('.formularioUsuario').css('display', 'none');
		//alert($('html').height());
    });

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
		dateFormat: 'dd/mm/yy',
	});

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

	/* registroEvento */
	//Funcion para agregar un nuevo bloque
	$('.agregarPeriodo a').on("click", function(event){
		event.preventDefault();
    	$(this).prop('disabled', false);

    	$('.muestraHorario').css('display', 'block');
		const row = createRow({
	    	inicio: $('#HoraInicio').val(),
	    	termino: $('#HoraTermino').val()
	  	});
	 	
	 	$('.muestraHorario table tbody').append(row);
	});

	function createRow(data){
		var total = $('.muestraHorario tbody tr').length + 1;

		return(
		    `<tr id = "fila${ total }">` +
		      `<td> ${ total } </td>` +
		      `<td> 10/02/18 </td>` +
		      `<td> ${ data.inicio } </td>` +
		      `<td> ${ data.termino } </td>` +
		      `<td> <div class="elimiFile"> <a> Eliminar </a> </div> </td>` +
		    `</tr>`
		);
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
		    		const roww = (
		    			`<tr id = "fila${ j }">` +
				    	`<td> ${ j } </td>` +
				    	`<td> ${ arreglo[i+1] } </td>` +
				    	`<td> ${ arreglo[i+2] } </td>` +
				    	`<td> ${ arreglo[i+3] } </td>` +
				    	`<td> <div class="elimiFile"> <a> Eliminar </a> </div> </td>` +
				    	`</tr>`
		    		);
		    		$('.muestraHorario table tbody').append(roww);
		    		$(`#fila${ nimI }`).closest('tr').remove();
		    		
		    	}
		    }
	    }else{
	    	$('.muestraHorario').css('display', 'none');
	    }
    });



});

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

/* headerEstablecimiento */
//Función despliegue menú

function muestraLista() {
	document.getElementById("despliegoE").classList.toggle("show");
}

window.onclick = function(e) {
	if (!e.target.matches('.desbotonE')) {
		var myDropdown = document.getElementById("despliegoE");
		if (myDropdown.classList.contains('show')) {
			myDropdown.classList.remove('show');
		}
	}
}

/* index */
//Funciones para visualizar formularios

/*function escondeR(){
	document.getElementByClass('formularioInicio').style.display = 'none';
	document.getElementByClass('formularioUsuario').style.display = 'block';
}

function escondeI(){
	document.getElementById('registro').style.display = 'block';
	document.getElementById('inicio').style.display = 'none';
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////////

function ValidarEvento(){
	var contador=true;
	var NombreEvento=document.Evento.NombreEvento.value;
	var Descripcion=document.Evento.Descripcion.value;
	var PrecioInferior=document.Evento.PrecioInferior.value;
	var PrecioSuperior=document.Evento.PrecioSuperior.value;
	contador=ValidarSoloNumeros(PrecioSuperior, " precio superior ")
	if(contador==false){ return contador; }
	contador=ValidarSoloNumeros(PrecioInferior, " precio inferior ")
	if(contador==false){ return contador; }
	
	if(PrecioInferior>PrecioSuperior){
		alert("El precio inferior no puede ser mayor al superior");
		return false;
	}
	
	contador=VerificarHorario(HoraInicio, HoraTermino);
	if(contador==false){ return contador; }
}

function ValidarRegistroEstablecimiento(){
	var contador=true;
	var NombreEstablecimiento=document.RegistroEstablecimiento.NombreEstablecimiento.value;
	var Descripcion=document.RegistroEstablecimiento.Descripcion.value;
	var Usuario=document.RegistroEstablecimiento.Usuario.value;
	var ApellidoMaterno=document.RegistroEstablecimiento.ApellidoMaterno.value;
	var ApellidoPaterno=document.RegistroEstablecimiento.ApellidoPaterno.value;
	var Username=document.RegistroEstablecimiento.Username.value;
	var CorreoElectronico=document.RegistroEstablecimiento.CorreoElectronico.value;
	var Contrasena=document.RegistroEstablecimiento.Contrasena.value;
	var ConfirmarContrasena=document.RegistroEstablecimiento.ConfirmarContrasena.value;
	contador=ValidarTextComun(Usuario, "usuario");
	if(contador==false){ return contador; }
	contador=ValidarTextComun(ApellidoPaterno, "apellido paterno");
	if(contador==false){ return contador; }
	if(ApellidoMaterno!=""){contador=ValidarTextComun(ApellidoMaterno, "apellido materno");if(contador==false){return contador;}}
	contador=ValidarCorreo(CorreoElectronico);
	if(contador==false){ return contador; }
	contador=ValidarContrasena(Contrasena);
	if(contador==false){ return contador; }
	contador=ContrasenasIguales(Contrasena, ConfirmarContrasena);
	if(contador==false){ return contador; }
}

function ValidarRegistroUsuario(){
	var contador=true;
	var Usuario=document.RegistroUsuario.Usuario.value;
	var ApellidoMaterno=document.RegistroUsuario.ApellidoMaterno.value;
	var ApellidoPaterno=document.RegistroUsuario.ApellidoPaterno.value;
	var Username=document.RegistroUsuario.Username.value;
	var CorreoElectronico=document.RegistroUsuario.CorreoElectronico.value;
	var Contrasena=document.RegistroUsuario.Contrasena.value;
	var ConfirmarContrasena=document.RegistroUsuario.ConfirmarContrasena.value;
	contador=ValidarTextComun(Usuario, "usuario");
	if(contador==false){ return contador; }
	contador=ValidarTextComun(ApellidoPaterno, "apellido paterno");
	if(contador==false){ return contador; }
	if(ApellidoMaterno!=""){contador=ValidarTextComun(ApellidoMaterno, "apellido materno");if(contador==false){return contador;}}
	contador=ValidarCorreo(CorreoElectronico);
	if(contador==false){ return contador; }
	contador=ValidarContrasena(Contrasena);
	if(contador==false){ return contador; }
	contador=ContrasenasIguales(Contrasena, ConfirmarContrasena);
	if(contador==false){ return contador; }
}

function ValidarTextComun(Campo, NombreCampo){
	var Letras = /^[a-zA-Z]*$/;
	if(!Campo.search(Letras)){
	}else{
		window.alert("El campo "+NombreCampo+" sólo permite caracteres de la A-Z");
		return false;
	}
}

function ValidarSoloNumeros(Campo, NombreCampo){
	var Numeros= /^[0-9]+([,][0-9]+)?$/;
	if(Campo.search(Numeros)){
		window.alert("El campo" +NombreCampo+ "sólo acepta números");
		return false;
	}
}

function ValidarCorreo(Campo){
	var PatronCorreo=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	if(Campo.search(PatronCorreo)){
		window.alert("Su correo probablemente tenga un error");
		return false;
	}
}

function ValidarContrasena(Campo){
	var PatronContrasena=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d]|[^ ]){8,}/;//Busca por lo menos una minuscula, mayúscula, dígito y por lo menos 8 caracteres
	if(!Campo.search(PatronContrasena)){
	}else{
		alert("Su contraseña no coincide con alguno de los requisitos: \nUna mayúscula \nUna minúscula\nUna letra\nPor lo menos 8 caracteres\nSin espacios en blanco");
		return false;
	}
}

function ContrasenasIguales(Contrasena, Contrasena2){
	if(Contrasena!=Contrasena2){
		window.alert("Las contraseñas no coinciden");
		return false;
	}
}

function NuevoHorario(){
	var DiasSeleccionados= new Array();
	var Registros=new Array();
	var HoraInicio=document.RegistroEstablecimiento.HoraInicio.value;
	var HoraTermino=document.RegistroEstablecimiento.HoraTermino.value;
	VerificarHorario(HoraInicio, HoraTermino);
	var DiasCheck=document.getElementsByName('diasSemana');
	for(var i=0; i<7; i++){
		if(DiasCheck[i].checked){
			DiasSeleccionados[i]=i+1;
			window.alert(DiasSeleccionados[i]);
		}
	}
	/*for (var j = 0; j < DiasSeleccionados.length; j++) 
	{
		Registros[j]=(HoraInicio+HoraTermino+DiasSeleccionados[j]);
	}*/
}

function VerificarHorario(HoraInicio, HoraTermino){
	if(HoraInicio>=HoraTermino){
		window.alert("La hora de inicio no puede ser mayor a la hora de termino");
		return false;
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////

function CargarMapaInicial()
{
	var outputmapa=document.getElementById('mapa');// div para conetenr el mapa	
	navigator.geolocation.getCurrentPosition(localization,error);
	function localization()
	{
		var latitude= 20.703004;
		var longitude= -103.390141;
		var gLatLong= new google.maps.LatLng(latitude,longitude);
		var objConfig=
		{
			zoom: 16,
			center: gLatLong
		}
		var gMap= new google.maps.Map(outputmapa, objConfig);
	}
	function error()
	{
		output.innerHTML="<br> No se pudo cargar el mapa inicial. Recargue la página";
	}
}
function FindMeByAddress()
{
	var outputmapa=document.getElementById('mapa');// div para conetenr el mapa
	var geocoder = new google.maps.Geocoder();//objeto para la geolocalización inversa
	var address = document.getElementById('address').value;
	/*var options = {
		types: ['(cities)'],
		componentRestrictions: {country: 'mx'}
		};
	autocomplete = new google.maps.places.Autocomplete(address, options);
	autocomplete_textarea = new google.maps.places.Autocomplete(address,
		{ types: ['geocode'] });
		google.maps.event.addListener(autocomplete_textarea, 'place_changed', function() {
		fillInAddress_textarea();});
	function fillInAddress_textarea(){
		var place = autocomplete_textarea.getPlace();
		console.log( place.formatted_address );
		console.log( JSON.stringify(place) );
		$('#address').val( place.formatted_address );
	}*/
	var latitude= 20.703004;
	var longitude= -103.390141;
	var gLatLong= new google.maps.LatLng(latitude,longitude);
	var objConfig=
	{
		zoom: 16,
		center: gLatLong
	}
	var gMap= new google.maps.Map(outputmapa, objConfig);
	var infowindow = new google.maps.InfoWindow();//ventana de información sobre la dirección decodificada
	geocoder.geocode( { 'address': address}, function(results, status) {
		if (status == 'OK') {
			gMap.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
				map: gMap,
				position: results[0].geometry.location});
			infowindow.setContent(address);
			infowindow.open(gMap, marker);
			} else {
				alert('Geocode was not successful for the following reason: ' + status);
			}
		});
}
function FindMe()
{
	var output=document.getElementById('map');//mostarmos si es compatible la geolocalización
	var outputmapa=document.getElementById('mapa');// div para conetenr el mapa
	if(navigator.geolocation)
	{
		//output.innerHTML="<br> Soporta geolocalización";
	}else
	{
		//output.innerHTML="<br> No soporta geolocalización";
	}
	navigator.geolocation.getCurrentPosition(localization,error);

	function localization(posicion)
	{
		var latitude= posicion.coords.latitude;
		var longitude= posicion.coords.longitude;

		//output.innerHTML="<p> Latitud: "+latitude+"<br> Logitud: "+longitude+"</p>";
		var gLatLong= new google.maps.LatLng(latitude,longitude);
		var objConfig=
		{
			zoom: 16,
			center: gLatLong
		}
		var gMap= new google.maps.Map(outputmapa, objConfig);
		var geocoder = new google.maps.Geocoder();//objeto para la geolocalización inversa
		var infowindow = new google.maps.InfoWindow();//ventana de información sobre la dirección decodificada
		var objConfigMarker=
		{
			position: gLatLong,
			map: gMap
		}
		
		var gMarker= new google.maps.Marker(objConfigMarker);
		geocodeLatLng(geocoder,gMap,infowindow,gLatLong,gMarker); 
		 
	}
	function error()
	{
		output.innerHTML="<br> No se pudo cargar el mapa. Recargue la página";
	}
	function geocodeLatLng(geocoder, gMap, infowindow, gLatLong, gMarker) 
	{
		geocoder.geocode({'location': gLatLong}, function(results, status) //results y status son parte de los parametros que nos oferece la API
		{
			if (status =='OK') 
			{
				if (results[0])//tomamos el primer resultado obtenido de la geolocalización inversa
				{
			 		infowindow.setContent(results[0].formatted_address);
			 		infowindow.open(gMap, gMarker);
			 	} else 
			 	{
			 		window.alert('No results found');
			 	}
			} else 
			{
				window.alert('Geocoder failed due to: ' + status);
			}
		})
	}
}

