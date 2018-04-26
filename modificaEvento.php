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
    </div><?php include 'lib/conexion.php';?>
    <div class="contenedorComun">
      <h1>Modificar evento</h1><?php $nombreEven = mysqli_fetch_array(mysqli_query($conexion, "SELECT evento.Nombre, evento.Descripcion, evento.PrecioMayor, evento.PrecioMenor FROM evento WHERE evento.IdEvento = 1")); ?>
      <div class="contenedorformulario">
        <!--form(method="POST" action="lib/insertarEvento.php" name="Evento" onsubmit='return ValidarEvento()' enctype="multipart/form-data")-->
        <form method="POST" name="Evento" id="Evento" enctype="multipart/form-data" onsubmit="return enviarDatosEvento();">
          <input type="text" value="<?php echo utf8_encode($nombreEven[0]); ?>" name="NombreEvento" id="NombreEvento" required>
          <textarea rows="10" placeholder="Descripción" name="Descripcion" maxlength="1200" required><?php echo utf8_encode($nombreEven[1]); ?></textarea>
          <h2>Categorías</h2>
          <div class="listaCategoria"></div>
          <select id="categorias" name="categorias[]" multiple="multiple">
            Categorías<?php
            	
            	$obtenerSubcategrias="SELECT subcategoria.IdSubcategoria, subcategoria.Nombre, categoria.IdCategoria, categoria.Nombre FROM subcategoria,categoria WHERE subcategoria.Categoria=categoria.IdCategoria ORDER BY subcategoria.Categoria, subcategoria.IdSubcategoria";
            	$resultado_obtenerSubcategorias=mysqli_query($conexion, $obtenerSubcategrias);
            	$categoriaActual=0;
            	while($subc = mysqli_fetch_array($resultado_obtenerSubcategorias))
            	{
            		if($categoriaActual!=$subc[2])
            		{
            	if($categoriaActual!=0)
            	                {
            	                  echo "</optgroup>";
            	                }
            			$categoria=utf8_encode($subc[3]);
            			echo "<optgroup label='$categoria'>";
            			$categoriaActual=$subc[2];
            		}
            			$subcategoria=utf8_encode($subc[1]);
            			echo "<option value='$subc[0]'>$subcategoria</option>";
            		
            	}	
            ?>
          </select>
          <h2>Rango de precio (pesos mexicanos)</h2>
          <div class="contenedorvarios">
            <div class="parte12">
              <div class="izq">
                <h3>Desde:</h3>
                <input class="lne" type="text" name="PrecioInferior" value="<?php echo $nombreEven[3] ?>" id="PrecioInferior" required>
              </div>
            </div>
            <div class="parte12">
              <div class="der">
                <h3>Hasta:</h3>
                <input class="lne" type="text" name="PrecioSuperior" value="<?php echo $nombreEven[2] ?>" id="PrecioSuperior" required>
              </div>
            </div>
          </div>
          <h2>Horario</h2>
          <div class="muestraHorarioME"><?php $duraE = mysqli_query($conexion, "SELECT duracionevento.Fecha, duracionevento.HoraInicio, duracionevento.HoraFin FROM duracionevento WHERE duracionevento.Evento = 1"); ?>
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
              <tbody>
                <?php 
                $x=1;
                $hoy = strftime("%Y-%m-%d", time());
                $time1 = strtotime($hoy);
                while($fecha = mysqli_fetch_array($duraE)){
                $time2 = strtotime($fecha[0]);
                if($time2 <= $time1){
                 echo "<tr id='filaME$x'>";
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
                  <input type="time" name="HoraInicioME" min="00:00" max="23:59" step="60" id="HoraInicioME" required>
                </div>
              </div>
              <div class="parte12">
                <div class="der">
                  <h3>Hora termino:</h3>
                  <h4>( hrs:min )</h4>
                  <input type="time" name="HoraTerminoME" id="HoraTerminoME" required>
                </div>
              </div>
              <div class="agregarPeriodoME"><a onclick="">Agregar Horario</a></div>
            </div>
          </div>
          <h2>Imagen del evento</h2>
          <div class="prevImageME">
            <div class="showImgME"><img src="" id="imgExitME"></div>
          </div>
          <div class="ImagenArchivo">
            <input class="inputfile" type="file" name="fileInputME" id="fileInputME" value="Examinar" accept="image/png, .jpeg, .jpg, image/gif" required>
            <label for="fileInputME"> <strong>Examinar<i class="fa fa-upload" aria-hidden="true"></i></strong><span></span></label>
          </div>
          <div class="buttonRE">
            <input type="submit" value="MODIFICAR EVENTO" id="ModificarEvento" name="ModificarEvento">
          </div>
        </form>
      </div>
    </div>
    <div class="footer">
      <script src="minjs/general-dist.js?version=18082016" type="text/javascript"></script>
    </div>
    <script src="js/multiple-select.js"></script>
    <script type="text/javascript" src="js/modificar.js"></script>
  </body>
</html>