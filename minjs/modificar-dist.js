!function(e, t) {
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
    function r(e) {
        var t = !!e && "length" in e && e.length, n = pe.type(e);
        return "function" !== n && !pe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    function i(e, t, n) {
        return pe.isFunction(t) ? pe.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n;
        }) : t.nodeType ? pe.grep(e, function(e) {
            return e === t !== n;
        }) : "string" != typeof t ? pe.grep(e, function(e) {
            return ae.call(t, e) > -1 !== n;
        }) : Ce.test(t) ? pe.filter(t, e, n) : (t = pe.filter(t, e), pe.grep(e, function(e) {
            return ae.call(t, e) > -1 !== n && 1 === e.nodeType;
        }));
    }
    function o(e, t) {
        for (;(e = e[t]) && 1 !== e.nodeType; ) ;
        return e;
    }
    function a(e) {
        var t = {};
        return pe.each(e.match(Se) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    function s(e) {
        return e;
    }
    function u(e) {
        throw e;
    }
    function l(e, t, n) {
        var r;
        try {
            e && pe.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && pe.isFunction(r = e.then) ? r.call(e, t, n) : t.call(void 0, e);
        } catch (e) {
            n.call(void 0, e);
        }
    }
    function c() {
        te.removeEventListener("DOMContentLoaded", c), e.removeEventListener("load", c), 
        pe.ready();
    }
    function f() {
        this.expando = pe.expando + f.uid++;
    }
    function d(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : $e.test(e) ? JSON.parse(e) : e);
    }
    function p(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Pe, "-$&").toLowerCase(), 
        "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = d(n);
            } catch (e) {}
            Me.set(e, t, n);
        } else n = void 0;
        return n;
    }
    function h(e, t, n, r) {
        var i, o = 1, a = 20, s = r ? function() {
            return r.cur();
        } : function() {
            return pe.css(e, t, "");
        }, u = s(), l = n && n[3] || (pe.cssNumber[t] ? "" : "px"), c = (pe.cssNumber[t] || "px" !== l && +u) && Oe.exec(pe.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do {
                c /= o = o || ".5", pe.style(e, t, c + l);
            } while (o !== (o = s() / u) && 1 !== o && --a);
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, 
        r.start = c, r.end = i)), i;
    }
    function g(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = Be[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = pe.css(t, "display"), 
        t.parentNode.removeChild(t), "none" === i && (i = "block"), Be[r] = i, i);
    }
    function m(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, 
        t ? ("none" === n && (i[o] = Le.get(r, "display") || null, i[o] || (r.style.display = "")), 
        "" === r.style.display && Re(r) && (i[o] = g(r))) : "none" !== n && (i[o] = "none", 
        Le.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
    }
    function v(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
        void 0 === t || t && pe.nodeName(e, t) ? pe.merge([ e ], n) : n;
    }
    function y(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Le.set(e[n], "globalEval", !t || Le.get(t[n], "globalEval"));
    }
    function x(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++) if ((o = e[p]) || 0 === o) if ("object" === pe.type(o)) pe.merge(d, o.nodeType ? [ o ] : o); else if (Ve.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (ze.exec(o) || [ "", "" ])[1].toLowerCase(), 
            u = Ue[s] || Ue._default, a.innerHTML = u[1] + pe.htmlPrefilter(o) + u[2], c = u[0]; c--; ) a = a.lastChild;
            pe.merge(d, a.childNodes), (a = f.firstChild).textContent = "";
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", p = 0; o = d[p++]; ) if (r && pe.inArray(o, r) > -1) i && i.push(o); else if (l = pe.contains(o.ownerDocument, o), 
        a = v(f.appendChild(o), "script"), l && y(a), n) for (c = 0; o = a[c++]; ) Xe.test(o.type || "") && n.push(o);
        return f;
    }
    function b() {
        return !0;
    }
    function w() {
        return !1;
    }
    function T() {
        try {
            return te.activeElement;
        } catch (e) {}
    }
    function C(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) C(e, s, n, r, t[s], o);
            return e;
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, 
        r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = w; else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return pe().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = pe.guid++)), e.each(function() {
            pe.event.add(this, t, i, r, n);
        });
    }
    function E(e, t) {
        return pe.nodeName(e, "table") && pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e;
    }
    function k(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function D(e) {
        var t = tt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function N(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Le.hasData(e) && (o = Le.access(e), a = Le.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l) for (n = 0, r = l[i].length; n < r; n++) pe.event.add(t, i, l[i][n]);
            }
            Me.hasData(e) && (s = Me.access(e), u = pe.extend({}, s), Me.set(t, u));
        }
    }
    function S(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && _e.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }
    function j(e, t, r, i) {
        t = ie.apply([], t);
        var o, a, s, u, l, c, f = 0, d = e.length, p = d - 1, h = t[0], g = pe.isFunction(h);
        if (g || d > 1 && "string" == typeof h && !de.checkClone && et.test(h)) return e.each(function(n) {
            var o = e.eq(n);
            g && (t[0] = h.call(this, n, o.html())), j(o, t, r, i);
        });
        if (d && (o = x(t, e[0].ownerDocument, !1, e, i), a = o.firstChild, 1 === o.childNodes.length && (o = a), 
        a || i)) {
            for (u = (s = pe.map(v(o, "script"), k)).length; f < d; f++) l = o, f !== p && (l = pe.clone(l, !0, !0), 
            u && pe.merge(s, v(l, "script"))), r.call(e[f], l, f);
            if (u) for (c = s[s.length - 1].ownerDocument, pe.map(s, D), f = 0; f < u; f++) l = s[f], 
            Xe.test(l.type || "") && !Le.access(l, "globalEval") && pe.contains(c, l) && (l.src ? pe._evalUrl && pe._evalUrl(l.src) : n(l.textContent.replace(nt, ""), c));
        }
        return e;
    }
    function A(e, t, n) {
        for (var r, i = t ? pe.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || pe.cleanData(v(r)), 
        r.parentNode && (n && pe.contains(r.ownerDocument, r) && y(v(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    function H(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || ot(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || pe.contains(e.ownerDocument, e) || (a = pe.style(e, t)), 
        !de.pixelMarginRight() && it.test(a) && rt.test(t) && (r = s.width, i = s.minWidth, 
        o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, 
        s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
    }
    function q(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            }
        };
    }
    function L(e) {
        if (e in ct) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = lt.length; n--; ) if ((e = lt[n] + t) in ct) return e;
    }
    function M(e, t, n) {
        var r = Oe.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function $(e, t, n, r, i) {
        var o, a = 0;
        for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += pe.css(e, n + Ie[o], !0, i)), 
        r ? ("content" === n && (a -= pe.css(e, "padding" + Ie[o], !0, i)), "margin" !== n && (a -= pe.css(e, "border" + Ie[o] + "Width", !0, i))) : (a += pe.css(e, "padding" + Ie[o], !0, i), 
        "padding" !== n && (a += pe.css(e, "border" + Ie[o] + "Width", !0, i)));
        return a;
    }
    function P(e, t, n) {
        var r, i = !0, o = ot(e), a = "border-box" === pe.css(e, "boxSizing", !1, o);
        if (e.getClientRects().length && (r = e.getBoundingClientRect()[t]), r <= 0 || null == r) {
            if (((r = H(e, t, o)) < 0 || null == r) && (r = e.style[t]), it.test(r)) return r;
            i = a && (de.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0;
        }
        return r + $(e, t, n || (a ? "border" : "content"), i, o) + "px";
    }
    function F(e, t, n, r, i) {
        return new F.prototype.init(e, t, n, r, i);
    }
    function O() {
        dt && (e.requestAnimationFrame(O), pe.fx.tick());
    }
    function I() {
        return e.setTimeout(function() {
            ft = void 0;
        }), ft = pe.now();
    }
    function R(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Ie[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function W(e, t, n) {
        for (var r, i = (z.tweeners[t] || []).concat(z.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
    }
    function B(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, d = this, p = {}, h = e.style, g = e.nodeType && Re(e), v = Le.get(e, "fxshow");
        n.queue || (null == (a = pe._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, 
        a.empty.fire = function() {
            a.unqueued || s();
        }), a.unqueued++, d.always(function() {
            d.always(function() {
                a.unqueued--, pe.queue(e, "fx").length || a.empty.fire();
            });
        }));
        for (r in t) if (i = t[r], pt.test(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                if ("show" !== i || !v || void 0 === v[r]) continue;
                g = !0;
            }
            p[r] = v && v[r] || pe.style(e, r);
        }
        if ((u = !pe.isEmptyObject(t)) || !pe.isEmptyObject(p)) {
            f && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
            null == (l = v && v.display) && (l = Le.get(e, "display")), "none" === (c = pe.css(e, "display")) && (l ? c = l : (m([ e ], !0), 
            l = e.style.display || l, c = pe.css(e, "display"), m([ e ]))), ("inline" === c || "inline-block" === c && null != l) && "none" === pe.css(e, "float") && (u || (d.done(function() {
                h.display = l;
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), 
            n.overflow && (h.overflow = "hidden", d.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
            })), u = !1;
            for (r in p) u || (v ? "hidden" in v && (g = v.hidden) : v = Le.access(e, "fxshow", {
                display: l
            }), o && (v.hidden = !g), g && m([ e ], !0), d.done(function() {
                g || m([ e ]), Le.remove(e, "fxshow");
                for (r in p) pe.style(e, r, p[r]);
            })), u = W(g ? v[r] : 0, r, d), r in v || (v[r] = u.start, g && (u.end = u.start, 
            u.start = 0));
        }
    }
    function _(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = pe.camelCase(n), i = t[r], o = e[n], pe.isArray(o) && (i = o[1], 
        o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = pe.cssHooks[r]) && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
    }
    function z(e, t, n) {
        var r, i, o = 0, a = z.prefilters.length, s = pe.Deferred().always(function() {
            delete u.elem;
        }), u = function() {
            if (i) return !1;
            for (var t = ft || I(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
            return s.notifyWith(e, [ l, r, n ]), r < 1 && a ? n : (s.resolveWith(e, [ l ]), 
            !1);
        }, l = s.promise({
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
                var r = pe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r;
            },
            stop: function(t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; n < r; n++) l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [ l, 1, 0 ]), s.resolveWith(e, [ l, t ])) : s.rejectWith(e, [ l, t ]), 
                this;
            }
        }), c = l.props;
        for (_(c, l.opts.specialEasing); o < a; o++) if (r = z.prefilters[o].call(l, e, c, l.opts)) return pe.isFunction(r.stop) && (pe._queueHooks(l.elem, l.opts.queue).stop = pe.proxy(r.stop, r)), 
        r;
        return pe.map(c, W, l), pe.isFunction(l.opts.start) && l.opts.start.call(e, l), 
        pe.fx.timer(pe.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
    }
    function X(e) {
        return (e.match(Se) || []).join(" ");
    }
    function U(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }
    function V(e, t, n, r) {
        var i;
        if (pe.isArray(t)) pe.each(t, function(t, i) {
            n || Et.test(e) ? r(e, i) : V(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
        }); else if (n || "object" !== pe.type(t)) r(e, t); else for (i in t) V(e + "[" + i + "]", t[i], n, r);
    }
    function G(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(Se) || [];
            if (pe.isFunction(n)) for (;r = o[i++]; ) "+" === r[0] ? (r = r.slice(1) || "*", 
            (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function Y(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, pe.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), 
                i(l), !1);
            }), u;
        }
        var o = {}, a = e === Pt;
        return i(t.dataTypes[0]) || !o["*"] && i("*");
    }
    function Q(e, t) {
        var n, r, i = pe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && pe.extend(!0, e, r), e;
    }
    function J(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), 
        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break;
        }
        if (u[0] in n) o = u[0]; else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break;
                }
                a || (a = i);
            }
            o = o || a;
        }
        if (o) return o !== u[0] && u.unshift(o), n[o];
    }
    function K(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), 
        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                break;
            }
            if (!0 !== a) if (a && e.throws) t = a(t); else try {
                t = a(t);
            } catch (e) {
                return {
                    state: "parsererror",
                    error: a ? e : "No conversion from " + u + " to " + o
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
    var ee = [], te = e.document, ne = Object.getPrototypeOf, re = ee.slice, ie = ee.concat, oe = ee.push, ae = ee.indexOf, se = {}, ue = se.toString, le = se.hasOwnProperty, ce = le.toString, fe = ce.call(Object), de = {}, pe = function(e, t) {
        return new pe.fn.init(e, t);
    }, he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ge = /^-ms-/, me = /-([a-z])/g, ve = function(e, t) {
        return t.toUpperCase();
    };
    pe.fn = pe.prototype = {
        jquery: "3.1.1",
        constructor: pe,
        length: 0,
        toArray: function() {
            return re.call(this);
        },
        get: function(e) {
            return null == e ? re.call(this) : e < 0 ? this[e + this.length] : this[e];
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
            return this.pushStack(re.apply(this, arguments));
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
        push: oe,
        sort: ee.sort,
        splice: ee.splice
    }, pe.extend = pe.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || pe.isFunction(a) || (a = {}), 
        s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], 
        a !== (r = e[t]) && (l && r && (pe.isPlainObject(r) || (i = pe.isArray(r))) ? (i ? (i = !1, 
        o = n && pe.isArray(n) ? n : []) : o = n && pe.isPlainObject(n) ? n : {}, a[t] = pe.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a;
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
            return !(!e || "[object Object]" !== ue.call(e)) && (!(t = ne(e)) || "function" == typeof (n = le.call(t, "constructor") && t.constructor) && ce.call(n) === fe);
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? se[ue.call(e)] || "object" : typeof e;
        },
        globalEval: function(e) {
            n(e);
        },
        camelCase: function(e) {
            return e.replace(ge, "ms-").replace(me, ve);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, t) {
            var n, i = 0;
            if (r(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(he, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (r(Object(e)) ? pe.merge(n, "string" == typeof e ? [ e ] : e) : oe.call(n, e)), 
            n;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : ae.call(t, e, n);
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e;
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r;
        },
        map: function(e, t, n) {
            var i, o, a = 0, s = [];
            if (r(e)) for (i = e.length; a < i; a++) null != (o = t(e[a], a, n)) && s.push(o); else for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
            return ie.apply([], s);
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), pe.isFunction(e)) return r = re.call(arguments, 2), 
            i = function() {
                return e.apply(t || this, r.concat(re.call(arguments)));
            }, i.guid = e.guid = e.guid || pe.guid++, i;
        },
        now: Date.now,
        support: de
    }), "function" == typeof Symbol && (pe.fn[Symbol.iterator] = ee[Symbol.iterator]), 
    pe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        se["[object " + t + "]"] = t.toLowerCase();
    });
    var ye = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, c, d, p = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!r && ((t ? t.ownerDocument || t : I) !== H && A(t), t = t || H, L)) {
                if (11 !== h && (u = ge.exec(e))) if (i = u[1]) {
                    if (9 === h) {
                        if (!(a = t.getElementById(i))) return n;
                        if (a.id === i) return n.push(a), n;
                    } else if (p && (a = p.getElementById(i)) && F(t, a) && a.id === i) return n.push(a), 
                    n;
                } else {
                    if (u[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                    if ((i = u[3]) && b.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(i)), 
                    n;
                }
                if (b.qsa && !z[e + " "] && (!M || !M.test(e))) {
                    if (1 !== h) p = t, d = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(xe, be) : t.setAttribute("id", s = O), 
                        o = (c = E(e)).length; o--; ) c[o] = "#" + s + " " + f(c[o]);
                        d = c.join(","), p = me.test(e) && l(t.parentNode) || t;
                    }
                    if (d) try {
                        return Q.apply(n, p.querySelectorAll(d)), n;
                    } catch (e) {} finally {
                        s === O && t.removeAttribute("id");
                    }
                }
            }
            return D(e.replace(oe, "$1"), t, n, r);
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = r;
            }
            var t = [];
            return e;
        }
        function r(e) {
            return e[O] = !0, e;
        }
        function i(e) {
            var t = H.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--; ) w.attrHandle[n[r]] = t;
        }
        function a(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function s(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e;
            };
        }
        function u(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; ) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                });
            });
        }
        function l(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        function c() {}
        function f(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function d(e, t, n) {
            var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, s = W++;
            return t.first ? function(t, n, i) {
                for (;t = t[r]; ) if (1 === t.nodeType || a) return e(t, n, i);
                return !1;
            } : function(t, n, u) {
                var l, c, f, d = [ R, s ];
                if (u) {
                    for (;t = t[r]; ) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                } else for (;t = t[r]; ) if (1 === t.nodeType || a) if (f = t[O] || (t[O] = {}), 
                c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
                    if ((l = c[o]) && l[0] === R && l[1] === s) return d[2] = l[2];
                    if (c[o] = d, d[2] = e(t, n, u)) return !0;
                }
                return !1;
            };
        }
        function p(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                return !0;
            } : e[0];
        }
        function h(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
            return r;
        }
        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), 
            l && t.push(s)));
            return a;
        }
        function m(e, t, n, i, o, a) {
            return i && !i[O] && (i = m(i)), o && !o[O] && (o = m(o, a)), r(function(r, a, s, u) {
                var l, c, f, d = [], p = [], m = a.length, v = r || h(t || "*", s.nodeType ? [ s ] : s, []), y = !e || !r && t ? v : g(v, d, e, s, u), x = n ? o || (r ? e : m || i) ? [] : a : y;
                if (n && n(y, x, s, u), i) for (l = g(x, p), i(l, [], s, u), c = l.length; c--; ) (f = l[c]) && (x[p[c]] = !(y[p[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--; ) (f = x[c]) && l.push(y[c] = f);
                            o(null, x = [], l, u);
                        }
                        for (c = x.length; c--; ) (f = x[c]) && (l = o ? K(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f));
                    }
                } else x = g(x === a ? x.splice(m, x.length) : x), o ? o(null, a, x, u) : Q.apply(a, x);
            });
        }
        function v(e) {
            for (var t, n, r, i = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, u = d(function(e) {
                return e === t;
            }, a, !0), l = d(function(e) {
                return K(t, e) > -1;
            }, a, !0), c = [ function(e, n, r) {
                var i = !o && (r || n !== N) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                return t = null, i;
            } ]; s < i; s++) if (n = w.relative[e[s].type]) c = [ d(p(c), n) ]; else {
                if ((n = w.filter[e[s].type].apply(null, e[s].matches))[O]) {
                    for (r = ++s; r < i && !w.relative[e[r].type]; r++) ;
                    return m(s > 1 && p(c), s > 1 && f(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*" : ""
                    })).replace(oe, "$1"), n, s < r && v(e.slice(s, r)), r < i && v(e = e.slice(r)), r < i && f(e));
                }
                c.push(n);
            }
            return p(c);
        }
        function y(e, n) {
            var i = n.length > 0, o = e.length > 0, a = function(r, a, s, u, l) {
                var c, f, d, p = 0, h = "0", m = r && [], v = [], y = N, x = r || o && w.find.TAG("*", l), b = R += null == y ? 1 : Math.random() || .1, T = x.length;
                for (l && (N = a === H || a || l); h !== T && null != (c = x[h]); h++) {
                    if (o && c) {
                        for (f = 0, a || c.ownerDocument === H || (A(c), s = !L); d = e[f++]; ) if (d(c, a || H, s)) {
                            u.push(c);
                            break;
                        }
                        l && (R = b);
                    }
                    i && ((c = !d && c) && p--, r && m.push(c));
                }
                if (p += h, i && h !== p) {
                    for (f = 0; d = n[f++]; ) d(m, v, a, s);
                    if (r) {
                        if (p > 0) for (;h--; ) m[h] || v[h] || (v[h] = G.call(u));
                        v = g(v);
                    }
                    Q.apply(u, v), l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u);
                }
                return l && (R = b, N = y), m;
            };
            return i ? r(a) : a;
        }
        var x, b, w, T, C, E, k, D, N, S, j, A, H, q, L, M, $, P, F, O = "sizzle" + 1 * new Date(), I = e.document, R = 0, W = 0, B = n(), _ = n(), z = n(), X = function(e, t) {
            return e === t && (j = !0), 0;
        }, U = {}.hasOwnProperty, V = [], G = V.pop, Y = V.push, Q = V.push, J = V.slice, K = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
        }, Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]", re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)", ie = new RegExp(ee + "+", "g"), oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"), ae = new RegExp("^" + ee + "*," + ee + "*"), se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), le = new RegExp(re), ce = new RegExp("^" + te + "$"), fe = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te + "|[*])"),
            ATTR: new RegExp("^" + ne),
            PSEUDO: new RegExp("^" + re),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + Z + ")$", "i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
        }, de = /^(?:input|select|textarea|button)$/i, pe = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/, ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, me = /[+~]/, ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), ye = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        }, xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, be = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        }, we = function() {
            A();
        }, Te = d(function(e) {
            return !0 === e.disabled && ("form" in e || "label" in e);
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            Q.apply(V = J.call(I.childNodes), I.childNodes), V[I.childNodes.length].nodeType;
        } catch (e) {
            Q = {
                apply: V.length ? function(e, t) {
                    Y.apply(e, J.call(t));
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        b = t.support = {}, C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }, A = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : I;
            return r !== H && 9 === r.nodeType && r.documentElement ? (H = r, q = H.documentElement, 
            L = !C(H), I !== H && (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), 
            b.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), b.getElementsByTagName = i(function(e) {
                return e.appendChild(H.createComment("")), !e.getElementsByTagName("*").length;
            }), b.getElementsByClassName = he.test(H.getElementsByClassName), b.getById = i(function(e) {
                return q.appendChild(e).id = O, !H.getElementsByName || !H.getElementsByName(O).length;
            }), b.getById ? (w.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }, w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && L) {
                    var n = t.getElementById(e);
                    return n ? [ n ] : [];
                }
            }) : (w.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }, w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && L) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                        for (i = t.getElementsByName(e), r = 0; o = i[r++]; ) if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                    }
                    return [];
                }
            }), w.find.TAG = b.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = o[i++]; ) 1 === n.nodeType && r.push(n);
                    return r;
                }
                return o;
            }, w.find.CLASS = b.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && L) return t.getElementsByClassName(e);
            }, $ = [], M = [], (b.qsa = he.test(H.querySelectorAll)) && (i(function(e) {
                q.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ee + "*(?:''|\"\")"), 
                e.querySelectorAll("[selected]").length || M.push("\\[" + ee + "*(?:value|" + Z + ")"), 
                e.querySelectorAll("[id~=" + O + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), 
                e.querySelectorAll("a#" + O + "+*").length || M.push(".#.+[+~]");
            }), i(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = H.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ee + "*[*^$|!~]?="), 
                2 !== e.querySelectorAll(":enabled").length && M.push(":enabled", ":disabled"), 
                q.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && M.push(":enabled", ":disabled"), 
                e.querySelectorAll("*,:x"), M.push(",.*:");
            })), (b.matchesSelector = he.test(P = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(e) {
                b.disconnectedMatch = P.call(e, "*"), P.call(e, "[s!='']:x"), $.push("!=", re);
            }), M = M.length && new RegExp(M.join("|")), $ = $.length && new RegExp($.join("|")), 
            t = he.test(q.compareDocumentPosition), F = t || he.test(q.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, X = t ? function(e, t) {
                if (e === t) return j = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 
                1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === H || e.ownerDocument === I && F(I, e) ? -1 : t === H || t.ownerDocument === I && F(I, t) ? 1 : S ? K(S, e) - K(S, t) : 0 : 4 & n ? -1 : 1);
            } : function(e, t) {
                if (e === t) return j = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, s = [ e ], u = [ t ];
                if (!i || !o) return e === H ? -1 : t === H ? 1 : i ? -1 : o ? 1 : S ? K(S, e) - K(S, t) : 0;
                if (i === o) return a(e, t);
                for (n = e; n = n.parentNode; ) s.unshift(n);
                for (n = t; n = n.parentNode; ) u.unshift(n);
                for (;s[r] === u[r]; ) r++;
                return r ? a(s[r], u[r]) : s[r] === I ? -1 : u[r] === I ? 1 : 0;
            }, H) : H;
        }, t.matches = function(e, n) {
            return t(e, null, null, n);
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== H && A(e), n = n.replace(ue, "='$1']"), b.matchesSelector && L && !z[n + " "] && (!$ || !$.test(n)) && (!M || !M.test(n))) try {
                var r = P.call(e, n);
                if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
            } catch (e) {}
            return t(n, H, null, [ e ]).length > 0;
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== H && A(e), F(e, t);
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== H && A(e);
            var n = w.attrHandle[t.toLowerCase()], r = n && U.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
            return void 0 !== r ? r : b.attributes || !L ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }, t.escape = function(e) {
            return (e + "").replace(xe, be);
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, t.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (j = !b.detectDuplicates, S = !b.sortStable && e.slice(0), e.sort(X), j) {
                for (;t = e[i++]; ) t === e[i] && (r = n.push(i));
                for (;r--; ) e.splice(n[r], 1);
            }
            return S = null, e;
        }, T = t.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else for (;t = e[r++]; ) n += T(t);
            return n;
        }, (w = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
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
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
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
                    var t = B[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && B(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"));
                    };
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, u) {
                        var l, c, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !u && !s, x = !1;
                        if (m) {
                            if (o) {
                                for (;g; ) {
                                    for (d = t; d = d[g]; ) if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                            }
                            if (h = [ a ? m.firstChild : m.lastChild ], a && y) {
                                for (x = (p = (l = (c = (f = (d = m)[O] || (d[O] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === R && l[1]) && l[2], 
                                d = p && m.childNodes[p]; d = ++p && d && d[g] || (x = p = 0) || h.pop(); ) if (1 === d.nodeType && ++x && d === t) {
                                    c[e] = [ R, p, x ];
                                    break;
                                }
                            } else if (y && (x = p = (l = (c = (f = (d = t)[O] || (d[O] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === R && l[1]), 
                            !1 === x) for (;(d = ++p && d && d[g] || (x = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++x || (y && ((c = (f = d[O] || (d[O] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [ R, x ]), 
                            d !== t)); ) ;
                            return (x -= i) === r || x % r == 0 && x / r >= 0;
                        }
                    };
                },
                PSEUDO: function(e, n) {
                    var i, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[O] ? o(n) : o.length > 1 ? (i = [ e, e, "", n ], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--; ) e[r = K(e, i[a])] = !(t[r] = i[a]);
                    }) : function(e) {
                        return o(e, 0, i);
                    }) : o;
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [], n = [], i = k(e.replace(oe, "$1"));
                    return i[O] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop();
                    };
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0;
                    };
                }),
                contains: r(function(e) {
                    return e = e.replace(ve, ye), function(t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > -1;
                    };
                }),
                lang: r(function(e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(), 
                    function(t) {
                        var n;
                        do {
                            if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function(e) {
                    return e === q;
                },
                focus: function(e) {
                    return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: s(!1),
                disabled: s(!0),
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
                    return !w.pseudos.empty(e);
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
                first: u(function() {
                    return [ 0 ];
                }),
                last: u(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: u(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: u(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: u(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: u(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                    return e;
                }),
                gt: u(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                })
            }
        }).pseudos.nth = w.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[x] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }(x);
        for (x in {
            submit: !0,
            reset: !0
        }) w.pseudos[x] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }(x);
        return c.prototype = w.filters = w.pseudos, w.setFilters = new c(), E = t.tokenize = function(e, n) {
            var r, i, o, a, s, u, l, c = _[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, u = [], l = w.preFilter; s; ) {
                r && !(i = ae.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), 
                r = !1, (i = se.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(oe, " ")
                }), s = s.slice(r.length));
                for (a in w.filter) !(i = fe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), 
                o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break;
            }
            return n ? s.length : s ? t.error(e) : _(e, u).slice(0);
        }, k = t.compile = function(e, t) {
            var n, r = [], i = [], o = z[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--; ) (o = v(t[n]))[O] ? r.push(o) : i.push(o);
                (o = z(e, y(i, r))).selector = e;
            }
            return o;
        }, D = t.select = function(e, t, n, r) {
            var i, o, a, s, u, c = "function" == typeof e && e, d = !r && E(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((o = d[0] = d[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && L && w.relative[o[1].type]) {
                    if (!(t = (w.find.ID(a.matches[0].replace(ve, ye), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length);
                }
                for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]); ) if ((u = w.find[s]) && (r = u(a.matches[0].replace(ve, ye), me.test(o[0].type) && l(t.parentNode) || t))) {
                    if (o.splice(i, 1), !(e = r.length && f(o))) return Q.apply(n, r), n;
                    break;
                }
            }
            return (c || k(e, d))(r, t, !L, n, !t || me.test(e) && l(t.parentNode) || t), n;
        }, b.sortStable = O.split("").sort(X).join("") === O, b.detectDuplicates = !!j, 
        A(), b.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(H.createElement("fieldset"));
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), b.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), i(function(e) {
            return null == e.getAttribute("disabled");
        }) || o(Z, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }), t;
    }(e);
    pe.find = ye, pe.expr = ye.selectors, pe.expr[":"] = pe.expr.pseudos, pe.uniqueSort = pe.unique = ye.uniqueSort, 
    pe.text = ye.getText, pe.isXMLDoc = ye.isXML, pe.contains = ye.contains, pe.escapeSelector = ye.escape;
    var xe = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
            if (i && pe(e).is(n)) break;
            r.push(e);
        }
        return r;
    }, be = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
    }, we = pe.expr.match.needsContext, Te = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, Ce = /^.[^:#\[\.,]*$/;
    pe.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? pe.find.matchesSelector(r, e) ? [ r ] : [] : pe.find.matches(e, pe.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, pe.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(pe(e).filter(function() {
                for (t = 0; t < r; t++) if (pe.contains(i[t], this)) return !0;
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) pe.find(e, i[t], n);
            return r > 1 ? pe.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0));
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && we.test(e) ? pe(e) : e || [], !1).length;
        }
    });
    var Ee, ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (pe.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || Ee, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [ null, e, null ] : ke.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof pe ? t[0] : t, pe.merge(this, pe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), 
                Te.test(r[1]) && pe.isPlainObject(t)) for (r in t) pe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return (i = te.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : pe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(pe) : pe.makeArray(e, this);
    }).prototype = pe.fn, Ee = pe(te);
    var De = /^(?:parents|prev(?:Until|All))/, Ne = {
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
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && pe(e);
            if (!we.test(e)) for (;r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pe.find.matchesSelector(n, e))) {
                o.push(n);
                break;
            }
            return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? ae.call(pe(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
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
            return xe(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return xe(e, "parentNode", n);
        },
        next: function(e) {
            return o(e, "nextSibling");
        },
        prev: function(e) {
            return o(e, "previousSibling");
        },
        nextAll: function(e) {
            return xe(e, "nextSibling");
        },
        prevAll: function(e) {
            return xe(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return xe(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return xe(e, "previousSibling", n);
        },
        siblings: function(e) {
            return be((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return be(e.firstChild);
        },
        contents: function(e) {
            return e.contentDocument || pe.merge([], e.childNodes);
        }
    }, function(e, t) {
        pe.fn[e] = function(n, r) {
            var i = pe.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = pe.filter(r, i)), 
            this.length > 1 && (Ne[e] || pe.uniqueSort(i), De.test(e) && i.reverse()), this.pushStack(i);
        };
    });
    var Se = /[^\x20\t\r\n\f]+/g;
    pe.Callbacks = function(e) {
        e = "string" == typeof e ? a(e) : pe.extend({}, e);
        var t, n, r, i, o = [], s = [], u = -1, l = function() {
            for (i = e.once, r = t = !0; s.length; u = -1) for (n = s.shift(); ++u < o.length; ) !1 === o[u].apply(n[0], n[1]) && e.stopOnFalse && (u = o.length, 
            n = !1);
            e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
        }, c = {
            add: function() {
                return o && (n && !t && (u = o.length - 1, s.push(n)), function t(n) {
                    pe.each(n, function(n, r) {
                        pe.isFunction(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== pe.type(r) && t(r);
                    });
                }(arguments), n && !t && l()), this;
            },
            remove: function() {
                return pe.each(arguments, function(e, t) {
                    for (var n; (n = pe.inArray(t, o, n)) > -1; ) o.splice(n, 1), n <= u && u--;
                }), this;
            },
            has: function(e) {
                return e ? pe.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function() {
                return o && (o = []), this;
            },
            disable: function() {
                return i = s = [], o = n = "", this;
            },
            disabled: function() {
                return !o;
            },
            lock: function() {
                return i = s = [], n || t || (o = n = ""), this;
            },
            locked: function() {
                return !!i;
            },
            fireWith: function(e, n) {
                return i || (n = [ e, (n = n || []).slice ? n.slice() : n ], s.push(n), t || l()), 
                this;
            },
            fire: function() {
                return c.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!r;
            }
        };
        return c;
    }, pe.extend({
        Deferred: function(t) {
            var n = [ [ "notify", "progress", pe.Callbacks("memory"), pe.Callbacks("memory"), 2 ], [ "resolve", "done", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", pe.Callbacks("once memory"), pe.Callbacks("once memory"), 1, "rejected" ] ], r = "pending", i = {
                state: function() {
                    return r;
                },
                always: function() {
                    return o.done(arguments).fail(arguments), this;
                },
                catch: function(e) {
                    return i.then(null, e);
                },
                pipe: function() {
                    var e = arguments;
                    return pe.Deferred(function(t) {
                        pe.each(n, function(n, r) {
                            var i = pe.isFunction(e[r[4]]) && e[r[4]];
                            o[r[1]](function() {
                                var e = i && i.apply(this, arguments);
                                e && pe.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [ e ] : arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                then: function(t, r, i) {
                    function o(t, n, r, i) {
                        return function() {
                            var l = this, c = arguments, f = function() {
                                var e, f;
                                if (!(t < a)) {
                                    if ((e = r.apply(l, c)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                    f = e && ("object" == typeof e || "function" == typeof e) && e.then, pe.isFunction(f) ? i ? f.call(e, o(a, n, s, i), o(a, n, u, i)) : (a++, 
                                    f.call(e, o(a, n, s, i), o(a, n, u, i), o(a, n, s, n.notifyWith))) : (r !== s && (l = void 0, 
                                    c = [ e ]), (i || n.resolveWith)(l, c));
                                }
                            }, d = i ? f : function() {
                                try {
                                    f();
                                } catch (e) {
                                    pe.Deferred.exceptionHook && pe.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= a && (r !== u && (l = void 0, 
                                    c = [ e ]), n.rejectWith(l, c));
                                }
                            };
                            t ? d() : (pe.Deferred.getStackHook && (d.stackTrace = pe.Deferred.getStackHook()), 
                            e.setTimeout(d));
                        };
                    }
                    var a = 0;
                    return pe.Deferred(function(e) {
                        n[0][3].add(o(0, e, pe.isFunction(i) ? i : s, e.notifyWith)), n[1][3].add(o(0, e, pe.isFunction(t) ? t : s)), 
                        n[2][3].add(o(0, e, pe.isFunction(r) ? r : u));
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? pe.extend(e, i) : i;
                }
            }, o = {};
            return pe.each(n, function(e, t) {
                var a = t[2], s = t[5];
                i[t[1]] = a.add, s && a.add(function() {
                    r = s;
                }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                }, o[t[0] + "With"] = a.fireWith;
            }), i.promise(o), t && t.call(o, o), o;
        },
        when: function(e) {
            var t = arguments.length, n = t, r = Array(n), i = re.call(arguments), o = pe.Deferred(), a = function(e) {
                return function(n) {
                    r[e] = this, i[e] = arguments.length > 1 ? re.call(arguments) : n, --t || o.resolveWith(r, i);
                };
            };
            if (t <= 1 && (l(e, o.done(a(n)).resolve, o.reject), "pending" === o.state() || pe.isFunction(i[n] && i[n].then))) return o.then();
            for (;n--; ) l(i[n], a(n), o.reject);
            return o.promise();
        }
    });
    var je = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    pe.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && je.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }, pe.readyException = function(t) {
        e.setTimeout(function() {
            throw t;
        });
    };
    var Ae = pe.Deferred();
    pe.fn.ready = function(e) {
        return Ae.then(e).catch(function(e) {
            pe.readyException(e);
        }), this;
    }, pe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? pe.readyWait++ : pe.ready(!0);
        },
        ready: function(e) {
            (!0 === e ? --pe.readyWait : pe.isReady) || (pe.isReady = !0, !0 !== e && --pe.readyWait > 0 || Ae.resolveWith(te, [ pe ]));
        }
    }), pe.ready.then = Ae.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(pe.ready) : (te.addEventListener("DOMContentLoaded", c), 
    e.addEventListener("load", c));
    var He = function(e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === pe.type(n)) {
            i = !0;
            for (s in n) He(e, t, s, n[s], !0, o, a);
        } else if (void 0 !== r && (i = !0, pe.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), 
        t = null) : (l = t, t = function(e, t, n) {
            return l.call(pe(e), n);
        })), t)) for (;s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    }, qe = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    f.uid = 1, f.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, qe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[pe.camelCase(t)] = n; else for (r in t) i[pe.camelCase(r)] = t[r];
            return i;
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][pe.camelCase(t)];
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
            void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = pe.isArray(t) ? t.map(pe.camelCase) : (t = pe.camelCase(t)) in r ? [ t ] : t.match(Se) || []).length;
                    for (;n--; ) delete r[t[n]];
                }
                (void 0 === t || pe.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !pe.isEmptyObject(t);
        }
    };
    var Le = new f(), Me = new f(), $e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Pe = /[A-Z]/g;
    pe.extend({
        hasData: function(e) {
            return Me.hasData(e) || Le.hasData(e);
        },
        data: function(e, t, n) {
            return Me.access(e, t, n);
        },
        removeData: function(e, t) {
            Me.remove(e, t);
        },
        _data: function(e, t, n) {
            return Le.access(e, t, n);
        },
        _removeData: function(e, t) {
            Le.remove(e, t);
        }
    }), pe.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Me.get(o), 1 === o.nodeType && !Le.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = pe.camelCase(r.slice(5)), 
                    p(o, r, i[r]));
                    Le.set(o, "hasDataAttrs", !0);
                }
                return i;
            }
            return "object" == typeof e ? this.each(function() {
                Me.set(this, e);
            }) : He(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Me.get(o, e))) return n;
                    if (void 0 !== (n = p(o, e))) return n;
                } else this.each(function() {
                    Me.set(this, e, t);
                });
            }, null, t, arguments.length > 1, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                Me.remove(this, e);
            });
        }
    }), pe.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Le.get(e, t), n && (!r || pe.isArray(n) ? r = Le.access(e, t, pe.makeArray(n)) : r.push(n)), 
            r || [];
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = pe.queue(e, t), r = n.length, i = n.shift(), o = pe._queueHooks(e, t), a = function() {
                pe.dequeue(e, t);
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
            delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Le.get(e, n) || Le.access(e, n, {
                empty: pe.Callbacks("once memory").add(function() {
                    Le.remove(e, [ t + "queue", n ]);
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
            var n, r = 1, i = pe.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [ o ]);
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--; ) (n = Le.get(o[a], e + "queueHooks")) && n.empty && (r++, 
            n.empty.add(s));
            return s(), i.promise(t);
        }
    });
    var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Oe = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"), Ie = [ "Top", "Right", "Bottom", "Left" ], Re = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && pe.contains(e.ownerDocument, e) && "none" === pe.css(e, "display");
    }, We = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = a[o];
        return i;
    }, Be = {};
    pe.fn.extend({
        show: function() {
            return m(this, !0);
        },
        hide: function() {
            return m(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Re(this) ? pe(this).show() : pe(this).hide();
            });
        }
    });
    var _e = /^(?:checkbox|radio)$/i, ze = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Xe = /^$|\/(?:java|ecma)script/i, Ue = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Ue.optgroup = Ue.option, Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead, 
    Ue.th = Ue.td;
    var Ve = /<|&#?\w+;/;
    !function() {
        var e = te.createDocumentFragment().appendChild(te.createElement("div")), t = te.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), 
        e.appendChild(t), de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        e.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
    }();
    var Ge = te.documentElement, Ye = /^key/, Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Je = /^([^.]*)(?:\.(.+)|)/;
    pe.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, m = Le.get(e);
            if (m) for (n.handler && (n = (o = n).handler, i = o.selector), i && pe.find.matchesSelector(Ge, i), 
            n.guid || (n.guid = pe.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                return void 0 !== pe && pe.event.triggered !== t.type ? pe.event.dispatch.apply(e, arguments) : void 0;
            }), l = (t = (t || "").match(Se) || [ "" ]).length; l--; ) p = g = (s = Je.exec(t[l]) || [])[1], 
            h = (s[2] || "").split(".").sort(), p && (f = pe.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, 
            f = pe.event.special[p] || {}, c = pe.extend({
                type: p,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && pe.expr.match.needsContext.test(i),
                namespace: h.join(".")
            }, o), (d = u[p]) || ((d = u[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), 
            f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), 
            pe.event.global[p] = !0);
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, g, m = Le.hasData(e) && Le.get(e);
            if (m && (u = m.events)) {
                for (l = (t = (t || "").match(Se) || [ "" ]).length; l--; ) if (s = Je.exec(t[l]) || [], 
                p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                    for (f = pe.event.special[p] || {}, d = u[p = (r ? f.delegateType : f.bindType) || p] || [], 
                    s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--; ) c = d[o], 
                    !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), 
                    c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || pe.removeEvent(e, p, m.handle), 
                    delete u[p]);
                } else for (p in u) pe.event.remove(e, p + t[l], n, r, !0);
                pe.isEmptyObject(u) && Le.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = pe.event.fix(e), u = new Array(arguments.length), l = (Le.get(this, "events") || {})[s.type] || [], c = pe.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = pe.event.handlers.call(this, s, l), t = 0; (i = a[t++]) && !s.isPropagationStopped(); ) for (s.currentTarget = i.elem, 
                n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped(); ) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, 
                s.data = o.data, void 0 !== (r = ((pe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), 
                s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result;
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (;l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? pe(i, this).index(l) > -1 : pe.find(i, this, null, [ l ]).length), 
                a[i] && o.push(r);
                o.length && s.push({
                    elem: l,
                    handlers: o
                });
            }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s;
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
                    if (this !== T() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === T() && this.blur) return this.blur(), !1;
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
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? b : w, 
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
        this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
        t && pe.extend(this, t), this.timeStamp = e && e.timeStamp || pe.now(), this[pe.expando] = !0;
    }, pe.Event.prototype = {
        constructor: pe.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = b, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = b, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = b, e && !this.isSimulated && e.stopImmediatePropagation(), 
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
            return null == e.which && Ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Qe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
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
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || pe.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), 
                e.type = t), n;
            }
        };
    }), pe.fn.extend({
        on: function(e, t, n, r) {
            return C(this, e, t, n, r);
        },
        one: function(e, t, n, r) {
            return C(this, e, t, n, r, 1);
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, pe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
            this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this;
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = w), 
            this.each(function() {
                pe.event.remove(this, e, n, t);
            });
        }
    });
    var Ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Ze = /<script|<style|<link/i, et = /checked\s*(?:[^=]|=\s*.checked.)/i, tt = /^true\/(.*)/, nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    pe.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ke, "<$1></$2>");
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = pe.contains(e.ownerDocument, e);
            if (!(de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || pe.isXMLDoc(e))) for (a = v(s), 
            r = 0, i = (o = v(e)).length; r < i; r++) S(o[r], a[r]);
            if (t) if (n) for (o = o || v(e), a = a || v(s), r = 0, i = o.length; r < i; r++) N(o[r], a[r]); else N(e, s);
            return (a = v(s, "script")).length > 0 && y(a, !u && v(e, "script")), s;
        },
        cleanData: function(e) {
            for (var t, n, r, i = pe.event.special, o = 0; void 0 !== (n = e[o]); o++) if (qe(n)) {
                if (t = n[Le.expando]) {
                    if (t.events) for (r in t.events) i[r] ? pe.event.remove(n, r) : pe.removeEvent(n, r, t.handle);
                    n[Le.expando] = void 0;
                }
                n[Me.expando] && (n[Me.expando] = void 0);
            }
        }
    }), pe.fn.extend({
        detach: function(e) {
            return A(this, e, !0);
        },
        remove: function(e) {
            return A(this, e);
        },
        text: function(e) {
            return He(this, function(e) {
                return void 0 === e ? pe.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        },
        append: function() {
            return j(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || E(this, e).appendChild(e);
            });
        },
        prepend: function() {
            return j(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = E(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return j(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return j(this, arguments, function(e) {
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
            return He(this, function(e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ze.test(e) && !Ue[(ze.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = pe.htmlPrefilter(e);
                    try {
                        for (;n < r; n++) 1 === (t = this[n] || {}).nodeType && (pe.cleanData(v(t, !1)), 
                        t.innerHTML = e);
                        t = 0;
                    } catch (e) {}
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var e = [];
            return j(this, arguments, function(t) {
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
            for (var n, r = [], i = pe(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), 
            pe(i[a])[t](n), oe.apply(r, n.get());
            return this.pushStack(r);
        };
    });
    var rt = /^margin/, it = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"), ot = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t);
    };
    !function() {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
                s.innerHTML = "", Ge.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, s.style.marginRight = "50%", 
                i = "4px" === t.marginRight, Ge.removeChild(a), s = null;
            }
        }
        var n, r, i, o, a = te.createElement("div"), s = te.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", 
        de.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
        a.appendChild(s), pe.extend(de, {
            pixelPosition: function() {
                return t(), n;
            },
            boxSizingReliable: function() {
                return t(), r;
            },
            pixelMarginRight: function() {
                return t(), i;
            },
            reliableMarginLeft: function() {
                return t(), o;
            }
        }));
    }();
    var at = /^(none|table(?!-c[ea]).+)/, st = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, ut = {
        letterSpacing: "0",
        fontWeight: "400"
    }, lt = [ "Webkit", "Moz", "ms" ], ct = te.createElement("div").style;
    pe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = H(e, "opacity");
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
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = pe.camelCase(t), u = e.style;
                if (t = pe.cssProps[s] || (pe.cssProps[s] = L(s) || s), a = pe.cssHooks[t] || pe.cssHooks[s], 
                void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                "string" === (o = typeof n) && (i = Oe.exec(n)) && i[1] && (n = h(e, t, i), o = "number"), 
                null != n && n === n && ("number" === o && (n += i && i[3] || (pe.cssNumber[s] ? "" : "px")), 
                de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), 
                a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n));
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = pe.camelCase(t);
            return t = pe.cssProps[s] || (pe.cssProps[s] = L(s) || s), (a = pe.cssHooks[t] || pe.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), 
            void 0 === i && (i = H(e, t, r)), "normal" === i && t in ut && (i = ut[t]), "" === n || n ? (o = parseFloat(i), 
            !0 === n || isFinite(o) ? o || 0 : i) : i;
        }
    }), pe.each([ "height", "width" ], function(e, t) {
        pe.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return !at.test(pe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? P(e, t, r) : We(e, st, function() {
                    return P(e, t, r);
                });
            },
            set: function(e, n, r) {
                var i, o = r && ot(e), a = r && $(e, t, r, "border-box" === pe.css(e, "boxSizing", !1, o), o);
                return a && (i = Oe.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = pe.css(e, t)), 
                M(e, n, a);
            }
        };
    }), pe.cssHooks.marginLeft = q(de.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(H(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
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
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; r < 4; r++) i[e + Ie[r] + t] = o[r] || o[r - 2] || o[0];
                return i;
            }
        }, rt.test(e) || (pe.cssHooks[e + t].set = M);
    }), pe.fn.extend({
        css: function(e, t) {
            return He(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (pe.isArray(t)) {
                    for (r = ot(e), i = t.length; a < i; a++) o[t[a]] = pe.css(e, t[a], !1, r);
                    return o;
                }
                return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t);
            }, e, t, arguments.length > 1);
        }
    }), pe.Tween = F, F.prototype = {
        constructor: F,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || pe.easing._default, this.options = t, 
            this.start = this.now = this.cur(), this.end = r, this.unit = o || (pe.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = F.propHooks[this.prop];
            return e && e.get ? e.get(this) : F.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = F.propHooks[this.prop];
            return this.options.duration ? this.pos = t = pe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : F.propHooks._default.set(this), this;
        }
    }, F.prototype.init.prototype = F.prototype, F.propHooks = {
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
    }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
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
    }, pe.fx = F.prototype.init, pe.fx.step = {};
    var ft, dt, pt = /^(?:toggle|show|hide)$/, ht = /queueHooks$/;
    pe.Animation = pe.extend(z, {
        tweeners: {
            "*": [ function(e, t) {
                var n = this.createTween(e, t);
                return h(n.elem, e, Oe.exec(t), n), n;
            } ]
        },
        tweener: function(e, t) {
            pe.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.match(Se);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], z.tweeners[n] = z.tweeners[n] || [], 
            z.tweeners[n].unshift(t);
        },
        prefilters: [ B ],
        prefilter: function(e, t) {
            t ? z.prefilters.unshift(e) : z.prefilters.push(e);
        }
    }), pe.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? pe.extend({}, e) : {
            complete: n || !n && t || pe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !pe.isFunction(t) && t
        };
        return pe.fx.off || te.hidden ? r.duration = 0 : "number" != typeof r.duration && (r.duration in pe.fx.speeds ? r.duration = pe.fx.speeds[r.duration] : r.duration = pe.fx.speeds._default), 
        null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            pe.isFunction(r.old) && r.old.call(this), r.queue && pe.dequeue(this, r.queue);
        }, r;
    }, pe.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Re).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(e, t, n, r) {
            var i = pe.isEmptyObject(e), o = pe.speed(t, n, r), a = function() {
                var t = z(this, pe.extend({}, e), o);
                (i || Le.get(this, "finish")) && t.stop(!0);
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n);
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), 
            this.each(function() {
                var t = !0, i = null != e && e + "queueHooks", o = pe.timers, a = Le.get(this);
                if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && ht.test(i) && r(a[i]);
                for (i = o.length; i--; ) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), 
                t = !1, o.splice(i, 1));
                !t && n || pe.dequeue(this, e);
            });
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = Le.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = pe.timers, a = r ? r.length : 0;
                for (n.finish = !0, pe.queue(this, e, []), i && i.stop && i.stop.call(this, !0), 
                t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
                o.splice(t, 1));
                for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
            });
        }
    }), pe.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = pe.fn[t];
        pe.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, r, i);
        };
    }), pe.each({
        slideDown: R("show"),
        slideUp: R("hide"),
        slideToggle: R("toggle"),
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
        pe.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r);
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
        return t = pe.fx ? pe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i);
            };
        });
    }, function() {
        var e = te.createElement("input"), t = te.createElement("select").appendChild(te.createElement("option"));
        e.type = "checkbox", de.checkOn = "" !== e.value, de.optSelected = t.selected, (e = te.createElement("input")).value = "t", 
        e.type = "radio", de.radioValue = "t" === e.value;
    }();
    var gt, mt = pe.expr.attrHandle;
    pe.fn.extend({
        attr: function(e, t) {
            return He(this, pe.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                pe.removeAttr(this, e);
            });
        }
    }), pe.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? pe.prop(e, t, n) : (1 === o && pe.isXMLDoc(e) || (i = pe.attrHooks[t.toLowerCase()] || (pe.expr.match.bool.test(t) ? gt : void 0)), 
            void 0 !== n ? null === n ? void pe.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
            n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = pe.find.attr(e, t), 
            null == r ? void 0 : r));
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
            var n, r = 0, i = t && t.match(Se);
            if (i && 1 === e.nodeType) for (;n = i[r++]; ) e.removeAttribute(n);
        }
    }), gt = {
        set: function(e, t, n) {
            return !1 === t ? pe.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, pe.each(pe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = mt[t] || pe.find.attr;
        mt[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = mt[a], mt[a] = i, i = null != n(e, t, r) ? a : null, mt[a] = o), 
            i;
        };
    });
    var vt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i;
    pe.fn.extend({
        prop: function(e, t) {
            return He(this, pe.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[pe.propFix[e] || e];
            });
        }
    }), pe.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && pe.isXMLDoc(e) || (t = pe.propFix[t] || t, 
            i = pe.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
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
            var t, n, r, i, o, a, s, u = 0;
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).addClass(e.call(this, t, U(this)));
            });
            if ("string" == typeof e && e) for (t = e.match(Se) || []; n = this[u++]; ) if (i = U(n), 
            r = 1 === n.nodeType && " " + X(i) + " ") {
                for (a = 0; o = t[a++]; ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (s = X(r)) && n.setAttribute("class", s);
            }
            return this;
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (pe.isFunction(e)) return this.each(function(t) {
                pe(this).removeClass(e.call(this, t, U(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(Se) || []; n = this[u++]; ) if (i = U(n), 
            r = 1 === n.nodeType && " " + X(i) + " ") {
                for (a = 0; o = t[a++]; ) for (;r.indexOf(" " + o + " ") > -1; ) r = r.replace(" " + o + " ", " ");
                i !== (s = X(r)) && n.setAttribute("class", s);
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : pe.isFunction(e) ? this.each(function(n) {
                pe(this).toggleClass(e.call(this, n, U(this), t), t);
            }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n) for (r = 0, i = pe(this), o = e.match(Se) || []; t = o[r++]; ) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else void 0 !== e && "boolean" !== n || ((t = U(this)) && Le.set(this, "__className__", t), 
                this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Le.get(this, "__className__") || ""));
            });
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; ) if (1 === n.nodeType && (" " + X(U(n)) + " ").indexOf(t) > -1) return !0;
            return !1;
        }
    });
    var xt = /\r/g;
    pe.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length) return r = pe.isFunction(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, pe(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : pe.isArray(i) && (i = pe.map(i, function(e) {
                        return null == e ? "" : e + "";
                    })), (t = pe.valHooks[this.type] || pe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
                });
                if (i) return (t = pe.valHooks[i.type] || pe.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, 
                "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n);
            }
        }
    }), pe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = pe.find.attr(e, "value");
                    return null != t ? t : X(pe.text(e));
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !pe.nodeName(n.parentNode, "optgroup"))) {
                        if (t = pe(n).val(), a) return t;
                        s.push(t);
                    }
                    return s;
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = pe.makeArray(t), a = i.length; a--; ) ((r = i[a]).selected = pe.inArray(pe.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
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
    var bt = /^(?:focusinfocus|focusoutblur)$/;
    pe.extend(pe.event, {
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, c, f, d = [ r || te ], p = le.call(t, "type") ? t.type : t, h = le.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || te, 3 !== r.nodeType && 8 !== r.nodeType && !bt.test(p + pe.event.triggered) && (p.indexOf(".") > -1 && (p = (h = p.split(".")).shift(), 
            h.sort()), l = p.indexOf(":") < 0 && "on" + p, t = t[pe.expando] ? t : new pe.Event(p, "object" == typeof t && t), 
            t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            t.result = void 0, t.target || (t.target = r), n = null == n ? [ t ] : pe.makeArray(n, [ t ]), 
            f = pe.event.special[p] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!i && !f.noBubble && !pe.isWindow(r)) {
                    for (u = f.delegateType || p, bt.test(u + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), 
                    s = a;
                    s === (r.ownerDocument || te) && d.push(s.defaultView || s.parentWindow || e);
                }
                for (o = 0; (a = d[o++]) && !t.isPropagationStopped(); ) t.type = o > 1 ? u : f.bindType || p, 
                (c = (Le.get(a, "events") || {})[t.type] && Le.get(a, "handle")) && c.apply(a, n), 
                (c = l && a[l]) && c.apply && qe(a) && (t.result = c.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = p, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), n) || !qe(r) || l && pe.isFunction(r[p]) && !pe.isWindow(r) && ((s = r[l]) && (r[l] = null), 
                pe.event.triggered = p, r[p](), pe.event.triggered = void 0, s && (r[l] = s)), t.result;
            }
        },
        simulate: function(e, t, n) {
            var r = pe.extend(new pe.Event(), n, {
                type: e,
                isSimulated: !0
            });
            pe.event.trigger(r, null, t);
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
                var r = this.ownerDocument || this, i = Le.access(r, t);
                i || r.addEventListener(e, n, !0), Le.access(r, t, (i || 0) + 1);
            },
            teardown: function() {
                var r = this.ownerDocument || this, i = Le.access(r, t) - 1;
                i ? Le.access(r, t, i) : (r.removeEventListener(e, n, !0), Le.remove(r, t));
            }
        };
    });
    var wt = e.location, Tt = pe.now(), Ct = /\?/;
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
    var Et = /\[\]$/, kt = /\r?\n/g, Dt = /^(?:submit|button|image|reset|file)$/i, Nt = /^(?:input|select|textarea|keygen)/i;
    pe.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = pe.isFunction(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };
        if (pe.isArray(e) || e.jquery && !pe.isPlainObject(e)) pe.each(e, function() {
            i(this.name, this.value);
        }); else for (n in e) V(n, e[n], t, i);
        return r.join("&");
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
                return this.name && !pe(this).is(":disabled") && Nt.test(this.nodeName) && !Dt.test(e) && (this.checked || !_e.test(e));
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
    var St = /%20/g, jt = /#.*$/, At = /([?&])_=[^&]*/, Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm, qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Lt = /^(?:GET|HEAD)$/, Mt = /^\/\//, $t = {}, Pt = {}, Ft = "*/".concat("*"), Ot = te.createElement("a");
    Ot.href = wt.href, pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wt.href,
            type: "GET",
            isLocal: qt.test(wt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ft,
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
            return t ? Q(Q(e, pe.ajaxSettings), t) : Q(pe.ajaxSettings, e);
        },
        ajaxPrefilter: G($t),
        ajaxTransport: G(Pt),
        ajax: function(t, n) {
            function r(t, n, r, s) {
                var l, d, p, b, w, T = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, 
                l = t >= 200 && t < 300 || 304 === t, r && (b = J(h, C, r)), b = K(h, b, C, l), 
                l ? (h.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (pe.lastModified[o] = w), 
                (w = C.getResponseHeader("etag")) && (pe.etag[o] = w)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, 
                d = b.data, l = !(p = b.error))) : (p = T, !t && T || (T = "error", t < 0 && (t = 0))), 
                C.status = t, C.statusText = (n || T) + "", l ? v.resolveWith(g, [ d, T, C ]) : v.rejectWith(g, [ C, T, p ]), 
                C.statusCode(x), x = void 0, f && m.trigger(l ? "ajaxSuccess" : "ajaxError", [ C, h, l ? d : p ]), 
                y.fireWith(g, [ C, T ]), f && (m.trigger("ajaxComplete", [ C, h ]), --pe.active || pe.event.trigger("ajaxStop")));
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, d, p, h = pe.ajaxSetup({}, n), g = h.context || h, m = h.context && (g.nodeType || g.jquery) ? pe(g) : pe.event, v = pe.Deferred(), y = pe.Callbacks("once memory"), x = h.statusCode || {}, b = {}, w = {}, T = "canceled", C = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (c) {
                        if (!s) for (s = {}; t = Ht.exec(a); ) s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return c ? a : null;
                },
                setRequestHeader: function(e, t) {
                    return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), 
                    this;
                },
                overrideMimeType: function(e) {
                    return null == c && (h.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (c) C.always(e[C.status]); else for (t in e) x[t] = [ x[t], e[t] ];
                    return this;
                },
                abort: function(e) {
                    var t = e || T;
                    return i && i.abort(t), r(0, t), this;
                }
            };
            if (v.promise(C), h.url = ((t || h.url || wt.href) + "").replace(Mt, wt.protocol + "//"), 
            h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Se) || [ "" ], 
            null == h.crossDomain) {
                l = te.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Ot.protocol + "//" + Ot.host != l.protocol + "//" + l.host;
                } catch (e) {
                    h.crossDomain = !0;
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = pe.param(h.data, h.traditional)), 
            Y($t, h, n, C), c) return C;
            (f = pe.event && h.global) && 0 == pe.active++ && pe.event.trigger("ajaxStart"), 
            h.type = h.type.toUpperCase(), h.hasContent = !Lt.test(h.type), o = h.url.replace(jt, ""), 
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(St, "+")) : (p = h.url.slice(o.length), 
            h.data && (o += (Ct.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(At, "$1"), 
            p = (Ct.test(o) ? "&" : "?") + "_=" + Tt++ + p), h.url = o + p), h.ifModified && (pe.lastModified[o] && C.setRequestHeader("If-Modified-Since", pe.lastModified[o]), 
            pe.etag[o] && C.setRequestHeader("If-None-Match", pe.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), 
            C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : h.accepts["*"]);
            for (d in h.headers) C.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, C, h) || c)) return C.abort();
            if (T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), i = Y(Pt, h, n, C)) {
                if (C.readyState = 1, f && m.trigger("ajaxSend", [ C, h ]), c) return C;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                    C.abort("timeout");
                }, h.timeout));
                try {
                    c = !1, i.send(b, r);
                } catch (e) {
                    if (c) throw e;
                    r(-1, e);
                }
            } else r(-1, "No Transport");
            return C;
        },
        getJSON: function(e, t, n) {
            return pe.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return pe.get(e, void 0, t, "script");
        }
    }), pe.each([ "get", "post" ], function(e, t) {
        pe[t] = function(e, n, r, i) {
            return pe.isFunction(n) && (i = i || r, r = n, n = void 0), pe.ajax(pe.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
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
    }, Rt = pe.ajaxSettings.xhr();
    de.cors = !!Rt && "withCredentials" in Rt, de.ajax = Rt = !!Rt, pe.ajaxTransport(function(t) {
        var n, r;
        if (de.cors || Rt && !t.crossDomain) return {
            send: function(i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(It[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()));
                    };
                }, s.onload = n(), r = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && r();
                    });
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null);
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
                send: function(r, i) {
                    t = pe("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type);
                    }), te.head.appendChild(t[0]);
                },
                abort: function() {
                    n && n();
                }
            };
        }
    });
    var Wt = [], Bt = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Wt.pop() || pe.expando + "_" + Tt++;
            return this[e] = !0, e;
        }
    }), pe.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Bt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = pe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, 
        s ? t[s] = t[s].replace(Bt, "$1" + i) : !1 !== t.jsonp && (t.url += (Ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), 
        t.converters["script json"] = function() {
            return a || pe.error(i + " was not called"), a[0];
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments;
        }, r.always(function() {
            void 0 === o ? pe(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, 
            Wt.push(i)), a && pe.isFunction(o) && o(a[0]), a = o = void 0;
        }), "script";
    }), de.createHTMLDocument = function() {
        var e = te.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
    }(), pe.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var r, i, o;
        return t || (de.createHTMLDocument ? ((r = (t = te.implementation.createHTMLDocument("")).createElement("base")).href = te.location.href, 
        t.head.appendChild(r)) : t = te), i = Te.exec(e), o = !n && [], i ? [ t.createElement(i[1]) ] : (i = x([ e ], t, o), 
        o && o.length && pe(o).remove(), pe.merge([], i.childNodes));
    }, pe.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = X(e.slice(s)), e = e.slice(0, s)), pe.isFunction(t) ? (n = t, 
        t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && pe.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? pe("<div>").append(pe.parseHTML(e)).find(r) : e);
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [ e.responseText, t, e ]);
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
            var r, i, o, a, s, u, l = pe.css(e, "position"), c = pe(e), f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = pe.css(e, "top"), 
            u = pe.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, 
            i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))), 
            null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), 
            "using" in t ? t.using.call(e, f) : c.css(f);
        }
    }, pe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                pe.offset.setOffset(this, e, t);
            });
            var t, n, r, i, o = this[0];
            if (o) return o.getClientRects().length ? (r = o.getBoundingClientRect(), r.width || r.height ? (i = o.ownerDocument, 
            n = Z(i), t = i.documentElement, {
                top: r.top + n.pageYOffset - t.clientTop,
                left: r.left + n.pageXOffset - t.clientLeft
            }) : r) : {
                top: 0,
                left: 0
            };
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === pe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), pe.nodeName(e[0], "html") || (r = e.offset()), r = {
                    top: r.top + pe.css(e[0], "borderTopWidth", !0),
                    left: r.left + pe.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - r.top - pe.css(n, "marginTop", !0),
                    left: t.left - r.left - pe.css(n, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === pe.css(e, "position"); ) e = e.offsetParent;
                return e || Ge;
            });
        }
    }), pe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        pe.fn[e] = function(r) {
            return He(this, function(e, r, i) {
                var o = Z(e);
                if (void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
            }, e, r, arguments.length);
        };
    }), pe.each([ "top", "left" ], function(e, t) {
        pe.cssHooks[t] = q(de.pixelPosition, function(e, n) {
            if (n) return n = H(e, t), it.test(n) ? pe(e).position()[t] + "px" : n;
        });
    }), pe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        pe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            pe.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i), s = n || (!0 === i || !0 === o ? "margin" : "border");
                return He(this, function(t, n, i) {
                    var o;
                    return pe.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, 
                    Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? pe.css(t, n, s) : pe.style(t, n, i, s);
                }, t, a ? i : void 0, a);
            };
        });
    }), pe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    }), pe.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return pe;
    });
    var _t = e.jQuery, zt = e.$;
    return pe.noConflict = function(t) {
        return e.$ === pe && (e.$ = zt), t && e.jQuery === pe && (e.jQuery = _t), pe;
    }, t || (e.jQuery = e.$ = pe), pe;
}), $(document).ready(function() {
    function e(e) {
        var t = $(".muestraHorarioMP tbody tr").length + 1, n = '<tr id="filaMP' + t + '">';
        return n += "<td>" + t + "</td>", n += "<td>" + e.dateS + "</td>", n += "<td>" + e.inicio + "</td>", 
        n += "<td>" + e.termino + "</td>", n += '<td><div class="elimiFile"> <a> Eliminar </a> </div></td>', 
        n += "</tr>";
    }
    function t(e) {
        var t = e.target.files[0], r = /image.*/;
        if (t.type.match(r)) {
            var i = new FileReader();
            i.onload = n, i.readAsDataURL(t);
        }
    }
    function n(e) {
        var t = e.target.result;
        $(".prevImageMP").css("display", "block");
        var n = $(".prevImageMP").width() / 15 * 9;
        $(".showImgMP").css({
            height: n + "px"
        }), $(".showImgMP").css({
            width: n + "px"
        }), $("#imgExitMP").attr("src", t);
    }
    function r(e) {
        var t = $(".muestraHorarioME tbody tr").length + 1, n = '<tr id="filaME' + t + '">';
        return n += "<td>" + t + "</td>", n += "<td>" + e.dateS + "</td>", n += "<td>" + e.inicio + "</td>", 
        n += "<td>" + e.termino + "</td>", n += '<td><div class="elimiFile"> <a> Eliminar </a> </div></td>', 
        n += "</tr>";
    }
    function i(e) {
        var t = e.target.files[0], n = /image.*/;
        if (t.type.match(n)) {
            var r = new FileReader();
            r.onload = o, r.readAsDataURL(t);
        }
    }
    function o(e) {
        var t = e.target.result;
        $(".prevImageME").css("display", "block");
        var n = $(".prevImageME").width() / 15 * 9;
        $(".showImgME").css({
            height: n + "px"
        }), $(".showImgME").css({
            width: n + "px"
        }), $("#imgExitME").attr("src", t);
    }
    $(".agregarPeriodoMP a").on("click", function(t) {
        t.preventDefault(), $(this).prop("disabled", !1);
        var n = "", r = "", i = "";
        if (r += $("#HoraInicioMP").val(), i += $("#HoraTerminoMP").val(), "" != (n += $("#calendario").multiDatesPicker("getDates")) && "" != r && "" != i) {
            $(".muestraHorarioMP").css("display", "block");
            for (var o = n.split(","), a = '<div class="selHour"> <select id="time"' + o[0] + ">", s = 0; s < o.length; s++) a += '<option value="' + o[s] + '">' + o[s] + "</option>";
            var u = e({
                dateS: a += "</select> </div>",
                inicio: $("#HoraInicioMP").val(),
                termino: $("#HoraTerminoMP").val()
            });
            $(".muestraHorarioMP table tbody").append(u), $("#calendario").multiDatesPicker("resetDates", "picked");
        } else alert("Ingrese datos antes");
    }), $(".muestraHorarioMP").on("click", "tbody tr .elimiFile", function(e) {
        e.preventDefault(), $(this).closest("tr").remove();
        var t, n, r = [], i = -1;
        $(".muestraHorarioMP tbody tr").each(function() {
            $(this).find("td").each(function() {
                r[++i] = $(this).html();
            });
        });
        var o = r.length;
        if (i > 0) {
            for (n = 0, i = 0; i <= o; i += 5) if (n++, (t = parseInt(r[i])) != n && t > 0) {
                var a = "#filaMP" + t, s = '<tr id="filaMP' + n + '">';
                s += "<td>" + n + "</td>", s += "<td>" + r[i + 1] + "</td>", s += "<td>" + r[i + 2] + "</td>", 
                s += "<td>" + r[i + 3] + "</td>", s += '<td><div class="elimiFile"> <a> Eliminar </a> </div></td>', 
                s += "</tr>", $(".muestraHorarioMP table tbody").append(s), $(a).closest("tr").remove();
            }
        } else $(".muestraHorarioMP").css("display", "none");
    }), $("#fileInputMP").change(function(e) {
        t(e);
    }), $(".agregarPeriodoME a").on("click", function(e) {
        e.preventDefault(), $(this).prop("disabled", !1);
        var t = "", n = "", i = "";
        if (n += $("#HoraInicioME").val(), i += $("#HoraTerminoME").val(), "" != (t += $("#calendario").multiDatesPicker("getDates")) && "" != n && "" != i) {
            $(".muestraHorarioME").css("display", "block");
            for (var o = t.split(","), a = '<div class="selHour"> <select id="time"' + o[0] + ">", s = 0; s < o.length; s++) a += '<option value="' + o[s] + '">' + o[s] + "</option>";
            var u = r({
                dateS: a += "</select> </div>",
                inicio: $("#HoraInicioME").val(),
                termino: $("#HoraTerminoME").val()
            });
            $(".muestraHorarioME table tbody").append(u), $("#calendario").multiDatesPicker("resetDates", "picked");
        } else alert("Ingrese datos antes");
    }), $(".muestraHorarioME").on("click", "tbody tr .elimiFile", function(e) {
        e.preventDefault(), $(this).closest("tr").remove();
        var t, n, r = [], i = -1;
        $(".muestraHorarioME tbody tr").each(function() {
            $(this).find("td").each(function() {
                r[++i] = $(this).html();
            });
        });
        var o = r.length;
        if (i > 0) {
            for (n = 0, i = 0; i <= o; i += 5) if (n++, (t = parseInt(r[i])) != n && t > 0) {
                var a = "#filaME" + t, s = '<tr id="filaME' + n + '">';
                s += "<td>" + n + "</td>", s += "<td>" + r[i + 1] + "</td>", s += "<td>" + r[i + 2] + "</td>", 
                s += "<td>" + r[i + 3] + "</td>", s += '<td><div class="elimiFile"> <a> Eliminar </a> </div></td>', 
                s += "</tr>", $(".muestraHorarioME table tbody").append(s), $(a).closest("tr").remove();
            }
        } else $(".muestraHorarioME").css("display", "none");
    }), $("#fileInputME").change(function(e) {
        i(e);
    });
});