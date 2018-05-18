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
  <body class="inEstablecimiento">
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
    </div><?php include 'webService/conexion.php';?>
    <?php $promo = $_POST['promocionModificar']; ?>
    <div class="contenedorComun">
      <h1>Modificar promoción </h1><?php $nombrePromo = mysqli_fetch_array(mysqli_query($conexion, "SELECT promocion.Nombre As nombre, promocion.Descripcion As descripcion, promocion.Imagen As imagen FROM promocion WHERE promocion.Establecimiento = '{$_SESSION['establecimiento']}' AND promocion.IdPromocion = '{$promo}'")); ?>
      <?php $ImagenF='/Imagenes/'.$nombrePromo['imagen']; ?>
      <?php $nombre = utf8_encode($nombrePromo['nombre']); ?>
      <div class="contenedorformulario">
        <form method="POST" name="ModificarPromocion" id="ModificarPromocion">
          <input type="text" value="&lt;?php echo $nombre; ?&gt;" name="NombrePromocion" id="NombrePromocion" required>
          <textarea rows="10" name="DescripcionP" maxlength="1200" required><?php echo utf8_encode($nombrePromo['descripcion']); ?></textarea><?php echo "<input type='hidden' name='NumeroPromocion' id='NumeroPromocion' value=$promo>"; ?>
          <h2>Horario</h2>
          <div class="muestraHorarioMP"><?php $duracion = mysqli_query($conexion, "SELECT duracionpromocion.Fecha, duracionpromocion.HoraInicio, duracionpromocion.HoraFin FROM duracionpromocion WHERE duracionpromocion.Promocion = '{$promo}'"); ?>
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Días</th>
                  <th>Hr Inicio</th>
                  <th>Hr Termino</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <?php 
                $x=1;
                $hoy = strftime("%Y-%m-%d", time());
                $time1 = strtotime($hoy);
                while($fecha = mysqli_fetch_array($duracion)){
                $time2 = strtotime($fecha[0]);
                if($time2 <= $time1){
                 echo "<tr id='filaMP$x'>";
                 echo "<td> $x </td>";
                 echo "<td> $fecha[0] </td>";
                 echo "<td> $fecha[1] </td>";
                 echo "<td> $fecha[2] </td>";
                 echo "<td> <div class='elimiFile'><a>Eliminar</a></div> </td>";
                 $x++;
                }
                }
                ?>
              </tbody>
            </table>
          </div>
          <div class="contenedorvarios">
            <div class="horario">
              <div class="ContenedorCalendario">
                <div id="calendario"></div>
              </div>
              <div class="parte12">
                <div class="izq">
                  <h3>Hora inicio:</h3>
                  <h4>( hrs:min )</h4>
                  <input type="time" name="HoraInicioMP" min="00:00" max="23:59" step="60" id="HoraInicioMP" required>
                </div>
              </div>
              <div class="parte12">
                <div class="der">
                  <h3>Hora termino:</h3>
                  <h4>( hrs:min )</h4>
                  <input type="time" name="HoraTerminoMP" id="HoraTerminoMP" required>
                </div>
              </div>
              <div class="agregarPeriodoMP"><a onclick="">Agregar Horario</a></div>
            </div>
          </div>
          <h2>Imagen del evento</h2>
          <div class="prevImageMP">
            <div class="showImgMP"><img src="&lt;?php echo $ImagenF;?&gt;" id="imgExitMP"></div>
          </div>
          <div class="ImagenArchivo">
            <input class="inputfile" type="file" name="fileInputMP" id="fileInputMP" value="Examinar" accept="image/png, .jpeg, .jpg, image/gif" required>
            <label for="fileInputMP"> <strong>Examinar<i class="fa fa-upload" aria-hidden="true"></i></strong><span></span></label>
          </div>
          <div class="buttonRE">
            <input type="submit" value="MODIFICAR PROMOCIÓN" id="ModificarEvento" name="ModificarEvento">
          </div>
        </form>
      </div>
    </div>
    <div class="footer">
      <script src="minjs/general-dist.js?version=18082016" type="text/javascript"></script>
    </div>
    <script type="text/javascript" src="js/modificar.js"></script>
  </body>
</html>