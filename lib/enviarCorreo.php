<?php
	$destino = "mi24guel36@gmail.com, ferglez230@gmail.com";
	$desde = "From:" . "Centro espacial norte Americano";
	$asunto = "contraseña de inicio";
	$mensaje = "something4write";

	mail($destino, $asunto, $mensaje, $desde);
	header("location:/apptivity/cuentaEstablecimiento.php");
?>