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
  <body class="inicioUsuario">
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
    </div>
    <div class="contenedorComun">
      <div class="contCont">
        <form method="POST" action="lib/modificarEstablecimiento.php" name="modificarEstablecimiento" onsubmit="return ValidarCambioDatos()" enctype="multipart/form-data">
          <div class="colum infor">
            <h2><?php echo $_SESSION['correo'] ?></h2>
            <div class="formuCamb">
              <div class="col11">
                <input type="text" name="nombreU" value="&lt;?php echo $_SESSION['nombre']?&gt;" id="nombre">
              </div>
              <div class="col12">
                <input type="text" name="appU" value="&lt;?php echo $_SESSION['app']?&gt;" id="app">
              </div>
              <div class="col12">
                <input class="right" type="text" name="apmU" value="&lt;?php echo $_SESSION['apm']?&gt;" id="apm">
              </div>
              <div class="col11">
                <input type="password" name="passU" placeholder="Contraseña" id="pass">
              </div>
              <div class="col11">
                <input type="password" name="npassU" placeholder="Nueva contraseña" id="npass">
              </div>
              <div class="col11">
                <input type="password" name="cpassU" placeholder="Confirmar nueva contraseña" id="cpass">
              </div>
              <div class="boton">
                <input type="submit" name="guardarCliente" value="Guardar Cambios">
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="footer">
      <script src="minjs/general-dist.js?version=18082016" type="text/javascript"></script>
    </div>
    <script type="text/javascript" src="js/listaEvento.js"></script>
  </body>
</html>