<?php 
	include 'conexion.php';
	/*echo $_POST['NombreEstablecimiento'];
	echo $_POST['HoraInicio'];
	echo $_POST['HoraTermino'];
	echo $_POST['Descripcion'];
	echo $_POST['UsuarioE'];
	echo $_POST['ApellidoPaternoE'];
	echo $_POST['ApellidoMaternoE'];
	echo $_POST['Username'];
	echo $_POST['CorreoElectronico'];
	echo $_POST['ContrasenaE'];*/
	

	$json=array(); 
	if(isset($_POST['NombreEstablecimiento'])&&isset($_POST['DescripcionE'])&& isset($_POST['Usuario'])&&isset($_POST['ApellidoPaterno'])&&isset($_POST['Username'])&&isset($_POST['CorreoElectronico'])&&isset($_POST['Contrasena']))
	{
		
		//echo $usuario;
		$nombreEstablecimiento=$_POST['NombreEstablecimiento'];
		$descripcion=$_POST['DescripcionE'];
		$telefono=$_POST['TelefonoEstablecimiento'];
		$usuario= $_POST['Usuario'];
		$apellidoPaterno= $_POST['ApellidoPaterno'];;
		$apellidoMaterno =$_POST['ApellidoMaterno'];
		$username=$_POST['Username'];
		$correo= $_POST['CorreoElectronico'];
		$password= $_POST['Contrasena'];
		$latitud=$_POST['lat'];
		$longitud=$_POST['lng'];

		$data = json_decode($_POST['valores']);
		//echo $data;
		//var_dump($data);
		//Encriptacion de contraseña
		$password=password_hash($password, PASSWORD_DEFAULT);
		$comprobacionCorreo="SELECT Correo from login WHERE Correo='{$correo}'";
		$resultado_comprobacionCorreo=mysqli_query($conexion, $comprobacionCorreo);
		$correoFinal="";
		if($correoRes = mysqli_fetch_array($resultado_comprobacionCorreo))
		{
			$correoFinal=$correoRes[0];
		}
		
		if($correoFinal!="")
		{
			echo "El correo ingresado ya está registrado.";
			//printf("<script type='text/javascript'>alert('El correo ingresado ya está registrado.'); </script>");
			//printf("<script> window.location='/apptivity/RegistroEstablecimiento.html';</script>"); 	
		}else{
			$insertarLogin="INSERT into login (Username, Correo, Password) VALUES ('{$username}','{$correo}','{$password}')";
			$resultado_insertarLogin=mysqli_query($conexion, $insertarLogin);
			if($resultado_insertarLogin)
			{
				$obtenerIdLogin="SELECT IdLogin from login WHERE Username='{$username}' AND Correo='{$correo}'";
				$resultado_obtenerIdLogin=mysqli_query($conexion, $obtenerIdLogin);
				if($row = mysqli_fetch_array($resultado_obtenerIdLogin))
				{
					$idLoginConsulta=$row[0];
					$insertarUsuario="INSERT into usuario (Nombre, ApellidoPaterno, ApellidoMaterno,Imagen,Tipo, Login) VALUES ('{$usuario}', '{$apellidoPaterno}', '{$apellidoMaterno}','usuarioDefault.png','1', '{$idLoginConsulta}')";
					$resultado_insertarUsuario=mysqli_query($conexion, $insertarUsuario);
					$obtenerId="SELECT IdUsuario FROM usuario  WHERE Login='{$idLoginConsulta}'";
					$resultado_obtenerId=mysqli_query($conexion, $obtenerId);
					if($row = mysqli_fetch_array($resultado_obtenerId))
					{
						$id=$row[0];
						$insertarUsuarioE="INSERT into establecimiento (Nombre, Latitud, Longitud, Descripcion, Telefono, Usuario) VALUES ('{$nombreEstablecimiento}', '{$latitud}', '{$longitud}','{$descripcion}','{$telefono}', '{$id}')";
						$resultado_insertarUsuarioE=mysqli_query($conexion, $insertarUsuarioE);
						$obtenerId="SELECT IdEstablecimiento FROM establecimiento  ORDER BY IdEstablecimiento DESC LIMIT 1";
						$resultado_obtenerId=mysqli_query($conexion, $obtenerId);
						if($row1 = mysqli_fetch_array($resultado_obtenerId))
						{
							$id=$row1[0];
							foreach ($data as $obj) 
							{
								$HrI=$obj[1];
								$HrF=$obj[2];
								$dias=$obj[3];
								if($HrI!=""&&$HrF!=""){
									$dia=explode(",", $dias);
								for ($i=0;$i<count($dia)-1;$i++) 
								{
									$diaMysql=$dia[$i];
									$insertarHorario="INSERT into horario(HoraInicio, HoraFin, Dia, Establecimiento) VALUES ( '{$HrI}', '{$HrF}', '{$diaMysql}','{$id}')";
									$resultado_insertarHorario=mysqli_query($conexion,$insertarHorario);
								}
								}
							}
						}
					}
				}
				
			}
			mysqli_close($conexion);
			//header('Location: /apptivity/index.html');
			echo "Registro exitoso. Bienvenido a la comunidad Apptivity";
			//printf("<script type='text/javascript'>alert('Registro exitoso. Bienvenido a la comunidad Apptivity'); </script>");
			//printf("<script> window.location='/apptivity/index.html';</script>"); 
		}
	}else
	{
		echo "Algo salió mal. Reintente llenar el formulario.";
		//printf("<script type='text/javascript'>alert('Algo salió mal. Reintente llenar el formulario.'); </script>");
		//printf("<script> window.location='/apptivity/RegistroEstablecimiento.php';</script>"); 
	}
?>