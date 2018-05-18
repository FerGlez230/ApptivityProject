//@prepros-prepend jquery-3.1.1.js
//@prepros-prepend jquery-confirm.min.js

$(document).ready(function(){
	//$("#PromocionInsertar").validate();
	$("#IniciarSesion").submit(function(event){
		var correo = document.IniciarSesion.Vcorreo.value;
		var clave = document.IniciarSesion.Vpass.value;
		var formData = new FormData(document.getElementById("IniciarSesion"));
		$.ajax({
			async: false,
            type: "POST",
            url: "webService/iniciarSesion.php",
            data: formData,
            cache: false,
	    	contentType: false,
	    	processData: false,
            success: function(data) {
            	var valores = eval(data);
            	var mensaje = valores[0];
            	estado = valores[1];

            	if(estado){
            		if(mensaje == 2) $(location).attr('href','topEvento.php');
            		else if(mensaje == 1) $(location).attr('href','evento.php');
            	}else{
            		$.alert({
            			closeAnimation: 'rotate',
					    title: '¡Oh, no!',
					    content: mensaje,
					    boxWidth: '30%',
		    			useBootstrap: false,
					});
            	}
            },
            error: function(data) {
            	$.alert({
				    title: '¡Oh, no!',
				    content: 'Ocurrió algo mientras se enviaban los datos.',
				    boxWidth: '30%',
	    			useBootstrap: false,
				});
        	}
        });
        return false;
	});

	$("#EventoInsertar").submit(function(event){
		var res = ValidarEvento();
		if(res){
			valores= new Array();
			var cont=0;
			var dias="";

			$('#tabla tbody tr').each(function(){
				var id=$(this).find('td').eq(0).html();
				var hrI=$(this).find('td').eq(2).html();
				var hrF=$(this).find('td').eq(3).html();
				var id="#time";
			 	
			 	id = id + cont +" option";
				
				$(id).each(function(){
				   	dias+=$(this).attr('value')+',';
				});
				
				cont++;
				
				valor = new Array(id, hrI, hrF, dias);
				
				dias="";

				if(cont!=0){
					valores.push(valor);
				}
			});

			if(cont!=0){
				var formData = new FormData(document.getElementById("EventoInsertar"));
				formData.append("valores",JSON.stringify(valores));
				
				$.ajax({
	                async: false,
	                type: "POST",
	                url: "webService/insertarEvento.php",
	                data: formData,
	                cache: false,
				    contentType: false,
				    processData: false,
	                success: function(data){
	                	var valores = eval(data);
		            	var mensaje = valores[0];
		            	var estado = valores[1];
		                if(estado) $(location).attr('href','evento.php');
	                	else{
		                	$.alert({
			        			closeAnimation: 'rotate',
							    title: '¡Oh, no!',
							    content: mensaje,
							    boxWidth: '30%',
				    			useBootstrap: false,
							});
		                }

	                },
	                error: function(data) {
	                	$.alert({
						    title: '¡Oh, no!',
						    content: 'Ocurrió algo mientras se enviaban los datos.',
						    boxWidth: '30%',
			    			useBootstrap: false,
						});
	            	}
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
		}
		return false;
	});

	$(document).on("submit", "#EliminarEvento", function(event){
		var evento = $(this).children().val();
		var mensaje = "";
		var estado = false;
		
		$.confirm({
			title: 'Eliminar evento',
		    content: '¿Estás seguro de que quieres eliminar este evento?',
		    boxWidth: '30%',
			useBootstrap: false,
			buttons: {
				cancelar: {
					text: 'No, regresar',
				},
				aceptar: {
					text: 'Sí, eliminar',
					action: function(){
						
						var datos = {
				            "id" : evento,
				            "tipo" : 0
				    	};
						$.ajax({
							type: 'POST',
				    		url: 'webService/borrarEventoPromocion.php',
				    		data: datos,
				            success: function(data) {
				            	var valores = eval(data);
				            	mensaje = valores[0];
				            	estado = valores[1];
				            	deletePE(mensaje, 1);
				            },
				            error: function(data) {
								mensaje = "Ocurrió algo mientras se enviaban los datos.";
								estado = false;
								deletePE(mensaje, 1);
				        	}
				        });
					}
				}
			}
		});
		return false;
	});

	$("#PromocionInsertar").submit(function(event){
		event.preventDefault();
		valores = new Array();
		var cont = 0;
		var dias = "";

		$('#tabla tbody tr').each(function () {
			var id=$(this).find('td').eq(0).html();
			var hrI=$(this).find('td').eq(2).html();
			var hrF=$(this).find('td').eq(3).html();
			var id="#timep";
		 	
		 	id=id+cont+" option";
			
			$(id).each(function(){
			   	dias+=$(this).attr('value')+',';
			});
			
			cont++;
			
			valor=new Array(id, hrI, hrF, dias);
			dias="";
			
			if(cont!=0){
				valores.push(valor);
			}
		});

		if(cont > 0){
			var formData = new FormData(document.getElementById("PromocionInsertar"));
			formData.append("valores",JSON.stringify(valores));

			$.ajax({
	        	async: false,
		        type: "POST",
		        url: "webService/insertarPromocion.php",
		        data: formData,
		        cache: false,
		    	contentType: false,
		    	processData: false,
	            success: function(data) {
	            	var valores = eval(data);
	            	var mensaje = valores[0];
	            	var estado = valores[1];

	                if(estado) $(location).attr('href','promocion.php');
	                else{
	                	$.alert({
		        			closeAnimation: 'rotate',
						    title: '¡Oh, no!',
						    content: mensaje,
						    boxWidth: '30%',
			    			useBootstrap: false,
						});
	                }

	            },
	            error: function(data) {
	            	$.alert({
					    title: '¡Oh, no!',
					    content: 'Ocurrió algo mientras se enviaban los datos.',
					    boxWidth: '30%',
		    			useBootstrap: false,
					});
	        	}
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
		
		return false;
	});

	$("#ModificarPromocion").submit(function(event){
		event.preventDefault();
		valores = new Array();
		var cont = 0;
		var dias = "";

		$('#tabla tbody tr').each(function () {
			var id=$(this).find('td').eq(0).html();
			var hrI=$(this).find('td').eq(2).html();
			var hrF=$(this).find('td').eq(3).html();
			var id="#timep"
		 	
		 	id=id+cont+" option";
			
			$(id).each(function(){
			   	dias+=$(this).attr('value')+',';
			});
			
			cont++;
			
			valor=new Array(id, hrI, hrF, dias);
			//alert(dias);
			dias="";
			
			if(cont!=0){
				valores.push(valor);
			}
		});

		var formData = new FormData(document.getElementById("ModificarPromocion"));
		formData.append("valores",JSON.stringify(valores));

		$.ajax({
        	async: false,
	        type: "POST",
	        url: "webService/modificarPromocion.php",
	        data: formData,
	        cache: false,
	    	contentType: false,
	    	processData: false,
            success: function(data) {
            	var valores = eval(data);
            	var mensaje = valores[0];
            	var estado = valores[1];

            	$.alert({
        			closeAnimation: 'rotate',
				    title: '¡Oh, no!',
				    content: mensaje,
				    boxWidth: '30%',
	    			useBootstrap: false,
				});

                if(estado) $(location).attr('href','promocion.php');
            },
            error: function(data) {
            	$.alert({
				    title: '¡Oh, no!',
				    content: 'Ocurrió algo mientras se enviaban los datos.',
				    boxWidth: '30%',
	    			useBootstrap: false,
				});
        	}
        });
		return false;
	});

	$(document).on("submit", "#EliminarPromocion", function(event){
		var promocion = $(this).children().val();
		var mensaje = "";
		var estado = false;
		
		$.confirm({
			title: 'Eliminar promoción',
		    content: '¿Estás seguro de que quieres eliminar esta promoción?',
		    boxWidth: '30%',
			useBootstrap: false,
			buttons: {
				cancelar: {
					text: 'No, regresar',
				},
				aceptar: {
					text: 'Sí, eliminar',
					action: function(){
						
						var datos = {
				            "id" : promocion,
				            "tipo" : 1
				    	};

						$.ajax({
							type: 'POST',
				    		url: 'webService/borrarEventoPromocion.php',
				    		data: datos,
				            success: function(data) {
				            	var valores = eval(data);
				            	mensaje = valores[0];
				            	estado = valores[1];
				            	deletePE(mensaje, 0);
				            },
				            error: function(data) {
								mensaje = "Ocurrió algo mientras se enviaban los datos.";
								estado = false;
								deletePE(mensaje, 0);
				        	}
				        });
					}
				}
			}
		});

		return false;
	});

	function deletePE(message, tipo){
		$.confirm({
			closeAnimation: 'rotate',
		    title: 'Resultado',
		    content: message,
		    boxWidth: '30%',
			useBootstrap: false,
			buttons: {
				aceptar: {
					text: 'Okay',
					action: function(){
						if(tipo == 0) $(location).attr('href','promocion.php');
						if(tipo == 1) $(location).attr('href','evento.php');
					}
				}
			}
		});
	}
	
	$("#RegistroEstablecimiento").submit(function(event){ /*function enviarDatosEstablecimiento(){*/
		event.preventDefault();
		var res=ValidarRegistroEstablecimiento();
		if(res != false){
			valores= new Array();
			var cont=0;
			var dias="";

			$('#tabla tbody tr').each(function(){
				var id=$(this).find('td').eq(0).html();
				var hrI=$(this).find('td').eq(2).html();
				var hrF=$(this).find('td').eq(3).html();
				var idT="#dias"+cont+" option";
			 	
			 	//idT=id+cont+" option";
				$(idT).each(function(){
				   	dias+=$(this).attr('value')+',';
				});
				
				cont++;
				
				if(dias!=""){
					valor=new Array(id, hrI, hrF, dias);
				}
				
				dias="";
				//alert(valor);
				valores.push(valor);
			});

			if(cont>0){
				var formData = new FormData(document.getElementById("RegistroEstablecimiento"));
				
				formData.append("valores",JSON.stringify(valores));
				//alert(formData);
				$.ajax({
					async: false,
	                type: "POST",
	                url: "webService/registroEstablecimiento.php",
	                data: formData,
	                cache: false,
			    	contentType: false,
			    	processData: false,
	                success: function(data){
	                	var valores = eval(data);
	                	var mensaje = valores[0];
	                	var estado = valores[1];

	                	if(estado){
	                		$(location).attr('href','cuentaEstablecimiento.php');
	                	}else{
	                		$.alert({
		            			closeAnimation: 'rotate',
							    title: '¡Oh, no!',
							    content: mensaje,
							    boxWidth: '30%',
				    			useBootstrap: false,
							});
	                	}
	                },
	                error: function(data) {
	                	$.alert({
						    title: '¡Oh, no!',
						    content: 'Ocurrió algo mientras se enviaban los datos.',
						    boxWidth: '30%',
			    			useBootstrap: false,
						});
	            	}
	            });
			}else{
				$.alert({
					icon: 'fa fa-warning',
				    title: '¡Datos sin seleccionar!',
				    content: 'Asegurese de haber ingresado por lo menos un horario.',
				    boxWidth: '30%',
	    			useBootstrap: false,
				});
			}
		}
		return false;
	});

	$("#RegistroCliente").submit(function(event){
		var estado = false;
		event.preventDefault();
		var res=ValidarRegistroCliente();
		if(res != false){
			var formData = new FormData(document.getElementById("RegistroCliente"));
			$.ajax({
				async: false,
                type: "POST",
                url: "webService/registroCliente.php",
                data: formData,
                cache: false,
		    	contentType: false,
		    	processData: false,
                success: function(data) {
                	var valores = eval(data);
	            	var mensaje = valores[0];
	            	estado = valores[1];

	            	if(estado){
	            	}else{
	            		$.alert({
						    title: '¡Oh, no!',
						    content: mensaje,
						    boxWidth: '30%',
			    			useBootstrap: false,
						});
	            	}

                },
                error: function(data) {
                	$.alert({
					    title: '¡Oh, no!',
					    content: 'Ocurrió algo mientras se enviaban los datos.',
					    boxWidth: '30%',
		    			useBootstrap: false,
					});
            	}
            });

			if(estado){
				var correo = document.RegistroCliente.CorreoElectronico.value;
				var clave = document.RegistroCliente.Contrasena.value;

				var datos = {
		            "Vcorreo" : correo,
		            "Vpass" : clave
		    	};

				$.ajax({
					type: 'POST',
		    		url: 'webService/iniciarSesion.php',
		    		data: datos,
		            success: function(data) {
		            	var valores = eval(data);
		            	var mensaje = valores[0];
		            	var estado = valores[1];

		            	if(estado){
		            		if(mensaje == 2) $(location).attr('href','topEvento.php');
		            		else if(mensaje == 1) $(location).attr('href','evento.php');
		            	}else{
		            		alert(mensaje);
		            		$(location).attr('href','index.html');
		            	}
		            },
		            error: function(data) {
		            	$.alert({
						    title: '¡Oh, no!',
						    content: 'Ocurrió algo mientras se enviaban los datos.',
						    boxWidth: '30%',
			    			useBootstrap: false,
						});
		        	}
		        });
			}
		}
		return false;
	});

	$('#RegistroCliente #Cliente').on('input', function(e){ 
		if(texto(this.value)) this.value = this.value.replace(/[^ a-záéíóúüñ]+/ig,""); });
	$('#RegistroCliente #ApellidoPaterno').on('input', function(e){ 
		if(texto(this.value)) this.value = this.value.replace(/[^ a-záéíóúüñ]+/ig,""); });
	$('#RegistroCliente #ApellidoMaterno').on('input', function(e){ 
		if(texto(this.value)) this.value = this.value.replace(/[^ a-záéíóúüñ]+/ig,""); });
	
	$('#RegistroEstablecimiento #TelefonoEstablecimiento').on('input', function(e){ 
		this.value = this.value.replace(/[^0-9]/g,''); });
	$('#RegistroEstablecimiento #Usuario').on('input', function(e){ 
		if(texto(this.value)) this.value = this.value.replace(/[^ a-záéíóúüñ]+/ig,""); });
	$('#RegistroEstablecimiento #ApellidoPaterno').on('input', function(e){ 
		if(texto(this.value)) this.value = this.value.replace(/[^ a-záéíóúüñ]+/ig,""); });
	$('#RegistroEstablecimiento #ApellidoMaterno').on('input', function(e){ 
		if(texto(this.value)) this.value = this.value.replace(/[^ a-záéíóúüñ]+/ig,""); });

	$('#EventoInsertar #PrecioInferior').on('input', function(e){ 
		this.value = this.value.replace(/[^0-9]/g,''); });
	$('#EventoInsertar #PrecioSuperior').on('input', function(e){ 
		this.value = this.value.replace(/[^0-9]/g,''); });

	function texto(letra){
		if (!/^[ a-záéíóúüñ]*$/i.test(letra)){
	        return true;
	    }
	    return false;
	}

	function numero(num){
		if (!/^[0-9]+([,][0-9]+)?$/i.test(num)){
	        return true;
	    }
	    return false;
	}

	function ValidarEvento(){
		var contador = 0;
		var estado = true;

		$("#EventoInsertar #categorias option:selected").each(function() {
	      contador++;
	    });

		var menor = parseInt($("#EventoInsertar #PrecioInferior").val());
		var mayor = parseInt($("#EventoInsertar #PrecioSuperior").val());
		
		if(menor > mayor){
			$.alert({
			    title: 'Datos inválidos',
			    content: 'El precio mayor no puede ser menor al inferior.',
			    boxWidth: '30%',
    			useBootstrap: false,
			});
			estado = false;
		}

		if(contador<=0){
			$.alert({
			    title: 'Datos inválidos',
			    content: 'Debe seleccionar alguna categoria.',
			    boxWidth: '30%',
    			useBootstrap: false,
			});
			estado = false;	
		} 

		return estado;

	}

	function ValidarRegistroEstablecimiento(){
		var contador = true;
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
		
		if(ApellidoMaterno!=""){
			contador=ValidarTextComun(ApellidoMaterno, "apellido materno");
			if(contador==false){ return contador; }
		}
		
		contador=ValidarCorreo(CorreoElectronico);
		
		if(contador==false){ return contador; }
		
		contador=ValidarContrasena(Contrasena);
		
		if(contador==false){ return contador; }
		
		contador=ContrasenasIguales(Contrasena, ConfirmarContrasena);
		
		if(contador==false){ return contador; }
	}

	function ValidarRegistroCliente(){
		var contador=true;
		var Usuario=document.RegistroCliente.Cliente.value;
		var ApellidoMaterno=document.RegistroCliente.ApellidoMaterno.value;
		var ApellidoPaterno=document.RegistroCliente.ApellidoPaterno.value;
		var Username=document.RegistroCliente.Username.value;
		var CorreoElectronico=document.RegistroCliente.CorreoElectronico.value;
		var Contrasena=document.RegistroCliente.Contrasena.value;
		var ConfirmarContrasena=document.RegistroCliente.ConfirmarContrasena.value;

		contador=ValidarTextComun(Usuario, "usuario");
		
		if(contador==false){ return contador; }
		
		contador=ValidarTextComun(ApellidoPaterno, "apellido paterno");
		
		if(contador==false){ return contador; }
		
		if(ApellidoMaterno!=""){
			contador=ValidarTextComun(ApellidoMaterno, "apellido materno");
			if(contador==false){ return contador; }
		}
		
		contador=ValidarCorreo(CorreoElectronico);
		
		if(contador==false){ return contador; }
		
		contador=ValidarContrasena(Contrasena);
		
		if(contador==false){ return contador; }
		
		contador=ContrasenasIguales(Contrasena, ConfirmarContrasena);
		
		if(contador==false){ return contador; }
	}

	function ValidarTextComun(Campo, NombreCampo){
		var Letras = /^[a-zA-Z\sÑñáéíóúüÁÉÍÓÚ]*$/;
		if(!Campo.search(Letras)){
		}else{
			var mensaje = "El campo "+NombreCampo+" sólo permite letras";
			$.alert({
			    title: 'Caracteres inválidos',
			    content: mensaje,
			    boxWidth: '30%',
    			useBootstrap: false,
			});
			return false;
		}
	}

	function ValidarSoloNumeros(Campo, NombreCampo){
		var Numeros= /^[0-9]+([,][0-9]+)?$/;
		if(Campo.search(Numeros)){
			var mensaje = "El campo "+NombreCampo+" sólo acepta números";
			$.alert({
			    title: 'Caracteres inválidos',
			    content: mensaje,
			    boxWidth: '30%',
    			useBootstrap: false,
			});
			return false;
		}
	}

	function ValidarCorreo(Campo){
		var PatronCorreo=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
		if(Campo.search(PatronCorreo)){
			$.alert({
			    title: 'Caracteres inválidos',
			    content: 'Correo con formato inválido',
			    boxWidth: '30%',
    			useBootstrap: false,
			});
			return false;
		}
	}

	function ValidarContrasena(Campo){
		var PatronContrasena=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d]|[^ ]){8,}/;//Busca por lo menos una minuscula, mayúscula, dígito y por lo menos 8 caracteres
		if(!Campo.search(PatronContrasena)){
		}else{
			var mensaje = "Su contraseña no coincide con alguno de los requisitos: <br><br>Una mayúscula <br>Una minúscula <br>Una letra <br>Por lo menos 8 caracteres <br>Sin espacios en blanco";
			$.alert({
			    title: 'Caracteres inválidos',
			    content: mensaje,
			    boxWidth: '30%',
    			useBootstrap: false,
			});
			return false;
		}
	}

	function ContrasenasIguales(Contrasena, Contrasena2){
		if(Contrasena!=Contrasena2){
			$.alert({
			    title: 'Caracteres inválidos',
			    content: 'Las contraseñas no coinciden',
			    boxWidth: '30%',
    			useBootstrap: false,
			});			
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

	//Está debatible
	function VerificarHorario(HoraInicio, HoraTermino){
		if(HoraInicio>=HoraTermino){
			window.alert("La hora de inicio no puede ser mayor a la hora de termino");
			return false;
		}
	}
});