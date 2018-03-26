<?php 
	include 'conexion.php';
	if(isset($_POST['NombrePromocion'])&&isset($_POST['DescripcionProm']))//&&isset($_POST['Imagen']))
	{
		$servidor ="localhost";
		$baseDatos ="apptivity";
		$usuario ="root"; 
		$password ="";


		 $nombrePromocion=$_POST['NombrePromocion'];
		 $horaInicio= $_POST['HoraInicio'];
		 $horaTermino= $_POST['HoraTermino'];
		 $descripcion= $_POST['DescripcionProm'];
		
		 $nombreImg = $_FILES['Imagen']['name'];
		 $tipoImg = $_FILES['Imagen']['type'];
		 $tamanoImg = $_FILES['Imagen']['size'];
	 
		if (($nombreImg == !NULL) && ($_FILES['Imagen']['size'] <= 600000)) 
		{
	   		//indicamos los formatos que permitimos subir a nuestro servidor
	   		if (($_FILES["Imagen"]["type"] == "image/gif")
	   		|| ($_FILES["Imagen"]["type"] == "image/jpeg")
	   		|| ($_FILES["Imagen"]["type"] == "image/jpg")
	   		|| ($_FILES["Imagen"]["type"] == "image/png"))
	   		{
	      		// Ruta donde se guardarán las imágenes que subamos
	      	 echo $tipoImg=substr($tipoImg, 6);
	     	 $directorio = $_SERVER['DOCUMENT_ROOT'].'/Imagenes/';
	      // Muevo la imagen desde el directorio temporal a nuestra ruta indicada anteriormente

	     // 

			$insertarPromocion="INSERT into promocion (Nombre, Descripcion,  Establecimiento) VALUES ('{$nombrePromocion}','{$descripcion}', '1')";
			$resultado_insertarPromocion=mysqli_query($conexion, $insertarPromocion);


			$obtenerId="SELECT IdPromocion FROM promocion  ORDER BY IdPromocion DESC LIMIT 1";
			$resultado_obtenerId=mysqli_query($conexion, $obtenerId);


				if($row = mysqli_fetch_array($resultado_obtenerId))
				{
					echo $id=$row[0];
					echo $nombreImg=$id.'.'.$tipoImg;
					$insertarImagen="UPDATE promocion SET  Imagen='{$nombreImg}' WHERE  IdPromocion=$id";
					$resultado_insertarImagen=mysqli_query($conexion, $insertarImagen);
				}

	      	move_uploaded_file($_FILES['Imagen']['tmp_name'],$directorio.$nombreImg);
			mysqli_close($conexion);
			echo "Subida exitosa";
	    	} 
	    	else 
		    {
		       //si no cumple con el formato
		       echo "No se puede subir una imagen con ese formato ";
		    }
		} 
		else 
		{
		   //si existe la variable pero se pasa del tamaño permitido
		   if($nombreImg == !NULL) echo "La imagen es demasiado grande "; 
		}
	}
?>