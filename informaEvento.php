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
  <body class="informaEvento">
    <?php session_start();?>
    <?php if(!isset($_SESSION['nombre'])){header("location:/apptivity/index.html");}?>
    <div class="headerUsuario">
      <div class="contenedorComun">
        <div class="medio">
          <div class="logoE medio">
            <div class="imagen"><a href="cuentaCliente.php"><img src="img/logo_contorno.png"></a></div>
            <div class="texto"><a href="cuentaCliente.php">Apptivity</a></div>
          </div>
          <div class="menuE">
            <ul>
              <li><a href="topEvento.php">Mejores eventos</a></li>
            </ul>
          </div>
          <div class="usuario">
            <ul>
              <li>
                <div class="userImage"><img src="img/prueba.jpg"><a class="ghost simple-ajax-popup-align-top" href="cambiarImagen.html">Cambiar</a></div>
              </li>
              <li>
                <nav class="menD">
                  <ul>
                    <li><a href="#"><?php echo $_SESSION['username'] ?></a><i class="fa fa-angle-down" aria-hidden="true"></i>
                      <ul>
                        <li><a href="cuentaCliente.php">Mi cuenta</a></li>
                        <li><a href="lib/cerrarSesion.php">Cerrar Sesión</a></li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div><?php include 'lib/conexion.php';?>
    <?php $evento = $_POST['eventoId']; ?>
    <div class="contenedorComun">
      <div class="bloqueInfor">
        <div class="colMitad">
          <?php
          $establecimiento = mysqli_fetch_array(mysqli_query($conexion, "SELECT establecimiento.IdEstablecimiento, establecimiento.Nombre, establecimiento.Descripcion, establecimiento.Telefono FROM establecimiento INNER JOIN (SELECT evento.Establecimiento FROM evento WHERE evento.IdEvento = '{$evento}') AS loca on loca.Establecimiento = establecimiento.IdEstablecimiento"));
          ?>
          <h1>Establecimiento</h1>
          <ul>
            <li class="encabeza"><img src="img/prueba.jpg"></li>
            <li>
              <h1><?php echo utf8_encode($establecimiento['Nombre']); ?></h1>
            </li>
          </ul>
          <div class="descInfo">
            <p><?php echo utf8_encode($establecimiento['Descripcion']); ?></p>
          </div>
          <h2>Horario:</h2><?php
          $sql_dia = mysqli_query($conexion, "SELECT horario.Dia, horario.HoraInicio, horario.HoraFin FROM horario WHERE horario.Establecimiento = '{$establecimiento['IdEstablecimiento']}'");
          ?>
          <?php 
          $aDia = array();
          $aHoraI = array();
          $aHoraF = array();
          ?>
          <?php While($row_dia = mysqli_fetch_array($sql_dia, MYSQLI_ASSOC)){
           $dia = explode(",", $row_dia['Dia']); 
           for($x=0; $x<count($dia); $x++){ 
            //echo $dia[$x];
            array_push($aDia, $dia[$x]);
            array_push($aHoraI, $row_dia['HoraInicio']);
            array_push($aHoraF, $row_dia['HoraFin']); 
           }
          } ?>
          <?php
          $dias = array();
          $first = array();
          $end = array();
          $sql_hora = mysqli_query($conexion, "SELECT DISTINCT horario.HoraInicio, horario.HoraFin FROM horario WHERE horario.Establecimiento = '{$establecimiento['IdEstablecimiento']}'");
          ?>
          <?php While($row_hora = mysqli_fetch_array($sql_hora, MYSQLI_ASSOC)){
          $day = array();
          for($x=0; $x<count($aDia); $x++){
           if($aHoraI[$x] == $row_hora['HoraInicio'] && $aHoraF[$x] == $row_hora['HoraFin']){
              array_push($day, $aDia[$x]);
              //echo "<script>alert('{$aDia[$x]}');</script>";
           }
          }
          array_push($dias, $day);
          array_push($first, $row_hora['HoraInicio']);
          array_push($end, $row_hora['HoraFin']);
          }?>
          <div class="contendo blockTime"><?php for($x=0; $x<count($dias); $x++){ ?>
            <div class="diasE"><?php  for($y=0; $y<count($dias[$x]); $y++){ ?>
              <h3 class="diaROW"><?php echo utf8_encode($dias[$x][$y]); ?></h3><?php  } ?>
            </div>
            <div class="horasE">
              <h3><?php //echo utf8_encode($first[$x]) . " - " . utf8_encode($end[$x]); ?></h3>
            </div><?php } ?>
            <?php ?>
          </div>
          <h2>Ubicación:</h2>
          <div class="contendo">
            <div id="map"></div>
            <div id="mapa"></div>
            <h3>Juan Aldama, 10, El Briseño</h3>
          </div>
        </div>
        <div class="colMitad">
          <?php
          $even = mysqli_fetch_array(mysqli_query($conexion, "SELECT evento.Nombre, evento.Descripcion FROM evento WHERE evento.IdEvento = '{$evento}'"));
          ?>
          <h1>Evento</h1>
          <ul>
            <li class="encabeza"><img src="img/prueba.jpg"></li>
            <li>
              <h1><?php echo utf8_encode($even['Nombre']); ?></h1>
            </li>
          </ul>
          <div class="descInfo">
            <p><?php echo utf8_encode($even['Descripcion']); ?></p>
          </div>
          <h2>Horario:</h2>
          <div class="contendo blockTime">
            <select name="dias">
              <option value="Días" selected=""></option>
            </select>
            <select name="horas">
              <option value="Horarios" selected=""></option>
            </select>
          </div>
          <h2>Categorías:</h2>
          <div class="contendo listCatt">
            <ul>
              <li>
                <h3>Pulpo</h3>
              </li>
              <li>
                <h3>Cangrejo</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <script src="minjs/general-dist.js?version=18082016" type="text/javascript"></script>
    </div>
    <script type="text/javascript" src="js/informaEvento.js"></script>
    <script type="text/javascript" src="js/mapa.js"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?v=3.26&amp;key=AIzaSyD8YRTasiEr2BNxFPo-9TLVVsdxBW-TcQ0&amp;callback=initMap&amp;libraries=places"></script>
    <script type="text/javascript" src="js/listaEvento.js"></script>
  </body>
</html>