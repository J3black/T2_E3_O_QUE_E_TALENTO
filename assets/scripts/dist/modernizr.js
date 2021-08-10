/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-touchevents-mq-setclasses-shiv !*/
! function (e, t, n) {
    function o(e, t) {
        return typeof e === t
    }

    function a() {
        var e, t, n, a, r, i, s;
        for (var c in u)
            if (u.hasOwnProperty(c)) {
                if (e = [], t = u[c], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (a = o(t.fn, "function") ? t.fn() : t.fn, r = 0; r < e.length; r++) i = e[r], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = a : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = a), l.push((a ? "" : "no-") + s.join("-"))
            }
    }

    function r(e) {
        var t = f.className,
            n = Modernizr._config.classPrefix || "";
        if (m && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var o = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(o, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), m ? f.className.baseVal = t : f.className = t)
    }

    function i() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : m ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function s() {
        var e = t.body;
        return e || (e = i(m ? "svg" : "body"), e.fake = !0), e
    }

    function c(e, n, o, a) {
        var r, c, l, u, d = "modernizr",
            m = i("div"),
            h = s();
        if (parseInt(o, 10))
            for (; o--;) l = i("div"), l.id = a ? a[o] : d + (o + 1), m.appendChild(l);
        return r = i("style"), r.type = "text/css", r.id = "s" + d, (h.fake ? h : m).appendChild(r), h.appendChild(m), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(t.createTextNode(e)), m.id = d, h.fake && (h.style.background = "", h.style.overflow = "hidden", u = f.style.overflow, f.style.overflow = "hidden", f.appendChild(h)), c = n(m, e), h.fake ? (h.parentNode.removeChild(h), f.style.overflow = u, f.offsetHeight) : m.parentNode.removeChild(m), !!c
    }
    var l = [],
        u = [],
        d = {
            _version: "3.3.1",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function (e, t) {
                var n = this;
                setTimeout(function () {
                    t(n[e])
                }, 0)
            },
            addTest: function (e, t, n) {
                u.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function (e) {
                u.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function () {};
    Modernizr.prototype = d, Modernizr = new Modernizr;
    var f = t.documentElement,
        m = "svg" === f.nodeName.toLowerCase();
    m || ! function (e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                o = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", o.insertBefore(n.lastChild, o.firstChild)
        }

        function o() {
            var e = E.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function a(e, t) {
            var n = E.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), E.elements = n + " " + e, l(t)
        }

        function r(e) {
            var t = y[e[v]];
            return t || (t = {}, g++, e[v] = g, y[g] = t), t
        }

        function i(e, n, o) {
            if (n || (n = t), d) return n.createElement(e);
            o || (o = r(n));
            var a;
            return a = o.cache[e] ? o.cache[e].cloneNode() : p.test(e) ? (o.cache[e] = o.createElem(e)).cloneNode() : o.createElem(e), !a.canHaveChildren || h.test(e) || a.tagUrn ? a : o.frag.appendChild(a)
        }

        function s(e, n) {
            if (e || (e = t), d) return e.createDocumentFragment();
            n = n || r(e);
            for (var a = n.frag.cloneNode(), i = 0, s = o(), c = s.length; c > i; i++) a.createElement(s[i]);
            return a
        }

        function c(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                return E.shivMethods ? i(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + o().join().replace(/[\w\-:]+/g, function (e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(E, t.frag)
        }

        function l(e) {
            e || (e = t);
            var o = r(e);
            return !E.shivCSS || u || o.hasCSS || (o.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), d || c(e, o), e
        }
        var u, d, f = "3.7.3",
            m = e.html5 || {},
            h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            v = "_html5shiv",
            g = 0,
            y = {};
        ! function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", u = "hidden" in e, d = 1 == e.childNodes.length || function () {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                u = !0, d = !0
            }
        }();
        var E = {
            elements: m.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: f,
            shivCSS: m.shivCSS !== !1,
            supportsUnknownElements: d,
            shivMethods: m.shivMethods !== !1,
            type: "default",
            shivDocument: l,
            createElement: i,
            createDocumentFragment: s,
            addElements: a
        };
        e.html5 = E, l(t), "object" == typeof module && module.exports && (module.exports = E)
    }("undefined" != typeof e ? e : this, t);
    var h = function () {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function (e) {
            var n = t(e);
            return n && n.matches || !1
        } : function (t) {
            var n = !1;
            return c("@media " + t + " { #modernizr { position: absolute; } }", function (t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            }), n
        }
    }();
    d.mq = h;
    var p = d._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    d._prefixes = p;
    var v = d.testStyles = c;
    Modernizr.addTest("touchevents", function () {
        var n;
        if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;
        else {
            var o = ["@media (", p.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            v(o, function (e) {
                n = 9 === e.offsetTop
            })
        }
        return n
    }), a(), r(l), delete d.addTest, delete d.addAsyncTest;
    for (var g = 0; g < Modernizr._q.length; g++) Modernizr._q[g]();
    e.Modernizr = Modernizr
}(window, document);