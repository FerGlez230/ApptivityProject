<?php
	include'conexion.php';
	$id= $_POST['promocionEliminar'];
	$eliminarPromocion="DELETE FROM promocion WHERE IdPromocion='{$id}'";
	$resultadoEliminarPromocion=mysqli_query($conexion, $eliminarPromocion);
	$eliminarDuracionPromocion="DELETE FROM duracionpromocion WHERE Promocion='{$id}'";
	$resultadoEliminarDuracioPromociono=mysqli_query($conexion, $eliminarDuracionPromocion);

	echo "<script type='text/javascript'>alert('Promocion eliminada '); window.location.href = '/apptivity/promocion.php';</script>";
?>