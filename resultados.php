<!DOCTYPE html>
<html lang="es">
  <head>
    <title>Apptivity</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta charset="utf-8">
    <link rel="shortcut icon" href="img/logo.ico" type="image/x-icon">
    <link rel="icon" href="img/logo.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="css/styles.css?version=18082016">
    <link type="text/css" rel="stylesheet" href="css/FA/font-awesome.css">
    <link type="text/css" rel="stylesheet" href="css/jquery-ui.css">
    <link type="text/css" rel="stylesheet" href="css/jquery-ui.multidatespicker.css">
    <link type="text/css" rel="stylesheet" href="css/multiple-select.css">
    <link type="text/css" rel="stylesheet" href="css/jquery-confirm.min.css">
  </head>
  <body class="resultado">
    <?php session_start();?>
    <?php if(!isset($_SESSION['nombre'])){header("location:/apptivity/index.html");}?>
    <div class="headerUsuario">
      <div class="contenedorComun">
        <div class="medio">
          <div class="logoE medio">
            <div class="imagen"><a href="cuentaEstablecimiento.php"><img src="img/logo_contorno.png"></a></div>
            <div class="texto"><a href="cuentaEstablecimiento.php">Apptivity</a></div>
          </div>
          <div class="menuE">
            <ul>
              <li><a href="evento.php">Eventos</a></li>
              <li><a href="promocion.php">Promociones</a></li>
              <li><a href="resultados.php">Resultados</a></li>
            </ul>
          </div>
          <div class="usuario">
            <nav class="menD">
              <ul>
                <li><a href="#"><?php echo $_SESSION['username'] ?></a><i class="fa fa-angle-down" aria-hidden="true"></i>
                  <ul>
                    <li><a href="cuentaEstablecimiento.php">Mi cuenta</a></li>
                    <li><a href="lib/cerrarSesion.php">Cerrar Sesión</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div><?php include 'webService/conexion.php'; ?>
    <div class="contenedorComun">
      <div class="titulo">
        <h1>Resultados</h1>
      </div>
      <div class="contYesterday">
        <h1>Resultados de ayer</h1>
        <div class="opcion">
          <div class="indicador"><a class="showYes" onclik="">Ocultar</a>
            <h2>gráfica</h2>
          </div>
        </div>
        <div class="yesterday">
          <div class="bloqueInYes">
            <div class="graficas">
              <canvas id="graficoYesterday"></canvas>
            </div>
            <div class="estrellas">
              <div class="titYes">
                <h3>Puntuación</h3>
              </div>
            </div>
          </div>
          <div class="simbologiaYes"></div>
        </div>
      </div>
      <div class="contWeek">
        <h1>Recopilación semanal</h1>
        <div class="opcion">
          <div class="indicador"><a class="showW" onclik="">Ocultar</a>
            <h2>gráfica</h2>
          </div>
        </div>
        <div class="week">
          <div class="bloqueInW">
            <div class="graficas">
              <canvas id="graficoWeek"></canvas>
            </div>
            <div class="estrellas">
              <div class="titW">
                <h3>Puntuación</h3>
              </div>
            </div>
          </div>
          <div class="simbologiaW"></div>
        </div>
      </div>
      <div class="contMonth">
        <h1>Información mensual</h1>
        <div class="opcion">
          <div class="indicador">
            <?php 
            	$month = date('m'); 
            	$year = date('Y');
            	$day = date("d", mktime(0,0,0, $month, 0, $year)); 
            	$anio = date('Y', mktime(0,0,0, $month-1, $day, $year));
            	$arrM = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
            	$mes = (int)date('m', mktime(0,0,0, $month-1, $day, $year));
            ?><a class="showM" onclik="">Ocultar</a>
            <h2>gráfica de <?php echo $arrM[$mes-1] . " del " . $anio; ?></h2>
          </div>
        </div>
        <div class="month">
          <div class="bloqueInM">
            <div class="graficas">
              <canvas id="graficoMonth"></canvas>
            </div>
            <div class="estrellas">
              <div class="titM">
                <h3>Puntuación</h3>
              </div>
            </div>
          </div>
          <div class="simbologiaM"></div>
        </div>
      </div>
      <div class="contYear">
        <h1>Información anual</h1>
        <div class="opcion">
          <div class="indicador"><a class="showY" onclik="">Ocultar</a>
            <h2>gráfica del</h2>
          </div>
          <div class="consulta"><?php $sql_anio = mysqli_query($conexion, "SELECT DISTINCT YEAR(visitas.Fecha) AS Date FROM visitas INNER JOIN (SELECT evento.IdEvento FROM evento WHERE evento.Establecimiento = '{$_SESSION['establecimiento']}') as listE on listE.IdEvento = visitas.Evento"); ?>
            <select class="selectYear">
              <?php While($row_anio = mysqli_fetch_array($sql_anio, MYSQLI_ASSOC)) { ?>
              <?php echo '<option value ="' . $row_anio['Date'] . '">' . $row_anio['Date'] .'</option>';  ?>
              <?php } ?>
            </select>
          </div>
        </div>
        <div class="anio">
          <div class="bloqueInY">
            <div class="graficas">
              <canvas id="graficoYear"></canvas>
            </div>
            <div class="estrellas">
              <div class="titY">
                <h3>Puntuación</h3>
              </div>
            </div>
          </div>
          <div class="simbologiaY"></div>
        </div>
      </div>
      <div class="contMultiYear">
        <h1>Recopilación de años</h1>
        <div class="opcion">
          <div class="indicador"><a class="showMY" onclik="">Ocultar</a>
            <h2>gráfica</h2>
          </div>
        </div>
        <div class="multianio">
          <div class="bloqueInMY">
            <div class="graficas">
              <canvas id="graficoMultiYear"></canvas>
            </div>
            <div class="estrellas">
              <div class="titMY">
                <h3>Puntuación</h3>
              </div>
            </div>
          </div>
          <div class="simbologiaMY"></div>
        </div>
      </div>
    </div>
    <div class="footer">
      <script src="minjs/general-dist.js?version=18082016" type="text/javascript"></script>
    </div>
    <script type="text/javascript" src="js/resultados.js"></script>
    <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
  </body>
</html>