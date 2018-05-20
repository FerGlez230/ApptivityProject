<?php 
	require 'conexion.php';
	$json = json_decode(file_get_contents('php://input'));
	
	//$json=array(); 
	//if( isset($_POST['Cliente'])&&isset($_POST['ApellidoPaterno'])&&isset($_POST['ApellidoMaterno'])&&isset($_POST['Username'])&&isset($_POST['CorreoElectronico'])&&isset($_POST['Contrasena'])){

		$usuario= $json->Cliente;
		$apellidoPaterno= $json->ApellidoPaterno;
		$apellidoMaterno =$json->ApellidoMaterno;
		$username=$json->Username;
		$correo= $json->CorreoElectronico;
		$password= $json->Contrasena;
	if($usuario!=null&&$apellidoPaterno!=null&&$apellidoMaterno!=null&&$username!=null&&$correo!=null&&$password!=null)
	{
		$password=password_hash($password, PASSWORD_DEFAULT);

		$correoFinal="";

		$comprobacionCorreo="SELECT Correo from login WHERE Correo='{$correo}'";
		$resultado_comprobacionCorreo=mysqli_query($conexion, $comprobacionCorreo);

		if($correoRes = mysqli_fetch_array($resultado_comprobacionCorreo)){
			 $correoFinal=$correoRes[0];
		}
		
		if($correoFinal){
			echo json_encode(
          			  array(
		                'estado' => '0',
		                'mensaje' => 'Correo inválido')
			        );
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
			echo json_encode(
            array(
                'estado' => '1',
                'mensaje' => 'Registro exitoso')
        );
		}
	}else{
		echo json_encode(
            array(
                'estado' => '0',
                'mensaje' => 'No se enviaron todos los datos correctamente')
        );
	}
?>