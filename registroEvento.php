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
    <div class="contenedorComun">
      <h1>Agregar evento</h1>
      <div class="contenedorformulario">
        <!--form(method="POST" action="lib/insertarEvento.php" name="Evento" onsubmit='return ValidarEvento()' enctype="multipart/form-data")-->
        <form method="POST" name="EventoInsertar" id="EventoInsertar" enctype="multipart/form-data">
          <input type="text" placeholder="Nombre del evento" name="NombreEvento" id="NombreEvento" required>
          <textarea rows="10" placeholder="Descripción" name="Descripcion" id="Descripcion" maxlength="1200" required></textarea>
          <h2>Categorías</h2>
          <div class="listaCategoria">
            <select id="categorias" name="categorias[]" multiple="multiple">
              Categorías<?php
              	
              	$obtenerSubcategrias="SELECT subcategoria.IdSubcategoria, subcategoria.Nombre, categoria.IdCategoria, categoria.Nombre FROM subcategoria,categoria WHERE subcategoria.Categoria=categoria.IdCategoria ORDER BY categoria.Nombre, subcategoria.Nombre, subcategoria.Categoria";
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
          </div>
          <h2>Rango de precio (pesos mexicanos)</h2>
          <div class="contenedorvarios">
            <div class="parte12">
              <div class="izq">
                <h3>Desde:</h3>
                <input class="lne" type="text" name="PrecioInferior" id="PrecioInferior" required>
              </div>
            </div>
            <div class="parte12">
              <div class="der">
                <h3>Hasta:</h3>
                <input class="lne" type="text" name="PrecioSuperior" id="PrecioSuperior" required>
              </div>
            </div>
          </div>
          <h2>Horario</h2>
          <input type="hidden" id="idDiasEv" name="idDiasEv" value="0">
          <div class="muestraHorario">
            <!--form(id="tablaForm", name="tablaForm" onsubmit="enviarDatos();")-->
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
                  <input type="time" name="HoraInicio" min="00:00" max="23:59" step="60" id="HoraInicio" required>
                </div>
              </div>
              <div class="parte12">
                <div class="der">
                  <h3>Hora termino:</h3>
                  <h4>( hrs:min )</h4>
                  <input type="time" name="HoraTermino" min="00:00" max="23:59" id="HoraTermino" required>
                </div>
              </div>
              <div class="agregarPeriodo"><a onclick="">Agregar Horario</a></div>
            </div>
          </div>
          <h2>Imagen del evento</h2>
          <div class="prevImage">
            <div class="showImg"><img src="" id="imgExit"></div>
          </div>
          <div class="ImagenArchivo">
            <input class="inputfile" type="file" name="fileInput" id="fileInput" value="Examinar" accept="image/png, .jpeg, .jpg, image/gif" required>
            <label for="fileInput"> <strong>Examinar<i class="fa fa-upload" aria-hidden="true"></i></strong><span></span></label>
          </div>
          <div class="buttonRE">
            <input type="submit" value="Agregar evento" id="AgregarEvento" name="AgregarEvento">
          </div>
        </form>
      </div>
    </div>
    <div class="footer">
      <script src="minjs/general-dist.js?version=18082016" type="text/javascript"></script>
    </div>
    <script src="js/multiple-select.js"></script>
    <script type="text/javascript" src="js/envioDatos.js"></script>
  </body>
</html>