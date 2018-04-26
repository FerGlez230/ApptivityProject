<?php 
	include 'conexion.php';
	if(isset($_POST['Vcorreo'])&&isset($_POST['Vpass']))
	{
		$correo= $_POST['Vcorreo'];
		$password= $_POST['Vpass'];

		$iniciarSesion="SELECT Password FROM login WHERE Correo='{$correo}'";
		
		$resultado_iniciarSesion=mysqli_query($conexion, $iniciarSesion);

		if($correoDetectado = mysqli_fetch_array($resultado_iniciarSesion))
		{
			$passwordBD=$correoDetectado[0];
			if($passwordBD)
			{
				if(password_verify($password, $passwordBD))
				{
					$obtenerIdLogin="SELECT IdLogin FROM login WHERE Correo='{$correo}'";
					$resultado_obtenerIdLogin=mysqli_query($conexion,$obtenerIdLogin);
					if($idLoginDetectado=mysqli_fetch_array($resultado_obtenerIdLogin))
					{
						$idLogin=$idLoginDetectado[0];
						$obtenerUsuario="SELECT * FROM usuario WHERE Login='{$idLogin}'";
						$obtenerUsername="SELECT Username FROM login WHERE idLogin='{$idLogin}'";

						$resultado_obtenerUsuario=mysqli_query($conexion,$obtenerUsuario);
						$resultado_obtenerUsername=mysqli_query($conexion,$obtenerUsername);

						$UsuarioDetectado=mysqli_fetch_array($resultado_obtenerUsuario);
						$UsernameDetectado=mysqli_fetch_array($resultado_obtenerUsername);
						
						$tipoUsuario=$UsuarioDetectado[5];
						session_start();
						$_SESSION['idUsuario']=$UsuarioDetectado[0];
						$_SESSION['nombre']=$UsuarioDetectado[1];
						$_SESSION['app']=$UsuarioDetectado[2];
						$_SESSION['apm']=$UsuarioDetectado[3];
						$_SESSION['img']=$UsuarioDetectado[4];
						$_SESSION['correo']=$correo;
						$_SESSION['username']=$UsernameDetectado[0];
						$_SESSION['tipo']=$tipoUsuario;
						$_SESSION['idLogin']=$idLogin;

						if($tipoUsuario==1)
						{
							$obtenerEstablecimiento="SELECT idEstablecimiento, Nombre FROM establecimiento WHERE Usuario='{$UsuarioDetectado[0]}'";
							$resultado_obtenerEstablecimiento=mysqli_query($conexion, $obtenerEstablecimiento);
							$establecimientoDetectado=mysqli_fetch_array($resultado_obtenerEstablecimiento);
							$_SESSION['establecimiento']=$establecimientoDetectado[0];
							$_SESSION['establecimientoN']=$establecimientoDetectado[1];
							header("location:/apptivity/evento.php");
							//printf("<script> window.location='/apptivity/inicioEstablecimiento.php';</script>"); 
						}
						if($tipoUsuario==2)
						{
							echo("<script> window.location='/apptivity/cuentaCliente.php';</script>"); //cambiar esta direccion por la de popularidad
						}
					}
				}else
					{
						
						echo "<script type='text/javascript'>alert('Su contraseña no coincide. '); window.location.href = '/apptivity/index.html';</script>";
						
					}
			}else{
					echo "<script type='text/javascript'>alert('Su contraseña no coincide. '); window.location.href = '/apptivity/index.html';</script>";
					//header('location:/apptivity/inicioEstablecimiento.php', 'refresh');
				}
		}
		else
		{
			printf("<script type='text/javascript'>alert('Su correo no coincide. '); window.location.href = '/apptivity/index.html';</script>");
		}	
	}
	else
	{
		printf("<script type='text/javascript'>alert('Algo salió mal. Reintente llenar el formulario.'); window.location.href = '/apptivity/index.html';</script>");
	}
	
?>