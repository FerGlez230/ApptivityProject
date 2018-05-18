<?php 
	require 'conexion.php';

	$json=array(); 
	if( isset($_POST['Cliente'])&&isset($_POST['ApellidoPaterno'])&&isset($_POST['ApellidoMaterno'])&&isset($_POST['Username'])&&isset($_POST['CorreoElectronico'])&&isset($_POST['Contrasena'])){

		$usuario= $_POST['Cliente'];
		$apellidoPaterno= $_POST['ApellidoPaterno'];;
		$apellidoMaterno =$_POST['ApellidoMaterno'];
		$username=$_POST['Username'];
		$correo= $_POST['CorreoElectronico'];
		$password= $_POST['Contrasena'];

		$password=password_hash($password, PASSWORD_DEFAULT);

		$correoFinal="";

		$comprobacionCorreo="SELECT Correo from login WHERE Correo='{$correo}'";
		$resultado_comprobacionCorreo=mysqli_query($conexion, $comprobacionCorreo);

		if($correoRes = mysqli_fetch_array($resultado_comprobacionCorreo)){
			 $correoFinal=$correoRes[0];
		}
		
		if($correoFinal){
			$data = array(
				0 => "Correo ya registrado",
				1 => false
			);
			echo json_encode($data);
		}else{
			$insertarLogin="INSERT into login (Username, Correo, Password) VALUES ('{$username}','{$correo}','{$password}')";
			$resultado_insertarLogin=mysqli_query($conexion, $insertarLogin);
			if($resultado_insertarLogin){

				$obtenerIdLogin="SELECT IdLogin from login WHERE Username='{$username}' AND Correo='{$correo}'";
				$resultado_obtenerIdLogin=mysqli_query($conexion, $obtenerIdLogin);

				if($row = mysqli_fetch_array($resultado_obtenerIdLogin)){
					$idLoginConsulta=$row[0];
					$insertarUsuario="INSERT into usuario (Nombre, ApellidoPaterno, ApellidoMaterno, imagen, Tipo, Login) VALUES ('{$usuario}', '{$apellidoPaterno}', '{$apellidoMaterno}', 'usuarioDefault.png', '2', '{$idLoginConsulta}')";
					$resultado_insertarUsuario=mysqli_query($conexion, $insertarUsuario);
				}
				
			}
			mysqli_close($conexion);
			$data = array(
				0 => "Registro exitoso",
				1 => true
			);
			echo json_encode($data);
		}
	}else{
		$data = array(
			0 => "Algún campo se ingresó incorrectamente",
			1 => false
		);
		echo json_encode($data);
	}
?>