//@prepros-prepend jquery-3.1.1.js
//@prepros-prepend jquery-confirm.min.js

	function CargarMapaInicial(){
		var outputmapa=document.getElementById('mapa');// div para conetenr el mapa	
		navigator.geolocation.getCurrentPosition(localization,error);
		
		function localization(){
			var latitude = 20.703004;
			var longitude = -103.390141;
			var gLatLong = new google.maps.LatLng(latitude,longitude);
			var objConfig = {
				zoom: 16,
				center: gLatLong
			}
			var gMap= new google.maps.Map(outputmapa, objConfig);
		}

		function error(){
			//output.innerHTML="<br> No se pudo cargar el mapa inicial. Recargue la página";
		}
	}

	function FindMeByAddress(){
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
		var latitude = 20.703004;
		var longitude = -103.390141;
		var gLatLong = new google.maps.LatLng(latitude,longitude);
		var objConfig = {
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
					position: results[0].geometry.location
				
				});
				document.getElementById("lat").value=results[0].geometry.location.lat();
				document.getElementById("lng").value=results[0].geometry.location.lng();
				infowindow.setContent(address);
				infowindow.open(gMap, marker);
				}else{
					if(status == "INVALID_REQUEST"){
						var titulo = "¡Datos sin seleccionar!";
						var mensaje = "Ingrese una dirección u obtenga su dirección actual.";
					}
					if(status == "ZERO_RESULTS"){
						var titulo = "No se encontraron resultados";
						var mensaje = "La dirección ingresada no es válida. <br><br> Ingrese una dirección con el siguiente formato: <br> Calle, Número, Colonia";
					}

					$.alert({
						icon: 'fa fa-warning',
	        			closeAnimation: 'rotate',
					    title: titulo,
					    content: mensaje,
					    boxWidth: '30%',
		    			useBootstrap: false,
					});
				}
			});
	}

	function FindMe(){
		var output=document.getElementById('map');//mostarmos si es compatible la geolocalización
		var outputmapa=document.getElementById('mapa');// div para conetenr el mapa
		if(navigator.geolocation){
			//output.innerHTML="<br> Soporta geolocalización";
		}else{
			//output.innerHTML="<br> No soporta geolocalización";
		}
		navigator.geolocation.getCurrentPosition(localization,error);

		function localization(posicion){
			var latitude= posicion.coords.latitude;
			var longitude= posicion.coords.longitude;

			document.getElementById("lat").value=latitude;
			document.getElementById("lng").value=longitude;

			//output.innerHTML="<p> Latitud: "+latitude+"<br> Logitud: "+longitude+"</p>";
			var gLatLong = new google.maps.LatLng(latitude,longitude);
			var objConfig = {
				zoom: 16,
				center: gLatLong
			}

			var gMap= new google.maps.Map(outputmapa, objConfig);
			var geocoder = new google.maps.Geocoder();//objeto para la geolocalización inversa
			var infowindow = new google.maps.InfoWindow();//ventana de información sobre la dirección decodificada
			
			var objConfigMarker = {
				position: gLatLong,
				map: gMap
			}
			
			var gMarker = new google.maps.Marker(objConfigMarker);
			geocodeLatLng(geocoder,gMap,infowindow,gLatLong,gMarker); 	 
		}
		
		function error(){
			output.innerHTML="<br> No se pudo cargar el mapa. Recargue la página";
		}

		function geocodeLatLng(geocoder, gMap, infowindow, gLatLong, gMarker){
			geocoder.geocode({'location': gLatLong}, function(results, status){//results y status son parte de los parametros que nos oferece la API
				if(status =='OK'){
					if(results[0]){//tomamos el primer resultado obtenido de la geolocalización inversa
				 		infowindow.setContent(results[0].formatted_address);
				 		infowindow.open(gMap, gMarker);
				 	}else{
				 		$.alert({
	            			closeAnimation: 'rotate',
						    title: 'Error de mapa',
						    content: 'No se encontraron resultados.',
						    boxWidth: '30%',
			    			useBootstrap: false,
						});
				 	}
				}else{
					var mensaje = "Geocoder falló debido a: " + status;
					$.alert({
	        			closeAnimation: 'rotate',
					    title: 'Error de mapa',
					    content: mensaje,
					    boxWidth: '30%',
		    			useBootstrap: false,
					});
				}
			})
		}
	}
