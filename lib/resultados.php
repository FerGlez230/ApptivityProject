<?php
	session_start();
    $tipo = $_POST['tipo'];
	//$tipo = 1;

    if($tipo == 0) yesterday();
    if($tipo == 1) week();
    if($tipo == 2) month();
	if($tipo == 3) year();
	if($tipo == 4) multiYear();

	function year(){
		require '../webService/conexion.php';
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
	}

	function multiYear(){
		require '../webService/conexion.php';
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
	}

	function yesterday(){
		require '../webService/conexion.php';
		$dia = $_POST['dia'];
		//$dia = 17;
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

			$evento .= utf8_encode($nombreEvento[0]) . ".";
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
	}

	function week(){
		require '../webService/conexion.php';
		$dia = $_POST['dia'];
		
		//$dia = 4;
		$day = array();
		$month = array();
		$year = array();
		$dato = array();
		
		$evento = "";
		$semana = "";
		$estrella = 0;
		$total = 0;

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
			//echo "<script>alert('$dato[$i]');</script>";
		}

		if($month[0] != $month[6]){
			echo "<script>alert('Hola');</script>";
			$fin = (int)_data_last_month_day(2);
			$inicio = (int)_data_first_month_day(2);
			
			$sql_evento = mysqli_query($conexion, "SELECT DISTINCT evento.IdEvento As even FROM evento INNER JOIN (SELECT duracionevento.Evento FROM duracionevento WHERE YEAR(duracionevento.Fecha) = '{$year[0]}' AND MONTH(duracionevento.Fecha) = '{$month[0]}' AND DAY(duracionevento.Fecha) >= '{$day[0]}' AND DAY(duracionevento.Fecha) <= '{$fin}' UNION SELECT duracionevento.Evento FROM duracionevento WHERE YEAR(duracionevento.Fecha) = '{$year[6]}' AND MONTH(duracionevento.Fecha) = '{$month[6]}' AND DAY(duracionevento.Fecha) >= '{$inicio}' AND DAY(duracionevento.Fecha) <= '{$day[6]}') AS lista on lista.Evento = evento.IdEvento");
		}else{
			$sql_evento = mysqli_query($conexion, "SELECT DISTINCT duracionevento.Evento As even FROM duracionevento WHERE YEAR(duracionevento.Fecha) = '{$year[0]}' AND MONTH(duracionevento.Fecha) = '{$month[0]}' AND DAY(duracionevento.Fecha) <= '{$day[6]}' AND duracionevento.Evento IN (SELECT DISTINCT duracionevento.Evento FROM duracionevento WHERE YEAR(duracionevento.Fecha) = '{$year[6]}' AND MONTH(duracionevento.Fecha) = '{$month[6]}' AND DAY(duracionevento.Fecha) >= '{$day[0]}')");
		}

		While($row_evento = mysqli_fetch_array($sql_evento, MYSQLI_ASSOC)){
			
			$nombreEvento = mysqli_fetch_array(mysqli_query($conexion, "SELECT DISTINCT evento.Nombre FROM evento WHERE evento.IdEvento = '{$row_evento['even']}'"));

			$domingo = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas), SUM(visitas.Calificacion) FROM visitas WHERE visitas.Evento = '{$row_evento['even']}' and YEAR(visitas.Fecha) = '{$year[0]}' AND MONTH(visitas.Fecha) = '{$month[0]}' and DAY(visitas.Fecha) = '{$day[0]}'"));

			$lunes = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas), SUM(visitas.Calificacion) FROM visitas WHERE visitas.Evento = '{$row_evento['even']}' and YEAR(visitas.Fecha) = '{$year[1]}' AND MONTH(visitas.Fecha) = '{$month[1]}' and DAY(visitas.Fecha) = '{$day[1]}'"));

			$martes = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas), SUM(visitas.Calificacion) FROM visitas WHERE visitas.Evento = '{$row_evento['even']}' and YEAR(visitas.Fecha) = '{$year[2]}' AND MONTH(visitas.Fecha) = '{$month[2]}' and DAY(visitas.Fecha) = '{$day[2]}'"));

			$miercoles = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas), SUM(visitas.Calificacion) FROM visitas WHERE visitas.Evento = '{$row_evento['even']}' and YEAR(visitas.Fecha) = '{$year[3]}' AND MONTH(visitas.Fecha) = '{$month[3]}' and DAY(visitas.Fecha) = '{$day[3]}'"));

			$jueves = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas), SUM(visitas.Calificacion) FROM visitas WHERE visitas.Evento = '{$row_evento['even']}' and YEAR(visitas.Fecha) = '{$year[4]}' AND MONTH(visitas.Fecha) = '{$month[4]}' and DAY(visitas.Fecha) = '{$day[4]}'"));

			$viernes = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas), SUM(visitas.Calificacion) FROM visitas WHERE visitas.Evento = '{$row_evento['even']}' and YEAR(visitas.Fecha) = '{$year[5]}' AND MONTH(visitas.Fecha) = '{$month[5]}' and DAY(visitas.Fecha) = '{$day[5]}'"));

			$sabado = mysqli_fetch_array(mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas), SUM(visitas.Calificacion) FROM visitas WHERE visitas.Evento = '{$row_evento['even']}' and YEAR(visitas.Fecha) = '{$year[6]}' AND MONTH(visitas.Fecha) = '{$month[6]}' and DAY(visitas.Fecha) = '{$day[6]}'"));

			$evento .= utf8_encode($nombreEvento[0]) . ".";

			$semana .= $domingo[0] . "," . $lunes[0] . "," . $martes[0] . "," . $miercoles[0] . "," . $jueves[0] . "," . $viernes[0] . "," . $sabado[0] . ".";

			$total += (int)$domingo[0] + (int)$lunes[0] + (int)$martes[0] + (int)$miercoles[0] + (int)$jueves[0] + (int)$viernes[0] + (int)$sabado[0];

			$estrella += (int)$domingo[1] + (int)$lunes[1] + (int)$martes[1] + (int)$miercoles[1] + (int)$jueves[1] + (int)$viernes[1] + (int)$sabado[1];
		}
		//echo "<script>alert('$estrella');</script>";

		$semanaS = explode(".", $semana);
		$eventoS = explode(".", $evento);

		$data = array(0 => $eventoS,
					  1 => $semanaS,
					  2 => $estrella,
					  3 => $dato,
					  4 => $total,
				);
		echo json_encode($data);
	}

	function month(){
		require '../webService/conexion.php';
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

			$evento .= utf8_encode($nombreEvento[0]) . ".";

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
	}

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

	function utf8ize($d) {
	    if (is_array($d)) {
	        foreach ($d as $k => $v) {
	            $d[$k] = utf8ize($v);
	        }
	    } else if (is_string ($d)) {
	        return utf8_encode($d);
	    }
	    return $d;
	}
	
?>