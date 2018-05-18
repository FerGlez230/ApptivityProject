//@prepros-prepend Chart.min.js
//@prepros-prepend jquery-3.1.1.js
//@prepros-prepend jquery.js

$(document).ready(function(){
    
    var fecha = new Date();
    var ayer = new Date(fecha.getTime() - 24*60*60*1000);
    var dia = fecha.getDay();

    //var prueba = new Date(fecha.getTime() + (24*60*60*1000) * 8);
    //alert(prueba);

    resultadoMultiAnio();
    resultadoYesterday(ayer.getDate());
    resultadoWeek(dia);
    resultadoMonth();
    
    //Colores
    
    var red = new Array( 128,   0,  32, 255, 255, 128, 149, 166,  37,  42, 207, 250);
    var green = new Array( 0, 128, 128, 195,  87,   0, 165,  21,  98, 110,  35, 128);
    var blue = new Array( 32, 128,   0,   0,  51,   0, 166,  83, 152,  16,  35, 114);
    var inSintax = "rgba(";
    var iniB = "3px solid ";

    /////////////////////////////////////////////////////////////////////////////
    ///Resultados por año

    var date = new Date();
    var yearNow = date.getFullYear();

    $(".selectYear").val(yearNow);

    var selY;
    $( ".selectYear" ).change(function () {
	    $( ".selectYear option:selected" ).each(function() {
	    	selY = $(this).text();
	    	if($(".showY").text() == "Ocultar"){
	    		resultadoAnio(selY);
	    	}
	    });
  	}).change();

    $('.showY').on("click", function(event){
    	if($(".showY").text() == "Mostrar"){
    		$(".showY").text("Ocultar");
    		$('.anio').slideDown(500).delay(300);
            resultadoAnio(selY);
    	}else{
    		$(".showY").text("Mostrar");
    		$('.anio').slideUp(500).delay(300);
    		/*$('.selectYear option:contains("2019")').prop('selected',true);*/ //Se necesitara cuando puedas obtener la fecha
    	}
    });

    function resultadoAnio(año){
        var datos = {
                "año" : año,
                "tipo" : 3
        };
    	$.ajax({
    		type: 'POST',
    		url: 'lib/resultados.php',
    		data: datos,
    		success:function(data){
    			var valores = eval(data);

    			var e = valores[0];
    			var f = valores[1];
    			var m = valores[2];
    			var a = valores[3];
    			var ma = valores[4];
    			var j = valores[5];
    			var jl = valores[6];
    			var ag = valores[7];
    			var s = valores[8];
    			var o = valores[9];
    			var n = valores[10];
    			var d = valores[11];
    			var estrellas = valores[12];

                var total = e + f + m + a + ma + j + jl + ag + s + o + n + d;

                if(total >= 1){
                    $('.contYear').css({ 'display': "block" });
                    var color = inSintax.concat(red[0], ",", green[0], ",", blue[0], ", 1)");
                    var rellenoColor = inSintax.concat(red[0], ",", green[0], ",", blue[0], ", 0.2)");

                    var Datos = {
                        labels : ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 
                        'Octubre', 'Noviembre', 'Diciembre'],
                        datasets : [
                            {
                                borderWidth: 2,
                                fillColor : rellenoColor, //COLOR DE LAS BARRAS
                                strokeColor : color, //COLOR DEL BORDE DE LAS BARRAS
                                highlightFill : rellenoColor, //COLOR "HOVER" DE LAS BARRAS
                                highlightStroke : color, //COLOR "HOVER" DEL BORDE DE LAS BARRAS
                                data : [e, f, m, a, ma, j, jl, ag, s, o, n, d],
                                //label : "Coño"
                            }
                        ]
                    }

                    var optionsNoAnimation = {
                        animation : true
                    }

                    //Chart.defaults.global.tooltips.enabled = false;

                    var contexto = document.getElementById('graficoYear').getContext('2d');
                    window.Barra = new Chart(contexto).Line(Datos, {
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                stacked: true,
                                /*gridLines: {
                                    display: true,
                                    color: "rgba(255,99,132,0.2)"
                                }*/
                            }],
                            /*xAxes: [{
                                gridLines: {
                                    display: false
                                }
                            }]*/
                        },
                        showTooltips : false,
                        intersect : false,
                        responsive : true,
                        animation : true
                    });

                    var numero = parseInt(estrellas)/total;
                    numero = numero.toFixed();
                    //alert(numero);
                    $( ".starY" ).remove();
                    var col = '<div class="starY">';

                    for(var n = 1; n<=7; n++){
                        if(n<=numero){
                            col += '<i class="fa fa-star"></i>';
                        }else{
                            col += '<i class="fa fa-star-o"></i>';
                        }
                    }
                    col += '</div>';
                   // alert(col);
                    $('.titY').append(col);

                    $(".simboloY").remove();
                    var sim = '<div class="simboloY">';

                    sim += '<div id="cuadroY"></div>';
                    sim += '<h1 id="titR">' + año +  '</h1></div>';

                    $('.simbologiaY').append(sim);
                    var borde = iniB.concat(color);

                    $('#cuadroY').css({ 'height': $("#titR").height() + "px" });
                    $('#cuadroY').css({ 'width': $("#titR").height() + "px" });
                    $('#cuadroY').css({ 'background-color': rellenoColor });
                    $('#cuadroY').css({ 'border': borde });
                }else{

                }
    		}
    	});
    	return false;
    }

    //$('.bloqueInY').slideUp();

    ////////////////////////////////////////////////////////////////
    ///Gráfica por conjunto de años
	
	$('.showMY').on("click", function(event){
    	if($(".showMY").text() == "Mostrar"){
    		$(".showMY").text("Ocultar");
    		$('.multianio').slideDown(500).delay(300);
    		
    	}else{
    		$(".showMY").text("Mostrar");
    		$('.multianio').slideUp(500).delay(300);
    	}
    });

    function resultadoMultiAnio(){
        var datos = {
                "tipo" : 4
        };
    	$.ajax({
    		type: 'POST',
    		url: 'lib/resultados.php',
            data: datos,
    		success:function(data){
    			var valores = eval(data);
    			
                var anio = valores[0];
    			var estrellas = valores[2];
    			var total = 0;

                if((anio.length-1) > 1){
                    $('.contMultiYear').css({ 'display': "block" });

                    var etiquetas = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 
                    'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

                    //alert(anio.length-1);

                    var colorBajo = new Array();
                    var colorAlto = new Array();

                    lineChartData = {}; //declare an object
                    lineChartData.labels = []; //add 'labels' element to object (X axis)
                    lineChartData.datasets = []; //add 'datasets' array element to object

                    for (line = 0; line < anio.length-1; line++) {
                        y = [];
                        
                        colorAlto[line] = inSintax.concat(red[line], ",", green[line], ",", blue[line], ", 1)");
                        colorBajo[line] = inSintax.concat(red[line], ",", green[line], ",", blue[line], ", 0.2)");

                        lineChartData.datasets.push({}); //create a new line dataset
                        dataset = lineChartData.datasets[line];
                        dataset.borderWidth = 2,
                        dataset.fillColor = colorBajo[line], //Relleno de las lineas
                        dataset.strokeColor = colorAlto[line], //color de la linea
                        dataset.highlightFill = colorBajo[line], //"HOVER" del relleno
                        dataset.highlightStroke = colorAlto[line], //"HOVER" de las lineas
                        dataset.data = []; //contains the 'Y; axis data

                        var arreglo = valores[1][line].split(",");

                        for(x = 0; x < arreglo.length; x++) { 
                            y.push(arreglo[x]); //push some data aka generate 4 distinct separate lines
                            if (line === 0){
                                lineChartData.labels.push(etiquetas[x]); //adds x axis labels
                            }
                            total += parseInt(arreglo[x]);
                        } //for x

                        lineChartData.datasets[line].data = y; //send new line data to dataset
                        lineChartData.datasets[line].data.showInLegend = true;
                        lineChartData.datasets[line].data.name = "Truco";

                    } //for line

                    ctx = document.getElementById("graficoMultiYear").getContext("2d");
                    window.Linea = new Chart(ctx).Line(lineChartData, {
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                stacked: true,
                            }],
                        },
                        sshowTooltips : true,
                        tooltipFillColor: "rgba(65,170,235,0.8)",
                        tooltipTitleFontColor: "#1C1C1C",
                        intersect : false,
                        responsive : true,
                        animation : true
                    });

                    var numero = parseInt(estrellas)/total;
                    numero = numero.toFixed();
                    //alert(numero);
                    $( ".starMY" ).remove();
                    var col = '<div class="starMY">';

                    for(var n = 1; n<=7; n++){
                        if(n<=numero){
                            col += '<i class="fa fa-star"></i>';
                        }else{
                            col += '<i class="fa fa-star-o"></i>';
                        }
                    }
                    col += '</div>';
                   // alert(col);
                    $('.titMY').append(col);
                    

                    $(".simboloMY").remove();
                    var sim = '<div class="simboloMY">';

                    for(line = 0; line < anio.length-1; line++) {
                        sim += '<div id="cuadroMY' + valores[0][line] + '"></div>';
                        sim += '<h1 class="titA">' + valores[0][line] +  '</h1>';
                    }

                    sim += '</div>';

                    $('.simbologiaMY').append(sim);

                    for(line = 0; line < anio.length-1; line++) {
                        var borde = iniB.concat(colorAlto[line]);

                        var tam = $(".titA").height();

                        $('#cuadroMY' + valores[0][line]).css({ 'height': tam + "px" });
                        $('#cuadroMY' + valores[0][line]).css({ 'width': tam + "px" });
                        $('#cuadroMY' + valores[0][line]).css({ 'background-color': colorBajo[line] });
                        $('#cuadroMY' + valores[0][line]).css({ 'border': borde });
                        $('#cuadroMY' + valores[0][line]).css({ 'display': "inline-block" });
                    }
                }else{

                }
    		}
    	});
    	return false;
    }
    //$('.bloqueInMY').slideUp();
    //
    
    /////////////////////////////////////////////////////////////////////////////
    ///Resultados por día
    
    $('.showYes').on("click", function(event){
        if($(".showYes").text() == "Mostrar"){
            $(".showYes").text("Ocultar");
            $('.yesterday').slideDown(500).delay(300);
            
        }else{
            $(".showYes").text("Mostrar");
            $('.yesterday').slideUp(500).delay(300);
        }
    });

   function resultadoYesterday(dia){
        var datos = {
                "dia" : dia,
                "tipo" : 0
        };
        $.ajax({
            type: 'POST',
            url: 'lib/resultados.php',
            data: datos,
            success:function(data){
                var valores = eval(data);
                
                var evento = valores[0];
                var visita = valores[1];
                var estrellas = valores[2];
                var fecha = valores[3];
                var total = 0;
                if((evento.length-1) >= 1){
                    $('.bloqueInYes').css({ 'display': "flex" });
                    
                    var colorBajo = new Array();
                    var colorAlto = new Array();

                    lineChartData = {}; //declare an object
                    lineChartData.labels = []; //add 'labels' element to object (X axis)
                    lineChartData.datasets = []; //add 'datasets' array element to object

                    for (line = 0; line < evento.length-1; line++) {
                        //alert(line);
                        y = [];

                        colorAlto[line] = inSintax.concat(red[line], ",", green[line], ",", blue[line], ", 1)");
                        colorBajo[line] = inSintax.concat(red[line], ",", green[line], ",", blue[line], ", 0.2)");

                        lineChartData.datasets.push({}); //create a new line dataset
                        dataset = lineChartData.datasets[line];
                        dataset.borderWidth = 2,
                        dataset.fillColor = colorBajo[line], //Relleno de las lineas
                        dataset.strokeColor = colorAlto[line], //color de la linea
                        dataset.highlightFill = colorBajo[line], //"HOVER" del relleno
                        dataset.highlightStroke = colorAlto[line], //"HOVER" de las lineas
                        dataset.data = []; //contains the 'Y; axis data

                        var arreglo = valores[1][line].split(",");

                        for(x = 0; x < arreglo.length; x++) { 
                            y.push(arreglo[x]); //push some data aka generate 4 distinct separate lines
                            if (line === 0){
                                lineChartData.labels.push(fecha); //adds x axis labels
                            }
                            total += parseInt(arreglo[x]);
                        } //for x

                        lineChartData.datasets[line].data = y; //send new line data to dataset
                        lineChartData.datasets[line].data.showInLegend = true;
                        lineChartData.datasets[line].data.name = "Truco";
                    } //for line

                    ctx = document.getElementById("graficoYesterday").getContext("2d");
                    window.Yesterday = new Chart(ctx).Bar(lineChartData, {
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                stacked: true,
                            }],
                        },
                        showTooltips : true,
                        tooltipFillColor: "rgba(65,170,235,0.8)",
                        tooltipTitleFontColor: "#1C1C1C",
                        intersect : false,
                        responsive : true,
                        animation : true
                    });

                    var numero = parseInt(estrellas)/total;
                    numero = numero.toFixed();
                    //alert(numero);
                    $( ".starYes" ).remove();
                    var col = '<div class="starYes">';

                    for(var n = 1; n<=7; n++){
                        if(n<=numero){
                            col += '<i class="fa fa-star"></i>';
                        }else{
                            col += '<i class="fa fa-star-o"></i>';
                        }
                    }
                    col += '</div>';
                   // alert(col);
                    $('.titYes').append(col);

                    $(".simboloYes").remove();
                    var sim = '<div class="simboloYes">';

                    for(line = 0; line < evento.length-1; line++) {
                        sim += '<div id="cuadroYes' + line + '"></div>';
                        sim += '<h1 class="titA">' + valores[0][line] +  '</h1>';
                    }

                    sim += '</div>';

                    $('.simbologiaYes').append(sim);

                    var iniB = "3px solid ";
                    for(line = 0; line < evento.length-1; line++) {
                        var borde = iniB.concat(colorAlto[line]);

                        var tam = $(".titA").height();

                        $('#cuadroYes' + line).css({ 'height': tam + "px" });
                        $('#cuadroYes' + line).css({ 'width': tam + "px" });
                        $('#cuadroYes' + line).css({ 'background-color': colorBajo[line] });
                        $('#cuadroYes' + line).css({ 'border': borde });
                        $('#cuadroYes' + line).css({ 'display': "inline-block" });
                    }
                }else{
                    $(".yesterday").append(("<p>No se encontraron resultados</p>"));
                }
            }
        });
        return false;
    }

    /////////////////////////////////////////////////////////////////////////////
    ///Resultados por semana
    
    $('.showW').on("click", function(event){
        if($(".showW").text() == "Mostrar"){
            $(".showW").text("Ocultar");
            $('.week').slideDown(500).delay(300);
            
        }else{
            $(".showW").text("Mostrar");
            $('.week').slideUp(500).delay(300);
        }
    });

    function resultadoWeek(day){
        //alert(day);
        var datos = {
                "dia" : day,
                "tipo" : 1
        };
        $.ajax({
            type: 'POST',
            url: 'lib/resultados.php',
            data: datos,
            success:function(data){
                var valores = eval(data);

                var nombres = valores[0];
                var visitas = valores[1];
                var estrellas = valores[2];
                var fecha = valores[3];
                var total = valores[4];

                if(total > 0){
                    $('.bloqueInW').css({ 'display': "flex" });

                    //alert(valores[3]);

                    var etiquetas = ['Domingo ' + fecha[0], 'Lunes ' + fecha[1], 'Martes ' + fecha[2], 
                    'Miércoles ' + fecha[3], 'Jueves ' + fecha[4], 'Viernes ' + fecha[5], 'Sábado ' + fecha[6]];
                    
                    var total = 0;

                    var colorBajo = new Array();
                    var colorAlto = new Array();
                    var arreglo = new Array();

                    lineChartData = {}; //declare an object
                    lineChartData.labels = []; //add 'labels' element to object (X axis)
                    lineChartData.datasets = []; //add 'datasets' array element to object

                    for (line = 0; line < nombres.length-1; line++) {
                        y = [];

                        colorAlto[line] = inSintax.concat(red[line], ",", green[line], ",", blue[line], ", 1)");
                        colorBajo[line] = inSintax.concat(red[line], ",", green[line], ",", blue[line], ", 0.2)");

                        lineChartData.datasets.push({}); //create a new line dataset
                        dataset = lineChartData.datasets[line];
                        dataset.borderWidth = 2,
                        dataset.fillColor = colorBajo[line], //Relleno de las lineas
                        dataset.strokeColor = colorAlto[line], //color de la linea
                        dataset.highlightFill = colorBajo[line], //"HOVER" del relleno
                        dataset.highlightStroke = colorAlto[line], //"HOVER" de las lineas
                        dataset.data = []; //contains the 'Y; axis data

                        var arreglo = visitas[line].split(",");

                        for(x = 0; x < arreglo.length; x++) { 
                            y.push(arreglo[x]); //push some data aka generate 4 distinct separate lines
                            if (line === 0){
                                lineChartData.labels.push(etiquetas[x]); //adds x axis labels
                            }
                            total += parseInt(arreglo[x]);
                        }

                        lineChartData.datasets[line].data = y; //send new line data to dataset
                    } //for line

                    ctx = document.getElementById("graficoWeek").getContext("2d");
                    window.Linea = new Chart(ctx).Bar(lineChartData, {
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                stacked: true,
                            }],
                        },
                        showTooltips : true,
                        tooltipFillColor: "rgba(65,170,235,0.8)",
                        tooltipTitleFontColor: "#1C1C1C",
                        intersect : false,
                        responsive : true,
                        animation : true
                    });

                    var numero = parseInt(estrellas)/total;
                    numero = numero.toFixed();
                    //alert(numero);
                    $( ".starW" ).remove();
                    var col = '<div class="starW">';

                    for(var n = 1; n<=7; n++){
                        if(n<=numero){
                            col += '<i class="fa fa-star"></i>';
                        }else{
                            col += '<i class="fa fa-star-o"></i>';
                        }
                    }
                    col += '</div>';
                   // alert(col);
                    $('.titW').append(col);
                    

                    $(".simboloW").remove();
                    var sim = '<div class="simboloW">';

                    for(line = 0; line < nombres.length-1; line++) {
                        sim += '<div id="cuadroW' + line + '"></div>';
                        sim += '<h1 class="titA">' + nombres[line] +  '</h1>';
                    }

                    sim += '</div>';

                    $('.simbologiaW').append(sim);

                    var iniB = "3px solid ";
                    for(line = 0; line < nombres.length-1; line++) {
                        var borde = iniB.concat(colorAlto[line]);

                        var tam = $(".titA").height();

                        $('#cuadroW' + line).css({ 'height': tam + "px" });
                        $('#cuadroW' + line).css({ 'width': tam + "px" });
                        $('#cuadroW' + line).css({ 'background-color': colorBajo[line] });
                        $('#cuadroW' + line).css({ 'border': borde });
                        $('#cuadroW' + line).css({ 'display': "inline-block" });
                    }
                }else{
                    $(".week").append(("<p>No hay datos suficientes</p>"));
                }
                
                
            }
        });
        return false;
    }


    /////////////////////////////////////////////////////////////////////////////
    ///Resultados por Mes
    
    $('.showM').on("click", function(event){
        if($(".showM").text() == "Mostrar"){
            $(".showM").text("Ocultar");
            $('.month').slideDown(500).delay(300);
            
        }else{
            $(".showM").text("Mostrar");
            $('.month').slideUp(500).delay(300);
        }
    });

    function resultadoMonth(){
        var datos = {
                "tipo" : 2
        };
        $.ajax({
            type: 'POST',
            url: 'lib/resultados.php',
            data: datos,
            success:function(data){
                var valores = eval(data);

                var nombres = valores[0];
                var visitas = valores[1];
                var fin = valores[2];
                var estrellas = valores[3];

                if((nombres.length-1) >= 1){
                    $('.contMonth').css({ 'display': "block" });
                    var total = 0;

                    var colorBajo = new Array();
                    var colorAlto = new Array();
                    var arreglo = new Array();

                    //alert(visitas[0][0]);

                    lineChartData = {}; //declare an object
                    lineChartData.labels = []; //add 'labels' element to object (X axis)
                    lineChartData.datasets = []; //add 'datasets' array element to object

                    for (line = 0; line < nombres.length-1; line++) {
                        y = [];

                        colorAlto[line] = inSintax.concat(red[line], ",", green[line], ",", blue[line], ", 1)");
                        colorBajo[line] = inSintax.concat(red[line], ",", green[line], ",", blue[line], ", 0.2)");

                        lineChartData.datasets.push({}); //create a new line dataset
                        dataset = lineChartData.datasets[line];
                        dataset.borderWidth = 2,
                        dataset.tooltipFontColor = '#5ac3d0',
                        dataset.fillColor = colorBajo[line], //Relleno de las lineas
                        dataset.strokeColor = colorAlto[line], //color de la linea
                        dataset.highlightFill = colorBajo[line], //"HOVER" del relleno
                        dataset.highlightStroke = colorAlto[line], //"HOVER" de las lineas
                        dataset.data = []; //contains the 'Y; axis data

                        //var arreglo = visitas[line].split(",");

                        for(x = 0; x < fin; x++) { 
                            y.push(visitas[line][x]); //push some data aka generate 4 distinct separate lines
                            if (line === 0){
                                lineChartData.labels.push(x+1); //adds x axis labels
                                //pointHoverBackgroundColor: "#fff",
                            }
                            total += parseInt(visitas[line][x]);
                        }

                        lineChartData.datasets[line].data = y; //send new line data to dataset
                    } //for line

                    ctx = document.getElementById("graficoMonth").getContext("2d");
                    window.Mes = new Chart(ctx).Line(lineChartData, {
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                stacked: true,
                            }],
                        },
                        showTooltips : true,
                        tooltipFillColor: "rgba(65,170,235,0.8)",
                        tooltipTitleFontColor: "#1C1C1C",                    
                        /*tooltips: {
                            mode: 'x-axis'
                        },*/
                        intersect : false,
                        responsive : true,
                        animation : true
                    });

                    var numero = parseInt(estrellas)/total;
                    numero = numero.toFixed();
                    //alert(numero);
                    $( ".starM" ).remove();
                    var col = '<div class="starM">';

                    for(var n = 1; n<=7; n++){
                        if(n<=numero){
                            col += '<i class="fa fa-star"></i>';
                        }else{
                            col += '<i class="fa fa-star-o"></i>';
                        }
                    }
                    col += '</div>';
                   // alert(col);
                    $('.titM').append(col);
                    

                    $(".simboloM").remove();
                    var sim = '<div class="simboloM">';

                    for(line = 0; line < nombres.length-1; line++) {
                        sim += '<div id="cuadroM' + line + '"></div>';
                        sim += '<h1 class="titA">' + nombres[line] +  '</h1>';
                    }

                    sim += '</div>';

                    $('.simbologiaM').append(sim);

                    var iniB = "3px solid ";
                    for(line = 0; line < nombres.length-1; line++) {
                        var borde = iniB.concat(colorAlto[line]);

                        var tam = $(".titA").height();

                        $('#cuadroM' + line).css({ 'height': tam + "px" });
                        $('#cuadroM' + line).css({ 'width': tam + "px" });
                        $('#cuadroM' + line).css({ 'background-color': colorBajo[line] });
                        $('#cuadroM' + line).css({ 'border': borde });
                        $('#cuadroM' + line).css({ 'display': "inline-block" });
                    }
                }else{

                }
                
                
            }
        });
        return false;
    }

});