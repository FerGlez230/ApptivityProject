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
  <body class="listaEvento">
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
      <div class="informacionTop">
        <div class="miniMenu">
          <ul>
            <li class="seleccionEstado">
              <p>Mostrar eventos</p>
              <select class="optionState">
                <option value="1">actuales</option>
                <option value="2">pasados</option>
              </select>
            </li>
            <li class="busqueda">
              <form>
                <input type="text" placeholder="buscar evento" name="buscaEvento" id="buscaEvento" required>
                <button type="submit"><i class="fa fa-search"></i></button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer">
      <script src="minjs/general-dist.js?version=18082016" type="text/javascript"></script>
    </div>
    <script type="text/javascript" src="js/listaEvento.js"></script>
  </body>
</html>