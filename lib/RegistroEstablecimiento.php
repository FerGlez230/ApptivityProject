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
	if(isset($_POST['NombreEstablecimiento'])&&isset($_POST['HoraInicio'])&&isset($_POST['HoraTermino'])&&isset($_POST['Descripcion'])&& isset($_POST['UsuarioE'])&&isset($_POST['ApellidoPaternoE'])&&isset($_POST['ApellidoMaternoE'])&&isset($_POST['Username'])&&isset($_POST['CorreoElectronico'])&&isset($_POST['ContrasenaE']))
	{
		$servidor ="localhost";
		$baseDatos ="apptivity";
		$usuario ="root"; 
		$password ="";
		//echo $usuario;
		$nombreEstablecimiento=$_POST['NombreEstablecimiento'];
		$horaInicio= $_POST['HoraInicio'];
		$horaTermino= $_POST['HoraTermino'];
		$descripcion= $_POST['Descripcion'];
		$usuario= $_POST['UsuarioE'];
		$apellidoPaterno= $_POST['ApellidoPaternoE'];;
		$apellidoMaterno =$_POST['ApellidoMaternoE'];
		$username=$_POST['Username'];
		$correo= $_POST['CorreoElectronico'];
		$password= $_POST['ContrasenaE'];

		
		$insertarLogin="INSERT into login (Username, Correo, Password) VALUES ('{$username}','{$correo}','{$password}')";
		$resultado_insertarLogin=mysqli_query($conexion, $insertarLogin);
		if($resultado_insertarLogin)
		{
			$obtenerIdLogin="SELECT IdLogin from login WHERE Username='{$username}' AND Correo='{$correo}'";
			$resultado_obtenerIdLogin=mysqli_query($conexion, $obtenerIdLogin);
			if($row = mysqli_fetch_array($resultado_obtenerIdLogin))
			{
				echo $idLoginConsulta=$row[0];
				$insertarUsuario="INSERT into usuario (Nombre, ApellidoPaterno, ApellidoMaterno,Tipo, Login) VALUES ('{$usuario}', '{$apellidoPaterno}', '{$apellidoMaterno}', '1', '{$idLoginConsulta}')";
				$resultado_insertarUsuario=mysqli_query($conexion, $insertarUsuario);
			}
			
		}
		mysqli_close($conexion);
		//header('Location: //mipagina.php');
	}
?>