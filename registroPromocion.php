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
    <link type="text/css" rel="stylesheet" href="css/slick.css">
    <link type="text/css" rel="stylesheet" href="css/slick-theme.css">
    <link rel="stylesheet" href="http://code.jquery.com/ui/1.10.1/themes/base/jquery-ui.css">
    <link type="text/css" rel="stylesheet" href="css/jquery-ui.multidatespicker.css">
    <link type="text/css" rel="stylesheet" href="css/multiple-select.css">
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
    </div>
    <div class="contenedorComun">
      <h1>Agregar promoción</h1>
      <div class="contenedorformulario">
        <form method="POST" action="" name="Promocion" id="Promocion" onsubmit="return enviarDatosPromocion()" enctype="multipart/form-data">
          <input type="text" placeholder="Titulo de la promoción" name="NombrePromocion" id="NombrePromocion" required>
          <textarea rows="10" placeholder="Descripción" name="DescripcionP" maxlength="1200" required></textarea>
          <h2>Horario</h2>
          <input type="hidden" id="idDiasP" name="idDiasP" value="0">
          <div class="muestraHorarioP">
            <table id="tabla">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Días</th>
                  <th>Hr Inicio</th>
                  <th>Hr Termino</th>
                  <th></th>
                </tr>
              </thead>
              <tbody></tbody>
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
                  <input type="time" name="HoraInicioP" min="00:00" max="23:59" step="60" id="HoraInicioP" required>
                </div>
              </div>
              <div class="parte12">
                <div class="der">
                  <h3>Hora termino:</h3>
                  <h4>( hrs:min )</h4>
                  <input type="time" name="HoraTerminoP" id="HoraTerminoP" required>
                </div>
              </div>
              <div class="agregarPeriodoP"><a onclick="">Agregar Horario</a></div>
            </div>
          </div>
          <h2>Imagen del evento</h2>
          <div class="prevImageP">
            <div class="showImgP"><img src="" id="imgExitP"></div>
          </div>
          <div class="ImagenArchivo">
            <input class="inputfile" type="file" name="fileInputP" id="fileInputP" value="Examinar" accept="image/png, .jpeg, .jpg, image/gif" required>
            <label for="fileInputP"> <strong>Examinar<i class="fa fa-upload" aria-hidden="true"></i></strong><span></span></label>
          </div>
          <div class="buttonRE">
            <input type="submit" value="AGREGAR PROMOCIÓN" id="AgregarEvento" name="AgregarEvento">
          </div>
        </form>
      </div>
    </div>
    <div class="footer">
      <script src="minjs/general-dist.js?version=18082016" type="text/javascript"></script>
    </div>
  </body>
</html>