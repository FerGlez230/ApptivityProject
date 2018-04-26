<?php
	include 'conexion.php';
	session_start();
	if(isset($_POST['nombre'])&&isset($_POST['app'])&&isset($_POST['apm']))
	{
		$nombreImg = $_FILES['file-input']['name'];
		$tipoImg = $_FILES['file-input']['type'];
		$tamanoImg = $_FILES['file-input']['size'];
		$actualizarDatos="UPDATE usuario SET Nombre='{$_POST['nombre']}', ApellidoPaterno='{$_POST['app']}', ApellidoMaterno='{$_POST['apm']}' WHERE  IdUsuario='{$_SESSION['idUsuario']}'";
		$resultado_actualizarDatos=mysqli_query($conexion,$actualizarDatos);
		$_SESSION['nombre']=$_POST['nombre'];
		$_SESSION['app']=$_POST['app'];
		$_SESSION['apm']=$_POST['apm'];


		if (($nombreImg == !NULL) && ($_FILES['file-input']['size'] <= 800000)) 
		{
	   		//indicamos los formatos que permitimos subir a nuestro servidor
	   		if (($_FILES["file-input"]["type"] == "image/gif")
	   		|| ($_FILES["file-input"]["type"] == "image/jpeg")
	   		|| ($_FILES["file-input"]["type"] == "image/jpg")
	   		|| ($_FILES["file-input"]["type"] == "image/png"))
	   		{
	      		// Ruta donde se guardarán las imágenes que subamos
	      	 $tipoImg=substr($tipoImg, 6);
	     	 $directorio = $_SERVER['DOCUMENT_ROOT'].'/Imagenes/';
	     	 $nombreImg=$_SESSION['correo'].'.'.$tipoImg;
	     	 echo $_SESSION['img']=$nombreImg;
			 $insertarImagen="UPDATE usuario SET  Imagen='{$nombreImg}' WHERE  IdUsuario='{$_SESSION['idUsuario']}'";
			 $resultado_insertarImagen=mysqli_query($conexion, $insertarImagen);
			 move_uploaded_file($_FILES['file-input']['tmp_name'],$directorio.$nombreImg);
	     	}
		}
		if(isset($_POST['pass'])&&isset($_POST['npass']))
		{
			$obtenerPassword="SELECT Password FROM login WHERE IdLogin='{$_SESSION['idLogin']}'"; 
			$resultado_obtenerPassword=mysqli_query($conexion,$obtenerPassword);
			if($passwordBD = mysqli_fetch_array($resultado_obtenerPassword))
			{

				if(password_verify($_POST['pass'], $passwordBD[0]))
				{
					$password=password_hash($_POST['npass'], PASSWORD_DEFAULT);
					$actualizarPassword="UPDATE login SET Password='{$password}'";
					$resultado_actualizarPassword=mysqli_query($conexion, $actualizarPassword);
				}
			}
		}
		header("location:/apptivity/cuentaEstablecimiento.php");
		printf("<script type='text/javascript'>alert('Cambios realizados exitosamente.'); </script>");
		//header("location:/apptivity/inicioEstablecimiento.php");
		
	}
?>