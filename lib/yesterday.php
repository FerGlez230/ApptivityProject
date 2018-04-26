<?php
	include 'conexion.php';
	session_start();
	$dia = $_POST['dia'];
	$año = (int)date('Y', time()-(60*60*24));
	$month = date('m', time()-(60*60*24));
	$mes = (int)date('m', time()-(60*60*24));

	/*$dia = 20;
	$año = 2018;
	$month = "04";
	$mes = 4;*/

	$fecha = $dia . "/" . $month . "/" . $año;

	$evento = "";
	$visitas = "";
	$estrella = 0;

	$sql_evento = mysqli_query($conexion, "SELECT DISTINCT visitas.Evento AS even FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento = '{$_SESSION['establecimiento']}') as listE on listE.IdEvento = visitas.Evento and YEAR(visitas.Fecha) = '{$año}' AND	MONTH(visitas.Fecha) = '{$mes}'  and DAY(visitas.Fecha) = '{$dia}'");

	While($row_evento = mysqli_fetch_array($sql_evento, MYSQLI_ASSOC)) {
		
		$nombreEvento = mysqli_fetch_array(mysqli_query($conexion, "SELECT evento.Nombre FROM evento WHERE evento.IdEvento = '{$row_evento['even']}'"));

		$visitaEvento = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) FROM visitas WHERE visitas.Evento = '{$row_evento['even']}' and YEAR(visitas.Fecha) = '{$año}' AND MONTH(visitas.Fecha) = '{$mes}' and DAY(visitas.Fecha) = '{$dia}'"));

		$sql_Astar = mysqli_fetch_array(mysqli_query($conexion, "SELECT SUM(visitas.Calificacion) AS r FROM visitas WHERE  visitas.Evento = '{$row_evento['even']}' AND MONTH(visitas.Fecha) = '{$mes}' AND YEAR(visitas.Fecha) = '{$año}' AND DAY(visitas.Fecha) = '{$dia}'")) or die(mysqli_error());

		$evento .= $nombreEvento[0] . ".";
		$visitas .= $visitaEvento[0] . ".";
		$estrella += (int)$sql_Astar['r'];
	}

	$eventoE = explode(".", $evento);
	$visitaE = explode(".", $visitas);

	$data = array(0 => $eventoE,
				  1 => $visitaE,
				  2 => $estrella,
				  3 => $fecha,
			);
	echo json_encode($data);
	
?>