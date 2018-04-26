function enviarDatosEvento() {
    if (0 != ValidarEvento()) {
        valores = new Array();
        var t = 0, e = "";
        $("#tabla tbody tr").each(function() {
            var i = $(this).find("td").eq(0).html(), n = $(this).find("td").eq(2).html(), s = $(this).find("td").eq(3).html();
            i = (i = "#time") + t + " option", $(i).each(function() {
                e += $(this).attr("value") + ",";
            }), t++, valor = new Array(i, n, s, e), e = "", 0 != t && valores.push(valor);
        });
        var i = new FormData(document.getElementById("Evento"));
        return i.append("valores", JSON.stringify(valores)), $.ajax({
            async: !1,
            type: "POST",
            url: "lib/insertarEvento.php",
            data: i,
            cache: !1,
            contentType: !1,
            processData: !1,
            success: function(t) {
                alert("Enviando datos..."), alert(t);
            },
            error: function(t) {
                alert("Error en la subida");
            }
        }), !0;
    }
    return !1;
}

function enviarDatosPromocion() {
    valores = new Array();
    var t = 0, e = "";
    $("#tabla tbody tr").each(function() {
        var i = $(this).find("td").eq(0).html(), n = $(this).find("td").eq(2).html(), s = $(this).find("td").eq(3).html();
        i = (i = "#timep") + t + " option", $(i).each(function() {
            e += $(this).attr("value") + ",";
        }), t++, valor = new Array(i, n, s, e), e = "", 0 != t && valores.push(valor);
    });
    var i = new FormData(document.getElementById("Promocion"));
    return i.append("valores", JSON.stringify(valores)), $.ajax({
        async: !1,
        type: "POST",
        url: "lib/insertarPromocion.php",
        data: i,
        cache: !1,
        contentType: !1,
        processData: !1,
        success: function(t) {
            alert("Enviando datos..."), alert(t);
        },
        error: function(t) {
            alert("Error en la subida");
        }
    }), !0;
}

function enviarDatosEstablecimiento() {
    if (0 != ValidarRegistroEstablecimiento()) {
        valores = new Array();
        var t = 0, e = "";
        $("#tabla tbody tr").each(function() {
            var i = $(this).find("td").eq(0).html(), n = $(this).find("td").eq(2).html(), s = $(this).find("td").eq(3).html(), o = "#dias" + t + " option";
            $(o).each(function() {
                e += $(this).attr("value") + ",";
            }), t++, "" != e && (valor = new Array(i, n, s, e)), e = "", valores.push(valor);
        });
        var i = new FormData(document.getElementById("RegistroEstablecimiento"));
        return i.append("valores", JSON.stringify(valores)), $.ajax({
            async: !1,
            type: "POST",
            url: "lib/registroEstablecimiento.php",
            data: i,
            cache: !1,
            contentType: !1,
            processData: !1,
            success: function(t) {
                alert("Enviando datos..."), alert(t), $(location).attr("href", "/apptivity/index.html");
            },
            error: function(t) {
                alert("Error en la subida");
            }
        }), !0;
    }
    return !1;
}

function ValidarEvento() {
    var t = !0, e = (document.Evento.NombreEvento.value, document.Evento.Descripcion.value, 
    document.Evento.PrecioInferior.value), i = document.Evento.PrecioSuperior.value;
    return 0 == (t = ValidarSoloNumeros(i, " precio superior ")) ? t : 0 == (t = ValidarSoloNumeros(e, " precio inferior ")) ? t : e > i ? (alert("El precio inferior no puede ser mayor al superior"), 
    !1) : (t = VerificarHorario(HoraInicio, HoraTermino), 0 == t ? t : void 0);
}

function ValidarEvento() {
    var t = !0, e = (document.Promocion.NombrePromocion.value, document.Promocion.DescripcionProm.value, 
    document.Promocion.PrecioInferior.value), i = document.Promocion.PrecioSuperior.value;
    return 0 == (t = ValidarSoloNumeros(i, " precio superior ")) ? t : 0 == (t = ValidarSoloNumeros(e, " precio inferior ")) ? t : e > i ? (alert("El precio inferior no puede ser mayor al superior"), 
    !1) : (t = VerificarHorario(HoraInicio, HoraTermino), 0 == t ? t : void 0);
}

function EnviarDatosRegistro() {
    try {
        $.ajax({
            method: "POST",
            url: "http://localhost:15178/WebService.asmx/HelloWorld",
            data: "{'Usuario':'Roy Cruz'}",
            contentType: "application/json; utf-8",
            dataType: "json",
            success: function(t) {
                null != t.d && alert(t.d);
            },
            error: function(t, e, i) {}
        });
    } catch (t) {
        alert("failed to call web service. Error: " + t);
    }
}

function ValidarRegistroEstablecimiento() {
    var t = !0, e = (document.RegistroEstablecimiento.NombreEstablecimiento.value, document.RegistroEstablecimiento.Descripcion.value, 
    document.RegistroEstablecimiento.Usuario.value), i = document.RegistroEstablecimiento.ApellidoMaterno.value, n = document.RegistroEstablecimiento.ApellidoPaterno.value, s = (document.RegistroEstablecimiento.Username.value, 
    document.RegistroEstablecimiento.CorreoElectronico.value), o = document.RegistroEstablecimiento.Contrasena.value, a = document.RegistroEstablecimiento.ConfirmarContrasena.value;
    return 0 == (t = ValidarTextComun(e, "usuario")) ? t : 0 == (t = ValidarTextComun(n, "apellido paterno")) ? t : "" != i && 0 == (t = ValidarTextComun(i, "apellido materno")) ? t : 0 == (t = ValidarCorreo(s)) ? t : 0 == (t = ValidarContrasena(o)) ? t : (t = ContrasenasIguales(o, a), 
    0 == t ? t : void 0);
}

function ValidarRegistroUsuario() {
    var t = !0, e = document.RegistroUsuario.Usuario.value;
    window.alert("hola");
    var i = document.RegistroUsuario.ApellidoMaterno.value, n = document.RegistroUsuario.ApellidoPaterno.value, s = (document.RegistroUsuario.Username.value, 
    document.RegistroUsuario.CorreoElectronico.value), o = document.RegistroUsuario.Contrasena.value, a = document.RegistroUsuario.ConfirmarContrasena.value;
    return 0 == (t = ValidarTextComun(e, "usuario")) ? t : 0 == (t = ValidarTextComun(n, "apellido paterno")) ? t : "" != i && 0 == (t = ValidarTextComun(i, "apellido materno")) ? t : 0 == (t = ValidarCorreo(s)) ? t : 0 == (t = ValidarContrasena(o)) ? t : (t = ContrasenasIguales(o, a), 
    0 == t ? t : 0 == t ? t : void 0);
}

function ValidarTextComun(t, e) {
    var i = /^[a-zA-Z]*$/;
    if (t.search(i)) return window.alert("El campo " + e + " sólo permite caracteres de la A-Z"), 
    !1;
}

function ValidarSoloNumeros(t, e) {
    var i = /^[0-9]+([,][0-9]+)?$/;
    if (t.search(i)) return window.alert("El campo" + e + "sólo acepta números"), !1;
}

function ValidarCorreo(t) {
    var e = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (t.search(e)) return window.alert("Su correo probablemente tenga un error"), 
    !1;
}

function ValidarContrasena(t) {
    var e = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d]|[^ ]){8,}/;
    if (t.search(e)) return alert("Su contraseña no coincide con alguno de los requisitos: \nUna mayúscula \nUna minúscula\nUna letra\nPor lo menos 8 caracteres\nSin espacios en blanco"), 
    !1;
}

function ContrasenasIguales(t, e) {
    if (t != e) return window.alert("Las contraseñas no coinciden"), !1;
}

function NuevoHorario() {
    var t = new Array();
    new Array();
    VerificarHorario(document.RegistroEstablecimiento.HoraInicio.value, document.RegistroEstablecimiento.HoraTermino.value);
    for (var e = document.getElementsByName("diasSemana"), i = 0; i < 7; i++) e[i].checked && (t[i] = i + 1, 
    window.alert(t[i]));
}

function VerificarHorario(t, e) {
    if (t >= e) return window.alert("La hora de inicio no puede ser mayor a la hora de termino"), 
    !1;
}

(function() {
    "use strict";
    var t = this, e = t.Chart, i = function(t) {
        return this.canvas = t.canvas, this.ctx = t, this.width = t.canvas.width, this.height = t.canvas.height, 
        this.aspectRatio = this.width / this.height, n.retinaScale(this), this;
    };
    i.defaults = {
        global: {
            animation: !0,
            animationSteps: 160,
            animationEasing: "easeOutQuart",
            showScale: !0,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleIntegersOnly: !0,
            scaleBeginAtZero: !1,
            scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            responsive: !1,
            maintainAspectRatio: !0,
            showTooltips: !0,
            customTooltips: !1,
            tooltipEvents: [ "mousemove", "touchstart", "touchmove", "mouseout" ],
            tooltipFillColor: "rgba(0,0,0,0.8)",
            tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipFontSize: 14,
            tooltipFontStyle: "normal",
            tooltipFontColor: "#fff",
            tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipTitleFontSize: 14,
            tooltipTitleFontStyle: "bold",
            tooltipTitleFontColor: "#fff",
            tooltipYPadding: 6,
            tooltipXPadding: 6,
            tooltipCaretSize: 8,
            tooltipCornerRadius: 6,
            tooltipXOffset: 10,
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
            multiTooltipTemplate: "<%= value %>",
            multiTooltipKeyBackground: "#fff",
            onAnimationProgress: function() {},
            onAnimationComplete: function() {}
        }
    }, i.types = {};
    var n = i.helpers = {}, s = n.each = function(t, e, i) {
        var n = Array.prototype.slice.call(arguments, 3);
        if (t) if (t.length === +t.length) {
            var s;
            for (s = 0; s < t.length; s++) e.apply(i, [ t[s], s ].concat(n));
        } else for (var o in t) e.apply(i, [ t[o], o ].concat(n));
    }, o = n.clone = function(t) {
        var e = {};
        return s(t, function(i, n) {
            t.hasOwnProperty(n) && (e[n] = i);
        }), e;
    }, a = n.extend = function(t) {
        return s(Array.prototype.slice.call(arguments, 1), function(e) {
            s(e, function(i, n) {
                e.hasOwnProperty(n) && (t[n] = i);
            });
        }), t;
    }, r = n.merge = function() {
        var t = Array.prototype.slice.call(arguments, 0);
        return t.unshift({}), a.apply(null, t);
    }, l = n.indexOf = function(t, e) {
        if (Array.prototype.indexOf) return t.indexOf(e);
        for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
        return -1;
    }, u = (n.where = function(t, e) {
        var i = [];
        return n.each(t, function(t) {
            e(t) && i.push(t);
        }), i;
    }, n.findNextWhere = function(t, e, i) {
        i || (i = -1);
        for (var n = i + 1; n < t.length; n++) {
            var s = t[n];
            if (e(s)) return s;
        }
    }, n.findPreviousWhere = function(t, e, i) {
        i || (i = t.length);
        for (var n = i - 1; n >= 0; n--) {
            var s = t[n];
            if (e(s)) return s;
        }
    }, n.inherits = function(t) {
        var e = this, i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
            return e.apply(this, arguments);
        }, n = function() {
            this.constructor = i;
        };
        return n.prototype = e.prototype, i.prototype = new n(), i.extend = u, t && a(i.prototype, t), 
        i.__super__ = e.prototype, i;
    }), h = n.noop = function() {}, c = n.uid = function() {
        var t = 0;
        return function() {
            return "chart-" + t++;
        };
    }(), d = n.warn = function(t) {
        window.console && "function" == typeof window.console.warn && console.warn(t);
    }, p = n.amd = "function" == typeof define && define.amd, f = n.isNumber = function(t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
    }, m = n.max = function(t) {
        return Math.max.apply(Math, t);
    }, g = n.min = function(t) {
        return Math.min.apply(Math, t);
    }, v = (n.cap = function(t, e, i) {
        if (f(e)) {
            if (t > e) return e;
        } else if (f(i) && i > t) return i;
        return t;
    }, n.getDecimalPlaces = function(t) {
        return t % 1 != 0 && f(t) ? t.toString().split(".")[1].length : 0;
    }), y = n.radians = function(t) {
        return t * (Math.PI / 180);
    }, b = (n.getAngleFromPoint = function(t, e) {
        var i = e.x - t.x, n = e.y - t.y, s = Math.sqrt(i * i + n * n), o = 2 * Math.PI + Math.atan2(n, i);
        return 0 > i && 0 > n && (o += 2 * Math.PI), {
            angle: o,
            distance: s
        };
    }, n.aliasPixel = function(t) {
        return t % 2 == 0 ? 0 : .5;
    }), _ = (n.splineCurve = function(t, e, i, n) {
        var s = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)), o = Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)), a = n * s / (s + o), r = n * o / (s + o);
        return {
            inner: {
                x: e.x - a * (i.x - t.x),
                y: e.y - a * (i.y - t.y)
            },
            outer: {
                x: e.x + r * (i.x - t.x),
                y: e.y + r * (i.y - t.y)
            }
        };
    }, n.calculateOrderOfMagnitude = function(t) {
        return Math.floor(Math.log(t) / Math.LN10);
    }), x = (n.calculateScaleRange = function(t, e, i, n, s) {
        var o = Math.floor(e / (1.5 * i)), a = 2 >= o, r = m(t), l = g(t);
        r === l && (r += .5, l >= .5 && !n ? l -= .5 : r += .5);
        for (var u = Math.abs(r - l), h = _(u), c = Math.ceil(r / (1 * Math.pow(10, h))) * Math.pow(10, h), d = n ? 0 : Math.floor(l / (1 * Math.pow(10, h))) * Math.pow(10, h), p = c - d, f = Math.pow(10, h), v = Math.round(p / f); (v > o || o > 2 * v) && !a; ) if (v > o) f *= 2, 
        (v = Math.round(p / f)) % 1 != 0 && (a = !0); else if (s && h >= 0) {
            if (f / 2 % 1 != 0) break;
            f /= 2, v = Math.round(p / f);
        } else f /= 2, v = Math.round(p / f);
        return a && (v = 2, f = p / v), {
            steps: v,
            stepValue: f,
            min: d,
            max: d + v * f
        };
    }, n.template = function(t, e) {
        if (t instanceof Function) return t(e);
        var i = {};
        return function(t, e) {
            var n = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : i[t] = i[t];
            return e ? n(e) : n;
        }(t, e);
    }), w = (n.generateLabels = function(t, e, i, n) {
        var o = new Array(e);
        return labelTemplateString && s(o, function(e, s) {
            o[s] = x(t, {
                value: i + n * (s + 1)
            });
        }), o;
    }, n.easingEffects = {
        linear: function(t) {
            return t;
        },
        easeInQuad: function(t) {
            return t * t;
        },
        easeOutQuad: function(t) {
            return -1 * t * (t - 2);
        },
        easeInOutQuad: function(t) {
            return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
        },
        easeInCubic: function(t) {
            return t * t * t;
        },
        easeOutCubic: function(t) {
            return 1 * ((t = t / 1 - 1) * t * t + 1);
        },
        easeInOutCubic: function(t) {
            return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
        },
        easeInQuart: function(t) {
            return t * t * t * t;
        },
        easeOutQuart: function(t) {
            return -1 * ((t = t / 1 - 1) * t * t * t - 1);
        },
        easeInOutQuart: function(t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
        },
        easeInQuint: function(t) {
            return 1 * (t /= 1) * t * t * t * t;
        },
        easeOutQuint: function(t) {
            return 1 * ((t = t / 1 - 1) * t * t * t * t + 1);
        },
        easeInOutQuint: function(t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
        },
        easeInSine: function(t) {
            return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1;
        },
        easeOutSine: function(t) {
            return 1 * Math.sin(t / 1 * (Math.PI / 2));
        },
        easeInOutSine: function(t) {
            return -.5 * (Math.cos(Math.PI * t / 1) - 1);
        },
        easeInExpo: function(t) {
            return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1));
        },
        easeOutExpo: function(t) {
            return 1 === t ? 1 : 1 * (1 - Math.pow(2, -10 * t / 1));
        },
        easeInOutExpo: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t));
        },
        easeInCirc: function(t) {
            return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1);
        },
        easeOutCirc: function(t) {
            return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t);
        },
        easeInOutCirc: function(t) {
            return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        },
        easeInElastic: function(t) {
            var e = 1.70158, i = 0, n = 1;
            return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, 
            e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / i));
        },
        easeOutElastic: function(t) {
            var e = 1.70158, i = 0, n = 1;
            return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, 
            e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin(2 * (1 * t - e) * Math.PI / i) + 1);
        },
        easeInOutElastic: function(t) {
            var e = 1.70158, i = 0, n = 1;
            return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .3 * 1.5), n < Math.abs(1) ? (n = 1, 
            e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), 1 > t ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / i) * .5 + 1);
        },
        easeInBack: function(t) {
            var e = 1.70158;
            return 1 * (t /= 1) * t * ((e + 1) * t - e);
        },
        easeOutBack: function(t) {
            var e = 1.70158;
            return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1);
        },
        easeInOutBack: function(t) {
            var e = 1.70158;
            return (t /= .5) < 1 ? .5 * t * t * ((1 + (e *= 1.525)) * t - e) : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
        },
        easeInBounce: function(t) {
            return 1 - w.easeOutBounce(1 - t);
        },
        easeOutBounce: function(t) {
            return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
        },
        easeInOutBounce: function(t) {
            return .5 > t ? .5 * w.easeInBounce(2 * t) : .5 * w.easeOutBounce(2 * t - 1) + .5;
        }
    }), C = n.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
            return window.setTimeout(t, 1e3 / 60);
        };
    }(), k = (n.cancelAnimFrame = function() {
        return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
            return window.clearTimeout(t, 1e3 / 60);
        };
    }(), n.animationLoop = function(t, e, i, n, s, o) {
        var a = 0, r = w[i] || w.linear, l = function() {
            var i = ++a / e, u = r(i);
            t.call(o, u, i, a), n.call(o, u, i), e > a ? o.animationFrame = C(l) : s.apply(o);
        };
        C(l);
    }, n.getRelativePosition = function(t) {
        var e, i, n = t.originalEvent || t, s = (t.currentTarget || t.srcElement).getBoundingClientRect();
        return n.touches ? (e = n.touches[0].clientX - s.left, i = n.touches[0].clientY - s.top) : (e = n.clientX - s.left, 
        i = n.clientY - s.top), {
            x: e,
            y: i
        };
    }, n.addEvent = function(t, e, i) {
        t.addEventListener ? t.addEventListener(e, i) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i;
    }), D = n.removeEvent = function(t, e, i) {
        t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = h;
    }, T = (n.bindEvents = function(t, e, i) {
        t.events || (t.events = {}), s(e, function(e) {
            t.events[e] = function() {
                i.apply(t, arguments);
            }, k(t.chart.canvas, e, t.events[e]);
        });
    }, n.unbindEvents = function(t, e) {
        s(e, function(e, i) {
            D(t.chart.canvas, i, e);
        });
    }), S = n.getMaximumWidth = function(t) {
        return t.parentNode.clientWidth;
    }, E = n.getMaximumHeight = function(t) {
        return t.parentNode.clientHeight;
    }, P = (n.getMaximumSize = n.getMaximumWidth, n.retinaScale = function(t) {
        var e = t.ctx, i = t.canvas.width, n = t.canvas.height;
        window.devicePixelRatio && (e.canvas.style.width = i + "px", e.canvas.style.height = n + "px", 
        e.canvas.height = n * window.devicePixelRatio, e.canvas.width = i * window.devicePixelRatio, 
        e.scale(window.devicePixelRatio, window.devicePixelRatio));
    }), A = n.clear = function(t) {
        t.ctx.clearRect(0, 0, t.width, t.height);
    }, I = n.fontString = function(t, e, i) {
        return e + " " + t + "px " + i;
    }, F = n.longestText = function(t, e, i) {
        t.font = e;
        var n = 0;
        return s(i, function(e) {
            var i = t.measureText(e).width;
            n = i > n ? i : n;
        }), n;
    }, M = n.drawRoundedRectangle = function(t, e, i, n, s, o) {
        t.beginPath(), t.moveTo(e + o, i), t.lineTo(e + n - o, i), t.quadraticCurveTo(e + n, i, e + n, i + o), 
        t.lineTo(e + n, i + s - o), t.quadraticCurveTo(e + n, i + s, e + n - o, i + s), 
        t.lineTo(e + o, i + s), t.quadraticCurveTo(e, i + s, e, i + s - o), t.lineTo(e, i + o), 
        t.quadraticCurveTo(e, i, e + o, i), t.closePath();
    };
    i.instances = {}, i.Type = function(t, e, n) {
        this.options = e, this.chart = n, this.id = c(), i.instances[this.id] = this, e.responsive && this.resize(), 
        this.initialize.call(this, t);
    }, a(i.Type.prototype, {
        initialize: function() {
            return this;
        },
        clear: function() {
            return A(this.chart), this;
        },
        stop: function() {
            return n.cancelAnimFrame.call(t, this.animationFrame), this;
        },
        resize: function(t) {
            this.stop();
            var e = this.chart.canvas, i = S(this.chart.canvas), n = this.options.maintainAspectRatio ? i / this.chart.aspectRatio : E(this.chart.canvas);
            return e.width = this.chart.width = i, e.height = this.chart.height = n, P(this.chart), 
            "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)), 
            this;
        },
        reflow: h,
        render: function(t) {
            return t && this.reflow(), this.options.animation && !t ? n.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), 
            this.options.onAnimationComplete.call(this)), this;
        },
        generateLegend: function() {
            return x(this.options.legendTemplate, this);
        },
        destroy: function() {
            this.clear(), T(this, this.events);
            var t = this.chart.canvas;
            t.width = this.chart.width, t.height = this.chart.height, t.style.removeProperty ? (t.style.removeProperty("width"), 
            t.style.removeProperty("height")) : (t.style.removeAttribute("width"), t.style.removeAttribute("height")), 
            delete i.instances[this.id];
        },
        showTooltip: function(t, e) {
            if (void 0 === this.activeElements && (this.activeElements = []), function(t) {
                var e = !1;
                return t.length !== this.activeElements.length ? e = !0 : (s(t, function(t, i) {
                    t !== this.activeElements[i] && (e = !0);
                }, this), e);
            }.call(this, t) || e) {
                if (this.activeElements = t, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), 
                t.length > 0) if (this.datasets && this.datasets.length > 1) {
                    for (var o, a, r = this.datasets.length - 1; r >= 0 && (o = this.datasets[r].points || this.datasets[r].bars || this.datasets[r].segments, 
                    -1 === (a = l(o, t[0]))); r--) ;
                    var u = [], h = [], c = function() {
                        var t, e, i, s, o, r = [], l = [], c = [];
                        return n.each(this.datasets, function(e) {
                            (t = e.points || e.bars || e.segments)[a] && t[a].hasValue() && r.push(t[a]);
                        }), n.each(r, function(t) {
                            l.push(t.x), c.push(t.y), u.push(n.template(this.options.multiTooltipTemplate, t)), 
                            h.push({
                                fill: t._saved.fillColor || t.fillColor,
                                stroke: t._saved.strokeColor || t.strokeColor
                            });
                        }, this), o = g(c), i = m(c), s = g(l), e = m(l), {
                            x: s > this.chart.width / 2 ? s : e,
                            y: (o + i) / 2
                        };
                    }.call(this, a);
                    new i.MultiTooltip({
                        x: c.x,
                        y: c.y,
                        xPadding: this.options.tooltipXPadding,
                        yPadding: this.options.tooltipYPadding,
                        xOffset: this.options.tooltipXOffset,
                        fillColor: this.options.tooltipFillColor,
                        textColor: this.options.tooltipFontColor,
                        fontFamily: this.options.tooltipFontFamily,
                        fontStyle: this.options.tooltipFontStyle,
                        fontSize: this.options.tooltipFontSize,
                        titleTextColor: this.options.tooltipTitleFontColor,
                        titleFontFamily: this.options.tooltipTitleFontFamily,
                        titleFontStyle: this.options.tooltipTitleFontStyle,
                        titleFontSize: this.options.tooltipTitleFontSize,
                        cornerRadius: this.options.tooltipCornerRadius,
                        labels: u,
                        legendColors: h,
                        legendColorBackground: this.options.multiTooltipKeyBackground,
                        title: t[0].label,
                        chart: this.chart,
                        ctx: this.chart.ctx,
                        custom: this.options.customTooltips
                    }).draw();
                } else s(t, function(t) {
                    var e = t.tooltipPosition();
                    new i.Tooltip({
                        x: Math.round(e.x),
                        y: Math.round(e.y),
                        xPadding: this.options.tooltipXPadding,
                        yPadding: this.options.tooltipYPadding,
                        fillColor: this.options.tooltipFillColor,
                        textColor: this.options.tooltipFontColor,
                        fontFamily: this.options.tooltipFontFamily,
                        fontStyle: this.options.tooltipFontStyle,
                        fontSize: this.options.tooltipFontSize,
                        caretHeight: this.options.tooltipCaretSize,
                        cornerRadius: this.options.tooltipCornerRadius,
                        text: x(this.options.tooltipTemplate, t),
                        chart: this.chart,
                        custom: this.options.customTooltips
                    }).draw();
                }, this);
                return this;
            }
        },
        toBase64Image: function() {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments);
        }
    }), i.Type.extend = function(t) {
        var e = this, n = function() {
            return e.apply(this, arguments);
        };
        if (n.prototype = o(e.prototype), a(n.prototype, t), n.extend = i.Type.extend, t.name || e.prototype.name) {
            var s = t.name || e.prototype.name, l = i.defaults[e.prototype.name] ? o(i.defaults[e.prototype.name]) : {};
            i.defaults[s] = a(l, t.defaults), i.types[s] = n, i.prototype[s] = function(t, e) {
                var o = r(i.defaults.global, i.defaults[s], e || {});
                return new n(t, o, this);
            };
        } else d("Name not provided for this chart, so it hasn't been registered");
        return e;
    }, i.Element = function(t) {
        a(this, t), this.initialize.apply(this, arguments), this.save();
    }, a(i.Element.prototype, {
        initialize: function() {},
        restore: function(t) {
            return t ? s(t, function(t) {
                this[t] = this._saved[t];
            }, this) : a(this, this._saved), this;
        },
        save: function() {
            return this._saved = o(this), delete this._saved._saved, this;
        },
        update: function(t) {
            return s(t, function(t, e) {
                this._saved[e] = this[e], this[e] = t;
            }, this), this;
        },
        transition: function(t, e) {
            return s(t, function(t, i) {
                this[i] = (t - this._saved[i]) * e + this._saved[i];
            }, this), this;
        },
        tooltipPosition: function() {
            return {
                x: this.x,
                y: this.y
            };
        },
        hasValue: function() {
            return f(this.value);
        }
    }), i.Element.extend = u, i.Point = i.Element.extend({
        display: !0,
        inRange: function(t, e) {
            var i = this.hitDetectionRadius + this.radius;
            return Math.pow(t - this.x, 2) + Math.pow(e - this.y, 2) < Math.pow(i, 2);
        },
        draw: function() {
            if (this.display) {
                var t = this.ctx;
                t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), t.closePath(), 
                t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, 
                t.fill(), t.stroke();
            }
        }
    }), i.Arc = i.Element.extend({
        inRange: function(t, e) {
            var i = n.getAngleFromPoint(this, {
                x: t,
                y: e
            }), s = i.angle >= this.startAngle && i.angle <= this.endAngle, o = i.distance >= this.innerRadius && i.distance <= this.outerRadius;
            return s && o;
        },
        tooltipPosition: function() {
            var t = this.startAngle + (this.endAngle - this.startAngle) / 2, e = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
            return {
                x: this.x + Math.cos(t) * e,
                y: this.y + Math.sin(t) * e
            };
        },
        draw: function(t) {
            var e = this.ctx;
            e.beginPath(), e.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle), 
            e.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0), e.closePath(), 
            e.strokeStyle = this.strokeColor, e.lineWidth = this.strokeWidth, e.fillStyle = this.fillColor, 
            e.fill(), e.lineJoin = "bevel", this.showStroke && e.stroke();
        }
    }), i.Rectangle = i.Element.extend({
        draw: function() {
            var t = this.ctx, e = this.width / 2, i = this.x - e, n = this.x + e, s = this.base - (this.base - this.y), o = this.strokeWidth / 2;
            this.showStroke && (i += o, n -= o, s += o), t.beginPath(), t.fillStyle = this.fillColor, 
            t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(i, this.base), 
            t.lineTo(i, s), t.lineTo(n, s), t.lineTo(n, this.base), t.fill(), this.showStroke && t.stroke();
        },
        height: function() {
            return this.base - this.y;
        },
        inRange: function(t, e) {
            return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && e >= this.y && e <= this.base;
        }
    }), i.Tooltip = i.Element.extend({
        draw: function() {
            var t = this.chart.ctx;
            t.font = I(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", 
            this.yAlign = "above";
            var e = this.caretPadding = 2, i = t.measureText(this.text).width + 2 * this.xPadding, n = this.fontSize + 2 * this.yPadding, s = n + this.caretHeight + e;
            this.x + i / 2 > this.chart.width ? this.xAlign = "left" : this.x - i / 2 < 0 && (this.xAlign = "right"), 
            this.y - s < 0 && (this.yAlign = "below");
            var o = this.x - i / 2, a = this.y - s;
            if (t.fillStyle = this.fillColor, this.custom) this.custom(this); else {
                switch (this.yAlign) {
                  case "above":
                    t.beginPath(), t.moveTo(this.x, this.y - e), t.lineTo(this.x + this.caretHeight, this.y - (e + this.caretHeight)), 
                    t.lineTo(this.x - this.caretHeight, this.y - (e + this.caretHeight)), t.closePath(), 
                    t.fill();
                    break;

                  case "below":
                    a = this.y + e + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + e), 
                    t.lineTo(this.x + this.caretHeight, this.y + e + this.caretHeight), t.lineTo(this.x - this.caretHeight, this.y + e + this.caretHeight), 
                    t.closePath(), t.fill();
                }
                switch (this.xAlign) {
                  case "left":
                    o = this.x - i + (this.cornerRadius + this.caretHeight);
                    break;

                  case "right":
                    o = this.x - (this.cornerRadius + this.caretHeight);
                }
                M(t, o, a, i, n, this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", 
                t.textBaseline = "middle", t.fillText(this.text, o + i / 2, a + n / 2);
            }
        }
    }), i.MultiTooltip = i.Element.extend({
        initialize: function() {
            this.font = I(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = I(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), 
            this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize, 
            this.ctx.font = this.titleFont;
            var t = this.ctx.measureText(this.title).width, e = F(this.ctx, this.font, this.labels) + this.fontSize + 3, i = m([ e, t ]);
            this.width = i + 2 * this.xPadding;
            var n = this.height / 2;
            this.y - n < 0 ? this.y = n : this.y + n > this.chart.height && (this.y = this.chart.height - n), 
            this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset;
        },
        getLineHeight: function(t) {
            var e = this.y - this.height / 2 + this.yPadding, i = t - 1;
            return 0 === t ? e + this.titleFontSize / 2 : e + (1.5 * this.fontSize * i + this.fontSize / 2) + 1.5 * this.titleFontSize;
        },
        draw: function() {
            if (this.custom) this.custom(this); else {
                M(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                var t = this.ctx;
                t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", 
                t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), 
                t.font = this.font, n.each(this.labels, function(e, i) {
                    t.fillStyle = this.textColor, t.fillText(e, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(i + 1)), 
                    t.fillStyle = this.legendColorBackground, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize), 
                    t.fillStyle = this.legendColors[i].fill, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize);
                }, this);
            }
        }
    }), i.Scale = i.Element.extend({
        initialize: function() {
            this.fit();
        },
        buildYLabels: function() {
            this.yLabels = [];
            for (var t = v(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(x(this.templateString, {
                value: (this.min + e * this.stepValue).toFixed(t)
            }));
            this.yLabelWidth = this.display && this.showLabels ? F(this.ctx, this.font, this.yLabels) : 0;
        },
        addXLabel: function(t) {
            this.xLabels.push(t), this.valuesCount++, this.fit();
        },
        removeXLabel: function() {
            this.xLabels.shift(), this.valuesCount--, this.fit();
        },
        fit: function() {
            this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, 
            this.startPoint += this.padding, this.endPoint -= this.padding;
            var t, e = this.endPoint - this.startPoint;
            for (this.calculateYRange(e), this.buildYLabels(), this.calculateXLabelRotation(); e > this.endPoint - this.startPoint; ) e = this.endPoint - this.startPoint, 
            t = this.yLabelWidth, this.calculateYRange(e), this.buildYLabels(), t < this.yLabelWidth && this.calculateXLabelRotation();
        },
        calculateXLabelRotation: function() {
            this.ctx.font = this.font;
            var t, e = this.ctx.measureText(this.xLabels[0]).width, i = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
            if (this.xScalePaddingRight = i / 2 + 3, this.xScalePaddingLeft = e / 2 > this.yLabelWidth + 10 ? e / 2 : this.yLabelWidth + 10, 
            this.xLabelRotation = 0, this.display) {
                var n, s = F(this.ctx, this.font, this.xLabels);
                this.xLabelWidth = s;
                for (var o = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > o && 0 === this.xLabelRotation || this.xLabelWidth > o && this.xLabelRotation <= 90 && this.xLabelRotation > 0; ) n = Math.cos(y(this.xLabelRotation)), 
                t = n * e, n * i, t + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = t + this.fontSize / 2), 
                this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = n * s;
                this.xLabelRotation > 0 && (this.endPoint -= Math.sin(y(this.xLabelRotation)) * s + 3);
            } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding;
        },
        calculateYRange: h,
        drawingArea: function() {
            return this.startPoint - this.endPoint;
        },
        calculateY: function(t) {
            var e = this.drawingArea() / (this.min - this.max);
            return this.endPoint - e * (t - this.min);
        },
        calculateX: function(t) {
            var e = (this.xLabelRotation, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)) / (this.valuesCount - (this.offsetGridLines ? 0 : 1)), i = e * t + this.xScalePaddingLeft;
            return this.offsetGridLines && (i += e / 2), Math.round(i);
        },
        update: function(t) {
            n.extend(this, t), this.fit();
        },
        draw: function() {
            var t = this.ctx, e = (this.endPoint - this.startPoint) / this.steps, i = Math.round(this.xScalePaddingLeft);
            this.display && (t.fillStyle = this.textColor, t.font = this.font, s(this.yLabels, function(s, o) {
                var a = this.endPoint - e * o, r = Math.round(a), l = this.showHorizontalLines;
                t.textAlign = "right", t.textBaseline = "middle", this.showLabels && t.fillText(s, i - 10, a), 
                0 !== o || l || (l = !0), l && t.beginPath(), o > 0 ? (t.lineWidth = this.gridLineWidth, 
                t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), 
                r += n.aliasPixel(t.lineWidth), l && (t.moveTo(i, r), t.lineTo(this.width, r), t.stroke(), 
                t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), 
                t.moveTo(i - 5, r), t.lineTo(i, r), t.stroke(), t.closePath();
            }, this), s(this.xLabels, function(e, i) {
                var n = this.calculateX(i) + b(this.lineWidth), s = this.calculateX(i - (this.offsetGridLines ? .5 : 0)) + b(this.lineWidth), o = this.xLabelRotation > 0, a = this.showVerticalLines;
                0 !== i || a || (a = !0), a && t.beginPath(), i > 0 ? (t.lineWidth = this.gridLineWidth, 
                t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), 
                a && (t.moveTo(s, this.endPoint), t.lineTo(s, this.startPoint - 3), t.stroke(), 
                t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), 
                t.moveTo(s, this.endPoint), t.lineTo(s, this.endPoint + 5), t.stroke(), t.closePath(), 
                t.save(), t.translate(n, o ? this.endPoint + 12 : this.endPoint + 8), t.rotate(-1 * y(this.xLabelRotation)), 
                t.font = this.font, t.textAlign = o ? "right" : "center", t.textBaseline = o ? "middle" : "top", 
                t.fillText(e, 0, 0), t.restore();
            }, this));
        }
    }), i.RadialScale = i.Element.extend({
        initialize: function() {
            this.size = g([ this.height, this.width ]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2;
        },
        calculateCenterOffset: function(t) {
            var e = this.drawingArea / (this.max - this.min);
            return (t - this.min) * e;
        },
        update: function() {
            this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), 
            this.buildYLabels();
        },
        buildYLabels: function() {
            this.yLabels = [];
            for (var t = v(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(x(this.templateString, {
                value: (this.min + e * this.stepValue).toFixed(t)
            }));
        },
        getCircumference: function() {
            return 2 * Math.PI / this.valuesCount;
        },
        setScaleSize: function() {
            var t, e, i, n, s, o, a, r, l, u, h, c, d = g([ this.height / 2 - this.pointLabelFontSize - 5, this.width / 2 ]), p = this.width, m = 0;
            for (this.ctx.font = I(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), 
            e = 0; e < this.valuesCount; e++) t = this.getPointPosition(e, d), i = this.ctx.measureText(x(this.templateString, {
                value: this.labels[e]
            })).width + 5, 0 === e || e === this.valuesCount / 2 ? (n = i / 2, t.x + n > p && (p = t.x + n, 
            s = e), t.x - n < m && (m = t.x - n, a = e)) : e < this.valuesCount / 2 ? t.x + i > p && (p = t.x + i, 
            s = e) : e > this.valuesCount / 2 && t.x - i < m && (m = t.x - i, a = e);
            l = m, u = Math.ceil(p - this.width), o = this.getIndexAngle(s), r = this.getIndexAngle(a), 
            h = u / Math.sin(o + Math.PI / 2), c = l / Math.sin(r + Math.PI / 2), h = f(h) ? h : 0, 
            c = f(c) ? c : 0, this.drawingArea = d - (c + h) / 2, this.setCenterPoint(c, h);
        },
        setCenterPoint: function(t, e) {
            var i = this.width - e - this.drawingArea, n = t + this.drawingArea;
            this.xCenter = (n + i) / 2, this.yCenter = this.height / 2;
        },
        getIndexAngle: function(t) {
            return t * (2 * Math.PI / this.valuesCount) - Math.PI / 2;
        },
        getPointPosition: function(t, e) {
            var i = this.getIndexAngle(t);
            return {
                x: Math.cos(i) * e + this.xCenter,
                y: Math.sin(i) * e + this.yCenter
            };
        },
        draw: function() {
            if (this.display) {
                var t = this.ctx;
                if (s(this.yLabels, function(e, i) {
                    if (i > 0) {
                        var n, s = i * (this.drawingArea / this.steps), o = this.yCenter - s;
                        if (this.lineWidth > 0) if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, 
                        this.lineArc) t.beginPath(), t.arc(this.xCenter, this.yCenter, s, 0, 2 * Math.PI), 
                        t.closePath(), t.stroke(); else {
                            t.beginPath();
                            for (var a = 0; a < this.valuesCount; a++) n = this.getPointPosition(a, this.calculateCenterOffset(this.min + i * this.stepValue)), 
                            0 === a ? t.moveTo(n.x, n.y) : t.lineTo(n.x, n.y);
                            t.closePath(), t.stroke();
                        }
                        if (this.showLabels) {
                            if (t.font = I(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                var r = t.measureText(e).width;
                                t.fillStyle = this.backdropColor, t.fillRect(this.xCenter - r / 2 - this.backdropPaddingX, o - this.fontSize / 2 - this.backdropPaddingY, r + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY);
                            }
                            t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, 
                            t.fillText(e, this.xCenter, o);
                        }
                    }
                }, this), !this.lineArc) {
                    t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;
                    for (var e = this.valuesCount - 1; e >= 0; e--) {
                        if (this.angleLineWidth > 0) {
                            var i = this.getPointPosition(e, this.calculateCenterOffset(this.max));
                            t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(i.x, i.y), t.stroke(), 
                            t.closePath();
                        }
                        var n = this.getPointPosition(e, this.calculateCenterOffset(this.max) + 5);
                        t.font = I(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), 
                        t.fillStyle = this.pointLabelFontColor;
                        var o = this.labels.length, a = this.labels.length / 2, r = a / 2, l = r > e || e > o - r, u = e === r || e === o - r;
                        t.textAlign = 0 === e ? "center" : e === a ? "center" : a > e ? "left" : "right", 
                        t.textBaseline = u ? "middle" : l ? "bottom" : "top", t.fillText(this.labels[e], n.x, n.y);
                    }
                }
            }
        }
    }), n.addEvent(window, "resize", function() {
        var t;
        return function() {
            clearTimeout(t), t = setTimeout(function() {
                s(i.instances, function(t) {
                    t.options.responsive && t.resize(t.render, !0);
                });
            }, 50);
        };
    }()), p ? define(function() {
        return i;
    }) : "object" == typeof module && module.exports && (module.exports = i), t.Chart = i, 
    i.noConflict = function() {
        return t.Chart = e, i;
    };
}).call(this), function() {
    "use strict";
    var t = this.Chart, e = t.helpers, i = {
        scaleBeginAtZero: !0,
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !0,
        barShowStroke: !0,
        barStrokeWidth: 2,
        barValueSpacing: 5,
        barDatasetSpacing: 1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    };
    t.Type.extend({
        name: "Bar",
        defaults: i,
        initialize: function(i) {
            var n = this.options;
            this.ScaleClass = t.Scale.extend({
                offsetGridLines: !0,
                calculateBarX: function(t, e, i) {
                    var s = this.calculateBaseWidth(), o = this.calculateX(i) - s / 2, a = this.calculateBarWidth(t);
                    return o + a * e + e * n.barDatasetSpacing + a / 2;
                },
                calculateBaseWidth: function() {
                    return this.calculateX(1) - this.calculateX(0) - 2 * n.barValueSpacing;
                },
                calculateBarWidth: function(t) {
                    return (this.calculateBaseWidth() - (t - 1) * n.barDatasetSpacing) / t;
                }
            }), this.datasets = [], this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
                var i = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
                this.eachBars(function(t) {
                    t.restore([ "fillColor", "strokeColor" ]);
                }), e.each(i, function(t) {
                    t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke;
                }), this.showTooltip(i);
            }), this.BarClass = t.Rectangle.extend({
                strokeWidth: this.options.barStrokeWidth,
                showStroke: this.options.barShowStroke,
                ctx: this.chart.ctx
            }), e.each(i.datasets, function(t) {
                var n = {
                    label: t.label || null,
                    fillColor: t.fillColor,
                    strokeColor: t.strokeColor,
                    bars: []
                };
                this.datasets.push(n), e.each(t.data, function(e, s) {
                    n.bars.push(new this.BarClass({
                        value: e,
                        label: i.labels[s],
                        datasetLabel: t.label,
                        strokeColor: t.strokeColor,
                        fillColor: t.fillColor,
                        highlightFill: t.highlightFill || t.fillColor,
                        highlightStroke: t.highlightStroke || t.strokeColor
                    }));
                }, this);
            }, this), this.buildScale(i.labels), this.BarClass.prototype.base = this.scale.endPoint, 
            this.eachBars(function(t, i, n) {
                e.extend(t, {
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    x: this.scale.calculateBarX(this.datasets.length, n, i),
                    y: this.scale.endPoint
                }), t.save();
            }, this), this.render();
        },
        update: function() {
            this.scale.update(), e.each(this.activeElements, function(t) {
                t.restore([ "fillColor", "strokeColor" ]);
            }), this.eachBars(function(t) {
                t.save();
            }), this.render();
        },
        eachBars: function(t) {
            e.each(this.datasets, function(i, n) {
                e.each(i.bars, t, this, n);
            }, this);
        },
        getBarsAtEvent: function(t) {
            for (var i, n = [], s = e.getRelativePosition(t), o = function(t) {
                n.push(t.bars[i]);
            }, a = 0; a < this.datasets.length; a++) for (i = 0; i < this.datasets[a].bars.length; i++) if (this.datasets[a].bars[i].inRange(s.x, s.y)) return e.each(this.datasets, o), 
            n;
            return n;
        },
        buildScale: function(t) {
            var i = this, n = function() {
                var t = [];
                return i.eachBars(function(e) {
                    t.push(e.value);
                }), t;
            }, s = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: t.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function(t) {
                    var i = e.calculateScaleRange(n(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                    e.extend(this, i);
                },
                xLabels: t,
                font: e.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                showHorizontalLines: this.options.scaleShowHorizontalLines,
                showVerticalLines: this.options.scaleShowVerticalLines,
                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale
            };
            this.options.scaleOverride && e.extend(s, {
                calculateYRange: e.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            }), this.scale = new this.ScaleClass(s);
        },
        addData: function(t, i) {
            e.each(t, function(t, e) {
                this.datasets[e].bars.push(new this.BarClass({
                    value: t,
                    label: i,
                    x: this.scale.calculateBarX(this.datasets.length, e, this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    base: this.scale.endPoint,
                    strokeColor: this.datasets[e].strokeColor,
                    fillColor: this.datasets[e].fillColor
                }));
            }, this), this.scale.addXLabel(i), this.update();
        },
        removeData: function() {
            this.scale.removeXLabel(), e.each(this.datasets, function(t) {
                t.bars.shift();
            }, this), this.update();
        },
        reflow: function() {
            e.extend(this.BarClass.prototype, {
                y: this.scale.endPoint,
                base: this.scale.endPoint
            });
            var t = e.extend({
                height: this.chart.height,
                width: this.chart.width
            });
            this.scale.update(t);
        },
        draw: function(t) {
            var i = t || 1;
            this.clear(), this.chart.ctx, this.scale.draw(i), e.each(this.datasets, function(t, n) {
                e.each(t.bars, function(t, e) {
                    t.hasValue() && (t.base = this.scale.endPoint, t.transition({
                        x: this.scale.calculateBarX(this.datasets.length, n, e),
                        y: this.scale.calculateY(t.value),
                        width: this.scale.calculateBarWidth(this.datasets.length)
                    }, i).draw());
                }, this);
            }, this);
        }
    });
}.call(this), function() {
    "use strict";
    var t = this.Chart, e = t.helpers, i = {
        segmentShowStroke: !0,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        percentageInnerCutout: 50,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: !0,
        animateScale: !1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
    };
    t.Type.extend({
        name: "Doughnut",
        defaults: i,
        initialize: function(i) {
            this.segments = [], this.outerRadius = (e.min([ this.chart.width, this.chart.height ]) - this.options.segmentStrokeWidth / 2) / 2, 
            this.SegmentArc = t.Arc.extend({
                ctx: this.chart.ctx,
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
                var i = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                e.each(this.segments, function(t) {
                    t.restore([ "fillColor" ]);
                }), e.each(i, function(t) {
                    t.fillColor = t.highlightColor;
                }), this.showTooltip(i);
            }), this.calculateTotal(i), e.each(i, function(t, e) {
                this.addData(t, e, !0);
            }, this), this.render();
        },
        getSegmentsAtEvent: function(t) {
            var i = [], n = e.getRelativePosition(t);
            return e.each(this.segments, function(t) {
                t.inRange(n.x, n.y) && i.push(t);
            }, this), i;
        },
        addData: function(t, e, i) {
            var n = e || this.segments.length;
            this.segments.splice(n, 0, new this.SegmentArc({
                value: t.value,
                outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                fillColor: t.color,
                highlightColor: t.highlight || t.color,
                showStroke: this.options.segmentShowStroke,
                strokeWidth: this.options.segmentStrokeWidth,
                strokeColor: this.options.segmentStrokeColor,
                startAngle: 1.5 * Math.PI,
                circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value),
                label: t.label
            })), i || (this.reflow(), this.update());
        },
        calculateCircumference: function(t) {
            return 2 * Math.PI * (t / this.total);
        },
        calculateTotal: function(t) {
            this.total = 0, e.each(t, function(t) {
                this.total += t.value;
            }, this);
        },
        update: function() {
            this.calculateTotal(this.segments), e.each(this.activeElements, function(t) {
                t.restore([ "fillColor" ]);
            }), e.each(this.segments, function(t) {
                t.save();
            }), this.render();
        },
        removeData: function(t) {
            var i = e.isNumber(t) ? t : this.segments.length - 1;
            this.segments.splice(i, 1), this.reflow(), this.update();
        },
        reflow: function() {
            e.extend(this.SegmentArc.prototype, {
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }), this.outerRadius = (e.min([ this.chart.width, this.chart.height ]) - this.options.segmentStrokeWidth / 2) / 2, 
            e.each(this.segments, function(t) {
                t.update({
                    outerRadius: this.outerRadius,
                    innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                });
            }, this);
        },
        draw: function(t) {
            var i = t || 1;
            this.clear(), e.each(this.segments, function(t, e) {
                t.transition({
                    circumference: this.calculateCircumference(t.value),
                    outerRadius: this.outerRadius,
                    innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                }, i), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === e && (t.startAngle = 1.5 * Math.PI), 
                e < this.segments.length - 1 && (this.segments[e + 1].startAngle = t.endAngle);
            }, this);
        }
    }), t.types.Doughnut.extend({
        name: "Pie",
        defaults: e.merge(i, {
            percentageInnerCutout: 0
        })
    });
}.call(this), function() {
    "use strict";
    var t = this.Chart, e = t.helpers, i = {
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !0,
        bezierCurve: !0,
        bezierCurveTension: .4,
        pointDot: !0,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: !0,
        datasetStrokeWidth: 2,
        datasetFill: !0,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    };
    t.Type.extend({
        name: "Line",
        defaults: i,
        initialize: function(i) {
            this.PointClass = t.Point.extend({
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx,
                inRange: function(t) {
                    return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2);
                }
            }), this.datasets = [], this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
                var i = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                this.eachPoints(function(t) {
                    t.restore([ "fillColor", "strokeColor" ]);
                }), e.each(i, function(t) {
                    t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke;
                }), this.showTooltip(i);
            }), e.each(i.datasets, function(t) {
                var n = {
                    label: t.label || null,
                    fillColor: t.fillColor,
                    strokeColor: t.strokeColor,
                    pointColor: t.pointColor,
                    pointStrokeColor: t.pointStrokeColor,
                    points: []
                };
                this.datasets.push(n), e.each(t.data, function(e, s) {
                    n.points.push(new this.PointClass({
                        value: e,
                        label: i.labels[s],
                        datasetLabel: t.label,
                        strokeColor: t.pointStrokeColor,
                        fillColor: t.pointColor,
                        highlightFill: t.pointHighlightFill || t.pointColor,
                        highlightStroke: t.pointHighlightStroke || t.pointStrokeColor
                    }));
                }, this), this.buildScale(i.labels), this.eachPoints(function(t, i) {
                    e.extend(t, {
                        x: this.scale.calculateX(i),
                        y: this.scale.endPoint
                    }), t.save();
                }, this);
            }, this), this.render();
        },
        update: function() {
            this.scale.update(), e.each(this.activeElements, function(t) {
                t.restore([ "fillColor", "strokeColor" ]);
            }), this.eachPoints(function(t) {
                t.save();
            }), this.render();
        },
        eachPoints: function(t) {
            e.each(this.datasets, function(i) {
                e.each(i.points, t, this);
            }, this);
        },
        getPointsAtEvent: function(t) {
            var i = [], n = e.getRelativePosition(t);
            return e.each(this.datasets, function(t) {
                e.each(t.points, function(t) {
                    t.inRange(n.x, n.y) && i.push(t);
                });
            }, this), i;
        },
        buildScale: function(i) {
            var n = this, s = function() {
                var t = [];
                return n.eachPoints(function(e) {
                    t.push(e.value);
                }), t;
            }, o = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: i.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function(t) {
                    var i = e.calculateScaleRange(s(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                    e.extend(this, i);
                },
                xLabels: i,
                font: e.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                showHorizontalLines: this.options.scaleShowHorizontalLines,
                showVerticalLines: this.options.scaleShowVerticalLines,
                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale
            };
            this.options.scaleOverride && e.extend(o, {
                calculateYRange: e.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            }), this.scale = new t.Scale(o);
        },
        addData: function(t, i) {
            e.each(t, function(t, e) {
                this.datasets[e].points.push(new this.PointClass({
                    value: t,
                    label: i,
                    x: this.scale.calculateX(this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    strokeColor: this.datasets[e].pointStrokeColor,
                    fillColor: this.datasets[e].pointColor
                }));
            }, this), this.scale.addXLabel(i), this.update();
        },
        removeData: function() {
            this.scale.removeXLabel(), e.each(this.datasets, function(t) {
                t.points.shift();
            }, this), this.update();
        },
        reflow: function() {
            var t = e.extend({
                height: this.chart.height,
                width: this.chart.width
            });
            this.scale.update(t);
        },
        draw: function(t) {
            var i = t || 1;
            this.clear();
            var n = this.chart.ctx, s = function(t) {
                return null !== t.value;
            }, o = function(t, i, n) {
                return e.findNextWhere(i, s, n) || t;
            }, a = function(t, i, n) {
                return e.findPreviousWhere(i, s, n) || t;
            };
            this.scale.draw(i), e.each(this.datasets, function(t) {
                var r = e.where(t.points, s);
                e.each(t.points, function(t, e) {
                    t.hasValue() && t.transition({
                        y: this.scale.calculateY(t.value),
                        x: this.scale.calculateX(e)
                    }, i);
                }, this), this.options.bezierCurve && e.each(r, function(t, i) {
                    var n = i > 0 && i < r.length - 1 ? this.options.bezierCurveTension : 0;
                    t.controlPoints = e.splineCurve(a(t, r, i), t, o(t, r, i), n), t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint), 
                    t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint);
                }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, 
                n.beginPath(), e.each(r, function(t, e) {
                    if (0 === e) n.moveTo(t.x, t.y); else if (this.options.bezierCurve) {
                        var i = a(t, r, e);
                        n.bezierCurveTo(i.controlPoints.outer.x, i.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y);
                    } else n.lineTo(t.x, t.y);
                }, this), n.stroke(), this.options.datasetFill && r.length > 0 && (n.lineTo(r[r.length - 1].x, this.scale.endPoint), 
                n.lineTo(r[0].x, this.scale.endPoint), n.fillStyle = t.fillColor, n.closePath(), 
                n.fill()), e.each(r, function(t) {
                    t.draw();
                });
            }, this);
        }
    });
}.call(this), function() {
    "use strict";
    var t = this.Chart, e = t.helpers, i = {
        scaleShowLabelBackdrop: !0,
        scaleBackdropColor: "rgba(255,255,255,0.75)",
        scaleBeginAtZero: !0,
        scaleBackdropPaddingY: 2,
        scaleBackdropPaddingX: 2,
        scaleShowLine: !0,
        segmentShowStroke: !0,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: !0,
        animateScale: !1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
    };
    t.Type.extend({
        name: "PolarArea",
        defaults: i,
        initialize: function(i) {
            this.segments = [], this.SegmentArc = t.Arc.extend({
                showStroke: this.options.segmentShowStroke,
                strokeWidth: this.options.segmentStrokeWidth,
                strokeColor: this.options.segmentStrokeColor,
                ctx: this.chart.ctx,
                innerRadius: 0,
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }), this.scale = new t.RadialScale({
                display: this.options.showScale,
                fontStyle: this.options.scaleFontStyle,
                fontSize: this.options.scaleFontSize,
                fontFamily: this.options.scaleFontFamily,
                fontColor: this.options.scaleFontColor,
                showLabels: this.options.scaleShowLabels,
                showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                backdropColor: this.options.scaleBackdropColor,
                backdropPaddingY: this.options.scaleBackdropPaddingY,
                backdropPaddingX: this.options.scaleBackdropPaddingX,
                lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                lineColor: this.options.scaleLineColor,
                lineArc: !0,
                width: this.chart.width,
                height: this.chart.height,
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2,
                ctx: this.chart.ctx,
                templateString: this.options.scaleLabel,
                valuesCount: i.length
            }), this.updateScaleRange(i), this.scale.update(), e.each(i, function(t, e) {
                this.addData(t, e, !0);
            }, this), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
                var i = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                e.each(this.segments, function(t) {
                    t.restore([ "fillColor" ]);
                }), e.each(i, function(t) {
                    t.fillColor = t.highlightColor;
                }), this.showTooltip(i);
            }), this.render();
        },
        getSegmentsAtEvent: function(t) {
            var i = [], n = e.getRelativePosition(t);
            return e.each(this.segments, function(t) {
                t.inRange(n.x, n.y) && i.push(t);
            }, this), i;
        },
        addData: function(t, e, i) {
            var n = e || this.segments.length;
            this.segments.splice(n, 0, new this.SegmentArc({
                fillColor: t.color,
                highlightColor: t.highlight || t.color,
                label: t.label,
                value: t.value,
                outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value),
                circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                startAngle: 1.5 * Math.PI
            })), i || (this.reflow(), this.update());
        },
        removeData: function(t) {
            var i = e.isNumber(t) ? t : this.segments.length - 1;
            this.segments.splice(i, 1), this.reflow(), this.update();
        },
        calculateTotal: function(t) {
            this.total = 0, e.each(t, function(t) {
                this.total += t.value;
            }, this), this.scale.valuesCount = this.segments.length;
        },
        updateScaleRange: function(t) {
            var i = [];
            e.each(t, function(t) {
                i.push(t.value);
            });
            var n = this.options.scaleOverride ? {
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            } : e.calculateScaleRange(i, e.min([ this.chart.width, this.chart.height ]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
            e.extend(this.scale, n, {
                size: e.min([ this.chart.width, this.chart.height ]),
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            });
        },
        update: function() {
            this.calculateTotal(this.segments), e.each(this.segments, function(t) {
                t.save();
            }), this.render();
        },
        reflow: function() {
            e.extend(this.SegmentArc.prototype, {
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }), this.updateScaleRange(this.segments), this.scale.update(), e.extend(this.scale, {
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            }), e.each(this.segments, function(t) {
                t.update({
                    outerRadius: this.scale.calculateCenterOffset(t.value)
                });
            }, this);
        },
        draw: function(t) {
            var i = t || 1;
            this.clear(), e.each(this.segments, function(t, e) {
                t.transition({
                    circumference: this.scale.getCircumference(),
                    outerRadius: this.scale.calculateCenterOffset(t.value)
                }, i), t.endAngle = t.startAngle + t.circumference, 0 === e && (t.startAngle = 1.5 * Math.PI), 
                e < this.segments.length - 1 && (this.segments[e + 1].startAngle = t.endAngle), 
                t.draw();
            }, this), this.scale.draw();
        }
    });
}.call(this), function() {
    "use strict";
    var t = this.Chart, e = t.helpers;
    t.Type.extend({
        name: "Radar",
        defaults: {
            scaleShowLine: !0,
            angleShowLineOut: !0,
            scaleShowLabels: !1,
            scaleBeginAtZero: !0,
            angleLineColor: "rgba(0,0,0,.1)",
            angleLineWidth: 1,
            pointLabelFontFamily: "'Arial'",
            pointLabelFontStyle: "normal",
            pointLabelFontSize: 10,
            pointLabelFontColor: "#666",
            pointDot: !0,
            pointDotRadius: 3,
            pointDotStrokeWidth: 1,
            pointHitDetectionRadius: 20,
            datasetStroke: !0,
            datasetStrokeWidth: 2,
            datasetFill: !0,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
        },
        initialize: function(i) {
            this.PointClass = t.Point.extend({
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx
            }), this.datasets = [], this.buildScale(i), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
                var i = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                this.eachPoints(function(t) {
                    t.restore([ "fillColor", "strokeColor" ]);
                }), e.each(i, function(t) {
                    t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke;
                }), this.showTooltip(i);
            }), e.each(i.datasets, function(t) {
                var n = {
                    label: t.label || null,
                    fillColor: t.fillColor,
                    strokeColor: t.strokeColor,
                    pointColor: t.pointColor,
                    pointStrokeColor: t.pointStrokeColor,
                    points: []
                };
                this.datasets.push(n), e.each(t.data, function(e, s) {
                    var o;
                    this.scale.animation || (o = this.scale.getPointPosition(s, this.scale.calculateCenterOffset(e))), 
                    n.points.push(new this.PointClass({
                        value: e,
                        label: i.labels[s],
                        datasetLabel: t.label,
                        x: this.options.animation ? this.scale.xCenter : o.x,
                        y: this.options.animation ? this.scale.yCenter : o.y,
                        strokeColor: t.pointStrokeColor,
                        fillColor: t.pointColor,
                        highlightFill: t.pointHighlightFill || t.pointColor,
                        highlightStroke: t.pointHighlightStroke || t.pointStrokeColor
                    }));
                }, this);
            }, this), this.render();
        },
        eachPoints: function(t) {
            e.each(this.datasets, function(i) {
                e.each(i.points, t, this);
            }, this);
        },
        getPointsAtEvent: function(t) {
            var i = e.getRelativePosition(t), n = e.getAngleFromPoint({
                x: this.scale.xCenter,
                y: this.scale.yCenter
            }, i), s = 2 * Math.PI / this.scale.valuesCount, o = Math.round((n.angle - 1.5 * Math.PI) / s), a = [];
            return (o >= this.scale.valuesCount || 0 > o) && (o = 0), n.distance <= this.scale.drawingArea && e.each(this.datasets, function(t) {
                a.push(t.points[o]);
            }), a;
        },
        buildScale: function(e) {
            this.scale = new t.RadialScale({
                display: this.options.showScale,
                fontStyle: this.options.scaleFontStyle,
                fontSize: this.options.scaleFontSize,
                fontFamily: this.options.scaleFontFamily,
                fontColor: this.options.scaleFontColor,
                showLabels: this.options.scaleShowLabels,
                showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                backdropColor: this.options.scaleBackdropColor,
                backdropPaddingY: this.options.scaleBackdropPaddingY,
                backdropPaddingX: this.options.scaleBackdropPaddingX,
                lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                lineColor: this.options.scaleLineColor,
                angleLineColor: this.options.angleLineColor,
                angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                pointLabelFontColor: this.options.pointLabelFontColor,
                pointLabelFontSize: this.options.pointLabelFontSize,
                pointLabelFontFamily: this.options.pointLabelFontFamily,
                pointLabelFontStyle: this.options.pointLabelFontStyle,
                height: this.chart.height,
                width: this.chart.width,
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2,
                ctx: this.chart.ctx,
                templateString: this.options.scaleLabel,
                labels: e.labels,
                valuesCount: e.datasets[0].data.length
            }), this.scale.setScaleSize(), this.updateScaleRange(e.datasets), this.scale.buildYLabels();
        },
        updateScaleRange: function(t) {
            var i = function() {
                var i = [];
                return e.each(t, function(t) {
                    t.data ? i = i.concat(t.data) : e.each(t.points, function(t) {
                        i.push(t.value);
                    });
                }), i;
            }(), n = this.options.scaleOverride ? {
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            } : e.calculateScaleRange(i, e.min([ this.chart.width, this.chart.height ]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
            e.extend(this.scale, n);
        },
        addData: function(t, i) {
            this.scale.valuesCount++, e.each(t, function(t, e) {
                var n = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));
                this.datasets[e].points.push(new this.PointClass({
                    value: t,
                    label: i,
                    x: n.x,
                    y: n.y,
                    strokeColor: this.datasets[e].pointStrokeColor,
                    fillColor: this.datasets[e].pointColor
                }));
            }, this), this.scale.labels.push(i), this.reflow(), this.update();
        },
        removeData: function() {
            this.scale.valuesCount--, this.scale.labels.shift(), e.each(this.datasets, function(t) {
                t.points.shift();
            }, this), this.reflow(), this.update();
        },
        update: function() {
            this.eachPoints(function(t) {
                t.save();
            }), this.reflow(), this.render();
        },
        reflow: function() {
            e.extend(this.scale, {
                width: this.chart.width,
                height: this.chart.height,
                size: e.min([ this.chart.width, this.chart.height ]),
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels();
        },
        draw: function(t) {
            var i = t || 1, n = this.chart.ctx;
            this.clear(), this.scale.draw(), e.each(this.datasets, function(t) {
                e.each(t.points, function(t, e) {
                    t.hasValue() && t.transition(this.scale.getPointPosition(e, this.scale.calculateCenterOffset(t.value)), i);
                }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, 
                n.beginPath(), e.each(t.points, function(t, e) {
                    0 === e ? n.moveTo(t.x, t.y) : n.lineTo(t.x, t.y);
                }, this), n.closePath(), n.stroke(), n.fillStyle = t.fillColor, n.fill(), e.each(t.points, function(t) {
                    t.hasValue() && t.draw();
                });
            }, this);
        }
    });
}.call(this), function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t);
    } : e(t);
}("undefined" != typeof window ? window : this, function(t, e) {
    "use strict";
    function i(t, e) {
        var i = (e = e || et).createElement("script");
        i.text = t, e.head.appendChild(i).parentNode.removeChild(i);
    }
    function n(t) {
        var e = !!t && "length" in t && t.length, i = pt.type(t);
        return "function" !== i && !pt.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
    }
    function s(t, e, i) {
        return pt.isFunction(e) ? pt.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i;
        }) : e.nodeType ? pt.grep(t, function(t) {
            return t === e !== i;
        }) : "string" != typeof e ? pt.grep(t, function(t) {
            return at.call(e, t) > -1 !== i;
        }) : Ct.test(e) ? pt.filter(e, t, i) : (e = pt.filter(e, t), pt.grep(t, function(t) {
            return at.call(e, t) > -1 !== i && 1 === t.nodeType;
        }));
    }
    function o(t, e) {
        for (;(t = t[e]) && 1 !== t.nodeType; ) ;
        return t;
    }
    function a(t) {
        var e = {};
        return pt.each(t.match(Et) || [], function(t, i) {
            e[i] = !0;
        }), e;
    }
    function r(t) {
        return t;
    }
    function l(t) {
        throw t;
    }
    function u(t, e, i) {
        var n;
        try {
            t && pt.isFunction(n = t.promise) ? n.call(t).done(e).fail(i) : t && pt.isFunction(n = t.then) ? n.call(t, e, i) : e.call(void 0, t);
        } catch (t) {
            i.call(void 0, t);
        }
    }
    function h() {
        et.removeEventListener("DOMContentLoaded", h), t.removeEventListener("load", h), 
        pt.ready();
    }
    function c() {
        this.expando = pt.expando + c.uid++;
    }
    function d(t) {
        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Lt.test(t) ? JSON.parse(t) : t);
    }
    function p(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType) if (n = "data-" + e.replace(Ht, "-$&").toLowerCase(), 
        "string" == typeof (i = t.getAttribute(n))) {
            try {
                i = d(i);
            } catch (t) {}
            Nt.set(t, e, i);
        } else i = void 0;
        return i;
    }
    function f(t, e, i, n) {
        var s, o = 1, a = 20, r = n ? function() {
            return n.cur();
        } : function() {
            return pt.css(t, e, "");
        }, l = r(), u = i && i[3] || (pt.cssNumber[e] ? "" : "px"), h = (pt.cssNumber[e] || "px" !== u && +l) && zt.exec(pt.css(t, e));
        if (h && h[3] !== u) {
            u = u || h[3], i = i || [], h = +l || 1;
            do {
                h /= o = o || ".5", pt.style(t, e, h + u);
            } while (o !== (o = r() / l) && 1 !== o && --a);
        }
        return i && (h = +h || +l || 0, s = i[1] ? h + (i[1] + 1) * i[2] : +i[2], n && (n.unit = u, 
        n.start = h, n.end = s)), s;
    }
    function m(t) {
        var e, i = t.ownerDocument, n = t.nodeName, s = Bt[n];
        return s || (e = i.body.appendChild(i.createElement(n)), s = pt.css(e, "display"), 
        e.parentNode.removeChild(e), "none" === s && (s = "block"), Bt[n] = s, s);
    }
    function g(t, e) {
        for (var i, n, s = [], o = 0, a = t.length; o < a; o++) (n = t[o]).style && (i = n.style.display, 
        e ? ("none" === i && (s[o] = Mt.get(n, "display") || null, s[o] || (n.style.display = "")), 
        "" === n.style.display && Wt(n) && (s[o] = m(n))) : "none" !== i && (s[o] = "none", 
        Mt.set(n, "display", i)));
        for (o = 0; o < a; o++) null != s[o] && (t[o].style.display = s[o]);
        return t;
    }
    function v(t, e) {
        var i;
        return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], 
        void 0 === e || e && pt.nodeName(t, e) ? pt.merge([ t ], i) : i;
    }
    function y(t, e) {
        for (var i = 0, n = t.length; i < n; i++) Mt.set(t[i], "globalEval", !e || Mt.get(e[i], "globalEval"));
    }
    function b(t, e, i, n, s) {
        for (var o, a, r, l, u, h, c = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++) if ((o = t[p]) || 0 === o) if ("object" === pt.type(o)) pt.merge(d, o.nodeType ? [ o ] : o); else if (Ut.test(o)) {
            for (a = a || c.appendChild(e.createElement("div")), r = (qt.exec(o) || [ "", "" ])[1].toLowerCase(), 
            l = Vt[r] || Vt._default, a.innerHTML = l[1] + pt.htmlPrefilter(o) + l[2], h = l[0]; h--; ) a = a.lastChild;
            pt.merge(d, a.childNodes), (a = c.firstChild).textContent = "";
        } else d.push(e.createTextNode(o));
        for (c.textContent = "", p = 0; o = d[p++]; ) if (n && pt.inArray(o, n) > -1) s && s.push(o); else if (u = pt.contains(o.ownerDocument, o), 
        a = v(c.appendChild(o), "script"), u && y(a), i) for (h = 0; o = a[h++]; ) Yt.test(o.type || "") && i.push(o);
        return c;
    }
    function _() {
        return !0;
    }
    function x() {
        return !1;
    }
    function w() {
        try {
            return et.activeElement;
        } catch (t) {}
    }
    function C(t, e, i, n, s, o) {
        var a, r;
        if ("object" == typeof e) {
            "string" != typeof i && (n = n || i, i = void 0);
            for (r in e) C(t, r, i, n, e[r], o);
            return t;
        }
        if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, 
        n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = x; else if (!s) return t;
        return 1 === o && (a = s, (s = function(t) {
            return pt().off(t), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = pt.guid++)), t.each(function() {
            pt.event.add(this, e, s, n, i);
        });
    }
    function k(t, e) {
        return pt.nodeName(t, "table") && pt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t;
    }
    function D(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t;
    }
    function T(t) {
        var e = ee.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t;
    }
    function S(t, e) {
        var i, n, s, o, a, r, l, u;
        if (1 === e.nodeType) {
            if (Mt.hasData(t) && (o = Mt.access(t), a = Mt.set(e, o), u = o.events)) {
                delete a.handle, a.events = {};
                for (s in u) for (i = 0, n = u[s].length; i < n; i++) pt.event.add(e, s, u[s][i]);
            }
            Nt.hasData(t) && (r = Nt.access(t), l = pt.extend({}, r), Nt.set(e, l));
        }
    }
    function E(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && $t.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue);
    }
    function P(t, e, n, s) {
        e = st.apply([], e);
        var o, a, r, l, u, h, c = 0, d = t.length, p = d - 1, f = e[0], m = pt.isFunction(f);
        if (m || d > 1 && "string" == typeof f && !dt.checkClone && te.test(f)) return t.each(function(i) {
            var o = t.eq(i);
            m && (e[0] = f.call(this, i, o.html())), P(o, e, n, s);
        });
        if (d && (o = b(e, t[0].ownerDocument, !1, t, s), a = o.firstChild, 1 === o.childNodes.length && (o = a), 
        a || s)) {
            for (l = (r = pt.map(v(o, "script"), D)).length; c < d; c++) u = o, c !== p && (u = pt.clone(u, !0, !0), 
            l && pt.merge(r, v(u, "script"))), n.call(t[c], u, c);
            if (l) for (h = r[r.length - 1].ownerDocument, pt.map(r, T), c = 0; c < l; c++) u = r[c], 
            Yt.test(u.type || "") && !Mt.access(u, "globalEval") && pt.contains(h, u) && (u.src ? pt._evalUrl && pt._evalUrl(u.src) : i(u.textContent.replace(ie, ""), h));
        }
        return t;
    }
    function A(t, e, i) {
        for (var n, s = e ? pt.filter(e, t) : t, o = 0; null != (n = s[o]); o++) i || 1 !== n.nodeType || pt.cleanData(v(n)), 
        n.parentNode && (i && pt.contains(n.ownerDocument, n) && y(v(n, "script")), n.parentNode.removeChild(n));
        return t;
    }
    function I(t, e, i) {
        var n, s, o, a, r = t.style;
        return (i = i || oe(t)) && ("" !== (a = i.getPropertyValue(e) || i[e]) || pt.contains(t.ownerDocument, t) || (a = pt.style(t, e)), 
        !dt.pixelMarginRight() && se.test(a) && ne.test(e) && (n = r.width, s = r.minWidth, 
        o = r.maxWidth, r.minWidth = r.maxWidth = r.width = a, a = i.width, r.width = n, 
        r.minWidth = s, r.maxWidth = o)), void 0 !== a ? a + "" : a;
    }
    function F(t, e) {
        return {
            get: function() {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get;
            }
        };
    }
    function M(t) {
        if (t in he) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), i = ue.length; i--; ) if ((t = ue[i] + e) in he) return t;
    }
    function N(t, e, i) {
        var n = zt.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e;
    }
    function L(t, e, i, n, s) {
        var o, a = 0;
        for (o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0; o < 4; o += 2) "margin" === i && (a += pt.css(t, i + Rt[o], !0, s)), 
        n ? ("content" === i && (a -= pt.css(t, "padding" + Rt[o], !0, s)), "margin" !== i && (a -= pt.css(t, "border" + Rt[o] + "Width", !0, s))) : (a += pt.css(t, "padding" + Rt[o], !0, s), 
        "padding" !== i && (a += pt.css(t, "border" + Rt[o] + "Width", !0, s)));
        return a;
    }
    function H(t, e, i) {
        var n, s = !0, o = oe(t), a = "border-box" === pt.css(t, "boxSizing", !1, o);
        if (t.getClientRects().length && (n = t.getBoundingClientRect()[e]), n <= 0 || null == n) {
            if (((n = I(t, e, o)) < 0 || null == n) && (n = t.style[e]), se.test(n)) return n;
            s = a && (dt.boxSizingReliable() || n === t.style[e]), n = parseFloat(n) || 0;
        }
        return n + L(t, e, i || (a ? "border" : "content"), s, o) + "px";
    }
    function O(t, e, i, n, s) {
        return new O.prototype.init(t, e, i, n, s);
    }
    function z() {
        de && (t.requestAnimationFrame(z), pt.fx.tick());
    }
    function R() {
        return t.setTimeout(function() {
            ce = void 0;
        }), ce = pt.now();
    }
    function W(t, e) {
        var i, n = 0, s = {
            height: t
        };
        for (e = e ? 1 : 0; n < 4; n += 2 - e) s["margin" + (i = Rt[n])] = s["padding" + i] = t;
        return e && (s.opacity = s.width = t), s;
    }
    function j(t, e, i) {
        for (var n, s = (q.tweeners[e] || []).concat(q.tweeners["*"]), o = 0, a = s.length; o < a; o++) if (n = s[o].call(i, e, t)) return n;
    }
    function B(t, e, i) {
        var n, s, o, a, r, l, u, h, c = "width" in e || "height" in e, d = this, p = {}, f = t.style, m = t.nodeType && Wt(t), v = Mt.get(t, "fxshow");
        i.queue || (null == (a = pt._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, r = a.empty.fire, 
        a.empty.fire = function() {
            a.unqueued || r();
        }), a.unqueued++, d.always(function() {
            d.always(function() {
                a.unqueued--, pt.queue(t, "fx").length || a.empty.fire();
            });
        }));
        for (n in e) if (s = e[n], pe.test(s)) {
            if (delete e[n], o = o || "toggle" === s, s === (m ? "hide" : "show")) {
                if ("show" !== s || !v || void 0 === v[n]) continue;
                m = !0;
            }
            p[n] = v && v[n] || pt.style(t, n);
        }
        if ((l = !pt.isEmptyObject(e)) || !pt.isEmptyObject(p)) {
            c && 1 === t.nodeType && (i.overflow = [ f.overflow, f.overflowX, f.overflowY ], 
            null == (u = v && v.display) && (u = Mt.get(t, "display")), "none" === (h = pt.css(t, "display")) && (u ? h = u : (g([ t ], !0), 
            u = t.style.display || u, h = pt.css(t, "display"), g([ t ]))), ("inline" === h || "inline-block" === h && null != u) && "none" === pt.css(t, "float") && (l || (d.done(function() {
                f.display = u;
            }), null == u && (h = f.display, u = "none" === h ? "" : h)), f.display = "inline-block")), 
            i.overflow && (f.overflow = "hidden", d.always(function() {
                f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2];
            })), l = !1;
            for (n in p) l || (v ? "hidden" in v && (m = v.hidden) : v = Mt.access(t, "fxshow", {
                display: u
            }), o && (v.hidden = !m), m && g([ t ], !0), d.done(function() {
                m || g([ t ]), Mt.remove(t, "fxshow");
                for (n in p) pt.style(t, n, p[n]);
            })), l = j(m ? v[n] : 0, n, d), n in v || (v[n] = l.start, m && (l.end = l.start, 
            l.start = 0));
        }
    }
    function $(t, e) {
        var i, n, s, o, a;
        for (i in t) if (n = pt.camelCase(i), s = e[n], o = t[i], pt.isArray(o) && (s = o[1], 
        o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (a = pt.cssHooks[n]) && "expand" in a) {
            o = a.expand(o), delete t[n];
            for (i in o) i in t || (t[i] = o[i], e[i] = s);
        } else e[n] = s;
    }
    function q(t, e, i) {
        var n, s, o = 0, a = q.prefilters.length, r = pt.Deferred().always(function() {
            delete l.elem;
        }), l = function() {
            if (s) return !1;
            for (var e = ce || R(), i = Math.max(0, u.startTime + u.duration - e), n = 1 - (i / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(n);
            return r.notifyWith(t, [ u, n, i ]), n < 1 && a ? i : (r.resolveWith(t, [ u ]), 
            !1);
        }, u = r.promise({
            elem: t,
            props: pt.extend({}, e),
            opts: pt.extend(!0, {
                specialEasing: {},
                easing: pt.easing._default
            }, i),
            originalProperties: e,
            originalOptions: i,
            startTime: ce || R(),
            duration: i.duration,
            tweens: [],
            createTween: function(e, i) {
                var n = pt.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(n), n;
            },
            stop: function(e) {
                var i = 0, n = e ? u.tweens.length : 0;
                if (s) return this;
                for (s = !0; i < n; i++) u.tweens[i].run(1);
                return e ? (r.notifyWith(t, [ u, 1, 0 ]), r.resolveWith(t, [ u, e ])) : r.rejectWith(t, [ u, e ]), 
                this;
            }
        }), h = u.props;
        for ($(h, u.opts.specialEasing); o < a; o++) if (n = q.prefilters[o].call(u, t, h, u.opts)) return pt.isFunction(n.stop) && (pt._queueHooks(u.elem, u.opts.queue).stop = pt.proxy(n.stop, n)), 
        n;
        return pt.map(h, j, u), pt.isFunction(u.opts.start) && u.opts.start.call(t, u), 
        pt.fx.timer(pt.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
    }
    function Y(t) {
        return (t.match(Et) || []).join(" ");
    }
    function V(t) {
        return t.getAttribute && t.getAttribute("class") || "";
    }
    function U(t, e, i, n) {
        var s;
        if (pt.isArray(e)) pt.each(e, function(e, s) {
            i || ke.test(t) ? n(t, s) : U(t + "[" + ("object" == typeof s && null != s ? e : "") + "]", s, i, n);
        }); else if (i || "object" !== pt.type(e)) n(t, e); else for (s in e) U(t + "[" + s + "]", e[s], i, n);
    }
    function X(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0, o = e.toLowerCase().match(Et) || [];
            if (pt.isFunction(i)) for (;n = o[s++]; ) "+" === n[0] ? (n = n.slice(1) || "*", 
            (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i);
        };
    }
    function K(t, e, i, n) {
        function s(r) {
            var l;
            return o[r] = !0, pt.each(t[r] || [], function(t, r) {
                var u = r(e, i, n);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (e.dataTypes.unshift(u), 
                s(u), !1);
            }), l;
        }
        var o = {}, a = t === He;
        return s(e.dataTypes[0]) || !o["*"] && s("*");
    }
    function G(t, e) {
        var i, n, s = pt.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
        return n && pt.extend(!0, t, n), t;
    }
    function Q(t, e, i) {
        for (var n, s, o, a, r = t.contents, l = t.dataTypes; "*" === l[0]; ) l.shift(), 
        void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
        if (n) for (s in r) if (r[s] && r[s].test(n)) {
            l.unshift(s);
            break;
        }
        if (l[0] in i) o = l[0]; else {
            for (s in i) {
                if (!l[0] || t.converters[s + " " + l[0]]) {
                    o = s;
                    break;
                }
                a || (a = s);
            }
            o = o || a;
        }
        if (o) return o !== l[0] && l.unshift(o), i[o];
    }
    function Z(t, e, i, n) {
        var s, o, a, r, l, u = {}, h = t.dataTypes.slice();
        if (h[1]) for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
        for (o = h.shift(); o; ) if (t.responseFields[o] && (i[t.responseFields[o]] = e), 
        !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = h.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
            if (!(a = u[l + " " + o] || u["* " + o])) for (s in u) if ((r = s.split(" "))[1] === o && (a = u[l + " " + r[0]] || u["* " + r[0]])) {
                !0 === a ? a = u[s] : !0 !== u[s] && (o = r[0], h.unshift(r[1]));
                break;
            }
            if (!0 !== a) if (a && t.throws) e = a(e); else try {
                e = a(e);
            } catch (t) {
                return {
                    state: "parsererror",
                    error: a ? t : "No conversion from " + l + " to " + o
                };
            }
        }
        return {
            state: "success",
            data: e
        };
    }
    function J(t) {
        return pt.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
    }
    var tt = [], et = t.document, it = Object.getPrototypeOf, nt = tt.slice, st = tt.concat, ot = tt.push, at = tt.indexOf, rt = {}, lt = rt.toString, ut = rt.hasOwnProperty, ht = ut.toString, ct = ht.call(Object), dt = {}, pt = function(t, e) {
        return new pt.fn.init(t, e);
    }, ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, mt = /^-ms-/, gt = /-([a-z])/g, vt = function(t, e) {
        return e.toUpperCase();
    };
    pt.fn = pt.prototype = {
        jquery: "3.1.1",
        constructor: pt,
        length: 0,
        toArray: function() {
            return nt.call(this);
        },
        get: function(t) {
            return null == t ? nt.call(this) : t < 0 ? this[t + this.length] : this[t];
        },
        pushStack: function(t) {
            var e = pt.merge(this.constructor(), t);
            return e.prevObject = this, e;
        },
        each: function(t) {
            return pt.each(this, t);
        },
        map: function(t) {
            return this.pushStack(pt.map(this, function(e, i) {
                return t.call(e, i, e);
            }));
        },
        slice: function() {
            return this.pushStack(nt.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(t) {
            var e = this.length, i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [ this[i] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: ot,
        sort: tt.sort,
        splice: tt.splice
    }, pt.extend = pt.fn.extend = function() {
        var t, e, i, n, s, o, a = arguments[0] || {}, r = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[r] || {}, r++), "object" == typeof a || pt.isFunction(a) || (a = {}), 
        r === l && (a = this, r--); r < l; r++) if (null != (t = arguments[r])) for (e in t) i = a[e], 
        a !== (n = t[e]) && (u && n && (pt.isPlainObject(n) || (s = pt.isArray(n))) ? (s ? (s = !1, 
        o = i && pt.isArray(i) ? i : []) : o = i && pt.isPlainObject(i) ? i : {}, a[e] = pt.extend(u, o, n)) : void 0 !== n && (a[e] = n));
        return a;
    }, pt.extend({
        expando: "jQuery" + ("3.1.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t);
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === pt.type(t);
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window;
        },
        isNumeric: function(t) {
            var e = pt.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
        },
        isPlainObject: function(t) {
            var e, i;
            return !(!t || "[object Object]" !== lt.call(t)) && (!(e = it(t)) || "function" == typeof (i = ut.call(e, "constructor") && e.constructor) && ht.call(i) === ct);
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0;
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? rt[lt.call(t)] || "object" : typeof t;
        },
        globalEval: function(t) {
            i(t);
        },
        camelCase: function(t) {
            return t.replace(mt, "ms-").replace(gt, vt);
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        },
        each: function(t, e) {
            var i, s = 0;
            if (n(t)) for (i = t.length; s < i && !1 !== e.call(t[s], s, t[s]); s++) ; else for (s in t) if (!1 === e.call(t[s], s, t[s])) break;
            return t;
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(ft, "");
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? pt.merge(i, "string" == typeof t ? [ t ] : t) : ot.call(i, t)), 
            i;
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : at.call(e, t, i);
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, s = t.length; n < i; n++) t[s++] = e[n];
            return t.length = s, t;
        },
        grep: function(t, e, i) {
            for (var n = [], s = 0, o = t.length, a = !i; s < o; s++) !e(t[s], s) !== a && n.push(t[s]);
            return n;
        },
        map: function(t, e, i) {
            var s, o, a = 0, r = [];
            if (n(t)) for (s = t.length; a < s; a++) null != (o = e(t[a], a, i)) && r.push(o); else for (a in t) null != (o = e(t[a], a, i)) && r.push(o);
            return st.apply([], r);
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, s;
            if ("string" == typeof e && (i = t[e], e = t, t = i), pt.isFunction(t)) return n = nt.call(arguments, 2), 
            s = function() {
                return t.apply(e || this, n.concat(nt.call(arguments)));
            }, s.guid = t.guid = t.guid || pt.guid++, s;
        },
        now: Date.now,
        support: dt
    }), "function" == typeof Symbol && (pt.fn[Symbol.iterator] = tt[Symbol.iterator]), 
    pt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        rt["[object " + e + "]"] = e.toLowerCase();
    });
    var yt = function(t) {
        function e(t, e, i, n) {
            var s, o, a, r, l, h, d, p = e && e.ownerDocument, f = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return i;
            if (!n && ((e ? e.ownerDocument || e : R) !== I && A(e), e = e || I, M)) {
                if (11 !== f && (l = mt.exec(t))) if (s = l[1]) {
                    if (9 === f) {
                        if (!(a = e.getElementById(s))) return i;
                        if (a.id === s) return i.push(a), i;
                    } else if (p && (a = p.getElementById(s)) && O(e, a) && a.id === s) return i.push(a), 
                    i;
                } else {
                    if (l[2]) return G.apply(i, e.getElementsByTagName(t)), i;
                    if ((s = l[3]) && _.getElementsByClassName && e.getElementsByClassName) return G.apply(i, e.getElementsByClassName(s)), 
                    i;
                }
                if (_.qsa && !q[t + " "] && (!N || !N.test(t))) {
                    if (1 !== f) p = e, d = t; else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((r = e.getAttribute("id")) ? r = r.replace(bt, _t) : e.setAttribute("id", r = z), 
                        o = (h = k(t)).length; o--; ) h[o] = "#" + r + " " + c(h[o]);
                        d = h.join(","), p = gt.test(t) && u(e.parentNode) || e;
                    }
                    if (d) try {
                        return G.apply(i, p.querySelectorAll(d)), i;
                    } catch (t) {} finally {
                        r === z && e.removeAttribute("id");
                    }
                }
            }
            return T(t.replace(ot, "$1"), e, i, n);
        }
        function i() {
            function t(i, n) {
                return e.push(i + " ") > x.cacheLength && delete t[e.shift()], t[i + " "] = n;
            }
            var e = [];
            return t;
        }
        function n(t) {
            return t[z] = !0, t;
        }
        function s(t) {
            var e = I.createElement("fieldset");
            try {
                return !!t(e);
            } catch (t) {
                return !1;
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null;
            }
        }
        function o(t, e) {
            for (var i = t.split("|"), n = i.length; n--; ) x.attrHandle[i[n]] = e;
        }
        function a(t, e) {
            var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (n) return n;
            if (i) for (;i = i.nextSibling; ) if (i === e) return -1;
            return t ? 1 : -1;
        }
        function r(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && wt(e) === t : e.disabled === t : "label" in e && e.disabled === t;
            };
        }
        function l(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var s, o = t([], i.length, e), a = o.length; a--; ) i[s = o[a]] && (i[s] = !(n[s] = i[s]));
                });
            });
        }
        function u(t) {
            return t && void 0 !== t.getElementsByTagName && t;
        }
        function h() {}
        function c(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n;
        }
        function d(t, e, i) {
            var n = e.dir, s = e.next, o = s || n, a = i && "parentNode" === o, r = j++;
            return e.first ? function(e, i, s) {
                for (;e = e[n]; ) if (1 === e.nodeType || a) return t(e, i, s);
                return !1;
            } : function(e, i, l) {
                var u, h, c, d = [ W, r ];
                if (l) {
                    for (;e = e[n]; ) if ((1 === e.nodeType || a) && t(e, i, l)) return !0;
                } else for (;e = e[n]; ) if (1 === e.nodeType || a) if (c = e[z] || (e[z] = {}), 
                h = c[e.uniqueID] || (c[e.uniqueID] = {}), s && s === e.nodeName.toLowerCase()) e = e[n] || e; else {
                    if ((u = h[o]) && u[0] === W && u[1] === r) return d[2] = u[2];
                    if (h[o] = d, d[2] = t(e, i, l)) return !0;
                }
                return !1;
            };
        }
        function p(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var s = t.length; s--; ) if (!t[s](e, i, n)) return !1;
                return !0;
            } : t[0];
        }
        function f(t, i, n) {
            for (var s = 0, o = i.length; s < o; s++) e(t, i[s], n);
            return n;
        }
        function m(t, e, i, n, s) {
            for (var o, a = [], r = 0, l = t.length, u = null != e; r < l; r++) (o = t[r]) && (i && !i(o, n, s) || (a.push(o), 
            u && e.push(r)));
            return a;
        }
        function g(t, e, i, s, o, a) {
            return s && !s[z] && (s = g(s)), o && !o[z] && (o = g(o, a)), n(function(n, a, r, l) {
                var u, h, c, d = [], p = [], g = a.length, v = n || f(e || "*", r.nodeType ? [ r ] : r, []), y = !t || !n && e ? v : m(v, d, t, r, l), b = i ? o || (n ? t : g || s) ? [] : a : y;
                if (i && i(y, b, r, l), s) for (u = m(b, p), s(u, [], r, l), h = u.length; h--; ) (c = u[h]) && (b[p[h]] = !(y[p[h]] = c));
                if (n) {
                    if (o || t) {
                        if (o) {
                            for (u = [], h = b.length; h--; ) (c = b[h]) && u.push(y[h] = c);
                            o(null, b = [], u, l);
                        }
                        for (h = b.length; h--; ) (c = b[h]) && (u = o ? Z(n, c) : d[h]) > -1 && (n[u] = !(a[u] = c));
                    }
                } else b = m(b === a ? b.splice(g, b.length) : b), o ? o(null, a, b, l) : G.apply(a, b);
            });
        }
        function v(t) {
            for (var e, i, n, s = t.length, o = x.relative[t[0].type], a = o || x.relative[" "], r = o ? 1 : 0, l = d(function(t) {
                return t === e;
            }, a, !0), u = d(function(t) {
                return Z(e, t) > -1;
            }, a, !0), h = [ function(t, i, n) {
                var s = !o && (n || i !== S) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n));
                return e = null, s;
            } ]; r < s; r++) if (i = x.relative[t[r].type]) h = [ d(p(h), i) ]; else {
                if ((i = x.filter[t[r].type].apply(null, t[r].matches))[z]) {
                    for (n = ++r; n < s && !x.relative[t[n].type]; n++) ;
                    return g(r > 1 && p(h), r > 1 && c(t.slice(0, r - 1).concat({
                        value: " " === t[r - 2].type ? "*" : ""
                    })).replace(ot, "$1"), i, r < n && v(t.slice(r, n)), n < s && v(t = t.slice(n)), n < s && c(t));
                }
                h.push(i);
            }
            return p(h);
        }
        function y(t, i) {
            var s = i.length > 0, o = t.length > 0, a = function(n, a, r, l, u) {
                var h, c, d, p = 0, f = "0", g = n && [], v = [], y = S, b = n || o && x.find.TAG("*", u), _ = W += null == y ? 1 : Math.random() || .1, w = b.length;
                for (u && (S = a === I || a || u); f !== w && null != (h = b[f]); f++) {
                    if (o && h) {
                        for (c = 0, a || h.ownerDocument === I || (A(h), r = !M); d = t[c++]; ) if (d(h, a || I, r)) {
                            l.push(h);
                            break;
                        }
                        u && (W = _);
                    }
                    s && ((h = !d && h) && p--, n && g.push(h));
                }
                if (p += f, s && f !== p) {
                    for (c = 0; d = i[c++]; ) d(g, v, a, r);
                    if (n) {
                        if (p > 0) for (;f--; ) g[f] || v[f] || (v[f] = X.call(l));
                        v = m(v);
                    }
                    G.apply(l, v), u && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l);
                }
                return u && (W = _, S = y), g;
            };
            return s ? n(a) : a;
        }
        var b, _, x, w, C, k, D, T, S, E, P, A, I, F, M, N, L, H, O, z = "sizzle" + 1 * new Date(), R = t.document, W = 0, j = 0, B = i(), $ = i(), q = i(), Y = function(t, e) {
            return t === e && (P = !0), 0;
        }, V = {}.hasOwnProperty, U = [], X = U.pop, K = U.push, G = U.push, Q = U.slice, Z = function(t, e) {
            for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
            return -1;
        }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", tt = "[\\x20\\t\\r\\n\\f]", et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", it = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]", nt = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)", st = new RegExp(tt + "+", "g"), ot = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"), at = new RegExp("^" + tt + "*," + tt + "*"), rt = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"), lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"), ut = new RegExp(nt), ht = new RegExp("^" + et + "$"), ct = {
            ID: new RegExp("^#(" + et + ")"),
            CLASS: new RegExp("^\\.(" + et + ")"),
            TAG: new RegExp("^(" + et + "|[*])"),
            ATTR: new RegExp("^" + it),
            PSEUDO: new RegExp("^" + nt),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + J + ")$", "i"),
            needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
        }, dt = /^(?:input|select|textarea|button)$/i, pt = /^h\d$/i, ft = /^[^{]+\{\s*\[native \w/, mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, gt = /[+~]/, vt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"), yt = function(t, e, i) {
            var n = "0x" + e - 65536;
            return n !== n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320);
        }, bt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, _t = function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
        }, xt = function() {
            A();
        }, wt = d(function(t) {
            return !0 === t.disabled && ("form" in t || "label" in t);
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            G.apply(U = Q.call(R.childNodes), R.childNodes), U[R.childNodes.length].nodeType;
        } catch (t) {
            G = {
                apply: U.length ? function(t, e) {
                    K.apply(t, Q.call(e));
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++]; ) ;
                    t.length = i - 1;
                }
            };
        }
        _ = e.support = {}, C = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName;
        }, A = e.setDocument = function(t) {
            var e, i, n = t ? t.ownerDocument || t : R;
            return n !== I && 9 === n.nodeType && n.documentElement ? (I = n, F = I.documentElement, 
            M = !C(I), R !== I && (i = I.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", xt, !1) : i.attachEvent && i.attachEvent("onunload", xt)), 
            _.attributes = s(function(t) {
                return t.className = "i", !t.getAttribute("className");
            }), _.getElementsByTagName = s(function(t) {
                return t.appendChild(I.createComment("")), !t.getElementsByTagName("*").length;
            }), _.getElementsByClassName = ft.test(I.getElementsByClassName), _.getById = s(function(t) {
                return F.appendChild(t).id = z, !I.getElementsByName || !I.getElementsByName(z).length;
            }), _.getById ? (x.filter.ID = function(t) {
                var e = t.replace(vt, yt);
                return function(t) {
                    return t.getAttribute("id") === e;
                };
            }, x.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && M) {
                    var i = e.getElementById(t);
                    return i ? [ i ] : [];
                }
            }) : (x.filter.ID = function(t) {
                var e = t.replace(vt, yt);
                return function(t) {
                    var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e;
                };
            }, x.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && M) {
                    var i, n, s, o = e.getElementById(t);
                    if (o) {
                        if ((i = o.getAttributeNode("id")) && i.value === t) return [ o ];
                        for (s = e.getElementsByName(t), n = 0; o = s[n++]; ) if ((i = o.getAttributeNode("id")) && i.value === t) return [ o ];
                    }
                    return [];
                }
            }), x.find.TAG = _.getElementsByTagName ? function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : _.qsa ? e.querySelectorAll(t) : void 0;
            } : function(t, e) {
                var i, n = [], s = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (;i = o[s++]; ) 1 === i.nodeType && n.push(i);
                    return n;
                }
                return o;
            }, x.find.CLASS = _.getElementsByClassName && function(t, e) {
                if (void 0 !== e.getElementsByClassName && M) return e.getElementsByClassName(t);
            }, L = [], N = [], (_.qsa = ft.test(I.querySelectorAll)) && (s(function(t) {
                F.appendChild(t).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                t.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + tt + "*(?:''|\"\")"), 
                t.querySelectorAll("[selected]").length || N.push("\\[" + tt + "*(?:value|" + J + ")"), 
                t.querySelectorAll("[id~=" + z + "-]").length || N.push("~="), t.querySelectorAll(":checked").length || N.push(":checked"), 
                t.querySelectorAll("a#" + z + "+*").length || N.push(".#.+[+~]");
            }), s(function(t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = I.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && N.push("name" + tt + "*[*^$|!~]?="), 
                2 !== t.querySelectorAll(":enabled").length && N.push(":enabled", ":disabled"), 
                F.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && N.push(":enabled", ":disabled"), 
                t.querySelectorAll("*,:x"), N.push(",.*:");
            })), (_.matchesSelector = ft.test(H = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && s(function(t) {
                _.disconnectedMatch = H.call(t, "*"), H.call(t, "[s!='']:x"), L.push("!=", nt);
            }), N = N.length && new RegExp(N.join("|")), L = L.length && new RegExp(L.join("|")), 
            e = ft.test(F.compareDocumentPosition), O = e || ft.test(F.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)));
            } : function(t, e) {
                if (e) for (;e = e.parentNode; ) if (e === t) return !0;
                return !1;
            }, Y = e ? function(t, e) {
                if (t === e) return P = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 
                1 & i || !_.sortDetached && e.compareDocumentPosition(t) === i ? t === I || t.ownerDocument === R && O(R, t) ? -1 : e === I || e.ownerDocument === R && O(R, e) ? 1 : E ? Z(E, t) - Z(E, e) : 0 : 4 & i ? -1 : 1);
            } : function(t, e) {
                if (t === e) return P = !0, 0;
                var i, n = 0, s = t.parentNode, o = e.parentNode, r = [ t ], l = [ e ];
                if (!s || !o) return t === I ? -1 : e === I ? 1 : s ? -1 : o ? 1 : E ? Z(E, t) - Z(E, e) : 0;
                if (s === o) return a(t, e);
                for (i = t; i = i.parentNode; ) r.unshift(i);
                for (i = e; i = i.parentNode; ) l.unshift(i);
                for (;r[n] === l[n]; ) n++;
                return n ? a(r[n], l[n]) : r[n] === R ? -1 : l[n] === R ? 1 : 0;
            }, I) : I;
        }, e.matches = function(t, i) {
            return e(t, null, null, i);
        }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== I && A(t), i = i.replace(lt, "='$1']"), _.matchesSelector && M && !q[i + " "] && (!L || !L.test(i)) && (!N || !N.test(i))) try {
                var n = H.call(t, i);
                if (n || _.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n;
            } catch (t) {}
            return e(i, I, null, [ t ]).length > 0;
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== I && A(t), O(t, e);
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== I && A(t);
            var i = x.attrHandle[e.toLowerCase()], n = i && V.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !M) : void 0;
            return void 0 !== n ? n : _.attributes || !M ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
        }, e.escape = function(t) {
            return (t + "").replace(bt, _t);
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t);
        }, e.uniqueSort = function(t) {
            var e, i = [], n = 0, s = 0;
            if (P = !_.detectDuplicates, E = !_.sortStable && t.slice(0), t.sort(Y), P) {
                for (;e = t[s++]; ) e === t[s] && (n = i.push(s));
                for (;n--; ) t.splice(i[n], 1);
            }
            return E = null, t;
        }, w = e.getText = function(t) {
            var e, i = "", n = 0, s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += w(t);
                } else if (3 === s || 4 === s) return t.nodeValue;
            } else for (;e = t[n++]; ) i += w(e);
            return i;
        }, (x = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: ct,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(vt, yt), t[3] = (t[3] || t[4] || t[5] || "").replace(vt, yt), 
                    "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), 
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), 
                    t;
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return ct.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ut.test(i) && (e = k(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), 
                    t[2] = i.slice(0, e)), t.slice(0, 3));
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(vt, yt).toLowerCase();
                    return "*" === t ? function() {
                        return !0;
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                    };
                },
                CLASS: function(t) {
                    var e = B[t + " "];
                    return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && B(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "");
                    });
                },
                ATTR: function(t, i, n) {
                    return function(s) {
                        var o = e.attr(s, t);
                        return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(st, " ") + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"));
                    };
                },
                CHILD: function(t, e, i, n, s) {
                    var o = "nth" !== t.slice(0, 3), a = "last" !== t.slice(-4), r = "of-type" === e;
                    return 1 === n && 0 === s ? function(t) {
                        return !!t.parentNode;
                    } : function(e, i, l) {
                        var u, h, c, d, p, f, m = o !== a ? "nextSibling" : "previousSibling", g = e.parentNode, v = r && e.nodeName.toLowerCase(), y = !l && !r, b = !1;
                        if (g) {
                            if (o) {
                                for (;m; ) {
                                    for (d = e; d = d[m]; ) if (r ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    f = m = "only" === t && !f && "nextSibling";
                                }
                                return !0;
                            }
                            if (f = [ a ? g.firstChild : g.lastChild ], a && y) {
                                for (b = (p = (u = (h = (c = (d = g)[z] || (d[z] = {}))[d.uniqueID] || (c[d.uniqueID] = {}))[t] || [])[0] === W && u[1]) && u[2], 
                                d = p && g.childNodes[p]; d = ++p && d && d[m] || (b = p = 0) || f.pop(); ) if (1 === d.nodeType && ++b && d === e) {
                                    h[t] = [ W, p, b ];
                                    break;
                                }
                            } else if (y && (b = p = (u = (h = (c = (d = e)[z] || (d[z] = {}))[d.uniqueID] || (c[d.uniqueID] = {}))[t] || [])[0] === W && u[1]), 
                            !1 === b) for (;(d = ++p && d && d[m] || (b = p = 0) || f.pop()) && ((r ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((h = (c = d[z] || (d[z] = {}))[d.uniqueID] || (c[d.uniqueID] = {}))[t] = [ W, b ]), 
                            d !== e)); ) ;
                            return (b -= s) === n || b % n == 0 && b / n >= 0;
                        }
                    };
                },
                PSEUDO: function(t, i) {
                    var s, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[z] ? o(i) : o.length > 1 ? (s = [ t, t, "", i ], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, s = o(t, i), a = s.length; a--; ) t[n = Z(t, s[a])] = !(e[n] = s[a]);
                    }) : function(t) {
                        return o(t, 0, s);
                    }) : o;
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [], i = [], s = D(t.replace(ot, "$1"));
                    return s[z] ? n(function(t, e, i, n) {
                        for (var o, a = s(t, null, n, []), r = t.length; r--; ) (o = a[r]) && (t[r] = !(e[r] = o));
                    }) : function(t, n, o) {
                        return e[0] = t, s(e, null, o, i), e[0] = null, !i.pop();
                    };
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0;
                    };
                }),
                contains: n(function(t) {
                    return t = t.replace(vt, yt), function(e) {
                        return (e.textContent || e.innerText || w(e)).indexOf(t) > -1;
                    };
                }),
                lang: n(function(t) {
                    return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(vt, yt).toLowerCase(), 
                    function(e) {
                        var i;
                        do {
                            if (i = M ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-");
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                    };
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id;
                },
                root: function(t) {
                    return t === F;
                },
                focus: function(t) {
                    return t === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                },
                enabled: r(!1),
                disabled: r(!0),
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected;
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(t) {
                    return !x.pseudos.empty(t);
                },
                header: function(t) {
                    return pt.test(t.nodeName);
                },
                input: function(t) {
                    return dt.test(t.nodeName);
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e;
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                },
                first: l(function() {
                    return [ 0 ];
                }),
                last: l(function(t, e) {
                    return [ e - 1 ];
                }),
                eq: l(function(t, e, i) {
                    return [ i < 0 ? i + e : i ];
                }),
                even: l(function(t, e) {
                    for (var i = 0; i < e; i += 2) t.push(i);
                    return t;
                }),
                odd: l(function(t, e) {
                    for (var i = 1; i < e; i += 2) t.push(i);
                    return t;
                }),
                lt: l(function(t, e, i) {
                    for (var n = i < 0 ? i + e : i; --n >= 0; ) t.push(n);
                    return t;
                }),
                gt: l(function(t, e, i) {
                    for (var n = i < 0 ? i + e : i; ++n < e; ) t.push(n);
                    return t;
                })
            }
        }).pseudos.nth = x.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) x.pseudos[b] = function(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }(b);
        for (b in {
            submit: !0,
            reset: !0
        }) x.pseudos[b] = function(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t;
            };
        }(b);
        return h.prototype = x.filters = x.pseudos, x.setFilters = new h(), k = e.tokenize = function(t, i) {
            var n, s, o, a, r, l, u, h = $[t + " "];
            if (h) return i ? 0 : h.slice(0);
            for (r = t, l = [], u = x.preFilter; r; ) {
                n && !(s = at.exec(r)) || (s && (r = r.slice(s[0].length) || r), l.push(o = [])), 
                n = !1, (s = rt.exec(r)) && (n = s.shift(), o.push({
                    value: n,
                    type: s[0].replace(ot, " ")
                }), r = r.slice(n.length));
                for (a in x.filter) !(s = ct[a].exec(r)) || u[a] && !(s = u[a](s)) || (n = s.shift(), 
                o.push({
                    value: n,
                    type: a,
                    matches: s
                }), r = r.slice(n.length));
                if (!n) break;
            }
            return i ? r.length : r ? e.error(t) : $(t, l).slice(0);
        }, D = e.compile = function(t, e) {
            var i, n = [], s = [], o = q[t + " "];
            if (!o) {
                for (e || (e = k(t)), i = e.length; i--; ) (o = v(e[i]))[z] ? n.push(o) : s.push(o);
                (o = q(t, y(s, n))).selector = t;
            }
            return o;
        }, T = e.select = function(t, e, i, n) {
            var s, o, a, r, l, h = "function" == typeof t && t, d = !n && k(t = h.selector || t);
            if (i = i || [], 1 === d.length) {
                if ((o = d[0] = d[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && 9 === e.nodeType && M && x.relative[o[1].type]) {
                    if (!(e = (x.find.ID(a.matches[0].replace(vt, yt), e) || [])[0])) return i;
                    h && (e = e.parentNode), t = t.slice(o.shift().value.length);
                }
                for (s = ct.needsContext.test(t) ? 0 : o.length; s-- && (a = o[s], !x.relative[r = a.type]); ) if ((l = x.find[r]) && (n = l(a.matches[0].replace(vt, yt), gt.test(o[0].type) && u(e.parentNode) || e))) {
                    if (o.splice(s, 1), !(t = n.length && c(o))) return G.apply(i, n), i;
                    break;
                }
            }
            return (h || D(t, d))(n, e, !M, i, !e || gt.test(t) && u(e.parentNode) || e), i;
        }, _.sortStable = z.split("").sort(Y).join("") === z, _.detectDuplicates = !!P, 
        A(), _.sortDetached = s(function(t) {
            return 1 & t.compareDocumentPosition(I.createElement("fieldset"));
        }), s(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
        }) || o("type|href|height|width", function(t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }), _.attributes && s(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
        }) || o("value", function(t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
        }), s(function(t) {
            return null == t.getAttribute("disabled");
        }) || o(J, function(t, e, i) {
            var n;
            if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
        }), e;
    }(t);
    pt.find = yt, pt.expr = yt.selectors, pt.expr[":"] = pt.expr.pseudos, pt.uniqueSort = pt.unique = yt.uniqueSort, 
    pt.text = yt.getText, pt.isXMLDoc = yt.isXML, pt.contains = yt.contains, pt.escapeSelector = yt.escape;
    var bt = function(t, e, i) {
        for (var n = [], s = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; ) if (1 === t.nodeType) {
            if (s && pt(t).is(i)) break;
            n.push(t);
        }
        return n;
    }, _t = function(t, e) {
        for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
        return i;
    }, xt = pt.expr.match.needsContext, wt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, Ct = /^.[^:#\[\.,]*$/;
    pt.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? pt.find.matchesSelector(n, t) ? [ n ] : [] : pt.find.matches(t, pt.grep(e, function(t) {
            return 1 === t.nodeType;
        }));
    }, pt.fn.extend({
        find: function(t) {
            var e, i, n = this.length, s = this;
            if ("string" != typeof t) return this.pushStack(pt(t).filter(function() {
                for (e = 0; e < n; e++) if (pt.contains(s[e], this)) return !0;
            }));
            for (i = this.pushStack([]), e = 0; e < n; e++) pt.find(t, s[e], i);
            return n > 1 ? pt.uniqueSort(i) : i;
        },
        filter: function(t) {
            return this.pushStack(s(this, t || [], !1));
        },
        not: function(t) {
            return this.pushStack(s(this, t || [], !0));
        },
        is: function(t) {
            return !!s(this, "string" == typeof t && xt.test(t) ? pt(t) : t || [], !1).length;
        }
    });
    var kt, Dt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (pt.fn.init = function(t, e, i) {
        var n, s;
        if (!t) return this;
        if (i = i || kt, "string" == typeof t) {
            if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [ null, t, null ] : Dt.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof pt ? e[0] : e, pt.merge(this, pt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : et, !0)), 
                wt.test(n[1]) && pt.isPlainObject(e)) for (n in e) pt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this;
            }
            return (s = et.getElementById(n[2])) && (this[0] = s, this.length = 1), this;
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : pt.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(pt) : pt.makeArray(t, this);
    }).prototype = pt.fn, kt = pt(et);
    var Tt = /^(?:parents|prev(?:Until|All))/, St = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    pt.fn.extend({
        has: function(t) {
            var e = pt(t, this), i = e.length;
            return this.filter(function() {
                for (var t = 0; t < i; t++) if (pt.contains(this, e[t])) return !0;
            });
        },
        closest: function(t, e) {
            var i, n = 0, s = this.length, o = [], a = "string" != typeof t && pt(t);
            if (!xt.test(t)) for (;n < s; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && pt.find.matchesSelector(i, t))) {
                o.push(i);
                break;
            }
            return this.pushStack(o.length > 1 ? pt.uniqueSort(o) : o);
        },
        index: function(t) {
            return t ? "string" == typeof t ? at.call(pt(t), this[0]) : at.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(t, e) {
            return this.pushStack(pt.uniqueSort(pt.merge(this.get(), pt(t, e))));
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        }
    }), pt.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null;
        },
        parents: function(t) {
            return bt(t, "parentNode");
        },
        parentsUntil: function(t, e, i) {
            return bt(t, "parentNode", i);
        },
        next: function(t) {
            return o(t, "nextSibling");
        },
        prev: function(t) {
            return o(t, "previousSibling");
        },
        nextAll: function(t) {
            return bt(t, "nextSibling");
        },
        prevAll: function(t) {
            return bt(t, "previousSibling");
        },
        nextUntil: function(t, e, i) {
            return bt(t, "nextSibling", i);
        },
        prevUntil: function(t, e, i) {
            return bt(t, "previousSibling", i);
        },
        siblings: function(t) {
            return _t((t.parentNode || {}).firstChild, t);
        },
        children: function(t) {
            return _t(t.firstChild);
        },
        contents: function(t) {
            return t.contentDocument || pt.merge([], t.childNodes);
        }
    }, function(t, e) {
        pt.fn[t] = function(i, n) {
            var s = pt.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = pt.filter(n, s)), 
            this.length > 1 && (St[t] || pt.uniqueSort(s), Tt.test(t) && s.reverse()), this.pushStack(s);
        };
    });
    var Et = /[^\x20\t\r\n\f]+/g;
    pt.Callbacks = function(t) {
        t = "string" == typeof t ? a(t) : pt.extend({}, t);
        var e, i, n, s, o = [], r = [], l = -1, u = function() {
            for (s = t.once, n = e = !0; r.length; l = -1) for (i = r.shift(); ++l < o.length; ) !1 === o[l].apply(i[0], i[1]) && t.stopOnFalse && (l = o.length, 
            i = !1);
            t.memory || (i = !1), e = !1, s && (o = i ? [] : "");
        }, h = {
            add: function() {
                return o && (i && !e && (l = o.length - 1, r.push(i)), function e(i) {
                    pt.each(i, function(i, n) {
                        pt.isFunction(n) ? t.unique && h.has(n) || o.push(n) : n && n.length && "string" !== pt.type(n) && e(n);
                    });
                }(arguments), i && !e && u()), this;
            },
            remove: function() {
                return pt.each(arguments, function(t, e) {
                    for (var i; (i = pt.inArray(e, o, i)) > -1; ) o.splice(i, 1), i <= l && l--;
                }), this;
            },
            has: function(t) {
                return t ? pt.inArray(t, o) > -1 : o.length > 0;
            },
            empty: function() {
                return o && (o = []), this;
            },
            disable: function() {
                return s = r = [], o = i = "", this;
            },
            disabled: function() {
                return !o;
            },
            lock: function() {
                return s = r = [], i || e || (o = i = ""), this;
            },
            locked: function() {
                return !!s;
            },
            fireWith: function(t, i) {
                return s || (i = [ t, (i = i || []).slice ? i.slice() : i ], r.push(i), e || u()), 
                this;
            },
            fire: function() {
                return h.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!n;
            }
        };
        return h;
    }, pt.extend({
        Deferred: function(e) {
            var i = [ [ "notify", "progress", pt.Callbacks("memory"), pt.Callbacks("memory"), 2 ], [ "resolve", "done", pt.Callbacks("once memory"), pt.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", pt.Callbacks("once memory"), pt.Callbacks("once memory"), 1, "rejected" ] ], n = "pending", s = {
                state: function() {
                    return n;
                },
                always: function() {
                    return o.done(arguments).fail(arguments), this;
                },
                catch: function(t) {
                    return s.then(null, t);
                },
                pipe: function() {
                    var t = arguments;
                    return pt.Deferred(function(e) {
                        pt.each(i, function(i, n) {
                            var s = pt.isFunction(t[n[4]]) && t[n[4]];
                            o[n[1]](function() {
                                var t = s && s.apply(this, arguments);
                                t && pt.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, s ? [ t ] : arguments);
                            });
                        }), t = null;
                    }).promise();
                },
                then: function(e, n, s) {
                    function o(e, i, n, s) {
                        return function() {
                            var u = this, h = arguments, c = function() {
                                var t, c;
                                if (!(e < a)) {
                                    if ((t = n.apply(u, h)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                    c = t && ("object" == typeof t || "function" == typeof t) && t.then, pt.isFunction(c) ? s ? c.call(t, o(a, i, r, s), o(a, i, l, s)) : (a++, 
                                    c.call(t, o(a, i, r, s), o(a, i, l, s), o(a, i, r, i.notifyWith))) : (n !== r && (u = void 0, 
                                    h = [ t ]), (s || i.resolveWith)(u, h));
                                }
                            }, d = s ? c : function() {
                                try {
                                    c();
                                } catch (t) {
                                    pt.Deferred.exceptionHook && pt.Deferred.exceptionHook(t, d.stackTrace), e + 1 >= a && (n !== l && (u = void 0, 
                                    h = [ t ]), i.rejectWith(u, h));
                                }
                            };
                            e ? d() : (pt.Deferred.getStackHook && (d.stackTrace = pt.Deferred.getStackHook()), 
                            t.setTimeout(d));
                        };
                    }
                    var a = 0;
                    return pt.Deferred(function(t) {
                        i[0][3].add(o(0, t, pt.isFunction(s) ? s : r, t.notifyWith)), i[1][3].add(o(0, t, pt.isFunction(e) ? e : r)), 
                        i[2][3].add(o(0, t, pt.isFunction(n) ? n : l));
                    }).promise();
                },
                promise: function(t) {
                    return null != t ? pt.extend(t, s) : s;
                }
            }, o = {};
            return pt.each(i, function(t, e) {
                var a = e[2], r = e[5];
                s[e[1]] = a.add, r && a.add(function() {
                    n = r;
                }, i[3 - t][2].disable, i[0][2].lock), a.add(e[3].fire), o[e[0]] = function() {
                    return o[e[0] + "With"](this === o ? void 0 : this, arguments), this;
                }, o[e[0] + "With"] = a.fireWith;
            }), s.promise(o), e && e.call(o, o), o;
        },
        when: function(t) {
            var e = arguments.length, i = e, n = Array(i), s = nt.call(arguments), o = pt.Deferred(), a = function(t) {
                return function(i) {
                    n[t] = this, s[t] = arguments.length > 1 ? nt.call(arguments) : i, --e || o.resolveWith(n, s);
                };
            };
            if (e <= 1 && (u(t, o.done(a(i)).resolve, o.reject), "pending" === o.state() || pt.isFunction(s[i] && s[i].then))) return o.then();
            for (;i--; ) u(s[i], a(i), o.reject);
            return o.promise();
        }
    });
    var Pt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    pt.Deferred.exceptionHook = function(e, i) {
        t.console && t.console.warn && e && Pt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i);
    }, pt.readyException = function(e) {
        t.setTimeout(function() {
            throw e;
        });
    };
    var At = pt.Deferred();
    pt.fn.ready = function(t) {
        return At.then(t).catch(function(t) {
            pt.readyException(t);
        }), this;
    }, pt.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? pt.readyWait++ : pt.ready(!0);
        },
        ready: function(t) {
            (!0 === t ? --pt.readyWait : pt.isReady) || (pt.isReady = !0, !0 !== t && --pt.readyWait > 0 || At.resolveWith(et, [ pt ]));
        }
    }), pt.ready.then = At.then, "complete" === et.readyState || "loading" !== et.readyState && !et.documentElement.doScroll ? t.setTimeout(pt.ready) : (et.addEventListener("DOMContentLoaded", h), 
    t.addEventListener("load", h));
    var It = function(t, e, i, n, s, o, a) {
        var r = 0, l = t.length, u = null == i;
        if ("object" === pt.type(i)) {
            s = !0;
            for (r in i) It(t, e, r, i[r], !0, o, a);
        } else if (void 0 !== n && (s = !0, pt.isFunction(n) || (a = !0), u && (a ? (e.call(t, n), 
        e = null) : (u = e, e = function(t, e, i) {
            return u.call(pt(t), i);
        })), e)) for (;r < l; r++) e(t[r], i, a ? n : n.call(t[r], r, e(t[r], i)));
        return s ? t : u ? e.call(t) : l ? e(t[0], i) : o;
    }, Ft = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    };
    c.uid = 1, c.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {}, Ft(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e;
        },
        set: function(t, e, i) {
            var n, s = this.cache(t);
            if ("string" == typeof e) s[pt.camelCase(e)] = i; else for (n in e) s[pt.camelCase(n)] = e[n];
            return s;
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][pt.camelCase(e)];
        },
        access: function(t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), 
            void 0 !== i ? i : e);
        },
        remove: function(t, e) {
            var i, n = t[this.expando];
            if (void 0 !== n) {
                if (void 0 !== e) {
                    i = (e = pt.isArray(e) ? e.map(pt.camelCase) : (e = pt.camelCase(e)) in n ? [ e ] : e.match(Et) || []).length;
                    for (;i--; ) delete n[e[i]];
                }
                (void 0 === e || pt.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]);
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !pt.isEmptyObject(e);
        }
    };
    var Mt = new c(), Nt = new c(), Lt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ht = /[A-Z]/g;
    pt.extend({
        hasData: function(t) {
            return Nt.hasData(t) || Mt.hasData(t);
        },
        data: function(t, e, i) {
            return Nt.access(t, e, i);
        },
        removeData: function(t, e) {
            Nt.remove(t, e);
        },
        _data: function(t, e, i) {
            return Mt.access(t, e, i);
        },
        _removeData: function(t, e) {
            Mt.remove(t, e);
        }
    }), pt.fn.extend({
        data: function(t, e) {
            var i, n, s, o = this[0], a = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (s = Nt.get(o), 1 === o.nodeType && !Mt.get(o, "hasDataAttrs"))) {
                    for (i = a.length; i--; ) a[i] && 0 === (n = a[i].name).indexOf("data-") && (n = pt.camelCase(n.slice(5)), 
                    p(o, n, s[n]));
                    Mt.set(o, "hasDataAttrs", !0);
                }
                return s;
            }
            return "object" == typeof t ? this.each(function() {
                Nt.set(this, t);
            }) : It(this, function(e) {
                var i;
                if (o && void 0 === e) {
                    if (void 0 !== (i = Nt.get(o, t))) return i;
                    if (void 0 !== (i = p(o, t))) return i;
                } else this.each(function() {
                    Nt.set(this, t, e);
                });
            }, null, e, arguments.length > 1, null, !0);
        },
        removeData: function(t) {
            return this.each(function() {
                Nt.remove(this, t);
            });
        }
    }), pt.extend({
        queue: function(t, e, i) {
            var n;
            if (t) return e = (e || "fx") + "queue", n = Mt.get(t, e), i && (!n || pt.isArray(i) ? n = Mt.access(t, e, pt.makeArray(i)) : n.push(i)), 
            n || [];
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = pt.queue(t, e), n = i.length, s = i.shift(), o = pt._queueHooks(t, e), a = function() {
                pt.dequeue(t, e);
            };
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), 
            delete o.stop, s.call(t, a, o)), !n && o && o.empty.fire();
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return Mt.get(t, i) || Mt.access(t, i, {
                empty: pt.Callbacks("once memory").add(function() {
                    Mt.remove(t, [ e + "queue", i ]);
                })
            });
        }
    }), pt.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? pt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = pt.queue(this, t, e);
                pt._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && pt.dequeue(this, t);
            });
        },
        dequeue: function(t) {
            return this.each(function() {
                pt.dequeue(this, t);
            });
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", []);
        },
        promise: function(t, e) {
            var i, n = 1, s = pt.Deferred(), o = this, a = this.length, r = function() {
                --n || s.resolveWith(o, [ o ]);
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--; ) (i = Mt.get(o[a], t + "queueHooks")) && i.empty && (n++, 
            i.empty.add(r));
            return r(), s.promise(e);
        }
    });
    var Ot = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, zt = new RegExp("^(?:([+-])=|)(" + Ot + ")([a-z%]*)$", "i"), Rt = [ "Top", "Right", "Bottom", "Left" ], Wt = function(t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && pt.contains(t.ownerDocument, t) && "none" === pt.css(t, "display");
    }, jt = function(t, e, i, n) {
        var s, o, a = {};
        for (o in e) a[o] = t.style[o], t.style[o] = e[o];
        s = i.apply(t, n || []);
        for (o in e) t.style[o] = a[o];
        return s;
    }, Bt = {};
    pt.fn.extend({
        show: function() {
            return g(this, !0);
        },
        hide: function() {
            return g(this);
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Wt(this) ? pt(this).show() : pt(this).hide();
            });
        }
    });
    var $t = /^(?:checkbox|radio)$/i, qt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Yt = /^$|\/(?:java|ecma)script/i, Vt = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Vt.optgroup = Vt.option, Vt.tbody = Vt.tfoot = Vt.colgroup = Vt.caption = Vt.thead, 
    Vt.th = Vt.td;
    var Ut = /<|&#?\w+;/;
    !function() {
        var t = et.createDocumentFragment().appendChild(et.createElement("div")), e = et.createElement("input");
        e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), 
        t.appendChild(e), dt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        t.innerHTML = "<textarea>x</textarea>", dt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
    }();
    var Xt = et.documentElement, Kt = /^key/, Gt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Qt = /^([^.]*)(?:\.(.+)|)/;
    pt.event = {
        global: {},
        add: function(t, e, i, n, s) {
            var o, a, r, l, u, h, c, d, p, f, m, g = Mt.get(t);
            if (g) for (i.handler && (i = (o = i).handler, s = o.selector), s && pt.find.matchesSelector(Xt, s), 
            i.guid || (i.guid = pt.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function(e) {
                return void 0 !== pt && pt.event.triggered !== e.type ? pt.event.dispatch.apply(t, arguments) : void 0;
            }), u = (e = (e || "").match(Et) || [ "" ]).length; u--; ) p = m = (r = Qt.exec(e[u]) || [])[1], 
            f = (r[2] || "").split(".").sort(), p && (c = pt.event.special[p] || {}, p = (s ? c.delegateType : c.bindType) || p, 
            c = pt.event.special[p] || {}, h = pt.extend({
                type: p,
                origType: m,
                data: n,
                handler: i,
                guid: i.guid,
                selector: s,
                needsContext: s && pt.expr.match.needsContext.test(s),
                namespace: f.join(".")
            }, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, n, f, a) || t.addEventListener && t.addEventListener(p, a)), 
            c.add && (c.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, h) : d.push(h), 
            pt.event.global[p] = !0);
        },
        remove: function(t, e, i, n, s) {
            var o, a, r, l, u, h, c, d, p, f, m, g = Mt.hasData(t) && Mt.get(t);
            if (g && (l = g.events)) {
                for (u = (e = (e || "").match(Et) || [ "" ]).length; u--; ) if (r = Qt.exec(e[u]) || [], 
                p = m = r[1], f = (r[2] || "").split(".").sort(), p) {
                    for (c = pt.event.special[p] || {}, d = l[p = (n ? c.delegateType : c.bindType) || p] || [], 
                    r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--; ) h = d[o], 
                    !s && m !== h.origType || i && i.guid !== h.guid || r && !r.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (d.splice(o, 1), 
                    h.selector && d.delegateCount--, c.remove && c.remove.call(t, h));
                    a && !d.length && (c.teardown && !1 !== c.teardown.call(t, f, g.handle) || pt.removeEvent(t, p, g.handle), 
                    delete l[p]);
                } else for (p in l) pt.event.remove(t, p + e[u], i, n, !0);
                pt.isEmptyObject(l) && Mt.remove(t, "handle events");
            }
        },
        dispatch: function(t) {
            var e, i, n, s, o, a, r = pt.event.fix(t), l = new Array(arguments.length), u = (Mt.get(this, "events") || {})[r.type] || [], h = pt.event.special[r.type] || {};
            for (l[0] = r, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (r.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, r)) {
                for (a = pt.event.handlers.call(this, r, u), e = 0; (s = a[e++]) && !r.isPropagationStopped(); ) for (r.currentTarget = s.elem, 
                i = 0; (o = s.handlers[i++]) && !r.isImmediatePropagationStopped(); ) r.rnamespace && !r.rnamespace.test(o.namespace) || (r.handleObj = o, 
                r.data = o.data, void 0 !== (n = ((pt.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, l)) && !1 === (r.result = n) && (r.preventDefault(), 
                r.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, r), r.result;
            }
        },
        handlers: function(t, e) {
            var i, n, s, o, a, r = [], l = e.delegateCount, u = t.target;
            if (l && u.nodeType && !("click" === t.type && t.button >= 1)) for (;u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
                for (o = [], a = {}, i = 0; i < l; i++) void 0 === a[s = (n = e[i]).selector + " "] && (a[s] = n.needsContext ? pt(s, this).index(u) > -1 : pt.find(s, this, null, [ u ]).length), 
                a[s] && o.push(n);
                o.length && r.push({
                    elem: u,
                    handlers: o
                });
            }
            return u = this, l < e.length && r.push({
                elem: u,
                handlers: e.slice(l)
            }), r;
        },
        addProp: function(t, e) {
            Object.defineProperty(pt.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: pt.isFunction(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t];
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    });
                }
            });
        },
        fix: function(t) {
            return t[pt.expando] ? t : new pt.Event(t);
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== w() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === w() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && pt.nodeName(this, "input")) return this.click(), 
                    !1;
                },
                _default: function(t) {
                    return pt.nodeName(t.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                }
            }
        }
    }, pt.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i);
    }, pt.Event = function(t, e) {
        if (!(this instanceof pt.Event)) return new pt.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? _ : x, 
        this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, 
        this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, 
        e && pt.extend(this, e), this.timeStamp = t && t.timeStamp || pt.now(), this[pt.expando] = !0;
    }, pt.Event.prototype = {
        constructor: pt.Event,
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = _, t && !this.isSimulated && t.preventDefault();
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = _, t && !this.isSimulated && t.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = _, t && !this.isSimulated && t.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, pt.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(t) {
            var e = t.button;
            return null == t.which && Kt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Gt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which;
        }
    }, pt.event.addProp), pt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        pt.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this, s = t.relatedTarget, o = t.handleObj;
                return s && (s === n || pt.contains(n, s)) || (t.type = o.origType, i = o.handler.apply(this, arguments), 
                t.type = e), i;
            }
        };
    }), pt.fn.extend({
        on: function(t, e, i, n) {
            return C(this, t, e, i, n);
        },
        one: function(t, e, i, n) {
            return C(this, t, e, i, n, 1);
        },
        off: function(t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, pt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), 
            this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this;
            }
            return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = x), 
            this.each(function() {
                pt.event.remove(this, t, i, e);
            });
        }
    });
    var Zt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Jt = /<script|<style|<link/i, te = /checked\s*(?:[^=]|=\s*.checked.)/i, ee = /^true\/(.*)/, ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    pt.extend({
        htmlPrefilter: function(t) {
            return t.replace(Zt, "<$1></$2>");
        },
        clone: function(t, e, i) {
            var n, s, o, a, r = t.cloneNode(!0), l = pt.contains(t.ownerDocument, t);
            if (!(dt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || pt.isXMLDoc(t))) for (a = v(r), 
            n = 0, s = (o = v(t)).length; n < s; n++) E(o[n], a[n]);
            if (e) if (i) for (o = o || v(t), a = a || v(r), n = 0, s = o.length; n < s; n++) S(o[n], a[n]); else S(t, r);
            return (a = v(r, "script")).length > 0 && y(a, !l && v(t, "script")), r;
        },
        cleanData: function(t) {
            for (var e, i, n, s = pt.event.special, o = 0; void 0 !== (i = t[o]); o++) if (Ft(i)) {
                if (e = i[Mt.expando]) {
                    if (e.events) for (n in e.events) s[n] ? pt.event.remove(i, n) : pt.removeEvent(i, n, e.handle);
                    i[Mt.expando] = void 0;
                }
                i[Nt.expando] && (i[Nt.expando] = void 0);
            }
        }
    }), pt.fn.extend({
        detach: function(t) {
            return A(this, t, !0);
        },
        remove: function(t) {
            return A(this, t);
        },
        text: function(t) {
            return It(this, function(t) {
                return void 0 === t ? pt.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t);
                });
            }, null, t, arguments.length);
        },
        append: function() {
            return P(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, t).appendChild(t);
            });
        },
        prepend: function() {
            return P(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = k(this, t);
                    e.insertBefore(t, e.firstChild);
                }
            });
        },
        before: function() {
            return P(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this);
            });
        },
        after: function() {
            return P(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
            });
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (pt.cleanData(v(t, !1)), 
            t.textContent = "");
            return this;
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return pt.clone(this, t, e);
            });
        },
        html: function(t) {
            return It(this, function(t) {
                var e = this[0] || {}, i = 0, n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Jt.test(t) && !Vt[(qt.exec(t) || [ "", "" ])[1].toLowerCase()]) {
                    t = pt.htmlPrefilter(t);
                    try {
                        for (;i < n; i++) 1 === (e = this[i] || {}).nodeType && (pt.cleanData(v(e, !1)), 
                        e.innerHTML = t);
                        e = 0;
                    } catch (t) {}
                }
                e && this.empty().append(t);
            }, null, t, arguments.length);
        },
        replaceWith: function() {
            var t = [];
            return P(this, arguments, function(e) {
                var i = this.parentNode;
                pt.inArray(this, t) < 0 && (pt.cleanData(v(this)), i && i.replaceChild(e, this));
            }, t);
        }
    }), pt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        pt.fn[t] = function(t) {
            for (var i, n = [], s = pt(t), o = s.length - 1, a = 0; a <= o; a++) i = a === o ? this : this.clone(!0), 
            pt(s[a])[e](i), ot.apply(n, i.get());
            return this.pushStack(n);
        };
    });
    var ne = /^margin/, se = new RegExp("^(" + Ot + ")(?!px)[a-z%]+$", "i"), oe = function(e) {
        var i = e.ownerDocument.defaultView;
        return i && i.opener || (i = t), i.getComputedStyle(e);
    };
    !function() {
        function e() {
            if (r) {
                r.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
                r.innerHTML = "", Xt.appendChild(a);
                var e = t.getComputedStyle(r);
                i = "1%" !== e.top, o = "2px" === e.marginLeft, n = "4px" === e.width, r.style.marginRight = "50%", 
                s = "4px" === e.marginRight, Xt.removeChild(a), r = null;
            }
        }
        var i, n, s, o, a = et.createElement("div"), r = et.createElement("div");
        r.style && (r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", 
        dt.clearCloneStyle = "content-box" === r.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
        a.appendChild(r), pt.extend(dt, {
            pixelPosition: function() {
                return e(), i;
            },
            boxSizingReliable: function() {
                return e(), n;
            },
            pixelMarginRight: function() {
                return e(), s;
            },
            reliableMarginLeft: function() {
                return e(), o;
            }
        }));
    }();
    var ae = /^(none|table(?!-c[ea]).+)/, re = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, le = {
        letterSpacing: "0",
        fontWeight: "400"
    }, ue = [ "Webkit", "Moz", "ms" ], he = et.createElement("div").style;
    pt.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = I(t, "opacity");
                        return "" === i ? "1" : i;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, o, a, r = pt.camelCase(e), l = t.style;
                if (e = pt.cssProps[r] || (pt.cssProps[r] = M(r) || r), a = pt.cssHooks[e] || pt.cssHooks[r], 
                void 0 === i) return a && "get" in a && void 0 !== (s = a.get(t, !1, n)) ? s : l[e];
                "string" === (o = typeof i) && (s = zt.exec(i)) && s[1] && (i = f(t, e, s), o = "number"), 
                null != i && i === i && ("number" === o && (i += s && s[3] || (pt.cssNumber[r] ? "" : "px")), 
                dt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), 
                a && "set" in a && void 0 === (i = a.set(t, i, n)) || (l[e] = i));
            }
        },
        css: function(t, e, i, n) {
            var s, o, a, r = pt.camelCase(e);
            return e = pt.cssProps[r] || (pt.cssProps[r] = M(r) || r), (a = pt.cssHooks[e] || pt.cssHooks[r]) && "get" in a && (s = a.get(t, !0, i)), 
            void 0 === s && (s = I(t, e, n)), "normal" === s && e in le && (s = le[e]), "" === i || i ? (o = parseFloat(s), 
            !0 === i || isFinite(o) ? o || 0 : s) : s;
        }
    }), pt.each([ "height", "width" ], function(t, e) {
        pt.cssHooks[e] = {
            get: function(t, i, n) {
                if (i) return !ae.test(pt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? H(t, e, n) : jt(t, re, function() {
                    return H(t, e, n);
                });
            },
            set: function(t, i, n) {
                var s, o = n && oe(t), a = n && L(t, e, n, "border-box" === pt.css(t, "boxSizing", !1, o), o);
                return a && (s = zt.exec(i)) && "px" !== (s[3] || "px") && (t.style[e] = i, i = pt.css(t, e)), 
                N(t, i, a);
            }
        };
    }), pt.cssHooks.marginLeft = F(dt.reliableMarginLeft, function(t, e) {
        if (e) return (parseFloat(I(t, "marginLeft")) || t.getBoundingClientRect().left - jt(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left;
        })) + "px";
    }), pt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        pt.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [ i ]; n < 4; n++) s[t + Rt[n] + e] = o[n] || o[n - 2] || o[0];
                return s;
            }
        }, ne.test(t) || (pt.cssHooks[t + e].set = N);
    }), pt.fn.extend({
        css: function(t, e) {
            return It(this, function(t, e, i) {
                var n, s, o = {}, a = 0;
                if (pt.isArray(e)) {
                    for (n = oe(t), s = e.length; a < s; a++) o[e[a]] = pt.css(t, e[a], !1, n);
                    return o;
                }
                return void 0 !== i ? pt.style(t, e, i) : pt.css(t, e);
            }, t, e, arguments.length > 1);
        }
    }), pt.Tween = O, O.prototype = {
        constructor: O,
        init: function(t, e, i, n, s, o) {
            this.elem = t, this.prop = i, this.easing = s || pt.easing._default, this.options = e, 
            this.start = this.now = this.cur(), this.end = n, this.unit = o || (pt.cssNumber[i] ? "" : "px");
        },
        cur: function() {
            var t = O.propHooks[this.prop];
            return t && t.get ? t.get(this) : O.propHooks._default.get(this);
        },
        run: function(t) {
            var e, i = O.propHooks[this.prop];
            return this.options.duration ? this.pos = e = pt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, 
            this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            i && i.set ? i.set(this) : O.propHooks._default.set(this), this;
        }
    }, O.prototype.init.prototype = O.prototype, O.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = pt.css(t.elem, t.prop, ""), 
                e && "auto" !== e ? e : 0);
            },
            set: function(t) {
                pt.fx.step[t.prop] ? pt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[pt.cssProps[t.prop]] && !pt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : pt.style(t.elem, t.prop, t.now + t.unit);
            }
        }
    }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        }
    }, pt.easing = {
        linear: function(t) {
            return t;
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2;
        },
        _default: "swing"
    }, pt.fx = O.prototype.init, pt.fx.step = {};
    var ce, de, pe = /^(?:toggle|show|hide)$/, fe = /queueHooks$/;
    pt.Animation = pt.extend(q, {
        tweeners: {
            "*": [ function(t, e) {
                var i = this.createTween(t, e);
                return f(i.elem, t, zt.exec(e), i), i;
            } ]
        },
        tweener: function(t, e) {
            pt.isFunction(t) ? (e = t, t = [ "*" ]) : t = t.match(Et);
            for (var i, n = 0, s = t.length; n < s; n++) i = t[n], q.tweeners[i] = q.tweeners[i] || [], 
            q.tweeners[i].unshift(e);
        },
        prefilters: [ B ],
        prefilter: function(t, e) {
            e ? q.prefilters.unshift(t) : q.prefilters.push(t);
        }
    }), pt.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? pt.extend({}, t) : {
            complete: i || !i && e || pt.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !pt.isFunction(e) && e
        };
        return pt.fx.off || et.hidden ? n.duration = 0 : "number" != typeof n.duration && (n.duration in pt.fx.speeds ? n.duration = pt.fx.speeds[n.duration] : n.duration = pt.fx.speeds._default), 
        null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            pt.isFunction(n.old) && n.old.call(this), n.queue && pt.dequeue(this, n.queue);
        }, n;
    }, pt.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(Wt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n);
        },
        animate: function(t, e, i, n) {
            var s = pt.isEmptyObject(t), o = pt.speed(e, i, n), a = function() {
                var e = q(this, pt.extend({}, t), o);
                (s || Mt.get(this, "finish")) && e.stop(!0);
            };
            return a.finish = a, s || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function(t, e, i) {
            var n = function(t) {
                var e = t.stop;
                delete t.stop, e(i);
            };
            return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), 
            this.each(function() {
                var e = !0, s = null != t && t + "queueHooks", o = pt.timers, a = Mt.get(this);
                if (s) a[s] && a[s].stop && n(a[s]); else for (s in a) a[s] && a[s].stop && fe.test(s) && n(a[s]);
                for (s = o.length; s--; ) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), 
                e = !1, o.splice(s, 1));
                !e && i || pt.dequeue(this, t);
            });
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"), this.each(function() {
                var e, i = Mt.get(this), n = i[t + "queue"], s = i[t + "queueHooks"], o = pt.timers, a = n ? n.length : 0;
                for (i.finish = !0, pt.queue(this, t, []), s && s.stop && s.stop.call(this, !0), 
                e = o.length; e--; ) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), 
                o.splice(e, 1));
                for (e = 0; e < a; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish;
            });
        }
    }), pt.each([ "toggle", "show", "hide" ], function(t, e) {
        var i = pt.fn[e];
        pt.fn[e] = function(t, n, s) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(W(e, !0), t, n, s);
        };
    }), pt.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        pt.fn[t] = function(t, i, n) {
            return this.animate(e, t, i, n);
        };
    }), pt.timers = [], pt.fx.tick = function() {
        var t, e = 0, i = pt.timers;
        for (ce = pt.now(); e < i.length; e++) (t = i[e])() || i[e] !== t || i.splice(e--, 1);
        i.length || pt.fx.stop(), ce = void 0;
    }, pt.fx.timer = function(t) {
        pt.timers.push(t), t() ? pt.fx.start() : pt.timers.pop();
    }, pt.fx.interval = 13, pt.fx.start = function() {
        de || (de = t.requestAnimationFrame ? t.requestAnimationFrame(z) : t.setInterval(pt.fx.tick, pt.fx.interval));
    }, pt.fx.stop = function() {
        t.cancelAnimationFrame ? t.cancelAnimationFrame(de) : t.clearInterval(de), de = null;
    }, pt.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, pt.fn.delay = function(e, i) {
        return e = pt.fx ? pt.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function(i, n) {
            var s = t.setTimeout(i, e);
            n.stop = function() {
                t.clearTimeout(s);
            };
        });
    }, function() {
        var t = et.createElement("input"), e = et.createElement("select").appendChild(et.createElement("option"));
        t.type = "checkbox", dt.checkOn = "" !== t.value, dt.optSelected = e.selected, (t = et.createElement("input")).value = "t", 
        t.type = "radio", dt.radioValue = "t" === t.value;
    }();
    var me, ge = pt.expr.attrHandle;
    pt.fn.extend({
        attr: function(t, e) {
            return It(this, pt.attr, t, e, arguments.length > 1);
        },
        removeAttr: function(t) {
            return this.each(function() {
                pt.removeAttr(this, t);
            });
        }
    }), pt.extend({
        attr: function(t, e, i) {
            var n, s, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? pt.prop(t, e, i) : (1 === o && pt.isXMLDoc(t) || (s = pt.attrHooks[e.toLowerCase()] || (pt.expr.match.bool.test(e) ? me : void 0)), 
            void 0 !== i ? null === i ? void pt.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), 
            i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : (n = pt.find.attr(t, e), 
            null == n ? void 0 : n));
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!dt.radioValue && "radio" === e && pt.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e;
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var i, n = 0, s = e && e.match(Et);
            if (s && 1 === t.nodeType) for (;i = s[n++]; ) t.removeAttribute(i);
        }
    }), me = {
        set: function(t, e, i) {
            return !1 === e ? pt.removeAttr(t, i) : t.setAttribute(i, i), i;
        }
    }, pt.each(pt.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = ge[e] || pt.find.attr;
        ge[e] = function(t, e, n) {
            var s, o, a = e.toLowerCase();
            return n || (o = ge[a], ge[a] = s, s = null != i(t, e, n) ? a : null, ge[a] = o), 
            s;
        };
    });
    var ve = /^(?:input|select|textarea|button)$/i, ye = /^(?:a|area)$/i;
    pt.fn.extend({
        prop: function(t, e) {
            return It(this, pt.prop, t, e, arguments.length > 1);
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[pt.propFix[t] || t];
            });
        }
    }), pt.extend({
        prop: function(t, e, i) {
            var n, s, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && pt.isXMLDoc(t) || (e = pt.propFix[e] || e, 
            s = pt.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e];
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = pt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ve.test(t.nodeName) || ye.test(t.nodeName) && t.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), dt.optSelected || (pt.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
        }
    }), pt.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        pt.propFix[this.toLowerCase()] = this;
    }), pt.fn.extend({
        addClass: function(t) {
            var e, i, n, s, o, a, r, l = 0;
            if (pt.isFunction(t)) return this.each(function(e) {
                pt(this).addClass(t.call(this, e, V(this)));
            });
            if ("string" == typeof t && t) for (e = t.match(Et) || []; i = this[l++]; ) if (s = V(i), 
            n = 1 === i.nodeType && " " + Y(s) + " ") {
                for (a = 0; o = e[a++]; ) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                s !== (r = Y(n)) && i.setAttribute("class", r);
            }
            return this;
        },
        removeClass: function(t) {
            var e, i, n, s, o, a, r, l = 0;
            if (pt.isFunction(t)) return this.each(function(e) {
                pt(this).removeClass(t.call(this, e, V(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t) for (e = t.match(Et) || []; i = this[l++]; ) if (s = V(i), 
            n = 1 === i.nodeType && " " + Y(s) + " ") {
                for (a = 0; o = e[a++]; ) for (;n.indexOf(" " + o + " ") > -1; ) n = n.replace(" " + o + " ", " ");
                s !== (r = Y(n)) && i.setAttribute("class", r);
            }
            return this;
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : pt.isFunction(t) ? this.each(function(i) {
                pt(this).toggleClass(t.call(this, i, V(this), e), e);
            }) : this.each(function() {
                var e, n, s, o;
                if ("string" === i) for (n = 0, s = pt(this), o = t.match(Et) || []; e = o[n++]; ) s.hasClass(e) ? s.removeClass(e) : s.addClass(e); else void 0 !== t && "boolean" !== i || ((e = V(this)) && Mt.set(this, "__className__", e), 
                this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Mt.get(this, "__className__") || ""));
            });
        },
        hasClass: function(t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++]; ) if (1 === i.nodeType && (" " + Y(V(i)) + " ").indexOf(e) > -1) return !0;
            return !1;
        }
    });
    var be = /\r/g;
    pt.fn.extend({
        val: function(t) {
            var e, i, n, s = this[0];
            {
                if (arguments.length) return n = pt.isFunction(t), this.each(function(i) {
                    var s;
                    1 === this.nodeType && (null == (s = n ? t.call(this, i, pt(this).val()) : t) ? s = "" : "number" == typeof s ? s += "" : pt.isArray(s) && (s = pt.map(s, function(t) {
                        return null == t ? "" : t + "";
                    })), (e = pt.valHooks[this.type] || pt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s));
                });
                if (s) return (e = pt.valHooks[s.type] || pt.valHooks[s.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, 
                "string" == typeof i ? i.replace(be, "") : null == i ? "" : i);
            }
        }
    }), pt.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = pt.find.attr(t, "value");
                    return null != e ? e : Y(pt.text(t));
                }
            },
            select: {
                get: function(t) {
                    var e, i, n, s = t.options, o = t.selectedIndex, a = "select-one" === t.type, r = a ? null : [], l = a ? o + 1 : s.length;
                    for (n = o < 0 ? l : a ? o : 0; n < l; n++) if (((i = s[n]).selected || n === o) && !i.disabled && (!i.parentNode.disabled || !pt.nodeName(i.parentNode, "optgroup"))) {
                        if (e = pt(i).val(), a) return e;
                        r.push(e);
                    }
                    return r;
                },
                set: function(t, e) {
                    for (var i, n, s = t.options, o = pt.makeArray(e), a = s.length; a--; ) ((n = s[a]).selected = pt.inArray(pt.valHooks.option.get(n), o) > -1) && (i = !0);
                    return i || (t.selectedIndex = -1), o;
                }
            }
        }
    }), pt.each([ "radio", "checkbox" ], function() {
        pt.valHooks[this] = {
            set: function(t, e) {
                if (pt.isArray(e)) return t.checked = pt.inArray(pt(t).val(), e) > -1;
            }
        }, dt.checkOn || (pt.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value;
        });
    });
    var _e = /^(?:focusinfocus|focusoutblur)$/;
    pt.extend(pt.event, {
        trigger: function(e, i, n, s) {
            var o, a, r, l, u, h, c, d = [ n || et ], p = ut.call(e, "type") ? e.type : e, f = ut.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = r = n = n || et, 3 !== n.nodeType && 8 !== n.nodeType && !_e.test(p + pt.event.triggered) && (p.indexOf(".") > -1 && (p = (f = p.split(".")).shift(), 
            f.sort()), u = p.indexOf(":") < 0 && "on" + p, e = e[pt.expando] ? e : new pt.Event(p, "object" == typeof e && e), 
            e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            e.result = void 0, e.target || (e.target = n), i = null == i ? [ e ] : pt.makeArray(i, [ e ]), 
            c = pt.event.special[p] || {}, s || !c.trigger || !1 !== c.trigger.apply(n, i))) {
                if (!s && !c.noBubble && !pt.isWindow(n)) {
                    for (l = c.delegateType || p, _e.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), 
                    r = a;
                    r === (n.ownerDocument || et) && d.push(r.defaultView || r.parentWindow || t);
                }
                for (o = 0; (a = d[o++]) && !e.isPropagationStopped(); ) e.type = o > 1 ? l : c.bindType || p, 
                (h = (Mt.get(a, "events") || {})[e.type] && Mt.get(a, "handle")) && h.apply(a, i), 
                (h = u && a[u]) && h.apply && Ft(a) && (e.result = h.apply(a, i), !1 === e.result && e.preventDefault());
                return e.type = p, s || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), i) || !Ft(n) || u && pt.isFunction(n[p]) && !pt.isWindow(n) && ((r = n[u]) && (n[u] = null), 
                pt.event.triggered = p, n[p](), pt.event.triggered = void 0, r && (n[u] = r)), e.result;
            }
        },
        simulate: function(t, e, i) {
            var n = pt.extend(new pt.Event(), i, {
                type: t,
                isSimulated: !0
            });
            pt.event.trigger(n, null, e);
        }
    }), pt.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                pt.event.trigger(t, e, this);
            });
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            if (i) return pt.event.trigger(t, e, i, !0);
        }
    }), pt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
        pt.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e);
        };
    }), pt.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t);
        }
    }), dt.focusin = "onfocusin" in t, dt.focusin || pt.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            pt.event.simulate(e, t.target, pt.event.fix(t));
        };
        pt.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this, s = Mt.access(n, e);
                s || n.addEventListener(t, i, !0), Mt.access(n, e, (s || 0) + 1);
            },
            teardown: function() {
                var n = this.ownerDocument || this, s = Mt.access(n, e) - 1;
                s ? Mt.access(n, e, s) : (n.removeEventListener(t, i, !0), Mt.remove(n, e));
            }
        };
    });
    var xe = t.location, we = pt.now(), Ce = /\?/;
    pt.parseXML = function(e) {
        var i;
        if (!e || "string" != typeof e) return null;
        try {
            i = new t.DOMParser().parseFromString(e, "text/xml");
        } catch (t) {
            i = void 0;
        }
        return i && !i.getElementsByTagName("parsererror").length || pt.error("Invalid XML: " + e), 
        i;
    };
    var ke = /\[\]$/, De = /\r?\n/g, Te = /^(?:submit|button|image|reset|file)$/i, Se = /^(?:input|select|textarea|keygen)/i;
    pt.param = function(t, e) {
        var i, n = [], s = function(t, e) {
            var i = pt.isFunction(e) ? e() : e;
            n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i);
        };
        if (pt.isArray(t) || t.jquery && !pt.isPlainObject(t)) pt.each(t, function() {
            s(this.name, this.value);
        }); else for (i in t) U(i, t[i], e, s);
        return n.join("&");
    }, pt.fn.extend({
        serialize: function() {
            return pt.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var t = pt.prop(this, "elements");
                return t ? pt.makeArray(t) : this;
            }).filter(function() {
                var t = this.type;
                return this.name && !pt(this).is(":disabled") && Se.test(this.nodeName) && !Te.test(t) && (this.checked || !$t.test(t));
            }).map(function(t, e) {
                var i = pt(this).val();
                return null == i ? null : pt.isArray(i) ? pt.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(De, "\r\n")
                    };
                }) : {
                    name: e.name,
                    value: i.replace(De, "\r\n")
                };
            }).get();
        }
    });
    var Ee = /%20/g, Pe = /#.*$/, Ae = /([?&])_=[^&]*/, Ie = /^(.*?):[ \t]*([^\r\n]*)$/gm, Fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Me = /^(?:GET|HEAD)$/, Ne = /^\/\//, Le = {}, He = {}, Oe = "*/".concat("*"), ze = et.createElement("a");
    ze.href = xe.href, pt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xe.href,
            type: "GET",
            isLocal: Fe.test(xe.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Oe,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": pt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? G(G(t, pt.ajaxSettings), e) : G(pt.ajaxSettings, t);
        },
        ajaxPrefilter: X(Le),
        ajaxTransport: X(He),
        ajax: function(e, i) {
            function n(e, i, n, r) {
                var u, d, p, _, x, w = i;
                h || (h = !0, l && t.clearTimeout(l), s = void 0, a = r || "", C.readyState = e > 0 ? 4 : 0, 
                u = e >= 200 && e < 300 || 304 === e, n && (_ = Q(f, C, n)), _ = Z(f, _, C, u), 
                u ? (f.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (pt.lastModified[o] = x), 
                (x = C.getResponseHeader("etag")) && (pt.etag[o] = x)), 204 === e || "HEAD" === f.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = _.state, 
                d = _.data, u = !(p = _.error))) : (p = w, !e && w || (w = "error", e < 0 && (e = 0))), 
                C.status = e, C.statusText = (i || w) + "", u ? v.resolveWith(m, [ d, w, C ]) : v.rejectWith(m, [ C, w, p ]), 
                C.statusCode(b), b = void 0, c && g.trigger(u ? "ajaxSuccess" : "ajaxError", [ C, f, u ? d : p ]), 
                y.fireWith(m, [ C, w ]), c && (g.trigger("ajaxComplete", [ C, f ]), --pt.active || pt.event.trigger("ajaxStop")));
            }
            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var s, o, a, r, l, u, h, c, d, p, f = pt.ajaxSetup({}, i), m = f.context || f, g = f.context && (m.nodeType || m.jquery) ? pt(m) : pt.event, v = pt.Deferred(), y = pt.Callbacks("once memory"), b = f.statusCode || {}, _ = {}, x = {}, w = "canceled", C = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (h) {
                        if (!r) for (r = {}; e = Ie.exec(a); ) r[e[1].toLowerCase()] = e[2];
                        e = r[t.toLowerCase()];
                    }
                    return null == e ? null : e;
                },
                getAllResponseHeaders: function() {
                    return h ? a : null;
                },
                setRequestHeader: function(t, e) {
                    return null == h && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, _[t] = e), 
                    this;
                },
                overrideMimeType: function(t) {
                    return null == h && (f.mimeType = t), this;
                },
                statusCode: function(t) {
                    var e;
                    if (t) if (h) C.always(t[C.status]); else for (e in t) b[e] = [ b[e], t[e] ];
                    return this;
                },
                abort: function(t) {
                    var e = t || w;
                    return s && s.abort(e), n(0, e), this;
                }
            };
            if (v.promise(C), f.url = ((e || f.url || xe.href) + "").replace(Ne, xe.protocol + "//"), 
            f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Et) || [ "" ], 
            null == f.crossDomain) {
                u = et.createElement("a");
                try {
                    u.href = f.url, u.href = u.href, f.crossDomain = ze.protocol + "//" + ze.host != u.protocol + "//" + u.host;
                } catch (t) {
                    f.crossDomain = !0;
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = pt.param(f.data, f.traditional)), 
            K(Le, f, i, C), h) return C;
            (c = pt.event && f.global) && 0 == pt.active++ && pt.event.trigger("ajaxStart"), 
            f.type = f.type.toUpperCase(), f.hasContent = !Me.test(f.type), o = f.url.replace(Pe, ""), 
            f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ee, "+")) : (p = f.url.slice(o.length), 
            f.data && (o += (Ce.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(Ae, "$1"), 
            p = (Ce.test(o) ? "&" : "?") + "_=" + we++ + p), f.url = o + p), f.ifModified && (pt.lastModified[o] && C.setRequestHeader("If-Modified-Since", pt.lastModified[o]), 
            pt.etag[o] && C.setRequestHeader("If-None-Match", pt.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || i.contentType) && C.setRequestHeader("Content-Type", f.contentType), 
            C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Oe + "; q=0.01" : "") : f.accepts["*"]);
            for (d in f.headers) C.setRequestHeader(d, f.headers[d]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, C, f) || h)) return C.abort();
            if (w = "abort", y.add(f.complete), C.done(f.success), C.fail(f.error), s = K(He, f, i, C)) {
                if (C.readyState = 1, c && g.trigger("ajaxSend", [ C, f ]), h) return C;
                f.async && f.timeout > 0 && (l = t.setTimeout(function() {
                    C.abort("timeout");
                }, f.timeout));
                try {
                    h = !1, s.send(_, n);
                } catch (t) {
                    if (h) throw t;
                    n(-1, t);
                }
            } else n(-1, "No Transport");
            return C;
        },
        getJSON: function(t, e, i) {
            return pt.get(t, e, i, "json");
        },
        getScript: function(t, e) {
            return pt.get(t, void 0, e, "script");
        }
    }), pt.each([ "get", "post" ], function(t, e) {
        pt[e] = function(t, i, n, s) {
            return pt.isFunction(i) && (s = s || n, n = i, i = void 0), pt.ajax(pt.extend({
                url: t,
                type: e,
                dataType: s,
                data: i,
                success: n
            }, pt.isPlainObject(t) && t));
        };
    }), pt._evalUrl = function(t) {
        return pt.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        });
    }, pt.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (pt.isFunction(t) && (t = t.call(this[0])), e = pt(t, this[0].ownerDocument).eq(0).clone(!0), 
            this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                return t;
            }).append(this)), this;
        },
        wrapInner: function(t) {
            return pt.isFunction(t) ? this.each(function(e) {
                pt(this).wrapInner(t.call(this, e));
            }) : this.each(function() {
                var e = pt(this), i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t);
            });
        },
        wrap: function(t) {
            var e = pt.isFunction(t);
            return this.each(function(i) {
                pt(this).wrapAll(e ? t.call(this, i) : t);
            });
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                pt(this).replaceWith(this.childNodes);
            }), this;
        }
    }), pt.expr.pseudos.hidden = function(t) {
        return !pt.expr.pseudos.visible(t);
    }, pt.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
    }, pt.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest();
        } catch (t) {}
    };
    var Re = {
        0: 200,
        1223: 204
    }, We = pt.ajaxSettings.xhr();
    dt.cors = !!We && "withCredentials" in We, dt.ajax = We = !!We, pt.ajaxTransport(function(e) {
        var i, n;
        if (dt.cors || We && !e.crossDomain) return {
            send: function(s, o) {
                var a, r = e.xhr();
                if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) r[a] = e.xhrFields[a];
                e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest");
                for (a in s) r.setRequestHeader(a, s[a]);
                i = function(t) {
                    return function() {
                        i && (i = n = r.onload = r.onerror = r.onabort = r.onreadystatechange = null, "abort" === t ? r.abort() : "error" === t ? "number" != typeof r.status ? o(0, "error") : o(r.status, r.statusText) : o(Re[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()));
                    };
                }, r.onload = i(), n = r.onerror = i("error"), void 0 !== r.onabort ? r.onabort = n : r.onreadystatechange = function() {
                    4 === r.readyState && t.setTimeout(function() {
                        i && n();
                    });
                }, i = i("abort");
                try {
                    r.send(e.hasContent && e.data || null);
                } catch (t) {
                    if (i) throw t;
                }
            },
            abort: function() {
                i && i();
            }
        };
    }), pt.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1);
    }), pt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return pt.globalEval(t), t;
            }
        }
    }), pt.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }), pt.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i;
            return {
                send: function(n, s) {
                    e = pt("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type);
                    }), et.head.appendChild(e[0]);
                },
                abort: function() {
                    i && i();
                }
            };
        }
    });
    var je = [], Be = /(=)\?(?=&|$)|\?\?/;
    pt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = je.pop() || pt.expando + "_" + we++;
            return this[t] = !0, t;
        }
    }), pt.ajaxPrefilter("json jsonp", function(e, i, n) {
        var s, o, a, r = !1 !== e.jsonp && (Be.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Be.test(e.data) && "data");
        if (r || "jsonp" === e.dataTypes[0]) return s = e.jsonpCallback = pt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
        r ? e[r] = e[r].replace(Be, "$1" + s) : !1 !== e.jsonp && (e.url += (Ce.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), 
        e.converters["script json"] = function() {
            return a || pt.error(s + " was not called"), a[0];
        }, e.dataTypes[0] = "json", o = t[s], t[s] = function() {
            a = arguments;
        }, n.always(function() {
            void 0 === o ? pt(t).removeProp(s) : t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, 
            je.push(s)), a && pt.isFunction(o) && o(a[0]), a = o = void 0;
        }), "script";
    }), dt.createHTMLDocument = function() {
        var t = et.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length;
    }(), pt.parseHTML = function(t, e, i) {
        if ("string" != typeof t) return [];
        "boolean" == typeof e && (i = e, e = !1);
        var n, s, o;
        return e || (dt.createHTMLDocument ? ((n = (e = et.implementation.createHTMLDocument("")).createElement("base")).href = et.location.href, 
        e.head.appendChild(n)) : e = et), s = wt.exec(t), o = !i && [], s ? [ e.createElement(s[1]) ] : (s = b([ t ], e, o), 
        o && o.length && pt(o).remove(), pt.merge([], s.childNodes));
    }, pt.fn.load = function(t, e, i) {
        var n, s, o, a = this, r = t.indexOf(" ");
        return r > -1 && (n = Y(t.slice(r)), t = t.slice(0, r)), pt.isFunction(e) ? (i = e, 
        e = void 0) : e && "object" == typeof e && (s = "POST"), a.length > 0 && pt.ajax({
            url: t,
            type: s || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, a.html(n ? pt("<div>").append(pt.parseHTML(t)).find(n) : t);
        }).always(i && function(t, e) {
            a.each(function() {
                i.apply(this, o || [ t.responseText, e, t ]);
            });
        }), this;
    }, pt.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(t, e) {
        pt.fn[e] = function(t) {
            return this.on(e, t);
        };
    }), pt.expr.pseudos.animated = function(t) {
        return pt.grep(pt.timers, function(e) {
            return t === e.elem;
        }).length;
    }, pt.offset = {
        setOffset: function(t, e, i) {
            var n, s, o, a, r, l, u = pt.css(t, "position"), h = pt(t), c = {};
            "static" === u && (t.style.position = "relative"), r = h.offset(), o = pt.css(t, "top"), 
            l = pt.css(t, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (a = (n = h.position()).top, 
            s = n.left) : (a = parseFloat(o) || 0, s = parseFloat(l) || 0), pt.isFunction(e) && (e = e.call(t, i, pt.extend({}, r))), 
            null != e.top && (c.top = e.top - r.top + a), null != e.left && (c.left = e.left - r.left + s), 
            "using" in e ? e.using.call(t, c) : h.css(c);
        }
    }, pt.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                pt.offset.setOffset(this, t, e);
            });
            var e, i, n, s, o = this[0];
            if (o) return o.getClientRects().length ? (n = o.getBoundingClientRect(), n.width || n.height ? (s = o.ownerDocument, 
            i = J(s), e = s.documentElement, {
                top: n.top + i.pageYOffset - e.clientTop,
                left: n.left + i.pageXOffset - e.clientLeft
            }) : n) : {
                top: 0,
                left: 0
            };
        },
        position: function() {
            if (this[0]) {
                var t, e, i = this[0], n = {
                    top: 0,
                    left: 0
                };
                return "fixed" === pt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), 
                e = this.offset(), pt.nodeName(t[0], "html") || (n = t.offset()), n = {
                    top: n.top + pt.css(t[0], "borderTopWidth", !0),
                    left: n.left + pt.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: e.top - n.top - pt.css(i, "marginTop", !0),
                    left: e.left - n.left - pt.css(i, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === pt.css(t, "position"); ) t = t.offsetParent;
                return t || Xt;
            });
        }
    }), pt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var i = "pageYOffset" === e;
        pt.fn[t] = function(n) {
            return It(this, function(t, n, s) {
                var o = J(t);
                if (void 0 === s) return o ? o[e] : t[n];
                o ? o.scrollTo(i ? o.pageXOffset : s, i ? s : o.pageYOffset) : t[n] = s;
            }, t, n, arguments.length);
        };
    }), pt.each([ "top", "left" ], function(t, e) {
        pt.cssHooks[e] = F(dt.pixelPosition, function(t, i) {
            if (i) return i = I(t, e), se.test(i) ? pt(t).position()[e] + "px" : i;
        });
    }), pt.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        pt.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            pt.fn[n] = function(s, o) {
                var a = arguments.length && (i || "boolean" != typeof s), r = i || (!0 === s || !0 === o ? "margin" : "border");
                return It(this, function(e, i, s) {
                    var o;
                    return pt.isWindow(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, 
                    Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === s ? pt.css(e, i, r) : pt.style(e, i, s, r);
                }, e, a ? s : void 0, a);
            };
        });
    }), pt.fn.extend({
        bind: function(t, e, i) {
            return this.on(t, null, e, i);
        },
        unbind: function(t, e) {
            return this.off(t, null, e);
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n);
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i);
        }
    }), pt.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return pt;
    });
    var $e = t.jQuery, qe = t.$;
    return pt.noConflict = function(e) {
        return t.$ === pt && (t.$ = qe), e && t.jQuery === pt && (t.jQuery = $e), pt;
    }, e || (t.jQuery = t.$ = pt), pt;
}), function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t);
    } : e(t);
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = t.length, i = ot.type(t);
        return "function" !== i && !ot.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t));
    }
    function n(t, e, i) {
        if (ot.isFunction(e)) return ot.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i;
        });
        if (e.nodeType) return ot.grep(t, function(t) {
            return t === e !== i;
        });
        if ("string" == typeof e) {
            if (pt.test(e)) return ot.filter(e, t, i);
            e = ot.filter(e, t);
        }
        return ot.grep(t, function(t) {
            return ot.inArray(t, e) >= 0 !== i;
        });
    }
    function s(t, e) {
        do {
            t = t[e];
        } while (t && 1 !== t.nodeType);
        return t;
    }
    function o(t) {
        var e = _t[t] = {};
        return ot.each(t.match(bt) || [], function(t, i) {
            e[i] = !0;
        }), e;
    }
    function a() {
        mt.addEventListener ? (mt.removeEventListener("DOMContentLoaded", r, !1), t.removeEventListener("load", r, !1)) : (mt.detachEvent("onreadystatechange", r), 
        t.detachEvent("onload", r));
    }
    function r() {
        (mt.addEventListener || "load" === event.type || "complete" === mt.readyState) && (a(), 
        ot.ready());
    }
    function l(t, e, i) {
        if (void 0 === i && 1 === t.nodeType) {
            var n = "data-" + e.replace(Dt, "-$1").toLowerCase();
            if ("string" == typeof (i = t.getAttribute(n))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : kt.test(i) ? ot.parseJSON(i) : i);
                } catch (t) {}
                ot.data(t, e, i);
            } else i = void 0;
        }
        return i;
    }
    function u(t) {
        var e;
        for (e in t) if (("data" !== e || !ot.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0;
    }
    function h(t, e, i, n) {
        if (ot.acceptData(t)) {
            var s, o, a = ot.expando, r = t.nodeType, l = r ? ot.cache : t, u = r ? t[a] : t[a] && a;
            if (u && l[u] && (n || l[u].data) || void 0 !== i || "string" != typeof e) return u || (u = r ? t[a] = X.pop() || ot.guid++ : a), 
            l[u] || (l[u] = r ? {} : {
                toJSON: ot.noop
            }), ("object" == typeof e || "function" == typeof e) && (n ? l[u] = ot.extend(l[u], e) : l[u].data = ot.extend(l[u].data, e)), 
            o = l[u], n || (o.data || (o.data = {}), o = o.data), void 0 !== i && (o[ot.camelCase(e)] = i), 
            "string" == typeof e ? null == (s = o[e]) && (s = o[ot.camelCase(e)]) : s = o, s;
        }
    }
    function c(t, e, i) {
        if (ot.acceptData(t)) {
            var n, s, o = t.nodeType, a = o ? ot.cache : t, r = o ? t[ot.expando] : ot.expando;
            if (a[r]) {
                if (e && (n = i ? a[r] : a[r].data)) {
                    ot.isArray(e) ? e = e.concat(ot.map(e, ot.camelCase)) : e in n ? e = [ e ] : (e = ot.camelCase(e), 
                    e = e in n ? [ e ] : e.split(" ")), s = e.length;
                    for (;s--; ) delete n[e[s]];
                    if (i ? !u(n) : !ot.isEmptyObject(n)) return;
                }
                (i || (delete a[r].data, u(a[r]))) && (o ? ot.cleanData([ t ], !0) : nt.deleteExpando || a != a.window ? delete a[r] : a[r] = null);
            }
        }
    }
    function d() {
        return !0;
    }
    function p() {
        return !1;
    }
    function f() {
        try {
            return mt.activeElement;
        } catch (t) {}
    }
    function m(t) {
        var e = Ht.split("|"), i = t.createDocumentFragment();
        if (i.createElement) for (;e.length; ) i.createElement(e.pop());
        return i;
    }
    function g(t, e) {
        var i, n, s = 0, o = typeof t.getElementsByTagName !== Ct ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Ct ? t.querySelectorAll(e || "*") : void 0;
        if (!o) for (o = [], i = t.childNodes || t; null != (n = i[s]); s++) !e || ot.nodeName(n, e) ? o.push(n) : ot.merge(o, g(n, e));
        return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([ t ], o) : o;
    }
    function v(t) {
        At.test(t.type) && (t.defaultChecked = t.checked);
    }
    function y(t, e) {
        return ot.nodeName(t, "table") && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t;
    }
    function b(t) {
        return t.type = (null !== ot.find.attr(t, "type")) + "/" + t.type, t;
    }
    function _(t) {
        var e = Ut.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t;
    }
    function x(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++) ot._data(i, "globalEval", !e || ot._data(e[n], "globalEval"));
    }
    function w(t, e) {
        if (1 === e.nodeType && ot.hasData(t)) {
            var i, n, s, o = ot._data(t), a = ot._data(e, o), r = o.events;
            if (r) {
                delete a.handle, a.events = {};
                for (i in r) for (n = 0, s = r[i].length; s > n; n++) ot.event.add(e, i, r[i][n]);
            }
            a.data && (a.data = ot.extend({}, a.data));
        }
    }
    function C(t, e) {
        var i, n, s;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !nt.noCloneEvent && e[ot.expando]) {
                s = ot._data(e);
                for (n in s.events) ot.removeEvent(e, n, s.handle);
                e.removeAttribute(ot.expando);
            }
            "script" === i && e.text !== t.text ? (b(e).text = t.text, _(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), 
            nt.html5Clone && t.innerHTML && !ot.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && At.test(t.type) ? (e.defaultChecked = e.checked = t.checked, 
            e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue);
        }
    }
    function k(e, i) {
        var n = ot(i.createElement(e)).appendTo(i.body), s = t.getDefaultComputedStyle ? t.getDefaultComputedStyle(n[0]).display : ot.css(n[0], "display");
        return n.detach(), s;
    }
    function D(t) {
        var e = mt, i = Zt[t];
        return i || ("none" !== (i = k(t, e)) && i || (Qt = (Qt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), 
        (e = (Qt[0].contentWindow || Qt[0].contentDocument).document).write(), e.close(), 
        i = k(t, e), Qt.detach()), Zt[t] = i), i;
    }
    function T(t, e) {
        return {
            get: function() {
                var i = t();
                if (null != i) return i ? void delete this.get : (this.get = e).apply(this, arguments);
            }
        };
    }
    function S(t, e) {
        if (e in t) return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = ce.length; s--; ) if ((e = ce[s] + i) in t) return e;
        return n;
    }
    function E(t, e) {
        for (var i, n, s, o = [], a = 0, r = t.length; r > a; a++) (n = t[a]).style && (o[a] = ot._data(n, "olddisplay"), 
        i = n.style.display, e ? (o[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && Et(n) && (o[a] = ot._data(n, "olddisplay", D(n.nodeName)))) : o[a] || (s = Et(n), 
        (i && "none" !== i || !s) && ot._data(n, "olddisplay", s ? i : ot.css(n, "display"))));
        for (a = 0; r > a; a++) (n = t[a]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[a] || "" : "none"));
        return t;
    }
    function P(t, e, i) {
        var n = re.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e;
    }
    function A(t, e, i, n, s) {
        for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === i && (a += ot.css(t, i + St[o], !0, s)), 
        n ? ("content" === i && (a -= ot.css(t, "padding" + St[o], !0, s)), "margin" !== i && (a -= ot.css(t, "border" + St[o] + "Width", !0, s))) : (a += ot.css(t, "padding" + St[o], !0, s), 
        "padding" !== i && (a += ot.css(t, "border" + St[o] + "Width", !0, s)));
        return a;
    }
    function I(t, e, i) {
        var n = !0, s = "width" === e ? t.offsetWidth : t.offsetHeight, o = Jt(t), a = nt.boxSizing() && "border-box" === ot.css(t, "boxSizing", !1, o);
        if (0 >= s || null == s) {
            if ((0 > (s = te(t, e, o)) || null == s) && (s = t.style[e]), ie.test(s)) return s;
            n = a && (nt.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0;
        }
        return s + A(t, e, i || (a ? "border" : "content"), n, o) + "px";
    }
    function F(t, e, i, n, s) {
        return new F.prototype.init(t, e, i, n, s);
    }
    function M() {
        return setTimeout(function() {
            de = void 0;
        }), de = ot.now();
    }
    function N(t, e) {
        var i, n = {
            height: t
        }, s = 0;
        for (e = e ? 1 : 0; 4 > s; s += 2 - e) i = St[s], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n;
    }
    function L(t, e, i) {
        for (var n, s = (ye[e] || []).concat(ye["*"]), o = 0, a = s.length; a > o; o++) if (n = s[o].call(i, e, t)) return n;
    }
    function H(t, e, i) {
        var n, s, o, a, r, l, u, h, c = this, d = {}, p = t.style, f = t.nodeType && Et(t), m = ot._data(t, "fxshow");
        i.queue || (null == (r = ot._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, l = r.empty.fire, 
        r.empty.fire = function() {
            r.unqueued || l();
        }), r.unqueued++, c.always(function() {
            c.always(function() {
                r.unqueued--, ot.queue(t, "fx").length || r.empty.fire();
            });
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [ p.overflow, p.overflowX, p.overflowY ], 
        u = ot.css(t, "display"), h = D(t.nodeName), "none" === u && (u = h), "inline" === u && "none" === ot.css(t, "float") && (nt.inlineBlockNeedsLayout && "inline" !== h ? p.zoom = 1 : p.display = "inline-block")), 
        i.overflow && (p.overflow = "hidden", nt.shrinkWrapBlocks() || c.always(function() {
            p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2];
        }));
        for (n in e) if (s = e[n], fe.exec(s)) {
            if (delete e[n], o = o || "toggle" === s, s === (f ? "hide" : "show")) {
                if ("show" !== s || !m || void 0 === m[n]) continue;
                f = !0;
            }
            d[n] = m && m[n] || ot.style(t, n);
        }
        if (!ot.isEmptyObject(d)) {
            m ? "hidden" in m && (f = m.hidden) : m = ot._data(t, "fxshow", {}), o && (m.hidden = !f), 
            f ? ot(t).show() : c.done(function() {
                ot(t).hide();
            }), c.done(function() {
                var e;
                ot._removeData(t, "fxshow");
                for (e in d) ot.style(t, e, d[e]);
            });
            for (n in d) a = L(f ? m[n] : 0, n, c), n in m || (m[n] = a.start, f && (a.end = a.start, 
            a.start = "width" === n || "height" === n ? 1 : 0));
        }
    }
    function O(t, e) {
        var i, n, s, o, a;
        for (i in t) if (n = ot.camelCase(i), s = e[n], o = t[i], ot.isArray(o) && (s = o[1], 
        o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (a = ot.cssHooks[n]) && "expand" in a) {
            o = a.expand(o), delete t[n];
            for (i in o) i in t || (t[i] = o[i], e[i] = s);
        } else e[n] = s;
    }
    function z(t, e, i) {
        var n, s, o = 0, a = ve.length, r = ot.Deferred().always(function() {
            delete l.elem;
        }), l = function() {
            if (s) return !1;
            for (var e = de || M(), i = Math.max(0, u.startTime + u.duration - e), n = 1 - (i / u.duration || 0), o = 0, a = u.tweens.length; a > o; o++) u.tweens[o].run(n);
            return r.notifyWith(t, [ u, n, i ]), 1 > n && a ? i : (r.resolveWith(t, [ u ]), 
            !1);
        }, u = r.promise({
            elem: t,
            props: ot.extend({}, e),
            opts: ot.extend(!0, {
                specialEasing: {}
            }, i),
            originalProperties: e,
            originalOptions: i,
            startTime: de || M(),
            duration: i.duration,
            tweens: [],
            createTween: function(e, i) {
                var n = ot.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(n), n;
            },
            stop: function(e) {
                var i = 0, n = e ? u.tweens.length : 0;
                if (s) return this;
                for (s = !0; n > i; i++) u.tweens[i].run(1);
                return e ? r.resolveWith(t, [ u, e ]) : r.rejectWith(t, [ u, e ]), this;
            }
        }), h = u.props;
        for (O(h, u.opts.specialEasing); a > o; o++) if (n = ve[o].call(u, t, h, u.opts)) return n;
        return ot.map(h, L, u), ot.isFunction(u.opts.start) && u.opts.start.call(t, u), 
        ot.fx.timer(ot.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
    }
    function R(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0, o = e.toLowerCase().match(bt) || [];
            if (ot.isFunction(i)) for (;n = o[s++]; ) "+" === n.charAt(0) ? (n = n.slice(1) || "*", 
            (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i);
        };
    }
    function W(t, e, i, n) {
        function s(r) {
            var l;
            return o[r] = !0, ot.each(t[r] || [], function(t, r) {
                var u = r(e, i, n);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (e.dataTypes.unshift(u), 
                s(u), !1);
            }), l;
        }
        var o = {}, a = t === Be;
        return s(e.dataTypes[0]) || !o["*"] && s("*");
    }
    function j(t, e) {
        var i, n, s = ot.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
        return i && ot.extend(!0, t, i), t;
    }
    function B(t, e, i) {
        for (var n, s, o, a, r = t.contents, l = t.dataTypes; "*" === l[0]; ) l.shift(), 
        void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
        if (s) for (a in r) if (r[a] && r[a].test(s)) {
            l.unshift(a);
            break;
        }
        if (l[0] in i) o = l[0]; else {
            for (a in i) {
                if (!l[0] || t.converters[a + " " + l[0]]) {
                    o = a;
                    break;
                }
                n || (n = a);
            }
            o = o || n;
        }
        return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0;
    }
    function $(t, e, i, n) {
        var s, o, a, r, l, u = {}, h = t.dataTypes.slice();
        if (h[1]) for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
        for (o = h.shift(); o; ) if (t.responseFields[o] && (i[t.responseFields[o]] = e), 
        !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = h.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
            if (!(a = u[l + " " + o] || u["* " + o])) for (s in u) if ((r = s.split(" "))[1] === o && (a = u[l + " " + r[0]] || u["* " + r[0]])) {
                !0 === a ? a = u[s] : !0 !== u[s] && (o = r[0], h.unshift(r[1]));
                break;
            }
            if (!0 !== a) if (a && t.throws) e = a(e); else try {
                e = a(e);
            } catch (t) {
                return {
                    state: "parsererror",
                    error: a ? t : "No conversion from " + l + " to " + o
                };
            }
        }
        return {
            state: "success",
            data: e
        };
    }
    function q(t, e, i, n) {
        var s;
        if (ot.isArray(e)) ot.each(e, function(e, s) {
            i || Ye.test(t) ? n(t, s) : q(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n);
        }); else if (i || "object" !== ot.type(e)) n(t, e); else for (s in e) q(t + "[" + s + "]", e[s], i, n);
    }
    function Y() {
        try {
            return new t.XMLHttpRequest();
        } catch (t) {}
    }
    function V() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {}
    }
    function U(t) {
        return ot.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow);
    }
    var X = [], K = X.slice, G = X.concat, Q = X.push, Z = X.indexOf, J = {}, tt = J.toString, et = J.hasOwnProperty, it = "".trim, nt = {}, st = "1.11.0", ot = function(t, e) {
        return new ot.fn.init(t, e);
    }, at = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rt = /^-ms-/, lt = /-([\da-z])/gi, ut = function(t, e) {
        return e.toUpperCase();
    };
    ot.fn = ot.prototype = {
        jquery: st,
        constructor: ot,
        selector: "",
        length: 0,
        toArray: function() {
            return K.call(this);
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : K.call(this);
        },
        pushStack: function(t) {
            var e = ot.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e;
        },
        each: function(t, e) {
            return ot.each(this, t, e);
        },
        map: function(t) {
            return this.pushStack(ot.map(this, function(e, i) {
                return t.call(e, i, e);
            }));
        },
        slice: function() {
            return this.pushStack(K.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(t) {
            var e = this.length, i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [ this[i] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: Q,
        sort: X.sort,
        splice: X.splice
    }, ot.extend = ot.fn.extend = function() {
        var t, e, i, n, s, o, a = arguments[0] || {}, r = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[r] || {}, r++), "object" == typeof a || ot.isFunction(a) || (a = {}), 
        r === l && (a = this, r--); l > r; r++) if (null != (s = arguments[r])) for (n in s) t = a[n], 
        i = s[n], a !== i && (u && i && (ot.isPlainObject(i) || (e = ot.isArray(i))) ? (e ? (e = !1, 
        o = t && ot.isArray(t) ? t : []) : o = t && ot.isPlainObject(t) ? t : {}, a[n] = ot.extend(u, o, i)) : void 0 !== i && (a[n] = i));
        return a;
    }, ot.extend({
        expando: "jQuery" + (st + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t);
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === ot.type(t);
        },
        isArray: Array.isArray || function(t) {
            return "array" === ot.type(t);
        },
        isWindow: function(t) {
            return null != t && t == t.window;
        },
        isNumeric: function(t) {
            return t - parseFloat(t) >= 0;
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0;
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== ot.type(t) || t.nodeType || ot.isWindow(t)) return !1;
            try {
                if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (t) {
                return !1;
            }
            if (nt.ownLast) for (e in t) return et.call(t, e);
            for (e in t) ;
            return void 0 === e || et.call(t, e);
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? J[tt.call(t)] || "object" : typeof t;
        },
        globalEval: function(e) {
            e && ot.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e);
            })(e);
        },
        camelCase: function(t) {
            return t.replace(rt, "ms-").replace(lt, ut);
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        },
        each: function(t, e, n) {
            var s = 0, o = t.length, a = i(t);
            if (n) {
                if (a) for (;o > s && !1 !== e.apply(t[s], n); s++) ; else for (s in t) if (!1 === e.apply(t[s], n)) break;
            } else if (a) for (;o > s && !1 !== e.call(t[s], s, t[s]); s++) ; else for (s in t) if (!1 === e.call(t[s], s, t[s])) break;
            return t;
        },
        trim: it && !it.call("\ufeff ") ? function(t) {
            return null == t ? "" : it.call(t);
        } : function(t) {
            return null == t ? "" : (t + "").replace(at, "");
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? ot.merge(n, "string" == typeof t ? [ t ] : t) : Q.call(n, t)), 
            n;
        },
        inArray: function(t, e, i) {
            var n;
            if (e) {
                if (Z) return Z.call(e, t, i);
                for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++) if (i in e && e[i] === t) return i;
            }
            return -1;
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, s = t.length; i > n; ) t[s++] = e[n++];
            if (i !== i) for (;void 0 !== e[n]; ) t[s++] = e[n++];
            return t.length = s, t;
        },
        grep: function(t, e, i) {
            for (var n = [], s = 0, o = t.length, a = !i; o > s; s++) !e(t[s], s) !== a && n.push(t[s]);
            return n;
        },
        map: function(t, e, n) {
            var s, o = 0, a = t.length, r = [];
            if (i(t)) for (;a > o; o++) null != (s = e(t[o], o, n)) && r.push(s); else for (o in t) null != (s = e(t[o], o, n)) && r.push(s);
            return G.apply([], r);
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, s;
            return "string" == typeof e && (s = t[e], e = t, t = s), ot.isFunction(t) ? (i = K.call(arguments, 2), 
            n = function() {
                return t.apply(e || this, i.concat(K.call(arguments)));
            }, n.guid = t.guid = t.guid || ot.guid++, n) : void 0;
        },
        now: function() {
            return +new Date();
        },
        support: nt
    }), ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        J["[object " + e + "]"] = e.toLowerCase();
    });
    var ht = function(t) {
        function e(t, e, i, n) {
            var s, o, a, r, u, d, p, f, m, g;
            if ((e ? e.ownerDocument || e : z) !== A && P(e), e = e || A, i = i || [], !t || "string" != typeof t) return i;
            if (1 !== (r = e.nodeType) && 9 !== r) return [];
            if (F && !n) {
                if (s = gt.exec(t)) if (a = s[1]) {
                    if (9 === r) {
                        if (!(o = e.getElementById(a)) || !o.parentNode) return i;
                        if (o.id === a) return i.push(o), i;
                    } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && H(e, o) && o.id === a) return i.push(o), 
                    i;
                } else {
                    if (s[2]) return Q.apply(i, e.getElementsByTagName(t)), i;
                    if ((a = s[3]) && x.getElementsByClassName && e.getElementsByClassName) return Q.apply(i, e.getElementsByClassName(a)), 
                    i;
                }
                if (x.qsa && (!M || !M.test(t))) {
                    if (f = p = O, m = e, g = 9 === r && t, 1 === r && "object" !== e.nodeName.toLowerCase()) {
                        for (d = h(t), (p = e.getAttribute("id")) ? f = p.replace(yt, "\\$&") : e.setAttribute("id", f), 
                        f = "[id='" + f + "'] ", u = d.length; u--; ) d[u] = f + c(d[u]);
                        m = vt.test(t) && l(e.parentNode) || e, g = d.join(",");
                    }
                    if (g) try {
                        return Q.apply(i, m.querySelectorAll(g)), i;
                    } catch (t) {} finally {
                        p || e.removeAttribute("id");
                    }
                }
            }
            return b(t.replace(at, "$1"), e, i, n);
        }
        function i() {
            function t(i, n) {
                return e.push(i + " ") > w.cacheLength && delete t[e.shift()], t[i + " "] = n;
            }
            var e = [];
            return t;
        }
        function n(t) {
            return t[O] = !0, t;
        }
        function s(t) {
            var e = A.createElement("div");
            try {
                return !!t(e);
            } catch (t) {
                return !1;
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null;
            }
        }
        function o(t, e) {
            for (var i = t.split("|"), n = t.length; n--; ) w.attrHandle[i[n]] = e;
        }
        function a(t, e) {
            var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
            if (n) return n;
            if (i) for (;i = i.nextSibling; ) if (i === e) return -1;
            return t ? 1 : -1;
        }
        function r(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var s, o = t([], i.length, e), a = o.length; a--; ) i[s = o[a]] && (i[s] = !(n[s] = i[s]));
                });
            });
        }
        function l(t) {
            return t && typeof t.getElementsByTagName !== Y && t;
        }
        function u() {}
        function h(t, i) {
            var n, s, o, a, r, l, u, h = B[t + " "];
            if (h) return i ? 0 : h.slice(0);
            for (r = t, l = [], u = w.preFilter; r; ) {
                (!n || (s = rt.exec(r))) && (s && (r = r.slice(s[0].length) || r), l.push(o = [])), 
                n = !1, (s = lt.exec(r)) && (n = s.shift(), o.push({
                    value: n,
                    type: s[0].replace(at, " ")
                }), r = r.slice(n.length));
                for (a in w.filter) !(s = dt[a].exec(r)) || u[a] && !(s = u[a](s)) || (n = s.shift(), 
                o.push({
                    value: n,
                    type: a,
                    matches: s
                }), r = r.slice(n.length));
                if (!n) break;
            }
            return i ? r.length : r ? e.error(t) : B(t, l).slice(0);
        }
        function c(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
            return n;
        }
        function d(t, e, i) {
            var n = e.dir, s = i && "parentNode" === n, o = W++;
            return e.first ? function(e, i, o) {
                for (;e = e[n]; ) if (1 === e.nodeType || s) return t(e, i, o);
            } : function(e, i, a) {
                var r, l, u = [ R, o ];
                if (a) {
                    for (;e = e[n]; ) if ((1 === e.nodeType || s) && t(e, i, a)) return !0;
                } else for (;e = e[n]; ) if (1 === e.nodeType || s) {
                    if (l = e[O] || (e[O] = {}), (r = l[n]) && r[0] === R && r[1] === o) return u[2] = r[2];
                    if (l[n] = u, u[2] = t(e, i, a)) return !0;
                }
            };
        }
        function p(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var s = t.length; s--; ) if (!t[s](e, i, n)) return !1;
                return !0;
            } : t[0];
        }
        function f(t, e, i, n, s) {
            for (var o, a = [], r = 0, l = t.length, u = null != e; l > r; r++) (o = t[r]) && (!i || i(o, n, s)) && (a.push(o), 
            u && e.push(r));
            return a;
        }
        function m(t, e, i, s, o, a) {
            return s && !s[O] && (s = m(s)), o && !o[O] && (o = m(o, a)), n(function(n, a, r, l) {
                var u, h, c, d = [], p = [], m = a.length, g = n || y(e || "*", r.nodeType ? [ r ] : r, []), v = !t || !n && e ? g : f(g, d, t, r, l), b = i ? o || (n ? t : m || s) ? [] : a : v;
                if (i && i(v, b, r, l), s) for (u = f(b, p), s(u, [], r, l), h = u.length; h--; ) (c = u[h]) && (b[p[h]] = !(v[p[h]] = c));
                if (n) {
                    if (o || t) {
                        if (o) {
                            for (u = [], h = b.length; h--; ) (c = b[h]) && u.push(v[h] = c);
                            o(null, b = [], u, l);
                        }
                        for (h = b.length; h--; ) (c = b[h]) && (u = o ? J.call(n, c) : d[h]) > -1 && (n[u] = !(a[u] = c));
                    }
                } else b = f(b === a ? b.splice(m, b.length) : b), o ? o(null, a, b, l) : Q.apply(a, b);
            });
        }
        function g(t) {
            for (var e, i, n, s = t.length, o = w.relative[t[0].type], a = o || w.relative[" "], r = o ? 1 : 0, l = d(function(t) {
                return t === e;
            }, a, !0), u = d(function(t) {
                return J.call(e, t) > -1;
            }, a, !0), h = [ function(t, i, n) {
                return !o && (n || i !== T) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n));
            } ]; s > r; r++) if (i = w.relative[t[r].type]) h = [ d(p(h), i) ]; else {
                if ((i = w.filter[t[r].type].apply(null, t[r].matches))[O]) {
                    for (n = ++r; s > n && !w.relative[t[n].type]; n++) ;
                    return m(r > 1 && p(h), r > 1 && c(t.slice(0, r - 1).concat({
                        value: " " === t[r - 2].type ? "*" : ""
                    })).replace(at, "$1"), i, n > r && g(t.slice(r, n)), s > n && g(t = t.slice(n)), s > n && c(t));
                }
                h.push(i);
            }
            return p(h);
        }
        function v(t, i) {
            var s = i.length > 0, o = t.length > 0, a = function(n, a, r, l, u) {
                var h, c, d, p = 0, m = "0", g = n && [], v = [], y = T, b = n || o && w.find.TAG("*", u), _ = R += null == y ? 1 : Math.random() || .1, x = b.length;
                for (u && (T = a !== A && a); m !== x && null != (h = b[m]); m++) {
                    if (o && h) {
                        for (c = 0; d = t[c++]; ) if (d(h, a, r)) {
                            l.push(h);
                            break;
                        }
                        u && (R = _);
                    }
                    s && ((h = !d && h) && p--, n && g.push(h));
                }
                if (p += m, s && m !== p) {
                    for (c = 0; d = i[c++]; ) d(g, v, a, r);
                    if (n) {
                        if (p > 0) for (;m--; ) g[m] || v[m] || (v[m] = K.call(l));
                        v = f(v);
                    }
                    Q.apply(l, v), u && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l);
                }
                return u && (R = _, T = y), g;
            };
            return s ? n(a) : a;
        }
        function y(t, i, n) {
            for (var s = 0, o = i.length; o > s; s++) e(t, i[s], n);
            return n;
        }
        function b(t, e, i, n) {
            var s, o, a, r, u, d = h(t);
            if (!n && 1 === d.length) {
                if ((o = d[0] = d[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === e.nodeType && F && w.relative[o[1].type]) {
                    if (!(e = (w.find.ID(a.matches[0].replace(bt, _t), e) || [])[0])) return i;
                    t = t.slice(o.shift().value.length);
                }
                for (s = dt.needsContext.test(t) ? 0 : o.length; s-- && (a = o[s], !w.relative[r = a.type]); ) if ((u = w.find[r]) && (n = u(a.matches[0].replace(bt, _t), vt.test(o[0].type) && l(e.parentNode) || e))) {
                    if (o.splice(s, 1), !(t = n.length && c(o))) return Q.apply(i, n), i;
                    break;
                }
            }
            return D(t, d)(n, e, !F, i, vt.test(t) && l(e.parentNode) || e), i;
        }
        var _, x, w, C, k, D, T, S, E, P, A, I, F, M, N, L, H, O = "sizzle" + -new Date(), z = t.document, R = 0, W = 0, j = i(), B = i(), $ = i(), q = function(t, e) {
            return t === e && (E = !0), 0;
        }, Y = "undefined", V = 1 << 31, U = {}.hasOwnProperty, X = [], K = X.pop, G = X.push, Q = X.push, Z = X.slice, J = X.indexOf || function(t) {
            for (var e = 0, i = this.length; i > e; e++) if (this[e] === t) return e;
            return -1;
        }, tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", et = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", nt = it.replace("w", "w#"), st = "\\[" + et + "*(" + it + ")" + et + "*(?:([*^$|!~]?=)" + et + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + et + "*\\]", ot = ":(" + it + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + st.replace(3, 8) + ")*)|.*)\\)|)", at = new RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"), rt = new RegExp("^" + et + "*," + et + "*"), lt = new RegExp("^" + et + "*([>+~]|" + et + ")" + et + "*"), ut = new RegExp("=" + et + "*([^\\]'\"]*?)" + et + "*\\]", "g"), ht = new RegExp(ot), ct = new RegExp("^" + nt + "$"), dt = {
            ID: new RegExp("^#(" + it + ")"),
            CLASS: new RegExp("^\\.(" + it + ")"),
            TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + st),
            PSEUDO: new RegExp("^" + ot),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + tt + ")$", "i"),
            needsContext: new RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
        }, pt = /^(?:input|select|textarea|button)$/i, ft = /^h\d$/i, mt = /^[^{]+\{\s*\[native \w/, gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, vt = /[+~]/, yt = /'|\\/g, bt = new RegExp("\\\\([\\da-f]{1,6}" + et + "?|(" + et + ")|.)", "ig"), _t = function(t, e, i) {
            var n = "0x" + e - 65536;
            return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320);
        };
        try {
            Q.apply(X = Z.call(z.childNodes), z.childNodes), X[z.childNodes.length].nodeType;
        } catch (t) {
            Q = {
                apply: X.length ? function(t, e) {
                    G.apply(t, Z.call(e));
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++]; ) ;
                    t.length = i - 1;
                }
            };
        }
        x = e.support = {}, k = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName;
        }, P = e.setDocument = function(t) {
            var e, i = t ? t.ownerDocument || t : z, n = i.defaultView;
            return i !== A && 9 === i.nodeType && i.documentElement ? (A = i, I = i.documentElement, 
            F = !k(i), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function() {
                P();
            }, !1) : n.attachEvent && n.attachEvent("onunload", function() {
                P();
            })), x.attributes = s(function(t) {
                return t.className = "i", !t.getAttribute("className");
            }), x.getElementsByTagName = s(function(t) {
                return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length;
            }), x.getElementsByClassName = mt.test(i.getElementsByClassName) && s(function(t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 
                2 === t.getElementsByClassName("i").length;
            }), x.getById = s(function(t) {
                return I.appendChild(t).id = O, !i.getElementsByName || !i.getElementsByName(O).length;
            }), x.getById ? (w.find.ID = function(t, e) {
                if (typeof e.getElementById !== Y && F) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [ i ] : [];
                }
            }, w.filter.ID = function(t) {
                var e = t.replace(bt, _t);
                return function(t) {
                    return t.getAttribute("id") === e;
                };
            }) : (delete w.find.ID, w.filter.ID = function(t) {
                var e = t.replace(bt, _t);
                return function(t) {
                    var i = typeof t.getAttributeNode !== Y && t.getAttributeNode("id");
                    return i && i.value === e;
                };
            }), w.find.TAG = x.getElementsByTagName ? function(t, e) {
                return typeof e.getElementsByTagName !== Y ? e.getElementsByTagName(t) : void 0;
            } : function(t, e) {
                var i, n = [], s = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (;i = o[s++]; ) 1 === i.nodeType && n.push(i);
                    return n;
                }
                return o;
            }, w.find.CLASS = x.getElementsByClassName && function(t, e) {
                return typeof e.getElementsByClassName !== Y && F ? e.getElementsByClassName(t) : void 0;
            }, N = [], M = [], (x.qsa = mt.test(i.querySelectorAll)) && (s(function(t) {
                t.innerHTML = "<select t=''><option selected=''></option></select>", t.querySelectorAll("[t^='']").length && M.push("[*^$]=" + et + "*(?:''|\"\")"), 
                t.querySelectorAll("[selected]").length || M.push("\\[" + et + "*(?:value|" + tt + ")"), 
                t.querySelectorAll(":checked").length || M.push(":checked");
            }), s(function(t) {
                var e = i.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + et + "*[*^$|!~]?="), 
                t.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), 
                M.push(",.*:");
            })), (x.matchesSelector = mt.test(L = I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && s(function(t) {
                x.disconnectedMatch = L.call(t, "div"), L.call(t, "[s!='']:x"), N.push("!=", ot);
            }), M = M.length && new RegExp(M.join("|")), N = N.length && new RegExp(N.join("|")), 
            e = mt.test(I.compareDocumentPosition), H = e || mt.test(I.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)));
            } : function(t, e) {
                if (e) for (;e = e.parentNode; ) if (e === t) return !0;
                return !1;
            }, q = e ? function(t, e) {
                if (t === e) return E = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n || (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 
                1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === z && H(z, t) ? -1 : e === i || e.ownerDocument === z && H(z, e) ? 1 : S ? J.call(S, t) - J.call(S, e) : 0 : 4 & n ? -1 : 1);
            } : function(t, e) {
                if (t === e) return E = !0, 0;
                var n, s = 0, o = t.parentNode, r = e.parentNode, l = [ t ], u = [ e ];
                if (!o || !r) return t === i ? -1 : e === i ? 1 : o ? -1 : r ? 1 : S ? J.call(S, t) - J.call(S, e) : 0;
                if (o === r) return a(t, e);
                for (n = t; n = n.parentNode; ) l.unshift(n);
                for (n = e; n = n.parentNode; ) u.unshift(n);
                for (;l[s] === u[s]; ) s++;
                return s ? a(l[s], u[s]) : l[s] === z ? -1 : u[s] === z ? 1 : 0;
            }, i) : A;
        }, e.matches = function(t, i) {
            return e(t, null, null, i);
        }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== A && P(t), i = i.replace(ut, "='$1']"), !(!x.matchesSelector || !F || N && N.test(i) || M && M.test(i))) try {
                var n = L.call(t, i);
                if (n || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n;
            } catch (t) {}
            return e(i, A, null, [ t ]).length > 0;
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== A && P(t), H(t, e);
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== A && P(t);
            var i = w.attrHandle[e.toLowerCase()], n = i && U.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !F) : void 0;
            return void 0 !== n ? n : x.attributes || !F ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t);
        }, e.uniqueSort = function(t) {
            var e, i = [], n = 0, s = 0;
            if (E = !x.detectDuplicates, S = !x.sortStable && t.slice(0), t.sort(q), E) {
                for (;e = t[s++]; ) e === t[s] && (n = i.push(s));
                for (;n--; ) t.splice(i[n], 1);
            }
            return S = null, t;
        }, C = e.getText = function(t) {
            var e, i = "", n = 0, s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += C(t);
                } else if (3 === s || 4 === s) return t.nodeValue;
            } else for (;e = t[n++]; ) i += C(e);
            return i;
        }, (w = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: dt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(bt, _t), t[3] = (t[4] || t[5] || "").replace(bt, _t), 
                    "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), 
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), 
                    t;
                },
                PSEUDO: function(t) {
                    var e, i = !t[5] && t[2];
                    return dt.CHILD.test(t[0]) ? null : (t[3] && void 0 !== t[4] ? t[2] = t[4] : i && ht.test(i) && (e = h(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), 
                    t[2] = i.slice(0, e)), t.slice(0, 3));
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(bt, _t).toLowerCase();
                    return "*" === t ? function() {
                        return !0;
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                    };
                },
                CLASS: function(t) {
                    var e = j[t + " "];
                    return e || (e = new RegExp("(^|" + et + ")" + t + "(" + et + "|$)")) && j(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== Y && t.getAttribute("class") || "");
                    });
                },
                ATTR: function(t, i, n) {
                    return function(s) {
                        var o = e.attr(s, t);
                        return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"));
                    };
                },
                CHILD: function(t, e, i, n, s) {
                    var o = "nth" !== t.slice(0, 3), a = "last" !== t.slice(-4), r = "of-type" === e;
                    return 1 === n && 0 === s ? function(t) {
                        return !!t.parentNode;
                    } : function(e, i, l) {
                        var u, h, c, d, p, f, m = o !== a ? "nextSibling" : "previousSibling", g = e.parentNode, v = r && e.nodeName.toLowerCase(), y = !l && !r;
                        if (g) {
                            if (o) {
                                for (;m; ) {
                                    for (c = e; c = c[m]; ) if (r ? c.nodeName.toLowerCase() === v : 1 === c.nodeType) return !1;
                                    f = m = "only" === t && !f && "nextSibling";
                                }
                                return !0;
                            }
                            if (f = [ a ? g.firstChild : g.lastChild ], a && y) {
                                for (p = (u = (h = g[O] || (g[O] = {}))[t] || [])[0] === R && u[1], d = u[0] === R && u[2], 
                                c = p && g.childNodes[p]; c = ++p && c && c[m] || (d = p = 0) || f.pop(); ) if (1 === c.nodeType && ++d && c === e) {
                                    h[t] = [ R, p, d ];
                                    break;
                                }
                            } else if (y && (u = (e[O] || (e[O] = {}))[t]) && u[0] === R) d = u[1]; else for (;(c = ++p && c && c[m] || (d = p = 0) || f.pop()) && ((r ? c.nodeName.toLowerCase() !== v : 1 !== c.nodeType) || !++d || (y && ((c[O] || (c[O] = {}))[t] = [ R, d ]), 
                            c !== e)); ) ;
                            return (d -= s) === n || d % n == 0 && d / n >= 0;
                        }
                    };
                },
                PSEUDO: function(t, i) {
                    var s, o = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[O] ? o(i) : o.length > 1 ? (s = [ t, t, "", i ], w.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, s = o(t, i), a = s.length; a--; ) n = J.call(t, s[a]), t[n] = !(e[n] = s[a]);
                    }) : function(t) {
                        return o(t, 0, s);
                    }) : o;
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [], i = [], s = D(t.replace(at, "$1"));
                    return s[O] ? n(function(t, e, i, n) {
                        for (var o, a = s(t, null, n, []), r = t.length; r--; ) (o = a[r]) && (t[r] = !(e[r] = o));
                    }) : function(t, n, o) {
                        return e[0] = t, s(e, null, o, i), !i.pop();
                    };
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0;
                    };
                }),
                contains: n(function(t) {
                    return function(e) {
                        return (e.textContent || e.innerText || C(e)).indexOf(t) > -1;
                    };
                }),
                lang: n(function(t) {
                    return ct.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, _t).toLowerCase(), 
                    function(e) {
                        var i;
                        do {
                            if (i = F ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-");
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                    };
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id;
                },
                root: function(t) {
                    return t === I;
                },
                focus: function(t) {
                    return t === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                },
                enabled: function(t) {
                    return !1 === t.disabled;
                },
                disabled: function(t) {
                    return !0 === t.disabled;
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected;
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(t) {
                    return !w.pseudos.empty(t);
                },
                header: function(t) {
                    return ft.test(t.nodeName);
                },
                input: function(t) {
                    return pt.test(t.nodeName);
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e;
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                },
                first: r(function() {
                    return [ 0 ];
                }),
                last: r(function(t, e) {
                    return [ e - 1 ];
                }),
                eq: r(function(t, e, i) {
                    return [ 0 > i ? i + e : i ];
                }),
                even: r(function(t, e) {
                    for (var i = 0; e > i; i += 2) t.push(i);
                    return t;
                }),
                odd: r(function(t, e) {
                    for (var i = 1; e > i; i += 2) t.push(i);
                    return t;
                }),
                lt: r(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0; ) t.push(n);
                    return t;
                }),
                gt: r(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e; ) t.push(n);
                    return t;
                })
            }
        }).pseudos.nth = w.pseudos.eq;
        for (_ in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[_] = function(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }(_);
        for (_ in {
            submit: !0,
            reset: !0
        }) w.pseudos[_] = function(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t;
            };
        }(_);
        return u.prototype = w.filters = w.pseudos, w.setFilters = new u(), D = e.compile = function(t, e) {
            var i, n = [], s = [], o = $[t + " "];
            if (!o) {
                for (e || (e = h(t)), i = e.length; i--; ) o = g(e[i]), o[O] ? n.push(o) : s.push(o);
                o = $(t, v(s, n));
            }
            return o;
        }, x.sortStable = O.split("").sort(q).join("") === O, x.detectDuplicates = !!E, 
        P(), x.sortDetached = s(function(t) {
            return 1 & t.compareDocumentPosition(A.createElement("div"));
        }), s(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
        }) || o("type|href|height|width", function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }), x.attributes && s(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
        }) || o("value", function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue;
        }), s(function(t) {
            return null == t.getAttribute("disabled");
        }) || o(tt, function(t, e, i) {
            var n;
            return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
        }), e;
    }(t);
    ot.find = ht, ot.expr = ht.selectors, ot.expr[":"] = ot.expr.pseudos, ot.unique = ht.uniqueSort, 
    ot.text = ht.getText, ot.isXMLDoc = ht.isXML, ot.contains = ht.contains;
    var ct = ot.expr.match.needsContext, dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, pt = /^.[^:#\[\.,]*$/;
    ot.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? ot.find.matchesSelector(n, t) ? [ n ] : [] : ot.find.matches(t, ot.grep(e, function(t) {
            return 1 === t.nodeType;
        }));
    }, ot.fn.extend({
        find: function(t) {
            var e, i = [], n = this, s = n.length;
            if ("string" != typeof t) return this.pushStack(ot(t).filter(function() {
                for (e = 0; s > e; e++) if (ot.contains(n[e], this)) return !0;
            }));
            for (e = 0; s > e; e++) ot.find(t, n[e], i);
            return i = this.pushStack(s > 1 ? ot.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, 
            i;
        },
        filter: function(t) {
            return this.pushStack(n(this, t || [], !1));
        },
        not: function(t) {
            return this.pushStack(n(this, t || [], !0));
        },
        is: function(t) {
            return !!n(this, "string" == typeof t && ct.test(t) ? ot(t) : t || [], !1).length;
        }
    });
    var ft, mt = t.document, gt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (ot.fn.init = function(t, e) {
        var i, n;
        if (!t) return this;
        if ("string" == typeof t) {
            if (!(i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [ null, t, null ] : gt.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || ft).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof ot ? e[0] : e, ot.merge(this, ot.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : mt, !0)), 
                dt.test(i[1]) && ot.isPlainObject(e)) for (i in e) ot.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this;
            }
            if ((n = mt.getElementById(i[2])) && n.parentNode) {
                if (n.id !== i[2]) return ft.find(t);
                this.length = 1, this[0] = n;
            }
            return this.context = mt, this.selector = t, this;
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ot.isFunction(t) ? void 0 !== ft.ready ? ft.ready(t) : t(ot) : (void 0 !== t.selector && (this.selector = t.selector, 
        this.context = t.context), ot.makeArray(t, this));
    }).prototype = ot.fn, ft = ot(mt);
    var vt = /^(?:parents|prev(?:Until|All))/, yt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ot.extend({
        dir: function(t, e, i) {
            for (var n = [], s = t[e]; s && 9 !== s.nodeType && (void 0 === i || 1 !== s.nodeType || !ot(s).is(i)); ) 1 === s.nodeType && n.push(s), 
            s = s[e];
            return n;
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i;
        }
    }), ot.fn.extend({
        has: function(t) {
            var e, i = ot(t, this), n = i.length;
            return this.filter(function() {
                for (e = 0; n > e; e++) if (ot.contains(this, i[e])) return !0;
            });
        },
        closest: function(t, e) {
            for (var i, n = 0, s = this.length, o = [], a = ct.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; s > n; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && ot.find.matchesSelector(i, t))) {
                o.push(i);
                break;
            }
            return this.pushStack(o.length > 1 ? ot.unique(o) : o);
        },
        index: function(t) {
            return t ? "string" == typeof t ? ot.inArray(this[0], ot(t)) : ot.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(t, e) {
            return this.pushStack(ot.unique(ot.merge(this.get(), ot(t, e))));
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        }
    }), ot.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null;
        },
        parents: function(t) {
            return ot.dir(t, "parentNode");
        },
        parentsUntil: function(t, e, i) {
            return ot.dir(t, "parentNode", i);
        },
        next: function(t) {
            return s(t, "nextSibling");
        },
        prev: function(t) {
            return s(t, "previousSibling");
        },
        nextAll: function(t) {
            return ot.dir(t, "nextSibling");
        },
        prevAll: function(t) {
            return ot.dir(t, "previousSibling");
        },
        nextUntil: function(t, e, i) {
            return ot.dir(t, "nextSibling", i);
        },
        prevUntil: function(t, e, i) {
            return ot.dir(t, "previousSibling", i);
        },
        siblings: function(t) {
            return ot.sibling((t.parentNode || {}).firstChild, t);
        },
        children: function(t) {
            return ot.sibling(t.firstChild);
        },
        contents: function(t) {
            return ot.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ot.merge([], t.childNodes);
        }
    }, function(t, e) {
        ot.fn[t] = function(i, n) {
            var s = ot.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = ot.filter(n, s)), 
            this.length > 1 && (yt[t] || (s = ot.unique(s)), vt.test(t) && (s = s.reverse())), 
            this.pushStack(s);
        };
    });
    var bt = /\S+/g, _t = {};
    ot.Callbacks = function(t) {
        var e, i, n, s, a, r, l = [], u = !(t = "string" == typeof t ? _t[t] || o(t) : ot.extend({}, t)).once && [], h = function(o) {
            for (i = t.memory && o, n = !0, a = r || 0, r = 0, s = l.length, e = !0; l && s > a; a++) if (!1 === l[a].apply(o[0], o[1]) && t.stopOnFalse) {
                i = !1;
                break;
            }
            e = !1, l && (u ? u.length && h(u.shift()) : i ? l = [] : c.disable());
        }, c = {
            add: function() {
                if (l) {
                    var n = l.length;
                    !function e(i) {
                        ot.each(i, function(i, n) {
                            var s = ot.type(n);
                            "function" === s ? t.unique && c.has(n) || l.push(n) : n && n.length && "string" !== s && e(n);
                        });
                    }(arguments), e ? s = l.length : i && (r = n, h(i));
                }
                return this;
            },
            remove: function() {
                return l && ot.each(arguments, function(t, i) {
                    for (var n; (n = ot.inArray(i, l, n)) > -1; ) l.splice(n, 1), e && (s >= n && s--, 
                    a >= n && a--);
                }), this;
            },
            has: function(t) {
                return t ? ot.inArray(t, l) > -1 : !(!l || !l.length);
            },
            empty: function() {
                return l = [], s = 0, this;
            },
            disable: function() {
                return l = u = i = void 0, this;
            },
            disabled: function() {
                return !l;
            },
            lock: function() {
                return u = void 0, i || c.disable(), this;
            },
            locked: function() {
                return !u;
            },
            fireWith: function(t, i) {
                return !l || n && !u || (i = i || [], i = [ t, i.slice ? i.slice() : i ], e ? u.push(i) : h(i)), 
                this;
            },
            fire: function() {
                return c.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!n;
            }
        };
        return c;
    }, ot.extend({
        Deferred: function(t) {
            var e = [ [ "resolve", "done", ot.Callbacks("once memory"), "resolved" ], [ "reject", "fail", ot.Callbacks("once memory"), "rejected" ], [ "notify", "progress", ot.Callbacks("memory") ] ], i = "pending", n = {
                state: function() {
                    return i;
                },
                always: function() {
                    return s.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var t = arguments;
                    return ot.Deferred(function(i) {
                        ot.each(e, function(e, o) {
                            var a = ot.isFunction(t[e]) && t[e];
                            s[o[1]](function() {
                                var t = a && a.apply(this, arguments);
                                t && ot.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, a ? [ t ] : arguments);
                            });
                        }), t = null;
                    }).promise();
                },
                promise: function(t) {
                    return null != t ? ot.extend(t, n) : n;
                }
            }, s = {};
            return n.pipe = n.then, ot.each(e, function(t, o) {
                var a = o[2], r = o[3];
                n[o[1]] = a.add, r && a.add(function() {
                    i = r;
                }, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = function() {
                    return s[o[0] + "With"](this === s ? n : this, arguments), this;
                }, s[o[0] + "With"] = a.fireWith;
            }), n.promise(s), t && t.call(s, s), s;
        },
        when: function(t) {
            var e, i, n, s = 0, o = K.call(arguments), a = o.length, r = 1 !== a || t && ot.isFunction(t.promise) ? a : 0, l = 1 === r ? t : ot.Deferred(), u = function(t, i, n) {
                return function(s) {
                    i[t] = this, n[t] = arguments.length > 1 ? K.call(arguments) : s, n === e ? l.notifyWith(i, n) : --r || l.resolveWith(i, n);
                };
            };
            if (a > 1) for (e = new Array(a), i = new Array(a), n = new Array(a); a > s; s++) o[s] && ot.isFunction(o[s].promise) ? o[s].promise().done(u(s, n, o)).fail(l.reject).progress(u(s, i, e)) : --r;
            return r || l.resolveWith(n, o), l.promise();
        }
    });
    var xt;
    ot.fn.ready = function(t) {
        return ot.ready.promise().done(t), this;
    }, ot.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? ot.readyWait++ : ot.ready(!0);
        },
        ready: function(t) {
            if (!0 === t ? !--ot.readyWait : !ot.isReady) {
                if (!mt.body) return setTimeout(ot.ready);
                ot.isReady = !0, !0 !== t && --ot.readyWait > 0 || (xt.resolveWith(mt, [ ot ]), 
                ot.fn.trigger && ot(mt).trigger("ready").off("ready"));
            }
        }
    }), ot.ready.promise = function(e) {
        if (!xt) if (xt = ot.Deferred(), "complete" === mt.readyState) setTimeout(ot.ready); else if (mt.addEventListener) mt.addEventListener("DOMContentLoaded", r, !1), 
        t.addEventListener("load", r, !1); else {
            mt.attachEvent("onreadystatechange", r), t.attachEvent("onload", r);
            var i = !1;
            try {
                i = null == t.frameElement && mt.documentElement;
            } catch (t) {}
            i && i.doScroll && function t() {
                if (!ot.isReady) {
                    try {
                        i.doScroll("left");
                    } catch (e) {
                        return setTimeout(t, 50);
                    }
                    a(), ot.ready();
                }
            }();
        }
        return xt.promise(e);
    };
    var wt, Ct = "undefined";
    for (wt in ot(nt)) break;
    nt.ownLast = "0" !== wt, nt.inlineBlockNeedsLayout = !1, ot(function() {
        var t, e, i = mt.getElementsByTagName("body")[0];
        i && (t = mt.createElement("div"), t.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
        e = mt.createElement("div"), i.appendChild(t).appendChild(e), typeof e.style.zoom !== Ct && (e.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", 
        (nt.inlineBlockNeedsLayout = 3 === e.offsetWidth) && (i.style.zoom = 1)), i.removeChild(t), 
        t = e = null);
    }), function() {
        var t = mt.createElement("div");
        if (null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete t.test;
            } catch (t) {
                nt.deleteExpando = !1;
            }
        }
        t = null;
    }(), ot.acceptData = function(t) {
        var e = ot.noData[(t.nodeName + " ").toLowerCase()], i = +t.nodeType || 1;
        return (1 === i || 9 === i) && (!e || !0 !== e && t.getAttribute("classid") === e);
    };
    var kt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Dt = /([A-Z])/g;
    ot.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return !!(t = t.nodeType ? ot.cache[t[ot.expando]] : t[ot.expando]) && !u(t);
        },
        data: function(t, e, i) {
            return h(t, e, i);
        },
        removeData: function(t, e) {
            return c(t, e);
        },
        _data: function(t, e, i) {
            return h(t, e, i, !0);
        },
        _removeData: function(t, e) {
            return c(t, e, !0);
        }
    }), ot.fn.extend({
        data: function(t, e) {
            var i, n, s, o = this[0], a = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (s = ot.data(o), 1 === o.nodeType && !ot._data(o, "parsedAttrs"))) {
                    for (i = a.length; i--; ) 0 === (n = a[i].name).indexOf("data-") && (n = ot.camelCase(n.slice(5)), 
                    l(o, n, s[n]));
                    ot._data(o, "parsedAttrs", !0);
                }
                return s;
            }
            return "object" == typeof t ? this.each(function() {
                ot.data(this, t);
            }) : arguments.length > 1 ? this.each(function() {
                ot.data(this, t, e);
            }) : o ? l(o, t, ot.data(o, t)) : void 0;
        },
        removeData: function(t) {
            return this.each(function() {
                ot.removeData(this, t);
            });
        }
    }), ot.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = ot._data(t, e), i && (!n || ot.isArray(i) ? n = ot._data(t, e, ot.makeArray(i)) : n.push(i)), 
            n || []) : void 0;
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = ot.queue(t, e), n = i.length, s = i.shift(), o = ot._queueHooks(t, e), a = function() {
                ot.dequeue(t, e);
            };
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), 
            delete o.stop, s.call(t, a, o)), !n && o && o.empty.fire();
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return ot._data(t, i) || ot._data(t, i, {
                empty: ot.Callbacks("once memory").add(function() {
                    ot._removeData(t, e + "queue"), ot._removeData(t, i);
                })
            });
        }
    }), ot.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? ot.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = ot.queue(this, t, e);
                ot._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && ot.dequeue(this, t);
            });
        },
        dequeue: function(t) {
            return this.each(function() {
                ot.dequeue(this, t);
            });
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", []);
        },
        promise: function(t, e) {
            var i, n = 1, s = ot.Deferred(), o = this, a = this.length, r = function() {
                --n || s.resolveWith(o, [ o ]);
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--; ) (i = ot._data(o[a], t + "queueHooks")) && i.empty && (n++, 
            i.empty.add(r));
            return r(), s.promise(e);
        }
    });
    var Tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, St = [ "Top", "Right", "Bottom", "Left" ], Et = function(t, e) {
        return t = e || t, "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t);
    }, Pt = ot.access = function(t, e, i, n, s, o, a) {
        var r = 0, l = t.length, u = null == i;
        if ("object" === ot.type(i)) {
            s = !0;
            for (r in i) ot.access(t, e, r, i[r], !0, o, a);
        } else if (void 0 !== n && (s = !0, ot.isFunction(n) || (a = !0), u && (a ? (e.call(t, n), 
        e = null) : (u = e, e = function(t, e, i) {
            return u.call(ot(t), i);
        })), e)) for (;l > r; r++) e(t[r], i, a ? n : n.call(t[r], r, e(t[r], i)));
        return s ? t : u ? e.call(t) : l ? e(t[0], i) : o;
    }, At = /^(?:checkbox|radio)$/i;
    !function() {
        var t = mt.createDocumentFragment(), e = mt.createElement("div"), i = mt.createElement("input");
        if (e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a>", 
        nt.leadingWhitespace = 3 === e.firstChild.nodeType, nt.tbody = !e.getElementsByTagName("tbody").length, 
        nt.htmlSerialize = !!e.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== mt.createElement("nav").cloneNode(!0).outerHTML, 
        i.type = "checkbox", i.checked = !0, t.appendChild(i), nt.appendChecked = i.checked, 
        e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, 
        t.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", 
        nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, 
        e.attachEvent && (e.attachEvent("onclick", function() {
            nt.noCloneEvent = !1;
        }), e.cloneNode(!0).click()), null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete e.test;
            } catch (t) {
                nt.deleteExpando = !1;
            }
        }
        t = e = i = null;
    }(), function() {
        var e, i, n = mt.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        }) i = "on" + e, (nt[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), nt[e + "Bubbles"] = !1 === n.attributes[i].expando);
        n = null;
    }();
    var It = /^(?:input|select|textarea)$/i, Ft = /^key/, Mt = /^(?:mouse|contextmenu)|click/, Nt = /^(?:focusinfocus|focusoutblur)$/, Lt = /^([^.]*)(?:\.(.+)|)$/;
    ot.event = {
        global: {},
        add: function(t, e, i, n, s) {
            var o, a, r, l, u, h, c, d, p, f, m, g = ot._data(t);
            if (g) {
                for (i.handler && (l = i, i = l.handler, s = l.selector), i.guid || (i.guid = ot.guid++), 
                (a = g.events) || (a = g.events = {}), (h = g.handle) || (h = g.handle = function(t) {
                    return typeof ot === Ct || t && ot.event.triggered === t.type ? void 0 : ot.event.dispatch.apply(h.elem, arguments);
                }, h.elem = t), r = (e = (e || "").match(bt) || [ "" ]).length; r--; ) o = Lt.exec(e[r]) || [], 
                p = m = o[1], f = (o[2] || "").split(".").sort(), p && (u = ot.event.special[p] || {}, 
                p = (s ? u.delegateType : u.bindType) || p, u = ot.event.special[p] || {}, c = ot.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && ot.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                }, l), (d = a[p]) || (d = a[p] = [], d.delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, f, h) || (t.addEventListener ? t.addEventListener(p, h, !1) : t.attachEvent && t.attachEvent("on" + p, h))), 
                u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, c) : d.push(c), 
                ot.event.global[p] = !0);
                t = null;
            }
        },
        remove: function(t, e, i, n, s) {
            var o, a, r, l, u, h, c, d, p, f, m, g = ot.hasData(t) && ot._data(t);
            if (g && (h = g.events)) {
                for (u = (e = (e || "").match(bt) || [ "" ]).length; u--; ) if (r = Lt.exec(e[u]) || [], 
                p = m = r[1], f = (r[2] || "").split(".").sort(), p) {
                    for (c = ot.event.special[p] || {}, d = h[p = (n ? c.delegateType : c.bindType) || p] || [], 
                    r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--; ) a = d[o], 
                    !s && m !== a.origType || i && i.guid !== a.guid || r && !r.test(a.namespace) || n && n !== a.selector && ("**" !== n || !a.selector) || (d.splice(o, 1), 
                    a.selector && d.delegateCount--, c.remove && c.remove.call(t, a));
                    l && !d.length && (c.teardown && !1 !== c.teardown.call(t, f, g.handle) || ot.removeEvent(t, p, g.handle), 
                    delete h[p]);
                } else for (p in h) ot.event.remove(t, p + e[u], i, n, !0);
                ot.isEmptyObject(h) && (delete g.handle, ot._removeData(t, "events"));
            }
        },
        trigger: function(e, i, n, s) {
            var o, a, r, l, u, h, c, d = [ n || mt ], p = et.call(e, "type") ? e.type : e, f = et.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = h = n = n || mt, 3 !== n.nodeType && 8 !== n.nodeType && !Nt.test(p + ot.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), 
            p = f.shift(), f.sort()), a = p.indexOf(":") < 0 && "on" + p, e = e[ot.expando] ? e : new ot.Event(p, "object" == typeof e && e), 
            e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            e.result = void 0, e.target || (e.target = n), i = null == i ? [ e ] : ot.makeArray(i, [ e ]), 
            u = ot.event.special[p] || {}, s || !u.trigger || !1 !== u.trigger.apply(n, i))) {
                if (!s && !u.noBubble && !ot.isWindow(n)) {
                    for (l = u.delegateType || p, Nt.test(l + p) || (r = r.parentNode); r; r = r.parentNode) d.push(r), 
                    h = r;
                    h === (n.ownerDocument || mt) && d.push(h.defaultView || h.parentWindow || t);
                }
                for (c = 0; (r = d[c++]) && !e.isPropagationStopped(); ) e.type = c > 1 ? l : u.bindType || p, 
                (o = (ot._data(r, "events") || {})[e.type] && ot._data(r, "handle")) && o.apply(r, i), 
                (o = a && r[a]) && o.apply && ot.acceptData(r) && (e.result = o.apply(r, i), !1 === e.result && e.preventDefault());
                if (e.type = p, !s && !e.isDefaultPrevented() && (!u._default || !1 === u._default.apply(d.pop(), i)) && ot.acceptData(n) && a && n[p] && !ot.isWindow(n)) {
                    (h = n[a]) && (n[a] = null), ot.event.triggered = p;
                    try {
                        n[p]();
                    } catch (t) {}
                    ot.event.triggered = void 0, h && (n[a] = h);
                }
                return e.result;
            }
        },
        dispatch: function(t) {
            t = ot.event.fix(t);
            var e, i, n, s, o, a = [], r = K.call(arguments), l = (ot._data(this, "events") || {})[t.type] || [], u = ot.event.special[t.type] || {};
            if (r[0] = t, t.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, t)) {
                for (a = ot.event.handlers.call(this, t, l), e = 0; (s = a[e++]) && !t.isPropagationStopped(); ) for (t.currentTarget = s.elem, 
                o = 0; (n = s.handlers[o++]) && !t.isImmediatePropagationStopped(); ) (!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, 
                t.data = n.data, void 0 !== (i = ((ot.event.special[n.origType] || {}).handle || n.handler).apply(s.elem, r)) && !1 === (t.result = i) && (t.preventDefault(), 
                t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result;
            }
        },
        handlers: function(t, e) {
            var i, n, s, o, a = [], r = e.delegateCount, l = t.target;
            if (r && l.nodeType && (!t.button || "click" !== t.type)) for (;l != this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                for (s = [], o = 0; r > o; o++) n = e[o], i = n.selector + " ", void 0 === s[i] && (s[i] = n.needsContext ? ot(i, this).index(l) >= 0 : ot.find(i, this, null, [ l ]).length), 
                s[i] && s.push(n);
                s.length && a.push({
                    elem: l,
                    handlers: s
                });
            }
            return r < e.length && a.push({
                elem: this,
                handlers: e.slice(r)
            }), a;
        },
        fix: function(t) {
            if (t[ot.expando]) return t;
            var e, i, n, s = t.type, o = t, a = this.fixHooks[s];
            for (a || (this.fixHooks[s] = a = Mt.test(s) ? this.mouseHooks : Ft.test(s) ? this.keyHooks : {}), 
            n = a.props ? this.props.concat(a.props) : this.props, t = new ot.Event(o), e = n.length; e--; ) i = n[e], 
            t[i] = o[i];
            return t.target || (t.target = o.srcElement || mt), 3 === t.target.nodeType && (t.target = t.target.parentNode), 
            t.metaKey = !!t.metaKey, a.filter ? a.filter(t, o) : t;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), 
                t;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, s, o = e.button, a = e.fromElement;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || mt, 
                s = n.documentElement, i = n.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), 
                t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), 
                !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), 
                t;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus) try {
                        return this.focus(), !1;
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ot.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(t) {
                    return ot.nodeName(t.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && (t.originalEvent.returnValue = t.result);
                }
            }
        },
        simulate: function(t, e, i, n) {
            var s = ot.extend(new ot.Event(), i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? ot.event.trigger(s, null, e) : ot.event.dispatch.call(e, s), s.isDefaultPrevented() && i.preventDefault();
        }
    }, ot.removeEvent = mt.removeEventListener ? function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1);
    } : function(t, e, i) {
        var n = "on" + e;
        t.detachEvent && (typeof t[n] === Ct && (t[n] = null), t.detachEvent(n, i));
    }, ot.Event = function(t, e) {
        return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, 
        this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && (!1 === t.returnValue || t.getPreventDefault && t.getPreventDefault()) ? d : p) : this.type = t, 
        e && ot.extend(this, e), this.timeStamp = t && t.timeStamp || ot.now(), void (this[ot.expando] = !0)) : new ot.Event(t, e);
    }, ot.Event.prototype = {
        isDefaultPrevented: p,
        isPropagationStopped: p,
        isImmediatePropagationStopped: p,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = d, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1);
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = d, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = d, this.stopPropagation();
        }
    }, ot.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(t, e) {
        ot.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this, s = t.relatedTarget, o = t.handleObj;
                return (!s || s !== n && !ot.contains(n, s)) && (t.type = o.origType, i = o.handler.apply(this, arguments), 
                t.type = e), i;
            }
        };
    }), nt.submitBubbles || (ot.event.special.submit = {
        setup: function() {
            return !ot.nodeName(this, "form") && void ot.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target, i = ot.nodeName(e, "input") || ot.nodeName(e, "button") ? e.form : void 0;
                i && !ot._data(i, "submitBubbles") && (ot.event.add(i, "submit._submit", function(t) {
                    t._submit_bubble = !0;
                }), ot._data(i, "submitBubbles", !0));
            });
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ot.event.simulate("submit", this.parentNode, t, !0));
        },
        teardown: function() {
            return !ot.nodeName(this, "form") && void ot.event.remove(this, "._submit");
        }
    }), nt.changeBubbles || (ot.event.special.change = {
        setup: function() {
            return It.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ot.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0);
            }), ot.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), ot.event.simulate("change", this, t, !0);
            })), !1) : void ot.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                It.test(e.nodeName) && !ot._data(e, "changeBubbles") && (ot.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || ot.event.simulate("change", this.parentNode, t, !0);
                }), ot._data(e, "changeBubbles", !0));
            });
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0;
        },
        teardown: function() {
            return ot.event.remove(this, "._change"), !It.test(this.nodeName);
        }
    }), nt.focusinBubbles || ot.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            ot.event.simulate(e, t.target, ot.event.fix(t), !0);
        };
        ot.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this, s = ot._data(n, e);
                s || n.addEventListener(t, i, !0), ot._data(n, e, (s || 0) + 1);
            },
            teardown: function() {
                var n = this.ownerDocument || this, s = ot._data(n, e) - 1;
                s ? ot._data(n, e, s) : (n.removeEventListener(t, i, !0), ot._removeData(n, e));
            }
        };
    }), ot.fn.extend({
        on: function(t, e, i, n, s) {
            var o, a;
            if ("object" == typeof t) {
                "string" != typeof e && (i = i || e, e = void 0);
                for (o in t) this.on(o, e, i, t[o], s);
                return this;
            }
            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, 
            i = void 0) : (n = i, i = e, e = void 0)), !1 === n) n = p; else if (!n) return this;
            return 1 === s && (a = n, n = function(t) {
                return ot().off(t), a.apply(this, arguments);
            }, n.guid = a.guid || (a.guid = ot.guid++)), this.each(function() {
                ot.event.add(this, t, n, i, e);
            });
        },
        one: function(t, e, i, n) {
            return this.on(t, e, i, n, 1);
        },
        off: function(t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, ot(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), 
            this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this;
            }
            return (!1 === e || "function" == typeof e) && (i = e, e = void 0), !1 === i && (i = p), 
            this.each(function() {
                ot.event.remove(this, t, i, e);
            });
        },
        trigger: function(t, e) {
            return this.each(function() {
                ot.event.trigger(t, e, this);
            });
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? ot.event.trigger(t, e, i, !0) : void 0;
        }
    });
    var Ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Ot = / jQuery\d+="(?:null|\d+)"/g, zt = new RegExp("<(?:" + Ht + ")[\\s/>]", "i"), Rt = /^\s+/, Wt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, jt = /<([\w:]+)/, Bt = /<tbody/i, $t = /<|&#?\w+;/, qt = /<(?:script|style|link)/i, Yt = /checked\s*(?:[^=]|=\s*.checked.)/i, Vt = /^$|\/(?:java|ecma)script/i, Ut = /^true\/(.*)/, Xt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Kt = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: nt.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, Gt = m(mt).appendChild(mt.createElement("div"));
    Kt.optgroup = Kt.option, Kt.tbody = Kt.tfoot = Kt.colgroup = Kt.caption = Kt.thead, 
    Kt.th = Kt.td, ot.extend({
        clone: function(t, e, i) {
            var n, s, o, a, r, l = ot.contains(t.ownerDocument, t);
            if (nt.html5Clone || ot.isXMLDoc(t) || !zt.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Gt.innerHTML = t.outerHTML, 
            Gt.removeChild(o = Gt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t))) for (n = g(o), 
            r = g(t), a = 0; null != (s = r[a]); ++a) n[a] && C(s, n[a]);
            if (e) if (i) for (r = r || g(t), n = n || g(o), a = 0; null != (s = r[a]); a++) w(s, n[a]); else w(t, o);
            return (n = g(o, "script")).length > 0 && x(n, !l && g(t, "script")), n = r = s = null, 
            o;
        },
        buildFragment: function(t, e, i, n) {
            for (var s, o, a, r, l, u, h, c = t.length, d = m(e), p = [], f = 0; c > f; f++) if ((o = t[f]) || 0 === o) if ("object" === ot.type(o)) ot.merge(p, o.nodeType ? [ o ] : o); else if ($t.test(o)) {
                for (r = r || d.appendChild(e.createElement("div")), l = (jt.exec(o) || [ "", "" ])[1].toLowerCase(), 
                h = Kt[l] || Kt._default, r.innerHTML = h[1] + o.replace(Wt, "<$1></$2>") + h[2], 
                s = h[0]; s--; ) r = r.lastChild;
                if (!nt.leadingWhitespace && Rt.test(o) && p.push(e.createTextNode(Rt.exec(o)[0])), 
                !nt.tbody) for (s = (o = "table" !== l || Bt.test(o) ? "<table>" !== h[1] || Bt.test(o) ? 0 : r : r.firstChild) && o.childNodes.length; s--; ) ot.nodeName(u = o.childNodes[s], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (ot.merge(p, r.childNodes), r.textContent = ""; r.firstChild; ) r.removeChild(r.firstChild);
                r = d.lastChild;
            } else p.push(e.createTextNode(o));
            for (r && d.removeChild(r), nt.appendChecked || ot.grep(g(p, "input"), v), f = 0; o = p[f++]; ) if ((!n || -1 === ot.inArray(o, n)) && (a = ot.contains(o.ownerDocument, o), 
            r = g(d.appendChild(o), "script"), a && x(r), i)) for (s = 0; o = r[s++]; ) Vt.test(o.type || "") && i.push(o);
            return r = null, d;
        },
        cleanData: function(t, e) {
            for (var i, n, s, o, a = 0, r = ot.expando, l = ot.cache, u = nt.deleteExpando, h = ot.event.special; null != (i = t[a]); a++) if ((e || ot.acceptData(i)) && (s = i[r], 
            o = s && l[s])) {
                if (o.events) for (n in o.events) h[n] ? ot.event.remove(i, n) : ot.removeEvent(i, n, o.handle);
                l[s] && (delete l[s], u ? delete i[r] : typeof i.removeAttribute !== Ct ? i.removeAttribute(r) : i[r] = null, 
                X.push(s));
            }
        }
    }), ot.fn.extend({
        text: function(t) {
            return Pt(this, function(t) {
                return void 0 === t ? ot.text(this) : this.empty().append((this[0] && this[0].ownerDocument || mt).createTextNode(t));
            }, null, t, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || y(this, t).appendChild(t);
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.insertBefore(t, e.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
            });
        },
        remove: function(t, e) {
            for (var i, n = t ? ot.filter(t, this) : this, s = 0; null != (i = n[s]); s++) e || 1 !== i.nodeType || ot.cleanData(g(i)), 
            i.parentNode && (e && ot.contains(i.ownerDocument, i) && x(g(i, "script")), i.parentNode.removeChild(i));
            return this;
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && ot.cleanData(g(t, !1)); t.firstChild; ) t.removeChild(t.firstChild);
                t.options && ot.nodeName(t, "select") && (t.options.length = 0);
            }
            return this;
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return ot.clone(this, t, e);
            });
        },
        html: function(t) {
            return Pt(this, function(t) {
                var e = this[0] || {}, i = 0, n = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Ot, "") : void 0;
                if (!("string" != typeof t || qt.test(t) || !nt.htmlSerialize && zt.test(t) || !nt.leadingWhitespace && Rt.test(t) || Kt[(jt.exec(t) || [ "", "" ])[1].toLowerCase()])) {
                    t = t.replace(Wt, "<$1></$2>");
                    try {
                        for (;n > i; i++) 1 === (e = this[i] || {}).nodeType && (ot.cleanData(g(e, !1)), 
                        e.innerHTML = t);
                        e = 0;
                    } catch (t) {}
                }
                e && this.empty().append(t);
            }, null, t, arguments.length);
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, ot.cleanData(g(this)), t && t.replaceChild(e, this);
            }), t && (t.length || t.nodeType) ? this : this.remove();
        },
        detach: function(t) {
            return this.remove(t, !0);
        },
        domManip: function(t, e) {
            t = G.apply([], t);
            var i, n, s, o, a, r, l = 0, u = this.length, h = this, c = u - 1, d = t[0], p = ot.isFunction(d);
            if (p || u > 1 && "string" == typeof d && !nt.checkClone && Yt.test(d)) return this.each(function(i) {
                var n = h.eq(i);
                p && (t[0] = d.call(this, i, n.html())), n.domManip(t, e);
            });
            if (u && (r = ot.buildFragment(t, this[0].ownerDocument, !1, this), i = r.firstChild, 
            1 === r.childNodes.length && (r = i), i)) {
                for (s = (o = ot.map(g(r, "script"), b)).length; u > l; l++) n = r, l !== c && (n = ot.clone(n, !0, !0), 
                s && ot.merge(o, g(n, "script"))), e.call(this[l], n, l);
                if (s) for (a = o[o.length - 1].ownerDocument, ot.map(o, _), l = 0; s > l; l++) n = o[l], 
                Vt.test(n.type || "") && !ot._data(n, "globalEval") && ot.contains(a, n) && (n.src ? ot._evalUrl && ot._evalUrl(n.src) : ot.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Xt, "")));
                r = i = null;
            }
            return this;
        }
    }), ot.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        ot.fn[t] = function(t) {
            for (var i, n = 0, s = [], o = ot(t), a = o.length - 1; a >= n; n++) i = n === a ? this : this.clone(!0), 
            ot(o[n])[e](i), Q.apply(s, i.get());
            return this.pushStack(s);
        };
    });
    var Qt, Zt = {};
    !function() {
        var t, e, i = mt.createElement("div");
        i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        (t = i.getElementsByTagName("a")[0]).style.cssText = "float:left;opacity:.5", nt.opacity = /^0.5/.test(t.style.opacity), 
        nt.cssFloat = !!t.style.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", 
        nt.clearCloneStyle = "content-box" === i.style.backgroundClip, t = i = null, nt.shrinkWrapBlocks = function() {
            var t, i, n;
            if (null == e) {
                if (!(t = mt.getElementsByTagName("body")[0])) return;
                "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", i = mt.createElement("div"), 
                n = mt.createElement("div"), t.appendChild(i).appendChild(n), e = !1, typeof n.style.zoom !== Ct && (n.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0;width:1px;padding:1px;zoom:1", 
                n.innerHTML = "<div></div>", n.firstChild.style.width = "5px", e = 3 !== n.offsetWidth), 
                t.removeChild(i), t = i = n = null;
            }
            return e;
        };
    }();
    var Jt, te, ee = /^margin/, ie = new RegExp("^(" + Tt + ")(?!px)[a-z%]+$", "i"), ne = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (Jt = function(t) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null);
    }, te = function(t, e, i) {
        var n, s, o, a, r = t.style;
        return i = i || Jt(t), a = i ? i.getPropertyValue(e) || i[e] : void 0, i && ("" !== a || ot.contains(t.ownerDocument, t) || (a = ot.style(t, e)), 
        ie.test(a) && ee.test(e) && (n = r.width, s = r.minWidth, o = r.maxWidth, r.minWidth = r.maxWidth = r.width = a, 
        a = i.width, r.width = n, r.minWidth = s, r.maxWidth = o)), void 0 === a ? a : a + "";
    }) : mt.documentElement.currentStyle && (Jt = function(t) {
        return t.currentStyle;
    }, te = function(t, e, i) {
        var n, s, o, a, r = t.style;
        return i = i || Jt(t), null == (a = i ? i[e] : void 0) && r && r[e] && (a = r[e]), 
        ie.test(a) && !ne.test(e) && (n = r.left, s = t.runtimeStyle, (o = s && s.left) && (s.left = t.currentStyle.left), 
        r.left = "fontSize" === e ? "1em" : a, a = r.pixelLeft + "px", r.left = n, o && (s.left = o)), 
        void 0 === a ? a : a + "" || "auto";
    }), function() {
        function e() {
            var e, i, n = mt.getElementsByTagName("body")[0];
            n && (e = mt.createElement("div"), i = mt.createElement("div"), e.style.cssText = u, 
            n.appendChild(e).appendChild(i), i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", 
            ot.swap(n, null != n.style.zoom ? {
                zoom: 1
            } : {}, function() {
                s = 4 === i.offsetWidth;
            }), o = !0, a = !1, r = !0, t.getComputedStyle && (a = "1%" !== (t.getComputedStyle(i, null) || {}).top, 
            o = "4px" === (t.getComputedStyle(i, null) || {
                width: "4px"
            }).width), n.removeChild(e), i = n = null);
        }
        var i, n, s, o, a, r, l = mt.createElement("div"), u = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px";
        l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        (i = l.getElementsByTagName("a")[0]).style.cssText = "float:left;opacity:.5", nt.opacity = /^0.5/.test(i.style.opacity), 
        nt.cssFloat = !!i.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", 
        nt.clearCloneStyle = "content-box" === l.style.backgroundClip, i = l = null, ot.extend(nt, {
            reliableHiddenOffsets: function() {
                if (null != n) return n;
                var t, e, i, s = mt.createElement("div"), o = mt.getElementsByTagName("body")[0];
                return o ? (s.setAttribute("className", "t"), s.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
                t = mt.createElement("div"), t.style.cssText = u, o.appendChild(t).appendChild(s), 
                s.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = s.getElementsByTagName("td"), 
                e[0].style.cssText = "padding:0;margin:0;border:0;display:none", i = 0 === e[0].offsetHeight, 
                e[0].style.display = "", e[1].style.display = "none", n = i && 0 === e[0].offsetHeight, 
                o.removeChild(t), s = o = null, n) : void 0;
            },
            boxSizing: function() {
                return null == s && e(), s;
            },
            boxSizingReliable: function() {
                return null == o && e(), o;
            },
            pixelPosition: function() {
                return null == a && e(), a;
            },
            reliableMarginRight: function() {
                var e, i, n, s;
                if (null == r && t.getComputedStyle) {
                    if (!(e = mt.getElementsByTagName("body")[0])) return;
                    i = mt.createElement("div"), n = mt.createElement("div"), i.style.cssText = u, e.appendChild(i).appendChild(n), 
                    (s = n.appendChild(mt.createElement("div"))).style.cssText = n.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0", 
                    s.style.marginRight = s.style.width = "0", n.style.width = "1px", r = !parseFloat((t.getComputedStyle(s, null) || {}).marginRight), 
                    e.removeChild(i);
                }
                return r;
            }
        });
    }(), ot.swap = function(t, e, i, n) {
        var s, o, a = {};
        for (o in e) a[o] = t.style[o], t.style[o] = e[o];
        s = i.apply(t, n || []);
        for (o in e) t.style[o] = a[o];
        return s;
    };
    var se = /alpha\([^)]*\)/i, oe = /opacity\s*=\s*([^)]*)/, ae = /^(none|table(?!-c[ea]).+)/, re = new RegExp("^(" + Tt + ")(.*)$", "i"), le = new RegExp("^([+-])=(" + Tt + ")", "i"), ue = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, he = {
        letterSpacing: 0,
        fontWeight: 400
    }, ce = [ "Webkit", "O", "Moz", "ms" ];
    ot.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = te(t, "opacity");
                        return "" === i ? "1" : i;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: nt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, o, a, r = ot.camelCase(e), l = t.style;
                if (e = ot.cssProps[r] || (ot.cssProps[r] = S(l, r)), a = ot.cssHooks[e] || ot.cssHooks[r], 
                void 0 === i) return a && "get" in a && void 0 !== (s = a.get(t, !1, n)) ? s : l[e];
                if ("string" === (o = typeof i) && (s = le.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(ot.css(t, e)), 
                o = "number"), null != i && i === i && ("number" !== o || ot.cssNumber[r] || (i += "px"), 
                nt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), 
                !(a && "set" in a && void 0 === (i = a.set(t, i, n))))) try {
                    l[e] = "", l[e] = i;
                } catch (t) {}
            }
        },
        css: function(t, e, i, n) {
            var s, o, a, r = ot.camelCase(e);
            return e = ot.cssProps[r] || (ot.cssProps[r] = S(t.style, r)), (a = ot.cssHooks[e] || ot.cssHooks[r]) && "get" in a && (o = a.get(t, !0, i)), 
            void 0 === o && (o = te(t, e, n)), "normal" === o && e in he && (o = he[e]), "" === i || i ? (s = parseFloat(o), 
            !0 === i || ot.isNumeric(s) ? s || 0 : o) : o;
        }
    }), ot.each([ "height", "width" ], function(t, e) {
        ot.cssHooks[e] = {
            get: function(t, i, n) {
                return i ? 0 === t.offsetWidth && ae.test(ot.css(t, "display")) ? ot.swap(t, ue, function() {
                    return I(t, e, n);
                }) : I(t, e, n) : void 0;
            },
            set: function(t, i, n) {
                var s = n && Jt(t);
                return P(t, i, n ? A(t, e, n, nt.boxSizing() && "border-box" === ot.css(t, "boxSizing", !1, s), s) : 0);
            }
        };
    }), nt.opacity || (ot.cssHooks.opacity = {
        get: function(t, e) {
            return oe.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : "";
        },
        set: function(t, e) {
            var i = t.style, n = t.currentStyle, s = ot.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", o = n && n.filter || i.filter || "";
            i.zoom = 1, (e >= 1 || "" === e) && "" === ot.trim(o.replace(se, "")) && i.removeAttribute && (i.removeAttribute("filter"), 
            "" === e || n && !n.filter) || (i.filter = se.test(o) ? o.replace(se, s) : o + " " + s);
        }
    }), ot.cssHooks.marginRight = T(nt.reliableMarginRight, function(t, e) {
        return e ? ot.swap(t, {
            display: "inline-block"
        }, te, [ t, "marginRight" ]) : void 0;
    }), ot.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        ot.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [ i ]; 4 > n; n++) s[t + St[n] + e] = o[n] || o[n - 2] || o[0];
                return s;
            }
        }, ee.test(t) || (ot.cssHooks[t + e].set = P);
    }), ot.fn.extend({
        css: function(t, e) {
            return Pt(this, function(t, e, i) {
                var n, s, o = {}, a = 0;
                if (ot.isArray(e)) {
                    for (n = Jt(t), s = e.length; s > a; a++) o[e[a]] = ot.css(t, e[a], !1, n);
                    return o;
                }
                return void 0 !== i ? ot.style(t, e, i) : ot.css(t, e);
            }, t, e, arguments.length > 1);
        },
        show: function() {
            return E(this, !0);
        },
        hide: function() {
            return E(this);
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Et(this) ? ot(this).show() : ot(this).hide();
            });
        }
    }), ot.Tween = F, F.prototype = {
        constructor: F,
        init: function(t, e, i, n, s, o) {
            this.elem = t, this.prop = i, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), 
            this.end = n, this.unit = o || (ot.cssNumber[i] ? "" : "px");
        },
        cur: function() {
            var t = F.propHooks[this.prop];
            return t && t.get ? t.get(this) : F.propHooks._default.get(this);
        },
        run: function(t) {
            var e, i = F.propHooks[this.prop];
            return this.pos = e = this.options.duration ? ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, 
            this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            i && i.set ? i.set(this) : F.propHooks._default.set(this), this;
        }
    }, F.prototype.init.prototype = F.prototype, F.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ot.css(t.elem, t.prop, ""), 
                e && "auto" !== e ? e : 0) : t.elem[t.prop];
            },
            set: function(t) {
                ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ot.cssProps[t.prop]] || ot.cssHooks[t.prop]) ? ot.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now;
            }
        }
    }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        }
    }, ot.easing = {
        linear: function(t) {
            return t;
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2;
        }
    }, ot.fx = F.prototype.init, ot.fx.step = {};
    var de, pe, fe = /^(?:toggle|show|hide)$/, me = new RegExp("^(?:([+-])=|)(" + Tt + ")([a-z%]*)$", "i"), ge = /queueHooks$/, ve = [ H ], ye = {
        "*": [ function(t, e) {
            var i = this.createTween(t, e), n = i.cur(), s = me.exec(e), o = s && s[3] || (ot.cssNumber[t] ? "" : "px"), a = (ot.cssNumber[t] || "px" !== o && +n) && me.exec(ot.css(i.elem, t)), r = 1, l = 20;
            if (a && a[3] !== o) {
                o = o || a[3], s = s || [], a = +n || 1;
                do {
                    r = r || ".5", a /= r, ot.style(i.elem, t, a + o);
                } while (r !== (r = i.cur() / n) && 1 !== r && --l);
            }
            return s && (a = i.start = +a || +n || 0, i.unit = o, i.end = s[1] ? a + (s[1] + 1) * s[2] : +s[2]), 
            i;
        } ]
    };
    ot.Animation = ot.extend(z, {
        tweener: function(t, e) {
            ot.isFunction(t) ? (e = t, t = [ "*" ]) : t = t.split(" ");
            for (var i, n = 0, s = t.length; s > n; n++) i = t[n], ye[i] = ye[i] || [], ye[i].unshift(e);
        },
        prefilter: function(t, e) {
            e ? ve.unshift(t) : ve.push(t);
        }
    }), ot.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? ot.extend({}, t) : {
            complete: i || !i && e || ot.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !ot.isFunction(e) && e
        };
        return n.duration = ot.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in ot.fx.speeds ? ot.fx.speeds[n.duration] : ot.fx.speeds._default, 
        (null == n.queue || !0 === n.queue) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            ot.isFunction(n.old) && n.old.call(this), n.queue && ot.dequeue(this, n.queue);
        }, n;
    }, ot.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(Et).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n);
        },
        animate: function(t, e, i, n) {
            var s = ot.isEmptyObject(t), o = ot.speed(e, i, n), a = function() {
                var e = z(this, ot.extend({}, t), o);
                (s || ot._data(this, "finish")) && e.stop(!0);
            };
            return a.finish = a, s || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function(t, e, i) {
            var n = function(t) {
                var e = t.stop;
                delete t.stop, e(i);
            };
            return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), 
            this.each(function() {
                var e = !0, s = null != t && t + "queueHooks", o = ot.timers, a = ot._data(this);
                if (s) a[s] && a[s].stop && n(a[s]); else for (s in a) a[s] && a[s].stop && ge.test(s) && n(a[s]);
                for (s = o.length; s--; ) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), 
                e = !1, o.splice(s, 1));
                (e || !i) && ot.dequeue(this, t);
            });
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"), this.each(function() {
                var e, i = ot._data(this), n = i[t + "queue"], s = i[t + "queueHooks"], o = ot.timers, a = n ? n.length : 0;
                for (i.finish = !0, ot.queue(this, t, []), s && s.stop && s.stop.call(this, !0), 
                e = o.length; e--; ) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), 
                o.splice(e, 1));
                for (e = 0; a > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish;
            });
        }
    }), ot.each([ "toggle", "show", "hide" ], function(t, e) {
        var i = ot.fn[e];
        ot.fn[e] = function(t, n, s) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(N(e, !0), t, n, s);
        };
    }), ot.each({
        slideDown: N("show"),
        slideUp: N("hide"),
        slideToggle: N("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        ot.fn[t] = function(t, i, n) {
            return this.animate(e, t, i, n);
        };
    }), ot.timers = [], ot.fx.tick = function() {
        var t, e = ot.timers, i = 0;
        for (de = ot.now(); i < e.length; i++) (t = e[i])() || e[i] !== t || e.splice(i--, 1);
        e.length || ot.fx.stop(), de = void 0;
    }, ot.fx.timer = function(t) {
        ot.timers.push(t), t() ? ot.fx.start() : ot.timers.pop();
    }, ot.fx.interval = 13, ot.fx.start = function() {
        pe || (pe = setInterval(ot.fx.tick, ot.fx.interval));
    }, ot.fx.stop = function() {
        clearInterval(pe), pe = null;
    }, ot.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ot.fn.delay = function(t, e) {
        return t = ot.fx ? ot.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
            var n = setTimeout(e, t);
            i.stop = function() {
                clearTimeout(n);
            };
        });
    }, function() {
        var t, e, i, n, s = mt.createElement("div");
        s.setAttribute("className", "t"), s.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        t = s.getElementsByTagName("a")[0], n = (i = mt.createElement("select")).appendChild(mt.createElement("option")), 
        e = s.getElementsByTagName("input")[0], t.style.cssText = "top:1px", nt.getSetAttribute = "t" !== s.className, 
        nt.style = /top/.test(t.getAttribute("style")), nt.hrefNormalized = "/a" === t.getAttribute("href"), 
        nt.checkOn = !!e.value, nt.optSelected = n.selected, nt.enctype = !!mt.createElement("form").enctype, 
        i.disabled = !0, nt.optDisabled = !n.disabled, (e = mt.createElement("input")).setAttribute("value", ""), 
        nt.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), 
        nt.radioValue = "t" === e.value, t = e = i = n = s = null;
    }();
    var be = /\r/g;
    ot.fn.extend({
        val: function(t) {
            var e, i, n, s = this[0];
            return arguments.length ? (n = ot.isFunction(t), this.each(function(i) {
                var s;
                1 === this.nodeType && (s = n ? t.call(this, i, ot(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : ot.isArray(s) && (s = ot.map(s, function(t) {
                    return null == t ? "" : t + "";
                })), (e = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s));
            })) : s ? (e = ot.valHooks[s.type] || ot.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, 
            "string" == typeof i ? i.replace(be, "") : null == i ? "" : i)) : void 0;
        }
    }), ot.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = ot.find.attr(t, "value");
                    return null != e ? e : ot.text(t);
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || 0 > s, a = o ? null : [], r = o ? s + 1 : n.length, l = 0 > s ? r : o ? s : 0; r > l; l++) if (!(!(i = n[l]).selected && l !== s || (nt.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && ot.nodeName(i.parentNode, "optgroup"))) {
                        if (e = ot(i).val(), o) return e;
                        a.push(e);
                    }
                    return a;
                },
                set: function(t, e) {
                    for (var i, n, s = t.options, o = ot.makeArray(e), a = s.length; a--; ) if (n = s[a], 
                    ot.inArray(ot.valHooks.option.get(n), o) >= 0) try {
                        n.selected = i = !0;
                    } catch (t) {
                        n.scrollHeight;
                    } else n.selected = !1;
                    return i || (t.selectedIndex = -1), s;
                }
            }
        }
    }), ot.each([ "radio", "checkbox" ], function() {
        ot.valHooks[this] = {
            set: function(t, e) {
                return ot.isArray(e) ? t.checked = ot.inArray(ot(t).val(), e) >= 0 : void 0;
            }
        }, nt.checkOn || (ot.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value;
        });
    });
    var _e, xe, we = ot.expr.attrHandle, Ce = /^(?:checked|selected)$/i, ke = nt.getSetAttribute, De = nt.input;
    ot.fn.extend({
        attr: function(t, e) {
            return Pt(this, ot.attr, t, e, arguments.length > 1);
        },
        removeAttr: function(t) {
            return this.each(function() {
                ot.removeAttr(this, t);
            });
        }
    }), ot.extend({
        attr: function(t, e, i) {
            var n, s, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === Ct ? ot.prop(t, e, i) : (1 === o && ot.isXMLDoc(t) || (e = e.toLowerCase(), 
            n = ot.attrHooks[e] || (ot.expr.match.bool.test(e) ? xe : _e)), void 0 === i ? n && "get" in n && null !== (s = n.get(t, e)) ? s : (s = ot.find.attr(t, e), 
            null == s ? void 0 : s) : null !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), 
            i) : void ot.removeAttr(t, e));
        },
        removeAttr: function(t, e) {
            var i, n, s = 0, o = e && e.match(bt);
            if (o && 1 === t.nodeType) for (;i = o[s++]; ) n = ot.propFix[i] || i, ot.expr.match.bool.test(i) ? De && ke || !Ce.test(i) ? t[n] = !1 : t[ot.camelCase("default-" + i)] = t[n] = !1 : ot.attr(t, i, ""), 
            t.removeAttribute(ke ? i : n);
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!nt.radioValue && "radio" === e && ot.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e;
                    }
                }
            }
        }
    }), xe = {
        set: function(t, e, i) {
            return !1 === e ? ot.removeAttr(t, i) : De && ke || !Ce.test(i) ? t.setAttribute(!ke && ot.propFix[i] || i, i) : t[ot.camelCase("default-" + i)] = t[i] = !0, 
            i;
        }
    }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = we[e] || ot.find.attr;
        we[e] = De && ke || !Ce.test(e) ? function(t, e, n) {
            var s, o;
            return n || (o = we[e], we[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, 
            we[e] = o), s;
        } : function(t, e, i) {
            return i ? void 0 : t[ot.camelCase("default-" + e)] ? e.toLowerCase() : null;
        };
    }), De && ke || (ot.attrHooks.value = {
        set: function(t, e, i) {
            return ot.nodeName(t, "input") ? void (t.defaultValue = e) : _e && _e.set(t, e, i);
        }
    }), ke || (_e = {
        set: function(t, e, i) {
            var n = t.getAttributeNode(i);
            return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", 
            "value" === i || e === t.getAttribute(i) ? e : void 0;
        }
    }, we.id = we.name = we.coords = function(t, e, i) {
        var n;
        return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null;
    }, ot.valHooks.button = {
        get: function(t, e) {
            var i = t.getAttributeNode(e);
            return i && i.specified ? i.value : void 0;
        },
        set: _e.set
    }, ot.attrHooks.contenteditable = {
        set: function(t, e, i) {
            _e.set(t, "" !== e && e, i);
        }
    }, ot.each([ "width", "height" ], function(t, e) {
        ot.attrHooks[e] = {
            set: function(t, i) {
                return "" === i ? (t.setAttribute(e, "auto"), i) : void 0;
            }
        };
    })), nt.style || (ot.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0;
        },
        set: function(t, e) {
            return t.style.cssText = e + "";
        }
    });
    var Te = /^(?:input|select|textarea|button|object)$/i, Se = /^(?:a|area)$/i;
    ot.fn.extend({
        prop: function(t, e) {
            return Pt(this, ot.prop, t, e, arguments.length > 1);
        },
        removeProp: function(t) {
            return t = ot.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t];
                } catch (t) {}
            });
        }
    }), ot.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(t, e, i) {
            var n, s, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !ot.isXMLDoc(t)) && (e = ot.propFix[e] || e, 
            s = ot.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e];
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = ot.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Te.test(t.nodeName) || Se.test(t.nodeName) && t.href ? 0 : -1;
                }
            }
        }
    }), nt.hrefNormalized || ot.each([ "href", "src" ], function(t, e) {
        ot.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4);
            }
        };
    }), nt.optSelected || (ot.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null;
        }
    }), ot.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        ot.propFix[this.toLowerCase()] = this;
    }), nt.enctype || (ot.propFix.enctype = "encoding");
    var Ee = /[\t\r\n\f]/g;
    ot.fn.extend({
        addClass: function(t) {
            var e, i, n, s, o, a, r = 0, l = this.length, u = "string" == typeof t && t;
            if (ot.isFunction(t)) return this.each(function(e) {
                ot(this).addClass(t.call(this, e, this.className));
            });
            if (u) for (e = (t || "").match(bt) || []; l > r; r++) if (i = this[r], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ee, " ") : " ")) {
                for (o = 0; s = e[o++]; ) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                a = ot.trim(n), i.className !== a && (i.className = a);
            }
            return this;
        },
        removeClass: function(t) {
            var e, i, n, s, o, a, r = 0, l = this.length, u = 0 === arguments.length || "string" == typeof t && t;
            if (ot.isFunction(t)) return this.each(function(e) {
                ot(this).removeClass(t.call(this, e, this.className));
            });
            if (u) for (e = (t || "").match(bt) || []; l > r; r++) if (i = this[r], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ee, " ") : "")) {
                for (o = 0; s = e[o++]; ) for (;n.indexOf(" " + s + " ") >= 0; ) n = n.replace(" " + s + " ", " ");
                a = t ? ot.trim(n) : "", i.className !== a && (i.className = a);
            }
            return this;
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(ot.isFunction(t) ? function(i) {
                ot(this).toggleClass(t.call(this, i, this.className, e), e);
            } : function() {
                if ("string" === i) for (var e, n = 0, s = ot(this), o = t.match(bt) || []; e = o[n++]; ) s.hasClass(e) ? s.removeClass(e) : s.addClass(e); else (i === Ct || "boolean" === i) && (this.className && ot._data(this, "__className__", this.className), 
                this.className = this.className || !1 === t ? "" : ot._data(this, "__className__") || "");
            });
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++) if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Ee, " ").indexOf(e) >= 0) return !0;
            return !1;
        }
    }), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        ot.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e);
        };
    }), ot.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t);
        },
        bind: function(t, e, i) {
            return this.on(t, null, e, i);
        },
        unbind: function(t, e) {
            return this.off(t, null, e);
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n);
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i);
        }
    });
    var Pe = ot.now(), Ae = /\?/, Ie = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ot.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var i, n = null, s = ot.trim(e + "");
        return s && !ot.trim(s.replace(Ie, function(t, e, s, o) {
            return i && e && (n = 0), 0 === n ? t : (i = s || e, n += !o - !s, "");
        })) ? Function("return " + s)() : ot.error("Invalid JSON: " + e);
    }, ot.parseXML = function(e) {
        var i, n;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (n = new DOMParser(), i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), 
            i.async = "false", i.loadXML(e));
        } catch (t) {
            i = void 0;
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + e), 
        i;
    };
    var Fe, Me, Ne = /#.*$/, Le = /([?&])_=[^&]*/, He = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Oe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ze = /^(?:GET|HEAD)$/, Re = /^\/\//, We = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, je = {}, Be = {}, $e = "*/".concat("*");
    try {
        Me = location.href;
    } catch (t) {
        (Me = mt.createElement("a")).href = "", Me = Me.href;
    }
    Fe = We.exec(Me.toLowerCase()) || [], ot.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Me,
            type: "GET",
            isLocal: Oe.test(Fe[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $e,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ot.parseJSON,
                "text xml": ot.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? j(j(t, ot.ajaxSettings), e) : j(ot.ajaxSettings, t);
        },
        ajaxPrefilter: R(je),
        ajaxTransport: R(Be),
        ajax: function(t, e) {
            function i(t, e, i, n) {
                var s, h, v, y, _, w = e;
                2 !== b && (b = 2, r && clearTimeout(r), u = void 0, a = n || "", x.readyState = t > 0 ? 4 : 0, 
                s = t >= 200 && 300 > t || 304 === t, i && (y = B(c, x, i)), y = $(c, y, x, s), 
                s ? (c.ifModified && ((_ = x.getResponseHeader("Last-Modified")) && (ot.lastModified[o] = _), 
                (_ = x.getResponseHeader("etag")) && (ot.etag[o] = _)), 204 === t || "HEAD" === c.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = y.state, 
                h = y.data, v = y.error, s = !v)) : (v = w, (t || !w) && (w = "error", 0 > t && (t = 0))), 
                x.status = t, x.statusText = (e || w) + "", s ? f.resolveWith(d, [ h, w, x ]) : f.rejectWith(d, [ x, w, v ]), 
                x.statusCode(g), g = void 0, l && p.trigger(s ? "ajaxSuccess" : "ajaxError", [ x, c, s ? h : v ]), 
                m.fireWith(d, [ x, w ]), l && (p.trigger("ajaxComplete", [ x, c ]), --ot.active || ot.event.trigger("ajaxStop")));
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var n, s, o, a, r, l, u, h, c = ot.ajaxSetup({}, e), d = c.context || c, p = c.context && (d.nodeType || d.jquery) ? ot(d) : ot.event, f = ot.Deferred(), m = ot.Callbacks("once memory"), g = c.statusCode || {}, v = {}, y = {}, b = 0, _ = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === b) {
                        if (!h) for (h = {}; e = He.exec(a); ) h[e[1].toLowerCase()] = e[2];
                        e = h[t.toLowerCase()];
                    }
                    return null == e ? null : e;
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? a : null;
                },
                setRequestHeader: function(t, e) {
                    var i = t.toLowerCase();
                    return b || (t = y[i] = y[i] || t, v[t] = e), this;
                },
                overrideMimeType: function(t) {
                    return b || (c.mimeType = t), this;
                },
                statusCode: function(t) {
                    var e;
                    if (t) if (2 > b) for (e in t) g[e] = [ g[e], t[e] ]; else x.always(t[x.status]);
                    return this;
                },
                abort: function(t) {
                    var e = t || _;
                    return u && u.abort(e), i(0, e), this;
                }
            };
            if (f.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, c.url = ((t || c.url || Me) + "").replace(Ne, "").replace(Re, Fe[1] + "//"), 
            c.type = e.method || e.type || c.method || c.type, c.dataTypes = ot.trim(c.dataType || "*").toLowerCase().match(bt) || [ "" ], 
            null == c.crossDomain && (n = We.exec(c.url.toLowerCase()), c.crossDomain = !(!n || n[1] === Fe[1] && n[2] === Fe[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Fe[3] || ("http:" === Fe[1] ? "80" : "443")))), 
            c.data && c.processData && "string" != typeof c.data && (c.data = ot.param(c.data, c.traditional)), 
            W(je, c, e, x), 2 === b) return x;
            (l = c.global) && 0 == ot.active++ && ot.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), 
            c.hasContent = !ze.test(c.type), o = c.url, c.hasContent || (c.data && (o = c.url += (Ae.test(o) ? "&" : "?") + c.data, 
            delete c.data), !1 === c.cache && (c.url = Le.test(o) ? o.replace(Le, "$1_=" + Pe++) : o + (Ae.test(o) ? "&" : "?") + "_=" + Pe++)), 
            c.ifModified && (ot.lastModified[o] && x.setRequestHeader("If-Modified-Since", ot.lastModified[o]), 
            ot.etag[o] && x.setRequestHeader("If-None-Match", ot.etag[o])), (c.data && c.hasContent && !1 !== c.contentType || e.contentType) && x.setRequestHeader("Content-Type", c.contentType), 
            x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + $e + "; q=0.01" : "") : c.accepts["*"]);
            for (s in c.headers) x.setRequestHeader(s, c.headers[s]);
            if (c.beforeSend && (!1 === c.beforeSend.call(d, x, c) || 2 === b)) return x.abort();
            _ = "abort";
            for (s in {
                success: 1,
                error: 1,
                complete: 1
            }) x[s](c[s]);
            if (u = W(Be, c, e, x)) {
                x.readyState = 1, l && p.trigger("ajaxSend", [ x, c ]), c.async && c.timeout > 0 && (r = setTimeout(function() {
                    x.abort("timeout");
                }, c.timeout));
                try {
                    b = 1, u.send(v, i);
                } catch (t) {
                    if (!(2 > b)) throw t;
                    i(-1, t);
                }
            } else i(-1, "No Transport");
            return x;
        },
        getJSON: function(t, e, i) {
            return ot.get(t, e, i, "json");
        },
        getScript: function(t, e) {
            return ot.get(t, void 0, e, "script");
        }
    }), ot.each([ "get", "post" ], function(t, e) {
        ot[e] = function(t, i, n, s) {
            return ot.isFunction(i) && (s = s || n, n = i, i = void 0), ot.ajax({
                url: t,
                type: e,
                dataType: s,
                data: i,
                success: n
            });
        };
    }), ot.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(t, e) {
        ot.fn[e] = function(t) {
            return this.on(e, t);
        };
    }), ot._evalUrl = function(t) {
        return ot.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        });
    }, ot.fn.extend({
        wrapAll: function(t) {
            if (ot.isFunction(t)) return this.each(function(e) {
                ot(this).wrapAll(t.call(this, e));
            });
            if (this[0]) {
                var e = ot(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; ) t = t.firstChild;
                    return t;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(t) {
            return this.each(ot.isFunction(t) ? function(e) {
                ot(this).wrapInner(t.call(this, e));
            } : function() {
                var e = ot(this), i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t);
            });
        },
        wrap: function(t) {
            var e = ot.isFunction(t);
            return this.each(function(i) {
                ot(this).wrapAll(e ? t.call(this, i) : t);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes);
            }).end();
        }
    }), ot.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (t.style && t.style.display || ot.css(t, "display"));
    }, ot.expr.filters.visible = function(t) {
        return !ot.expr.filters.hidden(t);
    };
    var qe = /%20/g, Ye = /\[\]$/, Ve = /\r?\n/g, Ue = /^(?:submit|button|image|reset|file)$/i, Xe = /^(?:input|select|textarea|keygen)/i;
    ot.param = function(t, e) {
        var i, n = [], s = function(t, e) {
            e = ot.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e);
        };
        if (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t.jquery && !ot.isPlainObject(t)) ot.each(t, function() {
            s(this.name, this.value);
        }); else for (i in t) q(i, t[i], e, s);
        return n.join("&").replace(qe, "+");
    }, ot.fn.extend({
        serialize: function() {
            return ot.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var t = ot.prop(this, "elements");
                return t ? ot.makeArray(t) : this;
            }).filter(function() {
                var t = this.type;
                return this.name && !ot(this).is(":disabled") && Xe.test(this.nodeName) && !Ue.test(t) && (this.checked || !At.test(t));
            }).map(function(t, e) {
                var i = ot(this).val();
                return null == i ? null : ot.isArray(i) ? ot.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ve, "\r\n")
                    };
                }) : {
                    name: e.name,
                    value: i.replace(Ve, "\r\n")
                };
            }).get();
        }
    }), ot.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Y() || V();
    } : Y;
    var Ke = 0, Ge = {}, Qe = ot.ajaxSettings.xhr();
    t.ActiveXObject && ot(t).on("unload", function() {
        for (var t in Ge) Ge[t](void 0, !0);
    }), nt.cors = !!Qe && "withCredentials" in Qe, (Qe = nt.ajax = !!Qe) && ot.ajaxTransport(function(t) {
        if (!t.crossDomain || nt.cors) {
            var e;
            return {
                send: function(i, n) {
                    var s, o = t.xhr(), a = ++Ke;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) o[s] = t.xhrFields[s];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (s in i) void 0 !== i[s] && o.setRequestHeader(s, i[s] + "");
                    o.send(t.hasContent && t.data || null), e = function(i, s) {
                        var r, l, u;
                        if (e && (s || 4 === o.readyState)) if (delete Ge[a], e = void 0, o.onreadystatechange = ot.noop, 
                        s) 4 !== o.readyState && o.abort(); else {
                            u = {}, r = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                            try {
                                l = o.statusText;
                            } catch (t) {
                                l = "";
                            }
                            r || !t.isLocal || t.crossDomain ? 1223 === r && (r = 204) : r = u.text ? 200 : 404;
                        }
                        u && n(r, l, u, o.getAllResponseHeaders());
                    }, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Ge[a] = e : e();
                },
                abort: function() {
                    e && e(void 0, !0);
                }
            };
        }
    }), ot.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return ot.globalEval(t), t;
            }
        }
    }), ot.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1);
    }), ot.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i = mt.head || ot("head")[0] || mt.documentElement;
            return {
                send: function(n, s) {
                    (e = mt.createElement("script")).async = !0, t.scriptCharset && (e.charset = t.scriptCharset), 
                    e.src = t.url, e.onload = e.onreadystatechange = function(t, i) {
                        (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, 
                        e.parentNode && e.parentNode.removeChild(e), e = null, i || s(200, "success"));
                    }, i.insertBefore(e, i.firstChild);
                },
                abort: function() {
                    e && e.onload(void 0, !0);
                }
            };
        }
    });
    var Ze = [], Je = /(=)\?(?=&|$)|\?\?/;
    ot.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ze.pop() || ot.expando + "_" + Pe++;
            return this[t] = !0, t;
        }
    }), ot.ajaxPrefilter("json jsonp", function(e, i, n) {
        var s, o, a, r = !1 !== e.jsonp && (Je.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Je.test(e.data) && "data");
        return r || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = ot.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
        r ? e[r] = e[r].replace(Je, "$1" + s) : !1 !== e.jsonp && (e.url += (Ae.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), 
        e.converters["script json"] = function() {
            return a || ot.error(s + " was not called"), a[0];
        }, e.dataTypes[0] = "json", o = t[s], t[s] = function() {
            a = arguments;
        }, n.always(function() {
            t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, Ze.push(s)), a && ot.isFunction(o) && o(a[0]), 
            a = o = void 0;
        }), "script") : void 0;
    }), ot.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || mt;
        var n = dt.exec(t), s = !i && [];
        return n ? [ e.createElement(n[1]) ] : (n = ot.buildFragment([ t ], e, s), s && s.length && ot(s).remove(), 
        ot.merge([], n.childNodes));
    };
    var ti = ot.fn.load;
    ot.fn.load = function(t, e, i) {
        if ("string" != typeof t && ti) return ti.apply(this, arguments);
        var n, s, o, a = this, r = t.indexOf(" ");
        return r >= 0 && (n = t.slice(r, t.length), t = t.slice(0, r)), ot.isFunction(e) ? (i = e, 
        e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && ot.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: e
        }).done(function(t) {
            s = arguments, a.html(n ? ot("<div>").append(ot.parseHTML(t)).find(n) : t);
        }).complete(i && function(t, e) {
            a.each(i, s || [ t.responseText, e, t ]);
        }), this;
    }, ot.expr.filters.animated = function(t) {
        return ot.grep(ot.timers, function(e) {
            return t === e.elem;
        }).length;
    };
    var ei = t.document.documentElement;
    ot.offset = {
        setOffset: function(t, e, i) {
            var n, s, o, a, r, l, u = ot.css(t, "position"), h = ot(t), c = {};
            "static" === u && (t.style.position = "relative"), r = h.offset(), o = ot.css(t, "top"), 
            l = ot.css(t, "left"), ("absolute" === u || "fixed" === u) && ot.inArray("auto", [ o, l ]) > -1 ? (n = h.position(), 
            a = n.top, s = n.left) : (a = parseFloat(o) || 0, s = parseFloat(l) || 0), ot.isFunction(e) && (e = e.call(t, i, r)), 
            null != e.top && (c.top = e.top - r.top + a), null != e.left && (c.left = e.left - r.left + s), 
            "using" in e ? e.using.call(t, c) : h.css(c);
        }
    }, ot.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                ot.offset.setOffset(this, t, e);
            });
            var e, i, n = {
                top: 0,
                left: 0
            }, s = this[0], o = s && s.ownerDocument;
            return o ? (e = o.documentElement, ot.contains(e, s) ? (typeof s.getBoundingClientRect !== Ct && (n = s.getBoundingClientRect()), 
            i = U(o), {
                top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : n) : void 0;
        },
        position: function() {
            if (this[0]) {
                var t, e, i = {
                    top: 0,
                    left: 0
                }, n = this[0];
                return "fixed" === ot.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), 
                e = this.offset(), ot.nodeName(t[0], "html") || (i = t.offset()), i.top += ot.css(t[0], "borderTopWidth", !0), 
                i.left += ot.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - ot.css(n, "marginTop", !0),
                    left: e.left - i.left - ot.css(n, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || ei; t && !ot.nodeName(t, "html") && "static" === ot.css(t, "position"); ) t = t.offsetParent;
                return t || ei;
            });
        }
    }), ot.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var i = /Y/.test(e);
        ot.fn[t] = function(n) {
            return Pt(this, function(t, n, s) {
                var o = U(t);
                return void 0 === s ? o ? e in o ? o[e] : o.document.documentElement[n] : t[n] : void (o ? o.scrollTo(i ? ot(o).scrollLeft() : s, i ? s : ot(o).scrollTop()) : t[n] = s);
            }, t, n, arguments.length, null);
        };
    }), ot.each([ "top", "left" ], function(t, e) {
        ot.cssHooks[e] = T(nt.pixelPosition, function(t, i) {
            return i ? (i = te(t, e), ie.test(i) ? ot(t).position()[e] + "px" : i) : void 0;
        });
    }), ot.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        ot.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            ot.fn[n] = function(n, s) {
                var o = arguments.length && (i || "boolean" != typeof n), a = i || (!0 === n || !0 === s ? "margin" : "border");
                return Pt(this, function(e, i, n) {
                    var s;
                    return ot.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, 
                    Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? ot.css(e, i, a) : ot.style(e, i, n, a);
                }, e, o ? n : void 0, o, null);
            };
        });
    }), ot.fn.size = function() {
        return this.length;
    }, ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ot;
    });
    var ii = t.jQuery, ni = t.$;
    return ot.noConflict = function(e) {
        return t.$ === ot && (t.$ = ni), e && t.jQuery === ot && (t.jQuery = ii), ot;
    }, typeof e === Ct && (t.jQuery = t.$ = ot), ot;
}), function(t) {
    "function" == typeof define && define.amd ? define([ "jquery" ], t) : t(jQuery);
}(function(t) {
    function e(t) {
        for (var e = t.css("visibility"); "inherit" === e; ) e = (t = t.parent()).css("visibility");
        return "hidden" !== e;
    }
    function i(t) {
        for (var e, i; t.length && t[0] !== document; ) {
            if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), 
            !isNaN(i) && 0 !== i)) return i;
            t = t.parent();
        }
        return 0;
    }
    function n() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, 
        this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", 
        this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", 
        this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", 
        this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", 
        this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
            dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
            dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
            dayNamesMin: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), 
        this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
    }
    function s(e) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.on("mouseout", i, function() {
            t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), 
            -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover");
        }).on("mouseover", i, o);
    }
    function o() {
        t.datepicker._isDisabledDatepicker(p.inline ? p.dpDiv.parent()[0] : p.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), 
        t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), 
        -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"));
    }
    function a(e, i) {
        t.extend(e, i);
        for (var n in i) null == i[n] && (e[n] = i[n]);
        return e;
    }
    function r(t) {
        return function() {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change");
        };
    }
    t.ui = t.ui || {};
    t.ui.version = "1.12.1";
    var l = 0, u = Array.prototype.slice;
    t.cleanData = function(e) {
        return function(i) {
            var n, s, o;
            for (o = 0; null != (s = i[o]); o++) try {
                (n = t._data(s, "events")) && n.remove && t(s).triggerHandler("remove");
            } catch (t) {}
            e(i);
        };
    }(t.cleanData), t.widget = function(e, i, n) {
        var s, o, a, r = {}, l = e.split(".")[0], u = l + "-" + (e = e.split(".")[1]);
        return n || (n = i, i = t.Widget), t.isArray(n) && (n = t.extend.apply(null, [ {} ].concat(n))), 
        t.expr[":"][u.toLowerCase()] = function(e) {
            return !!t.data(e, u);
        }, t[l] = t[l] || {}, s = t[l][e], o = t[l][e] = function(t, e) {
            if (!this._createWidget) return new o(t, e);
            arguments.length && this._createWidget(t, e);
        }, t.extend(o, s, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: []
        }), a = new i(), a.options = t.widget.extend({}, a.options), t.each(n, function(e, n) {
            t.isFunction(n) ? r[e] = function() {
                function t() {
                    return i.prototype[e].apply(this, arguments);
                }
                function s(t) {
                    return i.prototype[e].apply(this, t);
                }
                return function() {
                    var e, i = this._super, o = this._superApply;
                    return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, 
                    this._superApply = o, e;
                };
            }() : r[e] = n;
        }), o.prototype = t.widget.extend(a, {
            widgetEventPrefix: s ? a.widgetEventPrefix || e : e
        }, r, {
            constructor: o,
            namespace: l,
            widgetName: e,
            widgetFullName: u
        }), s ? (t.each(s._childConstructors, function(e, i) {
            var n = i.prototype;
            t.widget(n.namespace + "." + n.widgetName, o, i._proto);
        }), delete s._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), 
        o;
    }, t.widget.extend = function(e) {
        for (var i, n, s = u.call(arguments, 1), o = 0, a = s.length; o < a; o++) for (i in s[o]) n = s[o][i], 
        s[o].hasOwnProperty(i) && void 0 !== n && (t.isPlainObject(n) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : e[i] = n);
        return e;
    }, t.widget.bridge = function(e, i) {
        var n = i.prototype.widgetFullName || e;
        t.fn[e] = function(s) {
            var o = "string" == typeof s, a = u.call(arguments, 1), r = this;
            return o ? this.length || "instance" !== s ? this.each(function() {
                var i, o = t.data(this, n);
                return "instance" === s ? (r = o, !1) : o ? t.isFunction(o[s]) && "_" !== s.charAt(0) ? (i = o[s].apply(o, a), 
                i !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'");
            }) : r = void 0 : (a.length && (s = t.widget.extend.apply(null, [ s ].concat(a))), 
            this.each(function() {
                var e = t.data(this, n);
                e ? (e.option(s || {}), e._init && e._init()) : t.data(this, n, new i(s, this));
            })), r;
        };
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(e, i) {
            i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = l++, 
            this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), 
            this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), 
            this._on(!0, this.element, {
                remove: function(t) {
                    t.target === i && this.destroy();
                }
            }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), 
            this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), 
            this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), 
            this._init();
        },
        _getCreateOptions: function() {
            return {};
        },
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            var e = this;
            this._destroy(), t.each(this.classesElementLookup, function(t, i) {
                e._removeClass(i, t);
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), 
            this.bindings.off(this.eventNamespace);
        },
        _destroy: t.noop,
        widget: function() {
            return this.element;
        },
        option: function(e, i) {
            var n, s, o, a = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e) if (a = {}, n = e.split("."), e = n.shift(), n.length) {
                for (s = a[e] = t.widget.extend({}, this.options[e]), o = 0; o < n.length - 1; o++) s[n[o]] = s[n[o]] || {}, 
                s = s[n[o]];
                if (e = n.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
                s[e] = i;
            } else {
                if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                a[e] = i;
            }
            return this._setOptions(a), this;
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this;
        },
        _setOption: function(t, e) {
            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), 
            this;
        },
        _setOptionClasses: function(e) {
            var i, n, s;
            for (i in e) s = this.classesElementLookup[i], e[i] !== this.options.classes[i] && s && s.length && (n = t(s.get()), 
            this._removeClass(s, i), n.addClass(this._classes({
                element: n,
                keys: i,
                classes: e,
                add: !0
            })));
        },
        _setOptionDisabled: function(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), 
            t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            });
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            });
        },
        _classes: function(e) {
            function i(i, o) {
                var a, r;
                for (r = 0; r < i.length; r++) a = s.classesElementLookup[i[r]] || t(), a = t(e.add ? t.unique(a.get().concat(e.element.get())) : a.not(e.element).get()), 
                s.classesElementLookup[i[r]] = a, n.push(i[r]), o && e.classes[i[r]] && n.push(e.classes[i[r]]);
            }
            var n = [], s = this;
            return e = t.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, e), this._on(e.element, {
                remove: "_untrackClassesElement"
            }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), 
            n.join(" ");
        },
        _untrackClassesElement: function(e) {
            var i = this;
            t.each(i.classesElementLookup, function(n, s) {
                -1 !== t.inArray(e.target, s) && (i.classesElementLookup[n] = t(s.not(e.target).get()));
            });
        },
        _removeClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !1);
        },
        _addClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !0);
        },
        _toggleClass: function(t, e, i, n) {
            n = "boolean" == typeof n ? n : i;
            var s = "string" == typeof t || null === t, o = {
                extra: s ? e : i,
                keys: s ? t : e,
                element: s ? this.element : t,
                add: n
            };
            return o.element.toggleClass(this._classes(o), n), this;
        },
        _on: function(e, i, n) {
            var s, o = this;
            "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, 
            i = this.element, s = this.widget()), t.each(n, function(n, a) {
                function r() {
                    if (e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled")) return ("string" == typeof a ? o[a] : a).apply(o, arguments);
                }
                "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                var l = n.match(/^([\w:-]*)\s*(.*)$/), u = l[1] + o.eventNamespace, h = l[2];
                h ? s.on(u, h, r) : i.on(u, r);
            });
        },
        _off: function(e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, 
            e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), 
            this.hoverable = t(this.hoverable.not(e).get());
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? n[t] : t).apply(n, arguments);
            }
            var n = this;
            return setTimeout(i, e || 0);
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-hover");
                },
                mouseleave: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-hover");
                }
            });
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-focus");
                },
                focusout: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-focus");
                }
            });
        },
        _trigger: function(e, i, n) {
            var s, o, a = this.options[e];
            if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), 
            i.target = this.element[0], o = i.originalEvent) for (s in o) s in i || (i[s] = o[s]);
            return this.element.trigger(i, n), !(t.isFunction(a) && !1 === a.apply(this.element[0], [ i ].concat(n)) || i.isDefaultPrevented());
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(n, s, o) {
            "string" == typeof s && (s = {
                effect: s
            });
            var a, r = s ? !0 === s || "number" == typeof s ? i : s.effect || i : e;
            "number" == typeof (s = s || {}) && (s = {
                duration: s
            }), a = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), a && t.effects && t.effects.effect[r] ? n[e](s) : r !== e && n[r] ? n[r](s.duration, s.easing, o) : n.queue(function(i) {
                t(this)[e](), o && o.call(n[0]), i();
            });
        };
    });
    t.widget;
    !function() {
        function e(t, e, i) {
            return [ parseFloat(t[0]) * (c.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (c.test(t[1]) ? i / 100 : 1) ];
        }
        function i(e, i) {
            return parseInt(t.css(e, i), 10) || 0;
        }
        function n(e) {
            var i = e[0];
            return 9 === i.nodeType ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : t.isWindow(i) ? {
                width: e.width(),
                height: e.height(),
                offset: {
                    top: e.scrollTop(),
                    left: e.scrollLeft()
                }
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: i.pageY,
                    left: i.pageX
                }
            } : {
                width: e.outerWidth(),
                height: e.outerHeight(),
                offset: e.offset()
            };
        }
        var s, o = Math.max, a = Math.abs, r = /left|center|right/, l = /top|center|bottom/, u = /[\+\-]\d+(\.[\d]+)?%?/, h = /^\w+/, c = /%$/, d = t.fn.position;
        t.position = {
            scrollbarWidth: function() {
                if (void 0 !== s) return s;
                var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = n.children()[0];
                return t("body").append(n), e = o.offsetWidth, n.css("overflow", "scroll"), i = o.offsetWidth, 
                e === i && (i = n[0].clientWidth), n.remove(), s = e - i;
            },
            getScrollInfo: function(e) {
                var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"), n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"), s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                return {
                    width: "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                    height: s ? t.position.scrollbarWidth() : 0
                };
            },
            getWithinInfo: function(e) {
                var i = t(e || window), n = t.isWindow(i[0]), s = !!i[0] && 9 === i[0].nodeType;
                return {
                    element: i,
                    isWindow: n,
                    isDocument: s,
                    offset: !n && !s ? t(e).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: i.outerWidth(),
                    height: i.outerHeight()
                };
            }
        }, t.fn.position = function(s) {
            if (!s || !s.of) return d.apply(this, arguments);
            s = t.extend({}, s);
            var c, p, f, m, g, v, y = t(s.of), b = t.position.getWithinInfo(s.within), _ = t.position.getScrollInfo(b), x = (s.collision || "flip").split(" "), w = {};
            return v = n(y), y[0].preventDefault && (s.at = "left top"), p = v.width, f = v.height, 
            m = v.offset, g = t.extend({}, m), t.each([ "my", "at" ], function() {
                var t, e, i = (s[this] || "").split(" ");
                1 === i.length && (i = r.test(i[0]) ? i.concat([ "center" ]) : l.test(i[0]) ? [ "center" ].concat(i) : [ "center", "center" ]), 
                i[0] = r.test(i[0]) ? i[0] : "center", i[1] = l.test(i[1]) ? i[1] : "center", t = u.exec(i[0]), 
                e = u.exec(i[1]), w[this] = [ t ? t[0] : 0, e ? e[0] : 0 ], s[this] = [ h.exec(i[0])[0], h.exec(i[1])[0] ];
            }), 1 === x.length && (x[1] = x[0]), "right" === s.at[0] ? g.left += p : "center" === s.at[0] && (g.left += p / 2), 
            "bottom" === s.at[1] ? g.top += f : "center" === s.at[1] && (g.top += f / 2), c = e(w.at, p, f), 
            g.left += c[0], g.top += c[1], this.each(function() {
                var n, r, l = t(this), u = l.outerWidth(), h = l.outerHeight(), d = i(this, "marginLeft"), v = i(this, "marginTop"), C = u + d + i(this, "marginRight") + _.width, k = h + v + i(this, "marginBottom") + _.height, D = t.extend({}, g), T = e(w.my, l.outerWidth(), l.outerHeight());
                "right" === s.my[0] ? D.left -= u : "center" === s.my[0] && (D.left -= u / 2), "bottom" === s.my[1] ? D.top -= h : "center" === s.my[1] && (D.top -= h / 2), 
                D.left += T[0], D.top += T[1], n = {
                    marginLeft: d,
                    marginTop: v
                }, t.each([ "left", "top" ], function(e, i) {
                    t.ui.position[x[e]] && t.ui.position[x[e]][i](D, {
                        targetWidth: p,
                        targetHeight: f,
                        elemWidth: u,
                        elemHeight: h,
                        collisionPosition: n,
                        collisionWidth: C,
                        collisionHeight: k,
                        offset: [ c[0] + T[0], c[1] + T[1] ],
                        my: s.my,
                        at: s.at,
                        within: b,
                        elem: l
                    });
                }), s.using && (r = function(t) {
                    var e = m.left - D.left, i = e + p - u, n = m.top - D.top, r = n + f - h, c = {
                        target: {
                            element: y,
                            left: m.left,
                            top: m.top,
                            width: p,
                            height: f
                        },
                        element: {
                            element: l,
                            left: D.left,
                            top: D.top,
                            width: u,
                            height: h
                        },
                        horizontal: i < 0 ? "left" : e > 0 ? "right" : "center",
                        vertical: r < 0 ? "top" : n > 0 ? "bottom" : "middle"
                    };
                    p < u && a(e + i) < p && (c.horizontal = "center"), f < h && a(n + r) < f && (c.vertical = "middle"), 
                    o(a(e), a(i)) > o(a(n), a(r)) ? c.important = "horizontal" : c.important = "vertical", 
                    s.using.call(this, t, c);
                }), l.offset(t.extend(D, {
                    using: r
                }));
            });
        }, t.ui.position = {
            fit: {
                left: function(t, e) {
                    var i, n = e.within, s = n.isWindow ? n.scrollLeft : n.offset.left, a = n.width, r = t.left - e.collisionPosition.marginLeft, l = s - r, u = r + e.collisionWidth - a - s;
                    e.collisionWidth > a ? l > 0 && u <= 0 ? (i = t.left + l + e.collisionWidth - a - s, 
                    t.left += l - i) : t.left = u > 0 && l <= 0 ? s : l > u ? s + a - e.collisionWidth : s : l > 0 ? t.left += l : u > 0 ? t.left -= u : t.left = o(t.left - r, t.left);
                },
                top: function(t, e) {
                    var i, n = e.within, s = n.isWindow ? n.scrollTop : n.offset.top, a = e.within.height, r = t.top - e.collisionPosition.marginTop, l = s - r, u = r + e.collisionHeight - a - s;
                    e.collisionHeight > a ? l > 0 && u <= 0 ? (i = t.top + l + e.collisionHeight - a - s, 
                    t.top += l - i) : t.top = u > 0 && l <= 0 ? s : l > u ? s + a - e.collisionHeight : s : l > 0 ? t.top += l : u > 0 ? t.top -= u : t.top = o(t.top - r, t.top);
                }
            },
            flip: {
                left: function(t, e) {
                    var i, n, s = e.within, o = s.offset.left + s.scrollLeft, r = s.width, l = s.isWindow ? s.scrollLeft : s.offset.left, u = t.left - e.collisionPosition.marginLeft, h = u - l, c = u + e.collisionWidth - r - l, d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0, f = -2 * e.offset[0];
                    h < 0 ? ((i = t.left + d + p + f + e.collisionWidth - r - o) < 0 || i < a(h)) && (t.left += d + p + f) : c > 0 && ((n = t.left - e.collisionPosition.marginLeft + d + p + f - l) > 0 || a(n) < c) && (t.left += d + p + f);
                },
                top: function(t, e) {
                    var i, n, s = e.within, o = s.offset.top + s.scrollTop, r = s.height, l = s.isWindow ? s.scrollTop : s.offset.top, u = t.top - e.collisionPosition.marginTop, h = u - l, c = u + e.collisionHeight - r - l, d = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0, p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, f = -2 * e.offset[1];
                    h < 0 ? ((n = t.top + d + p + f + e.collisionHeight - r - o) < 0 || n < a(h)) && (t.top += d + p + f) : c > 0 && ((i = t.top - e.collisionPosition.marginTop + d + p + f - l) > 0 || a(i) < c) && (t.top += d + p + f);
                }
            },
            flipfit: {
                left: function() {
                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments);
                },
                top: function() {
                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments);
                }
            }
        };
    }();
    t.ui.position, t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(i) {
                return !!t.data(i, e);
            };
        }) : function(e, i, n) {
            return !!t.data(e, n[3]);
        }
    }), t.fn.extend({
        disableSelection: function() {
            var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.on(t + ".ui-disableSelection", function(t) {
                    t.preventDefault();
                });
            };
        }(),
        enableSelection: function() {
            return this.off(".ui-disableSelection");
        }
    });
    t.ui.focusable = function(i, n) {
        var s, o, a, r, l, u = i.nodeName.toLowerCase();
        return "area" === u ? (s = i.parentNode, o = s.name, !(!i.href || !o || "map" !== s.nodeName.toLowerCase()) && ((a = t("img[usemap='#" + o + "']")).length > 0 && a.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(u) ? (r = !i.disabled) && (l = t(i).closest("fieldset")[0]) && (r = !l.disabled) : r = "a" === u ? i.href || n : n, 
        r && t(i).is(":visible") && e(t(i)));
    }, t.extend(t.expr[":"], {
        focusable: function(e) {
            return t.ui.focusable(e, null != t.attr(e, "tabindex"));
        }
    });
    t.ui.focusable, t.fn.form = function() {
        return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form);
    }, t.ui.formResetMixin = {
        _formResetHandler: function() {
            var e = t(this);
            setTimeout(function() {
                var i = e.data("ui-form-reset-instances");
                t.each(i, function() {
                    this.refresh();
                });
            });
        },
        _bindFormResetHandler: function() {
            if (this.form = this.element.form(), this.form.length) {
                var t = this.form.data("ui-form-reset-instances") || [];
                t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), 
                this.form.data("ui-form-reset-instances", t);
            }
        },
        _unbindFormResetHandler: function() {
            if (this.form.length) {
                var e = this.form.data("ui-form-reset-instances");
                e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");
            }
        }
    };
    "1.7" === t.fn.jquery.substring(0, 3) && (t.each([ "Width", "Height" ], function(e, i) {
        function n(e, i, n, o) {
            return t.each(s, function() {
                i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), 
                o && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
            }), i;
        }
        var s = "Width" === i ? [ "Left", "Right" ] : [ "Top", "Bottom" ], o = i.toLowerCase(), a = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
        };
        t.fn["inner" + i] = function(e) {
            return void 0 === e ? a["inner" + i].call(this) : this.each(function() {
                t(this).css(o, n(this, e) + "px");
            });
        }, t.fn["outer" + i] = function(e, s) {
            return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() {
                t(this).css(o, n(this, e, !0, s) + "px");
            });
        };
    }), t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    });
    t.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }, t.ui.escapeSelector = function() {
        var t = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
        return function(e) {
            return e.replace(t, "\\$1");
        };
    }(), t.fn.labels = function() {
        var e, i, n, s, o;
        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"), 
        (n = this.attr("id")) && (o = (e = this.eq(0).parents().last()).add(e.length ? e.siblings() : this.siblings()), 
        i = "label[for='" + t.ui.escapeSelector(n) + "']", s = s.add(o.find(i).addBack(i))), 
        this.pushStack(s));
    }, t.fn.scrollParent = function(e) {
        var i = this.css("position"), n = "absolute" === i, s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/, o = this.parents().filter(function() {
            var e = t(this);
            return (!n || "static" !== e.css("position")) && s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"));
        }).eq(0);
        return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document);
    }, t.extend(t.expr[":"], {
        tabbable: function(e) {
            var i = t.attr(e, "tabindex"), n = null != i;
            return (!n || i >= 0) && t.ui.focusable(e, n);
        }
    }), t.fn.extend({
        uniqueId: function() {
            var t = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++t);
                });
            };
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
            });
        }
    }), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var h = !1;
    t(document).on("mouseup", function() {
        h = !1;
    });
    t.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t);
            }).on("click." + this.widgetName, function(i) {
                if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent")) return t.removeData(i.target, e.widgetName + ".preventClickEvent"), 
                i.stopImmediatePropagation(), !1;
            }), this.started = !1;
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function(e) {
            if (!h) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var i = this, n = 1 === e.which, s = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                return !(n && !s && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, 
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0;
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), 
                !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), 
                this._mouseMoveDelegate = function(t) {
                    return i._mouseMove(t);
                }, this._mouseUpDelegate = function(t) {
                    return i._mouseUp(t);
                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), 
                e.preventDefault(), h = !0, !0));
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                if (!e.which) if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0; else if (!this.ignoreMissingWhich) return this._mouseUp(e);
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), 
            e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), 
            this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted);
        },
        _mouseUp: function(e) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), 
            this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), 
            this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), 
            delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, h = !1, e.preventDefault();
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet;
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0;
        }
    }), t.ui.plugin = {
        add: function(e, i, n) {
            var s, o = t.ui[e].prototype;
            for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([ i, n[s] ]);
        },
        call: function(t, e, i, n) {
            var s, o = t.plugins[e];
            if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (s = 0; s < o.length; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i);
        }
    }, t.ui.safeActiveElement = function(t) {
        var e;
        try {
            e = t.activeElement;
        } catch (i) {
            e = t.body;
        }
        return e || (e = t.body), e.nodeName || (e = t.body), e;
    }, t.ui.safeBlur = function(e) {
        e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur");
    };
    t.widget("ui.draggable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), 
            this._setHandleClassName(), this._mouseInit();
        },
        _setOption: function(t, e) {
            this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName());
        },
        _destroy: function() {
            (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = !0 : (this._removeHandleClassName(), 
            this._mouseDestroy());
        },
        _mouseCapture: function(e) {
            var i = this.options;
            return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), 
            !!this.handle && (this._blurActiveElement(e), this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix), 
            !0));
        },
        _blockFrames: function(e) {
            this.iframeBlocks = this.document.find(e).map(function() {
                var e = t(this);
                return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0];
            });
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
        },
        _blurActiveElement: function(e) {
            var i = t.ui.safeActiveElement(this.document[0]);
            t(e.target).closest(i).length || t.ui.safeBlur(i);
        },
        _mouseStart: function(e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), 
            this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), 
            this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), 
            this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                return "fixed" === t(this).css("position");
            }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), 
            this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, 
            this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), 
            this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), 
            t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), 
            t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0);
        },
        _refreshOffsets: function(t) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {
                left: t.pageX - this.offset.left,
                top: t.pageY - this.offset.top
            };
        },
        _mouseDrag: function(e, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), 
            this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var n = this._uiHash();
                if (!1 === this._trigger("drag", e, n)) return this._mouseUp(new t.Event("mouseup", e)), 
                !1;
                this.position = n.position;
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", 
            t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1;
        },
        _mouseStop: function(e) {
            var i = this, n = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)), 
            this.dropped && (n = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                !1 !== i._trigger("stop", e) && i._clear();
            }) : !1 !== this._trigger("stop", e) && this._clear(), !1;
        },
        _mouseUp: function(e) {
            return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), 
            this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e);
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {
                target: this.element[0]
            })) : this._clear(), this;
        },
        _getHandle: function(e) {
            return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length;
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, 
            this._addClass(this.handleElement, "ui-draggable-handle");
        },
        _removeHandleClassName: function() {
            this._removeClass(this.handleElement, "ui-draggable-handle");
        },
        _createHelper: function(e) {
            var i = this.options, n = t.isFunction(i.helper), s = n ? t(i.helper.apply(this.element[0], [ e ])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), 
            n && s[0] === this.element[0] && this._setPositionRelative(), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), 
            s;
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), 
            "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
        },
        _isRootNode: function(t) {
            return /(html|body)/i.test(t.tagName) || t === this.document[0];
        },
        _getParentOffset: function() {
            var e = this.offsetParent.offset(), i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), 
            e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var t = this.element.position(), e = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var e, i, n, s = this.options, o = this.document[0];
            this.relativeContainer = null, s.containment ? "window" !== s.containment ? "document" !== s.containment ? s.containment.constructor !== Array ? ("parent" === s.containment && (s.containment = this.helper[0].parentNode), 
            (n = (i = t(s.containment))[0]) && (e = /(scroll|auto)/.test(i.css("overflow")), 
            this.containment = [ (parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom ], 
            this.relativeContainer = i)) : this.containment = s.containment : this.containment = [ 0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ] : this.containment = [ t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ] : this.containment = null;
        },
        _convertPositionTo: function(t, e) {
            e || (e = this.position);
            var i = "absolute" === t ? 1 : -1, n = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
            };
        },
        _generatePosition: function(t, e) {
            var i, n, s, o, a = this.options, r = this._isRootNode(this.scrollParent[0]), l = t.pageX, u = t.pageY;
            return r && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), e && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), 
            i = [ this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top ]) : i = this.containment, 
            t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), 
            t.pageY - this.offset.click.top < i[1] && (u = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), 
            t.pageY - this.offset.click.top > i[3] && (u = i[3] + this.offset.click.top)), a.grid && (s = a.grid[1] ? this.originalPageY + Math.round((u - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, 
            u = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - a.grid[1] : s + a.grid[1] : s, 
            o = a.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, 
            l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), 
            "y" === a.axis && (l = this.originalPageX), "x" === a.axis && (u = this.originalPageY)), 
            {
                top: u - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
            };
        },
        _clear: function() {
            this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), 
            this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy();
        },
        _trigger: function(e, i, n) {
            return n = n || this._uiHash(), t.ui.plugin.call(this, e, [ i, n, this ], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), 
            n.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, n);
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            };
        }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i, n) {
            var s = t.extend({}, i, {
                item: n.element
            });
            n.sortables = [], t(n.options.connectToSortable).each(function() {
                var i = t(this).sortable("instance");
                i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, s));
            });
        },
        stop: function(e, i, n) {
            var s = t.extend({}, i, {
                item: n.element
            });
            n.cancelHelperRemoval = !1, t.each(n.sortables, function() {
                var t = this;
                t.isOver ? (t.isOver = 0, n.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, 
                t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left")
                }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, 
                t._trigger("deactivate", e, s));
            });
        },
        drag: function(e, i, n) {
            t.each(n.sortables, function() {
                var s = !1, o = this;
                o.positionAbs = n.positionAbs, o.helperProportions = n.helperProportions, o.offset.click = n.offset.click, 
                o._intersectsWith(o.containerCache) && (s = !0, t.each(n.sortables, function() {
                    return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, 
                    this.offset.click = n.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (s = !1), 
                    s;
                })), s ? (o.isOver || (o.isOver = 1, n._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), 
                o.options._helper = o.options.helper, o.options.helper = function() {
                    return i.helper[0];
                }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), 
                o.offset.click.top = n.offset.click.top, o.offset.click.left = n.offset.click.left, 
                o.offset.parent.left -= n.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= n.offset.parent.top - o.offset.parent.top, 
                n._trigger("toSortable", e), n.dropped = o.element, t.each(n.sortables, function() {
                    this.refreshPositions();
                }), n.currentItem = n.element, o.fromOutside = n), o.currentItem && (o._mouseDrag(e), 
                i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, 
                o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), 
                o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, 
                o.placeholder && o.placeholder.remove(), i.helper.appendTo(n._parent), n._refreshOffsets(e), 
                i.position = n._generatePosition(e, !0), n._trigger("fromSortable", e), n.dropped = !1, 
                t.each(n.sortables, function() {
                    this.refreshPositions();
                }));
            });
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function(e, i, n) {
            var s = t("body"), o = n.options;
            s.css("cursor") && (o._cursor = s.css("cursor")), s.css("cursor", o.cursor);
        },
        stop: function(e, i, n) {
            var s = n.options;
            s._cursor && t("body").css("cursor", s._cursor);
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i, n) {
            var s = t(i.helper), o = n.options;
            s.css("opacity") && (o._opacity = s.css("opacity")), s.css("opacity", o.opacity);
        },
        stop: function(e, i, n) {
            var s = n.options;
            s._opacity && t(i.helper).css("opacity", s._opacity);
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function(t, e, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), 
            i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset());
        },
        drag: function(e, i, n) {
            var s = n.options, o = !1, a = n.scrollParentNotHidden[0], r = n.document[0];
            a !== r && "HTML" !== a.tagName ? (s.axis && "x" === s.axis || (n.overflowOffset.top + a.offsetHeight - e.pageY < s.scrollSensitivity ? a.scrollTop = o = a.scrollTop + s.scrollSpeed : e.pageY - n.overflowOffset.top < s.scrollSensitivity && (a.scrollTop = o = a.scrollTop - s.scrollSpeed)), 
            s.axis && "y" === s.axis || (n.overflowOffset.left + a.offsetWidth - e.pageX < s.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + s.scrollSpeed : e.pageX - n.overflowOffset.left < s.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(r).scrollTop() < s.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < s.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + s.scrollSpeed))), 
            s.axis && "y" === s.axis || (e.pageX - t(r).scrollLeft() < s.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < s.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + s.scrollSpeed)))), 
            !1 !== o && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(n, e);
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function(e, i, n) {
            var s = n.options;
            n.snapElements = [], t(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function() {
                var e = t(this), i = e.offset();
                this !== n.element[0] && n.snapElements.push({
                    item: this,
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: i.top,
                    left: i.left
                });
            });
        },
        drag: function(e, i, n) {
            var s, o, a, r, l, u, h, c, d, p, f = n.options, m = f.snapTolerance, g = i.offset.left, v = g + n.helperProportions.width, y = i.offset.top, b = y + n.helperProportions.height;
            for (d = n.snapElements.length - 1; d >= 0; d--) u = (l = n.snapElements[d].left - n.margins.left) + n.snapElements[d].width, 
            c = (h = n.snapElements[d].top - n.margins.top) + n.snapElements[d].height, v < l - m || g > u + m || b < h - m || y > c + m || !t.contains(n.snapElements[d].item.ownerDocument, n.snapElements[d].item) ? (n.snapElements[d].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), {
                snapItem: n.snapElements[d].item
            })), n.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (s = Math.abs(h - b) <= m, 
            o = Math.abs(c - y) <= m, a = Math.abs(l - v) <= m, r = Math.abs(u - g) <= m, s && (i.position.top = n._convertPositionTo("relative", {
                top: h - n.helperProportions.height,
                left: 0
            }).top), o && (i.position.top = n._convertPositionTo("relative", {
                top: c,
                left: 0
            }).top), a && (i.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: l - n.helperProportions.width
            }).left), r && (i.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: u
            }).left)), p = s || o || a || r, "outer" !== f.snapMode && (s = Math.abs(h - y) <= m, 
            o = Math.abs(c - b) <= m, a = Math.abs(l - g) <= m, r = Math.abs(u - v) <= m, s && (i.position.top = n._convertPositionTo("relative", {
                top: h,
                left: 0
            }).top), o && (i.position.top = n._convertPositionTo("relative", {
                top: c - n.helperProportions.height,
                left: 0
            }).top), a && (i.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left), r && (i.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: u - n.helperProportions.width
            }).left)), !n.snapElements[d].snapping && (s || o || a || r || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), {
                snapItem: n.snapElements[d].item
            })), n.snapElements[d].snapping = s || o || a || r || p);
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function(e, i, n) {
            var s, o = n.options, a = t.makeArray(t(o.stack)).sort(function(e, i) {
                return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0);
            });
            a.length && (s = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function(e) {
                t(this).css("zIndex", s + e);
            }), this.css("zIndex", s + a.length));
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i, n) {
            var s = t(i.helper), o = n.options;
            s.css("zIndex") && (o._zIndex = s.css("zIndex")), s.css("zIndex", o.zIndex);
        },
        stop: function(e, i, n) {
            var s = n.options;
            s._zIndex && t(i.helper).css("zIndex", s._zIndex);
        }
    });
    t.ui.draggable;
    t.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: !0,
            greedy: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var e, i = this.options, n = i.accept;
            this.isover = !1, this.isout = !0, this.accept = t.isFunction(n) ? n : function(t) {
                return t.is(n);
            }, this.proportions = function() {
                if (!arguments.length) return e || (e = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                });
                e = arguments[0];
            }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable");
        },
        _addToManager: function(e) {
            t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this);
        },
        _splice: function(t) {
            for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1);
        },
        _destroy: function() {
            var e = t.ui.ddmanager.droppables[this.options.scope];
            this._splice(e);
        },
        _setOption: function(e, i) {
            if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) {
                return t.is(i);
            }; else if ("scope" === e) {
                var n = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(n), this._addToManager(i);
            }
            this._super(e, i);
        },
        _activate: function(e) {
            var i = t.ui.ddmanager.current;
            this._addActiveClass(), i && this._trigger("activate", e, this.ui(i));
        },
        _deactivate: function(e) {
            var i = t.ui.ddmanager.current;
            this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i));
        },
        _over: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), 
            this._trigger("over", e, this.ui(i)));
        },
        _out: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), 
            this._trigger("out", e, this.ui(i)));
        },
        _drop: function(e, i) {
            var n = i || t.ui.ddmanager.current, s = !1;
            return !(!n || (n.currentItem || n.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var i = t(this).droppable("instance");
                if (i.options.greedy && !i.options.disabled && i.options.scope === n.options.scope && i.accept.call(i.element[0], n.currentItem || n.element) && c(n, t.extend(i, {
                    offset: i.element.offset()
                }), i.options.tolerance, e)) return s = !0, !1;
            }), !s && (!!this.accept.call(this.element[0], n.currentItem || n.element) && (this._removeActiveClass(), 
            this._removeHoverClass(), this._trigger("drop", e, this.ui(n)), this.element)));
        },
        ui: function(t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            };
        },
        _addHoverClass: function() {
            this._addClass("ui-droppable-hover");
        },
        _removeHoverClass: function() {
            this._removeClass("ui-droppable-hover");
        },
        _addActiveClass: function() {
            this._addClass("ui-droppable-active");
        },
        _removeActiveClass: function() {
            this._removeClass("ui-droppable-active");
        }
    });
    var c = t.ui.intersect = function() {
        function t(t, e, i) {
            return t >= e && t < e + i;
        }
        return function(e, i, n, s) {
            if (!i.offset) return !1;
            var o = (e.positionAbs || e.position.absolute).left + e.margins.left, a = (e.positionAbs || e.position.absolute).top + e.margins.top, r = o + e.helperProportions.width, l = a + e.helperProportions.height, u = i.offset.left, h = i.offset.top, c = u + i.proportions().width, d = h + i.proportions().height;
            switch (n) {
              case "fit":
                return u <= o && r <= c && h <= a && l <= d;

              case "intersect":
                return u < o + e.helperProportions.width / 2 && r - e.helperProportions.width / 2 < c && h < a + e.helperProportions.height / 2 && l - e.helperProportions.height / 2 < d;

              case "pointer":
                return t(s.pageY, h, i.proportions().height) && t(s.pageX, u, i.proportions().width);

              case "touch":
                return (a >= h && a <= d || l >= h && l <= d || a < h && l > d) && (o >= u && o <= c || r >= u && r <= c || o < u && r > c);

              default:
                return !1;
            }
        };
    }();
    t.ui.ddmanager = {
        current: null,
        droppables: {
            default: []
        },
        prepareOffsets: function(e, i) {
            var n, s, o = t.ui.ddmanager.droppables[e.options.scope] || [], a = i ? i.type : null, r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (n = 0; n < o.length; n++) if (!(o[n].options.disabled || e && !o[n].accept.call(o[n].element[0], e.currentItem || e.element))) {
                for (s = 0; s < r.length; s++) if (r[s] === o[n].element[0]) {
                    o[n].proportions().height = 0;
                    continue t;
                }
                o[n].visible = "none" !== o[n].element.css("display"), o[n].visible && ("mousedown" === a && o[n]._activate.call(o[n], i), 
                o[n].offset = o[n].element.offset(), o[n].proportions({
                    width: o[n].element[0].offsetWidth,
                    height: o[n].element[0].offsetHeight
                }));
            }
        },
        drop: function(e, i) {
            var n = !1;
            return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && c(e, this, this.options.tolerance, i) && (n = this._drop.call(this, i) || n), 
                !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, 
                this.isover = !1, this._deactivate.call(this, i)));
            }), n;
        },
        dragStart: function(e, i) {
            e.element.parentsUntil("body").on("scroll.droppable", function() {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
            });
        },
        drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var n, s, o, a = c(e, this, this.options.tolerance, i), r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (s = this.options.scope, (o = this.element.parents(":data(ui-droppable)").filter(function() {
                        return t(this).droppable("instance").options.scope === s;
                    })).length && ((n = t(o[0]).droppable("instance")).greedyChild = "isover" === r)), 
                    n && "isover" === r && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[r] = !0, 
                    this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), 
                    n && "isout" === r && (n.isout = !1, n.isover = !0, n._over.call(n, i)));
                }
            });
        },
        dragStop: function(e, i) {
            e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
        }
    }, !1 !== t.uiBackCompat && t.widget("ui.droppable", t.ui.droppable, {
        options: {
            hoverClass: !1,
            activeClass: !1
        },
        _addActiveClass: function() {
            this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass);
        },
        _removeActiveClass: function() {
            this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass);
        },
        _addHoverClass: function() {
            this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass);
        },
        _removeHoverClass: function() {
            this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass);
        }
    });
    t.ui.droppable;
    t.widget("ui.resizable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {
                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
            },
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(t) {
            return parseFloat(t) || 0;
        },
        _isNumber: function(t) {
            return !isNaN(parseFloat(t));
        },
        _hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop", s = !1;
            return e[n] > 0 || (e[n] = 1, s = e[n] > 0, e[n] = 0, s);
        },
        _create: function() {
            var e, i = this.options, n = this;
            this._addClass("ui-resizable"), t.extend(this, {
                _aspectRatio: !!i.aspectRatio,
                aspectRatio: i.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), 
            this.elementIsWrapper = !0, e = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft")
            }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), 
            this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), 
            i.autoHide && t(this.element).on("mouseenter", function() {
                i.disabled || (n._removeClass("ui-resizable-autohide"), n._handles.show());
            }).on("mouseleave", function() {
                i.disabled || n.resizing || (n._addClass("ui-resizable-autohide"), n._handles.hide());
            }), this._mouseInit();
        },
        _destroy: function() {
            this._mouseDestroy();
            var e, i = function(e) {
                t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove();
            };
            return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), 
            i(this.originalElement), this;
        },
        _setOption: function(t, e) {
            switch (this._super(t, e), t) {
              case "handles":
                this._removeHandles(), this._setupHandles();
            }
        },
        _setupHandles: function() {
            var e, i, n, s, o, a = this.options, r = this;
            if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"), this._handles = t(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), 
            n = this.handles.split(","), this.handles = {}, i = 0; i < n.length; i++) s = "ui-resizable-" + (e = t.trim(n[i])), 
            o = t("<div>"), this._addClass(o, "ui-resizable-handle " + s), o.css({
                zIndex: a.zIndex
            }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
            this._renderAxis = function(e) {
                var i, n, s, o;
                e = e || this.element;
                for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), 
                this._on(this.handles[i], {
                    mousedown: r._mouseDown
                })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = t(this.handles[i], this.element), 
                o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = [ "padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left" ].join(""), 
                e.css(s, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i]);
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), 
            this._handles.disableSelection(), this._handles.on("mouseover", function() {
                r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), 
                r.axis = o && o[1] ? o[1] : "se");
            }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"));
        },
        _removeHandles: function() {
            this._handles.remove();
        },
        _mouseCapture: function(e) {
            var i, n, s = !1;
            for (i in this.handles) ((n = t(this.handles[i])[0]) === e.target || t.contains(n, e.target)) && (s = !0);
            return !this.options.disabled && s;
        },
        _mouseStart: function(e) {
            var i, n, s, o = this.options, a = this.element;
            return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), 
            n = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, 
            n += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: i,
                top: n
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: a.width(),
                height: a.height()
            }, this.originalSize = this._helper ? {
                width: a.outerWidth(),
                height: a.outerHeight()
            } : {
                width: a.width(),
                height: a.height()
            }, this.sizeDiff = {
                width: a.outerWidth() - a.width(),
                height: a.outerHeight() - a.height()
            }, this.originalPosition = {
                left: i,
                top: n
            }, this.originalMousePosition = {
                left: e.pageX,
                top: e.pageY
            }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, 
            s = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), 
            this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0;
        },
        _mouseDrag: function(e) {
            var i, n, s = this.originalMousePosition, o = this.axis, a = e.pageX - s.left || 0, r = e.pageY - s.top || 0, l = this._change[o];
            return this._updatePrevProperties(), !!l && (i = l.apply(this, [ e, a, r ]), this._updateVirtualBoundaries(e.shiftKey), 
            (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), 
            this._updateCache(i), this._propagate("resize", e), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), 
            t.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), 
            this._applyChanges()), !1);
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i, n, s, o, a, r, l, u = this.options, h = this;
            return this._helper && (s = (n = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : h.sizeDiff.height, 
            o = n ? 0 : h.sizeDiff.width, a = {
                width: h.helper.width() - o,
                height: h.helper.height() - s
            }, r = parseFloat(h.element.css("left")) + (h.position.left - h.originalPosition.left) || null, 
            l = parseFloat(h.element.css("top")) + (h.position.top - h.originalPosition.top) || null, 
            u.animate || this.element.css(t.extend(a, {
                top: l,
                left: r
            })), h.helper.height(h.size.height), h.helper.width(h.size.width), this._helper && !u.animate && this._proportionallyResize()), 
            t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), 
            this._helper && this.helper.remove(), !1;
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {
                width: this.size.width,
                height: this.size.height
            };
        },
        _applyChanges: function() {
            var t = {};
            return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), 
            this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), 
            this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), 
            this.helper.css(t), t;
        },
        _updateVirtualBoundaries: function(t) {
            var e, i, n, s, o, a = this.options;
            o = {
                minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, 
            i = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), 
            n > o.minHeight && (o.minHeight = n), i < o.maxWidth && (o.maxWidth = i), s < o.maxHeight && (o.maxHeight = s)), 
            this._vBoundaries = o;
        },
        _updateCache: function(t) {
            this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), 
            this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), 
            this._isNumber(t.width) && (this.size.width = t.width);
        },
        _updateRatio: function(t) {
            var e = this.position, i = this.size, n = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), 
            "sw" === n && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (i.height - t.height), 
            t.left = e.left + (i.width - t.width)), t;
        },
        _respectSize: function(t) {
            var e = this._vBoundaries, i = this.axis, n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width, s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height, o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width, a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height, r = this.originalPosition.left + this.originalSize.width, l = this.originalPosition.top + this.originalSize.height, u = /sw|nw|w/.test(i), h = /nw|ne|n/.test(i);
            return o && (t.width = e.minWidth), a && (t.height = e.minHeight), n && (t.width = e.maxWidth), 
            s && (t.height = e.maxHeight), o && u && (t.left = r - e.minWidth), n && u && (t.left = r - e.maxWidth), 
            a && h && (t.top = l - e.minHeight), s && h && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, 
            t;
        },
        _getPaddingPlusBorderDimensions: function(t) {
            for (var e = 0, i = [], n = [ t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth") ], s = [ t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft") ]; e < 4; e++) i[e] = parseFloat(n[e]) || 0, 
            i[e] += parseFloat(s[e]) || 0;
            return {
                height: i[0] + i[2],
                width: i[1] + i[3]
            };
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], 
            this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), 
            t.css({
                height: i.height() - this.outerDimensions.height || 0,
                width: i.width() - this.outerDimensions.width || 0
            });
        },
        _renderProxy: function() {
            var e = this.element, i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), 
            this._addClass(this.helper, this._helper), this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element;
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                };
            },
            w: function(t, e) {
                var i = this.originalSize;
                return {
                    left: this.originalPosition.left + e,
                    width: i.width - e
                };
            },
            n: function(t, e, i) {
                var n = this.originalSize;
                return {
                    top: this.originalPosition.top + i,
                    height: n.height - i
                };
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                };
            },
            se: function(e, i, n) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [ e, i, n ]));
            },
            sw: function(e, i, n) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [ e, i, n ]));
            },
            ne: function(e, i, n) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [ e, i, n ]));
            },
            nw: function(e, i, n) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [ e, i, n ]));
            }
        },
        _propagate: function(e, i) {
            t.ui.plugin.call(this, e, [ i, this.ui() ]), "resize" !== e && this._trigger(e, i, this.ui());
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            };
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = t(this).resizable("instance"), n = i.options, s = i._proportionallyResizeElements, o = s.length && /textarea/i.test(s[0].nodeName), a = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height, r = o ? 0 : i.sizeDiff.width, l = {
                width: i.size.width - r,
                height: i.size.height - a
            }, u = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null, h = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(l, h && u ? {
                top: h,
                left: u
            } : {}), {
                duration: n.animateDuration,
                easing: n.animateEasing,
                step: function() {
                    var n = {
                        width: parseFloat(i.element.css("width")),
                        height: parseFloat(i.element.css("height")),
                        top: parseFloat(i.element.css("top")),
                        left: parseFloat(i.element.css("left"))
                    };
                    s && s.length && t(s[0]).css({
                        width: n.width,
                        height: n.height
                    }), i._updateCache(n), i._propagate("resize", e);
                }
            });
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function() {
            var e, i, n, s, o, a, r, l = t(this).resizable("instance"), u = l.options, h = l.element, c = u.containment, d = c instanceof t ? c.get(0) : /parent/.test(c) ? h.parent().get(0) : c;
            d && (l.containerElement = t(d), /document/.test(c) || c === document ? (l.containerOffset = {
                left: 0,
                top: 0
            }, l.containerPosition = {
                left: 0,
                top: 0
            }, l.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (e = t(d), i = [], t([ "Top", "Right", "Left", "Bottom" ]).each(function(t, n) {
                i[t] = l._num(e.css("padding" + n));
            }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
                height: e.innerHeight() - i[3],
                width: e.innerWidth() - i[1]
            }, n = l.containerOffset, s = l.containerSize.height, o = l.containerSize.width, 
            a = l._hasScroll(d, "left") ? d.scrollWidth : o, r = l._hasScroll(d) ? d.scrollHeight : s, 
            l.parentData = {
                element: d,
                left: n.left,
                top: n.top,
                width: a,
                height: r
            }));
        },
        resize: function(e) {
            var i, n, s, o, a = t(this).resizable("instance"), r = a.options, l = a.containerOffset, u = a.position, h = a._aspectRatio || e.shiftKey, c = {
                top: 0,
                left: 0
            }, d = a.containerElement, p = !0;
            d[0] !== document && /static/.test(d.css("position")) && (c = l), u.left < (a._helper ? l.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - l.left : a.position.left - c.left), 
            h && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? l.left : 0), 
            u.top < (a._helper ? l.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - l.top : a.position.top), 
            h && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? l.top : 0), 
            s = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), 
            s && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, 
            a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - c.left : a.offset.left - l.left)), 
            n = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - c.top : a.offset.top - l.top)), 
            i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, 
            h && (a.size.height = a.size.width / a.aspectRatio, p = !1)), n + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - n, 
            h && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, 
            a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height);
        },
        stop: function() {
            var e = t(this).resizable("instance"), i = e.options, n = e.containerOffset, s = e.containerPosition, o = e.containerElement, a = t(e.helper), r = a.offset(), l = a.outerWidth() - e.sizeDiff.width, u = a.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                left: r.left - s.left - n.left,
                width: l,
                height: u
            }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                left: r.left - s.left - n.left,
                width: l,
                height: u
            });
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var e = t(this).resizable("instance").options;
            t(e.alsoResize).each(function() {
                var e = t(this);
                e.data("ui-resizable-alsoresize", {
                    width: parseFloat(e.width()),
                    height: parseFloat(e.height()),
                    left: parseFloat(e.css("left")),
                    top: parseFloat(e.css("top"))
                });
            });
        },
        resize: function(e, i) {
            var n = t(this).resizable("instance"), s = n.options, o = n.originalSize, a = n.originalPosition, r = {
                height: n.size.height - o.height || 0,
                width: n.size.width - o.width || 0,
                top: n.position.top - a.top || 0,
                left: n.position.left - a.left || 0
            };
            t(s.alsoResize).each(function() {
                var e = t(this), n = t(this).data("ui-resizable-alsoresize"), s = {}, o = e.parents(i.originalElement[0]).length ? [ "width", "height" ] : [ "width", "height", "top", "left" ];
                t.each(o, function(t, e) {
                    var i = (n[e] || 0) + (r[e] || 0);
                    i && i >= 0 && (s[e] = i || null);
                }), e.css(s);
            });
        },
        stop: function() {
            t(this).removeData("ui-resizable-alsoresize");
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var e = t(this).resizable("instance"), i = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            }), e._addClass(e.ghost, "ui-resizable-ghost"), !1 !== t.uiBackCompat && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), 
            e.ghost.appendTo(e.helper);
        },
        resize: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            });
        },
        stop: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0));
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var e, i = t(this).resizable("instance"), n = i.options, s = i.size, o = i.originalSize, a = i.originalPosition, r = i.axis, l = "number" == typeof n.grid ? [ n.grid, n.grid ] : n.grid, u = l[0] || 1, h = l[1] || 1, c = Math.round((s.width - o.width) / u) * u, d = Math.round((s.height - o.height) / h) * h, p = o.width + c, f = o.height + d, m = n.maxWidth && n.maxWidth < p, g = n.maxHeight && n.maxHeight < f, v = n.minWidth && n.minWidth > p, y = n.minHeight && n.minHeight > f;
            n.grid = l, v && (p += u), y && (f += h), m && (p -= u), g && (f -= h), /^(se|s|e)$/.test(r) ? (i.size.width = p, 
            i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, 
            i.size.height = f, i.position.left = a.left - c) : ((f - h <= 0 || p - u <= 0) && (e = i._getPaddingPlusBorderDimensions(this)), 
            f - h > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = h - e.height, 
            i.size.height = f, i.position.top = a.top + o.height - f), p - u > 0 ? (i.size.width = p, 
            i.position.left = a.left - c) : (p = u - e.width, i.size.width = p, i.position.left = a.left + o.width - p));
        }
    });
    t.ui.resizable, t.widget("ui.selectable", t.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var e = this;
            this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), 
                e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function() {
                    var i = t(this), n = i.offset(), s = {
                        left: n.left - e.elementPos.left,
                        top: n.top - e.elementPos.top
                    };
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: i,
                        left: s.left,
                        top: s.top,
                        right: s.left + i.outerWidth(),
                        bottom: s.top + i.outerHeight(),
                        startselected: !1,
                        selected: i.hasClass("ui-selected"),
                        selecting: i.hasClass("ui-selecting"),
                        unselecting: i.hasClass("ui-unselecting")
                    });
                });
            }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper");
        },
        _destroy: function() {
            this.selectees.removeData("selectable-item"), this._mouseDestroy();
        },
        _mouseStart: function(e) {
            var i = this, n = this.options;
            this.opos = [ e.pageX, e.pageY ], this.elementPos = t(this.element[0]).offset(), 
            this.options.disabled || (this.selectees = t(n.filter, this.element[0]), this._trigger("start", e), 
            t(n.appendTo).append(this.helper), this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0
            }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var n = t.data(this, "selectable-item");
                n.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(n.$element, "ui-selected"), 
                n.selected = !1, i._addClass(n.$element, "ui-unselecting"), n.unselecting = !0, 
                i._trigger("unselecting", e, {
                    unselecting: n.element
                }));
            }), t(e.target).parents().addBack().each(function() {
                var n, s = t.data(this, "selectable-item");
                if (s) return n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected"), 
                i._removeClass(s.$element, n ? "ui-unselecting" : "ui-selected")._addClass(s.$element, n ? "ui-selecting" : "ui-unselecting"), 
                s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", e, {
                    selecting: s.element
                }) : i._trigger("unselecting", e, {
                    unselecting: s.element
                }), !1;
            }));
        },
        _mouseDrag: function(e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, n = this, s = this.options, o = this.opos[0], a = this.opos[1], r = e.pageX, l = e.pageY;
                return o > r && (i = r, r = o, o = i), a > l && (i = l, l = a, a = i), this.helper.css({
                    left: o,
                    top: a,
                    width: r - o,
                    height: l - a
                }), this.selectees.each(function() {
                    var i = t.data(this, "selectable-item"), u = !1, h = {};
                    i && i.element !== n.element[0] && (h.left = i.left + n.elementPos.left, h.right = i.right + n.elementPos.left, 
                    h.top = i.top + n.elementPos.top, h.bottom = i.bottom + n.elementPos.top, "touch" === s.tolerance ? u = !(h.left > r || h.right < o || h.top > l || h.bottom < a) : "fit" === s.tolerance && (u = h.left > o && h.right < r && h.top > a && h.bottom < l), 
                    u ? (i.selected && (n._removeClass(i.$element, "ui-selected"), i.selected = !1), 
                    i.unselecting && (n._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), 
                    i.selecting || (n._addClass(i.$element, "ui-selecting"), i.selecting = !0, n._trigger("selecting", e, {
                        selecting: i.element
                    }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (n._removeClass(i.$element, "ui-selecting"), 
                    i.selecting = !1, n._addClass(i.$element, "ui-selected"), i.selected = !0) : (n._removeClass(i.$element, "ui-selecting"), 
                    i.selecting = !1, i.startselected && (n._addClass(i.$element, "ui-unselecting"), 
                    i.unselecting = !0), n._trigger("unselecting", e, {
                        unselecting: i.element
                    }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (n._removeClass(i.$element, "ui-selected"), 
                    i.selected = !1, n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, 
                    n._trigger("unselecting", e, {
                        unselecting: i.element
                    })))));
                }), !1;
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
                var n = t.data(this, "selectable-item");
                i._removeClass(n.$element, "ui-unselecting"), n.unselecting = !1, n.startselected = !1, 
                i._trigger("unselected", e, {
                    unselected: n.element
                });
            }), t(".ui-selecting", this.element[0]).each(function() {
                var n = t.data(this, "selectable-item");
                i._removeClass(n.$element, "ui-selecting")._addClass(n.$element, "ui-selected"), 
                n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", e, {
                    selected: n.element
                });
            }), this._trigger("stop", e), this.helper.remove(), !1;
        }
    }), t.widget("ui.sortable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(t, e, i) {
            return t >= e && t < e + i;
        },
        _isFloating: function(t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"));
        },
        _create: function() {
            this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), 
            this._mouseInit(), this._setHandleClassName(), this.ready = !0;
        },
        _setOption: function(t, e) {
            this._super(t, e), "handle" === t && this._setHandleClassName();
        },
        _setHandleClassName: function() {
            var e = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), 
            t.each(this.items, function() {
                e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle");
            });
        },
        _destroy: function() {
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this;
        },
        _mouseCapture: function(e, i) {
            var n = null, s = !1, o = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), 
            t(e.target).parents().each(function() {
                if (t.data(this, o.widgetName + "-item") === o) return n = t(this), !1;
            }), t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)), !!n && (!(this.options.handle && !i && (t(this.options.handle, n).find("*").addBack().each(function() {
                this === e.target && (s = !0);
            }), !s)) && (this.currentItem = n, this._removeCurrentsFromItems(), !0))));
        },
        _mouseStart: function(e, i, n) {
            var s, o, a = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), 
            this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), 
            this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), 
            this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, 
            this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), 
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), 
            a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), 
            this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), 
            a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), 
            this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), 
            this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), 
            this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), 
            !n) for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), 
            this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), 
            !0;
        },
        _mouseDrag: function(e) {
            var i, n, s, o, a = this.options, r = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), 
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), 
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), 
            e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), 
            !1 !== r && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), 
            this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), 
            i = this.items.length - 1; i >= 0; i--) if (n = this.items[i], s = n.item[0], (o = this._intersectsWithPointer(n)) && n.instance === this.currentContainer && !(s === this.currentItem[0] || this.placeholder[1 === o ? "next" : "prev"]()[0] === s || t.contains(this.placeholder[0], s) || "semi-dynamic" === this.options.type && t.contains(this.element[0], s))) {
                if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                break;
            }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), 
            this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, 
            !1;
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), 
                this.options.revert) {
                    var n = this, s = this.placeholder.offset(), o = this.options.axis, a = {};
                    o && "x" !== o || (a.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), 
                    o && "y" !== o || (a.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), 
                    this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
                        n._clear(e);
                    });
                } else this._clear(e, i);
                return !1;
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp(new t.Event("mouseup", {
                    target: null
                })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), 
                this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), 
                this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), 
                this.containers[e].containerCache.over = 0);
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), 
            t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), 
            this;
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected), n = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]));
            }), !n.length && e.key && n.push(e.key + "="), n.join("&");
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected), n = [];
            return e = e || {}, i.each(function() {
                n.push(t(e.item || this).attr(e.attribute || "id") || "");
            }), n;
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left, i = e + this.helperProportions.width, n = this.positionAbs.top, s = n + this.helperProportions.height, o = t.left, a = o + t.width, r = t.top, l = r + t.height, u = this.offset.click.top, h = this.offset.click.left, c = "x" === this.options.axis || n + u > r && n + u < l, d = "y" === this.options.axis || e + h > o && e + h < a, p = c && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < a && r < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l;
        },
        _intersectsWithPointer: function(t) {
            var e, i, n = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height), s = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
            return !(!n || !s) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), 
            this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1));
        },
        _intersectsWithSides: function(t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width), n = this._getDragVerticalDirection(), s = this._getDragHorizontalDirection();
            return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && e || "up" === n && !e);
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up");
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left");
        },
        refresh: function(t) {
            return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), 
            this;
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [ t.connectWith ] : t.connectWith;
        },
        _getItemsAsjQuery: function(e) {
            function i() {
                r.push(this);
            }
            var n, s, o, a, r = [], l = [], u = this._connectWith();
            if (u && e) for (n = u.length - 1; n >= 0; n--) for (s = (o = t(u[n], this.document[0])).length - 1; s >= 0; s--) (a = t.data(o[s], this.widgetFullName)) && a !== this && !a.options.disabled && l.push([ t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a ]);
            for (l.push([ t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this ]), 
            n = l.length - 1; n >= 0; n--) l[n][0].each(i);
            return t(r);
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; i < e.length; i++) if (e[i] === t.item[0]) return !1;
                return !0;
            });
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [ this ];
            var i, n, s, o, a, r, l, u, h = this.items, c = [ [ t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                item: this.currentItem
            }) : t(this.options.items, this.element), this ] ], d = this._connectWith();
            if (d && this.ready) for (i = d.length - 1; i >= 0; i--) for (n = (s = t(d[i], this.document[0])).length - 1; n >= 0; n--) (o = t.data(s[n], this.widgetFullName)) && o !== this && !o.options.disabled && (c.push([ t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                item: this.currentItem
            }) : t(o.options.items, o.element), o ]), this.containers.push(o));
            for (i = c.length - 1; i >= 0; i--) for (a = c[i][1], n = 0, u = (r = c[i][0]).length; n < u; n++) (l = t(r[n])).data(this.widgetName + "-item", a), 
            h.push({
                item: l,
                instance: a,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            });
        },
        refreshPositions: function(e) {
            this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), 
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, n, s, o;
            for (i = this.items.length - 1; i >= 0; i--) (n = this.items[i]).instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, 
            e || (n.width = s.outerWidth(), n.height = s.outerHeight()), o = s.offset(), n.left = o.left, 
            n.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), 
            this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, 
            this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), 
            this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this;
        },
        _createPlaceholder: function(e) {
            var i, n = (e = e || this).options;
            n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                element: function() {
                    var n = e.currentItem[0].nodeName.toLowerCase(), s = t("<" + n + ">", e.document[0]);
                    return e._addClass(s, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(s, "ui-sortable-helper"), 
                    "tbody" === n ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(s)) : "tr" === n ? e._createTrPlaceholder(e.currentItem, s) : "img" === n && s.attr("src", e.currentItem.attr("src")), 
                    i || s.css("visibility", "hidden"), s;
                },
                update: function(t, s) {
                    i && !n.forcePlaceholderSize || (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), 
                    s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)));
                }
            }), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), 
            n.placeholder.update(e, e.placeholder);
        },
        _createTrPlaceholder: function(e, i) {
            var n = this;
            e.children().each(function() {
                t("<td>&#160;</td>", n.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i);
            });
        },
        _contactContainers: function(e) {
            var i, n, s, o, a, r, l, u, h, c, d = null, p = null;
            for (i = this.containers.length - 1; i >= 0; i--) if (!t.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
                if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                d = this.containers[i], p = i;
            } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), 
            this.containers[i].containerCache.over = 0);
            if (d) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), 
            this.containers[p].containerCache.over = 1); else {
                for (s = 1e4, o = null, a = (h = d.floating || this._isFloating(this.currentItem)) ? "left" : "top", 
                r = h ? "width" : "height", c = h ? "pageX" : "pageY", n = this.items.length - 1; n >= 0; n--) t.contains(this.containers[p].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[a], 
                u = !1, e[c] - l > this.items[n][r] / 2 && (u = !0), Math.abs(e[c] - l) < s && (s = Math.abs(e[c] - l), 
                o = this.items[n], this.direction = u ? "up" : "down"));
                if (!o && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[p]) return void (this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), 
                this.currentContainer.containerCache.over = 1));
                o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), 
                this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), 
                this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), 
                this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1;
            }
        },
        _createHelper: function(e) {
            var i = this.options, n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [ e, this.currentItem ])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), 
            n[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), n[0].style.width && !i.forceHelperSize || n.width(this.currentItem.width()), 
            n[0].style.height && !i.forceHelperSize || n.height(this.currentItem.height()), 
            n;
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), 
            "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top);
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), 
            e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            }
            return {
                top: 0,
                left: 0
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var e, i, n, s = this.options;
            "parent" === s.containment && (s.containment = this.helper[0].parentNode), "document" !== s.containment && "window" !== s.containment || (this.containment = [ 0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]), 
            /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), 
            n = "hidden" !== t(e).css("overflow"), this.containment = [ i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top ]);
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var n = "absolute" === e ? 1 : -1, s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, o = /(html|body)/i.test(s[0].tagName);
            return {
                top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
            };
        },
        _generatePosition: function(e) {
            var i, n, s = this.options, o = e.pageX, a = e.pageY, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), 
            this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), 
            e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), 
            e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), 
            e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), 
            s.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1], 
            a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, 
            n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], 
            o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), 
            {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : r.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft())
            };
        },
        _rearrange: function(t, e, i, n) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), 
            this.counter = this.counter ? ++this.counter : 1;
            var s = this.counter;
            this._delay(function() {
                s === this.counter && this.refreshPositions(!n);
            });
        },
        _clear: function(t, e) {
            function i(t, e, i) {
                return function(n) {
                    i._trigger(t, n, e._uiHash(e));
                };
            }
            this.reverting = !1;
            var n, s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), 
            this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (n in this._storedCSS) "auto" !== this._storedCSS[n] && "static" !== this._storedCSS[n] || (this._storedCSS[n] = "");
                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper");
            } else this.currentItem.show();
            for (this.fromOutside && !e && s.push(function(t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside));
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) {
                this._trigger("update", t, this._uiHash());
            }), this !== this.currentContainer && (e || (s.push(function(t) {
                this._trigger("remove", t, this._uiHash());
            }), s.push(function(t) {
                return function(e) {
                    t._trigger("receive", e, this._uiHash(this));
                };
            }.call(this, this.currentContainer)), s.push(function(t) {
                return function(e) {
                    t._trigger("update", e, this._uiHash(this));
                };
            }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || s.push(i("deactivate", this, this.containers[n])), 
            this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), 
            this.containers[n].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), 
            this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), 
            this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), 
            this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), 
            this.helper = null), !e) {
                for (n = 0; n < s.length; n++) s[n].call(this, t);
                this._trigger("stop", t, this._uiHash());
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval;
        },
        _trigger: function() {
            !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel();
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            };
        }
    }), t.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: !1,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var e = this.options;
            this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), 
            this.element.attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), 
            this._processPanels(), e.active < 0 && (e.active += this.headers.length), this._refresh();
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : t()
            };
        },
        _createIcons: function() {
            var e, i, n = this.options.icons;
            n && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + n.header), 
            e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), 
            this._removeClass(i, n.header)._addClass(i, null, n.activeHeader)._addClass(this.headers, "ui-accordion-icons"));
        },
        _destroyIcons: function() {
            this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove();
        },
        _destroy: function() {
            var t;
            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), 
            this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), 
            "content" !== this.options.heightStyle && t.css("height", "");
        },
        _setOption: function(t, e) {
            "active" !== t ? ("event" === t && (this.options.event && this._off(this.headers, this.options.event), 
            this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), 
            "icons" === t && (this._destroyIcons(), e && this._createIcons())) : this._activate(e);
        },
        _setOptionDisabled: function(t) {
            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), 
            this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t);
        },
        _keydown: function(e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode, n = this.headers.length, s = this.headers.index(e.target), o = !1;
                switch (e.keyCode) {
                  case i.RIGHT:
                  case i.DOWN:
                    o = this.headers[(s + 1) % n];
                    break;

                  case i.LEFT:
                  case i.UP:
                    o = this.headers[(s - 1 + n) % n];
                    break;

                  case i.SPACE:
                  case i.ENTER:
                    this._eventHandler(e);
                    break;

                  case i.HOME:
                    o = this.headers[0];
                    break;

                  case i.END:
                    o = this.headers[n - 1];
                }
                o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), 
                e.preventDefault());
            }
        },
        _panelKeyDown: function(e) {
            e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus");
        },
        refresh: function() {
            var e = this.options;
            this._processPanels(), !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1, 
            this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, 
            this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), 
            this._destroyIcons(), this._refresh();
        },
        _processPanels: function() {
            var t = this.headers, e = this.panels;
            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), 
            this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), 
            this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), 
            e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
        },
        _refresh: function() {
            var e, i = this.options, n = i.heightStyle, s = this.element.parent();
            this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), 
            this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), 
            this.headers.attr("role", "tab").each(function() {
                var e = t(this), i = e.uniqueId().attr("id"), n = e.next(), s = n.uniqueId().attr("id");
                e.attr("aria-controls", s), n.attr("aria-labelledby", i);
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), 
            "fill" === n ? (e = s.height(), this.element.siblings(":visible").each(function() {
                var i = t(this), n = i.css("position");
                "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0));
            }), this.headers.each(function() {
                e -= t(this).outerHeight(!0);
            }), this.headers.next().each(function() {
                t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()));
            }).css("overflow", "auto")) : "auto" === n && (e = 0, this.headers.next().each(function() {
                var i = t(this).is(":visible");
                i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide();
            }).height(e));
        },
        _activate: function(e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }));
        },
        _findActive: function(e) {
            return "number" == typeof e ? this.headers.eq(e) : t();
        },
        _setupEvents: function(e) {
            var i = {
                keydown: "_keydown"
            };
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler";
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), 
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers);
        },
        _eventHandler: function(e) {
            var i, n, s = this.options, o = this.active, a = t(e.currentTarget), r = a[0] === o[0], l = r && s.collapsible, u = l ? t() : a.next(), h = {
                oldHeader: o,
                oldPanel: o.next(),
                newHeader: l ? t() : a,
                newPanel: u
            };
            e.preventDefault(), r && !s.collapsible || !1 === this._trigger("beforeActivate", e, h) || (s.active = !l && this.headers.index(a), 
            this.active = r ? t() : a, this._toggle(h), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), 
            s.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, s.icons.activeHeader)._addClass(i, null, s.icons.header)), 
            r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), 
            s.icons && (n = a.children(".ui-accordion-header-icon"), this._removeClass(n, null, s.icons.header)._addClass(n, null, s.icons.activeHeader)), 
            this._addClass(a.next(), "ui-accordion-content-active")));
        },
        _toggle: function(e) {
            var i = e.newPanel, n = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, 
            this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)), 
            n.attr({
                "aria-hidden": "true"
            }), n.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), i.length && n.length ? n.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : i.length && this.headers.filter(function() {
                return 0 === parseInt(t(this).attr("tabIndex"), 10);
            }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            });
        },
        _animate: function(t, e, i) {
            var n, s, o, a = this, r = 0, l = t.css("box-sizing"), u = t.length && (!e.length || t.index() < e.index()), h = this.options.animate || {}, c = u && h.down || h, d = function() {
                a._toggleComplete(i);
            };
            return "number" == typeof c && (o = c), "string" == typeof c && (s = c), s = s || c.easing || h.easing, 
            o = o || c.duration || h.duration, e.length ? t.length ? (n = t.show().outerHeight(), 
            e.animate(this.hideProps, {
                duration: o,
                easing: s,
                step: function(t, e) {
                    e.now = Math.round(t);
                }
            }), void t.hide().animate(this.showProps, {
                duration: o,
                easing: s,
                complete: d,
                step: function(t, i) {
                    i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(n - e.outerHeight() - r), 
                    r = 0);
                }
            })) : e.animate(this.hideProps, o, s, d) : t.animate(this.showProps, o, s, d);
        },
        _toggleComplete: function(t) {
            var e = t.oldPanel, i = e.prev();
            this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), 
            e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t);
        }
    }), t.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                "mousedown .ui-menu-item": function(t) {
                    t.preventDefault();
                },
                "click .ui-menu-item": function(e) {
                    var i = t(e.target), n = t(t.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), 
                    i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && n.closest(".ui-menu").length && (this.element.trigger("focus", [ !0 ]), 
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
                },
                "mouseenter .ui-menu-item": function(e) {
                    if (!this.previousFilter) {
                        var i = t(e.target).closest(".ui-menu-item"), n = t(e.currentTarget);
                        i[0] === n[0] && (this._removeClass(n.siblings().children(".ui-state-active"), null, "ui-state-active"), 
                        this.focus(e, n));
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i);
                },
                blur: function(e) {
                    this._delay(function() {
                        !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0])) && this.collapseAll(e);
                    });
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(t) {
                    this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1;
                }
            });
        },
        _destroy: function() {
            var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), 
            e.children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-caret") && e.remove();
            });
        },
        _keydown: function(e) {
            var i, n, s, o, a = !0;
            switch (e.keyCode) {
              case t.ui.keyCode.PAGE_UP:
                this.previousPage(e);
                break;

              case t.ui.keyCode.PAGE_DOWN:
                this.nextPage(e);
                break;

              case t.ui.keyCode.HOME:
                this._move("first", "first", e);
                break;

              case t.ui.keyCode.END:
                this._move("last", "last", e);
                break;

              case t.ui.keyCode.UP:
                this.previous(e);
                break;

              case t.ui.keyCode.DOWN:
                this.next(e);
                break;

              case t.ui.keyCode.LEFT:
                this.collapse(e);
                break;

              case t.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                break;

              case t.ui.keyCode.ENTER:
              case t.ui.keyCode.SPACE:
                this._activate(e);
                break;

              case t.ui.keyCode.ESCAPE:
                this.collapse(e);
                break;

              default:
                a = !1, n = this.previousFilter || "", o = !1, s = e.keyCode >= 96 && e.keyCode <= 105 ? (e.keyCode - 96).toString() : String.fromCharCode(e.keyCode), 
                clearTimeout(this.filterTimer), s === n ? o = !0 : s = n + s, i = this._filterMenuItems(s), 
                (i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (s = String.fromCharCode(e.keyCode), 
                i = this._filterMenuItems(s)), i.length ? (this.focus(e, i), this.previousFilter = s, 
                this.filterTimer = this._delay(function() {
                    delete this.previousFilter;
                }, 1e3)) : delete this.previousFilter;
            }
            a && e.preventDefault();
        },
        _activate: function(t) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t));
        },
        refresh: function() {
            var e, i, n, s, o = this, a = this.options.icons.submenu, r = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), 
            i = r.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = t(this), i = e.prev(), n = t("<span>").data("ui-menu-submenu-caret", !0);
                o._addClass(n, "ui-menu-icon", "ui-icon " + a), i.attr("aria-haspopup", "true").prepend(n), 
                e.attr("aria-labelledby", i.attr("id"));
            }), this._addClass(i, "ui-menu", "ui-widget ui-widget-content ui-front"), (e = r.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
                var e = t(this);
                o._isDivider(e) && o._addClass(e, "ui-menu-divider", "ui-widget-content");
            }), s = (n = e.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), this._addClass(n, "ui-menu-item")._addClass(s, "ui-menu-item-wrapper"), e.filter(".ui-state-disabled").attr("aria-disabled", "true"), 
            this.active && !t.contains(this.element[0], this.active[0]) && this.blur();
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role];
        },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu);
            }
            this._super(t, e);
        },
        _setOptionDisabled: function(t) {
            this._super(t), this.element.attr("aria-disabled", String(t)), this._toggleClass(null, "ui-state-disabled", !!t);
        },
        focus: function(t, e) {
            var i, n, s;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), 
            n = this.active.children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), 
            this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), s = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), 
            this._addClass(s, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                this._close();
            }, this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), 
            this.activeMenu = e.parent(), this._trigger("focus", t, {
                item: e
            });
        },
        _scrollIntoView: function(e) {
            var i, n, s, o, a, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, 
            n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, 
            o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 
            s < 0 ? this.activeMenu.scrollTop(o + s) : s + r > a && this.activeMenu.scrollTop(o + s - a + r));
        },
        blur: function(t, e) {
            e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), 
            this._trigger("blur", t, {
                item: this.active
            }), this.active = null);
        },
        _startOpening: function(t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(t);
            }, this.delay));
        },
        _open: function(e) {
            var i = t.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), 
            e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i);
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                n.length || (n = this.element), this._close(n), this.blur(e), this._removeClass(n.find(".ui-state-active"), null, "ui-state-active"), 
                this.activeMenu = n;
            }, this.delay);
        },
        _close: function(t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
        },
        _closeOnDocumentClick: function(e) {
            return !t(e.target).closest(".ui-menu").length;
        },
        _isDivider: function(t) {
            return !/[^\-\u2014\u2013\s]/.test(t.text());
        },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e));
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()), this._delay(function() {
                this.focus(t, e);
            }));
        },
        next: function(t) {
            this._move("next", "first", t);
        },
        previous: function(t) {
            this._move("prev", "last", t);
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length;
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length;
        },
        _move: function(t, e, i) {
            var n;
            this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), 
            n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()), 
            this.focus(i, n);
        },
        nextPage: function(e) {
            var i, n, s;
            this.active ? this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, 
            s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return (i = t(this)).offset().top - n - s < 0;
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())) : this.next(e);
        },
        previousPage: function(e) {
            var i, n, s;
            this.active ? this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, 
            s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return (i = t(this)).offset().top - n + s > 0;
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first())) : this.next(e);
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight");
        },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i);
        },
        _filterMenuItems: function(e) {
            var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), n = new RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return n.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()));
            });
        }
    });
    t.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var e, i, n, s = this.element[0].nodeName.toLowerCase(), o = "textarea" === s, a = "input" === s;
            this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], 
            this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), 
            this._on(this.element, {
                keydown: function(s) {
                    if (this.element.prop("readOnly")) return e = !0, n = !0, void (i = !0);
                    e = !1, n = !1, i = !1;
                    var o = t.ui.keyCode;
                    switch (s.keyCode) {
                      case o.PAGE_UP:
                        e = !0, this._move("previousPage", s);
                        break;

                      case o.PAGE_DOWN:
                        e = !0, this._move("nextPage", s);
                        break;

                      case o.UP:
                        e = !0, this._keyEvent("previous", s);
                        break;

                      case o.DOWN:
                        e = !0, this._keyEvent("next", s);
                        break;

                      case o.ENTER:
                        this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s));
                        break;

                      case o.TAB:
                        this.menu.active && this.menu.select(s);
                        break;

                      case o.ESCAPE:
                        this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), 
                        this.close(s), s.preventDefault());
                        break;

                      default:
                        i = !0, this._searchTimeout(s);
                    }
                },
                keypress: function(n) {
                    if (e) return e = !1, void (this.isMultiLine && !this.menu.element.is(":visible") || n.preventDefault());
                    if (!i) {
                        var s = t.ui.keyCode;
                        switch (n.keyCode) {
                          case s.PAGE_UP:
                            this._move("previousPage", n);
                            break;

                          case s.PAGE_DOWN:
                            this._move("nextPage", n);
                            break;

                          case s.UP:
                            this._keyEvent("previous", n);
                            break;

                          case s.DOWN:
                            this._keyEvent("next", n);
                        }
                    }
                },
                input: function(t) {
                    if (n) return n = !1, void t.preventDefault();
                    this._searchTimeout(t);
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value();
                },
                blur: function(t) {
                    this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), 
                    this._change(t));
                }
            }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), 
            this._on(this.menu.element, {
                mousedown: function(e) {
                    e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus");
                    });
                },
                menufocus: function(e, i) {
                    var n, s;
                    if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(), 
                    void this.document.one("mousemove", function() {
                        t(e.target).trigger(e.originalEvent);
                    });
                    s = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
                        item: s
                    }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value), 
                    (n = i.item.attr("aria-label") || s.value) && t.trim(n).length && (this.liveRegion.children().hide(), 
                    t("<div>").text(n).appendTo(this.liveRegion));
                },
                menuselect: function(e, i) {
                    var n = i.item.data("ui-autocomplete-item"), s = this.previous;
                    this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), 
                    this.previous = s, this._delay(function() {
                        this.previous = s, this.selectedItem = n;
                    })), !1 !== this._trigger("select", e, {
                        item: n
                    }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n;
                }
            }), this.liveRegion = t("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), 
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete");
                }
            });
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), 
            this.liveRegion.remove();
        },
        _setOption: function(t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), 
            "disabled" === t && e && this.xhr && this.xhr.abort();
        },
        _isEventTargetInWidget: function(e) {
            var i = this.menu.element[0];
            return e.target === this.element[0] || e.target === i || t.contains(i, e.target);
        },
        _closeOnClickOutside: function(t) {
            this._isEventTargetInWidget(t) || this.close();
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), 
            e.length || (e = this.document[0].body), e;
        },
        _initSource: function() {
            var e, i, n = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, n) {
                n(t.ui.autocomplete.filter(e, i.term));
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, s) {
                n.xhr && n.xhr.abort(), n.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function(t) {
                        s(t);
                    },
                    error: function() {
                        s([]);
                    }
                });
            }) : this.source = this.options.source;
        },
        _searchTimeout: function(t) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                var e = this.term === this._value(), i = this.menu.element.is(":visible"), n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                e && (!e || i || n) || (this.selectedItem = null, this.search(null, t));
            }, this.options.delay);
        },
        search: function(t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0;
        },
        _search: function(t) {
            this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, 
            this.source({
                term: t
            }, this._response());
        },
        _response: function() {
            var e = ++this.requestIndex;
            return t.proxy(function(t) {
                e === this.requestIndex && this.__response(t), --this.pending || this._removeClass("ui-autocomplete-loading");
            }, this);
        },
        __response: function(t) {
            t && (t = this._normalize(t)), this._trigger("response", null, {
                content: t
            }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), 
            this._trigger("open")) : this._close();
        },
        close: function(t) {
            this.cancelSearch = !0, this._close(t);
        },
        _close: function(t) {
            this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), 
            this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t));
        },
        _change: function(t) {
            this.previous !== this._value() && this._trigger("change", t, {
                item: this.selectedItem
            });
        },
        _normalize: function(e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : t.extend({}, e, {
                    label: e.label || e.value,
                    value: e.value || e.label
                });
            });
        },
        _suggest: function(e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), 
            i.position(t.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            });
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()));
        },
        _renderMenu: function(e, i) {
            var n = this;
            t.each(i, function(t, i) {
                n._renderItemData(e, i);
            });
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e);
        },
        _renderItem: function(e, i) {
            return t("<li>").append(t("<div>").text(i.label)).appendTo(e);
        },
        _move: function(t, e) {
            if (this.menu.element.is(":visible")) return this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), 
            void this.menu.blur()) : void this.menu[t](e);
            this.search(null, e);
        },
        widget: function() {
            return this.menu.element;
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments);
        },
        _keyEvent: function(t, e) {
            this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t, e), e.preventDefault());
        },
        _isContentEditable: function(t) {
            if (!t.length) return !1;
            var e = t.prop("contentEditable");
            return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e;
        }
    }), t.extend(t.ui.autocomplete, {
        escapeRegex: function(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function(e, i) {
            var n = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function(t) {
                return n.test(t.label || t.value || t);
            });
        }
    }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
                }
            }
        },
        __response: function(e) {
            var i;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, 
            this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion));
        }
    });
    t.ui.autocomplete;
    var d = /ui-corner-([a-z]){2,6}/g;
    t.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function() {
            this._enhance();
        },
        _enhance: function() {
            this.element.attr("role", "toolbar"), this.refresh();
        },
        _destroy: function() {
            this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), 
            this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap();
        },
        _initWidgets: function() {
            var e = this, i = [];
            t.each(this.options.items, function(n, s) {
                var o, a = {};
                if (s) return "controlgroupLabel" === n ? ((o = e.element.find(s)).each(function() {
                    var e = t(this);
                    e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");
                }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void (i = i.concat(o.get()))) : void (t.fn[n] && (a = e["_" + n + "Options"] ? e["_" + n + "Options"]("middle") : {
                    classes: {}
                }, e.element.find(s).each(function() {
                    var s = t(this), o = s[n]("instance"), r = t.widget.extend({}, a);
                    if ("button" !== n || !s.parent(".ui-spinner").length) {
                        o || (o = s[n]()[n]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), 
                        s[n](r);
                        var l = s[n]("widget");
                        t.data(l[0], "ui-controlgroup-data", o || s[n]("instance")), i.push(l[0]);
                    }
                })));
            }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item");
        },
        _callChildMethod: function(e) {
            this.childWidgets.each(function() {
                var i = t(this).data("ui-controlgroup-data");
                i && i[e] && i[e]();
            });
        },
        _updateCornerClass: function(t, e) {
            var i = this._buildSimpleOptions(e, "label").classes.label;
            this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), 
            this._addClass(t, null, i);
        },
        _buildSimpleOptions: function(t, e) {
            var i = "vertical" === this.options.direction, n = {
                classes: {}
            };
            return n.classes[e] = {
                middle: "",
                first: "ui-corner-" + (i ? "top" : "left"),
                last: "ui-corner-" + (i ? "bottom" : "right"),
                only: "ui-corner-all"
            }[t], n;
        },
        _spinnerOptions: function(t) {
            var e = this._buildSimpleOptions(t, "ui-spinner");
            return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e;
        },
        _buttonOptions: function(t) {
            return this._buildSimpleOptions(t, "ui-button");
        },
        _checkboxradioOptions: function(t) {
            return this._buildSimpleOptions(t, "ui-checkboxradio-label");
        },
        _selectmenuOptions: function(t) {
            var e = "vertical" === this.options.direction;
            return {
                width: !!e && "auto",
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }
                }[t]
            };
        },
        _resolveClassesValues: function(e, i) {
            var n = {};
            return t.each(e, function(s) {
                var o = i.options.classes[s] || "";
                o = t.trim(o.replace(d, "")), n[s] = (o + " " + e[s]).replace(/\s+/g, " ");
            }), n;
        },
        _setOption: function(t, e) {
            "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), 
            this._super(t, e), "disabled" !== t ? this.refresh() : this._callChildMethod(e ? "disable" : "enable");
        },
        refresh: function() {
            var e, i = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), 
            this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), 
            e.length && (t.each([ "first", "last" ], function(t, n) {
                var s = e[n]().data("ui-controlgroup-data");
                if (s && i["_" + s.widgetName + "Options"]) {
                    var o = i["_" + s.widgetName + "Options"](1 === e.length ? "only" : n);
                    o.classes = i._resolveClassesValues(o.classes, s), s.element[s.widgetName](o);
                } else i._updateCornerClass(e[n](), n);
            }), this._callChildMethod("refresh"));
        }
    });
    t.widget("ui.checkboxradio", [ t.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {
                "ui-checkboxradio-label": "ui-corner-all",
                "ui-checkboxradio-icon": "ui-corner-all"
            }
        },
        _getCreateOptions: function() {
            var e, i, n = this, s = this._super() || {};
            return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), 
            this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", 
            this.label.contents().not(this.element[0]).each(function() {
                n.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML;
            }), this.originalLabel && (s.label = this.originalLabel), null != (e = this.element[0].disabled) && (s.disabled = e), 
            s;
        },
        _create: function() {
            var t = this.element[0].checked;
            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), 
            this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), 
            this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), 
            this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), 
            this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), 
            this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                change: "_toggleClasses",
                focus: function() {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus");
                },
                blur: function() {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus");
                }
            });
        },
        _readType: function() {
            var e = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type);
        },
        _enhance: function() {
            this._updateIcon(this.element[0].checked);
        },
        widget: function() {
            return this.label;
        },
        _getRadioGroup: function() {
            var e = this.element[0].name, i = "input[name='" + t.ui.escapeSelector(e) + "']";
            return e ? (this.form.length ? t(this.form[0].elements).filter(i) : t(i).filter(function() {
                return 0 === t(this).form().length;
            })).not(this.element) : t([]);
        },
        _toggleClasses: function() {
            var e = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), 
            this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), 
            "radio" === this.type && this._getRadioGroup().each(function() {
                var e = t(this).checkboxradio("instance");
                e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active");
            });
        },
        _destroy: function() {
            this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove());
        },
        _setOption: function(t, e) {
            if ("label" !== t || e) {
                if (this._super(t, e), "disabled" === t) return this._toggleClass(this.label, null, "ui-state-disabled", e), 
                void (this.element[0].disabled = e);
                this.refresh();
            }
        },
        _updateIcon: function(e) {
            var i = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), 
            this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", 
            this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", 
            this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), 
            this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), 
            this.iconSpace.remove(), delete this.icon);
        },
        _updateLabel: function() {
            var t = this.label.contents().not(this.element[0]);
            this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), 
            t.remove(), this.label.append(this.options.label);
        },
        refresh: function() {
            var t = this.element[0].checked, e = this.element[0].disabled;
            this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), 
            null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
                disabled: e
            });
        }
    } ]);
    t.ui.checkboxradio;
    t.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {
                "ui-button": "ui-corner-all"
            },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0
        },
        _getCreateOptions: function() {
            var t, e = this._super() || {};
            return this.isInput = this.element.is("input"), null != (t = this.element[0].disabled) && (e.disabled = t), 
            this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), 
            e;
        },
        _create: function() {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), 
            this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), 
            this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), 
            this._enhance(), this.element.is("a") && this._on({
                keyup: function(e) {
                    e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"));
                }
            });
        },
        _enhance: function() {
            this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), 
            this._updateTooltip());
        },
        _updateTooltip: function() {
            this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label);
        },
        _updateIcon: function(e, i) {
            var n = "iconPosition" !== e, s = n ? this.options.iconPosition : i, o = "top" === s || "bottom" === s;
            this.icon ? n && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), 
            this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), 
            n && this._addClass(this.icon, null, i), this._attachIcon(s), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), 
            this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), 
            this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), 
            this._attachIconSpace(s));
        },
        _destroy: function() {
            this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), 
            this.hasTitle || this.element.removeAttr("title");
        },
        _attachIconSpace: function(t) {
            this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace);
        },
        _attachIcon: function(t) {
            this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon);
        },
        _setOptions: function(t) {
            var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel, i = void 0 === t.icon ? this.options.icon : t.icon;
            e || i || (t.showLabel = !0), this._super(t);
        },
        _setOption: function(t, e) {
            "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), 
            this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), 
            "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), 
            "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), 
            this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), 
            this.element[0].disabled = e, e && this.element.blur());
        },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOptions({
                disabled: t
            }), this._updateTooltip();
        }
    }), !1 !== t.uiBackCompat && (t.widget("ui.button", t.ui.button, {
        options: {
            text: !0,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), 
            !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), 
            this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, 
            this.options.iconPosition = "end"), this._super();
        },
        _setOption: function(t, e) {
            "text" !== t ? ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), 
            "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), 
            this._super("iconPosition", "end"))), this._superApply(arguments)) : this._super("showLabel", e);
        }
    }), t.fn.button = function(e) {
        return function() {
            return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 
            0 === arguments.length ? this.checkboxradio({
                icon: !1
            }) : this.checkboxradio.apply(this, arguments));
        };
    }(t.fn.button), t.fn.buttonset = function() {
        return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [ arguments[0], "items.button", arguments[2] ]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [ arguments[0], "items.button" ]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
            button: arguments[0].items
        }), this.controlgroup.apply(this, arguments));
    });
    t.ui.button;
    t.extend(t.ui, {
        datepicker: {
            version: "1.12.1"
        }
    });
    var p;
    t.extend(n.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv;
        },
        setDefaults: function(t) {
            return a(this._defaults, t || {}), this;
        },
        _attachDatepicker: function(e, i) {
            var n, s, o;
            s = "div" === (n = e.nodeName.toLowerCase()) || "span" === n, e.id || (this.uuid += 1, 
            e.id = "dp" + this.uuid), (o = this._newInst(t(e), s)).settings = t.extend({}, i || {}), 
            "input" === n ? this._connectDatepicker(e, o) : s && this._inlineDatepicker(e, o);
        },
        _newInst: function(e, i) {
            return {
                id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            };
        },
        _connectDatepicker: function(e, i) {
            var n = t(e);
            i.append = t([]), i.trigger = t([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), 
            n.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), 
            this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e));
        },
        _attachments: function(e, i) {
            var n, s, o, a = this._get(i, "appendText"), r = this._get(i, "isRTL");
            i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), 
            e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), 
            "focus" !== (n = this._get(i, "showOn")) && "both" !== n || e.on("focus", this._showDatepicker), 
            "button" !== n && "both" !== n || (s = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), 
            i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                src: o,
                alt: s,
                title: s
            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                src: o,
                alt: s,
                title: s
            }) : s)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function() {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), 
                t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1;
            }));
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, n, s, o = new Date(2009, 11, 20), a = this._get(t, "dateFormat");
                a.match(/[DM]/) && (e = function(t) {
                    for (i = 0, n = 0, s = 0; s < t.length; s++) t[s].length > i && (i = t[s].length, 
                    n = s);
                    return n;
                }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), 
                o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), 
                t.input.attr("size", this._formatDate(t, o).length);
            }
        },
        _inlineDatepicker: function(e, i) {
            var n = t(e);
            n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), 
            t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), 
            this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"));
        },
        _dialogDatepicker: function(e, i, n, s, o) {
            var r, l, u, h, c, d = this._dialogInst;
            return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), 
            this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), 
            (d = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, t.data(this._dialogInput[0], "datepicker", d)), 
            a(d.settings, s || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, 
            this._dialogInput.val(i), this._pos = o ? o.length ? o : [ o.pageX, o.pageY ] : null, 
            this._pos || (l = document.documentElement.clientWidth, u = document.documentElement.clientHeight, 
            h = document.documentElement.scrollLeft || document.body.scrollLeft, c = document.documentElement.scrollTop || document.body.scrollTop, 
            this._pos = [ l / 2 - 100 + h, u / 2 - 150 + c ]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), 
            d.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), 
            this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), 
            t.data(this._dialogInput[0], "datepicker", d), this;
        },
        _destroyDatepicker: function(e) {
            var i, n = t(e), s = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), 
            "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== i && "span" !== i || n.removeClass(this.markerClassName).empty(), 
            p === s && (p = null));
        },
        _enableDatepicker: function(e) {
            var i, n, s = t(e), o = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !1, 
            o.trigger.filter("button").each(function() {
                this.disabled = !1;
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : "div" !== i && "span" !== i || ((n = s.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), 
            n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), 
            this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t;
            }));
        },
        _disableDatepicker: function(e) {
            var i, n, s = t(e), o = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !0, 
            o.trigger.filter("button").each(function() {
                this.disabled = !0;
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : "div" !== i && "span" !== i || ((n = s.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), 
            n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), 
            this._disabledInputs = t.map(this._disabledInputs, function(t) {
                return t === e ? null : t;
            }), this._disabledInputs[this._disabledInputs.length] = e);
        },
        _isDisabledDatepicker: function(t) {
            if (!t) return !1;
            for (var e = 0; e < this._disabledInputs.length; e++) if (this._disabledInputs[e] === t) return !0;
            return !1;
        },
        _getInst: function(e) {
            try {
                return t.data(e, "datepicker");
            } catch (t) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(e, i, n) {
            var s, o, r, l, u = this._getInst(e);
            if (2 === arguments.length && "string" == typeof i) return "defaults" === i ? t.extend({}, t.datepicker._defaults) : u ? "all" === i ? t.extend({}, u.settings) : this._get(u, i) : null;
            s = i || {}, "string" == typeof i && ((s = {})[i] = n), u && (this._curInst === u && this._hideDatepicker(), 
            o = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(u, "min"), l = this._getMinMaxDate(u, "max"), 
            a(u.settings, s), null !== r && void 0 !== s.dateFormat && void 0 === s.minDate && (u.settings.minDate = this._formatDate(u, r)), 
            null !== l && void 0 !== s.dateFormat && void 0 === s.maxDate && (u.settings.maxDate = this._formatDate(u, l)), 
            "disabled" in s && (s.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), 
            this._attachments(t(e), u), this._autoSize(u), this._setDate(u, o), this._updateAlternate(u), 
            this._updateDatepicker(u));
        },
        _changeDatepicker: function(t, e, i) {
            this._optionDatepicker(t, e, i);
        },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e);
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i));
        },
        _getDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null;
        },
        _doKeyDown: function(e) {
            var i, n, s, o = t.datepicker._getInst(e.target), a = !0, r = o.dpDiv.is(".ui-datepicker-rtl");
            if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
              case 9:
                t.datepicker._hideDatepicker(), a = !1;
                break;

              case 13:
                return (s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv))[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, s[0]), 
                i = t.datepicker._get(o, "onSelect"), i ? (n = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [ n, o ])) : t.datepicker._hideDatepicker(), 
                !1;

              case 27:
                t.datepicker._hideDatepicker();
                break;

              case 33:
                t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                break;

              case 34:
                t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                break;

              case 35:
                (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
                break;

              case 36:
                (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
                break;

              case 37:
                (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), 
                a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                break;

              case 38:
                (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
                break;

              case 39:
                (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), 
                a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                break;

              case 40:
                (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
                break;

              default:
                a = !1;
            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
            a && (e.preventDefault(), e.stopPropagation());
        },
        _doKeyPress: function(e) {
            var i, n, s = t.datepicker._getInst(e.target);
            if (t.datepicker._get(s, "constrainInput")) return i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat")), 
            n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || n < " " || !i || i.indexOf(n) > -1;
        },
        _doKeyUp: function(e) {
            var i = t.datepicker._getInst(e.target);
            if (i.input.val() !== i.lastVal) try {
                t.datepicker.parseDate(t.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, t.datepicker._getFormatConfig(i)) && (t.datepicker._setDateFromField(i), 
                t.datepicker._updateAlternate(i), t.datepicker._updateDatepicker(i));
            } catch (t) {}
            return !0;
        },
        _showDatepicker: function(e) {
            if ("input" !== (e = e.target || e).nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), 
            !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                var n, s, o, r, l, u, h;
                n = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== n && (t.datepicker._curInst.dpDiv.stop(!0, !0), 
                n && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), 
                !1 !== (o = (s = t.datepicker._get(n, "beforeShow")) ? s.apply(e, [ e, n ]) : {}) && (a(n.settings, o), 
                n.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(n), 
                t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), 
                t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function() {
                    return !(r |= "fixed" === t(this).css("position"));
                }), l = {
                    left: t.datepicker._pos[0],
                    top: t.datepicker._pos[1]
                }, t.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), t.datepicker._updateDatepicker(n), l = t.datepicker._checkOffset(n, l, r), n.dpDiv.css({
                    position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: l.left + "px",
                    top: l.top + "px"
                }), n.inline || (u = t.datepicker._get(n, "showAnim"), h = t.datepicker._get(n, "duration"), 
                n.dpDiv.css("z-index", i(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[u] ? n.dpDiv.show(u, t.datepicker._get(n, "showOptions"), h) : n.dpDiv[u || "show"](u ? h : null), 
                t.datepicker._shouldFocusInput(n) && n.input.trigger("focus"), t.datepicker._curInst = n));
            }
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4, p = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
            var i, n = this._getNumberOfMonths(e), s = n[1], a = e.dpDiv.find("." + this._dayOverClass + " a");
            a.length > 0 && o.apply(a.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 
            s > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", 17 * s + "em"), 
            e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), 
            e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), 
            e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), 
            e.yearshtml && (i = e.yearshtml, setTimeout(function() {
                i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), 
                i = e.yearshtml = null;
            }, 0));
        },
        _shouldFocusInput: function(t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus");
        },
        _checkOffset: function(e, i, n) {
            var s = e.dpDiv.outerWidth(), o = e.dpDiv.outerHeight(), a = e.input ? e.input.outerWidth() : 0, r = e.input ? e.input.outerHeight() : 0, l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()), u = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? s - a : 0, i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, 
            i.top -= n && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, 
            i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0), 
            i.top -= Math.min(i.top, i.top + o > u && u > o ? Math.abs(o + r) : 0), i;
        },
        _findPos: function(e) {
            for (var i, n = this._getInst(e), s = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e)); ) e = e[s ? "previousSibling" : "nextSibling"];
            return i = t(e).offset(), [ i.left, i.top ];
        },
        _hideDatepicker: function(e) {
            var i, n, s, o, a = this._curInst;
            !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), 
            n = this._get(a, "duration"), s = function() {
                t.datepicker._tidyDialog(a);
            }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), n, s) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s), 
            i || s(), this._datepickerShowing = !1, (o = this._get(a, "onClose")) && o.apply(a.input ? a.input[0] : null, [ a.input ? a.input.val() : "", a ]), 
            this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1);
        },
        _tidyDialog: function(t) {
            t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
        },
        _checkExternalClick: function(e) {
            if (t.datepicker._curInst) {
                var i = t(e.target), n = t.datepicker._getInst(i[0]);
                (i[0].id === t.datepicker._mainDivId || 0 !== i.parents("#" + t.datepicker._mainDivId).length || i.hasClass(t.datepicker.markerClassName) || i.closest("." + t.datepicker._triggerClass).length || !t.datepicker._datepickerShowing || t.datepicker._inDialog && t.blockUI) && (!i.hasClass(t.datepicker.markerClassName) || t.datepicker._curInst === n) || t.datepicker._hideDatepicker();
            }
        },
        _adjustDate: function(e, i, n) {
            var s = t(e), o = this._getInst(s[0]);
            this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(o, i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0), n), 
            this._updateDatepicker(o));
        },
        _gotoToday: function(e) {
            var i, n = t(e), s = this._getInst(n[0]);
            this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, 
            s.drawYear = s.selectedYear = s.currentYear) : (i = new Date(), s.selectedDay = i.getDate(), 
            s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), 
            this._notifyChange(s), this._adjustDate(n);
        },
        _selectMonthYear: function(e, i, n) {
            var s = t(e), o = this._getInst(s[0]);
            o["selected" + ("M" === n ? "Month" : "Year")] = o["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), 
            this._notifyChange(o), this._adjustDate(s);
        },
        _selectDay: function(e, i, n, s) {
            var o, a = t(e);
            t(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || ((o = this._getInst(a[0])).selectedDay = o.currentDay = t("a", s).html(), 
            o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = n, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)));
        },
        _clearDate: function(e) {
            var i = t(e);
            this._selectDate(i, "");
        },
        _selectDate: function(e, i) {
            var n, s = t(e), o = this._getInst(s[0]);
            i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), 
            (n = this._get(o, "onSelect")) ? n.apply(o.input ? o.input[0] : null, [ i, o ]) : o.input && o.input.trigger("change"), 
            o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], 
            "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null);
        },
        _updateAlternate: function(e) {
            var i, n, s, o = this._get(e, "altField");
            o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), 
            s = this.formatDate(i, n, this._getFormatConfig(e)), t(o).val(s));
        },
        noWeekends: function(t) {
            var e = t.getDay();
            return [ e > 0 && e < 6, "" ];
        },
        iso8601Week: function(t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), 
            i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1;
        },
        parseDate: function(e, i, n) {
            if (null == e || null == i) throw "Invalid arguments";
            if ("" === (i = "object" == typeof i ? i.toString() : i + "")) return null;
            var s, o, a, r, l = 0, u = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff, h = "string" != typeof u ? u : new Date().getFullYear() % 100 + parseInt(u, 10), c = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort, d = (n ? n.dayNames : null) || this._defaults.dayNames, p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort, f = (n ? n.monthNames : null) || this._defaults.monthNames, m = -1, g = -1, v = -1, y = -1, b = !1, _ = function(t) {
                var i = s + 1 < e.length && e.charAt(s + 1) === t;
                return i && s++, i;
            }, x = function(t) {
                var e = _(t), n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2, s = "y" === t ? n : 1, o = new RegExp("^\\d{" + s + "," + n + "}"), a = i.substring(l).match(o);
                if (!a) throw "Missing number at position " + l;
                return l += a[0].length, parseInt(a[0], 10);
            }, w = function(e, n, s) {
                var o = -1, a = t.map(_(e) ? s : n, function(t, e) {
                    return [ [ e, t ] ];
                }).sort(function(t, e) {
                    return -(t[1].length - e[1].length);
                });
                if (t.each(a, function(t, e) {
                    var n = e[1];
                    if (i.substr(l, n.length).toLowerCase() === n.toLowerCase()) return o = e[0], l += n.length, 
                    !1;
                }), -1 !== o) return o + 1;
                throw "Unknown name at position " + l;
            }, C = function() {
                if (i.charAt(l) !== e.charAt(s)) throw "Unexpected literal at position " + l;
                l++;
            };
            for (s = 0; s < e.length; s++) if (b) "'" !== e.charAt(s) || _("'") ? C() : b = !1; else switch (e.charAt(s)) {
              case "d":
                v = x("d");
                break;

              case "D":
                w("D", c, d);
                break;

              case "o":
                y = x("o");
                break;

              case "m":
                g = x("m");
                break;

              case "M":
                g = w("M", p, f);
                break;

              case "y":
                m = x("y");
                break;

              case "@":
                m = (r = new Date(x("@"))).getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                break;

              case "!":
                m = (r = new Date((x("!") - this._ticksTo1970) / 1e4)).getFullYear(), g = r.getMonth() + 1, 
                v = r.getDate();
                break;

              case "'":
                _("'") ? C() : b = !0;
                break;

              default:
                C();
            }
            if (l < i.length && (a = i.substr(l), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
            if (-1 === m ? m = new Date().getFullYear() : m < 100 && (m += new Date().getFullYear() - new Date().getFullYear() % 100 + (m <= h ? 0 : -100)), 
            y > -1) for (g = 1, v = y; ;) {
                if (o = this._getDaysInMonth(m, g - 1), v <= o) break;
                g++, v -= o;
            }
            if ((r = this._daylightSavingAdjust(new Date(m, g - 1, v))).getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v) throw "Invalid date";
            return r;
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
        formatDate: function(t, e, i) {
            if (!e) return "";
            var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, o = (i ? i.dayNames : null) || this._defaults.dayNames, a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, r = (i ? i.monthNames : null) || this._defaults.monthNames, l = function(e) {
                var i = n + 1 < t.length && t.charAt(n + 1) === e;
                return i && n++, i;
            }, u = function(t, e, i) {
                var n = "" + e;
                if (l(t)) for (;n.length < i; ) n = "0" + n;
                return n;
            }, h = function(t, e, i, n) {
                return l(t) ? n[e] : i[e];
            }, c = "", d = !1;
            if (e) for (n = 0; n < t.length; n++) if (d) "'" !== t.charAt(n) || l("'") ? c += t.charAt(n) : d = !1; else switch (t.charAt(n)) {
              case "d":
                c += u("d", e.getDate(), 2);
                break;

              case "D":
                c += h("D", e.getDay(), s, o);
                break;

              case "o":
                c += u("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                break;

              case "m":
                c += u("m", e.getMonth() + 1, 2);
                break;

              case "M":
                c += h("M", e.getMonth(), a, r);
                break;

              case "y":
                c += l("y") ? e.getFullYear() : (e.getFullYear() % 100 < 10 ? "0" : "") + e.getFullYear() % 100;
                break;

              case "@":
                c += e.getTime();
                break;

              case "!":
                c += 1e4 * e.getTime() + this._ticksTo1970;
                break;

              case "'":
                l("'") ? c += "'" : d = !0;
                break;

              default:
                c += t.charAt(n);
            }
            return c;
        },
        _possibleChars: function(t) {
            var e, i = "", n = !1, s = function(i) {
                var n = e + 1 < t.length && t.charAt(e + 1) === i;
                return n && e++, n;
            };
            for (e = 0; e < t.length; e++) if (n) "'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = !1; else switch (t.charAt(e)) {
              case "d":
              case "m":
              case "y":
              case "@":
                i += "0123456789";
                break;

              case "D":
              case "M":
                return null;

              case "'":
                s("'") ? i += "'" : n = !0;
                break;

              default:
                i += t.charAt(e);
            }
            return i;
        },
        _get: function(t, e) {
            return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
        },
        _setDateFromField: function(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"), n = t.lastVal = t.input ? t.input.val() : null, s = this._getDefaultDate(t), o = s, a = this._getFormatConfig(t);
                try {
                    o = this.parseDate(i, n, a) || s;
                } catch (t) {
                    n = e ? "" : n;
                }
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), 
                t.currentDay = n ? o.getDate() : 0, t.currentMonth = n ? o.getMonth() : 0, t.currentYear = n ? o.getFullYear() : 0, 
                this._adjustInstDate(t);
            }
        },
        _getDefaultDate: function(t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date()));
        },
        _determineDate: function(e, i, n) {
            var s = null == i || "" === i ? n : "string" == typeof i ? function(i) {
                try {
                    return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e));
                } catch (t) {}
                for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date(), s = n.getFullYear(), o = n.getMonth(), a = n.getDate(), r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = r.exec(i); l; ) {
                    switch (l[2] || "d") {
                      case "d":
                      case "D":
                        a += parseInt(l[1], 10);
                        break;

                      case "w":
                      case "W":
                        a += 7 * parseInt(l[1], 10);
                        break;

                      case "m":
                      case "M":
                        o += parseInt(l[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(s, o));
                        break;

                      case "y":
                      case "Y":
                        s += parseInt(l[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(s, o));
                    }
                    l = r.exec(i);
                }
                return new Date(s, o, a);
            }(i) : "number" == typeof i ? isNaN(i) ? n : function(t) {
                var e = new Date();
                return e.setDate(e.getDate() + t), e;
            }(i) : new Date(i.getTime());
            return (s = s && "Invalid Date" === s.toString() ? n : s) && (s.setHours(0), s.setMinutes(0), 
            s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s);
        },
        _daylightSavingAdjust: function(t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null;
        },
        _setDate: function(t, e, i) {
            var n = !e, s = t.selectedMonth, o = t.selectedYear, a = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
            t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), 
            t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), 
            this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t));
        },
        _getDate: function(t) {
            return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
        },
        _attachHandlers: function(e) {
            var i = this._get(e, "stepMonths"), n = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = {
                    prev: function() {
                        t.datepicker._adjustDate(n, -i, "M");
                    },
                    next: function() {
                        t.datepicker._adjustDate(n, +i, "M");
                    },
                    hide: function() {
                        t.datepicker._hideDatepicker();
                    },
                    today: function() {
                        t.datepicker._gotoToday(n);
                    },
                    selectDay: function() {
                        return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), 
                        !1;
                    },
                    selectMonth: function() {
                        return t.datepicker._selectMonthYear(n, this, "M"), !1;
                    },
                    selectYear: function() {
                        return t.datepicker._selectMonthYear(n, this, "Y"), !1;
                    }
                };
                t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")]);
            });
        },
        _generateHTML: function(t) {
            var e, i, n, s, o, a, r, l, u, h, c, d, p, f, m, g, v, y, b, _, x, w, C, k, D, T, S, E, P, A, I, F, M, N, L, H, O, z, R, W = new Date(), j = this._daylightSavingAdjust(new Date(W.getFullYear(), W.getMonth(), W.getDate())), B = this._get(t, "isRTL"), $ = this._get(t, "showButtonPanel"), q = this._get(t, "hideIfNoPrevNext"), Y = this._get(t, "navigationAsDateFormat"), V = this._getNumberOfMonths(t), U = this._get(t, "showCurrentAtPos"), X = this._get(t, "stepMonths"), K = 1 !== V[0] || 1 !== V[1], G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)), Q = this._getMinMaxDate(t, "min"), Z = this._getMinMaxDate(t, "max"), J = t.drawMonth - U, tt = t.drawYear;
            if (J < 0 && (J += 12, tt--), Z) for (e = this._daylightSavingAdjust(new Date(Z.getFullYear(), Z.getMonth() - V[0] * V[1] + 1, Z.getDate())), 
            e = Q && e < Q ? Q : e; this._daylightSavingAdjust(new Date(tt, J, 1)) > e; ) --J < 0 && (J = 11, 
            tt--);
            for (t.drawMonth = J, t.drawYear = tt, i = this._get(t, "prevText"), i = Y ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, J - X, 1)), this._getFormatConfig(t)) : i, 
            n = this._canAdjustMonth(t, -1, tt, J) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>", 
            s = this._get(t, "nextText"), s = Y ? this.formatDate(s, this._daylightSavingAdjust(new Date(tt, J + X, 1)), this._getFormatConfig(t)) : s, 
            o = this._canAdjustMonth(t, 1, tt, J) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + s + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + s + "</span></a>", 
            a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : j, 
            a = Y ? this.formatDate(a, r, this._getFormatConfig(t)) : a, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", 
            u = $ ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (B ? l : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (B ? "" : l) + "</div>" : "", 
            h = parseInt(this._get(t, "firstDay"), 10), h = isNaN(h) ? 0 : h, c = this._get(t, "showWeek"), 
            d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), 
            m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), 
            y = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), _ = "", w = 0; w < V[0]; w++) {
                for (C = "", this.maxRows = 4, k = 0; k < V[1]; k++) {
                    if (D = this._daylightSavingAdjust(new Date(tt, J, t.selectedDay)), T = " ui-corner-all", 
                    S = "", K) {
                        if (S += "<div class='ui-datepicker-group", V[1] > 1) switch (k) {
                          case 0:
                            S += " ui-datepicker-group-first", T = " ui-corner-" + (B ? "right" : "left");
                            break;

                          case V[1] - 1:
                            S += " ui-datepicker-group-last", T = " ui-corner-" + (B ? "left" : "right");
                            break;

                          default:
                            S += " ui-datepicker-group-middle", T = "";
                        }
                        S += "'>";
                    }
                    for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === w ? B ? o : n : "") + (/all|right/.test(T) && 0 === w ? B ? n : o : "") + this._generateMonthYearHeader(t, J, tt, Q, Z, w > 0 || k > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", 
                    E = c ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", 
                    x = 0; x < 7; x++) P = (x + h) % 7, E += "<th scope='col'" + ((x + h + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[P] + "'>" + p[P] + "</span></th>";
                    for (S += E + "</tr></thead><tbody>", A = this._getDaysInMonth(tt, J), tt === t.selectedYear && J === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, A)), 
                    I = (this._getFirstDayOfMonth(tt, J) - h + 7) % 7, F = Math.ceil((I + A) / 7), M = K && this.maxRows > F ? this.maxRows : F, 
                    this.maxRows = M, N = this._daylightSavingAdjust(new Date(tt, J, 1 - I)), L = 0; L < M; L++) {
                        for (S += "<tr>", H = c ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(N) + "</td>" : "", 
                        x = 0; x < 7; x++) O = g ? g.apply(t.input ? t.input[0] : null, [ N ]) : [ !0, "" ], 
                        R = (z = N.getMonth() !== J) && !y || !O[0] || Q && N < Q || Z && N > Z, H += "<td class='" + ((x + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (z ? " ui-datepicker-other-month" : "") + (N.getTime() === D.getTime() && J === t.selectedMonth && t._keyEvent || b.getTime() === N.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (R ? " " + this._unselectableClass + " ui-state-disabled" : "") + (z && !v ? "" : " " + O[1] + (N.getTime() === G.getTime() ? " " + this._currentClass : "") + (N.getTime() === j.getTime() ? " ui-datepicker-today" : "")) + "'" + (z && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (R ? "" : " data-handler='selectDay' data-event='click' data-month='" + N.getMonth() + "' data-year='" + N.getFullYear() + "'") + ">" + (z && !v ? "&#xa0;" : R ? "<span class='ui-state-default'>" + N.getDate() + "</span>" : "<a class='ui-state-default" + (N.getTime() === j.getTime() ? " ui-state-highlight" : "") + (N.getTime() === G.getTime() ? " ui-state-active" : "") + (z ? " ui-priority-secondary" : "") + "' href='#'>" + N.getDate() + "</a>") + "</td>", 
                        N.setDate(N.getDate() + 1), N = this._daylightSavingAdjust(N);
                        S += H + "</tr>";
                    }
                    ++J > 11 && (J = 0, tt++), C += S += "</tbody></table>" + (K ? "</div>" + (V[0] > 0 && k === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                }
                _ += C;
            }
            return _ += u, t._keyEvent = !1, _;
        },
        _generateMonthYearHeader: function(t, e, i, n, s, o, a, r) {
            var l, u, h, c, d, p, f, m, g = this._get(t, "changeMonth"), v = this._get(t, "changeYear"), y = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", _ = "";
            if (o || !g) _ += "<span class='ui-datepicker-month'>" + a[e] + "</span>"; else {
                for (l = n && n.getFullYear() === i, u = s && s.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", 
                h = 0; h < 12; h++) (!l || h >= n.getMonth()) && (!u || h <= s.getMonth()) && (_ += "<option value='" + h + "'" + (h === e ? " selected='selected'" : "") + ">" + r[h] + "</option>");
                _ += "</select>";
            }
            if (y || (b += _ + (!o && g && v ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", 
            o || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>"; else {
                for (c = this._get(t, "yearRange").split(":"), d = new Date().getFullYear(), f = (p = function(t) {
                    var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                    return isNaN(e) ? d : e;
                })(c[0]), m = Math.max(f, p(c[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, 
                m = s ? Math.min(m, s.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= m; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null;
            }
            return b += this._get(t, "yearSuffix"), y && (b += (!o && g && v ? "" : "&#xa0;") + _), 
            b += "</div>";
        },
        _adjustInstDate: function(t, e, i) {
            var n = t.selectedYear + ("Y" === i ? e : 0), s = t.selectedMonth + ("M" === i ? e : 0), o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0), a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
            t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), 
            "M" !== i && "Y" !== i || this._notifyChange(t);
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min"), n = this._getMinMaxDate(t, "max"), s = i && e < i ? i : e;
            return n && s > n ? n : s;
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [ t.selectedYear, t.selectedMonth + 1, t ]);
        },
        _getNumberOfMonths: function(t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [ 1, 1 ] : "number" == typeof e ? [ 1, e ] : e;
        },
        _getMinMaxDate: function(t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null);
        },
        _getDaysInMonth: function(t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
        },
        _getFirstDayOfMonth: function(t, e) {
            return new Date(t, e, 1).getDay();
        },
        _canAdjustMonth: function(t, e, i, n) {
            var s = this._getNumberOfMonths(t), o = this._daylightSavingAdjust(new Date(i, n + (e < 0 ? e : s[0] * s[1]), 1));
            return e < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), 
            this._isInRange(t, o);
        },
        _isInRange: function(t, e) {
            var i, n, s = this._getMinMaxDate(t, "min"), o = this._getMinMaxDate(t, "max"), a = null, r = null, l = this._get(t, "yearRange");
            return l && (i = l.split(":"), n = new Date().getFullYear(), a = parseInt(i[0], 10), 
            r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += n), i[1].match(/[+\-].*/) && (r += n)), 
            (!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || e.getFullYear() <= r);
        },
        _getFormatConfig: function(t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : new Date().getFullYear() % 100 + parseInt(e, 10), 
            {
                shortYearCutoff: e,
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            };
        },
        _formatDate: function(t, e, i, n) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t));
        }
    }), t.fn.datepicker = function(e) {
        if (!this.length) return this;
        t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), 
        t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [ this[0] ].concat(i)) : this.each(function() {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [ this ].concat(i)) : t.datepicker._attachDatepicker(this, e);
        }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [ this[0] ].concat(i));
    }, t.datepicker = new n(), t.datepicker.initialized = !1, t.datepicker.uuid = new Date().getTime(), 
    t.datepicker.version = "1.12.1";
    t.datepicker;
    t.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {
                "ui-dialog": "ui-corner-all",
                "ui-dialog-titlebar": "ui-corner-all"
            },
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(e) {
                    var i = t(this).css(e).offset().top;
                    i < 0 && t(this).css("top", e.top - i);
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), 
            this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), 
            this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), 
            this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), 
            this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, 
            this._trackFocus();
        },
        _init: function() {
            this.options.autoOpen && this.open();
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0);
        },
        _destroy: function() {
            var t, e = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), 
            this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), 
            (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element);
        },
        widget: function() {
            return this.uiDialog;
        },
        disable: t.noop,
        enable: t.noop,
        close: function(e) {
            var i = this;
            this._isOpen && !1 !== this._trigger("beforeClose", e) && (this._isOpen = !1, this._focusedElement = null, 
            this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), 
            this._hide(this.uiDialog, this.options.hide, function() {
                i._trigger("close", e);
            }));
        },
        isOpen: function() {
            return this._isOpen;
        },
        moveToTop: function() {
            this._moveToTop();
        },
        _moveToTop: function(e, i) {
            var n = !1, s = this.uiDialog.siblings(".ui-front:visible").map(function() {
                return +t(this).css("z-index");
            }).get(), o = Math.max.apply(null, s);
            return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), 
            n = !0), n && !i && this._trigger("focus", e), n;
        },
        open: function() {
            var e = this;
            this._isOpen ? this._moveToTop() && this._focusTabbable() : (this._isOpen = !0, 
            this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), 
            this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), 
            this._show(this.uiDialog, this.options.show, function() {
                e._focusTabbable(), e._trigger("focus");
            }), this._makeFocusTarget(), this._trigger("open"));
        },
        _focusTabbable: function() {
            var t = this._focusedElement;
            t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), 
            t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), 
            t.length || (t = this.uiDialog), t.eq(0).trigger("focus");
        },
        _keepFocus: function(e) {
            function i() {
                var e = t.ui.safeActiveElement(this.document[0]);
                this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable();
            }
            e.preventDefault(), i.call(this), this._delay(i);
        },
        _createWrapper: function() {
            this.uiDialog = t("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), 
            this._on(this.uiDialog, {
                keydown: function(e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), 
                    void this.close(e);
                    if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable"), n = i.filter(":first"), s = i.filter(":last");
                        e.target !== s[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() {
                            s.trigger("focus");
                        }), e.preventDefault()) : (this._delay(function() {
                            n.trigger("focus");
                        }), e.preventDefault());
                    }
                },
                mousedown: function(t) {
                    this._moveToTop(t) && this._focusTabbable();
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            });
        },
        _createTitlebar: function() {
            var e;
            this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), 
            this._on(this.uiDialogTitlebar, {
                mousedown: function(e) {
                    t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus");
                }
            }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                label: t("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), 
            this._on(this.uiDialogTitlebarClose, {
                click: function(t) {
                    t.preventDefault(), this.close(t);
                }
            }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), 
            this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
                "aria-labelledby": e.attr("id")
            });
        },
        _title: function(t) {
            this.options.title ? t.text(this.options.title) : t.html("&#160;");
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), 
            this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), 
            this._createButtons();
        },
        _createButtons: function() {
            var e = this, i = this.options.buttons;
            this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? this._removeClass(this.uiDialog, "ui-dialog-buttons") : (t.each(i, function(i, n) {
                var s, o;
                n = t.isFunction(n) ? {
                    click: n,
                    text: i
                } : n, n = t.extend({
                    type: "button"
                }, n), s = n.click, o = {
                    icon: n.icon,
                    iconPosition: n.iconPosition,
                    showLabel: n.showLabel,
                    icons: n.icons,
                    text: n.text
                }, delete n.click, delete n.icon, delete n.iconPosition, delete n.showLabel, delete n.icons, 
                "boolean" == typeof n.text && delete n.text, t("<button></button>", n).button(o).appendTo(e.uiButtonSet).on("click", function() {
                    s.apply(e.element[0], arguments);
                });
            }), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog));
        },
        _makeDraggable: function() {
            function e(t) {
                return {
                    position: t.position,
                    offset: t.offset
                };
            }
            var i = this, n = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(n, s) {
                    i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, e(s));
                },
                drag: function(t, n) {
                    i._trigger("drag", t, e(n));
                },
                stop: function(s, o) {
                    var a = o.offset.left - i.document.scrollLeft(), r = o.offset.top - i.document.scrollTop();
                    n.position = {
                        my: "left top",
                        at: "left" + (a >= 0 ? "+" : "") + a + " top" + (r >= 0 ? "+" : "") + r,
                        of: i.window
                    }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, e(o));
                }
            });
        },
        _makeResizable: function() {
            function e(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                };
            }
            var i = this, n = this.options, s = n.resizable, o = this.uiDialog.css("position"), a = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: n.maxWidth,
                maxHeight: n.maxHeight,
                minWidth: n.minWidth,
                minHeight: this._minHeight(),
                handles: a,
                start: function(n, s) {
                    i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, e(s));
                },
                resize: function(t, n) {
                    i._trigger("resize", t, e(n));
                },
                stop: function(s, o) {
                    var a = i.uiDialog.offset(), r = a.left - i.document.scrollLeft(), l = a.top - i.document.scrollTop();
                    n.height = i.uiDialog.height(), n.width = i.uiDialog.width(), n.position = {
                        my: "left top",
                        at: "left" + (r >= 0 ? "+" : "") + r + " top" + (l >= 0 ? "+" : "") + l,
                        of: i.window
                    }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, e(o));
                }
            }).css("position", o);
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(e) {
                    this._makeFocusTarget(), this._focusedElement = t(e.target);
                }
            });
        },
        _makeFocusTarget: function() {
            this._untrackInstance(), this._trackingInstances().unshift(this);
        },
        _untrackInstance: function() {
            var e = this._trackingInstances(), i = t.inArray(this, e);
            -1 !== i && e.splice(i, 1);
        },
        _trackingInstances: function() {
            var t = this.document.data("ui-dialog-instances");
            return t || (t = [], this.document.data("ui-dialog-instances", t)), t;
        },
        _minHeight: function() {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height);
        },
        _position: function() {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide();
        },
        _setOptions: function(e) {
            var i = this, n = !1, s = {};
            t.each(e, function(t, e) {
                i._setOption(t, e), t in i.sizeRelatedOptions && (n = !0), t in i.resizableRelatedOptions && (s[t] = e);
            }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s);
        },
        _setOption: function(e, i) {
            var n, s, o = this.uiDialog;
            "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), 
            "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
                label: t("<a>").text("" + this.options.closeText).html()
            }), "draggable" === e && ((n = o.is(":data(ui-draggable)")) && !i && o.draggable("destroy"), 
            !n && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && ((s = o.is(":data(ui-resizable)")) && !i && o.resizable("destroy"), 
            s && "string" == typeof i && o.resizable("option", "handles", i), s || !1 === i || this._makeResizable()), 
            "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
        },
        _size: function() {
            var t, e, i, n = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({
                height: "auto",
                width: n.width
            }).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", 
            "auto" === n.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var e = t(this);
                return t("<div>").css({
                    position: "absolute",
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }).appendTo(e.parent()).offset(e.offset())[0];
            });
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
        },
        _allowInteraction: function(e) {
            return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length;
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var e = !0;
                this._delay(function() {
                    e = !1;
                }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(t) {
                        e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable());
                    }
                }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), 
                this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1);
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var t = this.document.data("ui-dialog-overlays") - 1;
                t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), 
                this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null;
            }
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.dialog", t.ui.dialog, {
        options: {
            dialogClass: ""
        },
        _createWrapper: function() {
            this._super(), this.uiDialog.addClass(this.options.dialogClass);
        },
        _setOption: function(t, e) {
            "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), 
            this._superApply(arguments);
        }
    });
    t.ui.dialog, t.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            },
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), 
            this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue();
        },
        _destroy: function() {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove();
        },
        value: function(t) {
            if (void 0 === t) return this.options.value;
            this.options.value = this._constrainedValue(t), this._refreshValue();
        },
        _constrainedValue: function(t) {
            return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, 
            "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t));
        },
        _setOptions: function(t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), 
            this._refreshValue();
        },
        _setOption: function(t, e) {
            "max" === t && (e = Math.max(this.min, e)), this._super(t, e);
        },
        _setOptionDisabled: function(t) {
            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t);
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
        },
        _refreshValue: function() {
            var e = this.options.value, i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), 
            this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), 
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), 
            this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": e
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, 
            this._trigger("change")), e === this.options.max && this._trigger("complete");
        }
    }), t.widget("ui.selectmenu", [ t.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {
                "ui-selectmenu-button-open": "ui-corner-top",
                "ui-selectmenu-button-closed": "ui-corner-all"
            },
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var e = this.element.uniqueId().attr("id");
            this.ids = {
                element: e,
                button: e + "-button",
                menu: e + "-menu"
            }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, 
            this.menuItems = t();
        },
        _drawButton: function() {
            var e, i = this, n = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                click: function(t) {
                    this.button.focus(), t.preventDefault();
                }
            }), this.element.hide(), this.button = t("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), 
            e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), 
            this.buttonItem = this._renderButtonItem(n).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), 
            this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                i._rendered || i._refreshMenu();
            });
        },
        _drawMenu: function() {
            var e = this;
            this.menu = t("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), 
            this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                classes: {
                    "ui-menu": "ui-corner-bottom"
                },
                role: "listbox",
                select: function(t, i) {
                    t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t);
                },
                focus: function(t, i) {
                    var n = i.item.data("ui-selectmenu-item");
                    null != e.focusIndex && n.index !== e.focusIndex && (e._trigger("focus", t, {
                        item: n
                    }), e.isOpen || e._select(n, t)), e.focusIndex = n.index, e.button.attr("aria-activedescendant", e.menuItems.eq(n.index).attr("id"));
                }
            }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                return !1;
            }, this.menuInstance._isDivider = function() {
                return !1;
            };
        },
        refresh: function() {
            this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), 
            null === this.options.width && this._resizeButton();
        },
        _refreshMenu: function() {
            var t, e = this.element.find("option");
            this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), 
            this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), 
            this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), 
            this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")));
        },
        open: function(t) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), 
            this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, 
            this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), 
            this._trigger("open", t)));
        },
        _position: function() {
            this.menuWrap.position(t.extend({
                of: this.button
            }, this.options.position));
        },
        close: function(t) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), 
            this._trigger("close", t));
        },
        widget: function() {
            return this.button;
        },
        menuWidget: function() {
            return this.menu;
        },
        _renderButtonItem: function(e) {
            var i = t("<span>");
            return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i;
        },
        _renderMenu: function(e, i) {
            var n = this, s = "";
            t.each(i, function(i, o) {
                var a;
                o.optgroup !== s && (a = t("<li>", {
                    text: o.optgroup
                }), n._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), 
                a.appendTo(e), s = o.optgroup), n._renderItemData(e, o);
            });
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-selectmenu-item", e);
        },
        _renderItem: function(e, i) {
            var n = t("<li>"), s = t("<div>", {
                title: i.element.attr("title")
            });
            return i.disabled && this._addClass(n, null, "ui-state-disabled"), this._setText(s, i.label), 
            n.append(s).appendTo(e);
        },
        _setText: function(t, e) {
            e ? t.text(e) : t.html("&#160;");
        },
        _move: function(t, e) {
            var i, n, s = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), 
            s += ":not(.ui-state-disabled)"), (n = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0)).length && this.menuInstance.focus(e, n);
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
        },
        _toggle: function(t) {
            this[this.isOpen ? "close" : "open"](t);
        },
        _setSelection: function() {
            var t;
            this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), 
            t.addRange(this.range)) : this.range.select(), this.button.focus());
        },
        _documentClick: {
            mousedown: function(e) {
                this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e));
            }
        },
        _buttonEvents: {
            mousedown: function() {
                var t;
                window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange();
            },
            click: function(t) {
                this._setSelection(), this._toggle(t);
            },
            keydown: function(e) {
                var i = !0;
                switch (e.keyCode) {
                  case t.ui.keyCode.TAB:
                  case t.ui.keyCode.ESCAPE:
                    this.close(e), i = !1;
                    break;

                  case t.ui.keyCode.ENTER:
                    this.isOpen && this._selectFocusedItem(e);
                    break;

                  case t.ui.keyCode.UP:
                    e.altKey ? this._toggle(e) : this._move("prev", e);
                    break;

                  case t.ui.keyCode.DOWN:
                    e.altKey ? this._toggle(e) : this._move("next", e);
                    break;

                  case t.ui.keyCode.SPACE:
                    this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                    break;

                  case t.ui.keyCode.LEFT:
                    this._move("prev", e);
                    break;

                  case t.ui.keyCode.RIGHT:
                    this._move("next", e);
                    break;

                  case t.ui.keyCode.HOME:
                  case t.ui.keyCode.PAGE_UP:
                    this._move("first", e);
                    break;

                  case t.ui.keyCode.END:
                  case t.ui.keyCode.PAGE_DOWN:
                    this._move("last", e);
                    break;

                  default:
                    this.menu.trigger(e), i = !1;
                }
                i && e.preventDefault();
            }
        },
        _selectFocusedItem: function(t) {
            var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t);
        },
        _select: function(t, e) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), 
            this._setAria(t), this._trigger("select", e, {
                item: t
            }), t.index !== i && this._trigger("change", e, {
                item: t
            }), this.close(e);
        },
        _setAria: function(t) {
            var e = this.menuItems.eq(t.index).attr("id");
            this.button.attr({
                "aria-labelledby": e,
                "aria-activedescendant": e
            }), this.menu.attr("aria-activedescendant", e);
        },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button);
            }
            this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), 
            "width" === t && this._resizeButton();
        },
        _setOptionDisabled: function(t) {
            this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), 
            this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), 
            t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0);
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), 
            e.length || (e = this.document[0].body), e;
        },
        _toggleAttr: function() {
            this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), 
            this.menu.attr("aria-hidden", !this.isOpen);
        },
        _resizeButton: function() {
            var t = this.options.width;
            !1 !== t ? (null === t && (t = this.element.show().outerWidth(), this.element.hide()), 
            this.button.outerWidth(t)) : this.button.css("width", "");
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
        },
        _getCreateOptions: function() {
            var t = this._super();
            return t.disabled = this.element.prop("disabled"), t;
        },
        _parseOptions: function(e) {
            var i = this, n = [];
            e.each(function(e, s) {
                n.push(i._parseOption(t(s), e));
            }), this.items = n;
        },
        _parseOption: function(t, e) {
            var i = t.parent("optgroup");
            return {
                element: t,
                index: e,
                value: t.val(),
                label: t.text(),
                optgroup: i.attr("label") || "",
                disabled: i.prop("disabled") || t.prop("disabled")
            };
        },
        _destroy: function() {
            this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), 
            this.element.removeUniqueId(), this.labels.attr("for", this.ids.element);
        }
    } ]), t.widget("ui.slider", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, 
            this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), 
            this._refresh(), this._animateOff = !1;
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
        },
        _createHandles: function() {
            var e, i, n = this.options, s = this.element.find(".ui-slider-handle"), o = [];
            for (i = n.values && n.values.length || 1, s.length > i && (s.slice(i).remove(), 
            s = s.slice(0, i)), e = s.length; e < i; e++) o.push("<span tabindex='0'></span>");
            this.handles = s.add(t(o.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), 
            this.handle = this.handles.eq(0), this.handles.each(function(e) {
                t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0);
            });
        },
        _createRange: function() {
            var e = this.options;
            e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [ e.values[0], e.values[0] ] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [ this._valueMin(), this._valueMin() ]), 
            this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), 
            this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), 
            "min" !== e.range && "max" !== e.range || this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), 
            this.range = null);
        },
        _setupEvents: function() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), 
            this._focusable(this.handles);
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
        },
        _mouseCapture: function(e) {
            var i, n, s, o, a, r, l, u = this, h = this.options;
            return !h.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, 
            this.handles.each(function(e) {
                var i = Math.abs(n - u.values(e));
                (s > i || s === i && (e === u._lastChangedValue || u.values(e) === h.min)) && (s = i, 
                o = t(this), a = e);
            }), !1 !== this._start(e, a) && (this._mouseSliding = !0, this._handleIndex = a, 
            this._addClass(o, null, "ui-state-active"), o.trigger("focus"), r = o.offset(), 
            l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - r.left - o.width() / 2,
                top: e.pageY - r.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, n), this._animateOff = !0, 
            !0));
        },
        _mouseStart: function() {
            return !0;
        },
        _mouseDrag: function(t) {
            var e = {
                x: t.pageX,
                y: t.pageY
            }, i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1;
        },
        _mouseStop: function(t) {
            return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, 
            this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, 
            this._clickOffset = null, this._animateOff = !1, !1;
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function(t) {
            var e, i, n, s, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, 
            i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), 
            (n = i / e) > 1 && (n = 1), n < 0 && (n = 0), "vertical" === this.orientation && (n = 1 - n), 
            s = this._valueMax() - this._valueMin(), o = this._valueMin() + n * s, this._trimAlignValue(o);
        },
        _uiHash: function(t, e, i) {
            var n = {
                handle: this.handles[t],
                handleIndex: t,
                value: void 0 !== e ? e : this.value()
            };
            return this._hasMultipleValues() && (n.value = void 0 !== e ? e : this.values(t), 
            n.values = i || this.values()), n;
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length;
        },
        _start: function(t, e) {
            return this._trigger("start", t, this._uiHash(e));
        },
        _slide: function(t, e, i) {
            var n, s = this.value(), o = this.values();
            this._hasMultipleValues() && (n = this.values(e ? 0 : 1), s = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), 
            o[e] = i), i !== s && !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i));
        },
        _stop: function(t, e) {
            this._trigger("stop", t, this._uiHash(e));
        },
        _change: function(t, e) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)));
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), 
            void this._change(null, 0)) : this._value();
        },
        values: function(e, i) {
            var n, s, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), 
            this._refreshValue(), void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
            for (n = this.options.values, s = arguments[0], o = 0; o < n.length; o += 1) n[o] = this._trimAlignValue(s[o]), 
            this._change(null, o);
            this._refreshValue();
        },
        _setOption: function(e, i) {
            var n, s = 0;
            switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), 
            this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), 
            this.options.values = null)), t.isArray(this.options.values) && (s = this.options.values.length), 
            this._super(e, i), e) {
              case "orientation":
                this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), 
                this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                break;

              case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;

              case "values":
                for (this._animateOff = !0, this._refreshValue(), n = s - 1; n >= 0; n--) this._change(null, n);
                this._animateOff = !1;
                break;

              case "step":
              case "min":
              case "max":
                this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                break;

              case "range":
                this._animateOff = !0, this._refresh(), this._animateOff = !1;
            }
        },
        _setOptionDisabled: function(t) {
            this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
        },
        _value: function() {
            var t = this.options.value;
            return t = this._trimAlignValue(t);
        },
        _values: function(t) {
            var e, i, n;
            if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
            if (this._hasMultipleValues()) {
                for (i = this.options.values.slice(), n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]);
                return i;
            }
            return [];
        },
        _trimAlignValue: function(t) {
            if (t <= this._valueMin()) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1, i = (t - this._valueMin()) % e, n = t - i;
            return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5));
        },
        _calculateNewMax: function() {
            var t = this.options.max, e = this._valueMin(), i = this.options.step;
            (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()));
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), 
            t;
        },
        _precisionOf: function(t) {
            var e = t.toString(), i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1;
        },
        _valueMin: function() {
            return this.options.min;
        },
        _valueMax: function() {
            return this.max;
        },
        _refreshRange: function(t) {
            "vertical" === t && this.range.css({
                width: "",
                left: ""
            }), "horizontal" === t && this.range.css({
                height: "",
                bottom: ""
            });
        },
        _refreshValue: function() {
            var e, i, n, s, o, a = this.options.range, r = this.options, l = this, u = !this._animateOff && r.animate, h = {};
            this._hasMultipleValues() ? this.handles.each(function(n) {
                i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, h["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", 
                t(this).stop(1, 1)[u ? "animate" : "css"](h, r.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[u ? "animate" : "css"]({
                    left: i + "%"
                }, r.animate), 1 === n && l.range[u ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === n && l.range.stop(1, 1)[u ? "animate" : "css"]({
                    bottom: i + "%"
                }, r.animate), 1 === n && l.range[u ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))), e = i;
            }) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), i = o !== s ? (n - s) / (o - s) * 100 : 0, 
            h["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](h, r.animate), 
            "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                width: i + "%"
            }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                width: 100 - i + "%"
            }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                height: i + "%"
            }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                height: 100 - i + "%"
            }, r.animate));
        },
        _handleEvents: {
            keydown: function(e) {
                var i, n, s, o = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                  case t.ui.keyCode.HOME:
                  case t.ui.keyCode.END:
                  case t.ui.keyCode.PAGE_UP:
                  case t.ui.keyCode.PAGE_DOWN:
                  case t.ui.keyCode.UP:
                  case t.ui.keyCode.RIGHT:
                  case t.ui.keyCode.DOWN:
                  case t.ui.keyCode.LEFT:
                    if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), 
                    !1 === this._start(e, o))) return;
                }
                switch (s = this.options.step, i = n = this._hasMultipleValues() ? this.values(o) : this.value(), 
                e.keyCode) {
                  case t.ui.keyCode.HOME:
                    n = this._valueMin();
                    break;

                  case t.ui.keyCode.END:
                    n = this._valueMax();
                    break;

                  case t.ui.keyCode.PAGE_UP:
                    n = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                    break;

                  case t.ui.keyCode.PAGE_DOWN:
                    n = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                    break;

                  case t.ui.keyCode.UP:
                  case t.ui.keyCode.RIGHT:
                    if (i === this._valueMax()) return;
                    n = this._trimAlignValue(i + s);
                    break;

                  case t.ui.keyCode.DOWN:
                  case t.ui.keyCode.LEFT:
                    if (i === this._valueMin()) return;
                    n = this._trimAlignValue(i - s);
                }
                this._slide(e, o, n);
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), 
                this._removeClass(t(e.target), null, "ui-state-active"));
            }
        }
    });
    t.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), 
            this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), 
            this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete");
                }
            });
        },
        _getCreateOptions: function() {
            var e = this._super(), i = this.element;
            return t.each([ "min", "max", "step" ], function(t, n) {
                var s = i.attr(n);
                null != s && s.length && (e[n] = s);
            }), e;
        },
        _events: {
            keydown: function(t) {
                this._start(t) && this._keydown(t) && t.preventDefault();
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val();
            },
            blur: function(t) {
                this.cancelBlur ? delete this.cancelBlur : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t));
            },
            mousewheel: function(t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t)) return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), 
                    this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(t);
                    }, 100), t.preventDefault();
                }
            },
            "mousedown .ui-spinner-button": function(e) {
                function i() {
                    this.element[0] === t.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), 
                    this.previous = n, this._delay(function() {
                        this.previous = n;
                    }));
                }
                var n;
                n = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), 
                e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, i.call(this);
                }), !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e);
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(e) {
                if (t(e.currentTarget).hasClass("ui-state-active")) return !1 !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e);
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>");
        },
        _draw: function() {
            this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), 
            this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
                classes: {
                    "ui-button": ""
                }
            }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), 
            this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: !1
            }), this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: !1
            }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height());
        },
        _keydown: function(e) {
            var i = this.options, n = t.ui.keyCode;
            switch (e.keyCode) {
              case n.UP:
                return this._repeat(null, 1, e), !0;

              case n.DOWN:
                return this._repeat(null, -1, e), !0;

              case n.PAGE_UP:
                return this._repeat(null, i.page, e), !0;

              case n.PAGE_DOWN:
                return this._repeat(null, -i.page, e), !0;
            }
            return !1;
        },
        _start: function(t) {
            return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), 
            this.spinning = !0, !0);
        },
        _repeat: function(t, e, i) {
            t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                this._repeat(40, e, i);
            }, t), this._spin(e * this.options.step, i);
        },
        _spin: function(t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), 
            this.spinning && !1 === this._trigger("spin", e, {
                value: i
            }) || (this._value(i), this.counter++);
        },
        _increment: function(e) {
            var i = this.options.incremental;
            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1;
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), 
            t;
        },
        _precisionOf: function(t) {
            var e = t.toString(), i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1;
        },
        _adjustValue: function(t) {
            var e, i, n = this.options;
            return e = null !== n.min ? n.min : 0, i = t - e, i = Math.round(i / n.step) * n.step, 
            t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== n.max && t > n.max ? n.max : null !== n.min && t < n.min ? n.min : t;
        },
        _stop: function(t) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), 
            this.counter = 0, this.spinning = !1, this._trigger("stop", t));
        },
        _setOption: function(t, e) {
            var i, n, s;
            if ("culture" === t || "numberFormat" === t) return i = this._parse(this.element.val()), 
            this.options[t] = e, void this.element.val(this._format(i));
            "max" !== t && "min" !== t && "step" !== t || "string" == typeof e && (e = this._parse(e)), 
            "icons" === t && (n = this.buttons.first().find(".ui-icon"), this._removeClass(n, null, this.options.icons.up), 
            this._addClass(n, null, e.up), s = this.buttons.last().find(".ui-icon"), this._removeClass(s, null, this.options.icons.down), 
            this._addClass(s, null, e.down)), this._super(t, e);
        },
        _setOptionDisabled: function(t) {
            this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), 
            this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable");
        },
        _setOptions: r(function(t) {
            this._super(t);
        }),
        _parse: function(t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), 
            "" === t || isNaN(t) ? null : t;
        },
        _format: function(t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t;
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            });
        },
        isValid: function() {
            var t = this.value();
            return null !== t && t === this._adjustValue(t);
        },
        _value: function(t, e) {
            var i;
            "" !== t && null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i)), 
            this.element.val(t), this._refresh();
        },
        _destroy: function() {
            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), 
            this.uiSpinner.replaceWith(this.element);
        },
        stepUp: r(function(t) {
            this._stepUp(t);
        }),
        _stepUp: function(t) {
            this._start() && (this._spin((t || 1) * this.options.step), this._stop());
        },
        stepDown: r(function(t) {
            this._stepDown(t);
        }),
        _stepDown: function(t) {
            this._start() && (this._spin((t || 1) * -this.options.step), this._stop());
        },
        pageUp: r(function(t) {
            this._stepUp((t || 1) * this.options.page);
        }),
        pageDown: r(function(t) {
            this._stepDown((t || 1) * this.options.page);
        }),
        value: function(t) {
            if (!arguments.length) return this._parse(this.element.val());
            r(this._value).call(this, t);
        },
        widget: function() {
            return this.uiSpinner;
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.spinner", t.ui.spinner, {
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
        },
        _uiSpinnerHtml: function() {
            return "<span>";
        },
        _buttonHtml: function() {
            return "<a></a><a></a>";
        }
    });
    t.ui.spinner;
    t.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var t = /#.*$/;
            return function(e) {
                var i, n;
                i = e.href.replace(t, ""), n = location.href.replace(t, "");
                try {
                    i = decodeURIComponent(i);
                } catch (t) {}
                try {
                    n = decodeURIComponent(n);
                } catch (t) {}
                return e.hash.length > 1 && i === n;
            };
        }(),
        _create: function() {
            var e = this, i = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), 
            this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                return e.tabs.index(t);
            }))).sort()), !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(i.active) : this.active = t(), 
            this._refresh(), this.active.length && this.load(i.active);
        },
        _initialActive: function() {
            var e = this.options.active, i = this.options.collapsible, n = location.hash.substring(1);
            return null === e && (n && this.tabs.each(function(i, s) {
                if (t(s).attr("aria-controls") === n) return e = i, !1;
            }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), null !== e && -1 !== e || (e = !!this.tabs.length && 0)), 
            !1 !== e && -1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0), !i && !1 === e && this.anchors.length && (e = 0), 
            e;
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : t()
            };
        },
        _tabKeydown: function(e) {
            var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"), n = this.tabs.index(i), s = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                  case t.ui.keyCode.RIGHT:
                  case t.ui.keyCode.DOWN:
                    n++;
                    break;

                  case t.ui.keyCode.UP:
                  case t.ui.keyCode.LEFT:
                    s = !1, n--;
                    break;

                  case t.ui.keyCode.END:
                    n = this.anchors.length - 1;
                    break;

                  case t.ui.keyCode.HOME:
                    n = 0;
                    break;

                  case t.ui.keyCode.SPACE:
                    return e.preventDefault(), clearTimeout(this.activating), void this._activate(n);

                  case t.ui.keyCode.ENTER:
                    return e.preventDefault(), clearTimeout(this.activating), void this._activate(n !== this.options.active && n);

                  default:
                    return;
                }
                e.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, s), 
                e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), 
                this.activating = this._delay(function() {
                    this.option("active", n);
                }, this.delay));
            }
        },
        _panelKeydown: function(e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), 
            this.active.trigger("focus"));
        },
        _handlePageNav: function(e) {
            return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), 
            !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), 
            !0) : void 0;
        },
        _findNextTab: function(e, i) {
            for (var n = this.tabs.length - 1; -1 !== t.inArray(function() {
                return e > n && (e = 0), e < 0 && (e = n), e;
            }(), this.options.disabled); ) e = i ? e + 1 : e - 1;
            return e;
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t;
        },
        _setOption: function(t, e) {
            "active" !== t ? (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), 
            e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), 
            "heightStyle" === t && this._setupHeightStyle(e)) : this._activate(e);
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
        },
        refresh: function() {
            var e = this.options, i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                return i.index(t);
            }), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, 
            this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, 
            this.active = t()), this._refresh();
        },
        _refresh: function() {
            this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), 
            this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }), this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0);
        },
        _processTabs: function() {
            var e = this, i = this.tabs, n = this.anchors, s = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), 
            this.tablist.on("mousedown" + this.eventNamespace, "> li", function(e) {
                t(this).is(".ui-state-disabled") && e.preventDefault();
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                t(this).closest("li").is(".ui-state-disabled") && this.blur();
            }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() {
                return t("a", this)[0];
            }).attr({
                role: "presentation",
                tabIndex: -1
            }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function(i, n) {
                var s, o, a, r = t(n).uniqueId().attr("id"), l = t(n).closest("li"), u = l.attr("aria-controls");
                e._isLocal(n) ? (a = (s = n.hash).substring(1), o = e.element.find(e._sanitizeSelector(s))) : (s = "#" + (a = l.attr("aria-controls") || t({}).uniqueId()[0].id), 
                (o = e.element.find(s)).length || (o = e._createPanel(a)).insertAfter(e.panels[i - 1] || e.tablist), 
                o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), u && l.data("ui-tabs-aria-controls", u), 
                l.attr({
                    "aria-controls": a,
                    "aria-labelledby": r
                }), o.attr("aria-labelledby", r);
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), 
            i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(s.not(this.panels)));
        },
        _getList: function() {
            return this.tablist || this.element.find("ol, ul").eq(0);
        },
        _createPanel: function(e) {
            return t("<div>").attr("id", e).data("ui-tabs-destroy", !0);
        },
        _setOptionDisabled: function(e) {
            var i, n, s;
            for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), 
            s = 0; n = this.tabs[s]; s++) i = t(n), !0 === e || -1 !== t.inArray(s, e) ? (i.attr("aria-disabled", "true"), 
            this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), 
            this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === e);
        },
        _setupEvents: function(e) {
            var i = {};
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler";
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function(t) {
                    t.preventDefault();
                }
            }), this._on(this.anchors, i), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs);
        },
        _setupHeightStyle: function(e) {
            var i, n = this.element.parent();
            "fill" === e ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), 
            this.element.siblings(":visible").each(function() {
                var e = t(this), n = e.css("position");
                "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0));
            }), this.element.children().not(this.panels).each(function() {
                i -= t(this).outerHeight(!0);
            }), this.panels.each(function() {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()));
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                i = Math.max(i, t(this).height("").height());
            }).height(i));
        },
        _eventHandler: function(e) {
            var i = this.options, n = this.active, s = t(e.currentTarget).closest("li"), o = s[0] === n[0], a = o && i.collapsible, r = a ? t() : this._getPanelForTab(s), l = n.length ? this._getPanelForTab(n) : t(), u = {
                oldTab: n,
                oldPanel: l,
                newTab: a ? t() : s,
                newPanel: r
            };
            e.preventDefault(), s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || !1 === this._trigger("beforeActivate", e, u) || (i.active = !a && this.tabs.index(s), 
            this.active = o ? t() : s, this.xhr && this.xhr.abort(), l.length || r.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), 
            r.length && this.load(this.tabs.index(s), e), this._toggle(e, u));
        },
        _toggle: function(e, i) {
            function n() {
                o.running = !1, o._trigger("activate", e, i);
            }
            function s() {
                o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, n) : (a.show(), 
                n());
            }
            var o = this, a = i.newPanel, r = i.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), s();
            }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), 
            r.hide(), s()), r.attr("aria-hidden", "true"), i.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
                return 0 === t(this).attr("tabIndex");
            }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            });
        },
        _activate: function(e) {
            var i, n = this._findActive(e);
            n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], 
            this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }));
        },
        _findActive: function(e) {
            return !1 === e ? t() : this.tabs.eq(e);
        },
        _getIndex: function(e) {
            return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), 
            e;
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), 
            this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
            }), this.tabs.each(function() {
                var e = t(this), i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls");
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "");
        },
        enable: function(e) {
            var i = this.options.disabled;
            !1 !== i && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) {
                return t !== e ? t : null;
            }) : t.map(this.tabs, function(t, i) {
                return i !== e ? i : null;
            })), this._setOptionDisabled(i));
        },
        disable: function(e) {
            var i = this.options.disabled;
            if (!0 !== i) {
                if (void 0 === e) i = !0; else {
                    if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                    i = t.isArray(i) ? t.merge([ e ], i).sort() : [ e ];
                }
                this._setOptionDisabled(i);
            }
        },
        load: function(e, i) {
            e = this._getIndex(e);
            var n = this, s = this.tabs.eq(e), o = s.find(".ui-tabs-anchor"), a = this._getPanelForTab(s), r = {
                tab: s,
                panel: a
            }, l = function(t, e) {
                "abort" === e && n.panels.stop(!1, !0), n._removeClass(s, "ui-tabs-loading"), a.removeAttr("aria-busy"), 
                t === n.xhr && delete n.xhr;
            };
            this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(s, "ui-tabs-loading"), 
            a.attr("aria-busy", "true"), this.xhr.done(function(t, e, s) {
                setTimeout(function() {
                    a.html(t), n._trigger("load", i, r), l(s, e);
                }, 1);
            }).fail(function(t, e) {
                setTimeout(function() {
                    l(t, e);
                }, 1);
            })));
        },
        _ajaxSettings: function(e, i, n) {
            var s = this;
            return {
                url: e.attr("href").replace(/#.*$/, ""),
                beforeSend: function(e, o) {
                    return s._trigger("beforeLoad", i, t.extend({
                        jqXHR: e,
                        ajaxSettings: o
                    }, n));
                }
            };
        },
        _getPanelForTab: function(e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i));
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.tabs", t.ui.tabs, {
        _processTabs: function() {
            this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
        }
    });
    t.ui.tabs;
    t.widget("ui.tooltip", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-tooltip": "ui-corner-all ui-widget-shadow"
            },
            content: function() {
                var e = t(this).attr("title") || "";
                return t("<a>").text(e).html();
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(e, i) {
            var n = (e.attr("aria-describedby") || "").split(/\s+/);
            n.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")));
        },
        _removeDescribedBy: function(e) {
            var i = e.data("ui-tooltip-id"), n = (e.attr("aria-describedby") || "").split(/\s+/), s = t.inArray(i, n);
            -1 !== s && n.splice(s, 1), e.removeData("ui-tooltip-id"), (n = t.trim(n.join(" "))) ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby");
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), 
            this.disabledTitles = t([]);
        },
        _setOption: function(e, i) {
            var n = this;
            this._super(e, i), "content" === e && t.each(this.tooltips, function(t, e) {
                n._updateContent(e.element);
            });
        },
        _setOptionDisabled: function(t) {
            this[t ? "_disable" : "_enable"]();
        },
        _disable: function() {
            var e = this;
            t.each(this.tooltips, function(i, n) {
                var s = t.Event("blur");
                s.target = s.currentTarget = n.element[0], e.close(s, !0);
            }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                var e = t(this);
                if (e.is("[title]")) return e.data("ui-tooltip-title", e.attr("title")).removeAttr("title");
            }));
        },
        _enable: function() {
            this.disabledTitles.each(function() {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"));
            }), this.disabledTitles = t([]);
        },
        open: function(e) {
            var i = this, n = t(e ? e.target : this.element).closest(this.options.items);
            n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), 
            n.data("ui-tooltip-open", !0), e && "mouseover" === e.type && n.parents().each(function() {
                var e, n = t(this);
                n.data("ui-tooltip-open") && ((e = t.Event("blur")).target = e.currentTarget = this, 
                i.close(e, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: n.attr("title")
                }, n.attr("title", ""));
            }), this._registerCloseHandlers(e, n), this._updateContent(n, e));
        },
        _updateContent: function(t, e) {
            var i, n = this.options.content, s = this, o = e ? e.type : null;
            if ("string" == typeof n || n.nodeType || n.jquery) return this._open(e, t, n);
            (i = n.call(t[0], function(i) {
                s._delay(function() {
                    t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i));
                });
            })) && this._open(e, t, i);
        },
        _open: function(e, i, n) {
            function s(t) {
                u.of = t, a.is(":hidden") || a.position(u);
            }
            var o, a, r, l, u = t.extend({}, this.options.position);
            n && ((o = this._find(i)) ? o.tooltip.find(".ui-tooltip-content").html(n) : (i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), 
            o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(n), 
            this.liveRegion.children().hide(), (l = t("<div>").html(a.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"), 
            l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                mousemove: s
            }), s(e)) : a.position(t.extend({
                of: i
            }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() {
                a.is(":visible") && (s(u.of), clearInterval(r));
            }, t.fx.interval)), this._trigger("open", e, {
                tooltip: a
            })));
        },
        _registerCloseHandlers: function(e, i) {
            var n = {
                keyup: function(e) {
                    if (e.keyCode === t.ui.keyCode.ESCAPE) {
                        var n = t.Event(e);
                        n.currentTarget = i[0], this.close(n, !0);
                    }
                }
            };
            i[0] !== this.element[0] && (n.remove = function() {
                this._removeTooltip(this._find(i).tooltip);
            }), e && "mouseover" !== e.type || (n.mouseleave = "close"), e && "focusin" !== e.type || (n.focusout = "close"), 
            this._on(!0, i, n);
        },
        close: function(e) {
            var i, n = this, s = t(e ? e.currentTarget : this.element), o = this._find(s);
            o ? (i = o.tooltip, o.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), 
            this._removeDescribedBy(s), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() {
                n._removeTooltip(t(this));
            }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), 
            s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), 
            e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                t(i.element).attr("title", i.title), delete n.parents[e];
            }), o.closing = !0, this._trigger("close", e, {
                tooltip: i
            }), o.hiding || (o.closing = !1))) : s.removeData("ui-tooltip-open");
        },
        _tooltip: function(e) {
            var i = t("<div>").attr("role", "tooltip"), n = t("<div>").appendTo(i), s = i.uniqueId().attr("id");
            return this._addClass(n, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), 
            i.appendTo(this._appendTo(e)), this.tooltips[s] = {
                element: e,
                tooltip: i
            };
        },
        _find: function(t) {
            var e = t.data("ui-tooltip-id");
            return e ? this.tooltips[e] : null;
        },
        _removeTooltip: function(t) {
            t.remove(), delete this.tooltips[t.attr("id")];
        },
        _appendTo: function(t) {
            var e = t.closest(".ui-front, dialog");
            return e.length || (e = this.document[0].body), e;
        },
        _destroy: function() {
            var e = this;
            t.each(this.tooltips, function(i, n) {
                var s = t.Event("blur"), o = n.element;
                s.target = s.currentTarget = o[0], e.close(s, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), 
                o.removeData("ui-tooltip-title"));
            }), this.liveRegion.remove();
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.tooltip", t.ui.tooltip, {
        options: {
            tooltipClass: null
        },
        _tooltip: function() {
            var t = this._superApply(arguments);
            return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), 
            t;
        }
    });
    t.ui.tooltip;
    var f = "ui-effects-animated", m = t;
    t.effects = {
        effect: {}
    }, function(t, e) {
        function i(t, e, i) {
            var n = h[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), 
            isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : n.max < t ? n.max : t);
        }
        function n(e) {
            var i = l(), n = i._rgba = [];
            return e = e.toLowerCase(), p(r, function(t, s) {
                var o, a = s.re.exec(e), r = a && s.parse(a), l = s.space || "rgba";
                if (r) return o = i[l](r), i[u[l].cache] = o[u[l].cache], n = i._rgba = o._rgba, 
                !1;
            }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), i) : o[e];
        }
        function s(t, e, i) {
            return i = (i + 1) % 1, 6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t;
        }
        var o, a = /^([\-+])=\s*(\d+\.?\d*)/, r = [ {
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [ t[1], t[2], t[3], t[4] ];
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(t) {
                return [ 2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4] ];
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(t) {
                return [ parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16) ];
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(t) {
                return [ parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16) ];
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(t) {
                return [ t[1], t[2] / 100, t[3] / 100, t[4] ];
            }
        } ], l = t.Color = function(e, i, n, s) {
            return new t.Color.fn.parse(e, i, n, s);
        }, u = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, h = {
            byte: {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, c = l.support = {}, d = t("<p>")[0], p = t.each;
        d.style.cssText = "background-color:rgba(1,1,1,.5)", c.rgba = d.style.backgroundColor.indexOf("rgba") > -1, 
        p(u, function(t, e) {
            e.cache = "_" + t, e.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            };
        }), l.fn = t.extend(l.prototype, {
            parse: function(e, s, a, r) {
                if (void 0 === e) return this._rgba = [ null, null, null, null ], this;
                (e.jquery || e.nodeType) && (e = t(e).css(s), s = void 0);
                var h = this, c = t.type(e), d = this._rgba = [];
                return void 0 !== s && (e = [ e, s, a, r ], c = "array"), "string" === c ? this.parse(n(e) || o._default) : "array" === c ? (p(u.rgba.props, function(t, n) {
                    d[n.idx] = i(e[n.idx], n);
                }), this) : "object" === c ? (e instanceof l ? p(u, function(t, i) {
                    e[i.cache] && (h[i.cache] = e[i.cache].slice());
                }) : p(u, function(n, s) {
                    var o = s.cache;
                    p(s.props, function(t, n) {
                        if (!h[o] && s.to) {
                            if ("alpha" === t || null == e[t]) return;
                            h[o] = s.to(h._rgba);
                        }
                        h[o][n.idx] = i(e[t], n, !0);
                    }), h[o] && t.inArray(null, h[o].slice(0, 3)) < 0 && (h[o][3] = 1, s.from && (h._rgba = s.from(h[o])));
                }), this) : void 0;
            },
            is: function(t) {
                var e = l(t), i = !0, n = this;
                return p(u, function(t, s) {
                    var o, a = e[s.cache];
                    return a && (o = n[s.cache] || s.to && s.to(n._rgba) || [], p(s.props, function(t, e) {
                        if (null != a[e.idx]) return i = a[e.idx] === o[e.idx];
                    })), i;
                }), i;
            },
            _space: function() {
                var t = [], e = this;
                return p(u, function(i, n) {
                    e[n.cache] && t.push(i);
                }), t.pop();
            },
            transition: function(t, e) {
                var n = l(t), s = n._space(), o = u[s], a = 0 === this.alpha() ? l("transparent") : this, r = a[o.cache] || o.to(a._rgba), c = r.slice();
                return n = n[o.cache], p(o.props, function(t, s) {
                    var o = s.idx, a = r[o], l = n[o], u = h[s.type] || {};
                    null !== l && (null === a ? c[o] = l : (u.mod && (l - a > u.mod / 2 ? a += u.mod : a - l > u.mod / 2 && (a -= u.mod)), 
                    c[o] = i((l - a) * e + a, s)));
                }), this[s](c);
            },
            blend: function(e) {
                if (1 === this._rgba[3]) return this;
                var i = this._rgba.slice(), n = i.pop(), s = l(e)._rgba;
                return l(t.map(i, function(t, e) {
                    return (1 - n) * s[e] + n * t;
                }));
            },
            toRgbaString: function() {
                var e = "rgba(", i = t.map(this._rgba, function(t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t;
                });
                return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")";
            },
            toHslaString: function() {
                var e = "hsla(", i = t.map(this.hsla(), function(t, e) {
                    return null == t && (t = e > 2 ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), 
                    t;
                });
                return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")";
            },
            toHexString: function(e) {
                var i = this._rgba.slice(), n = i.pop();
                return e && i.push(~~(255 * n)), "#" + t.map(i, function(t) {
                    return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t;
                }).join("");
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
            }
        }), l.fn.parse.prototype = l.fn, u.hsla.to = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [ null, null, null, t[3] ];
            var e, i, n = t[0] / 255, s = t[1] / 255, o = t[2] / 255, a = t[3], r = Math.max(n, s, o), l = Math.min(n, s, o), u = r - l, h = r + l, c = .5 * h;
            return e = l === r ? 0 : n === r ? 60 * (s - o) / u + 360 : s === r ? 60 * (o - n) / u + 120 : 60 * (n - s) / u + 240, 
            i = 0 === u ? 0 : c <= .5 ? u / h : u / (2 - h), [ Math.round(e) % 360, i, c, null == a ? 1 : a ];
        }, u.hsla.from = function(t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [ null, null, null, t[3] ];
            var e = t[0] / 360, i = t[1], n = t[2], o = t[3], a = n <= .5 ? n * (1 + i) : n + i - n * i, r = 2 * n - a;
            return [ Math.round(255 * s(r, a, e + 1 / 3)), Math.round(255 * s(r, a, e)), Math.round(255 * s(r, a, e - 1 / 3)), o ];
        }, p(u, function(e, n) {
            var s = n.props, o = n.cache, r = n.to, u = n.from;
            l.fn[e] = function(e) {
                if (r && !this[o] && (this[o] = r(this._rgba)), void 0 === e) return this[o].slice();
                var n, a = t.type(e), h = "array" === a || "object" === a ? e : arguments, c = this[o].slice();
                return p(s, function(t, e) {
                    var n = h["object" === a ? t : e.idx];
                    null == n && (n = c[e.idx]), c[e.idx] = i(n, e);
                }), u ? (n = l(u(c)), n[o] = c, n) : l(c);
            }, p(s, function(i, n) {
                l.fn[i] || (l.fn[i] = function(s) {
                    var o, r = t.type(s), l = "alpha" === i ? this._hsla ? "hsla" : "rgba" : e, u = this[l](), h = u[n.idx];
                    return "undefined" === r ? h : ("function" === r && (s = s.call(this, h), r = t.type(s)), 
                    null == s && n.empty ? this : ("string" === r && (o = a.exec(s)) && (s = h + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1)), 
                    u[n.idx] = s, this[l](u)));
                });
            });
        }), l.hook = function(e) {
            var i = e.split(" ");
            p(i, function(e, i) {
                t.cssHooks[i] = {
                    set: function(e, s) {
                        var o, a, r = "";
                        if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
                            if (s = l(o || s), !c.rgba && 1 !== s._rgba[3]) {
                                for (a = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && a && a.style; ) try {
                                    r = t.css(a, "backgroundColor"), a = a.parentNode;
                                } catch (t) {}
                                s = s.blend(r && "transparent" !== r ? r : "_default");
                            }
                            s = s.toRgbaString();
                        }
                        try {
                            e.style[i] = s;
                        } catch (t) {}
                    }
                }, t.fx.step[i] = function(e) {
                    e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos));
                };
            });
        }, l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), 
        t.cssHooks.borderColor = {
            expand: function(t) {
                var e = {};
                return p([ "Top", "Right", "Bottom", "Left" ], function(i, n) {
                    e["border" + n + "Color"] = t;
                }), e;
            }
        }, o = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [ null, null, null, 0 ],
            _default: "#ffffff"
        };
    }(m), function() {
        function e(e) {
            var i, n, s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, o = {};
            if (s && s.length && s[0] && s[s[0]]) for (n = s.length; n--; ) "string" == typeof s[i = s[n]] && (o[t.camelCase(i)] = s[i]); else for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
            return o;
        }
        function i(e, i) {
            var n, o, a = {};
            for (n in i) o = i[n], e[n] !== o && (s[n] || !t.fx.step[n] && isNaN(parseFloat(o)) || (a[n] = o));
            return a;
        }
        var n = [ "add", "remove", "toggle" ], s = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        t.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function(e, i) {
            t.fx.step[i] = function(t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (m.style(t.elem, i, t.end), 
                t.setAttr = !0);
            };
        }), t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        }), t.effects.animateClass = function(s, o, a, r) {
            var l = t.speed(o, a, r);
            return this.queue(function() {
                var o, a = t(this), r = a.attr("class") || "", u = l.children ? a.find("*").addBack() : a;
                u = u.map(function() {
                    return {
                        el: t(this),
                        start: e(this)
                    };
                }), (o = function() {
                    t.each(n, function(t, e) {
                        s[e] && a[e + "Class"](s[e]);
                    });
                })(), u = u.map(function() {
                    return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this;
                }), a.attr("class", r), u = u.map(function() {
                    var e = this, i = t.Deferred(), n = t.extend({}, l, {
                        queue: !1,
                        complete: function() {
                            i.resolve(e);
                        }
                    });
                    return this.el.animate(this.diff, n), i.promise();
                }), t.when.apply(t, u.get()).done(function() {
                    o(), t.each(arguments, function() {
                        var e = this.el;
                        t.each(this.diff, function(t) {
                            e.css(t, "");
                        });
                    }), l.complete.call(a[0]);
                });
            });
        }, t.fn.extend({
            addClass: function(e) {
                return function(i, n, s, o) {
                    return n ? t.effects.animateClass.call(this, {
                        add: i
                    }, n, s, o) : e.apply(this, arguments);
                };
            }(t.fn.addClass),
            removeClass: function(e) {
                return function(i, n, s, o) {
                    return arguments.length > 1 ? t.effects.animateClass.call(this, {
                        remove: i
                    }, n, s, o) : e.apply(this, arguments);
                };
            }(t.fn.removeClass),
            toggleClass: function(e) {
                return function(i, n, s, o, a) {
                    return "boolean" == typeof n || void 0 === n ? s ? t.effects.animateClass.call(this, n ? {
                        add: i
                    } : {
                        remove: i
                    }, s, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                        toggle: i
                    }, n, s, o);
                };
            }(t.fn.toggleClass),
            switchClass: function(e, i, n, s, o) {
                return t.effects.animateClass.call(this, {
                    add: i,
                    remove: e
                }, n, s, o);
            }
        });
    }(), function() {
        function e(e, i, n, s) {
            return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                effect: e
            }, null == i && (i = {}), t.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (s = n, 
            n = i, i = {}), t.isFunction(n) && (s = n, n = null), i && t.extend(e, i), n = n || i.duration, 
            e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, 
            e.complete = s || i.complete, e;
        }
        function i(e) {
            return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect));
        }
        function n(t, e) {
            var i = e.outerWidth(), n = e.outerHeight(), s = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || [ "", 0, i, n, 0 ];
            return {
                top: parseFloat(s[1]) || 0,
                right: "auto" === s[2] ? i : parseFloat(s[2]),
                bottom: "auto" === s[3] ? n : parseFloat(s[3]),
                left: parseFloat(s[4]) || 0
            };
        }
        t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function(e) {
            return function(i) {
                return !!t(i).data(f) || e(i);
            };
        }(t.expr.filters.animated)), !1 !== t.uiBackCompat && t.extend(t.effects, {
            save: function(t, e) {
                for (var i = 0, n = e.length; i < n; i++) null !== e[i] && t.data("ui-effects-" + e[i], t[0].style[e[i]]);
            },
            restore: function(t, e) {
                for (var i, n = 0, s = e.length; n < s; n++) null !== e[n] && (i = t.data("ui-effects-" + e[n]), 
                t.css(e[n], i));
            },
            setMode: function(t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e;
            },
            createWrapper: function(e) {
                if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                var i = {
                    width: e.outerWidth(!0),
                    height: e.outerHeight(!0),
                    float: e.css("float")
                }, n = t("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }), s = {
                    width: e.width(),
                    height: e.height()
                }, o = document.activeElement;
                try {
                    o.id;
                } catch (t) {
                    o = document.body;
                }
                return e.wrap(n), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), 
                n = e.parent(), "static" === e.css("position") ? (n.css({
                    position: "relative"
                }), e.css({
                    position: "relative"
                })) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }), t.each([ "top", "left", "bottom", "right" ], function(t, n) {
                    i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto");
                }), e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), e.css(s), n.css(i).show();
            },
            removeWrapper: function(e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), 
                e;
            }
        }), t.extend(t.effects, {
            version: "1.12.1",
            define: function(e, i, n) {
                return n || (n = i, i = "effect"), t.effects.effect[e] = n, t.effects.effect[e].mode = i, 
                n;
            },
            scaledDimensions: function(t, e, i) {
                if (0 === e) return {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
                var n = "horizontal" !== i ? (e || 100) / 100 : 1, s = "vertical" !== i ? (e || 100) / 100 : 1;
                return {
                    height: t.height() * s,
                    width: t.width() * n,
                    outerHeight: t.outerHeight() * s,
                    outerWidth: t.outerWidth() * n
                };
            },
            clipToBox: function(t) {
                return {
                    width: t.clip.right - t.clip.left,
                    height: t.clip.bottom - t.clip.top,
                    left: t.clip.left,
                    top: t.clip.top
                };
            },
            unshift: function(t, e, i) {
                var n = t.queue();
                e > 1 && n.splice.apply(n, [ 1, 0 ].concat(n.splice(e, i))), t.dequeue();
            },
            saveStyle: function(t) {
                t.data("ui-effects-style", t[0].style.cssText);
            },
            restoreStyle: function(t) {
                t[0].style.cssText = t.data("ui-effects-style") || "", t.removeData("ui-effects-style");
            },
            mode: function(t, e) {
                var i = t.is(":hidden");
                return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), 
                e;
            },
            getBaseline: function(t, e) {
                var i, n;
                switch (t[0]) {
                  case "top":
                    i = 0;
                    break;

                  case "middle":
                    i = .5;
                    break;

                  case "bottom":
                    i = 1;
                    break;

                  default:
                    i = t[0] / e.height;
                }
                switch (t[1]) {
                  case "left":
                    n = 0;
                    break;

                  case "center":
                    n = .5;
                    break;

                  case "right":
                    n = 1;
                    break;

                  default:
                    n = t[1] / e.width;
                }
                return {
                    x: n,
                    y: i
                };
            },
            createPlaceholder: function(e) {
                var i, n = e.css("position"), s = e.position();
                return e.css({
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight")
                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(n) && (n = "absolute", 
                i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
                    display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight"),
                    float: e.css("float")
                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), 
                e.data("ui-effects-placeholder", i)), e.css({
                    position: n,
                    left: s.left,
                    top: s.top
                }), i;
            },
            removePlaceholder: function(t) {
                var e = "ui-effects-placeholder", i = t.data(e);
                i && (i.remove(), t.removeData(e));
            },
            cleanUp: function(e) {
                t.effects.restoreStyle(e), t.effects.removePlaceholder(e);
            },
            setTransition: function(e, i, n, s) {
                return s = s || {}, t.each(i, function(t, i) {
                    var o = e.cssUnit(i);
                    o[0] > 0 && (s[i] = o[0] * n + o[1]);
                }), s;
            }
        }), t.fn.extend({
            effect: function() {
                function i(e) {
                    function i() {
                        r.removeData(f), t.effects.cleanUp(r), "hide" === n.mode && r.hide(), a();
                    }
                    function a() {
                        t.isFunction(l) && l.call(r[0]), t.isFunction(e) && e();
                    }
                    var r = t(this);
                    n.mode = h.shift(), !1 === t.uiBackCompat || o ? "none" === n.mode ? (r[u](), a()) : s.call(r[0], n, i) : (r.is(":hidden") ? "hide" === u : "show" === u) ? (r[u](), 
                    a()) : s.call(r[0], n, a);
                }
                var n = e.apply(this, arguments), s = t.effects.effect[n.effect], o = s.mode, a = n.queue, r = a || "fx", l = n.complete, u = n.mode, h = [], c = function(e) {
                    var i = t(this), n = t.effects.mode(i, u) || o;
                    i.data(f, !0), h.push(n), o && ("show" === n || n === o && "hide" === n) && i.show(), 
                    o && "none" === n || t.effects.saveStyle(i), t.isFunction(e) && e();
                };
                return t.fx.off || !s ? u ? this[u](n.duration, l) : this.each(function() {
                    l && l.call(this);
                }) : !1 === a ? this.each(c).each(i) : this.queue(r, c).queue(r, i);
            },
            show: function(t) {
                return function(n) {
                    if (i(n)) return t.apply(this, arguments);
                    var s = e.apply(this, arguments);
                    return s.mode = "show", this.effect.call(this, s);
                };
            }(t.fn.show),
            hide: function(t) {
                return function(n) {
                    if (i(n)) return t.apply(this, arguments);
                    var s = e.apply(this, arguments);
                    return s.mode = "hide", this.effect.call(this, s);
                };
            }(t.fn.hide),
            toggle: function(t) {
                return function(n) {
                    if (i(n) || "boolean" == typeof n) return t.apply(this, arguments);
                    var s = e.apply(this, arguments);
                    return s.mode = "toggle", this.effect.call(this, s);
                };
            }(t.fn.toggle),
            cssUnit: function(e) {
                var i = this.css(e), n = [];
                return t.each([ "em", "px", "%", "pt" ], function(t, e) {
                    i.indexOf(e) > 0 && (n = [ parseFloat(i), e ]);
                }), n;
            },
            cssClip: function(t) {
                return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : n(this.css("clip"), this);
            },
            transfer: function(e, i) {
                var n = t(this), s = t(e.to), o = "fixed" === s.css("position"), a = t("body"), r = o ? a.scrollTop() : 0, l = o ? a.scrollLeft() : 0, u = s.offset(), h = {
                    top: u.top - r,
                    left: u.left - l,
                    height: s.innerHeight(),
                    width: s.innerWidth()
                }, c = n.offset(), d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                    top: c.top - r,
                    left: c.left - l,
                    height: n.innerHeight(),
                    width: n.innerWidth(),
                    position: o ? "fixed" : "absolute"
                }).animate(h, e.duration, e.easing, function() {
                    d.remove(), t.isFunction(i) && i();
                });
            }
        }), t.fx.step.clip = function(e) {
            e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = n(e.end, e.elem)), 
            e.clipInit = !0), t(e.elem).cssClip({
                top: e.pos * (e.end.top - e.start.top) + e.start.top,
                right: e.pos * (e.end.right - e.start.right) + e.start.right,
                bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                left: e.pos * (e.end.left - e.start.left) + e.start.left
            });
        };
    }(), function() {
        var e = {};
        t.each([ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function(t, i) {
            e[i] = function(e) {
                return Math.pow(e, t + 2);
            };
        }), t.extend(e, {
            Sine: function(t) {
                return 1 - Math.cos(t * Math.PI / 2);
            },
            Circ: function(t) {
                return 1 - Math.sqrt(1 - t * t);
            },
            Elastic: function(t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15);
            },
            Back: function(t) {
                return t * t * (3 * t - 2);
            },
            Bounce: function(t) {
                for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11; ) ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
            }
        }), t.each(e, function(e, i) {
            t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                return 1 - i(1 - t);
            }, t.easing["easeInOut" + e] = function(t) {
                return t < .5 ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2;
            };
        });
    }();
    t.effects, t.effects.define("blind", "hide", function(e, i) {
        var n = {
            up: [ "bottom", "top" ],
            vertical: [ "bottom", "top" ],
            down: [ "top", "bottom" ],
            left: [ "right", "left" ],
            horizontal: [ "right", "left" ],
            right: [ "left", "right" ]
        }, s = t(this), o = e.direction || "up", a = s.cssClip(), r = {
            clip: t.extend({}, a)
        }, l = t.effects.createPlaceholder(s);
        r.clip[n[o][0]] = r.clip[n[o][1]], "show" === e.mode && (s.cssClip(r.clip), l && l.css(t.effects.clipToBox(r)), 
        r.clip = a), l && l.animate(t.effects.clipToBox(r), e.duration, e.easing), s.animate(r, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    }), t.effects.define("bounce", function(e, i) {
        var n, s, o, a = t(this), r = e.mode, l = "hide" === r, u = "show" === r, h = e.direction || "up", c = e.distance, d = e.times || 5, p = 2 * d + (u || l ? 1 : 0), f = e.duration / p, m = e.easing, g = "up" === h || "down" === h ? "top" : "left", v = "up" === h || "left" === h, y = 0, b = a.queue().length;
        for (t.effects.createPlaceholder(a), o = a.css(g), c || (c = a["top" === g ? "outerHeight" : "outerWidth"]() / 3), 
        u && ((s = {
            opacity: 1
        })[g] = o, a.css("opacity", 0).css(g, v ? 2 * -c : 2 * c).animate(s, f, m)), l && (c /= Math.pow(2, d - 1)), 
        (s = {})[g] = o; y < d; y++) (n = {})[g] = (v ? "-=" : "+=") + c, a.animate(n, f, m).animate(s, f, m), 
        c = l ? 2 * c : c / 2;
        l && ((n = {
            opacity: 0
        })[g] = (v ? "-=" : "+=") + c, a.animate(n, f, m)), a.queue(i), t.effects.unshift(a, b, p + 1);
    }), t.effects.define("clip", "hide", function(e, i) {
        var n, s = {}, o = t(this), a = e.direction || "vertical", r = "both" === a, l = r || "horizontal" === a, u = r || "vertical" === a;
        n = o.cssClip(), s.clip = {
            top: u ? (n.bottom - n.top) / 2 : n.top,
            right: l ? (n.right - n.left) / 2 : n.right,
            bottom: u ? (n.bottom - n.top) / 2 : n.bottom,
            left: l ? (n.right - n.left) / 2 : n.left
        }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(s.clip), s.clip = n), 
        o.animate(s, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    }), t.effects.define("drop", "hide", function(e, i) {
        var n, s = t(this), o = "show" === e.mode, a = e.direction || "left", r = "up" === a || "down" === a ? "top" : "left", l = "up" === a || "left" === a ? "-=" : "+=", u = "+=" === l ? "-=" : "+=", h = {
            opacity: 0
        };
        t.effects.createPlaceholder(s), n = e.distance || s["top" === r ? "outerHeight" : "outerWidth"](!0) / 2, 
        h[r] = l + n, o && (s.css(h), h[r] = u + n, h.opacity = 1), s.animate(h, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    }), t.effects.define("explode", "hide", function(e, i) {
        function n() {
            y.push(this), y.length === c * d && s();
        }
        function s() {
            p.css({
                visibility: "visible"
            }), t(y).remove(), i();
        }
        var o, a, r, l, u, h, c = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, d = c, p = t(this), f = "show" === e.mode, m = p.show().css("visibility", "hidden").offset(), g = Math.ceil(p.outerWidth() / d), v = Math.ceil(p.outerHeight() / c), y = [];
        for (o = 0; o < c; o++) for (l = m.top + o * v, h = o - (c - 1) / 2, a = 0; a < d; a++) r = m.left + a * g, 
        u = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -a * g,
            top: -o * v
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: g,
            height: v,
            left: r + (f ? u * g : 0),
            top: l + (f ? h * v : 0),
            opacity: f ? 0 : 1
        }).animate({
            left: r + (f ? 0 : u * g),
            top: l + (f ? 0 : h * v),
            opacity: f ? 1 : 0
        }, e.duration || 500, e.easing, n);
    }), t.effects.define("fade", "toggle", function(e, i) {
        var n = "show" === e.mode;
        t(this).css("opacity", n ? 0 : 1).animate({
            opacity: n ? 1 : 0
        }, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    }), t.effects.define("fold", "hide", function(e, i) {
        var n = t(this), s = e.mode, o = "show" === s, a = "hide" === s, r = e.size || 15, l = /([0-9]+)%/.exec(r), u = !!e.horizFirst ? [ "right", "bottom" ] : [ "bottom", "right" ], h = e.duration / 2, c = t.effects.createPlaceholder(n), d = n.cssClip(), p = {
            clip: t.extend({}, d)
        }, f = {
            clip: t.extend({}, d)
        }, m = [ d[u[0]], d[u[1]] ], g = n.queue().length;
        l && (r = parseInt(l[1], 10) / 100 * m[a ? 0 : 1]), p.clip[u[0]] = r, f.clip[u[0]] = r, 
        f.clip[u[1]] = 0, o && (n.cssClip(f.clip), c && c.css(t.effects.clipToBox(f)), f.clip = d), 
        n.queue(function(i) {
            c && c.animate(t.effects.clipToBox(p), h, e.easing).animate(t.effects.clipToBox(f), h, e.easing), 
            i();
        }).animate(p, h, e.easing).animate(f, h, e.easing).queue(i), t.effects.unshift(n, g, 4);
    }), t.effects.define("highlight", "show", function(e, i) {
        var n = t(this), s = {
            backgroundColor: n.css("backgroundColor")
        };
        "hide" === e.mode && (s.opacity = 0), t.effects.saveStyle(n), n.css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(s, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    }), t.effects.define("size", function(e, i) {
        var n, s, o, a = t(this), r = [ "fontSize" ], l = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ], u = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ], h = e.mode, c = "effect" !== h, d = e.scale || "both", p = e.origin || [ "middle", "center" ], f = a.css("position"), m = a.position(), g = t.effects.scaledDimensions(a), v = e.from || g, y = e.to || t.effects.scaledDimensions(a, 0);
        t.effects.createPlaceholder(a), "show" === h && (o = v, v = y, y = o), s = {
            from: {
                y: v.height / g.height,
                x: v.width / g.width
            },
            to: {
                y: y.height / g.height,
                x: y.width / g.width
            }
        }, "box" !== d && "both" !== d || (s.from.y !== s.to.y && (v = t.effects.setTransition(a, l, s.from.y, v), 
        y = t.effects.setTransition(a, l, s.to.y, y)), s.from.x !== s.to.x && (v = t.effects.setTransition(a, u, s.from.x, v), 
        y = t.effects.setTransition(a, u, s.to.x, y))), "content" !== d && "both" !== d || s.from.y !== s.to.y && (v = t.effects.setTransition(a, r, s.from.y, v), 
        y = t.effects.setTransition(a, r, s.to.y, y)), p && (n = t.effects.getBaseline(p, g), 
        v.top = (g.outerHeight - v.outerHeight) * n.y + m.top, v.left = (g.outerWidth - v.outerWidth) * n.x + m.left, 
        y.top = (g.outerHeight - y.outerHeight) * n.y + m.top, y.left = (g.outerWidth - y.outerWidth) * n.x + m.left), 
        a.css(v), "content" !== d && "both" !== d || (l = l.concat([ "marginTop", "marginBottom" ]).concat(r), 
        u = u.concat([ "marginLeft", "marginRight" ]), a.find("*[width]").each(function() {
            var i = t(this), n = t.effects.scaledDimensions(i), o = {
                height: n.height * s.from.y,
                width: n.width * s.from.x,
                outerHeight: n.outerHeight * s.from.y,
                outerWidth: n.outerWidth * s.from.x
            }, a = {
                height: n.height * s.to.y,
                width: n.width * s.to.x,
                outerHeight: n.height * s.to.y,
                outerWidth: n.width * s.to.x
            };
            s.from.y !== s.to.y && (o = t.effects.setTransition(i, l, s.from.y, o), a = t.effects.setTransition(i, l, s.to.y, a)), 
            s.from.x !== s.to.x && (o = t.effects.setTransition(i, u, s.from.x, o), a = t.effects.setTransition(i, u, s.to.x, a)), 
            c && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, function() {
                c && t.effects.restoreStyle(i);
            });
        })), a.animate(y, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                var e = a.offset();
                0 === y.opacity && a.css("opacity", v.opacity), c || (a.css("position", "static" === f ? "relative" : f).offset(e), 
                t.effects.saveStyle(a)), i();
            }
        });
    }), t.effects.define("scale", function(e, i) {
        var n = t(this), s = e.mode, o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== s ? 0 : 100), a = t.extend(!0, {
            from: t.effects.scaledDimensions(n),
            to: t.effects.scaledDimensions(n, o, e.direction || "both"),
            origin: e.origin || [ "middle", "center" ]
        }, e);
        e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i);
    }), t.effects.define("puff", "hide", function(e, i) {
        var n = t.extend(!0, {}, e, {
            fade: !0,
            percent: parseInt(e.percent, 10) || 150
        });
        t.effects.effect.scale.call(this, n, i);
    }), t.effects.define("pulsate", "show", function(e, i) {
        var n = t(this), s = e.mode, o = "show" === s, a = "hide" === s, r = o || a, l = 2 * (e.times || 5) + (r ? 1 : 0), u = e.duration / l, h = 0, c = 1, d = n.queue().length;
        for (!o && n.is(":visible") || (n.css("opacity", 0).show(), h = 1); c < l; c++) n.animate({
            opacity: h
        }, u, e.easing), h = 1 - h;
        n.animate({
            opacity: h
        }, u, e.easing), n.queue(i), t.effects.unshift(n, d, l + 1);
    }), t.effects.define("shake", function(e, i) {
        var n = 1, s = t(this), o = e.direction || "left", a = e.distance || 20, r = e.times || 3, l = 2 * r + 1, u = Math.round(e.duration / l), h = "up" === o || "down" === o ? "top" : "left", c = "up" === o || "left" === o, d = {}, p = {}, f = {}, m = s.queue().length;
        for (t.effects.createPlaceholder(s), d[h] = (c ? "-=" : "+=") + a, p[h] = (c ? "+=" : "-=") + 2 * a, 
        f[h] = (c ? "-=" : "+=") + 2 * a, s.animate(d, u, e.easing); n < r; n++) s.animate(p, u, e.easing).animate(f, u, e.easing);
        s.animate(p, u, e.easing).animate(d, u / 2, e.easing).queue(i), t.effects.unshift(s, m, l + 1);
    }), t.effects.define("slide", "show", function(e, i) {
        var n, s, o = t(this), a = {
            up: [ "bottom", "top" ],
            down: [ "top", "bottom" ],
            left: [ "right", "left" ],
            right: [ "left", "right" ]
        }, r = e.mode, l = e.direction || "left", u = "up" === l || "down" === l ? "top" : "left", h = "up" === l || "left" === l, c = e.distance || o["top" === u ? "outerHeight" : "outerWidth"](!0), d = {};
        t.effects.createPlaceholder(o), n = o.cssClip(), s = o.position()[u], d[u] = (h ? -1 : 1) * c + s, 
        d.clip = o.cssClip(), d.clip[a[l][1]] = d.clip[a[l][0]], "show" === r && (o.cssClip(d.clip), 
        o.css(u, d[u]), d.clip = n, d[u] = s), o.animate(d, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        });
    });
    !1 !== t.uiBackCompat && t.effects.define("transfer", function(e, i) {
        t(this).transfer(e, i);
    });
}), function(t) {
    "function" == typeof define && define.amd ? define([ "jquery", "jquery-ui-dist" ], t) : t(jQuery);
}(function(t) {
    t.extend(t.ui, {
        multiDatesPicker: {
            version: "1.6.6"
        }
    }), t.fn.multiDatesPicker = function(e) {
        function i(t, e) {
            e || (e = "picked"), t = a.call(this, t);
            for (var i = 0; i < this.multiDatesPicker.dates[e].length; i++) if (!h.compareDates(this.multiDatesPicker.dates[e][i], t)) return this.multiDatesPicker.dates[e].splice(i, 1).pop();
        }
        function n(t, e) {
            return e || (e = "picked"), this.multiDatesPicker.dates[e].splice(t, 1).pop();
        }
        function s(t, e, i) {
            e || (e = "picked"), (t = a.call(this, t)).setHours(0), t.setMinutes(0), t.setSeconds(0), 
            t.setMilliseconds(0), !1 === h.gotDate.call(this, t, e) && (this.multiDatesPicker.dates[e].push(t), 
            i || this.multiDatesPicker.dates[e].sort(h.compareDates));
        }
        function o(t) {
            t || (t = "picked"), this.multiDatesPicker.dates[t].sort(h.compareDates);
        }
        function a(t, e, i) {
            return e || (e = "object"), h.dateConvert.call(this, t, e, i);
        }
        var r = arguments, l = this, u = (new Date(), new Date(0), {}), h = {
            init: function(e) {
                var i = t(this);
                this.multiDatesPicker.changed = !1;
                var n = {
                    beforeShow: function(t, e) {
                        this.multiDatesPicker.changed = !1, this.multiDatesPicker.originalBeforeShow && this.multiDatesPicker.originalBeforeShow.call(this, t, e);
                    },
                    onSelect: function(e, i) {
                        var n = t(this);
                        if (this.multiDatesPicker.changed = !0, e && (n.multiDatesPicker("toggleDate", e), 
                        this.multiDatesPicker.changed = !0), "normal" == this.multiDatesPicker.mode && this.multiDatesPicker.pickableRange) if (this.multiDatesPicker.dates.picked.length > 0) {
                            var s = this.multiDatesPicker.dates.picked[0], o = new Date(s.getTime());
                            if (h.sumDays(o, this.multiDatesPicker.pickableRange - 1), this.multiDatesPicker.adjustRangeToDisabled) {
                                var a, r = this.multiDatesPicker.dates.disabled.slice(0);
                                do {
                                    a = 0;
                                    for (var l = 0; l < r.length; l++) r[l].getTime() <= o.getTime() && (s.getTime() <= r[l].getTime() && r[l].getTime() <= o.getTime() && a++, 
                                    r.splice(l, 1), l--);
                                    o.setDate(o.getDate() + a);
                                } while (0 != a);
                            }
                            this.multiDatesPicker.maxDate && o > this.multiDatesPicker.maxDate && (o = this.multiDatesPicker.maxDate), 
                            n.datepicker("option", "minDate", s).datepicker("option", "maxDate", o);
                        } else n.datepicker("option", "minDate", this.multiDatesPicker.minDate).datepicker("option", "maxDate", this.multiDatesPicker.maxDate);
                        this.multiDatesPicker.originalOnSelect && e && this.multiDatesPicker.originalOnSelect.call(this, e, i);
                    },
                    beforeShowDay: function(e) {
                        var i = t(this), n = !1 !== i.multiDatesPicker("gotDate", e), s = i.datepicker("option", "disabled"), o = !1 !== i.multiDatesPicker("gotDate", e, "disabled"), a = this.multiDatesPicker.maxPicks <= this.multiDatesPicker.dates.picked.length, r = [ !0, "", null ];
                        return this.multiDatesPicker.originalBeforeShowDay && (r = this.multiDatesPicker.originalBeforeShowDay.call(this, e)), 
                        r[1] = n ? "ui-state-highlight " + r[1] : r[1], r[0] = r[0] && !(s || o || a && !r[1]), 
                        r;
                    }
                };
                if (i.val()) var s = i.val();
                e ? (e.separator && (this.multiDatesPicker.separator = e.separator), this.multiDatesPicker.separator || (this.multiDatesPicker.separator = ", "), 
                this.multiDatesPicker.originalBeforeShow = e.beforeShow, this.multiDatesPicker.originalOnSelect = e.onSelect, 
                this.multiDatesPicker.originalBeforeShowDay = e.beforeShowDay, this.multiDatesPicker.originalOnClose = e.onClose, 
                i.datepicker(e), this.multiDatesPicker.minDate = t.datepicker._determineDate(this, e.minDate, null), 
                this.multiDatesPicker.maxDate = t.datepicker._determineDate(this, e.maxDate, null), 
                e.addDates && h.addDates.call(this, e.addDates), e.addDisabledDates && h.addDates.call(this, e.addDisabledDates, "disabled"), 
                h.setMode.call(this, e)) : i.datepicker(), i.datepicker("option", n), s && i.multiDatesPicker("value", s);
                var o = i.multiDatesPicker("value");
                i.val(o);
                var a = i.datepicker("option", "altField");
                a && t(a).val(o), i.datepicker("refresh");
            },
            compareDates: function(t, e) {
                t = a.call(this, t), e = a.call(this, e);
                var i = t.getFullYear() - e.getFullYear();
                return i || (i = t.getMonth() - e.getMonth()) || (i = t.getDate() - e.getDate()), 
                i;
            },
            sumDays: function(t, e) {
                var i = typeof t;
                return obj_date = a.call(this, t), obj_date.setDate(obj_date.getDate() + e), a.call(this, obj_date, i);
            },
            dateConvert: function(e, i, n) {
                var s = typeof e, o = t(this);
                if (s == i) {
                    if ("object" == s) try {
                        e.getTime();
                    } catch (e) {
                        return t.error("Received date is in a non supported format!"), !1;
                    }
                    return e;
                }
                if (void 0 === e && (e = new Date(0)), "string" != i && "object" != i && "number" != i && t.error('Date format "' + i + '" not supported!'), 
                !n) {
                    var a = o.datepicker("option", "dateFormat");
                    n = a || t.datepicker._defaults.dateFormat;
                }
                switch (s) {
                  case "object":
                    break;

                  case "string":
                    e = t.datepicker.parseDate(n, e);
                    break;

                  case "number":
                    e = new Date(e);
                    break;

                  default:
                    t.error('Conversion from "' + s + '" format not allowed on jQuery.multiDatesPicker');
                }
                switch (i) {
                  case "object":
                    return e;

                  case "string":
                    return t.datepicker.formatDate(n, e);

                  case "number":
                    return e.getTime();

                  default:
                    t.error('Conversion to "' + i + '" format not allowed on jQuery.multiDatesPicker');
                }
                return !1;
            },
            gotDate: function(t, e) {
                e || (e = "picked");
                for (var i = 0; i < this.multiDatesPicker.dates[e].length; i++) if (0 === h.compareDates.call(this, this.multiDatesPicker.dates[e][i], t)) return i;
                return !1;
            },
            value: function(t) {
                if (!t || "string" != typeof t) {
                    var e = h.getDates.call(this, "string");
                    return e.length ? e.join(this.multiDatesPicker.separator) : "";
                }
                h.addDates.call(this, t.split(this.multiDatesPicker.separator));
            },
            getDates: function(e, i) {
                switch (e || (e = "string"), i || (i = "picked"), e) {
                  case "object":
                    return this.multiDatesPicker.dates[i];

                  case "string":
                  case "number":
                    for (var n = [], s = 0; s < this.multiDatesPicker.dates[i].length; s++) n.push(a.call(this, this.multiDatesPicker.dates[i][s], e));
                    return n;

                  default:
                    t.error('Format "' + e + '" not supported!');
                }
            },
            addDates: function(e, i) {
                if (e.length > 0) switch (i || (i = "picked"), typeof e) {
                  case "object":
                  case "array":
                    if (e.length) {
                        for (var n = 0; n < e.length; n++) s.call(this, e[n], i, !0);
                        o.call(this, i);
                        break;
                    }

                  case "string":
                  case "number":
                    s.call(this, e, i);
                    break;

                  default:
                    t.error('Date format "' + typeof e + '" not allowed on jQuery.multiDatesPicker');
                } else t.error("Empty array of dates received.");
            },
            removeDates: function(t, e) {
                e || (e = "picked");
                var n = [];
                if ("[object Array]" === Object.prototype.toString.call(t)) {
                    t.sort(function(t, e) {
                        return e - t;
                    });
                    for (var s = 0; s < t.length; s++) n.push(i.call(this, t[s], e));
                } else n.push(i.call(this, t, e));
                return n;
            },
            removeIndexes: function(t, e) {
                e || (e = "picked");
                var i = [];
                if ("[object Array]" === Object.prototype.toString.call(t)) {
                    t.sort(function(t, e) {
                        return e - t;
                    });
                    for (var s = 0; s < t.length; s++) i.push(n.call(this, t[s], e));
                } else i.push(n.call(this, t, e));
                return i;
            },
            resetDates: function(t) {
                t || (t = "picked"), this.multiDatesPicker.dates[t] = [];
            },
            toggleDate: function(t, e) {
                switch (e || (e = "picked"), this.multiDatesPicker.mode) {
                  case "daysRange":
                    this.multiDatesPicker.dates[e] = [];
                    var i = this.multiDatesPicker.autoselectRange[1], n = this.multiDatesPicker.autoselectRange[0];
                    i < n && (i = this.multiDatesPicker.autoselectRange[0], n = this.multiDatesPicker.autoselectRange[1]);
                    for (var s = n; s < i; s++) h.addDates.call(this, h.sumDays.call(this, t, s), e);
                    break;

                  default:
                    !1 === h.gotDate.call(this, t) ? h.addDates.call(this, t, e) : h.removeDates.call(this, t, e);
                }
            },
            setMode: function(e) {
                t(this);
                switch (e.mode && (this.multiDatesPicker.mode = e.mode), this.multiDatesPicker.mode) {
                  case "normal":
                    for (var i in e) switch (i) {
                      case "maxPicks":
                      case "minPicks":
                      case "pickableRange":
                      case "adjustRangeToDisabled":
                        this.multiDatesPicker[i] = e[i];
                    }
                    break;

                  case "daysRange":
                  case "weeksRange":
                    var n = 1;
                    for (i in e) switch (i) {
                      case "autoselectRange":
                        n--;

                      case "pickableRange":
                      case "adjustRangeToDisabled":
                        this.multiDatesPicker[i] = e[i];
                    }
                    n > 0 && t.error("Some mandatory options not specified!");
                }
                u.onSelect && u.onSelect();
            },
            destroy: function() {
                this.multiDatesPicker = null, t(this).datepicker("destroy");
            }
        };
        return this.each(function() {
            var i = t(this);
            if (this.multiDatesPicker || (this.multiDatesPicker = {
                dates: {
                    picked: [],
                    disabled: []
                },
                mode: "normal",
                adjustRangeToDisabled: !0
            }), h[e]) {
                var n = h[e].apply(this, Array.prototype.slice.call(r, 1));
                switch (e) {
                  case "removeDates":
                  case "removeIndexes":
                  case "resetDates":
                  case "toggleDate":
                  case "addDates":
                    var s = i.datepicker("option", "altField"), o = h.value.call(this);
                    void 0 !== s && "" != s && t(s).val(o), i.val(o), t.datepicker._refreshDatepicker(this);
                }
                switch (e) {
                  case "removeDates":
                  case "getDates":
                  case "gotDate":
                  case "sumDays":
                  case "compareDates":
                  case "dateConvert":
                  case "value":
                    l = n;
                }
                return n;
            }
            return "object" != typeof e && e ? (t.error("Method " + e + " does not exist on jQuery.multiDatesPicker"), 
            !1) : h.init.apply(this, r);
        }), l;
    };
    var e = new Date().getTime();
    t.multiDatesPicker = {
        version: !1
    }, t.multiDatesPicker.initialized = !1, t.multiDatesPicker.uuid = new Date().getTime(), 
    t.multiDatesPicker.version = t.ui.multiDatesPicker.version, t.multiDatesPicker._hideDatepicker = t.datepicker._hideDatepicker, 
    t.datepicker._hideDatepicker = function() {
        var e = this._curInst.input[0], i = e.multiDatesPicker;
        return !i || !1 === this._curInst.inline && !i.changed ? t.multiDatesPicker._hideDatepicker.apply(this, arguments) : (i.changed = !1, 
        void t.datepicker._refreshDatepicker(e));
    }, window["DP_jQuery_" + e] = t;
}), function(t) {
    "function" == typeof define && define.amd ? define([ "jquery" ], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);
}(function(t) {
    var e, i, n, s, o, a, r = function() {}, l = !!window.jQuery, u = t(window), h = function(t, i) {
        e.ev.on("mfp" + t + ".mfp", i);
    }, c = function(e, i, n, s) {
        var o = document.createElement("div");
        return o.className = "mfp-" + e, n && (o.innerHTML = n), s ? i && i.appendChild(o) : (o = t(o), 
        i && o.appendTo(i)), o;
    }, d = function(i, n) {
        e.ev.triggerHandler("mfp" + i, n), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), 
        e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [ n ]));
    }, p = function(i) {
        return i === a && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), 
        a = i), e.currTemplate.closeBtn;
    }, f = function() {
        t.magnificPopup.instance || ((e = new r()).init(), t.magnificPopup.instance = e);
    }, m = function() {
        var t = document.createElement("p").style, e = [ "ms", "O", "Moz", "Webkit" ];
        if (void 0 !== t.transition) return !0;
        for (;e.length; ) if (e.pop() + "Transition" in t) return !0;
        return !1;
    };
    r.prototype = {
        constructor: r,
        init: function() {
            var i = navigator.appVersion;
            e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(i), 
            e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = m(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), 
            n = t(document), e.popupsCache = {};
        },
        open: function(i) {
            var s;
            if (!1 === i.isObj) {
                e.items = i.items.toArray(), e.index = 0;
                var a, r = i.items;
                for (s = 0; s < r.length; s++) if ((a = r[s]).parsed && (a = a.el[0]), a === i.el[0]) {
                    e.index = s;
                    break;
                }
            } else e.items = t.isArray(i.items) ? i.items : [ i.items ], e.index = i.index || 0;
            {
                if (!e.isOpen) {
                    e.types = [], o = "", i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = n, 
                    i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, 
                    e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, 
                    e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, 
                    e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = c("bg").on("click.mfp", function() {
                        e.close();
                    }), e.wrap = c("wrap").attr("tabindex", -1).on("click.mfp", function(t) {
                        e._checkIfClose(t.target) && e.close();
                    }), e.container = c("container", e.wrap)), e.contentContainer = c("content"), e.st.preloader && (e.preloader = c("preloader", e.container, e.st.tLoading));
                    var l = t.magnificPopup.modules;
                    for (s = 0; s < l.length; s++) {
                        var f = l[s];
                        f = f.charAt(0).toUpperCase() + f.slice(1), e["init" + f].call(e);
                    }
                    d("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (h("MarkupParse", function(t, e, i, n) {
                        i.close_replaceWith = p(n.type);
                    }), o += " mfp-close-btn-in") : e.wrap.append(p())), e.st.alignTop && (o += " mfp-align-top"), 
                    e.fixedContentPos ? e.wrap.css({
                        overflow: e.st.overflowY,
                        overflowX: "hidden",
                        overflowY: e.st.overflowY
                    }) : e.wrap.css({
                        top: u.scrollTop(),
                        position: "absolute"
                    }), (!1 === e.st.fixedBgPos || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                        height: n.height(),
                        position: "absolute"
                    }), e.st.enableEscapeKey && n.on("keyup.mfp", function(t) {
                        27 === t.keyCode && e.close();
                    }), u.on("resize.mfp", function() {
                        e.updateSize();
                    }), e.st.closeOnContentClick || (o += " mfp-auto-cursor"), o && e.wrap.addClass(o);
                    var m = e.wH = u.height(), g = {};
                    if (e.fixedContentPos && e._hasScrollBar(m)) {
                        var v = e._getScrollbarSize();
                        v && (g.marginRight = v);
                    }
                    e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : g.overflow = "hidden");
                    var y = e.st.mainClass;
                    return e.isIE7 && (y += " mfp-ie7"), y && e._addClassToMFP(y), e.updateItemHTML(), 
                    d("BuildControls"), t("html").css(g), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), 
                    e._lastFocusedEl = document.activeElement, setTimeout(function() {
                        e.content ? (e._addClassToMFP("mfp-ready"), e._setFocus()) : e.bgOverlay.addClass("mfp-ready"), 
                        n.on("focusin.mfp", e._onFocusIn);
                    }, 16), e.isOpen = !0, e.updateSize(m), d("Open"), i;
                }
                e.updateItemHTML();
            }
        },
        close: function() {
            e.isOpen && (d("BeforeClose"), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP("mfp-removing"), 
            setTimeout(function() {
                e._close();
            }, e.st.removalDelay)) : e._close());
        },
        _close: function() {
            d("Close");
            var i = "mfp-removing mfp-ready ";
            if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), 
            e._removeClassFromMFP(i), e.fixedContentPos) {
                var s = {
                    marginRight: ""
                };
                e.isIE7 ? t("body, html").css("overflow", "") : s.overflow = "", t("html").css(s);
            }
            n.off("keyup.mfp focusin.mfp"), e.ev.off(".mfp"), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), 
            e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), 
            !e.st.showCloseBtn || e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type] || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), 
            e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, 
            e.content = null, e.currTemplate = null, e.prevHeight = 0, d("AfterClose");
        },
        updateSize: function(t) {
            if (e.isIOS) {
                var i = document.documentElement.clientWidth / window.innerWidth, n = window.innerHeight * i;
                e.wrap.css("height", n), e.wH = n;
            } else e.wH = t || u.height();
            e.fixedContentPos || e.wrap.css("height", e.wH), d("Resize");
        },
        updateItemHTML: function() {
            var i = e.items[e.index];
            e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
            var n = i.type;
            if (d("BeforeChange", [ e.currItem ? e.currItem.type : "", n ]), e.currItem = i, 
            !e.currTemplate[n]) {
                var o = !!e.st[n] && e.st[n].markup;
                d("FirstMarkupParse", o), e.currTemplate[n] = !o || t(o);
            }
            s && s !== i.type && e.container.removeClass("mfp-" + s + "-holder");
            var a = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
            e.appendContent(a, n), i.preloaded = !0, d("Change", i), s = i.type, e.container.prepend(e.contentContainer), 
            d("AfterChange");
        },
        appendContent: function(t, i) {
            e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && !0 === e.currTemplate[i] ? e.content.find(".mfp-close").length || e.content.append(p()) : e.content = t : e.content = "", 
            d("BeforeAppend"), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content);
        },
        parseEl: function(i) {
            var n, s = e.items[i];
            if (s.tagName ? s = {
                el: t(s)
            } : (n = s.type, s = {
                data: s,
                src: s.src
            }), s.el) {
                for (var o = e.types, a = 0; a < o.length; a++) if (s.el.hasClass("mfp-" + o[a])) {
                    n = o[a];
                    break;
                }
                s.src = s.el.attr("data-mfp-src"), s.src || (s.src = s.el.attr("href"));
            }
            return s.type = n || e.st.type || "inline", s.index = i, s.parsed = !0, e.items[i] = s, 
            d("ElementParse", s), e.items[i];
        },
        addGroup: function(t, i) {
            var n = function(n) {
                n.mfpEl = this, e._openClick(n, t, i);
            };
            i || (i = {});
            var s = "click.magnificPopup";
            i.mainEl = t, i.items ? (i.isObj = !0, t.off(s).on(s, n)) : (i.isObj = !1, i.delegate ? t.off(s).on(s, i.delegate, n) : (i.items = t, 
            t.off(s).on(s, n)));
        },
        _openClick: function(i, n, s) {
            if ((void 0 !== s.midClick ? s.midClick : t.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                var o = void 0 !== s.disableOn ? s.disableOn : t.magnificPopup.defaults.disableOn;
                if (o) if (t.isFunction(o)) {
                    if (!o.call(e)) return !0;
                } else if (u.width() < o) return !0;
                i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), s.el = t(i.mfpEl), 
                s.delegate && (s.items = n.find(s.delegate)), e.open(s);
            }
        },
        updateStatus: function(t, n) {
            if (e.preloader) {
                i !== t && e.container.removeClass("mfp-s-" + i), n || "loading" !== t || (n = e.st.tLoading);
                var s = {
                    status: t,
                    text: n
                };
                d("UpdateStatus", s), t = s.status, n = s.text, e.preloader.html(n), e.preloader.find("a").on("click", function(t) {
                    t.stopImmediatePropagation();
                }), e.container.addClass("mfp-s-" + t), i = t;
            }
        },
        _checkIfClose: function(i) {
            if (!t(i).hasClass("mfp-prevent-close")) {
                var n = e.st.closeOnContentClick, s = e.st.closeOnBgClick;
                if (n && s) return !0;
                if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
                if (i === e.content[0] || t.contains(e.content[0], i)) {
                    if (n) return !0;
                } else if (s && t.contains(document, i)) return !0;
                return !1;
            }
        },
        _addClassToMFP: function(t) {
            e.bgOverlay.addClass(t), e.wrap.addClass(t);
        },
        _removeClassFromMFP: function(t) {
            this.bgOverlay.removeClass(t), e.wrap.removeClass(t);
        },
        _hasScrollBar: function(t) {
            return (e.isIE7 ? n.height() : document.body.scrollHeight) > (t || u.height());
        },
        _setFocus: function() {
            (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus();
        },
        _onFocusIn: function(i) {
            if (i.target !== e.wrap[0] && !t.contains(e.wrap[0], i.target)) return e._setFocus(), 
            !1;
        },
        _parseMarkup: function(e, i, n) {
            var s;
            n.data && (i = t.extend(n.data, i)), d("MarkupParse", [ e, i, n ]), t.each(i, function(i, n) {
                if (void 0 === n || !1 === n) return !0;
                if ((s = i.split("_")).length > 1) {
                    var o = e.find(".mfp-" + s[0]);
                    if (o.length > 0) {
                        var a = s[1];
                        "replaceWith" === a ? o[0] !== n[0] && o.replaceWith(n) : "img" === a ? o.is("img") ? o.attr("src", n) : o.replaceWith(t("<img>").attr("src", n).attr("class", o.attr("class"))) : o.attr(s[1], n);
                    }
                } else e.find(".mfp-" + i).html(n);
            });
        },
        _getScrollbarSize: function() {
            if (void 0 === e.scrollbarSize) {
                var t = document.createElement("div");
                t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", 
                document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t);
            }
            return e.scrollbarSize;
        }
    }, t.magnificPopup = {
        instance: null,
        proto: r.prototype,
        modules: [],
        open: function(e, i) {
            return f(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = i || 0, this.instance.open(e);
        },
        close: function() {
            return t.magnificPopup.instance && t.magnificPopup.instance.close();
        },
        registerModule: function(e, i) {
            i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), 
            this.modules.push(e);
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, t.fn.magnificPopup = function(i) {
        f();
        var n = t(this);
        if ("string" == typeof i) if ("open" === i) {
            var s, o = l ? n.data("magnificPopup") : n[0].magnificPopup, a = parseInt(arguments[1], 10) || 0;
            o.items ? s = o.items[a] : (s = n, o.delegate && (s = s.find(o.delegate)), s = s.eq(a)), 
            e._openClick({
                mfpEl: s
            }, n, o);
        } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1)); else i = t.extend(!0, {}, i), 
        l ? n.data("magnificPopup", i) : n[0].magnificPopup = i, e.addGroup(n, i);
        return n;
    };
    var g, v, y, b = function() {
        y && (v.after(y.addClass(g)).detach(), y = null);
    };
    t.magnificPopup.registerModule("inline", {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                e.types.push("inline"), h("Close.inline", function() {
                    b();
                });
            },
            getInline: function(i, n) {
                if (b(), i.src) {
                    var s = e.st.inline, o = t(i.src);
                    if (o.length) {
                        var a = o[0].parentNode;
                        a && a.tagName && (v || (g = s.hiddenClass, v = c(g), g = "mfp-" + g), y = o.after(v).detach().removeClass(g)), 
                        e.updateStatus("ready");
                    } else e.updateStatus("error", s.tNotFound), o = t("<div>");
                    return i.inlineElement = o, o;
                }
                return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n;
            }
        }
    });
    var _, x = function() {
        _ && t(document.body).removeClass(_);
    }, w = function() {
        x(), e.req && e.req.abort();
    };
    t.magnificPopup.registerModule("ajax", {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                e.types.push("ajax"), _ = e.st.ajax.cursor, h("Close.ajax", w), h("BeforeChange.ajax", w);
            },
            getAjax: function(i) {
                _ && t(document.body).addClass(_), e.updateStatus("loading");
                var n = t.extend({
                    url: i.src,
                    success: function(n, s, o) {
                        var a = {
                            data: n,
                            xhr: o
                        };
                        d("ParseAjax", a), e.appendContent(t(a.data), "ajax"), i.finished = !0, x(), e._setFocus(), 
                        setTimeout(function() {
                            e.wrap.addClass("mfp-ready");
                        }, 16), e.updateStatus("ready"), d("AjaxContentAdded");
                    },
                    error: function() {
                        x(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src));
                    }
                }, e.st.ajax.settings);
                return e.req = t.ajax(n), "";
            }
        }
    });
    var C, k = function(i) {
        if (i.data && void 0 !== i.data.title) return i.data.title;
        var n = e.st.image.titleSrc;
        if (n) {
            if (t.isFunction(n)) return n.call(e, i);
            if (i.el) return i.el.attr(n) || "";
        }
        return "";
    };
    t.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var i = e.st.image, n = ".image";
                e.types.push("image"), h("Open" + n, function() {
                    "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor);
                }), h("Close" + n, function() {
                    i.cursor && t(document.body).removeClass(i.cursor), u.off("resize.mfp");
                }), h("Resize" + n, e.resizeImage), e.isLowIE && h("AfterChange", e.resizeImage);
            },
            resizeImage: function() {
                var t = e.currItem;
                if (t && t.img && e.st.image.verticalFit) {
                    var i = 0;
                    e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), 
                    t.img.css("max-height", e.wH - i);
                }
            },
            _onImageHasSize: function(t) {
                t.img && (t.hasSize = !0, C && clearInterval(C), t.isCheckingImgSize = !1, d("ImageHasSize", t), 
                t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1));
            },
            findImageSize: function(t) {
                var i = 0, n = t.img[0], s = function(o) {
                    C && clearInterval(C), C = setInterval(function() {
                        n.naturalWidth > 0 ? e._onImageHasSize(t) : (i > 200 && clearInterval(C), 3 === ++i ? s(10) : 40 === i ? s(50) : 100 === i && s(500));
                    }, o);
                };
                s(1);
            },
            getImage: function(i, n) {
                var s = 0, o = function() {
                    i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), 
                    e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, d("ImageLoadComplete")) : ++s < 200 ? setTimeout(o, 100) : a());
                }, a = function() {
                    i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", r.tError.replace("%url%", i.src))), 
                    i.hasSize = !0, i.loaded = !0, i.loadError = !0);
                }, r = e.st.image, l = n.find(".mfp-img");
                if (l.length) {
                    var u = document.createElement("img");
                    u.className = "mfp-img", i.el && i.el.find("img").length && (u.alt = i.el.find("img").attr("alt")), 
                    i.img = t(u).on("load.mfploader", o).on("error.mfploader", a), u.src = i.src, l.is("img") && (i.img = i.img.clone()), 
                    (u = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : u.width || (i.hasSize = !1);
                }
                return e._parseMarkup(n, {
                    title: k(i),
                    img_replaceWith: i.img
                }, i), e.resizeImage(), i.hasSize ? (C && clearInterval(C), i.loadError ? (n.addClass("mfp-loading"), 
                e.updateStatus("error", r.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), 
                e.updateStatus("ready")), n) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, 
                n.addClass("mfp-loading"), e.findImageSize(i)), n);
            }
        }
    });
    var D, T = function() {
        return void 0 === D && (D = void 0 !== document.createElement("p").style.MozTransform), 
        D;
    };
    t.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(t) {
                return t.is("img") ? t : t.find("img");
            }
        },
        proto: {
            initZoom: function() {
                var t, i = e.st.zoom, n = ".zoom";
                if (i.enabled && e.supportsTransition) {
                    var s, o, a = i.duration, r = function(t) {
                        var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), n = "all " + i.duration / 1e3 + "s " + i.easing, s = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }, o = "transition";
                        return s["-webkit-" + o] = s["-moz-" + o] = s["-o-" + o] = s[o] = n, e.css(s), e;
                    }, l = function() {
                        e.content.css("visibility", "visible");
                    };
                    h("BuildControls" + n, function() {
                        if (e._allowZoom()) {
                            if (clearTimeout(s), e.content.css("visibility", "hidden"), !(t = e._getItemToZoom())) return void l();
                            (o = r(t)).css(e._getOffset()), e.wrap.append(o), s = setTimeout(function() {
                                o.css(e._getOffset(!0)), s = setTimeout(function() {
                                    l(), setTimeout(function() {
                                        o.remove(), t = o = null, d("ZoomAnimationEnded");
                                    }, 16);
                                }, a);
                            }, 16);
                        }
                    }), h("BeforeClose" + n, function() {
                        if (e._allowZoom()) {
                            if (clearTimeout(s), e.st.removalDelay = a, !t) {
                                if (!(t = e._getItemToZoom())) return;
                                o = r(t);
                            }
                            o.css(e._getOffset(!0)), e.wrap.append(o), e.content.css("visibility", "hidden"), 
                            setTimeout(function() {
                                o.css(e._getOffset());
                            }, 16);
                        }
                    }), h("Close" + n, function() {
                        e._allowZoom() && (l(), o && o.remove(), t = null);
                    });
                }
            },
            _allowZoom: function() {
                return "image" === e.currItem.type;
            },
            _getItemToZoom: function() {
                return !!e.currItem.hasSize && e.currItem.img;
            },
            _getOffset: function(i) {
                var n, s = (n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(), o = parseInt(n.css("padding-top"), 10), a = parseInt(n.css("padding-bottom"), 10);
                s.top -= t(window).scrollTop() - o;
                var r = {
                    width: n.width(),
                    height: (l ? n.innerHeight() : n[0].offsetHeight) - a - o
                };
                return T() ? r["-moz-transform"] = r.transform = "translate(" + s.left + "px," + s.top + "px)" : (r.left = s.left, 
                r.top = s.top), r;
            }
        }
    });
    var S = function(t) {
        if (e.currTemplate.iframe) {
            var i = e.currTemplate.iframe.find("iframe");
            i.length && (t || (i[0].src = "//about:blank"), e.isIE8 && i.css("display", t ? "block" : "none"));
        }
    };
    t.magnificPopup.registerModule("iframe", {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                e.types.push("iframe"), h("BeforeChange", function(t, e, i) {
                    e !== i && ("iframe" === e ? S() : "iframe" === i && S(!0));
                }), h("Close.iframe", function() {
                    S();
                });
            },
            getIframe: function(i, n) {
                var s = i.src, o = e.st.iframe;
                t.each(o.patterns, function() {
                    if (s.indexOf(this.index) > -1) return this.id && (s = "string" == typeof this.id ? s.substr(s.lastIndexOf(this.id) + this.id.length, s.length) : this.id.call(this, s)), 
                    s = this.src.replace("%id%", s), !1;
                });
                var a = {};
                return o.srcAction && (a[o.srcAction] = s), e._parseMarkup(n, a, i), e.updateStatus("ready"), 
                n;
            }
        }
    });
    var E = function(t) {
        var i = e.items.length;
        return t > i - 1 ? t - i : t < 0 ? i + t : t;
    }, P = function(t, e, i) {
        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i);
    };
    t.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [ 0, 2 ],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var i = e.st.gallery, s = ".mfp-gallery";
                if (e.direction = !0, !i || !i.enabled) return !1;
                o += " mfp-gallery", h("Open" + s, function() {
                    i.navigateByImgClick && e.wrap.on("click" + s, ".mfp-img", function() {
                        if (e.items.length > 1) return e.next(), !1;
                    }), n.on("keydown" + s, function(t) {
                        37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next();
                    });
                }), h("UpdateStatus" + s, function(t, i) {
                    i.text && (i.text = P(i.text, e.currItem.index, e.items.length));
                }), h("MarkupParse" + s, function(t, n, s, o) {
                    var a = e.items.length;
                    s.counter = a > 1 ? P(i.tCounter, o.index, a) : "";
                }), h("BuildControls" + s, function() {
                    if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                        var n = i.arrowMarkup, s = e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass("mfp-prevent-close"), o = e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass("mfp-prevent-close");
                        s.click(function() {
                            e.prev();
                        }), o.click(function() {
                            e.next();
                        }), e.container.append(s.add(o));
                    }
                }), h("Change" + s, function() {
                    e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() {
                        e.preloadNearbyImages(), e._preloadTimeout = null;
                    }, 16);
                }), h("Close" + s, function() {
                    n.off(s), e.wrap.off("click" + s), e.arrowRight = e.arrowLeft = null;
                });
            },
            next: function() {
                e.direction = !0, e.index = E(e.index + 1), e.updateItemHTML();
            },
            prev: function() {
                e.direction = !1, e.index = E(e.index - 1), e.updateItemHTML();
            },
            goTo: function(t) {
                e.direction = t >= e.index, e.index = t, e.updateItemHTML();
            },
            preloadNearbyImages: function() {
                var t, i = e.st.gallery.preload, n = Math.min(i[0], e.items.length), s = Math.min(i[1], e.items.length);
                for (t = 1; t <= (e.direction ? s : n); t++) e._preloadItem(e.index + t);
                for (t = 1; t <= (e.direction ? n : s); t++) e._preloadItem(e.index - t);
            },
            _preloadItem: function(i) {
                if (i = E(i), !e.items[i].preloaded) {
                    var n = e.items[i];
                    n.parsed || (n = e.parseEl(i)), d("LazyLoad", n), "image" === n.type && (n.img = t('<img class="mfp-img" />').on("load.mfploader", function() {
                        n.hasSize = !0;
                    }).on("error.mfploader", function() {
                        n.hasSize = !0, n.loadError = !0, d("LazyLoadError", n);
                    }).attr("src", n.src)), n.preloaded = !0;
                }
            }
        }
    });
    t.magnificPopup.registerModule("retina", {
        options: {
            replaceSrc: function(t) {
                return t.src.replace(/\.\w+$/, function(t) {
                    return "@2x" + t;
                });
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var t = e.st.retina, i = t.ratio;
                    (i = isNaN(i) ? i() : i) > 1 && (h("ImageHasSize.retina", function(t, e) {
                        e.img.css({
                            "max-width": e.img[0].naturalWidth / i,
                            width: "100%"
                        });
                    }), h("ElementParse.retina", function(e, n) {
                        n.src = t.replaceSrc(n, i);
                    }));
                }
            }
        }
    }), f();
}), function(t) {
    "use strict";
    function e(e, n) {
        var s = this, o = e.attr("name") || n.name || "";
        this.options = n, this.$el = e.hide(), this.$label = this.$el.closest("label"), 
        0 === this.$label.length && this.$el.attr("id") && (this.$label = t(i('label[for="%s"]', this.$el.attr("id").replace(/:/g, "\\:")))), 
        this.$parent = t(i('<div class="ms-parent %s" %s/>', e.attr("class") || "", i('title="%s"', e.attr("title")))), 
        this.$choice = t(i([ '<button type="button" class="ms-choice">', '<span class="placeholder">%s</span>', "<div></div>", "</button>" ].join(""), this.options.placeholder)), 
        this.$drop = t(i('<div class="ms-drop %s"%s></div>', this.options.position, i(' style="width: %s"', this.options.dropWidth))), 
        this.$el.after(this.$parent), this.$parent.append(this.$choice), this.$parent.append(this.$drop), 
        this.$el.prop("disabled") && this.$choice.addClass("disabled"), this.$parent.css("width", this.options.width || this.$el.css("width") || this.$el.outerWidth() + 20), 
        this.selectAllName = 'data-name="selectAll' + o + '"', this.selectGroupName = 'data-name="selectGroup' + o + '"', 
        this.selectItemName = 'data-name="selectItem' + o + '"', this.options.keepOpen || t(document).click(function(i) {
            t(i.target)[0] !== s.$choice[0] && t(i.target).parents(".ms-choice")[0] !== s.$choice[0] && (t(i.target)[0] === s.$drop[0] || t(i.target).parents(".ms-drop")[0] !== s.$drop[0] && i.target !== e[0]) && s.options.isOpen && s.close();
        });
    }
    var i = function(t) {
        var e = arguments, i = !0, n = 1;
        return t = t.replace(/%s/g, function() {
            var t = e[n++];
            return void 0 === t ? (i = !1, "") : t;
        }), i ? t : "";
    }, n = function(t) {
        for (var e = [ {
            base: "A",
            letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
        }, {
            base: "AA",
            letters: /[\uA732]/g
        }, {
            base: "AE",
            letters: /[\u00C6\u01FC\u01E2]/g
        }, {
            base: "AO",
            letters: /[\uA734]/g
        }, {
            base: "AU",
            letters: /[\uA736]/g
        }, {
            base: "AV",
            letters: /[\uA738\uA73A]/g
        }, {
            base: "AY",
            letters: /[\uA73C]/g
        }, {
            base: "B",
            letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
        }, {
            base: "C",
            letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
        }, {
            base: "D",
            letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
        }, {
            base: "DZ",
            letters: /[\u01F1\u01C4]/g
        }, {
            base: "Dz",
            letters: /[\u01F2\u01C5]/g
        }, {
            base: "E",
            letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
        }, {
            base: "F",
            letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
        }, {
            base: "G",
            letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
        }, {
            base: "H",
            letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
        }, {
            base: "I",
            letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
        }, {
            base: "J",
            letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
        }, {
            base: "K",
            letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
        }, {
            base: "L",
            letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
        }, {
            base: "LJ",
            letters: /[\u01C7]/g
        }, {
            base: "Lj",
            letters: /[\u01C8]/g
        }, {
            base: "M",
            letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
        }, {
            base: "N",
            letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
        }, {
            base: "NJ",
            letters: /[\u01CA]/g
        }, {
            base: "Nj",
            letters: /[\u01CB]/g
        }, {
            base: "O",
            letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
        }, {
            base: "OI",
            letters: /[\u01A2]/g
        }, {
            base: "OO",
            letters: /[\uA74E]/g
        }, {
            base: "OU",
            letters: /[\u0222]/g
        }, {
            base: "P",
            letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
        }, {
            base: "Q",
            letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
        }, {
            base: "R",
            letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
        }, {
            base: "S",
            letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
        }, {
            base: "T",
            letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
        }, {
            base: "TZ",
            letters: /[\uA728]/g
        }, {
            base: "U",
            letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
        }, {
            base: "V",
            letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
        }, {
            base: "VY",
            letters: /[\uA760]/g
        }, {
            base: "W",
            letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
        }, {
            base: "X",
            letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
        }, {
            base: "Y",
            letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
        }, {
            base: "Z",
            letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
        }, {
            base: "a",
            letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
        }, {
            base: "aa",
            letters: /[\uA733]/g
        }, {
            base: "ae",
            letters: /[\u00E6\u01FD\u01E3]/g
        }, {
            base: "ao",
            letters: /[\uA735]/g
        }, {
            base: "au",
            letters: /[\uA737]/g
        }, {
            base: "av",
            letters: /[\uA739\uA73B]/g
        }, {
            base: "ay",
            letters: /[\uA73D]/g
        }, {
            base: "b",
            letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
        }, {
            base: "c",
            letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
        }, {
            base: "d",
            letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
        }, {
            base: "dz",
            letters: /[\u01F3\u01C6]/g
        }, {
            base: "e",
            letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
        }, {
            base: "f",
            letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
        }, {
            base: "g",
            letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
        }, {
            base: "h",
            letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
        }, {
            base: "hv",
            letters: /[\u0195]/g
        }, {
            base: "i",
            letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
        }, {
            base: "j",
            letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
        }, {
            base: "k",
            letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
        }, {
            base: "l",
            letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
        }, {
            base: "lj",
            letters: /[\u01C9]/g
        }, {
            base: "m",
            letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
        }, {
            base: "n",
            letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
        }, {
            base: "nj",
            letters: /[\u01CC]/g
        }, {
            base: "o",
            letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
        }, {
            base: "oi",
            letters: /[\u01A3]/g
        }, {
            base: "ou",
            letters: /[\u0223]/g
        }, {
            base: "oo",
            letters: /[\uA74F]/g
        }, {
            base: "p",
            letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
        }, {
            base: "q",
            letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
        }, {
            base: "r",
            letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
        }, {
            base: "s",
            letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
        }, {
            base: "t",
            letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
        }, {
            base: "tz",
            letters: /[\uA729]/g
        }, {
            base: "u",
            letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
        }, {
            base: "v",
            letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
        }, {
            base: "vy",
            letters: /[\uA761]/g
        }, {
            base: "w",
            letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
        }, {
            base: "x",
            letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
        }, {
            base: "y",
            letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
        }, {
            base: "z",
            letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
        } ], i = 0; i < e.length; i++) t = t.replace(e[i].letters, e[i].base);
        return t;
    };
    e.prototype = {
        constructor: e,
        init: function() {
            var e = this, n = t("<ul></ul>");
            this.$drop.html(""), this.options.filter && this.$drop.append([ '<div class="ms-search">', '<input type="text" autocomplete="off" autocorrect="off" autocapitilize="off" spellcheck="false">', "</div>" ].join("")), 
            this.options.selectAll && !this.options.single && n.append([ '<li class="ms-select-all">', "<label>", i('<input type="checkbox" %s /> ', this.selectAllName), this.options.selectAllDelimiter[0], this.options.selectAllText, this.options.selectAllDelimiter[1], "</label>", "</li>" ].join("")), 
            t.each(this.$el.children(), function(t, i) {
                n.append(e.optionToHtml(t, i));
            }), n.append(i('<li class="ms-no-results">%s</li>', this.options.noMatchesFound)), 
            this.$drop.append(n), this.$drop.find("ul").css("max-height", this.options.maxHeight + "px"), 
            this.$drop.find(".multiple").css("width", this.options.multipleWidth + "px"), this.$searchInput = this.$drop.find(".ms-search input"), 
            this.$selectAll = this.$drop.find("input[" + this.selectAllName + "]"), this.$selectGroups = this.$drop.find("input[" + this.selectGroupName + "]"), 
            this.$selectItems = this.$drop.find("input[" + this.selectItemName + "]:enabled"), 
            this.$disableItems = this.$drop.find("input[" + this.selectItemName + "]:disabled"), 
            this.$noResults = this.$drop.find(".ms-no-results"), this.events(), this.updateSelectAll(!0), 
            this.update(!0), this.options.isOpen && this.open();
        },
        optionToHtml: function(e, n, s, o) {
            var a, r = this, l = t(n), u = l.attr("class") || "", h = i('title="%s"', l.attr("title")), c = this.options.multiple ? "multiple" : "", d = this.options.single ? "radio" : "checkbox";
            if (l.is("option")) {
                var p, f = l.val(), m = r.options.textTemplate(l), g = l.prop("selected"), v = i('style="%s"', this.options.styler(f));
                return a = o || l.prop("disabled"), (p = t([ i('<li class="%s %s" %s %s>', c, u, h, v), i('<label class="%s">', a ? "disabled" : ""), i('<input type="%s" %s%s%s%s>', d, this.selectItemName, g ? ' checked="checked"' : "", a ? ' disabled="disabled"' : "", i(' data-group="%s"', s)), i("<span>%s</span>", m), "</label>", "</li>" ].join(""))).find("input").val(f), 
                p;
            }
            if (l.is("optgroup")) {
                var y = r.options.labelTemplate(l), b = t("<div/>");
                return s = "group_" + e, a = l.prop("disabled"), b.append([ '<li class="group">', i('<label class="optgroup %s" data-group="%s">', a ? "disabled" : "", s), this.options.hideOptgroupCheckboxes || this.options.single ? "" : i('<input type="checkbox" %s %s>', this.selectGroupName, a ? 'disabled="disabled"' : ""), y, "</label>", "</li>" ].join("")), 
                t.each(l.children(), function(t, e) {
                    b.append(r.optionToHtml(t, e, s, a));
                }), b.html();
            }
        },
        events: function() {
            var e = this, n = function(t) {
                t.preventDefault(), e[e.options.isOpen ? "close" : "open"]();
            };
            this.$label && this.$label.off("click").on("click", function(t) {
                "label" === t.target.nodeName.toLowerCase() && t.target === this && (n(t), e.options.filter && e.options.isOpen || e.focus(), 
                t.stopPropagation());
            }), this.$choice.off("click").on("click", n).off("focus").on("focus", this.options.onFocus).off("blur").on("blur", this.options.onBlur), 
            this.$parent.off("keydown").on("keydown", function(t) {
                switch (t.which) {
                  case 27:
                    e.close(), e.$choice.focus();
                }
            }), this.$searchInput.off("keydown").on("keydown", function(t) {
                9 === t.keyCode && t.shiftKey && e.close();
            }).off("keyup").on("keyup", function(t) {
                if (e.options.filterAcceptOnEnter && (13 === t.which || 32 == t.which) && e.$searchInput.val()) return e.$selectAll.click(), 
                e.close(), void e.focus();
                e.filter();
            }), this.$selectAll.off("click").on("click", function() {
                var i = t(this).prop("checked"), n = e.$selectItems.filter(":visible");
                n.length === e.$selectItems.length ? e[i ? "checkAll" : "uncheckAll"]() : (e.$selectGroups.prop("checked", i), 
                n.prop("checked", i), e.options[i ? "onCheckAll" : "onUncheckAll"](), e.update());
            }), this.$selectGroups.off("click").on("click", function() {
                var n = t(this).parent().attr("data-group"), s = e.$selectItems.filter(":visible").filter(i('[data-group="%s"]', n)), o = s.length !== s.filter(":checked").length;
                s.prop("checked", o), e.updateSelectAll(), e.update(), e.options.onOptgroupClick({
                    label: t(this).parent().text(),
                    checked: o,
                    children: s.get(),
                    instance: e
                });
            }), this.$selectItems.off("click").on("click", function() {
                if (e.updateSelectAll(), e.update(), e.updateOptGroupSelect(), e.options.onClick({
                    label: t(this).parent().text(),
                    value: t(this).val(),
                    checked: t(this).prop("checked"),
                    instance: e
                }), e.options.single && e.options.isOpen && !e.options.keepOpen && e.close(), e.options.single) {
                    var i = t(this).val();
                    e.$selectItems.filter(function() {
                        return t(this).val() !== i;
                    }).each(function() {
                        t(this).prop("checked", !1);
                    }), e.update();
                }
            });
        },
        open: function() {
            if (!this.$choice.hasClass("disabled")) {
                if (this.options.isOpen = !0, this.$choice.find(">div").addClass("open"), this.$drop[this.animateMethod("show")](), 
                this.$selectAll.parent().show(), this.$noResults.hide(), this.$el.children().length || (this.$selectAll.parent().hide(), 
                this.$noResults.show()), this.options.container) {
                    var e = this.$drop.offset();
                    this.$drop.appendTo(t(this.options.container)), this.$drop.offset({
                        top: e.top,
                        left: e.left
                    });
                }
                this.options.filter && (this.$searchInput.val(""), this.$searchInput.focus(), this.filter()), 
                this.options.onOpen();
            }
        },
        close: function() {
            this.options.isOpen = !1, this.$choice.find(">div").removeClass("open"), this.$drop[this.animateMethod("hide")](), 
            this.options.container && (this.$parent.append(this.$drop), this.$drop.css({
                top: "auto",
                left: "auto"
            })), this.options.onClose();
        },
        animateMethod: function(t) {
            return {
                show: {
                    fade: "fadeIn",
                    slide: "slideDown"
                },
                hide: {
                    fade: "fadeOut",
                    slide: "slideUp"
                }
            }[t][this.options.animate] || t;
        },
        update: function(e) {
            var i = this.options.displayValues ? this.getSelects() : this.getSelects("text"), n = this.$choice.find(">span"), s = i.length;
            0 === s ? n.addClass("placeholder").html(this.options.placeholder) : this.options.allSelected && s === this.$selectItems.length + this.$disableItems.length ? n.removeClass("placeholder").html(this.options.allSelected) : this.options.ellipsis && s > this.options.minimumCountSelected ? n.removeClass("placeholder").text(i.slice(0, this.options.minimumCountSelected).join(this.options.delimiter) + "...") : this.options.countSelected && s > this.options.minimumCountSelected ? n.removeClass("placeholder").html(this.options.countSelected.replace("#", i.length).replace("%", this.$selectItems.length + this.$disableItems.length)) : n.removeClass("placeholder").text(i.join(this.options.delimiter)), 
            this.options.addTitle && n.prop("title", this.getSelects("text")), this.$el.val(this.getSelects()).trigger("change"), 
            this.$drop.find("li").removeClass("selected"), this.$drop.find("input:checked").each(function() {
                t(this).parents("li").first().addClass("selected");
            }), e || this.$el.trigger("change");
        },
        updateSelectAll: function(t) {
            var e = this.$selectItems;
            t || (e = e.filter(":visible")), this.$selectAll.prop("checked", e.length && e.length === e.filter(":checked").length), 
            !t && this.$selectAll.prop("checked") && this.options.onCheckAll();
        },
        updateOptGroupSelect: function() {
            var e = this.$selectItems.filter(":visible");
            t.each(this.$selectGroups, function(n, s) {
                var o = t(s).parent().attr("data-group"), a = e.filter(i('[data-group="%s"]', o));
                t(s).prop("checked", a.length && a.length === a.filter(":checked").length);
            });
        },
        getSelects: function(e) {
            var n = this, s = [], o = [];
            return this.$drop.find(i("input[%s]:checked", this.selectItemName)).each(function() {
                s.push(t(this).parents("li").first().text()), o.push(t(this).val());
            }), "text" === e && this.$selectGroups.length && (s = [], this.$selectGroups.each(function() {
                var e = [], o = t.trim(t(this).parent().text()), a = t(this).parent().data("group"), r = n.$drop.find(i('[%s][data-group="%s"]', n.selectItemName, a)), l = r.filter(":checked");
                if (l.length) {
                    if (e.push("["), e.push(o), r.length > l.length) {
                        var u = [];
                        l.each(function() {
                            u.push(t(this).parent().text());
                        }), e.push(": " + u.join(", "));
                    }
                    e.push("]"), s.push(e.join(""));
                }
            })), "text" === e ? s : o;
        },
        setSelects: function(e) {
            var n = this;
            this.$selectItems.prop("checked", !1), this.$disableItems.prop("checked", !1), t.each(e, function(t, e) {
                n.$selectItems.filter(i('[value="%s"]', e)).prop("checked", !0), n.$disableItems.filter(i('[value="%s"]', e)).prop("checked", !0);
            }), this.$selectAll.prop("checked", this.$selectItems.length === this.$selectItems.filter(":checked").length + this.$disableItems.filter(":checked").length), 
            t.each(n.$selectGroups, function(e, i) {
                var s = t(i).parent().attr("data-group"), o = n.$selectItems.filter('[data-group="' + s + '"]');
                t(i).prop("checked", o.length && o.length === o.filter(":checked").length);
            }), this.update();
        },
        enable: function() {
            this.$choice.removeClass("disabled");
        },
        disable: function() {
            this.$choice.addClass("disabled");
        },
        checkAll: function() {
            this.$selectItems.prop("checked", !0), this.$selectGroups.prop("checked", !0), this.$selectAll.prop("checked", !0), 
            this.update(), this.options.onCheckAll();
        },
        uncheckAll: function() {
            this.$selectItems.prop("checked", !1), this.$selectGroups.prop("checked", !1), this.$selectAll.prop("checked", !1), 
            this.update(), this.options.onUncheckAll();
        },
        focus: function() {
            this.$choice.focus(), this.options.onFocus();
        },
        blur: function() {
            this.$choice.blur(), this.options.onBlur();
        },
        refresh: function() {
            this.init();
        },
        destroy: function() {
            this.$el.show(), this.$parent.remove(), this.$el.data("multipleSelect", null);
        },
        filter: function() {
            var e = this, s = t.trim(this.$searchInput.val()).toLowerCase();
            0 === s.length ? (this.$selectAll.parent().show(), this.$selectItems.parent().show(), 
            this.$disableItems.parent().show(), this.$selectGroups.parent().show(), this.$noResults.hide()) : (this.$selectItems.each(function() {
                var e = t(this).parent();
                e[n(e.text().toLowerCase()).indexOf(n(s)) < 0 ? "hide" : "show"]();
            }), this.$disableItems.parent().hide(), this.$selectGroups.each(function() {
                var n = t(this).parent(), s = n.attr("data-group");
                n[e.$selectItems.filter(":visible").filter(i('[data-group="%s"]', s)).length ? "show" : "hide"]();
            }), this.$selectItems.parent().filter(":visible").length ? (this.$selectAll.parent().show(), 
            this.$noResults.hide()) : (this.$selectAll.parent().hide(), this.$noResults.show())), 
            this.updateOptGroupSelect(), this.updateSelectAll(), this.options.onFilter(s);
        }
    }, t.fn.multipleSelect = function() {
        var i, n = arguments[0], s = arguments, o = [ "getSelects", "setSelects", "enable", "disable", "open", "close", "checkAll", "uncheckAll", "focus", "blur", "refresh", "destroy" ];
        return this.each(function() {
            var a = t(this), r = a.data("multipleSelect"), l = t.extend({}, t.fn.multipleSelect.defaults, a.data(), "object" == typeof n && n);
            if (r || (r = new e(a, l), a.data("multipleSelect", r)), "string" == typeof n) {
                if (t.inArray(n, o) < 0) throw "Unknown method: " + n;
                i = r[n](s[1]);
            } else r.init(), s[1] && (i = r[s[1]].apply(r, [].slice.call(s, 2)));
        }), void 0 !== i ? i : this;
    }, t.fn.multipleSelect.defaults = {
        name: "",
        isOpen: !1,
        placeholder: "",
        selectAll: !0,
        selectAllDelimiter: [ "[", "]" ],
        minimumCountSelected: 3,
        ellipsis: !1,
        multiple: !1,
        multipleWidth: 80,
        single: !1,
        filter: !1,
        width: void 0,
        dropWidth: void 0,
        maxHeight: 250,
        container: null,
        position: "bottom",
        keepOpen: !1,
        animate: "none",
        displayValues: !1,
        delimiter: ", ",
        addTitle: !1,
        filterAcceptOnEnter: !1,
        hideOptgroupCheckboxes: !1,
        selectAllText: "Seleccionar todas",
        allSelected: "Todo seleccionado",
        countSelected: "# de % seleccionado",
        noMatchesFound: "No se encontraron resultados",
        styler: function() {
            return !1;
        },
        textTemplate: function(t) {
            return t.html();
        },
        labelTemplate: function(t) {
            return t.attr("label");
        },
        onOpen: function() {
            return !1;
        },
        onClose: function() {
            return !1;
        },
        onCheckAll: function() {
            return !1;
        },
        onUncheckAll: function() {
            return !1;
        },
        onFocus: function() {
            return !1;
        },
        onBlur: function() {
            return !1;
        },
        onOptgroupClick: function() {
            return !1;
        },
        onClick: function() {
            return !1;
        },
        onFilter: function() {
            return !1;
        }
    };
}(jQuery), $(document).ready(function() {
    function t(t) {
        var i = t.target.files[0], n = /image.*/;
        if (i.type.match(n)) {
            var s = new FileReader();
            s.onload = e, s.readAsDataURL(i);
        }
    }
    function e(t) {
        var e = t.target.result;
        $("#imgSalida").attr("src", e);
    }
    function i(t) {
        var e = t.target.files[0], i = /image.*/;
        if (e.type.match(i)) {
            var s = new FileReader();
            s.onload = n, s.readAsDataURL(e);
        }
    }
    function n(t) {
        var e = t.target.result;
        $(".prevImage").css("display", "block");
        var i = $(".prevImage").width() / 15 * 9;
        $(".showImg").css({
            height: i + "px"
        }), $(".showImg").css({
            width: i + "px"
        }), $("#imgExit").attr("src", e);
    }
    function s(t) {
        var e = t.target.files[0], i = /image.*/;
        if (e.type.match(i)) {
            var n = new FileReader();
            n.onload = o, n.readAsDataURL(e);
        }
    }
    function o(t) {
        var e = t.target.result;
        $(".prevImageP").css("display", "block");
        var i = $(".prevImageP").width() / 15 * 9;
        $(".showImgP").css({
            height: i + "px"
        }), $(".showImgP").css({
            width: i + "px"
        }), $("#imgExitP").attr("src", e);
    }
    function a(t) {
        var e = $(".muestraHorario tbody tr").length + 1, i = '<tr id="fila' + e + '">';
        return i += "<td>" + e + "</td>", i += "<td>" + t.dateS + "</td>", i += "<td>" + t.inicio + "</td>", 
        i += "<td>" + t.termino + "</td>", i += '<td><div class="elimiFile"> <a> Eliminar </a> </div></td>', 
        i += "</tr>";
    }
    function r(t) {
        var e = $(".muestraHorarioP tbody tr").length + 1, i = '<tr id="filap' + e + '">';
        return i += "<td>" + e + "</td>", i += "<td>" + t.dateS + "</td>", i += "<td>" + t.inicio + "</td>", 
        i += "<td>" + t.termino + "</td>", i += '<td><div class="elimiFile"> <a> Eliminar </a> </div></td>', 
        i += "</tr>";
    }
    function l(t) {
        var e = $(".muestraTime tbody tr").length + 1, i = '<tr id="filaR' + e + '">';
        return i += "<td>" + e + "</td>", i += "<td>" + t.dateS + "</td>", i += "<td>" + t.inicio + "</td>", 
        i += "<td>" + t.termino + "</td>", i += '<td><div class="elimiFiles"> <a> Eliminar </a> </div></td>', 
        i += "</tr>";
    }
    $("body").css({
        "margin-bottom": $(".footer").height() + "px"
    }), $(".simple-ajax-popup-align-top").click(function(t) {
        return $(".simple-ajax-popup-align-top").magnificPopup({
            type: "ajax",
            alignTop: !1,
            settings: null,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.',
            overflowY: "scroll"
        }).magnificPopup("open"), !1;
    }), $(".menD").find("ul").find("li").hover(function() {
        $(this).children("ul").stop(), $(this).children("ul").slideDown();
    }, function() {
        $(this).children("ul").stop(), $(this).children("ul").slideUp();
    }), $(".raro").css({
        "padding-top": $(".local").height() - $(".contenedorRegistro").height() + $(".titulo").height() + "px"
    }), $("#textUser").click(function(t) {
        $(".formularioUsuario").slideDown(), $(".formularioInicio").slideUp();
    }), $("#textCount").click(function(t) {
        $(".formularioInicio").slideDown(), $(".formularioUsuario").slideUp();
    }), $("#calendario").multiDatesPicker({
        minDate: 0,
        maxDate: 365,
        firstDay: 0,
        closeText: "Cerrar",
        prevText: "Anterior",
        nextText: "Siguiente",
        currentText: "Hoy",
        monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
        monthNamesShort: [ "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic" ],
        dayNames: [ "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado" ],
        dayNamesShort: [ "Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb" ],
        dayNamesMin: [ "Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá" ],
        weekHeader: "Sm",
        dateFormat: "dd/mm/yy"
    }), function(t, e, i, n) {
        t(".inputfile").each(function() {
            var e = t(this), i = e.next("label");
            e.on("change", function(t) {
                var e = "";
                t.target.value && (e = t.target.value.split("\\").pop()), e && i.find("span").html(e);
            });
        });
    }(jQuery, window, document);
    var u = $(".colum").width() / 12 * 5;
    $(".colimg").css({
        height: u + "px"
    }), $(".colimg").css({
        width: u + "px"
    });
    var h = $(".bloqueEvento").width() / 15 * 3;
    $(".ilustracion").css({
        height: h + "px"
    }), $(".ilustracion").css({
        width: h + "px"
    }), $("#file-input").change(function(e) {
        t(e);
    }), $("#fileInput").change(function(t) {
        i(t);
    }), $("#fileInputP").change(function(t) {
        s(t);
    }), $(".agregarPeriodo a").on("click", function(t) {
        t.preventDefault(), $(this).prop("disabled", !1);
        var e = "", i = "", n = "";
        if (i += $("#HoraInicio").val(), n += $("#HoraTermino").val(), "" != (e += $("#calendario").multiDatesPicker("getDates")) && "" != i && "" != n) {
            $(".muestraHorario").css("display", "block");
            var s = $("#idDiasEv").val(), o = e.split(","), r = '<div class="selHour"> <select id=time' + s + ">";
            s++, $("#idDiasEv").val(s);
            for (var l = 0; l < o.length; l++) r += '<option value="' + o[l] + '">' + o[l] + "</option>";
            var u = a({
                dateS: r += "</select> </div>",
                inicio: $("#HoraInicio").val(),
                termino: $("#HoraTermino").val()
            });
            $(".muestraHorario table tbody").append(u), $("#calendario").multiDatesPicker("resetDates", "picked");
        } else alert("Ingrese datos antes");
    }), $(".muestraHorario").on("click", "tbody tr .elimiFile", function(t) {
        t.preventDefault(), $(this).closest("tr").remove();
        var e, i, n = [], s = -1;
        $(".muestraHorario tbody tr").each(function() {
            $(this).find("td").each(function() {
                n[++s] = $(this).html();
            });
        });
        var o = n.length;
        if (s > 0) {
            for (i = 0, s = 0; s <= o; s += 5) if (i++, (e = parseInt(n[s])) != i && e > 0) {
                var a = "#fila" + e, r = '<tr id="fila' + i + '">';
                r += "<td>" + i + "</td>", r += "<td>" + n[s + 1] + "</td>", r += "<td>" + n[s + 2] + "</td>", 
                r += "<td>" + n[s + 3] + "</td>", r += '<td><div class="elimiFile"> <a> Eliminar </a> </div></td>', 
                r += "</tr>", $(".muestraHorario table tbody").append(r), $(a).closest("tr").remove();
            }
        } else $(".muestraHorario").css("display", "none");
    }), $(".agregarPeriodoP a").on("click", function(t) {
        t.preventDefault(), $(this).prop("disabled", !1);
        var e = "", i = "", n = "";
        if (i += $("#HoraInicioP").val(), n += $("#HoraTerminoP").val(), "" != (e += $("#calendario").multiDatesPicker("getDates")) && "" != i && "" != n) {
            $(".muestraHorarioP").css("display", "block");
            var s = $("#idDiasP").val(), o = e.split(","), a = '<div class="selHourP"> <select id=timep' + s + ">";
            s++, $("#idDiasP").val(s);
            for (var l = 0; l < o.length; l++) a += '<option value="' + o[l] + '">' + o[l] + "</option>";
            var u = r({
                dateS: a += "</select> </div>",
                inicio: $("#HoraInicioP").val(),
                termino: $("#HoraTerminoP").val()
            });
            $(".muestraHorarioP table tbody").append(u), $("#calendario").multiDatesPicker("resetDates", "picked");
        } else alert("Ingrese datos antes");
    }), $(".muestraHorarioP").on("click", "tbody tr .elimiFile", function(t) {
        t.preventDefault(), $(this).closest("tr").remove();
        var e, i, n = [], s = -1;
        $(".muestraHorarioP tbody tr").each(function() {
            $(this).find("td").each(function() {
                n[++s] = $(this).html();
            });
        });
        var o = n.length;
        if (s > 0) {
            for (i = 0, s = 0; s <= o; s += 5) if (i++, (e = parseInt(n[s])) != i && e > 0) {
                var a = "#filap" + e, r = '<tr id="filap' + i + '">';
                r += "<td>" + i + "</td>", r += "<td>" + n[s + 1] + "</td>", r += "<td>" + n[s + 2] + "</td>", 
                r += "<td>" + n[s + 3] + "</td>", r += '<td><div class="elimiFile"> <a> Eliminar </a> </div></td>', 
                r += "</tr>", $(".muestraHorarioP table tbody").append(r), $(a).closest("tr").remove();
            }
        } else $(".muestraHorarioP").css("display", "none");
    }), $(".agregarHorario a").on("click", function(t) {
        var e = "", i = "", n = "", s = $("#idDias").val(), o = '<div class="selDay"> <select id=dias' + s + ">";
        if (s++, $("#idDias").val(s), $(".contenedorDias input:checkbox:checked").each(function() {
            n += $(this).val(), o += '<option value="' + $(this).val() + '">' + $(this).val() + "</option>";
        }), e += $("#HoraInicioE").val(), i += $("#HoraTerminoE").val(), o += "</select> </div>", 
        "" != n && "" != e && "" != i) {
            $(".muestraTime").css("display", "block");
            var a = l({
                dateS: o,
                inicio: $("#HoraInicioE").val(),
                termino: $("#HoraTerminoE").val()
            });
            $(".muestraTime table tbody").append(a), $(".contenedorDias input:checkbox").each(function() {
                $(this).prop("checked", !1);
            });
        } else alert("Ingrese datos antes");
    }), $(".muestraTime").on("click", "tbody tr .elimiFiles", function(t) {
        t.preventDefault(), $(this).closest("tr").remove();
        var e, i, n = [], s = -1;
        $(".muestraTime tbody tr").each(function() {
            $(this).find("td").each(function() {
                n[++s] = $(this).html();
            });
        });
        var o = n.length;
        if (s > 0) {
            for (i = 0, s = 0; s <= o; s += 5) if (i++, (e = parseInt(n[s])) != i && e > 0) {
                var a = "#filaR" + e, r = '<tr id="filaR' + i + '">';
                r += "<td>" + i + "</td>", r += "<td>" + n[s + 1] + "</td>", r += "<td>" + n[s + 2] + "</td>", 
                r += "<td>" + n[s + 3] + "</td>", r += '<td><div class="elimiFiles"> <a> Eliminar </a> </div></td>', 
                r += "</tr>", $(".muestraTime table tbody").append(r), $(a).closest("tr").remove();
            }
        } else $(".muestraTime").css("display", "none");
    }), $("#categorias").multipleSelect({
        multiple: !0,
        multipleWidth: 150,
        width: "100%"
    }), $(".userImage").css({
        height: $(".imagen").width() + "px"
    }), $(".userImage").css({
        width: $(".imagen").width() + "px"
    }), $(".eventoTitulo").click(function(t) {
        t.preventDefault();
        var e = $(this).next(".bloqueEvento");
        "none" == e.css("display") ? (e.slideDown(400), $(this).addClass("open")) : (e.slideUp(400), 
        $(this).removeClass("open"));
    });
}), $("#r").on("click", function(t) {
    resultadoAnio(2018);
}), $("#diasEvento select[name=dias]").change(function(t) {
    alert("jin");
    var e = $(".contenidoSelect select[name=dias] option:selected").val();
    $("select[name=hora] > option[value=" + e + "]").attr("selected", !0);
});