<?php 
	include 'conexion.php';
	//POST toma de acuerdo al nombre no al id
		

	$json=array(); 
	if( isset($_POST['nombre'])&&isset($_POST['app'])&&isset($_POST['apm'])&&isset($_POST['usuario'])&&isset($_POST['email'])&&isset($_POST['password']))
	{
		//echo $usuario;
				
		$usuario= $_POST['nombre'];
		$apellidoPaterno= $_POST['app'];;
		$apellidoMaterno =$_POST['apm'];
		$username=$_POST['usuario'];
		$correo= $_POST['email'];
		$password= $_POST['password'];

		//Encriptacion de contraseña
		$password=password_hash($password, PASSWORD_DEFAULT);

		$comprobacionCorreo="SELECT Correo from login WHERE Correo='{$correo}'";
		$resultado_comprobacionCorreo=mysqli_query($conexion, $comprobacionCorreo);
		if($correoRes = mysqli_fetch_array($resultado_comprobacionCorreo))
		{
			 $correoFinal=$correoRes[0];
		}
		
		if($correoFinal)
		{
			printf("<script type='text/javascript'>alert('El correo ingresado ya está registrado.'); </script>");
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
					echo $idLoginConsulta=$row[0];
					$insertarUsuario="INSERT into usuario (Nombre, ApellidoPaterno, ApellidoMaterno, imagen, Tipo, Login) VALUES ('{$usuario}', '{$apellidoPaterno}', '{$apellidoMaterno}', 'usuarioDefault.png', '2', '{$idLoginConsulta}')";
					$resultado_insertarUsuario=mysqli_query($conexion, $insertarUsuario);
				}
				
			}
			mysqli_close($conexion);
			//header('Location: /apptivity/index.html');
			printf("<script type='text/javascript'>alert('Registro exitoso. Bienvenido a la comunidad Apptivity'); </script>");
			printf("<script> window.location='/apptivity/index.html';</script>"); 
		}
	}else
	{
		printf("<script type='text/javascript'>alert('Algo salió mal. Reintente llenar el formulario.'); </script>");
		printf("<script> window.location='/apptivity/index.html';</script>"); 
	}
?>