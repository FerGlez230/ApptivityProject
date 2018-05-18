function CargarMapaInicial() {
    function e() {
        var e = {
            zoom: 16,
            center: new google.maps.LatLng(20.703004, -103.390141)
        };
        new google.maps.Map(n, e);
    }
    function t() {}
    var n = document.getElementById("mapa");
    navigator.geolocation.getCurrentPosition(e, t);
}

function FindMeByAddress() {
    var e = document.getElementById("mapa"), t = new google.maps.Geocoder(), n = document.getElementById("address").value, i = {
        zoom: 16,
        center: new google.maps.LatLng(20.703004, -103.390141)
    }, o = new google.maps.Map(e, i), r = new google.maps.InfoWindow();
    t.geocode({
        address: n
    }, function(e, t) {
        if ("OK" == t) {
            o.setCenter(e[0].geometry.location);
            var i = new google.maps.Marker({
                map: o,
                position: e[0].geometry.location
            });
            r.setContent(n), r.open(o, i);
        } else {
            if ("INVALID_REQUEST" == t) var s = "¡Datos sin seleccionar!", a = "Ingrese una dirección u obtenga su dirección actual.";
            if ("ZERO_RESULTS" == t) var s = "No se encontraron resultados", a = "La dirección ingresada no es válida. <br><br> Ingrese una dirección con el siguiente formato: <br> Calle, Número, Colonia";
            $.alert({
                icon: "fa fa-warning",
                closeAnimation: "rotate",
                title: s,
                content: a,
                boxWidth: "30%",
                useBootstrap: !1
            });
        }
    });
}

function FindMe() {
    function e(e) {
        var t = e.coords.latitude, i = e.coords.longitude, r = new google.maps.LatLng(t, i), s = {
            zoom: 16,
            center: r
        }, a = new google.maps.Map(o, s), c = {
            position: r,
            map: a
        };
        n(new google.maps.Geocoder(), a, new google.maps.InfoWindow(), r, new google.maps.Marker(c));
    }
    function t() {
        i.innerHTML = "<br> No se pudo cargar el mapa. Recargue la página";
    }
    function n(e, t, n, i, o) {
        e.geocode({
            location: i
        }, function(e, i) {
            if ("OK" == i) e[0] ? (n.setContent(e[0].formatted_address), n.open(t, o)) : $.alert({
                closeAnimation: "rotate",
                title: "Error de mapa",
                content: "No se encontraron resultados.",
                boxWidth: "30%",
                useBootstrap: !1
            }); else {
                var r = "Geocoder falló debido a: " + i;
                $.alert({
                    closeAnimation: "rotate",
                    title: "Error de mapa",
                    content: r,
                    boxWidth: "30%",
                    useBootstrap: !1
                });
            }
        });
    }
    var i = document.getElementById("map"), o = document.getElementById("mapa");
    navigator.geolocation, navigator.geolocation.getCurrentPosition(e, t);
}

