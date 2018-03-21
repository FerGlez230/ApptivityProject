<?php
	echo "Hola"; 

	$servidor = "localhost";
	$baseDatos = "apptivity";
	$usuario = "root"; 
	$password = "";

	$conexion = mysqli_connect($servidor, $usuario, $password) or die ("No se ha podido conectar al servidor de Base de datos");

	$db = mysqli_select_db( $conexion, $baseDatos) or die ( "Upps! Pues va a ser que no se ha podido conectar a la base de datos" );

	//mysqli_close( $conexion );
	//$nombreEstablecimiento= document.getElementById("NombreEstablecimiento");
	//echo $_POST['NombreEstablecimiento'];
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
?>  