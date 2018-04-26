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
              <li class="busqueda">
                <form>
                  <input type="text" placeholder="Evento" name="buscaEvento" id="buscaEvento" required>
                  <button type="submit"><i class="fa fa-search"></i></button>
                </form>
              </li>
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
        <div class="mitadC">
          <h1>Eventos más concurridos</h1>
          <div class="concurrencia">
            <div class="lista">
              <ul>
                <li>
                  <p>1.</p>
                </li>
                <li class="eventLink"><a href="informaEvento.html">Evento 1</a></li>
                <li class="cruz"><i class="fa fa-plus" aria-hidden="true"></i></li>
              </ul>
            </div>
            <div class="contenidoLista">
              <div class="contenerilo">
                <div class="beautifulStar"></div>
                <div class="comentario">
                  <div class="datoComen">
                    <div class="nombre">
                      <h1>Fulanito</h1>
                    </div>
                    <div class="fecha">
                      <h1>25/10/16</h1>
                    </div>
                  </div>
                  <div class="contenidoComen">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
                <div class="comentario">
                  <div class="datoComen">
                    <div class="nombre">
                      <h1>Fulanito</h1>
                    </div>
                    <div class="fecha">
                      <h1>25/10/16</h1>
                    </div>
                  </div>
                  <div class="contenidoComen">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="lista">
              <ul>
                <li>
                  <p>2.</p>
                </li>
                <li class="eventLink"><a href="#evento2">Evento 2</a></li>
                <li class="cruz"><i class="fa fa-plus" aria-hidden="true"></i></li>
              </ul>
            </div>
            <div class="contenidoLista">
              <div class="contenerilo">
                <div class="beautifulStar"></div>
                <div class="comentario">
                  <div class="datoComen">
                    <div class="nombre">
                      <h1>Fulanito</h1>
                    </div>
                    <div class="fecha">
                      <h1>25/10/16</h1>
                    </div>
                  </div>
                  <div class="contenidoComen">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mitadC">
          <h1>Eventos con más estrellas</h1>
          <div class="estrellado">
            <div class="lista">
              <ul>
                <li>
                  <p>1.</p>
                </li>
                <li class="eventLink"><a href="informaEvento.html">Evento 1</a></li>
                <li class="cruz"><i class="fa fa-plus" aria-hidden="true"></i></li>
              </ul>
            </div>
            <div class="contenidoLista">
              <div class="contenerilo">
                <div class="beautifulStar"></div>
                <div class="comentario">
                  <div class="datoComen">
                    <div class="nombre">
                      <h1>Fulanito</h1>
                    </div>
                    <div class="fecha">
                      <h1>25/10/16</h1>
                    </div>
                  </div>
                  <div class="contenidoComen">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <script src="minjs/general-dist.js?version=18082016" type="text/javascript"></script>
    </div>
    <script type="text/javascript" src="js/listaEvento.js"></script>
  </body>
</html>