if (function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
    } : t(e);
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    function n(e, t) {
        var n = (t = t || te).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n);
    }
    function i(e) {
        var t = !!e && "length" in e && e.length, n = pe.type(e);
        return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    function o(e, t, n) {
        return pe.isFunction(t) ? pe.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n;
        }) : t.nodeType ? pe.grep(e, function(e) {
            return e === t !== n;
        }) : "string" != typeof t ? pe.grep(e, function(e) {
            return se.call(t, e) > -1 !== n;
        }) : je.test(t) ? pe.filter(t, e, n) : (t = pe.filter(t, e), pe.grep(e, function(e) {
            return se.call(t, e) > -1 !== n && 1 === e.nodeType;
        }));
    }
    function r(e, t) {
        for (;(e = e[t]) && 1 !== e.nodeType; ) ;
        return e;
    }
    function s(e) {
        var t = {};
        return pe.each(e.match(Ee) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    function a(e) {
        return e;
    }
    function c(e) {
        throw e;
    }
    function u(e, t, n) {
        var i;
        try {
            e && pe.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && pe.isFunction(i = e.then) ? i.call(e, t, n) : t.call(void 0, e);
        } catch (e) {
            n.call(void 0, e);
        }
    }
    function l() {
        te.removeEventListener("DOMContentLoaded", l), e.removeEventListener("load", l), 
        pe.ready();
    }
    function f() {
        this.expando = pe.expando + f.uid++;
    }
    function d(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : qe.test(e) ? JSON.parse(e) : e);
    }
    function p(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(He, "-$&").toLowerCase(), 
        "string" == typeof (n = e.getAttribute(i))) {
            try {
                n = d(n);
            } catch (e) {}
            Pe.set(e, t, n);
        } else n = void 0;
        return n;
    }
    function h(e, t, n, i) {
        var o, r = 1, s = 20, a = i ? function() {
            return i.cur();
        } : function() {
            return pe.css(e, t, "");
        }, c = a(), u = n && n[3] || (pe.cssNumber[t] ? "" : "px"), l = (pe.cssNumber[t] || "px" !== u && +c) && Oe.exec(pe.css(e, t));
        if (l && l[3] !== u) {
            u = u || l[3], n = n || [], l = +c || 1;
            do {
                l /= r = r || ".5", pe.style(e, t, l + u);
            } while (r !== (r = a() / c) && 1 !== r && --s);
        }
        return n && (l = +l || +c || 0, o = n[1] ? l + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, 
        i.start = l, i.end = o)), o;
    }
    function m(e) {
        var t, n = e.ownerDocument, i = e.nodeName, o = Me[i];
        return o || (t = n.body.appendChild(n.createElement(i)), o = pe.css(t, "display"), 
        t.parentNode.removeChild(t), "none" === o && (o = "block"), Me[i] = o, o);
    }
    function g(e, t) {
        for (var n, i, o = [], r = 0, s = e.length; r < s; r++) (i = e[r]).style && (n = i.style.display, 
        t ? ("none" === n && (o[r] = _e.get(i, "display") || null, o[r] || (i.style.display = "")), 
        "" === i.style.display && Fe(i) && (o[r] = m(i))) : "none" !== n && (o[r] = "none", 
        _e.set(i, "display", n)));
        for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
        return e;
    }
    function v(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
        void 0 === t || t && pe.nodeName(e, t) ? pe.merge([ e ], n) : n;
    }
    function y(e, t) {
        for (var n = 0, i = e.length; n < i; n++) _e.set(e[n], "globalEval", !t || _e.get(t[n], "globalEval"));
    }
    function b(e, t, n, i, o) {
        for (var r, s, a, c, u, l, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++) if ((r = e[p]) || 0 === r) if ("object" === pe.type(r)) pe.merge(d, r.nodeType ? [ r ] : r); else if (Ke.test(r)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (Xe.exec(r) || [ "", "" ])[1].toLowerCase(), 
            c = Ye[a] || Ye._default, s.innerHTML = c[1] + pe.htmlPrefilter(r) + c[2], l = c[0]; l--; ) s = s.lastChild;
            pe.merge(d, s.childNodes), (s = f.firstChild).textContent = "";
        } else d.push(t.createTextNode(r));
        for (f.textContent = "", p = 0; r = d[p++]; ) if (i && pe.inArray(r, i) > -1) o && o.push(r); else if (u = pe.contains(r.ownerDocument, r), 
        s = v(f.appendChild(r), "script"), u && y(s), n) for (l = 0; r = s[l++]; ) ze.test(r.type || "") && n.push(r);
        return f;
    }
    function x() {
        return !0;
    }
    function C() {
        return !1;
    }
    function w() {
        try {
            return te.activeElement;
        } catch (e) {}
    }
    function j(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) j(e, a, n, i, t[a], r);
            return e;
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, 
        i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = C; else if (!o) return e;
        return 1 === r && (s = o, (o = function(e) {
            return pe().off(e), s.apply(this, arguments);
        }).guid = s.guid || (s.guid = pe.guid++)), e.each(function() {
            pe.event.add(this, t, o, i, n);
        });
    }
    function T(e, t) {
        return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e;
    }
    function k(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function D(e) {
        var t = tt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function S(e, t) {
        var n, i, o, r, s, a, c, u;
        if (1 === t.nodeType) {
            if (_e.hasData(e) && (r = _e.access(e), s = _e.set(t, r), u = r.events)) {
                delete s.handle, s.events = {};
                for (o in u) for (n = 0, i = u[o].length; n < i; n++) pe.event.add(t, o, u[o][n]);
            }
            Pe.hasData(e) && (a = Pe.access(e), c = pe.extend({}, a), Pe.set(t, c));
        }
    }
    function E(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && We.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }
    function A(e, t, i, o) {
        t = oe.apply([], t);
        var r, s, a, c, u, l, f = 0, d = e.length, p = d - 1, h = t[0], m = pe.isFunction(h);
        if (m || d > 1 && "string" == typeof h && !de.checkClone && et.test(h)) return e.each(function(n) {
            var r = e.eq(n);
            m && (t[0] = h.call(this, n, r.html())), A(r, t, i, o);
        });
        if (d && (r = b(t, e[0].ownerDocument, !1, e, o), s = r.firstChild, 1 === r.childNodes.length && (r = s), 
        s || o)) {
            for (c = (a = pe.map(v(r, "script"), k)).length; f < d; f++) u = r, f !== p && (u = pe.clone(u, !0, !0), 
            c && pe.merge(a, v(u, "script"))), i.call(e[f], u, f);
            if (c) for (l = a[a.length - 1].ownerDocument, pe.map(a, D), f = 0; f < c; f++) u = a[f], 
            ze.test(u.type || "") && !_e.access(u, "globalEval") && pe.contains(l, u) && (u.src ? pe._evalUrl && pe._evalUrl(u.src) : n(u.textContent.replace(nt, ""), l));
        }
        return e;
    }
    function $(e, t, n) {
        for (var i, o = t ? pe.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || pe.cleanData(v(i)), 
        i.parentNode && (n && pe.contains(i.ownerDocument, i) && y(v(i, "script")), i.parentNode.removeChild(i));
        return e;
    }
    function N(e, t, n) {
        var i, o, r, s, a = e.style;
        return (n = n || rt(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || pe.contains(e.ownerDocument, e) || (s = pe.style(e, t)), 
        !de.pixelMarginRight() && ot.test(s) && it.test(t) && (i = a.width, o = a.minWidth, 
        r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, 
        a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s;
    }
    function L(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            }
        };
    }
    function _(e) {
        if (e in lt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ut.length; n--; ) if ((e = ut[n] + t) in lt) return e;
    }
    function P(e, t, n) {
        var i = Oe.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function q(e, t, n, i, o) {
        var r, s = 0;
        for (r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2) "margin" === n && (s += pe.css(e, n + Ie[r], !0, o)), 
        i ? ("content" === n && (s -= pe.css(e, "padding" + Ie[r], !0, o)), "margin" !== n && (s -= pe.css(e, "border" + Ie[r] + "Width", !0, o))) : (s += pe.css(e, "padding" + Ie[r], !0, o), 
        "padding" !== n && (s += pe.css(e, "border" + Ie[r] + "Width", !0, o)));
        return s;
    }
    function H(e, t, n) {
        var i, o = !0, r = rt(e), s = "border-box" === pe.css(e, "boxSizing", !1, r);
        if (e.getClientRects().length && (i = e.getBoundingClientRect()[t]), i <= 0 || null == i) {
            if (((i = N(e, t, r)) < 0 || null == i) && (i = e.style[t]), ot.test(i)) return i;
            o = s && (de.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0;
        }
        return i + q(e, t, n || (s ? "border" : "content"), o, r) + "px";
    }
    function B(e, t, n, i, o) {
        return new B.prototype.init(e, t, n, i, o);
    }
    function O() {
        dt && (e.requestAnimationFrame(O), pe.fx.tick());
    }
    function I() {
        return e.setTimeout(function() {
            ft = void 0;
        }), ft = pe.now();
    }
    function F(e, t) {
        var n, i = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = Ie[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o;
    }
    function R(e, t, n) {
        for (var i, o = (X.tweeners[t] || []).concat(X.tweeners["*"]), r = 0, s = o.length; r < s; r++) if (i = o[r].call(n, t, e)) return i;
    }
    function M(e, t, n) {
        var i, o, r, s, a, c, u, l, f = "width" in t || "height" in t, d = this, p = {}, h = e.style, m = e.nodeType && Fe(e), v = _e.get(e, "fxshow");
        n.queue || (null == (s = pe._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, 
        s.empty.fire = function() {
            s.unqueued || a();
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, pe.queue(e, "fx").length || s.empty.fire();
            });
        }));
        for (i in t) if (o = t[i], pt.test(o)) {
            if (delete t[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
                if ("show" !== o || !v || void 0 === v[i]) continue;
                m = !0;
            }
            p[i] = v && v[i] || pe.style(e, i);
        }
        if ((c = !pe.isEmptyObject(t)) || !pe.isEmptyObject(p)) {
            f && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
            null == (u = v && v.display) && (u = _e.get(e, "display")), "none" === (l = pe.css(e, "display")) && (u ? l = u : (g([ e ], !0), 
            u = e.style.display || u, l = pe.css(e, "display"), g([ e ]))), ("inline" === l || "inline-block" === l && null != u) && "none" === pe.css(e, "float") && (c || (d.done(function() {
                h.display = u;
            }), null == u && (l = h.display, u = "none" === l ? "" : l)), h.display = "inline-block")), 
            n.overflow && (h.overflow = "hidden", d.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
            })), c = !1;
            for (i in p) c || (v ? "hidden" in v && (m = v.hidden) : v = _e.access(e, "fxshow", {
                display: u
            }), r && (v.hidden = !m), m && g([ e ], !0), d.done(function() {
                m || g([ e ]), _e.remove(e, "fxshow");
                for (i in p) pe.style(e, i, p[i]);
            })), c = R(m ? v[i] : 0, i, d), i in v || (v[i] = c.start, m && (c.end = c.start, 
            c.start = 0));
        }
    }
    function W(e, t) {
        var n, i, o, r, s;
        for (n in e) if (i = pe.camelCase(n), o = t[i], r = e[n], pe.isArray(r) && (o = r[1], 
        r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = pe.cssHooks[i]) && "expand" in s) {
            r = s.expand(r), delete e[i];
            for (n in r) n in e || (e[n] = r[n], t[n] = o);
        } else t[i] = o;
    }
    function X(e, t, n) {
        var i, o, r = 0, s = X.prefilters.length, a = pe.Deferred().always(function() {
            delete c.elem;
        }), c = function() {
            if (o) return !1;
            for (var t = ft || I(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), r = 0, s = u.tweens.length; r < s; r++) u.tweens[r].run(i);
            return a.notifyWith(e, [ u, i, n ]), i < 1 && s ? n : (a.resolveWith(e, [ u ]), 
            !1);
        }, u = a.promise({
            elem: e,
            props: pe.extend({}, t),
            opts: pe.extend(!0, {
                specialEasing: {},
                easing: pe.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: ft || I(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = pe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(i), i;
            },
            stop: function(t) {
                var n = 0, i = t ? u.tweens.length : 0;
                if (o) return this;
                for (o = !0; n < i; n++) u.tweens[n].run(1);
                return t ? (a.notifyWith(e, [ u, 1, 0 ]), a.resolveWith(e, [ u, t ])) : a.rejectWith(e, [ u, t ]), 
                this;
            }
        }), l = u.props;
        for (W(l, u.opts.specialEasing); r < s; r++) if (i = X.prefilters[r].call(u, e, l, u.opts)) return pe.isFunction(i.stop) && (pe._queueHooks(u.elem, u.opts.queue).stop = pe.proxy(i.stop, i)), 
        i;
        return pe.map(l, R, u), pe.isFunction(u.opts.start) && u.opts.start.call(e, u), 
        pe.fx.timer(pe.extend(c, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
    }
    function z(e) {
        return (e.match(Ee) || []).join(" ");
    }
    function Y(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }
    function K(e, t, n, i) {
        var o;
        if (pe.isArray(t)) pe.each(t, function(t, o) {
            n || Tt.test(e) ? i(e, o) : K(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i);
        }); else if (n || "object" !== pe.type(t)) i(e, t); else for (o in t) K(e + "[" + o + "]", t[o], n, i);
    }
    function U(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0, r = t.toLowerCase().match(Ee) || [];
            if (pe.isFunction(n)) for (;i = r[o++]; ) "+" === i[0] ? (i = i.slice(1) || "*", 
            (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
        };
    }
    function G(e, t, n, i) {
        function o(a) {
            var c;
            return r[a] = !0, pe.each(e[a] || [], function(e, a) {
                var u = a(t, n, i);
                return "string" != typeof u || s || r[u] ? s ? !(c = u) : void 0 : (t.dataTypes.unshift(u), 
                o(u), !1);
            }), c;
        }
        var r = {}, s = e === Ht;
        return o(t.dataTypes[0]) || !r["*"] && o("*");
    }
    function V(e, t) {
        var n, i, o = pe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && pe.extend(!0, e, i), e;
    }
    function Q(e, t, n) {
        for (var i, o, r, s, a = e.contents, c = e.dataTypes; "*" === c[0]; ) c.shift(), 
        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i) for (o in a) if (a[o] && a[o].test(i)) {
            c.unshift(o);
            break;
        }
        if (c[0] in n) r = c[0]; else {
            for (o in n) {
                if (!c[0] || e.converters[o + " " + c[0]]) {
                    r = o;
                    break;
                }
                s || (s = o);
            }
            r = r || s;
        }
        if (r) return r !== c[0] && c.unshift(r), n[r];
    }
    function J(e, t, n, i) {
        var o, r, s, a, c, u = {}, l = e.dataTypes.slice();
        if (l[1]) for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
        for (r = l.shift(); r; ) if (e.responseFields[r] && (n[e.responseFields[r]] = t), 
        !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = r, r = l.shift()) if ("*" === r) r = c; else if ("*" !== c && c !== r) {
            if (!(s = u[c + " " + r] || u["* " + r])) for (o in u) if ((a = o.split(" "))[1] === r && (s = u[c + " " + a[0]] || u["* " + a[0]])) {
                !0 === s ? s = u[o] : !0 !== u[o] && (r = a[0], l.unshift(a[1]));
                break;
            }
            if (!0 !== s) if (s && e.throws) t = s(t); else try {
                t = s(t);
            } catch (e) {
                return {
                    state: "parsererror",
                    error: s ? e : "No conversion from " + c + " to " + r
                };
            }
        }
        return {
            state: "success",
            data: t
        };
    }
    function Z(e) {
        return pe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
    }
    var ee = [], te = e.document, ne = Object.getPrototypeOf, ie = ee.slice, oe = ee.concat, re = ee.push, se = ee.indexOf, ae = {}, ce = ae.toString, ue = ae.hasOwnProperty, le = ue.toString, fe = le.call(Object), de = {}, pe = function(e, t) {
        return new pe.fn.init(e, t);
    }, he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, me = /^-ms-/, ge = /-([a-z])/g, ve = function(e, t) {
        return t.toUpperCase();
    };
    pe.fn = pe.prototype = {
        jquery: "3.1.1",
        constructor: pe,
        length: 0,
        toArray: function() {
            return ie.call(this);
        },
        get: function(e) {
            return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
            var t = pe.merge(this.constructor(), e);
            return t.prevObject = this, t;
        },
        each: function(e) {
            return pe.each(this, e);
        },
        map: function(e) {
            return this.pushStack(pe.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        slice: function() {
            return this.pushStack(ie.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: re,
        sort: ee.sort,
        splice: ee.splice
    }, pe.extend = pe.fn.extend = function() {
        var e, t, n, i, o, r, s = arguments[0] || {}, a = 1, c = arguments.length, u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || pe.isFunction(s) || (s = {}), 
        a === c && (s = this, a--); a < c; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], 
        s !== (i = e[t]) && (u && i && (pe.isPlainObject(i) || (o = pe.isArray(i))) ? (o ? (o = !1, 
        r = n && pe.isArray(n) ? n : []) : r = n && pe.isPlainObject(n) ? n : {}, s[t] = pe.extend(u, r, i)) : void 0 !== i && (s[t] = i));
        return s;
    }, pe.extend({
        expando: "jQuery" + ("3.1.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === pe.type(e);
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window;
        },
        isNumeric: function(e) {
            var t = pe.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== ce.call(e)) && (!(t = ne(e)) || "function" == typeof (n = ue.call(t, "constructor") && t.constructor) && le.call(n) === fe);
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ae[ce.call(e)] || "object" : typeof e;
        },
        globalEval: function(e) {
            n(e);
        },
        camelCase: function(e) {
            return e.replace(me, "ms-").replace(ge, ve);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, t) {
            var n, o = 0;
            if (i(e)) for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++) ; else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(he, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? pe.merge(n, "string" == typeof e ? [ e ] : e) : re.call(n, e)), 
            n;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : se.call(t, e, n);
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e;
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
            return i;
        },
        map: function(e, t, n) {
            var o, r, s = 0, a = [];
            if (i(e)) for (o = e.length; s < o; s++) null != (r = t(e[s], s, n)) && a.push(r); else for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
            return oe.apply([], a);
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            if ("string" == typeof t && (n = e[t], t = e, e = n), pe.isFunction(e)) return i = ie.call(arguments, 2), 
            o = function() {
                return e.apply(t || this, i.concat(ie.call(arguments)));
            }, o.guid = e.guid = e.guid || pe.guid++, o;
        },
        now: Date.now,
        support: de
    }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ee[Symbol.iterator]), 
    pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ae["[object " + t + "]"] = t.toLowerCase();
    });
    var ye = function(e) {
        function t(e, t, n, i) {
            var o, r, s, a, c, l, d, p = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!i && ((t ? t.ownerDocument || t : I) !== N && $(t), t = t || N, _)) {
                if (11 !== h && (c = me.exec(e))) if (o = c[1]) {
                    if (9 === h) {
                        if (!(s = t.getElementById(o))) return n;
                        if (s.id === o) return n.push(s), n;
                    } else if (p && (s = p.getElementById(o)) && B(t, s) && s.id === o) return n.push(s), 
                    n;
                } else {
                    if (c[2]) return V.apply(n, t.getElementsByTagName(e)), n;
                    if ((o = c[3]) && x.getElementsByClassName && t.getElementsByClassName) return V.apply(n, t.getElementsByClassName(o)), 
                    n;
                }
                if (x.qsa && !X[e + " "] && (!P || !P.test(e))) {
                    if (1 !== h) p = t, d = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(be, xe) : t.setAttribute("id", a = O), 
                        r = (l = T(e)).length; r--; ) l[r] = "#" + a + " " + f(l[r]);
                        d = l.join(","), p = ge.test(e) && u(t.parentNode) || t;
                    }
                    if (d) try {
                        return V.apply(n, p.querySelectorAll(d)), n;
                    } catch (e) {} finally {
                        a === O && t.removeAttribute("id");
                    }
                }
            }
            return D(e.replace(re, "$1"), t, n, i);
        }
        function n() {
            function e(n, i) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = i;
            }
            var t = [];
            return e;
        }
        function i(e) {
            return e[O] = !0, e;
        }
        function o(e) {
            var t = N.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function r(e, t) {
            for (var n = e.split("|"), i = n.length; i--; ) C.attrHandle[n[i]] = t;
        }
        function s(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function a(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && we(t) === e : t.disabled === e : "label" in t && t.disabled === e;
            };
        }
        function c(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--; ) n[o = r[s]] && (n[o] = !(i[o] = n[o]));
                });
            });
        }
        function u(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        function l() {}
        function f(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
        }
        function d(e, t, n) {
            var i = t.dir, o = t.next, r = o || i, s = n && "parentNode" === r, a = R++;
            return t.first ? function(t, n, o) {
                for (;t = t[i]; ) if (1 === t.nodeType || s) return e(t, n, o);
                return !1;
            } : function(t, n, c) {
                var u, l, f, d = [ F, a ];
                if (c) {
                    for (;t = t[i]; ) if ((1 === t.nodeType || s) && e(t, n, c)) return !0;
                } else for (;t = t[i]; ) if (1 === t.nodeType || s) if (f = t[O] || (t[O] = {}), 
                l = f[t.uniqueID] || (f[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t; else {
                    if ((u = l[r]) && u[0] === F && u[1] === a) return d[2] = u[2];
                    if (l[r] = d, d[2] = e(t, n, c)) return !0;
                }
                return !1;
            };
        }
        function p(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
                return !0;
            } : e[0];
        }
        function h(e, n, i) {
            for (var o = 0, r = n.length; o < r; o++) t(e, n[o], i);
            return i;
        }
        function m(e, t, n, i, o) {
            for (var r, s = [], a = 0, c = e.length, u = null != t; a < c; a++) (r = e[a]) && (n && !n(r, i, o) || (s.push(r), 
            u && t.push(a)));
            return s;
        }
        function g(e, t, n, o, r, s) {
            return o && !o[O] && (o = g(o)), r && !r[O] && (r = g(r, s)), i(function(i, s, a, c) {
                var u, l, f, d = [], p = [], g = s.length, v = i || h(t || "*", a.nodeType ? [ a ] : a, []), y = !e || !i && t ? v : m(v, d, e, a, c), b = n ? r || (i ? e : g || o) ? [] : s : y;
                if (n && n(y, b, a, c), o) for (u = m(b, p), o(u, [], a, c), l = u.length; l--; ) (f = u[l]) && (b[p[l]] = !(y[p[l]] = f));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (u = [], l = b.length; l--; ) (f = b[l]) && u.push(y[l] = f);
                            r(null, b = [], u, c);
                        }
                        for (l = b.length; l--; ) (f = b[l]) && (u = r ? J(i, f) : d[l]) > -1 && (i[u] = !(s[u] = f));
                    }
                } else b = m(b === s ? b.splice(g, b.length) : b), r ? r(null, s, b, c) : V.apply(s, b);
            });
        }
        function v(e) {
            for (var t, n, i, o = e.length, r = C.relative[e[0].type], s = r || C.relative[" "], a = r ? 1 : 0, c = d(function(e) {
                return e === t;
            }, s, !0), u = d(function(e) {
                return J(t, e) > -1;
            }, s, !0), l = [ function(e, n, i) {
                var o = !r && (i || n !== S) || ((t = n).nodeType ? c(e, n, i) : u(e, n, i));
                return t = null, o;
            } ]; a < o; a++) if (n = C.relative[e[a].type]) l = [ d(p(l), n) ]; else {
                if ((n = C.filter[e[a].type].apply(null, e[a].matches))[O]) {
                    for (i = ++a; i < o && !C.relative[e[i].type]; i++) ;
                    return g(a > 1 && p(l), a > 1 && f(e.slice(0, a - 1).concat({
                        value: " " === e[a - 2].type ? "*" : ""
                    })).replace(re, "$1"), n, a < i && v(e.slice(a, i)), i < o && v(e = e.slice(i)), i < o && f(e));
                }
                l.push(n);
            }
            return p(l);
        }
        function y(e, n) {
            var o = n.length > 0, r = e.length > 0, s = function(i, s, a, c, u) {
                var l, f, d, p = 0, h = "0", g = i && [], v = [], y = S, b = i || r && C.find.TAG("*", u), x = F += null == y ? 1 : Math.random() || .1, w = b.length;
                for (u && (S = s === N || s || u); h !== w && null != (l = b[h]); h++) {
                    if (r && l) {
                        for (f = 0, s || l.ownerDocument === N || ($(l), a = !_); d = e[f++]; ) if (d(l, s || N, a)) {
                            c.push(l);
                            break;
                        }
                        u && (F = x);
                    }
                    o && ((l = !d && l) && p--, i && g.push(l));
                }
                if (p += h, o && h !== p) {
                    for (f = 0; d = n[f++]; ) d(g, v, s, a);
                    if (i) {
                        if (p > 0) for (;h--; ) g[h] || v[h] || (v[h] = U.call(c));
                        v = m(v);
                    }
                    V.apply(c, v), u && !i && v.length > 0 && p + n.length > 1 && t.uniqueSort(c);
                }
                return u && (F = x, S = y), g;
            };
            return o ? i(s) : s;
        }
        var b, x, C, w, j, T, k, D, S, E, A, $, N, L, _, P, q, H, B, O = "sizzle" + 1 * new Date(), I = e.document, F = 0, R = 0, M = n(), W = n(), X = n(), z = function(e, t) {
            return e === t && (A = !0), 0;
        }, Y = {}.hasOwnProperty, K = [], U = K.pop, G = K.push, V = K.push, Q = K.slice, J = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1;
        }, Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]", ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)", oe = new RegExp(ee + "+", "g"), re = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"), se = new RegExp("^" + ee + "*," + ee + "*"), ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), ce = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), ue = new RegExp(ie), le = new RegExp("^" + te + "$"), fe = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te + "|[*])"),
            ATTR: new RegExp("^" + ne),
            PSEUDO: new RegExp("^" + ie),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + Z + ")$", "i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
        }, de = /^(?:input|select|textarea|button)$/i, pe = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/, ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), ye = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
        }, be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, xe = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        }, Ce = function() {
            $();
        }, we = d(function(e) {
            return !0 === e.disabled && ("form" in e || "label" in e);
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            V.apply(K = Q.call(I.childNodes), I.childNodes), K[I.childNodes.length].nodeType;
        } catch (e) {
            V = {
                apply: K.length ? function(e, t) {
                    G.apply(e, Q.call(t));
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        x = t.support = {}, j = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }, $ = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : I;
            return i !== N && 9 === i.nodeType && i.documentElement ? (N = i, L = N.documentElement, 
            _ = !j(N), I !== N && (n = N.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), 
            x.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), x.getElementsByTagName = o(function(e) {
                return e.appendChild(N.createComment("")), !e.getElementsByTagName("*").length;
            }), x.getElementsByClassName = he.test(N.getElementsByClassName), x.getById = o(function(e) {
                return L.appendChild(e).id = O, !N.getElementsByName || !N.getElementsByName(O).length;
            }), x.getById ? (C.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }, C.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && _) {
                    var n = t.getElementById(e);
                    return n ? [ n ] : [];
                }
            }) : (C.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }, C.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && _) {
                    var n, i, o, r = t.getElementById(e);
                    if (r) {
                        if ((n = r.getAttributeNode("id")) && n.value === e) return [ r ];
                        for (o = t.getElementsByName(e), i = 0; r = o[i++]; ) if ((n = r.getAttributeNode("id")) && n.value === e) return [ r ];
                    }
                    return [];
                }
            }), C.find.TAG = x.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, i = [], o = 0, r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = r[o++]; ) 1 === n.nodeType && i.push(n);
                    return i;
                }
                return r;
            }, C.find.CLASS = x.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && _) return t.getElementsByClassName(e);
            }, q = [], P = [], (x.qsa = he.test(N.querySelectorAll)) && (o(function(e) {
                L.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ee + "*(?:''|\"\")"), 
                e.querySelectorAll("[selected]").length || P.push("\\[" + ee + "*(?:value|" + Z + ")"), 
                e.querySelectorAll("[id~=" + O + "-]").length || P.push("~="), e.querySelectorAll(":checked").length || P.push(":checked"), 
                e.querySelectorAll("a#" + O + "+*").length || P.push(".#.+[+~]");
            }), o(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = N.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + ee + "*[*^$|!~]?="), 
                2 !== e.querySelectorAll(":enabled").length && P.push(":enabled", ":disabled"), 
                L.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && P.push(":enabled", ":disabled"), 
                e.querySelectorAll("*,:x"), P.push(",.*:");
            })), (x.matchesSelector = he.test(H = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && o(function(e) {
                x.disconnectedMatch = H.call(e, "*"), H.call(e, "[s!='']:x"), q.push("!=", ie);
            }), P = P.length && new RegExp(P.join("|")), q = q.length && new RegExp(q.join("|")), 
            t = he.test(L.compareDocumentPosition), B = t || he.test(L.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, z = t ? function(e, t) {
                if (e === t) return A = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 
                1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === N || e.ownerDocument === I && B(I, e) ? -1 : t === N || t.ownerDocument === I && B(I, t) ? 1 : E ? J(E, e) - J(E, t) : 0 : 4 & n ? -1 : 1);
            } : function(e, t) {
                if (e === t) return A = !0, 0;
                var n, i = 0, o = e.parentNode, r = t.parentNode, a = [ e ], c = [ t ];
                if (!o || !r) return e === N ? -1 : t === N ? 1 : o ? -1 : r ? 1 : E ? J(E, e) - J(E, t) : 0;
                if (o === r) return s(e, t);
                for (n = e; n = n.parentNode; ) a.unshift(n);
                for (n = t; n = n.parentNode; ) c.unshift(n);
                for (;a[i] === c[i]; ) i++;
                return i ? s(a[i], c[i]) : a[i] === I ? -1 : c[i] === I ? 1 : 0;
            }, N) : N;
        }, t.matches = function(e, n) {
            return t(e, null, null, n);
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== N && $(e), n = n.replace(ce, "='$1']"), x.matchesSelector && _ && !X[n + " "] && (!q || !q.test(n)) && (!P || !P.test(n))) try {
                var i = H.call(e, n);
                if (i || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
            } catch (e) {}
            return t(n, N, null, [ e ]).length > 0;
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== N && $(e), B(e, t);
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== N && $(e);
            var n = C.attrHandle[t.toLowerCase()], i = n && Y.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
            return void 0 !== i ? i : x.attributes || !_ ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }, t.escape = function(e) {
            return (e + "").replace(be, xe);
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, t.uniqueSort = function(e) {
            var t, n = [], i = 0, o = 0;
            if (A = !x.detectDuplicates, E = !x.sortStable && e.slice(0), e.sort(z), A) {
                for (;t = e[o++]; ) t === e[o] && (i = n.push(o));
                for (;i--; ) e.splice(n[i], 1);
            }
            return E = null, e;
        }, w = t.getText = function(e) {
            var t, n = "", i = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += w(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (;t = e[i++]; ) n += w(t);
            return n;
        }, (C = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ve, ye).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = M[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && M(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, n, i) {
                    return function(o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"));
                    };
                },
                CHILD: function(e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === i && 0 === o ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, c) {
                        var u, l, f, d, p, h, m = r !== s ? "nextSibling" : "previousSibling", g = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !c && !a, b = !1;
                        if (g) {
                            if (r) {
                                for (;m; ) {
                                    for (d = t; d = d[m]; ) if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                            }
                            if (h = [ s ? g.firstChild : g.lastChild ], s && y) {
                                for (b = (p = (u = (l = (f = (d = g)[O] || (d[O] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === F && u[1]) && u[2], 
                                d = p && g.childNodes[p]; d = ++p && d && d[m] || (b = p = 0) || h.pop(); ) if (1 === d.nodeType && ++b && d === t) {
                                    l[e] = [ F, p, b ];
                                    break;
                                }
                            } else if (y && (b = p = (u = (l = (f = (d = t)[O] || (d[O] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === F && u[1]), 
                            !1 === b) for (;(d = ++p && d && d[m] || (b = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((l = (f = d[O] || (d[O] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [ F, b ]), 
                            d !== t)); ) ;
                            return (b -= o) === i || b % i == 0 && b / i >= 0;
                        }
                    };
                },
                PSEUDO: function(e, n) {
                    var o, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[O] ? r(n) : r.length > 1 ? (o = [ e, e, "", n ], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, o = r(e, n), s = o.length; s--; ) e[i = J(e, o[s])] = !(t[i] = o[s]);
                    }) : function(e) {
                        return r(e, 0, o);
                    }) : r;
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [], n = [], o = k(e.replace(re, "$1"));
                    return o[O] ? i(function(e, t, n, i) {
                        for (var r, s = o(e, null, i, []), a = e.length; a--; ) (r = s[a]) && (e[a] = !(t[a] = r));
                    }) : function(e, i, r) {
                        return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop();
                    };
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0;
                    };
                }),
                contains: i(function(e) {
                    return e = e.replace(ve, ye), function(t) {
                        return (t.textContent || t.innerText || w(t)).indexOf(e) > -1;
                    };
                }),
                lang: i(function(e) {
                    return le.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(), 
                    function(t) {
                        var n;
                        do {
                            if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function(e) {
                    return e === L;
                },
                focus: function(e) {
                    return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: a(!1),
                disabled: a(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !C.pseudos.empty(e);
                },
                header: function(e) {
                    return pe.test(e.nodeName);
                },
                input: function(e) {
                    return de.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: c(function() {
                    return [ 0 ];
                }),
                last: c(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: c(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: c(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: c(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: c(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0; ) e.push(i);
                    return e;
                }),
                gt: c(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                })
            }
        }).pseudos.nth = C.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) C.pseudos[b] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }(b);
        for (b in {
            submit: !0,
            reset: !0
        }) C.pseudos[b] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }(b);
        return l.prototype = C.filters = C.pseudos, C.setFilters = new l(), T = t.tokenize = function(e, n) {
            var i, o, r, s, a, c, u, l = W[e + " "];
            if (l) return n ? 0 : l.slice(0);
            for (a = e, c = [], u = C.preFilter; a; ) {
                i && !(o = se.exec(a)) || (o && (a = a.slice(o[0].length) || a), c.push(r = [])), 
                i = !1, (o = ae.exec(a)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(re, " ")
                }), a = a.slice(i.length));
                for (s in C.filter) !(o = fe[s].exec(a)) || u[s] && !(o = u[s](o)) || (i = o.shift(), 
                r.push({
                    value: i,
                    type: s,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break;
            }
            return n ? a.length : a ? t.error(e) : W(e, c).slice(0);
        }, k = t.compile = function(e, t) {
            var n, i = [], o = [], r = X[e + " "];
            if (!r) {
                for (t || (t = T(e)), n = t.length; n--; ) (r = v(t[n]))[O] ? i.push(r) : o.push(r);
                (r = X(e, y(o, i))).selector = e;
            }
            return r;
        }, D = t.select = function(e, t, n, i) {
            var o, r, s, a, c, l = "function" == typeof e && e, d = !i && T(e = l.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((r = d[0] = d[0].slice(0)).length > 2 && "ID" === (s = r[0]).type && 9 === t.nodeType && _ && C.relative[r[1].type]) {
                    if (!(t = (C.find.ID(s.matches[0].replace(ve, ye), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(r.shift().value.length);
                }
                for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !C.relative[a = s.type]); ) if ((c = C.find[a]) && (i = c(s.matches[0].replace(ve, ye), ge.test(r[0].type) && u(t.parentNode) || t))) {
                    if (r.splice(o, 1), !(e = i.length && f(r))) return V.apply(n, i), n;
                    break;
                }
            }
            return (l || k(e, d))(i, t, !_, n, !t || ge.test(e) && u(t.parentNode) || t), n;
        }, x.sortStable = O.split("").sort(z).join("") === O, x.detectDuplicates = !!A, 
        $(), x.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(N.createElement("fieldset"));
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || r("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), x.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || r("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), o(function(e) {
            return null == e.getAttribute("disabled");
        }) || r(Z, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }), t;
    }(e);
    pe.find = ye, pe.expr = ye.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ye.uniqueSort, 
    pe.text = ye.getText, pe.isXMLDoc = ye.isXML, pe.contains = ye.contains, pe.escapeSelector = ye.escape;
    var be = function(e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
            if (o && pe(e).is(n)) break;
            i.push(e);
        }
        return i;
    }, xe = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
    }, Ce = pe.expr.match.needsContext, we = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, je = /^.[^:#\[\.,]*$/;
    pe.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? pe.find.matchesSelector(i, e) ? [ i ] : [] : pe.find.matches(e, pe.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, pe.fn.extend({
        find: function(e) {
            var t, n, i = this.length, o = this;
            if ("string" != typeof e) return this.pushStack(pe(e).filter(function() {
                for (t = 0; t < i; t++) if (pe.contains(o[t], this)) return !0;
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) pe.find(e, o[t], n);
            return i > 1 ? pe.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(o(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(o(this, e || [], !0));
        },
        is: function(e) {
            return !!o(this, "string" == typeof e && Ce.test(e) ? pe(e) : e || [], !1).length;
        }
    });
    var Te, ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (pe.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || Te, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [ null, e, null ] : ke.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), 
                we.test(i[1]) && pe.isPlainObject(t)) for (i in t) pe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (o = te.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : pe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(pe) : pe.makeArray(e, this);
    }).prototype = pe.fn, Te = pe(te);
    var De = /^(?:parents|prev(?:Until|All))/, Se = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    pe.fn.extend({
        has: function(e) {
            var t = pe(e, this), n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++) if (pe.contains(this, t[e])) return !0;
            });
        },
        closest: function(e, t) {
            var n, i = 0, o = this.length, r = [], s = "string" != typeof e && pe(e);
            if (!Ce.test(e)) for (;i < o; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                r.push(n);
                break;
            }
            return this.pushStack(r.length > 1 ? pe.uniqueSort(r) : r);
        },
        index: function(e) {
            return e ? "string" == typeof e ? se.call(pe(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), pe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return be(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return be(e, "parentNode", n);
        },
        next: function(e) {
            return r(e, "nextSibling");
        },
        prev: function(e) {
            return r(e, "previousSibling");
        },
        nextAll: function(e) {
            return be(e, "nextSibling");
        },
        prevAll: function(e) {
            return be(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return be(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return be(e, "previousSibling", n);
        },
        siblings: function(e) {
            return xe((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return xe(e.firstChild);
        },
        contents: function(e) {
            return e.contentDocument || pe.merge([], e.childNodes);
        }
    }, function(e, t) {
        pe.fn[e] = function(n, i) {
            var o = pe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = pe.filter(i, o)), 
            this.length > 1 && (Se[e] || pe.uniqueSort(o), De.test(e) && o.reverse()), this.pushStack(o);
        };
    });
    var Ee = /[^\x20\t\r\n\f]+/g;
    pe.Callbacks = function(e) {
        e = "string" == typeof e ? s(e) : pe.extend({}, e);
        var t, n, i, o, r = [], a = [], c = -1, u = function() {
            for (o = e.once, i = t = !0; a.length; c = -1) for (n = a.shift(); ++c < r.length; ) !1 === r[c].apply(n[0], n[1]) && e.stopOnFalse && (c = r.length, 
            n = !1);
            e.memory || (n = !1), t = !1, o && (r = n ? [] : "");
        }, l = {
            add: function() {
                return r && (n && !t && (c = r.length - 1, a.push(n)), function t(n) {
                    pe.each(n, function(n, i) {
                        pe.isFunction(i) ? e.unique && l.has(i) || r.push(i) : i && i.length && "string" !== pe.type(i) && t(i);
                    });
                }(arguments), n && !t && u()), this;
            },
            remove: function() {
                return pe.each(arguments, function(e, t) {
                    for (var n; (n = pe.inArray(t, r, n)) > -1; ) r.splice(n, 1), n <= c && c--;
                }), this;
            },
            has: function(e) {
                return e ? pe.inArray(e, r) > -1 : r.length > 0;
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
                return o = a = [], n || t || (r = n = ""), this;
            },
            locked: function() {
                return !!o;
            },
            fireWith: function(e, n) {
                return o || (n = [ e, (n = n || []).slice ? n.slice() : n ], a.push(n), t || u()), 
                this;
            },
            fire: function() {
                return l.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!i;
            }
        };
        return l;
    }, pe.extend({
        Deferred: function(t) {
            var n = [ [ "notify", "progress", pe.Callbacks("memory"), pe.Callbacks("memory"), 2 ], [ "resolve", "done", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 1, "rejected" ] ], i = "pending", o = {
                state: function() {
                    return i;
                },
                always: function() {
                    return r.done(arguments).fail(arguments), this;
                },
                catch: function(e) {
                    return o.then(null, e);
                },
                pipe: function() {
                    var e = arguments;
                    return pe.Deferred(function(t) {
                        pe.each(n, function(n, i) {
                            var o = pe.isFunction(e[i[4]]) && e[i[4]];
                            r[i[1]](function() {
                                var e = o && o.apply(this, arguments);
                                e && pe.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [ e ] : arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                then: function(t, i, o) {
                    function r(t, n, i, o) {
                        return function() {
                            var u = this, l = arguments, f = function() {
                                var e, f;
                                if (!(t < s)) {
                                    if ((e = i.apply(u, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                    f = e && ("object" == typeof e || "function" == typeof e) && e.then, pe.isFunction(f) ? o ? f.call(e, r(s, n, a, o), r(s, n, c, o)) : (s++, 
                                    f.call(e, r(s, n, a, o), r(s, n, c, o), r(s, n, a, n.notifyWith))) : (i !== a && (u = void 0, 
                                    l = [ e ]), (o || n.resolveWith)(u, l));
                                }
                            }, d = o ? f : function() {
                                try {
                                    f();
                                } catch (e) {
                                    pe.Deferred.exceptionHook && pe.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= s && (i !== c && (u = void 0, 
                                    l = [ e ]), n.rejectWith(u, l));
                                }
                            };
                            t ? d() : (pe.Deferred.getStackHook && (d.stackTrace = pe.Deferred.getStackHook()), 
                            e.setTimeout(d));
                        };
                    }
                    var s = 0;
                    return pe.Deferred(function(e) {
                        n[0][3].add(r(0, e, pe.isFunction(o) ? o : a, e.notifyWith)), n[1][3].add(r(0, e, pe.isFunction(t) ? t : a)), 
                        n[2][3].add(r(0, e, pe.isFunction(i) ? i : c));
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? pe.extend(e, o) : o;
                }
            }, r = {};
            return pe.each(n, function(e, t) {
                var s = t[2], a = t[5];
                o[t[1]] = s.add, a && s.add(function() {
                    i = a;
                }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this;
                }, r[t[0] + "With"] = s.fireWith;
            }), o.promise(r), t && t.call(r, r), r;
        },
        when: function(e) {
            var t = arguments.length, n = t, i = Array(n), o = ie.call(arguments), r = pe.Deferred(), s = function(e) {
                return function(n) {
                    i[e] = this, o[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || r.resolveWith(i, o);
                };
            };
            if (t <= 1 && (u(e, r.done(s(n)).resolve, r.reject), "pending" === r.state() || pe.isFunction(o[n] && o[n].then))) return r.then();
            for (;n--; ) u(o[n], s(n), r.reject);
            return r.promise();
        }
    });
    var Ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    pe.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Ae.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }, pe.readyException = function(t) {
        e.setTimeout(function() {
            throw t;
        });
    };
    var $e = pe.Deferred();
    pe.fn.ready = function(e) {
        return $e.then(e).catch(function(e) {
            pe.readyException(e);
        }), this;
    }, pe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? pe.readyWait++ : pe.ready(!0);
        },
        ready: function(e) {
            (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, !0 !== e && --pe.readyWait > 0 || $e.resolveWith(te, [ pe ]));
        }
    }), pe.ready.then = $e.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(pe.ready) : (te.addEventListener("DOMContentLoaded", l), 
    e.addEventListener("load", l));
    var Ne = function(e, t, n, i, o, r, s) {
        var a = 0, c = e.length, u = null == n;
        if ("object" === pe.type(n)) {
            o = !0;
            for (a in n) Ne(e, t, a, n[a], !0, r, s);
        } else if (void 0 !== i && (o = !0, pe.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), 
        t = null) : (u = t, t = function(e, t, n) {
            return u.call(pe(e), n);
        })), t)) for (;a < c; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : u ? t.call(e) : c ? t(e[0], n) : r;
    }, Le = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    f.uid = 1, f.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Le(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[pe.camelCase(t)] = n; else for (i in t) o[pe.camelCase(i)] = t[i];
            return o;
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][pe.camelCase(t)];
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
            void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = pe.isArray(t) ? t.map(pe.camelCase) : (t = pe.camelCase(t)) in i ? [ t ] : t.match(Ee) || []).length;
                    for (;n--; ) delete i[t[n]];
                }
                (void 0 === t || pe.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !pe.isEmptyObject(t);
        }
    };
    var _e = new f(), Pe = new f(), qe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, He = /[A-Z]/g;
    pe.extend({
        hasData: function(e) {
            return Pe.hasData(e) || _e.hasData(e);
        },
        data: function(e, t, n) {
            return Pe.access(e, t, n);
        },
        removeData: function(e, t) {
            Pe.remove(e, t);
        },
        _data: function(e, t, n) {
            return _e.access(e, t, n);
        },
        _removeData: function(e, t) {
            _e.remove(e, t);
        }
    }), pe.fn.extend({
        data: function(e, t) {
            var n, i, o, r = this[0], s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = Pe.get(r), 1 === r.nodeType && !_e.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--; ) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = pe.camelCase(i.slice(5)), 
                    p(r, i, o[i]));
                    _e.set(r, "hasDataAttrs", !0);
                }
                return o;
            }
            return "object" == typeof e ? this.each(function() {
                Pe.set(this, e);
            }) : Ne(this, function(t) {
                var n;
                if (r && void 0 === t) {
                    if (void 0 !== (n = Pe.get(r, e))) return n;
                    if (void 0 !== (n = p(r, e))) return n;
                } else this.each(function() {
                    Pe.set(this, e, t);
                });
            }, null, t, arguments.length > 1, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                Pe.remove(this, e);
            });
        }
    }), pe.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = _e.get(e, t), n && (!i || pe.isArray(n) ? i = _e.access(e, t, pe.makeArray(n)) : i.push(n)), 
            i || [];
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = pe.queue(e, t), i = n.length, o = n.shift(), r = pe._queueHooks(e, t), s = function() {
                pe.dequeue(e, t);
            };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), 
            delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return _e.get(e, n) || _e.access(e, n, {
                empty: pe.Callbacks("once memory").add(function() {
                    _e.remove(e, [ t + "queue", n ]);
                })
            });
        }
    }), pe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? pe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = pe.queue(this, e, t);
                pe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                pe.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var n, i = 1, o = pe.Deferred(), r = this, s = this.length, a = function() {
                --i || o.resolveWith(r, [ r ]);
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--; ) (n = _e.get(r[s], e + "queueHooks")) && n.empty && (i++, 
            n.empty.add(a));
            return a(), o.promise(t);
        }
    });
    var Be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Oe = new RegExp("^(?:([+-])=|)(" + Be + ")([a-z%]*)$", "i"), Ie = [ "Top", "Right", "Bottom", "Left" ], Fe = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && pe.contains(e.ownerDocument, e) && "none" === pe.css(e, "display");
    }, Re = function(e, t, n, i) {
        var o, r, s = {};
        for (r in t) s[r] = e.style[r], e.style[r] = t[r];
        o = n.apply(e, i || []);
        for (r in t) e.style[r] = s[r];
        return o;
    }, Me = {};
    pe.fn.extend({
        show: function() {
            return g(this, !0);
        },
        hide: function() {
            return g(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Fe(this) ? pe(this).show() : pe(this).hide();
            });
        }
    });
    var We = /^(?:checkbox|radio)$/i, Xe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, ze = /^$|\/(?:java|ecma)script/i, Ye = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, 
    Ye.th = Ye.td;
    var Ke = /<|&#?\w+;/;
    !function() {
        var e = te.createDocumentFragment().appendChild(te.createElement("div")), t = te.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), 
        e.appendChild(t), de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        e.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
    }();
    var Ue = te.documentElement, Ge = /^key/, Ve = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Qe = /^([^.]*)(?:\.(.+)|)/;
    pe.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, s, a, c, u, l, f, d, p, h, m, g = _e.get(e);
            if (g) for (n.handler && (n = (r = n).handler, o = r.selector), o && pe.find.matchesSelector(Ue, o), 
            n.guid || (n.guid = pe.guid++), (c = g.events) || (c = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
                return void 0 !== pe && pe.event.triggered !== t.type ? pe.event.dispatch.apply(e, arguments) : void 0;
            }), u = (t = (t || "").match(Ee) || [ "" ]).length; u--; ) p = m = (a = Qe.exec(t[u]) || [])[1], 
            h = (a[2] || "").split(".").sort(), p && (f = pe.event.special[p] || {}, p = (o ? f.delegateType : f.bindType) || p, 
            f = pe.event.special[p] || {}, l = pe.extend({
                type: p,
                origType: m,
                data: i,
                handler: n,
                guid: n.guid,
                selector: o,
                needsContext: o && pe.expr.match.needsContext.test(o),
                namespace: h.join(".")
            }, r), (d = c[p]) || ((d = c[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, h, s) || e.addEventListener && e.addEventListener(p, s)), 
            f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, l) : d.push(l), 
            pe.event.global[p] = !0);
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, c, u, l, f, d, p, h, m, g = _e.hasData(e) && _e.get(e);
            if (g && (c = g.events)) {
                for (u = (t = (t || "").match(Ee) || [ "" ]).length; u--; ) if (a = Qe.exec(t[u]) || [], 
                p = m = a[1], h = (a[2] || "").split(".").sort(), p) {
                    for (f = pe.event.special[p] || {}, d = c[p = (i ? f.delegateType : f.bindType) || p] || [], 
                    a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = d.length; r--; ) l = d[r], 
                    !o && m !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || i && i !== l.selector && ("**" !== i || !l.selector) || (d.splice(r, 1), 
                    l.selector && d.delegateCount--, f.remove && f.remove.call(e, l));
                    s && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || pe.removeEvent(e, p, g.handle), 
                    delete c[p]);
                } else for (p in c) pe.event.remove(e, p + t[u], n, i, !0);
                pe.isEmptyObject(c) && _e.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t, n, i, o, r, s, a = pe.event.fix(e), c = new Array(arguments.length), u = (_e.get(this, "events") || {})[a.type] || [], l = pe.event.special[a.type] || {};
            for (c[0] = a, t = 1; t < arguments.length; t++) c[t] = arguments[t];
            if (a.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, a)) {
                for (s = pe.event.handlers.call(this, a, u), t = 0; (o = s[t++]) && !a.isPropagationStopped(); ) for (a.currentTarget = o.elem, 
                n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped(); ) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, 
                a.data = r.data, void 0 !== (i = ((pe.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, c)) && !1 === (a.result = i) && (a.preventDefault(), 
                a.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s, a = [], c = t.delegateCount, u = e.target;
            if (c && u.nodeType && !("click" === e.type && e.button >= 1)) for (;u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                for (r = [], s = {}, n = 0; n < c; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? pe(o, this).index(u) > -1 : pe.find(o, this, null, [ u ]).length), 
                s[o] && r.push(i);
                r.length && a.push({
                    elem: u,
                    handlers: r
                });
            }
            return u = this, c < t.length && a.push({
                elem: u,
                handlers: t.slice(c)
            }), a;
        },
        addProp: function(e, t) {
            Object.defineProperty(pe.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: pe.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e];
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    });
                }
            });
        },
        fix: function(e) {
            return e[pe.expando] ? e : new pe.Event(e);
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
                    if ("checkbox" === this.type && this.click && pe.nodeName(this, "input")) return this.click(), 
                    !1;
                },
                _default: function(e) {
                    return pe.nodeName(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }, pe.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, pe.Event = function(e, t) {
        if (!(this instanceof pe.Event)) return new pe.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? x : C, 
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
        this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
        t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), this[pe.expando] = !0;
    }, pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: C,
        isPropagationStopped: C,
        isImmediatePropagationStopped: C,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = x, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = x, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = x, e && !this.isSimulated && e.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, pe.each({
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
        which: function(e) {
            var t = e.button;
            return null == e.which && Ge.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ve.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        }
    }, pe.event.addProp), pe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        pe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this, o = e.relatedTarget, r = e.handleObj;
                return o && (o === i || pe.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), 
                e.type = t), n;
            }
        };
    }), pe.fn.extend({
        on: function(e, t, n, i) {
            return j(this, e, t, n, i);
        },
        one: function(e, t, n, i) {
            return j(this, e, t, n, i, 1);
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, pe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
            this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this;
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = C), 
            this.each(function() {
                pe.event.remove(this, e, n, t);
            });
        }
    });
    var Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Ze = /<script|<style|<link/i, et = /checked\s*(?:[^=]|=\s*.checked.)/i, tt = /^true\/(.*)/, nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    pe.extend({
        htmlPrefilter: function(e) {
            return e.replace(Je, "<$1></$2>");
        },
        clone: function(e, t, n) {
            var i, o, r, s, a = e.cloneNode(!0), c = pe.contains(e.ownerDocument, e);
            if (!(de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e))) for (s = v(a), 
            i = 0, o = (r = v(e)).length; i < o; i++) E(r[i], s[i]);
            if (t) if (n) for (r = r || v(e), s = s || v(a), i = 0, o = r.length; i < o; i++) S(r[i], s[i]); else S(e, a);
            return (s = v(a, "script")).length > 0 && y(s, !c && v(e, "script")), a;
        },
        cleanData: function(e) {
            for (var t, n, i, o = pe.event.special, r = 0; void 0 !== (n = e[r]); r++) if (Le(n)) {
                if (t = n[_e.expando]) {
                    if (t.events) for (i in t.events) o[i] ? pe.event.remove(n, i) : pe.removeEvent(n, i, t.handle);
                    n[_e.expando] = void 0;
                }
                n[Pe.expando] && (n[Pe.expando] = void 0);
            }
        }
    }), pe.fn.extend({
        detach: function(e) {
            return $(this, e, !0);
        },
        remove: function(e) {
            return $(this, e);
        },
        text: function(e) {
            return Ne(this, function(e) {
                return void 0 === e ? pe.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        },
        append: function() {
            return A(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || T(this, e).appendChild(e);
            });
        },
        prepend: function() {
            return A(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = T(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return A(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return A(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (pe.cleanData(v(e, !1)), 
            e.textContent = "");
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return pe.clone(this, e, t);
            });
        },
        html: function(e) {
            return Ne(this, function(e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ze.test(e) && !Ye[(Xe.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = pe.htmlPrefilter(e);
                    try {
                        for (;n < i; n++) 1 === (t = this[n] || {}).nodeType && (pe.cleanData(v(t, !1)), 
                        t.innerHTML = e);
                        t = 0;
                    } catch (e) {}
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var e = [];
            return A(this, arguments, function(t) {
                var n = this.parentNode;
                pe.inArray(this, e) < 0 && (pe.cleanData(v(this)), n && n.replaceChild(t, this));
            }, e);
        }
    }), pe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        pe.fn[e] = function(e) {
            for (var n, i = [], o = pe(e), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), 
            pe(o[s])[t](n), re.apply(i, n.get());
            return this.pushStack(i);
        };
    });
    var it = /^margin/, ot = new RegExp("^(" + Be + ")(?!px)[a-z%]+$", "i"), rt = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t);
    };
    !function() {
        function t() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
                a.innerHTML = "", Ue.appendChild(s);
                var t = e.getComputedStyle(a);
                n = "1%" !== t.top, r = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", 
                o = "4px" === t.marginRight, Ue.removeChild(s), a = null;
            }
        }
        var n, i, o, r, s = te.createElement("div"), a = te.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", 
        de.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
        s.appendChild(a), pe.extend(de, {
            pixelPosition: function() {
                return t(), n;
            },
            boxSizingReliable: function() {
                return t(), i;
            },
            pixelMarginRight: function() {
                return t(), o;
            },
            reliableMarginLeft: function() {
                return t(), r;
            }
        }));
    }();
    var st = /^(none|table(?!-c[ea]).+)/, at = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, ct = {
        letterSpacing: "0",
        fontWeight: "400"
    }, ut = [ "Webkit", "Moz", "ms" ], lt = te.createElement("div").style;
    pe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = N(e, "opacity");
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
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = pe.camelCase(t), c = e.style;
                if (t = pe.cssProps[a] || (pe.cssProps[a] = _(a) || a), s = pe.cssHooks[t] || pe.cssHooks[a], 
                void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                "string" === (r = typeof n) && (o = Oe.exec(n)) && o[1] && (n = h(e, t, o), r = "number"), 
                null != n && n === n && ("number" === r && (n += o && o[3] || (pe.cssNumber[a] ? "" : "px")), 
                de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), 
                s && "set" in s && void 0 === (n = s.set(e, n, i)) || (c[t] = n));
            }
        },
        css: function(e, t, n, i) {
            var o, r, s, a = pe.camelCase(t);
            return t = pe.cssProps[a] || (pe.cssProps[a] = _(a) || a), (s = pe.cssHooks[t] || pe.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), 
            void 0 === o && (o = N(e, t, i)), "normal" === o && t in ct && (o = ct[t]), "" === n || n ? (r = parseFloat(o), 
            !0 === n || isFinite(r) ? r || 0 : o) : o;
        }
    }), pe.each([ "height", "width" ], function(e, t) {
        pe.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !st.test(pe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? H(e, t, i) : Re(e, at, function() {
                    return H(e, t, i);
                });
            },
            set: function(e, n, i) {
                var o, r = i && rt(e), s = i && q(e, t, i, "border-box" === pe.css(e, "boxSizing", !1, r), r);
                return s && (o = Oe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = pe.css(e, t)), 
                P(e, n, s);
            }
        };
    }), pe.cssHooks.marginLeft = L(de.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(N(e, "marginLeft")) || e.getBoundingClientRect().left - Re(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left;
        })) + "px";
    }), pe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        pe.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [ n ]; i < 4; i++) o[e + Ie[i] + t] = r[i] || r[i - 2] || r[0];
                return o;
            }
        }, it.test(e) || (pe.cssHooks[e + t].set = P);
    }), pe.fn.extend({
        css: function(e, t) {
            return Ne(this, function(e, t, n) {
                var i, o, r = {}, s = 0;
                if (pe.isArray(t)) {
                    for (i = rt(e), o = t.length; s < o; s++) r[t[s]] = pe.css(e, t[s], !1, i);
                    return r;
                }
                return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t);
            }, e, t, arguments.length > 1);
        }
    }), pe.Tween = B, B.prototype = {
        constructor: B,
        init: function(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || pe.easing._default, this.options = t, 
            this.start = this.now = this.cur(), this.end = i, this.unit = r || (pe.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = B.propHooks[this.prop];
            return e && e.get ? e.get(this) : B.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = B.propHooks[this.prop];
            return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : B.propHooks._default.set(this), this;
        }
    }, B.prototype.init.prototype = B.prototype, B.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = pe.css(e.elem, e.prop, ""), 
                t && "auto" !== t ? t : 0);
            },
            set: function(e) {
                pe.fx.step[e.prop] ? pe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[pe.cssProps[e.prop]] && !pe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : pe.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, pe.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
    }, pe.fx = B.prototype.init, pe.fx.step = {};
    var ft, dt, pt = /^(?:toggle|show|hide)$/, ht = /queueHooks$/;
    pe.Animation = pe.extend(X, {
        tweeners: {
            "*": [ function(e, t) {
                var n = this.createTween(e, t);
                return h(n.elem, e, Oe.exec(t), n), n;
            } ]
        },
        tweener: function(e, t) {
            pe.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.match(Ee);
            for (var n, i = 0, o = e.length; i < o; i++) n = e[i], X.tweeners[n] = X.tweeners[n] || [], 
            X.tweeners[n].unshift(t);
        },
        prefilters: [ M ],
        prefilter: function(e, t) {
            t ? X.prefilters.unshift(e) : X.prefilters.push(e);
        }
    }), pe.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? pe.extend({}, e) : {
            complete: n || !n && t || pe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !pe.isFunction(t) && t
        };
        return pe.fx.off || te.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in pe.fx.speeds ? i.duration = pe.fx.speeds[i.duration] : i.duration = pe.fx.speeds._default), 
        null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            pe.isFunction(i.old) && i.old.call(this), i.queue && pe.dequeue(this, i.queue);
        }, i;
    }, pe.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(Fe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i);
        },
        animate: function(e, t, n, i) {
            var o = pe.isEmptyObject(e), r = pe.speed(t, n, i), s = function() {
                var t = X(this, pe.extend({}, e), r);
                (o || _e.get(this, "finish")) && t.stop(!0);
            };
            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(n);
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), 
            this.each(function() {
                var t = !0, o = null != e && e + "queueHooks", r = pe.timers, s = _e.get(this);
                if (o) s[o] && s[o].stop && i(s[o]); else for (o in s) s[o] && s[o].stop && ht.test(o) && i(s[o]);
                for (o = r.length; o--; ) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), 
                t = !1, r.splice(o, 1));
                !t && n || pe.dequeue(this, e);
            });
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = _e.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], r = pe.timers, s = i ? i.length : 0;
                for (n.finish = !0, pe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), 
                t = r.length; t--; ) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), 
                r.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish;
            });
        }
    }), pe.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = pe.fn[t];
        pe.fn[t] = function(e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, i, o);
        };
    }), pe.each({
        slideDown: F("show"),
        slideUp: F("hide"),
        slideToggle: F("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        pe.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i);
        };
    }), pe.timers = [], pe.fx.tick = function() {
        var e, t = 0, n = pe.timers;
        for (ft = pe.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || pe.fx.stop(), ft = void 0;
    }, pe.fx.timer = function(e) {
        pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop();
    }, pe.fx.interval = 13, pe.fx.start = function() {
        dt || (dt = e.requestAnimationFrame ? e.requestAnimationFrame(O) : e.setInterval(pe.fx.tick, pe.fx.interval));
    }, pe.fx.stop = function() {
        e.cancelAnimationFrame ? e.cancelAnimationFrame(dt) : e.clearInterval(dt), dt = null;
    }, pe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, pe.fn.delay = function(t, n) {
        return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(o);
            };
        });
    }, function() {
        var e = te.createElement("input"), t = te.createElement("select").appendChild(te.createElement("option"));
        e.type = "checkbox", de.checkOn = "" !== e.value, de.optSelected = t.selected, (e = te.createElement("input")).value = "t", 
        e.type = "radio", de.radioValue = "t" === e.value;
    }();
    var mt, gt = pe.expr.attrHandle;
    pe.fn.extend({
        attr: function(e, t) {
            return Ne(this, pe.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                pe.removeAttr(this, e);
            });
        }
    }), pe.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? pe.prop(e, t, n) : (1 === r && pe.isXMLDoc(e) || (o = pe.attrHooks[t.toLowerCase()] || (pe.expr.match.bool.test(t) ? mt : void 0)), 
            void 0 !== n ? null === n ? void pe.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), 
            n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = pe.find.attr(e, t), 
            null == i ? void 0 : i));
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!de.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, o = t && t.match(Ee);
            if (o && 1 === e.nodeType) for (;n = o[i++]; ) e.removeAttribute(n);
        }
    }), mt = {
        set: function(e, t, n) {
            return !1 === t ? pe.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = gt[t] || pe.find.attr;
        gt[t] = function(e, t, i) {
            var o, r, s = t.toLowerCase();
            return i || (r = gt[s], gt[s] = o, o = null != n(e, t, i) ? s : null, gt[s] = r), 
            o;
        };
    });
    var vt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i;
    pe.fn.extend({
        prop: function(e, t) {
            return Ne(this, pe.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[pe.propFix[e] || e];
            });
        }
    }), pe.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, 
            o = pe.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = pe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), de.optSelected || (pe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    }), pe.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        pe.propFix[this.toLowerCase()] = this;
    }), pe.fn.extend({
        addClass: function(e) {
            var t, n, i, o, r, s, a, c = 0;
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).addClass(e.call(this, t, Y(this)));
            });
            if ("string" == typeof e && e) for (t = e.match(Ee) || []; n = this[c++]; ) if (o = Y(n), 
            i = 1 === n.nodeType && " " + z(o) + " ") {
                for (s = 0; r = t[s++]; ) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                o !== (a = z(i)) && n.setAttribute("class", a);
            }
            return this;
        },
        removeClass: function(e) {
            var t, n, i, o, r, s, a, c = 0;
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).removeClass(e.call(this, t, Y(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(Ee) || []; n = this[c++]; ) if (o = Y(n), 
            i = 1 === n.nodeType && " " + z(o) + " ") {
                for (s = 0; r = t[s++]; ) for (;i.indexOf(" " + r + " ") > -1; ) i = i.replace(" " + r + " ", " ");
                o !== (a = z(i)) && n.setAttribute("class", a);
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) {
                pe(this).toggleClass(e.call(this, n, Y(this), t), t);
            }) : this.each(function() {
                var t, i, o, r;
                if ("string" === n) for (i = 0, o = pe(this), r = e.match(Ee) || []; t = r[i++]; ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || ((t = Y(this)) && _e.set(this, "__className__", t), 
                this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : _e.get(this, "__className__") || ""));
            });
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; ) if (1 === n.nodeType && (" " + z(Y(n)) + " ").indexOf(t) > -1) return !0;
            return !1;
        }
    });
    var bt = /\r/g;
    pe.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            {
                if (arguments.length) return i = pe.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (null == (o = i ? e.call(this, n, pe(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : pe.isArray(o) && (o = pe.map(o, function(e) {
                        return null == e ? "" : e + "";
                    })), (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o));
                });
                if (o) return (t = pe.valHooks[o.type] || pe.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, 
                "string" == typeof n ? n.replace(bt, "") : null == n ? "" : n);
            }
        }
    }), pe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = pe.find.attr(e, "value");
                    return null != t ? t : z(pe.text(e));
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, o = e.options, r = e.selectedIndex, s = "select-one" === e.type, a = s ? null : [], c = s ? r + 1 : o.length;
                    for (i = r < 0 ? c : s ? r : 0; i < c; i++) if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                        if (t = pe(n).val(), s) return t;
                        a.push(t);
                    }
                    return a;
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = pe.makeArray(t), s = o.length; s--; ) ((i = o[s]).selected = pe.inArray(pe.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), r;
                }
            }
        }
    }), pe.each([ "radio", "checkbox" ], function() {
        pe.valHooks[this] = {
            set: function(e, t) {
                if (pe.isArray(t)) return e.checked = pe.inArray(pe(e).val(), t) > -1;
            }
        }, de.checkOn || (pe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    });
    var xt = /^(?:focusinfocus|focusoutblur)$/;
    pe.extend(pe.event, {
        trigger: function(t, n, i, o) {
            var r, s, a, c, u, l, f, d = [ i || te ], p = ue.call(t, "type") ? t.type : t, h = ue.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || te, 3 !== i.nodeType && 8 !== i.nodeType && !xt.test(p + pe.event.triggered) && (p.indexOf(".") > -1 && (p = (h = p.split(".")).shift(), 
            h.sort()), u = p.indexOf(":") < 0 && "on" + p, t = t[pe.expando] ? t : new pe.Event(p, "object" == typeof t && t), 
            t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            t.result = void 0, t.target || (t.target = i), n = null == n ? [ t ] : pe.makeArray(n, [ t ]), 
            f = pe.event.special[p] || {}, o || !f.trigger || !1 !== f.trigger.apply(i, n))) {
                if (!o && !f.noBubble && !pe.isWindow(i)) {
                    for (c = f.delegateType || p, xt.test(c + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), 
                    a = s;
                    a === (i.ownerDocument || te) && d.push(a.defaultView || a.parentWindow || e);
                }
                for (r = 0; (s = d[r++]) && !t.isPropagationStopped(); ) t.type = r > 1 ? c : f.bindType || p, 
                (l = (_e.get(s, "events") || {})[t.type] && _e.get(s, "handle")) && l.apply(s, n), 
                (l = u && s[u]) && l.apply && Le(s) && (t.result = l.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = p, o || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), n) || !Le(i) || u && pe.isFunction(i[p]) && !pe.isWindow(i) && ((a = i[u]) && (i[u] = null), 
                pe.event.triggered = p, i[p](), pe.event.triggered = void 0, a && (i[u] = a)), t.result;
            }
        },
        simulate: function(e, t, n) {
            var i = pe.extend(new pe.Event(), n, {
                type: e,
                isSimulated: !0
            });
            pe.event.trigger(i, null, t);
        }
    }), pe.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                pe.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return pe.event.trigger(e, t, n, !0);
        }
    }), pe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        pe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), pe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), de.focusin = "onfocusin" in e, de.focusin || pe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            pe.event.simulate(t, e.target, pe.event.fix(e));
        };
        pe.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this, o = _e.access(i, t);
                o || i.addEventListener(e, n, !0), _e.access(i, t, (o || 0) + 1);
            },
            teardown: function() {
                var i = this.ownerDocument || this, o = _e.access(i, t) - 1;
                o ? _e.access(i, t, o) : (i.removeEventListener(e, n, !0), _e.remove(i, t));
            }
        };
    });
    var Ct = e.location, wt = pe.now(), jt = /\?/;
    pe.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
            n = void 0;
        }
        return n && !n.getElementsByTagName("parsererror").length || pe.error("Invalid XML: " + t), 
        n;
    };
    var Tt = /\[\]$/, kt = /\r?\n/g, Dt = /^(?:submit|button|image|reset|file)$/i, St = /^(?:input|select|textarea|keygen)/i;
    pe.param = function(e, t) {
        var n, i = [], o = function(e, t) {
            var n = pe.isFunction(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };
        if (pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function() {
            o(this.name, this.value);
        }); else for (n in e) K(n, e[n], t, o);
        return i.join("&");
    }, pe.fn.extend({
        serialize: function() {
            return pe.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = pe.prop(this, "elements");
                return e ? pe.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !pe(this).is(":disabled") && St.test(this.nodeName) && !Dt.test(e) && (this.checked || !We.test(e));
            }).map(function(e, t) {
                var n = pe(this).val();
                return null == n ? null : pe.isArray(n) ? pe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                };
            }).get();
        }
    });
    var Et = /%20/g, At = /#.*$/, $t = /([?&])_=[^&]*/, Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Lt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, _t = /^(?:GET|HEAD)$/, Pt = /^\/\//, qt = {}, Ht = {}, Bt = "*/".concat("*"), Ot = te.createElement("a");
    Ot.href = Ct.href, pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Lt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bt,
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
                "text xml": pe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? V(V(e, pe.ajaxSettings), t) : V(pe.ajaxSettings, e);
        },
        ajaxPrefilter: U(qt),
        ajaxTransport: U(Ht),
        ajax: function(t, n) {
            function i(t, n, i, a) {
                var u, d, p, x, C, w = n;
                l || (l = !0, c && e.clearTimeout(c), o = void 0, s = a || "", j.readyState = t > 0 ? 4 : 0, 
                u = t >= 200 && t < 300 || 304 === t, i && (x = Q(h, j, i)), x = J(h, x, j, u), 
                u ? (h.ifModified && ((C = j.getResponseHeader("Last-Modified")) && (pe.lastModified[r] = C), 
                (C = j.getResponseHeader("etag")) && (pe.etag[r] = C)), 204 === t || "HEAD" === h.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = x.state, 
                d = x.data, u = !(p = x.error))) : (p = w, !t && w || (w = "error", t < 0 && (t = 0))), 
                j.status = t, j.statusText = (n || w) + "", u ? v.resolveWith(m, [ d, w, j ]) : v.rejectWith(m, [ j, w, p ]), 
                j.statusCode(b), b = void 0, f && g.trigger(u ? "ajaxSuccess" : "ajaxError", [ j, h, u ? d : p ]), 
                y.fireWith(m, [ j, w ]), f && (g.trigger("ajaxComplete", [ j, h ]), --pe.active || pe.event.trigger("ajaxStop")));
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o, r, s, a, c, u, l, f, d, p, h = pe.ajaxSetup({}, n), m = h.context || h, g = h.context && (m.nodeType || m.jquery) ? pe(m) : pe.event, v = pe.Deferred(), y = pe.Callbacks("once memory"), b = h.statusCode || {}, x = {}, C = {}, w = "canceled", j = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (l) {
                        if (!a) for (a = {}; t = Nt.exec(s); ) a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return l ? s : null;
                },
                setRequestHeader: function(e, t) {
                    return null == l && (e = C[e.toLowerCase()] = C[e.toLowerCase()] || e, x[e] = t), 
                    this;
                },
                overrideMimeType: function(e) {
                    return null == l && (h.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (l) j.always(e[j.status]); else for (t in e) b[t] = [ b[t], e[t] ];
                    return this;
                },
                abort: function(e) {
                    var t = e || w;
                    return o && o.abort(t), i(0, t), this;
                }
            };
            if (v.promise(j), h.url = ((t || h.url || Ct.href) + "").replace(Pt, Ct.protocol + "//"), 
            h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ee) || [ "" ], 
            null == h.crossDomain) {
                u = te.createElement("a");
                try {
                    u.href = h.url, u.href = u.href, h.crossDomain = Ot.protocol + "//" + Ot.host != u.protocol + "//" + u.host;
                } catch (e) {
                    h.crossDomain = !0;
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = pe.param(h.data, h.traditional)), 
            G(qt, h, n, j), l) return j;
            (f = pe.event && h.global) && 0 == pe.active++ && pe.event.trigger("ajaxStart"), 
            h.type = h.type.toUpperCase(), h.hasContent = !_t.test(h.type), r = h.url.replace(At, ""), 
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Et, "+")) : (p = h.url.slice(r.length), 
            h.data && (r += (jt.test(r) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (r = r.replace($t, "$1"), 
            p = (jt.test(r) ? "&" : "?") + "_=" + wt++ + p), h.url = r + p), h.ifModified && (pe.lastModified[r] && j.setRequestHeader("If-Modified-Since", pe.lastModified[r]), 
            pe.etag[r] && j.setRequestHeader("If-None-Match", pe.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && j.setRequestHeader("Content-Type", h.contentType), 
            j.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : h.accepts["*"]);
            for (d in h.headers) j.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (!1 === h.beforeSend.call(m, j, h) || l)) return j.abort();
            if (w = "abort", y.add(h.complete), j.done(h.success), j.fail(h.error), o = G(Ht, h, n, j)) {
                if (j.readyState = 1, f && g.trigger("ajaxSend", [ j, h ]), l) return j;
                h.async && h.timeout > 0 && (c = e.setTimeout(function() {
                    j.abort("timeout");
                }, h.timeout));
                try {
                    l = !1, o.send(x, i);
                } catch (e) {
                    if (l) throw e;
                    i(-1, e);
                }
            } else i(-1, "No Transport");
            return j;
        },
        getJSON: function(e, t, n) {
            return pe.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return pe.get(e, void 0, t, "script");
        }
    }), pe.each([ "get", "post" ], function(e, t) {
        pe[t] = function(e, n, i, o) {
            return pe.isFunction(n) && (o = o || i, i = n, n = void 0), pe.ajax(pe.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, pe.isPlainObject(e) && e));
        };
    }), pe._evalUrl = function(e) {
        return pe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        });
    }, pe.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (pe.isFunction(e) && (e = e.call(this[0])), t = pe(e, this[0].ownerDocument).eq(0).clone(!0), 
            this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e;
            }).append(this)), this;
        },
        wrapInner: function(e) {
            return pe.isFunction(e) ? this.each(function(t) {
                pe(this).wrapInner(e.call(this, t));
            }) : this.each(function() {
                var t = pe(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = pe.isFunction(e);
            return this.each(function(n) {
                pe(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                pe(this).replaceWith(this.childNodes);
            }), this;
        }
    }), pe.expr.pseudos.hidden = function(e) {
        return !pe.expr.pseudos.visible(e);
    }, pe.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, pe.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest();
        } catch (e) {}
    };
    var It = {
        0: 200,
        1223: 204
    }, Ft = pe.ajaxSettings.xhr();
    de.cors = !!Ft && "withCredentials" in Ft, de.ajax = Ft = !!Ft, pe.ajaxTransport(function(t) {
        var n, i;
        if (de.cors || Ft && !t.crossDomain) return {
            send: function(o, r) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (s in o) a.setRequestHeader(s, o[s]);
                n = function(e) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(It[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()));
                    };
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && i();
                    });
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null);
                } catch (e) {
                    if (n) throw e;
                }
            },
            abort: function() {
                n && n();
            }
        };
    }), pe.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1);
    }), pe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return pe.globalEval(e), e;
            }
        }
    }), pe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), pe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, o) {
                    t = pe("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type);
                    }), te.head.appendChild(t[0]);
                },
                abort: function() {
                    n && n();
                }
            };
        }
    });
    var Rt = [], Mt = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Rt.pop() || pe.expando + "_" + wt++;
            return this[e] = !0, e;
        }
    }), pe.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, r, s, a = !1 !== t.jsonp && (Mt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Mt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, 
        a ? t[a] = t[a].replace(Mt, "$1" + o) : !1 !== t.jsonp && (t.url += (jt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), 
        t.converters["script json"] = function() {
            return s || pe.error(o + " was not called"), s[0];
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
            s = arguments;
        }, i.always(function() {
            void 0 === r ? pe(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, 
            Rt.push(o)), s && pe.isFunction(r) && r(s[0]), s = r = void 0;
        }), "script";
    }), de.createHTMLDocument = function() {
        var e = te.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
    }(), pe.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, o, r;
        return t || (de.createHTMLDocument ? ((i = (t = te.implementation.createHTMLDocument("")).createElement("base")).href = te.location.href, 
        t.head.appendChild(i)) : t = te), o = we.exec(e), r = !n && [], o ? [ t.createElement(o[1]) ] : (o = b([ e ], t, r), 
        r && r.length && pe(r).remove(), pe.merge([], o.childNodes));
    }, pe.fn.load = function(e, t, n) {
        var i, o, r, s = this, a = e.indexOf(" ");
        return a > -1 && (i = z(e.slice(a)), e = e.slice(0, a)), pe.isFunction(t) ? (n = t, 
        t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && pe.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, s.html(i ? pe("<div>").append(pe.parseHTML(e)).find(i) : e);
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, r || [ e.responseText, t, e ]);
            });
        }), this;
    }, pe.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        pe.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), pe.expr.pseudos.animated = function(e) {
        return pe.grep(pe.timers, function(t) {
            return e === t.elem;
        }).length;
    }, pe.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a, c, u = pe.css(e, "position"), l = pe(e), f = {};
            "static" === u && (e.style.position = "relative"), a = l.offset(), r = pe.css(e, "top"), 
            c = pe.css(e, "left"), ("absolute" === u || "fixed" === u) && (r + c).indexOf("auto") > -1 ? (s = (i = l.position()).top, 
            o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(c) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, a))), 
            null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + o), 
            "using" in t ? t.using.call(e, f) : l.css(f);
        }
    }, pe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                pe.offset.setOffset(this, e, t);
            });
            var t, n, i, o, r = this[0];
            if (r) return r.getClientRects().length ? (i = r.getBoundingClientRect(), i.width || i.height ? (o = r.ownerDocument, 
            n = Z(o), t = o.documentElement, {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : {
                top: 0,
                left: 0
            };
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], i = {
                    top: 0,
                    left: 0
                };
                return "fixed" === pe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), pe.nodeName(e[0], "html") || (i = e.offset()), i = {
                    top: i.top + pe.css(e[0], "borderTopWidth", !0),
                    left: i.left + pe.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - i.top - pe.css(n, "marginTop", !0),
                    left: t.left - i.left - pe.css(n, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === pe.css(e, "position"); ) e = e.offsetParent;
                return e || Ue;
            });
        }
    }), pe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        pe.fn[e] = function(i) {
            return Ne(this, function(e, i, o) {
                var r = Z(e);
                if (void 0 === o) return r ? r[t] : e[i];
                r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o;
            }, e, i, arguments.length);
        };
    }), pe.each([ "top", "left" ], function(e, t) {
        pe.cssHooks[t] = L(de.pixelPosition, function(e, n) {
            if (n) return n = N(e, t), ot.test(n) ? pe(e).position()[t] + "px" : n;
        });
    }), pe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        pe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            pe.fn[i] = function(o, r) {
                var s = arguments.length && (n || "boolean" != typeof o), a = n || (!0 === o || !0 === r ? "margin" : "border");
                return Ne(this, function(t, n, o) {
                    var r;
                    return pe.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, 
                    Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? pe.css(t, n, a) : pe.style(t, n, o, a);
                }, t, s ? o : void 0, s);
            };
        });
    }), pe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    }), pe.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return pe;
    });
    var Wt = e.jQuery, Xt = e.$;
    return pe.noConflict = function(t) {
        return e.$ === pe && (e.$ = Xt), t && e.jQuery === pe && (e.jQuery = Wt), pe;
    }, t || (e.jQuery = e.$ = pe), pe;
}), "undefined" == typeof jQuery) throw new Error("jquery-confirm requires jQuery");

