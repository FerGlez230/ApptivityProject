<?php
	include 'conexion.php';
	session_start();

	$anio = "";
	$mes = "";
	$star = 0;

	$sql_anio = mysqli_query($conexion, "SELECT DISTINCT YEAR(visitas.Fecha) AS Date FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento = '{$_SESSION['establecimiento']}') as listE on listE.IdEvento = visitas.Evento");

	While($row_anio = mysqli_fetch_array($sql_anio, MYSQLI_ASSOC)) {

		$enero = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento = '{$_SESSION['establecimiento']}' ) AS listE ON listE.IdEvento = visitas.Evento WHERE MONTH(visitas.Fecha) = 1 AND YEAR(visitas.Fecha) = '{$row_anio['Date']}' "));
		$febrero = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento= '{$_SESSION['establecimiento']}' ) as listE on listE.IdEvento = visitas.Evento WHERE MONTH(visitas.Fecha) = 2 AND YEAR(visitas.Fecha)= '{$row_anio['Date']}' "));
		$marzo = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento= '{$_SESSION['establecimiento']}' ) as listE on listE.IdEvento = visitas.Evento WHERE MONTH(visitas.Fecha) = 3 AND YEAR(visitas.Fecha)= '{$row_anio['Date']}' "));
		$abril = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento= '{$_SESSION['establecimiento']}' ) as listE on listE.IdEvento = visitas.Evento WHERE MONTH(visitas.Fecha) = 4 AND YEAR(visitas.Fecha)= '{$row_anio['Date']}' "));
		$mayo = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento= '{$_SESSION['establecimiento']}' ) as listE on listE.IdEvento = visitas.Evento WHERE MONTH(visitas.Fecha) = 5 AND YEAR(visitas.Fecha)= '{$row_anio['Date']}' "));
		$junio = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento= '{$_SESSION['establecimiento']}' ) as listE on listE.IdEvento = visitas.Evento WHERE MONTH(visitas.Fecha) = 6 AND YEAR(visitas.Fecha)= '{$row_anio['Date']}' "));
		$julio = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento= '{$_SESSION['establecimiento']}' ) as listE on listE.IdEvento = visitas.Evento WHERE MONTH(visitas.Fecha) = 7 AND YEAR(visitas.Fecha)= '{$row_anio['Date']}' "));
		$agosto = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento= '{$_SESSION['establecimiento']}' ) as listE on listE.IdEvento = visitas.Evento WHERE MONTH(visitas.Fecha) = 8 AND YEAR(visitas.Fecha)= '{$row_anio['Date']}' "));
		$septiembre = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento= '{$_SESSION['establecimiento']}' ) as listE on listE.IdEvento = visitas.Evento WHERE MONTH(visitas.Fecha) = 9 AND YEAR(visitas.Fecha)= '{$row_anio['Date']}' "));
		$octubre = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento= '{$_SESSION['establecimiento']}' ) as listE on listE.IdEvento = visitas.Evento WHERE MONTH(visitas.Fecha) = 10 AND YEAR(visitas.Fecha)= '{$row_anio['Date']}' "));
		$noviembre = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento= '{$_SESSION['establecimiento']}' ) as listE on listE.IdEvento = visitas.Evento WHERE MONTH(visitas.Fecha) = 11 AND YEAR(visitas.Fecha)= '{$row_anio['Date']}' "));
		$diciembre = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento= '{$_SESSION['establecimiento']}' ) as listE on listE.IdEvento = visitas.Evento WHERE MONTH(visitas.Fecha) = 12 AND YEAR(visitas.Fecha)= '{$row_anio['Date']}' "));
		$sql_Astar = mysqli_fetch_array(mysqli_query($conexion, "SELECT SUM(visitas.Calificacion) AS r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento = '{$_SESSION['establecimiento']}') as list on list.IdEvento = visitas.Evento WHERE YEAR(visitas.Fecha) = '{$row_anio['Date']}'")) or die(mysqli_error());

		$anio .= $row_anio['Date'] . ".";

		$mes .= $enero['r'] . "," . $febrero['r'] . "," . $marzo['r'] . "," . $abril['r'] . "," . $mayo['r'] . "," . $junio['r'] . "," . $julio['r'] . "," . $agosto['r'] . "," . $septiembre['r'] . "," . $octubre['r'] . "," . $noviembre['r'] . "," . $diciembre['r'] . ".";
		$star += (int)$sql_Astar['r'];
	}

	$mesS = explode(".", $mes);
	$anioS = explode(".", $anio);

	$data = array(0 => $anioS,
				  1 => $mesS,
				  2 => $star,
			);
	echo json_encode($data);
	
?>