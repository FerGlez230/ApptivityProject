//@prepros-prepend jquery-3.1.1.js
//@prepros-prepend jquery-ui.js
//@prepros-prepend slick.js
//@prepros-prepend jquery-ui.multidatespicker.js

$(document).ready(function()
{

  	$('body').css({ 'width': $(window).width() + "px" });
});


$('#calendario').multiDatesPicker({
	minDate: 0, // today
	maxDate: 30 // +30 days from today
});


function ValidarRegistroEstablecimiento()
{
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
	contador=ValidarTextComun(ApellidoPaterno, "apellido paterno");
	if(ApellidoMaterno!=""){contador=ValidarTextComun(ApellidoMaterno, "apellido materno");}
	contador=ValidarCorreo(CorreoElectronico);
	contador=ValidarContrasena(Contrasena);
	contador=ContrasenasIguales(Contrasena, ConfirmarContrasena);
	return contador;
}
function ValidarTextComun(Campo, NombreCampo)
{
	var Letras = /^[a-zA-Z]*$/;
	if(!Campo.search(Letras))
	{
	}else
	{
		window.alert("El campo "+NombreCampo+" sólo permite caracteres de la A-Z");
		return false;
	}
}
function ValidarCorreo(Campo)
{
	var PatronCorreo=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	if(Campo.search(PatronCorreo))
	{
		window.alert("Su correo probablemente tenga un error");
		return false;
	}
}
function ValidarContrasena(Campo)
{
	var PatronContrasena=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d]|[^ ]){8,}/;//Busca por lo menos una minuscula, mayúscula, dígito y por lo menos 8 caracteres
	if(!Campo.search(PatronContrasena))
	{
	}else
	{
		alert("Su contraseña no coincide con alguno de los requisitos: \nUna mayúscula \nUna minúscula\nUna letra\nPor lo menos 8 caracteres\nSin espacios en blanco");
		return false;
	}
}
function ContrasenasIguales(Contrasena, Contrasena2)
{
	if(Contrasena!=Contrasena2)
	{
		window.alert("Las contraseñas no coinciden");
		return false;
	}
}
function NuevoHorario()
{
	var DiasSeleccionados= new Array();
	var Registros=new Array();
	var HoraInicio=document.RegistroEstablecimiento.HoraInicio.value;
	var HoraTermino=document.RegistroEstablecimiento.HoraTermino.value;
	var DiasCheck=document.getElementsByName('diasSemana');
	if(HoraInicio>=HoraTermino)
	{
		window.alert("La hora de inicio no puede ser mayor a la hora de termino");
		return false;
	}
	for(var i=0; i<7; i++)
	{
		if(DiasCheck[i].checked)
		{
			DiasSeleccionados[i]=i+1;
			window.alert(DiasSeleccionados[i]);
		}
	}
	/*for (var j = 0; j < DiasSeleccionados.length; j++) 
	{
		Registros[j]=(HoraInicio+HoraTermino+DiasSeleccionados[j]);
	}*/
}
function CargarMapaInicial()
{
	var latitude= posicion.coords.latitude;
	var longitude= posicion.coords.longitude;
	var outputmapa=document.getElementById('mapa');// div para conetenr el mapa	
	outputmapa.innerHTML("Holiwis");
	/*var gLatLong= new google.maps.LatLng(latitude,longitude);
	var objConfig=
	{
		zoom: 16,
		center: gLatLong
	}
	var gMap= new google.maps.Map(outputmapa, objConfig);*/
	window.onload=CargarMapaInicial;
}
function FindMe()
{
	var output=document.getElementById('map');//mostarmos si es compatible la geolocalización
	var outputmapa=document.getElementById('mapa');// div para conetenr el mapa
	if(navigator.geolocation)
	{
		output.innerHTML="<br> Soporta geolocalización";
	}else
	{
		output.innerHTML="<br> No soporta geolocalización";
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

