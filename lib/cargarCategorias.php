<?php
	require '../webService/conexion.php';

	$obtenerSubcategrias="SELECT subcategoria.IdSubcategoria, subcategoria.Nombre, categoria.IdCategoria, categoria.Nombre FROM subcategoria,categoria WHERE subcategoria.Categoria=categoria.IdCategoria ORDER BY subcategoria.Categoria, subcategoria.IdSubcategoria";

	$resultado_obtenerSubcategorias=mysqli_query($conexion, $obtenerSubcategrias);
	$categoriaActual=0;
	while($subc = mysqli_fetch_array($resultado_obtenerSubcategorias)){
		if($categoriaActual!=$subc[2])
		{
			echo "</br>".$subc[2].utf8_encode($subc[3])."</br>";
			$categoriaActual=$subc[2];
		}
		echo "</br>".$subc[0].utf8_decode($subc[1])."</br>" ;
		//if()	
	}
?>