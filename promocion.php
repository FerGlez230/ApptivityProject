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
    </div><?php include 'webService/conexion.php';?>
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
            $bandera=0;
            $obtenerPromociones="SELECT Promocion.IdPromocion, Promocion.Nombre FROM Promocion WHERE Establecimiento='{$_SESSION['establecimiento']}' ORDER BY IdPromocion DESC";
            $resultado_obtenerPromociones=mysqli_query($conexion, $obtenerPromociones);
            while($Promocion = mysqli_fetch_array($resultado_obtenerPromociones)){
            	 $id=$Promocion[0];
            	 $obtenerPromocion="SELECT Nombre, Descripcion, Imagen FROM Promocion WHERE IdPromocion='{$id}' AND (SELECT duracionPromocion.Fecha from duracionPromocion where duracionPromocion.promocion='{$id}' ORDER BY duracionpromocion.Fecha DESC LIMIT 1)>=date(now())";
            	 $resultado_obtenerpromocion=mysqli_query($conexion, $obtenerPromocion);
            	 if($Promocion = mysqli_fetch_array($resultado_obtenerpromocion)){ 
            		 $ImagenF='/Imagenes/'.$Promocion[2];
            		 $bandera=1;
            		 $nombre = utf8_encode($Promocion[0]);	
            		 echo "<div class='eventoTitulo'><h4><li id='$Promocion[0]'>$nombre</li></h4></div>";
            ?>
            <div class="bloqueEvento">
              <div class="ladear1">
                <div class="nombre">
                  <h1><?php echo utf8_encode($Promocion[0]); ?></h1>
                </div>
                <div class="ilustracion"><img src="<?php echo $ImagenF; ?>"></div>
                <div class="deleUp"> 
                  <div class="btn updateE">
                    <form name="ModificaPromo" id="ModificaPromo" action="modificaPromocion.php" method="POST"><?php echo "<input type='hidden' name='promocionModificar' value=$id>"; ?><a>
                        <input type="submit" name="Modificar" value="Modificar"><i class="fa fa-pencil" aria-hidden="true"></i></a></form>
                  </div>
                  <div class="btn deleteE">
                    <form name="EliminarPromocion" id="EliminarPromocion" method="POST"><?php echo "<input type='hidden' id='promocionEliminar' name='promocionEliminar' value=$id>"; ?><a>
                        <input type="submit" name="Eliminar" value="Eliminar"><i class="fa fa-trash" aria-hidden="true"></i></a></form>
                  </div>
                </div>
              </div>
              <div class="ladear2 parte2">
                <div class="informacion">
                  <h1>Descripción</h1>
                </div>
                <div class="contenido desc">
                  <h2><?php echo utf8_encode($Promocion[1]); ?></h2>
                </div>
                <div class="informacion">
                  <h1>Horario:</h1>
                </div>
                <div class="muestraHorarioP">
                  <table id="tabla">
                    <thead>
                      <tr>
                        <th>Día</th>
                        <th>Horario</th>
                      </tr>
                    </thead>
                    <tbody>
                      <?php 
                      $obtenerDuracion="SELECT IdDuracionPromocion, Fecha, HoraInicio, HoraFin FROM duracionPromocion WHERE Promocion='{$id}'";
                      $resultado_obtenerDuracion=mysqli_query($conexion, $obtenerDuracion);
                      while($dur = mysqli_fetch_array($resultado_obtenerDuracion)){
                      echo "<tr>";
                      echo "<th>$dur[1]</th>";
                      echo "<th>$dur[2]-$dur[3]</th>";
                      echo "</tr>";
                      }
                      ?>
                    </tbody>
                  </table>
                </div>
              </div>
            </div><?php } } if($bandera==0){echo"<h5>No se encontraron promociones vigentes</h5>";}?>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer">
      <script src="minjs/general-dist.js?version=18082016" type="text/javascript"></script>
    </div>
    <script type="text/javascript" src="js/despliegueEventoProm.js"></script>
    <script type="text/javascript" src="js/envioDatos.js"></script>
  </body>
</html>