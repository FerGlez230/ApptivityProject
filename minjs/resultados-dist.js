(function() {
    "use strict";
    var t = this, e = t.Chart, n = function(t) {
        return this.canvas = t.canvas, this.ctx = t, this.width = t.canvas.width, this.height = t.canvas.height, 
        this.aspectRatio = this.width / this.height, i.retinaScale(this), this;
    };
    n.defaults = {
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
    }, n.types = {};
    var i = n.helpers = {}, o = i.each = function(t, e, n) {
        var i = Array.prototype.slice.call(arguments, 3);
        if (t) if (t.length === +t.length) {
            var o;
            for (o = 0; o < t.length; o++) e.apply(n, [ t[o], o ].concat(i));
        } else for (var r in t) e.apply(n, [ t[r], r ].concat(i));
    }, r = i.clone = function(t) {
        var e = {};
        return o(t, function(n, i) {
            t.hasOwnProperty(i) && (e[i] = n);
        }), e;
    }, s = i.extend = function(t) {
        return o(Array.prototype.slice.call(arguments, 1), function(e) {
            o(e, function(n, i) {
                e.hasOwnProperty(i) && (t[i] = n);
            });
        }), t;
    }, a = i.merge = function() {
        var t = Array.prototype.slice.call(arguments, 0);
        return t.unshift({}), s.apply(null, t);
    }, l = i.indexOf = function(t, e) {
        if (Array.prototype.indexOf) return t.indexOf(e);
        for (var n = 0; n < t.length; n++) if (t[n] === e) return n;
        return -1;
    }, c = (i.where = function(t, e) {
        var n = [];
        return i.each(t, function(t) {
            e(t) && n.push(t);
        }), n;
    }, i.findNextWhere = function(t, e, n) {
        n || (n = -1);
        for (var i = n + 1; i < t.length; i++) {
            var o = t[i];
            if (e(o)) return o;
        }
    }, i.findPreviousWhere = function(t, e, n) {
        n || (n = t.length);
        for (var i = n - 1; i >= 0; i--) {
            var o = t[i];
            if (e(o)) return o;
        }
    }, i.inherits = function(t) {
        var e = this, n = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
            return e.apply(this, arguments);
        }, i = function() {
            this.constructor = n;
        };
        return i.prototype = e.prototype, n.prototype = new i(), n.extend = c, t && s(n.prototype, t), 
        n.__super__ = e.prototype, n;
    }), u = i.noop = function() {}, h = i.uid = function() {
        var t = 0;
        return function() {
            return "chart-" + t++;
        };
    }(), d = i.warn = function(t) {
        window.console && "function" == typeof window.console.warn && console.warn(t);
    }, f = i.amd = "function" == typeof define && define.amd, p = i.isNumber = function(t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
    }, g = i.max = function(t) {
        return Math.max.apply(Math, t);
    }, m = i.min = function(t) {
        return Math.min.apply(Math, t);
    }, v = (i.cap = function(t, e, n) {
        if (p(e)) {
            if (t > e) return e;
        } else if (p(n) && n > t) return n;
        return t;
    }, i.getDecimalPlaces = function(t) {
        return t % 1 != 0 && p(t) ? t.toString().split(".")[1].length : 0;
    }), y = i.radians = function(t) {
        return t * (Math.PI / 180);
    }, x = (i.getAngleFromPoint = function(t, e) {
        var n = e.x - t.x, i = e.y - t.y, o = Math.sqrt(n * n + i * i), r = 2 * Math.PI + Math.atan2(i, n);
        return 0 > n && 0 > i && (r += 2 * Math.PI), {
            angle: r,
            distance: o
        };
    }, i.aliasPixel = function(t) {
        return t % 2 == 0 ? 0 : .5;
    }), b = (i.splineCurve = function(t, e, n, i) {
        var o = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)), r = Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2)), s = i * o / (o + r), a = i * r / (o + r);
        return {
            inner: {
                x: e.x - s * (n.x - t.x),
                y: e.y - s * (n.y - t.y)
            },
            outer: {
                x: e.x + a * (n.x - t.x),
                y: e.y + a * (n.y - t.y)
            }
        };
    }, i.calculateOrderOfMagnitude = function(t) {
        return Math.floor(Math.log(t) / Math.LN10);
    }), w = (i.calculateScaleRange = function(t, e, n, i, o) {
        var r = Math.floor(e / (1.5 * n)), s = 2 >= r, a = g(t), l = m(t);
        a === l && (a += .5, l >= .5 && !i ? l -= .5 : a += .5);
        for (var c = Math.abs(a - l), u = b(c), h = Math.ceil(a / (1 * Math.pow(10, u))) * Math.pow(10, u), d = i ? 0 : Math.floor(l / (1 * Math.pow(10, u))) * Math.pow(10, u), f = h - d, p = Math.pow(10, u), v = Math.round(f / p); (v > r || r > 2 * v) && !s; ) if (v > r) p *= 2, 
        (v = Math.round(f / p)) % 1 != 0 && (s = !0); else if (o && u >= 0) {
            if (p / 2 % 1 != 0) break;
            p /= 2, v = Math.round(f / p);
        } else p /= 2, v = Math.round(f / p);
        return s && (v = 2, p = f / v), {
            steps: v,
            stepValue: p,
            min: d,
            max: d + v * p
        };
    }, i.template = function(t, e) {
        if (t instanceof Function) return t(e);
        var n = {};
        return function(t, e) {
            var i = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : n[t] = n[t];
            return e ? i(e) : i;
        }(t, e);
    }), C = (i.generateLabels = function(t, e, n, i) {
        var r = new Array(e);
        return labelTemplateString && o(r, function(e, o) {
            r[o] = w(t, {
                value: n + i * (o + 1)
            });
        }), r;
    }, i.easingEffects = {
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
            var e = 1.70158, n = 0, i = 1;
            return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, 
            e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / n));
        },
        easeOutElastic: function(t) {
            var e = 1.70158, n = 0, i = 1;
            return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (n || (n = .3), i < Math.abs(1) ? (i = 1, 
            e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin(2 * (1 * t - e) * Math.PI / n) + 1);
        },
        easeInOutElastic: function(t) {
            var e = 1.70158, n = 0, i = 1;
            return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .3 * 1.5), i < Math.abs(1) ? (i = 1, 
            e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), 1 > t ? -.5 * i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / n) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / n) * .5 + 1);
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
            return 1 - C.easeOutBounce(1 - t);
        },
        easeOutBounce: function(t) {
            return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
        },
        easeInOutBounce: function(t) {
            return .5 > t ? .5 * C.easeInBounce(2 * t) : .5 * C.easeOutBounce(2 * t - 1) + .5;
        }
    }), S = i.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
            return window.setTimeout(t, 1e3 / 60);
        };
    }(), T = (i.cancelAnimFrame = function() {
        return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
            return window.clearTimeout(t, 1e3 / 60);
        };
    }(), i.animationLoop = function(t, e, n, i, o, r) {
        var s = 0, a = C[n] || C.linear, l = function() {
            var n = ++s / e, c = a(n);
            t.call(r, c, n, s), i.call(r, c, n), e > s ? r.animationFrame = S(l) : o.apply(r);
        };
        S(l);
    }, i.getRelativePosition = function(t) {
        var e, n, i = t.originalEvent || t, o = (t.currentTarget || t.srcElement).getBoundingClientRect();
        return i.touches ? (e = i.touches[0].clientX - o.left, n = i.touches[0].clientY - o.top) : (e = i.clientX - o.left, 
        n = i.clientY - o.top), {
            x: e,
            y: n
        };
    }, i.addEvent = function(t, e, n) {
        t.addEventListener ? t.addEventListener(e, n) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = n;
    }), k = i.removeEvent = function(t, e, n) {
        t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent ? t.detachEvent("on" + e, n) : t["on" + e] = u;
    }, A = (i.bindEvents = function(t, e, n) {
        t.events || (t.events = {}), o(e, function(e) {
            t.events[e] = function() {
                n.apply(t, arguments);
            }, T(t.chart.canvas, e, t.events[e]);
        });
    }, i.unbindEvents = function(t, e) {
        o(e, function(e, n) {
            k(t.chart.canvas, n, e);
        });
    }), E = i.getMaximumWidth = function(t) {
        return t.parentNode.clientWidth;
    }, L = i.getMaximumHeight = function(t) {
        return t.parentNode.clientHeight;
    }, N = (i.getMaximumSize = i.getMaximumWidth, i.retinaScale = function(t) {
        var e = t.ctx, n = t.canvas.width, i = t.canvas.height;
        window.devicePixelRatio && (e.canvas.style.width = n + "px", e.canvas.style.height = i + "px", 
        e.canvas.height = i * window.devicePixelRatio, e.canvas.width = n * window.devicePixelRatio, 
        e.scale(window.devicePixelRatio, window.devicePixelRatio));
    }), D = i.clear = function(t) {
        t.ctx.clearRect(0, 0, t.width, t.height);
    }, P = i.fontString = function(t, e, n) {
        return e + " " + t + "px " + n;
    }, F = i.longestText = function(t, e, n) {
        t.font = e;
        var i = 0;
        return o(n, function(e) {
            var n = t.measureText(e).width;
            i = n > i ? n : i;
        }), i;
    }, j = i.drawRoundedRectangle = function(t, e, n, i, o, r) {
        t.beginPath(), t.moveTo(e + r, n), t.lineTo(e + i - r, n), t.quadraticCurveTo(e + i, n, e + i, n + r), 
        t.lineTo(e + i, n + o - r), t.quadraticCurveTo(e + i, n + o, e + i - r, n + o), 
        t.lineTo(e + r, n + o), t.quadraticCurveTo(e, n + o, e, n + o - r), t.lineTo(e, n + r), 
        t.quadraticCurveTo(e, n, e + r, n), t.closePath();
    };
    n.instances = {}, n.Type = function(t, e, i) {
        this.options = e, this.chart = i, this.id = h(), n.instances[this.id] = this, e.responsive && this.resize(), 
        this.initialize.call(this, t);
    }, s(n.Type.prototype, {
        initialize: function() {
            return this;
        },
        clear: function() {
            return D(this.chart), this;
        },
        stop: function() {
            return i.cancelAnimFrame.call(t, this.animationFrame), this;
        },
        resize: function(t) {
            this.stop();
            var e = this.chart.canvas, n = E(this.chart.canvas), i = this.options.maintainAspectRatio ? n / this.chart.aspectRatio : L(this.chart.canvas);
            return e.width = this.chart.width = n, e.height = this.chart.height = i, N(this.chart), 
            "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)), 
            this;
        },
        reflow: u,
        render: function(t) {
            return t && this.reflow(), this.options.animation && !t ? i.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), 
            this.options.onAnimationComplete.call(this)), this;
        },
        generateLegend: function() {
            return w(this.options.legendTemplate, this);
        },
        destroy: function() {
            this.clear(), A(this, this.events);
            var t = this.chart.canvas;
            t.width = this.chart.width, t.height = this.chart.height, t.style.removeProperty ? (t.style.removeProperty("width"), 
            t.style.removeProperty("height")) : (t.style.removeAttribute("width"), t.style.removeAttribute("height")), 
            delete n.instances[this.id];
        },
        showTooltip: function(t, e) {
            if (void 0 === this.activeElements && (this.activeElements = []), function(t) {
                var e = !1;
                return t.length !== this.activeElements.length ? e = !0 : (o(t, function(t, n) {
                    t !== this.activeElements[n] && (e = !0);
                }, this), e);
            }.call(this, t) || e) {
                if (this.activeElements = t, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), 
                t.length > 0) if (this.datasets && this.datasets.length > 1) {
                    for (var r, s, a = this.datasets.length - 1; a >= 0 && (r = this.datasets[a].points || this.datasets[a].bars || this.datasets[a].segments, 
                    -1 === (s = l(r, t[0]))); a--) ;
                    var c = [], u = [], h = function() {
                        var t, e, n, o, r, a = [], l = [], h = [];
                        return i.each(this.datasets, function(e) {
                            (t = e.points || e.bars || e.segments)[s] && t[s].hasValue() && a.push(t[s]);
                        }), i.each(a, function(t) {
                            l.push(t.x), h.push(t.y), c.push(i.template(this.options.multiTooltipTemplate, t)), 
                            u.push({
                                fill: t._saved.fillColor || t.fillColor,
                                stroke: t._saved.strokeColor || t.strokeColor
                            });
                        }, this), r = m(h), n = g(h), o = m(l), e = g(l), {
                            x: o > this.chart.width / 2 ? o : e,
                            y: (r + n) / 2
                        };
                    }.call(this, s);
                    new n.MultiTooltip({
                        x: h.x,
                        y: h.y,
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
                        labels: c,
                        legendColors: u,
                        legendColorBackground: this.options.multiTooltipKeyBackground,
                        title: t[0].label,
                        chart: this.chart,
                        ctx: this.chart.ctx,
                        custom: this.options.customTooltips
                    }).draw();
                } else o(t, function(t) {
                    var e = t.tooltipPosition();
                    new n.Tooltip({
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
                        text: w(this.options.tooltipTemplate, t),
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
    }), n.Type.extend = function(t) {
        var e = this, i = function() {
            return e.apply(this, arguments);
        };
        if (i.prototype = r(e.prototype), s(i.prototype, t), i.extend = n.Type.extend, t.name || e.prototype.name) {
            var o = t.name || e.prototype.name, l = n.defaults[e.prototype.name] ? r(n.defaults[e.prototype.name]) : {};
            n.defaults[o] = s(l, t.defaults), n.types[o] = i, n.prototype[o] = function(t, e) {
                var r = a(n.defaults.global, n.defaults[o], e || {});
                return new i(t, r, this);
            };
        } else d("Name not provided for this chart, so it hasn't been registered");
        return e;
    }, n.Element = function(t) {
        s(this, t), this.initialize.apply(this, arguments), this.save();
    }, s(n.Element.prototype, {
        initialize: function() {},
        restore: function(t) {
            return t ? o(t, function(t) {
                this[t] = this._saved[t];
            }, this) : s(this, this._saved), this;
        },
        save: function() {
            return this._saved = r(this), delete this._saved._saved, this;
        },
        update: function(t) {
            return o(t, function(t, e) {
                this._saved[e] = this[e], this[e] = t;
            }, this), this;
        },
        transition: function(t, e) {
            return o(t, function(t, n) {
                this[n] = (t - this._saved[n]) * e + this._saved[n];
            }, this), this;
        },
        tooltipPosition: function() {
            return {
                x: this.x,
                y: this.y
            };
        },
        hasValue: function() {
            return p(this.value);
        }
    }), n.Element.extend = c, n.Point = n.Element.extend({
        display: !0,
        inRange: function(t, e) {
            var n = this.hitDetectionRadius + this.radius;
            return Math.pow(t - this.x, 2) + Math.pow(e - this.y, 2) < Math.pow(n, 2);
        },
        draw: function() {
            if (this.display) {
                var t = this.ctx;
                t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), t.closePath(), 
                t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, 
                t.fill(), t.stroke();
            }
        }
    }), n.Arc = n.Element.extend({
        inRange: function(t, e) {
            var n = i.getAngleFromPoint(this, {
                x: t,
                y: e
            }), o = n.angle >= this.startAngle && n.angle <= this.endAngle, r = n.distance >= this.innerRadius && n.distance <= this.outerRadius;
            return o && r;
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
    }), n.Rectangle = n.Element.extend({
        draw: function() {
            var t = this.ctx, e = this.width / 2, n = this.x - e, i = this.x + e, o = this.base - (this.base - this.y), r = this.strokeWidth / 2;
            this.showStroke && (n += r, i -= r, o += r), t.beginPath(), t.fillStyle = this.fillColor, 
            t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(n, this.base), 
            t.lineTo(n, o), t.lineTo(i, o), t.lineTo(i, this.base), t.fill(), this.showStroke && t.stroke();
        },
        height: function() {
            return this.base - this.y;
        },
        inRange: function(t, e) {
            return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && e >= this.y && e <= this.base;
        }
    }), n.Tooltip = n.Element.extend({
        draw: function() {
            var t = this.chart.ctx;
            t.font = P(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", 
            this.yAlign = "above";
            var e = this.caretPadding = 2, n = t.measureText(this.text).width + 2 * this.xPadding, i = this.fontSize + 2 * this.yPadding, o = i + this.caretHeight + e;
            this.x + n / 2 > this.chart.width ? this.xAlign = "left" : this.x - n / 2 < 0 && (this.xAlign = "right"), 
            this.y - o < 0 && (this.yAlign = "below");
            var r = this.x - n / 2, s = this.y - o;
            if (t.fillStyle = this.fillColor, this.custom) this.custom(this); else {
                switch (this.yAlign) {
                  case "above":
                    t.beginPath(), t.moveTo(this.x, this.y - e), t.lineTo(this.x + this.caretHeight, this.y - (e + this.caretHeight)), 
                    t.lineTo(this.x - this.caretHeight, this.y - (e + this.caretHeight)), t.closePath(), 
                    t.fill();
                    break;

                  case "below":
                    s = this.y + e + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + e), 
                    t.lineTo(this.x + this.caretHeight, this.y + e + this.caretHeight), t.lineTo(this.x - this.caretHeight, this.y + e + this.caretHeight), 
                    t.closePath(), t.fill();
                }
                switch (this.xAlign) {
                  case "left":
                    r = this.x - n + (this.cornerRadius + this.caretHeight);
                    break;

                  case "right":
                    r = this.x - (this.cornerRadius + this.caretHeight);
                }
                j(t, r, s, n, i, this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", 
                t.textBaseline = "middle", t.fillText(this.text, r + n / 2, s + i / 2);
            }
        }
    }), n.MultiTooltip = n.Element.extend({
        initialize: function() {
            this.font = P(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = P(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), 
            this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize, 
            this.ctx.font = this.titleFont;
            var t = this.ctx.measureText(this.title).width, e = F(this.ctx, this.font, this.labels) + this.fontSize + 3, n = g([ e, t ]);
            this.width = n + 2 * this.xPadding;
            var i = this.height / 2;
            this.y - i < 0 ? this.y = i : this.y + i > this.chart.height && (this.y = this.chart.height - i), 
            this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset;
        },
        getLineHeight: function(t) {
            var e = this.y - this.height / 2 + this.yPadding, n = t - 1;
            return 0 === t ? e + this.titleFontSize / 2 : e + (1.5 * this.fontSize * n + this.fontSize / 2) + 1.5 * this.titleFontSize;
        },
        draw: function() {
            if (this.custom) this.custom(this); else {
                j(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                var t = this.ctx;
                t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", 
                t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), 
                t.font = this.font, i.each(this.labels, function(e, n) {
                    t.fillStyle = this.textColor, t.fillText(e, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(n + 1)), 
                    t.fillStyle = this.legendColorBackground, t.fillRect(this.x + this.xPadding, this.getLineHeight(n + 1) - this.fontSize / 2, this.fontSize, this.fontSize), 
                    t.fillStyle = this.legendColors[n].fill, t.fillRect(this.x + this.xPadding, this.getLineHeight(n + 1) - this.fontSize / 2, this.fontSize, this.fontSize);
                }, this);
            }
        }
    }), n.Scale = n.Element.extend({
        initialize: function() {
            this.fit();
        },
        buildYLabels: function() {
            this.yLabels = [];
            for (var t = v(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(w(this.templateString, {
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
            var t, e = this.ctx.measureText(this.xLabels[0]).width, n = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
            if (this.xScalePaddingRight = n / 2 + 3, this.xScalePaddingLeft = e / 2 > this.yLabelWidth + 10 ? e / 2 : this.yLabelWidth + 10, 
            this.xLabelRotation = 0, this.display) {
                var i, o = F(this.ctx, this.font, this.xLabels);
                this.xLabelWidth = o;
                for (var r = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > r && 0 === this.xLabelRotation || this.xLabelWidth > r && this.xLabelRotation <= 90 && this.xLabelRotation > 0; ) i = Math.cos(y(this.xLabelRotation)), 
                t = i * e, i * n, t + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = t + this.fontSize / 2), 
                this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = i * o;
                this.xLabelRotation > 0 && (this.endPoint -= Math.sin(y(this.xLabelRotation)) * o + 3);
            } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding;
        },
        calculateYRange: u,
        drawingArea: function() {
            return this.startPoint - this.endPoint;
        },
        calculateY: function(t) {
            var e = this.drawingArea() / (this.min - this.max);
            return this.endPoint - e * (t - this.min);
        },
        calculateX: function(t) {
            var e = (this.xLabelRotation, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)) / (this.valuesCount - (this.offsetGridLines ? 0 : 1)), n = e * t + this.xScalePaddingLeft;
            return this.offsetGridLines && (n += e / 2), Math.round(n);
        },
        update: function(t) {
            i.extend(this, t), this.fit();
        },
        draw: function() {
            var t = this.ctx, e = (this.endPoint - this.startPoint) / this.steps, n = Math.round(this.xScalePaddingLeft);
            this.display && (t.fillStyle = this.textColor, t.font = this.font, o(this.yLabels, function(o, r) {
                var s = this.endPoint - e * r, a = Math.round(s), l = this.showHorizontalLines;
                t.textAlign = "right", t.textBaseline = "middle", this.showLabels && t.fillText(o, n - 10, s), 
                0 !== r || l || (l = !0), l && t.beginPath(), r > 0 ? (t.lineWidth = this.gridLineWidth, 
                t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), 
                a += i.aliasPixel(t.lineWidth), l && (t.moveTo(n, a), t.lineTo(this.width, a), t.stroke(), 
                t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), 
                t.moveTo(n - 5, a), t.lineTo(n, a), t.stroke(), t.closePath();
            }, this), o(this.xLabels, function(e, n) {
                var i = this.calculateX(n) + x(this.lineWidth), o = this.calculateX(n - (this.offsetGridLines ? .5 : 0)) + x(this.lineWidth), r = this.xLabelRotation > 0, s = this.showVerticalLines;
                0 !== n || s || (s = !0), s && t.beginPath(), n > 0 ? (t.lineWidth = this.gridLineWidth, 
                t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), 
                s && (t.moveTo(o, this.endPoint), t.lineTo(o, this.startPoint - 3), t.stroke(), 
                t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), 
                t.moveTo(o, this.endPoint), t.lineTo(o, this.endPoint + 5), t.stroke(), t.closePath(), 
                t.save(), t.translate(i, r ? this.endPoint + 12 : this.endPoint + 8), t.rotate(-1 * y(this.xLabelRotation)), 
                t.font = this.font, t.textAlign = r ? "right" : "center", t.textBaseline = r ? "middle" : "top", 
                t.fillText(e, 0, 0), t.restore();
            }, this));
        }
    }), n.RadialScale = n.Element.extend({
        initialize: function() {
            this.size = m([ this.height, this.width ]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2;
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
            for (var t = v(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(w(this.templateString, {
                value: (this.min + e * this.stepValue).toFixed(t)
            }));
        },
        getCircumference: function() {
            return 2 * Math.PI / this.valuesCount;
        },
        setScaleSize: function() {
            var t, e, n, i, o, r, s, a, l, c, u, h, d = m([ this.height / 2 - this.pointLabelFontSize - 5, this.width / 2 ]), f = this.width, g = 0;
            for (this.ctx.font = P(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), 
            e = 0; e < this.valuesCount; e++) t = this.getPointPosition(e, d), n = this.ctx.measureText(w(this.templateString, {
                value: this.labels[e]
            })).width + 5, 0 === e || e === this.valuesCount / 2 ? (i = n / 2, t.x + i > f && (f = t.x + i, 
            o = e), t.x - i < g && (g = t.x - i, s = e)) : e < this.valuesCount / 2 ? t.x + n > f && (f = t.x + n, 
            o = e) : e > this.valuesCount / 2 && t.x - n < g && (g = t.x - n, s = e);
            l = g, c = Math.ceil(f - this.width), r = this.getIndexAngle(o), a = this.getIndexAngle(s), 
            u = c / Math.sin(r + Math.PI / 2), h = l / Math.sin(a + Math.PI / 2), u = p(u) ? u : 0, 
            h = p(h) ? h : 0, this.drawingArea = d - (h + u) / 2, this.setCenterPoint(h, u);
        },
        setCenterPoint: function(t, e) {
            var n = this.width - e - this.drawingArea, i = t + this.drawingArea;
            this.xCenter = (i + n) / 2, this.yCenter = this.height / 2;
        },
        getIndexAngle: function(t) {
            return t * (2 * Math.PI / this.valuesCount) - Math.PI / 2;
        },
        getPointPosition: function(t, e) {
            var n = this.getIndexAngle(t);
            return {
                x: Math.cos(n) * e + this.xCenter,
                y: Math.sin(n) * e + this.yCenter
            };
        },
        draw: function() {
            if (this.display) {
                var t = this.ctx;
                if (o(this.yLabels, function(e, n) {
                    if (n > 0) {
                        var i, o = n * (this.drawingArea / this.steps), r = this.yCenter - o;
                        if (this.lineWidth > 0) if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, 
                        this.lineArc) t.beginPath(), t.arc(this.xCenter, this.yCenter, o, 0, 2 * Math.PI), 
                        t.closePath(), t.stroke(); else {
                            t.beginPath();
                            for (var s = 0; s < this.valuesCount; s++) i = this.getPointPosition(s, this.calculateCenterOffset(this.min + n * this.stepValue)), 
                            0 === s ? t.moveTo(i.x, i.y) : t.lineTo(i.x, i.y);
                            t.closePath(), t.stroke();
                        }
                        if (this.showLabels) {
                            if (t.font = P(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                var a = t.measureText(e).width;
                                t.fillStyle = this.backdropColor, t.fillRect(this.xCenter - a / 2 - this.backdropPaddingX, r - this.fontSize / 2 - this.backdropPaddingY, a + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY);
                            }
                            t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, 
                            t.fillText(e, this.xCenter, r);
                        }
                    }
                }, this), !this.lineArc) {
                    t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;
                    for (var e = this.valuesCount - 1; e >= 0; e--) {
                        if (this.angleLineWidth > 0) {
                            var n = this.getPointPosition(e, this.calculateCenterOffset(this.max));
                            t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(n.x, n.y), t.stroke(), 
                            t.closePath();
                        }
                        var i = this.getPointPosition(e, this.calculateCenterOffset(this.max) + 5);
                        t.font = P(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), 
                        t.fillStyle = this.pointLabelFontColor;
                        var r = this.labels.length, s = this.labels.length / 2, a = s / 2, l = a > e || e > r - a, c = e === a || e === r - a;
                        t.textAlign = 0 === e ? "center" : e === s ? "center" : s > e ? "left" : "right", 
                        t.textBaseline = c ? "middle" : l ? "bottom" : "top", t.fillText(this.labels[e], i.x, i.y);
                    }
                }
            }
        }
    }), i.addEvent(window, "resize", function() {
        var t;
        return function() {
            clearTimeout(t), t = setTimeout(function() {
                o(n.instances, function(t) {
                    t.options.responsive && t.resize(t.render, !0);
                });
            }, 50);
        };
    }()), f ? define(function() {
        return n;
    }) : "object" == typeof module && module.exports && (module.exports = n), t.Chart = n, 
    n.noConflict = function() {
        return t.Chart = e, n;
    };
}).call(this), function() {
    "use strict";
    var t = this.Chart, e = t.helpers, n = {
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
        defaults: n,
        initialize: function(n) {
            var i = this.options;
            this.ScaleClass = t.Scale.extend({
                offsetGridLines: !0,
                calculateBarX: function(t, e, n) {
                    var o = this.calculateBaseWidth(), r = this.calculateX(n) - o / 2, s = this.calculateBarWidth(t);
                    return r + s * e + e * i.barDatasetSpacing + s / 2;
                },
                calculateBaseWidth: function() {
                    return this.calculateX(1) - this.calculateX(0) - 2 * i.barValueSpacing;
                },
                calculateBarWidth: function(t) {
                    return (this.calculateBaseWidth() - (t - 1) * i.barDatasetSpacing) / t;
                }
            }), this.datasets = [], this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
                var n = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
                this.eachBars(function(t) {
                    t.restore([ "fillColor", "strokeColor" ]);
                }), e.each(n, function(t) {
                    t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke;
                }), this.showTooltip(n);
            }), this.BarClass = t.Rectangle.extend({
                strokeWidth: this.options.barStrokeWidth,
                showStroke: this.options.barShowStroke,
                ctx: this.chart.ctx
            }), e.each(n.datasets, function(t) {
                var i = {
                    label: t.label || null,
                    fillColor: t.fillColor,
                    strokeColor: t.strokeColor,
                    bars: []
                };
                this.datasets.push(i), e.each(t.data, function(e, o) {
                    i.bars.push(new this.BarClass({
                        value: e,
                        label: n.labels[o],
                        datasetLabel: t.label,
                        strokeColor: t.strokeColor,
                        fillColor: t.fillColor,
                        highlightFill: t.highlightFill || t.fillColor,
                        highlightStroke: t.highlightStroke || t.strokeColor
                    }));
                }, this);
            }, this), this.buildScale(n.labels), this.BarClass.prototype.base = this.scale.endPoint, 
            this.eachBars(function(t, n, i) {
                e.extend(t, {
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    x: this.scale.calculateBarX(this.datasets.length, i, n),
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
            e.each(this.datasets, function(n, i) {
                e.each(n.bars, t, this, i);
            }, this);
        },
        getBarsAtEvent: function(t) {
            for (var n, i = [], o = e.getRelativePosition(t), r = function(t) {
                i.push(t.bars[n]);
            }, s = 0; s < this.datasets.length; s++) for (n = 0; n < this.datasets[s].bars.length; n++) if (this.datasets[s].bars[n].inRange(o.x, o.y)) return e.each(this.datasets, r), 
            i;
            return i;
        },
        buildScale: function(t) {
            var n = this, i = function() {
                var t = [];
                return n.eachBars(function(e) {
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
                valuesCount: t.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function(t) {
                    var n = e.calculateScaleRange(i(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                    e.extend(this, n);
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
            this.options.scaleOverride && e.extend(o, {
                calculateYRange: e.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            }), this.scale = new this.ScaleClass(o);
        },
        addData: function(t, n) {
            e.each(t, function(t, e) {
                this.datasets[e].bars.push(new this.BarClass({
                    value: t,
                    label: n,
                    x: this.scale.calculateBarX(this.datasets.length, e, this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    base: this.scale.endPoint,
                    strokeColor: this.datasets[e].strokeColor,
                    fillColor: this.datasets[e].fillColor
                }));
            }, this), this.scale.addXLabel(n), this.update();
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
            var n = t || 1;
            this.clear(), this.chart.ctx, this.scale.draw(n), e.each(this.datasets, function(t, i) {
                e.each(t.bars, function(t, e) {
                    t.hasValue() && (t.base = this.scale.endPoint, t.transition({
                        x: this.scale.calculateBarX(this.datasets.length, i, e),
                        y: this.scale.calculateY(t.value),
                        width: this.scale.calculateBarWidth(this.datasets.length)
                    }, n).draw());
                }, this);
            }, this);
        }
    });
}.call(this), function() {
    "use strict";
    var t = this.Chart, e = t.helpers, n = {
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
        defaults: n,
        initialize: function(n) {
            this.segments = [], this.outerRadius = (e.min([ this.chart.width, this.chart.height ]) - this.options.segmentStrokeWidth / 2) / 2, 
            this.SegmentArc = t.Arc.extend({
                ctx: this.chart.ctx,
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
                var n = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                e.each(this.segments, function(t) {
                    t.restore([ "fillColor" ]);
                }), e.each(n, function(t) {
                    t.fillColor = t.highlightColor;
                }), this.showTooltip(n);
            }), this.calculateTotal(n), e.each(n, function(t, e) {
                this.addData(t, e, !0);
            }, this), this.render();
        },
        getSegmentsAtEvent: function(t) {
            var n = [], i = e.getRelativePosition(t);
            return e.each(this.segments, function(t) {
                t.inRange(i.x, i.y) && n.push(t);
            }, this), n;
        },
        addData: function(t, e, n) {
            var i = e || this.segments.length;
            this.segments.splice(i, 0, new this.SegmentArc({
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
            })), n || (this.reflow(), this.update());
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
            var n = e.isNumber(t) ? t : this.segments.length - 1;
            this.segments.splice(n, 1), this.reflow(), this.update();
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
            var n = t || 1;
            this.clear(), e.each(this.segments, function(t, e) {
                t.transition({
                    circumference: this.calculateCircumference(t.value),
                    outerRadius: this.outerRadius,
                    innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                }, n), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === e && (t.startAngle = 1.5 * Math.PI), 
                e < this.segments.length - 1 && (this.segments[e + 1].startAngle = t.endAngle);
            }, this);
        }
    }), t.types.Doughnut.extend({
        name: "Pie",
        defaults: e.merge(n, {
            percentageInnerCutout: 0
        })
    });
}.call(this), function() {
    "use strict";
    var t = this.Chart, e = t.helpers, n = {
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
        defaults: n,
        initialize: function(n) {
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
                var n = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                this.eachPoints(function(t) {
                    t.restore([ "fillColor", "strokeColor" ]);
                }), e.each(n, function(t) {
                    t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke;
                }), this.showTooltip(n);
            }), e.each(n.datasets, function(t) {
                var i = {
                    label: t.label || null,
                    fillColor: t.fillColor,
                    strokeColor: t.strokeColor,
                    pointColor: t.pointColor,
                    pointStrokeColor: t.pointStrokeColor,
                    points: []
                };
                this.datasets.push(i), e.each(t.data, function(e, o) {
                    i.points.push(new this.PointClass({
                        value: e,
                        label: n.labels[o],
                        datasetLabel: t.label,
                        strokeColor: t.pointStrokeColor,
                        fillColor: t.pointColor,
                        highlightFill: t.pointHighlightFill || t.pointColor,
                        highlightStroke: t.pointHighlightStroke || t.pointStrokeColor
                    }));
                }, this), this.buildScale(n.labels), this.eachPoints(function(t, n) {
                    e.extend(t, {
                        x: this.scale.calculateX(n),
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
            e.each(this.datasets, function(n) {
                e.each(n.points, t, this);
            }, this);
        },
        getPointsAtEvent: function(t) {
            var n = [], i = e.getRelativePosition(t);
            return e.each(this.datasets, function(t) {
                e.each(t.points, function(t) {
                    t.inRange(i.x, i.y) && n.push(t);
                });
            }, this), n;
        },
        buildScale: function(n) {
            var i = this, o = function() {
                var t = [];
                return i.eachPoints(function(e) {
                    t.push(e.value);
                }), t;
            }, r = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: n.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function(t) {
                    var n = e.calculateScaleRange(o(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                    e.extend(this, n);
                },
                xLabels: n,
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
            this.options.scaleOverride && e.extend(r, {
                calculateYRange: e.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            }), this.scale = new t.Scale(r);
        },
        addData: function(t, n) {
            e.each(t, function(t, e) {
                this.datasets[e].points.push(new this.PointClass({
                    value: t,
                    label: n,
                    x: this.scale.calculateX(this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    strokeColor: this.datasets[e].pointStrokeColor,
                    fillColor: this.datasets[e].pointColor
                }));
            }, this), this.scale.addXLabel(n), this.update();
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
            var n = t || 1;
            this.clear();
            var i = this.chart.ctx, o = function(t) {
                return null !== t.value;
            }, r = function(t, n, i) {
                return e.findNextWhere(n, o, i) || t;
            }, s = function(t, n, i) {
                return e.findPreviousWhere(n, o, i) || t;
            };
            this.scale.draw(n), e.each(this.datasets, function(t) {
                var a = e.where(t.points, o);
                e.each(t.points, function(t, e) {
                    t.hasValue() && t.transition({
                        y: this.scale.calculateY(t.value),
                        x: this.scale.calculateX(e)
                    }, n);
                }, this), this.options.bezierCurve && e.each(a, function(t, n) {
                    var i = n > 0 && n < a.length - 1 ? this.options.bezierCurveTension : 0;
                    t.controlPoints = e.splineCurve(s(t, a, n), t, r(t, a, n), i), t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint), 
                    t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint);
                }, this), i.lineWidth = this.options.datasetStrokeWidth, i.strokeStyle = t.strokeColor, 
                i.beginPath(), e.each(a, function(t, e) {
                    if (0 === e) i.moveTo(t.x, t.y); else if (this.options.bezierCurve) {
                        var n = s(t, a, e);
                        i.bezierCurveTo(n.controlPoints.outer.x, n.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y);
                    } else i.lineTo(t.x, t.y);
                }, this), i.stroke(), this.options.datasetFill && a.length > 0 && (i.lineTo(a[a.length - 1].x, this.scale.endPoint), 
                i.lineTo(a[0].x, this.scale.endPoint), i.fillStyle = t.fillColor, i.closePath(), 
                i.fill()), e.each(a, function(t) {
                    t.draw();
                });
            }, this);
        }
    });
}.call(this), function() {
    "use strict";
    var t = this.Chart, e = t.helpers, n = {
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
        defaults: n,
        initialize: function(n) {
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
                valuesCount: n.length
            }), this.updateScaleRange(n), this.scale.update(), e.each(n, function(t, e) {
                this.addData(t, e, !0);
            }, this), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
                var n = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                e.each(this.segments, function(t) {
                    t.restore([ "fillColor" ]);
                }), e.each(n, function(t) {
                    t.fillColor = t.highlightColor;
                }), this.showTooltip(n);
            }), this.render();
        },
        getSegmentsAtEvent: function(t) {
            var n = [], i = e.getRelativePosition(t);
            return e.each(this.segments, function(t) {
                t.inRange(i.x, i.y) && n.push(t);
            }, this), n;
        },
        addData: function(t, e, n) {
            var i = e || this.segments.length;
            this.segments.splice(i, 0, new this.SegmentArc({
                fillColor: t.color,
                highlightColor: t.highlight || t.color,
                label: t.label,
                value: t.value,
                outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value),
                circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                startAngle: 1.5 * Math.PI
            })), n || (this.reflow(), this.update());
        },
        removeData: function(t) {
            var n = e.isNumber(t) ? t : this.segments.length - 1;
            this.segments.splice(n, 1), this.reflow(), this.update();
        },
        calculateTotal: function(t) {
            this.total = 0, e.each(t, function(t) {
                this.total += t.value;
            }, this), this.scale.valuesCount = this.segments.length;
        },
        updateScaleRange: function(t) {
            var n = [];
            e.each(t, function(t) {
                n.push(t.value);
            });
            var i = this.options.scaleOverride ? {
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            } : e.calculateScaleRange(n, e.min([ this.chart.width, this.chart.height ]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
            e.extend(this.scale, i, {
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
            var n = t || 1;
            this.clear(), e.each(this.segments, function(t, e) {
                t.transition({
                    circumference: this.scale.getCircumference(),
                    outerRadius: this.scale.calculateCenterOffset(t.value)
                }, n), t.endAngle = t.startAngle + t.circumference, 0 === e && (t.startAngle = 1.5 * Math.PI), 
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
        initialize: function(n) {
            this.PointClass = t.Point.extend({
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx
            }), this.datasets = [], this.buildScale(n), this.options.showTooltips && e.bindEvents(this, this.options.tooltipEvents, function(t) {
                var n = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                this.eachPoints(function(t) {
                    t.restore([ "fillColor", "strokeColor" ]);
                }), e.each(n, function(t) {
                    t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke;
                }), this.showTooltip(n);
            }), e.each(n.datasets, function(t) {
                var i = {
                    label: t.label || null,
                    fillColor: t.fillColor,
                    strokeColor: t.strokeColor,
                    pointColor: t.pointColor,
                    pointStrokeColor: t.pointStrokeColor,
                    points: []
                };
                this.datasets.push(i), e.each(t.data, function(e, o) {
                    var r;
                    this.scale.animation || (r = this.scale.getPointPosition(o, this.scale.calculateCenterOffset(e))), 
                    i.points.push(new this.PointClass({
                        value: e,
                        label: n.labels[o],
                        datasetLabel: t.label,
                        x: this.options.animation ? this.scale.xCenter : r.x,
                        y: this.options.animation ? this.scale.yCenter : r.y,
                        strokeColor: t.pointStrokeColor,
                        fillColor: t.pointColor,
                        highlightFill: t.pointHighlightFill || t.pointColor,
                        highlightStroke: t.pointHighlightStroke || t.pointStrokeColor
                    }));
                }, this);
            }, this), this.render();
        },
        eachPoints: function(t) {
            e.each(this.datasets, function(n) {
                e.each(n.points, t, this);
            }, this);
        },
        getPointsAtEvent: function(t) {
            var n = e.getRelativePosition(t), i = e.getAngleFromPoint({
                x: this.scale.xCenter,
                y: this.scale.yCenter
            }, n), o = 2 * Math.PI / this.scale.valuesCount, r = Math.round((i.angle - 1.5 * Math.PI) / o), s = [];
            return (r >= this.scale.valuesCount || 0 > r) && (r = 0), i.distance <= this.scale.drawingArea && e.each(this.datasets, function(t) {
                s.push(t.points[r]);
            }), s;
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
            var n = function() {
                var n = [];
                return e.each(t, function(t) {
                    t.data ? n = n.concat(t.data) : e.each(t.points, function(t) {
                        n.push(t.value);
                    });
                }), n;
            }(), i = this.options.scaleOverride ? {
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            } : e.calculateScaleRange(n, e.min([ this.chart.width, this.chart.height ]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
            e.extend(this.scale, i);
        },
        addData: function(t, n) {
            this.scale.valuesCount++, e.each(t, function(t, e) {
                var i = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));
                this.datasets[e].points.push(new this.PointClass({
                    value: t,
                    label: n,
                    x: i.x,
                    y: i.y,
                    strokeColor: this.datasets[e].pointStrokeColor,
                    fillColor: this.datasets[e].pointColor
                }));
            }, this), this.scale.labels.push(n), this.reflow(), this.update();
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
            var n = t || 1, i = this.chart.ctx;
            this.clear(), this.scale.draw(), e.each(this.datasets, function(t) {
                e.each(t.points, function(t, e) {
                    t.hasValue() && t.transition(this.scale.getPointPosition(e, this.scale.calculateCenterOffset(t.value)), n);
                }, this), i.lineWidth = this.options.datasetStrokeWidth, i.strokeStyle = t.strokeColor, 
                i.beginPath(), e.each(t.points, function(t, e) {
                    0 === e ? i.moveTo(t.x, t.y) : i.lineTo(t.x, t.y);
                }, this), i.closePath(), i.stroke(), i.fillStyle = t.fillColor, i.fill(), e.each(t.points, function(t) {
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
    function n(t, e) {
        var n = (e = e || et).createElement("script");
        n.text = t, e.head.appendChild(n).parentNode.removeChild(n);
    }
    function i(t) {
        var e = !!t && "length" in t && t.length, n = ft.type(t);
        return "function" !== n && !ft.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
    }
    function o(t, e, n) {
        return ft.isFunction(e) ? ft.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n;
        }) : e.nodeType ? ft.grep(t, function(t) {
            return t === e !== n;
        }) : "string" != typeof e ? ft.grep(t, function(t) {
            return st.call(e, t) > -1 !== n;
        }) : St.test(e) ? ft.filter(e, t, n) : (e = ft.filter(e, t), ft.grep(t, function(t) {
            return st.call(e, t) > -1 !== n && 1 === t.nodeType;
        }));
    }
    function r(t, e) {
        for (;(t = t[e]) && 1 !== t.nodeType; ) ;
        return t;
    }
    function s(t) {
        var e = {};
        return ft.each(t.match(Lt) || [], function(t, n) {
            e[n] = !0;
        }), e;
    }
    function a(t) {
        return t;
    }
    function l(t) {
        throw t;
    }
    function c(t, e, n) {
        var i;
        try {
            t && ft.isFunction(i = t.promise) ? i.call(t).done(e).fail(n) : t && ft.isFunction(i = t.then) ? i.call(t, e, n) : e.call(void 0, t);
        } catch (t) {
            n.call(void 0, t);
        }
    }
    function u() {
        et.removeEventListener("DOMContentLoaded", u), t.removeEventListener("load", u), 
        ft.ready();
    }
    function h() {
        this.expando = ft.expando + h.uid++;
    }
    function d(t) {
        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Rt.test(t) ? JSON.parse(t) : t);
    }
    function f(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType) if (i = "data-" + e.replace(Ht, "-$&").toLowerCase(), 
        "string" == typeof (n = t.getAttribute(i))) {
            try {
                n = d(n);
            } catch (t) {}
            Mt.set(t, e, n);
        } else n = void 0;
        return n;
    }
    function p(t, e, n, i) {
        var o, r = 1, s = 20, a = i ? function() {
            return i.cur();
        } : function() {
            return ft.css(t, e, "");
        }, l = a(), c = n && n[3] || (ft.cssNumber[e] ? "" : "px"), u = (ft.cssNumber[e] || "px" !== c && +l) && Ot.exec(ft.css(t, e));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do {
                u /= r = r || ".5", ft.style(t, e, u + c);
            } while (r !== (r = a() / l) && 1 !== r && --s);
        }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, 
        i.start = u, i.end = o)), o;
    }
    function g(t) {
        var e, n = t.ownerDocument, i = t.nodeName, o = It[i];
        return o || (e = n.body.appendChild(n.createElement(i)), o = ft.css(e, "display"), 
        e.parentNode.removeChild(e), "none" === o && (o = "block"), It[i] = o, o);
    }
    function m(t, e) {
        for (var n, i, o = [], r = 0, s = t.length; r < s; r++) (i = t[r]).style && (n = i.style.display, 
        e ? ("none" === n && (o[r] = jt.get(i, "display") || null, o[r] || (i.style.display = "")), 
        "" === i.style.display && Bt(i) && (o[r] = g(i))) : "none" !== n && (o[r] = "none", 
        jt.set(i, "display", n)));
        for (r = 0; r < s; r++) null != o[r] && (t[r].style.display = o[r]);
        return t;
    }
    function v(t, e) {
        var n;
        return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], 
        void 0 === e || e && ft.nodeName(t, e) ? ft.merge([ t ], n) : n;
    }
    function y(t, e) {
        for (var n = 0, i = t.length; n < i; n++) jt.set(t[n], "globalEval", !e || jt.get(e[n], "globalEval"));
    }
    function x(t, e, n, i, o) {
        for (var r, s, a, l, c, u, h = e.createDocumentFragment(), d = [], f = 0, p = t.length; f < p; f++) if ((r = t[f]) || 0 === r) if ("object" === ft.type(r)) ft.merge(d, r.nodeType ? [ r ] : r); else if (Vt.test(r)) {
            for (s = s || h.appendChild(e.createElement("div")), a = (_t.exec(r) || [ "", "" ])[1].toLowerCase(), 
            l = Xt[a] || Xt._default, s.innerHTML = l[1] + ft.htmlPrefilter(r) + l[2], u = l[0]; u--; ) s = s.lastChild;
            ft.merge(d, s.childNodes), (s = h.firstChild).textContent = "";
        } else d.push(e.createTextNode(r));
        for (h.textContent = "", f = 0; r = d[f++]; ) if (i && ft.inArray(r, i) > -1) o && o.push(r); else if (c = ft.contains(r.ownerDocument, r), 
        s = v(h.appendChild(r), "script"), c && y(s), n) for (u = 0; r = s[u++]; ) Yt.test(r.type || "") && n.push(r);
        return h;
    }
    function b() {
        return !0;
    }
    function w() {
        return !1;
    }
    function C() {
        try {
            return et.activeElement;
        } catch (t) {}
    }
    function S(t, e, n, i, o, r) {
        var s, a;
        if ("object" == typeof e) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in e) S(t, a, n, i, e[a], r);
            return t;
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, 
        i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = w; else if (!o) return t;
        return 1 === r && (s = o, (o = function(t) {
            return ft().off(t), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = ft.guid++)), t.each(function() {
            ft.event.add(this, e, o, i, n);
        });
    }
    function T(t, e) {
        return ft.nodeName(t, "table") && ft.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t;
    }
    function k(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t;
    }
    function A(t) {
        var e = ee.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t;
    }
    function E(t, e) {
        var n, i, o, r, s, a, l, c;
        if (1 === e.nodeType) {
            if (jt.hasData(t) && (r = jt.access(t), s = jt.set(e, r), c = r.events)) {
                delete s.handle, s.events = {};
                for (o in c) for (n = 0, i = c[o].length; n < i; n++) ft.event.add(e, o, c[o][n]);
            }
            Mt.hasData(t) && (a = Mt.access(t), l = ft.extend({}, a), Mt.set(e, l));
        }
    }
    function L(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && zt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue);
    }
    function N(t, e, i, o) {
        e = ot.apply([], e);
        var r, s, a, l, c, u, h = 0, d = t.length, f = d - 1, p = e[0], g = ft.isFunction(p);
        if (g || d > 1 && "string" == typeof p && !dt.checkClone && te.test(p)) return t.each(function(n) {
            var r = t.eq(n);
            g && (e[0] = p.call(this, n, r.html())), N(r, e, i, o);
        });
        if (d && (r = x(e, t[0].ownerDocument, !1, t, o), s = r.firstChild, 1 === r.childNodes.length && (r = s), 
        s || o)) {
            for (l = (a = ft.map(v(r, "script"), k)).length; h < d; h++) c = r, h !== f && (c = ft.clone(c, !0, !0), 
            l && ft.merge(a, v(c, "script"))), i.call(t[h], c, h);
            if (l) for (u = a[a.length - 1].ownerDocument, ft.map(a, A), h = 0; h < l; h++) c = a[h], 
            Yt.test(c.type || "") && !jt.access(c, "globalEval") && ft.contains(u, c) && (c.src ? ft._evalUrl && ft._evalUrl(c.src) : n(c.textContent.replace(ne, ""), u));
        }
        return t;
    }
    function D(t, e, n) {
        for (var i, o = e ? ft.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || ft.cleanData(v(i)), 
        i.parentNode && (n && ft.contains(i.ownerDocument, i) && y(v(i, "script")), i.parentNode.removeChild(i));
        return t;
    }
    function P(t, e, n) {
        var i, o, r, s, a = t.style;
        return (n = n || re(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || ft.contains(t.ownerDocument, t) || (s = ft.style(t, e)), 
        !dt.pixelMarginRight() && oe.test(s) && ie.test(e) && (i = a.width, o = a.minWidth, 
        r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, 
        a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s;
    }
    function F(t, e) {
        return {
            get: function() {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get;
            }
        };
    }
    function j(t) {
        if (t in ue) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = ce.length; n--; ) if ((t = ce[n] + e) in ue) return t;
    }
    function M(t, e, n) {
        var i = Ot.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
    }
    function R(t, e, n, i, o) {
        var r, s = 0;
        for (r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0; r < 4; r += 2) "margin" === n && (s += ft.css(t, n + qt[r], !0, o)), 
        i ? ("content" === n && (s -= ft.css(t, "padding" + qt[r], !0, o)), "margin" !== n && (s -= ft.css(t, "border" + qt[r] + "Width", !0, o))) : (s += ft.css(t, "padding" + qt[r], !0, o), 
        "padding" !== n && (s += ft.css(t, "border" + qt[r] + "Width", !0, o)));
        return s;
    }
    function H(t, e, n) {
        var i, o = !0, r = re(t), s = "border-box" === ft.css(t, "boxSizing", !1, r);
        if (t.getClientRects().length && (i = t.getBoundingClientRect()[e]), i <= 0 || null == i) {
            if (((i = P(t, e, r)) < 0 || null == i) && (i = t.style[e]), oe.test(i)) return i;
            o = s && (dt.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0;
        }
        return i + R(t, e, n || (s ? "border" : "content"), o, r) + "px";
    }
    function W(t, e, n, i, o) {
        return new W.prototype.init(t, e, n, i, o);
    }
    function O() {
        de && (t.requestAnimationFrame(O), ft.fx.tick());
    }
    function q() {
        return t.setTimeout(function() {
            he = void 0;
        }), he = ft.now();
    }
    function B(t, e) {
        var n, i = 0, o = {
            height: t
        };
        for (e = e ? 1 : 0; i < 4; i += 2 - e) o["margin" + (n = qt[i])] = o["padding" + n] = t;
        return e && (o.opacity = o.width = t), o;
    }
    function $(t, e, n) {
        for (var i, o = (_.tweeners[e] || []).concat(_.tweeners["*"]), r = 0, s = o.length; r < s; r++) if (i = o[r].call(n, e, t)) return i;
    }
    function I(t, e, n) {
        var i, o, r, s, a, l, c, u, h = "width" in e || "height" in e, d = this, f = {}, p = t.style, g = t.nodeType && Bt(t), v = jt.get(t, "fxshow");
        n.queue || (null == (s = ft._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, 
        s.empty.fire = function() {
            s.unqueued || a();
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, ft.queue(t, "fx").length || s.empty.fire();
            });
        }));
        for (i in e) if (o = e[i], fe.test(o)) {
            if (delete e[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                if ("show" !== o || !v || void 0 === v[i]) continue;
                g = !0;
            }
            f[i] = v && v[i] || ft.style(t, i);
        }
        if ((l = !ft.isEmptyObject(e)) || !ft.isEmptyObject(f)) {
            h && 1 === t.nodeType && (n.overflow = [ p.overflow, p.overflowX, p.overflowY ], 
            null == (c = v && v.display) && (c = jt.get(t, "display")), "none" === (u = ft.css(t, "display")) && (c ? u = c : (m([ t ], !0), 
            c = t.style.display || c, u = ft.css(t, "display"), m([ t ]))), ("inline" === u || "inline-block" === u && null != c) && "none" === ft.css(t, "float") && (l || (d.done(function() {
                p.display = c;
            }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), 
            n.overflow && (p.overflow = "hidden", d.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
            })), l = !1;
            for (i in f) l || (v ? "hidden" in v && (g = v.hidden) : v = jt.access(t, "fxshow", {
                display: c
            }), r && (v.hidden = !g), g && m([ t ], !0), d.done(function() {
                g || m([ t ]), jt.remove(t, "fxshow");
                for (i in f) ft.style(t, i, f[i]);
            })), l = $(g ? v[i] : 0, i, d), i in v || (v[i] = l.start, g && (l.end = l.start, 
            l.start = 0));
        }
    }
    function z(t, e) {
        var n, i, o, r, s;
        for (n in t) if (i = ft.camelCase(n), o = e[i], r = t[n], ft.isArray(r) && (o = r[1], 
        r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = ft.cssHooks[i]) && "expand" in s) {
            r = s.expand(r), delete t[i];
            for (n in r) n in t || (t[n] = r[n], e[n] = o);
        } else e[i] = o;
    }
    function _(t, e, n) {
        var i, o, r = 0, s = _.prefilters.length, a = ft.Deferred().always(function() {
            delete l.elem;
        }), l = function() {
            if (o) return !1;
            for (var e = he || q(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(i);
            return a.notifyWith(t, [ c, i, n ]), i < 1 && s ? n : (a.resolveWith(t, [ c ]), 
            !1);
        }, c = a.promise({
            elem: t,
            props: ft.extend({}, e),
            opts: ft.extend(!0, {
                specialEasing: {},
                easing: ft.easing._default
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: he || q(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var i = ft.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(i), i;
            },
            stop: function(e) {
                var n = 0, i = e ? c.tweens.length : 0;
                if (o) return this;
                for (o = !0; n < i; n++) c.tweens[n].run(1);
                return e ? (a.notifyWith(t, [ c, 1, 0 ]), a.resolveWith(t, [ c, e ])) : a.rejectWith(t, [ c, e ]), 
                this;
            }
        }), u = c.props;
        for (z(u, c.opts.specialEasing); r < s; r++) if (i = _.prefilters[r].call(c, t, u, c.opts)) return ft.isFunction(i.stop) && (ft._queueHooks(c.elem, c.opts.queue).stop = ft.proxy(i.stop, i)), 
        i;
        return ft.map(u, $, c), ft.isFunction(c.opts.start) && c.opts.start.call(t, c), 
        ft.fx.timer(ft.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always);
    }
    function Y(t) {
        return (t.match(Lt) || []).join(" ");
    }
    function X(t) {
        return t.getAttribute && t.getAttribute("class") || "";
    }
    function V(t, e, n, i) {
        var o;
        if (ft.isArray(e)) ft.each(e, function(e, o) {
            n || Te.test(t) ? i(t, o) : V(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i);
        }); else if (n || "object" !== ft.type(e)) i(t, e); else for (o in e) V(t + "[" + o + "]", e[o], n, i);
    }
    function U(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, o = 0, r = e.toLowerCase().match(Lt) || [];
            if (ft.isFunction(n)) for (;i = r[o++]; ) "+" === i[0] ? (i = i.slice(1) || "*", 
            (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n);
        };
    }
    function G(t, e, n, i) {
        function o(a) {
            var l;
            return r[a] = !0, ft.each(t[a] || [], function(t, a) {
                var c = a(e, n, i);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), 
                o(c), !1);
            }), l;
        }
        var r = {}, s = t === He;
        return o(e.dataTypes[0]) || !r["*"] && o("*");
    }
    function Q(t, e) {
        var n, i, o = ft.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
        return i && ft.extend(!0, t, i), t;
    }
    function J(t, e, n) {
        for (var i, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0]; ) l.shift(), 
        void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i) for (o in a) if (a[o] && a[o].test(i)) {
            l.unshift(o);
            break;
        }
        if (l[0] in n) r = l[0]; else {
            for (o in n) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    r = o;
                    break;
                }
                s || (s = o);
            }
            r = r || s;
        }
        if (r) return r !== l[0] && l.unshift(r), n[r];
    }
    function Z(t, e, n, i) {
        var o, r, s, a, l, c = {}, u = t.dataTypes.slice();
        if (u[1]) for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
        for (r = u.shift(); r; ) if (t.responseFields[r] && (n[t.responseFields[r]] = e), 
        !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
            if (!(s = c[l + " " + r] || c["* " + r])) for (o in c) if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                break;
            }
            if (!0 !== s) if (s && t.throws) e = s(e); else try {
                e = s(e);
            } catch (t) {
                return {
                    state: "parsererror",
                    error: s ? t : "No conversion from " + l + " to " + r
                };
            }
        }
        return {
            state: "success",
            data: e
        };
    }
    function K(t) {
        return ft.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
    }
    var tt = [], et = t.document, nt = Object.getPrototypeOf, it = tt.slice, ot = tt.concat, rt = tt.push, st = tt.indexOf, at = {}, lt = at.toString, ct = at.hasOwnProperty, ut = ct.toString, ht = ut.call(Object), dt = {}, ft = function(t, e) {
        return new ft.fn.init(t, e);
    }, pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, gt = /^-ms-/, mt = /-([a-z])/g, vt = function(t, e) {
        return e.toUpperCase();
    };
    ft.fn = ft.prototype = {
        jquery: "3.1.1",
        constructor: ft,
        length: 0,
        toArray: function() {
            return it.call(this);
        },
        get: function(t) {
            return null == t ? it.call(this) : t < 0 ? this[t + this.length] : this[t];
        },
        pushStack: function(t) {
            var e = ft.merge(this.constructor(), t);
            return e.prevObject = this, e;
        },
        each: function(t) {
            return ft.each(this, t);
        },
        map: function(t) {
            return this.pushStack(ft.map(this, function(e, n) {
                return t.call(e, n, e);
            }));
        },
        slice: function() {
            return this.pushStack(it.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(t) {
            var e = this.length, n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [ this[n] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: rt,
        sort: tt.sort,
        splice: tt.splice
    }, ft.extend = ft.fn.extend = function() {
        var t, e, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || ft.isFunction(s) || (s = {}), 
        a === l && (s = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) n = s[e], 
        s !== (i = t[e]) && (c && i && (ft.isPlainObject(i) || (o = ft.isArray(i))) ? (o ? (o = !1, 
        r = n && ft.isArray(n) ? n : []) : r = n && ft.isPlainObject(n) ? n : {}, s[e] = ft.extend(c, r, i)) : void 0 !== i && (s[e] = i));
        return s;
    }, ft.extend({
        expando: "jQuery" + ("3.1.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t);
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === ft.type(t);
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window;
        },
        isNumeric: function(t) {
            var e = ft.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
        },
        isPlainObject: function(t) {
            var e, n;
            return !(!t || "[object Object]" !== lt.call(t)) && (!(e = nt(t)) || "function" == typeof (n = ct.call(e, "constructor") && e.constructor) && ut.call(n) === ht);
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0;
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? at[lt.call(t)] || "object" : typeof t;
        },
        globalEval: function(t) {
            n(t);
        },
        camelCase: function(t) {
            return t.replace(gt, "ms-").replace(mt, vt);
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        },
        each: function(t, e) {
            var n, o = 0;
            if (i(t)) for (n = t.length; o < n && !1 !== e.call(t[o], o, t[o]); o++) ; else for (o in t) if (!1 === e.call(t[o], o, t[o])) break;
            return t;
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(pt, "");
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? ft.merge(n, "string" == typeof t ? [ t ] : t) : rt.call(n, t)), 
            n;
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : st.call(e, t, n);
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
            return t.length = o, t;
        },
        grep: function(t, e, n) {
            for (var i = [], o = 0, r = t.length, s = !n; o < r; o++) !e(t[o], o) !== s && i.push(t[o]);
            return i;
        },
        map: function(t, e, n) {
            var o, r, s = 0, a = [];
            if (i(t)) for (o = t.length; s < o; s++) null != (r = e(t[s], s, n)) && a.push(r); else for (s in t) null != (r = e(t[s], s, n)) && a.push(r);
            return ot.apply([], a);
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, o;
            if ("string" == typeof e && (n = t[e], e = t, t = n), ft.isFunction(t)) return i = it.call(arguments, 2), 
            o = function() {
                return t.apply(e || this, i.concat(it.call(arguments)));
            }, o.guid = t.guid = t.guid || ft.guid++, o;
        },
        now: Date.now,
        support: dt
    }), "function" == typeof Symbol && (ft.fn[Symbol.iterator] = tt[Symbol.iterator]), 
    ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        at["[object " + e + "]"] = e.toLowerCase();
    });
    var yt = function(t) {
        function e(t, e, n, i) {
            var o, r, s, a, l, u, d, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!i && ((e ? e.ownerDocument || e : q) !== P && D(e), e = e || P, j)) {
                if (11 !== p && (l = gt.exec(t))) if (o = l[1]) {
                    if (9 === p) {
                        if (!(s = e.getElementById(o))) return n;
                        if (s.id === o) return n.push(s), n;
                    } else if (f && (s = f.getElementById(o)) && W(e, s) && s.id === o) return n.push(s), 
                    n;
                } else {
                    if (l[2]) return Q.apply(n, e.getElementsByTagName(t)), n;
                    if ((o = l[3]) && b.getElementsByClassName && e.getElementsByClassName) return Q.apply(n, e.getElementsByClassName(o)), 
                    n;
                }
                if (b.qsa && !_[t + " "] && (!M || !M.test(t))) {
                    if (1 !== p) f = e, d = t; else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(xt, bt) : e.setAttribute("id", a = O), 
                        r = (u = T(t)).length; r--; ) u[r] = "#" + a + " " + h(u[r]);
                        d = u.join(","), f = mt.test(t) && c(e.parentNode) || e;
                    }
                    if (d) try {
                        return Q.apply(n, f.querySelectorAll(d)), n;
                    } catch (t) {} finally {
                        a === O && e.removeAttribute("id");
                    }
                }
            }
            return A(t.replace(rt, "$1"), e, n, i);
        }
        function n() {
            function t(n, i) {
                return e.push(n + " ") > w.cacheLength && delete t[e.shift()], t[n + " "] = i;
            }
            var e = [];
            return t;
        }
        function i(t) {
            return t[O] = !0, t;
        }
        function o(t) {
            var e = P.createElement("fieldset");
            try {
                return !!t(e);
            } catch (t) {
                return !1;
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null;
            }
        }
        function r(t, e) {
            for (var n = t.split("|"), i = n.length; i--; ) w.attrHandle[n[i]] = e;
        }
        function s(t, e) {
            var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n) for (;n = n.nextSibling; ) if (n === e) return -1;
            return t ? 1 : -1;
        }
        function a(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Ct(e) === t : e.disabled === t : "label" in e && e.disabled === t;
            };
        }
        function l(t) {
            return i(function(e) {
                return e = +e, i(function(n, i) {
                    for (var o, r = t([], n.length, e), s = r.length; s--; ) n[o = r[s]] && (n[o] = !(i[o] = n[o]));
                });
            });
        }
        function c(t) {
            return t && void 0 !== t.getElementsByTagName && t;
        }
        function u() {}
        function h(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i;
        }
        function d(t, e, n) {
            var i = e.dir, o = e.next, r = o || i, s = n && "parentNode" === r, a = $++;
            return e.first ? function(e, n, o) {
                for (;e = e[i]; ) if (1 === e.nodeType || s) return t(e, n, o);
                return !1;
            } : function(e, n, l) {
                var c, u, h, d = [ B, a ];
                if (l) {
                    for (;e = e[i]; ) if ((1 === e.nodeType || s) && t(e, n, l)) return !0;
                } else for (;e = e[i]; ) if (1 === e.nodeType || s) if (h = e[O] || (e[O] = {}), 
                u = h[e.uniqueID] || (h[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[i] || e; else {
                    if ((c = u[r]) && c[0] === B && c[1] === a) return d[2] = c[2];
                    if (u[r] = d, d[2] = t(e, n, l)) return !0;
                }
                return !1;
            };
        }
        function f(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var o = t.length; o--; ) if (!t[o](e, n, i)) return !1;
                return !0;
            } : t[0];
        }
        function p(t, n, i) {
            for (var o = 0, r = n.length; o < r; o++) e(t, n[o], i);
            return i;
        }
        function g(t, e, n, i, o) {
            for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++) (r = t[a]) && (n && !n(r, i, o) || (s.push(r), 
            c && e.push(a)));
            return s;
        }
        function m(t, e, n, o, r, s) {
            return o && !o[O] && (o = m(o)), r && !r[O] && (r = m(r, s)), i(function(i, s, a, l) {
                var c, u, h, d = [], f = [], m = s.length, v = i || p(e || "*", a.nodeType ? [ a ] : a, []), y = !t || !i && e ? v : g(v, d, t, a, l), x = n ? r || (i ? t : m || o) ? [] : s : y;
                if (n && n(y, x, a, l), o) for (c = g(x, f), o(c, [], a, l), u = c.length; u--; ) (h = c[u]) && (x[f[u]] = !(y[f[u]] = h));
                if (i) {
                    if (r || t) {
                        if (r) {
                            for (c = [], u = x.length; u--; ) (h = x[u]) && c.push(y[u] = h);
                            r(null, x = [], c, l);
                        }
                        for (u = x.length; u--; ) (h = x[u]) && (c = r ? Z(i, h) : d[u]) > -1 && (i[c] = !(s[c] = h));
                    }
                } else x = g(x === s ? x.splice(m, x.length) : x), r ? r(null, s, x, l) : Q.apply(s, x);
            });
        }
        function v(t) {
            for (var e, n, i, o = t.length, r = w.relative[t[0].type], s = r || w.relative[" "], a = r ? 1 : 0, l = d(function(t) {
                return t === e;
            }, s, !0), c = d(function(t) {
                return Z(e, t) > -1;
            }, s, !0), u = [ function(t, n, i) {
                var o = !r && (i || n !== E) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                return e = null, o;
            } ]; a < o; a++) if (n = w.relative[t[a].type]) u = [ d(f(u), n) ]; else {
                if ((n = w.filter[t[a].type].apply(null, t[a].matches))[O]) {
                    for (i = ++a; i < o && !w.relative[t[i].type]; i++) ;
                    return m(a > 1 && f(u), a > 1 && h(t.slice(0, a - 1).concat({
                        value: " " === t[a - 2].type ? "*" : ""
                    })).replace(rt, "$1"), n, a < i && v(t.slice(a, i)), i < o && v(t = t.slice(i)), i < o && h(t));
                }
                u.push(n);
            }
            return f(u);
        }
        function y(t, n) {
            var o = n.length > 0, r = t.length > 0, s = function(i, s, a, l, c) {
                var u, h, d, f = 0, p = "0", m = i && [], v = [], y = E, x = i || r && w.find.TAG("*", c), b = B += null == y ? 1 : Math.random() || .1, C = x.length;
                for (c && (E = s === P || s || c); p !== C && null != (u = x[p]); p++) {
                    if (r && u) {
                        for (h = 0, s || u.ownerDocument === P || (D(u), a = !j); d = t[h++]; ) if (d(u, s || P, a)) {
                            l.push(u);
                            break;
                        }
                        c && (B = b);
                    }
                    o && ((u = !d && u) && f--, i && m.push(u));
                }
                if (f += p, o && p !== f) {
                    for (h = 0; d = n[h++]; ) d(m, v, s, a);
                    if (i) {
                        if (f > 0) for (;p--; ) m[p] || v[p] || (v[p] = U.call(l));
                        v = g(v);
                    }
                    Q.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(l);
                }
                return c && (B = b, E = y), m;
            };
            return o ? i(s) : s;
        }
        var x, b, w, C, S, T, k, A, E, L, N, D, P, F, j, M, R, H, W, O = "sizzle" + 1 * new Date(), q = t.document, B = 0, $ = 0, I = n(), z = n(), _ = n(), Y = function(t, e) {
            return t === e && (N = !0), 0;
        }, X = {}.hasOwnProperty, V = [], U = V.pop, G = V.push, Q = V.push, J = V.slice, Z = function(t, e) {
            for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
            return -1;
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", tt = "[\\x20\\t\\r\\n\\f]", et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", nt = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]", it = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + nt + ")*)|.*)\\)|)", ot = new RegExp(tt + "+", "g"), rt = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"), st = new RegExp("^" + tt + "*," + tt + "*"), at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"), lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"), ct = new RegExp(it), ut = new RegExp("^" + et + "$"), ht = {
            ID: new RegExp("^#(" + et + ")"),
            CLASS: new RegExp("^\\.(" + et + ")"),
            TAG: new RegExp("^(" + et + "|[*])"),
            ATTR: new RegExp("^" + nt),
            PSEUDO: new RegExp("^" + it),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
        }, dt = /^(?:input|select|textarea|button)$/i, ft = /^h\d$/i, pt = /^[^{]+\{\s*\[native \w/, gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, mt = /[+~]/, vt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"), yt = function(t, e, n) {
            var i = "0x" + e - 65536;
            return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
        }, xt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, bt = function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
        }, wt = function() {
            D();
        }, Ct = d(function(t) {
            return !0 === t.disabled && ("form" in t || "label" in t);
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            Q.apply(V = J.call(q.childNodes), q.childNodes), V[q.childNodes.length].nodeType;
        } catch (t) {
            Q = {
                apply: V.length ? function(t, e) {
                    G.apply(t, J.call(e));
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++]; ) ;
                    t.length = n - 1;
                }
            };
        }
        b = e.support = {}, S = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName;
        }, D = e.setDocument = function(t) {
            var e, n, i = t ? t.ownerDocument || t : q;
            return i !== P && 9 === i.nodeType && i.documentElement ? (P = i, F = P.documentElement, 
            j = !S(P), q !== P && (n = P.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", wt, !1) : n.attachEvent && n.attachEvent("onunload", wt)), 
            b.attributes = o(function(t) {
                return t.className = "i", !t.getAttribute("className");
            }), b.getElementsByTagName = o(function(t) {
                return t.appendChild(P.createComment("")), !t.getElementsByTagName("*").length;
            }), b.getElementsByClassName = pt.test(P.getElementsByClassName), b.getById = o(function(t) {
                return F.appendChild(t).id = O, !P.getElementsByName || !P.getElementsByName(O).length;
            }), b.getById ? (w.filter.ID = function(t) {
                var e = t.replace(vt, yt);
                return function(t) {
                    return t.getAttribute("id") === e;
                };
            }, w.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && j) {
                    var n = e.getElementById(t);
                    return n ? [ n ] : [];
                }
            }) : (w.filter.ID = function(t) {
                var e = t.replace(vt, yt);
                return function(t) {
                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e;
                };
            }, w.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && j) {
                    var n, i, o, r = e.getElementById(t);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === t) return [ r ];
                        for (o = e.getElementsByName(t), i = 0; r = o[i++]; ) if ((n = r.getAttributeNode("id")) && n.value === t) return [ r ];
                    }
                    return [];
                }
            }), w.find.TAG = b.getElementsByTagName ? function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0;
            } : function(t, e) {
                var n, i = [], o = 0, r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (;n = r[o++]; ) 1 === n.nodeType && i.push(n);
                    return i;
                }
                return r;
            }, w.find.CLASS = b.getElementsByClassName && function(t, e) {
                if (void 0 !== e.getElementsByClassName && j) return e.getElementsByClassName(t);
            }, R = [], M = [], (b.qsa = pt.test(P.querySelectorAll)) && (o(function(t) {
                F.appendChild(t).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                t.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + tt + "*(?:''|\"\")"), 
                t.querySelectorAll("[selected]").length || M.push("\\[" + tt + "*(?:value|" + K + ")"), 
                t.querySelectorAll("[id~=" + O + "-]").length || M.push("~="), t.querySelectorAll(":checked").length || M.push(":checked"), 
                t.querySelectorAll("a#" + O + "+*").length || M.push(".#.+[+~]");
            }), o(function(t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = P.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + tt + "*[*^$|!~]?="), 
                2 !== t.querySelectorAll(":enabled").length && M.push(":enabled", ":disabled"), 
                F.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && M.push(":enabled", ":disabled"), 
                t.querySelectorAll("*,:x"), M.push(",.*:");
            })), (b.matchesSelector = pt.test(H = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && o(function(t) {
                b.disconnectedMatch = H.call(t, "*"), H.call(t, "[s!='']:x"), R.push("!=", it);
            }), M = M.length && new RegExp(M.join("|")), R = R.length && new RegExp(R.join("|")), 
            e = pt.test(F.compareDocumentPosition), W = e || pt.test(F.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)));
            } : function(t, e) {
                if (e) for (;e = e.parentNode; ) if (e === t) return !0;
                return !1;
            }, Y = e ? function(t, e) {
                if (t === e) return N = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n || (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 
                1 & n || !b.sortDetached && e.compareDocumentPosition(t) === n ? t === P || t.ownerDocument === q && W(q, t) ? -1 : e === P || e.ownerDocument === q && W(q, e) ? 1 : L ? Z(L, t) - Z(L, e) : 0 : 4 & n ? -1 : 1);
            } : function(t, e) {
                if (t === e) return N = !0, 0;
                var n, i = 0, o = t.parentNode, r = e.parentNode, a = [ t ], l = [ e ];
                if (!o || !r) return t === P ? -1 : e === P ? 1 : o ? -1 : r ? 1 : L ? Z(L, t) - Z(L, e) : 0;
                if (o === r) return s(t, e);
                for (n = t; n = n.parentNode; ) a.unshift(n);
                for (n = e; n = n.parentNode; ) l.unshift(n);
                for (;a[i] === l[i]; ) i++;
                return i ? s(a[i], l[i]) : a[i] === q ? -1 : l[i] === q ? 1 : 0;
            }, P) : P;
        }, e.matches = function(t, n) {
            return e(t, null, null, n);
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== P && D(t), n = n.replace(lt, "='$1']"), b.matchesSelector && j && !_[n + " "] && (!R || !R.test(n)) && (!M || !M.test(n))) try {
                var i = H.call(t, n);
                if (i || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i;
            } catch (t) {}
            return e(n, P, null, [ t ]).length > 0;
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== P && D(t), W(t, e);
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== P && D(t);
            var n = w.attrHandle[e.toLowerCase()], i = n && X.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !j) : void 0;
            return void 0 !== i ? i : b.attributes || !j ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
        }, e.escape = function(t) {
            return (t + "").replace(xt, bt);
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t);
        }, e.uniqueSort = function(t) {
            var e, n = [], i = 0, o = 0;
            if (N = !b.detectDuplicates, L = !b.sortStable && t.slice(0), t.sort(Y), N) {
                for (;e = t[o++]; ) e === t[o] && (i = n.push(o));
                for (;i--; ) t.splice(n[i], 1);
            }
            return L = null, t;
        }, C = e.getText = function(t) {
            var e, n = "", i = 0, o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += C(t);
                } else if (3 === o || 4 === o) return t.nodeValue;
            } else for (;e = t[i++]; ) n += C(e);
            return n;
        }, (w = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ht,
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
                    var e, n = !t[6] && t[2];
                    return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ct.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), 
                    t[2] = n.slice(0, e)), t.slice(0, 3));
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
                    var e = I[t + " "];
                    return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && I(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "");
                    });
                },
                ATTR: function(t, n, i) {
                    return function(o) {
                        var r = e.attr(o, t);
                        return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ot, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"));
                    };
                },
                CHILD: function(t, e, n, i, o) {
                    var r = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === i && 0 === o ? function(t) {
                        return !!t.parentNode;
                    } : function(e, n, l) {
                        var c, u, h, d, f, p, g = r !== s ? "nextSibling" : "previousSibling", m = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a, x = !1;
                        if (m) {
                            if (r) {
                                for (;g; ) {
                                    for (d = e; d = d[g]; ) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    p = g = "only" === t && !p && "nextSibling";
                                }
                                return !0;
                            }
                            if (p = [ s ? m.firstChild : m.lastChild ], s && y) {
                                for (x = (f = (c = (u = (h = (d = m)[O] || (d[O] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === B && c[1]) && c[2], 
                                d = f && m.childNodes[f]; d = ++f && d && d[g] || (x = f = 0) || p.pop(); ) if (1 === d.nodeType && ++x && d === e) {
                                    u[t] = [ B, f, x ];
                                    break;
                                }
                            } else if (y && (x = f = (c = (u = (h = (d = e)[O] || (d[O] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === B && c[1]), 
                            !1 === x) for (;(d = ++f && d && d[g] || (x = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++x || (y && ((u = (h = d[O] || (d[O] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] = [ B, x ]), 
                            d !== e)); ) ;
                            return (x -= o) === i || x % i == 0 && x / i >= 0;
                        }
                    };
                },
                PSEUDO: function(t, n) {
                    var o, r = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[O] ? r(n) : r.length > 1 ? (o = [ t, t, "", n ], w.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, o = r(t, n), s = o.length; s--; ) t[i = Z(t, o[s])] = !(e[i] = o[s]);
                    }) : function(t) {
                        return r(t, 0, o);
                    }) : r;
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [], n = [], o = k(t.replace(rt, "$1"));
                    return o[O] ? i(function(t, e, n, i) {
                        for (var r, s = o(t, null, i, []), a = t.length; a--; ) (r = s[a]) && (t[a] = !(e[a] = r));
                    }) : function(t, i, r) {
                        return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop();
                    };
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0;
                    };
                }),
                contains: i(function(t) {
                    return t = t.replace(vt, yt), function(e) {
                        return (e.textContent || e.innerText || C(e)).indexOf(t) > -1;
                    };
                }),
                lang: i(function(t) {
                    return ut.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(vt, yt).toLowerCase(), 
                    function(e) {
                        var n;
                        do {
                            if (n = j ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-");
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                    };
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id;
                },
                root: function(t) {
                    return t === F;
                },
                focus: function(t) {
                    return t === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                },
                enabled: a(!1),
                disabled: a(!0),
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
                eq: l(function(t, e, n) {
                    return [ n < 0 ? n + e : n ];
                }),
                even: l(function(t, e) {
                    for (var n = 0; n < e; n += 2) t.push(n);
                    return t;
                }),
                odd: l(function(t, e) {
                    for (var n = 1; n < e; n += 2) t.push(n);
                    return t;
                }),
                lt: l(function(t, e, n) {
                    for (var i = n < 0 ? n + e : n; --i >= 0; ) t.push(i);
                    return t;
                }),
                gt: l(function(t, e, n) {
                    for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
                    return t;
                })
            }
        }).pseudos.nth = w.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[x] = function(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }(x);
        for (x in {
            submit: !0,
            reset: !0
        }) w.pseudos[x] = function(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t;
            };
        }(x);
        return u.prototype = w.filters = w.pseudos, w.setFilters = new u(), T = e.tokenize = function(t, n) {
            var i, o, r, s, a, l, c, u = z[t + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = t, l = [], c = w.preFilter; a; ) {
                i && !(o = st.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), 
                i = !1, (o = at.exec(a)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(rt, " ")
                }), a = a.slice(i.length));
                for (s in w.filter) !(o = ht[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), 
                r.push({
                    value: i,
                    type: s,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break;
            }
            return n ? a.length : a ? e.error(t) : z(t, l).slice(0);
        }, k = e.compile = function(t, e) {
            var n, i = [], o = [], r = _[t + " "];
            if (!r) {
                for (e || (e = T(t)), n = e.length; n--; ) (r = v(e[n]))[O] ? i.push(r) : o.push(r);
                (r = _(t, y(o, i))).selector = t;
            }
            return r;
        }, A = e.select = function(t, e, n, i) {
            var o, r, s, a, l, u = "function" == typeof t && t, d = !i && T(t = u.selector || t);
            if (n = n || [], 1 === d.length) {
                if ((r = d[0] = d[0].slice(0)).length > 2 && "ID" === (s = r[0]).type && 9 === e.nodeType && j && w.relative[r[1].type]) {
                    if (!(e = (w.find.ID(s.matches[0].replace(vt, yt), e) || [])[0])) return n;
                    u && (e = e.parentNode), t = t.slice(r.shift().value.length);
                }
                for (o = ht.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !w.relative[a = s.type]); ) if ((l = w.find[a]) && (i = l(s.matches[0].replace(vt, yt), mt.test(r[0].type) && c(e.parentNode) || e))) {
                    if (r.splice(o, 1), !(t = i.length && h(r))) return Q.apply(n, i), n;
                    break;
                }
            }
            return (u || k(t, d))(i, e, !j, n, !e || mt.test(t) && c(e.parentNode) || e), n;
        }, b.sortStable = O.split("").sort(Y).join("") === O, b.detectDuplicates = !!N, 
        D(), b.sortDetached = o(function(t) {
            return 1 & t.compareDocumentPosition(P.createElement("fieldset"));
        }), o(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
        }) || r("type|href|height|width", function(t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }), b.attributes && o(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
        }) || r("value", function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
        }), o(function(t) {
            return null == t.getAttribute("disabled");
        }) || r(K, function(t, e, n) {
            var i;
            if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
        }), e;
    }(t);
    ft.find = yt, ft.expr = yt.selectors, ft.expr[":"] = ft.expr.pseudos, ft.uniqueSort = ft.unique = yt.uniqueSort, 
    ft.text = yt.getText, ft.isXMLDoc = yt.isXML, ft.contains = yt.contains, ft.escapeSelector = yt.escape;
    var xt = function(t, e, n) {
        for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; ) if (1 === t.nodeType) {
            if (o && ft(t).is(n)) break;
            i.push(t);
        }
        return i;
    }, bt = function(t, e) {
        for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
        return n;
    }, wt = ft.expr.match.needsContext, Ct = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, St = /^.[^:#\[\.,]*$/;
    ft.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ft.find.matchesSelector(i, t) ? [ i ] : [] : ft.find.matches(t, ft.grep(e, function(t) {
            return 1 === t.nodeType;
        }));
    }, ft.fn.extend({
        find: function(t) {
            var e, n, i = this.length, o = this;
            if ("string" != typeof t) return this.pushStack(ft(t).filter(function() {
                for (e = 0; e < i; e++) if (ft.contains(o[e], this)) return !0;
            }));
            for (n = this.pushStack([]), e = 0; e < i; e++) ft.find(t, o[e], n);
            return i > 1 ? ft.uniqueSort(n) : n;
        },
        filter: function(t) {
            return this.pushStack(o(this, t || [], !1));
        },
        not: function(t) {
            return this.pushStack(o(this, t || [], !0));
        },
        is: function(t) {
            return !!o(this, "string" == typeof t && wt.test(t) ? ft(t) : t || [], !1).length;
        }
    });
    var Tt, kt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ft.fn.init = function(t, e, n) {
        var i, o;
        if (!t) return this;
        if (n = n || Tt, "string" == typeof t) {
            if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [ null, t, null ] : kt.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof ft ? e[0] : e, ft.merge(this, ft.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : et, !0)), 
                Ct.test(i[1]) && ft.isPlainObject(e)) for (i in e) ft.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this;
            }
            return (o = et.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : ft.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(ft) : ft.makeArray(t, this);
    }).prototype = ft.fn, Tt = ft(et);
    var At = /^(?:parents|prev(?:Until|All))/, Et = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ft.fn.extend({
        has: function(t) {
            var e = ft(t, this), n = e.length;
            return this.filter(function() {
                for (var t = 0; t < n; t++) if (ft.contains(this, e[t])) return !0;
            });
        },
        closest: function(t, e) {
            var n, i = 0, o = this.length, r = [], s = "string" != typeof t && ft(t);
            if (!wt.test(t)) for (;i < o; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ft.find.matchesSelector(n, t))) {
                r.push(n);
                break;
            }
            return this.pushStack(r.length > 1 ? ft.uniqueSort(r) : r);
        },
        index: function(t) {
            return t ? "string" == typeof t ? st.call(ft(t), this[0]) : st.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(t, e) {
            return this.pushStack(ft.uniqueSort(ft.merge(this.get(), ft(t, e))));
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        }
    }), ft.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null;
        },
        parents: function(t) {
            return xt(t, "parentNode");
        },
        parentsUntil: function(t, e, n) {
            return xt(t, "parentNode", n);
        },
        next: function(t) {
            return r(t, "nextSibling");
        },
        prev: function(t) {
            return r(t, "previousSibling");
        },
        nextAll: function(t) {
            return xt(t, "nextSibling");
        },
        prevAll: function(t) {
            return xt(t, "previousSibling");
        },
        nextUntil: function(t, e, n) {
            return xt(t, "nextSibling", n);
        },
        prevUntil: function(t, e, n) {
            return xt(t, "previousSibling", n);
        },
        siblings: function(t) {
            return bt((t.parentNode || {}).firstChild, t);
        },
        children: function(t) {
            return bt(t.firstChild);
        },
        contents: function(t) {
            return t.contentDocument || ft.merge([], t.childNodes);
        }
    }, function(t, e) {
        ft.fn[t] = function(n, i) {
            var o = ft.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = ft.filter(i, o)), 
            this.length > 1 && (Et[t] || ft.uniqueSort(o), At.test(t) && o.reverse()), this.pushStack(o);
        };
    });
    var Lt = /[^\x20\t\r\n\f]+/g;
    ft.Callbacks = function(t) {
        t = "string" == typeof t ? s(t) : ft.extend({}, t);
        var e, n, i, o, r = [], a = [], l = -1, c = function() {
            for (o = t.once, i = e = !0; a.length; l = -1) for (n = a.shift(); ++l < r.length; ) !1 === r[l].apply(n[0], n[1]) && t.stopOnFalse && (l = r.length, 
            n = !1);
            t.memory || (n = !1), e = !1, o && (r = n ? [] : "");
        }, u = {
            add: function() {
                return r && (n && !e && (l = r.length - 1, a.push(n)), function e(n) {
                    ft.each(n, function(n, i) {
                        ft.isFunction(i) ? t.unique && u.has(i) || r.push(i) : i && i.length && "string" !== ft.type(i) && e(i);
                    });
                }(arguments), n && !e && c()), this;
            },
            remove: function() {
                return ft.each(arguments, function(t, e) {
                    for (var n; (n = ft.inArray(e, r, n)) > -1; ) r.splice(n, 1), n <= l && l--;
                }), this;
            },
            has: function(t) {
                return t ? ft.inArray(t, r) > -1 : r.length > 0;
            },
            empty: function() {
                return r && (r = []), this;
            },
            disable: function() {
                return o = a = [], r = n = "", this;
            },
            disabled: function() {
                return !r;
            },
            lock: function() {
                return o = a = [], n || e || (r = n = ""), this;
            },
            locked: function() {
                return !!o;
            },
            fireWith: function(t, n) {
                return o || (n = [ t, (n = n || []).slice ? n.slice() : n ], a.push(n), e || c()), 
                this;
            },
            fire: function() {
                return u.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!i;
            }
        };
        return u;
    }, ft.extend({
        Deferred: function(e) {
            var n = [ [ "notify", "progress", ft.Callbacks("memory"), ft.Callbacks("memory"), 2 ], [ "resolve", "done", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", ft.Callbacks("once memory"), ft.Callbacks("once memory"), 1, "rejected" ] ], i = "pending", o = {
                state: function() {
                    return i;
                },
                always: function() {
                    return r.done(arguments).fail(arguments), this;
                },
                catch: function(t) {
                    return o.then(null, t);
                },
                pipe: function() {
                    var t = arguments;
                    return ft.Deferred(function(e) {
                        ft.each(n, function(n, i) {
                            var o = ft.isFunction(t[i[4]]) && t[i[4]];
                            r[i[1]](function() {
                                var t = o && o.apply(this, arguments);
                                t && ft.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, o ? [ t ] : arguments);
                            });
                        }), t = null;
                    }).promise();
                },
                then: function(e, i, o) {
                    function r(e, n, i, o) {
                        return function() {
                            var c = this, u = arguments, h = function() {
                                var t, h;
                                if (!(e < s)) {
                                    if ((t = i.apply(c, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                    h = t && ("object" == typeof t || "function" == typeof t) && t.then, ft.isFunction(h) ? o ? h.call(t, r(s, n, a, o), r(s, n, l, o)) : (s++, 
                                    h.call(t, r(s, n, a, o), r(s, n, l, o), r(s, n, a, n.notifyWith))) : (i !== a && (c = void 0, 
                                    u = [ t ]), (o || n.resolveWith)(c, u));
                                }
                            }, d = o ? h : function() {
                                try {
                                    h();
                                } catch (t) {
                                    ft.Deferred.exceptionHook && ft.Deferred.exceptionHook(t, d.stackTrace), e + 1 >= s && (i !== l && (c = void 0, 
                                    u = [ t ]), n.rejectWith(c, u));
                                }
                            };
                            e ? d() : (ft.Deferred.getStackHook && (d.stackTrace = ft.Deferred.getStackHook()), 
                            t.setTimeout(d));
                        };
                    }
                    var s = 0;
                    return ft.Deferred(function(t) {
                        n[0][3].add(r(0, t, ft.isFunction(o) ? o : a, t.notifyWith)), n[1][3].add(r(0, t, ft.isFunction(e) ? e : a)), 
                        n[2][3].add(r(0, t, ft.isFunction(i) ? i : l));
                    }).promise();
                },
                promise: function(t) {
                    return null != t ? ft.extend(t, o) : o;
                }
            }, r = {};
            return ft.each(n, function(t, e) {
                var s = e[2], a = e[5];
                o[e[1]] = s.add, a && s.add(function() {
                    i = a;
                }, n[3 - t][2].disable, n[0][2].lock), s.add(e[3].fire), r[e[0]] = function() {
                    return r[e[0] + "With"](this === r ? void 0 : this, arguments), this;
                }, r[e[0] + "With"] = s.fireWith;
            }), o.promise(r), e && e.call(r, r), r;
        },
        when: function(t) {
            var e = arguments.length, n = e, i = Array(n), o = it.call(arguments), r = ft.Deferred(), s = function(t) {
                return function(n) {
                    i[t] = this, o[t] = arguments.length > 1 ? it.call(arguments) : n, --e || r.resolveWith(i, o);
                };
            };
            if (e <= 1 && (c(t, r.done(s(n)).resolve, r.reject), "pending" === r.state() || ft.isFunction(o[n] && o[n].then))) return r.then();
            for (;n--; ) c(o[n], s(n), r.reject);
            return r.promise();
        }
    });
    var Nt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ft.Deferred.exceptionHook = function(e, n) {
        t.console && t.console.warn && e && Nt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n);
    }, ft.readyException = function(e) {
        t.setTimeout(function() {
            throw e;
        });
    };
    var Dt = ft.Deferred();
    ft.fn.ready = function(t) {
        return Dt.then(t).catch(function(t) {
            ft.readyException(t);
        }), this;
    }, ft.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? ft.readyWait++ : ft.ready(!0);
        },
        ready: function(t) {
            (!0 === t ? --ft.readyWait : ft.isReady) || (ft.isReady = !0, !0 !== t && --ft.readyWait > 0 || Dt.resolveWith(et, [ ft ]));
        }
    }), ft.ready.then = Dt.then, "complete" === et.readyState || "loading" !== et.readyState && !et.documentElement.doScroll ? t.setTimeout(ft.ready) : (et.addEventListener("DOMContentLoaded", u), 
    t.addEventListener("load", u));
    var Pt = function(t, e, n, i, o, r, s) {
        var a = 0, l = t.length, c = null == n;
        if ("object" === ft.type(n)) {
            o = !0;
            for (a in n) Pt(t, e, a, n[a], !0, r, s);
        } else if (void 0 !== i && (o = !0, ft.isFunction(i) || (s = !0), c && (s ? (e.call(t, i), 
        e = null) : (c = e, e = function(t, e, n) {
            return c.call(ft(t), n);
        })), e)) for (;a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return o ? t : c ? e.call(t) : l ? e(t[0], n) : r;
    }, Ft = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    };
    h.uid = 1, h.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {}, Ft(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e;
        },
        set: function(t, e, n) {
            var i, o = this.cache(t);
            if ("string" == typeof e) o[ft.camelCase(e)] = n; else for (i in e) o[ft.camelCase(i)] = e[i];
            return o;
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][ft.camelCase(e)];
        },
        access: function(t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), 
            void 0 !== n ? n : e);
        },
        remove: function(t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    n = (e = ft.isArray(e) ? e.map(ft.camelCase) : (e = ft.camelCase(e)) in i ? [ e ] : e.match(Lt) || []).length;
                    for (;n--; ) delete i[e[n]];
                }
                (void 0 === e || ft.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]);
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !ft.isEmptyObject(e);
        }
    };
    var jt = new h(), Mt = new h(), Rt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ht = /[A-Z]/g;
    ft.extend({
        hasData: function(t) {
            return Mt.hasData(t) || jt.hasData(t);
        },
        data: function(t, e, n) {
            return Mt.access(t, e, n);
        },
        removeData: function(t, e) {
            Mt.remove(t, e);
        },
        _data: function(t, e, n) {
            return jt.access(t, e, n);
        },
        _removeData: function(t, e) {
            jt.remove(t, e);
        }
    }), ft.fn.extend({
        data: function(t, e) {
            var n, i, o, r = this[0], s = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = Mt.get(r), 1 === r.nodeType && !jt.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--; ) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = ft.camelCase(i.slice(5)), 
                    f(r, i, o[i]));
                    jt.set(r, "hasDataAttrs", !0);
                }
                return o;
            }
            return "object" == typeof t ? this.each(function() {
                Mt.set(this, t);
            }) : Pt(this, function(e) {
                var n;
                if (r && void 0 === e) {
                    if (void 0 !== (n = Mt.get(r, t))) return n;
                    if (void 0 !== (n = f(r, t))) return n;
                } else this.each(function() {
                    Mt.set(this, t, e);
                });
            }, null, e, arguments.length > 1, null, !0);
        },
        removeData: function(t) {
            return this.each(function() {
                Mt.remove(this, t);
            });
        }
    }), ft.extend({
        queue: function(t, e, n) {
            var i;
            if (t) return e = (e || "fx") + "queue", i = jt.get(t, e), n && (!i || ft.isArray(n) ? i = jt.access(t, e, ft.makeArray(n)) : i.push(n)), 
            i || [];
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = ft.queue(t, e), i = n.length, o = n.shift(), r = ft._queueHooks(t, e), s = function() {
                ft.dequeue(t, e);
            };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), 
            delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire();
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return jt.get(t, n) || jt.access(t, n, {
                empty: ft.Callbacks("once memory").add(function() {
                    jt.remove(t, [ e + "queue", n ]);
                })
            });
        }
    }), ft.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ft.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = ft.queue(this, t, e);
                ft._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ft.dequeue(this, t);
            });
        },
        dequeue: function(t) {
            return this.each(function() {
                ft.dequeue(this, t);
            });
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", []);
        },
        promise: function(t, e) {
            var n, i = 1, o = ft.Deferred(), r = this, s = this.length, a = function() {
                --i || o.resolveWith(r, [ r ]);
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--; ) (n = jt.get(r[s], t + "queueHooks")) && n.empty && (i++, 
            n.empty.add(a));
            return a(), o.promise(e);
        }
    });
    var Wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ot = new RegExp("^(?:([+-])=|)(" + Wt + ")([a-z%]*)$", "i"), qt = [ "Top", "Right", "Bottom", "Left" ], Bt = function(t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && ft.contains(t.ownerDocument, t) && "none" === ft.css(t, "display");
    }, $t = function(t, e, n, i) {
        var o, r, s = {};
        for (r in e) s[r] = t.style[r], t.style[r] = e[r];
        o = n.apply(t, i || []);
        for (r in e) t.style[r] = s[r];
        return o;
    }, It = {};
    ft.fn.extend({
        show: function() {
            return m(this, !0);
        },
        hide: function() {
            return m(this);
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Bt(this) ? ft(this).show() : ft(this).hide();
            });
        }
    });
    var zt = /^(?:checkbox|radio)$/i, _t = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Yt = /^$|\/(?:java|ecma)script/i, Xt = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Xt.optgroup = Xt.option, Xt.tbody = Xt.tfoot = Xt.colgroup = Xt.caption = Xt.thead, 
    Xt.th = Xt.td;
    var Vt = /<|&#?\w+;/;
    !function() {
        var t = et.createDocumentFragment().appendChild(et.createElement("div")), e = et.createElement("input");
        e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), 
        t.appendChild(e), dt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        t.innerHTML = "<textarea>x</textarea>", dt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
    }();
    var Ut = et.documentElement, Gt = /^key/, Qt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Jt = /^([^.]*)(?:\.(.+)|)/;
    ft.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, s, a, l, c, u, h, d, f, p, g, m = jt.get(t);
            if (m) for (n.handler && (n = (r = n).handler, o = r.selector), o && ft.find.matchesSelector(Ut, o), 
            n.guid || (n.guid = ft.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                return void 0 !== ft && ft.event.triggered !== e.type ? ft.event.dispatch.apply(t, arguments) : void 0;
            }), c = (e = (e || "").match(Lt) || [ "" ]).length; c--; ) f = g = (a = Jt.exec(e[c]) || [])[1], 
            p = (a[2] || "").split(".").sort(), f && (h = ft.event.special[f] || {}, f = (o ? h.delegateType : h.bindType) || f, 
            h = ft.event.special[f] || {}, u = ft.extend({
                type: f,
                origType: g,
                data: i,
                handler: n,
                guid: n.guid,
                selector: o,
                needsContext: o && ft.expr.match.needsContext.test(o),
                namespace: p.join(".")
            }, r), (d = l[f]) || ((d = l[f] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(f, s)), 
            h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, u) : d.push(u), 
            ft.event.global[f] = !0);
        },
        remove: function(t, e, n, i, o) {
            var r, s, a, l, c, u, h, d, f, p, g, m = jt.hasData(t) && jt.get(t);
            if (m && (l = m.events)) {
                for (c = (e = (e || "").match(Lt) || [ "" ]).length; c--; ) if (a = Jt.exec(e[c]) || [], 
                f = g = a[1], p = (a[2] || "").split(".").sort(), f) {
                    for (h = ft.event.special[f] || {}, d = l[f = (i ? h.delegateType : h.bindType) || f] || [], 
                    a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = d.length; r--; ) u = d[r], 
                    !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(r, 1), 
                    u.selector && d.delegateCount--, h.remove && h.remove.call(t, u));
                    s && !d.length && (h.teardown && !1 !== h.teardown.call(t, p, m.handle) || ft.removeEvent(t, f, m.handle), 
                    delete l[f]);
                } else for (f in l) ft.event.remove(t, f + e[c], n, i, !0);
                ft.isEmptyObject(l) && jt.remove(t, "handle events");
            }
        },
        dispatch: function(t) {
            var e, n, i, o, r, s, a = ft.event.fix(t), l = new Array(arguments.length), c = (jt.get(this, "events") || {})[a.type] || [], u = ft.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = ft.event.handlers.call(this, a, c), e = 0; (o = s[e++]) && !a.isPropagationStopped(); ) for (a.currentTarget = o.elem, 
                n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped(); ) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, 
                a.data = r.data, void 0 !== (i = ((ft.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), 
                a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(t, e) {
            var n, i, o, r, s, a = [], l = e.delegateCount, c = t.target;
            if (l && c.nodeType && !("click" === t.type && t.button >= 1)) for (;c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = e[n]).selector + " "] && (s[o] = i.needsContext ? ft(o, this).index(c) > -1 : ft.find(o, this, null, [ c ]).length), 
                s[o] && r.push(i);
                r.length && a.push({
                    elem: c,
                    handlers: r
                });
            }
            return c = this, l < e.length && a.push({
                elem: c,
                handlers: e.slice(l)
            }), a;
        },
        addProp: function(t, e) {
            Object.defineProperty(ft.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: ft.isFunction(e) ? function() {
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
            return t[ft.expando] ? t : new ft.Event(t);
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== C() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === C() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && ft.nodeName(this, "input")) return this.click(), 
                    !1;
                },
                _default: function(t) {
                    return ft.nodeName(t.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                }
            }
        }
    }, ft.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n);
    }, ft.Event = function(t, e) {
        if (!(this instanceof ft.Event)) return new ft.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? b : w, 
        this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, 
        this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, 
        e && ft.extend(this, e), this.timeStamp = t && t.timeStamp || ft.now(), this[ft.expando] = !0;
    }, ft.Event.prototype = {
        constructor: ft.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = b, t && !this.isSimulated && t.preventDefault();
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = b, t && !this.isSimulated && t.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = b, t && !this.isSimulated && t.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, ft.each({
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
            return null == t.which && Gt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Qt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which;
        }
    }, ft.event.addProp), ft.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        ft.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this, o = t.relatedTarget, r = t.handleObj;
                return o && (o === i || ft.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), 
                t.type = e), n;
            }
        };
    }), ft.fn.extend({
        on: function(t, e, n, i) {
            return S(this, t, e, n, i);
        },
        one: function(t, e, n, i) {
            return S(this, t, e, n, i, 1);
        },
        off: function(t, e, n) {
            var i, o;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ft(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
            this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this;
            }
            return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = w), 
            this.each(function() {
                ft.event.remove(this, t, n, e);
            });
        }
    });
    var Zt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Kt = /<script|<style|<link/i, te = /checked\s*(?:[^=]|=\s*.checked.)/i, ee = /^true\/(.*)/, ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ft.extend({
        htmlPrefilter: function(t) {
            return t.replace(Zt, "<$1></$2>");
        },
        clone: function(t, e, n) {
            var i, o, r, s, a = t.cloneNode(!0), l = ft.contains(t.ownerDocument, t);
            if (!(dt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ft.isXMLDoc(t))) for (s = v(a), 
            i = 0, o = (r = v(t)).length; i < o; i++) L(r[i], s[i]);
            if (e) if (n) for (r = r || v(t), s = s || v(a), i = 0, o = r.length; i < o; i++) E(r[i], s[i]); else E(t, a);
            return (s = v(a, "script")).length > 0 && y(s, !l && v(t, "script")), a;
        },
        cleanData: function(t) {
            for (var e, n, i, o = ft.event.special, r = 0; void 0 !== (n = t[r]); r++) if (Ft(n)) {
                if (e = n[jt.expando]) {
                    if (e.events) for (i in e.events) o[i] ? ft.event.remove(n, i) : ft.removeEvent(n, i, e.handle);
                    n[jt.expando] = void 0;
                }
                n[Mt.expando] && (n[Mt.expando] = void 0);
            }
        }
    }), ft.fn.extend({
        detach: function(t) {
            return D(this, t, !0);
        },
        remove: function(t) {
            return D(this, t);
        },
        text: function(t) {
            return Pt(this, function(t) {
                return void 0 === t ? ft.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t);
                });
            }, null, t, arguments.length);
        },
        append: function() {
            return N(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || T(this, t).appendChild(t);
            });
        },
        prepend: function() {
            return N(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = T(this, t);
                    e.insertBefore(t, e.firstChild);
                }
            });
        },
        before: function() {
            return N(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this);
            });
        },
        after: function() {
            return N(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
            });
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ft.cleanData(v(t, !1)), 
            t.textContent = "");
            return this;
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return ft.clone(this, t, e);
            });
        },
        html: function(t) {
            return Pt(this, function(t) {
                var e = this[0] || {}, n = 0, i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Kt.test(t) && !Xt[(_t.exec(t) || [ "", "" ])[1].toLowerCase()]) {
                    t = ft.htmlPrefilter(t);
                    try {
                        for (;n < i; n++) 1 === (e = this[n] || {}).nodeType && (ft.cleanData(v(e, !1)), 
                        e.innerHTML = t);
                        e = 0;
                    } catch (t) {}
                }
                e && this.empty().append(t);
            }, null, t, arguments.length);
        },
        replaceWith: function() {
            var t = [];
            return N(this, arguments, function(e) {
                var n = this.parentNode;
                ft.inArray(this, t) < 0 && (ft.cleanData(v(this)), n && n.replaceChild(e, this));
            }, t);
        }
    }), ft.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        ft.fn[t] = function(t) {
            for (var n, i = [], o = ft(t), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), 
            ft(o[s])[e](n), rt.apply(i, n.get());
            return this.pushStack(i);
        };
    });
    var ie = /^margin/, oe = new RegExp("^(" + Wt + ")(?!px)[a-z%]+$", "i"), re = function(e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t), n.getComputedStyle(e);
    };
    !function() {
        function e() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
                a.innerHTML = "", Ut.appendChild(s);
                var e = t.getComputedStyle(a);
                n = "1%" !== e.top, r = "2px" === e.marginLeft, i = "4px" === e.width, a.style.marginRight = "50%", 
                o = "4px" === e.marginRight, Ut.removeChild(s), a = null;
            }
        }
        var n, i, o, r, s = et.createElement("div"), a = et.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", 
        dt.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
        s.appendChild(a), ft.extend(dt, {
            pixelPosition: function() {
                return e(), n;
            },
            boxSizingReliable: function() {
                return e(), i;
            },
            pixelMarginRight: function() {
                return e(), o;
            },
            reliableMarginLeft: function() {
                return e(), r;
            }
        }));
    }();
    var se = /^(none|table(?!-c[ea]).+)/, ae = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, le = {
        letterSpacing: "0",
        fontWeight: "400"
    }, ce = [ "Webkit", "Moz", "ms" ], ue = et.createElement("div").style;
    ft.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = P(t, "opacity");
                        return "" === n ? "1" : n;
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
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, s, a = ft.camelCase(e), l = t.style;
                if (e = ft.cssProps[a] || (ft.cssProps[a] = j(a) || a), s = ft.cssHooks[e] || ft.cssHooks[a], 
                void 0 === n) return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : l[e];
                "string" === (r = typeof n) && (o = Ot.exec(n)) && o[1] && (n = p(t, e, o), r = "number"), 
                null != n && n === n && ("number" === r && (n += o && o[3] || (ft.cssNumber[a] ? "" : "px")), 
                dt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), 
                s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l[e] = n));
            }
        },
        css: function(t, e, n, i) {
            var o, r, s, a = ft.camelCase(e);
            return e = ft.cssProps[a] || (ft.cssProps[a] = j(a) || a), (s = ft.cssHooks[e] || ft.cssHooks[a]) && "get" in s && (o = s.get(t, !0, n)), 
            void 0 === o && (o = P(t, e, i)), "normal" === o && e in le && (o = le[e]), "" === n || n ? (r = parseFloat(o), 
            !0 === n || isFinite(r) ? r || 0 : o) : o;
        }
    }), ft.each([ "height", "width" ], function(t, e) {
        ft.cssHooks[e] = {
            get: function(t, n, i) {
                if (n) return !se.test(ft.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? H(t, e, i) : $t(t, ae, function() {
                    return H(t, e, i);
                });
            },
            set: function(t, n, i) {
                var o, r = i && re(t), s = i && R(t, e, i, "border-box" === ft.css(t, "boxSizing", !1, r), r);
                return s && (o = Ot.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = ft.css(t, e)), 
                M(t, n, s);
            }
        };
    }), ft.cssHooks.marginLeft = F(dt.reliableMarginLeft, function(t, e) {
        if (e) return (parseFloat(P(t, "marginLeft")) || t.getBoundingClientRect().left - $t(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left;
        })) + "px";
    }), ft.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        ft.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [ n ]; i < 4; i++) o[t + qt[i] + e] = r[i] || r[i - 2] || r[0];
                return o;
            }
        }, ie.test(t) || (ft.cssHooks[t + e].set = M);
    }), ft.fn.extend({
        css: function(t, e) {
            return Pt(this, function(t, e, n) {
                var i, o, r = {}, s = 0;
                if (ft.isArray(e)) {
                    for (i = re(t), o = e.length; s < o; s++) r[e[s]] = ft.css(t, e[s], !1, i);
                    return r;
                }
                return void 0 !== n ? ft.style(t, e, n) : ft.css(t, e);
            }, t, e, arguments.length > 1);
        }
    }), ft.Tween = W, W.prototype = {
        constructor: W,
        init: function(t, e, n, i, o, r) {
            this.elem = t, this.prop = n, this.easing = o || ft.easing._default, this.options = e, 
            this.start = this.now = this.cur(), this.end = i, this.unit = r || (ft.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var t = W.propHooks[this.prop];
            return t && t.get ? t.get(this) : W.propHooks._default.get(this);
        },
        run: function(t) {
            var e, n = W.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ft.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, 
            this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : W.propHooks._default.set(this), this;
        }
    }, W.prototype.init.prototype = W.prototype, W.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ft.css(t.elem, t.prop, ""), 
                e && "auto" !== e ? e : 0);
            },
            set: function(t) {
                ft.fx.step[t.prop] ? ft.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ft.cssProps[t.prop]] && !ft.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ft.style(t.elem, t.prop, t.now + t.unit);
            }
        }
    }, W.propHooks.scrollTop = W.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        }
    }, ft.easing = {
        linear: function(t) {
            return t;
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2;
        },
        _default: "swing"
    }, ft.fx = W.prototype.init, ft.fx.step = {};
    var he, de, fe = /^(?:toggle|show|hide)$/, pe = /queueHooks$/;
    ft.Animation = ft.extend(_, {
        tweeners: {
            "*": [ function(t, e) {
                var n = this.createTween(t, e);
                return p(n.elem, t, Ot.exec(e), n), n;
            } ]
        },
        tweener: function(t, e) {
            ft.isFunction(t) ? (e = t, t = [ "*" ]) : t = t.match(Lt);
            for (var n, i = 0, o = t.length; i < o; i++) n = t[i], _.tweeners[n] = _.tweeners[n] || [], 
            _.tweeners[n].unshift(e);
        },
        prefilters: [ I ],
        prefilter: function(t, e) {
            e ? _.prefilters.unshift(t) : _.prefilters.push(t);
        }
    }), ft.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? ft.extend({}, t) : {
            complete: n || !n && e || ft.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !ft.isFunction(e) && e
        };
        return ft.fx.off || et.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in ft.fx.speeds ? i.duration = ft.fx.speeds[i.duration] : i.duration = ft.fx.speeds._default), 
        null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            ft.isFunction(i.old) && i.old.call(this), i.queue && ft.dequeue(this, i.queue);
        }, i;
    }, ft.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(Bt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i);
        },
        animate: function(t, e, n, i) {
            var o = ft.isEmptyObject(t), r = ft.speed(e, n, i), s = function() {
                var e = _(this, ft.extend({}, t), r);
                (o || jt.get(this, "finish")) && e.stop(!0);
            };
            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop, e(n);
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), 
            this.each(function() {
                var e = !0, o = null != t && t + "queueHooks", r = ft.timers, s = jt.get(this);
                if (o) s[o] && s[o].stop && i(s[o]); else for (o in s) s[o] && s[o].stop && pe.test(o) && i(s[o]);
                for (o = r.length; o--; ) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), 
                e = !1, r.splice(o, 1));
                !e && n || ft.dequeue(this, t);
            });
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"), this.each(function() {
                var e, n = jt.get(this), i = n[t + "queue"], o = n[t + "queueHooks"], r = ft.timers, s = i ? i.length : 0;
                for (n.finish = !0, ft.queue(this, t, []), o && o.stop && o.stop.call(this, !0), 
                e = r.length; e--; ) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), 
                r.splice(e, 1));
                for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish;
            });
        }
    }), ft.each([ "toggle", "show", "hide" ], function(t, e) {
        var n = ft.fn[e];
        ft.fn[e] = function(t, i, o) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(B(e, !0), t, i, o);
        };
    }), ft.each({
        slideDown: B("show"),
        slideUp: B("hide"),
        slideToggle: B("toggle"),
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
        ft.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i);
        };
    }), ft.timers = [], ft.fx.tick = function() {
        var t, e = 0, n = ft.timers;
        for (he = ft.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || ft.fx.stop(), he = void 0;
    }, ft.fx.timer = function(t) {
        ft.timers.push(t), t() ? ft.fx.start() : ft.timers.pop();
    }, ft.fx.interval = 13, ft.fx.start = function() {
        de || (de = t.requestAnimationFrame ? t.requestAnimationFrame(O) : t.setInterval(ft.fx.tick, ft.fx.interval));
    }, ft.fx.stop = function() {
        t.cancelAnimationFrame ? t.cancelAnimationFrame(de) : t.clearInterval(de), de = null;
    }, ft.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ft.fn.delay = function(e, n) {
        return e = ft.fx ? ft.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
            var o = t.setTimeout(n, e);
            i.stop = function() {
                t.clearTimeout(o);
            };
        });
    }, function() {
        var t = et.createElement("input"), e = et.createElement("select").appendChild(et.createElement("option"));
        t.type = "checkbox", dt.checkOn = "" !== t.value, dt.optSelected = e.selected, (t = et.createElement("input")).value = "t", 
        t.type = "radio", dt.radioValue = "t" === t.value;
    }();
    var ge, me = ft.expr.attrHandle;
    ft.fn.extend({
        attr: function(t, e) {
            return Pt(this, ft.attr, t, e, arguments.length > 1);
        },
        removeAttr: function(t) {
            return this.each(function() {
                ft.removeAttr(this, t);
            });
        }
    }), ft.extend({
        attr: function(t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? ft.prop(t, e, n) : (1 === r && ft.isXMLDoc(t) || (o = ft.attrHooks[e.toLowerCase()] || (ft.expr.match.bool.test(e) ? ge : void 0)), 
            void 0 !== n ? null === n ? void ft.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), 
            n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : (i = ft.find.attr(t, e), 
            null == i ? void 0 : i));
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!dt.radioValue && "radio" === e && ft.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e;
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i = 0, o = e && e.match(Lt);
            if (o && 1 === t.nodeType) for (;n = o[i++]; ) t.removeAttribute(n);
        }
    }), ge = {
        set: function(t, e, n) {
            return !1 === e ? ft.removeAttr(t, n) : t.setAttribute(n, n), n;
        }
    }, ft.each(ft.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = me[e] || ft.find.attr;
        me[e] = function(t, e, i) {
            var o, r, s = e.toLowerCase();
            return i || (r = me[s], me[s] = o, o = null != n(t, e, i) ? s : null, me[s] = r), 
            o;
        };
    });
    var ve = /^(?:input|select|textarea|button)$/i, ye = /^(?:a|area)$/i;
    ft.fn.extend({
        prop: function(t, e) {
            return Pt(this, ft.prop, t, e, arguments.length > 1);
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[ft.propFix[t] || t];
            });
        }
    }), ft.extend({
        prop: function(t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && ft.isXMLDoc(t) || (e = ft.propFix[e] || e, 
            o = ft.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e];
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = ft.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ve.test(t.nodeName) || ye.test(t.nodeName) && t.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), dt.optSelected || (ft.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
        }
    }), ft.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        ft.propFix[this.toLowerCase()] = this;
    }), ft.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, s, a, l = 0;
            if (ft.isFunction(t)) return this.each(function(e) {
                ft(this).addClass(t.call(this, e, X(this)));
            });
            if ("string" == typeof t && t) for (e = t.match(Lt) || []; n = this[l++]; ) if (o = X(n), 
            i = 1 === n.nodeType && " " + Y(o) + " ") {
                for (s = 0; r = e[s++]; ) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                o !== (a = Y(i)) && n.setAttribute("class", a);
            }
            return this;
        },
        removeClass: function(t) {
            var e, n, i, o, r, s, a, l = 0;
            if (ft.isFunction(t)) return this.each(function(e) {
                ft(this).removeClass(t.call(this, e, X(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t) for (e = t.match(Lt) || []; n = this[l++]; ) if (o = X(n), 
            i = 1 === n.nodeType && " " + Y(o) + " ") {
                for (s = 0; r = e[s++]; ) for (;i.indexOf(" " + r + " ") > -1; ) i = i.replace(" " + r + " ", " ");
                o !== (a = Y(i)) && n.setAttribute("class", a);
            }
            return this;
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ft.isFunction(t) ? this.each(function(n) {
                ft(this).toggleClass(t.call(this, n, X(this), e), e);
            }) : this.each(function() {
                var e, i, o, r;
                if ("string" === n) for (i = 0, o = ft(this), r = t.match(Lt) || []; e = r[i++]; ) o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else void 0 !== t && "boolean" !== n || ((e = X(this)) && jt.set(this, "__className__", e), 
                this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : jt.get(this, "__className__") || ""));
            });
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++]; ) if (1 === n.nodeType && (" " + Y(X(n)) + " ").indexOf(e) > -1) return !0;
            return !1;
        }
    });
    var xe = /\r/g;
    ft.fn.extend({
        val: function(t) {
            var e, n, i, o = this[0];
            {
                if (arguments.length) return i = ft.isFunction(t), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (null == (o = i ? t.call(this, n, ft(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : ft.isArray(o) && (o = ft.map(o, function(t) {
                        return null == t ? "" : t + "";
                    })), (e = ft.valHooks[this.type] || ft.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o));
                });
                if (o) return (e = ft.valHooks[o.type] || ft.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, 
                "string" == typeof n ? n.replace(xe, "") : null == n ? "" : n);
            }
        }
    }), ft.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = ft.find.attr(t, "value");
                    return null != e ? e : Y(ft.text(t));
                }
            },
            select: {
                get: function(t) {
                    var e, n, i, o = t.options, r = t.selectedIndex, s = "select-one" === t.type, a = s ? null : [], l = s ? r + 1 : o.length;
                    for (i = r < 0 ? l : s ? r : 0; i < l; i++) if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !ft.nodeName(n.parentNode, "optgroup"))) {
                        if (e = ft(n).val(), s) return e;
                        a.push(e);
                    }
                    return a;
                },
                set: function(t, e) {
                    for (var n, i, o = t.options, r = ft.makeArray(e), s = o.length; s--; ) ((i = o[s]).selected = ft.inArray(ft.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), r;
                }
            }
        }
    }), ft.each([ "radio", "checkbox" ], function() {
        ft.valHooks[this] = {
            set: function(t, e) {
                if (ft.isArray(e)) return t.checked = ft.inArray(ft(t).val(), e) > -1;
            }
        }, dt.checkOn || (ft.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value;
        });
    });
    var be = /^(?:focusinfocus|focusoutblur)$/;
    ft.extend(ft.event, {
        trigger: function(e, n, i, o) {
            var r, s, a, l, c, u, h, d = [ i || et ], f = ct.call(e, "type") ? e.type : e, p = ct.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = i = i || et, 3 !== i.nodeType && 8 !== i.nodeType && !be.test(f + ft.event.triggered) && (f.indexOf(".") > -1 && (f = (p = f.split(".")).shift(), 
            p.sort()), c = f.indexOf(":") < 0 && "on" + f, e = e[ft.expando] ? e : new ft.Event(f, "object" == typeof e && e), 
            e.isTrigger = o ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            e.result = void 0, e.target || (e.target = i), n = null == n ? [ e ] : ft.makeArray(n, [ e ]), 
            h = ft.event.special[f] || {}, o || !h.trigger || !1 !== h.trigger.apply(i, n))) {
                if (!o && !h.noBubble && !ft.isWindow(i)) {
                    for (l = h.delegateType || f, be.test(l + f) || (s = s.parentNode); s; s = s.parentNode) d.push(s), 
                    a = s;
                    a === (i.ownerDocument || et) && d.push(a.defaultView || a.parentWindow || t);
                }
                for (r = 0; (s = d[r++]) && !e.isPropagationStopped(); ) e.type = r > 1 ? l : h.bindType || f, 
                (u = (jt.get(s, "events") || {})[e.type] && jt.get(s, "handle")) && u.apply(s, n), 
                (u = c && s[c]) && u.apply && Ft(s) && (e.result = u.apply(s, n), !1 === e.result && e.preventDefault());
                return e.type = f, o || e.isDefaultPrevented() || h._default && !1 !== h._default.apply(d.pop(), n) || !Ft(i) || c && ft.isFunction(i[f]) && !ft.isWindow(i) && ((a = i[c]) && (i[c] = null), 
                ft.event.triggered = f, i[f](), ft.event.triggered = void 0, a && (i[c] = a)), e.result;
            }
        },
        simulate: function(t, e, n) {
            var i = ft.extend(new ft.Event(), n, {
                type: t,
                isSimulated: !0
            });
            ft.event.trigger(i, null, e);
        }
    }), ft.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                ft.event.trigger(t, e, this);
            });
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n) return ft.event.trigger(t, e, n, !0);
        }
    }), ft.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
        ft.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
        };
    }), ft.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t);
        }
    }), dt.focusin = "onfocusin" in t, dt.focusin || ft.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            ft.event.simulate(e, t.target, ft.event.fix(t));
        };
        ft.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this, o = jt.access(i, e);
                o || i.addEventListener(t, n, !0), jt.access(i, e, (o || 0) + 1);
            },
            teardown: function() {
                var i = this.ownerDocument || this, o = jt.access(i, e) - 1;
                o ? jt.access(i, e, o) : (i.removeEventListener(t, n, !0), jt.remove(i, e));
            }
        };
    });
    var we = t.location, Ce = ft.now(), Se = /\?/;
    ft.parseXML = function(e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = new t.DOMParser().parseFromString(e, "text/xml");
        } catch (t) {
            n = void 0;
        }
        return n && !n.getElementsByTagName("parsererror").length || ft.error("Invalid XML: " + e), 
        n;
    };
    var Te = /\[\]$/, ke = /\r?\n/g, Ae = /^(?:submit|button|image|reset|file)$/i, Ee = /^(?:input|select|textarea|keygen)/i;
    ft.param = function(t, e) {
        var n, i = [], o = function(t, e) {
            var n = ft.isFunction(e) ? e() : e;
            i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n);
        };
        if (ft.isArray(t) || t.jquery && !ft.isPlainObject(t)) ft.each(t, function() {
            o(this.name, this.value);
        }); else for (n in t) V(n, t[n], e, o);
        return i.join("&");
    }, ft.fn.extend({
        serialize: function() {
            return ft.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var t = ft.prop(this, "elements");
                return t ? ft.makeArray(t) : this;
            }).filter(function() {
                var t = this.type;
                return this.name && !ft(this).is(":disabled") && Ee.test(this.nodeName) && !Ae.test(t) && (this.checked || !zt.test(t));
            }).map(function(t, e) {
                var n = ft(this).val();
                return null == n ? null : ft.isArray(n) ? ft.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(ke, "\r\n")
                    };
                }) : {
                    name: e.name,
                    value: n.replace(ke, "\r\n")
                };
            }).get();
        }
    });
    var Le = /%20/g, Ne = /#.*$/, De = /([?&])_=[^&]*/, Pe = /^(.*?):[ \t]*([^\r\n]*)$/gm, Fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, je = /^(?:GET|HEAD)$/, Me = /^\/\//, Re = {}, He = {}, We = "*/".concat("*"), Oe = et.createElement("a");
    Oe.href = we.href, ft.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: we.href,
            type: "GET",
            isLocal: Fe.test(we.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": We,
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
                "text xml": ft.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Q(Q(t, ft.ajaxSettings), e) : Q(ft.ajaxSettings, t);
        },
        ajaxPrefilter: U(Re),
        ajaxTransport: U(He),
        ajax: function(e, n) {
            function i(e, n, i, a) {
                var c, d, f, b, w, C = n;
                u || (u = !0, l && t.clearTimeout(l), o = void 0, s = a || "", S.readyState = e > 0 ? 4 : 0, 
                c = e >= 200 && e < 300 || 304 === e, i && (b = J(p, S, i)), b = Z(p, b, S, c), 
                c ? (p.ifModified && ((w = S.getResponseHeader("Last-Modified")) && (ft.lastModified[r] = w), 
                (w = S.getResponseHeader("etag")) && (ft.etag[r] = w)), 204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, 
                d = b.data, c = !(f = b.error))) : (f = C, !e && C || (C = "error", e < 0 && (e = 0))), 
                S.status = e, S.statusText = (n || C) + "", c ? v.resolveWith(g, [ d, C, S ]) : v.rejectWith(g, [ S, C, f ]), 
                S.statusCode(x), x = void 0, h && m.trigger(c ? "ajaxSuccess" : "ajaxError", [ S, p, c ? d : f ]), 
                y.fireWith(g, [ S, C ]), h && (m.trigger("ajaxComplete", [ S, p ]), --ft.active || ft.event.trigger("ajaxStop")));
            }
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var o, r, s, a, l, c, u, h, d, f, p = ft.ajaxSetup({}, n), g = p.context || p, m = p.context && (g.nodeType || g.jquery) ? ft(g) : ft.event, v = ft.Deferred(), y = ft.Callbacks("once memory"), x = p.statusCode || {}, b = {}, w = {}, C = "canceled", S = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (u) {
                        if (!a) for (a = {}; e = Pe.exec(s); ) a[e[1].toLowerCase()] = e[2];
                        e = a[t.toLowerCase()];
                    }
                    return null == e ? null : e;
                },
                getAllResponseHeaders: function() {
                    return u ? s : null;
                },
                setRequestHeader: function(t, e) {
                    return null == u && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, b[t] = e), 
                    this;
                },
                overrideMimeType: function(t) {
                    return null == u && (p.mimeType = t), this;
                },
                statusCode: function(t) {
                    var e;
                    if (t) if (u) S.always(t[S.status]); else for (e in t) x[e] = [ x[e], t[e] ];
                    return this;
                },
                abort: function(t) {
                    var e = t || C;
                    return o && o.abort(e), i(0, e), this;
                }
            };
            if (v.promise(S), p.url = ((e || p.url || we.href) + "").replace(Me, we.protocol + "//"), 
            p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(Lt) || [ "" ], 
            null == p.crossDomain) {
                c = et.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = Oe.protocol + "//" + Oe.host != c.protocol + "//" + c.host;
                } catch (t) {
                    p.crossDomain = !0;
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = ft.param(p.data, p.traditional)), 
            G(Re, p, n, S), u) return S;
            (h = ft.event && p.global) && 0 == ft.active++ && ft.event.trigger("ajaxStart"), 
            p.type = p.type.toUpperCase(), p.hasContent = !je.test(p.type), r = p.url.replace(Ne, ""), 
            p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Le, "+")) : (f = p.url.slice(r.length), 
            p.data && (r += (Se.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(De, "$1"), 
            f = (Se.test(r) ? "&" : "?") + "_=" + Ce++ + f), p.url = r + f), p.ifModified && (ft.lastModified[r] && S.setRequestHeader("If-Modified-Since", ft.lastModified[r]), 
            ft.etag[r] && S.setRequestHeader("If-None-Match", ft.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && S.setRequestHeader("Content-Type", p.contentType), 
            S.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + We + "; q=0.01" : "") : p.accepts["*"]);
            for (d in p.headers) S.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, S, p) || u)) return S.abort();
            if (C = "abort", y.add(p.complete), S.done(p.success), S.fail(p.error), o = G(He, p, n, S)) {
                if (S.readyState = 1, h && m.trigger("ajaxSend", [ S, p ]), u) return S;
                p.async && p.timeout > 0 && (l = t.setTimeout(function() {
                    S.abort("timeout");
                }, p.timeout));
                try {
                    u = !1, o.send(b, i);
                } catch (t) {
                    if (u) throw t;
                    i(-1, t);
                }
            } else i(-1, "No Transport");
            return S;
        },
        getJSON: function(t, e, n) {
            return ft.get(t, e, n, "json");
        },
        getScript: function(t, e) {
            return ft.get(t, void 0, e, "script");
        }
    }), ft.each([ "get", "post" ], function(t, e) {
        ft[e] = function(t, n, i, o) {
            return ft.isFunction(n) && (o = o || i, i = n, n = void 0), ft.ajax(ft.extend({
                url: t,
                type: e,
                dataType: o,
                data: n,
                success: i
            }, ft.isPlainObject(t) && t));
        };
    }), ft._evalUrl = function(t) {
        return ft.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        });
    }, ft.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (ft.isFunction(t) && (t = t.call(this[0])), e = ft(t, this[0].ownerDocument).eq(0).clone(!0), 
            this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                return t;
            }).append(this)), this;
        },
        wrapInner: function(t) {
            return ft.isFunction(t) ? this.each(function(e) {
                ft(this).wrapInner(t.call(this, e));
            }) : this.each(function() {
                var e = ft(this), n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t);
            });
        },
        wrap: function(t) {
            var e = ft.isFunction(t);
            return this.each(function(n) {
                ft(this).wrapAll(e ? t.call(this, n) : t);
            });
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                ft(this).replaceWith(this.childNodes);
            }), this;
        }
    }), ft.expr.pseudos.hidden = function(t) {
        return !ft.expr.pseudos.visible(t);
    }, ft.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
    }, ft.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest();
        } catch (t) {}
    };
    var qe = {
        0: 200,
        1223: 204
    }, Be = ft.ajaxSettings.xhr();
    dt.cors = !!Be && "withCredentials" in Be, dt.ajax = Be = !!Be, ft.ajaxTransport(function(e) {
        var n, i;
        if (dt.cors || Be && !e.crossDomain) return {
            send: function(o, r) {
                var s, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (s in e.xhrFields) a[s] = e.xhrFields[s];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (s in o) a.setRequestHeader(s, o[s]);
                n = function(t) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(qe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()));
                    };
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && t.setTimeout(function() {
                        n && i();
                    });
                }, n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null);
                } catch (t) {
                    if (n) throw t;
                }
            },
            abort: function() {
                n && n();
            }
        };
    }), ft.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1);
    }), ft.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return ft.globalEval(t), t;
            }
        }
    }), ft.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }), ft.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function(i, o) {
                    e = ft("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type);
                    }), et.head.appendChild(e[0]);
                },
                abort: function() {
                    n && n();
                }
            };
        }
    });
    var $e = [], Ie = /(=)\?(?=&|$)|\?\?/;
    ft.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = $e.pop() || ft.expando + "_" + Ce++;
            return this[t] = !0, t;
        }
    }), ft.ajaxPrefilter("json jsonp", function(e, n, i) {
        var o, r, s, a = !1 !== e.jsonp && (Ie.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ie.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = ft.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
        a ? e[a] = e[a].replace(Ie, "$1" + o) : !1 !== e.jsonp && (e.url += (Se.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), 
        e.converters["script json"] = function() {
            return s || ft.error(o + " was not called"), s[0];
        }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
            s = arguments;
        }, i.always(function() {
            void 0 === r ? ft(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, 
            $e.push(o)), s && ft.isFunction(r) && r(s[0]), s = r = void 0;
        }), "script";
    }), dt.createHTMLDocument = function() {
        var t = et.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length;
    }(), ft.parseHTML = function(t, e, n) {
        if ("string" != typeof t) return [];
        "boolean" == typeof e && (n = e, e = !1);
        var i, o, r;
        return e || (dt.createHTMLDocument ? ((i = (e = et.implementation.createHTMLDocument("")).createElement("base")).href = et.location.href, 
        e.head.appendChild(i)) : e = et), o = Ct.exec(t), r = !n && [], o ? [ e.createElement(o[1]) ] : (o = x([ t ], e, r), 
        r && r.length && ft(r).remove(), ft.merge([], o.childNodes));
    }, ft.fn.load = function(t, e, n) {
        var i, o, r, s = this, a = t.indexOf(" ");
        return a > -1 && (i = Y(t.slice(a)), t = t.slice(0, a)), ft.isFunction(e) ? (n = e, 
        e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && ft.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments, s.html(i ? ft("<div>").append(ft.parseHTML(t)).find(i) : t);
        }).always(n && function(t, e) {
            s.each(function() {
                n.apply(this, r || [ t.responseText, e, t ]);
            });
        }), this;
    }, ft.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(t, e) {
        ft.fn[e] = function(t) {
            return this.on(e, t);
        };
    }), ft.expr.pseudos.animated = function(t) {
        return ft.grep(ft.timers, function(e) {
            return t === e.elem;
        }).length;
    }, ft.offset = {
        setOffset: function(t, e, n) {
            var i, o, r, s, a, l, c = ft.css(t, "position"), u = ft(t), h = {};
            "static" === c && (t.style.position = "relative"), a = u.offset(), r = ft.css(t, "top"), 
            l = ft.css(t, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, 
            o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), ft.isFunction(e) && (e = e.call(t, n, ft.extend({}, a))), 
            null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + o), 
            "using" in e ? e.using.call(t, h) : u.css(h);
        }
    }, ft.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                ft.offset.setOffset(this, t, e);
            });
            var e, n, i, o, r = this[0];
            if (r) return r.getClientRects().length ? (i = r.getBoundingClientRect(), i.width || i.height ? (o = r.ownerDocument, 
            n = K(o), e = o.documentElement, {
                top: i.top + n.pageYOffset - e.clientTop,
                left: i.left + n.pageXOffset - e.clientLeft
            }) : i) : {
                top: 0,
                left: 0
            };
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0], i = {
                    top: 0,
                    left: 0
                };
                return "fixed" === ft.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), 
                e = this.offset(), ft.nodeName(t[0], "html") || (i = t.offset()), i = {
                    top: i.top + ft.css(t[0], "borderTopWidth", !0),
                    left: i.left + ft.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: e.top - i.top - ft.css(n, "marginTop", !0),
                    left: e.left - i.left - ft.css(n, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === ft.css(t, "position"); ) t = t.offsetParent;
                return t || Ut;
            });
        }
    }), ft.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = "pageYOffset" === e;
        ft.fn[t] = function(i) {
            return Pt(this, function(t, i, o) {
                var r = K(t);
                if (void 0 === o) return r ? r[e] : t[i];
                r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o;
            }, t, i, arguments.length);
        };
    }), ft.each([ "top", "left" ], function(t, e) {
        ft.cssHooks[e] = F(dt.pixelPosition, function(t, n) {
            if (n) return n = P(t, e), oe.test(n) ? ft(t).position()[e] + "px" : n;
        });
    }), ft.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        ft.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            ft.fn[i] = function(o, r) {
                var s = arguments.length && (n || "boolean" != typeof o), a = n || (!0 === o || !0 === r ? "margin" : "border");
                return Pt(this, function(e, n, o) {
                    var r;
                    return ft.isWindow(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, 
                    Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? ft.css(e, n, a) : ft.style(e, n, o, a);
                }, e, s ? o : void 0, s);
            };
        });
    }), ft.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n);
        },
        unbind: function(t, e) {
            return this.off(t, null, e);
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i);
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
        }
    }), ft.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ft;
    });
    var ze = t.jQuery, _e = t.$;
    return ft.noConflict = function(e) {
        return t.$ === ft && (t.$ = _e), e && t.jQuery === ft && (t.jQuery = ze), ft;
    }, e || (t.jQuery = t.$ = ft), ft;
}), function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t);
    } : e(t);
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = t.length, n = rt.type(t);
        return "function" !== n && !rt.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t));
    }
    function i(t, e, n) {
        if (rt.isFunction(e)) return rt.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n;
        });
        if (e.nodeType) return rt.grep(t, function(t) {
            return t === e !== n;
        });
        if ("string" == typeof e) {
            if (ft.test(e)) return rt.filter(e, t, n);
            e = rt.filter(e, t);
        }
        return rt.grep(t, function(t) {
            return rt.inArray(t, e) >= 0 !== n;
        });
    }
    function o(t, e) {
        do {
            t = t[e];
        } while (t && 1 !== t.nodeType);
        return t;
    }
    function r(t) {
        var e = bt[t] = {};
        return rt.each(t.match(xt) || [], function(t, n) {
            e[n] = !0;
        }), e;
    }
    function s() {
        gt.addEventListener ? (gt.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (gt.detachEvent("onreadystatechange", a), 
        t.detachEvent("onload", a));
    }
    function a() {
        (gt.addEventListener || "load" === event.type || "complete" === gt.readyState) && (s(), 
        rt.ready());
    }
    function l(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var i = "data-" + e.replace(kt, "-$1").toLowerCase();
            if ("string" == typeof (n = t.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Tt.test(n) ? rt.parseJSON(n) : n);
                } catch (t) {}
                rt.data(t, e, n);
            } else n = void 0;
        }
        return n;
    }
    function c(t) {
        var e;
        for (e in t) if (("data" !== e || !rt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0;
    }
    function u(t, e, n, i) {
        if (rt.acceptData(t)) {
            var o, r, s = rt.expando, a = t.nodeType, l = a ? rt.cache : t, c = a ? t[s] : t[s] && s;
            if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof e) return c || (c = a ? t[s] = U.pop() || rt.guid++ : s), 
            l[c] || (l[c] = a ? {} : {
                toJSON: rt.noop
            }), ("object" == typeof e || "function" == typeof e) && (i ? l[c] = rt.extend(l[c], e) : l[c].data = rt.extend(l[c].data, e)), 
            r = l[c], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[rt.camelCase(e)] = n), 
            "string" == typeof e ? null == (o = r[e]) && (o = r[rt.camelCase(e)]) : o = r, o;
        }
    }
    function h(t, e, n) {
        if (rt.acceptData(t)) {
            var i, o, r = t.nodeType, s = r ? rt.cache : t, a = r ? t[rt.expando] : rt.expando;
            if (s[a]) {
                if (e && (i = n ? s[a] : s[a].data)) {
                    rt.isArray(e) ? e = e.concat(rt.map(e, rt.camelCase)) : e in i ? e = [ e ] : (e = rt.camelCase(e), 
                    e = e in i ? [ e ] : e.split(" ")), o = e.length;
                    for (;o--; ) delete i[e[o]];
                    if (n ? !c(i) : !rt.isEmptyObject(i)) return;
                }
                (n || (delete s[a].data, c(s[a]))) && (r ? rt.cleanData([ t ], !0) : it.deleteExpando || s != s.window ? delete s[a] : s[a] = null);
            }
        }
    }
    function d() {
        return !0;
    }
    function f() {
        return !1;
    }
    function p() {
        try {
            return gt.activeElement;
        } catch (t) {}
    }
    function g(t) {
        var e = Ht.split("|"), n = t.createDocumentFragment();
        if (n.createElement) for (;e.length; ) n.createElement(e.pop());
        return n;
    }
    function m(t, e) {
        var n, i, o = 0, r = typeof t.getElementsByTagName !== St ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== St ? t.querySelectorAll(e || "*") : void 0;
        if (!r) for (r = [], n = t.childNodes || t; null != (i = n[o]); o++) !e || rt.nodeName(i, e) ? r.push(i) : rt.merge(r, m(i, e));
        return void 0 === e || e && rt.nodeName(t, e) ? rt.merge([ t ], r) : r;
    }
    function v(t) {
        Dt.test(t.type) && (t.defaultChecked = t.checked);
    }
    function y(t, e) {
        return rt.nodeName(t, "table") && rt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t;
    }
    function x(t) {
        return t.type = (null !== rt.find.attr(t, "type")) + "/" + t.type, t;
    }
    function b(t) {
        var e = Vt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t;
    }
    function w(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++) rt._data(n, "globalEval", !e || rt._data(e[i], "globalEval"));
    }
    function C(t, e) {
        if (1 === e.nodeType && rt.hasData(t)) {
            var n, i, o, r = rt._data(t), s = rt._data(e, r), a = r.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a) for (i = 0, o = a[n].length; o > i; i++) rt.event.add(e, n, a[n][i]);
            }
            s.data && (s.data = rt.extend({}, s.data));
        }
    }
    function S(t, e) {
        var n, i, o;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !it.noCloneEvent && e[rt.expando]) {
                o = rt._data(e);
                for (i in o.events) rt.removeEvent(e, i, o.handle);
                e.removeAttribute(rt.expando);
            }
            "script" === n && e.text !== t.text ? (x(e).text = t.text, b(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), 
            it.html5Clone && t.innerHTML && !rt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Dt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, 
            e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue);
        }
    }
    function T(e, n) {
        var i = rt(n.createElement(e)).appendTo(n.body), o = t.getDefaultComputedStyle ? t.getDefaultComputedStyle(i[0]).display : rt.css(i[0], "display");
        return i.detach(), o;
    }
    function k(t) {
        var e = gt, n = Zt[t];
        return n || ("none" !== (n = T(t, e)) && n || (Jt = (Jt || rt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), 
        (e = (Jt[0].contentWindow || Jt[0].contentDocument).document).write(), e.close(), 
        n = T(t, e), Jt.detach()), Zt[t] = n), n;
    }
    function A(t, e) {
        return {
            get: function() {
                var n = t();
                if (null != n) return n ? void delete this.get : (this.get = e).apply(this, arguments);
            }
        };
    }
    function E(t, e) {
        if (e in t) return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = he.length; o--; ) if ((e = he[o] + n) in t) return e;
        return i;
    }
    function L(t, e) {
        for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++) (i = t[s]).style && (r[s] = rt._data(i, "olddisplay"), 
        n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Lt(i) && (r[s] = rt._data(i, "olddisplay", k(i.nodeName)))) : r[s] || (o = Lt(i), 
        (n && "none" !== n || !o) && rt._data(i, "olddisplay", o ? n : rt.css(i, "display"))));
        for (s = 0; a > s; s++) (i = t[s]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
        return t;
    }
    function N(t, e, n) {
        var i = ae.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e;
    }
    function D(t, e, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += rt.css(t, n + Et[r], !0, o)), 
        i ? ("content" === n && (s -= rt.css(t, "padding" + Et[r], !0, o)), "margin" !== n && (s -= rt.css(t, "border" + Et[r] + "Width", !0, o))) : (s += rt.css(t, "padding" + Et[r], !0, o), 
        "padding" !== n && (s += rt.css(t, "border" + Et[r] + "Width", !0, o)));
        return s;
    }
    function P(t, e, n) {
        var i = !0, o = "width" === e ? t.offsetWidth : t.offsetHeight, r = Kt(t), s = it.boxSizing() && "border-box" === rt.css(t, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if ((0 > (o = te(t, e, r)) || null == o) && (o = t.style[e]), ne.test(o)) return o;
            i = s && (it.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0;
        }
        return o + D(t, e, n || (s ? "border" : "content"), i, r) + "px";
    }
    function F(t, e, n, i, o) {
        return new F.prototype.init(t, e, n, i, o);
    }
    function j() {
        return setTimeout(function() {
            de = void 0;
        }), de = rt.now();
    }
    function M(t, e) {
        var n, i = {
            height: t
        }, o = 0;
        for (e = e ? 1 : 0; 4 > o; o += 2 - e) n = Et[o], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i;
    }
    function R(t, e, n) {
        for (var i, o = (ye[e] || []).concat(ye["*"]), r = 0, s = o.length; s > r; r++) if (i = o[r].call(n, e, t)) return i;
    }
    function H(t, e, n) {
        var i, o, r, s, a, l, c, u, h = this, d = {}, f = t.style, p = t.nodeType && Lt(t), g = rt._data(t, "fxshow");
        n.queue || (null == (a = rt._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, 
        a.empty.fire = function() {
            a.unqueued || l();
        }), a.unqueued++, h.always(function() {
            h.always(function() {
                a.unqueued--, rt.queue(t, "fx").length || a.empty.fire();
            });
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [ f.overflow, f.overflowX, f.overflowY ], 
        c = rt.css(t, "display"), u = k(t.nodeName), "none" === c && (c = u), "inline" === c && "none" === rt.css(t, "float") && (it.inlineBlockNeedsLayout && "inline" !== u ? f.zoom = 1 : f.display = "inline-block")), 
        n.overflow && (f.overflow = "hidden", it.shrinkWrapBlocks() || h.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2];
        }));
        for (i in e) if (o = e[i], pe.exec(o)) {
            if (delete e[i], r = r || "toggle" === o, o === (p ? "hide" : "show")) {
                if ("show" !== o || !g || void 0 === g[i]) continue;
                p = !0;
            }
            d[i] = g && g[i] || rt.style(t, i);
        }
        if (!rt.isEmptyObject(d)) {
            g ? "hidden" in g && (p = g.hidden) : g = rt._data(t, "fxshow", {}), r && (g.hidden = !p), 
            p ? rt(t).show() : h.done(function() {
                rt(t).hide();
            }), h.done(function() {
                var e;
                rt._removeData(t, "fxshow");
                for (e in d) rt.style(t, e, d[e]);
            });
            for (i in d) s = R(p ? g[i] : 0, i, h), i in g || (g[i] = s.start, p && (s.end = s.start, 
            s.start = "width" === i || "height" === i ? 1 : 0));
        }
    }
    function W(t, e) {
        var n, i, o, r, s;
        for (n in t) if (i = rt.camelCase(n), o = e[i], r = t[n], rt.isArray(r) && (o = r[1], 
        r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = rt.cssHooks[i]) && "expand" in s) {
            r = s.expand(r), delete t[i];
            for (n in r) n in t || (t[n] = r[n], e[n] = o);
        } else e[i] = o;
    }
    function O(t, e, n) {
        var i, o, r = 0, s = ve.length, a = rt.Deferred().always(function() {
            delete l.elem;
        }), l = function() {
            if (o) return !1;
            for (var e = de || j(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; s > r; r++) c.tweens[r].run(i);
            return a.notifyWith(t, [ c, i, n ]), 1 > i && s ? n : (a.resolveWith(t, [ c ]), 
            !1);
        }, c = a.promise({
            elem: t,
            props: rt.extend({}, e),
            opts: rt.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: de || j(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var i = rt.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(i), i;
            },
            stop: function(e) {
                var n = 0, i = e ? c.tweens.length : 0;
                if (o) return this;
                for (o = !0; i > n; n++) c.tweens[n].run(1);
                return e ? a.resolveWith(t, [ c, e ]) : a.rejectWith(t, [ c, e ]), this;
            }
        }), u = c.props;
        for (W(u, c.opts.specialEasing); s > r; r++) if (i = ve[r].call(c, t, u, c.opts)) return i;
        return rt.map(u, R, c), rt.isFunction(c.opts.start) && c.opts.start.call(t, c), 
        rt.fx.timer(rt.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always);
    }
    function q(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, o = 0, r = e.toLowerCase().match(xt) || [];
            if (rt.isFunction(n)) for (;i = r[o++]; ) "+" === i.charAt(0) ? (i = i.slice(1) || "*", 
            (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n);
        };
    }
    function B(t, e, n, i) {
        function o(a) {
            var l;
            return r[a] = !0, rt.each(t[a] || [], function(t, a) {
                var c = a(e, n, i);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c), 
                o(c), !1);
            }), l;
        }
        var r = {}, s = t === Ie;
        return o(e.dataTypes[0]) || !r["*"] && o("*");
    }
    function $(t, e) {
        var n, i, o = rt.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
        return n && rt.extend(!0, t, n), t;
    }
    function I(t, e, n) {
        for (var i, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0]; ) l.shift(), 
        void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
        if (o) for (s in a) if (a[s] && a[s].test(o)) {
            l.unshift(s);
            break;
        }
        if (l[0] in n) r = l[0]; else {
            for (s in n) {
                if (!l[0] || t.converters[s + " " + l[0]]) {
                    r = s;
                    break;
                }
                i || (i = s);
            }
            r = r || i;
        }
        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0;
    }
    function z(t, e, n, i) {
        var o, r, s, a, l, c = {}, u = t.dataTypes.slice();
        if (u[1]) for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
        for (r = u.shift(); r; ) if (t.responseFields[r] && (n[t.responseFields[r]] = e), 
        !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
            if (!(s = c[l + " " + r] || c["* " + r])) for (o in c) if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                break;
            }
            if (!0 !== s) if (s && t.throws) e = s(e); else try {
                e = s(e);
            } catch (t) {
                return {
                    state: "parsererror",
                    error: s ? t : "No conversion from " + l + " to " + r
                };
            }
        }
        return {
            state: "success",
            data: e
        };
    }
    function _(t, e, n, i) {
        var o;
        if (rt.isArray(e)) rt.each(e, function(e, o) {
            n || Ye.test(t) ? i(t, o) : _(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i);
        }); else if (n || "object" !== rt.type(e)) i(t, e); else for (o in e) _(t + "[" + o + "]", e[o], n, i);
    }
    function Y() {
        try {
            return new t.XMLHttpRequest();
        } catch (t) {}
    }
    function X() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {}
    }
    function V(t) {
        return rt.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow);
    }
    var U = [], G = U.slice, Q = U.concat, J = U.push, Z = U.indexOf, K = {}, tt = K.toString, et = K.hasOwnProperty, nt = "".trim, it = {}, ot = "1.11.0", rt = function(t, e) {
        return new rt.fn.init(t, e);
    }, st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, at = /^-ms-/, lt = /-([\da-z])/gi, ct = function(t, e) {
        return e.toUpperCase();
    };
    rt.fn = rt.prototype = {
        jquery: ot,
        constructor: rt,
        selector: "",
        length: 0,
        toArray: function() {
            return G.call(this);
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : G.call(this);
        },
        pushStack: function(t) {
            var e = rt.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e;
        },
        each: function(t, e) {
            return rt.each(this, t, e);
        },
        map: function(t) {
            return this.pushStack(rt.map(this, function(e, n) {
                return t.call(e, n, e);
            }));
        },
        slice: function() {
            return this.pushStack(G.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(t) {
            var e = this.length, n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [ this[n] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: J,
        sort: U.sort,
        splice: U.splice
    }, rt.extend = rt.fn.extend = function() {
        var t, e, n, i, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || rt.isFunction(s) || (s = {}), 
        a === l && (s = this, a--); l > a; a++) if (null != (o = arguments[a])) for (i in o) t = s[i], 
        n = o[i], s !== n && (c && n && (rt.isPlainObject(n) || (e = rt.isArray(n))) ? (e ? (e = !1, 
        r = t && rt.isArray(t) ? t : []) : r = t && rt.isPlainObject(t) ? t : {}, s[i] = rt.extend(c, r, n)) : void 0 !== n && (s[i] = n));
        return s;
    }, rt.extend({
        expando: "jQuery" + (ot + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t);
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === rt.type(t);
        },
        isArray: Array.isArray || function(t) {
            return "array" === rt.type(t);
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
            if (!t || "object" !== rt.type(t) || t.nodeType || rt.isWindow(t)) return !1;
            try {
                if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (t) {
                return !1;
            }
            if (it.ownLast) for (e in t) return et.call(t, e);
            for (e in t) ;
            return void 0 === e || et.call(t, e);
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? K[tt.call(t)] || "object" : typeof t;
        },
        globalEval: function(e) {
            e && rt.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e);
            })(e);
        },
        camelCase: function(t) {
            return t.replace(at, "ms-").replace(lt, ct);
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        },
        each: function(t, e, i) {
            var o = 0, r = t.length, s = n(t);
            if (i) {
                if (s) for (;r > o && !1 !== e.apply(t[o], i); o++) ; else for (o in t) if (!1 === e.apply(t[o], i)) break;
            } else if (s) for (;r > o && !1 !== e.call(t[o], o, t[o]); o++) ; else for (o in t) if (!1 === e.call(t[o], o, t[o])) break;
            return t;
        },
        trim: nt && !nt.call("\ufeff ") ? function(t) {
            return null == t ? "" : nt.call(t);
        } : function(t) {
            return null == t ? "" : (t + "").replace(st, "");
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? rt.merge(i, "string" == typeof t ? [ t ] : t) : J.call(i, t)), 
            i;
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (Z) return Z.call(e, t, n);
                for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++) if (n in e && e[n] === t) return n;
            }
            return -1;
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, o = t.length; n > i; ) t[o++] = e[i++];
            if (n !== n) for (;void 0 !== e[i]; ) t[o++] = e[i++];
            return t.length = o, t;
        },
        grep: function(t, e, n) {
            for (var i = [], o = 0, r = t.length, s = !n; r > o; o++) !e(t[o], o) !== s && i.push(t[o]);
            return i;
        },
        map: function(t, e, i) {
            var o, r = 0, s = t.length, a = [];
            if (n(t)) for (;s > r; r++) null != (o = e(t[r], r, i)) && a.push(o); else for (r in t) null != (o = e(t[r], r, i)) && a.push(o);
            return Q.apply([], a);
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, o;
            return "string" == typeof e && (o = t[e], e = t, t = o), rt.isFunction(t) ? (n = G.call(arguments, 2), 
            i = function() {
                return t.apply(e || this, n.concat(G.call(arguments)));
            }, i.guid = t.guid = t.guid || rt.guid++, i) : void 0;
        },
        now: function() {
            return +new Date();
        },
        support: it
    }), rt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        K["[object " + e + "]"] = e.toLowerCase();
    });
    var ut = function(t) {
        function e(t, e, n, i) {
            var o, r, s, a, c, d, f, p, g, m;
            if ((e ? e.ownerDocument || e : O) !== D && N(e), e = e || D, n = n || [], !t || "string" != typeof t) return n;
            if (1 !== (a = e.nodeType) && 9 !== a) return [];
            if (F && !i) {
                if (o = mt.exec(t)) if (s = o[1]) {
                    if (9 === a) {
                        if (!(r = e.getElementById(s)) || !r.parentNode) return n;
                        if (r.id === s) return n.push(r), n;
                    } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && H(e, r) && r.id === s) return n.push(r), 
                    n;
                } else {
                    if (o[2]) return J.apply(n, e.getElementsByTagName(t)), n;
                    if ((s = o[3]) && w.getElementsByClassName && e.getElementsByClassName) return J.apply(n, e.getElementsByClassName(s)), 
                    n;
                }
                if (w.qsa && (!j || !j.test(t))) {
                    if (p = f = W, g = e, m = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (d = u(t), (f = e.getAttribute("id")) ? p = f.replace(yt, "\\$&") : e.setAttribute("id", p), 
                        p = "[id='" + p + "'] ", c = d.length; c--; ) d[c] = p + h(d[c]);
                        g = vt.test(t) && l(e.parentNode) || e, m = d.join(",");
                    }
                    if (m) try {
                        return J.apply(n, g.querySelectorAll(m)), n;
                    } catch (t) {} finally {
                        f || e.removeAttribute("id");
                    }
                }
            }
            return x(t.replace(st, "$1"), e, n, i);
        }
        function n() {
            function t(n, i) {
                return e.push(n + " ") > C.cacheLength && delete t[e.shift()], t[n + " "] = i;
            }
            var e = [];
            return t;
        }
        function i(t) {
            return t[W] = !0, t;
        }
        function o(t) {
            var e = D.createElement("div");
            try {
                return !!t(e);
            } catch (t) {
                return !1;
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null;
            }
        }
        function r(t, e) {
            for (var n = t.split("|"), i = t.length; i--; ) C.attrHandle[n[i]] = e;
        }
        function s(t, e) {
            var n = e && t, i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
            if (i) return i;
            if (n) for (;n = n.nextSibling; ) if (n === e) return -1;
            return t ? 1 : -1;
        }
        function a(t) {
            return i(function(e) {
                return e = +e, i(function(n, i) {
                    for (var o, r = t([], n.length, e), s = r.length; s--; ) n[o = r[s]] && (n[o] = !(i[o] = n[o]));
                });
            });
        }
        function l(t) {
            return t && typeof t.getElementsByTagName !== Y && t;
        }
        function c() {}
        function u(t, n) {
            var i, o, r, s, a, l, c, u = I[t + " "];
            if (u) return n ? 0 : u.slice(0);
            for (a = t, l = [], c = C.preFilter; a; ) {
                (!i || (o = at.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(r = [])), 
                i = !1, (o = lt.exec(a)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(st, " ")
                }), a = a.slice(i.length));
                for (s in C.filter) !(o = dt[s].exec(a)) || c[s] && !(o = c[s](o)) || (i = o.shift(), 
                r.push({
                    value: i,
                    type: s,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break;
            }
            return n ? a.length : a ? e.error(t) : I(t, l).slice(0);
        }
        function h(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
            return i;
        }
        function d(t, e, n) {
            var i = e.dir, o = n && "parentNode" === i, r = B++;
            return e.first ? function(e, n, r) {
                for (;e = e[i]; ) if (1 === e.nodeType || o) return t(e, n, r);
            } : function(e, n, s) {
                var a, l, c = [ q, r ];
                if (s) {
                    for (;e = e[i]; ) if ((1 === e.nodeType || o) && t(e, n, s)) return !0;
                } else for (;e = e[i]; ) if (1 === e.nodeType || o) {
                    if (l = e[W] || (e[W] = {}), (a = l[i]) && a[0] === q && a[1] === r) return c[2] = a[2];
                    if (l[i] = c, c[2] = t(e, n, s)) return !0;
                }
            };
        }
        function f(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var o = t.length; o--; ) if (!t[o](e, n, i)) return !1;
                return !0;
            } : t[0];
        }
        function p(t, e, n, i, o) {
            for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++) (r = t[a]) && (!n || n(r, i, o)) && (s.push(r), 
            c && e.push(a));
            return s;
        }
        function g(t, e, n, o, r, s) {
            return o && !o[W] && (o = g(o)), r && !r[W] && (r = g(r, s)), i(function(i, s, a, l) {
                var c, u, h, d = [], f = [], g = s.length, m = i || y(e || "*", a.nodeType ? [ a ] : a, []), v = !t || !i && e ? m : p(m, d, t, a, l), x = n ? r || (i ? t : g || o) ? [] : s : v;
                if (n && n(v, x, a, l), o) for (c = p(x, f), o(c, [], a, l), u = c.length; u--; ) (h = c[u]) && (x[f[u]] = !(v[f[u]] = h));
                if (i) {
                    if (r || t) {
                        if (r) {
                            for (c = [], u = x.length; u--; ) (h = x[u]) && c.push(v[u] = h);
                            r(null, x = [], c, l);
                        }
                        for (u = x.length; u--; ) (h = x[u]) && (c = r ? K.call(i, h) : d[u]) > -1 && (i[c] = !(s[c] = h));
                    }
                } else x = p(x === s ? x.splice(g, x.length) : x), r ? r(null, s, x, l) : J.apply(s, x);
            });
        }
        function m(t) {
            for (var e, n, i, o = t.length, r = C.relative[t[0].type], s = r || C.relative[" "], a = r ? 1 : 0, l = d(function(t) {
                return t === e;
            }, s, !0), c = d(function(t) {
                return K.call(e, t) > -1;
            }, s, !0), u = [ function(t, n, i) {
                return !r && (i || n !== A) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
            } ]; o > a; a++) if (n = C.relative[t[a].type]) u = [ d(f(u), n) ]; else {
                if ((n = C.filter[t[a].type].apply(null, t[a].matches))[W]) {
                    for (i = ++a; o > i && !C.relative[t[i].type]; i++) ;
                    return g(a > 1 && f(u), a > 1 && h(t.slice(0, a - 1).concat({
                        value: " " === t[a - 2].type ? "*" : ""
                    })).replace(st, "$1"), n, i > a && m(t.slice(a, i)), o > i && m(t = t.slice(i)), o > i && h(t));
                }
                u.push(n);
            }
            return f(u);
        }
        function v(t, n) {
            var o = n.length > 0, r = t.length > 0, s = function(i, s, a, l, c) {
                var u, h, d, f = 0, g = "0", m = i && [], v = [], y = A, x = i || r && C.find.TAG("*", c), b = q += null == y ? 1 : Math.random() || .1, w = x.length;
                for (c && (A = s !== D && s); g !== w && null != (u = x[g]); g++) {
                    if (r && u) {
                        for (h = 0; d = t[h++]; ) if (d(u, s, a)) {
                            l.push(u);
                            break;
                        }
                        c && (q = b);
                    }
                    o && ((u = !d && u) && f--, i && m.push(u));
                }
                if (f += g, o && g !== f) {
                    for (h = 0; d = n[h++]; ) d(m, v, s, a);
                    if (i) {
                        if (f > 0) for (;g--; ) m[g] || v[g] || (v[g] = G.call(l));
                        v = p(v);
                    }
                    J.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(l);
                }
                return c && (q = b, A = y), m;
            };
            return o ? i(s) : s;
        }
        function y(t, n, i) {
            for (var o = 0, r = n.length; r > o; o++) e(t, n[o], i);
            return i;
        }
        function x(t, e, n, i) {
            var o, r, s, a, c, d = u(t);
            if (!i && 1 === d.length) {
                if ((r = d[0] = d[0].slice(0)).length > 2 && "ID" === (s = r[0]).type && w.getById && 9 === e.nodeType && F && C.relative[r[1].type]) {
                    if (!(e = (C.find.ID(s.matches[0].replace(xt, bt), e) || [])[0])) return n;
                    t = t.slice(r.shift().value.length);
                }
                for (o = dt.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !C.relative[a = s.type]); ) if ((c = C.find[a]) && (i = c(s.matches[0].replace(xt, bt), vt.test(r[0].type) && l(e.parentNode) || e))) {
                    if (r.splice(o, 1), !(t = i.length && h(r))) return J.apply(n, i), n;
                    break;
                }
            }
            return k(t, d)(i, e, !F, n, vt.test(t) && l(e.parentNode) || e), n;
        }
        var b, w, C, S, T, k, A, E, L, N, D, P, F, j, M, R, H, W = "sizzle" + -new Date(), O = t.document, q = 0, B = 0, $ = n(), I = n(), z = n(), _ = function(t, e) {
            return t === e && (L = !0), 0;
        }, Y = "undefined", X = 1 << 31, V = {}.hasOwnProperty, U = [], G = U.pop, Q = U.push, J = U.push, Z = U.slice, K = U.indexOf || function(t) {
            for (var e = 0, n = this.length; n > e; e++) if (this[e] === t) return e;
            return -1;
        }, tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", et = "[\\x20\\t\\r\\n\\f]", nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", it = nt.replace("w", "w#"), ot = "\\[" + et + "*(" + nt + ")" + et + "*(?:([*^$|!~]?=)" + et + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + it + ")|)|)" + et + "*\\]", rt = ":(" + nt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ot.replace(3, 8) + ")*)|.*)\\)|)", st = new RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"), at = new RegExp("^" + et + "*," + et + "*"), lt = new RegExp("^" + et + "*([>+~]|" + et + ")" + et + "*"), ct = new RegExp("=" + et + "*([^\\]'\"]*?)" + et + "*\\]", "g"), ut = new RegExp(rt), ht = new RegExp("^" + it + "$"), dt = {
            ID: new RegExp("^#(" + nt + ")"),
            CLASS: new RegExp("^\\.(" + nt + ")"),
            TAG: new RegExp("^(" + nt.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ot),
            PSEUDO: new RegExp("^" + rt),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + tt + ")$", "i"),
            needsContext: new RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
        }, ft = /^(?:input|select|textarea|button)$/i, pt = /^h\d$/i, gt = /^[^{]+\{\s*\[native \w/, mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, vt = /[+~]/, yt = /'|\\/g, xt = new RegExp("\\\\([\\da-f]{1,6}" + et + "?|(" + et + ")|.)", "ig"), bt = function(t, e, n) {
            var i = "0x" + e - 65536;
            return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
        };
        try {
            J.apply(U = Z.call(O.childNodes), O.childNodes), U[O.childNodes.length].nodeType;
        } catch (t) {
            J = {
                apply: U.length ? function(t, e) {
                    Q.apply(t, Z.call(e));
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++]; ) ;
                    t.length = n - 1;
                }
            };
        }
        w = e.support = {}, T = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName;
        }, N = e.setDocument = function(t) {
            var e, n = t ? t.ownerDocument || t : O, i = n.defaultView;
            return n !== D && 9 === n.nodeType && n.documentElement ? (D = n, P = n.documentElement, 
            F = !T(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                N();
            }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                N();
            })), w.attributes = o(function(t) {
                return t.className = "i", !t.getAttribute("className");
            }), w.getElementsByTagName = o(function(t) {
                return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length;
            }), w.getElementsByClassName = gt.test(n.getElementsByClassName) && o(function(t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 
                2 === t.getElementsByClassName("i").length;
            }), w.getById = o(function(t) {
                return P.appendChild(t).id = W, !n.getElementsByName || !n.getElementsByName(W).length;
            }), w.getById ? (C.find.ID = function(t, e) {
                if (typeof e.getElementById !== Y && F) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [ n ] : [];
                }
            }, C.filter.ID = function(t) {
                var e = t.replace(xt, bt);
                return function(t) {
                    return t.getAttribute("id") === e;
                };
            }) : (delete C.find.ID, C.filter.ID = function(t) {
                var e = t.replace(xt, bt);
                return function(t) {
                    var n = typeof t.getAttributeNode !== Y && t.getAttributeNode("id");
                    return n && n.value === e;
                };
            }), C.find.TAG = w.getElementsByTagName ? function(t, e) {
                return typeof e.getElementsByTagName !== Y ? e.getElementsByTagName(t) : void 0;
            } : function(t, e) {
                var n, i = [], o = 0, r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (;n = r[o++]; ) 1 === n.nodeType && i.push(n);
                    return i;
                }
                return r;
            }, C.find.CLASS = w.getElementsByClassName && function(t, e) {
                return typeof e.getElementsByClassName !== Y && F ? e.getElementsByClassName(t) : void 0;
            }, M = [], j = [], (w.qsa = gt.test(n.querySelectorAll)) && (o(function(t) {
                t.innerHTML = "<select t=''><option selected=''></option></select>", t.querySelectorAll("[t^='']").length && j.push("[*^$]=" + et + "*(?:''|\"\")"), 
                t.querySelectorAll("[selected]").length || j.push("\\[" + et + "*(?:value|" + tt + ")"), 
                t.querySelectorAll(":checked").length || j.push(":checked");
            }), o(function(t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && j.push("name" + et + "*[*^$|!~]?="), 
                t.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), 
                j.push(",.*:");
            })), (w.matchesSelector = gt.test(R = P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function(t) {
                w.disconnectedMatch = R.call(t, "div"), R.call(t, "[s!='']:x"), M.push("!=", rt);
            }), j = j.length && new RegExp(j.join("|")), M = M.length && new RegExp(M.join("|")), 
            e = gt.test(P.compareDocumentPosition), H = e || gt.test(P.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)));
            } : function(t, e) {
                if (e) for (;e = e.parentNode; ) if (e === t) return !0;
                return !1;
            }, _ = e ? function(t, e) {
                if (t === e) return L = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 
                1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === O && H(O, t) ? -1 : e === n || e.ownerDocument === O && H(O, e) ? 1 : E ? K.call(E, t) - K.call(E, e) : 0 : 4 & i ? -1 : 1);
            } : function(t, e) {
                if (t === e) return L = !0, 0;
                var i, o = 0, r = t.parentNode, a = e.parentNode, l = [ t ], c = [ e ];
                if (!r || !a) return t === n ? -1 : e === n ? 1 : r ? -1 : a ? 1 : E ? K.call(E, t) - K.call(E, e) : 0;
                if (r === a) return s(t, e);
                for (i = t; i = i.parentNode; ) l.unshift(i);
                for (i = e; i = i.parentNode; ) c.unshift(i);
                for (;l[o] === c[o]; ) o++;
                return o ? s(l[o], c[o]) : l[o] === O ? -1 : c[o] === O ? 1 : 0;
            }, n) : D;
        }, e.matches = function(t, n) {
            return e(t, null, null, n);
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== D && N(t), n = n.replace(ct, "='$1']"), !(!w.matchesSelector || !F || M && M.test(n) || j && j.test(n))) try {
                var i = R.call(t, n);
                if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i;
            } catch (t) {}
            return e(n, D, null, [ t ]).length > 0;
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== D && N(t), H(t, e);
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== D && N(t);
            var n = C.attrHandle[e.toLowerCase()], i = n && V.call(C.attrHandle, e.toLowerCase()) ? n(t, e, !F) : void 0;
            return void 0 !== i ? i : w.attributes || !F ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t);
        }, e.uniqueSort = function(t) {
            var e, n = [], i = 0, o = 0;
            if (L = !w.detectDuplicates, E = !w.sortStable && t.slice(0), t.sort(_), L) {
                for (;e = t[o++]; ) e === t[o] && (i = n.push(o));
                for (;i--; ) t.splice(n[i], 1);
            }
            return E = null, t;
        }, S = e.getText = function(t) {
            var e, n = "", i = 0, o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += S(t);
                } else if (3 === o || 4 === o) return t.nodeValue;
            } else for (;e = t[i++]; ) n += S(e);
            return n;
        }, (C = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
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
                    return t[1] = t[1].replace(xt, bt), t[3] = (t[4] || t[5] || "").replace(xt, bt), 
                    "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), 
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), 
                    t;
                },
                PSEUDO: function(t) {
                    var e, n = !t[5] && t[2];
                    return dt.CHILD.test(t[0]) ? null : (t[3] && void 0 !== t[4] ? t[2] = t[4] : n && ut.test(n) && (e = u(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), 
                    t[2] = n.slice(0, e)), t.slice(0, 3));
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(xt, bt).toLowerCase();
                    return "*" === t ? function() {
                        return !0;
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                    };
                },
                CLASS: function(t) {
                    var e = $[t + " "];
                    return e || (e = new RegExp("(^|" + et + ")" + t + "(" + et + "|$)")) && $(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== Y && t.getAttribute("class") || "");
                    });
                },
                ATTR: function(t, n, i) {
                    return function(o) {
                        var r = e.attr(o, t);
                        return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"));
                    };
                },
                CHILD: function(t, e, n, i, o) {
                    var r = "nth" !== t.slice(0, 3), s = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === i && 0 === o ? function(t) {
                        return !!t.parentNode;
                    } : function(e, n, l) {
                        var c, u, h, d, f, p, g = r !== s ? "nextSibling" : "previousSibling", m = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a;
                        if (m) {
                            if (r) {
                                for (;g; ) {
                                    for (h = e; h = h[g]; ) if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                    p = g = "only" === t && !p && "nextSibling";
                                }
                                return !0;
                            }
                            if (p = [ s ? m.firstChild : m.lastChild ], s && y) {
                                for (f = (c = (u = m[W] || (m[W] = {}))[t] || [])[0] === q && c[1], d = c[0] === q && c[2], 
                                h = f && m.childNodes[f]; h = ++f && h && h[g] || (d = f = 0) || p.pop(); ) if (1 === h.nodeType && ++d && h === e) {
                                    u[t] = [ q, f, d ];
                                    break;
                                }
                            } else if (y && (c = (e[W] || (e[W] = {}))[t]) && c[0] === q) d = c[1]; else for (;(h = ++f && h && h[g] || (d = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++d || (y && ((h[W] || (h[W] = {}))[t] = [ q, d ]), 
                            h !== e)); ) ;
                            return (d -= o) === i || d % i == 0 && d / i >= 0;
                        }
                    };
                },
                PSEUDO: function(t, n) {
                    var o, r = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[W] ? r(n) : r.length > 1 ? (o = [ t, t, "", n ], C.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, o = r(t, n), s = o.length; s--; ) i = K.call(t, o[s]), t[i] = !(e[i] = o[s]);
                    }) : function(t) {
                        return r(t, 0, o);
                    }) : r;
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [], n = [], o = k(t.replace(st, "$1"));
                    return o[W] ? i(function(t, e, n, i) {
                        for (var r, s = o(t, null, i, []), a = t.length; a--; ) (r = s[a]) && (t[a] = !(e[a] = r));
                    }) : function(t, i, r) {
                        return e[0] = t, o(e, null, r, n), !n.pop();
                    };
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0;
                    };
                }),
                contains: i(function(t) {
                    return function(e) {
                        return (e.textContent || e.innerText || S(e)).indexOf(t) > -1;
                    };
                }),
                lang: i(function(t) {
                    return ht.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, bt).toLowerCase(), 
                    function(e) {
                        var n;
                        do {
                            if (n = F ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-");
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                    };
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id;
                },
                root: function(t) {
                    return t === P;
                },
                focus: function(t) {
                    return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
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
                    return !C.pseudos.empty(t);
                },
                header: function(t) {
                    return pt.test(t.nodeName);
                },
                input: function(t) {
                    return ft.test(t.nodeName);
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e;
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                },
                first: a(function() {
                    return [ 0 ];
                }),
                last: a(function(t, e) {
                    return [ e - 1 ];
                }),
                eq: a(function(t, e, n) {
                    return [ 0 > n ? n + e : n ];
                }),
                even: a(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t;
                }),
                odd: a(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t;
                }),
                lt: a(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0; ) t.push(i);
                    return t;
                }),
                gt: a(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e; ) t.push(i);
                    return t;
                })
            }
        }).pseudos.nth = C.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) C.pseudos[b] = function(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }(b);
        for (b in {
            submit: !0,
            reset: !0
        }) C.pseudos[b] = function(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t;
            };
        }(b);
        return c.prototype = C.filters = C.pseudos, C.setFilters = new c(), k = e.compile = function(t, e) {
            var n, i = [], o = [], r = z[t + " "];
            if (!r) {
                for (e || (e = u(t)), n = e.length; n--; ) r = m(e[n]), r[W] ? i.push(r) : o.push(r);
                r = z(t, v(o, i));
            }
            return r;
        }, w.sortStable = W.split("").sort(_).join("") === W, w.detectDuplicates = !!L, 
        N(), w.sortDetached = o(function(t) {
            return 1 & t.compareDocumentPosition(D.createElement("div"));
        }), o(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
        }) || r("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }), w.attributes && o(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
        }) || r("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue;
        }), o(function(t) {
            return null == t.getAttribute("disabled");
        }) || r(tt, function(t, e, n) {
            var i;
            return n ? void 0 : !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
        }), e;
    }(t);
    rt.find = ut, rt.expr = ut.selectors, rt.expr[":"] = rt.expr.pseudos, rt.unique = ut.uniqueSort, 
    rt.text = ut.getText, rt.isXMLDoc = ut.isXML, rt.contains = ut.contains;
    var ht = rt.expr.match.needsContext, dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ft = /^.[^:#\[\.,]*$/;
    rt.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? rt.find.matchesSelector(i, t) ? [ i ] : [] : rt.find.matches(t, rt.grep(e, function(t) {
            return 1 === t.nodeType;
        }));
    }, rt.fn.extend({
        find: function(t) {
            var e, n = [], i = this, o = i.length;
            if ("string" != typeof t) return this.pushStack(rt(t).filter(function() {
                for (e = 0; o > e; e++) if (rt.contains(i[e], this)) return !0;
            }));
            for (e = 0; o > e; e++) rt.find(t, i[e], n);
            return n = this.pushStack(o > 1 ? rt.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, 
            n;
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1));
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0));
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && ht.test(t) ? rt(t) : t || [], !1).length;
        }
    });
    var pt, gt = t.document, mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (rt.fn.init = function(t, e) {
        var n, i;
        if (!t) return this;
        if ("string" == typeof t) {
            if (!(n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [ null, t, null ] : mt.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || pt).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof rt ? e[0] : e, rt.merge(this, rt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : gt, !0)), 
                dt.test(n[1]) && rt.isPlainObject(e)) for (n in e) rt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this;
            }
            if ((i = gt.getElementById(n[2])) && i.parentNode) {
                if (i.id !== n[2]) return pt.find(t);
                this.length = 1, this[0] = i;
            }
            return this.context = gt, this.selector = t, this;
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : rt.isFunction(t) ? void 0 !== pt.ready ? pt.ready(t) : t(rt) : (void 0 !== t.selector && (this.selector = t.selector, 
        this.context = t.context), rt.makeArray(t, this));
    }).prototype = rt.fn, pt = rt(gt);
    var vt = /^(?:parents|prev(?:Until|All))/, yt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    rt.extend({
        dir: function(t, e, n) {
            for (var i = [], o = t[e]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !rt(o).is(n)); ) 1 === o.nodeType && i.push(o), 
            o = o[e];
            return i;
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n;
        }
    }), rt.fn.extend({
        has: function(t) {
            var e, n = rt(t, this), i = n.length;
            return this.filter(function() {
                for (e = 0; i > e; e++) if (rt.contains(this, n[e])) return !0;
            });
        },
        closest: function(t, e) {
            for (var n, i = 0, o = this.length, r = [], s = ht.test(t) || "string" != typeof t ? rt(t, e || this.context) : 0; o > i; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && rt.find.matchesSelector(n, t))) {
                r.push(n);
                break;
            }
            return this.pushStack(r.length > 1 ? rt.unique(r) : r);
        },
        index: function(t) {
            return t ? "string" == typeof t ? rt.inArray(this[0], rt(t)) : rt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(t, e) {
            return this.pushStack(rt.unique(rt.merge(this.get(), rt(t, e))));
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        }
    }), rt.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null;
        },
        parents: function(t) {
            return rt.dir(t, "parentNode");
        },
        parentsUntil: function(t, e, n) {
            return rt.dir(t, "parentNode", n);
        },
        next: function(t) {
            return o(t, "nextSibling");
        },
        prev: function(t) {
            return o(t, "previousSibling");
        },
        nextAll: function(t) {
            return rt.dir(t, "nextSibling");
        },
        prevAll: function(t) {
            return rt.dir(t, "previousSibling");
        },
        nextUntil: function(t, e, n) {
            return rt.dir(t, "nextSibling", n);
        },
        prevUntil: function(t, e, n) {
            return rt.dir(t, "previousSibling", n);
        },
        siblings: function(t) {
            return rt.sibling((t.parentNode || {}).firstChild, t);
        },
        children: function(t) {
            return rt.sibling(t.firstChild);
        },
        contents: function(t) {
            return rt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : rt.merge([], t.childNodes);
        }
    }, function(t, e) {
        rt.fn[t] = function(n, i) {
            var o = rt.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = rt.filter(i, o)), 
            this.length > 1 && (yt[t] || (o = rt.unique(o)), vt.test(t) && (o = o.reverse())), 
            this.pushStack(o);
        };
    });
    var xt = /\S+/g, bt = {};
    rt.Callbacks = function(t) {
        var e, n, i, o, s, a, l = [], c = !(t = "string" == typeof t ? bt[t] || r(t) : rt.extend({}, t)).once && [], u = function(r) {
            for (n = t.memory && r, i = !0, s = a || 0, a = 0, o = l.length, e = !0; l && o > s; s++) if (!1 === l[s].apply(r[0], r[1]) && t.stopOnFalse) {
                n = !1;
                break;
            }
            e = !1, l && (c ? c.length && u(c.shift()) : n ? l = [] : h.disable());
        }, h = {
            add: function() {
                if (l) {
                    var i = l.length;
                    !function e(n) {
                        rt.each(n, function(n, i) {
                            var o = rt.type(i);
                            "function" === o ? t.unique && h.has(i) || l.push(i) : i && i.length && "string" !== o && e(i);
                        });
                    }(arguments), e ? o = l.length : n && (a = i, u(n));
                }
                return this;
            },
            remove: function() {
                return l && rt.each(arguments, function(t, n) {
                    for (var i; (i = rt.inArray(n, l, i)) > -1; ) l.splice(i, 1), e && (o >= i && o--, 
                    s >= i && s--);
                }), this;
            },
            has: function(t) {
                return t ? rt.inArray(t, l) > -1 : !(!l || !l.length);
            },
            empty: function() {
                return l = [], o = 0, this;
            },
            disable: function() {
                return l = c = n = void 0, this;
            },
            disabled: function() {
                return !l;
            },
            lock: function() {
                return c = void 0, n || h.disable(), this;
            },
            locked: function() {
                return !c;
            },
            fireWith: function(t, n) {
                return !l || i && !c || (n = n || [], n = [ t, n.slice ? n.slice() : n ], e ? c.push(n) : u(n)), 
                this;
            },
            fire: function() {
                return h.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!i;
            }
        };
        return h;
    }, rt.extend({
        Deferred: function(t) {
            var e = [ [ "resolve", "done", rt.Callbacks("once memory"), "resolved" ], [ "reject", "fail", rt.Callbacks("once memory"), "rejected" ], [ "notify", "progress", rt.Callbacks("memory") ] ], n = "pending", i = {
                state: function() {
                    return n;
                },
                always: function() {
                    return o.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var t = arguments;
                    return rt.Deferred(function(n) {
                        rt.each(e, function(e, r) {
                            var s = rt.isFunction(t[e]) && t[e];
                            o[r[1]](function() {
                                var t = s && s.apply(this, arguments);
                                t && rt.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [ t ] : arguments);
                            });
                        }), t = null;
                    }).promise();
                },
                promise: function(t) {
                    return null != t ? rt.extend(t, i) : i;
                }
            }, o = {};
            return i.pipe = i.then, rt.each(e, function(t, r) {
                var s = r[2], a = r[3];
                i[r[1]] = s.add, a && s.add(function() {
                    n = a;
                }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this;
                }, o[r[0] + "With"] = s.fireWith;
            }), i.promise(o), t && t.call(o, o), o;
        },
        when: function(t) {
            var e, n, i, o = 0, r = G.call(arguments), s = r.length, a = 1 !== s || t && rt.isFunction(t.promise) ? s : 0, l = 1 === a ? t : rt.Deferred(), c = function(t, n, i) {
                return function(o) {
                    n[t] = this, i[t] = arguments.length > 1 ? G.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i);
                };
            };
            if (s > 1) for (e = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) r[o] && rt.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, e)) : --a;
            return a || l.resolveWith(i, r), l.promise();
        }
    });
    var wt;
    rt.fn.ready = function(t) {
        return rt.ready.promise().done(t), this;
    }, rt.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? rt.readyWait++ : rt.ready(!0);
        },
        ready: function(t) {
            if (!0 === t ? !--rt.readyWait : !rt.isReady) {
                if (!gt.body) return setTimeout(rt.ready);
                rt.isReady = !0, !0 !== t && --rt.readyWait > 0 || (wt.resolveWith(gt, [ rt ]), 
                rt.fn.trigger && rt(gt).trigger("ready").off("ready"));
            }
        }
    }), rt.ready.promise = function(e) {
        if (!wt) if (wt = rt.Deferred(), "complete" === gt.readyState) setTimeout(rt.ready); else if (gt.addEventListener) gt.addEventListener("DOMContentLoaded", a, !1), 
        t.addEventListener("load", a, !1); else {
            gt.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == t.frameElement && gt.documentElement;
            } catch (t) {}
            n && n.doScroll && function t() {
                if (!rt.isReady) {
                    try {
                        n.doScroll("left");
                    } catch (e) {
                        return setTimeout(t, 50);
                    }
                    s(), rt.ready();
                }
            }();
        }
        return wt.promise(e);
    };
    var Ct, St = "undefined";
    for (Ct in rt(it)) break;
    it.ownLast = "0" !== Ct, it.inlineBlockNeedsLayout = !1, rt(function() {
        var t, e, n = gt.getElementsByTagName("body")[0];
        n && (t = gt.createElement("div"), t.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
        e = gt.createElement("div"), n.appendChild(t).appendChild(e), typeof e.style.zoom !== St && (e.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", 
        (it.inlineBlockNeedsLayout = 3 === e.offsetWidth) && (n.style.zoom = 1)), n.removeChild(t), 
        t = e = null);
    }), function() {
        var t = gt.createElement("div");
        if (null == it.deleteExpando) {
            it.deleteExpando = !0;
            try {
                delete t.test;
            } catch (t) {
                it.deleteExpando = !1;
            }
        }
        t = null;
    }(), rt.acceptData = function(t) {
        var e = rt.noData[(t.nodeName + " ").toLowerCase()], n = +t.nodeType || 1;
        return (1 === n || 9 === n) && (!e || !0 !== e && t.getAttribute("classid") === e);
    };
    var Tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, kt = /([A-Z])/g;
    rt.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return !!(t = t.nodeType ? rt.cache[t[rt.expando]] : t[rt.expando]) && !c(t);
        },
        data: function(t, e, n) {
            return u(t, e, n);
        },
        removeData: function(t, e) {
            return h(t, e);
        },
        _data: function(t, e, n) {
            return u(t, e, n, !0);
        },
        _removeData: function(t, e) {
            return h(t, e, !0);
        }
    }), rt.fn.extend({
        data: function(t, e) {
            var n, i, o, r = this[0], s = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = rt.data(r), 1 === r.nodeType && !rt._data(r, "parsedAttrs"))) {
                    for (n = s.length; n--; ) 0 === (i = s[n].name).indexOf("data-") && (i = rt.camelCase(i.slice(5)), 
                    l(r, i, o[i]));
                    rt._data(r, "parsedAttrs", !0);
                }
                return o;
            }
            return "object" == typeof t ? this.each(function() {
                rt.data(this, t);
            }) : arguments.length > 1 ? this.each(function() {
                rt.data(this, t, e);
            }) : r ? l(r, t, rt.data(r, t)) : void 0;
        },
        removeData: function(t) {
            return this.each(function() {
                rt.removeData(this, t);
            });
        }
    }), rt.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = rt._data(t, e), n && (!i || rt.isArray(n) ? i = rt._data(t, e, rt.makeArray(n)) : i.push(n)), 
            i || []) : void 0;
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = rt.queue(t, e), i = n.length, o = n.shift(), r = rt._queueHooks(t, e), s = function() {
                rt.dequeue(t, e);
            };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), 
            delete r.stop, o.call(t, s, r)), !i && r && r.empty.fire();
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return rt._data(t, n) || rt._data(t, n, {
                empty: rt.Callbacks("once memory").add(function() {
                    rt._removeData(t, e + "queue"), rt._removeData(t, n);
                })
            });
        }
    }), rt.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? rt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = rt.queue(this, t, e);
                rt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && rt.dequeue(this, t);
            });
        },
        dequeue: function(t) {
            return this.each(function() {
                rt.dequeue(this, t);
            });
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", []);
        },
        promise: function(t, e) {
            var n, i = 1, o = rt.Deferred(), r = this, s = this.length, a = function() {
                --i || o.resolveWith(r, [ r ]);
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--; ) (n = rt._data(r[s], t + "queueHooks")) && n.empty && (i++, 
            n.empty.add(a));
            return a(), o.promise(e);
        }
    });
    var At = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Et = [ "Top", "Right", "Bottom", "Left" ], Lt = function(t, e) {
        return t = e || t, "none" === rt.css(t, "display") || !rt.contains(t.ownerDocument, t);
    }, Nt = rt.access = function(t, e, n, i, o, r, s) {
        var a = 0, l = t.length, c = null == n;
        if ("object" === rt.type(n)) {
            o = !0;
            for (a in n) rt.access(t, e, a, n[a], !0, r, s);
        } else if (void 0 !== i && (o = !0, rt.isFunction(i) || (s = !0), c && (s ? (e.call(t, i), 
        e = null) : (c = e, e = function(t, e, n) {
            return c.call(rt(t), n);
        })), e)) for (;l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
        return o ? t : c ? e.call(t) : l ? e(t[0], n) : r;
    }, Dt = /^(?:checkbox|radio)$/i;
    !function() {
        var t = gt.createDocumentFragment(), e = gt.createElement("div"), n = gt.createElement("input");
        if (e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a>", 
        it.leadingWhitespace = 3 === e.firstChild.nodeType, it.tbody = !e.getElementsByTagName("tbody").length, 
        it.htmlSerialize = !!e.getElementsByTagName("link").length, it.html5Clone = "<:nav></:nav>" !== gt.createElement("nav").cloneNode(!0).outerHTML, 
        n.type = "checkbox", n.checked = !0, t.appendChild(n), it.appendChecked = n.checked, 
        e.innerHTML = "<textarea>x</textarea>", it.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, 
        t.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", 
        it.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, it.noCloneEvent = !0, 
        e.attachEvent && (e.attachEvent("onclick", function() {
            it.noCloneEvent = !1;
        }), e.cloneNode(!0).click()), null == it.deleteExpando) {
            it.deleteExpando = !0;
            try {
                delete e.test;
            } catch (t) {
                it.deleteExpando = !1;
            }
        }
        t = e = n = null;
    }(), function() {
        var e, n, i = gt.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        }) n = "on" + e, (it[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), it[e + "Bubbles"] = !1 === i.attributes[n].expando);
        i = null;
    }();
    var Pt = /^(?:input|select|textarea)$/i, Ft = /^key/, jt = /^(?:mouse|contextmenu)|click/, Mt = /^(?:focusinfocus|focusoutblur)$/, Rt = /^([^.]*)(?:\.(.+)|)$/;
    rt.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, s, a, l, c, u, h, d, f, p, g, m = rt._data(t);
            if (m) {
                for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = rt.guid++), 
                (s = m.events) || (s = m.events = {}), (u = m.handle) || (u = m.handle = function(t) {
                    return typeof rt === St || t && rt.event.triggered === t.type ? void 0 : rt.event.dispatch.apply(u.elem, arguments);
                }, u.elem = t), a = (e = (e || "").match(xt) || [ "" ]).length; a--; ) r = Rt.exec(e[a]) || [], 
                f = g = r[1], p = (r[2] || "").split(".").sort(), f && (c = rt.event.special[f] || {}, 
                f = (o ? c.delegateType : c.bindType) || f, c = rt.event.special[f] || {}, h = rt.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && rt.expr.match.needsContext.test(o),
                    namespace: p.join(".")
                }, l), (d = s[f]) || (d = s[f] = [], d.delegateCount = 0, c.setup && !1 !== c.setup.call(t, i, p, u) || (t.addEventListener ? t.addEventListener(f, u, !1) : t.attachEvent && t.attachEvent("on" + f, u))), 
                c.add && (c.add.call(t, h), h.handler.guid || (h.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, h) : d.push(h), 
                rt.event.global[f] = !0);
                t = null;
            }
        },
        remove: function(t, e, n, i, o) {
            var r, s, a, l, c, u, h, d, f, p, g, m = rt.hasData(t) && rt._data(t);
            if (m && (u = m.events)) {
                for (c = (e = (e || "").match(xt) || [ "" ]).length; c--; ) if (a = Rt.exec(e[c]) || [], 
                f = g = a[1], p = (a[2] || "").split(".").sort(), f) {
                    for (h = rt.event.special[f] || {}, d = u[f = (i ? h.delegateType : h.bindType) || f] || [], 
                    a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = d.length; r--; ) s = d[r], 
                    !o && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (d.splice(r, 1), 
                    s.selector && d.delegateCount--, h.remove && h.remove.call(t, s));
                    l && !d.length && (h.teardown && !1 !== h.teardown.call(t, p, m.handle) || rt.removeEvent(t, f, m.handle), 
                    delete u[f]);
                } else for (f in u) rt.event.remove(t, f + e[c], n, i, !0);
                rt.isEmptyObject(u) && (delete m.handle, rt._removeData(t, "events"));
            }
        },
        trigger: function(e, n, i, o) {
            var r, s, a, l, c, u, h, d = [ i || gt ], f = et.call(e, "type") ? e.type : e, p = et.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = u = i = i || gt, 3 !== i.nodeType && 8 !== i.nodeType && !Mt.test(f + rt.event.triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), 
            f = p.shift(), p.sort()), s = f.indexOf(":") < 0 && "on" + f, e = e[rt.expando] ? e : new rt.Event(f, "object" == typeof e && e), 
            e.isTrigger = o ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            e.result = void 0, e.target || (e.target = i), n = null == n ? [ e ] : rt.makeArray(n, [ e ]), 
            c = rt.event.special[f] || {}, o || !c.trigger || !1 !== c.trigger.apply(i, n))) {
                if (!o && !c.noBubble && !rt.isWindow(i)) {
                    for (l = c.delegateType || f, Mt.test(l + f) || (a = a.parentNode); a; a = a.parentNode) d.push(a), 
                    u = a;
                    u === (i.ownerDocument || gt) && d.push(u.defaultView || u.parentWindow || t);
                }
                for (h = 0; (a = d[h++]) && !e.isPropagationStopped(); ) e.type = h > 1 ? l : c.bindType || f, 
                (r = (rt._data(a, "events") || {})[e.type] && rt._data(a, "handle")) && r.apply(a, n), 
                (r = s && a[s]) && r.apply && rt.acceptData(a) && (e.result = r.apply(a, n), !1 === e.result && e.preventDefault());
                if (e.type = f, !o && !e.isDefaultPrevented() && (!c._default || !1 === c._default.apply(d.pop(), n)) && rt.acceptData(i) && s && i[f] && !rt.isWindow(i)) {
                    (u = i[s]) && (i[s] = null), rt.event.triggered = f;
                    try {
                        i[f]();
                    } catch (t) {}
                    rt.event.triggered = void 0, u && (i[s] = u);
                }
                return e.result;
            }
        },
        dispatch: function(t) {
            t = rt.event.fix(t);
            var e, n, i, o, r, s = [], a = G.call(arguments), l = (rt._data(this, "events") || {})[t.type] || [], c = rt.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                for (s = rt.event.handlers.call(this, t, l), e = 0; (o = s[e++]) && !t.isPropagationStopped(); ) for (t.currentTarget = o.elem, 
                r = 0; (i = o.handlers[r++]) && !t.isImmediatePropagationStopped(); ) (!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, 
                t.data = i.data, void 0 !== (n = ((rt.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, a)) && !1 === (t.result = n) && (t.preventDefault(), 
                t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result;
            }
        },
        handlers: function(t, e) {
            var n, i, o, r, s = [], a = e.delegateCount, l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type)) for (;l != this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                for (o = [], r = 0; a > r; r++) i = e[r], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? rt(n, this).index(l) >= 0 : rt.find(n, this, null, [ l ]).length), 
                o[n] && o.push(i);
                o.length && s.push({
                    elem: l,
                    handlers: o
                });
            }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s;
        },
        fix: function(t) {
            if (t[rt.expando]) return t;
            var e, n, i, o = t.type, r = t, s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = jt.test(o) ? this.mouseHooks : Ft.test(o) ? this.keyHooks : {}), 
            i = s.props ? this.props.concat(s.props) : this.props, t = new rt.Event(r), e = i.length; e--; ) n = i[e], 
            t[n] = r[n];
            return t.target || (t.target = r.srcElement || gt), 3 === t.target.nodeType && (t.target = t.target.parentNode), 
            t.metaKey = !!t.metaKey, s.filter ? s.filter(t, r) : t;
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
                var n, i, o, r = e.button, s = e.fromElement;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || gt, 
                o = i.documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), 
                t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), 
                !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), 
                t;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== p() && this.focus) try {
                        return this.focus(), !1;
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return rt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(t) {
                    return rt.nodeName(t.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && (t.originalEvent.returnValue = t.result);
                }
            }
        },
        simulate: function(t, e, n, i) {
            var o = rt.extend(new rt.Event(), n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? rt.event.trigger(o, null, e) : rt.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault();
        }
    }, rt.removeEvent = gt.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1);
    } : function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && (typeof t[i] === St && (t[i] = null), t.detachEvent(i, n));
    }, rt.Event = function(t, e) {
        return this instanceof rt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, 
        this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && (!1 === t.returnValue || t.getPreventDefault && t.getPreventDefault()) ? d : f) : this.type = t, 
        e && rt.extend(this, e), this.timeStamp = t && t.timeStamp || rt.now(), void (this[rt.expando] = !0)) : new rt.Event(t, e);
    }, rt.Event.prototype = {
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
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
    }, rt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(t, e) {
        rt.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this, o = t.relatedTarget, r = t.handleObj;
                return (!o || o !== i && !rt.contains(i, o)) && (t.type = r.origType, n = r.handler.apply(this, arguments), 
                t.type = e), n;
            }
        };
    }), it.submitBubbles || (rt.event.special.submit = {
        setup: function() {
            return !rt.nodeName(this, "form") && void rt.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target, n = rt.nodeName(e, "input") || rt.nodeName(e, "button") ? e.form : void 0;
                n && !rt._data(n, "submitBubbles") && (rt.event.add(n, "submit._submit", function(t) {
                    t._submit_bubble = !0;
                }), rt._data(n, "submitBubbles", !0));
            });
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && rt.event.simulate("submit", this.parentNode, t, !0));
        },
        teardown: function() {
            return !rt.nodeName(this, "form") && void rt.event.remove(this, "._submit");
        }
    }), it.changeBubbles || (rt.event.special.change = {
        setup: function() {
            return Pt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (rt.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0);
            }), rt.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), rt.event.simulate("change", this, t, !0);
            })), !1) : void rt.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Pt.test(e.nodeName) && !rt._data(e, "changeBubbles") && (rt.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || rt.event.simulate("change", this.parentNode, t, !0);
                }), rt._data(e, "changeBubbles", !0));
            });
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0;
        },
        teardown: function() {
            return rt.event.remove(this, "._change"), !Pt.test(this.nodeName);
        }
    }), it.focusinBubbles || rt.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            rt.event.simulate(e, t.target, rt.event.fix(t), !0);
        };
        rt.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this, o = rt._data(i, e);
                o || i.addEventListener(t, n, !0), rt._data(i, e, (o || 0) + 1);
            },
            teardown: function() {
                var i = this.ownerDocument || this, o = rt._data(i, e) - 1;
                o ? rt._data(i, e, o) : (i.removeEventListener(t, n, !0), rt._removeData(i, e));
            }
        };
    }), rt.fn.extend({
        on: function(t, e, n, i, o) {
            var r, s;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (r in t) this.on(r, e, n, t[r], o);
                return this;
            }
            if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, 
            n = void 0) : (i = n, n = e, e = void 0)), !1 === i) i = f; else if (!i) return this;
            return 1 === o && (s = i, i = function(t) {
                return rt().off(t), s.apply(this, arguments);
            }, i.guid = s.guid || (s.guid = rt.guid++)), this.each(function() {
                rt.event.add(this, t, i, n, e);
            });
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1);
        },
        off: function(t, e, n) {
            var i, o;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, rt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
            this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this;
            }
            return (!1 === e || "function" == typeof e) && (n = e, e = void 0), !1 === n && (n = f), 
            this.each(function() {
                rt.event.remove(this, t, n, e);
            });
        },
        trigger: function(t, e) {
            return this.each(function() {
                rt.event.trigger(t, e, this);
            });
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? rt.event.trigger(t, e, n, !0) : void 0;
        }
    });
    var Ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Wt = / jQuery\d+="(?:null|\d+)"/g, Ot = new RegExp("<(?:" + Ht + ")[\\s/>]", "i"), qt = /^\s+/, Bt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, $t = /<([\w:]+)/, It = /<tbody/i, zt = /<|&#?\w+;/, _t = /<(?:script|style|link)/i, Yt = /checked\s*(?:[^=]|=\s*.checked.)/i, Xt = /^$|\/(?:java|ecma)script/i, Vt = /^true\/(.*)/, Ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Gt = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: it.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, Qt = g(gt).appendChild(gt.createElement("div"));
    Gt.optgroup = Gt.option, Gt.tbody = Gt.tfoot = Gt.colgroup = Gt.caption = Gt.thead, 
    Gt.th = Gt.td, rt.extend({
        clone: function(t, e, n) {
            var i, o, r, s, a, l = rt.contains(t.ownerDocument, t);
            if (it.html5Clone || rt.isXMLDoc(t) || !Ot.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (Qt.innerHTML = t.outerHTML, 
            Qt.removeChild(r = Qt.firstChild)), !(it.noCloneEvent && it.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || rt.isXMLDoc(t))) for (i = m(r), 
            a = m(t), s = 0; null != (o = a[s]); ++s) i[s] && S(o, i[s]);
            if (e) if (n) for (a = a || m(t), i = i || m(r), s = 0; null != (o = a[s]); s++) C(o, i[s]); else C(t, r);
            return (i = m(r, "script")).length > 0 && w(i, !l && m(t, "script")), i = a = o = null, 
            r;
        },
        buildFragment: function(t, e, n, i) {
            for (var o, r, s, a, l, c, u, h = t.length, d = g(e), f = [], p = 0; h > p; p++) if ((r = t[p]) || 0 === r) if ("object" === rt.type(r)) rt.merge(f, r.nodeType ? [ r ] : r); else if (zt.test(r)) {
                for (a = a || d.appendChild(e.createElement("div")), l = ($t.exec(r) || [ "", "" ])[1].toLowerCase(), 
                u = Gt[l] || Gt._default, a.innerHTML = u[1] + r.replace(Bt, "<$1></$2>") + u[2], 
                o = u[0]; o--; ) a = a.lastChild;
                if (!it.leadingWhitespace && qt.test(r) && f.push(e.createTextNode(qt.exec(r)[0])), 
                !it.tbody) for (o = (r = "table" !== l || It.test(r) ? "<table>" !== u[1] || It.test(r) ? 0 : a : a.firstChild) && r.childNodes.length; o--; ) rt.nodeName(c = r.childNodes[o], "tbody") && !c.childNodes.length && r.removeChild(c);
                for (rt.merge(f, a.childNodes), a.textContent = ""; a.firstChild; ) a.removeChild(a.firstChild);
                a = d.lastChild;
            } else f.push(e.createTextNode(r));
            for (a && d.removeChild(a), it.appendChecked || rt.grep(m(f, "input"), v), p = 0; r = f[p++]; ) if ((!i || -1 === rt.inArray(r, i)) && (s = rt.contains(r.ownerDocument, r), 
            a = m(d.appendChild(r), "script"), s && w(a), n)) for (o = 0; r = a[o++]; ) Xt.test(r.type || "") && n.push(r);
            return a = null, d;
        },
        cleanData: function(t, e) {
            for (var n, i, o, r, s = 0, a = rt.expando, l = rt.cache, c = it.deleteExpando, u = rt.event.special; null != (n = t[s]); s++) if ((e || rt.acceptData(n)) && (o = n[a], 
            r = o && l[o])) {
                if (r.events) for (i in r.events) u[i] ? rt.event.remove(n, i) : rt.removeEvent(n, i, r.handle);
                l[o] && (delete l[o], c ? delete n[a] : typeof n.removeAttribute !== St ? n.removeAttribute(a) : n[a] = null, 
                U.push(o));
            }
        }
    }), rt.fn.extend({
        text: function(t) {
            return Nt(this, function(t) {
                return void 0 === t ? rt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || gt).createTextNode(t));
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
            for (var n, i = t ? rt.filter(t, this) : this, o = 0; null != (n = i[o]); o++) e || 1 !== n.nodeType || rt.cleanData(m(n)), 
            n.parentNode && (e && rt.contains(n.ownerDocument, n) && w(m(n, "script")), n.parentNode.removeChild(n));
            return this;
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && rt.cleanData(m(t, !1)); t.firstChild; ) t.removeChild(t.firstChild);
                t.options && rt.nodeName(t, "select") && (t.options.length = 0);
            }
            return this;
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return rt.clone(this, t, e);
            });
        },
        html: function(t) {
            return Nt(this, function(t) {
                var e = this[0] || {}, n = 0, i = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Wt, "") : void 0;
                if (!("string" != typeof t || _t.test(t) || !it.htmlSerialize && Ot.test(t) || !it.leadingWhitespace && qt.test(t) || Gt[($t.exec(t) || [ "", "" ])[1].toLowerCase()])) {
                    t = t.replace(Bt, "<$1></$2>");
                    try {
                        for (;i > n; n++) 1 === (e = this[n] || {}).nodeType && (rt.cleanData(m(e, !1)), 
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
                t = this.parentNode, rt.cleanData(m(this)), t && t.replaceChild(e, this);
            }), t && (t.length || t.nodeType) ? this : this.remove();
        },
        detach: function(t) {
            return this.remove(t, !0);
        },
        domManip: function(t, e) {
            t = Q.apply([], t);
            var n, i, o, r, s, a, l = 0, c = this.length, u = this, h = c - 1, d = t[0], f = rt.isFunction(d);
            if (f || c > 1 && "string" == typeof d && !it.checkClone && Yt.test(d)) return this.each(function(n) {
                var i = u.eq(n);
                f && (t[0] = d.call(this, n, i.html())), i.domManip(t, e);
            });
            if (c && (a = rt.buildFragment(t, this[0].ownerDocument, !1, this), n = a.firstChild, 
            1 === a.childNodes.length && (a = n), n)) {
                for (o = (r = rt.map(m(a, "script"), x)).length; c > l; l++) i = a, l !== h && (i = rt.clone(i, !0, !0), 
                o && rt.merge(r, m(i, "script"))), e.call(this[l], i, l);
                if (o) for (s = r[r.length - 1].ownerDocument, rt.map(r, b), l = 0; o > l; l++) i = r[l], 
                Xt.test(i.type || "") && !rt._data(i, "globalEval") && rt.contains(s, i) && (i.src ? rt._evalUrl && rt._evalUrl(i.src) : rt.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ut, "")));
                a = n = null;
            }
            return this;
        }
    }), rt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        rt.fn[t] = function(t) {
            for (var n, i = 0, o = [], r = rt(t), s = r.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), 
            rt(r[i])[e](n), J.apply(o, n.get());
            return this.pushStack(o);
        };
    });
    var Jt, Zt = {};
    !function() {
        var t, e, n = gt.createElement("div");
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        (t = n.getElementsByTagName("a")[0]).style.cssText = "float:left;opacity:.5", it.opacity = /^0.5/.test(t.style.opacity), 
        it.cssFloat = !!t.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", 
        it.clearCloneStyle = "content-box" === n.style.backgroundClip, t = n = null, it.shrinkWrapBlocks = function() {
            var t, n, i;
            if (null == e) {
                if (!(t = gt.getElementsByTagName("body")[0])) return;
                "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", n = gt.createElement("div"), 
                i = gt.createElement("div"), t.appendChild(n).appendChild(i), e = !1, typeof i.style.zoom !== St && (i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0;width:1px;padding:1px;zoom:1", 
                i.innerHTML = "<div></div>", i.firstChild.style.width = "5px", e = 3 !== i.offsetWidth), 
                t.removeChild(n), t = n = i = null;
            }
            return e;
        };
    }();
    var Kt, te, ee = /^margin/, ne = new RegExp("^(" + At + ")(?!px)[a-z%]+$", "i"), ie = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (Kt = function(t) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null);
    }, te = function(t, e, n) {
        var i, o, r, s, a = t.style;
        return n = n || Kt(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== s || rt.contains(t.ownerDocument, t) || (s = rt.style(t, e)), 
        ne.test(s) && ee.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, 
        s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 === s ? s : s + "";
    }) : gt.documentElement.currentStyle && (Kt = function(t) {
        return t.currentStyle;
    }, te = function(t, e, n) {
        var i, o, r, s, a = t.style;
        return n = n || Kt(t), null == (s = n ? n[e] : void 0) && a && a[e] && (s = a[e]), 
        ne.test(s) && !ie.test(e) && (i = a.left, o = t.runtimeStyle, (r = o && o.left) && (o.left = t.currentStyle.left), 
        a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = i, r && (o.left = r)), 
        void 0 === s ? s : s + "" || "auto";
    }), function() {
        function e() {
            var e, n, i = gt.getElementsByTagName("body")[0];
            i && (e = gt.createElement("div"), n = gt.createElement("div"), e.style.cssText = c, 
            i.appendChild(e).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", 
            rt.swap(i, null != i.style.zoom ? {
                zoom: 1
            } : {}, function() {
                o = 4 === n.offsetWidth;
            }), r = !0, s = !1, a = !0, t.getComputedStyle && (s = "1%" !== (t.getComputedStyle(n, null) || {}).top, 
            r = "4px" === (t.getComputedStyle(n, null) || {
                width: "4px"
            }).width), i.removeChild(e), n = i = null);
        }
        var n, i, o, r, s, a, l = gt.createElement("div"), c = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px";
        l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        (n = l.getElementsByTagName("a")[0]).style.cssText = "float:left;opacity:.5", it.opacity = /^0.5/.test(n.style.opacity), 
        it.cssFloat = !!n.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", 
        it.clearCloneStyle = "content-box" === l.style.backgroundClip, n = l = null, rt.extend(it, {
            reliableHiddenOffsets: function() {
                if (null != i) return i;
                var t, e, n, o = gt.createElement("div"), r = gt.getElementsByTagName("body")[0];
                return r ? (o.setAttribute("className", "t"), o.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
                t = gt.createElement("div"), t.style.cssText = c, r.appendChild(t).appendChild(o), 
                o.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = o.getElementsByTagName("td"), 
                e[0].style.cssText = "padding:0;margin:0;border:0;display:none", n = 0 === e[0].offsetHeight, 
                e[0].style.display = "", e[1].style.display = "none", i = n && 0 === e[0].offsetHeight, 
                r.removeChild(t), o = r = null, i) : void 0;
            },
            boxSizing: function() {
                return null == o && e(), o;
            },
            boxSizingReliable: function() {
                return null == r && e(), r;
            },
            pixelPosition: function() {
                return null == s && e(), s;
            },
            reliableMarginRight: function() {
                var e, n, i, o;
                if (null == a && t.getComputedStyle) {
                    if (!(e = gt.getElementsByTagName("body")[0])) return;
                    n = gt.createElement("div"), i = gt.createElement("div"), n.style.cssText = c, e.appendChild(n).appendChild(i), 
                    (o = i.appendChild(gt.createElement("div"))).style.cssText = i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0", 
                    o.style.marginRight = o.style.width = "0", i.style.width = "1px", a = !parseFloat((t.getComputedStyle(o, null) || {}).marginRight), 
                    e.removeChild(n);
                }
                return a;
            }
        });
    }(), rt.swap = function(t, e, n, i) {
        var o, r, s = {};
        for (r in e) s[r] = t.style[r], t.style[r] = e[r];
        o = n.apply(t, i || []);
        for (r in e) t.style[r] = s[r];
        return o;
    };
    var oe = /alpha\([^)]*\)/i, re = /opacity\s*=\s*([^)]*)/, se = /^(none|table(?!-c[ea]).+)/, ae = new RegExp("^(" + At + ")(.*)$", "i"), le = new RegExp("^([+-])=(" + At + ")", "i"), ce = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, ue = {
        letterSpacing: 0,
        fontWeight: 400
    }, he = [ "Webkit", "O", "Moz", "ms" ];
    rt.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = te(t, "opacity");
                        return "" === n ? "1" : n;
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
            float: it.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, s, a = rt.camelCase(e), l = t.style;
                if (e = rt.cssProps[a] || (rt.cssProps[a] = E(l, a)), s = rt.cssHooks[e] || rt.cssHooks[a], 
                void 0 === n) return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : l[e];
                if ("string" === (r = typeof n) && (o = le.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(rt.css(t, e)), 
                r = "number"), null != n && n === n && ("number" !== r || rt.cssNumber[a] || (n += "px"), 
                it.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), 
                !(s && "set" in s && void 0 === (n = s.set(t, n, i))))) try {
                    l[e] = "", l[e] = n;
                } catch (t) {}
            }
        },
        css: function(t, e, n, i) {
            var o, r, s, a = rt.camelCase(e);
            return e = rt.cssProps[a] || (rt.cssProps[a] = E(t.style, a)), (s = rt.cssHooks[e] || rt.cssHooks[a]) && "get" in s && (r = s.get(t, !0, n)), 
            void 0 === r && (r = te(t, e, i)), "normal" === r && e in ue && (r = ue[e]), "" === n || n ? (o = parseFloat(r), 
            !0 === n || rt.isNumeric(o) ? o || 0 : r) : r;
        }
    }), rt.each([ "height", "width" ], function(t, e) {
        rt.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? 0 === t.offsetWidth && se.test(rt.css(t, "display")) ? rt.swap(t, ce, function() {
                    return P(t, e, i);
                }) : P(t, e, i) : void 0;
            },
            set: function(t, n, i) {
                var o = i && Kt(t);
                return N(t, n, i ? D(t, e, i, it.boxSizing() && "border-box" === rt.css(t, "boxSizing", !1, o), o) : 0);
            }
        };
    }), it.opacity || (rt.cssHooks.opacity = {
        get: function(t, e) {
            return re.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : "";
        },
        set: function(t, e) {
            var n = t.style, i = t.currentStyle, o = rt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "", r = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === rt.trim(r.replace(oe, "")) && n.removeAttribute && (n.removeAttribute("filter"), 
            "" === e || i && !i.filter) || (n.filter = oe.test(r) ? r.replace(oe, o) : r + " " + o);
        }
    }), rt.cssHooks.marginRight = A(it.reliableMarginRight, function(t, e) {
        return e ? rt.swap(t, {
            display: "inline-block"
        }, te, [ t, "marginRight" ]) : void 0;
    }), rt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        rt.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [ n ]; 4 > i; i++) o[t + Et[i] + e] = r[i] || r[i - 2] || r[0];
                return o;
            }
        }, ee.test(t) || (rt.cssHooks[t + e].set = N);
    }), rt.fn.extend({
        css: function(t, e) {
            return Nt(this, function(t, e, n) {
                var i, o, r = {}, s = 0;
                if (rt.isArray(e)) {
                    for (i = Kt(t), o = e.length; o > s; s++) r[e[s]] = rt.css(t, e[s], !1, i);
                    return r;
                }
                return void 0 !== n ? rt.style(t, e, n) : rt.css(t, e);
            }, t, e, arguments.length > 1);
        },
        show: function() {
            return L(this, !0);
        },
        hide: function() {
            return L(this);
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Lt(this) ? rt(this).show() : rt(this).hide();
            });
        }
    }), rt.Tween = F, F.prototype = {
        constructor: F,
        init: function(t, e, n, i, o, r) {
            this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), 
            this.end = i, this.unit = r || (rt.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var t = F.propHooks[this.prop];
            return t && t.get ? t.get(this) : F.propHooks._default.get(this);
        },
        run: function(t) {
            var e, n = F.propHooks[this.prop];
            return this.pos = e = this.options.duration ? rt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, 
            this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : F.propHooks._default.set(this), this;
        }
    }, F.prototype.init.prototype = F.prototype, F.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = rt.css(t.elem, t.prop, ""), 
                e && "auto" !== e ? e : 0) : t.elem[t.prop];
            },
            set: function(t) {
                rt.fx.step[t.prop] ? rt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[rt.cssProps[t.prop]] || rt.cssHooks[t.prop]) ? rt.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now;
            }
        }
    }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        }
    }, rt.easing = {
        linear: function(t) {
            return t;
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2;
        }
    }, rt.fx = F.prototype.init, rt.fx.step = {};
    var de, fe, pe = /^(?:toggle|show|hide)$/, ge = new RegExp("^(?:([+-])=|)(" + At + ")([a-z%]*)$", "i"), me = /queueHooks$/, ve = [ H ], ye = {
        "*": [ function(t, e) {
            var n = this.createTween(t, e), i = n.cur(), o = ge.exec(e), r = o && o[3] || (rt.cssNumber[t] ? "" : "px"), s = (rt.cssNumber[t] || "px" !== r && +i) && ge.exec(rt.css(n.elem, t)), a = 1, l = 20;
            if (s && s[3] !== r) {
                r = r || s[3], o = o || [], s = +i || 1;
                do {
                    a = a || ".5", s /= a, rt.style(n.elem, t, s + r);
                } while (a !== (a = n.cur() / i) && 1 !== a && --l);
            }
            return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), 
            n;
        } ]
    };
    rt.Animation = rt.extend(O, {
        tweener: function(t, e) {
            rt.isFunction(t) ? (e = t, t = [ "*" ]) : t = t.split(" ");
            for (var n, i = 0, o = t.length; o > i; i++) n = t[i], ye[n] = ye[n] || [], ye[n].unshift(e);
        },
        prefilter: function(t, e) {
            e ? ve.unshift(t) : ve.push(t);
        }
    }), rt.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? rt.extend({}, t) : {
            complete: n || !n && e || rt.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !rt.isFunction(e) && e
        };
        return i.duration = rt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in rt.fx.speeds ? rt.fx.speeds[i.duration] : rt.fx.speeds._default, 
        (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            rt.isFunction(i.old) && i.old.call(this), i.queue && rt.dequeue(this, i.queue);
        }, i;
    }, rt.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(Lt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i);
        },
        animate: function(t, e, n, i) {
            var o = rt.isEmptyObject(t), r = rt.speed(e, n, i), s = function() {
                var e = O(this, rt.extend({}, t), r);
                (o || rt._data(this, "finish")) && e.stop(!0);
            };
            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop, e(n);
            };
            return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), 
            this.each(function() {
                var e = !0, o = null != t && t + "queueHooks", r = rt.timers, s = rt._data(this);
                if (o) s[o] && s[o].stop && i(s[o]); else for (o in s) s[o] && s[o].stop && me.test(o) && i(s[o]);
                for (o = r.length; o--; ) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), 
                e = !1, r.splice(o, 1));
                (e || !n) && rt.dequeue(this, t);
            });
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"), this.each(function() {
                var e, n = rt._data(this), i = n[t + "queue"], o = n[t + "queueHooks"], r = rt.timers, s = i ? i.length : 0;
                for (n.finish = !0, rt.queue(this, t, []), o && o.stop && o.stop.call(this, !0), 
                e = r.length; e--; ) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), 
                r.splice(e, 1));
                for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish;
            });
        }
    }), rt.each([ "toggle", "show", "hide" ], function(t, e) {
        var n = rt.fn[e];
        rt.fn[e] = function(t, i, o) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(M(e, !0), t, i, o);
        };
    }), rt.each({
        slideDown: M("show"),
        slideUp: M("hide"),
        slideToggle: M("toggle"),
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
        rt.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i);
        };
    }), rt.timers = [], rt.fx.tick = function() {
        var t, e = rt.timers, n = 0;
        for (de = rt.now(); n < e.length; n++) (t = e[n])() || e[n] !== t || e.splice(n--, 1);
        e.length || rt.fx.stop(), de = void 0;
    }, rt.fx.timer = function(t) {
        rt.timers.push(t), t() ? rt.fx.start() : rt.timers.pop();
    }, rt.fx.interval = 13, rt.fx.start = function() {
        fe || (fe = setInterval(rt.fx.tick, rt.fx.interval));
    }, rt.fx.stop = function() {
        clearInterval(fe), fe = null;
    }, rt.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, rt.fn.delay = function(t, e) {
        return t = rt.fx ? rt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
            var i = setTimeout(e, t);
            n.stop = function() {
                clearTimeout(i);
            };
        });
    }, function() {
        var t, e, n, i, o = gt.createElement("div");
        o.setAttribute("className", "t"), o.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        t = o.getElementsByTagName("a")[0], i = (n = gt.createElement("select")).appendChild(gt.createElement("option")), 
        e = o.getElementsByTagName("input")[0], t.style.cssText = "top:1px", it.getSetAttribute = "t" !== o.className, 
        it.style = /top/.test(t.getAttribute("style")), it.hrefNormalized = "/a" === t.getAttribute("href"), 
        it.checkOn = !!e.value, it.optSelected = i.selected, it.enctype = !!gt.createElement("form").enctype, 
        n.disabled = !0, it.optDisabled = !i.disabled, (e = gt.createElement("input")).setAttribute("value", ""), 
        it.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), 
        it.radioValue = "t" === e.value, t = e = n = i = o = null;
    }();
    var xe = /\r/g;
    rt.fn.extend({
        val: function(t) {
            var e, n, i, o = this[0];
            return arguments.length ? (i = rt.isFunction(t), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = i ? t.call(this, n, rt(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : rt.isArray(o) && (o = rt.map(o, function(t) {
                    return null == t ? "" : t + "";
                })), (e = rt.valHooks[this.type] || rt.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o));
            })) : o ? (e = rt.valHooks[o.type] || rt.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, 
            "string" == typeof n ? n.replace(xe, "") : null == n ? "" : n)) : void 0;
        }
    }), rt.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = rt.find.attr(t, "value");
                    return null != e ? e : rt.text(t);
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++) if (!(!(n = i[l]).selected && l !== o || (it.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && rt.nodeName(n.parentNode, "optgroup"))) {
                        if (e = rt(n).val(), r) return e;
                        s.push(e);
                    }
                    return s;
                },
                set: function(t, e) {
                    for (var n, i, o = t.options, r = rt.makeArray(e), s = o.length; s--; ) if (i = o[s], 
                    rt.inArray(rt.valHooks.option.get(i), r) >= 0) try {
                        i.selected = n = !0;
                    } catch (t) {
                        i.scrollHeight;
                    } else i.selected = !1;
                    return n || (t.selectedIndex = -1), o;
                }
            }
        }
    }), rt.each([ "radio", "checkbox" ], function() {
        rt.valHooks[this] = {
            set: function(t, e) {
                return rt.isArray(e) ? t.checked = rt.inArray(rt(t).val(), e) >= 0 : void 0;
            }
        }, it.checkOn || (rt.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value;
        });
    });
    var be, we, Ce = rt.expr.attrHandle, Se = /^(?:checked|selected)$/i, Te = it.getSetAttribute, ke = it.input;
    rt.fn.extend({
        attr: function(t, e) {
            return Nt(this, rt.attr, t, e, arguments.length > 1);
        },
        removeAttr: function(t) {
            return this.each(function() {
                rt.removeAttr(this, t);
            });
        }
    }), rt.extend({
        attr: function(t, e, n) {
            var i, o, r = t.nodeType;
            if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute === St ? rt.prop(t, e, n) : (1 === r && rt.isXMLDoc(t) || (e = e.toLowerCase(), 
            i = rt.attrHooks[e] || (rt.expr.match.bool.test(e) ? we : be)), void 0 === n ? i && "get" in i && null !== (o = i.get(t, e)) ? o : (o = rt.find.attr(t, e), 
            null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), 
            n) : void rt.removeAttr(t, e));
        },
        removeAttr: function(t, e) {
            var n, i, o = 0, r = e && e.match(xt);
            if (r && 1 === t.nodeType) for (;n = r[o++]; ) i = rt.propFix[n] || n, rt.expr.match.bool.test(n) ? ke && Te || !Se.test(n) ? t[i] = !1 : t[rt.camelCase("default-" + n)] = t[i] = !1 : rt.attr(t, n, ""), 
            t.removeAttribute(Te ? n : i);
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!it.radioValue && "radio" === e && rt.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e;
                    }
                }
            }
        }
    }), we = {
        set: function(t, e, n) {
            return !1 === e ? rt.removeAttr(t, n) : ke && Te || !Se.test(n) ? t.setAttribute(!Te && rt.propFix[n] || n, n) : t[rt.camelCase("default-" + n)] = t[n] = !0, 
            n;
        }
    }, rt.each(rt.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = Ce[e] || rt.find.attr;
        Ce[e] = ke && Te || !Se.test(e) ? function(t, e, i) {
            var o, r;
            return i || (r = Ce[e], Ce[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, 
            Ce[e] = r), o;
        } : function(t, e, n) {
            return n ? void 0 : t[rt.camelCase("default-" + e)] ? e.toLowerCase() : null;
        };
    }), ke && Te || (rt.attrHooks.value = {
        set: function(t, e, n) {
            return rt.nodeName(t, "input") ? void (t.defaultValue = e) : be && be.set(t, e, n);
        }
    }), Te || (be = {
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", 
            "value" === n || e === t.getAttribute(n) ? e : void 0;
        }
    }, Ce.id = Ce.name = Ce.coords = function(t, e, n) {
        var i;
        return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null;
    }, rt.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : void 0;
        },
        set: be.set
    }, rt.attrHooks.contenteditable = {
        set: function(t, e, n) {
            be.set(t, "" !== e && e, n);
        }
    }, rt.each([ "width", "height" ], function(t, e) {
        rt.attrHooks[e] = {
            set: function(t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0;
            }
        };
    })), it.style || (rt.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0;
        },
        set: function(t, e) {
            return t.style.cssText = e + "";
        }
    });
    var Ae = /^(?:input|select|textarea|button|object)$/i, Ee = /^(?:a|area)$/i;
    rt.fn.extend({
        prop: function(t, e) {
            return Nt(this, rt.prop, t, e, arguments.length > 1);
        },
        removeProp: function(t) {
            return t = rt.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t];
                } catch (t) {}
            });
        }
    }), rt.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(t, e, n) {
            var i, o, r = t.nodeType;
            if (t && 3 !== r && 8 !== r && 2 !== r) return (1 !== r || !rt.isXMLDoc(t)) && (e = rt.propFix[e] || e, 
            o = rt.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e];
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = rt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : Ae.test(t.nodeName) || Ee.test(t.nodeName) && t.href ? 0 : -1;
                }
            }
        }
    }), it.hrefNormalized || rt.each([ "href", "src" ], function(t, e) {
        rt.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4);
            }
        };
    }), it.optSelected || (rt.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null;
        }
    }), rt.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        rt.propFix[this.toLowerCase()] = this;
    }), it.enctype || (rt.propFix.enctype = "encoding");
    var Le = /[\t\r\n\f]/g;
    rt.fn.extend({
        addClass: function(t) {
            var e, n, i, o, r, s, a = 0, l = this.length, c = "string" == typeof t && t;
            if (rt.isFunction(t)) return this.each(function(e) {
                rt(this).addClass(t.call(this, e, this.className));
            });
            if (c) for (e = (t || "").match(xt) || []; l > a; a++) if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Le, " ") : " ")) {
                for (r = 0; o = e[r++]; ) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                s = rt.trim(i), n.className !== s && (n.className = s);
            }
            return this;
        },
        removeClass: function(t) {
            var e, n, i, o, r, s, a = 0, l = this.length, c = 0 === arguments.length || "string" == typeof t && t;
            if (rt.isFunction(t)) return this.each(function(e) {
                rt(this).removeClass(t.call(this, e, this.className));
            });
            if (c) for (e = (t || "").match(xt) || []; l > a; a++) if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Le, " ") : "")) {
                for (r = 0; o = e[r++]; ) for (;i.indexOf(" " + o + " ") >= 0; ) i = i.replace(" " + o + " ", " ");
                s = t ? rt.trim(i) : "", n.className !== s && (n.className = s);
            }
            return this;
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(rt.isFunction(t) ? function(n) {
                rt(this).toggleClass(t.call(this, n, this.className, e), e);
            } : function() {
                if ("string" === n) for (var e, i = 0, o = rt(this), r = t.match(xt) || []; e = r[i++]; ) o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else (n === St || "boolean" === n) && (this.className && rt._data(this, "__className__", this.className), 
                this.className = this.className || !1 === t ? "" : rt._data(this, "__className__") || "");
            });
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Le, " ").indexOf(e) >= 0) return !0;
            return !1;
        }
    }), rt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        rt.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
        };
    }), rt.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t);
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n);
        },
        unbind: function(t, e) {
            return this.off(t, null, e);
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i);
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
        }
    });
    var Ne = rt.now(), De = /\?/, Pe = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    rt.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var n, i = null, o = rt.trim(e + "");
        return o && !rt.trim(o.replace(Pe, function(t, e, o, r) {
            return n && e && (i = 0), 0 === i ? t : (n = o || e, i += !r - !o, "");
        })) ? Function("return " + o)() : rt.error("Invalid JSON: " + e);
    }, rt.parseXML = function(e) {
        var n, i;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (i = new DOMParser(), n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), 
            n.async = "false", n.loadXML(e));
        } catch (t) {
            n = void 0;
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || rt.error("Invalid XML: " + e), 
        n;
    };
    var Fe, je, Me = /#.*$/, Re = /([?&])_=[^&]*/, He = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, We = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Oe = /^(?:GET|HEAD)$/, qe = /^\/\//, Be = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, $e = {}, Ie = {}, ze = "*/".concat("*");
    try {
        je = location.href;
    } catch (t) {
        (je = gt.createElement("a")).href = "", je = je.href;
    }
    Fe = Be.exec(je.toLowerCase()) || [], rt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: je,
            type: "GET",
            isLocal: We.test(Fe[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ze,
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
                "text json": rt.parseJSON,
                "text xml": rt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? $($(t, rt.ajaxSettings), e) : $(rt.ajaxSettings, t);
        },
        ajaxPrefilter: q($e),
        ajaxTransport: q(Ie),
        ajax: function(t, e) {
            function n(t, e, n, i) {
                var o, u, v, y, b, C = e;
                2 !== x && (x = 2, a && clearTimeout(a), c = void 0, s = i || "", w.readyState = t > 0 ? 4 : 0, 
                o = t >= 200 && 300 > t || 304 === t, n && (y = I(h, w, n)), y = z(h, y, w, o), 
                o ? (h.ifModified && ((b = w.getResponseHeader("Last-Modified")) && (rt.lastModified[r] = b), 
                (b = w.getResponseHeader("etag")) && (rt.etag[r] = b)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = y.state, 
                u = y.data, v = y.error, o = !v)) : (v = C, (t || !C) && (C = "error", 0 > t && (t = 0))), 
                w.status = t, w.statusText = (e || C) + "", o ? p.resolveWith(d, [ u, C, w ]) : p.rejectWith(d, [ w, C, v ]), 
                w.statusCode(m), m = void 0, l && f.trigger(o ? "ajaxSuccess" : "ajaxError", [ w, h, o ? u : v ]), 
                g.fireWith(d, [ w, C ]), l && (f.trigger("ajaxComplete", [ w, h ]), --rt.active || rt.event.trigger("ajaxStop")));
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var i, o, r, s, a, l, c, u, h = rt.ajaxSetup({}, e), d = h.context || h, f = h.context && (d.nodeType || d.jquery) ? rt(d) : rt.event, p = rt.Deferred(), g = rt.Callbacks("once memory"), m = h.statusCode || {}, v = {}, y = {}, x = 0, b = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === x) {
                        if (!u) for (u = {}; e = He.exec(s); ) u[e[1].toLowerCase()] = e[2];
                        e = u[t.toLowerCase()];
                    }
                    return null == e ? null : e;
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? s : null;
                },
                setRequestHeader: function(t, e) {
                    var n = t.toLowerCase();
                    return x || (t = y[n] = y[n] || t, v[t] = e), this;
                },
                overrideMimeType: function(t) {
                    return x || (h.mimeType = t), this;
                },
                statusCode: function(t) {
                    var e;
                    if (t) if (2 > x) for (e in t) m[e] = [ m[e], t[e] ]; else w.always(t[w.status]);
                    return this;
                },
                abort: function(t) {
                    var e = t || b;
                    return c && c.abort(e), n(0, e), this;
                }
            };
            if (p.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, h.url = ((t || h.url || je) + "").replace(Me, "").replace(qe, Fe[1] + "//"), 
            h.type = e.method || e.type || h.method || h.type, h.dataTypes = rt.trim(h.dataType || "*").toLowerCase().match(xt) || [ "" ], 
            null == h.crossDomain && (i = Be.exec(h.url.toLowerCase()), h.crossDomain = !(!i || i[1] === Fe[1] && i[2] === Fe[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Fe[3] || ("http:" === Fe[1] ? "80" : "443")))), 
            h.data && h.processData && "string" != typeof h.data && (h.data = rt.param(h.data, h.traditional)), 
            B($e, h, e, w), 2 === x) return w;
            (l = h.global) && 0 == rt.active++ && rt.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), 
            h.hasContent = !Oe.test(h.type), r = h.url, h.hasContent || (h.data && (r = h.url += (De.test(r) ? "&" : "?") + h.data, 
            delete h.data), !1 === h.cache && (h.url = Re.test(r) ? r.replace(Re, "$1_=" + Ne++) : r + (De.test(r) ? "&" : "?") + "_=" + Ne++)), 
            h.ifModified && (rt.lastModified[r] && w.setRequestHeader("If-Modified-Since", rt.lastModified[r]), 
            rt.etag[r] && w.setRequestHeader("If-None-Match", rt.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || e.contentType) && w.setRequestHeader("Content-Type", h.contentType), 
            w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + ze + "; q=0.01" : "") : h.accepts["*"]);
            for (o in h.headers) w.setRequestHeader(o, h.headers[o]);
            if (h.beforeSend && (!1 === h.beforeSend.call(d, w, h) || 2 === x)) return w.abort();
            b = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            }) w[o](h[o]);
            if (c = B(Ie, h, e, w)) {
                w.readyState = 1, l && f.trigger("ajaxSend", [ w, h ]), h.async && h.timeout > 0 && (a = setTimeout(function() {
                    w.abort("timeout");
                }, h.timeout));
                try {
                    x = 1, c.send(v, n);
                } catch (t) {
                    if (!(2 > x)) throw t;
                    n(-1, t);
                }
            } else n(-1, "No Transport");
            return w;
        },
        getJSON: function(t, e, n) {
            return rt.get(t, e, n, "json");
        },
        getScript: function(t, e) {
            return rt.get(t, void 0, e, "script");
        }
    }), rt.each([ "get", "post" ], function(t, e) {
        rt[e] = function(t, n, i, o) {
            return rt.isFunction(n) && (o = o || i, i = n, n = void 0), rt.ajax({
                url: t,
                type: e,
                dataType: o,
                data: n,
                success: i
            });
        };
    }), rt.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(t, e) {
        rt.fn[e] = function(t) {
            return this.on(e, t);
        };
    }), rt._evalUrl = function(t) {
        return rt.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        });
    }, rt.fn.extend({
        wrapAll: function(t) {
            if (rt.isFunction(t)) return this.each(function(e) {
                rt(this).wrapAll(t.call(this, e));
            });
            if (this[0]) {
                var e = rt(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; ) t = t.firstChild;
                    return t;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(t) {
            return this.each(rt.isFunction(t) ? function(e) {
                rt(this).wrapInner(t.call(this, e));
            } : function() {
                var e = rt(this), n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t);
            });
        },
        wrap: function(t) {
            var e = rt.isFunction(t);
            return this.each(function(n) {
                rt(this).wrapAll(e ? t.call(this, n) : t);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                rt.nodeName(this, "body") || rt(this).replaceWith(this.childNodes);
            }).end();
        }
    }), rt.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !it.reliableHiddenOffsets() && "none" === (t.style && t.style.display || rt.css(t, "display"));
    }, rt.expr.filters.visible = function(t) {
        return !rt.expr.filters.hidden(t);
    };
    var _e = /%20/g, Ye = /\[\]$/, Xe = /\r?\n/g, Ve = /^(?:submit|button|image|reset|file)$/i, Ue = /^(?:input|select|textarea|keygen)/i;
    rt.param = function(t, e) {
        var n, i = [], o = function(t, e) {
            e = rt.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e);
        };
        if (void 0 === e && (e = rt.ajaxSettings && rt.ajaxSettings.traditional), rt.isArray(t) || t.jquery && !rt.isPlainObject(t)) rt.each(t, function() {
            o(this.name, this.value);
        }); else for (n in t) _(n, t[n], e, o);
        return i.join("&").replace(_e, "+");
    }, rt.fn.extend({
        serialize: function() {
            return rt.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var t = rt.prop(this, "elements");
                return t ? rt.makeArray(t) : this;
            }).filter(function() {
                var t = this.type;
                return this.name && !rt(this).is(":disabled") && Ue.test(this.nodeName) && !Ve.test(t) && (this.checked || !Dt.test(t));
            }).map(function(t, e) {
                var n = rt(this).val();
                return null == n ? null : rt.isArray(n) ? rt.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Xe, "\r\n")
                    };
                }) : {
                    name: e.name,
                    value: n.replace(Xe, "\r\n")
                };
            }).get();
        }
    }), rt.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Y() || X();
    } : Y;
    var Ge = 0, Qe = {}, Je = rt.ajaxSettings.xhr();
    t.ActiveXObject && rt(t).on("unload", function() {
        for (var t in Qe) Qe[t](void 0, !0);
    }), it.cors = !!Je && "withCredentials" in Je, (Je = it.ajax = !!Je) && rt.ajaxTransport(function(t) {
        if (!t.crossDomain || it.cors) {
            var e;
            return {
                send: function(n, i) {
                    var o, r = t.xhr(), s = ++Ge;
                    if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) r[o] = t.xhrFields[o];
                    t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (o in n) void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                    r.send(t.hasContent && t.data || null), e = function(n, o) {
                        var a, l, c;
                        if (e && (o || 4 === r.readyState)) if (delete Qe[s], e = void 0, r.onreadystatechange = rt.noop, 
                        o) 4 !== r.readyState && r.abort(); else {
                            c = {}, a = r.status, "string" == typeof r.responseText && (c.text = r.responseText);
                            try {
                                l = r.statusText;
                            } catch (t) {
                                l = "";
                            }
                            a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404;
                        }
                        c && i(a, l, c, r.getAllResponseHeaders());
                    }, t.async ? 4 === r.readyState ? setTimeout(e) : r.onreadystatechange = Qe[s] = e : e();
                },
                abort: function() {
                    e && e(void 0, !0);
                }
            };
        }
    }), rt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return rt.globalEval(t), t;
            }
        }
    }), rt.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1);
    }), rt.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n = gt.head || rt("head")[0] || gt.documentElement;
            return {
                send: function(i, o) {
                    (e = gt.createElement("script")).async = !0, t.scriptCharset && (e.charset = t.scriptCharset), 
                    e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, 
                        e.parentNode && e.parentNode.removeChild(e), e = null, n || o(200, "success"));
                    }, n.insertBefore(e, n.firstChild);
                },
                abort: function() {
                    e && e.onload(void 0, !0);
                }
            };
        }
    });
    var Ze = [], Ke = /(=)\?(?=&|$)|\?\?/;
    rt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ze.pop() || rt.expando + "_" + Ne++;
            return this[t] = !0, t;
        }
    }), rt.ajaxPrefilter("json jsonp", function(e, n, i) {
        var o, r, s, a = !1 !== e.jsonp && (Ke.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ke.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = rt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
        a ? e[a] = e[a].replace(Ke, "$1" + o) : !1 !== e.jsonp && (e.url += (De.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), 
        e.converters["script json"] = function() {
            return s || rt.error(o + " was not called"), s[0];
        }, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
            s = arguments;
        }, i.always(function() {
            t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, Ze.push(o)), s && rt.isFunction(r) && r(s[0]), 
            s = r = void 0;
        }), "script") : void 0;
    }), rt.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || gt;
        var i = dt.exec(t), o = !n && [];
        return i ? [ e.createElement(i[1]) ] : (i = rt.buildFragment([ t ], e, o), o && o.length && rt(o).remove(), 
        rt.merge([], i.childNodes));
    };
    var tn = rt.fn.load;
    rt.fn.load = function(t, e, n) {
        if ("string" != typeof t && tn) return tn.apply(this, arguments);
        var i, o, r, s = this, a = t.indexOf(" ");
        return a >= 0 && (i = t.slice(a, t.length), t = t.slice(0, a)), rt.isFunction(e) ? (n = e, 
        e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && rt.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, s.html(i ? rt("<div>").append(rt.parseHTML(t)).find(i) : t);
        }).complete(n && function(t, e) {
            s.each(n, o || [ t.responseText, e, t ]);
        }), this;
    }, rt.expr.filters.animated = function(t) {
        return rt.grep(rt.timers, function(e) {
            return t === e.elem;
        }).length;
    };
    var en = t.document.documentElement;
    rt.offset = {
        setOffset: function(t, e, n) {
            var i, o, r, s, a, l, c = rt.css(t, "position"), u = rt(t), h = {};
            "static" === c && (t.style.position = "relative"), a = u.offset(), r = rt.css(t, "top"), 
            l = rt.css(t, "left"), ("absolute" === c || "fixed" === c) && rt.inArray("auto", [ r, l ]) > -1 ? (i = u.position(), 
            s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), rt.isFunction(e) && (e = e.call(t, n, a)), 
            null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + o), 
            "using" in e ? e.using.call(t, h) : u.css(h);
        }
    }, rt.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                rt.offset.setOffset(this, t, e);
            });
            var e, n, i = {
                top: 0,
                left: 0
            }, o = this[0], r = o && o.ownerDocument;
            return r ? (e = r.documentElement, rt.contains(e, o) ? (typeof o.getBoundingClientRect !== St && (i = o.getBoundingClientRect()), 
            n = V(r), {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i) : void 0;
        },
        position: function() {
            if (this[0]) {
                var t, e, n = {
                    top: 0,
                    left: 0
                }, i = this[0];
                return "fixed" === rt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), 
                e = this.offset(), rt.nodeName(t[0], "html") || (n = t.offset()), n.top += rt.css(t[0], "borderTopWidth", !0), 
                n.left += rt.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - rt.css(i, "marginTop", !0),
                    left: e.left - n.left - rt.css(i, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || en; t && !rt.nodeName(t, "html") && "static" === rt.css(t, "position"); ) t = t.offsetParent;
                return t || en;
            });
        }
    }), rt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = /Y/.test(e);
        rt.fn[t] = function(i) {
            return Nt(this, function(t, i, o) {
                var r = V(t);
                return void 0 === o ? r ? e in r ? r[e] : r.document.documentElement[i] : t[i] : void (r ? r.scrollTo(n ? rt(r).scrollLeft() : o, n ? o : rt(r).scrollTop()) : t[i] = o);
            }, t, i, arguments.length, null);
        };
    }), rt.each([ "top", "left" ], function(t, e) {
        rt.cssHooks[e] = A(it.pixelPosition, function(t, n) {
            return n ? (n = te(t, e), ne.test(n) ? rt(t).position()[e] + "px" : n) : void 0;
        });
    }), rt.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        rt.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            rt.fn[i] = function(i, o) {
                var r = arguments.length && (n || "boolean" != typeof i), s = n || (!0 === i || !0 === o ? "margin" : "border");
                return Nt(this, function(e, n, i) {
                    var o;
                    return rt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, 
                    Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? rt.css(e, n, s) : rt.style(e, n, i, s);
                }, e, r ? i : void 0, r, null);
            };
        });
    }), rt.fn.size = function() {
        return this.length;
    }, rt.fn.andSelf = rt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return rt;
    });
    var nn = t.jQuery, on = t.$;
    return rt.noConflict = function(e) {
        return t.$ === rt && (t.$ = on), e && t.jQuery === rt && (t.jQuery = nn), rt;
    }, typeof e === St && (t.jQuery = t.$ = rt), rt;
}), $(document).ready(function() {
    function resultadoAnio(año) {
        return $.ajax({
            type: "POST",
            url: "lib/year.php",
            data: "año=" + año,
            success: function(data) {
                var valores = eval(data), e = valores[0], f = valores[1], m = valores[2], a = valores[3], ma = valores[4], j = valores[5], jl = valores[6], ag = valores[7], s = valores[8], o = valores[9], n = valores[10], d = valores[11], estrellas = valores[12], total = e + f + m + a + ma + j + jl + ag + s + o + n + d;
                if (total >= 1) {
                    $(".contYear").css({
                        display: "block"
                    });
                    var color = inSintax.concat(red[0], ",", green[0], ",", blue[0], ", 1)"), rellenoColor = inSintax.concat(red[0], ",", green[0], ",", blue[0], ", 0.2)"), Datos = {
                        labels: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
                        datasets: [ {
                            borderWidth: 2,
                            fillColor: rellenoColor,
                            strokeColor: color,
                            highlightFill: rellenoColor,
                            highlightStroke: color,
                            data: [ e, f, m, a, ma, j, jl, ag, s, o, n, d ]
                        } ]
                    }, optionsNoAnimation = {
                        animation: !0
                    }, contexto = document.getElementById("graficoYear").getContext("2d");
                    window.Barra = new Chart(contexto).Line(Datos, {
                        maintainAspectRatio: !1,
                        scales: {
                            yAxes: [ {
                                stacked: !0
                            } ]
                        },
                        showTooltips: !1,
                        intersect: !1,
                        responsive: !0,
                        animation: !0
                    });
                    var numero = parseInt(estrellas) / total;
                    numero = numero.toFixed(), $(".starY").remove();
                    for (var col = '<div class="starY">', n = 1; n <= 7; n++) col += n <= numero ? '<i class="fa fa-star"></i>' : '<i class="fa fa-star-o"></i>';
                    col += "</div>", $(".titY").append(col), $(".simboloY").remove();
                    var sim = '<div class="simboloY">';
                    sim += '<div id="cuadroY"></div>', sim += '<h1 id="titR">' + año + "</h1></div>", 
                    $(".simbologiaY").append(sim);
                    var borde = iniB.concat(color);
                    $("#cuadroY").css({
                        height: $("#titR").height() + "px"
                    }), $("#cuadroY").css({
                        width: $("#titR").height() + "px"
                    }), $("#cuadroY").css({
                        "background-color": rellenoColor
                    }), $("#cuadroY").css({
                        border: borde
                    });
                }
            }
        }), !1;
    }
    function resultadoMultiAnio() {
        return $.ajax({
            type: "POST",
            url: "lib/multiYear.php",
            success: function(data) {
                var valores = eval(data), anio = valores[0], estrellas = valores[2], total = 0;
                if (anio.length - 1 > 1) {
                    $(".contMultiYear").css({
                        display: "block"
                    });
                    var etiquetas = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ], colorBajo = new Array(), colorAlto = new Array();
                    for (lineChartData = {}, lineChartData.labels = [], lineChartData.datasets = [], 
                    line = 0; line < anio.length - 1; line++) {
                        y = [], colorAlto[line] = inSintax.concat(red[line], ",", green[line], ",", blue[line], ", 1)"), 
                        colorBajo[line] = inSintax.concat(red[line], ",", green[line], ",", blue[line], ", 0.2)"), 
                        lineChartData.datasets.push({}), dataset = lineChartData.datasets[line], dataset.borderWidth = 2, 
                        dataset.fillColor = colorBajo[line], dataset.strokeColor = colorAlto[line], dataset.highlightFill = colorBajo[line], 
                        dataset.highlightStroke = colorAlto[line], dataset.data = [];
                        var arreglo = valores[1][line].split(",");
                        for (x = 0; x < arreglo.length; x++) y.push(arreglo[x]), 0 === line && lineChartData.labels.push(etiquetas[x]), 
                        total += parseInt(arreglo[x]);
                        lineChartData.datasets[line].data = y, lineChartData.datasets[line].data.showInLegend = !0, 
                        lineChartData.datasets[line].data.name = "Truco";
                    }
                    ctx = document.getElementById("graficoMultiYear").getContext("2d"), window.Linea = new Chart(ctx).Line(lineChartData, {
                        maintainAspectRatio: !1,
                        scales: {
                            yAxes: [ {
                                stacked: !0
                            } ]
                        },
                        showTooltips: !1,
                        intersect: !1,
                        responsive: !0,
                        animation: !0
                    });
                    var numero = parseInt(estrellas) / total;
                    numero = numero.toFixed(), $(".starMY").remove();
                    for (var col = '<div class="starMY">', n = 1; n <= 7; n++) col += n <= numero ? '<i class="fa fa-star"></i>' : '<i class="fa fa-star-o"></i>';
                    col += "</div>", $(".titMY").append(col), $(".simboloMY").remove();
                    var sim = '<div class="simboloMY">';
                    for (line = 0; line < anio.length - 1; line++) sim += '<div id="cuadroMY' + valores[0][line] + '"></div>', 
                    sim += '<h1 class="titA">' + valores[0][line] + "</h1>";
                    for (sim += "</div>", $(".simbologiaMY").append(sim), line = 0; line < anio.length - 1; line++) {
                        var borde = iniB.concat(colorAlto[line]), tam = $(".titA").height();
                        $("#cuadroMY" + valores[0][line]).css({
                            height: tam + "px"
                        }), $("#cuadroMY" + valores[0][line]).css({
                            width: tam + "px"
                        }), $("#cuadroMY" + valores[0][line]).css({
                            "background-color": colorBajo[line]
                        }), $("#cuadroMY" + valores[0][line]).css({
                            border: borde
                        }), $("#cuadroMY" + valores[0][line]).css({
                            display: "inline-block"
                        });
                    }
                }
            }
        }), !1;
    }
    function resultadoYesterday(dia) {
        return $.ajax({
            type: "POST",
            url: "lib/yesterday.php",
            data: "dia=" + dia,
            success: function(data) {
                var valores = eval(data), evento = valores[0], visita = valores[1], estrellas = valores[2], fecha = valores[3], total = 0;
                if (evento.length - 1 >= 1) {
                    $(".bloqueInYes").css({
                        display: "flex"
                    });
                    var colorBajo = new Array(), colorAlto = new Array();
                    for (lineChartData = {}, lineChartData.labels = [], lineChartData.datasets = [], 
                    line = 0; line < evento.length - 1; line++) {
                        y = [], colorAlto[line] = inSintax.concat(red[line], ",", green[line], ",", blue[line], ", 1)"), 
                        colorBajo[line] = inSintax.concat(red[line], ",", green[line], ",", blue[line], ", 0.2)"), 
                        lineChartData.datasets.push({}), dataset = lineChartData.datasets[line], dataset.borderWidth = 2, 
                        dataset.fillColor = colorBajo[line], dataset.strokeColor = colorAlto[line], dataset.highlightFill = colorBajo[line], 
                        dataset.highlightStroke = colorAlto[line], dataset.data = [];
                        var arreglo = valores[1][line].split(",");
                        for (x = 0; x < arreglo.length; x++) y.push(arreglo[x]), 0 === line && lineChartData.labels.push(fecha), 
                        total += parseInt(arreglo[x]);
                        lineChartData.datasets[line].data = y, lineChartData.datasets[line].data.showInLegend = !0, 
                        lineChartData.datasets[line].data.name = "Truco";
                    }
                    ctx = document.getElementById("graficoYesterday").getContext("2d"), window.Yesterday = new Chart(ctx).Bar(lineChartData, {
                        maintainAspectRatio: !1,
                        scales: {
                            yAxes: [ {
                                stacked: !0
                            } ]
                        },
                        showTooltips: !1,
                        intersect: !1,
                        responsive: !0,
                        animation: !0
                    });
                    var numero = parseInt(estrellas) / total;
                    numero = numero.toFixed(), $(".starYes").remove();
                    for (var col = '<div class="starYes">', n = 1; n <= 7; n++) col += n <= numero ? '<i class="fa fa-star"></i>' : '<i class="fa fa-star-o"></i>';
                    col += "</div>", $(".titYes").append(col), $(".simboloYes").remove();
                    var sim = '<div class="simboloYes">';
                    for (line = 0; line < evento.length - 1; line++) sim += '<div id="cuadroYes' + valores[0][line] + '"></div>', 
                    sim += '<h1 class="titA">' + valores[0][line] + "</h1>";
                    sim += "</div>", $(".simbologiaYes").append(sim);
                    var iniB = "3px solid ";
                    for (line = 0; line < evento.length - 1; line++) {
                        var borde = iniB.concat(colorAlto[line]), tam = $(".titA").height();
                        $("#cuadroYes" + valores[0][line]).css({
                            height: tam + "px"
                        }), $("#cuadroYes" + valores[0][line]).css({
                            width: tam + "px"
                        }), $("#cuadroYes" + valores[0][line]).css({
                            "background-color": colorBajo[line]
                        }), $("#cuadroYes" + valores[0][line]).css({
                            border: borde
                        }), $("#cuadroYes" + valores[0][line]).css({
                            display: "inline-block"
                        });
                    }
                } else $(".yesterday").append("<p>No se encontraron resultados</p>");
            }
        }), !1;
    }
    function resultadoWeek(day) {
        return $.ajax({
            type: "POST",
            url: "lib/week.php",
            data: "dia=" + day,
            success: function(data) {
                var valores = eval(data), nombres = valores[0], visitas = valores[1], estrellas = valores[2], fecha = valores[3];
                if (nombres.length - 1 >= 1) {
                    $(".bloqueInW").css({
                        display: "flex"
                    });
                    var etiquetas = [ "Domingo " + fecha[0], "Lunes " + fecha[1], "Martes " + fecha[2], "Miércoles " + fecha[3], "Jueves " + fecha[4], "Viernes " + fecha[5], "Sábado " + fecha[6] ], total = 0, colorBajo = new Array(), colorAlto = new Array(), arreglo = new Array();
                    for (lineChartData = {}, lineChartData.labels = [], lineChartData.datasets = [], 
                    line = 0; line < nombres.length - 1; line++) {
                        y = [], colorAlto[line] = inSintax.concat(red[line], ",", green[line], ",", blue[line], ", 1)"), 
                        colorBajo[line] = inSintax.concat(red[line], ",", green[line], ",", blue[line], ", 0.2)"), 
                        lineChartData.datasets.push({}), dataset = lineChartData.datasets[line], dataset.borderWidth = 2, 
                        dataset.fillColor = colorBajo[line], dataset.strokeColor = colorAlto[line], dataset.highlightFill = colorBajo[line], 
                        dataset.highlightStroke = colorAlto[line], dataset.data = [];
                        var arreglo = visitas[line].split(",");
                        for (x = 0; x < arreglo.length; x++) y.push(arreglo[x]), 0 === line && lineChartData.labels.push(etiquetas[x]), 
                        total += parseInt(arreglo[x]);
                        lineChartData.datasets[line].data = y;
                    }
                    ctx = document.getElementById("graficoWeek").getContext("2d"), window.Linea = new Chart(ctx).Bar(lineChartData, {
                        maintainAspectRatio: !1,
                        scales: {
                            yAxes: [ {
                                stacked: !0
                            } ]
                        },
                        showTooltips: !1,
                        intersect: !1,
                        responsive: !0,
                        animation: !0
                    });
                    var numero = parseInt(estrellas) / total;
                    numero = numero.toFixed(), $(".starW").remove();
                    for (var col = '<div class="starW">', n = 1; n <= 7; n++) col += n <= numero ? '<i class="fa fa-star"></i>' : '<i class="fa fa-star-o"></i>';
                    col += "</div>", $(".titW").append(col), $(".simboloW").remove();
                    var sim = '<div class="simboloW">';
                    for (line = 0; line < nombres.length - 1; line++) sim += '<div id="cuadroW' + nombres[line] + '"></div>', 
                    sim += '<h1 class="titA">' + nombres[line] + "</h1>";
                    sim += "</div>", $(".simbologiaW").append(sim);
                    var iniB = "3px solid ";
                    for (line = 0; line < nombres.length - 1; line++) {
                        var borde = iniB.concat(colorAlto[line]), tam = $(".titA").height();
                        $("#cuadroW" + nombres[line]).css({
                            height: tam + "px"
                        }), $("#cuadroW" + nombres[line]).css({
                            width: tam + "px"
                        }), $("#cuadroW" + nombres[line]).css({
                            "background-color": colorBajo[line]
                        }), $("#cuadroW" + nombres[line]).css({
                            border: borde
                        }), $("#cuadroW" + nombres[line]).css({
                            display: "inline-block"
                        });
                    }
                } else $(".week").append("<p>No hay datos suficientes</p>");
            }
        }), !1;
    }
    function resultadoMonth() {
        return $.ajax({
            type: "POST",
            url: "lib/month.php",
            success: function(data) {
                var valores = eval(data), nombres = valores[0], visitas = valores[1], fin = valores[2], estrellas = valores[3];
                if (nombres.length - 1 >= 1) {
                    $(".bloqueInM").css({
                        display: "flex"
                    });
                    var total = 0, colorBajo = new Array(), colorAlto = new Array(), arreglo = new Array();
                    for (lineChartData = {}, lineChartData.labels = [], lineChartData.datasets = [], 
                    line = 0; line < nombres.length - 1; line++) {
                        for (y = [], colorAlto[line] = inSintax.concat(red[line], ",", green[line], ",", blue[line], ", 1)"), 
                        colorBajo[line] = inSintax.concat(red[line], ",", green[line], ",", blue[line], ", 0.2)"), 
                        lineChartData.datasets.push({}), dataset = lineChartData.datasets[line], dataset.borderWidth = 2, 
                        dataset.fillColor = colorBajo[line], dataset.strokeColor = colorAlto[line], dataset.highlightFill = colorBajo[line], 
                        dataset.highlightStroke = colorAlto[line], dataset.data = [], x = 0; x < fin; x++) y.push(visitas[line][x]), 
                        0 === line && lineChartData.labels.push(x + 1), total += parseInt(visitas[line][x]);
                        lineChartData.datasets[line].data = y;
                    }
                    ctx = document.getElementById("graficoMonth").getContext("2d"), window.Mes = new Chart(ctx).Line(lineChartData, {
                        maintainAspectRatio: !1,
                        scales: {
                            yAxes: [ {
                                stacked: !0
                            } ]
                        },
                        showTooltips: !1,
                        intersect: !1,
                        responsive: !0,
                        animation: !0
                    });
                    var numero = parseInt(estrellas) / total;
                    numero = numero.toFixed(), $(".starM").remove();
                    for (var col = '<div class="starM">', n = 1; n <= 7; n++) col += n <= numero ? '<i class="fa fa-star"></i>' : '<i class="fa fa-star-o"></i>';
                    col += "</div>", $(".titM").append(col), $(".simboloM").remove();
                    var sim = '<div class="simboloM">';
                    for (line = 0; line < nombres.length - 1; line++) sim += '<div id="cuadroM' + nombres[line] + '"></div>', 
                    sim += '<h1 class="titA">' + nombres[line] + "</h1>";
                    sim += "</div>", $(".simbologiaM").append(sim);
                    var iniB = "3px solid ";
                    for (line = 0; line < nombres.length - 1; line++) {
                        var borde = iniB.concat(colorAlto[line]), tam = $(".titA").height();
                        $("#cuadroM" + nombres[line]).css({
                            height: tam + "px"
                        }), $("#cuadroM" + nombres[line]).css({
                            width: tam + "px"
                        }), $("#cuadroM" + nombres[line]).css({
                            "background-color": colorBajo[line]
                        }), $("#cuadroM" + nombres[line]).css({
                            border: borde
                        }), $("#cuadroM" + nombres[line]).css({
                            display: "inline-block"
                        });
                    }
                } else $(".month").append("<p>No hay datos suficientes</p>");
            }
        }), !1;
    }
    var fecha = new Date(), ayer = new Date(fecha.getTime() - 864e5), dia = fecha.getDay();
    resultadoMultiAnio(), resultadoYesterday(ayer.getDate()), resultadoWeek(dia), resultadoMonth();
    var red = new Array(128, 0, 32, 255, 255, 128, 149, 166, 37, 42, 207, 250), green = new Array(0, 128, 128, 195, 87, 0, 165, 21, 98, 110, 35, 128), blue = new Array(32, 128, 0, 0, 51, 0, 166, 83, 152, 16, 35, 114), inSintax = "rgba(", iniB = "3px solid ", date = new Date(), yearNow = date.getFullYear();
    $(".selectYear").val(yearNow);
    var selY;
    $(".selectYear").change(function() {
        $(".selectYear option:selected").each(function() {
            selY = $(this).text(), "Ocultar" == $(".showY").text() && resultadoAnio(selY);
        });
    }).change(), $(".showY").on("click", function(t) {
        "Mostrar" == $(".showY").text() ? ($(".showY").text("Ocultar"), $(".anio").slideDown(500).delay(300), 
        resultadoAnio(selY)) : ($(".showY").text("Mostrar"), $(".anio").slideUp(500).delay(300));
    }), $(".showMY").on("click", function(t) {
        "Mostrar" == $(".showMY").text() ? ($(".showMY").text("Ocultar"), $(".multianio").slideDown(500).delay(300)) : ($(".showMY").text("Mostrar"), 
        $(".multianio").slideUp(500).delay(300));
    }), $(".showYes").on("click", function(t) {
        "Mostrar" == $(".showYes").text() ? ($(".showYes").text("Ocultar"), $(".yesterday").slideDown(500).delay(300)) : ($(".showYes").text("Mostrar"), 
        $(".yesterday").slideUp(500).delay(300));
    }), $(".showW").on("click", function(t) {
        "Mostrar" == $(".showW").text() ? ($(".showW").text("Ocultar"), $(".week").slideDown(500).delay(300)) : ($(".showW").text("Mostrar"), 
        $(".week").slideUp(500).delay(300));
    }), $(".showM").on("click", function(t) {
        "Mostrar" == $(".showM").text() ? ($(".showM").text("Ocultar"), $(".month").slideDown(500).delay(300)) : ($(".showM").text("Mostrar"), 
        $(".month").slideUp(500).delay(300));
    });
});