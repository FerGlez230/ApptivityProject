<?php
	include 'conexion.php';
	session_start();
	$año = $_POST['año'];

	$sql_Astar = mysqli_fetch_array(mysqli_query($conexion, "SELECT SUM(visitas.Calificacion) AS r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento = '{$_SESSION['establecimiento']}') as list on list.IdEvento = visitas.Evento WHERE YEAR(visitas.Fecha) = '{$año}'")) or die(mysqli_error());

	$enero = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento = '{$_SESSION['establecimiento']}' ) AS listE ON listE.IdEvento = visitas.Evento WHERE MONTH(visitas.Fecha) = 1 AND YEAR(visitas.Fecha) = '{$año}' "));
	$febrero = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento= '{$_SESSION['establecimiento']}' ) as listE on listE.IdEvento = visitas.Evento WHERE MONTH(visitas.Fecha) = 2 AND YEAR(visitas.Fecha)= '{$año}' "));
	$marzo = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento= '{$_SESSION['establecimiento']}' ) as listE on listE.IdEvento = visitas.Evento WHERE MONTH(visitas.Fecha) = 3 AND YEAR(visitas.Fecha)= '{$año}' "));
	$abril = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento= '{$_SESSION['establecimiento']}' ) as listE on listE.IdEvento = visitas.Evento WHERE MONTH(visitas.Fecha) = 4 AND YEAR(visitas.Fecha)= '{$año}' "));
	$mayo = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento= '{$_SESSION['establecimiento']}' ) as listE on listE.IdEvento = visitas.Evento WHERE MONTH(visitas.Fecha) = 5 AND YEAR(visitas.Fecha)= '{$año}' "));
	$junio = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento= '{$_SESSION['establecimiento']}' ) as listE on listE.IdEvento = visitas.Evento WHERE MONTH(visitas.Fecha) = 6 AND YEAR(visitas.Fecha)= '{$año}' "));
	$julio = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento= '{$_SESSION['establecimiento']}' ) as listE on listE.IdEvento = visitas.Evento WHERE MONTH(visitas.Fecha) = 7 AND YEAR(visitas.Fecha)= '{$año}' "));
	$agosto = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento= '{$_SESSION['establecimiento']}' ) as listE on listE.IdEvento = visitas.Evento WHERE MONTH(visitas.Fecha) = 8 AND YEAR(visitas.Fecha)= '{$año}' "));
	$septiembre = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento= '{$_SESSION['establecimiento']}' ) as listE on listE.IdEvento = visitas.Evento WHERE MONTH(visitas.Fecha) = 9 AND YEAR(visitas.Fecha)= '{$año}' "));
	$octubre = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento= '{$_SESSION['establecimiento']}' ) as listE on listE.IdEvento = visitas.Evento WHERE MONTH(visitas.Fecha) = 10 AND YEAR(visitas.Fecha)= '{$año}' "));
	$noviembre = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento= '{$_SESSION['establecimiento']}' ) as listE on listE.IdEvento = visitas.Evento WHERE MONTH(visitas.Fecha) = 11 AND YEAR(visitas.Fecha)= '{$año}' "));
	$diciembre = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As r FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento= '{$_SESSION['establecimiento']}' ) as listE on listE.IdEvento = visitas.Evento WHERE MONTH(visitas.Fecha) = 12 AND YEAR(visitas.Fecha)= '{$año}' "));

	//$sql_Astar = mysqli_fetch_array(mysqli_query($conexion, "SELECT DISTINCT SUM(visitas.Calificación) AS Nota FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento = '{$_SESSION['establecimiento']}') as list on list.IdEvento = visitas.Evento WHERE YEAR(visitas.Fecha)= '{$año}'"));

	$data = array(0 => (int)$enero['r'],
				  1 => (int)$febrero['r'],
				  2 => (int)$marzo['r'],
				  3 => (int)$abril['r'],
				  4 => (int)$mayo['r'],
				  5 => (int)$junio['r'],
				  6 => (int)$julio['r'],
				  7 => (int)$agosto['r'],
				  8 => (int)$septiembre['r'],
				  9 => (int)$octubre['r'],
				  10 => (int)$noviembre['r'],
				  11 => (int)$diciembre['r'],
				  12 => (int)$sql_Astar['r'],
			);
	echo json_encode($data);
	
?>