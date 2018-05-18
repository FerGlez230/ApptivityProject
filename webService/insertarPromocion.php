<?php 
	require 'conexion.php';
	session_start();
	
	$data = json_decode($_POST['valores']);
	$_SESSION['establecimiento'];

	if(isset($_POST['NombrePromocion'])&&isset($_POST['DescripcionP'])){
		 $nombre = utf8_decode($_POST['NombrePromocion']);
		 $descripcion = utf8_decode($_POST['DescripcionP']);
		
		 $nombreImg = $_FILES['fileInputP']['name'];
		 $tipoImg = $_FILES['fileInputP']['type'];
		 $tamanoImg = $_FILES['fileInputP']['size'];
      	
		if (($nombreImg == !NULL) && ($_FILES['fileInputP']['size'] <= 800000)){
	   		//indicamos los formatos que permitimos subir a nuestro servidor
	   		if (($_FILES["fileInputP"]["type"] == "image/gif")
	   		|| ($_FILES["fileInputP"]["type"] == "image/jpeg")
	   		|| ($_FILES["fileInputP"]["type"] == "image/jpg")
	   		|| ($_FILES["fileInputP"]["type"] == "image/png"))
	   		{
		    	// Ruta donde se guardarán las imágenes que subamos
		      	$tipoImg=substr($tipoImg, 6);
		     	$directorio = $_SERVER['DOCUMENT_ROOT'].'/Imagenes/';
		    
		    	// Muevo la imagen desde el directorio temporal a nuestra ruta indicada anteriormente
		     	$establecimiento=$_SESSION['establecimiento'];
				$insertarEvento="INSERT into promocion (Nombre, Descripcion, Establecimiento) VALUES ('{$nombre}','{$descripcion}','{$establecimiento}')";


				//{$_SESSION['establecimiento']}')";
				$resultado_insertarEvento=mysqli_query($conexion, $insertarEvento);
				$obtenerId="SELECT IdPromocion FROM promocion ORDER BY IdPromocion DESC LIMIT 1";
				$resultado_obtenerId=mysqli_query($conexion, $obtenerId);

					if($row = mysqli_fetch_array($resultado_obtenerId)){
						$id=$row[0];
						
						foreach ($data as $obj){
							$HrI=$obj[1];
							$HrF=$obj[2];
							$dias=$obj[3];
							//echo "<script>alert($dias);</script>";
							if($HrI!=""&&$HrF!=""){
								$dia=explode(",", $dias);
								for ($i=0;$i<count($dia)-1;$i++) {
									$diaMysql=str_replace('/','-',$dia[$i]);
									$insertarDuracion="INSERT into duracionpromocion(Fecha, HoraInicio, HoraFin, Promocion) VALUES ('{$diaMysql}', '{$HrI}', '{$HrF}', '{$id}')";
									$resultado_insertarDuracion=mysqli_query($conexion,$insertarDuracion);
								}
							}
						}
						
						$nombreImg=$id.'promocion.'.$tipoImg;
						$insertarImagen="UPDATE promocion SET  Imagen='{$nombreImg}' WHERE  IdPromocion=$id";
						$resultado_insertarImagen=mysqli_query($conexion, $insertarImagen);
					}else{
						echo "Falta agregar datos";
					}

		      	move_uploaded_file($_FILES['fileInputP']['tmp_name'],$directorio.$nombreImg);
				mysqli_close($conexion);
				$data = array(
					0 => "Promoción registrada exitosamente",
					1 => true
				);
				echo json_encode($data);
	    	}else{
		       $data = array(
					0 => "No se puede subir una imagen con ese formato",
					1 => false
				);
				echo json_encode($data);
		    }
		}else{
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