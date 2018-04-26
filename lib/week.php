<?php
	include 'conexion.php';
	session_start();
	$dia = $_POST['dia'];
	//echo "<script>alert('{$dia}');</script>";

	$day = array();
	$month = array();
	$year = array();
	$dato = array();
	
	$evento = "";
	$semana = "";
	$estrella = 0;

	switch($dia){
		case 0:
			$fecha = date('d-m-Y', time() - (60*60*24*7) - (60*60*7));
			break;
		case 1:
			$fecha = date('d-m-Y', time() - (60*60*24*8) - (60*60*7));
			break;
		case 2:
			$fecha = date('d-m-Y', time() - (60*60*24*9) - (60*60*7));
			break;
		case 3:
			$fecha = date('d-m-Y', time() - (60*60*24*10) - (60*60*7));
			break;
		case 4:
			$fecha = date('d-m-Y', time() - (60*60*24*11) - (60*60*7));
			break;
		case 5:
			$fecha = date('d-m-Y', time() - (60*60*24*12) - (60*60*7));
			break;
		case 6:
			$fecha = date('d-m-Y', time() - (60*60*24*13) - (60*60*7));
			break;
	}
	//echo "<script>alert('{$fecha}');</script>";

	for($i=0; $i<7; $i++){
		array_push($day, (int)date('j', strtotime ('+ ' . $i . 'day', strtotime($fecha))));
		array_push($month, (int)date('m', strtotime ('+ ' . $i . 'day', strtotime($fecha))));
		array_push($year, (int)date('Y', strtotime ('+ ' . $i . 'day', strtotime($fecha))));
		array_push($dato, date('d-m', strtotime ('+ ' . $i . 'day', strtotime($fecha))));
		//echo "<script>alert('{$day[$i]}' + ',' + '{$month[$i]}' + ',' + '{$year[$i]}');</script>";
	}

	$sql_evento = mysqli_query($conexion, "SELECT DISTINCT visitas.Evento AS even FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento = '{$_SESSION['establecimiento']}') as listE on listE.IdEvento = visitas.Evento and (YEAR(visitas.Fecha) = '{$year[0]}' or YEAR(visitas.Fecha) = '{$year[6]}') AND	(MONTH(visitas.Fecha) = '{$month[0]}' or MONTH(visitas.Fecha) = '{$month[6]}')  and DAY(visitas.Fecha) >= '{$day[0]}'  and DAY(visitas.Fecha) <= '{$day[6]}'");

	While($row_evento = mysqli_fetch_array($sql_evento, MYSQLI_ASSOC)){

		$nombreEvento = mysqli_fetch_array(mysqli_query($conexion, "SELECT DISTINCT evento.Nombre FROM evento WHERE evento.IdEvento = '{$row_evento['even']}'"));

		$domingo = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) FROM visitas WHERE visitas.Evento = '{$row_evento['even']}' and YEAR(visitas.Fecha) = '{$year[0]}' AND MONTH(visitas.Fecha) = '{$month[0]}' and DAY(visitas.Fecha) = '{$day[0]}'"));

		$lunes = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) FROM visitas WHERE visitas.Evento = '{$row_evento['even']}' and YEAR(visitas.Fecha) = '{$year[1]}' AND MONTH(visitas.Fecha) = '{$month[1]}' and DAY(visitas.Fecha) = '{$day[1]}'"));

		$martes = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) FROM visitas WHERE visitas.Evento = '{$row_evento['even']}' and YEAR(visitas.Fecha) = '{$year[2]}' AND MONTH(visitas.Fecha) = '{$month[2]}' and DAY(visitas.Fecha) = '{$day[2]}'"));

		$miercoles = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) FROM visitas WHERE visitas.Evento = '{$row_evento['even']}' and YEAR(visitas.Fecha) = '{$year[3]}' AND MONTH(visitas.Fecha) = '{$month[3]}' and DAY(visitas.Fecha) = '{$day[3]}'"));

		$jueves = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) FROM visitas WHERE visitas.Evento = '{$row_evento['even']}' and YEAR(visitas.Fecha) = '{$year[4]}' AND MONTH(visitas.Fecha) = '{$month[4]}' and DAY(visitas.Fecha) = '{$day[4]}'"));

		$viernes = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) FROM visitas WHERE visitas.Evento = '{$row_evento['even']}' and YEAR(visitas.Fecha) = '{$year[5]}' AND MONTH(visitas.Fecha) = '{$month[5]}' and DAY(visitas.Fecha) = '{$day[5]}'"));

		$sabado = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) FROM visitas WHERE visitas.Evento = '{$row_evento['even']}' and YEAR(visitas.Fecha) = '{$year[6]}' AND MONTH(visitas.Fecha) = '{$month[6]}' and DAY(visitas.Fecha) = '{$day[6]}'"));

		$sql_Astar = mysqli_fetch_array(mysqli_query($conexion, "SELECT SUM(visitas.Calificacion) AS r FROM visitas WHERE visitas.Evento = '{$row_evento['even']}' AND (YEAR(visitas.Fecha) = '{$year[0]}' or YEAR(visitas.Fecha) = '{$year[6]}') AND	(MONTH(visitas.Fecha) = '{$month[0]}' or MONTH(visitas.Fecha) = '{$month[6]}')  and DAY(visitas.Fecha) >= '{$day[0]}'  and DAY(visitas.Fecha) <= '{$day[6]}'"));

		$evento .= $nombreEvento[0] . ".";

		$semana .= $domingo[0] . "," . $lunes[0] . "," . $martes[0] . "," . $miercoles[0] . "," . $jueves[0] . "," . $viernes[0] . "," . $sabado[0] . ".";

		$estrella += (int)$sql_Astar['r'];
	}

	$semanaS = explode(".", $semana);
	$eventoS = explode(".", $evento);

	$data = array(0 => $eventoS,
				  1 => $semanaS,
				  2 => $estrella,
				  3 => $dato,
			);
	echo json_encode($data);
?>