var jconfirm, Jconfirm;

!function(e, t) {
    e.fn.confirm = function(t, n) {
        return void 0 === t && (t = {}), "string" == typeof t && (t = {
            content: t,
            title: n || !1
        }), e(this).each(function() {
            var n = e(this);
            n.attr("jc-attached") ? console.warn("jConfirm has already been attached to this element ", n[0]) : (n.on("click", function(i) {
                i.preventDefault();
                var o = e.extend({}, t);
                if (n.attr("data-title") && (o.title = n.attr("data-title")), n.attr("data-content") && (o.content = n.attr("data-content")), 
                void 0 === o.buttons && (o.buttons = {}), o.$target = n, n.attr("href") && 0 == Object.keys(o.buttons).length) {
                    var r = e.extend(!0, {}, jconfirm.pluginDefaults.defaultButtons, (jconfirm.defaults || {}).defaultButtons || {}), s = Object.keys(r)[0];
                    o.buttons = r, o.buttons[s].action = function() {
                        location.href = n.attr("href");
                    };
                }
                o.closeIcon = !1;
                e.confirm(o);
            }), n.attr("jc-attached", !0));
        }), e(this);
    }, e.confirm = function(t, n) {
        if (void 0 === t && (t = {}), "string" == typeof t && (t = {
            content: t,
            title: n || !1
        }), "object" != typeof t.buttons && (t.buttons = {}), 0 == Object.keys(t.buttons).length) {
            var i = e.extend(!0, {}, jconfirm.pluginDefaults.defaultButtons, (jconfirm.defaults || {}).defaultButtons || {});
            t.buttons = i;
        }
        return jconfirm(t);
    }, e.alert = function(t, n) {
        if (void 0 === t && (t = {}), "string" == typeof t && (t = {
            content: t,
            title: n || !1
        }), "object" != typeof t.buttons && (t.buttons = {}), 0 == Object.keys(t.buttons).length) {
            var i = e.extend(!0, {}, jconfirm.pluginDefaults.defaultButtons, (jconfirm.defaults || {}).defaultButtons || {}), o = Object.keys(i)[0];
            t.buttons[o] = i[o];
        }
        return jconfirm(t);
    }, e.dialog = function(e, t) {
        return void 0 === e && (e = {}), "string" == typeof e && (e = {
            content: e,
            title: t || !1,
            closeIcon: function() {}
        }), e.buttons = {}, void 0 === e.closeIcon && (e.closeIcon = function() {}), e.confirmKeys = [ 13 ], 
        jconfirm(e);
    }, jconfirm = function(t) {
        void 0 === t && (t = {});
        var n = e.extend(!0, {}, jconfirm.pluginDefaults);
        jconfirm.defaults && (n = e.extend(!0, n, jconfirm.defaults)), n = e.extend(!0, {}, n, t);
        var i = new Jconfirm(n);
        return jconfirm.instances.push(i), i;
    }, (Jconfirm = function(t) {
        e.extend(this, t), this._init();
    }).prototype = {
        _init: function() {
            var t = this;
            jconfirm.instances.length || (jconfirm.lastFocused = e("body").find(":focus")), 
            this._id = Math.round(99999 * Math.random()), this.contentParsed = e(document.createElement("div")), 
            this.lazyOpen || setTimeout(function() {
                t.open();
            }, 0);
        },
        _buildHTML: function() {
            var t = this;
            this._parseAnimation(this.animation, "o"), this._parseAnimation(this.closeAnimation, "c"), 
            this._parseBgDismissAnimation(this.backgroundDismissAnimation), this._parseColumnClass(this.columnClass), 
            this._parseTheme(this.theme), this._parseType(this.type);
            var n = e(this.template);
            n.find(".jconfirm-box").addClass(this.animationParsed).addClass(this.backgroundDismissAnimationParsed).addClass(this.typeParsed), 
            this.typeAnimated && n.find(".jconfirm-box").addClass("jconfirm-type-animated"), 
            this.useBootstrap ? (n.find(".jc-bs3-row").addClass(this.bootstrapClasses.row), 
            n.find(".jc-bs3-row").addClass("justify-content-md-center justify-content-sm-center justify-content-xs-center justify-content-lg-center"), 
            n.find(".jconfirm-box-container").addClass(this.columnClassParsed), this.containerFluid ? n.find(".jc-bs3-container").addClass(this.bootstrapClasses.containerFluid) : n.find(".jc-bs3-container").addClass(this.bootstrapClasses.container)) : n.find(".jconfirm-box").css("width", this.boxWidth), 
            this.titleClass && n.find(".jconfirm-title-c").addClass(this.titleClass), n.addClass(this.themeParsed);
            var i = "jconfirm-box" + this._id;
            n.find(".jconfirm-box").attr("aria-labelledby", i).attr("tabindex", -1), n.find(".jconfirm-content").attr("id", i), 
            null !== this.bgOpacity && n.find(".jconfirm-bg").css("opacity", this.bgOpacity), 
            this.rtl && n.addClass("jconfirm-rtl"), this.$el = n.appendTo(this.container), this.$jconfirmBoxContainer = this.$el.find(".jconfirm-box-container"), 
            this.$jconfirmBox = this.$body = this.$el.find(".jconfirm-box"), this.$jconfirmBg = this.$el.find(".jconfirm-bg"), 
            this.$title = this.$el.find(".jconfirm-title"), this.$titleContainer = this.$el.find(".jconfirm-title-c"), 
            this.$content = this.$el.find("div.jconfirm-content"), this.$contentPane = this.$el.find(".jconfirm-content-pane"), 
            this.$icon = this.$el.find(".jconfirm-icon-c"), this.$closeIcon = this.$el.find(".jconfirm-closeIcon"), 
            this.$holder = this.$el.find(".jconfirm-holder"), this.$btnc = this.$el.find(".jconfirm-buttons"), 
            this.$scrollPane = this.$el.find(".jconfirm-scrollpane"), t.setStartingPoint(), 
            this._contentReady = e.Deferred(), this._modalReady = e.Deferred(), this.$holder.css({
                "padding-top": this.offsetTop,
                "padding-bottom": this.offsetBottom
            }), this.setTitle(), this.setIcon(), this._setButtons(), this._parseContent(), this.initDraggable(), 
            this.isAjax && this.showLoading(!1), e.when(this._contentReady, this._modalReady).then(function() {
                t.isAjaxLoading ? setTimeout(function() {
                    t.isAjaxLoading = !1, t.setContent(), t.setTitle(), t.setIcon(), setTimeout(function() {
                        t.hideLoading(!1), t._updateContentMaxHeight();
                    }, 100), "function" == typeof t.onContentReady && t.onContentReady();
                }, 50) : (t._updateContentMaxHeight(), t.setTitle(), t.setIcon(), "function" == typeof t.onContentReady && t.onContentReady()), 
                t.autoClose && t._startCountDown();
            }), this._watchContent(), "none" === this.animation && (this.animationSpeed = 1, 
            this.animationBounce = 1), this.$body.css(this._getCSS(this.animationSpeed, this.animationBounce)), 
            this.$contentPane.css(this._getCSS(this.animationSpeed, 1)), this.$jconfirmBg.css(this._getCSS(this.animationSpeed, 1)), 
            this.$jconfirmBoxContainer.css(this._getCSS(this.animationSpeed, 1));
        },
        _typePrefix: "jconfirm-type-",
        typeParsed: "",
        _parseType: function(e) {
            this.typeParsed = this._typePrefix + e;
        },
        setType: function(e) {
            var t = this.typeParsed;
            this._parseType(e), this.$jconfirmBox.removeClass(t).addClass(this.typeParsed);
        },
        themeParsed: "",
        _themePrefix: "jconfirm-",
        setTheme: function(e) {
            var t = this.theme;
            this.theme = e || this.theme, this._parseTheme(this.theme), t && this.$el.removeClass(t), 
            this.$el.addClass(this.themeParsed), this.theme = e;
        },
        _parseTheme: function(t) {
            var n = this;
            t = t.split(","), e.each(t, function(i, o) {
                -1 === o.indexOf(n._themePrefix) && (t[i] = n._themePrefix + e.trim(o));
            }), this.themeParsed = t.join(" ").toLowerCase();
        },
        backgroundDismissAnimationParsed: "",
        _bgDismissPrefix: "jconfirm-hilight-",
        _parseBgDismissAnimation: function(t) {
            var n = t.split(","), i = this;
            e.each(n, function(t, o) {
                -1 === o.indexOf(i._bgDismissPrefix) && (n[t] = i._bgDismissPrefix + e.trim(o));
            }), this.backgroundDismissAnimationParsed = n.join(" ").toLowerCase();
        },
        animationParsed: "",
        closeAnimationParsed: "",
        _animationPrefix: "jconfirm-animation-",
        setAnimation: function(e) {
            this.animation = e || this.animation, this._parseAnimation(this.animation, "o");
        },
        _parseAnimation: function(t, n) {
            n = n || "o";
            var i = t.split(","), o = this;
            e.each(i, function(t, n) {
                -1 === n.indexOf(o._animationPrefix) && (i[t] = o._animationPrefix + e.trim(n));
            });
            var r = i.join(" ").toLowerCase();
            return "o" === n ? this.animationParsed = r : this.closeAnimationParsed = r, r;
        },
        setCloseAnimation: function(e) {
            this.closeAnimation = e || this.closeAnimation, this._parseAnimation(this.closeAnimation, "c");
        },
        setAnimationSpeed: function(e) {
            this.animationSpeed = e || this.animationSpeed;
        },
        columnClassParsed: "",
        setColumnClass: function(e) {
            this.useBootstrap ? (this.columnClass = e || this.columnClass, this._parseColumnClass(this.columnClass), 
            this.$jconfirmBoxContainer.addClass(this.columnClassParsed)) : console.warn("cannot set columnClass, useBootstrap is set to false");
        },
        _updateContentMaxHeight: function() {
            var n = e(t).height() - (this.$jconfirmBox.outerHeight() - this.$contentPane.outerHeight()) - (this.offsetTop + this.offsetBottom);
            this.$contentPane.css({
                "max-height": n + "px"
            });
        },
        setBoxWidth: function(e) {
            this.useBootstrap ? console.warn("cannot set boxWidth, useBootstrap is set to true") : (this.boxWidth = e, 
            this.$jconfirmBox.css("width", e));
        },
        _parseColumnClass: function(e) {
            var t;
            switch (e = e.toLowerCase()) {
              case "xl":
              case "xlarge":
                t = "col-md-12";
                break;

              case "l":
              case "large":
                t = "col-md-8 col-md-offset-2";
                break;

              case "m":
              case "medium":
                t = "col-md-6 col-md-offset-3";
                break;

              case "s":
              case "small":
                t = "col-md-4 col-md-offset-4";
                break;

              case "xs":
              case "xsmall":
                t = "col-md-2 col-md-offset-5";
                break;

              default:
                t = e;
            }
            this.columnClassParsed = t;
        },
        initDraggable: function() {
            var n = this, i = this.$titleContainer;
            this.resetDrag(), this.draggable && (i.on("mousedown", function(e) {
                i.addClass("jconfirm-hand"), n.mouseX = e.clientX, n.mouseY = e.clientY, n.isDrag = !0;
            }), e(t).on("mousemove." + this._id, function(e) {
                n.isDrag && (n.movingX = e.clientX - n.mouseX + n.initialX, n.movingY = e.clientY - n.mouseY + n.initialY, 
                n.setDrag());
            }), e(t).on("mouseup." + this._id, function() {
                i.removeClass("jconfirm-hand"), n.isDrag && (n.isDrag = !1, n.initialX = n.movingX, 
                n.initialY = n.movingY);
            }));
        },
        resetDrag: function() {
            this.isDrag = !1, this.initialX = 0, this.initialY = 0, this.movingX = 0, this.movingY = 0, 
            this.mouseX = 0, this.mouseY = 0, this.$jconfirmBoxContainer.css("transform", "translate(0px, 0px)");
        },
        setDrag: function() {
            if (this.draggable) {
                this.alignMiddle = !1;
                var n = this.$jconfirmBox.outerWidth(), i = this.$jconfirmBox.outerHeight(), o = e(t).width(), r = e(t).height(), s = this;
                if (s.movingX % 1 == 0 || s.movingY % 1 == 0) {
                    if (s.dragWindowBorder) {
                        var a = o / 2 - n / 2, c = r / 2 - i / 2;
                        c -= s.dragWindowGap, (a -= s.dragWindowGap) + s.movingX < 0 ? s.movingX = -a : a - s.movingX < 0 && (s.movingX = a), 
                        c + s.movingY < 0 ? s.movingY = -c : c - s.movingY < 0 && (s.movingY = c);
                    }
                    s.$jconfirmBoxContainer.css("transform", "translate(" + s.movingX + "px, " + s.movingY + "px)");
                }
            }
        },
        _scrollTop: function() {
            if ("undefined" != typeof pageYOffset) return pageYOffset;
            var e = document.body, t = document.documentElement;
            return (t = t.clientHeight ? t : e).scrollTop;
        },
        _watchContent: function() {
            var n = this;
            this._timer && clearInterval(this._timer);
            var i = 0;
            this._timer = setInterval(function() {
                if (n.smoothContent) {
                    var o = n.$content.outerHeight() || 0;
                    o !== i && (n.$contentPane.css({
                        height: o
                    }).scrollTop(0), i = o);
                    var r = e(t).height();
                    n.offsetTop + n.offsetBottom + n.$jconfirmBox.height() - n.$contentPane.height() + n.$content.height() < r ? n.$contentPane.addClass("no-scroll") : n.$contentPane.removeClass("no-scroll");
                }
            }, this.watchInterval);
        },
        _overflowClass: "jconfirm-overflow",
        _hilightAnimating: !1,
        highlight: function() {
            this.hiLightModal();
        },
        hiLightModal: function() {
            var e = this;
            if (!this._hilightAnimating) {
                e.$body.addClass("hilight");
                var t = parseFloat(e.$body.css("animation-duration")) || 2;
                this._hilightAnimating = !0, setTimeout(function() {
                    e._hilightAnimating = !1, e.$body.removeClass("hilight");
                }, 1e3 * t);
            }
        },
        _bindEvents: function() {
            var n = this;
            this.boxClicked = !1, this.$scrollPane.click(function(e) {
                if (!n.boxClicked) {
                    var t, i = !1, o = !1;
                    if (t = "function" == typeof n.backgroundDismiss ? n.backgroundDismiss() : n.backgroundDismiss, 
                    "string" == typeof t && void 0 !== n.buttons[t] ? (i = t, o = !1) : o = void 0 === t || 1 == !!t, 
                    i) {
                        var r = n.buttons[i].action.apply(n);
                        o = void 0 === r || !!r;
                    }
                    o ? n.close() : n.hiLightModal();
                }
                n.boxClicked = !1;
            }), this.$jconfirmBox.click(function(e) {
                n.boxClicked = !0;
            });
            var i = !1;
            e(t).on("jcKeyDown." + n._id, function(e) {
                i || (i = !0);
            }), e(t).on("keyup." + n._id, function(e) {
                i && (n.reactOnKey(e), i = !1);
            }), e(t).on("resize." + this._id, function() {
                n._updateContentMaxHeight(), setTimeout(function() {
                    n.resetDrag();
                }, 100);
            });
        },
        _cubic_bezier: "0.36, 0.55, 0.19",
        _getCSS: function(e, t) {
            return {
                "-webkit-transition-duration": e / 1e3 + "s",
                "transition-duration": e / 1e3 + "s",
                "-webkit-transition-timing-function": "cubic-bezier(" + this._cubic_bezier + ", " + t + ")",
                "transition-timing-function": "cubic-bezier(" + this._cubic_bezier + ", " + t + ")"
            };
        },
        _setButtons: function() {
            var t = this, n = 0;
            if ("object" != typeof this.buttons && (this.buttons = {}), e.each(this.buttons, function(i, o) {
                n += 1, "function" == typeof o && (t.buttons[i] = o = {
                    action: o
                }), t.buttons[i].text = o.text || i, t.buttons[i].btnClass = o.btnClass || "btn-default", 
                t.buttons[i].action = o.action || function() {}, t.buttons[i].keys = o.keys || [], 
                t.buttons[i].isHidden = o.isHidden || !1, t.buttons[i].isDisabled = o.isDisabled || !1, 
                e.each(t.buttons[i].keys, function(e, n) {
                    t.buttons[i].keys[e] = n.toLowerCase();
                });
                var r = e('<button type="button" class="btn"></button>').html(t.buttons[i].text).addClass(t.buttons[i].btnClass).prop("disabled", t.buttons[i].isDisabled).css("display", t.buttons[i].isHidden ? "none" : "").click(function(e) {
                    e.preventDefault();
                    var n = t.buttons[i].action.apply(t, [ t.buttons[i] ]);
                    t.onAction.apply(t, [ i, t.buttons[i] ]), t._stopCountDown(), (void 0 === n || n) && t.close();
                });
                t.buttons[i].el = r, t.buttons[i].setText = function(e) {
                    r.html(e);
                }, t.buttons[i].addClass = function(e) {
                    r.addClass(e);
                }, t.buttons[i].removeClass = function(e) {
                    r.removeClass(e);
                }, t.buttons[i].disable = function() {
                    t.buttons[i].isDisabled = !0, r.prop("disabled", !0);
                }, t.buttons[i].enable = function() {
                    t.buttons[i].isDisabled = !1, r.prop("disabled", !1);
                }, t.buttons[i].show = function() {
                    t.buttons[i].isHidden = !1, r.css("display", "");
                }, t.buttons[i].hide = function() {
                    t.buttons[i].isHidden = !0, r.css("display", "none");
                }, t["$_" + i] = t["$$" + i] = r, t.$btnc.append(r);
            }), 0 === n && this.$btnc.hide(), null === this.closeIcon && 0 === n && (this.closeIcon = !0), 
            this.closeIcon) {
                if (this.closeIconClass) {
                    var i = '<i class="' + this.closeIconClass + '"></i>';
                    this.$closeIcon.html(i);
                }
                this.$closeIcon.click(function(e) {
                    e.preventDefault();
                    var n, i = !1, o = !1;
                    if (n = "function" == typeof t.closeIcon ? t.closeIcon() : t.closeIcon, "string" == typeof n && void 0 !== t.buttons[n] ? (i = n, 
                    o = !1) : o = void 0 === n || 1 == !!n, i) {
                        var r = t.buttons[i].action.apply(t);
                        o = void 0 === r || !!r;
                    }
                    o && t.close();
                }), this.$closeIcon.show();
            } else this.$closeIcon.hide();
        },
        setTitle: function(e, t) {
            if (t = t || !1, void 0 !== e) if ("string" == typeof e) this.title = e; else if ("function" == typeof e) {
                "function" == typeof e.promise && console.error("Promise was returned from title function, this is not supported.");
                var n = e();
                this.title = "string" == typeof n && n;
            } else this.title = !1;
            this.isAjaxLoading && !t || (this.$title.html(this.title || ""), this.updateTitleContainer());
        },
        setIcon: function(e, t) {
            if (t = t || !1, void 0 !== e) if ("string" == typeof e) this.icon = e; else if ("function" == typeof e) {
                var n = e();
                this.icon = "string" == typeof n && n;
            } else this.icon = !1;
            this.isAjaxLoading && !t || (this.$icon.html(this.icon ? '<i class="' + this.icon + '"></i>' : ""), 
            this.updateTitleContainer());
        },
        updateTitleContainer: function() {
            this.title || this.icon ? this.$titleContainer.show() : this.$titleContainer.hide();
        },
        setContentPrepend: function(e, t) {
            e && this.contentParsed.prepend(e);
        },
        setContentAppend: function(e) {
            e && this.contentParsed.append(e);
        },
        setContent: function(e, t) {
            t = !!t;
            var n = this;
            e && this.contentParsed.html("").append(e), this.isAjaxLoading && !t || (this.$content.html(""), 
            this.$content.append(this.contentParsed), setTimeout(function() {
                n.$body.find("input[autofocus]:visible:first").focus();
            }, 100));
        },
        loadingSpinner: !1,
        showLoading: function(e) {
            this.loadingSpinner = !0, this.$jconfirmBox.addClass("loading"), e && this.$btnc.find("button").prop("disabled", !0);
        },
        hideLoading: function(e) {
            this.loadingSpinner = !1, this.$jconfirmBox.removeClass("loading"), e && this.$btnc.find("button").prop("disabled", !1);
        },
        ajaxResponse: !1,
        contentParsed: "",
        isAjax: !1,
        isAjaxLoading: !1,
        _parseContent: function() {
            var t = this, n = "&nbsp;";
            if ("function" == typeof this.content) {
                var i = this.content.apply(this);
                "string" == typeof i ? this.content = i : "object" == typeof i && "function" == typeof i.always ? (this.isAjax = !0, 
                this.isAjaxLoading = !0, i.always(function(e, n, i) {
                    t.ajaxResponse = {
                        data: e,
                        status: n,
                        xhr: i
                    }, t._contentReady.resolve(e, n, i), "function" == typeof t.contentLoaded && t.contentLoaded(e, n, i);
                }), this.content = n) : this.content = n;
            }
            if ("string" == typeof this.content && "url:" === this.content.substr(0, 4).toLowerCase()) {
                this.isAjax = !0, this.isAjaxLoading = !0;
                var o = this.content.substring(4, this.content.length);
                e.get(o).done(function(e) {
                    t.contentParsed.html(e);
                }).always(function(e, n, i) {
                    t.ajaxResponse = {
                        data: e,
                        status: n,
                        xhr: i
                    }, t._contentReady.resolve(e, n, i), "function" == typeof t.contentLoaded && t.contentLoaded(e, n, i);
                });
            }
            this.content || (this.content = n), this.isAjax || (this.contentParsed.html(this.content), 
            this.setContent(), t._contentReady.resolve());
        },
        _stopCountDown: function() {
            clearInterval(this.autoCloseInterval), this.$cd && this.$cd.remove();
        },
        _startCountDown: function() {
            var t = this, n = this.autoClose.split("|");
            if (2 !== n.length) return console.error("Invalid option for autoClose. example 'close|10000'"), 
            !1;
            var i = n[0], o = parseInt(n[1]);
            if (void 0 === this.buttons[i]) return console.error("Invalid button key '" + i + "' for autoClose"), 
            !1;
            var r = Math.ceil(o / 1e3);
            this.$cd = e('<span class="countdown"> (' + r + ")</span>").appendTo(this["$_" + i]), 
            this.autoCloseInterval = setInterval(function() {
                t.$cd.html(" (" + (r -= 1) + ") "), r <= 0 && (t["$$" + i].trigger("click"), t._stopCountDown());
            }, 1e3);
        },
        _getKey: function(e) {
            switch (e) {
              case 192:
                return "tilde";

              case 13:
                return "enter";

              case 16:
                return "shift";

              case 9:
                return "tab";

              case 20:
                return "capslock";

              case 17:
                return "ctrl";

              case 91:
                return "win";

              case 18:
                return "alt";

              case 27:
                return "esc";

              case 32:
                return "space";
            }
            var t = String.fromCharCode(e);
            return !!/^[A-z0-9]+$/.test(t) && t.toLowerCase();
        },
        reactOnKey: function(t) {
            var n = this, i = e(".jconfirm");
            if (i.eq(i.length - 1)[0] !== this.$el[0]) return !1;
            var o = t.which;
            if (this.$content.find(":input").is(":focus") && /13|32/.test(o)) return !1;
            var r = this._getKey(o);
            if ("esc" === r && this.escapeKey) if (!0 === this.escapeKey) this.$scrollPane.trigger("click"); else if ("string" == typeof this.escapeKey || "function" == typeof this.escapeKey) {
                var s;
                (s = "function" == typeof this.escapeKey ? this.escapeKey() : this.escapeKey) && (void 0 === this.buttons[s] ? console.warn("Invalid escapeKey, no buttons found with key " + s) : this["$_" + s].trigger("click"));
            }
            e.each(this.buttons, function(e, t) {
                -1 != t.keys.indexOf(r) && n["$_" + e].trigger("click");
            });
        },
        setDialogCenter: function() {
            console.info("setDialogCenter is deprecated, dialogs are centered with CSS3 tables");
        },
        _unwatchContent: function() {
            clearInterval(this._timer);
        },
        close: function() {
            var n = this;
            return "function" == typeof this.onClose && this.onClose(), this._unwatchContent(), 
            e(t).unbind("resize." + this._id), e(t).unbind("keyup." + this._id), e(t).unbind("jcKeyDown." + this._id), 
            this.draggable && (e(t).unbind("mousemove." + this._id), e(t).unbind("mouseup." + this._id), 
            this.$titleContainer.unbind("mousedown")), n.$el.removeClass(n.loadedClass), e("body").removeClass("jconfirm-no-scroll-" + n._id), 
            n.$jconfirmBoxContainer.removeClass("jconfirm-no-transition"), setTimeout(function() {
                n.$body.addClass(n.closeAnimationParsed), n.$jconfirmBg.addClass("jconfirm-bg-h");
                var i = "none" === n.closeAnimation ? 1 : n.animationSpeed;
                setTimeout(function() {
                    n.$el.remove();
                    jconfirm.instances;
                    var i = jconfirm.instances.length - 1;
                    for (i; i >= 0; i--) jconfirm.instances[i]._id === n._id && jconfirm.instances.splice(i, 1);
                    if (!jconfirm.instances.length && n.scrollToPreviousElement && jconfirm.lastFocused && jconfirm.lastFocused.length && e.contains(document, jconfirm.lastFocused[0])) {
                        var o = jconfirm.lastFocused;
                        if (n.scrollToPreviousElementAnimate) {
                            var r = e(t).scrollTop(), s = jconfirm.lastFocused.offset().top, a = e(t).height();
                            if (s > r && s < r + a) o.focus(); else {
                                var c = s - Math.round(a / 3);
                                e("html, body").animate({
                                    scrollTop: c
                                }, n.animationSpeed, "swing", function() {
                                    o.focus();
                                });
                            }
                        } else o.focus();
                        jconfirm.lastFocused = !1;
                    }
                    "function" == typeof n.onDestroy && n.onDestroy();
                }, .4 * i);
            }, 50), !0;
        },
        open: function() {
            return !this.isOpen() && (this._buildHTML(), this._bindEvents(), this._open(), !0);
        },
        setStartingPoint: function() {
            var n = !1;
            if (!0 !== this.animateFromElement && this.animateFromElement) n = this.animateFromElement, 
            jconfirm.lastClicked = !1; else {
                if (!jconfirm.lastClicked || !0 !== this.animateFromElement) return !1;
                n = jconfirm.lastClicked, jconfirm.lastClicked = !1;
            }
            if (!n) return !1;
            var i = n.offset(), o = n.outerHeight() / 2, r = n.outerWidth() / 2;
            o -= this.$jconfirmBox.outerHeight() / 2, r -= this.$jconfirmBox.outerWidth() / 2;
            var s = i.top + o;
            s -= this._scrollTop();
            var a = i.left + r, c = e(t).height() / 2, u = e(t).width() / 2;
            if (s -= c - this.$jconfirmBox.outerHeight() / 2, a -= u - this.$jconfirmBox.outerWidth() / 2, 
            Math.abs(s) > c || Math.abs(a) > u) return !1;
            this.$jconfirmBoxContainer.css("transform", "translate(" + a + "px, " + s + "px)");
        },
        _open: function() {
            var e = this;
            "function" == typeof e.onOpenBefore && e.onOpenBefore(), this.$body.removeClass(this.animationParsed), 
            this.$jconfirmBg.removeClass("jconfirm-bg-h"), this.$body.focus(), e.$jconfirmBoxContainer.css("transform", "translate(0px, 0px)"), 
            setTimeout(function() {
                e.$body.css(e._getCSS(e.animationSpeed, 1)), e.$body.css({
                    "transition-property": e.$body.css("transition-property") + ", margin"
                }), e.$jconfirmBoxContainer.addClass("jconfirm-no-transition"), e._modalReady.resolve(), 
                "function" == typeof e.onOpen && e.onOpen(), e.$el.addClass(e.loadedClass);
            }, this.animationSpeed);
        },
        loadedClass: "jconfirm-open",
        isClosed: function() {
            return !this.$el || "" === this.$el.css("display");
        },
        isOpen: function() {
            return !this.isClosed();
        },
        toggle: function() {
            this.isOpen() ? this.close() : this.open();
        }
    }, jconfirm.instances = [], jconfirm.lastFocused = !1, jconfirm.pluginDefaults = {
        template: '<div class="jconfirm"><div class="jconfirm-bg jconfirm-bg-h"></div><div class="jconfirm-scrollpane"><div class="jconfirm-row"><div class="jconfirm-cell"><div class="jconfirm-holder"><div class="jc-bs3-container"><div class="jc-bs3-row"><div class="jconfirm-box-container jconfirm-animated"><div class="jconfirm-box" role="dialog" aria-labelledby="labelled" tabindex="-1"><div class="jconfirm-closeIcon">&times;</div><div class="jconfirm-title-c"><span class="jconfirm-icon-c"></span><span class="jconfirm-title"></span></div><div class="jconfirm-content-pane"><div class="jconfirm-content"></div></div><div class="jconfirm-buttons"></div><div class="jconfirm-clear"></div></div></div></div></div></div></div></div></div></div>',
        title: "Hello",
        titleClass: "",
        type: "default",
        typeAnimated: !0,
        draggable: !0,
        dragWindowGap: 15,
        dragWindowBorder: !0,
        animateFromElement: !0,
        alignMiddle: !0,
        smoothContent: !0,
        content: "Are you sure to continue?",
        buttons: {},
        defaultButtons: {
            ok: {
                action: function() {}
            },
            close: {
                action: function() {}
            }
        },
        contentLoaded: function() {},
        icon: "",
        lazyOpen: !1,
        bgOpacity: null,
        theme: "light",
        animation: "scale",
        closeAnimation: "scale",
        animationSpeed: 400,
        animationBounce: 1,
        escapeKey: !0,
        rtl: !1,
        container: "body",
        containerFluid: !1,
        backgroundDismiss: !1,
        backgroundDismissAnimation: "shake",
        autoClose: !1,
        closeIcon: null,
        closeIconClass: !1,
        watchInterval: 100,
        columnClass: "col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1",
        boxWidth: "50%",
        scrollToPreviousElement: !0,
        scrollToPreviousElementAnimate: !0,
        useBootstrap: !0,
        offsetTop: 40,
        offsetBottom: 40,
        bootstrapClasses: {
            container: "container",
            containerFluid: "container-fluid",
            row: "row"
        },
        onContentReady: function() {},
        onOpenBefore: function() {},
        onOpen: function() {},
        onClose: function() {},
        onDestroy: function() {},
        onAction: function() {}
    };
    var n = !1;
    e(t).on("keydown", function(i) {
        if (!n) {
            var o = !1;
            e(i.target).closest(".jconfirm-box").length && (o = !0), o && e(t).trigger("jcKeyDown"), 
            n = !0;
        }
    }), e(t).on("keyup", function() {
        n = !1;
    }), jconfirm.lastClicked = !1, e(document).on("mousedown", "button, a", function() {
        jconfirm.lastClicked = e(this);
    });
}(jQuery, window);