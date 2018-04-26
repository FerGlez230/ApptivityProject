<?php
	include 'conexion.php';
	session_start();
	//echo "<script>alert('{$dia}');</script>";

	/** Actual month last day **/
	function _data_last_month_day($x) { 
	    $month = date('m');
	    $year = date('Y');
	    $day = date("d", mktime(0,0,0, $month, 0, $year));
		if($x == 0) return date('Y', mktime(0,0,0, $month-1, $day, $year));
		if($x == 1) return date('m', mktime(0,0,0, $month-1, $day, $year));
		if($x == 2) return date('d', mktime(0,0,0, $month-1, $day, $year));
	};
	 
	/** Actual month first day **/
	function _data_first_month_day($x) {
	    $month = date('m');
	    $year = date('Y');
	    if($x == 0) return date('Y', mktime(0,0,0, $month-1, 1, $year));
	    if($x == 1) return date('m', mktime(0,0,0, $month-1, 1, $year));
	    if($x == 2) return date('d', mktime(0,0,0, $month-1, 1, $year));
	}

	$mes = (int)_data_last_month_day(1);
	$anio = (int)_data_last_month_day(0);
	$inicio = (int)_data_first_month_day(2);
	$fin = (int)_data_last_month_day(2);

	$bloque = array();
	$estrella = 0;
	$evento = "";

	//echo "<script>alert('{$mes}' + ', ' + '{$anio}');</script>";

	/*($i=0; $i<7; $i++){
		array_push($day, (int)date('j', strtotime ('+ ' . $i . 'day', strtotime($fecha))));
		array_push($month, (int)date('m', strtotime ('+ ' . $i . 'day', strtotime($fecha))));
		array_push($year, (int)date('Y', strtotime ('+ ' . $i . 'day', strtotime($fecha))));
		array_push($dato, date('d-m', strtotime ('+ ' . $i . 'day', strtotime($fecha))));
		//echo "<script>alert('{$day[$i]}' + ',' + '{$month[$i]}' + ',' + '{$year[$i]}');</script>";
	}*/

	$sql_evento = mysqli_query($conexion, "SELECT DISTINCT visitas.Evento AS even FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento = '{$_SESSION['establecimiento']}') as listE on listE.IdEvento = visitas.Evento and YEAR(visitas.Fecha) = '{$anio}'  AND MONTH(visitas.Fecha) = '{$mes}'");

	While($row_evento = mysqli_fetch_array($sql_evento, MYSQLI_ASSOC)){
		$dias = array();

		$nombreEvento = mysqli_fetch_array(mysqli_query($conexion, "SELECT DISTINCT evento.Nombre FROM evento WHERE evento.IdEvento = '{$row_evento['even']}'"));

		for($i = $inicio; $i<=$fin; $i++){
			$diario = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) FROM visitas WHERE visitas.Evento = '{$row_evento['even']}' and YEAR(visitas.Fecha) = '{$anio}' AND MONTH(visitas.Fecha) = '{$mes}' and DAY(visitas.Fecha) = '{$i}'"));
			array_push($dias, (int)$diario[0]);
		}

		$sql_Astar = mysqli_fetch_array(mysqli_query($conexion, "SELECT SUM(visitas.Calificacion) AS r FROM visitas WHERE visitas.Evento = '{$row_evento['even']}' AND YEAR(visitas.Fecha) = '{$anio}' AND	MONTH(visitas.Fecha) = '{$mes}' and DAY(visitas.Fecha) >= '{$inicio}' and DAY(visitas.Fecha) <= '{$fin}'"));

		$evento .= $nombreEvento[0] . ".";

		array_push($bloque, $dias);

		$estrella += (int)$sql_Astar['r'];
	}

	$eventoS = explode(".", $evento);

	$data = array(0 => $eventoS,
				  1 => $bloque,
				  2 => $fin,
				  3 => $estrella,
			);
	echo json_encode($data);
?>