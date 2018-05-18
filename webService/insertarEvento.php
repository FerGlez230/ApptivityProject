<?php 
	require 'conexion.php';
	session_start();

	$data = json_decode($_POST['valores']);
	$_SESSION['establecimiento'];

	if(isset($_POST['NombreEvento'])&&isset($_POST['Descripcion'])){
		$nombre= $_POST['NombreEvento'];
		$descripcion= $_POST['Descripcion'];
		$categorias=$_POST['categorias']; 
		$precioMenor= $_POST['PrecioInferior'];
		$precioMayor= $_POST['PrecioSuperior'];

		$nombreImg = $_FILES['fileInput']['name'];
		$tipoImg = $_FILES['fileInput']['type'];
		$tamanoImg = $_FILES['fileInput']['size'];
      	
		if (($nombreImg == !NULL) && ($_FILES['fileInput']['size'] <= 800000)){
	   		//indicamos los formatos que permitimos subir a nuestro servidor
	   		if (($_FILES["fileInput"]["type"] == "image/gif")
	   		|| ($_FILES["fileInput"]["type"] == "image/jpeg")
	   		|| ($_FILES["fileInput"]["type"] == "image/jpg")
	   		|| ($_FILES["fileInput"]["type"] == "image/png"))
	   		{
	      		// Ruta donde se guardarán las imágenes que subamos
				$tipoImg=substr($tipoImg, 6);
				$directorio = $_SERVER['DOCUMENT_ROOT'].'/Imagenes/';
				// Muevo la imagen desde el directorio temporal a nuestra ruta indicada anteriormente

	     // 
		     	$establecimiento=$_SESSION['establecimiento'];
				$insertarEvento="INSERT into evento (Nombre, Descripcion, PrecioMayor, PrecioMenor, Establecimiento) VALUES ('{$nombre}','{$descripcion}','{$precioMayor}', '{$precioMenor}','{$establecimiento}')";


				//{$_SESSION['establecimiento']}')";
				$resultado_insertarEvento=mysqli_query($conexion, $insertarEvento);
				$obtenerId="SELECT IdEvento FROM evento  ORDER BY IdEvento DESC LIMIT 1";
				$resultado_obtenerId=mysqli_query($conexion, $obtenerId);

				if($row = mysqli_fetch_array($resultado_obtenerId)){
					$id=$row[0];
					foreach ($data as $obj){
						$HrI=$obj[1];
						$HrF=$obj[2];
						$dias=$obj[3];
						if($HrI!=""&&$HrF!=""){
							$dia=explode(",", $dias);
							for ($i=0;$i<count($dia)-1;$i++){
								$diaMysql=str_replace('/','-',$dia[$i]);
								$insertarDuracion="INSERT into duracionevento(Fecha, HoraInicio, HoraFin, Evento) VALUES ('{$diaMysql}', '{$HrI}', '{$HrF}', '{$id}')";
								$resultado_insertarDuracion=mysqli_query($conexion,$insertarDuracion);
							}
						}
					}
					for ($i=0;$i<count($categorias);$i++){ 
			      		//"<br> categorias " . $i . ": " . $categorias[$i]; 
			      		$insertarCategoria="INSERT into categoriaevento (Evento, Subcategoria) VALUES ('{$id}','{$categorias[$i]}')";
			      		//{$_SESSION['establecimiento']}');"
			      		$resultado_insertarEvento=mysqli_query($conexion, $insertarCategoria);
			      	}
					$nombreImg=$id.'evento.'.$tipoImg;
					$insertarImagen="UPDATE evento SET  Imagen='{$nombreImg}' WHERE  IdEvento=$id";
					$resultado_insertarImagen=mysqli_query($conexion, $insertarImagen);
				}

	      	move_uploaded_file($_FILES['fileInput']['tmp_name'],$directorio.$nombreImg);
			mysqli_close($conexion);
			$data = array(
				0 => "Evento registrado exitosamente",
				1 => true
			);
			echo json_encode($data);
	    	} 
	    	else{
		       //si no cumple con el formato
		       $data = array(
					0 => "No se puede subir una imagen con ese formato",
					1 => false
				);
				echo json_encode($data);
		    }
		} 
		else{
		   //si existe la variable pero se pasa del tamaño permitido
		   if($nombreImg == !NULL){
		   		$data = array(
					0 => "La imagen es demasiado grande",
					1 => false
				);
				echo json_encode($data);
		   }
		}
	}else{
		$data = array(
			0 => "Algún campo se ingresó incorrectamente",
			1 => false
		);
		echo json_encode($data);
	}
?>