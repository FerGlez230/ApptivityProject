<?php
	session_start();
	$opcion = $_POST['opc'];
	$cadena = $_POST['valor'];
	
	//$opcion = 2;
	//$cadena = "";

	if(empty($cadena)) $cadena .= " ";

	$lista = array();
	$estrella = array();

	$dia = (int)date('d', time()- 60*60*7);
	$mes = (int)date('m', time()- 60*60*7);
	$año = (int)date('Y', time()- 60*60*7);
	$hora = date("H:i:s", time()- 60*60*7);

	if($opcion == 1){
		listaActual($dia, $mes, $año, $hora, $cadena);
	}else if($opcion == 2){
		listaPasada($dia, $mes, $año, $hora, $cadena);
	}

	function listaActual($d, $m, $a, $h, $c){
		require '../webService/conexion.php';

		$sql_eventoV = mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As cuenta, SUM(visitas.calificacion) As star, visitas.Evento FROM visitas INNER JOIN (SELECT DISTINCT duracionevento.Evento AS evenRow FROM duracionevento WHERE YEAR(duracionevento.Fecha) = '{$a}' AND MONTH(duracionevento.Fecha) = '{$m}' AND DAY(duracionevento.Fecha) = '{$d}' AND duracionevento.HoraInicio > '{$h}' UNION SELECT DISTINCT duracionevento.Evento AS evenRow FROM duracionevento WHERE YEAR(duracionevento.Fecha) >= '{$a}' AND MONTH(duracionevento.Fecha) >= '{$m}' AND DAY(duracionevento.Fecha) > '{$d}') AS listE on listE.evenRow = visitas.Evento GROUP BY listE.evenRow ORDER BY cuenta DESC");

		$parte1 = sacaDatos($sql_eventoV, $c);

		$sql_eventoE = mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As cuenta, SUM(visitas.calificacion) As star, visitas.Evento FROM visitas INNER JOIN (SELECT DISTINCT duracionevento.Evento AS evenRow FROM duracionevento WHERE YEAR(duracionevento.Fecha) = '{$a}' AND MONTH(duracionevento.Fecha) = '{$m}' AND DAY(duracionevento.Fecha) = '{$d}' AND duracionevento.HoraInicio > '{$h}' UNION SELECT DISTINCT duracionevento.Evento AS evenRow FROM duracionevento WHERE YEAR(duracionevento.Fecha) >= '{$a}' AND MONTH(duracionevento.Fecha) >= '{$m}' AND DAY(duracionevento.Fecha) > '{$d}') AS listE on listE.evenRow = visitas.Evento GROUP BY listE.evenRow ORDER BY star DESC");

		$parte2 = sacaDatos($sql_eventoE, $c);

		$data = array(
					0 => $parte1,
				  	1 => $parte2
				);
		echo json_encode($data);
		//var_dump($data);
	}

	function listaPasada($d, $m, $a, $h, $c){
		require '../webService/conexion.php';

		$sql_eventoV = mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As cuenta, SUM(visitas.calificacion) As star, visitas.Evento FROM visitas INNER JOIN (SELECT pasado.evenRow FROM (SELECT DISTINCT duracionevento.Evento AS evenRow FROM duracionevento) AS pasado WHERE pasado.evenRow NOT IN (SELECT DISTINCT duracionevento.Evento AS evenRow FROM duracionevento WHERE YEAR(duracionevento.Fecha) = '{$a}' AND MONTH(duracionevento.Fecha) = '{$m}' AND DAY(duracionevento.Fecha) = '{$d}' AND duracionevento.HoraInicio > '{$h}' UNION SELECT DISTINCT duracionevento.Evento AS evenRow FROM duracionevento WHERE YEAR(duracionevento.Fecha) >= '{$a}' AND MONTH(duracionevento.Fecha) >= '{$m}' AND DAY(duracionevento.Fecha) > '{$d}')) AS listE on listE.evenRow = visitas.Evento GROUP BY listE.evenRow ORDER BY cuenta DESC");

		$parte1 = sacaDatos($sql_eventoV, $c);

		$sql_eventoE = mysqli_query($conexion, "SELECT COUNT(visitas.IdVisitas) As cuenta, SUM(visitas.calificacion) As star, visitas.Evento FROM visitas INNER JOIN (SELECT pasado.evenRow FROM (SELECT DISTINCT duracionevento.Evento AS evenRow FROM duracionevento) AS pasado WHERE pasado.evenRow NOT IN (SELECT DISTINCT duracionevento.Evento AS evenRow FROM duracionevento WHERE YEAR(duracionevento.Fecha) = '{$a}' AND MONTH(duracionevento.Fecha) = '{$m}' AND DAY(duracionevento.Fecha) = '{$d}' AND duracionevento.HoraInicio > '{$h}' UNION SELECT DISTINCT duracionevento.Evento AS evenRow FROM duracionevento WHERE YEAR(duracionevento.Fecha) >= '{$a}' AND MONTH(duracionevento.Fecha) >= '{$m}' AND DAY(duracionevento.Fecha) > '{$d}')) AS listE on listE.evenRow = visitas.Evento GROUP BY listE.evenRow ORDER BY star DESC");

		$parte2 = sacaDatos($sql_eventoE, $c);

		$data = array(
					0 => $parte1,
				  	1 => $parte2,
				);
		echo json_encode($data);
	}

	function sacaDatos($consulta, $cad){
		require '../webService/conexion.php';

		$comentario = array();
		$evento = array();
		$visita = array();
		$estrella = array();
		$cuenta = array();
		$id = array();
		$x = 0;

		While($row_evento = mysqli_fetch_array($consulta, MYSQLI_ASSOC)){
			$x++;
			$comenta = array();
			$even = (int)$row_evento['Evento'];

			$sql_nombre = mysqli_fetch_array(mysqli_query($conexion, "SELECT evento.Nombre FROM evento WHERE evento.IdEvento = '{$even}'"));

			$resultado = strstr(strtolower($sql_nombre['Nombre'] . " "), strtolower($cad));

			$sql_comentario = mysqli_query($conexion, "SELECT usuario.Nombre, visitas.Fecha, visitas.Comentario FROM visitas, usuario WHERE visitas.Usuario = usuario.IdUsuario and visitas.Evento = '{$even}'");

			While($row_comentario = mysqli_fetch_array($sql_comentario, MYSQLI_ASSOC)){
				$coment = array(
					0 => utf8_encode($row_comentario['Nombre']),
					1 => utf8_encode($row_comentario['Fecha']),
					2 => utf8_encode($row_comentario['Comentario']),
				);

				array_push($comenta, $coment);
			}

			//echo "<script>alert('{$sql_nombre[0]}');</script>";

			if($resultado != false){
				array_push($id, $even);
				array_push($evento, utf8_encode($sql_nombre['Nombre']));
				array_push($visita, (int)$row_evento['cuenta']);
				array_push($estrella, (int)$row_evento['star']);
				array_push($comentario, $comenta);
				array_push($cuenta, $x);
			}

		}

		$arreglo = array(
					0 => $evento,
				  	1 => $visita,
				  	2 => $estrella,
				  	3 => $comentario,
				  	4 => $cuenta,
				  	5 => $id,
				);

		return $arreglo;
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