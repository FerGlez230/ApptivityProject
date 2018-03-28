<?php
	include 'conexion.php';

	echo "Adios";
	session_start();
	$establecimiento = $_REQUEST['NombreEstablecimiento'];
	$latitud = $_REQUEST['Obtener mi ubicación actual'];
	$longitud = $_REQUEST['NombreEstablecimiento'];
	$telefono = $_REQUEST['NombreEstablecimiento'];

	echo $establecimiento;
	echo $latitud;

	$horaI = $_REQUEST['HoraInicio'];
	$horaT = $_REQUEST['HoraTermino'];

	echo $horaI;
	echo $horaT;
	/*$telefono = $_REQUEST['telefono'];
	$colonia = $_REQUEST['colonia'];
	$domicilio = $_REQUEST['domicilio'];
	$correo = $_REQUEST['correo'];
	$password = $_REQUEST['password'];
	$password1 = $_REQUEST['password1'];

	if(!$nombre || !$paterno || !$materno || !$telefono || !$domicilio || !$correo || !$password || !$password1){
		echo '<script language="javascript"> alert("Favor de ingresar todos los datos"); </script>';
	}

	if($password != $password1){
		echo '<script language="javascript"> alert("Error: Las claves ingresadas no coinciden"); </script>';
	}

	if($password==$password1 && $password){
		$result = mysqli_query($conexion, "SELECT max(id_cliente) from cliente");
		$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
		$new_id = $row['max(id_cliente)'] + 1;

		mysqli_query($conexion, "INSERT INTO cliente VALUES ($new_id, '$nombre', '$paterno', '$materno', '$correo', '$telefono', '$domicilio', '$colonia')" );

		$result = mysqli_query($conexion, "SELECT max(id_login) from login");
		$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
		$new_id = $row['max(id_login)'] + 1;

		mysqli_query($conexion, "INSERT INTO login VALUES ($new_id, '$correo', '$password')");

		header ("location: sucursal.php");
	}
	*/
	mysqli_close( $conexion );
?>