<?php
	include'conexion.php';
	$id= $_POST['eventoEliminar'];
	$eliminarEvento="DELETE FROM evento WHERE IdEvento='{$id}'";
	$resultadoEliminarEvento=mysqli_query($conexion, $eliminarEvento);
	$eliminarDuracionEvento="DELETE FROM duracionevento WHERE Evento='{$id}'";
	$resultadoEliminarDuracionEvento=mysqli_query($conexion, $eliminarCategoriaEvento);
	$eliminarCategoriaEvento="DELETE FROM categoriaevento WHERE Evento='{$id}'";
	$resultadoCategoriaDuracionEvento=mysqli_query($conexion, $eliminarCategoriaEvento);

	echo "<script type='text/javascript'>alert('Evento eliminado '); window.location.href = '/apptivity/evento.php';</script>";
?>