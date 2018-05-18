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
          <h1>Eventos</h1>
        </div>
        <div class="opcionS"><a href="registroEvento.php">Agregar Evento</a></div>
      </div>
      <div class="listaIni">
        <div class="listaEventos">
          <ul>
            <?php
            $bandera=0;
            $obtenerEventos="SELECT evento.IdEvento, evento.Nombre FROM evento WHERE Establecimiento='{$_SESSION['establecimiento']}' ORDER BY IdEvento DESC";
            $resultado_obtenerEventos=mysqli_query($conexion, $obtenerEventos);
            while($evento = mysqli_fetch_array($resultado_obtenerEventos)){		
            	$id=$evento[0];
            	$obtenerEvento="SELECT Nombre, Descripcion, PrecioMayor, PrecioMenor, Imagen FROM evento WHERE IdEvento='{$id}' AND (SELECT duracionevento.Fecha from duracionevento where duracionevento.Evento='{$id}' ORDER BY duracionevento.Fecha DESC LIMIT 1) >= date(now())";
            	$resultado_obtenerEvento=mysqli_query($conexion, $obtenerEvento);
            	if($Evento = mysqli_fetch_array($resultado_obtenerEvento)){
            		$ImagenF='/Imagenes/'.$Evento[4];
            		$bandera=1;
            		echo "<div class='eventoTitulo'><h4><li id='$evento[0]'> $evento[1]</li></h4></div>";
            ?>
            <div class="bloqueEvento">
              <div class="ladear1">
                <div class="nombre">
                  <h1><?php echo utf8_encode($Evento[0]); ?></h1>
                </div>
                <div class="ilustracion"><img src="<?php echo $ImagenF; ?>"></div>
                <div class="deleUp"> 
                  <div class="btn updateE">
                    <form name="ModificararEvento" method="POST" action="modificaEvento.php"><?php echo "<input type='hidden' name='eventoModificar' value=$id>"; ?><a>
                        <input type="submit" name="Modificar" value="Modificar"><i class="fa fa-pencil" aria-hidden="true"></i></a></form>
                  </div>
                  <div class="btn deleteE">
                    <form name="EliminarEvento" id="EliminarEvento" method="POST"><?php echo "<input type='hidden' name='eventoEliminar' id='eventoEliminar' value=$id>"; ?><a>
                        <input type="submit" name="Eliminar" value="Eliminar"><i class="fa fa-trash" aria-hidden="true"></i></a></form>
                  </div>
                </div>
              </div>
              <div class="ladear2 parte2">
                <div class="informacion">
                  <h1>Descripción</h1>
                  <div class="contenido desc">
                    <h2><?php echo utf8_encode($Evento[1]); ?></h2>
                  </div>
                  <h1>Precio:</h1>
                  <div class="contenido">
                    <h2>de $<?php echo $Evento[3]; ?> a $<?php echo $Evento[2]; ?></h2>
                  </div>
                  <h1>Categorias:</h1>
                  <div class="contenido catCandy">
                    <?php 
                    $obtenerCategorias="SELECT subcategoria.Nombre FROM categoriaevento INNER JOIN subcategoria on categoriaevento.Subcategoria=subcategoria.IdSubcategoria and categoriaevento.Evento='{$id}'";
                    $resultado_obtenerCategorias=mysqli_query($conexion, $obtenerCategorias);
                    while($subc = mysqli_fetch_array($resultado_obtenerCategorias)){
                    	echo "<div class='envoltura'>";
                    	$sub=utf8_encode($subc[0]);
                    	echo "<h3>$sub</h3>";
                    	echo "</div>";
                    }
                    ?>
                  </div>
                  <div class="informacion">
                    <h1>Horario:</h1>
                  </div>
                  <div class="muestraHorarioE">
                    <table id="tabla">
                      <thead>
                        <tr>
                          <th>Día</th>
                          <th>Horario</th>
                        </tr>
                      </thead>
                      <tbody>
                        <?php 
                        $obtenerDuracion="SELECT IdDuracionEvento, Fecha, HoraInicio, HoraFin FROM duracionEvento WHERE Evento='{$id}'";
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
              </div>
            </div><?php }	} if($bandera==0){echo"<h5>No se encontraron eventos vigentes</h5>";}?>
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