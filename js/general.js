/*$(document).ready(function()
{

  	$('body').css({ 'width': $(window).width() + "px" });
});*/
function ValidarRegistroEstablecimiento()
{
	var NombreEstablecimiento=document.RegistroEstablecimientoFormulario.NombreEstablecimiento.value;
	var Descripcion=document.RegistroEstablecimientoFormulario.Descripcion.value;
	var Usuario=document.RegistroEstablecimientoFormulario.Usuario.value;
	var ApellidoMaterno=document.RegistroEstablecimientoFormulario.ApellidoMaterno.value;
	var ApellidoPaterno=document.RegistroEstablecimientoFormulario.ApellidoPaterno.value;
	var Username=document.RegistroEstablecimientoFormulario.Username.value;
	var CorreoElectronico=document.RegistroEstablecimientoFormulario.CorreoElectronico.value;
	var Contrasena=document.RegistroEstablecimientoFormulario.Contrasena.value;
	var ConfirmarContrasena=document.RegistroEstablecimientoFormulario.ConfirmarContrasena.value;
	ValidarNoVacios(NombreEstablecimiento, "nombre de establecimiento");
	ValidarNoVacios(Descripcion, "descripción");
	ValidarTextComun(Usuario, "usuario");
	ValidarTextComun(ApellidoPaterno, "apellido paterno");
	if(ApellidoMaterno!=""){ValidarTextComun(ApellidoMaterno, "apellido materno");}
	ValidarNoVacios(Username, "usuario");
	ValidarCorreo(CorreoElectronico, "correo electrónico");
	ValidarContrasena(Contrasena, "contraseña");
	ValidarContrasena(ConfirmarContrasena, "confirmar contraseña");
	ContrasenasIguales(Contrasena, ConfirmarContrasena);
}
function ValidarNoVacios(Campo,NombreCampo)
{
	if(Campo=="")
	{
		window.alert("Rellene el campo "+NombreCampo);
		return false;
	}
}
function ValidarTextComun(Campo, NombreCampo)
{
	var Letras = /^[a-zA-Z]*$/;
	if(Campo=="")
	{
		window.alert("Rellene el campo "+NombreCampo);
		return false;
	}else
	{
		if(!Campo.search(Letras))
		{
		}else
		{
			window.alert("El campo "+NombreCampo+" sólo permite caracteres de la A-Z");
			return false;
		}	
	}
}
function ValidarCorreo(Campo, NombreCampo)
{
	var PatronCorreo=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	if(Campo=="")
	{
		window.alert("Rellene el campo "+NombreCampo);
		return false;
	}else
	{
		if(Campo.search(PatronCorreo))
		{
			window.alert("Nope. Equivocado pacaa");
			return false;
		}
	}
}
function ValidarContrasena(Campo,NombreCampo)
{
	var PatronContrasena=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d]|[^ ]){8,}/;//Busca por lo menos una minuscula, mayúscula, dígito y por lo menos 8 caracteres
	if(Campo=="")
	{
		window.alert("Rellene el campo "+NombreCampo);
		return false;
	}else
	{	
		if(!Campo.search(PatronContrasena))
		{
		}else
		{
			alert("Su contraseña no coincide con alguno de los requisitos: \nUna mayúscula \nUna minúscula\nUna letra\nPor lo menos 8 caracteres\nSin espacios en blanco");
			return false;
		}
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

