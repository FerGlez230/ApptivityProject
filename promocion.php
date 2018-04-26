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
  <body class="outEstablecimiento">
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
    </div><?php include 'lib/conexion.php';?>
    <div class="contenedorComun">
      <div class="submenuEvent">
        <div class="opcionF">
          <h1>Promociones</h1>
        </div>
        <div class="opcionS"><a href="registroPromocion.php">Agregar Promoción</a></div>
      </div>
      <div class="listaIni">
        <div class="listaEventos">
          <ul>
            <?php
            	
            
            	$obtenerPromociones="SELECT promocion.IdPromocion, promocion.Nombre FROM promocion WHERE Establecimiento='{$_SESSION['establecimiento']}' ORDER BY IdPromocion DESC";
            	$resultado_obtenerPromociones=mysqli_query($conexion, $obtenerPromociones);
            	while($promocion = mysqli_fetch_array($resultado_obtenerPromociones))
            	{		
            		echo "<div class='eventoTitulo'><h4><li id='$promocion[0]'> $promocion[1]</li></h4></div>";
            		$id=$promocion[0];
                       	$obtenerPromocion="SELECT Nombre, Descripcion, Imagen FROM Promocion WHERE IdPromocion=$id";
                       	$resultado_obtenerPromocion=mysqli_query($conexion, $obtenerPromocion);
                       	$Promocion = mysqli_fetch_array($resultado_obtenerPromocion);
                       	$ImagenF='/Imagenes/'.$Promocion[2];
            ?>
            	
            <div class="bloqueEvento">
              <div class="ladear1">
                <div class="nombre">
                  <h1><?php echo utf8_encode($Promocion[0]); ?></h1>
                </div>
                <div class="ilustracion"><img src="&lt;?php echo $ImagenF; ?&gt;"></div>
                <div class="deleUp"> 
                  <div class="btn updateE">
                    <form name="ModificararPromocion" method="POST" action="modificaPromocion.php"><?php echo "<input type='hidden' name='promocionModificar' value=$id>"; ?><a>
                        <input type="submit" name="Modificar" value="Modificar"><i class="fa fa-pencil" aria-hidden="true"></i></a></form>
                  </div>
                  <div class="btn deleteE">
                    <form name="EliminarPromocion" method="POST" action="lib/borrarPromocion.php"><?php echo "<input type='hidden' name='promocionEliminar' value=$id>"; ?><a>
                        <input type="submit" name="Eliminar" value="Eliminar"><i class="fa fa-trash" aria-hidden="true"></i></a></form>
                  </div>
                </div>
              </div>
              <div class="ladear2 parte2">
                <div class="informacion">
                  <h1>Descripción</h1>
                  <div class="contenido desc">
                    <h2><?php echo utf8_encode($Promocion[1]); ?></h2>
                  </div>
                  <div class="informacion">
                    <h1>Horario:</h1>
                  </div>
                  <div class="contenido">
                    <select name="dias" id="diasPromocion">
                      <option value="-1">Dias</option><?php 
                      $obtenerDuracion="SELECT IdDuracionPromocion, Fecha FROM duracionpromocion WHERE promocion='{$id}'";
                      $resultado_obtenerDuracion=mysqli_query($conexion, $obtenerDuracion);
                      while($dur = mysqli_fetch_array($resultado_obtenerDuracion))
                      {
                      	echo "<option value='$dur[0]'>$dur[1]</h3>";
                      	echo "</div>";
                      }
                      ?>
                    </select>
                    <select name="hora" id="horaPromocion">
                      <option value="-1" selected="">Horario</option><?php
                      $obtenerDuracion="SELECT IdDuracionPromocion, HoraInicio, HoraFin FROM duracionpromocion WHERE promocion='{$id}'";
                      $resultado_obtenerDuracion=mysqli_query($conexion, $obtenerDuracion);
                      while($dur = mysqli_fetch_array($resultado_obtenerDuracion))
                      {
                      	echo "<option value='$dur[0]'>$dur[1]-$dur[2]</option>";
                      }
                      ?>		
                    </select>
                  </div>
                </div>
              </div>
            </div><?php	}?>	
          </ul>
        </div>
      </div>
    </div>
    <div class="footer">
      <script src="minjs/general-dist.js?version=18082016" type="text/javascript"></script>
    </div>
    <script type="text/javascript" src="js/despliegueEventoProm.js"></script>
  </body>
</html>