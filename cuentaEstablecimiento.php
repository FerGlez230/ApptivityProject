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
  <body class="inicioUsuario">
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
      <div class="contCont">
        <form method="POST" action="lib/modificarEstablecimiento.php" name="modificarEstablecimiento" onsubmit="return ValidarCambioDatos()" enctype="multipart/form-data">
          <div class="colum infor">
            <h1><?php echo utf8_encode($_SESSION['establecimientoN']) ?></h1>
            <h2><?php echo $_SESSION['correo'] ?></h2>
            <div class="formuCamb">
              <div class="col11">
                <input type="text" name="nombre" value="&lt;?php echo $_SESSION['nombre']?&gt;" id="nombre">
              </div>
              <div class="col12">
                <input type="text" name="app" value="&lt;?php echo $_SESSION['app']?&gt;" id="app">
              </div>
              <div class="col12">
                <input class="right" type="text" name="apm" value="&lt;?php echo $_SESSION['apm']?&gt;" id="apm">
              </div>
              <div class="col11">
                <input type="password" name="pass" placeholder="Contraseña" id="pass">
              </div>
              <div class="col11">
                <input type="password" name="npass" placeholder="Nueva contraseña" id="npass">
              </div>
              <div class="col11">
                <input type="password" name="cpass" placeholder="Confirmar nueva contraseña" id="cpass">
              </div>
              <div class="boton">
                <input type="submit" name="guardar" value="Guardar Cambios">
              </div>
            </div>
          </div>
          <div class="colum color">
            <div class="colimg"><img src="/Imagenes/&lt;?php echo $_SESSION['img']?&gt;" id="imgSalida"></div>
            <div class="formImage">
              <div class="ImagenFile">
                <input class="inputfile" type="file" name="file-input" id="file-input" value="Cambiarimagen" accept="image/png, image/jpeg, image/jpg, image/gif">
                <label for="file-input"> <strong>Cambiar imagen<i class="fa fa-upload" aria-hidden="true"></i></strong><span></span></label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="footer">
      <script src="minjs/general-dist.js?version=18082016" type="text/javascript"></script>
    </div>
  </body>
</html>