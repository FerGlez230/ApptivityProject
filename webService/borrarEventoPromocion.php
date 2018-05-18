<?php
	
	if(isset($_POST['id'])&&isset($_POST['tipo'])){
		$tipo = $_POST['tipo'];
		$identifica = $_POST['id'];

		if($tipo == 0) eliminarEvento($identifica);
		else if($tipo == 1)  eliminarPromocion($identifica);
		else{
			$data = array(
				0 => "No se puede eliminar ese registro",
				1 => false
			);
			echo json_encode($data);
		}

	}else{
		$data = array(
			0 => "Ocurrió un error al tratar de eliminar",
			1 => false
		);
		echo json_encode($data);
	}

	function eliminarEvento($id){
		require 'conexion.php';
		$estado = true;

		$eliminarEvento="DELETE FROM evento WHERE IdEvento='{$id}'";
		$resultadoEliminarEvento=mysqli_query($conexion, $eliminarEvento);
		if($resultadoEliminarEvento){}else{$estado=false;}

		$eliminarDuracionEvento="DELETE FROM duracionevento WHERE Evento='{$id}'";
		$resultadoEliminarDuracionEvento=mysqli_query($conexion, $eliminarDuracionEvento);
		if($resultadoEliminarDuracionEvento){}else{$estado=false;}

		$eliminarCategoriaEvento="DELETE FROM categoriaevento WHERE Evento='{$id}'";
		$resultadoCategoriaDuracionEvento=mysqli_query($conexion, $eliminarCategoriaEvento);
		if($resultadoCategoriaDuracionEvento){}else{$estado=false;}

		if($estado){
			$data = array(
				0 => "Evento eliminado exitosamente",
				1 => true
			);
		}else{
			$data = array(
				0 => "No se pudo eliminar este registro",
				1 => false
			);
		}
		
		echo json_encode($data);
	}

	function eliminarPromocion($id){
		require 'conexion.php';
		
		$eliminarPromocion="DELETE FROM promocion WHERE IdPromocion='{$id}'";
		$resultadoEliminarPromocion=mysqli_query($conexion, $eliminarPromocion);
		$eliminarDuracionPromocion="DELETE FROM duracionpromocion WHERE Promocion='{$id}'";
		$resultadoEliminarDuracioPromociono=mysqli_query($conexion, $eliminarDuracionPromocion);
		$data = array(
			0 => "Promoción eliminada exitosamente",
			1 => true
		);
		echo json_encode($data);
	}
?>