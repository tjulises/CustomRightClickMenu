/*
 * Original can be found at https://github.com/SanderRonde/CustomRightClickMenu 
 * This code may only be used under the MIT style license found in the LICENSE.txt file 
**/
"use notstrict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? typeof Object['setPrototype' + 'Of'] === 'function'?Object['setPrototype' + 'Of'](subClass,superClass):subClass.__proto__ = superClass : subClass.__proto__ = superClass; }

!function (e) {
  var r = e.babelHelpers = {};r["typeof"] = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return typeof e === "undefined" ? "undefined" : _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
  }, r.classCallCheck = function (e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
  }, r.createClass = function () {
    function e(e, r) {
      for (var t = 0; t < r.length; t++) {
        var n = r[t];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }return function (r, t, n) {
      return t && e(r.prototype, t), n && e(r, n), r;
    };
  }(), r.defineEnumerableProperties = function (e, r) {
    for (var t in r) {
      var n = r[t];n.configurable = n.enumerable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, t, n);
    }return e;
  }, r.defaults = function (e, r) {
    for (var t = Object.getOwnPropertyNames(r), n = 0; n < t.length; n++) {
      var o = t[n],
          i = Object.getOwnPropertyDescriptor(r, o);i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i);
    }return e;
  }, r.defineProperty = function (e, r, t) {
    return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
  }, r["extends"] = Object.assign || function (e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];for (var n in t) {
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
    }return e;
  }, r.get = function e(r, t, n) {
    null === r && (r = Function.prototype);var o = Object.getOwnPropertyDescriptor(r, t);if (void 0 === o) {
      var i = Object.getPrototypeOf(r);return null === i ? void 0 : e(i, t, n);
    }if ("value" in o) return o.value;var a = o.get;if (void 0 !== a) return a.call(n);
  }, r.inherits = function (e, r) {
    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + (typeof r === "undefined" ? "undefined" : _typeof(r)));e.prototype = Object.create(r && r.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? typeof Object['setPrototype' + 'Of'] === 'function'?Object['setPrototype' + 'Of'](e,r):e.__proto__ = r : e.__proto__ = r);
  }, r["instanceof"] = function (e, r) {
    return null != r && "undefined" != typeof Symbol && r[Symbol.hasInstance] ? r[Symbol.hasInstance](e) : e instanceof r;
  }, r.newArrowCheck = function (e, r) {
    if (e !== r) throw new TypeError("Cannot instantiate an arrow function");
  }, r.objectDestructuringEmpty = function (e) {
    if (null == e) throw new TypeError("Cannot destructure undefined");
  }, r.objectWithoutProperties = function (e, r) {
    var t = {};for (var n in e) {
      r.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }return t;
  }, r.possibleConstructorReturn = function (e, r) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !r || "object" != (typeof r === "undefined" ? "undefined" : _typeof(r)) && "function" != typeof r ? e : r;
  }, r.set = function e(r, t, n, o) {
    var i = Object.getOwnPropertyDescriptor(r, t);if (void 0 === i) {
      var a = Object.getPrototypeOf(r);null !== a && e(a, t, n, o);
    } else if ("value" in i && i.writable) i.value = n;else {
      var u = i.set;void 0 !== u && u.call(o, n);
    }return n;
  }, r.slicedToArray = function () {
    function e(e, r) {
      var t = [],
          n = !0,
          o = !1,
          i = void 0;try {
        for (var a, u = e[Symbol.iterator](); !(n = (a = u.next()).done) && (t.push(a.value), !r || t.length !== r); n = !0) {}
      } catch (e) {
        o = !0, i = e;
      } finally {
        try {
          !n && u["return"] && u["return"]();
        } finally {
          if (o) throw i;
        }
      }return t;
    }return function (r, t) {
      if (Array.isArray(r)) return r;if (Symbol.iterator in Object(r)) return e(r, t);throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }(), r.taggedTemplateLiteral = function (e, r) {
    return Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(r) } }));
  }, r.temporalRef = function (e, r, t) {
    if (e === t) throw new ReferenceError(r + " is not defined - temporal dead zone");return e;
  }, r.temporalUndefined = {}, r.toArray = function (e) {
    return Array.isArray(e) ? e : Array.from(e);
  }, r.toConsumableArray = function (e) {
    if (Array.isArray(e)) {
      for (var r = 0, t = Array(e.length); r < e.length; r++) {
        t[r] = e[r];
      }return t;
    }return Array.from(e);
  };
}("undefined" == typeof global ? self : global);
(function () {
  'use notstrict';

  (function () {
    'use notstrict';
    if (!window.customElements) return;var a = window.HTMLElement,
        b = window.customElements.define,
        c = window.customElements.get,
        d = new Map(),
        e = new Map();var f = !1,
        g = !1;window.HTMLElement = function () {
      if (!f) {
        var _a = d.get(this.constructor),
            _b = c.call(window.customElements, _a);g = !0;var _e2 = new _b();return _e2;
      }f = !1;
    }, window.HTMLElement.prototype = a.prototype;Object.defineProperty(window, 'customElements', { value: window.customElements, configurable: !0, writable: !0 }), Object.defineProperty(window.customElements, 'define', { value: function value(c, h) {
        var i = h.prototype,
            j = function (_a2) {
          _inherits(j, _a2);

          function j() {
            var _this2;

            _classCallCheck(this, j);

            (_this2 = _possibleConstructorReturn(this, (j.__proto__ || Object.getPrototypeOf(j)).call(this)), _this2), typeof Object['setPrototype' + 'Of'] === 'function'?Object['setPrototype' + 'Of'](_this2,i):_this2.__proto__ = i, g || (f = !0, h.call(_this2)), g = !1;return _this2;
          }

          return j;
        }(a),
            k = j.prototype;j.observedAttributes = h.observedAttributes, k.connectedCallback = i.connectedCallback, k.disconnectedCallback = i.disconnectedCallback, k.attributeChangedCallback = i.attributeChangedCallback, k.adoptedCallback = i.adoptedCallback, d.set(h, c), e.set(c, h), b.call(window.customElements, c, j);
      }, configurable: !0, writable: !0 }), Object.defineProperty(window.customElements, 'get', { value: function value(a) {
        return e.get(a);
      }, configurable: !0, writable: !0 });
  })();

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
})();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

(function () {
  'use notstrict';
  // global for (1) existence means `WebComponentsReady` will file,
  // (2) WebComponents.ready == true means event has fired.

  window.WebComponents = window.WebComponents || {};
  var name = 'webcomponents-loader.js';
  // Feature detect which polyfill needs to be imported.
  var polyfills = [];
  if (!('import' in document.createElement('link'))) {
    polyfills.push('hi');
  }
  if (!('attachShadow' in Element.prototype && 'getRootNode' in Element.prototype) || window.ShadyDOM && window.ShadyDOM.force) {
    polyfills.push('sd');
  }
  if (!window.customElements || window.customElements.forcePolyfill) {
    polyfills.push('ce');
  }
  // NOTE: any browser that does not have template or ES6 features
  // must load the full suite (called `lite` for legacy reasons) of polyfills.
  if (!('content' in document.createElement('template')) || !window.Promise || !Array.from ||
  // Edge has broken fragment cloning which means you cannot clone template.content
  !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment)) {
    polyfills = ['lite'];
  }

  if (polyfills.length) {
    var script = document.querySelector('script[src*="' + name + '"]');
    var newScript = document.createElement('script');
    // Load it from the right place.
    var replacement = 'webcomponents-' + polyfills.join('-') + '.js';
    var url = script.src.replace(name, replacement);
    newScript.src = url;
    // NOTE: this is required to ensure the polyfills are loaded before
    // *native* html imports load on older Chrome versions. This *is* CSP
    // compliant since CSP rules must have allowed this script to run.
    // In all other cases, this can be async.
    if (document.readyState === 'loading' && 'import' in document.createElement('link')) {
      document.write(newScript.outerHTML);
    } else {
      document.head.appendChild(newScript);
    }
  } else {
    // Ensure `WebComponentsReady` is fired also when there are no polyfills loaded.
    // however, we have to wait for the document to be in 'interactive' state,
    // otherwise a rAF may fire before scripts in <body>

    var fire = function fire() {
      requestAnimationFrame(function () {
        window.WebComponents.ready = true;
        document.dispatchEvent(new CustomEvent('WebComponentsReady', { bubbles: true }));
      });
    };

    if (document.readyState !== 'loading') {
      fire();
    } else {
      document.addEventListener('readystatechange', function wait() {
        fire();
        document.removeEventListener('readystatechange', wait);
      });
    }
  }
})();
(function () {
  "use notstrict";
  function b() {
    this.end = this.start = 0, this.rules = this.parent = this.previous = null, this.cssText = this.parsedCssText = "", this.atRule = !1, this.type = 0, this.parsedSelector = this.selector = this.keyframesName = "";
  }function c(j) {
    j = j.replace(v, "").replace(K, "");var a = j,
        c = new b();c.start = 0, c.end = a.length;for (var d = c, e = 0, f = a.length; e < f; e++) {
      if ("{" === a[e]) {
        d.rules || (d.rules = []);var h = d,
            g = h.rules[h.rules.length - 1] || null;d = new b(), d.start = e + 1, d.parent = h, d.previous = g, h.rules.push(d);
      } else "}" === a[e] && (d.end = e + 1, d = d.parent || c);
    }return i(c, j);
  }function i(h, a) {
    var b = a.substring(h.start, h.end - 1);if (h.parsedCssText = h.cssText = b.trim(), h.parent && (b = a.substring(h.previous ? h.previous.end : h.parent.start, h.start - 1), b = g(b), b = b.replace(V, " "), b = b.substring(b.lastIndexOf(";") + 1), b = h.parsedSelector = h.selector = b.trim(), h.atRule = 0 === b.indexOf("@"), h.atRule ? 0 === b.indexOf("@media") ? h.type = u : b.match(U) && (h.type = x, h.keyframesName = h.selector.split(V).pop()) : h.type = 0 === b.indexOf("--") ? t : k), b = h.rules) for (var c, f = 0, d = b.length; f < d && (c = b[f]); f++) {
      i(c, a);
    }return h;
  }function g(b) {
    return b.replace(/\\([0-9a-f]{1,6})\s/gi, function (b, a) {
      for (b = a, a = 6 - b.length; a--;) {
        b = "0" + b;
      }return "\\" + b;
    });
  }function j(i, a, b) {
    b = void 0 === b ? "" : b;var c = "";if (i.cssText || i.rules) {
      var d,
          f = i.rules;if ((d = f) && (d = f[0], d = !(d && d.selector && 0 === d.selector.indexOf("--"))), d) {
        d = 0;for (var e, g = f.length; d < g && (e = f[d]); d++) {
          c = j(e, a, c);
        }
      } else a ? a = i.cssText : (a = i.cssText, a = a.replace(L, "").replace(N, ""), a = a.replace(O, "").replace(P, "")), (c = a.trim()) && (c = "  " + c + "\n");
    }return c && (i.selector && (b += i.selector + " {\n"), b += c, i.selector && (b += "}\n\n")), b;
  }function d(b) {
    (b = B[b]) && (b._applyShimCurrentVersion = b._applyShimCurrentVersion || 0, b._applyShimValidatingVersion = b._applyShimValidatingVersion || 0, b._applyShimNextVersion = (b._applyShimNextVersion || 0) + 1);
  }function e(b) {
    return b._applyShimCurrentVersion === b._applyShimNextVersion;
  }function f(b) {
    b._applyShimValidatingVersion = b._applyShimNextVersion, b.a || (b.a = !0, r.then(function () {
      b._applyShimCurrentVersion = b._applyShimNextVersion, b.a = !1;
    }));
  }function a(b) {
    J = b && b.shimcssproperties ? !1 : W || !navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) && window.CSS && CSS.supports && CSS.supports("box-shadow", "0 0 0 var(--foo)");
  }function h(b) {
    return b ? ("string" === typeof b && (b = c(b)), j(b, X)) : "";
  }function l(b) {
    return !b.__cssRules && b.textContent && (b.__cssRules = c(b.textContent)), b.__cssRules || null;
  }function m(i, a, b, c) {
    if (i) {
      var d = !1,
          j = i.type;if (c && j === u) {
        var f = i.selector.match(G);f && (window.matchMedia(f[1]).matches || (d = !0));
      }if (j === k ? a(i) : b && j === x ? b(i) : j === t && (d = !0), (i = i.rules) && !d) {
        d = 0, j = i.length;for (var h; d < j && (h = i[d]); d++) {
          m(h, a, b, c);
        }
      }
    }
  }function n(g, a) {
    var b = g.indexOf("var(");if (-1 === b) return a(g, "", "", "");a: {
      for (var c = 0, d = b + 3, e = g.length; d < e; d++) {
        if ("(" === g[d]) c++;else if (")" === g[d] && 0 === --c) break a;
      }d = -1;
    }return c = g.substring(b + 4, d), b = g.substring(0, b), g = n(g.substring(d + 1), a), d = c.indexOf(","), -1 === d ? a(b, c.trim(), "", g) : a(b, c.substring(0, d).trim(), c.substring(d + 1).trim(), g);
  }function o() {
    this.a = {};
  }function p() {
    this.b = this.c = null, this.a = new o();
  }function q(c, a) {
    return a = a.replace(Y, function (a, b, d, e) {
      return w(c, a, b, d, e);
    }), s(c, a);
  }function s(i, a) {
    for (var b; b = F.exec(a);) {
      var c = b[0],
          d = b[1];b = b.index;var e = a.slice(0, b + c.indexOf("@apply"));a = a.slice(b + c.length);var f = y(i, e);c = void 0;var h = i;d = d.replace($, "");var g = [],
          j = h.a.get(d);if (j || (h.a.set(d, {}), j = h.a.get(d)), j) for (c in h.c && (j.i[h.c] = !0), j.h) {
        h = f && f[c], j = [c, ": var(", d, "_-_", c], h && j.push(",", h), j.push(")"), g.push(j.join(""));
      }c = g.join("; "), a = "" + e + c + a, F.lastIndex = b + c.length;
    }return a;
  }function y(i, a) {
    a = a.split(";");for (var b, c, d, h = {}, e = 0; e < a.length; e++) {
      if ((b = a[e]) && (d = b.split(":"), 1 < d.length)) {
        b = d[0].trim();var f = i;c = b, d = d.slice(1).join(":");var g = _.exec(d);g && (g[1] ? (f.b || (f.b = document.createElement("meta"), f.b.setAttribute("apply-shim-measure", ""), f.b.style.all = "initial", document.head.appendChild(f.b)), c = window.getComputedStyle(f.b).getPropertyValue(c)) : c = "apply-shim-inherit", d = c), c = d, h[b] = c;
      }
    }return h;
  }function z(d, a) {
    if (aa) for (var b in a.i) {
      b !== d.c && aa(b);
    }
  }function w(i, a, b, c, d) {
    if (c && n(c, function (a, b) {
      b && i.a.get(b) && (d = "@apply " + b + ";");
    }), !d) return a;var j = s(i, d),
        f = a.slice(0, a.indexOf("--")),
        h = j = y(i, j),
        g = i.a.get(b),
        k = g && g.h;k ? h = Object.assign(Object.create(k), j) : i.a.set(b, h);var m,
        o = [],
        p = !1;for (m in h) {
      var q = j[m];void 0 === q && (q = "initial"), !k || m in k || (p = !0), o.push("" + b + "_-_" + m + ": " + q);
    }return p && z(i, g), g && (g.h = h), c && (f = a + ";" + f), "" + f + o.join("; ") + ";";
  }function C(b) {
    requestAnimationFrame(function () {
      Q ? Q(b) : (S || (S = new Promise(function (b) {
        M = b;
      }), "complete" === document.readyState ? M() : document.addEventListener("readystatechange", function () {
        "complete" === document.readyState && M();
      })), S.then(function () {
        b && b();
      }));
    });
  }function D() {
    var b = this;this.a = null, C(function () {
      H(b);
    }), R.invalidCallback = d;
  }function H(b) {
    b.a || (b.a = window.ShadyCSS.CustomStyleInterface, b.a && (b.a.transformCallback = function (b) {
      R.f(b);
    }, b.a.validateCallback = function () {
      requestAnimationFrame(function () {
        b.a.enqueued && I(b);
      });
    }));
  }function I(e) {
    if (H(e), e.a) {
      var a = e.a.processStyles();if (e.a.enqueued) {
        for (var b, d = 0; d < a.length; d++) {
          b = e.a.getStyleForCustomStyle(a[d]), b && R.f(b);
        }e.a.enqueued = !1;
      }
    }
  }var J,
      B = {},
      k = 1,
      x = 7,
      u = 4,
      t = 1E3,
      v = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
      K = /@import[^;]*;/gim,
      L = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
      N = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
      O = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
      P = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
      U = /^@[^\s]*keyframes/,
      V = /\s+/g,
      r = Promise.resolve(),
      W = !(window.ShadyDOM && window.ShadyDOM.inUse);window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? J = window.ShadyCSS.nativeCss : window.ShadyCSS ? (a(window.ShadyCSS), window.ShadyCSS = void 0) : a(window.WebComponents && window.WebComponents.flags);var X = J,
      Y = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
      F = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
      G = /@media\s(.*)/,
      $ = /;\s*/m,
      _ = /^\s*(initial)|(inherit)\s*$/;o.prototype.set = function (c, a) {
    c = c.trim(), this.a[c] = { h: a, i: {} };
  }, o.prototype.get = function (b) {
    return b = b.trim(), this.a[b] || null;
  };var aa = null;p.prototype.o = function (b) {
    return b = F.test(b) || Y.test(b), F.lastIndex = 0, Y.lastIndex = 0, b;
  }, p.prototype.m = function (d, a) {
    d = d.content.querySelector("style");var b = null;return d && (b = this.j(d, a)), b;
  }, p.prototype.j = function (d, a) {
    a = void 0 === a ? "" : a;var b = l(d);return this.l(b, a), d.textContent = h(b), b;
  }, p.prototype.f = function (d) {
    var e = this,
        a = l(d);return m(a, function (b) {
      ":root" === b.selector && (b.selector = "html"), e.g(b);
    }), d.textContent = h(a), a;
  }, p.prototype.l = function (d, a) {
    var b = this;this.c = a, m(d, function (c) {
      b.g(c);
    }), this.c = null;
  }, p.prototype.g = function (b) {
    b.cssText = q(this, b.parsedCssText), ":root" === b.selector && (b.selector = ":host > *");
  }, p.prototype.detectMixin = p.prototype.o, p.prototype.transformStyle = p.prototype.j, p.prototype.transformCustomStyle = p.prototype.f, p.prototype.transformRules = p.prototype.l, p.prototype.transformRule = p.prototype.g, p.prototype.transformTemplate = p.prototype.m, p.prototype._separator = "_-_", Object.defineProperty(p.prototype, "invalidCallback", { get: function get() {
      return aa;
    }, set: function set(b) {
      aa = b;
    } });var M,
      S = null,
      Q = window.HTMLImports && window.HTMLImports.whenReady || null,
      R = new p();if (D.prototype.prepareTemplate = function (c, a) {
    H(this), B[a] = c, a = R.m(c, a), c._styleAst = a;
  }, D.prototype.styleSubtree = function (d, a) {
    if (H(this), a) for (var b in a) {
      null === b ? d.style.removeProperty(b) : d.style.setProperty(b, a[b]);
    }if (d.shadowRoot) for (this.styleElement(d), d = d.shadowRoot.children || d.shadowRoot.childNodes, a = 0; a < d.length; a++) {
      this.styleSubtree(d[a]);
    } else for (d = d.children || d.childNodes, a = 0; a < d.length; a++) {
      this.styleSubtree(d[a]);
    }
  }, D.prototype.styleElement = function (d) {
    H(this);var a,
        c = d.localName;a = c ? -1 < c.indexOf("-") ? c : d.getAttribute && d.getAttribute("is") || "" : d.is, (c = B[a]) && !e(c) && ((e(c) || c._applyShimValidatingVersion !== c._applyShimNextVersion) && (this.prepareTemplate(c, a), f(c)), (d = d.shadowRoot) && (d = d.querySelector("style")) && (d.__cssRules = c._styleAst, d.textContent = h(c._styleAst)));
  }, D.prototype.styleDocument = function (b) {
    H(this), this.styleSubtree(document.body, b);
  }, !window.ShadyCSS || !window.ShadyCSS.ScopingShim) {
    var T = new D(),
        Z = window.ShadyCSS && window.ShadyCSS.CustomStyleInterface;window.ShadyCSS = { prepareTemplate: function prepareTemplate(c, a) {
        I(T), T.prepareTemplate(c, a);
      }, styleSubtree: function styleSubtree(c, a) {
        I(T), T.styleSubtree(c, a);
      }, styleElement: function styleElement(b) {
        I(T), T.styleElement(b);
      }, styleDocument: function styleDocument(b) {
        I(T), T.styleDocument(b);
      }, getComputedStyleValue: function getComputedStyleValue(c, a) {
        return (c = window.getComputedStyle(c).getPropertyValue(a)) ? c.trim() : "";
      }, nativeCss: X, nativeShadow: W }, Z && (window.ShadyCSS.CustomStyleInterface = Z);
  }window.ShadyCSS.ApplyShim = R;
}).call(undefined);
(function () {
  'use notstrict';
  var a = window.Polymer;window.Polymer = function (a) {
    return window.Polymer._polymerFn(a);
  }, a && Object.assign(Polymer, a), window.Polymer._polymerFn = function () {
    throw new Error('Load polymer.html to use the Polymer() function.');
  }, window.Polymer.version = '2.0.0', window.JSCompiler_renameProperty = function (a) {
    return a;
  };
})();
(function () {
  'use notstrict';
  function a(a) {
    return function (b) {
      a.__mixinApplications || (a.__mixinApplications = new WeakMap());var c = a.__mixinApplications,
          d = c.get(b);return d || (d = a(b), c.set(b, d)), d;
    };
  }var b = 0;Polymer.dedupingMixin = function (c) {
    return c = a(c), c.__dedupeId = ++b, function (a) {
      var b = a.__mixinSet;if (b && b[c.__dedupeId]) return a;var d = c(a);return d.__mixinSet = Object.create(d.__mixinSet || b || null), d.__mixinSet[c.__dedupeId] = !0, d;
    };
  };
})();
(function () {
  'use notstrict';
  var a = {},
      b = /-[a-z]/g,
      c = /([A-Z])/g;Polymer.CaseMap = { dashToCamelCase: function dashToCamelCase(c) {
      return a[c] || (a[c] = 0 > c.indexOf('-') ? c : c.replace(b, function (a) {
        return a[1].toUpperCase();
      }));
    }, camelToDashCase: function camelToDashCase(b) {
      return a[b] || (a[b] = b.replace(c, '-$1').toLowerCase());
    } };
})();
(function () {
  'use notstrict';
  function a(a, d) {
    if (a && e.test(a)) return a;if (void 0 === b) {
      b = !1;try {
        var f = new URL('b', 'http://a');f.pathname = 'c%20d', b = 'http://a/c%20d' === f.href;
      } catch (a) {}
    }return (d || (d = document.baseURI || window.location.href), b) ? new URL(a, d).href : (c || (c = document.implementation.createHTMLDocument('temp'), c.base = c.createElement('base'), c.head.appendChild(c.base), c.anchor = c.createElement('a'), c.body.appendChild(c.anchor)), c.base.href = d, c.anchor.href = a, c.anchor.href || a);
  }var b,
      c,
      d = /(url\()([^)]*)(\))/g,
      e = /(^\/)|(^#)|(^[\w-\d]*:)/;Polymer.ResolveUrl = { resolveCss: function resolveCss(b, c) {
      return b.replace(d, function (b, d, e, f) {
        return d + '\'' + a(e.replace(/["']/g, ''), c) + '\'' + f;
      });
    }, resolveUrl: a, pathFromUrl: function pathFromUrl(a) {
      return a.substring(0, a.lastIndexOf('/') + 1);
    } };
})();
(function () {
  'use notstrict';
  function a(a) {
    return Polymer.DomModule ? Polymer.DomModule['import'](a) : null;
  }Polymer.StyleGather = { cssFromModules: function cssFromModules(a) {
      for (var b = a.trim().split(' '), c = '', d = 0; d < b.length; d++) {
        c += this.cssFromModule(b[d]);
      }return c;
    }, cssFromModule: function cssFromModule(b) {
      var c = a(b);if (c && void 0 === c._cssText) {
        var d = '',
            e = c.querySelector('template');e && (d += this.cssFromTemplate(e, c.assetpath)), d += this.cssFromModuleImports(b), c._cssText = d || null;
      }return c || console.warn('Could not find style data in module named', b), c && c._cssText || '';
    }, cssFromTemplate: function cssFromTemplate(a, b) {
      for (var c = '', d = a.content.querySelectorAll('style'), f = 0; f < d.length; f++) {
        var g = d[f],
            e = g.getAttribute('include');e && (c += this.cssFromModules(e)), g.parentNode.removeChild(g), c += b ? Polymer.ResolveUrl.resolveCss(g.textContent, b) : g.textContent;
      }return c;
    }, cssFromModuleImports: function cssFromModuleImports(b) {
      var c = '',
          d = a(b);if (!d) return c;for (var e, f = d.querySelectorAll('link[rel=import][type~=css]'), g = 0; g < f.length; g++) {
        if (e = f[g], e['import']) {
          var h = e['import'],
              i = h.body ? h.body : h;c += Polymer.ResolveUrl.resolveCss(i.textContent, h.baseURI);
        }
      }return c;
    } };
})();
(function () {
  'use notstrict';
  function a(a) {
    return c[a] || d[a.toLowerCase()];
  }function b(a) {
    a.querySelector('style') && console.warn('dom-module %s has style outside template', a.id);
  }var c = {},
      d = {},
      e = function (e) {
    function f() {
      return babelHelpers.classCallCheck(this, f), babelHelpers.possibleConstructorReturn(this, (f.__proto__ || Object.getPrototypeOf(f)).apply(this, arguments));
    }return babelHelpers.inherits(f, e), babelHelpers.createClass(f, [{ key: 'attributeChangedCallback', value: function value(a, b, c) {
        b !== c && this.register();
      } }, { key: 'register', value: function value(a) {
        a = a || this.id, a && (this.id = a, c[a] = this, d[a.toLowerCase()] = this, b(this));
      } }, { key: 'assetpath', get: function get() {
        if (!this.__assetpath) {
          var a = window.HTMLImports && HTMLImports.importForElement ? HTMLImports.importForElement(this) || document : this.ownerDocument,
              b = Polymer.ResolveUrl.resolveUrl(this.getAttribute('assetpath') || '', a.baseURI);this.__assetpath = Polymer.ResolveUrl.pathFromUrl(b);
        }return this.__assetpath;
      } }], [{ key: 'import', value: function value(b, c) {
        if (b) {
          var d = a(b);return d && c ? d.querySelector(c) : d;
        }return null;
      } }, { key: 'observedAttributes', get: function get() {
        return ['id'];
      } }]), f;
  }(HTMLElement);e.prototype.modules = c, customElements.define('dom-module', e), Polymer.DomModule = e;
})();
(function () {
  'use notstrict';
  var a = { isPath: function isPath(a) {
      return 0 <= a.indexOf('.');
    }, root: function root(a) {
      var b = a.indexOf('.');return -1 === b ? a : a.slice(0, b);
    }, isAncestor: function isAncestor(a, b) {
      return 0 === a.indexOf(b + '.');
    }, isDescendant: function isDescendant(a, b) {
      return 0 === b.indexOf(a + '.');
    }, translate: function translate(a, b, c) {
      return b + c.slice(a.length);
    }, matches: function matches(a, b) {
      return a === b || this.isAncestor(a, b) || this.isDescendant(a, b);
    }, normalize: function normalize(a) {
      if (Array.isArray(a)) {
        for (var b, c = [], d = 0; d < a.length; d++) {
          b = a[d].toString().split('.');for (var e = 0; e < b.length; e++) {
            c.push(b[e]);
          }
        }return c.join('.');
      }return a;
    }, split: function split(a) {
      return Array.isArray(a) ? this.normalize(a).split('.') : a.toString().split('.');
    }, get: function get(a, b, c) {
      for (var d = a, e = this.split(b), f = 0; f < e.length; f++) {
        if (!d) return;var g = e[f];d = d[g];
      }return c && (c.path = e.join('.')), d;
    }, set: function set(a, b, c) {
      var d = a,
          e = this.split(b),
          f = e[e.length - 1];if (1 < e.length) {
        for (var g, h = 0; h < e.length - 1; h++) {
          if (g = e[h], d = d[g], !d) return;
        }d[f] = c;
      } else d[b] = c;return e.join('.');
    } };a.isDeep = a.isPath, Polymer.Path = a;
})();
(function () {
  'use notstrict';
  var a = 0,
      b = 0,
      c = [],
      d = 0,
      e = document.createTextNode('');new window.MutationObserver(function () {
    for (var a, d = c.length, e = 0; e < d; e++) {
      if (a = c[e], a) try {
        a();
      } catch (a) {
        setTimeout(function () {
          throw a;
        });
      }
    }c.splice(0, d), b += d;
  }).observe(e, { characterData: !0 }), Polymer.Async = { timeOut: { after: function after(a) {
        return { run: function run(b) {
            return setTimeout(b, a);
          }, cancel: window.clearTimeout.bind(window) };
      }, run: window.setTimeout.bind(window), cancel: window.clearTimeout.bind(window) }, animationFrame: { run: window.requestAnimationFrame.bind(window), cancel: window.cancelAnimationFrame.bind(window) }, idlePeriod: { run: function run(a) {
        return window.requestIdleCallback ? window.requestIdleCallback(a) : window.setTimeout(a, 16);
      }, cancel: function cancel(a) {
        window.cancelIdleCallback ? window.cancelIdleCallback(a) : window.clearTimeout(a);
      } }, microTask: { run: function run(b) {
        return e.textContent = d++, c.push(b), a++;
      }, cancel: function cancel(a) {
        var d = a - b;if (0 <= d) {
          if (!c[d]) throw new Error('invalid async handle: ' + a);c[d] = null;
        }
      } } };
})();
(function () {
  'use notstrict';
  function a(a, b) {
    if (!d[b]) {
      var c = a[b];c !== void 0 && (a.__data ? a._setPendingProperty(b, c) : (a.__dataProto ? !a.hasOwnProperty(JSCompiler_renameProperty('__dataProto', a)) && (a.__dataProto = Object.create(a.__dataProto)) : a.__dataProto = {}, a.__dataProto[b] = c));
    }
  }for (var b = Polymer.CaseMap, c = Polymer.Async.microTask, d = {}, e = HTMLElement.prototype; e;) {
    for (var f = Object.getOwnPropertyNames(e), g = 0; g < f.length; g++) {
      d[f[g]] = !0;
    }e = Object.getPrototypeOf(e);
  }Polymer.PropertyAccessors = Polymer.dedupingMixin(function (d) {
    var e = function (d) {
      function e() {
        babelHelpers.classCallCheck(this, e);var a = babelHelpers.possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));return a._initializeProperties(), a;
      }return babelHelpers.inherits(e, d), babelHelpers.createClass(e, null, [{ key: 'createPropertiesForAttributes', value: function value() {
          for (var a = this.observedAttributes, c = 0; c < a.length; c++) {
            this.prototype._createPropertyAccessor(b.dashToCamelCase(a[c]));
          }
        } }]), babelHelpers.createClass(e, [{ key: 'attributeChangedCallback', value: function value(a, b, c) {
          b !== c && this._attributeToProperty(a, c);
        } }, { key: '_initializeProperties', value: function value() {
          for (var a in this.__serializing = !1, this.__dataCounter = 0, this.__dataEnabled = !1, this.__dataInitialized = !1, this.__dataInvalid = !1, this.__data = {}, this.__dataPending = null, this.__dataOld = null, this.__dataProto && (this._initializeProtoProperties(this.__dataProto), this.__dataProto = null), this.__dataHasAccessor) {
            this.hasOwnProperty(a) && (this.__dataInstanceProps = this.__dataInstanceProps || {}, this.__dataInstanceProps[a] = this[a], delete this[a]);
          }
        } }, { key: '_initializeProtoProperties', value: function value(a) {
          for (var b in a) {
            this._setProperty(b, a[b]);
          }
        } }, { key: '_initializeInstanceProperties', value: function value(a) {
          Object.assign(this, a);
        } }, { key: '_ensureAttribute', value: function value(a, b) {
          this.hasAttribute(a) || this._valueToNodeAttribute(this, b, a);
        } }, { key: '_attributeToProperty', value: function value(a, c, d) {
          if (!this.__serializing) {
            var e = b.dashToCamelCase(a);this[e] = this._deserializeValue(c, d);
          }
        } }, { key: '_propertyToAttribute', value: function value(a, c, d) {
          this.__serializing = !0, d = 3 > arguments.length ? this[a] : d, this._valueToNodeAttribute(this, d, c || b.camelToDashCase(a)), this.__serializing = !1;
        } }, { key: '_valueToNodeAttribute', value: function value(a, b, c) {
          var d = this._serializeValue(b);void 0 === d ? a.removeAttribute(c) : a.setAttribute(c, d);
        } }, { key: '_serializeValue', value: function value(a) {
          switch ('undefined' === typeof a ? 'undefined' : babelHelpers['typeof'](a)) {case 'boolean':
              return a ? '' : void 0;case 'object':
              if (a instanceof Date) return a.toString();if (a) try {
                return JSON.stringify(a);
              } catch (a) {
                return '';
              }default:
              return null == a ? void 0 : a.toString();}
        } }, { key: '_deserializeValue', value: function value(a, b) {
          var c;switch (b) {case Number:
              c = +a;break;case Boolean:
              c = null !== a;break;case Object:
              try {
                c = JSON.parse(a);
              } catch (a) {}break;case Array:
              try {
                c = JSON.parse(a);
              } catch (b) {
                c = null, console.warn('Polymer::Attributes: couldn\'t decode Array as JSON: ' + a);
              }break;case Date:
              c = new Date(a);break;case String:default:
              c = a;}return c;
        } }, { key: '_createPropertyAccessor', value: function value(b, c) {
          this.hasOwnProperty('__dataHasAccessor') || (this.__dataHasAccessor = Object.assign({}, this.__dataHasAccessor)), this.__dataHasAccessor[b] || (this.__dataHasAccessor[b] = !0, a(this, b), Object.defineProperty(this, b, { get: function get() {
              return this.__data[b];
            }, set: c ? function () {} : function (a) {
              this._setProperty(b, a);
            } }));
        } }, { key: '_hasAccessor', value: function value(a) {
          return this.__dataHasAccessor && this.__dataHasAccessor[a];
        } }, { key: '_setProperty', value: function value(a, b) {
          this._setPendingProperty(a, b) && this._invalidateProperties();
        } }, { key: '_setPendingProperty', value: function value(a, b) {
          var c = this.__data[a];if (this._shouldPropertyChange(a, b, c)) return this.__dataPending || (this.__dataPending = {}, this.__dataOld = {}), a in this.__dataOld || (this.__dataOld[a] = c), this.__data[a] = b, this.__dataPending[a] = b, !0;
        } }, { key: '_isPropertyPending', value: function value(a) {
          return this.__dataPending && a in this.__dataPending;
        } }, { key: '_invalidateProperties', value: function value() {
          var a = this;!this.__dataInvalid && this.__dataInitialized && (this.__dataInvalid = !0, c.run(function () {
            a.__dataInvalid && (a.__dataInvalid = !1, a._flushProperties());
          }));
        } }, { key: '_enableProperties', value: function value() {
          this.__dataEnabled || (this.__dataEnabled = !0, this.__dataInstanceProps && (this._initializeInstanceProperties(this.__dataInstanceProps), this.__dataInstanceProps = null), this.ready());
        } }, { key: '_flushProperties', value: function value() {
          if (this.__dataPending) {
            var a = this.__dataPending;this.__dataPending = null, this.__dataCounter++, this._propertiesChanged(this.__data, a, this.__dataOld), this.__dataCounter--;
          }
        } }, { key: 'ready', value: function value() {
          this.__dataInitialized = !0, this._flushProperties();
        } }, { key: '_propertiesChanged', value: function value() {} }, { key: '_shouldPropertyChange', value: function value(a, b, c) {
          return c !== b && (c === c || b === b);
        } }]), e;
    }(d);return e;
  });
})();
(function () {
  'use notstrict';
  function a(a) {
    var b = a.getAttribute('is');if (b && g[b]) {
      var c = a;for (c.removeAttribute('is'), a = c.ownerDocument.createElement(b), c.parentNode.replaceChild(a, c), a.appendChild(c); c.attributes.length;) {
        a.setAttribute(c.attributes[0].name, c.attributes[0].value), c.removeAttribute(c.attributes[0].name);
      }
    }return a;
  }function b(a, c) {
    var d = c.parentInfo && b(a, c.parentInfo);if (d) {
      for (var e = d.firstChild, f = 0; e; e = e.nextSibling) {
        if (c.parentIndex === f++) return e;
      }
    } else return a;
  }function c(a, b, c, d) {
    d.id && (b[d.id] = c);
  }function d(a, b, c) {
    if (c.events && c.events.length) for (var d, e = 0, f = c.events; e < f.length && (d = f[e]); e++) {
      a._addMethodEventListenerToNode(b, d.name, d.value, a);
    }
  }function e(a, b, c) {
    c.templateInfo && (b._templateInfo = c.templateInfo);
  }function f(a, b, c) {
    a = a._methodHost || a;return function (b) {
      a[c] ? a[c](b, b.detail) : console.warn('listener method `' + c + '` not defined');
    };
  }var g = { "dom-if": !0, "dom-repeat": !0 };Polymer.TemplateStamp = Polymer.dedupingMixin(function (g) {
    var h = function (g) {
      function h() {
        return babelHelpers.classCallCheck(this, h), babelHelpers.possibleConstructorReturn(this, (h.__proto__ || Object.getPrototypeOf(h)).apply(this, arguments));
      }return babelHelpers.inherits(h, g), babelHelpers.createClass(h, [{ key: '_stampTemplate', value: function value(a) {
          a && !a.content && window.HTMLTemplateElement && HTMLTemplateElement.decorate && HTMLTemplateElement.decorate(a);var f = this.constructor._parseTemplate(a),
              g = f.nodeInfoList,
              h = f.content || a.content,
              j = document.importNode(h, !0);j.__noInsertionPoint = !f.hasInsertionPoint;var k = j.nodeList = Array(g.length);j.$ = {};for (var m, n, o = 0, i = g.length; o < i && (m = g[o]); o++) {
            n = k[o] = b(j, m), c(this, j.$, n, m), e(this, n, m), d(this, n, m);
          }return j;
        } }, { key: '_addMethodEventListenerToNode', value: function value(a, b, c, d) {
          d = d || a;var e = f(d, b, c);return this._addEventListenerToNode(a, b, e), e;
        } }, { key: '_addEventListenerToNode', value: function value(a, b, c) {
          a.addEventListener(b, c);
        } }, { key: '_removeEventListenerFromNode', value: function value(a, b, c) {
          a.removeEventListener(b, c);
        } }], [{ key: '_parseTemplate', value: function value(a, b) {
          if (!a._templateInfo) {
            var c = a._templateInfo = {};c.nodeInfoList = [], c.stripWhiteSpace = b && b.stripWhiteSpace || a.hasAttribute('strip-whitespace'), this._parseTemplateContent(a, c, { parent: null });
          }return a._templateInfo;
        } }, { key: '_parseTemplateContent', value: function value(a, b, c) {
          return this._parseTemplateNode(a.content, b, c);
        } }, { key: '_parseTemplateNode', value: function value(a, b, c) {
          var d;return 'template' != a.localName || a.hasAttribute('preserve-content') ? 'slot' === a.localName && (b.hasInsertionPoint = !0) : d = this._parseTemplateNestedTemplate(a, b, c) || d, a.firstChild && (d = this._parseTemplateChildNodes(a, b, c) || d), a.hasAttributes && a.hasAttributes() && (d = this._parseTemplateNodeAttributes(a, b, c) || d), d;
        } }, { key: '_parseTemplateChildNodes', value: function value(b, c, d) {
          for (var e, f = b.firstChild, g = 0; f; f = e) {
            if ('template' == f.localName && (f = a(f)), e = f.nextSibling, f.nodeType === Node.TEXT_NODE) {
              for (var h = e; h && h.nodeType === Node.TEXT_NODE;) {
                f.textContent += h.textContent, e = h.nextSibling, b.removeChild(h), h = e;
              }if (c.stripWhiteSpace && !f.textContent.trim()) {
                b.removeChild(f);continue;
              }
            }var i = { parentIndex: g, parentInfo: d };this._parseTemplateNode(f, c, i) && (i.infoIndex = c.nodeInfoList.push(i) - 1), f.parentNode && g++;
          }
        } }, { key: '_parseTemplateNestedTemplate', value: function value(a, b, c) {
          var d = this._parseTemplate(a, b),
              e = d.content = a.content.ownerDocument.createDocumentFragment();return e.appendChild(a.content), c.templateInfo = d, !0;
        } }, { key: '_parseTemplateNodeAttributes', value: function value(b, c, d) {
          for (var e, a = void 0, f = Array.from(b.attributes), g = f.length - 1; e = f[g]; g--) {
            a = this._parseTemplateNodeAttribute(b, c, d, e.name, e.value) || a;
          }return a;
        } }, { key: '_parseTemplateNodeAttribute', value: function value(a, b, c, d, e) {
          return 'on-' === d.slice(0, 3) ? (a.removeAttribute(d), c.events = c.events || [], c.events.push({ name: d.slice(3), value: e }), !0) : 'id' === d ? (c.id = e, !0) : void 0;
        } }, { key: '_contentForTemplate', value: function value(a) {
          var b = a.__templateInfo;return b && b.content || a.content;
        } }]), h;
    }(g);return h;
  });
})();
(function () {
  'use notstrict';
  function e(e, t) {
    var a = e[t];if (!a) a = e[t] = {};else if (!e.hasOwnProperty(t)) for (var r in a = e[t] = Object.create(e[t]), a) {
      for (var n = a[r], o = a[r] = Array(n.length), p = 0; p < n.length; p++) {
        o[p] = n[p];
      }
    }return a;
  }function t(e, t, r, n, o, i) {
    if (t) {
      var p = !1,
          d = z++;for (var s in r) {
        a(e, t, d, s, r, n, o, i) && (p = !0);
      }return p;
    }return !1;
  }function a(e, t, a, n, o, p, d, s) {
    var _ = !1,
        y = d ? Polymer.Path.root(n) : n,
        u = t[y];if (u) for (var h, f = 0, i = u.length; f < i && (h = u[f]); f++) {
      h.info && h.info.lastRun === a || d && !r(n, h.trigger) || (h.info && (h.info.lastRun = a), h.fn(e, n, o, p, h.info, d, s), _ = !0);
    }return _;
  }function r(e, t) {
    if (t) {
      var a = t.name;return a == e || t.structured && Polymer.Path.isAncestor(a, e) || t.wildcard && Polymer.Path.isDescendant(a, e);
    }return !0;
  }function n(e, t, a, r, n) {
    var o = e[n.methodName],
        i = n.property;o ? o.call(e, e.__data[i], r[i]) : !n.dynamicFn && console.warn('observer method `' + n.methodName + '` not defined');
  }function o(e, t, r, n, o) {
    var p,
        d = e.__notifyEffects,
        s = z++;for (var _ in t) {
      t[_] && (d && a(e, d, s, _, r, n, o) ? p = !0 : o && i(e, _, r) && (p = !0));
    }var l;p && (l = e.__dataHost) && l._invalidateProperties && l._invalidateProperties();
  }function i(e, t, a) {
    var r = Polymer.Path.root(t);if (r !== t) {
      var n = Polymer.CaseMap.camelToDashCase(r) + '-changed';return p(e, n, a[t], t), !0;
    }
  }function p(e, t, a, r) {
    var n = { value: a, queueProperty: !0 };r && (n.path = r), e.dispatchEvent(new CustomEvent(t, { detail: n }));
  }function d(e, t, a, r, n, o) {
    var i = o ? Polymer.Path.root(t) : t,
        d = i == t ? null : t,
        s = d ? Polymer.Path.get(e, d) : e.__data[t];d && s === void 0 && (s = a[t]), p(e, n.eventName, s, d);
  }function s(e, t, a, r, n) {
    var o,
        i = e.detail,
        p = i && i.path;p ? (r = Polymer.Path.translate(a, r, p), o = i && i.value) : o = e.target[a], o = n ? !o : o, t.__readOnly && t.__readOnly[r] || !t._setPendingPropertyOrPath(r, o, !0, !!p) || i && i.queueProperty || t._invalidateProperties();
  }function _(e, t, a, r, n) {
    var o = e.__data[t];Polymer.sanitizeDOMValue && (o = Polymer.sanitizeDOMValue(o, n.attrName, 'attribute', e)), e._propertyToAttribute(t, n.attrName, o);
  }function l(e, a, r, n) {
    var o = e.__computeEffects;if (o) for (var i = a; t(e, o, i, r, n);) {
      Object.assign(r, e.__dataOld), Object.assign(a, e.__dataPending), i = e.__dataPending, e.__dataPending = null;
    }
  }function y(e, t, a, r, n) {
    var o = O(e, t, a, r, n),
        i = n.methodInfo;e.__dataHasAccessor && e.__dataHasAccessor[i] ? e._setPendingProperty(i, o, !0) : e[i] = o;
  }function u(e, t, r) {
    var n = e.__dataLinkedPaths;if (n) {
      var o;for (var i in n) {
        var a = n[i];Polymer.Path.isDescendant(i, t) ? (o = Polymer.Path.translate(i, a, t), e._setPendingPropertyOrPath(o, r, !0, !0)) : Polymer.Path.isDescendant(a, t) && (o = Polymer.Path.translate(a, i, t), e._setPendingPropertyOrPath(o, r, !0, !0));
      }
    }
  }function h(e, t, a, r, n, o, p) {
    a.bindings = a.bindings || [];var d = { kind: r, target: n, parts: o, literal: p, isCompound: 1 !== o.length };if (a.bindings.push(d), m(d)) {
      var s = d.parts[0],
          _ = s.event,
          l = s.negate;d.listenerEvent = _ || H.camelToDashCase(n) + '-changed', d.listenerNegate = l;
    }for (var y, u = t.nodeInfoList.length, h = 0; h < d.parts.length; h++) {
      y = d.parts[h], y.compoundIndex = h, f(e, t, d, y, u);
    }
  }function f(e, t, a, r, n) {
    if (!r.literal) if ('attribute' === a.kind && '-' === a.target[0]) console.warn('Cannot set attribute ' + a.target + ' because "-" is not a valid attribute starting character');else for (var o, i = r.dependencies, p = { index: n, binding: a, part: r, evaluator: e }, d = 0; d < i.length; d++) {
      o = i[d], 'string' == typeof o && (o = I(o), o.wildcard = !0), e._addTemplatePropertyEffect(t, o.rootProperty, { fn: P, info: p, trigger: o });
    }
  }function P(e, t, a, r, n, o, i) {
    var p = i[n.index],
        d = n.binding,
        s = n.part;if (o && s.source && t.length > s.source.length && 'property' == d.kind && !d.isCompound && p.__dataHasAccessor && p.__dataHasAccessor[d.target]) {
      var _ = a[t];t = Polymer.Path.translate(s.source, d.target, t), p._setPendingPropertyOrPath(t, _, !1, !0) && e._enqueueClient(p);
    } else {
      var l = n.evaluator._evaluateBinding(e, s, t, a, r, o);g(e, p, d, s, l);
    }
  }function g(e, t, a, r, n) {
    if (n = c(t, n, a, r), Polymer.sanitizeDOMValue && (n = Polymer.sanitizeDOMValue(n, a.target, a.kind, t)), 'attribute' == a.kind) e._valueToNodeAttribute(t, n, a.target);else {
      var o = a.target;t.__dataHasAccessor && t.__dataHasAccessor[o] ? (!t.__readOnly || !t.__readOnly[o]) && t._setPendingProperty(o, n) && e._enqueueClient(t) : e._setUnmanagedPropertyToNode(t, o, n);
    }
  }function c(e, t, a, r) {
    if (a.isCompound) {
      var n = e.__dataCompoundStorage[a.target];n[r.compoundIndex] = t, t = n.join('');
    }return 'attribute' !== a.kind && ('textContent' === a.target || 'input' == e.localName && 'value' == a.target) && (t = void 0 == t ? '' : t), t;
  }function m(e) {
    return e.target && 'attribute' != e.kind && 'text' != e.kind && !e.isCompound && '{' === e.parts[0].mode;
  }function v(e, t) {
    var a = t.nodeList,
        r = t.nodeInfoList;if (r.length) for (var n = 0; n < r.length; n++) {
      var o = r[n],
          i = a[n],
          p = o.bindings;if (p) for (var d, s = 0; s < p.length; s++) {
        d = p[s], k(i, d), E(i, e, d);
      }i.__dataHost = e;
    }
  }function k(e, t) {
    if (t.isCompound) {
      for (var a = e.__dataCompoundStorage || (e.__dataCompoundStorage = {}), r = t.parts, n = Array(r.length), o = 0; o < r.length; o++) {
        n[o] = r[o].literal;
      }var i = t.target;a[i] = n, t.literal && 'property' == t.kind && (e[i] = t.literal);
    }
  }function E(e, t, a) {
    if (a.listenerEvent) {
      var r = a.parts[0];e.addEventListener(a.listenerEvent, function (n) {
        s(n, t, a.target, r.source, r.negate);
      });
    }
  }function C(e, t, a, r, n, o) {
    o = t['static'] || o && ('object' !== ('undefined' === typeof o ? 'undefined' : babelHelpers['typeof'](o)) || o[t.methodName]);for (var p, d = { methodName: t.methodName, args: t.args, methodInfo: n, dynamicFn: o }, s = 0; s < t.args.length && (p = t.args[s]); s++) {
      p.literal || e._addPropertyEffect(p.rootProperty, a, { fn: r, info: d, trigger: p });
    }o && e._addPropertyEffect(t.methodName, a, { fn: r, info: d });
  }function O(e, t, a, r, n) {
    var o = e._methodHost || e,
        i = o[n.methodName];if (i) {
      var p = x(e.__data, n.args, t, a);return i.apply(o, p);
    }n.dynamicFn || console.warn('method `' + n.methodName + '` not defined');
  }function T(e) {
    for (var t, a = '', r = 0; r < e.length; r++) {
      t = e[r].literal, a += t || '';
    }return a;
  }function b(e) {
    var t = e.match(/([^\s]+?)\(([\s\S]*)\)/);if (t) {
      var a = t[1],
          r = { methodName: a, "static": !0 };if (t[2].trim()) {
        var n = t[2].replace(/\\,/g, '&comma;').split(',');return N(n, r);
      }return r.args = M, r;
    }return null;
  }function N(e, t) {
    return t.args = e.map(function (e) {
      var a = I(e);return a.literal || (t['static'] = !1), a;
    }, this), t;
  }function I(e) {
    var t = e.trim().replace(/&comma;/g, ',').replace(/\\(.)/g, '$1'),
        r = { name: t },
        a = t[0];return '-' === a && (a = t[1]), '0' <= a && '9' >= a && (a = '#'), '\'' === a || '"' === a ? (r.value = t.slice(1, -1), r.literal = !0) : '#' === a ? (r.value = +t, r.literal = !0) : void 0, (r.literal || (r.rootProperty = Polymer.Path.root(t), r.structured = Polymer.Path.isPath(t), r.structured && (r.wildcard = '.*' == t.slice(-2), r.wildcard && (r.name = t.slice(0, -2)))), r);
  }function x(e, t, a, r) {
    for (var n = [], o = 0, i = t.length; o < i; o++) {
      var p = t[o],
          d = p.name,
          s = void 0;if (p.literal ? s = p.value : p.structured ? (s = Polymer.Path.get(e, d), void 0 === s && (s = r[d])) : s = e[d], p.wildcard) {
        var _ = 0 === d.indexOf(a + '.'),
            l = 0 === a.indexOf(d) && !_;n[o] = { path: l ? a : d, value: l ? r[a] : s, base: s };
      } else n[o] = s;
    }return n;
  }function A(e, t, a, r) {
    var n = a + '.splices';e.notifyPath(n, { indexSplices: r }), e.notifyPath(a + '.length', t.length), e.__data[n] = { indexSplices: null };
  }function L(e, t, a, r, n, o) {
    A(e, t, a, [{ index: r, addedCount: n, removed: o, object: t, type: 'splice' }]);
  }function R(e) {
    return e[0].toUpperCase() + e.substring(1);
  }var H = Polymer.CaseMap,
      z = 0,
      D = { COMPUTE: '__computeEffects', REFLECT: '__reflectEffects', NOTIFY: '__notifyEffects', PROPAGATE: '__propagateEffects', OBSERVE: '__observeEffects', READ_ONLY: '__readOnly' },
      M = [],
      S = '(?:[a-zA-Z_$][\\w.:$\\-*]*)',
      F = '(?:' + S + '|' + '(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)' + '|' + ('(?:' + '(?:\'(?:[^\'\\\\]|\\\\.)*\')' + '|' + '(?:"(?:[^"\\\\]|\\\\.)*")' + ')') + '\\s*)',
      w = /(\[\[|{{)\s*(?:(!)\s*)?((?:[a-zA-Z_$][\w.:$\-*]*)\s*(?:\(\s*(?:(?:(?:(?:[a-zA-Z_$][\w.:$\-*]*)|(?:[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\]|\\.)*')|(?:"(?:[^"\\]|\\.)*"))\s*)(?:,\s*(?:(?:[a-zA-Z_$][\w.:$\-*]*)|(?:[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\]|\\.)*')|(?:"(?:[^"\\]|\\.)*"))\s*))*)?)\)\s*)?)(?:]]|}})/g;Polymer.PropertyEffects = Polymer.dedupingMixin(function (a) {
    var r = Polymer.TemplateStamp(Polymer.PropertyAccessors(a)),
        i = function (a) {
      function r() {
        return babelHelpers.classCallCheck(this, r), babelHelpers.possibleConstructorReturn(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
      }return babelHelpers.inherits(r, a), babelHelpers.createClass(r, [{ key: '_initializeProperties', value: function value() {
          babelHelpers.get(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), '_initializeProperties', this).call(this), B.registerHost(this), this.__dataClientsInitialized = !1, this.__dataPendingClients = null, this.__dataToNotify = null, this.__dataLinkedPaths = null, this.__dataHasPaths = !1, this.__dataCompoundStorage = this.__dataCompoundStorage || null, this.__dataHost = this.__dataHost || null, this.__dataTemp = {};
        } }, { key: '_initializeProtoProperties', value: function value(e) {
          this.__data = Object.create(e), this.__dataPending = Object.create(e), this.__dataOld = {};
        } }, { key: '_initializeInstanceProperties', value: function value(e) {
          var t = this.__readOnly;for (var a in e) {
            t && t[a] || (this.__dataPending = this.__dataPending || {}, this.__dataOld = this.__dataOld || {}, this.__data[a] = this.__dataPending[a] = e[a]);
          }
        } }, { key: '_addPropertyEffect', value: function value(t, a, r) {
          this._createPropertyAccessor(t, a == D.READ_ONLY);var n = e(this, a)[t];n || (n = this[a][t] = []), n.push(r);
        } }, { key: '_removePropertyEffect', value: function value(t, a, r) {
          var n = e(this, a)[t],
              o = n.indexOf(r);0 <= o && n.splice(o, 1);
        } }, { key: '_hasPropertyEffect', value: function value(e, t) {
          var a = this[t];return !!(a && a[e]);
        } }, { key: '_hasReadOnlyEffect', value: function value(e) {
          return this._hasPropertyEffect(e, D.READ_ONLY);
        } }, { key: '_hasNotifyEffect', value: function value(e) {
          return this._hasPropertyEffect(e, D.NOTIFY);
        } }, { key: '_hasReflectEffect', value: function value(e) {
          return this._hasPropertyEffect(e, D.REFLECT);
        } }, { key: '_hasComputedEffect', value: function value(e) {
          return this._hasPropertyEffect(e, D.COMPUTE);
        } }, { key: '_setPendingPropertyOrPath', value: function value(e, t, a, n) {
          if (n || Polymer.Path.root(Array.isArray(e) ? e[0] : e) !== e) {
            if (!n) {
              var o = Polymer.Path.get(this, e);if (e = Polymer.Path.set(this, e, t), !e || !babelHelpers.get(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), '_shouldPropertyChange', this).call(this, e, t, o)) return !1;
            }if (this.__dataHasPaths = !0, this._setPendingProperty(e, t, a)) return u(this, e, t), !0;
          } else {
            if (this.__dataHasAccessor && this.__dataHasAccessor[e]) return this._setPendingProperty(e, t, a);this[e] = t;
          }return !1;
        } }, { key: '_setUnmanagedPropertyToNode', value: function value(e, t, a) {
          (a !== e[t] || 'object' == ('undefined' === typeof a ? 'undefined' : babelHelpers['typeof'](a))) && (e[t] = a);
        } }, { key: '_setPendingProperty', value: function value(e, t, a) {
          var r = this.__dataHasPaths && Polymer.Path.isPath(e),
              n = r ? this.__dataTemp : this.__data;if (this._shouldPropertyChange(e, t, n[e])) return this.__dataPending || (this.__dataPending = {}, this.__dataOld = {}), e in this.__dataOld || (this.__dataOld[e] = this.__data[e]), r ? this.__dataTemp[e] = t : this.__data[e] = t, this.__dataPending[e] = t, (r || this.__notifyEffects && this.__notifyEffects[e]) && (this.__dataToNotify = this.__dataToNotify || {}, this.__dataToNotify[e] = a), !0;
        } }, { key: '_setProperty', value: function value(e, t) {
          this._setPendingProperty(e, t, !0) && this._invalidateProperties();
        } }, { key: '_invalidateProperties', value: function value() {
          this.__dataInitialized && this._flushProperties();
        } }, { key: '_enqueueClient', value: function value(e) {
          this.__dataPendingClients = this.__dataPendingClients || [], e !== this && this.__dataPendingClients.push(e);
        } }, { key: '_flushClients', value: function value() {
          if (!this.__dataClientsInitialized) this.__dataClientsInitialized = !0, this._readyClients(), this.__dataInitialized = !0;else {
            var e = this.__dataPendingClients;if (e) {
              this.__dataPendingClients = null;for (var t, a = 0; a < e.length; a++) {
                t = e[a], t.__dataPending && t._flushProperties();
              }
            }
          }
        } }, { key: '_readyClients', value: function value() {
          var e = this.__dataPendingClients;if (e) {
            this.__dataPendingClients = null;for (var t, a = 0; a < e.length; a++) {
              t = e[a], t.__dataEnabled || t._enableProperties();
            }
          }
        } }, { key: 'setProperties', value: function value(e, t) {
          for (var a in e) {
            !t && this.__readOnly && this.__readOnly[a] || this._setPendingPropertyOrPath(a, e[a], !0);
          }this._invalidateProperties();
        } }, { key: 'ready', value: function value() {
          this._flushProperties(), this.__dataClientsInitialized || this._flushClients(), this.__dataPending && this._flushProperties();
        } }, { key: '_propertiesChanged', value: function value(e, a, r) {
          var n = this.__dataHasPaths;this.__dataHasPaths = !1, l(this, a, r, n);var i = this.__dataToNotify;this.__dataToNotify = null, this._propagatePropertyChanges(a, r, n), this._flushClients(), t(this, this.__reflectEffects, a, r, n), t(this, this.__observeEffects, a, r, n), i && o(this, i, a, r, n), 1 == this.__dataCounter && (this.__dataTemp = {});
        } }, { key: '_propagatePropertyChanges', value: function value(e, a, r) {
          this.__propagateEffects && t(this, this.__propagateEffects, e, a, r);for (var n = this.__templateInfo; n;) {
            t(this, n.propertyEffects, e, a, r, n.nodeList), n = n.nextTemplateInfo;
          }
        } }, { key: 'linkPaths', value: function value(e, t) {
          e = Polymer.Path.normalize(e), t = Polymer.Path.normalize(t), this.__dataLinkedPaths = this.__dataLinkedPaths || {}, this.__dataLinkedPaths[e] = t;
        } }, { key: 'unlinkPaths', value: function value(e) {
          e = Polymer.Path.normalize(e), this.__dataLinkedPaths && delete this.__dataLinkedPaths[e];
        } }, { key: 'notifySplices', value: function value(e, t) {
          var a = {},
              r = Polymer.Path.get(this, e, a);A(this, r, a.path, t);
        } }, { key: 'get', value: function value(e, t) {
          return Polymer.Path.get(t || this, e);
        } }, { key: 'set', value: function value(e, t, a) {
          a ? Polymer.Path.set(a, e, t) : (!this.__readOnly || !this.__readOnly[e]) && this._setPendingPropertyOrPath(e, t, !0) && this._invalidateProperties();
        } }, { key: 'push', value: function value(e) {
          for (var t = {}, a = Polymer.Path.get(this, e, t), r = a.length, n = arguments.length, o = Array(1 < n ? n - 1 : 0), i = 1; i < n; i++) {
            o[i - 1] = arguments[i];
          }var p = a.push.apply(a, o);return o.length && L(this, a, t.path, r, o.length, []), p;
        } }, { key: 'pop', value: function value(e) {
          var t = {},
              a = Polymer.Path.get(this, e, t),
              r = !!a.length,
              n = a.pop();return r && L(this, a, t.path, a.length, 0, [n]), n;
        } }, { key: 'splice', value: function value(e, t, a) {
          var r = Math.floor,
              n = {},
              o = Polymer.Path.get(this, e, n);t = 0 > t ? o.length - r(-t) : r(t), t || (t = 0);for (var i = arguments.length, p = Array(3 < i ? i - 3 : 0), d = 3; d < i; d++) {
            p[d - 3] = arguments[d];
          }var s = o.splice.apply(o, [t, a].concat(p));return (p.length || s.length) && L(this, o, n.path, t, p.length, s), s;
        } }, { key: 'shift', value: function value(e) {
          var t = {},
              a = Polymer.Path.get(this, e, t),
              r = !!a.length,
              n = a.shift();return r && L(this, a, t.path, 0, 0, [n]), n;
        } }, { key: 'unshift', value: function value(e) {
          for (var t = {}, a = Polymer.Path.get(this, e, t), r = arguments.length, n = Array(1 < r ? r - 1 : 0), o = 1; o < r; o++) {
            n[o - 1] = arguments[o];
          }var i = a.unshift.apply(a, n);return n.length && L(this, a, t.path, 0, n.length, []), i;
        } }, { key: 'notifyPath', value: function value(e, t) {
          var a;if (1 == arguments.length) {
            var r = {};t = Polymer.Path.get(this, e, r), a = r.path;
          } else a = Array.isArray(e) ? Polymer.Path.normalize(e) : e;this._setPendingPropertyOrPath(a, t, !0, !0) && this._invalidateProperties();
        } }, { key: '_createReadOnlyProperty', value: function value(e, t) {
          this._addPropertyEffect(e, D.READ_ONLY), t && (this['_set' + R(e)] = function (t) {
            this._setProperty(e, t);
          });
        } }, { key: '_createPropertyObserver', value: function value(e, t, a) {
          var r = { property: e, methodName: t, dynamicFn: a };this._addPropertyEffect(e, D.OBSERVE, { fn: n, info: r, trigger: { name: e } }), a && this._addPropertyEffect(t, D.OBSERVE, { fn: n, info: r, trigger: { name: t } });
        } }, { key: '_createMethodObserver', value: function value(e, t) {
          var a = b(e);if (!a) throw new Error('Malformed observer expression \'' + e + '\'');C(this, a, D.OBSERVE, O, null, t);
        } }, { key: '_createNotifyingProperty', value: function value(e) {
          this._addPropertyEffect(e, D.NOTIFY, { fn: d, info: { eventName: H.camelToDashCase(e) + '-changed', property: e } });
        } }, { key: '_createReflectedProperty', value: function value(e) {
          var t = H.camelToDashCase(e);'-' === t[0] ? console.warn('Property ' + e + ' cannot be reflected to attribute ' + t + ' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property thisead.') : this._addPropertyEffect(e, D.REFLECT, { fn: _, info: { attrName: t } });
        } }, { key: '_createComputedProperty', value: function value(e, t, a) {
          var r = b(t);if (!r) throw new Error('Malformed computed expression \'' + t + '\'');C(this, r, D.COMPUTE, y, e, a);
        } }, { key: '_bindTemplate', value: function value(e, t) {
          var a = this.constructor._parseTemplate(e),
              r = this.__templateInfo == a;if (!r) for (var n in a.propertyEffects) {
            this._createPropertyAccessor(n);
          }if (t && (a = Object.create(a), a.wasPreBound = r, !r && this.__templateInfo)) {
            var o = this.__templateInfoLast || this.__templateInfo;return this.__templateInfoLast = o.nextTemplateInfo = a, a.previousTemplateInfo = o, a;
          }return this.__templateInfo = a;
        } }, { key: '_stampTemplate', value: function value(e) {
          B.beginHosting(this);var a = babelHelpers.get(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), '_stampTemplate', this).call(this, e);B.endHosting(this);var o = this._bindTemplate(e, !0);if (o.nodeList = a.nodeList, !o.wasPreBound) for (var i = o.childNodes = [], p = a.firstChild; p; p = p.nextSibling) {
            i.push(p);
          }return a.templateInfo = o, v(this, o), this.__dataInitialized && t(this, o.propertyEffects, this.__data, null, !1, o.nodeList), a;
        } }, { key: '_removeBoundDom', value: function value(e) {
          var t = e.templateInfo;t.previousTemplateInfo && (t.previousTemplateInfo.nextTemplateInfo = t.nextTemplateInfo), t.nextTemplateInfo && (t.nextTemplateInfo.previousTemplateInfo = t.previousTemplateInfo), this.__templateInfoLast == t && (this.__templateInfoLast = t.previousTemplateInfo), t.previousTemplateInfo = t.nextTemplateInfo = null;for (var a, r = t.childNodes, n = 0; n < r.length; n++) {
            a = r[n], a.parentNode.removeChild(a);
          }
        } }, { key: 'PROPERTY_EFFECT_TYPES', get: function get() {
          return D;
        } }], [{ key: 'addPropertyEffect', value: function value(e, t, a) {
          this.prototype._addPropertyEffect(e, t, a);
        } }, { key: 'createPropertyObserver', value: function value(e, t, a) {
          this.prototype._createPropertyObserver(e, t, a);
        } }, { key: 'createMethodObserver', value: function value(e, t) {
          this.prototype._createMethodObserver(e, t);
        } }, { key: 'createNotifyingProperty', value: function value(e) {
          this.prototype._createNotifyingProperty(e);
        } }, { key: 'createReadOnlyProperty', value: function value(e, t) {
          this.prototype._createReadOnlyProperty(e, t);
        } }, { key: 'createReflectedProperty', value: function value(e) {
          this.prototype._createReflectedProperty(e);
        } }, { key: 'createComputedProperty', value: function value(e, t, a) {
          this.prototype._createComputedProperty(e, t, a);
        } }, { key: 'bindTemplate', value: function value(e) {
          return this.prototype._bindTemplate(e);
        } }, { key: '_addTemplatePropertyEffect', value: function value(e, t, a) {
          var r = e.hostProps = e.hostProps || {};r[t] = !0;var n = e.propertyEffects = e.propertyEffects || {},
              o = n[t] = n[t] || [];o.push(a);
        } }, { key: '_parseTemplateNode', value: function value(e, t, a) {
          var n = babelHelpers.get(r.__proto__ || Object.getPrototypeOf(r), '_parseTemplateNode', this).call(this, e, t, a);if (e.nodeType === Node.TEXT_NODE) {
            var o = this._parseBindings(e.textContent, t);o && (e.textContent = T(o) || ' ', h(this, t, a, 'text', 'textContent', o), n = !0);
          }return n;
        } }, { key: '_parseTemplateNodeAttribute', value: function value(e, t, a, n, o) {
          var i = this._parseBindings(o, t);if (i) {
            var p = n,
                d = 'property';'$' == n[n.length - 1] && (n = n.slice(0, -1), d = 'attribute');var s = T(i);return s && 'attribute' == d && e.setAttribute(n, s), 'input' === e.localName && 'value' === p && e.setAttribute(p, ''), e.removeAttribute(p), 'property' === d && (n = Polymer.CaseMap.dashToCamelCase(n)), h(this, t, a, d, n, i, s), !0;
          }return babelHelpers.get(r.__proto__ || Object.getPrototypeOf(r), '_parseTemplateNodeAttribute', this).call(this, e, t, a, n, o);
        } }, { key: '_parseTemplateNestedTemplate', value: function value(e, t, a) {
          var n = babelHelpers.get(r.__proto__ || Object.getPrototypeOf(r), '_parseTemplateNestedTemplate', this).call(this, e, t, a),
              o = a.templateInfo.hostProps;for (var i in o) {
            h(this, t, a, 'property', '_host_' + i, [{ mode: '{', source: i, dependencies: [i] }]);
          }return n;
        } }, { key: '_parseBindings', value: function value(e, t) {
          for (var a, r = [], n = 0; null !== (a = w.exec(e));) {
            a.index > n && r.push({ literal: e.slice(n, a.index) });var o = a[1][0],
                p = !!a[2],
                d = a[3].trim(),
                s = void 0,
                _ = void 0,
                l = void 0;'{' == o && 0 < (l = d.indexOf('::')) && (_ = d.substring(l + 2), d = d.substring(0, l), s = !0);var y = b(d),
                u = [];if (y) {
              for (var h, f = y.args, P = y.methodName, g = 0; g < f.length; g++) {
                h = f[g], h.literal || u.push(h);
              }var i = t.dynamicFns;(i && i[P] || y['static']) && (u.push(P), y.dynamicFn = !0);
            } else u.push(d);r.push({ source: d, mode: o, negate: p, customEvent: s, signature: y, dependencies: u, event: _ }), n = w.lastIndex;
          }if (n && n < e.length) {
            var c = e.substring(n);c && r.push({ literal: c });
          }return r.length ? r : void 0;
        } }, { key: '_evaluateBinding', value: function value(e, t, a, r, n, o) {
          var i;return i = t.signature ? O(e, a, r, n, t.signature) : a == t.source ? o && Polymer.Path.isPath(a) ? Polymer.Path.get(e, a) : e.__data[a] : Polymer.Path.get(e, t.source), t.negate && (i = !i), i;
        } }]), r;
    }(r);return i;
  });var B = { stack: [], registerHost: function registerHost(e) {
      if (this.stack.length) {
        var t = this.stack[this.stack.length - 1];t._enqueueClient(e);
      }
    }, beginHosting: function beginHosting(e) {
      this.stack.push(e);
    }, endHosting: function endHosting(e) {
      var t = this.stack.length;t && this.stack[t - 1] == e && this.stack.pop();
    } };
})();
(function () {
  'use notstrict';
  var a = function a() {};a.is, a['extends'], a.properties, a.observers, a.template, Polymer.ElementMixin = Polymer.dedupingMixin(function (a) {
    function b(a) {
      return a.hasOwnProperty(JSCompiler_renameProperty('__ownProperties', a)) || (a.__ownProperties = a.hasOwnProperty(JSCompiler_renameProperty('properties', a)) ? a.properties : {}), a.__ownProperties;
    }function c(a) {
      return a.hasOwnProperty(JSCompiler_renameProperty('__ownObservers', a)) || (a.__ownObservers = a.hasOwnProperty(JSCompiler_renameProperty('observers', a)) ? a.observers : []), a.__ownObservers;
    }function d(a, b) {
      for (var c in b) {
        var d = b[c];'function' == typeof d && (d = { type: d }), a[c] = d;
      }return a;
    }function e(a) {
      if (!a.hasOwnProperty(JSCompiler_renameProperty('__classProperties', a))) {
        a.__classProperties = d({}, b(a));var c = Object.getPrototypeOf(a.prototype).constructor;c.prototype instanceof p && (a.__classProperties = Object.assign(Object.create(e(c)), a.__classProperties));
      }return a.__classProperties;
    }function f(a) {
      if (!a.hasOwnProperty(JSCompiler_renameProperty('__classPropertyDefaults', a))) {
        a.__classPropertyDefaults = null;var b = e(a);for (var c in b) {
          var d = b[c];'value' in d && (a.__classPropertyDefaults = a.__classPropertyDefaults || {}, a.__classPropertyDefaults[c] = d);
        }
      }return a.__classPropertyDefaults;
    }function g(a) {
      return a.hasOwnProperty(JSCompiler_renameProperty('__finalized', a));
    }function h(a) {
      var b = a.prototype,
          c = Object.getPrototypeOf(b).constructor;c.prototype instanceof p && c.finalize(), i(a);
    }function i(a) {
      a.__finalized = !0;var d = a.prototype;a.hasOwnProperty(JSCompiler_renameProperty('is', a)) && a.is && Polymer.telemetry.register(d);var e = b(a);e && j(d, e);var f = c(a);f && k(d, f, e);var g = a.template;if (g) {
        if ('string' === typeof g) {
          var h = document.createElement('template');h.innerHTML = g, g = h;
        } else g = g.cloneNode(!0);d._template = g;
      }
    }function j(a, b) {
      for (var c in b) {
        l(a, c, b[c], b);
      }
    }function k(a, b, c) {
      for (var d = 0; d < b.length; d++) {
        a._createMethodObserver(b[d], c);
      }
    }function l(a, b, c, d) {
      c.computed && (c.readOnly = !0), c.computed && !a._hasReadOnlyEffect(b) && a._createComputedProperty(b, c.computed, d), c.readOnly && !a._hasReadOnlyEffect(b) && a._createReadOnlyProperty(b, !c.computed), c.reflectToAttribute && !a._hasReflectEffect(b) && a._createReflectedProperty(b), c.notify && !a._hasNotifyEffect(b) && a._createNotifyingProperty(b), c.observer && a._createPropertyObserver(b, c.observer, d[c.observer]);
    }function m(a, b, c, d, e) {
      var f = Polymer.StyleGather.cssFromTemplate(b, c) + Polymer.StyleGather.cssFromModuleImports(d);if (f) {
        var g = document.createElement('style');g.textContent = f, b.content.insertBefore(g, b.content.firstChild);
      }window.ShadyCSS && window.ShadyCSS.prepareTemplate(b, d, e), a._bindTemplate(b);
    }var n = Polymer.PropertyEffects(a),
        o = Polymer.CaseMap,
        p = function (a) {
      function b() {
        return babelHelpers.classCallCheck(this, b), babelHelpers.possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments));
      }return babelHelpers.inherits(b, a), babelHelpers.createClass(b, [{ key: '_initializeProperties', value: function value() {
          Polymer.telemetry.instanceCount++, this.constructor.finalize();var a = this.constructor.importPath;if (this._template && !this._template.__polymerFinalized) {
            this._template.__polymerFinalized = !0;var c = a ? Polymer.ResolveUrl.resolveUrl(a) : '';m(this.__proto__, this._template, c, this.localName);
          }babelHelpers.get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), '_initializeProperties', this).call(this), this.rootPath = Polymer.rootPath, this.importPath = a;var d = f(this.constructor);if (d) for (var e in d) {
            var g = d[e];if (!this.hasOwnProperty(e)) {
              var h = 'function' == typeof g.value ? g.value.call(this) : g.value;this._hasAccessor(e) ? this._setPendingProperty(e, h, !0) : this[e] = h;
            }
          }
        } }, { key: 'connectedCallback', value: function value() {
          window.ShadyCSS && this._template && window.ShadyCSS.styleElement(this), this._enableProperties();
        } }, { key: 'disconnectedCallback', value: function value() {} }, { key: 'ready', value: function value() {
          this._template && (this.root = this._stampTemplate(this._template), this.$ = this.root.$), babelHelpers.get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), 'ready', this).call(this);
        } }, { key: '_readyClients', value: function value() {
          this._template && (this.root = this._attachDom(this.root)), babelHelpers.get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), '_readyClients', this).call(this);
        } }, { key: '_attachDom', value: function value(a) {
          if (!this.attachShadow) throw new Error('ShadowDOM not available. Polymer.Element can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.');else if (a) return this.shadowRoot || this.attachShadow({ mode: 'open' }), this.shadowRoot.appendChild(a), this.shadowRoot;
        } }, { key: 'attributeChangedCallback', value: function value(a, b, c) {
          if (b !== c) {
            var d = o.dashToCamelCase(a),
                f = e(this.constructor)[d].type;this._hasReadOnlyEffect(d) || this._attributeToProperty(a, c, f);
          }
        } }, { key: 'updateStyles', value: function value(a) {
          window.ShadyCSS && window.ShadyCSS.styleSubtree(this, a);
        } }, { key: 'resolveUrl', value: function value(a, b) {
          return !b && this.importPath && (b = Polymer.ResolveUrl.resolveUrl(this.importPath)), Polymer.ResolveUrl.resolveUrl(a, b);
        } }], [{ key: 'finalize', value: function value() {
          g(this) || h(this);
        } }, { key: '_parseTemplateContent', value: function value(a, c, d) {
          return c.dynamicFns = c.dynamicFns || e(this), babelHelpers.get(b.__proto__ || Object.getPrototypeOf(b), '_parseTemplateContent', this).call(this, a, c, d);
        } }, { key: 'observedAttributes', get: function get() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty('__observedAttributes', this))) {
            var a = [],
                b = e(this);for (var c in b) {
              a.push(Polymer.CaseMap.camelToDashCase(c));
            }this.__observedAttributes = a;
          }return this.__observedAttributes;
        } }, { key: 'template', get: function get() {
          return this.hasOwnProperty(JSCompiler_renameProperty('_template', this)) || (this._template = Polymer.DomModule['import'](this.is, 'template') || Object.getPrototypeOf(this.prototype).constructor.template), this._template;
        } }, { key: 'importPath', get: function get() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty('_importPath', this))) {
            var a = Polymer.DomModule['import'](this.is);this._importPath = a ? a.assetpath : Object.getPrototypeOf(this.prototype).constructor.importPath;
          }return this._importPath;
        } }]), b;
    }(n);return p;
  }), Polymer.telemetry = { instanceCount: 0, registrations: [], _regLog: function _regLog(a) {
      console.log('[' + a.is + ']: registered');
    }, register: function register(a) {
      this.registrations.push(a), Polymer.log && this._regLog(a);
    }, dumpRegistrations: function dumpRegistrations() {
      this.registrations.forEach(this._regLog);
    } }, Polymer.updateStyles = function (a) {
    window.ShadyCSS && window.ShadyCSS.styleDocument(a);
  }, Polymer.rootPath = Polymer.rootPath || Polymer.ResolveUrl.pathFromUrl(document.baseURI || window.location.href);
})();
(function () {
  'use notstrict';
  var a = function () {
    function a() {
      babelHelpers.classCallCheck(this, a), this._asyncModule = null, this._callback = null, this._timer = null;
    }return babelHelpers.createClass(a, [{ key: 'setConfig', value: function value(a, b) {
        var c = this;this._asyncModule = a, this._callback = b, this._timer = this._asyncModule.run(function () {
          c._timer = null, c._callback();
        });
      } }, { key: 'cancel', value: function value() {
        this.isActive() && (this._asyncModule.cancel(this._timer), this._timer = null);
      } }, { key: 'flush', value: function value() {
        this.isActive() && (this.cancel(), this._callback());
      } }, { key: 'isActive', value: function value() {
        return null != this._timer;
      } }], [{ key: 'debounce', value: function value(b, c, d) {
        return b instanceof a ? b.cancel() : b = new a(), b.setConfig(c, d), b;
      } }]), a;
  }();Polymer.Debouncer = a;
})();
(function () {
  'use notstrict';
  function a(a) {
    for (var b, c = r ? ['click'] : n, d = 0; d < c.length; d++) {
      b = c[d], a ? document.addEventListener(b, s, !0) : document.removeEventListener(b, s, !0);
    }
  }function b(a) {
    var b = a.type;if (-1 === n.indexOf(b)) return !1;if ('mousemove' === b) {
      var c = void 0 === a.buttons ? 1 : a.buttons;return a instanceof window.MouseEvent && !p && (c = o[a.which] || 0), !!(1 & c);
    }var d = void 0 === a.button ? 0 : a.button;return 0 === d;
  }function c(a) {
    if ('click' === a.type) {
      if (0 === a.detail) return !0;var b = v._findOriginalTarget(a);if (b.nodeType !== Node.ELEMENT_NODE) return !0;var c = b.getBoundingClientRect(),
          d = a.pageX,
          e = a.pageY;return !(d >= c.left && d <= c.right && e >= c.top && e <= c.bottom);
    }return !1;
  }function d(a) {
    var b = 'auto',
        c = a.composedPath && a.composedPath();if (c) for (var d, e = 0; e < c.length; e++) {
      if (d = c[e], d[l]) {
        b = d[l];break;
      }
    }return b;
  }function f(a, b, c) {
    a.movefn = b, a.upfn = c, document.addEventListener('mousemove', b), document.addEventListener('mouseup', c);
  }function g(a) {
    document.removeEventListener('mousemove', a.movefn), document.removeEventListener('mouseup', a.upfn), a.movefn = null, a.upfn = null;
  }var h = Math.abs,
      e = 'string' === typeof document.head.style.touchAction,
      j = '__polymerGestures',
      k = '__polymerGesturesHandled',
      l = '__polymerGesturesTouchAction',
      i = 25,
      m = 5,
      n = ['mousedown', 'mousemove', 'mouseup', 'click'],
      o = [0, 1, 4, 2],
      p = function () {
    try {
      return 1 === new MouseEvent('test', { buttons: 1 }).buttons;
    } catch (a) {
      return !1;
    }
  }(),
      q = !1;(function () {
    try {
      var a = Object.defineProperty({}, 'passive', { get: function get() {
          q = !0;
        } });window.addEventListener('test', null, a), window.removeEventListener('test', null, a);
    } catch (a) {}
  })();var r = navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),
      s = function s(a) {
    var b = a.sourceCapabilities;if ((!b || b.firesTouchEvents) && (a[k] = { skip: !0 }, 'click' === a.type)) {
      var c = a.composedPath && a.composedPath();if (c) for (var d = 0; d < c.length; d++) {
        if (c[d] === u.mouse.target) return;
      }a.preventDefault(), a.stopPropagation();
    }
  },
      u = { mouse: { target: null, mouseIgnoreJob: null }, touch: { x: 0, y: 0, id: -1, scrollDecided: !1 } };document.addEventListener('touchend', function (b) {
    u.mouse.mouseIgnoreJob || a(!0);u.mouse.target = b.composedPath()[0], u.mouse.mouseIgnoreJob = Polymer.Debouncer.debounce(u.mouse.mouseIgnoreJob, Polymer.Async.timeOut.after(2500), function () {
      a(), u.mouse.target = null, u.mouse.mouseIgnoreJob = null;
    });
  }, !!q && { passive: !0 });var v = { gestures: {}, recognizers: [], deepTargetFind: function deepTargetFind(a, b) {
      for (var c, d = document.elementFromPoint(a, b), e = d; e && e.shadowRoot && !window.ShadyDOM && (c = e, e = e.shadowRoot.elementFromPoint(a, b), c !== e);) {
        e && (d = e);
      }return d;
    }, _findOriginalTarget: function _findOriginalTarget(a) {
      return a.composedPath ? a.composedPath()[0] : a.target;
    }, _handleNative: function _handleNative(a) {
      var b,
          c = a.type,
          d = a.currentTarget,
          f = d[j];if (f) {
        var g = f[c];if (g) {
          if (!a[k] && (a[k] = {}, 'touch' === c.slice(0, 5))) {
            var h = a.changedTouches[0];if ('touchstart' === c && 1 === a.touches.length && (u.touch.id = h.identifier), u.touch.id !== h.identifier) return;e || 'touchstart' !== c && 'touchmove' !== c || v._handleTouchAction(a);
          }if (b = a[k], !b.skip) {
            for (var l, m = v.recognizers, n = 0; n < m.length; n++) {
              l = m[n], g[l.name] && !b[l.name] && l.flow && -1 < l.flow.start.indexOf(a.type) && l.reset && l.reset();
            }for (var i, o = 0; o < m.length; o++) {
              i = m[o], g[i.name] && !b[i.name] && (b[i.name] = !0, i[c](a));
            }
          }
        }
      }
    }, _handleTouchAction: function _handleTouchAction(a) {
      var b = a.changedTouches[0],
          c = a.type;if ('touchstart' === c) u.touch.x = b.clientX, u.touch.y = b.clientY, u.touch.scrollDecided = !1;else if ('touchmove' === c) {
        if (u.touch.scrollDecided) return;u.touch.scrollDecided = !0;var e = d(a),
            f = !1,
            g = h(u.touch.x - b.clientX),
            i = h(u.touch.y - b.clientY);a.cancelable && ('none' === e ? f = !0 : 'pan-x' === e ? f = i > g : 'pan-y' === e && (f = g > i)), f ? a.preventDefault() : v.prevent('track');
      }
    }, addListener: function addListener(a, b, c) {
      if (this.gestures[b]) return this._add(a, b, c), !0;
    }, removeListener: function removeListener(a, b, c) {
      if (this.gestures[b]) return this._remove(a, b, c), !0;
    }, _add: function _add(a, b, c) {
      var d = this.gestures[b],
          e = d.deps,
          f = d.name,
          g = a[j];g || (a[j] = g = {});for (var h, k, l = 0; l < e.length; l++) {
        (h = e[l], !(r && -1 < n.indexOf(h) && 'click' !== h)) && (k = g[h], k || (g[h] = k = { _count: 0 }), 0 === k._count && a.addEventListener(h, this._handleNative), k[f] = (k[f] || 0) + 1, k._count = (k._count || 0) + 1);
      }a.addEventListener(b, c), d.touchAction && this.setTouchAction(a, d.touchAction);
    }, _remove: function _remove(a, b, c) {
      var d = this.gestures[b],
          e = d.deps,
          f = d.name,
          g = a[j];if (g) for (var h, k, l = 0; l < e.length; l++) {
        h = e[l], k = g[h], k && k[f] && (k[f] = (k[f] || 1) - 1, k._count = (k._count || 1) - 1, 0 === k._count && a.removeEventListener(h, this._handleNative));
      }a.removeEventListener(b, c);
    }, register: function register(a) {
      this.recognizers.push(a);for (var b = 0; b < a.emits.length; b++) {
        this.gestures[a.emits[b]] = a;
      }
    }, _findRecognizerByEvent: function _findRecognizerByEvent(a) {
      for (var b, c = 0; c < this.recognizers.length; c++) {
        b = this.recognizers[c];for (var d, e = 0; e < b.emits.length; e++) {
          if (d = b.emits[e], d === a) return b;
        }
      }return null;
    }, setTouchAction: function setTouchAction(a, b) {
      e && (a.style.touchAction = b), a[l] = b;
    }, _fire: function _fire(a, b, c) {
      var d = new Event(b, { bubbles: !0, cancelable: !0, composed: !0 });if (d.detail = c, a.dispatchEvent(d), d.defaultPrevented) {
        var e = c.preventer || c.sourceEvent;e && e.preventDefault && e.preventDefault();
      }
    }, prevent: function prevent(a) {
      var b = this._findRecognizerByEvent(a);b.info && (b.info.prevent = !0);
    }, resetMouseCanceller: function resetMouseCanceller() {
      u.mouse.mouseIgnoreJob && u.mouse.mouseIgnoreJob.flush();
    } };v.register({ name: 'downup', deps: ['mousedown', 'touchstart', 'touchend'], flow: { start: ['mousedown', 'touchstart'], end: ['mouseup', 'touchend'] }, emits: ['down', 'up'], info: { movefn: null, upfn: null }, reset: function reset() {
      g(this.info);
    }, mousedown: function mousedown(a) {
      if (b(a)) {
        var c = v._findOriginalTarget(a),
            d = this,
            e = function e(a) {
          b(a) || (d._fire('up', c, a), g(d.info));
        },
            h = function h(a) {
          b(a) && d._fire('up', c, a), g(d.info);
        };f(this.info, e, h), this._fire('down', c, a);
      }
    }, touchstart: function touchstart(a) {
      this._fire('down', v._findOriginalTarget(a), a.changedTouches[0], a);
    }, touchend: function touchend(a) {
      this._fire('up', v._findOriginalTarget(a), a.changedTouches[0], a);
    }, _fire: function _fire(a, b, c, d) {
      v._fire(b, a, { x: c.clientX, y: c.clientY, sourceEvent: c, preventer: d, prevent: function prevent(a) {
          return v.prevent(a);
        } });
    } }), v.register({ name: 'track', touchAction: 'none', deps: ['mousedown', 'touchstart', 'touchmove', 'touchend'], flow: { start: ['mousedown', 'touchstart'], end: ['mouseup', 'touchend'] }, emits: ['track'], info: { x: 0, y: 0, state: 'start', started: !1, moves: [], addMove: function addMove(a) {
        this.moves.length > 2 && this.moves.shift(), this.moves.push(a);
      }, movefn: null, upfn: null, prevent: !1 }, reset: function reset() {
      this.info.state = 'start', this.info.started = !1, this.info.moves = [], this.info.x = 0, this.info.y = 0, this.info.prevent = !1, g(this.info);
    }, hasMovedEnough: function hasMovedEnough(a, b) {
      if (this.info.prevent) return !1;if (this.info.started) return !0;var c = h(this.info.x - a),
          d = h(this.info.y - b);return c >= m || d >= m;
    }, mousedown: function mousedown(a) {
      if (b(a)) {
        var c = v._findOriginalTarget(a),
            d = this,
            h = function h(a) {
          var e = a.clientX,
              f = a.clientY;d.hasMovedEnough(e, f) && (d.info.state = d.info.started ? 'mouseup' === a.type ? 'end' : 'track' : 'start', 'start' === d.info.state && v.prevent('tap'), d.info.addMove({ x: e, y: f }), !b(a) && (d.info.state = 'end', g(d.info)), d._fire(c, a), d.info.started = !0);
        },
            e = function e(a) {
          d.info.started && h(a), g(d.info);
        };f(this.info, h, e), this.info.x = a.clientX, this.info.y = a.clientY;
      }
    }, touchstart: function touchstart(a) {
      var b = a.changedTouches[0];this.info.x = b.clientX, this.info.y = b.clientY;
    }, touchmove: function touchmove(a) {
      var b = v._findOriginalTarget(a),
          c = a.changedTouches[0],
          d = c.clientX,
          e = c.clientY;this.hasMovedEnough(d, e) && ('start' === this.info.state && v.prevent('tap'), this.info.addMove({ x: d, y: e }), this._fire(b, c), this.info.state = 'track', this.info.started = !0);
    }, touchend: function touchend(a) {
      var b = v._findOriginalTarget(a),
          c = a.changedTouches[0];this.info.started && (this.info.state = 'end', this.info.addMove({ x: c.clientX, y: c.clientY }), this._fire(b, c, a));
    }, _fire: function _fire(a, b) {
      var c,
          d = this.info.moves[this.info.moves.length - 2],
          e = this.info.moves[this.info.moves.length - 1],
          f = e.x - this.info.x,
          g = e.y - this.info.y,
          h = 0;return d && (c = e.x - d.x, h = e.y - d.y), v._fire(a, 'track', { state: this.info.state, x: b.clientX, y: b.clientY, dx: f, dy: g, ddx: c, ddy: h, sourceEvent: b, hover: function hover() {
          return v.deepTargetFind(b.clientX, b.clientY);
        } });
    } }), v.register({ name: 'tap', deps: ['mousedown', 'click', 'touchstart', 'touchend'], flow: { start: ['mousedown', 'touchstart'], end: ['click', 'touchend'] }, emits: ['tap'], info: { x: NaN, y: NaN, prevent: !1 }, reset: function reset() {
      this.info.x = NaN, this.info.y = NaN, this.info.prevent = !1;
    }, save: function save(a) {
      this.info.x = a.clientX, this.info.y = a.clientY;
    }, mousedown: function mousedown(a) {
      b(a) && this.save(a);
    }, click: function click(a) {
      b(a) && this.forward(a);
    }, touchstart: function touchstart(a) {
      this.save(a.changedTouches[0], a);
    }, touchend: function touchend(a) {
      this.forward(a.changedTouches[0], a);
    }, forward: function forward(a, b) {
      var d = h(a.clientX - this.info.x),
          f = h(a.clientY - this.info.y),
          g = v._findOriginalTarget(a);(isNaN(d) || isNaN(f) || d <= i && f <= i || c(a)) && !this.info.prevent && v._fire(g, 'tap', { x: a.clientX, y: a.clientY, sourceEvent: a, preventer: b });
    } }), v.findOriginalTarget = v._findOriginalTarget, v.add = v.addListener, v.remove = v.removeListener, Polymer.Gestures = v;
})();
(function () {
  'use notstrict';
  var a = Polymer.Gestures;Polymer.GestureEventListeners = Polymer.dedupingMixin(function (b) {
    var c = function (b) {
      function c() {
        return babelHelpers.classCallCheck(this, c), babelHelpers.possibleConstructorReturn(this, (c.__proto__ || Object.getPrototypeOf(c)).apply(this, arguments));
      }return babelHelpers.inherits(c, b), babelHelpers.createClass(c, [{ key: '_addEventListenerToNode', value: function value(b, d, e) {
          a.addListener(b, d, e) || babelHelpers.get(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), '_addEventListenerToNode', this).call(this, b, d, e);
        } }, { key: '_removeEventListenerFromNode', value: function value(b, d, e) {
          a.removeListener(b, d, e) || babelHelpers.get(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), '_removeEventListenerFromNode', this).call(this, b, d, e);
        } }]), c;
    }(b);return c;
  });
})();
(function () {
  'use notstrict';
  function a(a) {
    window.HTMLImports ? HTMLImports.whenReady(a) : a();
  }Polymer.importHref = function (b, c, d, e) {
    var f = document.head.querySelector('link[href="' + b + '"][import-href]');f || (f = document.createElement('link'), f.rel = 'import', f.href = b, f.setAttribute('import-href', '')), e && f.setAttribute('async', '');var g = function g() {
      f.removeEventListener('load', h), f.removeEventListener('error', i);
    },
        h = function h(b) {
      g(), f.__dynamicImportLoaded = !0, c && a(function () {
        c(b);
      });
    },
        i = function i(b) {
      g(), f.parentNode && f.parentNode.removeChild(f), d && a(function () {
        d(b);
      });
    };return f.addEventListener('load', h), f.addEventListener('error', i), null == f.parentNode ? document.head.appendChild(f) : f.__dynamicImportLoaded && f.dispatchEvent(new Event('load')), f;
  };
})();
(function () {
  'use notstrict';
  function a() {
    e = !0, requestAnimationFrame(function () {
      e = !1, b(f), setTimeout(function () {
        c(g);
      });
    });
  }function b(a) {
    for (; a.length;) {
      d(a.shift());
    }
  }function c(a) {
    for (var b = 0, c = a.length; b < c; b++) {
      d(a.shift());
    }
  }function d(a) {
    var b = a[0],
        c = a[1],
        d = a[2];try {
      c.apply(b, d);
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }var e = !1,
      f = [],
      g = [];Polymer.RenderStatus = { beforeNextRender: function beforeNextRender(b, c, d) {
      e || a(), f.push([b, c, d]);
    }, afterNextRender: function afterNextRender(b, c, d) {
      e || a(), g.push([b, c, d]);
    }, flush: function flush() {
      for (; f.length || g.length;) {
        b(f), b(g);
      }e = !1;
    } };
})();
(function () {
  'use notstrict';
  function a() {
    document.body.removeAttribute('unresolved');
  }window.WebComponents ? window.addEventListener('WebComponentsReady', a) : 'interactive' === document.readyState || 'complete' === document.readyState ? a() : window.addEventListener('DOMContentLoaded', a);
})();
(function () {
  'use notstrict';
  function a(a, b, c) {
    return { index: a, removed: b, addedCount: c };
  }var b = 0,
      c = 1,
      d = 2,
      e = 3,
      f = { calcEditDistances: function calcEditDistances(a, b, c, d, e, f) {
      for (var g = f - e + 1, h = c - b + 1, k = Array(g), l = 0; l < g; l++) {
        k[l] = Array(h), k[l][0] = l;
      }for (var i = 0; i < h; i++) {
        k[0][i] = i;
      }for (var j = 1; j < g; j++) {
        for (var m = 1; m < h; m++) {
          if (this.equals(a[b + m - 1], d[e + j - 1])) k[j][m] = k[j - 1][m - 1];else {
            var n = k[j - 1][m] + 1,
                o = k[j][m - 1] + 1;k[j][m] = n < o ? n : o;
          }
        }
      }return k;
    }, spliceOperationsFromEditDistances: function spliceOperationsFromEditDistances(a) {
      for (var f = a.length - 1, g = a[0].length - 1, h = a[f][g], i = []; 0 < f || 0 < g;) {
        if (0 == f) {
          i.push(d), g--;continue;
        }if (0 == g) {
          i.push(e), f--;continue;
        }var j = a[f - 1][g - 1],
            k = a[f - 1][g],
            l = a[f][g - 1],
            m = void 0;m = k < l ? k < j ? k : j : l < j ? l : j, m == j ? (j == h ? i.push(b) : (i.push(c), h = j), f--, g--) : m == k ? (i.push(e), f--, h = k) : (i.push(d), g--, h = l);
      }return i.reverse(), i;
    }, calcSplices: function calcSplices(f, g, h, j, k, l) {
      var m,
          n = 0,
          o = 0,
          p = Math.min(h - g, l - k);if (0 == g && 0 == k && (n = this.sharedPrefix(f, j, p)), h == f.length && l == j.length && (o = this.sharedSuffix(f, j, p - n)), g += n, k += n, h -= o, l -= o, 0 == h - g && 0 == l - k) return [];if (g == h) {
        for (m = a(g, [], 0); k < l;) {
          m.removed.push(j[k++]);
        }return [m];
      }if (k == l) return [a(g, [], h - g)];var q = this.spliceOperationsFromEditDistances(this.calcEditDistances(f, g, h, j, k, l));m = void 0;for (var r = [], s = g, t = k, u = 0; u < q.length; u++) {
        switch (q[u]) {case b:
            m && (r.push(m), m = void 0), s++, t++;break;case c:
            m || (m = a(s, [], 0)), m.addedCount++, s++, m.removed.push(j[t]), t++;break;case d:
            m || (m = a(s, [], 0)), m.addedCount++, s++;break;case e:
            m || (m = a(s, [], 0)), m.removed.push(j[t]), t++;}
      }return m && r.push(m), r;
    }, sharedPrefix: function sharedPrefix(a, b, c) {
      for (var d = 0; d < c; d++) {
        if (!this.equals(a[d], b[d])) return d;
      }return c;
    }, sharedSuffix: function sharedSuffix(a, b, c) {
      for (var d = a.length, e = b.length, f = 0; f < c && this.equals(a[--d], b[--e]);) {
        f++;
      }return f;
    }, calculateSplices: function calculateSplices(a, b) {
      return this.calcSplices(a, 0, a.length, b, 0, b.length);
    }, equals: function equals(a, b) {
      return a === b;
    } };Polymer.ArraySplice = { calculateSplices: function calculateSplices(a, b) {
      return f.calculateSplices(a, b);
    } };
})();
(function () {
  'use notstrict';
  function a(a) {
    return 'slot' === a.localName;
  }var b = function () {
    function b(a, c) {
      var d = this;babelHelpers.classCallCheck(this, b), this._shadyChildrenObserver = null, this._nativeChildrenObserver = null, this._connected = !1, this._target = a, this.callback = c, this._effectiveNodes = [], this._observer = null, this._scheduled = !1, this._boundSchedule = function () {
        d._schedule();
      }, this.connect(), this._schedule();
    }return babelHelpers.createClass(b, null, [{ key: 'getFlattenedNodes', value: function value(b) {
        return a(b) ? b.assignedNodes({ flatten: !0 }) : Array.from(b.childNodes).map(function (b) {
          return a(b) ? b.assignedNodes({ flatten: !0 }) : [b];
        }).reduce(function (c, a) {
          return c.concat(a);
        }, []);
      } }]), babelHelpers.createClass(b, [{ key: 'connect', value: function value() {
        var b = this;a(this._target) ? this._listenSlots([this._target]) : (this._listenSlots(this._target.children), window.ShadyDOM ? this._shadyChildrenObserver = ShadyDOM.observeChildren(this._target, function (a) {
          b._processMutations(a);
        }) : (this._nativeChildrenObserver = new MutationObserver(function (a) {
          b._processMutations(a);
        }), this._nativeChildrenObserver.observe(this._target, { childList: !0 }))), this._connected = !0;
      } }, { key: 'disconnect', value: function value() {
        a(this._target) ? this._unlistenSlots([this._target]) : (this._unlistenSlots(this._target.children), window.ShadyDOM && this._shadyChildrenObserver ? (ShadyDOM.unobserveChildren(this._shadyChildrenObserver), this._shadyChildrenObserver = null) : this._nativeChildrenObserver && (this._nativeChildrenObserver.disconnect(), this._nativeChildrenObserver = null)), this._connected = !1;
      } }, { key: '_schedule', value: function value() {
        var a = this;this._scheduled || (this._scheduled = !0, Polymer.Async.microTask.run(function () {
          return a.flush();
        }));
      } }, { key: '_processMutations', value: function value(a) {
        this._processSlotMutations(a), this.flush();
      } }, { key: '_processSlotMutations', value: function value(a) {
        if (a) for (var b, c = 0; c < a.length; c++) {
          b = a[c], b.addedNodes && this._listenSlots(b.addedNodes), b.removedNodes && this._unlistenSlots(b.removedNodes);
        }
      } }, { key: 'flush', value: function value() {
        if (this._connected) {
          window.ShadyDOM && ShadyDOM.flush(), this._nativeChildrenObserver ? this._processSlotMutations(this._nativeChildrenObserver.takeRecords()) : this.shadyChildrenObserver && this._processSlotMutations(this._shadyChildrenObserver.takeRecords()), this._scheduled = !1;for (var a, b = { target: this._target, addedNodes: [], removedNodes: [] }, c = this.constructor.getFlattenedNodes(this._target), d = Polymer.ArraySplice.calculateSplices(c, this._effectiveNodes), e = 0; e < d.length && (a = d[e]); e++) {
            for (var f, g = 0; g < a.removed.length && (f = a.removed[g]); g++) {
              b.removedNodes.push(f);
            }
          }for (var h, i = 0; i < d.length && (h = d[i]); i++) {
            for (var j = h.index; j < h.index + h.addedCount; j++) {
              b.addedNodes.push(c[j]);
            }
          }this._effectiveNodes = c;var k = !1;return (b.addedNodes.length || b.removedNodes.length) && (k = !0, this.callback.call(this._target, b)), k;
        }
      } }, { key: '_listenSlots', value: function value(b) {
        for (var c, d = 0; d < b.length; d++) {
          c = b[d], a(c) && c.addEventListener('slotchange', this._boundSchedule);
        }
      } }, { key: '_unlistenSlots', value: function value(b) {
        for (var c, d = 0; d < b.length; d++) {
          c = b[d], a(c) && c.removeEventListener('slotchange', this._boundSchedule);
        }
      } }]), b;
  }();Polymer.FlattenedNodesObserver = b;
})();
(function () {
  'use notstrict';
  function a() {
    for (var a = !!b.length; b.length;) {
      try {
        b.shift().flush();
      } catch (a) {
        setTimeout(function () {
          throw a;
        });
      }
    }return a;
  }var b = [];Polymer.enqueueDebouncer = function (a) {
    b.push(a);
  }, Polymer.flush = function () {
    var b, c;do {
      b = window.ShadyDOM && ShadyDOM.flush(), window.ShadyCSS && window.ShadyCSS.ScopingShim && window.ShadyCSS.ScopingShim.flush(), c = a();
    } while (b || c);
  };
})();
(function () {
  'use notstrict';
  var a = Element.prototype,
      b = a.matches || a.matchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector || a.webkitMatchesSelector,
      d = function d(a, c) {
    return b.call(a, c);
  },
      c = function () {
    function a(b) {
      babelHelpers.classCallCheck(this, a), this.node = b;
    }return babelHelpers.createClass(a, [{ key: 'observeNodes', value: function value(a) {
        return new Polymer.FlattenedNodesObserver(this.node, a);
      } }, { key: 'unobserveNodes', value: function value(a) {
        a.disconnect();
      } }, { key: 'notifyObserver', value: function value() {} }, { key: 'deepContains', value: function value(a) {
        if (this.node.contains(a)) return !0;for (var b = a, c = a.ownerDocument; b && b !== c && b !== this.node;) {
          b = b.parentNode || b.host;
        }return b === this.node;
      } }, { key: 'getOwnerRoot', value: function value() {
        return this.node.getRootNode();
      } }, { key: 'getDistributedNodes', value: function value() {
        return 'slot' === this.node.localName ? this.node.assignedNodes({ flatten: !0 }) : [];
      } }, { key: 'getDestinationInsertionPoints', value: function value() {
        for (var a = [], b = this.node.assignedSlot; b;) {
          a.push(b), b = b.assignedSlot;
        }return a;
      } }, { key: 'importNode', value: function value(a, b) {
        var c = this.node instanceof Document ? this.node : this.node.ownerDocument;return c.importNode(a, b);
      } }, { key: 'getEffectiveChildNodes', value: function value() {
        return Polymer.FlattenedNodesObserver.getFlattenedNodes(this.node);
      } }, { key: 'queryDistributedElements', value: function value(a) {
        for (var b, c = this.getEffectiveChildNodes(), e = [], f = 0, g = c.length; f < g && (b = c[f]); f++) {
          b.nodeType === Node.ELEMENT_NODE && d(b, a) && e.push(b);
        }return e;
      } }, { key: 'activeElement', get: function get() {
        var a = this.node;return void 0 === a._activeElement ? a.activeElement : a._activeElement;
      } }]), a;
  }();(function (a, b) {
    for (var c = function c(_c) {
      var d = b[_c];a[d] = function () {
        return this.node[d].apply(this.node, arguments);
      };
    }, d = 0; d < b.length; d++) {
      c(d);
    }
  })(c.prototype, ['cloneNode', 'appendChild', 'insertBefore', 'removeChild', 'replaceChild', 'setAttribute', 'removeAttribute', 'querySelector', 'querySelectorAll']), function (a, b) {
    for (var c = function c(_c2) {
      var d = b[_c2];Object.defineProperty(a, d, { get: function get() {
          return this.node[d];
        }, configurable: !0 });
    }, d = 0; d < b.length; d++) {
      c(d);
    }
  }(c.prototype, ['parentNode', 'firstChild', 'lastChild', 'nextSibling', 'previousSibling', 'firstElementChild', 'lastElementChild', 'nextElementSibling', 'previousElementSibling', 'childNodes', 'children', 'classList']), function (a, b) {
    for (var c = function c(_c3) {
      var d = b[_c3];Object.defineProperty(a, d, { get: function get() {
          return this.node[d];
        }, set: function set(a) {
          this.node[d] = a;
        }, configurable: !0 });
    }, d = 0; d < b.length; d++) {
      c(d);
    }
  }(c.prototype, ['textContent', 'innerHTML']);var e = function () {
    function a(b) {
      babelHelpers.classCallCheck(this, a), this.event = b;
    }return babelHelpers.createClass(a, [{ key: 'rootTarget', get: function get() {
        return this.event.composedPath()[0];
      } }, { key: 'localTarget', get: function get() {
        return this.event.target;
      } }, { key: 'path', get: function get() {
        return this.event.composedPath();
      } }]), a;
  }();Polymer.dom = function (a) {
    a = a || document;var b = a instanceof Event ? e : c;return a.__domApi || (a.__domApi = new b(a)), a.__domApi;
  }, Polymer.dom.matchesSelector = d, Polymer.dom.flush = Polymer.flush, Polymer.dom.addDebouncer = Polymer.enqueueDebouncer;var f = Polymer.Settings || {};f.useShadow = !window.ShadyDOM, f.useNativeCSSProperties = !(window.ShadyCSS && !window.ShadyCSS.nativeCss), f.useNativeCustomElements = !window.customElements.polyfillWrapFlushCallback, Polymer.Settings = f;
})();
(function () {
  'use notstrict';
  var a = window.ShadyCSS;Polymer.LegacyElementMixin = Polymer.dedupingMixin(function (b) {
    var c = Polymer.GestureEventListeners(Polymer.ElementMixin(b)),
        d = { x: 'pan-x', y: 'pan-y', none: 'none', all: 'auto' },
        e = function (b) {
      function c() {
        babelHelpers.classCallCheck(this, c);var a = babelHelpers.possibleConstructorReturn(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this));return a.root = a, a.created(), a;
      }return babelHelpers.inherits(c, b), babelHelpers.createClass(c, [{ key: 'created', value: function value() {} }, { key: 'connectedCallback', value: function value() {
          babelHelpers.get(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), 'connectedCallback', this).call(this), this.isAttached = !0, this.attached();
        } }, { key: 'attached', value: function value() {} }, { key: 'disconnectedCallback', value: function value() {
          babelHelpers.get(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), 'disconnectedCallback', this).call(this), this.isAttached = !1, this.detached();
        } }, { key: 'detached', value: function value() {} }, { key: 'attributeChangedCallback', value: function value(a, b, d) {
          b !== d && (babelHelpers.get(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), 'attributeChangedCallback', this).call(this, a, b, d), this.attributeChanged(a, b, d));
        } }, { key: 'attributeChanged', value: function value() {} }, { key: '_initializeProperties', value: function value() {
          var a = Object.getPrototypeOf(this);a.hasOwnProperty('__hasRegisterFinished') || (a.__hasRegisterFinished = !0, this._registered()), babelHelpers.get(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), '_initializeProperties', this).call(this);
        } }, { key: '_registered', value: function value() {} }, { key: 'ready', value: function value() {
          this._ensureAttributes(), this._applyListeners(), babelHelpers.get(c.prototype.__proto__ || Object.getPrototypeOf(c.prototype), 'ready', this).call(this);
        } }, { key: '_ensureAttributes', value: function value() {} }, { key: '_applyListeners', value: function value() {} }, { key: 'serialize', value: function value(a) {
          return this._serializeValue(a);
        } }, { key: 'deserialize', value: function value(a, b) {
          return this._deserializeValue(a, b);
        } }, { key: 'reflectPropertyToAttribute', value: function value(a, b, c) {
          this._propertyToAttribute(a, b, c);
        } }, { key: 'serializeValueToAttribute', value: function value(a, b, c) {
          this._valueToNodeAttribute(c || this, a, b);
        } }, { key: 'extend', value: function value(a, b) {
          if (!(a && b)) return a || b;for (var c, d, e = Object.getOwnPropertyNames(b), f = 0; f < e.length && (c = e[f]); f++) {
            d = Object.getOwnPropertyDescriptor(b, c), d && Object.defineProperty(a, c, d);
          }return a;
        } }, { key: 'mixin', value: function value(a, b) {
          for (var c in b) {
            a[c] = b[c];
          }return a;
        } }, { key: 'chainObject', value: function value(a, b) {
          return a && b && a !== b && (a.__proto__ = b), a;
        } }, { key: 'instanceTemplate', value: function value(a) {
          var b = this.constructor._contentForTemplate(a),
              c = document.importNode(b, !0);return c;
        } }, { key: 'fire', value: function value(a, b, c) {
          c = c || {}, b = null === b || void 0 === b ? {} : b;var d = new Event(a, { bubbles: void 0 === c.bubbles || c.bubbles, cancelable: !!c.cancelable, composed: void 0 === c.composed || c.composed });d.detail = b;var e = c.node || this;return e.dispatchEvent(d), d;
        } }, { key: 'listen', value: function value(a, b, c) {
          a = a || this;var d = this.__boundListeners || (this.__boundListeners = new WeakMap()),
              e = d.get(a);e || (e = {}, d.set(a, e));var f = b + c;e[f] || (e[f] = this._addMethodEventListenerToNode(a, b, c, this));
        } }, { key: 'unlisten', value: function value(a, b, c) {
          a = a || this;var d = this.__boundListeners && this.__boundListeners.get(a),
              e = b + c,
              f = d && d[e];f && (this._removeEventListenerFromNode(a, b, f), d[e] = null);
        } }, { key: 'setScrollDirection', value: function value(a, b) {
          Polymer.Gestures.setTouchAction(b || this, d[a] || 'auto');
        } }, { key: '$$', value: function value(a) {
          return this.root.querySelector(a);
        } }, { key: 'distributeContent', value: function value() {
          window.ShadyDOM && this.shadowRoot && this.shadowRoot.forceRender();
        } }, { key: 'getEffectiveChildNodes', value: function value() {
          return Polymer.dom(this).getEffectiveChildNodes();
        } }, { key: 'queryDistributedElements', value: function value(a) {
          return Polymer.dom(this).queryDistributedElements(a);
        } }, { key: 'getEffectiveChildren', value: function value() {
          var a = this.getEffectiveChildNodes();return a.filter(function (a) {
            return a.nodeType === Node.ELEMENT_NODE;
          });
        } }, { key: 'getEffectiveTextContent', value: function value() {
          for (var a, b = this.getEffectiveChildNodes(), c = [], d = 0; a = b[d]; d++) {
            a.nodeType !== Node.COMMENT_NODE && c.push(a.textContent);
          }return c.join('');
        } }, { key: 'queryEffectiveChildren', value: function value(a) {
          var b = this.queryDistributedElements(a);return b && b[0];
        } }, { key: 'queryAllEffectiveChildren', value: function value(a) {
          return this.queryDistributedElements(a);
        } }, { key: 'getContentChildNodes', value: function value(a) {
          var b = this.root.querySelector(a || 'slot');return b ? Polymer.dom(b).getDistributedNodes() : [];
        } }, { key: 'getContentChildren', value: function value(a) {
          return this.getContentChildNodes(a).filter(function (a) {
            return a.nodeType === Node.ELEMENT_NODE;
          });
        } }, { key: 'isLightDescendant', value: function value(a) {
          return this !== a && this.contains(a) && this.getRootNode() === a.getRootNode();
        } }, { key: 'isLocalDescendant', value: function value(a) {
          return this.root === a.getRootNode();
        } }, { key: 'scopeSubtree', value: function value() {} }, { key: 'getComputedStyleValue', value: function value(b) {
          return a.getComputedStyleValue(this, b);
        } }, { key: 'debounce', value: function value(a, b, c) {
          return this._debouncers = this._debouncers || {}, this._debouncers[a] = Polymer.Debouncer.debounce(this._debouncers[a], 0 < c ? Polymer.Async.timeOut.after(c) : Polymer.Async.microTask, b.bind(this));
        } }, { key: 'isDebouncerActive', value: function value(a) {
          this._debouncers = this._debouncers || {};var b = this._debouncers[a];return !!(b && b.isActive());
        } }, { key: 'flushDebouncer', value: function value(a) {
          this._debouncers = this._debouncers || {};var b = this._debouncers[a];b && b.flush();
        } }, { key: 'cancelDebouncer', value: function value(a) {
          this._debouncers = this._debouncers || {};var b = this._debouncers[a];b && b.cancel();
        } }, { key: 'async', value: function value(a, b) {
          return 0 < b ? Polymer.Async.timeOut.run(a.bind(this), b) : ~Polymer.Async.microTask.run(a.bind(this));
        } }, { key: 'cancelAsync', value: function value(a) {
          0 > a ? Polymer.Async.microTask.cancel(~a) : Polymer.Async.timeOut.cancel(a);
        } }, { key: 'create', value: function value(a, b) {
          var c = document.createElement(a);if (b) if (c.setProperties) c.setProperties(b);else for (var d in b) {
            c[d] = b[d];
          }return c;
        } }, { key: 'importHref', value: function value(a, b, c, d) {
          var e = b ? b.bind(this) : null,
              f = c ? c.bind(this) : null;return Polymer.importHref(a, e, f, d);
        } }, { key: 'elementMatches', value: function value(a, b) {
          return Polymer.dom.matchesSelector(b || this, a);
        } }, { key: 'toggleAttribute', value: function value(a, b, c) {
          c = c || this, 1 == arguments.length && (b = !c.hasAttribute(a)), b ? c.setAttribute(a, '') : c.removeAttribute(a);
        } }, { key: 'toggleClass', value: function value(a, b, c) {
          c = c || this, 1 == arguments.length && (b = !c.classList.contains(a)), b ? c.classList.add(a) : c.classList.remove(a);
        } }, { key: 'transform', value: function value(a, b) {
          b = b || this, b.style.webkitTransform = a, b.style.transform = a;
        } }, { key: 'translate3d', value: function value(a, b, c, d) {
          d = d || this, this.transform('translate3d(' + a + ',' + b + ',' + c + ')', d);
        } }, { key: 'arrayDelete', value: function value(a, b) {
          var c;if (!Array.isArray(a)) {
            var d = Polymer.Path.get(this, a);if (c = d.indexOf(b), 0 <= c) return this.splice(a, c, 1);
          } else if (c = a.indexOf(b), 0 <= c) return a.splice(c, 1);return null;
        } }, { key: '_logger', value: function value(a, b) {
          var c;Array.isArray(b) && 1 === b.length && (b = b[0]), 'log' === a || 'warn' === a || 'error' === a ? (c = console)[a].apply(c, babelHelpers.toConsumableArray(b)) : void 0;
        } }, { key: '_log', value: function value() {
          for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) {
            b[c] = arguments[c];
          }this._logger('log', b);
        } }, { key: '_warn', value: function value() {
          for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) {
            b[c] = arguments[c];
          }this._logger('warn', b);
        } }, { key: '_error', value: function value() {
          for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) {
            b[c] = arguments[c];
          }this._logger('error', b);
        } }, { key: '_logf', value: function value() {
          for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) {
            b[c] = arguments[c];
          }return ['[%s::%s]', this.is].concat(b);
        } }, { key: 'domHost', get: function get() {
          var a = this.getRootNode();return a instanceof DocumentFragment ? a.host : a;
        } }]), c;
    }(c);return e;
  });
})();
(function () {
  'use notstrict';
  function a(a, e) {
    if (!a) return e;e = b(e), Array.isArray(a) || (a = [a]);var f = e.prototype.behaviors;return a = d(a, null, f), e = c(a, e), f && (a = f.concat(a)), e.prototype.behaviors = a, e;
  }function c(a, d) {
    for (var f, b = 0; b < a.length; b++) {
      f = a[b], f && (d = Array.isArray(f) ? c(f, d) : e(f, d));
    }return d;
  }function d(a, c, e) {
    c = c || [];for (var f, b = a.length - 1; 0 <= b; b--) {
      f = a[b], f ? Array.isArray(f) ? d(f, c) : 0 > c.indexOf(f) && (!e || 0 > e.indexOf(f)) && c.unshift(f) : console.warn('behavior is null, check for missing or 404 import');
    }return c;
  }function e(b, a) {
    var c = function (c) {
      function d() {
        return babelHelpers.classCallCheck(this, d), babelHelpers.possibleConstructorReturn(this, (d.__proto__ || Object.getPrototypeOf(d)).apply(this, arguments));
      }return babelHelpers.inherits(d, c), babelHelpers.createClass(d, [{ key: 'created', value: function value() {
          babelHelpers.get(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), 'created', this).call(this), b.created && b.created.call(this);
        } }, { key: '_registered', value: function value() {
          babelHelpers.get(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), '_registered', this).call(this), b.beforeRegister && b.beforeRegister.call(Object.getPrototypeOf(this)), b.registered && b.registered.call(Object.getPrototypeOf(this));
        } }, { key: '_applyListeners', value: function value() {
          if (babelHelpers.get(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), '_applyListeners', this).call(this), b.listeners) for (var a in b.listeners) {
            this._addMethodEventListenerToNode(this, a, b.listeners[a]);
          }
        } }, { key: '_ensureAttributes', value: function value() {
          if (b.hostAttributes) for (var c in b.hostAttributes) {
            this._ensureAttribute(c, b.hostAttributes[c]);
          }babelHelpers.get(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), '_ensureAttributes', this).call(this);
        } }, { key: 'ready', value: function value() {
          babelHelpers.get(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), 'ready', this).call(this), b.ready && b.ready.call(this);
        } }, { key: 'attached', value: function value() {
          babelHelpers.get(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), 'attached', this).call(this), b.attached && b.attached.call(this);
        } }, { key: 'detached', value: function value() {
          babelHelpers.get(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), 'detached', this).call(this), b.detached && b.detached.call(this);
        } }, { key: 'attributeChanged', value: function value(a, c, e) {
          babelHelpers.get(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), 'attributeChanged', this).call(this, a, c, e), b.attributeChanged && b.attributeChanged.call(this, a, c, e);
        } }], [{ key: 'properties', get: function get() {
          return b.properties;
        } }, { key: 'observers', get: function get() {
          return b.observers;
        } }, { key: 'template', get: function get() {
          return b._template || Polymer.DomModule['import'](this.is, 'template') || a.template || this.prototype._template;
        } }]), d;
    }(a);for (var d in c.generatedFrom = b, b) {
      if (!(d in f)) {
        var e = Object.getOwnPropertyDescriptor(b, d);e && Object.defineProperty(c.prototype, d, e);
      }
    }return c;
  }var b = Polymer.LegacyElementMixin,
      f = { attached: !0, detached: !0, ready: !0, created: !0, beforeRegister: !0, registered: !0, attributeChanged: !0, behaviors: !0 };Polymer.Class = function (c) {
    c || console.warn('Polymer.Class requires `info` argument');var d = e(c, c.behaviors ? a(c.behaviors, HTMLElement) : b(HTMLElement));return d.is = c.is, d;
  }, Polymer.mixinBehaviors = a;
})();
'use notstrict';var IE = function () {
  function a() {}return a.is = 'install-error', a;
}();window.objectify ? window.register(IE) : window.addEventListener('RegisterReady', function () {
  window.register(IE);
});
(function () {
  'use notstrict';
  window.Polymer._polymerFn = function (a) {
    var b;return b = 'function' === typeof a ? a : Polymer.Class(a), customElements.define(b.is, b), b;
  };
})();
(function () {
  'use notstrict';
  function a(a, b, c, d, e) {
    var f;e && (f = 'object' === ('undefined' === typeof c ? 'undefined' : babelHelpers['typeof'](c)) && null !== c, f && (d = a.__dataTemp[b]));var g = d !== c && (d === d || c === c);return f && g && (a.__dataTemp[b] = c), g;
  }Polymer.MutableData = Polymer.dedupingMixin(function (b) {
    var c = function (b) {
      function c() {
        return babelHelpers.classCallCheck(this, c), babelHelpers.possibleConstructorReturn(this, (c.__proto__ || Object.getPrototypeOf(c)).apply(this, arguments));
      }return babelHelpers.inherits(c, b), babelHelpers.createClass(c, [{ key: '_shouldPropertyChange', value: function value(b, c, d) {
          return a(this, b, c, d, !0);
        } }]), c;
    }(b);return c;
  }), Polymer.OptionalMutableData = Polymer.dedupingMixin(function (b) {
    var c = function (b) {
      function c() {
        return babelHelpers.classCallCheck(this, c), babelHelpers.possibleConstructorReturn(this, (c.__proto__ || Object.getPrototypeOf(c)).apply(this, arguments));
      }return babelHelpers.inherits(c, b), babelHelpers.createClass(c, [{ key: '_shouldPropertyChange', value: function value(b, c, d) {
          return a(this, b, c, d, this.mutableData);
        } }], [{ key: 'properties', get: function get() {
          return { mutableData: Boolean };
        } }]), c;
    }(b);return c;
  }), Polymer.MutableData._mutablePropertyChange = a;
})();
(function () {
  'use notstrict';
  function a() {
    return j;
  }function b(a, b) {
    j = a, typeof Object['setPrototype' + 'Of'] === 'function'?Object['setPrototype' + 'Of'](a,b.prototype):a.__proto__ = b.prototype, new b(), j = null;
  }function c(a) {
    var b = a.__dataHost;return b && b._methodHost || b;
  }function d(a, b, c) {
    var d = c.mutableData ? o : n,
        e = function (a) {
      function b() {
        return babelHelpers.classCallCheck(this, b), babelHelpers.possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments));
      }return babelHelpers.inherits(b, a), b;
    }(d);return e.prototype.__templatizeOptions = c, e.prototype._bindTemplate(a), g(e, a, b, c), e;
  }function e(a, c, d) {
    var e = d.forwardHostProp;if (e) {
      var g = c.templatizeTemplateClass;if (!g) {
        var h = d.mutableData ? l : k;g = c.templatizeTemplateClass = function (a) {
          function b() {
            return babelHelpers.classCallCheck(this, b), babelHelpers.possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments));
          }return babelHelpers.inherits(b, a), b;
        }(h);var i = c.hostProps;for (var j in i) {
          g.prototype._addPropertyEffect('_host_' + j, g.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE, { fn: f(j, e) }), g.prototype._createNotifyingProperty('_host_' + j);
        }
      }b(a, g), a.__dataProto && Object.assign(a.__data, a.__dataProto), a.__dataTemp = {}, a.__dataPending = null, a.__dataOld = null, a._enableProperties();
    }
  }function f(a, b) {
    return function (a, c, d) {
      b.call(a.__templatizeOwner, c.substring(6), d[c]);
    };
  }function g(a, b, c, d) {
    var e = c.hostProps || {};for (var f in d.instanceProps) {
      delete e[f];var g = d.notifyInstanceProp;g && a.prototype._addPropertyEffect(f, a.prototype.PROPERTY_EFFECT_TYPES.NOTIFY, { fn: h(f, g) });
    }if (d.forwardHostProp && b.__dataHost) for (var j in e) {
      a.prototype._addPropertyEffect(j, a.prototype.PROPERTY_EFFECT_TYPES.NOTIFY, { fn: i() });
    }
  }function h(a, b) {
    return function (a, c, d) {
      b.call(a.__templatizeOwner, a, c, d[c]);
    };
  }function i() {
    return function (a, b, c) {
      a.__dataHost._setPendingPropertyOrPath('_host_' + b, c[b], !0, !0);
    };
  }var j = null;a.prototype = Object.create(HTMLTemplateElement.prototype, { constructor: { value: a, writable: !0 } });var k = Polymer.PropertyEffects(a),
      l = Polymer.MutableData(k),
      m = Polymer.PropertyEffects(function () {
    function a() {
      babelHelpers.classCallCheck(this, a);
    }return a;
  }()),
      n = function (a) {
    function b(a) {
      babelHelpers.classCallCheck(this, b);var c = babelHelpers.possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));c._configureProperties(a), c.root = c._stampTemplate(c.__dataHost);for (var d = c.children = [], e = c.root.firstChild; e; e = e.nextSibling) {
        d.push(e), e.__templatizeInstance = c;
      }c.__templatizeOwner.__hideTemplateChildren__ && c._showHideChildren(!0);var f = c.__templatizeOptions;return (a && f.instanceProps || !f.instanceProps) && c._enableProperties(), c;
    }return babelHelpers.inherits(b, a), babelHelpers.createClass(b, [{ key: '_configureProperties', value: function value(a) {
        var b = this.__templatizeOptions;if (a) for (var c in b.instanceProps) {
          c in a && this._setPendingProperty(c, a[c]);
        }for (var d in this.__hostProps) {
          this._setPendingProperty(d, this.__dataHost['_host_' + d]);
        }
      } }, { key: 'forwardHostProp', value: function value(a, b) {
        this._setPendingPropertyOrPath(a, b, !1, !0) && this.__dataHost._enqueueClient(this);
      } }, { key: '_addEventListenerToNode', value: function value(a, b, c) {
        var d = this;if (this._methodHost && this.__templatizeOptions.parentModel) this._methodHost._addEventListenerToNode(a, b, function (a) {
          a.model = d, c(a);
        });else {
          var e = this.__dataHost.__dataHost;e && e._addEventListenerToNode(a, b, c);
        }
      } }, { key: '_showHideChildren', value: function value(a) {
        for (var b, d = this.children, c = 0; c < d.length; c++) {
          b = d[c], !!a != !!b.__hideTemplateChildren__ && (b.nodeType === Node.TEXT_NODE ? a ? (b.__polymerTextContent__ = b.textContent, b.textContent = '') : b.textContent = b.__polymerTextContent__ : b.style && (a ? (b.__polymerDisplay__ = b.style.display, b.style.display = 'none') : b.style.display = b.__polymerDisplay__)), b.__hideTemplateChildren__ = a, b._showHideChildren && b._showHideChildren(a);
        }
      } }, { key: '_setUnmanagedPropertyToNode', value: function value(a, c, d) {
        a.__hideTemplateChildren__ && a.nodeType == Node.TEXT_NODE && 'textContent' == c ? a.__polymerTextContent__ = d : babelHelpers.get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), '_setUnmanagedPropertyToNode', this).call(this, a, c, d);
      } }, { key: 'parentModel', get: function get() {
        var a = this.__parentModel;if (!a) {
          var b;a = this;do {
            a = a.__dataHost.__dataHost;
          } while ((b = a.__templatizeOptions) && !b.parentModel);this.__parentModel = a;
        }return a;
      } }]), b;
  }(m),
      o = Polymer.MutableData(n);Polymer.Templatize = { templatize: function templatize(a, b, f) {
      if (f = f || {}, a.__templatizeOwner) throw new Error('A <template> can only be templatized once');a.__templatizeOwner = b;var g = b.constructor._parseTemplate(a),
          h = g.templatizeInstanceClass;h || (h = d(a, g, f), g.templatizeInstanceClass = h), e(a, g, f);var i = function (a) {
        function b() {
          return babelHelpers.classCallCheck(this, b), babelHelpers.possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments));
        }return babelHelpers.inherits(b, a), b;
      }(h);return i.prototype._methodHost = c(a), i.prototype.__dataHost = a, i.prototype.__templatizeOwner = b, i.prototype.__hostProps = g.hostProps, i;
    }, modelForElement: function modelForElement(a, b) {
      for (var c; b;) {
        if (!(c = b.__templatizeInstance)) b = b.parentNode;else if (c.__dataHost != a) b = c.__dataHost;else return c;
      }return null;
    } };
})();
(function () {
  'use notstrict';
  Polymer.Templatizer = { templatize: function templatize(a, b) {
      this._templatizerTemplate = a, this.ctor = Polymer.Templatize.templatize(a, this, { mutableData: !!b, parentModel: this._parentModel, instanceProps: this._instanceProps, forwardHostProp: this._forwardHostPropV2, notifyInstanceProp: this._notifyInstancePropV2 });
    }, stamp: function stamp(a) {
      return new this.ctor(a);
    }, modelForElement: function modelForElement(a) {
      return Polymer.Templatize.modelForElement(this._templatizerTemplate, a);
    } };
})();
(function () {
  'use notstrict';
  var a = Polymer.GestureEventListeners(Polymer.OptionalMutableData(Polymer.PropertyEffects(HTMLElement))),
      b = function (a) {
    function b() {
      return babelHelpers.classCallCheck(this, b), babelHelpers.possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments));
    }return babelHelpers.inherits(b, a), babelHelpers.createClass(b, [{ key: 'attributeChangedCallback', value: function value() {
        this.mutableData = !0;
      } }, { key: 'connectedCallback', value: function value() {
        this.render();
      } }, { key: 'disconnectedCallback', value: function value() {
        this.__removeChildren();
      } }, { key: '__insertChildren', value: function value() {
        this.parentNode.insertBefore(this.root, this);
      } }, { key: '__removeChildren', value: function value() {
        if (this.__children) for (var a = 0; a < this.__children.length; a++) {
          this.root.appendChild(this.__children[a]);
        }
      } }, { key: 'render', value: function value() {
        var a,
            b = this;if (!this.__children) {
          if (a = a || this.querySelector('template'), !a) {
            var c = new MutationObserver(function () {
              if (a = b.querySelector('template'), a) c.disconnect(), b.render(a);else throw new Error('dom-bind requires a <template> child');
            });return void c.observe(this, { childList: !0 });
          }this.root = this._stampTemplate(a), this.$ = this.root.$, this.__children = [];for (var d = this.root.firstChild; d; d = d.nextSibling) {
            this.__children[this.__children.length] = d;
          }this._enableProperties();
        }this.__insertChildren(), this.dispatchEvent(new CustomEvent('dom-change', { bubbles: !0, composed: !0 }));
      } }], [{ key: 'observedAttributes', get: function get() {
        return ['mutable-data'];
      } }]), b;
  }(a);customElements.define('dom-bind', b);
})();
(function () {
  'use notstrict';
  var a = Polymer.ElementMixin(HTMLElement);Polymer.Element = a;
})();
(function () {
  'use notstrict';
  var a = Polymer.OptionalMutableData(Polymer.Element),
      b = function (a) {
    function b() {
      babelHelpers.classCallCheck(this, b);var a = babelHelpers.possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));return a.__instances = [], a.__limit = Infinity, a.__pool = [], a.__renderDebouncer = null, a.__itemsIdxToInstIdx = {}, a.__chunkCount = null, a.__lastChunkTime = null, a.__needFullRefresh = !1, a.__sortFn = null, a.__filterFn = null, a.__observePaths = null, a.__ctor = null, a;
    }return babelHelpers.inherits(b, a), babelHelpers.createClass(b, null, [{ key: 'is', get: function get() {
        return 'dom-repeat';
      } }, { key: 'template', get: function get() {
        return null;
      } }, { key: 'properties', get: function get() {
        return { items: { type: Array }, as: { type: String, value: 'item' }, indexAs: { type: String, value: 'index' }, itemsIndexAs: { type: String, value: 'itemsIndex' }, sort: { type: Function, observer: '__sortChanged' }, filter: { type: Function, observer: '__filterChanged' }, observe: { type: String, observer: '__observeChanged' }, delay: Number, renderedItemCount: { type: Number, notify: !0, readOnly: !0 }, initialCount: { type: Number, observer: '__initializeChunking' }, targetFramerate: { type: Number, value: 20 }, _targetFrameTime: { type: Number, computed: '__computeFrameTime(targetFramerate)' } };
      } }, { key: 'observers', get: function get() {
        return ['__itemsChanged(items.*)'];
      } }]), babelHelpers.createClass(b, [{ key: 'disconnectedCallback', value: function value() {
        babelHelpers.get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), 'disconnectedCallback', this).call(this), this.__isDetached = !0;for (var a = 0; a < this.__instances.length; a++) {
          this.__detachInstance(a);
        }
      } }, { key: 'connectedCallback', value: function value() {
        if (babelHelpers.get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), 'connectedCallback', this).call(this), this.__isDetached) {
          this.__isDetached = !1;for (var a = this.parentNode, c = 0; c < this.__instances.length; c++) {
            this.__attachInstance(c, a);
          }
        }
      } }, { key: '__ensureTemplatized', value: function value() {
        var a = this;if (!this.__ctor) {
          var b = this.template = this.querySelector('template');if (!b) {
            var c = new MutationObserver(function () {
              if (a.querySelector('template')) c.disconnect(), a.__render();else throw new Error('dom-repeat requires a <template> child');
            });return c.observe(this, { childList: !0 }), !1;
          }var d = {};d[this.as] = !0, d[this.indexAs] = !0, d[this.itemsIndexAs] = !0, this.__ctor = Polymer.Templatize.templatize(b, this, { mutableData: this.mutableData, parentModel: !0, instanceProps: d, forwardHostProp: function forwardHostProp(a, b) {
              for (var c, d = this.__instances, e = 0; e < d.length && (c = d[e]); e++) {
                c.forwardHostProp(a, b);
              }
            }, notifyInstanceProp: function notifyInstanceProp(a, b, c) {
              if (Polymer.Path.matches(this.as, b)) {
                var d = a[this.itemsIndexAs];b == this.as && (this.items[d] = c);var e = Polymer.Path.translate(this.as, 'items.' + d, b);this.notifyPath(e, c);
              }
            } });
        }return !0;
      } }, { key: '__getMethodHost', value: function value() {
        return this.__dataHost._methodHost || this.__dataHost;
      } }, { key: '__sortChanged', value: function value(a) {
        var b = this.__getMethodHost();this.__sortFn = a && ('function' == typeof a ? a : function () {
          return b[a].apply(b, arguments);
        }), this.__needFullRefresh = !0, this.items && this.__debounceRender(this.__render);
      } }, { key: '__filterChanged', value: function value(a) {
        var b = this.__getMethodHost();this.__filterFn = a && ('function' == typeof a ? a : function () {
          return b[a].apply(b, arguments);
        }), this.__needFullRefresh = !0, this.items && this.__debounceRender(this.__render);
      } }, { key: '__computeFrameTime', value: function value(a) {
        return Math.ceil(1e3 / a);
      } }, { key: '__initializeChunking', value: function value() {
        this.initialCount && (this.__limit = this.initialCount, this.__chunkCount = this.initialCount, this.__lastChunkTime = performance.now());
      } }, { key: '__tryRenderChunk', value: function value() {
        this.items && this.__limit < this.items.length && this.__debounceRender(this.__requestRenderChunk);
      } }, { key: '__requestRenderChunk', value: function value() {
        var a = this;requestAnimationFrame(function () {
          return a.__renderChunk();
        });
      } }, { key: '__renderChunk', value: function value() {
        var a = performance.now(),
            b = this._targetFrameTime / (a - this.__lastChunkTime);this.__chunkCount = Math.round(this.__chunkCount * b) || 1, this.__limit += this.__chunkCount, this.__lastChunkTime = a, this.__debounceRender(this.__render);
      } }, { key: '__observeChanged', value: function value() {
        this.__observePaths = this.observe && this.observe.replace('.*', '.').split(' ');
      } }, { key: '__itemsChanged', value: function value(a) {
        this.items && !Array.isArray(this.items) && console.warn('dom-repeat expected array for `items`, found', this.items), this.__handleItemPath(a.path, a.value) || (this.__needFullRefresh = !0, this.__initializeChunking(), this.__debounceRender(this.__render));
      } }, { key: '__handleObservedPaths', value: function value(a) {
        if (this.__observePaths) {
          a = a.substring(a.indexOf('.') + 1);for (var b = this.__observePaths, c = 0; c < b.length; c++) {
            if (0 === a.indexOf(b[c])) return this.__needFullRefresh = !0, this.__debounceRender(this.__render, this.delay), !0;
          }
        }
      } }, { key: '__debounceRender', value: function value(a, b) {
        this.__renderDebouncer = Polymer.Debouncer.debounce(this.__renderDebouncer, 0 < b ? Polymer.Async.timeOut.after(b) : Polymer.Async.microTask, a.bind(this)), Polymer.enqueueDebouncer(this.__renderDebouncer);
      } }, { key: 'render', value: function value() {
        this.__needFullRefresh = !0, this.__debounceRender(this.__render), Polymer.flush();
      } }, { key: '__render', value: function value() {
        this.__ensureTemplatized() && (this.__applyFullRefresh(), this.__pool.length = 0, this._setRenderedItemCount(this.__instances.length), this.dispatchEvent(new CustomEvent('dom-change', { bubbles: !0, composed: !0 })), this.__tryRenderChunk());
      } }, { key: '__applyFullRefresh', value: function value() {
        for (var c = this, d = this.items || [], a = Array(d.length), b = 0; b < d.length; b++) {
          a[b] = b;
        }this.__filterFn && (a = a.filter(function (a, b, e) {
          return c.__filterFn(d[a], b, e);
        })), this.__sortFn && a.sort(function (e, a) {
          return c.__sortFn(d[e], d[a]);
        });for (var e = this.__itemsIdxToInstIdx = {}, f = 0, g = Math.min(a.length, this.__limit); f < g; f++) {
          var h = this.__instances[f],
              i = a[f],
              j = d[i];e[i] = f, h && f < this.__limit ? (h._setPendingProperty(this.as, j), h._setPendingProperty(this.indexAs, f), h._setPendingProperty(this.itemsIndexAs, i), h._flushProperties()) : this.__insertInstance(j, f, i);
        }for (var k = this.__instances.length - 1; k >= f; k--) {
          this.__detachAndRemoveInstance(k);
        }
      } }, { key: '__detachInstance', value: function value(a) {
        for (var b, c = this.__instances[a], d = 0; d < c.children.length; d++) {
          b = c.children[d], c.root.appendChild(b);
        }return c;
      } }, { key: '__attachInstance', value: function value(a, b) {
        var c = this.__instances[a];b.insertBefore(c.root, this);
      } }, { key: '__detachAndRemoveInstance', value: function value(a) {
        var b = this.__detachInstance(a);b && this.__pool.push(b), this.__instances.splice(a, 1);
      } }, { key: '__stampInstance', value: function value(a, b, c) {
        var d = {};return d[this.as] = a, d[this.indexAs] = b, d[this.itemsIndexAs] = c, new this.__ctor(d);
      } }, { key: '__insertInstance', value: function value(a, b, c) {
        var d = this.__pool.pop();d ? (d._setPendingProperty(this.as, a), d._setPendingProperty(this.indexAs, b), d._setPendingProperty(this.itemsIndexAs, c), d._flushProperties()) : d = this.__stampInstance(a, b, c);var e = this.__instances[b + 1],
            f = e ? e.children[0] : this;return this.parentNode.insertBefore(d.root, f), this.__instances[b] = d, d;
      } }, { key: '_showHideChildren', value: function value(a) {
        for (var b = 0; b < this.__instances.length; b++) {
          this.__instances[b]._showHideChildren(a);
        }
      } }, { key: '__handleItemPath', value: function value(a, b) {
        var c = a.slice(6),
            d = c.indexOf('.'),
            e = 0 > d ? c : c.substring(0, d);if (e == parseInt(e, 10)) {
          var f = 0 > d ? '' : c.substring(d + 1);if (!this.__handleObservedPaths(f)) {
            var g = this.__itemsIdxToInstIdx[e],
                h = this.__instances[g];if (h) {
              var i = this.as + (f ? '.' + f : '');h._setPendingPropertyOrPath(i, b, !1, !0), h._flushProperties();
            }
          }return !0;
        }
      } }, { key: 'itemForElement', value: function value(a) {
        var b = this.modelForElement(a);return b && b[this.as];
      } }, { key: 'indexForElement', value: function value(a) {
        var b = this.modelForElement(a);return b && b[this.indexAs];
      } }, { key: 'modelForElement', value: function value(a) {
        return Polymer.Templatize.modelForElement(this.template, a);
      } }]), b;
  }(a);customElements.define(b.is, b), Polymer.DomRepeat = b;
})();
(function () {
  'use notstrict';
  var a = function (a) {
    function b() {
      babelHelpers.classCallCheck(this, b);var a = babelHelpers.possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));return a.__renderDebouncer = null, a.__invalidProps = null, a.__instance = null, a;
    }return babelHelpers.inherits(b, a), babelHelpers.createClass(b, null, [{ key: 'is', get: function get() {
        return 'dom-if';
      } }, { key: 'template', get: function get() {
        return null;
      } }, { key: 'properties', get: function get() {
        return { "if": { type: Boolean, observer: '__debounceRender' }, restamp: { type: Boolean, observer: '__debounceRender' } };
      } }]), babelHelpers.createClass(b, [{ key: '__debounceRender', value: function value() {
        var a = this;this.__renderDebouncer = Polymer.Debouncer.debounce(this.__renderDebouncer, Polymer.Async.microTask, function () {
          return a.__render();
        }), Polymer.enqueueDebouncer(this.__renderDebouncer);
      } }, { key: 'disconnectedCallback', value: function value() {
        babelHelpers.get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), 'disconnectedCallback', this).call(this), this.parentNode && (this.parentNode.nodeType != Node.DOCUMENT_FRAGMENT_NODE || this.parentNode.host) || this.__teardownInstance();
      } }, { key: 'connectedCallback', value: function value() {
        babelHelpers.get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), 'connectedCallback', this).call(this), this['if'] && this.__debounceRender();
      } }, { key: 'render', value: function value() {
        Polymer.flush();
      } }, { key: '__render', value: function value() {
        if (this['if']) {
          if (!this.__ensureInstance()) return;this._showHideChildren();
        } else this.restamp && this.__teardownInstance();!this.restamp && this.__instance && this._showHideChildren(), this['if'] != this._lastIf && (this.dispatchEvent(new CustomEvent('dom-change', { bubbles: !0, composed: !0 })), this._lastIf = this['if']);
      } }, { key: '__ensureInstance', value: function value() {
        var a = this,
            b = this.parentNode;if (b) {
          if (!this.__ctor) {
            var c = this.querySelector('template');if (!c) {
              var d = new MutationObserver(function () {
                if (a.querySelector('template')) d.disconnect(), a.__render();else throw new Error('dom-if requires a <template> child');
              });return d.observe(this, { childList: !0 }), !1;
            }this.__ctor = Polymer.Templatize.templatize(c, this, { mutableData: !0, forwardHostProp: function forwardHostProp(a, b) {
                this.__instance && (this['if'] ? this.__instance.forwardHostProp(a, b) : (this.__invalidProps = this.__invalidProps || Object.create(null), this.__invalidProps[Polymer.Path.root(a)] = !0));
              } });
          }if (!this.__instance) this.__instance = new this.__ctor(), b.insertBefore(this.__instance.root, this);else {
            this.__syncHostProperties();var e = this.__instance.children;if (e && e.length) {
              var f = this.previousSibling;if (f !== e[e.length - 1]) for (var g, h = 0; h < e.length && (g = e[h]); h++) {
                b.insertBefore(g, this);
              }
            }
          }
        }return !0;
      } }, { key: '__syncHostProperties', value: function value() {
        var a = this.__invalidProps;if (a) {
          for (var b in a) {
            this.__instance._setPendingProperty(b, this.__dataHost[b]);
          }this.__invalidProps = null, this.__instance._flushProperties();
        }
      } }, { key: '__teardownInstance', value: function value() {
        if (this.__instance) {
          var a = this.__instance.children;if (a && a.length) for (var b, c = a[0].parentNode, d = 0; d < a.length && (b = a[d]); d++) {
            c.removeChild(b);
          }this.__instance = null, this.__invalidProps = null;
        }
      } }, { key: '_showHideChildren', value: function value() {
        var a = this.__hideTemplateChildren__ || !this['if'];this.__instance && this.__instance._showHideChildren(a);
      } }]), b;
  }(Polymer.Element);customElements.define(a.is, a), Polymer.DomIf = a;
})();
(function () {
  'use notstrict';
  var a = Polymer.dedupingMixin(function (a) {
    var b = function (a) {
      function b() {
        babelHelpers.classCallCheck(this, b);var a = babelHelpers.possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));return a.__lastItems = null, a.__lastMulti = null, a.__selectedMap = null, a;
      }return babelHelpers.inherits(b, a), babelHelpers.createClass(b, null, [{ key: 'properties', get: function get() {
          return { items: { type: Array }, multi: { type: Boolean, value: !1 }, selected: { type: Object, notify: !0 }, selectedItem: { type: Object, notify: !0 }, toggle: { type: Boolean, value: !1 } };
        } }, { key: 'observers', get: function get() {
          return ['__updateSelection(multi, items.*)'];
        } }]), babelHelpers.createClass(b, [{ key: '__updateSelection', value: function value(a, b) {
          var c = b.path;if ('items' == c) {
            var d = b.base || [],
                e = this.__lastItems,
                f = this.__lastMulti;if (a !== f && this.clearSelection(), e) {
              var g = Polymer.ArraySplice.calculateSplices(d, e);this.__applySplices(g);
            }this.__lastItems = d, this.__lastMulti = a;
          } else if ('items.splices' == b.path) this.__applySplices(b.value.indexSplices);else {
            var h = c.slice(6),
                i = parseInt(h, 10);0 > h.indexOf('.') && h == i && this.__deselectChangedIdx(i);
          }
        } }, { key: '__applySplices', value: function value(a) {
          for (var b = this, c = this.__selectedMap, d = function d(_d) {
            var e = a[_d];c.forEach(function (a, b) {
              a < e.index || (a >= e.index + e.removed.length ? c.set(b, a + e.addedCount - e.removed.length) : c.set(b, -1));
            });for (var f, g = 0; g < e.addedCount; g++) {
              f = e.index + g, c.has(b.items[f]) && c.set(b.items[f], f);
            }
          }, e = 0; e < a.length; e++) {
            d(e);
          }this.__updateLinks();var f = 0;c.forEach(function (a, d) {
            0 > a ? (b.multi ? b.splice('selected', f, 1) : b.selected = b.selectedItem = null, c['delete'](d)) : f++;
          });
        } }, { key: '__updateLinks', value: function value() {
          var a = this;if (this.__dataLinkedPaths = {}, this.multi) {
            var b = 0;this.__selectedMap.forEach(function (c) {
              0 <= c && a.linkPaths('items.' + c, 'selected.' + b++);
            });
          } else this.__selectedMap.forEach(function (b) {
            a.linkPaths('selected', 'items.' + b), a.linkPaths('selectedItem', 'items.' + b);
          });
        } }, { key: 'clearSelection', value: function value() {
          this.__dataLinkedPaths = {}, this.__selectedMap = new Map(), this.selected = this.multi ? [] : null, this.selectedItem = null;
        } }, { key: 'isSelected', value: function value(a) {
          return this.__selectedMap.has(a);
        } }, { key: 'isIndexSelected', value: function value(a) {
          return this.isSelected(this.items[a]);
        } }, { key: '__deselectChangedIdx', value: function value(a) {
          var b = this,
              c = this.__selectedIndexForItemIndex(a);if (0 <= c) {
            var d = 0;this.__selectedMap.forEach(function (a, e) {
              c == d++ && b.deselect(e);
            });
          }
        } }, { key: '__selectedIndexForItemIndex', value: function value(a) {
          var b = this.__dataLinkedPaths['items.' + a];if (b) return parseInt(b.slice(9), 10);
        } }, { key: 'deselect', value: function value(a) {
          var b = this.__selectedMap.get(a);if (0 <= b) {
            this.__selectedMap['delete'](a);var c;this.multi && (c = this.__selectedIndexForItemIndex(b)), this.__updateLinks(), this.multi ? this.splice('selected', c, 1) : this.selected = this.selectedItem = null;
          }
        } }, { key: 'deselectIndex', value: function value(a) {
          this.deselect(this.items[a]);
        } }, { key: 'select', value: function value(a) {
          this.selectIndex(this.items.indexOf(a));
        } }, { key: 'selectIndex', value: function value(a) {
          var b = this.items[a];this.isSelected(b) ? this.toggle && this.deselectIndex(a) : (!this.multi && this.__selectedMap.clear(), this.__selectedMap.set(b, a), this.__updateLinks(), this.multi ? this.push('selected', b) : this.selected = this.selectedItem = b);
        } }]), b;
    }(a);return b;
  });Polymer.ArraySelectorMixin = a;var b = a(Polymer.Element),
      c = function (a) {
    function b() {
      return babelHelpers.classCallCheck(this, b), babelHelpers.possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments));
    }return babelHelpers.inherits(b, a), babelHelpers.createClass(b, null, [{ key: 'is', get: function get() {
        return 'array-selector';
      } }]), b;
  }(b);customElements.define(c.is, c), Polymer.ArraySelector = c;
})();
(function () {
  "use notstrict";
  function a(b) {
    i = b && b.shimcssproperties ? !1 : f || !navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) && window.CSS && CSS.supports && CSS.supports("box-shadow", "0 0 0 var(--foo)");
  }function d(c, a) {
    for (var b in a) {
      null === b ? c.style.removeProperty(b) : c.style.setProperty(b, a[b]);
    }
  }function b() {
    var b = o;requestAnimationFrame(function () {
      l ? l(b) : (n || (n = new Promise(function (b) {
        k = b;
      }), "complete" === document.readyState ? k() : document.addEventListener("readystatechange", function () {
        "complete" === document.readyState && k();
      })), n.then(function () {
        b && b();
      }));
    });
  }function e() {
    this.customStyles = [], this.enqueued = !1;
  }function g(c) {
    !c.enqueued && o && (c.enqueued = !0, b());
  }var i,
      f = !(window.ShadyDOM && window.ShadyDOM.inUse);window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? i = window.ShadyCSS.nativeCss : window.ShadyCSS ? (a(window.ShadyCSS), window.ShadyCSS = void 0) : a(window.WebComponents && window.WebComponents.flags);var j = i;var k,
      n = null,
      l = window.HTMLImports && window.HTMLImports.whenReady || null;var m = null,
      o = null;e.prototype.c = function (b) {
    b.__seenByShadyCSS || (b.__seenByShadyCSS = !0, this.customStyles.push(b), g(this));
  }, e.prototype.b = function (c) {
    if (c.__shadyCSSCachedStyle) return c.__shadyCSSCachedStyle;var a;return a = c.getStyle ? c.getStyle() : c, a;
  }, e.prototype.a = function () {
    for (var c, d = this.customStyles, a = 0; a < d.length; a++) {
      if (c = d[a], !c.__shadyCSSCachedStyle) {
        var b = this.b(c);b && (b = b.__appliedElement || b, m && m(b), c.__shadyCSSCachedStyle = b);
      }
    }return d;
  }, e.prototype.addCustomStyle = e.prototype.c, e.prototype.getStyleForCustomStyle = e.prototype.b, e.prototype.processStyles = e.prototype.a, Object.defineProperties(e.prototype, { transformCallback: { get: function get() {
        return m;
      }, set: function set(b) {
        m = b;
      } }, validateCallback: { get: function get() {
        return o;
      }, set: function set(c) {
        var a = !1;o || (a = !0), o = c, a && g(this);
      } } });var p = new e();window.ShadyCSS || (window.ShadyCSS = { prepareTemplate: function prepareTemplate() {}, styleSubtree: function styleSubtree(c, a) {
      p.a(), d(c, a);
    }, styleElement: function styleElement() {
      p.a();
    }, styleDocument: function styleDocument(b) {
      p.a(), d(document.body, b);
    }, getComputedStyleValue: function getComputedStyleValue(c, a) {
      return (c = window.getComputedStyle(c).getPropertyValue(a)) ? c.trim() : "";
    }, nativeCss: j, nativeShadow: f }), window.ShadyCSS.CustomStyleInterface = p;
}).call(undefined);
(function () {
  'use notstrict';
  var a = 'include',
      b = window.ShadyCSS.CustomStyleInterface,
      c = function (c) {
    function d() {
      babelHelpers.classCallCheck(this, d);var a = babelHelpers.possibleConstructorReturn(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this));return a._style = null, b.addCustomStyle(a), a;
    }return babelHelpers.inherits(d, c), babelHelpers.createClass(d, [{ key: 'getStyle', value: function value() {
        if (this._style) return this._style;var b = this.querySelector('style');if (b) {
          this._style = b;var c = b.getAttribute(a);return c && (b.removeAttribute(a), b.textContent = Polymer.StyleGather.cssFromModules(c) + b.textContent), this._style;
        }
      } }]), d;
  }(HTMLElement);window.customElements.define('custom-style', c), Polymer.CustomStyle = c;
})();
(function () {
  'use notstrict';
  var a = Polymer.MutableData._mutablePropertyChange;Polymer.MutableDataBehavior = { _shouldPropertyChange: function _shouldPropertyChange(b, c, d) {
      return a(this, b, c, d, !0);
    } }, Polymer.OptionalMutableDataBehavior = { properties: { mutableData: Boolean }, _shouldPropertyChange: function _shouldPropertyChange(b, c, d) {
      return a(this, b, c, d, this.mutableData);
    } };
})();
Polymer.Base = Polymer.LegacyElementMixin(HTMLElement).prototype;
(function () {
  'use notstrict';
  function a(a, b) {
    var c = '';if (a) {
      var d = a.toLowerCase();' ' === d || o.test(d) ? c = 'space' : p.test(d) ? c = 'esc' : 1 == d.length ? (!b || l.test(d)) && (c = d) : n.test(d) ? c = d.replace('arrow', '') : 'multiply' == d ? c = '*' : c = d;
    }return c;
  }function b(a) {
    var b = '';return a && (a in i ? b = i[a] : m.test(a) ? (a = parseInt(a.replace('U+', '0x'), 16), b = h(a).toLowerCase()) : b = a.toLowerCase()), b;
  }function c(a) {
    var b = '';return +a && (65 <= a && 90 >= a ? b = h(32 + a) : 112 <= a && 123 >= a ? b = 'f' + (a - 112 + 1) : 48 <= a && 57 >= a ? b = a - 48 + '' : 96 <= a && 105 >= a ? b = a - 96 + '' : b = j[a]), b;
  }function d(d, e) {
    return d.key ? a(d.key, e) : d.detail && d.detail.key ? a(d.detail.key, e) : b(d.keyIdentifier) || c(d.keyCode) || '';
  }function e(a, b) {
    var c = d(b, a.hasModifiers);return c === a.key && (!a.hasModifiers || !!b.shiftKey === !!a.shiftKey && !!b.ctrlKey === !!a.ctrlKey && !!b.altKey === !!a.altKey && !!b.metaKey === !!a.metaKey);
  }function f(a) {
    return 1 === a.length ? { combo: a, key: a, event: 'keydown' } : a.split('+').reduce(function (a, b) {
      var c = b.split(':'),
          d = c[0],
          e = c[1];return d in k ? (a[k[d]] = !0, a.hasModifiers = !0) : (a.key = d, a.event = e || 'keydown'), a;
    }, { combo: a.split(':').shift() });
  }function g(a) {
    return a.trim().split(' ').map(function (a) {
      return f(a);
    });
  }var h = String.fromCharCode,
      i = { "U+0008": 'backspace', "U+0009": 'tab', "U+001B": 'esc', "U+0020": 'space', "U+007F": 'del' },
      j = { 8: 'backspace', 9: 'tab', 13: 'enter', 27: 'esc', 32: 'space', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home', 37: 'left', 38: 'up', 39: 'right', 40: 'down', 46: 'del', 106: '*' },
      k = { shift: 'shiftKey', ctrl: 'ctrlKey', alt: 'altKey', meta: 'metaKey' },
      l = /[a-z0-9*]/,
      m = /U\+/,
      n = /^arrow/,
      o = /^space(bar)?/,
      p = /^escape$/;Polymer.IronA11yKeysBehavior = { properties: { keyEventTarget: { type: Object, value: function value() {
          return this;
        } }, stopKeyboardEventPropagation: { type: Boolean, value: !1 }, _boundKeyHandlers: { type: Array, value: function value() {
          return [];
        } }, _imperativeKeyBindings: { type: Object, value: function value() {
          return {};
        } } }, observers: ['_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)'], keyBindings: {}, registered: function registered() {
      this._prepKeyBindings();
    }, attached: function attached() {
      this._listenKeyEventListeners();
    }, detached: function detached() {
      this._unlistenKeyEventListeners();
    }, addOwnKeyBinding: function addOwnKeyBinding(a, b) {
      this._imperativeKeyBindings[a] = b, this._prepKeyBindings(), this._resetKeyEventListeners();
    }, removeOwnKeyBindings: function removeOwnKeyBindings() {
      this._imperativeKeyBindings = {}, this._prepKeyBindings(), this._resetKeyEventListeners();
    }, keyboardEventMatchesKeys: function keyboardEventMatchesKeys(a, b) {
      for (var c = g(b), d = 0; d < c.length; ++d) {
        if (e(c[d], a)) return !0;
      }return !1;
    }, _collectKeyBindings: function _collectKeyBindings() {
      var a = this.behaviors.map(function (a) {
        return a.keyBindings;
      });return -1 === a.indexOf(this.keyBindings) && a.push(this.keyBindings), a;
    }, _prepKeyBindings: function _prepKeyBindings() {
      for (var a in this._keyBindings = {}, this._collectKeyBindings().forEach(function (a) {
        for (var b in a) {
          this._addKeyBinding(b, a[b]);
        }
      }, this), this._imperativeKeyBindings) {
        this._addKeyBinding(a, this._imperativeKeyBindings[a]);
      }for (var b in this._keyBindings) {
        this._keyBindings[b].sort(function (a, b) {
          var c = a[0].hasModifiers,
              d = b[0].hasModifiers;return c === d ? 0 : c ? -1 : 1;
        });
      }
    }, _addKeyBinding: function _addKeyBinding(a, b) {
      g(a).forEach(function (a) {
        this._keyBindings[a.event] = this._keyBindings[a.event] || [], this._keyBindings[a.event].push([a, b]);
      }, this);
    }, _resetKeyEventListeners: function _resetKeyEventListeners() {
      this._unlistenKeyEventListeners(), this.isAttached && this._listenKeyEventListeners();
    }, _listenKeyEventListeners: function _listenKeyEventListeners() {
      this.keyEventTarget && Object.keys(this._keyBindings).forEach(function (a) {
        var b = this._keyBindings[a],
            c = this._onKeyBindingEvent.bind(this, b);this._boundKeyHandlers.push([this.keyEventTarget, a, c]), this.keyEventTarget.addEventListener(a, c);
      }, this);
    }, _unlistenKeyEventListeners: function _unlistenKeyEventListeners() {
      for (var a, b, c, d; this._boundKeyHandlers.length;) {
        a = this._boundKeyHandlers.pop(), b = a[0], c = a[1], d = a[2], b.removeEventListener(c, d);
      }
    }, _onKeyBindingEvent: function _onKeyBindingEvent(a, b) {
      if (this.stopKeyboardEventPropagation && b.stopPropagation(), !b.defaultPrevented) for (var c = 0; c < a.length; c++) {
        var d = a[c][0],
            f = a[c][1];if (e(d, b) && (this._triggerKeyHandler(d, f, b), b.defaultPrevented)) return;
      }
    }, _triggerKeyHandler: function _triggerKeyHandler(a, b, c) {
      var d = Object.create(a);d.keyboardEvent = c;var e = new CustomEvent(a.event, { detail: d, cancelable: !0 });this[b].call(this, e), e.defaultPrevented && c.preventDefault();
    } };
})();
Polymer.IronControlState = { properties: { focused: { type: Boolean, value: !1, notify: !0, readOnly: !0, reflectToAttribute: !0 }, disabled: { type: Boolean, value: !1, notify: !0, observer: '_disabledChanged', reflectToAttribute: !0 }, _oldTabIndex: { type: Number }, _boundFocusBlurHandler: { type: Function, value: function value() {
        return this._focusBlurHandler.bind(this);
      } }, __handleEventRetargeting: { type: Boolean, value: function value() {
        return !this.shadowRoot && !Polymer.Element;
      } } }, observers: ['_changedControlState(focused, disabled)'], ready: function ready() {
    this.addEventListener('focus', this._boundFocusBlurHandler, !0), this.addEventListener('blur', this._boundFocusBlurHandler, !0);
  }, _focusBlurHandler: function _focusBlurHandler(a) {
    if (Polymer.Element) return void this._setFocused('focus' === a.type);if (a.target === this) this._setFocused('focus' === a.type);else if (this.__handleEventRetargeting) {
      var b = Polymer.dom(a).localTarget;this.isLightDescendant(b) || this.fire(a.type, { sourceEvent: a }, { node: this, bubbles: a.bubbles, cancelable: a.cancelable });
    }
  }, _disabledChanged: function _disabledChanged(a) {
    this.setAttribute('aria-disabled', a ? 'true' : 'false'), this.style.pointerEvents = a ? 'none' : '', a ? (this._oldTabIndex = this.tabIndex, this._setFocused(!1), this.tabIndex = -1, this.blur()) : this._oldTabIndex !== void 0 && (this.tabIndex = this._oldTabIndex);
  }, _changedControlState: function _changedControlState() {
    this._controlStateChanged && this._controlStateChanged();
  } };
Polymer.IronButtonStateImpl = { properties: { pressed: { type: Boolean, readOnly: !0, value: !1, reflectToAttribute: !0, observer: '_pressedChanged' }, toggles: { type: Boolean, value: !1, reflectToAttribute: !0 }, active: { type: Boolean, value: !1, notify: !0, reflectToAttribute: !0 }, pointerDown: { type: Boolean, readOnly: !0, value: !1 }, receivedFocusFromKeyboard: { type: Boolean, readOnly: !0 }, ariaActiveAttribute: { type: String, value: 'aria-pressed', observer: '_ariaActiveAttributeChanged' } }, listeners: { down: '_downHandler', up: '_upHandler', tap: '_tapHandler' }, observers: ['_focusChanged(focused)', '_activeChanged(active, ariaActiveAttribute)'], keyBindings: { "enter:keydown": '_asyncClick', "space:keydown": '_spaceKeyDownHandler', "space:keyup": '_spaceKeyUpHandler' }, _mouseEventRe: /^mouse/, _tapHandler: function _tapHandler() {
    this.toggles ? this._userActivate(!this.active) : this.active = !1;
  }, _focusChanged: function _focusChanged(a) {
    this._detectKeyboardFocus(a), a || this._setPressed(!1);
  }, _detectKeyboardFocus: function _detectKeyboardFocus(a) {
    this._setReceivedFocusFromKeyboard(!this.pointerDown && a);
  }, _userActivate: function _userActivate(a) {
    this.active !== a && (this.active = a, this.fire('change'));
  }, _downHandler: function _downHandler() {
    this._setPointerDown(!0), this._setPressed(!0), this._setReceivedFocusFromKeyboard(!1);
  }, _upHandler: function _upHandler() {
    this._setPointerDown(!1), this._setPressed(!1);
  }, _spaceKeyDownHandler: function _spaceKeyDownHandler(a) {
    var b = a.detail.keyboardEvent,
        c = Polymer.dom(b).localTarget;this.isLightDescendant(c) || (b.preventDefault(), b.stopImmediatePropagation(), this._setPressed(!0));
  }, _spaceKeyUpHandler: function _spaceKeyUpHandler(a) {
    var b = a.detail.keyboardEvent,
        c = Polymer.dom(b).localTarget;this.isLightDescendant(c) || (this.pressed && this._asyncClick(), this._setPressed(!1));
  }, _asyncClick: function _asyncClick() {
    this.async(function () {
      this.click();
    }, 1);
  }, _pressedChanged: function _pressedChanged() {
    this._changedButtonState();
  }, _ariaActiveAttributeChanged: function _ariaActiveAttributeChanged(a, b) {
    b && b != a && this.hasAttribute(b) && this.removeAttribute(b);
  }, _activeChanged: function _activeChanged(a) {
    this.toggles ? this.setAttribute(this.ariaActiveAttribute, a ? 'true' : 'false') : this.removeAttribute(this.ariaActiveAttribute), this._changedButtonState();
  }, _controlStateChanged: function _controlStateChanged() {
    this.disabled ? this._setPressed(!1) : this._changedButtonState();
  }, _changedButtonState: function _changedButtonState() {
    this._buttonStateChanged && this._buttonStateChanged();
  } }, Polymer.IronButtonState = [Polymer.IronA11yKeysBehavior, Polymer.IronButtonStateImpl];
(function () {
  'use notstrict';
  function a(a) {
    this.element = a, this.width = this.boundingRect.width, this.height = this.boundingRect.height, this.size = d(this.width, this.height);
  }function b(a) {
    this.element = a, this.color = window.getComputedStyle(a).color, this.wave = document.createElement('div'), this.waveContainer = document.createElement('div'), this.wave.style.backgroundColor = this.color, this.wave.classList.add('wave'), this.waveContainer.classList.add('wave-container'), Polymer.dom(this.waveContainer).appendChild(this.wave), this.resetInteractionState();
  }var c = Math.min,
      d = Math.max,
      e = Math.sqrt,
      f = { distance: function distance(a, b, c, d) {
      var f = a - c,
          g = b - d;return e(f * f + g * g);
    }, now: window.performance && window.performance.now ? window.performance.now.bind(window.performance) : Date.now };a.prototype = Object.defineProperties({ furthestCornerDistanceFrom: function furthestCornerDistanceFrom(a, b) {
      var c = f.distance(a, b, 0, 0),
          e = f.distance(a, b, this.width, 0),
          g = f.distance(a, b, 0, this.height),
          h = f.distance(a, b, this.width, this.height);return d(c, e, g, h);
    } }, { boundingRect: { get: function get() {
        return this.element.getBoundingClientRect();
      }, configurable: !0, enumerable: !0 } }), b.MAX_RADIUS = 300, b.prototype = Object.defineProperties({ resetInteractionState: function resetInteractionState() {
      this.maxRadius = 0, this.mouseDownStart = 0, this.mouseUpStart = 0, this.xStart = 0, this.yStart = 0, this.xEnd = 0, this.yEnd = 0, this.slideDistance = 0, this.containerMetrics = new a(this.element);
    }, draw: function draw() {
      var a, b, c;this.wave.style.opacity = this.opacity, a = this.radius / (this.containerMetrics.size / 2), b = this.xNow - this.containerMetrics.width / 2, c = this.yNow - this.containerMetrics.height / 2, this.waveContainer.style.webkitTransform = 'translate(' + b + 'px, ' + c + 'px)', this.waveContainer.style.transform = 'translate3d(' + b + 'px, ' + c + 'px, 0)', this.wave.style.webkitTransform = 'scale(' + a + ',' + a + ')', this.wave.style.transform = 'scale3d(' + a + ',' + a + ',1)';
    }, downAction: function downAction(a) {
      var b = this.containerMetrics.width / 2,
          c = this.containerMetrics.height / 2;this.resetInteractionState(), this.mouseDownStart = f.now(), this.center ? (this.xStart = b, this.yStart = c, this.slideDistance = f.distance(this.xStart, this.yStart, this.xEnd, this.yEnd)) : (this.xStart = a ? a.detail.x - this.containerMetrics.boundingRect.left : this.containerMetrics.width / 2, this.yStart = a ? a.detail.y - this.containerMetrics.boundingRect.top : this.containerMetrics.height / 2), this.recenters && (this.xEnd = b, this.yEnd = c, this.slideDistance = f.distance(this.xStart, this.yStart, this.xEnd, this.yEnd)), this.maxRadius = this.containerMetrics.furthestCornerDistanceFrom(this.xStart, this.yStart), this.waveContainer.style.top = (this.containerMetrics.height - this.containerMetrics.size) / 2 + 'px', this.waveContainer.style.left = (this.containerMetrics.width - this.containerMetrics.size) / 2 + 'px', this.waveContainer.style.width = this.containerMetrics.size + 'px', this.waveContainer.style.height = this.containerMetrics.size + 'px';
    }, upAction: function upAction() {
      this.isMouseDown && (this.mouseUpStart = f.now());
    }, remove: function remove() {
      Polymer.dom(this.waveContainer.parentNode).removeChild(this.waveContainer);
    } }, { recenters: { get: function get() {
        return this.element.recenters;
      }, configurable: !0, enumerable: !0 }, center: { get: function get() {
        return this.element.center;
      }, configurable: !0, enumerable: !0 }, mouseDownElapsed: { get: function get() {
        var a;return this.mouseDownStart ? (a = f.now() - this.mouseDownStart, this.mouseUpStart && (a -= this.mouseUpElapsed), a) : 0;
      }, configurable: !0, enumerable: !0 }, mouseUpElapsed: { get: function get() {
        return this.mouseUpStart ? f.now() - this.mouseUpStart : 0;
      }, configurable: !0, enumerable: !0 }, mouseDownElapsedSeconds: { get: function get() {
        return this.mouseDownElapsed / 1e3;
      }, configurable: !0, enumerable: !0 }, mouseUpElapsedSeconds: { get: function get() {
        return this.mouseUpElapsed / 1e3;
      }, configurable: !0, enumerable: !0 }, mouseInteractionSeconds: { get: function get() {
        return this.mouseDownElapsedSeconds + this.mouseUpElapsedSeconds;
      }, configurable: !0, enumerable: !0 }, initialOpacity: { get: function get() {
        return this.element.initialOpacity;
      }, configurable: !0, enumerable: !0 }, opacityDecayVelocity: { get: function get() {
        return this.element.opacityDecayVelocity;
      }, configurable: !0, enumerable: !0 }, radius: { get: function get() {
        var a = this.containerMetrics.width * this.containerMetrics.width,
            d = this.containerMetrics.height * this.containerMetrics.height,
            f = 1.1 * c(e(a + d), b.MAX_RADIUS) + 5,
            g = 1.1 - 0.2 * (f / b.MAX_RADIUS),
            h = this.mouseInteractionSeconds / g,
            i = f * (1 - Math.pow(80, -h));return Math.abs(i);
      }, configurable: !0, enumerable: !0 }, opacity: { get: function get() {
        return this.mouseUpStart ? d(0, this.initialOpacity - this.mouseUpElapsedSeconds * this.opacityDecayVelocity) : this.initialOpacity;
      }, configurable: !0, enumerable: !0 }, outerOpacity: { get: function get() {
        var a = 0.3 * this.mouseUpElapsedSeconds,
            b = this.opacity;return d(0, c(a, b));
      }, configurable: !0, enumerable: !0 }, isOpacityFullyDecayed: { get: function get() {
        return 0.01 > this.opacity && this.radius >= c(this.maxRadius, b.MAX_RADIUS);
      }, configurable: !0, enumerable: !0 }, isRestingAtMaxRadius: { get: function get() {
        return this.opacity >= this.initialOpacity && this.radius >= c(this.maxRadius, b.MAX_RADIUS);
      }, configurable: !0, enumerable: !0 }, isAnimationComplete: { get: function get() {
        return this.mouseUpStart ? this.isOpacityFullyDecayed : this.isRestingAtMaxRadius;
      }, configurable: !0, enumerable: !0 }, translationFraction: { get: function get() {
        return c(1, 2 * (this.radius / this.containerMetrics.size) / 1.4142135623730951);
      }, configurable: !0, enumerable: !0 }, xNow: { get: function get() {
        return this.xEnd ? this.xStart + this.translationFraction * (this.xEnd - this.xStart) : this.xStart;
      }, configurable: !0, enumerable: !0 }, yNow: { get: function get() {
        return this.yEnd ? this.yStart + this.translationFraction * (this.yEnd - this.yStart) : this.yStart;
      }, configurable: !0, enumerable: !0 }, isMouseDown: { get: function get() {
        return this.mouseDownStart && !this.mouseUpStart;
      }, configurable: !0, enumerable: !0 } }), Polymer(Object.defineProperties({ is: 'paper-ripple', behaviors: [Polymer.IronA11yKeysBehavior], properties: { initialOpacity: { type: Number, value: 0.25 }, opacityDecayVelocity: { type: Number, value: 0.8 }, recenters: { type: Boolean, value: !1 }, center: { type: Boolean, value: !1 }, ripples: { type: Array, value: function value() {
          return [];
        } }, animating: { type: Boolean, readOnly: !0, reflectToAttribute: !0, value: !1 }, holdDown: { type: Boolean, value: !1, observer: '_holdDownChanged' }, noink: { type: Boolean, value: !1 }, _animating: { type: Boolean }, _boundAnimate: { type: Function, value: function value() {
          return this.animate.bind(this);
        } } }, keyBindings: { "enter:keydown": '_onEnterKeydown', "space:keydown": '_onSpaceKeydown', "space:keyup": '_onSpaceKeyup' }, attached: function attached() {
      this.keyEventTarget = 11 == this.parentNode.nodeType ? Polymer.dom(this).getOwnerRoot().host : this.parentNode;var a = this.keyEventTarget;this.listen(a, 'up', 'uiUpAction'), this.listen(a, 'down', 'uiDownAction');
    }, detached: function detached() {
      this.unlisten(this.keyEventTarget, 'up', 'uiUpAction'), this.unlisten(this.keyEventTarget, 'down', 'uiDownAction'), this.keyEventTarget = null;
    }, simulatedRipple: function simulatedRipple() {
      this.downAction(null), this.async(function () {
        this.upAction();
      }, 1);
    }, uiDownAction: function uiDownAction(a) {
      this.noink || this.downAction(a);
    }, downAction: function downAction(a) {
      if (!(this.holdDown && 0 < this.ripples.length)) {
        var b = this.addRipple();b.downAction(a), this._animating || (this._animating = !0, this.animate());
      }
    }, uiUpAction: function uiUpAction(a) {
      this.noink || this.upAction(a);
    }, upAction: function upAction(a) {
      this.holdDown || (this.ripples.forEach(function (b) {
        b.upAction(a);
      }), this._animating = !0, this.animate());
    }, onAnimationComplete: function onAnimationComplete() {
      this._animating = !1, this.$.background.style.backgroundColor = null, this.fire('transitionend');
    }, addRipple: function addRipple() {
      var a = new b(this);return Polymer.dom(this.$.waves).appendChild(a.waveContainer), this.$.background.style.backgroundColor = a.color, this.ripples.push(a), this._setAnimating(!0), a;
    }, removeRipple: function removeRipple(a) {
      var b = this.ripples.indexOf(a);0 > b || (this.ripples.splice(b, 1), a.remove(), !this.ripples.length && this._setAnimating(!1));
    }, animate: function animate() {
      if (this._animating) {
        var a, b;for (a = 0; a < this.ripples.length; ++a) {
          b = this.ripples[a], b.draw(), this.$.background.style.opacity = b.outerOpacity, b.isOpacityFullyDecayed && !b.isRestingAtMaxRadius && this.removeRipple(b);
        }this.shouldKeepAnimating || 0 !== this.ripples.length ? window.requestAnimationFrame(this._boundAnimate) : this.onAnimationComplete();
      }
    }, _onEnterKeydown: function _onEnterKeydown() {
      this.uiDownAction(), this.async(this.uiUpAction, 1);
    }, _onSpaceKeydown: function _onSpaceKeydown() {
      this.uiDownAction();
    }, _onSpaceKeyup: function _onSpaceKeyup() {
      this.uiUpAction();
    }, _holdDownChanged: function _holdDownChanged(a, b) {
      void 0 === b || (a ? this.downAction() : this.upAction());
    } }, { target: { get: function get() {
        return this.keyEventTarget;
      }, configurable: !0, enumerable: !0 }, shouldKeepAnimating: { get: function get() {
        for (var a = 0; a < this.ripples.length; ++a) {
          if (!this.ripples[a].isAnimationComplete) return !0;
        }return !1;
      }, configurable: !0, enumerable: !0 } }));
})();
Polymer.PaperRippleBehavior = { properties: { noink: { type: Boolean, observer: '_noinkChanged' }, _rippleContainer: { type: Object } }, _buttonStateChanged: function _buttonStateChanged() {
    this.focused && this.ensureRipple();
  }, _downHandler: function _downHandler(a) {
    Polymer.IronButtonStateImpl._downHandler.call(this, a), this.pressed && this.ensureRipple(a);
  }, ensureRipple: function ensureRipple(a) {
    if (!this.hasRipple()) {
      this._ripple = this._createRipple(), this._ripple.noink = this.noink;var b = this._rippleContainer || this.root;if (b && Polymer.dom(b).appendChild(this._ripple), a) {
        var c = Polymer.dom(this._rippleContainer || this),
            d = Polymer.dom(a).rootTarget;c.deepContains(d) && this._ripple.uiDownAction(a);
      }
    }
  }, getRipple: function getRipple() {
    return this.ensureRipple(), this._ripple;
  }, hasRipple: function hasRipple() {
    return !!this._ripple;
  }, _createRipple: function _createRipple() {
    var a = document.createElement('paper-ripple');return a;
  }, _noinkChanged: function _noinkChanged(a) {
    this.hasRipple() && (this._ripple.noink = a);
  } };
Polymer.PaperButtonBehaviorImpl = { properties: { elevation: { type: Number, reflectToAttribute: !0, readOnly: !0 } }, observers: ['_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)', '_computeKeyboardClass(receivedFocusFromKeyboard)'], hostAttributes: { role: 'button', tabindex: '0', animated: !0 }, _calculateElevation: function _calculateElevation() {
    var a = 1;this.disabled ? a = 0 : this.active || this.pressed ? a = 4 : this.receivedFocusFromKeyboard && (a = 3), this._setElevation(a);
  }, _computeKeyboardClass: function _computeKeyboardClass(a) {
    this.toggleClass('keyboard-focus', a);
  }, _spaceKeyDownHandler: function _spaceKeyDownHandler(a) {
    Polymer.IronButtonStateImpl._spaceKeyDownHandler.call(this, a), this.hasRipple() && 1 > this.getRipple().ripples.length && this._ripple.uiDownAction();
  }, _spaceKeyUpHandler: function _spaceKeyUpHandler(a) {
    Polymer.IronButtonStateImpl._spaceKeyUpHandler.call(this, a), this.hasRipple() && this._ripple.uiUpAction();
  } }, Polymer.PaperButtonBehavior = [Polymer.IronButtonState, Polymer.IronControlState, Polymer.PaperRippleBehavior, Polymer.PaperButtonBehaviorImpl];
Polymer({ is: 'paper-button', behaviors: [Polymer.PaperButtonBehavior], properties: { raised: { type: Boolean, reflectToAttribute: !0, value: !1, observer: '_calculateElevation' } }, _calculateElevation: function _calculateElevation() {
    this.raised ? Polymer.PaperButtonBehaviorImpl._calculateElevation.apply(this) : this._setElevation(0);
  } });
(function () {
  function a(a) {
    this.type = a && a.type || 'default', this.key = a && a.key, 'value' in a && (this.value = a.value);
  }a.types = {}, a.prototype = Object.defineProperties({ byKey: function byKey(a) {
      return this.key = a, this.value;
    } }, { value: { get: function get() {
        var b = this.type,
            c = this.key;if (b && c) return a.types[b] && a.types[b][c];
      }, set: function set(b) {
        var c = this.type,
            d = this.key;c && d && (c = a.types[c] = a.types[c] || {}, null == b ? delete c[d] : c[d] = b);
      }, configurable: !0, enumerable: !0 }, list: { get: function get() {
        var c = this.type;if (c) {
          var d = a.types[this.type];return d ? Object.keys(d).map(function (a) {
            return b[this.type][a];
          }, this) : [];
        }
      }, configurable: !0, enumerable: !0 } }), Polymer.IronMeta = a;var b = Polymer.IronMeta.types;Polymer(Object.defineProperties({ is: 'iron-meta', properties: { type: { type: String, value: 'default' }, key: { type: String }, value: { type: String, notify: !0 }, self: { type: Boolean, observer: '_selfChanged' }, __meta: { type: Boolean, computed: '__computeMeta(type, key, value)' } }, hostAttributes: { hidden: !0 }, __computeMeta: function __computeMeta(a, b, c) {
      var d = new Polymer.IronMeta({ type: a, key: b });return void 0 !== c && c !== d.value ? d.value = c : this.value !== d.value && (this.value = d.value), d;
    }, _selfChanged: function _selfChanged(a) {
      a && (this.value = this);
    }, byKey: function byKey(a) {
      return new Polymer.IronMeta({ type: this.type, key: a }).value;
    } }, { list: { get: function get() {
        return this.__meta && this.__meta.list;
      }, configurable: !0, enumerable: !0 } }));
})();
Polymer.IronValidatableBehaviorMeta = null, Polymer.IronValidatableBehavior = Object.defineProperties({ properties: { validator: { type: String }, invalid: { notify: !0, reflectToAttribute: !0, type: Boolean, value: !1, observer: '_invalidChanged' } }, registered: function registered() {
    Polymer.IronValidatableBehaviorMeta = new Polymer.IronMeta({ type: 'validator' });
  }, _invalidChanged: function _invalidChanged() {
    this.invalid ? this.setAttribute('aria-invalid', 'true') : this.removeAttribute('aria-invalid');
  }, hasValidator: function hasValidator() {
    return null != this._validator;
  }, validate: function validate(a) {
    return this.invalid = void 0 === a && void 0 !== this.value ? !this._getValidity(this.value) : !this._getValidity(a), !this.invalid;
  }, _getValidity: function _getValidity(a) {
    return !this.hasValidator() || this._validator.validate(a);
  } }, { _validator: { get: function get() {
      return Polymer.IronValidatableBehaviorMeta && Polymer.IronValidatableBehaviorMeta.byKey(this.validator);
    }, configurable: !0, enumerable: !0 } });
Polymer.IronFormElementBehavior = { properties: { name: { type: String }, value: { notify: !0, type: String }, required: { type: Boolean, value: !1 }, _parentForm: { type: Object } }, attached: Polymer.Element ? null : function () {
    this.fire('iron-form-element-register');
  }, detached: Polymer.Element ? null : function () {
    this._parentForm && this._parentForm.fire('iron-form-element-unregister', { target: this });
  } };
Polymer.IronCheckedElementBehaviorImpl = { properties: { checked: { type: Boolean, value: !1, reflectToAttribute: !0, notify: !0, observer: '_checkedChanged' }, toggles: { type: Boolean, value: !0, reflectToAttribute: !0 }, value: { type: String, value: 'on', observer: '_valueChanged' } }, observers: ['_requiredChanged(required)'], created: function created() {
    this._hasIronCheckedElementBehavior = !0;
  }, _getValidity: function _getValidity() {
    return this.disabled || !this.required || this.checked;
  }, _requiredChanged: function _requiredChanged() {
    this.required ? this.setAttribute('aria-required', 'true') : this.removeAttribute('aria-required');
  }, _checkedChanged: function _checkedChanged() {
    this.active = this.checked, this.fire('iron-change');
  }, _valueChanged: function _valueChanged() {
    (this.value === void 0 || null === this.value) && (this.value = 'on');
  } }, Polymer.IronCheckedElementBehavior = [Polymer.IronFormElementBehavior, Polymer.IronValidatableBehavior, Polymer.IronCheckedElementBehaviorImpl];
Polymer.PaperInkyFocusBehaviorImpl = { observers: ['_focusedChanged(receivedFocusFromKeyboard)'], _focusedChanged: function _focusedChanged(a) {
    a && this.ensureRipple(), this.hasRipple() && (this._ripple.holdDown = a);
  }, _createRipple: function _createRipple() {
    var a = Polymer.PaperRippleBehavior._createRipple();return a.id = 'ink', a.setAttribute('center', ''), a.classList.add('circle'), a;
  } }, Polymer.PaperInkyFocusBehavior = [Polymer.IronButtonState, Polymer.IronControlState, Polymer.PaperRippleBehavior, Polymer.PaperInkyFocusBehaviorImpl];
Polymer.PaperCheckedElementBehaviorImpl = { _checkedChanged: function _checkedChanged() {
    Polymer.IronCheckedElementBehaviorImpl._checkedChanged.call(this), this.hasRipple() && (this.checked ? this._ripple.setAttribute('checked', '') : this._ripple.removeAttribute('checked'));
  }, _buttonStateChanged: function _buttonStateChanged() {
    Polymer.PaperRippleBehavior._buttonStateChanged.call(this);this.disabled || this.isAttached && (this.checked = this.active);
  } }, Polymer.PaperCheckedElementBehavior = [Polymer.PaperInkyFocusBehavior, Polymer.IronCheckedElementBehavior, Polymer.PaperCheckedElementBehaviorImpl];
Polymer({ is: 'paper-checkbox', behaviors: [Polymer.PaperCheckedElementBehavior], hostAttributes: { role: 'checkbox', "aria-checked": !1, tabindex: 0 }, properties: { ariaActiveAttribute: { type: String, value: 'aria-checked' } }, attached: function attached() {
    Polymer.RenderStatus.afterNextRender(this, function () {
      var a = this.getComputedStyleValue('--calculated-paper-checkbox-ink-size').trim();if ('-1px' === a) {
        var b = this.getComputedStyleValue('--calculated-paper-checkbox-size').trim(),
            c = b.match(/[A-Za-z]+$/)[0] || 'px',
            d = parseFloat(b, 10),
            e = 8 / 3 * d;'px' === c && (e = Math.floor(e), e % 2 !== d % 2 && e++), this.updateStyles({ "--paper-checkbox-ink-size": e + c });
      }
    });
  }, _computeCheckboxClass: function _computeCheckboxClass(a, b) {
    var c = '';return a && (c += 'checked '), b && (c += 'invalid'), c;
  }, _computeCheckmarkClass: function _computeCheckmarkClass(a) {
    return a ? '' : 'hidden';
  }, _createRipple: function _createRipple() {
    return this._rippleContainer = this.$.checkboxContainer, Polymer.PaperInkyFocusBehaviorImpl._createRipple.call(this);
  } });
"use notstrict";var MonacoEditorElement,
    __extends = undefined && undefined.__extends || function () {
  var a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, c) {
    a.__proto__ = c;
  } || function (a, c) {
    for (var b in c) {
      c.hasOwnProperty(b) && (a[b] = c[b]);
    }
  };return function (c, d) {
    function b() {
      this.constructor = c;
    }a(c, d), c.prototype = null === d ? Object.create(d) : (b.prototype = d.prototype, new b());
  };
}(),
    __assign = undefined && undefined.__assign || Object.assign || function (a) {
  for (var b, c = 1, d = arguments.length; c < d; c++) {
    for (var e in b = arguments[c], b) {
      Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e]);
    }
  }return a;
},
    __awaiter = undefined && undefined.__awaiter || function (a, b, c, d) {
  return new (c || (c = Promise))(function (e, f) {
    function g(a) {
      try {
        i(d.next(a));
      } catch (a) {
        f(a);
      }
    }function h(a) {
      try {
        i(d["throw"](a));
      } catch (a) {
        f(a);
      }
    }function i(a) {
      a.done ? e(a.value) : new c(function (b) {
        b(a.value);
      }).then(g, h);
    }i((d = d.apply(a, b || [])).next());
  });
},
    __generator = undefined && undefined.__generator || function (a, b) {
  function c(a) {
    return function (b) {
      return d([a, b]);
    };
  }function d(c) {
    if (e) throw new TypeError("Generator is already executing.");for (; g;) {
      try {
        if (e = 1, f && (h = f[2 & c[0] ? "return" : c[0] ? "throw" : "next"]) && !(h = h.call(f, c[1])).done) return h;switch ((f = 0, h) && (c = [0, h.value]), c[0]) {case 0:case 1:
            h = c;break;case 4:
            return g.label++, { value: c[1], done: !1 };case 5:
            g.label++, f = c[1], c = [0];continue;case 7:
            c = g.ops.pop(), g.trys.pop();continue;default:
            if ((h = g.trys, !(h = 0 < h.length && h[h.length - 1])) && (6 === c[0] || 2 === c[0])) {
              g = 0;continue;
            }if (3 === c[0] && (!h || c[1] > h[0] && c[1] < h[3])) {
              g.label = c[1];break;
            }if (6 === c[0] && g.label < h[1]) {
              g.label = h[1], h = c;break;
            }if (h && g.label < h[2]) {
              g.label = h[2], g.ops.push(c);break;
            }h[2] && g.ops.pop(), g.trys.pop();continue;}c = b.call(a, g);
      } catch (a) {
        c = [6, a], f = 0;
      } finally {
        e = h = 0;
      }
    }if (5 & c[0]) throw c[1];return { value: c[0] ? c[1] : void 0, done: !0 };
  }var e,
      f,
      h,
      i,
      g = { label: 0, sent: function sent() {
      if (1 & h[0]) throw h[1];return h[1];
    }, trys: [], ops: [] };return i = { next: c(0), "throw": c(1), "return": c(2) }, "function" === typeof Symbol && (i[Symbol.iterator] = function () {
    return this;
  }), i;
};(function (a) {
  var b = { name: "The name of this script", namespace: "The namespace of the script", version: "The script version. This is used for the update check.", author: "The scripts author", description: "A short description.", homepage: "The author's homepage", homepageURL: "The author's homepage", website: "The author's homepage", source: "The author's homepage", icon: "The script's icon in low res", iconURL: "The script's icon in low res", defaulticon: "The script's icon in low res", icon64: "This scripts icon in 64x64 pixels.", icon64URL: "This scripts icon in 64x64 pixels.", updateURL: "An update URL for the userscript", downloadURL: "Defines the URL where the script will be downloaded from when an update was detected", supportURL: "Defines the URL where the user can report issues and get personal support", include: "The pages on which the script should run", match: "The pages on which the script should run", exclude: "Exclude URLs even if they are included by **@include** or **@match**", require: "Points to a javascript file that is loaded and executed before the script itself", resource: "Preloads resources that can be accessed by `GM_getResourceURL` and `GM_getResourceText` by the script", connect: "Domains which are allowed to be retrieved by `GM_xmlhttpRequest`", run_at: "The moment the script is injected (document-start, document-body, document-end, document-idle or document-menu)", "run-at": "The moment the script is injected (document-start, document-body, document-end, document-idle or document-menu)", grant: "Whitelists given `GM_*` functions", noframes: "Makes the script run on the main page but not in iframes", CRM_contentTypes: "The content types on which to run this script as a 6 items long boolean array (e.g. [true, false, true, false, true, false]) (CRM ONLY)", CRM_launchMode: "When to run this script. 0 = Run on clicking, 1 = always run, 2 = run on specified, 3 = show on specified, 4 = disabled. (CRM ONLY)", CRM_stylesheet: "Interpret this as a stylesheet (userstyle) instead of a script (userscript). (CRM ONLY)", CRM_toggle: "A boolean value (true/false) indicating whether to allow toggling this stylesheet on or off. Only used when @CRM_stylesheet is present. (CRM ONLY)", CRM_defaultOn: "A boolean value (true/false) indicating whether this stylesheet is toggled on by default. Only used when @CRM_stylesheet and @CRM_toggle are present. (CRM ONLY)", CRM_libraries: "An array containing stringified objects with a \"url\" and a \"name\" key, pointing to external libraries used in this script." },
      c = function () {
    function a() {
      this._privateListenerMap = {}, this._publicListenerMap = {};
    }return a.prototype._insertOnce = function (a, b) {
      a.push(function c() {
        for (var d = [], e = 0; e < arguments.length; e++) {
          d[e] = arguments[e];
        }return a.slice(a.indexOf(c, 1)), b.apply(void 0, d);
      });
    }, a.prototype._assertKeyExists = function (a, b) {
      a in b || (b[a] = []);
    }, a.prototype._listen = function (a, b, c) {
      void 0 === c && (c = !1), this._assertKeyExists(a, this._privateListenerMap), c ? this._insertOnce(this._privateListenerMap[a], b) : this._privateListenerMap[a].push(b);
    }, a.prototype.listen = function (a, b, c) {
      void 0 === c && (c = !1), this._assertKeyExists(a, this._publicListenerMap), c ? this._insertOnce(this._publicListenerMap[a], b) : this._publicListenerMap[a].push(b);
    }, a.prototype._clearListeners = function (a) {
      a in this._publicListenerMap && delete this._publicListenerMap[a], a in this._privateListenerMap && delete this._privateListenerMap[a];
    }, a.prototype._firePrivate = function (a, b) {
      return a in this._privateListenerMap ? this._privateListenerMap[a].map(function (a) {
        return a.apply(void 0, b);
      }) : [];
    }, a.prototype._firePublic = function (a, b) {
      return a in this._publicListenerMap ? this._publicListenerMap[a].map(function (a) {
        return a.apply(void 0, b);
      }) : [];
    }, a;
  }(),
      d = function (a) {
    function b(b, c) {
      var d = a.call(this) || this;return d._editor = b, d._model = c, d;
    }return __extends(b, a), b.prototype._isTextarea = function () {
      return "__textarea" in this._editor;
    }, b;
  }(c),
      e = function (a) {
    function b(b, c) {
      var d = a.call(this, b, c) || this;return (d._disposables = [], d._isTextarea()) ? d : (d._onCreate(c), window.setTimeout(function () {
        d._model.isDisposed() || (d._firePrivate("onLoad", []), d._clearListeners("onLoad"));
      }, 2500), d);
    }return __extends(b, a), b._genDisposable = function (a, b) {
      var c = a();return { dispose: function dispose() {
          b(c);
        } };
    }, b.prototype._isDiff = function (a) {
      return "__textarea" in a ? "__diff" in a : !("onDidChangeModel" in this._editor);
    }, b.prototype._onCreate = function () {
      var a = this;this.destroy(), this._disposables.push(this._model.onDidChangeContent(function (b) {
        a._firePrivate("onModelContentChange", [b]);
      }));
    }, b.prototype.destroy = function () {
      this._disposables = this._disposables.filter(function (a) {
        a.dispose();
      });
    }, b;
  }(d),
      f = function (a) {
    function c(b, c) {
      var d = a.call(this, b, c) || this;return (d._hasMetaBlockChanged = !0, d._decorations = [], d._isMetaDataHighlightDisabled = !1, d._isTextarea()) ? d : (d._attachListeners(), d);
    }return __extends(c, a), c.prototype._attachListeners = function () {
      var a = this;this._listen("onLoad", function () {
        a._doModelUpdate();
      }), this._listen("onModelContentChange", function () {
        a._hasMetaBlockChanged = !0, a._doModelUpdate();
      }), this._listen("shouldDecorate", function (b) {
        if (a._isMetaDataHighlightDisabled) return !1;var c = !1;if (!a._metaBlock) if (a.getMetaBlock()) c = !0;else return !1;return c || b && b.isRedoing || b && 0 !== b.changes.filter(function (b) {
          return a._isInMetaRange(b.range);
        }).length;
      }), this._listen("decorate", function () {
        return a._isMetaDataHighlightDisabled ? [] : [a._userScriptGutterHighlightChange()].filter(function (a) {
          return null !== a;
        });
      }), this._listen("decorate", function () {
        return a._isMetaDataHighlightDisabled ? [] : a._userScriptHighlightChange();
      }), this._isMetaDataHighlightDisabled = window.app ? window.app.settings.editor.disabledMetaDataHighlight : window.installPage.settings.editor.disabledMetaDataHighlight, this._isDiff(this._editor) || this._disposables.push(this._editor.addAction({ id: "disable-metadata-highlight", label: "Disable Metadata Highlight", run: function run() {
          a._isMetaDataHighlightDisabled = !0;
        } })), this._isDiff(this._editor) || this._disposables.push(this._editor.addAction({ id: "enable-metadata-highlight", label: "Enable Metadata Highlight", run: function run() {
          a._isMetaDataHighlightDisabled = !1;
        } })), this._defineMetaOnModel(), this._listen("onModelContentChange", function (b) {
        a._hasMetaBlockChanged = !0, a._shouldUpdateDecorations(b) && a._doModelUpdate();
      });
    }, c.prototype._defineMetaOnModel = function () {
      var a = this;"_metaBlock" in this._model || Object.defineProperty(this._model, "_metaBlock", { get: function get() {
          return a.getMetaBlock();
        } });
    }, c.prototype._getMetaOutlines = function () {
      var a = this._model.getValue();if (-1 === a.indexOf(c._userScriptStart) || -1 === a.indexOf(c._userScriptEnd)) return this._metaBlock = null;for (var b = a.split("\n"), d = { start: null, end: null }, e = 0; e < b.length; e++) {
        var f = b[e],
            g = void 0;if (-1 === (g = f.indexOf(c._userScriptStart)) || d.start || (d.start = new monaco.Position(e + 1, g)), -1 !== (g = f.indexOf(c._userScriptEnd))) {
          d.end || (d.end = new monaco.Position(e + 1, g + c._userScriptEnd.length));break;
        }
      }return d.start && d.end ? d : this._metaBlock = null;
    }, c.prototype._getMetaContent = function () {
      for (var a = this._model.getValue(), b = {}, d = c._metaPropRegex, e = 0, f = a.split("\n"); e < f.length; e++) {
        var g = f[e],
            h = d.exec(g);if (h) {
          var i = h[1],
              j = h[3];if (!i || !j) continue;i in b ? b[i].push(j) : b[i] = [j];
        }
      }return b;
    }, c.prototype._isDifferent = function (a, b) {
      if (!a || !b) return !0;if (!a.start.equals(b.start) || !a.end.equals(b.end)) return !1;var c = [];for (var d in a) {
        if (!(d in b)) return !1;c.push(d);
      }for (var d in b) {
        if (!(d in a)) return !1;-1 === c.indexOf(d) && c.push(d);
      }for (var e = 0, f = c; e < f.length; e++) {
        var d = f[e],
            g = a.content[d],
            h = b.content[d],
            i = Array.isArray(g),
            j = Array.isArray(h);if (i !== j) return !1;if (i) {
          for (var k, l = 0, m = g; l < m.length; l++) {
            if (k = m[l], -1 === h.indexOf(k)) return !1;
          }for (var k, n = 0, o = h; n < o.length; n++) {
            if (k = o[n], -1 === g.indexOf(k)) return !1;
          }
        } else if (g !== h) return !1;
      }return !0;
    }, c.prototype.getMetaBlock = function () {
      if (!this._hasMetaBlockChanged) return this._metaBlock;var a = this._metaBlock,
          b = this._getMetaOutlines();if (!b) return null;var c = this._getMetaContent(b),
          d = this._metaBlock = { start: b.start, content: c, end: b.end };return this._isDifferent(a, d) && (!a && (a = { start: new monaco.Position(0, 0), content: {}, end: new monaco.Position(0, 0) }), this._firePublic("metaChange", [a, d])), d;
    }, c.prototype._getKeyDescription = function (a) {
      return a in b ? "Metadata key `" + a + "`:\n" + b[a] : "Metadata key `" + a + "`, unknown key";
    }, c.prototype._isInMetaRange = function (a) {
      return !!this._metaBlock && monaco.Range.areIntersectingOrTouching({ startColumn: this._metaBlock.start.column, startLineNumber: this._metaBlock.start.lineNumber, endColumn: this._metaBlock.end.column, endLineNumber: this._metaBlock.end.lineNumber }, a);
    }, c.prototype._userScriptGutterHighlightChange = function () {
      if (!this._getMetaOutlines()) return null;var a = this.getMetaBlock(),
          b = a.start,
          c = a.end;return { range: new monaco.Range(b.lineNumber, b.column, c.lineNumber, c.column), options: { isWholeLine: !0, linesDecorationsClassName: "userScriptGutterHighlight", stickiness: monaco.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges } };
    }, c.prototype._userScriptHighlightChange = function () {
      var a = this._model.getValue();if (!this.getMetaBlock()) return null;for (var b = c._metaPropRegex, d = a.split("\n"), e = [], f = 0; f < d.length; f++) {
        var g = d[f],
            h = b.exec(g);if (h) {
          var i = h[1],
              j = h[3],
              k = i ? g.indexOf(i) : 0,
              l = i ? k + i.length : 0,
              m = f + 1;if (i && e.push({ range: new monaco.Range(m, k, m, l + 1), options: { stickiness: monaco.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges, inlineClassName: "userScriptKeyHighlight", hoverMessage: this._getKeyDescription(i), isWholeLine: !1 } }), j) {
            var n = g.slice(l).indexOf(j) + l,
                o = n + 1;e.push({ range: new monaco.Range(m, o, m, o + j.length), options: { stickiness: monaco.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges, inlineClassName: "userScriptValueHighlight", hoverMessage: "Value `" + j + "` for key `" + i + "`", isWholeLine: !1 } });
          }
        }
      }return e;
    }, c.prototype._doDecorationUpdate = function (a) {
      this._isDiff(this._editor) || (this._editor.getModel() === this._model ? this._decorations = this._editor.deltaDecorations(this._decorations, a) : this._decorations = this._editor.deltaDecorations(this._decorations, []));
    }, c.prototype._shouldUpdateDecorations = function (a) {
      var b = this._firePrivate("shouldDecorate", [a]);return 1 < b.length ? b.reduce(function (a, b) {
        return a || b;
      }) : 1 === b.length && b[0];
    }, c.prototype._formatDecorations = function (a) {
      return 0 === a.length ? [] : 1 === a.length ? a[0] : a.reduce(function (a, b) {
        return a.concat(b);
      });
    }, c.prototype._doModelUpdate = function () {
      var a = this._firePrivate("decorate", []).filter(function (a) {
        return null !== a;
      });this._doDecorationUpdate(this._formatDecorations(a));
    }, c._metaTagProvider = { provideCompletionItems: function provideCompletionItems() {
        return [{ label: "==UserScript==", kind: monaco.languages.CompletionItemKind.Property, insertText: "==UserScript==", detail: "UserScript start tag", documentation: "The start tag for a UserScript metadata block" }, { label: "==/UserScript==", kind: monaco.languages.CompletionItemKind.Property, insertText: "==/UserScript==", detail: "UserScript end tag", documentation: "The end tag for a UserScript metadata block" }];
      } }, c._metaKeyProvider = { provideCompletionItems: function provideCompletionItems(a, c) {
        var d = new monaco.Range(c.lineNumber, 0, c.lineNumber, c.column),
            e = a.getValueInRange(d),
            f = a._metaBlock;if (!f || new monaco.Range(f.start.lineNumber, f.start.column, f.end.lineNumber, f.end.column).containsPosition(c)) {
          var g = e.split("@"),
              h = g[0].length;g = g.slice(1);for (var i = 0, j = g; i < j.length; i++) {
            var k = j[i],
                l = "@" + k,
                m = null;if (m = /@(\w*)/.exec(l)) {
              var n = h + l.indexOf(m[0]) + 1,
                  o = new monaco.Range(c.lineNumber, n, c.lineNumber, n + m[0].length);if (o.containsPosition(c)) return { isIncomplete: !0, items: Object.getOwnPropertyNames(b).map(function (a) {
                  var c = b[a];return { label: "@" + a, kind: monaco.languages.CompletionItemKind.Property, insertText: "@" + a, detail: "Metadata key", documentation: c };
                }) };
            }h += l.length;
          }
        }return [];
      } }, c._userScriptStart = "==UserScript==", c._userScriptEnd = "==/UserScript==", c._metaPropRegex = /@(\w+)(\s+)(.+)?/, c;
  }(e),
      g = function (a) {
    function b(b, c) {
      var d = a.call(this, b, c) || this;return (d.metaBlockChanged = !0, d._isTextarea()) ? d : (s.Completion.register("javascript", f._metaTagProvider), s.Completion.register("javascript", f._metaKeyProvider), s.Completion.register("typescript", f._metaTagProvider), s.Completion.register("typescript", f._metaKeyProvider), d._disposables.push({ dispose: function dispose() {
          s.Completion.clearAll();
        } }), d);
    }return __extends(b, a), b.getSettings = function () {
      return {};
    }, b;
  }(f);a.MonacoEditorScriptMetaMods = g;var h = function (a) {
    function b(b, c) {
      var d = a.call(this, b, c) || this;return (d._underlineDisabled = !1, d._currentStylesheetRules = "", d._styleLines = [], d._isTextarea()) ? d : (s.Completion.register("css", f._metaTagProvider), s.Completion.register("css", f._metaKeyProvider), d._disposables.push({ dispose: function dispose() {
          s.Completion.clearAll();
        } }), d._listen("shouldDecorate", function (a) {
        if (a.isFlush) return !0;for (var b = 0, c = a.changes; b < c.length; b++) {
          var e = c[b],
              f = [e.range.startLineNumber];e.range.endLineNumber !== e.range.startLineNumber && f.push(e.range.endLineNumber);for (var g, h = 0, i = f; h < i.length; h++) {
            if (g = i[h], -1 < d._styleLines.indexOf(g)) return !0;for (var j, k = d._model.getLineContent(g), l = d._getCssRuleParts(k), m = 0, n = l; m < n.length; m++) {
              if (j = n[m], d._findColor(0, j.text)) return !0;
            }
          }
        }return !1;
      }), d._listen("decorate", function () {
        return d._highlightColors();
      }), d._disposables.push(e._genDisposable(function () {
        return window.setInterval(function () {
          !d._underlineDisabled && window.app.item && d._markUnderlines();
        }, 50);
      }, function (a) {
        window.clearInterval(a);
      })), d._underlineDisabled = window.app ? window.app.settings.editor.cssUnderlineDisabled : window.installPage.settings.editor.cssUnderlineDisabled, d._isDiff(d._editor) || (d._disposables.push(d._editor.addAction({ id: "disable-css-underline", label: "Disable CSS underline", run: function run() {
          d._underlineDisabled = !0;
        } })), d._disposables.push(d._editor.addAction({ id: "enable-css-underline", label: "Enable CSS Underline", run: function run() {
          d._underlineDisabled = !1;
        } }))), d);
    }return __extends(b, a), b.prototype._getCssRuleParts = function (a) {
      for (var c = null, d = []; c = b._cssRuleRegex.exec(a);) {
        var e = a.indexOf(c[0]),
            f = e + c[0].length;d.push({ text: c[0], start: e }), a = a.slice(0, e) + this._stringRepeat("-", c[0].length) + a.slice(f);
      }return d;
    }, b.prototype._findColor = function (a, c, d) {
      void 0 === d && (d = 0);for (var e = 0, f = b._cssColorNames; e < f.length; e++) {
        var g = f[e],
            h = -1;if (-1 < (h = c.toLowerCase().indexOf(g))) return { pos: new monaco.Range(a + 1, h + d + 1, a + 1, h + d + g.length + 1), color: g };
      }var i = null;if (i = b._hexRegex.exec(c)) {
        var h = c.indexOf(i[1]);return { pos: new monaco.Range(a + 1, h + d + 1, a + 1, h + d + i[1].length + 1), color: i[1] };
      }if (i = b._rgbRegex.exec(c)) {
        var h = c.indexOf(i[0]);return { pos: new monaco.Range(a + 1, h + d + 1, a + 1, h + d + i[0].length + 1), color: i[0] };
      }if (i = b._rgbaRegex.exec(c)) {
        var h = c.indexOf(i[0]);return { pos: new monaco.Range(a + 1, h + d + 1, a + 1, h + d + i[0].length + 1), color: i[0] };
      }return null;
    }, b.prototype._stringRepeat = function (a, b) {
      for (var c = "", d = 0; d < b; d++) {
        c += a;
      }return c;
    }, b.prototype._getColors = function () {
      for (var a = this._model.getValue(), b = a.split("\n"), c = [], d = 0; d < b.length; d++) {
        for (var e, f = b[d], g = null, h = this._getCssRuleParts(f), i = 0, j = h; i < j.length; i++) {
          e = j[i], (g = this._findColor(d, e.text, e.start)) && c.push(g);
        }
      }return c;
    }, b.prototype._highlightColors = function () {
      var a = this._getColors();return this._styleLines = a.map(function (a) {
        return a.pos.startLineNumber;
      }), a.map(function (a) {
        return { range: a.pos, options: { stickiness: monaco.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges, beforeContentClassName: "userScriptColorUnderline color" + a.color } };
      });
    }, b.prototype._markUnderlines = function () {
      var a = [],
          b = "";if (this._editor.getModel() === this._model) {
        var c = this._editor.getDomNode().querySelectorAll(".userScriptColorUnderline");if (Array.prototype.slice.apply(c).forEach(function (c) {
          for (var d = 0; d < c.classList.length; d++) {
            if (0 === c.classList[d].indexOf("color")) {
              var e = c.classList[d].slice(5),
                  f = c.classList[d];a.push(["." + f + "::before", "background-color: " + e]), b += "" + f + e;
            }
          }
        }), b === this._currentStylesheetRules) return;for (var d = ("script" === window.app.item.type ? window.scriptEdit : window.stylesheetEdit).$.editor._getStylesheet(), e = d.sheet; 0 !== e.rules.length;) {
          e.deleteRule(0);
        }this._currentStylesheetRules = b, a.forEach(function (a) {
          var b = a[0],
              c = a[1];e.addRule(b, c);
        });
      }
    }, b.getSettings = function () {
      return {};
    }, b._cssRuleRegex = /:(\s*)?(.*)(\s*);/, b._cssColorNames = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed ", "Indigo ", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"].map(function (a) {
      return a.toLowerCase();
    }).sort(function (c, a) {
      return a.length - c.length;
    }), b._hexRegex = /#((([a-f]|[A-F]){8})|(([a-f]|[A-F]){6})|(([a-f]|[A-F]){3}))[^a-f|A-F]/, b._rgbRegex = /rgb\((\d{1,3}),(\s*)?(\d{1,3}),(\s*)?(\d{1,3})\)/, b._rgbaRegex = /rgb\((\d{1,3}),(\s*)?(\d{1,3}),(\s*)?(\d{1,3})\),(\s*)?(\d{1,3})\)/, b;
  }(f),
      i = function (a) {
    function b(c, d) {
      var e = a.call(this, c, d) || this;if (e._isTextarea()) return e;var f = d.getValue();return e._findSchema(f) || d.setValue(e._addSchemaKey(f)), b.enableSchema(), e._disposables.push({ dispose: function dispose() {
          b.disableSchema();
        } }), e;
    }return __extends(b, a), b.prototype._addSchemaKey = function (a) {
      var b = "\t\"$schema\": \"crm-settings.json\"";if (0 === a.split("\n").join("").trim().length) return "{\n" + b + "\n}";var c = a.split("\n");for (var d in c) {
        var e = c[d];0 === e.trim().indexOf("{") && (1 < e.trim().length ? (c[d] = "{", c.splice(~~d + 1, 0, b, e.trim().slice(1))) : c.splice(~~d + 1, 0, b));
      }return c.join("\n");
    }, b.prototype._findSchema = function (a) {
      a = a.replace(/\/\*.*?\*\//g, "");var b = a.split("\n");for (var c in b) {
        if (-1 < b[c].indexOf("//")) for (var d, e = !1, f = 0; f < b[c].length; f++) {
          if (d = b[c][f], "\\" === d) continue;else "\"" === d ? e = !e : e || "/" !== d || "/" !== b[c][f + 1] || (b[c] = b[c].slice(0, f));
        }
      }try {
        var g = JSON.parse(a);return !!("$schema" in g);
      } catch (a) {
        return !0;
      }
    }, b.disableSchema = function () {
      monaco.languages.json.jsonDefaults.setDiagnosticsOptions({ allowComments: !0 });
    }, b.enableSchema = function () {
      monaco.languages.json.jsonDefaults.setDiagnosticsOptions({ allowComments: !1, schemas: [{ uri: "crm-settings.json", schema: { type: "object", properties: { $schema: { type: "string", "enum": ["crm-settings.json"] } }, additionalProperties: { title: "The name of the option", type: "object", oneOf: [{ type: "object", properties: { type: { title: "A number type option", type: "string", "enum": ["number"] }, minimum: { title: "The minimum value of the number", type: "number" }, maximum: { title: "The maximum value of the number", type: "number" }, descr: { title: "A description for this option", type: "string" }, value: { title: "The value of this option (set to null for unset)", description: "The value of this option, changing it here will have the same effect as changing it in the options dialog", type: ["number", "null"] } } }, { type: "object", properties: { type: { title: "A string type option", type: "string", "enum": ["string"] }, maxLength: { title: "The maximum length of the string", type: "number" }, format: { title: "A regex format that the string has to follow", type: "string" }, descr: { title: "A description for this option", type: "string" }, value: { title: "The value of this option (set to null for unset)", description: "The value of this option, changing it here will have the same effect as changing it in the options dialog", type: ["string", "null"] } } }, { type: "object", properties: { type: { title: "A choice type option", type: "string", "enum": ["choice"] }, selected: { title: "The selected value's index", type: "number" }, descr: { title: "A description for this option", type: "string" }, values: { title: "The possible values of this option", type: "array", items: { type: ["string", "number"] } } } }, { type: "object", properties: { type: { title: "A boolean type option", type: "string", "enum": ["boolean"] }, descr: { title: "A description for this option", type: "string" }, value: { title: "The value of this option (set to null for unset)", description: "The value of this option, changing it here will have the same effect as changing it in the options dialog", type: ["boolean", "null"] } } }, { type: "object", properties: { type: { title: "An array type option", type: "string", "enum": ["array"] }, maxItems: { title: "The maximum number of array items", type: "number" }, items: { title: "The type of items this array contains (array or string)", type: "string", "enum": ["string", "number"] }, descr: { title: "A description for this option", type: "string" }, value: { title: "The value of this option (set to null for unset)", description: "The value of this option, changing it here will have the same effect as changing it in the options dialog", type: ["boolean", "null"] } }, required: ["items"] }] } } }], validate: !0 });
    }, b.getSettings = function () {
      return {};
    }, b;
  }(e),
      j = function (a) {
    function b(b, c, d) {
      var e = d.node,
          f = d.isBackground,
          g = a.call(this, b, c) || this;return (g._libraries = [], g._registrationDisposables = [], g._node = e, g._isBackground = f, g._isTextarea()) ? g : (g._enable(), g._isDiff(g._editor) || g._disposables.push(g._editor.onDidChangeModel(function (a) {
        a.newModelUrl === c.uri ? g._enable() : g._disable();
      })), g._disposables.push({ dispose: function dispose() {
          g._registrationDisposables.forEach(function (a) {
            a.dispose();
          });
        } }), g);
    }return __extends(b, a), b.prototype._enable = function () {
      return __awaiter(this, void 0, void 0, function () {
        var a;return __generator(this, function (b) {
          switch (b.label) {case 0:
              return a = this, [4, this._registerLibraries(this._libraries)];case 1:
              return a._registrationDisposables = b.sent(), [2];}
        });
      });
    }, b.prototype._disable = function () {
      this._registrationDisposables.forEach(function (a) {
        a.dispose();
      }), this._registrationDisposables = [];
    }, b.prototype.updateLibraries = function () {
      this._libraries = this._getLibraries(this._node, this._isBackground);
    }, b.prototype._getLibraries = function (a, b) {
      return b ? a.value.backgroundLibraries : a.value.libraries;
    }, b.prototype._getLibrary = function (a) {
      return __awaiter(this, void 0, void 0, function () {
        var b, c, d, e, f;return __generator(this, function (g) {
          switch (g.label) {case 0:
              return a ? [4, browserAPI.storage.local.get()] : [2, !1];case 1:
              for (b = g.sent(), c = b.libraries, (d = 0, e = c); d < e.length; d++) {
                if (f = e[d], f.name === a) {
                  if (f.ts && f.ts.enabled) return [2, f.ts.code.compiled];break;
                }
              }return [2, !1];}
        });
      });
    }, b.prototype._registerLibrary = function (a) {
      return __awaiter(this, void 0, void 0, function () {
        var b;return __generator(this, function (c) {
          switch (c.label) {case 0:
              return [4, this._getLibrary(a.name)];case 1:
              return b = c.sent(), !1 === b ? [2, { dispose: function dispose() {} }] : [2, monaco.languages.typescript.typescriptDefaults.addExtraLib(b, a.name + ".ts")];}
        });
      });
    }, b.prototype._registerLibraries = function (a) {
      return __awaiter(this, void 0, void 0, function () {
        var b = this;return __generator(this, function (c) {
          switch (c.label) {case 0:
              return [4, Promise.all(a.map(function (a) {
                return b._registerLibrary(a);
              }))];case 1:
              return [2, c.sent()];}
        });
      });
    }, b.getSettings = function () {
      return {};
    }, b;
  }(g);a.MonacoEditorTSLibrariesMetaMods = j;var k,
      l = function () {
    function a(a, b) {
      this._options = b, this._models = [], this.__textarea = !0;var c = b.model;c && (this._model = c, this._models = "original" in c ? [c.original, c.modified] : [c]), this._genBaseElements(a), c && ("original" in c ? (this._addModelListenersBase(c.original), this._addModelListenersBase(c.modified)) : this._addModelListenersBase(c));
    }return a.prototype._genBaseElements = function (a) {
      var b = document.createElement("div");b.classList.add("monacoTextareaContainer"), a.appendChild(b), this._baseElements = { container: b };
    }, a.prototype._totalCharIndexToPosition = function (a, b) {
      var c = a.split("\n");for (var d in c) {
        var e = c[d];if (0 >= b - e.length) return { line: ~~d, char: b - e.length };
      }return { line: c.length - 1, char: c[c.length - 1].length };
    }, a.prototype._addModelListenersBase = function (a) {
      this._models.push(a), this._addModelListeners(a);
    }, a.prototype._assertModelAdded = function (a) {
      -1 === this._models.indexOf(a) && (this._models.push(a), this._addModelListeners(a));
    }, a.prototype._genTextarea = function () {
      var a = document.createElement("textarea");return a.classList.add("monacoEditorTextarea"), a.setAttribute("spellcheck", "false"), a.setAttribute("autocomplete", "off"), a.setAttribute("autocorrect", "off"), a.setAttribute("autocapitalize", "off"), "vs-dark" === this._options.theme && a.classList.add("dark-theme"), a;
    }, a.prototype.updateOptions = function () {}, a.prototype.getValue = function () {
      return this._getValue();
    }, a.prototype.saveViewState = function () {
      return "original" in this._model ? this._model.modified : this._model;
    }, a.prototype.restoreViewState = function (a) {
      this._swapToModel(a);
    }, a.prototype.focus = function () {
      this._textareaElements[0] && this._textareaElements[0].focus();
    }, a.prototype.layout = function () {}, a.prototype.dispose = function () {
      this._textareaElements && this._textareaElements.forEach(function (a) {
        a && a.remove();
      }), this._textareaElements = [], this._models.forEach(function (a) {
        return a.dispose();
      }), this._models = [], this._baseElements.container && this._baseElements.container.remove(), this._baseElements = {};
    }, a.prototype.getDomNode = function () {
      return this._baseElements.container;
    }, a.prototype.getSelected = function () {
      for (var a, b = 0, c = this._textareaElements; b < c.length; b++) {
        if (a = c[b], !!a) {
          var d = a.selectionStart,
              e = a.selectionEnd,
              f = a.value.substring(d, e);return { from: __assign({}, this._totalCharIndexToPosition(a.value, d), { totalChar: d }), to: __assign({}, this._totalCharIndexToPosition(a.value, e), { totalChar: e }), content: f };
        }
      }return null;
    }, a;
  }(),
      m = function (a) {
    function b(b, c) {
      var d = a.call(this, b, c) || this;return d._genElements(b), d._textarea.addEventListener("keydown", function () {
        window.setTimeout(function () {
          d._model.setValue(d._textarea.value, d._textarea);
        }, 0);
      }), c.model && (d._textarea.value = c.model.getValue()), d;
    }return __extends(b, a), b.prototype._genElements = function () {
      this._textarea = this._genTextarea(), this._textareaElements = [this._textarea], this._baseElements.container.appendChild(this._textarea);
    }, b.prototype._isActiveModel = function (a) {
      return this._model === a;
    }, b.prototype._addModelListeners = function (a) {
      var b = this;a.listen("change", function (c) {
        var d = c.newValue,
            e = c.src;b._isActiveModel(a) && e !== b._textarea && (b._textarea.value = d);
      });
    }, b.prototype._getValue = function () {
      return this._model.getValue();
    }, b.prototype._swapToModel = function (a) {
      this.setModel(a);
    }, b.prototype.getModel = function () {
      return this._model;
    }, b.prototype.setModel = function (a) {
      this._assertModelAdded(a), this._model = a, this._textarea.value = a.getValue();
    }, (b.prototype.setValue = function (a) {
      this._model.setValue(a);
    }, b);
  }(l),
      n = function (a) {
    function b(b, c) {
      var d = a.call(this, b, c) || this;return d.__diff = !0, d._genElements(), c.model && (d._textareas.original.value = c.model.original.getValue(), d._textareas.modified.value = c.model.modified.getValue()), d;
    }return __extends(b, a), b.prototype._genElements = function () {
      var a = this._genTextarea(),
          b = this._genTextarea();a.classList.add("monacoOriginalTextarea"), b.classList.add("monacoModifiedTextarea"), this._textareas = { original: a, modified: b }, this._textareaElements = [a, b], this._baseElements.container.classList.add("diffContainer"), this._baseElements.container.appendChild(a), this._baseElements.container.appendChild(b);
    }, b.prototype._setTextareaValues = function (a) {
      this._textareas.original.value = a.original.getValue(), this._textareas.modified.value = a.modified.getValue();
    }, b.prototype._isActiveOriginalModel = function (a) {
      return this._model.original === a;
    }, b.prototype._isActiveModifiedModel = function (a) {
      return this._model.modified === a;
    }, b.prototype._addModelListeners = function (a) {
      var b = this;a.listen("change", function (c) {
        var d = c.newValue,
            e = c.src;b._isActiveOriginalModel(a) ? e !== b._textareas.original && (b._textareas.original.value = d) : b._isActiveModifiedModel(a) && e !== b._textareas.modified && (b._textareas.modified.value = d);
      });
    }, b.prototype._getValue = function () {
      return this._model.modified.getValue();
    }, b.prototype._swapToModel = function (a) {
      this.setModel(a);
    }, b.prototype.getModel = function () {
      return this._model;
    }, b.prototype.setModel = function (a) {
      this._assertModelAdded(a.original), this._assertModelAdded(a.modified), this._model = a, this._setTextareaValues(a);
    }, b;
  }(l),
      o = function (a) {
    function b(b) {
      var c = a.call(this) || this;return c.setValue(b), c;
    }return __extends(b, a), b.prototype.getValue = function () {
      return this._value;
    }, b.prototype.setValue = function (a, b) {
      var c = this._value;this._value = a, this._value !== c && this._firePublic("change", [{ oldValue: c, newValue: this._value, src: b }]);
    }, b.prototype.dispose = function () {}, b;
  }(c),
      p = { noSpinner: { type: Boolean, notify: !0, value: !1 } };(function (a) {
    a[a.CSS = 0] = "CSS", a[a.JS = 1] = "JS", a[a.TS = 2] = "TS", a[a.JSON = 3] = "JSON", a[a.JSON_OPTIONS = 4] = "JSON_OPTIONS", a[a.JS_META = 5] = "JS_META", a[a.TS_META = 6] = "TS_META", a[a.CSS_META = 7] = "CSS_META", a[a.PLAIN_TEXT = 8] = "PLAIN_TEXT";
  })(k || (k = {}));var q;(function (a) {
    a[a.TS_LIBRARIES_META = 0] = "TS_LIBRARIES_META";
  })(q || (q = {}));var r = function () {
    function a() {}return a._typeIsCss = function (a) {
      return a === k.CSS || a === k.CSS_META;
    }, a._typeIsTS = function (a) {
      return a === k.TS || a === k.TS_META;
    }, a._typeIsJS = function (a) {
      return a === k.JS || a === k.JS_META;
    }, a._typeIsJSON = function (a) {
      return a === k.JSON || a === k.JSON_OPTIONS;
    }, a._getSettings = function (a) {
      switch (a) {case k.CSS_META:
          return h.getSettings();case k.TS_META:
          return g.getSettings();case k.JSON_OPTIONS:
          return i.getSettings();}if ("object" === ("undefined" === typeof a ? "undefined" : babelHelpers["typeof"](a))) switch (a.mode) {case q.TS_LIBRARIES_META:
          return j.getSettings();}return {};
    }, a._getTypeHandler = function (a, b, c) {
      switch (a) {case k.CSS_META:
          return new h(b, c);case k.JS_META:case k.TS_META:
          return new g(b, c);case k.JSON_OPTIONS:
          return new i(b, c);}if ("object" === ("undefined" === typeof a ? "undefined" : babelHelpers["typeof"](a))) switch (a.mode) {case q.TS_LIBRARIES_META:
          return new j(b, c, a.config);}return null;
    }, a._getLanguage = function (a) {
      return this._typeIsCss(a) ? "css" : this._typeIsJS(a) ? "javascript" : this._typeIsTS(a) ? "typescript" : this._typeIsJSON(a) ? "json" : "text/plain";
    }, a.initTSLibrariesMode = function (a, b) {
      return { custom: !0, config: { node: a, isBackground: b }, mode: q.TS_LIBRARIES_META };
    }, a._mergeArrays = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        a[c] = a[c] && "object" === babelHelpers["typeof"](b[c]) && void 0 !== a[c] && null !== a[c] ? Array.isArray(b[c]) ? this._mergeArrays(a[c], b[c]) : this._mergeObjects(a[c], b[c]) : b[c];
      }return a;
    }, a._mergeObjects = function (a, b) {
      for (var c in b) {
        b.hasOwnProperty(c) && (a[c] = "object" === babelHelpers["typeof"](b[c]) && "object" === babelHelpers["typeof"](a[c]) && void 0 !== a[c] && null !== a[c] ? Array.isArray(b[c]) ? this._mergeArrays(a[c], b[c]) : this._mergeObjects(a[c], b[c]) : b[c]);
      }return a;
    }, (a.setMonacoEditorScopes = function (a) {
      return __awaiter(this, void 0, void 0, function () {
        var b;return __generator(this, function (c) {
          switch (c.label) {case 0:
              return this._supportsMonaco() ? [4, s.monacoReady] : [3, 2];case 1:
              c.sent(), s.setScope(this), c.label = 2;case 2:
              return b = a(), this._supportsMonaco() && (s.registerScope(this, this.editor), s.StyleHack.copyThemeScope(this)), this._hideSpinner(), [2, b];}
        });
      });
    }, a._getChromeVersion = function () {
      return "chrome" === BrowserAPI.getBrowser() ? parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)[2], 10) : 1e3;
    }, a._supportsMonaco = function () {
      return 30 <= this._getChromeVersion();
    }, a.create = function (a, b, c) {
      return __awaiter(this, void 0, void 0, function () {
        var d,
            e,
            f,
            g = this;return __generator(this, function (h) {
          switch (h.label) {case 0:
              return d = this._getLanguage(a), this._createInfo = { method: "create", options: b, override: c }, this._isTypescript = this._typeIsTS(a), this.options = b, [4, this.setMonacoEditorScopes(function () {
                if (g._supportsMonaco()) {
                  var a = monaco.editor.createModel(b.value, d);return g.editor = window.monaco.editor.create(g.$.editorElement, g._mergeObjects({ model: a }, b), c), a;
                }var e = new o(b.value);return g.editor = new m(g.$.editorElement, { model: e }), e;
              })];case 1:
              return e = h.sent(), this.editor.updateOptions(this._getSettings(a)), f = this._getTypeHandler(a, this.editor, e), this._models["default"] = { models: [this.editor.getModel()], handlers: [f], state: null, editorType: a }, [2, this];}
        });
      });
    }, a.createDiff = function (a, b, c, d) {
      var e = a[0],
          f = a[1];return __awaiter(this, void 0, void 0, function () {
        var a,
            g,
            h,
            i,
            j = this;return __generator(this, function (k) {
          switch (k.label) {case 0:
              return a = this._getLanguage(b), this._createInfo = { method: "diff", values: [e, f], language: a, editorType: b, options: c, override: d }, this._isTypescript = this._typeIsTS(b), this.options = c, [4, this.setMonacoEditorScopes(function () {
                j.editor = j._supportsMonaco() ? monaco.editor.createDiffEditor(j.$.editorElement, c, d) : new n(j.$.editorElement, {});
              })];case 1:
              return k.sent(), this._supportsMonaco() ? (g = monaco.editor.createModel(e, a), h = monaco.editor.createModel(f, a)) : (g = new o(e), h = new o(f)), this.editor.updateOptions(this._getSettings(b)), this.editor.setModel({ original: g, modified: h }), i = [this._getTypeHandler(b, this.editor, g), this._getTypeHandler(b, this.editor, h)], this._models["default"] = { editorType: b, handlers: i, models: [g, h], state: null }, [2, this];}
        });
      });
    }, a.createFrom = function (a) {
      return __awaiter(this, void 0, void 0, function () {
        var b,
            c,
            d,
            e = this;return __generator(this, function (f) {
          switch (f.label) {case 0:
              return this._createInfo && "from" === this._createInfo.method && this._createInfo.from.removeChild(this), b = a.editor, c = a.getCurrentModel().editorType, this._createInfo = { method: "from", from: a, modelId: a.getCurrentModelId() }, this._isTypescript = this._typeIsTS(c), [4, this.setMonacoEditorScopes(function () {
                e.editor = e._supportsMonaco() ? window.monaco.editor.create(e.$.editorElement, e._mergeObjects({ model: b.getModel() }, e.options)) : new m(e.$.editorElement, { model: b.getModel() });
              })];case 1:
              return f.sent(), this.editor.updateOptions(this._getSettings(c)), d = this._getTypeHandler(c, this.editor, this.editor.getModel()), this._models["default"] = { models: [this.editor.getModel()], handlers: [d], state: null, editorType: c }, a.addChild(this), [2, this];}
        });
      });
    }, a.isDiff = function () {
      return "diff" === this._createInfo.method;
    }, a.isTextarea = function () {
      return "__textarea" in this.editor;
    }, a.getEditorAsMonaco = function () {
      return this.editor;
    }, a.setValue = function (a) {
      this.isDiff(this.editor) || this.editor.setValue(a);
    }, a.reset = function () {
      return __awaiter(this, void 0, void 0, function () {
        var a, b, c;return __generator(this, function (d) {
          switch (d.label) {case 0:
              return (a = this._createInfo, b = this.getCurrentModel(), !b) ? [2, null] : (c = b.editorType, this.destroy(), "create" === a.method ? [4, this.create(c, a.options, a.override)] : [3, 2]);case 1:
              return [2, d.sent()];case 2:
              return "diff" === a.method ? [4, this.createDiff(a.values, a.editorType, a.options, a.override)] : [3, 4];case 3:
              return [2, d.sent()];case 4:
              return [4, this.createFrom(a.from)];case 5:
              return [2, d.sent()];}
        });
      });
    }, a.addChild = function (a) {
      this._children.push(a);
    }, a.removeChild = function (a) {
      this._children.splice(this._children.indexOf(a), 1);
    }, a.setNewModels = function (a) {
      var b = this.editor;this.isDiff(b) ? b.setModel({ original: a[0], modified: a[1] }) : b.setModel(a[0]);
    }, a.setTypescript = function (a) {
      var b = this;if (this._isTypescript !== a) {
        if ("from" === this._createInfo.method) return void this._createInfo.from.setTypescript(a);var c = this.getCurrentModelId(),
            d = this.getCurrentModel(),
            e = a ? "typescript" : "javascript",
            f = d.models;d.handlers.forEach(function (a) {
          a.destroy();
        });var g = f.map(function (a) {
          return monaco.editor.createModel(a.getValue(), e);
        });for (var h in s.hasScope(this) ? this.setNewModels(g) : (this.setNewModels([s.getNullModel()]), s.onHasScope(this, function () {
          b.setNewModels(g);
        })), f.forEach(function (a) {
          return a.dispose();
        }), d.handlers = g.map(function (a) {
          return b._getTypeHandler(d.editorType, b.editor, a);
        }), d.models = g, this._models) {
          h !== c && delete this._models[h];
        }this._isTypescript = a, this._children.forEach(function (c) {
          c._isTypescript = a;var d = c._createInfo.modelId,
              e = b.getModel(d);b.isDiff(c.editor) || c.editor.setModel(e.models[0]);
        });
      }
    }, a.addModel = function (a, b, c) {
      if (!this.hasModel(a)) {
        var d = monaco.editor.createModel(b, this._getLanguage(c)),
            e = this._getTypeHandler(c, this.editor, d);this._models[a] = { models: [d], handlers: [e], state: null, editorType: c };
      }
    }, a.hasModel = function (a) {
      return a in this._models;
    }, a.getModel = function (a) {
      return this._models[a];
    }, a.switchToModel = function (a, b, c) {
      if (this.hasModel(a) || this.addModel(a, b, c), this.getCurrentModelId() !== a) {
        var d = this.editor.saveViewState(),
            e = this.getCurrentModelId();e in this._models && (this._models[e].state = d);var f = this._models[a];this.editor.setModel(f.models[0]), this.editor.restoreViewState(f.state), this.editor.focus();
      }
    }, a.getCurrentModelId = function () {
      for (var a in this._models) {
        var b = this._models[a].models;if (b[0] === this.editor.getModel()) return a;
      }return null;
    }, a.getCurrentModel = function () {
      return this._models[this.getCurrentModelId()];
    }, a.destroy = function () {
      for (var a in this.editor.dispose(), this._models) {
        var b = this._models[a];b.handlers.forEach(function (a) {
          a.destroy();
        }), b.handlers = null, delete this._models[a];
      }this._showSpinner();
    }, a._runJsLint = function () {
      var a = this.getCurrentModel().models[0].getValue(),
          b = window.jslint(a, {}, window.app.jsLintGlobals.slice()).warnings;return b.map(function (a) {
        return { col: a.column, line: a.line, message: a.message };
      });
    }, a._runCssLint = function () {
      var a = this.getCurrentModel().models[0].getValue(),
          b = window.CSSLint.verify(a).messages;return b.map(function (a) {
        return { col: a.col, line: a.line, message: a.message };
      });
    }, a._showLintResults = function (a, b) {
      "__textarea" in this.editor || monaco.editor.setModelMarkers(this.getCurrentModel().models[0], a, b.map(function (a) {
        return { startLineNumber: a.line, endLineNumber: a.line, startColumn: a.col, endColumn: a.col, message: a.message, severity: 2 };
      }));
    }, a.runLinter = function () {
      return __awaiter(this, void 0, void 0, function () {
        var a;return __generator(this, function (b) {
          switch (b.label) {case 0:
              return a = this._models[this.getCurrentModelId()].editorType, this._typeIsJS(a) ? [4, s.Libraries.runFile("js/libraries/jslint.js")] : [3, 2];case 1:
              return b.sent(), this._showLintResults("jslint", this._runJsLint()), [3, 5];case 2:
              return this._typeIsTS(a) ? (alert("No linting possible in typescript mode"), [3, 5]) : [3, 3];case 3:
              return this._typeIsCss(a) ? [4, s.Libraries.runFile("js/libraries/csslint.js")] : [3, 5];case 4:
              b.sent(), this._showLintResults("csslint", this._runCssLint()), b.label = 5;case 5:
              return [2];}
        });
      });
    }, a.getTypeHandler = function () {
      return this._models[this.getCurrentModelId()].handlers;
    }, a._showSpinner = function () {
      window.setDisplayFlex(this.$.placeholder), this.$.spinner && (this.$.spinner.active = !0), this.$.placeholder.classList.remove("hidden");
    }, a._hideSpinner = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (a) {
          switch (a.label) {case 0:
              return this.$.spinner && (this.$.spinner.active = !1), this.$.placeholder.classList.add("hidden"), [4, new window.Promise(function (a) {
                window.setTimeout(function () {
                  a(null);
                }, 1e3);
              })];case 1:
              return a.sent(), this.$.placeholder.style.display = "none", [2];}
        });
      });
    }, a._getStylesheet = function () {
      if (this._stylesheet) return this._stylesheet;var a = document.createElement("style");return this.shadowRoot.appendChild(a), this._stylesheet = a;
    }, a.claimScope = function () {
      s.setScope(this);
    }, a.setDefaultHeight = function () {
      var a = this.$.editorElement.getBoundingClientRect().height;this._tempLayoutInfo && (a = this._tempLayoutInfo.previous), this._tempLayoutInfo = { previous: a, current: a };
    }, a.setTempLayout = function () {
      var a = this.$.editorElement.getBoundingClientRect().height,
          b = a;this._tempLayoutInfo && (b = this._tempLayoutInfo.previous), this._tempLayoutInfo = { previous: b, current: a }, this.editor && this.editor.layout();
    }, a.stopTempLayout = function () {
      if (this._tempLayoutInfo) {
        var a = this._tempLayoutInfo.previous;this.$.editorElement.style.maxHeight = a + "px", this.editor.layout(), this._tempLayoutInfo.current = a, this.$.editorElement.style.maxHeight = "none";
      }
    }, a.ready = function () {
      this._showSpinner(), this._models = {}, this._children = [], s.setup();
    }, a.is = "monaco-editor", a.EditorMode = k, a.CustomEditorModes = q, a.properties = p, a.options = null, a._createInfo = null, a._tempLayoutInfo = null, a);
  }(),
      s = function () {
    function a() {}return a.setScope = function (a) {
      var b = this;this.currentScope = a, window.setTimeout(function () {
        a.editor.getDomNode() && a.editor.getDomNode().addEventListener("mouseover", function () {
          b.currentScope = a;
        });
      }, 500), this._scopeListeners = this._scopeListeners.filter(function (b) {
        var c = b.scope,
            d = b.listener;return c !== a || (d(), !1);
      });
    }, a.hasScope = function (a) {
      return this.currentScope === a;
    }, a.onHasScope = function (a, b) {
      return a === this.currentScope ? void b() : void this._scopeListeners.push({ scope: a, listener: b });
    }, a.registerScope = function (a, b) {
      this._scopes.push([a, b]);
    }, a._setupRequire = function () {
      var a = this;return new window.Promise(function (b) {
        return __awaiter(a, void 0, void 0, function () {
          var a;return __generator(this, function (c) {
            switch (c.label) {case 0:
                return [4, window.onExistsChain(window, "AMDLoader", "global", "require")];case 1:
                return a = c.sent(), a.config({ paths: { vs: "../elements/options/editpages/monaco-editor/src/min/vs" } }), a(["vs/editor/editor.main"], function () {
                  b(null);
                }), [2];}
          });
        });
      });
    }, a._getShadowRoot = function () {
      return this.currentScope.shadowRoot;
    }, a._defineProperties = function () {
      var a = this,
          c = [{ label: "==UserScript==", kind: monaco.languages.CompletionItemKind.Property, insertText: "==UserScript==", detail: "UserScript start tag", documentation: "The start tag for a UserScript metadata block" }, { label: "==/UserScript==", kind: monaco.languages.CompletionItemKind.Property, insertText: "==/UserScript==", detail: "UserScript end tag", documentation: "The end tag for a UserScript metadata block" }],
          d = { isIncomplete: !0, items: Object.getOwnPropertyNames(b).map(function (a) {
          var c = b[a];return { label: "@" + a, kind: monaco.languages.CompletionItemKind.Property, insertText: "@" + a, detail: "Metadata key", documentation: c };
        }) };Object.defineProperties(this, { getLocalBodyShadowRoot: { get: function get() {
            return a._getShadowRoot();
          } }, caretRangeFromPoint: { get: function get() {
            return function (b) {
              for (var c = 0, d = a._scopes; c < d.length; c++) {
                var e = d[c],
                    f = e[0],
                    g = e[1];if (b.viewDomNode === g.getDomNode()) return a.Caret.caretRangeFromPoint.bind(f.shadowRoot);
              }return document.caretRangeFromPoint.bind(document);
            };
          } }, _metaTagCompletions: { get: function get() {
            return c;
          } }, _metaKeyCompletions: { get: function get() {
            return d;
          } } });
    }, a._loadCRMAPI = function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (a) {
          switch (a.label) {case 0:
              return [4, this.Libraries.readFile("js/libraries/crmapi.d.ts")];case 1:
              return [2, a.sent()];}
        });
      });
    }, a._setupCRMDefs = function () {
      return __awaiter(this, void 0, void 0, function () {
        var a;return __generator(this, function (b) {
          switch (b.label) {case 0:
              return [4, this._loadCRMAPI()];case 1:
              return a = b.sent(), monaco.languages.typescript.javascriptDefaults.addExtraLib(a, "crmapi.d.ts"), monaco.languages.typescript.typescriptDefaults.addExtraLib(a, "crmapi.d.ts"), [2];}
        });
      });
    }, a._captureMonacoErrors = function () {
      window.onerror = function (a, b) {
        return -1 < b.indexOf("vs/editor/editor.main.js") ? (console.log("Caught monaco editor error (ignore these)"), !0) : void 0;
      };
    }, a._createNullModel = function () {
      this._nullModel = monaco.editor.createModel("");
    }, a.getNullModel = function () {
      return this._nullModel;
    }, a.setup = function () {
      var a = this;this._setup || (this._setup = !0, this._captureMonacoErrors(), this.monacoReady = new window.Promise(function (b) {
        return __awaiter(a, void 0, void 0, function () {
          var a = this;return __generator(this, function () {
            return this._setupRequire(), window.onExists("monaco").then(function () {
              i.enableSchema(), a._defineProperties(), a._createNullModel(), a._setupCRMDefs(), b(null);
            }), [2];
          });
        });
      }));
    }, a._setup = !1, a.monacoReady = null, a.currentScope = null, a._scopeListeners = [], a._nullModel = null, a._scopes = [], a.Caret = (c = function () {
      function b() {}return b.getCharWidth = function (a, b) {
        var c = a + b;if (this._charCache[c]) return this._charCache[c];var d = this._charCanvas.getContext("2d");d.font = b;var e = d.measureText(a),
            f = e.width;return this._charCache[c] = f, f;
      }, b.caretRangeFromPoint = function (b, c) {
        for (var d = this.elementFromPoint(b, c); d.firstChild.nodeType !== d.firstChild.TEXT_NODE;) {
          d = d.lastChild;
        }var e,
            f = d.getBoundingClientRect(),
            g = window.getComputedStyle(d, null).getPropertyValue("font"),
            h = d.innerText,
            j = f.left,
            k = 0;if (b > f.left + f.width) k = h.length;else for (var l = 0; l < h.length + 1; l++) {
          if (e = a.Caret.getCharWidth(h.charAt(l), g) / 2, j += e, b < j) {
            k = l;break;
          }j += e;
        }var i = document.createRange();return i.setStart(d.firstChild, k), i.setEnd(d.firstChild, k), i;
      }, b;
    }(), c._charCache = {}, c._charCanvas = document.createElement("canvas"), c), a.StyleHack = (d = function () {
      function a() {}return a.copyThemeScope = function (a) {
        if (this.monacoStyleElement = this.monacoStyleElement || document.getElementsByClassName("monaco-colors")[0], a.shadowRoot.children[0] !== this.monacoStyleElement) {
          var b = this.monacoStyleElement.cloneNode(!0);a.shadowRoot.insertBefore(b, a.shadowRoot.children[0]);
        }
      }, a;
    }(), d.monacoStyleElement = null, d), a.Completion = (e = function () {
      function a() {}return a.register = function (a, b) {
        this._enabledCompletions[a] = this._enabledCompletions[a] || [];for (var c, d = 0, e = this._enabledCompletions[a]; d < e.length; d++) {
          if (c = e[d], c.completion === b) return;
        }this._enabledCompletions[a].push({ completion: b, disposable: monaco.languages.registerCompletionItemProvider(a, b) });
      }, a.clearAll = function () {
        for (var a in this._enabledCompletions) {
          for (var b, c = 0, d = this._enabledCompletions[a]; c < d.length; c++) {
            b = d[c], b.disposable.dispose();
          }
        }
      }, a;
    }(), e._enabledCompletions = {}, e), a.Fetching = (f = function () {
      function a() {}return a._isWebPageEnv = function () {
        return "http:" === location.protocol || "https:" === location.protocol;
      }, a.loadFile = function (a) {
        var b = this;return new window.Promise(function (c, d) {
          var e = new window.XMLHttpRequest(),
              f = b._isWebPageEnv() ? "" + b.BASE + a : browserAPI.runtime.getURL(a);e.open("GET", f), e.onreadystatechange = function () {
            e.readyState === XMLHttpRequest.DONE && (200 === e.status ? (b._fetchedFiles[a] = e.responseText, c(e.responseText)) : d(new Error("Failed XHR")));
          }, e.send();
        });
      }, a.isLoaded = function (a) {
        return a in this._fetchedFiles;
      }, a.getLoadedFile = function (a) {
        return this._fetchedFiles[a];
      }, a;
    }(), f._fetchedFiles = {}, f.BASE = "../", f), a.Libraries = function () {
      function a() {}return a._execFile = function (a) {
        var b = this;return new window.Promise(function (c, d) {
          b._parent().Fetching.loadFile(a).then(function (a) {
            eval(a), c(null);
          }, function () {
            alert("Failed to load lint library"), d(new Error("Failed to load lint library"));
          });
        });
      }, a.readFile = function (a) {
        return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (b) {
            switch (b.label) {case 0:
                return this._parent().Fetching.isLoaded(a) ? [2, this._parent().Fetching.getLoadedFile(a)] : [4, this._parent().Fetching.loadFile(a)];case 1:
                return [2, b.sent()];}
          });
        });
      }, a.runFile = function (a) {
        return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function () {
            return this._parent().Fetching.isLoaded(a) ? [2] : [2, this._execFile(a)];
          });
        });
      }, a._parent = function () {
        return window.MonacoEditorHookManager;
      }, a;
    }(), a;var c, d, e, f;
  }();a.MonacoEditorHookManager = s;window.MonacoEditorHookManager = s, window.objectify ? window.register(r) : window.addEventListener("RegisterReady", function () {
    window.register(r);
  });
})(MonacoEditorElement || (MonacoEditorElement = {}));
"use notstrict";var AMDLoader,
    _amdLoaderGlobal = undefined;!function (a) {
  a.global = _amdLoaderGlobal;var b = function () {
    function b(a) {
      this.isWindows = a.isWindows, this.isNode = a.isNode, this.isElectronRenderer = a.isElectronRenderer, this.isWebWorker = a.isWebWorker;
    }return b.detect = function () {
      return new b({ isWindows: this._isWindows(), isNode: "undefined" != typeof module && !!module.exports, isElectronRenderer: "undefined" != typeof process && void 0 !== process.versions && void 0 !== process.versions.electron && "renderer" === process.type, isWebWorker: "function" == typeof a.global.importScripts });
    }, b._isWindows = function () {
      return !!("undefined" != typeof navigator && navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows")) || "undefined" != typeof process && "win32" === process.platform;
    }, b;
  }();a.Environment = b;
}(AMDLoader || (AMDLoader = {}));var AMDLoader;!function (a) {
  var b;!function (a) {
    a[a.LoaderAvailable = 1] = "LoaderAvailable", a[a.BeginLoadingScript = 10] = "BeginLoadingScript", a[a.EndLoadingScriptOK = 11] = "EndLoadingScriptOK", a[a.EndLoadingScriptError = 12] = "EndLoadingScriptError", a[a.BeginInvokeFactory = 21] = "BeginInvokeFactory", a[a.EndInvokeFactory = 22] = "EndInvokeFactory", a[a.NodeBeginEvaluatingScript = 31] = "NodeBeginEvaluatingScript", a[a.NodeEndEvaluatingScript = 32] = "NodeEndEvaluatingScript", a[a.NodeBeginNativeRequire = 33] = "NodeBeginNativeRequire", a[a.NodeEndNativeRequire = 34] = "NodeEndNativeRequire";
  }(b = a.LoaderEventType || (a.LoaderEventType = {}));var c = function () {
    return function (a, b, c) {
      this.type = a, this.detail = b, this.timestamp = c;
    };
  }();a.LoaderEvent = c;var d = function () {
    function d(a) {
      this._events = [new c(b.LoaderAvailable, "", a)];
    }return d.prototype.record = function (b, d) {
      this._events.push(new c(b, d, a.Utilities.getHighPerformanceTimestamp()));
    }, d.prototype.getEvents = function () {
      return this._events;
    }, d;
  }();a.LoaderEventRecorder = d;var e = function () {
    function a() {}return a.prototype.record = function () {}, a.prototype.getEvents = function () {
      return [];
    }, a;
  }();e.INSTANCE = new e(), a.NullLoaderEventRecorder = e;
}(AMDLoader || (AMDLoader = {}));var AMDLoader;!function (a) {
  var b = function () {
    function b() {}return b.fileUriToFilePath = function (a, b) {
      if (b = decodeURI(b), a) {
        if (/^file:\/\/\//.test(b)) return b.substr(8);if (/^file:\/\//.test(b)) return b.substr(5);
      } else if (/^file:\/\//.test(b)) return b.substr(7);return b;
    }, b.startsWith = function (a, b) {
      return a.length >= b.length && a.substr(0, b.length) === b;
    }, b.endsWith = function (a, b) {
      return a.length >= b.length && a.substr(a.length - b.length) === b;
    }, b.containsQueryString = function (a) {
      return (/^[^\#]*\?/gi.test(a)
      );
    }, b.isAbsolutePath = function (a) {
      return (/^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(a)
      );
    }, b.forEachProperty = function (a, b) {
      if (a) {
        for (var c in a) {
          a.hasOwnProperty(c) && b(c, a[c]);
        }
      }
    }, b.isEmpty = function (a) {
      var c = !0;return b.forEachProperty(a, function () {
        c = !1;
      }), c;
    }, b.recursiveClone = function (a) {
      if (!a || "object" != ("undefined" === typeof a ? "undefined" : babelHelpers["typeof"](a))) return a;var c = Array.isArray(a) ? [] : {};return b.forEachProperty(a, function (a, d) {
        c[a] = d && "object" == ("undefined" === typeof d ? "undefined" : babelHelpers["typeof"](d)) ? b.recursiveClone(d) : d;
      }), c;
    }, b.generateAnonymousModule = function () {
      return "===anonymous" + b.NEXT_ANONYMOUS_ID++ + "===";
    }, b.isAnonymousModule = function (a) {
      return (/^===anonymous/.test(a)
      );
    }, b.getHighPerformanceTimestamp = function () {
      return this.PERFORMANCE_NOW_PROBED || (this.PERFORMANCE_NOW_PROBED = !0, this.HAS_PERFORMANCE_NOW = a.global.performance && "function" == typeof a.global.performance.now), this.HAS_PERFORMANCE_NOW ? a.global.performance.now() : Date.now();
    }, b;
  }();b.NEXT_ANONYMOUS_ID = 1, b.PERFORMANCE_NOW_PROBED = !1, b.HAS_PERFORMANCE_NOW = !1, a.Utilities = b;
}(AMDLoader || (AMDLoader = {}));var AMDLoader;!function (b) {
  var a = Math.max,
      c = function () {
    function a() {}return a.validateConfigurationOptions = function (a, c) {
      return "string" != typeof (c = c || {}).baseUrl && (c.baseUrl = ""), "boolean" != typeof c.isBuild && (c.isBuild = !1), "object" != babelHelpers["typeof"](c.paths) && (c.paths = {}), "object" != babelHelpers["typeof"](c.config) && (c.config = {}), void 0 === c.catchError && (c.catchError = a), "string" != typeof c.urlArgs && (c.urlArgs = ""), "function" != typeof c.onError && (c.onError = function (a) {
        return "load" === a.errorCode ? (console.error("Loading \"" + a.moduleId + "\" failed"), console.error("Detail: ", a.detail), a.detail && a.detail.stack && console.error(a.detail.stack), console.error("Here are the modules that depend on it:"), void console.error(a.neededBy)) : "factory" === a.errorCode ? (console.error("The factory method of \"" + a.moduleId + "\" has thrown an exception"), console.error(a.detail), void (a.detail && a.detail.stack && console.error(a.detail.stack))) : void 0;
      }), "object" == babelHelpers["typeof"](c.ignoreDuplicateModules) && Array.isArray(c.ignoreDuplicateModules) || (c.ignoreDuplicateModules = []), 0 < c.baseUrl.length && (b.Utilities.endsWith(c.baseUrl, "/") || (c.baseUrl += "/")), Array.isArray(c.nodeModules) || (c.nodeModules = []), ("number" != typeof c.nodeCachedDataWriteDelay || 0 > c.nodeCachedDataWriteDelay) && (c.nodeCachedDataWriteDelay = 7e3), "function" != typeof c.onNodeCachedData && (c.onNodeCachedData = function (a) {
        a && ("cachedDataRejected" === a.errorCode ? console.warn("Rejected cached data from file: " + a.path) : "unlink" === a.errorCode || "writeFile" === a.errorCode ? (console.error("Problems writing cached data file: " + a.path), console.error(a.detail)) : console.error(a));
      }), c;
    }, a.mergeConfigurationOptions = function (c, d, e) {
      void 0 === d && (d = null), void 0 === e && (e = null);var f = b.Utilities.recursiveClone(e || {});return b.Utilities.forEachProperty(d, function (a, c) {
        "ignoreDuplicateModules" === a && void 0 !== f.ignoreDuplicateModules ? f.ignoreDuplicateModules = f.ignoreDuplicateModules.concat(c) : "paths" === a && void 0 !== f.paths ? b.Utilities.forEachProperty(c, function (a, b) {
          return f.paths[a] = b;
        }) : "config" === a && void 0 !== f.config ? b.Utilities.forEachProperty(c, function (a, b) {
          return f.config[a] = b;
        }) : f[a] = b.Utilities.recursiveClone(c);
      }), a.validateConfigurationOptions(c, f);
    }, a;
  }();b.ConfigurationOptionsUtil = c;var d = function () {
    function d(b, d) {
      if (this._env = b, this.options = c.mergeConfigurationOptions(this._env.isWebWorker, d), this._createIgnoreDuplicateModulesMap(), this._createNodeModulesMap(), this._createSortedPathsRules(), "" === this.options.baseUrl) {
        if (this._env.isNode && this.options.nodeRequire && this.options.nodeRequire.main && this.options.nodeRequire.main.filename) {
          var e = this.options.nodeRequire.main.filename,
              f = a(e.lastIndexOf("/"), e.lastIndexOf("\\"));this.options.baseUrl = e.substring(0, f + 1);
        }if (this._env.isNode && this.options.nodeMain) {
          var e = this.options.nodeMain,
              f = a(e.lastIndexOf("/"), e.lastIndexOf("\\"));this.options.baseUrl = e.substring(0, f + 1);
        }
      }
    }return d.prototype._createIgnoreDuplicateModulesMap = function () {
      this.ignoreDuplicateModulesMap = {};for (var a = 0; a < this.options.ignoreDuplicateModules.length; a++) {
        this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[a]] = !0;
      }
    }, d.prototype._createNodeModulesMap = function () {
      this.nodeModulesMap = Object.create(null);for (var a, b = 0, c = this.options.nodeModules; b < c.length; b++) {
        a = c[b], this.nodeModulesMap[a] = !0;
      }
    }, d.prototype._createSortedPathsRules = function () {
      var a = this;this.sortedPathsRules = [], b.Utilities.forEachProperty(this.options.paths, function (b, c) {
        Array.isArray(c) ? a.sortedPathsRules.push({ from: b, to: c }) : a.sortedPathsRules.push({ from: b, to: [c] });
      }), this.sortedPathsRules.sort(function (a, b) {
        return b.from.length - a.from.length;
      });
    }, d.prototype.cloneAndMerge = function (a) {
      return new d(this._env, c.mergeConfigurationOptions(this._env.isWebWorker, a, this.options));
    }, d.prototype.getOptionsLiteral = function () {
      return this.options;
    }, d.prototype._applyPaths = function (c) {
      for (var d, e = 0, f = this.sortedPathsRules.length; e < f; e++) {
        if (d = this.sortedPathsRules[e], b.Utilities.startsWith(c, d.from)) {
          for (var g = [], h = 0, i = d.to.length; h < i; h++) {
            g.push(d.to[h] + c.substr(d.from.length));
          }return g;
        }
      }return [c];
    }, d.prototype._addUrlArgsToUrl = function (a) {
      return b.Utilities.containsQueryString(a) ? a + "&" + this.options.urlArgs : a + "?" + this.options.urlArgs;
    }, d.prototype._addUrlArgsIfNecessaryToUrl = function (a) {
      return this.options.urlArgs ? this._addUrlArgsToUrl(a) : a;
    }, d.prototype._addUrlArgsIfNecessaryToUrls = function (a) {
      if (this.options.urlArgs) for (var b = 0, c = a.length; b < c; b++) {
        a[b] = this._addUrlArgsToUrl(a[b]);
      }return a;
    }, d.prototype.moduleIdToPaths = function (a) {
      if (!0 === this.nodeModulesMap[a]) return this.isBuild() ? ["empty:"] : ["node|" + a];var c,
          d = a;if (b.Utilities.endsWith(d, ".js") || b.Utilities.isAbsolutePath(d)) b.Utilities.endsWith(d, ".js") || b.Utilities.containsQueryString(d) || (d += ".js"), c = [d];else for (var e = 0, f = (c = this._applyPaths(d)).length; e < f; e++) {
        this.isBuild() && "empty:" === c[e] || (b.Utilities.isAbsolutePath(c[e]) || (c[e] = this.options.baseUrl + c[e]), b.Utilities.endsWith(c[e], ".js") || b.Utilities.containsQueryString(c[e]) || (c[e] += ".js"));
      }return this._addUrlArgsIfNecessaryToUrls(c);
    }, d.prototype.requireToUrl = function (a) {
      var c = a;return b.Utilities.isAbsolutePath(c) || (c = this._applyPaths(c)[0], b.Utilities.isAbsolutePath(c) || (c = this.options.baseUrl + c)), this._addUrlArgsIfNecessaryToUrl(c);
    }, d.prototype.isBuild = function () {
      return this.options.isBuild;
    }, d.prototype.isDuplicateMessageIgnoredFor = function (a) {
      return this.ignoreDuplicateModulesMap.hasOwnProperty(a);
    }, d.prototype.getConfigForModule = function (a) {
      if (this.options.config) return this.options.config[a];
    }, d.prototype.shouldCatchError = function () {
      return this.options.catchError;
    }, d.prototype.shouldRecordStats = function () {
      return this.options.recordStats;
    }, d.prototype.onError = function (a) {
      this.options.onError(a);
    }, d;
  }();b.Configuration = d;
}(AMDLoader || (AMDLoader = {}));var AMDLoader;!function (b) {
  var a = function () {
    function a(a) {
      this.actualScriptLoader = a, this.callbackMap = {};
    }return a.prototype.load = function (a, b, c, d) {
      var f = this,
          e = { callback: c, errorback: d };this.callbackMap.hasOwnProperty(b) ? this.callbackMap[b].push(e) : (this.callbackMap[b] = [e], this.actualScriptLoader.load(a, b, function () {
        return f.triggerCallback(b);
      }, function (a) {
        return f.triggerErrorback(b, a);
      }));
    }, a.prototype.triggerCallback = function (a) {
      var b = this.callbackMap[a];delete this.callbackMap[a];for (var c = 0; c < b.length; c++) {
        b[c].callback();
      }
    }, a.prototype.triggerErrorback = function (a, b) {
      var c = this.callbackMap[a];delete this.callbackMap[a];for (var d = 0; d < c.length; d++) {
        c[d].errorback(b);
      }
    }, a;
  }(),
      c = function () {
    function a() {}return a.prototype.attachListeners = function (a, b, c) {
      var d = function d() {
        a.removeEventListener("load", e), a.removeEventListener("error", f);
      },
          e = function e() {
        d(), b();
      },
          f = function f(a) {
        d(), c(a);
      };a.addEventListener("load", e), a.addEventListener("error", f);
    }, a.prototype.load = function (a, b, c, d) {
      var e = document.createElement("script");e.setAttribute("async", "async"), e.setAttribute("type", "text/javascript"), this.attachListeners(e, c, d), e.setAttribute("src", b), document.getElementsByTagName("head")[0].appendChild(e);
    }, a;
  }(),
      d = function () {
    function a() {}return a.prototype.load = function (a, b, c, d) {
      try {
        importScripts(b), c();
      } catch (a) {
        d(a);
      }
    }, a;
  }(),
      f = function () {
    function i(a) {
      this._env = a, this._didInitialize = !1, this._didPatchNodeRequire = !1;
    }return i.prototype._init = function (a) {
      if (!this._didInitialize) {
        this._didInitialize = !0, this._fs = a("fs"), this._vm = a("vm"), this._path = a("path"), this._crypto = a("crypto"), this._jsflags = "";for (var b, c = 0, d = process.argv; c < d.length; c++) {
          if (b = d[c], 0 === b.indexOf("--js-flags=")) {
            this._jsflags = b;break;
          }
        }
      }
    }, i.prototype._initNodeRequire = function (a, e) {
      function j(a) {
        var b = a.constructor,
            c = function c(b) {
          try {
            return a.require(b);
          } finally {}
        };return c.resolve = function (c) {
          return b._resolveFilename(c, a);
        }, c.main = process.mainModule, c.extensions = b._extensions, c.cache = b._cache, c;
      }var k = e.getConfig().getOptionsLiteral().nodeCachedDataDir;if (k && !this._didPatchNodeRequire) {
        this._didPatchNodeRequire = !0;var m = this,
            i = a("module");i.prototype._compile = function (n, o) {
          n = n.replace(/^#!.*/, "");var q = i.wrap(n),
              d = m._getCachedDataPath(k, o),
              l = { filename: o };try {
            l.cachedData = m._fs.readFileSync(d);
          } catch (a) {
            l.produceCachedData = !0;
          }var r = new m._vm.Script(q, l),
              c = r.runInThisContext(l),
              h = m._path.dirname(o),
              f = j(this),
              p = [this.exports, f, this, o, h, process, b.global, Buffer],
              g = c.apply(this.exports, p);return m._processCachedData(e, r, d), g;
        };
      }
    }, i.prototype.load = function (j, k, m, n) {
      var o = this,
          e = j.getConfig().getOptionsLiteral(),
          a = e.nodeRequire || b.global.nodeRequire,
          q = e.nodeInstrumenter || function (a) {
        return a;
      };this._init(a), this._initNodeRequire(a, j);var l = j.getRecorder();if (/^node\|/.test(k)) {
        var d = k.split("|"),
            c = null;try {
          c = a(d[1]);
        } catch (a) {
          return void n(a);
        }j.enqueueDefineAnonymousModule([], function () {
          return c;
        }), m();
      } else k = b.Utilities.fileUriToFilePath(this._env.isWindows, k), this._fs.readFile(k, { encoding: "utf8" }, function (a, b) {
        if (a) n(a);else {
          var d = o._path.normalize(k),
              c = d;if (o._env.isElectronRenderer) {
            var r = c.match(/^([a-z])\:(.*)/i);c = r ? "file:///" + (r[1].toUpperCase() + ":" + r[2]).replace(/\\/g, "/") : "file://" + c;
          }var f,
              p = "(function (require, define, __filename, __dirname) { ";if (f = b.charCodeAt(0) === i._BOM ? p + b.substring(1) + "\n});" : p + b + "\n});", f = q(f, d), e.nodeCachedDataDir) {
            var g = o._getCachedDataPath(e.nodeCachedDataDir, k);o._fs.readFile(g, function (b, d) {
              var e = { filename: c, produceCachedData: void 0 === d, cachedData: d },
                  i = o._loadAndEvalScript(j, k, c, f, e, l);m(), o._processCachedData(j, i, g);
            });
          } else o._loadAndEvalScript(j, k, c, f, { filename: c }, l), m();
        }
      });
    }, i.prototype._loadAndEvalScript = function (c, d, e, f, g, h) {
      h.record(b.LoaderEventType.NodeBeginEvaluatingScript, d);var i = new this._vm.Script(f, g);return i.runInThisContext(g).call(b.global, c.getGlobalAMDRequireFunc(), c.getGlobalAMDDefineFunc(), e, this._path.dirname(d)), h.record(b.LoaderEventType.NodeEndEvaluatingScript, d), i;
    }, i.prototype._getCachedDataPath = function (a, b) {
      var c = this._crypto.createHash("md5").update(b, "utf8").update(this._jsflags, "utf8").digest("hex"),
          d = this._path.basename(b).replace(/\.js$/, "");return this._path.join(a, d + "-" + c + ".code");
    }, i.prototype._processCachedData = function (a, b, c) {
      var d = this;b.cachedDataRejected ? (a.getConfig().getOptionsLiteral().onNodeCachedData({ errorCode: "cachedDataRejected", path: c }), i._runSoon(function () {
        return d._fs.unlink(c, function (b) {
          b && a.getConfig().getOptionsLiteral().onNodeCachedData({ errorCode: "unlink", path: c, detail: b });
        });
      }, a.getConfig().getOptionsLiteral().nodeCachedDataWriteDelay)) : b.cachedDataProduced && (a.getConfig().getOptionsLiteral().onNodeCachedData(void 0, { path: c, length: b.cachedData.length }), i._runSoon(function () {
        return d._fs.writeFile(c, b.cachedData, function (b) {
          b && a.getConfig().getOptionsLiteral().onNodeCachedData({ errorCode: "writeFile", path: c, detail: b });
        });
      }, a.getConfig().getOptionsLiteral().nodeCachedDataWriteDelay));
    }, i._runSoon = function (a, b) {
      var c = b + Math.ceil(Math.random() * b);setTimeout(a, c);
    }, i;
  }();f._BOM = 65279, b.createScriptLoader = function (b) {
    return new a(b.isWebWorker ? new d() : b.isNode ? new f(b) : new c());
  };
}(AMDLoader || (AMDLoader = {}));var AMDLoader;!function (b) {
  var c = function () {
    function a(a) {
      var b = a.lastIndexOf("/");this.fromModulePath = -1 === b ? "" : a.substr(0, b + 1);
    }return a._normalizeModuleId = function (a) {
      var b,
          c = a;for (b = /\/\.\//; b.test(c);) {
        c = c.replace(b, "/");
      }for (c = c.replace(/^\.\//g, ""), b = /\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//; b.test(c);) {
        c = c.replace(b, "/");
      }return c = c.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//, "");
    }, a.prototype.resolveModule = function (c) {
      var d = c;return b.Utilities.isAbsolutePath(d) || (b.Utilities.startsWith(d, "./") || b.Utilities.startsWith(d, "../")) && (d = a._normalizeModuleId(this.fromModulePath + d)), d;
    }, a;
  }();c.ROOT = new c(""), b.ModuleIdResolver = c;var f = function () {
    function a(a, b, c, d, e, f) {
      this.id = a, this.strId = b, this.dependencies = c, this._callback = d, this._errorback = e, this.moduleIdResolver = f, this.exports = {}, this.exportsPassedIn = !1, this.unresolvedDependenciesCount = this.dependencies.length, this._isComplete = !1;
    }return a._safeInvokeFunction = function (a, c) {
      try {
        return { returnedValue: a.apply(b.global, c), producedError: null };
      } catch (a) {
        return { returnedValue: null, producedError: a };
      }
    }, a._invokeFactory = function (a, c, d, e) {
      return a.isBuild() && !b.Utilities.isAnonymousModule(c) ? { returnedValue: null, producedError: null } : a.shouldCatchError() ? this._safeInvokeFunction(d, e) : { returnedValue: d.apply(b.global, e), producedError: null };
    }, a.prototype.complete = function (c, d, e) {
      this._isComplete = !0;var f = null;if (this._callback) if ("function" == typeof this._callback) {
        c.record(b.LoaderEventType.BeginInvokeFactory, this.strId);var g = a._invokeFactory(d, this.strId, this._callback, e);f = g.producedError, c.record(b.LoaderEventType.EndInvokeFactory, this.strId), f || void 0 === g.returnedValue || this.exportsPassedIn && !b.Utilities.isEmpty(this.exports) || (this.exports = g.returnedValue);
      } else this.exports = this._callback;f && d.onError({ errorCode: "factory", moduleId: this.strId, detail: f }), this.dependencies = null, this._callback = null, this._errorback = null, this.moduleIdResolver = null;
    }, a.prototype.onDependencyError = function (a) {
      return !!this._errorback && (this._errorback(a), !0);
    }, a.prototype.isComplete = function () {
      return this._isComplete;
    }, a;
  }();b.Module = f;var a = function () {
    function a() {
      this._nextId = 0, this._strModuleIdToIntModuleId = new Map(), this._intModuleIdToStrModuleId = [], this.getModuleId("exports"), this.getModuleId("module"), this.getModuleId("require");
    }return a.prototype.getMaxModuleId = function () {
      return this._nextId;
    }, a.prototype.getModuleId = function (a) {
      var b = this._strModuleIdToIntModuleId.get(a);return void 0 === b && (b = this._nextId++, this._strModuleIdToIntModuleId.set(a, b), this._intModuleIdToStrModuleId[b] = a), b;
    }, a.prototype.getStrModuleId = function (a) {
      return this._intModuleIdToStrModuleId[a];
    }, a;
  }(),
      g = function () {
    return function (a) {
      this.id = a;
    };
  }();g.EXPORTS = new g(0), g.MODULE = new g(1), g.REQUIRE = new g(2), b.RegularDependency = g;var h = function () {
    return function (a, b, c) {
      this.id = a, this.pluginId = b, this.pluginParam = c;
    };
  }();b.PluginDependency = h;var d = function () {
    function j(c, d, e, f, g) {
      void 0 === g && (g = 0), this._env = c, this._scriptLoader = d, this._loaderAvailableTimestamp = g, this._defineFunc = e, this._requireFunc = f, this._moduleIdProvider = new a(), this._config = new b.Configuration(this._env), this._modules2 = [], this._knownModules2 = [], this._inverseDependencies2 = [], this._inversePluginDependencies2 = new Map(), this._currentAnnonymousDefineCall = null, this._recorder = null, this._buildInfoPath = [], this._buildInfoDefineStack = [], this._buildInfoDependencies = [];
    }return j.prototype.reset = function () {
      return new j(this._env, this._scriptLoader, this._defineFunc, this._requireFunc, this._loaderAvailableTimestamp);
    }, j.prototype.getGlobalAMDDefineFunc = function () {
      return this._defineFunc;
    }, j.prototype.getGlobalAMDRequireFunc = function () {
      return this._requireFunc;
    }, j._findRelevantLocationInStack = function (b, e) {
      for (var f, g = function g(a) {
        return a.replace(/\\/g, "/");
      }, h = g(b), j = e.split(/\n/), k = 0; k < j.length; k++) {
        if (f = j[k].match(/(.*):(\d+):(\d+)\)?$/), f) {
          var i = f[1],
              a = f[2],
              d = f[3],
              l = Math.max(i.lastIndexOf(" ") + 1, i.lastIndexOf("(") + 1);if (i = i.substr(l), (i = g(i)) === h) {
            var m = { line: parseInt(a, 10), col: parseInt(d, 10) };return 1 === m.line && (m.col -= 53), m;
          }
        }
      }throw new Error("Could not correlate define call site for needle " + b);
    }, j.prototype.getBuildInfo = function () {
      if (!this._config.isBuild()) return null;for (var b, c = [], e = 0, f = 0, g = this._modules2.length; f < g; f++) {
        if (b = this._modules2[f], b) {
          var h = this._buildInfoPath[b.id] || null,
              k = this._buildInfoDefineStack[b.id] || null,
              a = this._buildInfoDependencies[b.id];c[e++] = { id: b.strId, path: h, defineLocation: h && k ? j._findRelevantLocationInStack(h, k) : null, dependencies: a, shim: null, exports: b.exports };
        }
      }return c;
    }, j.prototype.getRecorder = function () {
      return this._recorder || (this._config.shouldRecordStats() ? this._recorder = new b.LoaderEventRecorder(this._loaderAvailableTimestamp) : this._recorder = b.NullLoaderEventRecorder.INSTANCE), this._recorder;
    }, j.prototype.getLoaderEvents = function () {
      return this.getRecorder().getEvents();
    }, j.prototype.enqueueDefineAnonymousModule = function (a, b) {
      if (null !== this._currentAnnonymousDefineCall) throw new Error("Can only have one anonymous define call per script file");var c = null;this._config.isBuild() && (c = new Error("StackLocation").stack), this._currentAnnonymousDefineCall = { stack: c, dependencies: a, callback: b };
    }, j.prototype.defineModule = function (b, e, g, h, i, j) {
      var a = this;void 0 === j && (j = new c(b));var d = this._moduleIdProvider.getModuleId(b);if (this._modules2[d]) this._config.isDuplicateMessageIgnoredFor(b) || console.warn("Duplicate definition of module '" + b + "'");else {
        var k = new f(d, b, this._normalizeDependencies(e, j), g, h, j);this._modules2[d] = k, this._config.isBuild() && (this._buildInfoDefineStack[d] = i, this._buildInfoDependencies[d] = k.dependencies.map(function (b) {
          return a._moduleIdProvider.getStrModuleId(b.id);
        })), this._resolve(k);
      }
    }, j.prototype._normalizeDependency = function (b, c) {
      if ("exports" === b) return g.EXPORTS;if ("module" === b) return g.MODULE;if ("require" === b) return g.REQUIRE;var e = b.indexOf("!");if (0 <= e) {
        var f = c.resolveModule(b.substr(0, e)),
            i = c.resolveModule(b.substr(e + 1)),
            j = this._moduleIdProvider.getModuleId(f + "!" + i),
            a = this._moduleIdProvider.getModuleId(f);return new h(j, a, i);
      }return new g(this._moduleIdProvider.getModuleId(c.resolveModule(b)));
    }, j.prototype._normalizeDependencies = function (a, b) {
      for (var c = [], d = 0, e = 0, f = a.length; e < f; e++) {
        c[d++] = this._normalizeDependency(a[e], b);
      }return c;
    }, j.prototype._relativeRequire = function (a, c, d, e) {
      return "string" == typeof c ? this.synchronousRequire(c, a) : void this.defineModule(b.Utilities.generateAnonymousModule(), c, d, e, null, a);
    }, j.prototype.synchronousRequire = function (a, b) {
      void 0 === b && (b = new c(a));var d = this._normalizeDependency(a, b),
          e = this._modules2[d.id];if (!e) throw new Error("Check dependency list! Synchronous require cannot resolve module '" + a + "'. This is the first mention of this module!");if (!e.isComplete()) throw new Error("Check dependency list! Synchronous require cannot resolve module '" + a + "'. This module has not been resolved completely yet.");return e.exports;
    }, j.prototype.configure = function (a, c) {
      var d = this._config.shouldRecordStats();this._config = c ? new b.Configuration(this._env, a) : this._config.cloneAndMerge(a), this._config.shouldRecordStats() && !d && (this._recorder = null);
    }, j.prototype.getConfig = function () {
      return this._config;
    }, j.prototype._onLoad = function (a) {
      if (null !== this._currentAnnonymousDefineCall) {
        var b = this._currentAnnonymousDefineCall;this._currentAnnonymousDefineCall = null, this.defineModule(this._moduleIdProvider.getStrModuleId(a), b.dependencies, b.callback, null, b.stack);
      }
    }, j.prototype._createLoadError = function (a, b) {
      var c = this;return { errorCode: "load", moduleId: this._moduleIdProvider.getStrModuleId(a), neededBy: (this._inverseDependencies2[a] || []).map(function (a) {
          return c._moduleIdProvider.getStrModuleId(a);
        }), detail: b };
    }, j.prototype._onLoadError = function (b, e) {
      for (var f = this._createLoadError(b, e), g = [], h = 0, j = this._moduleIdProvider.getMaxModuleId(); h < j; h++) {
        g[h] = !1;
      }var i = !1,
          k = [];for (k.push(b), g[b] = !0; 0 < k.length;) {
        var a = k.shift(),
            d = this._modules2[a];d && (i = d.onDependencyError(f) || i);var l = this._inverseDependencies2[a];if (l) for (var m, h = 0, j = l.length; h < j; h++) {
          m = l[h], g[m] || (k.push(m), g[m] = !0);
        }
      }i || this._config.onError(f);
    }, j.prototype._hasDependencyPath = function (b, c) {
      var e = this._modules2[b];if (!e) return !1;for (var f = [], g = 0, h = this._moduleIdProvider.getMaxModuleId(); g < h; g++) {
        f[g] = !1;
      }var i = [];for (i.push(e), f[b] = !0; 0 < i.length;) {
        var j = i.shift().dependencies;if (j) for (var a, g = 0, h = j.length; g < h; g++) {
          if (a = j[g], a.id === c) return !0;var d = this._modules2[a.id];d && !f[a.id] && (f[a.id] = !0, i.push(d));
        }
      }return !1;
    }, j.prototype._findCyclePath = function (b, c, d) {
      if (b === c || 50 === d) return [b];var e = this._modules2[b];if (!e) return null;for (var f, a = e.dependencies, g = 0, h = a.length; g < h; g++) {
        if (f = this._findCyclePath(a[g].id, c, d + 1), null !== f) return f.push(b), f;
      }return null;
    }, j.prototype._createRequire = function (a) {
      var c = this,
          d = function d(b, _d2, e) {
        return c._relativeRequire(a, b, _d2, e);
      };return d.toUrl = function (b) {
        return c._config.requireToUrl(a.resolveModule(b));
      }, d.getStats = function () {
        return c.getLoaderEvents();
      }, d.__$__nodeRequire = b.global.nodeRequire, d;
    }, j.prototype._loadModule = function (c) {
      var e = this;if (!this._modules2[c] && !this._knownModules2[c]) {
        this._knownModules2[c] = !0;var a = this._moduleIdProvider.getStrModuleId(c),
            f = this._config.moduleIdToPaths(a);this._env.isNode && -1 === a.indexOf("/") && f.push("node|" + a);var g = -1,
            d = function h(i) {
          if (++g >= f.length) e._onLoadError(c, i);else {
            var j = f[g],
                a = e.getRecorder();if (e._config.isBuild() && "empty:" === j) return e._buildInfoPath[c] = j, e.defineModule(e._moduleIdProvider.getStrModuleId(c), [], null, null, null), void e._onLoad(c);a.record(b.LoaderEventType.BeginLoadingScript, j), e._scriptLoader.load(e, j, function () {
              e._config.isBuild() && (e._buildInfoPath[c] = j), a.record(b.LoaderEventType.EndLoadingScriptOK, j), e._onLoad(c);
            }, function (c) {
              a.record(b.LoaderEventType.EndLoadingScriptError, j), h(c);
            });
          }
        };d(null);
      }
    }, j.prototype._loadPluginDependency = function (a, b) {
      var d = this;if (!this._modules2[b.id] && !this._knownModules2[b.id]) {
        this._knownModules2[b.id] = !0;var e = function e(a) {
          d.defineModule(d._moduleIdProvider.getStrModuleId(b.id), [], a, null, null);
        };e.error = function (a) {
          d._config.onError(d._createLoadError(b.id, a));
        }, a.load(b.pluginParam, this._createRequire(c.ROOT), e, this._config.getOptionsLiteral());
      }
    }, j.prototype._resolve = function (b) {
      for (var e, a = this, f = b.dependencies, i = 0, j = f.length; i < j; i++) {
        if (e = f[i], e === g.EXPORTS) b.exportsPassedIn = !0, b.unresolvedDependenciesCount--;else if (e === g.MODULE) b.unresolvedDependenciesCount--;else if (e !== g.REQUIRE) {
          var k = this._modules2[e.id];if (k && k.isComplete()) b.unresolvedDependenciesCount--;else if (this._hasDependencyPath(e.id, b.id)) {
            console.warn("There is a dependency cycle between '" + this._moduleIdProvider.getStrModuleId(e.id) + "' and '" + this._moduleIdProvider.getStrModuleId(b.id) + "'. The cyclic path follows:");var d = this._findCyclePath(e.id, b.id, 0);d.reverse(), d.push(e.id), console.warn(d.map(function (b) {
              return a._moduleIdProvider.getStrModuleId(b);
            }).join(" => \n")), b.unresolvedDependenciesCount--;
          } else if (this._inverseDependencies2[e.id] = this._inverseDependencies2[e.id] || [], this._inverseDependencies2[e.id].push(b.id), e instanceof h) {
            var l = this._modules2[e.pluginId];if (l && l.isComplete()) {
              this._loadPluginDependency(l.exports, e);continue;
            }var m = this._inversePluginDependencies2.get(e.pluginId);m || (m = [], this._inversePluginDependencies2.set(e.pluginId, m)), m.push(e), this._loadModule(e.pluginId);
          } else this._loadModule(e.id);
        } else b.unresolvedDependenciesCount--;
      }0 === b.unresolvedDependenciesCount && this._onModuleComplete(b);
    }, j.prototype._onModuleComplete = function (b) {
      var e = this,
          j = this.getRecorder();if (!b.isComplete()) {
        for (var k, d = b.dependencies, m = [], i = 0, n = d.length; i < n; i++) {
          if (k = d[i], k === g.EXPORTS) m[i] = b.exports;else if (k === g.MODULE) m[i] = { id: b.strId, config: function config() {
              return e._config.getConfigForModule(b.strId);
            } };else if (k !== g.REQUIRE) {
            var a = this._modules2[k.id];m[i] = a ? a.exports : null;
          } else m[i] = this._createRequire(b.moduleIdResolver);
        }b.complete(j, this._config, m);var l = this._inverseDependencies2[b.id];if (this._inverseDependencies2[b.id] = null, l) for (var i = 0, n = l.length; i < n; i++) {
          var o = l[i],
              c = this._modules2[o];c.unresolvedDependenciesCount--, 0 === c.unresolvedDependenciesCount && this._onModuleComplete(c);
        }var h = this._inversePluginDependencies2.get(b.id);if (h) {
          this._inversePluginDependencies2["delete"](b.id);for (var i = 0, n = h.length; i < n; i++) {
            this._loadPluginDependency(b.exports, h[i]);
          }
        }
      }
    }, j;
  }();b.ModuleManager = d;
}(AMDLoader || (AMDLoader = {}));var define, AMDLoader;!function (b) {
  function c() {
    (e = function e(a, b, c) {
      "string" != typeof a && (c = b, b = a, a = null), "object" == ("undefined" === typeof b ? "undefined" : babelHelpers["typeof"](b)) && Array.isArray(b) || (c = b, b = null), b || (b = ["require", "exports", "module"]), a ? f.defineModule(a, b, c, null, null) : f.enqueueDefineAnonymousModule(b, c);
    }).amd = { jQuery: !0 };var a = function a(_a3, b) {
      void 0 === b && (b = !1), f.configure(_a3, b);
    };(g = function g() {
      if (1 === arguments.length) {
        if (arguments[0] instanceof Object && !Array.isArray(arguments[0])) return void a(arguments[0]);if ("string" == typeof arguments[0]) return f.synchronousRequire(arguments[0]);
      }if (2 !== arguments.length && 3 !== arguments.length || !Array.isArray(arguments[0])) throw new Error("Unrecognized require call");f.defineModule(b.Utilities.generateAnonymousModule(), arguments[0], arguments[1], arguments[2], null);
    }).config = a, g.getConfig = function () {
      return f.getConfig().getOptionsLiteral();
    }, g.reset = function () {
      f = f.reset();
    }, g.getBuildInfo = function () {
      return f.getBuildInfo();
    }, g.getStats = function () {
      return f.getLoaderEvents();
    };
  }function a() {
    c();var h = b.Environment.detect(),
        i = b.createScriptLoader(h);if (f = new b.ModuleManager(h, i, e, g, b.Utilities.getHighPerformanceTimestamp()), h.isNode) {
      var j = b.global.require || require,
          a = function a(_a4) {
        f.getRecorder().record(b.LoaderEventType.NodeBeginNativeRequire, _a4);try {
          return j(_a4);
        } finally {
          f.getRecorder().record(b.LoaderEventType.NodeEndNativeRequire, _a4);
        }
      };b.global.nodeRequire = a, g.nodeRequire = a;
    }h.isNode && !h.isElectronRenderer ? (module.exports = g, define = function define() {
      e.apply(null, arguments);
    }, require = g) : (void 0 !== b.global.require && "function" != typeof b.global.require && g.config(b.global.require), h.isElectronRenderer ? define = function define() {
      e.apply(null, arguments);
    } : b.global.define = define = e, b.global.require = g, b.global.require.__$__nodeRequire = a);
  }var f = null,
      e = null,
      g = null;b.init = a, "undefined" != typeof doNotInitLoader || "function" == typeof (b.global = b.global || {}).define && b.global.define.amd || a();
}(AMDLoader || (AMDLoader = {})), "use notstrict";var InstallConfirmElement,
    __awaiter = undefined && undefined.__awaiter || function (a, b, c, d) {
  return new (c || (c = Promise))(function (e, f) {
    function g(a) {
      try {
        i(d.next(a));
      } catch (a) {
        f(a);
      }
    }function h(a) {
      try {
        i(d["throw"](a));
      } catch (a) {
        f(a);
      }
    }function i(a) {
      a.done ? e(a.value) : new c(function (b) {
        b(a.value);
      }).then(g, h);
    }i((d = d.apply(a, b || [])).next());
  });
},
    __generator = undefined && undefined.__generator || function (a, b) {
  function c(a) {
    return function (b) {
      return d([a, b]);
    };
  }function d(c) {
    if (e) throw new TypeError("Generator is already executing.");for (; g;) {
      try {
        if (e = 1, f && (h = f[2 & c[0] ? "return" : c[0] ? "throw" : "next"]) && !(h = h.call(f, c[1])).done) return h;switch ((f = 0, h) && (c = [0, h.value]), c[0]) {case 0:case 1:
            h = c;break;case 4:
            return g.label++, { value: c[1], done: !1 };case 5:
            g.label++, f = c[1], c = [0];continue;case 7:
            c = g.ops.pop(), g.trys.pop();continue;default:
            if ((h = g.trys, !(h = 0 < h.length && h[h.length - 1])) && (6 === c[0] || 2 === c[0])) {
              g = 0;continue;
            }if (3 === c[0] && (!h || c[1] > h[0] && c[1] < h[3])) {
              g.label = c[1];break;
            }if (6 === c[0] && g.label < h[1]) {
              g.label = h[1], h = c;break;
            }if (h && g.label < h[2]) {
              g.label = h[2], g.ops.push(c);break;
            }h[2] && g.ops.pop(), g.trys.pop();continue;}c = b.call(a, g);
      } catch (a) {
        c = [6, a], f = 0;
      } finally {
        e = h = 0;
      }
    }if (5 & c[0]) throw c[1];return { value: c[0] ? c[1] : void 0, done: !0 };
  }var e,
      f,
      h,
      i,
      g = { label: 0, sent: function sent() {
      if (1 & h[0]) throw h[1];return h[1];
    }, trys: [], ops: [] };return i = { next: c(0), "throw": c(1), "return": c(2) }, "function" === typeof Symbol && (i[Symbol.iterator] = function () {
    return this;
  }), i;
};(function (a) {
  a.installConfirmProperties = { script: { type: String, notify: !0, value: "" }, permissions: { type: Array, notify: !0, value: [] } };var b = function () {
    function b() {}return b.lengthIs = function (a, b) {
      return 1 === a.length && "none" === a[0] ? 0 === b : a.length === b;
    }, b._getCheckboxes = function () {
      return Array.prototype.slice.apply(this.shadowRoot.querySelectorAll("paper-checkbox"));
    }, b._setChecked = function (a) {
      this._getCheckboxes().forEach(function (b) {
        b.checked = a;
      });
    }, b.toggleAll = function () {
      var a = this;this.async(function () {
        a._setChecked(a.$.permissionsToggleAll.checked);
      }, 0);
    }, b._createArray = function (a) {
      for (var b = [], c = 0; c < a; c++) {
        b[c] = void 0;
      }return b;
    }, b._loadSettings = function () {
      return __awaiter(this, void 0, void 0, function () {
        var a = this;return __generator(this, function () {
          return [2, new Promise(function (b) {
            return __awaiter(a, void 0, void 0, function () {
              var a, c, d, e, f, g, h, d, i, f, g;return __generator(this, function (j) {
                switch (j.label) {case 0:
                    return [4, browserAPI.storage.local.get()];case 1:
                    return a = j.sent(), a.useStorageSync && "sync" in BrowserAPI.getSrc().storage && "get" in BrowserAPI.getSrc().storage.sync ? [4, browserAPI.storage.sync.get()] : [3, 3];case 2:
                    return c = j.sent(), d = c.indexes, null === d || -1 === d || void 0 === d ? (browserAPI.storage.local.set({ useStorageSync: !1 }), this._settings = a.settings) : (e = [], f = "number" === typeof d ? d : Array.isArray(d) ? d.length : 0, this._createArray(f).forEach(function (a, b) {
                      e.push(c["section" + b]);
                    }), g = e.join(""), this._settings = JSON.parse(g)), [3, 6];case 3:
                    return a.settings ? [3, 5] : (browserAPI.storage.local.set({ useStorageSync: !0 }), [4, browserAPI.storage.sync.get()]);case 4:
                    return h = j.sent(), d = h.indexes, i = [], f = "number" === typeof d ? d : Array.isArray(d) ? d.length : 0, this._createArray(f).forEach(function (a, b) {
                      i.push(h["section" + b]);
                    }), g = i.join(""), this._settings = JSON.parse(g), [3, 6];case 5:
                    this._settings = a.settings, j.label = 6;case 6:
                    return b(null), [2];}
              });
            });
          })];
        });
      });
    }, b.getDescription = function (a) {
      return { alarms: "Makes it possible to create, view and remove alarms.", activeTab: "Gives temporary access to the tab on which browserActions or contextmenu items are clicked", background: "Runs the extension in the background even while chrome is closed. (https://developer.chrome.com/extensions/alarms)", bookmarks: "Makes it possible to create, edit, remove and view all your bookmarks.", browsingData: "Makes it possible to remove any saved data on your browser at specified time allowing the user to delete any history, saved passwords, cookies, cache and basically anything that is not saved in incognito mode but is in regular mode. This is editable so it is possible to delete ONLY your history and not the rest for example. (https://developer.chrome.com/extensions/bookmarks)", clipboardRead: "Allows reading of the users' clipboard", clipboardWrite: "Allows writing data to the users' clipboard", cookies: "Allows for the setting, getting and listenting for changes of cookies on any website. (https://developer.chrome.com/extensions/cookies)", contentSettings: "Allows changing or reading your browser settings to allow or deny things like javascript, plugins, popups, notifications or other things you can choose to accept or deny on a per-site basis. (https://developer.chrome.com/extensions/contentSettings)", contextMenus: "Allows for the changing of the chrome contextmenu", declarativeContent: "Allows for the running of scripts on pages based on their url and CSS contents. (https://developer.chrome.com/extensions/declarativeContent)", desktopCapture: "Makes it possible to capture your screen, current tab or chrome window (https://developer.chrome.com/extensions/desktopCapture)", downloads: "Allows for the creating, pausing, searching and removing of downloads and listening for any downloads happenng. (https://developer.chrome.com/extensions/downloads)", history: "Makes it possible to read your history and remove/add specific urls. This can also be used to search your history and to see howmany times you visited given website. (https://developer.chrome.com/extensions/history)", identity: "Allows for the API to ask you to provide your (google) identity to the script using oauth2, allowing you to pull data from lots of google APIs: calendar, contacts, custom search, drive, gmail, google maps, google+, url shortener (https://developer.chrome.com/extensions/identity)", idle: "Allows a script to detect whether your pc is in a locked, idle or active state. (https://developer.chrome.com/extensions/idle)", management: "Allows for a script to uninstall or get information about an extension you installed, this does not however give permission to install other extensions. (https://developer.chrome.com/extensions/management)", notifications: "Allows for the creating of notifications. (https://developer.chrome.com/extensions/notifications)", pageCapture: "Allows for the saving of any page in MHTML. (https://developer.chrome.com/extensions/pageCapture)", power: "Allows for a script to keep either your screen or your system altogether from sleeping. (https://developer.chrome.com/extensions/power)", privacy: "Allows for a script to query what privacy features are on/off, for exaple autoFill, password saving, the translation feature. (https://developer.chrome.com/extensions/privacy)", printerProvider: "Allows for a script to capture your print jobs' content and the printer used. (https://developer.chrome.com/extensions/printerProvider)", sessions: "Makes it possible for a script to get all recently closed pages and devices connected to sync, also allows it to re-open those closed pages. (https://developer.chrome.com/extensions/sessions)", "system.cpu": "Allows a script to get info about the CPU. (https://developer.chrome.com/extensions/system_cpu)", "system.memory": "Allows a script to get info about the amount of RAM memory on your computer. (https://developer.chrome.com/extensions/system_memory)", "system.storage": "Allows a script to get info about the amount of storage on your computer and be notified when external storage is attached or detached. (https://developer.chrome.com/extensions/system_storage)", topSites: "Allows a script to your top sites, which are the sites on your new tab screen. (https://developer.chrome.com/extensions/topSites)", tabCapture: "Allows the capturing of the CURRENT tab and only the tab. (https://developer.chrome.com/extensions/tabCapture)", tabs: "Allows for the opening, closing and getting of tabs", tts: "Allows a script to use chrome's text so speach engine. (https://developer.chrome.com/extensions/tts)", webNavigation: "Allows a script info about newly created pages and allows it to get info about what website visit at that time. (https://developer.chrome.com/extensions/webNavigation)", webRequest: "Allows a script info about newly created pages and allows it to get info about what website you are visiting, what resources are downloaded on the side, and can basically track the entire process of opening a new website. (https://developer.chrome.com/extensions/webRequest)", webRequestBlocking: "Allows a script info about newly created pages and allows it to get info about what website you are visiting, what resources are downloaded on the side, and can basically track the entire process of opening a new website. This also allows the script to block certain requests for example for blocking ads or bad sites. (https://developer.chrome.com/extensions/webRequest)", crmGet: "Allows the reading of your Custom Right-Click Menu, including names, contents of all nodes, what they do and some metadata for the nodes", crmWrite: "Allows the writing of data and nodes to your Custom Right-Click Menu. This includes <b>creating</b>, <b>copying</b> and <b>deleting</b> nodes. Be very careful with this permission as it can be used to just copy nodes until your CRM is full and delete any nodes you had. It also allows changing current values in the CRM such as names, actual scripts in script-nodes etc.", crmRun: "Allows the running of arbitrary scripts from the background-page", crmContextmenu: "Allows the editing of this item's name in the contextmenu at runtime", chrome: "Allows the use of chrome API's.", browser: "Allows the use of browser API's", GM_addStyle: "Allows the adding of certain styles to the document through this API", GM_deleteValue: "Allows the deletion of storage items", GM_listValues: "Allows the listing of all storage data", GM_addValueChangeListener: "Allows for the listening of changes to the storage area", GM_removeValueChangeListener: "Allows for the removing of listeners", GM_setValue: "Allows for the setting of storage data values", GM_getValue: "Allows the reading of values from the storage", GM_log: "Allows for the logging of values to the console (same as normal console.log)", GM_getResourceText: "Allows the reading of the content of resources defined in the header", GM_getResourceURL: "Allows the reading of the URL of the predeclared resource", GM_registerMenuCommand: "Allows the adding of a button to the extension menu - not implemented", GM_unregisterMenuCommand: "Allows the removing of an added button - not implemented", GM_openInTab: "Allows the opening of a tab with given URL", GM_xmlhttpRequest: "Allows you to make an XHR to any site you want", GM_download: "Allows the downloading of data to the hard disk", GM_getTab: "Allows the reading of an object that's persistent while the tab is open - not implemented", GM_saveTab: "Allows the saving of the tab object to reopen after a page unload - not implemented", GM_getTabs: "Allows the readin gof all tab object - not implemented", GM_notification: "Allows sending desktop notifications", GM_setClipboard: "Allows copying data to the clipboard - not implemented", GM_info: "Allows the reading of some script info", unsafeWindow: "Allows the running on an unsafe window object - available by default" }[a];
    }, b.showPermissionDescription = function (a) {
      var b = a.target;"div" === b.tagName.toLowerCase() ? b = b.children[0] : "path" === b.tagName.toLowerCase() && (b = b.parentElement);var c = b.parentElement.parentElement.parentElement.children,
          d = c[c.length - 1];b.classList.contains("shown") ? $(d).stop().animate({ height: 0 }, { duration: 250, complete: function complete() {
          window.installConfirm._editorManager.editor.layout();
        } }) : $(d).stop().animate({ height: d.scrollHeight + 7 + "px" }, { duration: 250, complete: function complete() {
          window.installConfirm._editorManager.editor.layout();
        } }), b.classList.toggle("shown");
    }, b._isManifestPermissions = function (a) {
      return -1 < ["alarms", "activeTab", "background", "bookmarks", "browsingData", "clipboardRead", "clipboardWrite", "contentSettings", "cookies", "contentSettings", "contextMenus", "declarativeContent", "desktopCapture", "downloads", "history", "identity", "idle", "management", "pageCapture", "power", "privacy", "printerProvider", "sessions", "system.cpu", "system.memory", "system.storage", "topSites", "tabs", "tabCapture", "tts", "webNavigation", "webRequest", "webRequestBlocking"].indexOf(a);
    }, b.checkPermission = function (a) {
      return __awaiter(this, void 0, void 0, function () {
        var b, c, d, e, f, g, h;return __generator(this, function (i) {
          switch (i.label) {case 0:
              for (b = a.target; "paper-checkbox" !== b.tagName.toLowerCase();) {
                b = b.parentElement;
              }return (c = b, !c.checked) ? [3, 7] : (d = c.getAttribute("permission"), this._isManifestPermissions(d) ? browserAPI.permissions ? [4, browserAPI.permissions.getAll()] : [3, 2] : [3, 7]);case 1:
              return f = i.sent(), [3, 3];case 2:
              f = { permissions: [] }, i.label = 3;case 3:
              if (e = f.permissions, -1 !== e.indexOf(d)) return [3, 7];i.label = 4;case 4:
              return i.trys.push([4, 6,, 7]), browserAPI.permissions ? [4, browserAPI.permissions.request({ permissions: [d] })] : (window.app.util.showToast("Not asking for permission " + d + " as your browser does not support asking for permissions"), [2]);case 5:
              return g = i.sent(), g || (c.checked = !1), [3, 7];case 6:
              return h = i.sent(), [3, 7];case 7:
              return [2];}
        });
      });
    }, b.cancelInstall = function () {
      window.close();
    }, b.completeInstall = function () {
      var a = [];this._getCheckboxes().forEach(function (b) {
        b.checked && a.push(b.getAttribute("permission"));
      }), browserAPI.runtime.sendMessage({ type: "installUserScript", data: { metaTags: this._metaTags, script: this.script, downloadURL: window.installPage.getInstallSource(), allowedPermissions: a } }), this.$.installButtons.classList.add("installed"), this.$.scriptInstalled.classList.add("visible");
    }, b.acceptAndCompleteInstall = function () {
      var a = this;this._setChecked(!0), this.$.permissionsToggleAll.checked = !0, this.async(function () {
        a.completeInstall();
      }, 250);
    }, b._setMetaTag = function (a, b) {
      var c;c = b ? b[b.length - 1] : "-", this.$[a].innerText = c + "";
    }, b._setMetaInformation = function (a) {
      this._setMetaTag("descriptionValue", a.description), this._setMetaTag("authorValue", a.author), window.installPage.$.title.innerHTML = "Installing <b>" + (a.name && a.name[0]) + "</b>", this.$.sourceValue.innerText = window.installPage.userscriptUrl;var b = a.grant;this.permissions = b, this._metaTags = a, this._editorManager.editor.layout();
    }, b._editorLoaded = function (a) {
      var b = this,
          c = document.createElement("style");c.id = "editorZoomStyle", c.innerText = ".CodeMirror, .CodeMirror-focused {\n\t\t\t\tfont-size: " + 1.25 * ~~window.installConfirm._settings.editor.zoom + "'%!important;\n\t\t\t}";var d = window.setInterval(function () {
        var c = a.getTypeHandler()[0];if (c.getMetaBlock) {
          window.clearInterval(d);var e = c.getMetaBlock();e && e.content && b._setMetaInformation(e.content);
        }
      }, 25);
    }, b._loadEditor = function () {
      return __awaiter(this, void 0, void 0, function () {
        var a, b;return __generator(this, function (c) {
          switch (c.label) {case 0:
              return this._settings.editor || (this._settings.editor = { theme: "dark", zoom: "100", keyBindings: { goToDef: "Ctrl-F12", rename: "Ctrl-F2" }, cssUnderlineDisabled: !1, disabledMetaDataHighlight: !1 }), b = this, [4, this.$.editorCont.create(this.$.editorCont.EditorMode.JS_META, { value: this.script, language: "javascript", theme: "dark" === this._settings.editor.theme ? "vs-dark" : "vs", wordWrap: "off", readOnly: !0, fontSize: 14 * (~~this._settings.editor.zoom / 100), folding: !0 })];case 1:
              return a = b._editorManager = c.sent(), window.addEventListener("resize", function () {
                a.editor.layout();
              }), this._editorLoaded(a), [2];}
        });
      });
    }, (b.ready = function () {
      var a = this;this._loadSettings().then(function () {
        a._loadEditor();
      }), window.installConfirm = this;
    }, b.is = "install-confirm", b._metaTags = {}, b.properties = a.installConfirmProperties, b);
  }();a.IC = b, window.objectify ? window.register(b) : window.addEventListener("RegisterReady", function () {
    window.register(b);
  });
})(InstallConfirmElement || (InstallConfirmElement = {}));
Polymer.AppLayout = Polymer.AppLayout || {}, Polymer.AppLayout._scrollEffects = {}, Polymer.AppLayout._scrollTimer = null, Polymer.AppLayout.scrollTimingFunction = function (a, e, b, f) {
  return a /= f, -b * a * (a - 2) + e;
}, Polymer.AppLayout.registerEffect = function (a, b) {
  if (null != Polymer.AppLayout._scrollEffects[a]) throw new Error('effect `' + a + '` is already registered.');Polymer.AppLayout._scrollEffects[a] = b;
}, Polymer.AppLayout.queryAllRoot = function (a, b) {
  for (var c = [b], d = []; 0 < c.length;) {
    var e = c.shift();d.push.apply(d, e.querySelectorAll(a));for (var f = 0; e.children[f]; f++) {
      e.children[f].shadowRoot && c.push(e.children[f].shadowRoot);
    }
  }return d;
}, Polymer.AppLayout.scroll = function (a) {
  a = a || {};var b = document.documentElement,
      c = a.target || b,
      d = 'scrollBehavior' in c.style && c.scroll,
      e = a.top || 0,
      f = a.left || 0,
      g = c === b ? window.scrollTo : function (a, b) {
    c.scrollLeft = a, c.scrollTop = b;
  };if ('smooth' === a.behavior) {
    if (d) c.scroll(a);else {
      var h = Polymer.AppLayout.scrollTimingFunction,
          i = Date.now(),
          j = c === b ? window.pageYOffset : c.scrollTop,
          k = c === b ? window.pageXOffset : c.scrollLeft,
          l = 300,
          m = function a() {
        var b = Date.now(),
            c = b - i;c < l ? (g(h(c, k, f - k, l), h(c, j, e - j, l)), requestAnimationFrame(a)) : g(f, e);
      }.bind(this);m();
    }
  } else if ('silent' === a.behavior) {
    var n = Polymer.AppLayout.queryAllRoot('app-header', document.body);n.forEach(function (a) {
      a.setAttribute('silent-scroll', '');
    }), Polymer.AppLayout._scrollTimer && window.cancelAnimationFrame(Polymer.AppLayout._scrollTimer), Polymer.AppLayout._scrollTimer = window.requestAnimationFrame(function () {
      n.forEach(function (a) {
        a.removeAttribute('silent-scroll');
      }), Polymer.AppLayout._scrollTimer = null;
    }), g(f, e);
  } else g(f, e);
};
Polymer({ is: 'app-drawer', properties: { opened: { type: Boolean, value: !1, notify: !0, reflectToAttribute: !0 }, persistent: { type: Boolean, value: !1, reflectToAttribute: !0 }, transitionDuration: { type: Number, value: 200 }, align: { type: String, value: 'left' }, position: { type: String, readOnly: !0, reflectToAttribute: !0 }, swipeOpen: { type: Boolean, value: !1, reflectToAttribute: !0 }, noFocusTrap: { type: Boolean, value: !1 }, disableSwipe: { type: Boolean, value: !1 } }, observers: ['resetLayout(position, isAttached)', '_resetPosition(align, isAttached)', '_styleTransitionDuration(transitionDuration)', '_openedPersistentChanged(opened, persistent)'], _translateOffset: 0, _trackDetails: null, _drawerState: 0, _boundEscKeydownHandler: null, _firstTabStop: null, _lastTabStop: null, attached: function attached() {
    Polymer.RenderStatus.afterNextRender(this, function () {
      this._boundEscKeydownHandler = this._escKeydownHandler.bind(this), this.addEventListener('keydown', this._tabKeydownHandler.bind(this)), this.listen(this, 'track', '_track'), this.setScrollDirection('y');
    }), this.fire('app-reset-layout');
  }, detached: function detached() {
    document.removeEventListener('keydown', this._boundEscKeydownHandler);
  }, open: function open() {
    this.opened = !0;
  }, close: function close() {
    this.opened = !1;
  }, toggle: function toggle() {
    this.opened = !this.opened;
  }, getWidth: function getWidth() {
    return this._savedWidth || this.$.contentContainer.offsetWidth;
  }, _isRTL: function _isRTL() {
    return 'rtl' === window.getComputedStyle(this).direction;
  }, _resetPosition: function _resetPosition() {
    switch (this.align) {case 'start':
        return void this._setPosition(this._isRTL() ? 'right' : 'left');case 'end':
        return void this._setPosition(this._isRTL() ? 'left' : 'right');}this._setPosition(this.align);
  }, _escKeydownHandler: function _escKeydownHandler(a) {
    a.keyCode === 27 && (a.preventDefault(), this.close());
  }, _track: function _track(a) {
    if (!(this.persistent || this.disableSwipe)) switch (a.preventDefault(), a.detail.state) {case 'start':
        this._trackStart(a);break;case 'track':
        this._trackMove(a);break;case 'end':
        this._trackEnd(a);}
  }, _trackStart: function _trackStart() {
    this._drawerState = this._DRAWER_STATE.TRACKING;var a = this.$.contentContainer.getBoundingClientRect();this._savedWidth = a.width, this._translateOffset = 'left' === this.position ? a.left : a.right - window.innerWidth, this._trackDetails = [], this._styleTransitionDuration(0), this.style.visibility = 'visible';
  }, _trackMove: function _trackMove(a) {
    this._translateDrawer(a.detail.dx + this._translateOffset), this._trackDetails.push({ dx: a.detail.dx, timeStamp: Date.now() });
  }, _trackEnd: function _trackEnd(a) {
    var b = a.detail.dx + this._translateOffset,
        c = this.getWidth(),
        d = 'left' === this.position,
        e = d ? 0 <= b || b <= -c : 0 >= b || b >= c;if (!e) {
      var f = this._trackDetails;if (this._trackDetails = null, this._flingDrawer(a, f), this._drawerState === this._DRAWER_STATE.FLINGING) return;
    }var g = c / 2;a.detail.dx < -g ? this.opened = 'right' === this.position : a.detail.dx > g && (this.opened = 'left' === this.position), e ? this.debounce('_resetDrawerState', this._resetDrawerState) : this.debounce('_resetDrawerState', this._resetDrawerState, this.transitionDuration), this._styleTransitionDuration(this.transitionDuration), this._resetDrawerTranslate(), this.style.visibility = '';
  }, _calculateVelocity: function _calculateVelocity(a, b) {
    for (var c, e = Date.now(), f = 0, g = b.length - 1; f <= g;) {
      var h = f + g >> 1,
          i = b[h];i.timeStamp >= e - 100 ? (c = i, g = h - 1) : f = h + 1;
    }if (c) {
      var d = a.detail.dx - c.dx,
          j = e - c.timeStamp || 1;return d / j;
    }return 0;
  }, _flingDrawer: function _flingDrawer(a, b) {
    var c = this._calculateVelocity(a, b);if (!(Math.abs(c) < this._MIN_FLING_THRESHOLD)) {
      this._drawerState = this._DRAWER_STATE.FLINGING;var d,
          e = a.detail.dx + this._translateOffset,
          f = this.getWidth(),
          g = 'left' === this.position,
          h = 0 < c;d = !h && g ? -(e + f) : h && !g ? f - e : -e, h ? (c = Math.max(c, this._MIN_TRANSITION_VELOCITY), this.opened = 'left' === this.position) : (c = Math.min(c, -this._MIN_TRANSITION_VELOCITY), this.opened = 'right' === this.position);var i = this._FLING_INITIAL_SLOPE * d / c;this._styleTransitionDuration(i), this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION), this._resetDrawerTranslate(), this.debounce('_resetDrawerState', this._resetDrawerState, i);
    }
  }, _styleTransitionDuration: function _styleTransitionDuration(a) {
    this.style.transitionDuration = a + 'ms', this.$.contentContainer.style.transitionDuration = a + 'ms', this.$.scrim.style.transitionDuration = a + 'ms';
  }, _styleTransitionTimingFunction: function _styleTransitionTimingFunction(a) {
    this.$.contentContainer.style.transitionTimingFunction = a, this.$.scrim.style.transitionTimingFunction = a;
  }, _translateDrawer: function _translateDrawer(a) {
    var b = Math.min,
        c = Math.max,
        d = this.getWidth();'left' === this.position ? (a = c(-d, b(a, 0)), this.$.scrim.style.opacity = 1 + a / d) : (a = c(0, b(a, d)), this.$.scrim.style.opacity = 1 - a / d), this.translate3d(a + 'px', '0', '0', this.$.contentContainer);
  }, _resetDrawerTranslate: function _resetDrawerTranslate() {
    this.$.scrim.style.opacity = '', this.transform('', this.$.contentContainer);
  }, _resetDrawerState: function _resetDrawerState() {
    var a = this._drawerState;a === this._DRAWER_STATE.FLINGING && (this._styleTransitionDuration(this.transitionDuration), this._styleTransitionTimingFunction(''), this.style.visibility = ''), this._savedWidth = null, this._drawerState = this.opened ? this.persistent ? this._DRAWER_STATE.OPENED_PERSISTENT : this._DRAWER_STATE.OPENED : this._DRAWER_STATE.CLOSED, a !== this._drawerState && (this._drawerState === this._DRAWER_STATE.OPENED ? (this._setKeyboardFocusTrap(), document.addEventListener('keydown', this._boundEscKeydownHandler), document.body.style.overflow = 'hidden') : (document.removeEventListener('keydown', this._boundEscKeydownHandler), document.body.style.overflow = ''), a !== this._DRAWER_STATE.INIT && this.fire('app-drawer-transitioned'));
  }, resetLayout: function resetLayout() {
    this.fire('app-reset-layout');
  }, _setKeyboardFocusTrap: function _setKeyboardFocusTrap() {
    if (!this.noFocusTrap) {
      var a = Polymer.dom(this).querySelectorAll('a[href]:not([tabindex="-1"]),area[href]:not([tabindex="-1"]),input:not([disabled]):not([tabindex="-1"]),select:not([disabled]):not([tabindex="-1"]),textarea:not([disabled]):not([tabindex="-1"]),button:not([disabled]):not([tabindex="-1"]),iframe:not([tabindex="-1"]),[tabindex]:not([tabindex="-1"]),[contentEditable=true]:not([tabindex="-1"])');0 < a.length ? (this._firstTabStop = a[0], this._lastTabStop = a[a.length - 1]) : (this._firstTabStop = null, this._lastTabStop = null);var b = this.getAttribute('tabindex');b && -1 < parseInt(b, 10) ? this.focus() : this._firstTabStop && this._firstTabStop.focus();
    }
  }, _tabKeydownHandler: function _tabKeydownHandler(a) {
    if (!this.noFocusTrap) {
      this._drawerState === this._DRAWER_STATE.OPENED && a.keyCode === 9 && (a.shiftKey ? this._firstTabStop && Polymer.dom(a).localTarget === this._firstTabStop && (a.preventDefault(), this._lastTabStop.focus()) : this._lastTabStop && Polymer.dom(a).localTarget === this._lastTabStop && (a.preventDefault(), this._firstTabStop.focus()));
    }
  }, _openedPersistentChanged: function _openedPersistentChanged(a, b) {
    this.toggleClass('visible', a && !b, this.$.scrim), this.debounce('_resetDrawerState', this._resetDrawerState, this.transitionDuration);
  }, _MIN_FLING_THRESHOLD: 0.2, _MIN_TRANSITION_VELOCITY: 1.2, _FLING_TIMING_FUNCTION: 'cubic-bezier(0.667, 1, 0.667, 1)', _FLING_INITIAL_SLOPE: 1.5, _DRAWER_STATE: { INIT: 0, OPENED: 1, OPENED_PERSISTENT: 2, CLOSED: 3, TRACKING: 4, FLINGING: 5 } });
Polymer({ is: 'iron-media-query', properties: { queryMatches: { type: Boolean, value: !1, readOnly: !0, notify: !0 }, query: { type: String, observer: 'queryChanged' }, full: { type: Boolean, value: !1 }, _boundMQHandler: { value: function value() {
        return this.queryHandler.bind(this);
      } }, _mq: { value: null } }, attached: function attached() {
    this.style.display = 'none', this.queryChanged();
  }, detached: function detached() {
    this._remove();
  }, _add: function _add() {
    this._mq && this._mq.addListener(this._boundMQHandler);
  }, _remove: function _remove() {
    this._mq && this._mq.removeListener(this._boundMQHandler), this._mq = null;
  }, queryChanged: function queryChanged() {
    this._remove();var a = this.query;a && (!this.full && '(' !== a[0] && (a = '(' + a + ')'), this._mq = window.matchMedia(a), this._add(), this.queryHandler(this._mq));
  }, queryHandler: function queryHandler(a) {
    this._setQueryMatches(a.matches);
  } });
Polymer.IronResizableBehavior = { properties: { _parentResizable: { type: Object, observer: '_parentResizableChanged' }, _notifyingDescendant: { type: Boolean, value: !1 } }, listeners: { "iron-request-resize-notifications": '_onIronRequestResizeNotifications' }, created: function created() {
    this._interestedResizables = [], this._boundNotifyResize = this.notifyResize.bind(this);
  }, attached: function attached() {
    this._requestResizeNotifications();
  }, detached: function detached() {
    this._parentResizable ? this._parentResizable.stopResizeNotificationsFor(this) : window.removeEventListener('resize', this._boundNotifyResize), this._parentResizable = null;
  }, notifyResize: function notifyResize() {
    this.isAttached && (this._interestedResizables.forEach(function (a) {
      this.resizerShouldNotify(a) && this._notifyDescendant(a);
    }, this), this._fireResize());
  }, assignParentResizable: function assignParentResizable(a) {
    this._parentResizable = a;
  }, stopResizeNotificationsFor: function stopResizeNotificationsFor(a) {
    var b = this._interestedResizables.indexOf(a);-1 < b && (this._interestedResizables.splice(b, 1), this.unlisten(a, 'iron-resize', '_onDescendantIronResize'));
  }, resizerShouldNotify: function resizerShouldNotify() {
    return !0;
  }, _onDescendantIronResize: function _onDescendantIronResize(a) {
    return this._notifyingDescendant ? void a.stopPropagation() : void (!Polymer.Settings.useShadow && this._fireResize());
  }, _fireResize: function _fireResize() {
    this.fire('iron-resize', null, { node: this, bubbles: !1 });
  }, _onIronRequestResizeNotifications: function _onIronRequestResizeNotifications(a) {
    var b = Polymer.dom(a).rootTarget;b === this || (-1 === this._interestedResizables.indexOf(b) && (this._interestedResizables.push(b), this.listen(b, 'iron-resize', '_onDescendantIronResize')), b.assignParentResizable(this), this._notifyDescendant(b), a.stopPropagation());
  }, _parentResizableChanged: function _parentResizableChanged(a) {
    a && window.removeEventListener('resize', this._boundNotifyResize);
  }, _notifyDescendant: function _notifyDescendant(a) {
    this.isAttached && (this._notifyingDescendant = !0, a.notifyResize(), this._notifyingDescendant = !1);
  }, _requestResizeNotifications: function _requestResizeNotifications() {
    if (this.isAttached) if ('loading' === document.readyState) {
      var a = this._requestResizeNotifications.bind(this);document.addEventListener('readystatechange', function b() {
        document.removeEventListener('readystatechange', b), a();
      });
    } else this.fire('iron-request-resize-notifications', null, { node: this, bubbles: !0, cancelable: !0 }), this._parentResizable || (window.addEventListener('resize', this._boundNotifyResize), this.notifyResize());
  } };
Polymer.AppLayoutBehavior = [Polymer.IronResizableBehavior, { listeners: { "app-reset-layout": '_appResetLayoutHandler', "iron-resize": 'resetLayout' }, attached: function attached() {
    this.fire('app-reset-layout');
  }, _appResetLayoutHandler: function _appResetLayoutHandler(a) {
    Polymer.dom(a).path[0] === this || (this.resetLayout(), a.stopPropagation());
  }, _updateLayoutStates: function _updateLayoutStates() {
    console.error('unimplemented');
  }, resetLayout: function resetLayout() {
    var a = this,
        b = this._updateLayoutStates.bind(this);Polymer.Async && Polymer.Async.animationFrame ? (this._layoutDebouncer = Polymer.Debouncer.debounce(this._layoutDebouncer, Polymer.Async.animationFrame, b), Polymer.enqueueDebouncer(this._layoutDebouncer)) : this.debounce('resetLayout', b), this._notifyDescendantResize();
  }, _notifyLayoutChanged: function _notifyLayoutChanged() {
    var a = this;requestAnimationFrame(function () {
      a.fire('app-reset-layout');
    });
  }, _notifyDescendantResize: function _notifyDescendantResize() {
    this.isAttached && this._interestedResizables.forEach(function (a) {
      this.resizerShouldNotify(a) && this._notifyDescendant(a);
    }, this);
  } }];
Polymer(Object.defineProperties({ is: 'app-drawer-layout', behaviors: [Polymer.AppLayoutBehavior], properties: { forceNarrow: { type: Boolean, value: !1 }, responsiveWidth: { type: String, value: '640px' }, narrow: { type: Boolean, reflectToAttribute: !0, readOnly: !0, notify: !0 }, openedWhenNarrow: { type: Boolean, value: !1 }, _drawerPosition: { type: String } }, listeners: { click: '_clickHandler' }, observers: ['_narrowChanged(narrow)'], attached: function attached() {
    var a = this.drawer;a && a.setAttribute('no-transition', '');
  }, _clickHandler: function _clickHandler(a) {
    var b = Polymer.dom(a).localTarget;if (b && b.hasAttribute('drawer-toggle')) {
      var c = this.drawer;c && !c.persistent && c.toggle();
    }
  }, _updateLayoutStates: function _updateLayoutStates() {
    var a = this.drawer;this.isAttached && a && (this._drawerPosition = this.narrow ? null : a.position, this._drawerNeedsReset && (this.narrow ? (a.opened = this.openedWhenNarrow, a.persistent = !1) : a.opened = a.persistent = !0, a.hasAttribute('no-transition') && Polymer.RenderStatus.afterNextRender(this, function () {
      a.removeAttribute('no-transition');
    }), this._drawerNeedsReset = !1));
  }, _narrowChanged: function _narrowChanged() {
    this._drawerNeedsReset = !0, this.resetLayout();
  }, _onQueryMatchesChanged: function _onQueryMatchesChanged(a) {
    this._setNarrow(a.detail.value);
  }, _computeMediaQuery: function _computeMediaQuery(a, b) {
    return a ? '(min-width: 0px)' : '(max-width: ' + b + ')';
  } }, { drawer: { get: function get() {
      return Polymer.dom(this.$.drawerSlot).getDistributedNodes()[0];
    }, configurable: !0, enumerable: !0 } }));
Polymer.IronScrollTargetBehavior = Object.defineProperties({ properties: { scrollTarget: { type: HTMLElement, value: function value() {
        return this._defaultScrollTarget;
      } } }, observers: ['_scrollTargetChanged(scrollTarget, isAttached)'], _shouldHaveListener: !0, _scrollTargetChanged: function _scrollTargetChanged(a, b) {
    if (this._oldScrollTarget && (this._toggleScrollListener(!1, this._oldScrollTarget), this._oldScrollTarget = null), !!b) if ('document' === a) this.scrollTarget = this._doc;else if ('string' === typeof a) {
      var c = this.domHost;this.scrollTarget = c && c.$ ? c.$[a] : Polymer.dom(this.ownerDocument).querySelector('#' + a);
    } else this._isValidScrollTarget() && (this._oldScrollTarget = a, this._toggleScrollListener(this._shouldHaveListener, a));
  }, _scrollHandler: function _scrollHandler() {}, scroll: function scroll(a, b) {
    this.scrollTarget === this._doc ? window.scrollTo(a, b) : this._isValidScrollTarget() && (this.scrollTarget.scrollLeft = a, this.scrollTarget.scrollTop = b);
  }, _isValidScrollTarget: function _isValidScrollTarget() {
    return this.scrollTarget instanceof HTMLElement;
  }, _toggleScrollListener: function _toggleScrollListener(a, b) {
    var c = b === this._doc ? window : b;a ? !this._boundScrollHandler && (this._boundScrollHandler = this._scrollHandler.bind(this), c.addEventListener('scroll', this._boundScrollHandler)) : this._boundScrollHandler && (c.removeEventListener('scroll', this._boundScrollHandler), this._boundScrollHandler = null);
  }, toggleScrollListener: function toggleScrollListener(a) {
    this._shouldHaveListener = a, this._toggleScrollListener(a, this.scrollTarget);
  } }, { _defaultScrollTarget: { get: function get() {
      return this._doc;
    }, configurable: !0, enumerable: !0 }, _doc: { get: function get() {
      return this.ownerDocument.documentElement;
    }, configurable: !0, enumerable: !0 }, _scrollTop: { get: function get() {
      return this._isValidScrollTarget() ? this.scrollTarget === this._doc ? window.pageYOffset : this.scrollTarget.scrollTop : 0;
    }, set: function set(a) {
      this.scrollTarget === this._doc ? window.scrollTo(window.pageXOffset, a) : this._isValidScrollTarget() && (this.scrollTarget.scrollTop = a);
    }, configurable: !0, enumerable: !0 }, _scrollLeft: { get: function get() {
      return this._isValidScrollTarget() ? this.scrollTarget === this._doc ? window.pageXOffset : this.scrollTarget.scrollLeft : 0;
    }, set: function set(a) {
      this.scrollTarget === this._doc ? window.scrollTo(a, window.pageYOffset) : this._isValidScrollTarget() && (this.scrollTarget.scrollLeft = a);
    }, configurable: !0, enumerable: !0 }, _scrollTargetWidth: { get: function get() {
      return this._isValidScrollTarget() ? this.scrollTarget === this._doc ? window.innerWidth : this.scrollTarget.offsetWidth : 0;
    }, configurable: !0, enumerable: !0 }, _scrollTargetHeight: { get: function get() {
      return this._isValidScrollTarget() ? this.scrollTarget === this._doc ? window.innerHeight : this.scrollTarget.offsetHeight : 0;
    }, configurable: !0, enumerable: !0 } });
Polymer.AppScrollEffectsBehavior = [Polymer.IronScrollTargetBehavior, Object.defineProperties({ properties: { effects: { type: String }, effectsConfig: { type: Object, value: function value() {
        return {};
      } }, disabled: { type: Boolean, reflectToAttribute: !0, value: !1 }, threshold: { type: Number, value: 0 }, thresholdTriggered: { type: Boolean, notify: !0, readOnly: !0, reflectToAttribute: !0 } }, observers: ['_effectsChanged(effects, effectsConfig, isAttached)'], _updateScrollState: function _updateScrollState() {}, isOnScreen: function isOnScreen() {
    return !1;
  }, isContentBelow: function isContentBelow() {
    return !1;
  }, _effectsRunFn: null, _effects: null, detached: function detached() {
    this._tearDownEffects();
  }, createEffect: function createEffect(a, b) {
    var c = Polymer.AppLayout._scrollEffects[a];if (!c) throw new ReferenceError(this._getUndefinedMsg(a));var d = this._boundEffect(c, b || {});return d.setUp(), d;
  }, _effectsChanged: function _effectsChanged(a, b, c) {
    this._tearDownEffects();a && c && (a.split(' ').forEach(function (a) {
      var c;'' !== a && ((c = Polymer.AppLayout._scrollEffects[a]) ? this._effects.push(this._boundEffect(c, b[a])) : console.warn(this._getUndefinedMsg(a)));
    }, this), this._setUpEffect());
  }, _layoutIfDirty: function _layoutIfDirty() {
    return this.offsetWidth;
  }, _boundEffect: function _boundEffect(a, b) {
    b = b || {};var c = parseFloat(b.startsAt || 0),
        d = parseFloat(b.endsAt || 1),
        e = function e() {},
        f = 0 === c && 1 === d ? a.run : function (b, e) {
      a.run.call(this, Math.max(0, (b - c) / (d - c)), e);
    };return { setUp: a.setUp ? a.setUp.bind(this, b) : e, run: a.run ? f.bind(this) : e, tearDown: a.tearDown ? a.tearDown.bind(this) : e };
  }, _setUpEffect: function _setUpEffect() {
    this.isAttached && this._effects && (this._effectsRunFn = [], this._effects.forEach(function (a) {
      !1 !== a.setUp() && this._effectsRunFn.push(a.run);
    }, this));
  }, _tearDownEffects: function _tearDownEffects() {
    this._effects && this._effects.forEach(function (a) {
      a.tearDown();
    }), this._effectsRunFn = [], this._effects = [];
  }, _runEffects: function _runEffects(a, b) {
    this._effectsRunFn && this._effectsRunFn.forEach(function (c) {
      c(a, b);
    });
  }, _scrollHandler: function _scrollHandler() {
    if (!this.disabled) {
      var a = this._clampedScrollTop;this._updateScrollState(a), 0 < this.threshold && this._setThresholdTriggered(a >= this.threshold);
    }
  }, _getDOMRef: function _getDOMRef(a) {
    console.warn('_getDOMRef', '`' + a + '` is undefined');
  }, _getUndefinedMsg: function _getUndefinedMsg(a) {
    return 'Scroll effect `' + a + '` is undefined. Did you forget to import app-layout/app-scroll-effects/effects/' + a + '.html ?';
  } }, { _clampedScrollTop: { get: function get() {
      return Math.max(0, this._scrollTop);
    }, configurable: !0, enumerable: !0 } })];
Polymer(Object.defineProperties({ is: 'app-header', behaviors: [Polymer.AppScrollEffectsBehavior, Polymer.AppLayoutBehavior], properties: { condenses: { type: Boolean, value: !1 }, fixed: { type: Boolean, value: !1 }, reveals: { type: Boolean, value: !1 }, shadow: { type: Boolean, reflectToAttribute: !0, value: !1 } }, observers: ['_configChanged(isAttached, condenses, fixed)'], _height: 0, _dHeight: 0, _stickyElTop: 0, _stickyElRef: null, _top: 0, _progress: 0, _wasScrollingDown: !1, _initScrollTop: 0, _initTimestamp: 0, _lastTimestamp: 0, _lastScrollTop: 0, _configChanged: function _configChanged() {
    this.resetLayout(), this._notifyLayoutChanged();
  }, _updateLayoutStates: function _updateLayoutStates() {
    if (0 !== this.offsetWidth || 0 !== this.offsetHeight) {
      var a = this._clampedScrollTop,
          b = 0 === this._height || 0 === a,
          c = this.disabled;this._height = this.offsetHeight, this._stickyElRef = null, this.disabled = !0, b || this._updateScrollState(0, !0), this._dHeight = this._mayMove() ? this._stickyEl ? this._height - this._stickyEl.offsetHeight : 0 : 0, this._stickyElTop = this._stickyEl ? this._stickyEl.offsetTop : 0, this._setUpEffect(), b ? this._updateScrollState(a, !0) : (this._updateScrollState(this._lastScrollTop, !0), this._layoutIfDirty()), this.disabled = c;
    }
  }, _updateScrollState: function _updateScrollState(a, b) {
    var c = Math.abs;if (0 !== this._height) {
      var d = 0,
          e = 0,
          f = this._top,
          g = this._lastScrollTop,
          h = this._maxHeaderTop,
          i = a - this._lastScrollTop,
          j = c(i),
          k = a > this._lastScrollTop,
          l = performance.now();if (this._mayMove() && (e = this._clamp(this.reveals ? f + i : a, 0, h)), a >= this._dHeight && (e = this.condenses && !this.fixed ? Math.max(this._dHeight, e) : e, this.style.transitionDuration = '0ms'), this.reveals && !this.disabled && 100 > j && ((300 < l - this._initTimestamp || this._wasScrollingDown !== k) && (this._initScrollTop = a, this._initTimestamp = l), a >= h)) if (30 < c(this._initScrollTop - a) || 10 < j) {
        k && a >= h ? e = h : !k && a >= this._dHeight && (e = this.condenses && !this.fixed ? this._dHeight : 0);var m = i / (l - this._lastTimestamp);this.style.transitionDuration = this._clamp((e - f) / m, 0, 300) + 'ms';
      } else e = this._top;d = 0 === this._dHeight ? 0 < a ? 1 : 0 : e / this._dHeight, b || (this._lastScrollTop = a, this._top = e, this._wasScrollingDown = k, this._lastTimestamp = l), (b || d !== this._progress || f !== e || 0 === a) && (this._progress = d, this._runEffects(d, e), this._transformHeader(e));
    }
  }, _mayMove: function _mayMove() {
    return this.condenses || !this.fixed;
  }, willCondense: function willCondense() {
    return 0 < this._dHeight && this.condenses;
  }, isOnScreen: function isOnScreen() {
    return 0 !== this._height && this._top < this._height;
  }, isContentBelow: function isContentBelow() {
    return 0 === this._top ? 0 < this._clampedScrollTop : 0 <= this._clampedScrollTop - this._maxHeaderTop;
  }, _transformHeader: function _transformHeader(a) {
    this.translate3d(0, -a + 'px', 0), this._stickyEl && this.translate3d(0, this.condenses && a >= this._stickyElTop ? Math.min(a, this._dHeight) - this._stickyElTop + 'px' : 0, 0, this._stickyEl);
  }, _clamp: function _clamp(a, b, c) {
    return Math.min(c, Math.max(b, a));
  }, _ensureBgContainers: function _ensureBgContainers() {
    this._bgContainer || (this._bgContainer = document.createElement('div'), this._bgContainer.id = 'background', this._bgRear = document.createElement('div'), this._bgRear.id = 'backgroundRearLayer', this._bgContainer.appendChild(this._bgRear), this._bgFront = document.createElement('div'), this._bgFront.id = 'backgroundFrontLayer', this._bgContainer.appendChild(this._bgFront), Polymer.dom(this.root).insertBefore(this._bgContainer, this.$.contentContainer));
  }, _getDOMRef: function _getDOMRef(a) {
    return 'backgroundFrontLayer' === a ? (this._ensureBgContainers(), this._bgFront) : 'backgroundRearLayer' === a ? (this._ensureBgContainers(), this._bgRear) : 'background' === a ? (this._ensureBgContainers(), this._bgContainer) : 'mainTitle' === a ? Polymer.dom(this).querySelector('[main-title]') : 'condensedTitle' === a ? Polymer.dom(this).querySelector('[condensed-title]') : null;
  }, getScrollState: function getScrollState() {
    return { progress: this._progress, top: this._top };
  } }, { _maxHeaderTop: { get: function get() {
      return this.fixed ? this._dHeight : this._height + 5;
    }, configurable: !0, enumerable: !0 }, _stickyEl: { get: function get() {
      if (this._stickyElRef) return this._stickyElRef;for (var a, b = Polymer.dom(this.$.slot).getDistributedNodes(), c = 0; a = b[c]; c++) {
        if (a.nodeType === Node.ELEMENT_NODE) if (a.hasAttribute('sticky')) {
          this._stickyElRef = a;break;
        } else this._stickyElRef || (this._stickyElRef = a);
      }return this._stickyElRef;
    }, configurable: !0, enumerable: !0 } }));
Polymer(Object.defineProperties({ is: 'app-header-layout', behaviors: [Polymer.AppLayoutBehavior], properties: { hasScrollingRegion: { type: Boolean, value: !1, reflectToAttribute: !0 } }, observers: ['resetLayout(isAttached, hasScrollingRegion)'], _updateLayoutStates: function _updateLayoutStates() {
    var a = this.header;if (this.isAttached && a) {
      this.$.wrapper.classList.remove('initializing'), a.scrollTarget = this.hasScrollingRegion ? this.$.contentContainer : this.ownerDocument.documentElement;var b = a.offsetHeight;this.hasScrollingRegion ? (a.style.left = '', a.style.right = '') : requestAnimationFrame(function () {
        var b = this.getBoundingClientRect(),
            c = document.documentElement.clientWidth - b.right;a.style.left = b.left + 'px', a.style.right = c + 'px';
      }.bind(this));var c = this.$.contentContainer.style;a.fixed && !a.condenses && this.hasScrollingRegion ? (c.marginTop = b + 'px', c.paddingTop = '') : (c.paddingTop = b + 'px', c.marginTop = '');
    }
  } }, { header: { get: function get() {
      return Polymer.dom(this.$.headerSlot).getDistributedNodes()[0];
    }, configurable: !0, enumerable: !0 } }));
Polymer({ is: 'app-toolbar' });
Polymer({ is: 'app-box', behaviors: [Polymer.AppScrollEffectsBehavior, Polymer.IronResizableBehavior], listeners: { "iron-resize": '_resizeHandler' }, _progress: 0, attached: function attached() {
    this.resetLayout();
  }, _debounceRaf: function _debounceRaf(a) {
    var b = this;this._raf && window.cancelAnimationFrame(this._raf), this._raf = window.requestAnimationFrame(function () {
      b._raf = null, a.call(b);
    });
  }, resetLayout: function resetLayout() {
    this._debounceRaf(function () {
      if (0 !== this.offsetWidth || 0 !== this.offsetHeight) {
        var a = this._clampedScrollTop,
            b = this.disabled;this.disabled = !0, this._elementTop = this._getElementTop(), this._elementHeight = this.offsetHeight, this._cachedScrollTargetHeight = this._scrollTargetHeight, this._setUpEffect(), this._updateScrollState(a), this.disabled = b;
      }
    });
  }, _getElementTop: function _getElementTop() {
    for (var a = this, b = 0; a && a !== this.scrollTarget;) {
      b += a.offsetTop, a = a.offsetParent;
    }return b;
  }, _updateScrollState: function _updateScrollState(a) {
    if (this.isOnScreen()) {
      var b = this._elementTop - a;this._progress = 1 - (b + this._elementHeight) / this._cachedScrollTargetHeight, this._runEffects(this._progress, a);
    }
  }, isOnScreen: function isOnScreen() {
    return this._elementTop < this._scrollTop + this._cachedScrollTargetHeight && this._elementTop + this._elementHeight > this._scrollTop;
  }, _resizeHandler: function _resizeHandler() {
    this.resetLayout();
  }, _getDOMRef: function _getDOMRef(a) {
    return 'background' === a ? this.$.background : 'backgroundFrontLayer' === a ? this.$.backgroundFrontLayer : void 0;
  }, getScrollState: function getScrollState() {
    return { progress: this._progress };
  } });
Polymer.AppLayout.registerEffect('blend-background', { setUp: function setUp() {
    var a = {};a.backgroundFrontLayer = this._getDOMRef('backgroundFrontLayer'), a.backgroundRearLayer = this._getDOMRef('backgroundRearLayer'), a.backgroundFrontLayer.style.willChange = 'opacity', a.backgroundFrontLayer.style.transform = 'translateZ(0)', a.backgroundRearLayer.style.willChange = 'opacity', a.backgroundRearLayer.style.transform = 'translateZ(0)', a.backgroundRearLayer.style.opacity = 0, this._fxBlendBackground = a;
  }, run: function run(a) {
    var b = this._fxBlendBackground;b.backgroundFrontLayer.style.opacity = 1 - a, b.backgroundRearLayer.style.opacity = a;
  }, tearDown: function tearDown() {
    delete this._fxBlendBackground;
  } });
Polymer.AppLayout.registerEffect('fade-background', { setUp: function setUp(a) {
    var b = {},
        c = a.duration || '0.5s';b.backgroundFrontLayer = this._getDOMRef('backgroundFrontLayer'), b.backgroundRearLayer = this._getDOMRef('backgroundRearLayer'), b.backgroundFrontLayer.style.willChange = 'opacity', b.backgroundFrontLayer.style.webkitTransform = 'translateZ(0)', b.backgroundFrontLayer.style.transitionProperty = 'opacity', b.backgroundFrontLayer.style.transitionDuration = c, b.backgroundRearLayer.style.willChange = 'opacity', b.backgroundRearLayer.style.webkitTransform = 'translateZ(0)', b.backgroundRearLayer.style.transitionProperty = 'opacity', b.backgroundRearLayer.style.transitionDuration = c, this._fxFadeBackground = b;
  }, run: function run(a) {
    var b = this._fxFadeBackground;1 <= a ? (b.backgroundFrontLayer.style.opacity = 0, b.backgroundRearLayer.style.opacity = 1) : (b.backgroundFrontLayer.style.opacity = 1, b.backgroundRearLayer.style.opacity = 0);
  }, tearDown: function tearDown() {
    delete this._fxFadeBackground;
  } });
Polymer.AppLayout.registerEffect('waterfall', { run: function run() {
    this.shadow = this.isOnScreen() && this.isContentBelow();
  } });
(function () {
  function a(a, b, c, d) {
    c.apply(d, b.map(function (b) {
      return b[0] + (b[1] - b[0]) * a;
    }));
  }Polymer.AppLayout.registerEffect('resize-title', { setUp: function setUp() {
      var a = this._getDOMRef('mainTitle'),
          b = this._getDOMRef('condensedTitle');if (!b) return console.warn('Scroll effect `resize-title`: undefined `condensed-title`'), !1;if (!a) return console.warn('Scroll effect `resize-title`: undefined `main-title`'), !1;b.style.willChange = 'opacity', b.style.webkitTransform = 'translateZ(0)', b.style.transform = 'translateZ(0)', b.style.webkitTransformOrigin = 'left top', b.style.transformOrigin = 'left top', a.style.willChange = 'opacity', a.style.webkitTransformOrigin = 'left top', a.style.transformOrigin = 'left top', a.style.webkitTransform = 'translateZ(0)', a.style.transform = 'translateZ(0)';var c = a.getBoundingClientRect(),
          d = b.getBoundingClientRect(),
          e = {};e.scale = parseInt(window.getComputedStyle(b)['font-size'], 10) / parseInt(window.getComputedStyle(a)['font-size'], 10), e.titleDX = c.left - d.left, e.titleDY = c.top - d.top, e.condensedTitle = b, e.title = a, this._fxResizeTitle = e;
    }, run: function run(b, c) {
      var d = this._fxResizeTitle;this.condenses || (c = 0), 1 <= b ? (d.title.style.opacity = 0, d.condensedTitle.style.opacity = 1) : (d.title.style.opacity = 1, d.condensedTitle.style.opacity = 0), a(Math.min(1, b), [[1, d.scale], [0, -d.titleDX], [c, c - d.titleDY]], function (a, b, c) {
        this.transform('translate(' + b + 'px, ' + c + 'px) scale3d(' + a + ', ' + a + ', 1)', d.title);
      }, this);
    }, tearDown: function tearDown() {
      delete this._fxResizeTitle;
    } });
})();
Polymer.AppLayout.registerEffect('parallax-background', { setUp: function setUp(a) {
    var b = {},
        c = parseFloat(a.scalar);b.background = this._getDOMRef('background'), b.backgroundFrontLayer = this._getDOMRef('backgroundFrontLayer'), b.backgroundRearLayer = this._getDOMRef('backgroundRearLayer'), b.deltaBg = b.backgroundFrontLayer.offsetHeight - b.background.offsetHeight, 0 === b.deltaBg ? (isNaN(c) && (c = 0.8), b.deltaBg = (this._dHeight || 0) * c) : (isNaN(c) && (c = 1), b.deltaBg *= c), this._fxParallaxBackground = b;
  }, run: function run(a) {
    var b = Math.min,
        c = this._fxParallaxBackground;this.transform('translate3d(0px, ' + c.deltaBg * b(1, a) + 'px, 0px)', c.backgroundFrontLayer), c.backgroundRearLayer && this.transform('translate3d(0px, ' + c.deltaBg * b(1, a) + 'px, 0px)', c.backgroundRearLayer);
  }, tearDown: function tearDown() {
    delete this._fxParallaxBackground;
  } });
Polymer.AppLayout.registerEffect('material', { setUp: function setUp() {
    return this.effects = 'waterfall resize-title blend-background parallax-background', !1;
  } });
Polymer.AppLayout.registerEffect('resize-snapped-title', { setUp: function setUp(a) {
    var b = this._getDOMRef('mainTitle'),
        c = this._getDOMRef('condensedTitle'),
        d = a.duration || '0.2s',
        e = {};return c ? b ? void (b.style.transitionProperty = 'opacity', b.style.transitionDuration = d, c.style.transitionProperty = 'opacity', c.style.transitionDuration = d, e.condensedTitle = c, e.title = b, this._fxResizeSnappedTitle = e) : (console.warn('Scroll effect `resize-snapped-title`: undefined `main-title`'), !1) : (console.warn('Scroll effect `resize-snapped-title`: undefined `condensed-title`'), !1);
  }, run: function run(a) {
    var b = this._fxResizeSnappedTitle;0 < a ? (b.title.style.opacity = 0, b.condensedTitle.style.opacity = 1) : (b.title.style.opacity = 1, b.condensedTitle.style.opacity = 0);
  }, tearDown: function tearDown() {
    var a = this._fxResizeSnappedTitle;a.title.style.transition = '', a.condensedTitle.style.transition = '', delete this._fxResizeSnappedTitle;
  } });
'use notstrict';var CenterElementElement;(function (a) {
  a.centerElementProperties = { width: { type: String, value: null, observer: 'recalculateStyles' }, height: { type: String, value: null, observer: 'recalculateStyles' }, fill: { type: Boolean, value: !1, observer: 'recalculateStyles' }, fullscreenoverlay: { type: Boolean, value: !1, observer: 'recalculateStyles' }, hide: { type: Boolean, value: !1, notify: !0 }, requestedPermissions: { type: Array, value: [], notify: !0 }, otherPermissions: { type: Array, value: [], notify: !0 }, nostyle: { type: Boolean, value: !1, notify: !0 } };var b = function () {
    function b() {}return b.recalculateStyles = function () {
      this.nostyle || !this._isReady || (this.fullscreenoverlay ? (this.style.position = 'fixed', this.style.top = this.style.left = '0', this.style.zIndex = '9999', this.style.width = '100vw', this.style.height = '100vh') : (this.style.position = 'static', this.style.top = this.style.left = 'auto', this.style.zIndex = 'auto', this.fill ? (this.style.width = '100%', this.style.height = '100%') : (this.width && (this.style.width = this.width), this.height && (this.style.height = this.height))));
    }, b.ready = function () {
      this._isReady = !0, this.recalculateStyles();
    }, (b.is = 'center-element', b.properties = a.centerElementProperties, b._isReady = !1, b);
  }();a.CE = b, window.objectify ? window.register(b) : window.addEventListener('RegisterReady', function () {
    window.register(b);
  });
})(CenterElementElement || (CenterElementElement = {}));
Polymer.PaperSpinnerBehavior = { properties: { active: { type: Boolean, value: !1, reflectToAttribute: !0, observer: '__activeChanged' }, alt: { type: String, value: 'loading', observer: '__altChanged' }, __coolingDown: { type: Boolean, value: !1 } }, __computeContainerClasses: function __computeContainerClasses(a, b) {
    return [a || b ? 'active' : '', b ? 'cooldown' : ''].join(' ');
  }, __activeChanged: function __activeChanged(a, b) {
    this.__setAriaHidden(!a), this.__coolingDown = !a && b;
  }, __altChanged: function __altChanged(a) {
    'loading' === a ? this.alt = this.getAttribute('aria-label') || a : (this.__setAriaHidden('' === a), this.setAttribute('aria-label', a));
  }, __setAriaHidden: function __setAriaHidden(a) {
    var b = 'aria-hidden';a ? this.setAttribute(b, 'true') : this.removeAttribute(b);
  }, __reset: function __reset() {
    this.active = !1, this.__coolingDown = !1;
  } };
Polymer({ is: 'paper-spinner', behaviors: [Polymer.PaperSpinnerBehavior] });
"use notstrict";var BrowserAPI,
    __extends = undefined && undefined.__extends || function () {
  var a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, c) {
    a.__proto__ = c;
  } || function (a, c) {
    for (var b in c) {
      c.hasOwnProperty(b) && (a[b] = c[b]);
    }
  };return function (c, d) {
    function b() {
      this.constructor = c;
    }a(c, d), c.prototype = null === d ? Object.create(d) : (b.prototype = d.prototype, new b());
  };
}(),
    __assign = undefined && undefined.__assign || Object.assign || function (a) {
  for (var b, c = 1, d = arguments.length; c < d; c++) {
    for (var e in b = arguments[c], b) {
      Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e]);
    }
  }return a;
},
    __awaiter = undefined && undefined.__awaiter || function (a, b, c, d) {
  return new (c || (c = Promise))(function (e, f) {
    function g(a) {
      try {
        i(d.next(a));
      } catch (a) {
        f(a);
      }
    }function h(a) {
      try {
        i(d["throw"](a));
      } catch (a) {
        f(a);
      }
    }function i(a) {
      a.done ? e(a.value) : new c(function (b) {
        b(a.value);
      }).then(g, h);
    }i((d = d.apply(a, b || [])).next());
  });
},
    __generator = undefined && undefined.__generator || function (a, b) {
  function c(a) {
    return function (b) {
      return d([a, b]);
    };
  }function d(c) {
    if (e) throw new TypeError("Generator is already executing.");for (; g;) {
      try {
        if (e = 1, f && (h = f[2 & c[0] ? "return" : c[0] ? "throw" : "next"]) && !(h = h.call(f, c[1])).done) return h;switch ((f = 0, h) && (c = [0, h.value]), c[0]) {case 0:case 1:
            h = c;break;case 4:
            return g.label++, { value: c[1], done: !1 };case 5:
            g.label++, f = c[1], c = [0];continue;case 7:
            c = g.ops.pop(), g.trys.pop();continue;default:
            if ((h = g.trys, !(h = 0 < h.length && h[h.length - 1])) && (6 === c[0] || 2 === c[0])) {
              g = 0;continue;
            }if (3 === c[0] && (!h || c[1] > h[0] && c[1] < h[3])) {
              g.label = c[1];break;
            }if (6 === c[0] && g.label < h[1]) {
              g.label = h[1], h = c;break;
            }if (h && g.label < h[2]) {
              g.label = h[2], g.ops.push(c);break;
            }h[2] && g.ops.pop(), g.trys.pop();continue;}c = b.call(a, g);
      } catch (a) {
        c = [6, a], f = 0;
      } finally {
        e = h = 0;
      }
    }if (5 & c[0]) throw c[1];return { value: c[0] ? c[1] : void 0, done: !0 };
  }var e,
      f,
      h,
      i,
      g = { label: 0, sent: function sent() {
      if (1 & h[0]) throw h[1];return h[1];
    }, trys: [], ops: [] };return i = { next: c(0), "throw": c(1), "return": c(2) }, "function" === typeof Symbol && (i[Symbol.iterator] = function () {
    return this;
  }), i;
};if (function (a) {
  function b(a) {
    return !!n.runtime.lastError && (a(n.runtime.lastError), !0);
  }function c(a, b) {
    var c = b.resolve,
        d = b.reject,
        e = function e() {
      for (var b = [], e = 0; e < arguments.length; e++) {
        b[e] = arguments[e];
      }n.runtime.lastError ? d(new o(n.runtime.lastError, a)) : c(b[0]);
    };return e.__resolve = c, e.__reject = d, e;
  }function d(a) {
    return new Promise(function (b, d) {
      a(c(new Error(), { resolve: b, reject: d }));
    });
  }function e(a) {
    return { set: function set(b) {
        return d(function (c) {
          n.storage[a].set(b, c);
        });
      }, remove: function remove(c) {
        return d(function (d) {
          Array.isArray(c) ? Promise.all(c.map(function (c) {
            return new Promise(function (e) {
              n.storage[a].remove(c, function () {
                b(d.__reject) || e(null);
              });
            });
          })).then(d) : n.storage[a].remove(c, d);
        });
      }, clear: function clear() {
        return d(function (b) {
          n.storage[a].clear(b);
        });
      } };
  }function f(a) {
    if ("browser" === a) return p;if ("chrome" === a) return q;if ("undefined" !== typeof module) return !1;throw new Error("Unsupported browser API support queried");
  }function g() {
    var a = window,
        b = !!a.opr && !!a.opr.addons || !!a.opera || 0 <= navigator.userAgent.indexOf(" OPR/");if ("undefined" !== typeof a.InstallTrigger) return "firefox";if (a.StyleMedia) return "edge";if (!b && f("chrome")) return "chrome";if (b) return "opera";if ("undefined" !== typeof module) return "node";throw new Error("Unsupported browser");
  }function h() {
    return -1 === location.href.indexOf("backgroun");
  }function i() {
    return -1 < n.runtime.getManifest().short_name.indexOf("dev");
  }function j(c, a) {
    return c + "" === a + "";
  }function k(a, b, c) {
    for (var d = 0; d < a.length; d++) {
      var e = a[d],
          f = e.id,
          g = e.children;if (j(f, b)) return c(e, d, a), !0;if (g && k(g, b, c)) return !0;
    }return !1;
  }function l() {
    t._lastSpecialCall = null, t._currentContextMenu = [], t._activeTabs = [], t._executedScripts = [], t._fakeTabs = {}, t._activatedBackgroundPages = [], t._tabUpdateListeners = [];
  }var m = window,
      n = m.StyleMedia ? m.browser : m.chrome,
      o = function (a) {
    function b(b, c) {
      var d = b.message,
          e = c.stack,
          f = a.call(this, d) || this;return f.stack = e, f.message = d, f;
    }return __extends(b, a), b;
  }(Error),
      p = "browser" in window,
      q = "chrome" in window;a.isBrowserAPISupported = f;var r = null;a.getBrowser = function () {
    return r ? r : r = g();
  }, a.getSrc = function () {
    return n;
  };var s = !1;a.resetLogData = l, a.enableLogging = function () {
    s || l(), s = !0;
  }, a.disableLogging = function () {
    s = !1, t._lastSpecialCall = null, t._currentContextMenu = null, t._activeTabs = null, t._executedScripts = null, t._fakeTabs = null, t._activatedBackgroundPages = null, t._tabUpdateListeners = null;
  };var t = { _lastSpecialCall: null, _currentContextMenu: null, _activeTabs: null, _executedScripts: null, _fakeTabs: null, _activatedBackgroundPages: null, _tabUpdateListeners: null, _clearExecutedScripts: function _clearExecutedScripts() {
      for (; t._executedScripts.pop();) {}
    } };a.getTestData = function () {
    return h() || i() ? t : void 0;
  }, a.polyfill = n ? { commands: n.commands ? { getAll: function getAll() {
        return d(function (a) {
          n.commands.getAll(a);
        });
      }, onCommand: n.commands.onCommand } : void 0, contextMenus: n.contextMenus ? { create: function create(b, c) {
        var d = n.contextMenus.create(b, function () {
          c && (n.runtime.lastError ? (a.polyfill.runtime.lastError = n.runtime.lastError.message, c(), a.polyfill.runtime.lastError = null) : c());
        }),
            e = { id: d, createProperties: b, currentProperties: b, children: [] };return s && (b.parentId ? k(t._currentContextMenu, b.parentId, function (a) {
          a.children.push(e);
        }) : t._currentContextMenu.push(e)), Promise.resolve(d);
      }, update: function update(a, b) {
        return s && k(t._currentContextMenu, a, function (a) {
          var c = a.currentProperties;for (var d in b) {
            c[d] = b[d];
          }
        }), d(function (c) {
          n.contextMenus.update(a + "", b, function () {
            n.runtime.lastError ? n.contextMenus.update(~~a, b, c) : c();
          });
        });
      }, remove: function remove(a) {
        return s && k(t._currentContextMenu, a, function (a, b, c) {
          c.splice(b, 1);
        }), d(function (b) {
          n.contextMenus.remove(a + "", function () {
            n.runtime.lastError ? n.contextMenus.remove(~~a, b) : b();
          });
        });
      }, removeAll: function removeAll() {
        if (s) for (; t._currentContextMenu.length;) {
          t._currentContextMenu.pop();
        }return d(function (a) {
          n.contextMenus.removeAll(a);
        });
      } } : void 0, downloads: n.downloads ? { download: function download(a) {
        return s && (t._lastSpecialCall = { api: "downloads.download", args: [a] }), d(function (b) {
          n.downloads.download(a, b);
        });
      } } : void 0, extension: n.extension ? { isAllowedFileSchemeAccess: function isAllowedFileSchemeAccess() {
        return d(function (a) {
          n.extension.isAllowedFileSchemeAccess(a);
        });
      } } : void 0, notifications: n.notifications ? { onClicked: n.notifications.onClicked, onClosed: n.notifications.onClosed } : void 0, permissions: n.permissions ? { contains: function contains(a) {
        return d(function (b) {
          n.permissions.contains(a, b);
        });
      }, getAll: function getAll() {
        return d(function (a) {
          n.permissions.getAll(a);
        });
      }, request: function request(a) {
        return d(function (b) {
          n.permissions.request(a, b);
        });
      }, remove: function remove(a) {
        return d(function (b) {
          n.permissions.remove(a, b);
        });
      } } : void 0, runtime: n.runtime ? { connect: function connect(a, b) {
        return b ? n.runtime.connect(a, b) : a ? n.runtime.connect(a) : n.runtime.connect();
      }, getBackgroundPage: function getBackgroundPage() {
        return d(function (a) {
          n.runtime.getBackgroundPage(a);
        });
      }, getManifest: function getManifest() {
        return Promise.resolve(n.runtime.getManifest());
      }, getURL: function getURL(a) {
        return n.runtime.getURL(a);
      }, getPlatformInfo: function getPlatformInfo() {
        return d(function (a) {
          n.runtime.getPlatformInfo(a);
        });
      }, openOptionsPage: function openOptionsPage() {
        return d(function (b) {
          "edge" === a.getBrowser() ? a.polyfill.tabs.create({ url: a.polyfill.runtime.getURL("html/options.html") }).then(function () {
            b();
          }) : n.runtime.openOptionsPage(b);
        });
      }, reload: function reload() {
        return Promise.resolve(n.runtime.reload());
      }, sendMessage: function sendMessage(a, b, c) {
        return d(function (d) {
          c ? n.runtime.sendMessage(a, b, c, d) : b ? n.runtime.sendMessage(a, b, d) : n.runtime.sendMessage(a, d);
        });
      }, onInstalled: n.runtime.onInstalled, onConnectExternal: n.runtime.onConnectExternal, onConnect: n.runtime.onConnect, onMessage: n.runtime.onMessage, lastError: null, id: n.runtime.id } : void 0, storage: n.storage ? { local: __assign({}, e("local"), { get: function get(a) {
          return d(function (b) {
            a ? n.storage.local.get(a, b) : n.storage.local.get(b);
          });
        } }), sync: __assign({}, e("sync"), { get: function get(a) {
          return d(function (b) {
            a ? n.storage.sync.get(a, b) : n.storage.sync.get(b);
          });
        } }), onChanged: n.storage.onChanged } : void 0, tabs: n.tabs ? { create: function create(a) {
        return d(function (b) {
          n.tabs.create(a, function (c) {
            var d = c.id;s && t._activeTabs.push({ type: "create", data: a, id: d }), b(c);
          });
        });
      }, get: function get(a) {
        return d(function (b) {
          n.tabs.get(a, b);
        });
      }, getCurrent: function getCurrent() {
        return d(function (a) {
          n.tabs.getCurrent(a);
        });
      }, captureVisibleTab: function captureVisibleTab(a, b) {
        return d(function (c) {
          b ? n.tabs.captureVisibleTab(a, b, c) : a ? n.tabs.captureVisibleTab(a, c) : n.tabs.captureVisibleTab(c);
        });
      }, update: function update(a, b) {
        return __awaiter(this, void 0, void 0, function () {
          var c = this;return __generator(this, function () {
            return [2, d(function (d) {
              return __awaiter(c, void 0, void 0, function () {
                return __generator(this, function () {
                  return b ? n.tabs.update(a, b, d) : n.tabs.update(a, d), s && t._activeTabs.push({ type: "create", data: "number" === typeof a ? b : a, id: "number" === typeof a ? a : void 0 }), [2];
                });
              });
            })];
          });
        });
      }, query: function query(a) {
        return d(function (b) {
          n.tabs.query(a, b);
        });
      }, executeScript: function executeScript(a, b) {
        var c = this;return d(function (d) {
          return __awaiter(c, void 0, void 0, function () {
            var c, e, f;return __generator(this, function (g) {
              switch (g.label) {case 0:
                  return (b ? n.tabs.executeScript(a, b, d) : n.tabs.executeScript(a, d), c = "number" === typeof a ? b : a, !c.code) ? [3, 4] : (e = void 0, "number" !== typeof a) ? [3, 1] : (e = a, [3, 3]);case 1:
                  return [4, browserAPI.tabs.getCurrent()];case 2:
                  f = g.sent(), f && (e = f.id), g.label = 3;case 3:
                  s && t._executedScripts.push({ id: e, code: c.code }), g.label = 4;case 4:
                  return [2];}
            });
          });
        });
      }, sendMessage: function sendMessage(a, c) {
        return d(function (d) {
          var e = d.__resolve,
              f = d.__reject;n.tabs.sendMessage(a, c, function (a) {
            b(f) || e(a);
          });
        });
      }, onUpdated: n.tabs.onUpdated, onRemoved: n.tabs.onRemoved, onHighlighted: n.tabs.onHighlighted } : void 0, webRequest: n.webRequest ? { onBeforeRequest: n.webRequest.onBeforeRequest } : void 0 } : {};
}(BrowserAPI || (BrowserAPI = {})), !window.browserAPI || window.__isVirtual) {
  window.browserAPI = "edge" !== BrowserAPI.getBrowser() && window.browser ? window.browserAPI : __assign({}, BrowserAPI.polyfill, { __isProxied: !0 });var menusBrowserAPI = window.browserAPI;menusBrowserAPI.contextMenus ? !menusBrowserAPI.menus && (menusBrowserAPI.menus = menusBrowserAPI.contextMenus) : menusBrowserAPI.contextMenus = menusBrowserAPI.menus;
}var browserAPI = window.browserAPI;
"use notstrict";var __assign = undefined && undefined.__assign || Object.assign || function (a) {
  for (var b, c = 1, d = arguments.length; c < d; c++) {
    for (var e in b = arguments[c], b) {
      Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e]);
    }
  }return a;
},
    __awaiter = undefined && undefined.__awaiter || function (a, b, c, d) {
  return new (c || (c = Promise))(function (e, f) {
    function g(a) {
      try {
        i(d.next(a));
      } catch (a) {
        f(a);
      }
    }function h(a) {
      try {
        i(d["throw"](a));
      } catch (a) {
        f(a);
      }
    }function i(a) {
      a.done ? e(a.value) : new c(function (b) {
        b(a.value);
      }).then(g, h);
    }i((d = d.apply(a, b || [])).next());
  });
},
    __generator = undefined && undefined.__generator || function (a, b) {
  function c(a) {
    return function (b) {
      return d([a, b]);
    };
  }function d(c) {
    if (e) throw new TypeError("Generator is already executing.");for (; g;) {
      try {
        if (e = 1, f && (h = f[2 & c[0] ? "return" : c[0] ? "throw" : "next"]) && !(h = h.call(f, c[1])).done) return h;switch ((f = 0, h) && (c = [0, h.value]), c[0]) {case 0:case 1:
            h = c;break;case 4:
            return g.label++, { value: c[1], done: !1 };case 5:
            g.label++, f = c[1], c = [0];continue;case 7:
            c = g.ops.pop(), g.trys.pop();continue;default:
            if ((h = g.trys, !(h = 0 < h.length && h[h.length - 1])) && (6 === c[0] || 2 === c[0])) {
              g = 0;continue;
            }if (3 === c[0] && (!h || c[1] > h[0] && c[1] < h[3])) {
              g.label = c[1];break;
            }if (6 === c[0] && g.label < h[1]) {
              g.label = h[1], h = c;break;
            }if (h && g.label < h[2]) {
              g.label = h[2], g.ops.push(c);break;
            }h[2] && g.ops.pop(), g.trys.pop();continue;}c = b.call(a, g);
      } catch (a) {
        c = [6, a], f = 0;
      } finally {
        e = h = 0;
      }
    }if (5 & c[0]) throw c[1];return { value: c[0] ? c[1] : void 0, done: !0 };
  }var e,
      f,
      h,
      i,
      g = { label: 0, sent: function sent() {
      if (1 & h[0]) throw h[1];return h[1];
    }, trys: [], ops: [] };return i = { next: c(0), "throw": c(1), "return": c(2) }, "function" === typeof Symbol && (i[Symbol.iterator] = function () {
    return this;
  }), i;
},
    _this = undefined;(function () {
  function a(a) {
    return "undefined" === typeof a || null === a;
  }function b(a, b) {
    var c = document.createElement("div");return c.style[a] = b, c.style[a] === b;
  }function c(a, b, c, d) {
    var e = null,
        f = { onfinish: null, oncancel: null, cancel: function cancel() {
        e && e.cancel(), this.oncancel && this.oncancel.apply(this, { currentTime: Date.now(), timelineTime: null });
      }, play: function play() {
        var a = this;e && e.cancel(), e = d(b, c, function () {
          a.onfinish && a.onfinish.apply(a, { currentTime: Date.now(), timelineTime: null });
        });
      }, reverse: function reverse() {
        var a = this;e && e.cancel(), e = d(c, b, function () {
          a.onfinish && a.onfinish.apply(a, { currentTime: Date.now(), timelineTime: null });
        });
      }, pause: function pause() {}, finish: function finish() {}, currentTime: 0, effect: { timing: 0, getComputedTiming: function getComputedTiming() {
          return { endTime: 0, activeDuration: 0, currentIteration: 0, localTime: 0, progress: null };
        } }, finished: Promise.resolve(f), pending: !1, startTime: Date.now(), id: "", ready: Promise.resolve(f), playState: "finished", playbackRate: 1, timeline: { currentTime: Date.now() } };return d(b, c, function () {
      f.onfinish && f.onfinish.apply(f, { currentTime: Date.now(), timelineTime: null });
    }), f;
  }if (!window.onExists) {
    var d = function () {
      function a(a) {
        var b = this;this._val = null, this._state = "pending", this._done = !1, this._resolveListeners = [], this._rejectListeners = [], a(function (a) {
          b._done || (b._done = !0, b._val = a, b._state = "resolved", b._resolveListeners.forEach(function (b) {
            b(a);
          }));
        }, function (a) {
          b._done || (b._done = !0, b._val = a, b._state = "rejected", b._rejectListeners.forEach(function (b) {
            b(a);
          }));
        });
      }return a.prototype.then = function (a, b) {
        return a ? (this._done && "resolved" === this._state ? a(this._val) : this._resolveListeners.push(a), !b) ? this : (this._done && "rejected" === this._state ? b(this._val) : this._rejectListeners.push(b), this) : this;
      }, a.chain = function (b) {
        return new a(function (c) {
          return b[0] ? void b[0]().then(function (d) {
            b[1] ? a.chain(b.slice(1)).then(function (a) {
              c(a);
            }) : c(d);
          }) : void c(null);
        });
      }, a;
    }();window.onExists = function (b, c) {
      c || (c = window);var e = window.Promise || d;return new e(function (d) {
        if (b in c && !a(c[b])) return void d(c[b]);var e = window.setInterval(function () {
          b in c && !a(c[b]) && (window.clearInterval(e), d(c[b]));
        }, 50);
      });
    }, window.onExistsChain = function (a, b, c, e, f) {
      var g = window.Promise || d;return new g(function (a) {
        var h = window;d.chain([b, c, e, f].filter(function (a) {
          return !!a;
        }).map(function (a) {
          return function () {
            return new g(function (b) {
              window.onExists(a, h).then(function (a) {
                h = a, b(a);
              });
            });
          };
        })).then(function (b) {
          a(b);
        });
      });
    };var e = function e(a) {
      var b = {};return Object.getOwnPropertyNames(a).forEach(function (c) {
        b[c] = a[c];
      }), b;
    },
        f = function f(a) {
      var b = e(a),
          c = b.ready;Polymer(__assign({}, b, { ready: function ready() {
          this.classList.add("browser-" + BrowserAPI.getBrowser()), c && "function" === typeof c && c.apply(this, []);
        } }));
    };window.withAsync = function (a, b) {
      return __awaiter(_this, void 0, void 0, function () {
        var c, d;return __generator(this, function (e) {
          switch (e.label) {case 0:
              return [4, a()];case 1:
              return c = e.sent(), [4, b()];case 2:
              return d = e.sent(), [4, c()];case 3:
              return e.sent(), [2, d];}
        });
      });
    }, window["with"] = function (a, b) {
      var c = a(),
          d = b();return c(), d;
    };var g = null,
        h = window.getComputedStyle && "transform" in window.getComputedStyle(document.documentElement, "");window.setDisplayFlex = function (a) {
      null === g && (g = b("display", "flex")), a.style.display = g ? "flex" : "-webkit-flex";
    }, window.setTransform = function (a, b) {
      h ? a.style.transform = b : a.style.WebkitTransform = b;
    }, window.animateTransform = function (a, b, d) {
      var e = b.from,
          f = b.propName,
          g = b.to,
          i = b.postfix;if (h && !a.__isAnimationJqueryPolyfill) return a.animate([{ transform: f + "(" + e + i + ")" }, { transform: f + "(" + g + i + ")" }], d);a.style.WebkitTransform = f + "(" + e + i + ")";var j = document.createElement("div");return c(a, "0px", "100px", function (b, c, h) {
        return j.style.height = b, $(j).animate({ height: c }, { duration: d.duration || 500, step: function step(b) {
            a.style.WebkitTransform = f + "(" + (e + (g - e) / 100 * b) + i + ")";
          }, complete: function complete() {
            a.style.WebkitTransform = f + "(" + c + i + ")", h();
          } }), { cancel: function cancel() {
            $(j).stop();
          } };
      });
    }, "undefined" !== typeof Event && window.onExists("Promise").then(function () {
      window.onExists("Polymer").then(function () {
        window.objectify = e, window.register = f;var a = new Event("RegisterReady");window.dispatchEvent(a);
      });
    });
  }
})();
(function (e) {
  function t(e) {
    var t = e.length,
        n = oe.type(e);return !oe.isWindow(e) && (1 === e.nodeType && t || "array" === n || "function" !== n && (0 === t || "number" === typeof t && 0 < t && t - 1 in e));
  }function n(e) {
    var t = fe[e] = {};return oe.each(e.match(se) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }function a() {
    Object.defineProperty(this.cache = {}, 0, { get: function get() {
        return {};
      } }), this.expando = oe.expando + Math.random();
  }function o(e, t, n) {
    var a;if (void 0 === n && 1 === e.nodeType) if (a = "data-" + t.replace(ye, "-$1").toLowerCase(), n = e.getAttribute(a), "string" === typeof n) {
      try {
        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ge.test(n) ? JSON.parse(n) : n);
      } catch (t) {}me.set(e, t, n);
    } else n = void 0;return n;
  }function i() {
    return !0;
  }function s() {
    return !1;
  }function d() {
    try {
      return X.activeElement;
    } catch (e) {}
  }function r(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) {}return e;
  }function l(e, t, n) {
    if (oe.isFunction(t)) return oe.grep(e, function (e, a) {
      return !!t.call(e, a, e) !== n;
    });if (t.nodeType) return oe.grep(e, function (e) {
      return e === t !== n;
    });if ("string" === typeof t) {
      if (Se.test(t)) return oe.filter(t, e, n);t = oe.filter(t, e);
    }return oe.grep(e, function (e) {
      return 0 <= ee.call(t, e) !== n;
    });
  }function p(e, t) {
    return oe.nodeName(e, "table") && oe.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
  }function c(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function u(e) {
    var t = Me.exec(e.type);return t ? e.type = t[1] : e.removeAttribute("type"), e;
  }function f(e, t) {
    for (var n = e.length, a = 0; a < n; a++) {
      he.set(e[a], "globalEval", !t || he.get(t[a], "globalEval"));
    }
  }function m(e, t) {
    var n, a, o, i, s, d, r, l;if (1 === t.nodeType) {
      if (he.hasData(e) && (i = he.access(e), s = he.set(t, i), l = i.events, l)) for (o in delete s.handle, s.events = {}, l) {
        for (n = 0, a = l[o].length; n < a; n++) {
          oe.event.add(t, o, l[o][n]);
        }
      }me.hasData(e) && (d = me.access(e), r = oe.extend({}, d), me.set(t, r));
    }
  }function h(e, t) {
    var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];return t === void 0 || t && oe.nodeName(e, t) ? oe.merge([e], n) : n;
  }function g(e, t) {
    var n = t.nodeName.toLowerCase();"input" === n && Pe.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
  }function y(e, t) {
    if (t in e) return t;for (var n = t.charAt(0).toUpperCase() + t.slice(1), a = t, o = Ke.length; o--;) {
      if (t = Ke[o] + n, t in e) return t;
    }return a;
  }function x(e, t) {
    return e = t || e, "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e);
  }function b(t) {
    return e.getComputedStyle(t, null);
  }function v(e, t) {
    for (var n, a, o, i = [], s = 0, d = e.length; s < d; s++) {
      (a = e[s], !!a.style) && (i[s] = he.get(a, "olddisplay"), n = a.style.display, t ? (!i[s] && "none" === n && (a.style.display = ""), "" === a.style.display && x(a) && (i[s] = he.access(a, "olddisplay", N(a.nodeName)))) : !i[s] && (o = x(a), (n && "none" !== n || !o) && he.set(a, "olddisplay", o ? n : oe.css(a, "display"))));
    }for (s = 0; s < d; s++) {
      (a = e[s], !!a.style) && (t && "none" !== a.style.display && "" !== a.style.display || (a.style.display = t ? i[s] || "" : "none"));
    }return e;
  }function T(e, t, n) {
    var a = $e.exec(t);return a ? I(0, a[1] - (n || 0)) + (a[2] || "px") : t;
  }function w(e, t, n, a, o) {
    for (var s = n === (a ? "border" : "content") ? 4 : "width" === t ? 1 : 0, i = 0; 4 > s; s += 2) {
      "margin" === n && (i += oe.css(e, n + Je[s], !0, o)), a ? ("content" === n && (i -= oe.css(e, "padding" + Je[s], !0, o)), "margin" !== n && (i -= oe.css(e, "border" + Je[s] + "Width", !0, o))) : (i += oe.css(e, "padding" + Je[s], !0, o), "padding" !== n && (i += oe.css(e, "border" + Je[s] + "Width", !0, o)));
    }return i;
  }function C(e, t, n) {
    var a = !0,
        o = "width" === t ? e.offsetWidth : e.offsetHeight,
        i = b(e),
        s = oe.support.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, i);if (0 >= o || null == o) {
      if (o = Ie(e, t, i), (0 > o || null == o) && (o = e.style[t]), Ue.test(o)) return o;a = s && (oe.support.boxSizingReliable || o === e.style[t]), o = parseFloat(o) || 0;
    }return o + w(e, t, n || (s ? "border" : "content"), a, i) + "px";
  }function N(e) {
    var t = X,
        n = Ve[e];return n || (n = k(e, t), ("none" === n || !n) && (_e = (_e || oe("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (_e[0].contentWindow || _e[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = k(e, t), _e.detach()), Ve[e] = n), n;
  }function k(e, t) {
    var n = oe(t.createElement(e)).appendTo(t.body),
        a = oe.css(n[0], "display");return n.remove(), a;
  }function j(e, t, n, a) {
    if (oe.isArray(t)) oe.each(t, function (t, o) {
      n || et.test(e) ? a(e, o) : j(e + "[" + ("object" === ("undefined" === typeof o ? "undefined" : babelHelpers["typeof"](o)) ? t : "") + "]", o, n, a);
    });else if (!n && "object" === oe.type(t)) for (var o in t) {
      j(e + "[" + o + "]", t[o], n, a);
    } else a(e, t);
  }function S(e) {
    return function (t, n) {
      "string" !== typeof t && (n = t, t = "*");var a,
          o = 0,
          i = t.toLowerCase().match(se) || [];if (oe.isFunction(n)) for (; a = i[o++];) {
        "+" === a[0] ? (a = a.slice(1) || "*", (e[a] = e[a] || []).unshift(n)) : (e[a] = e[a] || []).push(n);
      }
    };
  }function D(e, t, n, a) {
    function o(d) {
      var r;return i[d] = !0, oe.each(e[d] || [], function (e, d) {
        var l = d(t, n, a);return "string" !== typeof l || s || i[l] ? s ? !(r = l) : void 0 : (t.dataTypes.unshift(l), o(l), !1);
      }), r;
    }var i = {},
        s = e === yt;return o(t.dataTypes[0]) || !i["*"] && o("*");
  }function E(e, t) {
    var n,
        a,
        o = oe.ajaxSettings.flatOptions || {};for (n in t) {
      void 0 !== t[n] && ((o[n] ? e : a || (a = {}))[n] = t[n]);
    }return a && oe.extend(!0, e, a), e;
  }function A(e, t, n) {
    for (var a, o, i, s, d = e.contents, r = e.dataTypes; "*" === r[0];) {
      r.shift(), void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
    }if (a) for (o in d) {
      if (d[o] && d[o].test(a)) {
        r.unshift(o);break;
      }
    }if (r[0] in n) i = r[0];else {
      for (o in n) {
        if (!r[0] || e.converters[o + " " + r[0]]) {
          i = o;break;
        }s || (s = o);
      }i = i || s;
    }return i ? (i !== r[0] && r.unshift(i), n[i]) : void 0;
  }function L(e, t, n, a) {
    var o,
        i,
        s,
        d,
        r,
        l = {},
        p = e.dataTypes.slice();if (p[1]) for (s in e.converters) {
      l[s.toLowerCase()] = e.converters[s];
    }for (i = p.shift(); i;) {
      if (e.responseFields[i] && (n[e.responseFields[i]] = t), !r && a && e.dataFilter && (t = e.dataFilter(t, e.dataType)), r = i, i = p.shift(), i) if ("*" === i) i = r;else if ("*" !== r && r !== i) {
        if (s = l[r + " " + i] || l["* " + i], !s) for (o in l) {
          if (d = o.split(" "), d[1] === i && (s = l[r + " " + d[0]] || l["* " + d[0]], s)) {
            !0 === s ? s = l[o] : !0 !== l[o] && (i = d[0], p.unshift(d[1]));break;
          }
        }if (!0 !== s) if (s && e.throws) t = s(t);else try {
          t = s(t);
        } catch (t) {
          return { state: "parsererror", error: s ? t : "No conversion from " + r + " to " + i };
        }
      }
    }return { state: "success", data: t };
  }function H() {
    return setTimeout(function () {
      kt = void 0;
    }), kt = oe.now();
  }function q(e, t, n) {
    for (var a, o = (Lt[t] || []).concat(Lt["*"]), i = 0, s = o.length; i < s; i++) {
      if (a = o[i].call(n, t, e)) return a;
    }
  }function O(e, t, n) {
    var a,
        o,
        i = 0,
        s = At.length,
        d = oe.Deferred().always(function () {
      delete r.elem;
    }),
        r = function r() {
      if (o) return !1;for (var t = kt || H(), n = I(0, l.startTime + l.duration - t), a = n / l.duration || 0, i = 1 - a, s = 0, r = l.tweens.length; s < r; s++) {
        l.tweens[s].run(i);
      }return d.notifyWith(e, [l, i, n]), 1 > i && r ? n : (d.resolveWith(e, [l]), !1);
    },
        l = d.promise({ elem: e, props: oe.extend({}, t), opts: oe.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: kt || H(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
        var a = oe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);return l.tweens.push(a), a;
      }, stop: function stop(t) {
        var n = 0,
            a = t ? l.tweens.length : 0;if (o) return this;for (o = !0; n < a; n++) {
          l.tweens[n].run(1);
        }return t ? d.resolveWith(e, [l, t]) : d.rejectWith(e, [l, t]), this;
      } }),
        p = l.props;for (P(p, l.opts.specialEasing); i < s; i++) {
      if (a = At[i].call(l, e, p, l.opts), a) return a;
    }return oe.map(p, q, l), oe.isFunction(l.opts.start) && l.opts.start.call(e, l), oe.fx.timer(oe.extend(r, { elem: e, anim: l, queue: l.opts.queue })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
  }function P(e, t) {
    var n, a, o, i, s;for (n in e) {
      if (a = oe.camelCase(n), o = t[a], i = e[n], oe.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== a && (e[a] = i, delete e[n]), s = oe.cssHooks[a], s && "expand" in s) for (n in i = s.expand(i), delete e[a], i) {
        n in e || (e[n] = i[n], t[n] = o);
      } else t[a] = o;
    }
  }function F(e, t, n, a, o) {
    return new F.prototype.init(e, t, n, a, o);
  }function W(e, t) {
    var n,
        a = { height: e },
        o = 0;for (t = t ? 1 : 0; 4 > o; o += 2 - t) {
      n = Je[o], a["margin" + n] = a["padding" + n] = e;
    }return t && (a.opacity = a.width = e), a;
  }function M(e) {
    return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }var B,
      R,
      I = Math.max,
      _ = "undefined",
      z = e.location,
      X = e.document,
      $ = X.documentElement,
      U = e.jQuery,
      Y = e.$,
      V = {},
      G = [],
      Q = "2.0.3",
      J = G.concat,
      K = G.push,
      Z = G.slice,
      ee = G.indexOf,
      te = V.toString,
      ne = V.hasOwnProperty,
      ae = Q.trim,
      oe = function e(t, n) {
    return new e.fn.init(t, n, B);
  },
      ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      se = /\S+/g,
      de = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      re = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      le = /^-ms-/,
      pe = /-([\da-z])/gi,
      ce = function ce(e, t) {
    return t.toUpperCase();
  },
      ue = function t() {
    X.removeEventListener("DOMContentLoaded", t, !1), e.removeEventListener("load", t, !1), oe.ready();
  };oe.fn = oe.prototype = { jquery: Q, constructor: oe, init: function init(e, t, n) {
      var a, o;if (!e) return this;if ("string" === typeof e) {
        if (a = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : de.exec(e), a && (a[1] || !t)) {
          if (a[1]) {
            if (t = t instanceof oe ? t[0] : t, oe.merge(this, oe.parseHTML(a[1], t && t.nodeType ? t.ownerDocument || t : X, !0)), re.test(a[1]) && oe.isPlainObject(t)) for (a in t) {
              oe.isFunction(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
            }return this;
          }return o = X.getElementById(a[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = X, this.selector = e, this;
        }return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      }return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : oe.isFunction(e) ? n.ready(e) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), oe.makeArray(e, this));
    }, selector: "", length: 0, toArray: function toArray() {
      return Z.call(this);
    }, get: function get(e) {
      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
    }, pushStack: function pushStack(e) {
      var t = oe.merge(this.constructor(), e);return t.prevObject = this, t.context = this.context, t;
    }, each: function each(e, t) {
      return oe.each(this, e, t);
    }, ready: function ready(e) {
      return oe.ready.promise().done(e), this;
    }, slice: function slice() {
      return this.pushStack(Z.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          n = +e + (0 > e ? t : 0);return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    }, map: function map(e) {
      return this.pushStack(oe.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, end: function end() {
      return this.prevObject || this.constructor(null);
    }, push: K, sort: [].sort, splice: [].splice }, oe.fn.init.prototype = oe.fn, oe.extend = oe.fn.extend = function () {
    var e,
        t,
        n,
        a,
        o,
        s,
        d = arguments[0] || {},
        r = 1,
        i = arguments.length,
        l = !1;for ("boolean" === typeof d && (l = d, d = arguments[1] || {}, r = 2), "object" === ("undefined" === typeof d ? "undefined" : babelHelpers["typeof"](d)) || oe.isFunction(d) || (d = {}), i === r && (d = this, --r); r < i; r++) {
      if (null != (e = arguments[r])) for (t in e) {
        (n = d[t], a = e[t], d !== a) && (l && a && (oe.isPlainObject(a) || (o = oe.isArray(a))) ? (o ? (o = !1, s = n && oe.isArray(n) ? n : []) : s = n && oe.isPlainObject(n) ? n : {}, d[t] = oe.extend(l, s, a)) : void 0 !== a && (d[t] = a));
      }
    }return d;
  }, oe.extend({ expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""), noConflict: function noConflict(t) {
      return e.$ === oe && (e.$ = Y), t && e.jQuery === oe && (e.jQuery = U), oe;
    }, isReady: !1, readyWait: 1, holdReady: function holdReady(e) {
      e ? oe.readyWait++ : oe.ready(!0);
    }, ready: function ready(e) {
      (!0 === e ? ! --oe.readyWait : !oe.isReady) && (oe.isReady = !0, !0 !== e && 0 < --oe.readyWait || (R.resolveWith(X, [oe]), oe.fn.trigger && oe(X).trigger("ready").off("ready")));
    }, isFunction: function isFunction(e) {
      return "function" === oe.type(e);
    }, isArray: Array.isArray, isWindow: function isWindow(e) {
      return null != e && e === e.window;
    }, isNumeric: function isNumeric(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    }, type: function type(e) {
      return null == e ? e + "" : "object" === ("undefined" === typeof e ? "undefined" : babelHelpers["typeof"](e)) || "function" === typeof e ? V[te.call(e)] || "object" : "undefined" === typeof e ? "undefined" : babelHelpers["typeof"](e);
    }, isPlainObject: function isPlainObject(e) {
      if ("object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;try {
        if (e.constructor && !ne.call(e.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (t) {
        return !1;
      }return !0;
    }, isEmptyObject: function isEmptyObject(e) {
      for (var t in e) {
        return !1;
      }return !0;
    }, error: function error(e) {
      throw new Error(e);
    }, parseHTML: function parseHTML(e, t, n) {
      if (!e || "string" !== typeof e) return null;"boolean" === typeof t && (n = t, t = !1), t = t || X;var a = re.exec(e),
          o = !n && [];return a ? [t.createElement(a[1])] : (a = oe.buildFragment([e], t, o), o && oe(o).remove(), oe.merge([], a.childNodes));
    }, parseJSON: JSON.parse, parseXML: function parseXML(e) {
      var t, n;if (!e || "string" !== typeof e) return null;try {
        n = new DOMParser(), t = n.parseFromString(e, "text/xml");
      } catch (n) {
        t = void 0;
      }return (!t || t.getElementsByTagName("parsererror").length) && oe.error("Invalid XML: " + e), t;
    }, noop: function noop() {}, globalEval: function globalEval(e) {
      var t,
          n = eval;e = oe.trim(e), e && (1 === e.indexOf("use notstrict") ? (t = X.createElement("script"), t.text = e, X.head.appendChild(t).parentNode.removeChild(t)) : n(e));
    }, camelCase: function camelCase(e) {
      return e.replace(le, "ms-").replace(pe, ce);
    }, nodeName: function nodeName(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }, each: function each(e, n, a) {
      var o,
          s = 0,
          i = e.length,
          d = t(e);if (a) {
        if (d) for (; s < i && (o = n.apply(e[s], a), !1 !== o); s++) {} else for (s in e) {
          if (o = n.apply(e[s], a), !1 === o) break;
        }
      } else if (d) for (; s < i && (o = n.call(e[s], s, e[s]), !1 !== o); s++) {} else for (s in e) {
        if (o = n.call(e[s], s, e[s]), !1 === o) break;
      }return e;
    }, trim: function trim(e) {
      return null == e ? "" : ae.call(e);
    }, makeArray: function makeArray(e, n) {
      var a = n || [];return null != e && (t(Object(e)) ? oe.merge(a, "string" === typeof e ? [e] : e) : K.call(a, e)), a;
    }, inArray: function inArray(e, t, n) {
      return null == t ? -1 : ee.call(t, e, n);
    }, merge: function merge(e, t) {
      var n = t.length,
          a = e.length,
          o = 0;if ("number" === typeof n) for (; o < n; o++) {
        e[a++] = t[o];
      } else for (; void 0 !== t[o];) {
        e[a++] = t[o++];
      }return e.length = a, e;
    }, grep: function grep(e, t, n) {
      var a,
          o = [],
          s = 0,
          i = e.length;for (n = !!n; s < i; s++) {
        a = !!t(e[s], s), n !== a && o.push(e[s]);
      }return o;
    }, map: function map(e, n, a) {
      var o,
          s = 0,
          i = e.length,
          d = t(e),
          r = [];if (d) for (; s < i; s++) {
        o = n(e[s], s, a), null != o && (r[r.length] = o);
      } else for (s in e) {
        o = n(e[s], s, a), null != o && (r[r.length] = o);
      }return J.apply([], r);
    }, guid: 1, proxy: function proxy(e, t) {
      var n, a, o;if ("string" === typeof t && (n = e[t], t = e, e = n), !!oe.isFunction(e)) return a = Z.call(arguments, 2), o = function o() {
        return e.apply(t || this, a.concat(Z.call(arguments)));
      }, o.guid = e.guid = e.guid || oe.guid++, o;
    }, access: function access(e, t, n, a, o, s, d) {
      var r = 0,
          i = e.length,
          l = null == n;if ("object" === oe.type(n)) for (r in o = !0, n) {
        oe.access(e, t, r, n[r], !0, s, d);
      } else if (void 0 !== a && (o = !0, oe.isFunction(a) || (d = !0), l && (d ? (t.call(e, a), t = null) : (l = t, t = function t(e, _t, n) {
        return l.call(oe(e), n);
      })), t)) for (; r < i; r++) {
        t(e[r], n, d ? a : a.call(e[r], r, t(e[r], n)));
      }return o ? e : l ? t.call(e) : i ? t(e[0], n) : s;
    }, now: Date.now, swap: function swap(e, t, n, a) {
      var o,
          i,
          s = {};for (i in t) {
        s[i] = e.style[i], e.style[i] = t[i];
      }for (i in o = n.apply(e, a || []), t) {
        e.style[i] = s[i];
      }return o;
    } }), oe.ready.promise = function (t) {
    return R || (R = oe.Deferred(), "complete" === X.readyState ? setTimeout(oe.ready) : (X.addEventListener("DOMContentLoaded", ue, !1), e.addEventListener("load", ue, !1))), R.promise(t);
  }, oe.each(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error"], function (e, t) {
    V["[object " + t + "]"] = t.toLowerCase();
  }), B = oe(X), function (e) {
    function t(e, t, n, a) {
      var o, s, d, r, l, i, p, c, m, h;if ((t ? t.ownerDocument || t : B) !== L && A(t), t = t || L, n = n || [], !e || "string" !== typeof e) return n;if (1 !== (r = t.nodeType) && 9 !== r) return [];if (q && !a) {
        if (o = xe.exec(e)) if (!(d = o[1])) {
          if (o[2]) return Z.apply(n, t.getElementsByTagName(e)), n;if ((d = o[3]) && C.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(d)), n;
        } else if (9 === r) {
          if (s = t.getElementById(d), !(s && s.parentNode)) return n;if (s.id === d) return n.push(s), n;
        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(d)) && W(t, s) && s.id === d) return n.push(s), n;if (C.qsa && (!O || !O.test(e))) {
          if (c = p = M, m = t, h = 9 === r && e, 1 === r && "object" !== t.nodeName.toLowerCase()) {
            for (i = u(e), (p = t.getAttribute("id")) ? c = p.replace(Te, "\\$&") : t.setAttribute("id", c), c = "[id='" + c + "'] ", l = i.length; l--;) {
              i[l] = c + f(i[l]);
            }m = ue.test(e) && t.parentNode || t, h = i.join(",");
          }if (h) try {
            return Z.apply(n, m.querySelectorAll(h)), n;
          } catch (e) {} finally {
            p || t.removeAttribute("id");
          }
        }
      }return T(e.replace(le, "$1"), t, n, a);
    }function n() {
      function e(n, a) {
        return t.push(n += " ") > k.cacheLength && delete e[t.shift()], e[n] = a;
      }var t = [];return e;
    }function a(e) {
      return e[M] = !0, e;
    }function o(e) {
      var t = L.createElement("div");try {
        return !!e(t);
      } catch (t) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function s(e, t) {
      for (var n = e.split("|"), a = e.length; a--;) {
        k.attrHandle[n[a]] = t;
      }
    }function d(e, t) {
      var n = t && e,
          a = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);if (a) return a;if (n) for (; n = n.nextSibling;) {
        if (n === t) return -1;
      }return e ? 1 : -1;
    }function r(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return "input" === n && t.type === e;
      };
    }function l(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
      };
    }function p(e) {
      return a(function (t) {
        return t = +t, a(function (n, a) {
          for (var o, s = e([], n.length, t), d = s.length; d--;) {
            n[o = s[d]] && (n[o] = !(a[o] = n[o]));
          }
        });
      });
    }function c() {}function u(e, n) {
      var a,
          o,
          i,
          s,
          d,
          r,
          l,
          p = z[e + " "];if (p) return n ? 0 : p.slice(0);for (d = e, r = [], l = k.preFilter; d;) {
        for (s in (!a || (o = pe.exec(d))) && (o && (d = d.slice(o[0].length) || d), r.push(i = [])), a = !1, (o = ce.exec(d)) && (a = o.shift(), i.push({ value: a, type: o[0].replace(le, " ") }), d = d.slice(a.length)), k.filter) {
          (o = ge[s].exec(d)) && (!l[s] || (o = l[s](o))) && (a = o.shift(), i.push({ value: a, type: s, matches: o }), d = d.slice(a.length));
        }if (!a) break;
      }return n ? d.length : d ? t.error(e) : z(e, r).slice(0);
    }function f(e) {
      for (var t = 0, n = e.length, a = ""; t < n; t++) {
        a += e[t].value;
      }return a;
    }function m(e, t, n) {
      var a = t.dir,
          o = n && "parentNode" === a,
          i = I++;return t.first ? function (t, n, i) {
        for (; t = t[a];) {
          if (1 === t.nodeType || o) return e(t, n, i);
        }
      } : function (t, n, s) {
        var d,
            r,
            l,
            p = R + " " + i;if (s) {
          for (; t = t[a];) {
            if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
          }
        } else for (; t = t[a];) {
          if (1 === t.nodeType || o) if (l = t[M] || (t[M] = {}), (r = l[a]) && r[0] === p) {
            if (!0 === (d = r[1]) || d === N) return !0 === d;
          } else if (r = l[a] = [p], r[1] = e(t, n, s) || N, !0 === r[1]) return !0;
        }
      };
    }function h(e) {
      return 1 < e.length ? function (t, n, a) {
        for (var o = e.length; o--;) {
          if (!e[o](t, n, a)) return !1;
        }return !0;
      } : e[0];
    }function g(e, t, n, a, o) {
      for (var s, d = [], r = 0, i = e.length; r < i; r++) {
        (s = e[r]) && (!n || n(s, a, o)) && (d.push(s), null != t && t.push(r));
      }return d;
    }function y(e, t, n, o, s, i) {
      return o && !o[M] && (o = y(o)), s && !s[M] && (s = y(s, i)), a(function (a, d, r, l) {
        var p,
            c,
            i,
            u = [],
            f = [],
            m = d.length,
            h = a || v(t || "*", r.nodeType ? [r] : r, []),
            y = e && (a || !t) ? g(h, u, e, r, l) : h,
            x = n ? s || (a ? e : m || o) ? [] : d : y;if (n && n(y, x, r, l), o) for (p = g(x, f), o(p, [], r, l), c = p.length; c--;) {
          (i = p[c]) && (x[f[c]] = !(y[f[c]] = i));
        }if (!a) x = g(x === d ? x.splice(m, x.length) : x), s ? s(null, d, x, l) : Z.apply(d, x);else if (s || e) {
          if (s) {
            for (p = [], c = x.length; c--;) {
              (i = x[c]) && p.push(y[c] = i);
            }s(null, x = [], p, l);
          }for (c = x.length; c--;) {
            (i = x[c]) && -1 < (p = s ? te.call(a, i) : u[c]) && (a[p] = !(d[p] = i));
          }
        }
      });
    }function x(e) {
      for (var t, n, a, o = e.length, s = k.relative[e[0].type], d = s || k.relative[" "], r = s ? 1 : 0, i = m(function (e) {
        return e === t;
      }, d, !0), l = m(function (e) {
        return -1 < te.call(t, e);
      }, d, !0), p = [function (e, n, a) {
        return !s && (a || n !== D) || ((t = n).nodeType ? i(e, n, a) : l(e, n, a));
      }]; r < o; r++) {
        if (n = k.relative[e[r].type]) p = [m(h(p), n)];else {
          if (n = k.filter[e[r].type].apply(null, e[r].matches), n[M]) {
            for (a = ++r; a < o && !k.relative[e[a].type]; a++) {}return y(1 < r && h(p), 1 < r && f(e.slice(0, r - 1).concat({ value: " " === e[r - 2].type ? "*" : "" })).replace(le, "$1"), n, r < a && x(e.slice(r, a)), a < o && x(e = e.slice(a)), a < o && f(e));
          }p.push(n);
        }
      }return h(p);
    }function b(e, n) {
      var o = 0,
          s = 0 < n.length,
          d = 0 < e.length,
          i = function i(a, r, l, p, c) {
        var u,
            f,
            m,
            h = [],
            y = 0,
            x = "0",
            i = a && [],
            b = null != c,
            v = D,
            T = a || d && k.find.TAG("*", c && r.parentNode || r),
            w = R += null == v ? 1 : Math.random() || 0.1;for (b && (D = r !== L && r, N = o); null != (u = T[x]); x++) {
          if (d && u) {
            for (f = 0; m = e[f++];) {
              if (m(u, r, l)) {
                p.push(u);break;
              }
            }b && (R = w, N = ++o);
          }s && ((u = !m && u) && y--, a && i.push(u));
        }if (y += x, s && x !== y) {
          for (f = 0; m = n[f++];) {
            m(i, h, r, l);
          }if (a) {
            if (0 < y) for (; x--;) {
              i[x] || h[x] || (h[x] = J.call(p));
            }h = g(h);
          }Z.apply(p, h), b && !a && 0 < h.length && 1 < y + n.length && t.uniqueSort(p);
        }return b && (R = w, D = v), i;
      };return s ? a(i) : i;
    }function v(e, n, a) {
      for (var o = 0, i = n.length; o < i; o++) {
        t(e, n[o], a);
      }return a;
    }function T(e, t, n, a) {
      var o,
          i,
          s,
          d,
          r,
          l = u(e);if (!a && 1 === l.length) {
        if (i = l[0] = l[0].slice(0), 2 < i.length && "ID" === (s = i[0]).type && C.getById && 9 === t.nodeType && q && k.relative[i[1].type]) {
          if (t = (k.find.ID(s.matches[0].replace(we, Ce), t) || [])[0], !t) return n;e = e.slice(i.shift().value.length);
        }for (o = ge.needsContext.test(e) ? 0 : i.length; o-- && (s = i[o], !k.relative[d = s.type]);) {
          if ((r = k.find[d]) && (a = r(s.matches[0].replace(we, Ce), ue.test(i[0].type) && t.parentNode || t))) {
            if (i.splice(o, 1), e = a.length && f(i), !e) return Z.apply(n, a), n;break;
          }
        }
      }return S(e, l)(a, t, !q, n, ue.test(e)), n;
    }var w,
        C,
        N,
        k,
        j,
        i,
        S,
        D,
        E,
        A,
        L,
        H,
        q,
        O,
        P,
        F,
        W,
        M = "sizzle" + -new Date(),
        B = e.document,
        R = 0,
        I = 0,
        _ = n(),
        z = n(),
        X = n(),
        $ = !1,
        U = function U(e, t) {
      return e === t ? ($ = !0, 0) : 0;
    },
        Y = "undefined",
        V = -2147483648,
        G = {}.hasOwnProperty,
        Q = [],
        J = Q.pop,
        K = Q.push,
        Z = Q.push,
        ee = Q.slice,
        te = Q.indexOf || function (e) {
      for (var t = 0, n = this.length; t < n; t++) {
        if (this[t] === e) return t;
      }return -1;
    },
        ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ae = "[\\x20\\t\\r\\n\\f]",
        ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        se = ie.replace("w", "w#"),
        de = "\\[" + ae + "*(" + ie + ")" + ae + "*(?:([*^$|!~]?=)" + ae + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + se + ")|)|)" + ae + "*\\]",
        re = ":(" + ie + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + de.replace(3, 8) + ")*)|.*)\\)|)",
        le = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        pe = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        ce = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
        ue = /[\x20\t\r\n\f]*[+~]/,
        fe = /=[\x20\t\r\n\f]*([^\]'"]*)[\x20\t\r\n\f]*\]/g,
        me = new RegExp(re),
        he = new RegExp("^" + se + "$"),
        ge = { ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/, CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/, TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"), ATTR: new RegExp("^" + de), PSEUDO: new RegExp("^" + re), CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i, bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i, needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i },
        ye = /^[^{]+\{\s*\[native \w/,
        xe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        be = /^(?:input|select|textarea|button)$/i,
        ve = /^h\d$/i,
        Te = /'|\\/g,
        we = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
        Ce = function Ce(e, t, n) {
      var a = String.fromCharCode,
          o = "0x" + t - 65536;return o !== o || n ? t : 0 > o ? a(o + 65536) : a(55296 | o >> 10, 56320 | 1023 & o);
    };try {
      Z.apply(Q = ee.call(B.childNodes), B.childNodes), Q[B.childNodes.length].nodeType;
    } catch (t) {
      Z = { apply: Q.length ? function (e, t) {
          K.apply(e, ee.call(t));
        } : function (e, t) {
          for (var n = e.length, a = 0; e[n++] = t[a++];) {}e.length = n - 1;
        } };
    }for (w in i = t.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, C = t.support = {}, A = t.setDocument = function (e) {
      var t = e ? e.ownerDocument || e : B,
          n = t.defaultView;return t !== L && 9 === t.nodeType && t.documentElement ? (L = t, H = t.documentElement, q = !i(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function () {
        A();
      }), C.attributes = o(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), C.getElementsByTagName = o(function (e) {
        return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length;
      }), C.getElementsByClassName = o(function (e) {
        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length;
      }), C.getById = o(function (e) {
        return H.appendChild(e).id = M, !t.getElementsByName || !t.getElementsByName(M).length;
      }), C.getById ? (k.find.ID = function (e, t) {
        if (babelHelpers["typeof"](t.getElementById) !== Y && q) {
          var n = t.getElementById(e);return n && n.parentNode ? [n] : [];
        }
      }, k.filter.ID = function (e) {
        var t = e.replace(we, Ce);return function (e) {
          return e.getAttribute("id") === t;
        };
      }) : (delete k.find.ID, k.filter.ID = function (e) {
        var t = e.replace(we, Ce);return function (e) {
          var n = babelHelpers["typeof"](e.getAttributeNode) !== Y && e.getAttributeNode("id");return n && n.value === t;
        };
      }), k.find.TAG = C.getElementsByTagName ? function (e, t) {
        if (babelHelpers["typeof"](t.getElementsByTagName) !== Y) return t.getElementsByTagName(e);
      } : function (e, t) {
        var n,
            a = [],
            o = 0,
            i = t.getElementsByTagName(e);if ("*" === e) {
          for (; n = i[o++];) {
            1 === n.nodeType && a.push(n);
          }return a;
        }return i;
      }, k.find.CLASS = C.getElementsByClassName && function (e, t) {
        if (babelHelpers["typeof"](t.getElementsByClassName) !== Y && q) return t.getElementsByClassName(e);
      }, P = [], O = [], (C.qsa = ye.test(t.querySelectorAll)) && (o(function (e) {
        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || O.push("\\[" + ae + "*(?:value|" + ne + ")"), e.querySelectorAll(":checked").length || O.push(":checked");
      }), o(function (e) {
        var n = t.createElement("input");n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && O.push("[*^$]=" + ae + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:");
      })), (C.matchesSelector = ye.test(F = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function (e) {
        C.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), P.push("!=", re);
      }), O = O.length && new RegExp(O.join("|")), P = P.length && new RegExp(P.join("|")), W = ye.test(H.contains) || H.compareDocumentPosition ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            a = t && t.parentNode;return e === a || !!(a && 1 === a.nodeType && (n.contains ? n.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) {
          if (t === e) return !0;
        }return !1;
      }, U = H.compareDocumentPosition ? function (e, n) {
        if (e === n) return $ = !0, 0;var a = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);return a ? 1 & a || !C.sortDetached && n.compareDocumentPosition(e) === a ? e === t || W(B, e) ? -1 : n === t || W(B, n) ? 1 : E ? te.call(E, e) - te.call(E, n) : 0 : 4 & a ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
      } : function (e, n) {
        var a,
            o = 0,
            i = e.parentNode,
            s = n.parentNode,
            r = [e],
            l = [n];if (e === n) return $ = !0, 0;if (!i || !s) return e === t ? -1 : n === t ? 1 : i ? -1 : s ? 1 : E ? te.call(E, e) - te.call(E, n) : 0;if (i === s) return d(e, n);for (a = e; a = a.parentNode;) {
          r.unshift(a);
        }for (a = n; a = a.parentNode;) {
          l.unshift(a);
        }for (; r[o] === l[o];) {
          o++;
        }return o ? d(r[o], l[o]) : r[o] === B ? -1 : l[o] === B ? 1 : 0;
      }, t) : L;
    }, t.matches = function (e, n) {
      return t(e, null, null, n);
    }, t.matchesSelector = function (e, n) {
      if ((e.ownerDocument || e) !== L && A(e), n = n.replace(fe, "='$1']"), C.matchesSelector && q && (!P || !P.test(n)) && (!O || !O.test(n))) try {
        var a = F.call(e, n);if (a || C.disconnectedMatch || e.document && 11 !== e.document.nodeType) return a;
      } catch (t) {}return 0 < t(n, L, null, [e]).length;
    }, t.contains = function (e, t) {
      return (e.ownerDocument || e) !== L && A(e), W(e, t);
    }, t.attr = function (e, t) {
      (e.ownerDocument || e) !== L && A(e);var n = k.attrHandle[t.toLowerCase()],
          a = n && G.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;return void 0 === a ? C.attributes || !q ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null : a;
    }, t.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, t.uniqueSort = function (e) {
      var t,
          n = [],
          a = 0,
          o = 0;if ($ = !C.detectDuplicates, E = !C.sortStable && e.slice(0), e.sort(U), $) {
        for (; t = e[o++];) {
          t === e[o] && (a = n.push(o));
        }for (; a--;) {
          e.splice(n[a], 1);
        }
      }return e;
    }, j = t.getText = function (e) {
      var t,
          n = "",
          a = 0,
          o = e.nodeType;if (!o) for (; t = e[a]; a++) {
        n += j(t);
      } else if (1 === o || 9 === o || 11 === o) {
        if ("string" === typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
          n += j(e);
        }
      } else if (3 === o || 4 === o) return e.nodeValue;return n;
    }, k = t.selectors = { cacheLength: 50, createPseudo: a, match: ge, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(we, Ce), e[3] = (e[4] || e[5] || "").replace(we, Ce), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (!e[3] && t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[5] && e[2];return ge.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && me.test(n) && (t = u(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(we, Ce).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = _[e + " "];return t || (t = new RegExp("(^|" + ae + ")" + e + "(" + ae + "|$)")) && _(e, function (e) {
            return t.test("string" === typeof e.className && e.className || babelHelpers["typeof"](e.getAttribute) !== Y && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, n, a) {
          return function (o) {
            var i = t.attr(o, e);return null == i ? "!=" === n : !n || (i += "", "=" === n ? i === a : "!=" === n ? i !== a : "^=" === n ? a && 0 === i.indexOf(a) : "*=" === n ? a && -1 < i.indexOf(a) : "$=" === n ? a && i.slice(-a.length) === a : "~=" === n ? -1 < (" " + i + " ").indexOf(a) : "|=" === n && (i === a || i.slice(0, a.length + 1) === a + "-"));
          };
        }, CHILD: function CHILD(e, t, n, a, o) {
          var i = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              d = "of-type" === t;return 1 === a && 0 === o ? function (e) {
            return !!e.parentNode;
          } : function (t, n, r) {
            var l,
                p,
                c,
                u,
                f,
                m,
                h = i === s ? "previousSibling" : "nextSibling",
                g = t.parentNode,
                y = d && t.nodeName.toLowerCase(),
                x = !r && !d;if (g) {
              if (i) {
                for (; h;) {
                  for (c = t; c = c[h];) {
                    if (d ? c.nodeName.toLowerCase() === y : 1 === c.nodeType) return !1;
                  }m = h = "only" === e && !m && "nextSibling";
                }return !0;
              }if (m = [s ? g.firstChild : g.lastChild], s && x) {
                for (p = g[M] || (g[M] = {}), l = p[e] || [], f = l[0] === R && l[1], u = l[0] === R && l[2], c = f && g.childNodes[f]; c = ++f && c && c[h] || (u = f = 0) || m.pop();) {
                  if (1 === c.nodeType && ++u && c === t) {
                    p[e] = [R, f, u];break;
                  }
                }
              } else if (x && (l = (t[M] || (t[M] = {}))[e]) && l[0] === R) u = l[1];else for (; (c = ++f && c && c[h] || (u = f = 0) || m.pop()) && !((d ? c.nodeName.toLowerCase() === y : 1 === c.nodeType) && ++u && (x && ((c[M] || (c[M] = {}))[e] = [R, u]), c === t));) {}return u -= o, u === a || 0 === u % a && 0 <= u / a;
            }
          };
        }, PSEUDO: function PSEUDO(e, n) {
          var o,
              s = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);return s[M] ? s(n) : 1 < s.length ? (o = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? a(function (e, t) {
            for (var a, o = s(e, n), d = o.length; d--;) {
              a = te.call(e, o[d]), e[a] = !(t[a] = o[d]);
            }
          }) : function (e) {
            return s(e, 0, o);
          }) : s;
        } }, pseudos: { not: a(function (e) {
          var t = [],
              n = [],
              o = S(e.replace(le, "$1"));return o[M] ? a(function (e, t, n, a) {
            for (var s, d = o(e, null, a, []), r = e.length; r--;) {
              (s = d[r]) && (e[r] = !(t[r] = s));
            }
          }) : function (e, a, i) {
            return t[0] = e, o(t, null, i, n), !n.pop();
          };
        }), has: a(function (e) {
          return function (n) {
            return 0 < t(e, n).length;
          };
        }), contains: a(function (e) {
          return function (t) {
            return -1 < (t.textContent || t.innerText || j(t)).indexOf(e);
          };
        }), lang: a(function (e) {
          return he.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Ce).toLowerCase(), function (t) {
            var n;do {
              if (n = q ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function root(e) {
          return e === H;
        }, focus: function focus(e) {
          return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: function enabled(e) {
          return !1 === e.disabled;
        }, disabled: function disabled(e) {
          return !0 === e.disabled;
        }, checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if ("@" < e.nodeName || 3 === e.nodeType || 4 === e.nodeType) return !1;
          }return !0;
        }, parent: function parent(e) {
          return !k.pseudos.empty(e);
        }, header: function header(e) {
          return ve.test(e.nodeName);
        }, input: function input(e) {
          return be.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function text(e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
        }, first: p(function () {
          return [0];
        }), last: p(function (e, t) {
          return [t - 1];
        }), eq: p(function (e, t, n) {
          return [0 > n ? n + t : n];
        }), even: p(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }return e;
        }), odd: p(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }return e;
        }), lt: p(function (e, t, n) {
          for (var a = 0 > n ? n + t : n; 0 <= --a;) {
            e.push(a);
          }return e;
        }), gt: p(function (e, t, n) {
          for (var a = 0 > n ? n + t : n; ++a < t;) {
            e.push(a);
          }return e;
        }) } }, k.pseudos.nth = k.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      k.pseudos[w] = r(w);
    }for (w in { submit: !0, reset: !0 }) {
      k.pseudos[w] = l(w);
    }c.prototype = k.filters = k.pseudos, k.setFilters = new c(), S = t.compile = function (e, t) {
      var n,
          a = [],
          o = [],
          i = X[e + " "];if (!i) {
        for (t || (t = u(e)), n = t.length; n--;) {
          i = x(t[n]), i[M] ? a.push(i) : o.push(i);
        }i = X(e, b(o, a));
      }return i;
    }, C.sortStable = M.split("").sort(U).join("") === M, C.detectDuplicates = $, A(), C.sortDetached = o(function (e) {
      return 1 & e.compareDocumentPosition(L.createElement("div"));
    }), o(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || s("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), C.attributes && o(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || s("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), o(function (e) {
      return null == e.getAttribute("disabled");
    }) || s(ne, function (e, t, n) {
      var a;if (!n) return (a = e.getAttributeNode(t)) && a.specified ? a.value : !0 === e[t] ? t.toLowerCase() : null;
    }), oe.find = t, oe.expr = t.selectors, oe.expr[":"] = oe.expr.pseudos, oe.unique = t.uniqueSort, oe.text = t.getText, oe.isXMLDoc = t.isXML, oe.contains = t.contains;
  }(e);var fe = {};oe.Callbacks = function (e) {
    e = "string" === typeof e ? fe[e] || n(e) : oe.extend({}, e);var t,
        a,
        o,
        i,
        s,
        d,
        r = [],
        l = !e.once && [],
        p = function n(p) {
      for (t = e.memory && p, a = !0, d = i || 0, i = 0, s = r.length, o = !0; r && d < s; d++) {
        if (!1 === r[d].apply(p[0], p[1]) && e.stopOnFalse) {
          t = !1;break;
        }
      }o = !1, r && (l ? l.length && n(l.shift()) : t ? r = [] : c.disable());
    },
        c = { add: function add() {
        if (r) {
          var n = r.length;(function t(n) {
            oe.each(n, function (n, a) {
              var o = oe.type(a);"function" === o ? (!e.unique || !c.has(a)) && r.push(a) : a && a.length && "string" !== o && t(a);
            });
          })(arguments), o ? s = r.length : t && (i = n, p(t));
        }return this;
      }, remove: function remove() {
        return r && oe.each(arguments, function (e, t) {
          for (var n; -1 < (n = oe.inArray(t, r, n));) {
            r.splice(n, 1), o && (n <= s && s--, n <= d && d--);
          }
        }), this;
      }, has: function has(e) {
        return e ? -1 < oe.inArray(e, r) : !!(r && r.length);
      }, empty: function empty() {
        return r = [], s = 0, this;
      }, disable: function disable() {
        return r = l = t = void 0, this;
      }, disabled: function disabled() {
        return !r;
      }, lock: function lock() {
        return l = void 0, t || c.disable(), this;
      }, locked: function locked() {
        return !l;
      }, fireWith: function fireWith(e, t) {
        return r && (!a || l) && (t = t || [], t = [e, t.slice ? t.slice() : t], o ? l.push(t) : p(t)), this;
      }, fire: function fire() {
        return c.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!a;
      } };return c;
  }, oe.extend({ Deferred: function Deferred(e) {
      var t = [["resolve", "done", oe.Callbacks("once memory"), "resolved"], ["reject", "fail", oe.Callbacks("once memory"), "rejected"], ["notify", "progress", oe.Callbacks("memory")]],
          n = "pending",
          a = { state: function state() {
          return n;
        }, always: function always() {
          return o.done(arguments).fail(arguments), this;
        }, then: function then() {
          var e = arguments;return oe.Deferred(function (n) {
            oe.each(t, function (t, i) {
              var s = i[0],
                  d = oe.isFunction(e[t]) && e[t];o[i[1]](function () {
                var e = d && d.apply(this, arguments);e && oe.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === a ? n.promise() : this, d ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, promise: function promise(e) {
          return null == e ? a : oe.extend(e, a);
        } },
          o = {};return a.pipe = a.then, oe.each(t, function (e, i) {
        var s = i[2],
            d = i[3];a[i[1]] = s.add, d && s.add(function () {
          n = d;
        }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function () {
          return o[i[0] + "With"](this === o ? a : this, arguments), this;
        }, o[i[0] + "With"] = s.fireWith;
      }), a.promise(o), e && e.call(o, o), o;
    }, when: function when(e) {
      var t,
          n,
          a,
          o = 0,
          i = Z.call(arguments),
          s = i.length,
          d = 1 !== s || e && oe.isFunction(e.promise) ? s : 0,
          r = 1 === d ? e : oe.Deferred(),
          l = function l(e, n, a) {
        return function (o) {
          n[e] = this, a[e] = 1 < arguments.length ? Z.call(arguments) : o, a === t ? r.notifyWith(n, a) : ! --d && r.resolveWith(n, a);
        };
      };if (1 < s) for (t = Array(s), n = Array(s), a = Array(s); o < s; o++) {
        i[o] && oe.isFunction(i[o].promise) ? i[o].promise().done(l(o, a, i)).fail(r.reject).progress(l(o, n, t)) : --d;
      }return d || r.resolveWith(a, i), r.promise();
    } }), oe.support = function (t) {
    var n = X.createElement("input"),
        a = X.createDocumentFragment(),
        o = X.createElement("div"),
        i = X.createElement("select"),
        s = i.appendChild(X.createElement("option"));return n.type ? (n.type = "checkbox", t.checkOn = "" !== n.value, t.optSelected = s.selected, t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, n.checked = !0, t.noCloneChecked = n.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !s.disabled, n = X.createElement("input"), n.value = "t", n.type = "radio", t.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), a.appendChild(n), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = "onfocusin" in e, o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === o.style.backgroundClip, oe(function () {
      var n,
          a,
          i = X.getElementsByTagName("body")[0];i && (n = X.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", i.appendChild(n).appendChild(o), o.innerHTML = "", o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", oe.swap(i, null == i.style.zoom ? {} : { zoom: 1 }, function () {
        t.boxSizing = 4 === o.offsetWidth;
      }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(o, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(o, null) || { width: "4px" }).width, a = o.appendChild(X.createElement("div")), a.style.cssText = o.style.cssText = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", a.style.marginRight = a.style.width = "0", o.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(a, null) || {}).marginRight)), i.removeChild(n));
    }), t) : t;
  }({});var me,
      he,
      ge = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
      ye = /([A-Z])/g;a.uid = 1, a.accepts = function (e) {
    return !e.nodeType || 1 === e.nodeType || 9 === e.nodeType;
  }, a.prototype = { key: function key(e) {
      if (!a.accepts(e)) return 0;var t = {},
          n = e[this.expando];if (!n) {
        n = a.uid++;try {
          t[this.expando] = { value: n }, Object.defineProperties(e, t);
        } catch (a) {
          t[this.expando] = n, oe.extend(e, t);
        }
      }return this.cache[n] || (this.cache[n] = {}), n;
    }, set: function set(e, t, n) {
      var a,
          o = this.key(e),
          i = this.cache[o];if ("string" === typeof t) i[t] = n;else if (oe.isEmptyObject(i)) oe.extend(this.cache[o], t);else for (a in t) {
        i[a] = t[a];
      }return i;
    }, get: function get(e, t) {
      var n = this.cache[this.key(e)];return t === void 0 ? n : n[t];
    }, access: function access(e, t, n) {
      var a;return void 0 === t || t && "string" === typeof t && void 0 === n ? (a = this.get(e, t), void 0 === a ? this.get(e, oe.camelCase(t)) : a) : (this.set(e, t, n), void 0 === n ? t : n);
    }, remove: function remove(e, t) {
      var n,
          a,
          o,
          i = this.key(e),
          s = this.cache[i];if (t === void 0) this.cache[i] = {};else for (oe.isArray(t) ? a = t.concat(t.map(oe.camelCase)) : (o = oe.camelCase(t), (t in s) ? a = [t, o] : (a = o, a = (a in s) ? [a] : a.match(se) || [])), n = a.length; n--;) {
        delete s[a[n]];
      }
    }, hasData: function hasData(e) {
      return !oe.isEmptyObject(this.cache[e[this.expando]] || {});
    }, discard: function discard(e) {
      e[this.expando] && delete this.cache[e[this.expando]];
    } }, me = new a(), he = new a(), oe.extend({ acceptData: a.accepts, hasData: function hasData(e) {
      return me.hasData(e) || he.hasData(e);
    }, data: function data(e, t, n) {
      return me.access(e, t, n);
    }, removeData: function removeData(e, t) {
      me.remove(e, t);
    }, _data: function _data(e, t, n) {
      return he.access(e, t, n);
    }, _removeData: function _removeData(e, t) {
      he.remove(e, t);
    } }), oe.fn.extend({ data: function data(e, t) {
      var n,
          a,
          s = this[0],
          d = 0,
          i = null;if (e === void 0) {
        if (this.length && (i = me.get(s), 1 === s.nodeType && !he.get(s, "hasDataAttrs"))) {
          for (n = s.attributes; d < n.length; d++) {
            a = n[d].name, 0 === a.indexOf("data-") && (a = oe.camelCase(a.slice(5)), o(s, a, i[a]));
          }he.set(s, "hasDataAttrs", !0);
        }return i;
      }return "object" === ("undefined" === typeof e ? "undefined" : babelHelpers["typeof"](e)) ? this.each(function () {
        me.set(this, e);
      }) : oe.access(this, function (t) {
        var n,
            a = oe.camelCase(e);return s && void 0 === t ? (n = me.get(s, e), void 0 !== n) ? n : (n = me.get(s, a), void 0 !== n) ? n : (n = o(s, a, void 0), void 0 === n ? void 0 : n) : void this.each(function () {
          var n = me.get(this, a);me.set(this, a, t), -1 !== e.indexOf("-") && void 0 !== n && me.set(this, e, t);
        });
      }, null, t, 1 < arguments.length, null, !0);
    }, removeData: function removeData(e) {
      return this.each(function () {
        me.remove(this, e);
      });
    } }), oe.extend({ queue: function queue(e, t, n) {
      var a;if (e) return t = (t || "fx") + "queue", a = he.get(e, t), n && (!a || oe.isArray(n) ? a = he.access(e, t, oe.makeArray(n)) : a.push(n)), a || [];
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = oe.queue(e, t),
          a = n.length,
          o = n.shift(),
          i = oe._queueHooks(e, t);"inprogress" === o && (o = n.shift(), a--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, function () {
        oe.dequeue(e, t);
      }, i)), !a && i && i.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return he.get(e, n) || he.access(e, n, { empty: oe.Callbacks("once memory").add(function () {
          he.remove(e, [t + "queue", n]);
        }) });
    } }), oe.fn.extend({ queue: function queue(e, t) {
      var n = 2;return "string" !== typeof e && (t = e, e = "fx", n--), arguments.length < n ? oe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = oe.queue(this, e, t);oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        oe.dequeue(this, e);
      });
    }, delay: function delay(e, t) {
      return e = oe.fx ? oe.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
        var a = setTimeout(t, e);n.stop = function () {
          clearTimeout(a);
        };
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, t) {
      var n,
          a = 1,
          o = oe.Deferred(),
          s = this,
          d = this.length,
          i = function i() {
        --a || o.resolveWith(s, [s]);
      };for ("string" !== typeof e && (t = e, e = void 0), e = e || "fx"; d--;) {
        n = he.get(s[d], e + "queueHooks"), n && n.empty && (a++, n.empty.add(i));
      }return i(), o.promise(t);
    } });var xe,
      be,
      ve = /[\t\r\n\f]/g,
      Te = /\r/g,
      we = /^(?:input|select|textarea|button)$/i;oe.fn.extend({ attr: function attr(e, t) {
      return oe.access(this, oe.attr, e, t, 1 < arguments.length);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        oe.removeAttr(this, e);
      });
    }, prop: function prop(e, t) {
      return oe.access(this, oe.prop, e, t, 1 < arguments.length);
    }, removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[oe.propFix[e] || e];
      });
    }, addClass: function addClass(e) {
      var t,
          n,
          a,
          o,
          s,
          d = 0,
          i = this.length;if (oe.isFunction(e)) return this.each(function (t) {
        oe(this).addClass(e.call(this, t, this.className));
      });if ("string" === typeof e && e) for (t = (e || "").match(se) || []; d < i; d++) {
        if (n = this[d], a = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ve, " ") : " "), a) {
          for (s = 0; o = t[s++];) {
            0 > a.indexOf(" " + o + " ") && (a += o + " ");
          }n.className = oe.trim(a);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          a,
          o,
          s,
          d = 0,
          i = this.length,
          r = 0 === arguments.length || "string" === typeof e && e;if (oe.isFunction(e)) return this.each(function (t) {
        oe(this).removeClass(e.call(this, t, this.className));
      });if (r) for (t = (e || "").match(se) || []; d < i; d++) {
        if (n = this[d], a = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ve, " ") : ""), a) {
          for (s = 0; o = t[s++];) {
            for (; 0 <= a.indexOf(" " + o + " ");) {
              a = a.replace(" " + o + " ", " ");
            }
          }n.className = e ? oe.trim(a) : "";
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = "undefined" === typeof e ? "undefined" : babelHelpers["typeof"](e);return "boolean" === typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : oe.isFunction(e) ? this.each(function (n) {
        oe(this).toggleClass(e.call(this, n, this.className, t), t);
      }) : this.each(function () {
        if ("string" === n) for (var t, a = 0, o = oe(this), i = e.match(se) || []; t = i[a++];) {
          o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
        } else (n === _ || "boolean" === n) && (this.className && he.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : he.get(this, "__className__") || "");
      });
    }, hasClass: function hasClass(e) {
      for (var t = 0, n = this.length; t < n; t++) {
        if (1 === this[t].nodeType && 0 <= (" " + this[t].className + " ").replace(ve, " ").indexOf(" " + e + " ")) return !0;
      }return !1;
    }, val: function val(e) {
      var t,
          n,
          a,
          o = this[0];return arguments.length ? (a = oe.isFunction(e), this.each(function (n) {
        var o;1 !== this.nodeType || (o = a ? e.call(this, n, oe(this).val()) : e, null == o ? o = "" : "number" === typeof o ? o += "" : oe.isArray(o) && (o = oe.map(o, function (e) {
          return null == e ? "" : e + "";
        })), t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()], (!t || !("set" in t) || void 0 === t.set(this, o, "value")) && (this.value = o));
      })) : o ? (t = oe.valHooks[o.type] || oe.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value"))) ? n : (n = o.value, "string" === typeof n ? n.replace(Te, "") : null == n ? "" : n) : void 0;
    } }), oe.extend({ valHooks: { option: { get: function get(e) {
          var t = e.attributes.value;return !t || t.specified ? e.value : e.text;
        } }, select: { get: function get(e) {
          for (var t, n, a = e.options, o = e.selectedIndex, s = "select-one" === e.type || 0 > o, d = s ? null : [], r = s ? o + 1 : a.length, l = 0 > o ? r : s ? o : 0; l < r; l++) {
            if (n = a[l], (n.selected || l === o) && (oe.support.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup"))) {
              if (t = oe(n).val(), s) return t;d.push(t);
            }
          }return d;
        }, set: function set(e, t) {
          for (var n, a, o = e.options, s = oe.makeArray(t), d = o.length; d--;) {
            a = o[d], (a.selected = 0 <= oe.inArray(oe(a).val(), s)) && (n = !0);
          }return n || (e.selectedIndex = -1), s;
        } } }, attr: function attr(e, t, n) {
      var a,
          o,
          i = e.nodeType;if (e && 3 !== i && 8 !== i && 2 !== i) {
        if (babelHelpers["typeof"](e.getAttribute) === _) return oe.prop(e, t, n);if (1 === i && oe.isXMLDoc(e) || (t = t.toLowerCase(), a = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? be : xe)), void 0 === n) return a && "get" in a && null !== (o = a.get(e, t)) ? o : (o = oe.find.attr(e, t), null == o ? void 0 : o);if (null === n) oe.removeAttr(e, t);else return a && "set" in a && void 0 !== (o = a.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n);
      }
    }, removeAttr: function removeAttr(e, t) {
      var n,
          a,
          o = 0,
          i = t && t.match(se);if (i && 1 === e.nodeType) for (; n = i[o++];) {
        a = oe.propFix[n] || n, oe.expr.match.bool.test(n) && (e[a] = !1), e.removeAttribute(n);
      }
    }, attrHooks: { type: { set: function set(e, t) {
          if (!oe.support.radioValue && "radio" === t && oe.nodeName(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(e, t, n) {
      var a,
          o,
          i,
          s = e.nodeType;if (e && 3 !== s && 8 !== s && 2 !== s) return i = 1 !== s || !oe.isXMLDoc(e), i && (t = oe.propFix[t] || t, o = oe.propHooks[t]), void 0 === n ? o && "get" in o && null !== (a = o.get(e, t)) ? a : e[t] : o && "set" in o && void 0 !== (a = o.set(e, n, t)) ? a : e[t] = n;
    }, propHooks: { tabIndex: { get: function get(e) {
          return e.hasAttribute("tabindex") || we.test(e.nodeName) || e.href ? e.tabIndex : -1;
        } } } }), be = { set: function set(e, t, n) {
      return !1 === t ? oe.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, oe.each(oe.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = oe.expr.attrHandle[t] || oe.find.attr;oe.expr.attrHandle[t] = function (e, t, a) {
      var o = oe.expr.attrHandle[t],
          i = a ? void 0 : (oe.expr.attrHandle[t] = void 0) == n(e, t, a) ? null : t.toLowerCase();return oe.expr.attrHandle[t] = o, i;
    };
  }), oe.support.optSelected || (oe.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    } }), oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    oe.propFix[this.toLowerCase()] = this;
  }), oe.each(["radio", "checkbox"], function () {
    oe.valHooks[this] = { set: function set(e, t) {
        if (oe.isArray(t)) return e.checked = 0 <= oe.inArray(oe(e).val(), t);
      } }, oe.support.checkOn || (oe.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });var Ce = /^key/,
      Ne = /^(?:mouse|contextmenu)|click/,
      ke = /^(?:focusinfocus|focusoutblur)$/,
      je = /^([^.]*)(?:\.(.+)|)$/;oe.event = { global: {}, add: function add(e, n, a, o, i) {
      var s,
          d,
          r,
          l,
          p,
          t,
          c,
          u,
          f,
          m,
          h,
          g = he.get(e);if (g) {
        for (a.handler && (s = a, a = s.handler, i = s.selector), a.guid || (a.guid = oe.guid++), (l = g.events) || (l = g.events = {}), (d = g.handle) || (d = g.handle = function (t) {
          return ("undefined" === typeof oe ? "undefined" : babelHelpers["typeof"](oe)) === _ || t && oe.event.triggered === t.type ? void 0 : oe.event.dispatch.apply(d.elem, arguments);
        }, d.elem = e), n = (n || "").match(se) || [""], p = n.length; p--;) {
          (r = je.exec(n[p]) || [], f = h = r[1], m = (r[2] || "").split(".").sort(), !!f) && (c = oe.event.special[f] || {}, f = (i ? c.delegateType : c.bindType) || f, c = oe.event.special[f] || {}, t = oe.extend({ type: f, origType: h, data: o, handler: a, guid: a.guid, selector: i, needsContext: i && oe.expr.match.needsContext.test(i), namespace: m.join(".") }, s), (u = l[f]) || (u = l[f] = [], u.delegateCount = 0, (!c.setup || !1 === c.setup.call(e, o, m, d)) && e.addEventListener && e.addEventListener(f, d, !1)), c.add && (c.add.call(e, t), !t.handler.guid && (t.handler.guid = a.guid)), i ? u.splice(u.delegateCount++, 0, t) : u.push(t), oe.event.global[f] = !0);
        }e = null;
      }
    }, remove: function remove(e, n, a, o, i) {
      var s,
          d,
          r,
          l,
          p,
          t,
          c,
          u,
          f,
          m,
          h,
          g = he.hasData(e) && he.get(e);if (g && (l = g.events)) {
        for (n = (n || "").match(se) || [""], p = n.length; p--;) {
          if (r = je.exec(n[p]) || [], f = h = r[1], m = (r[2] || "").split(".").sort(), !f) {
            for (f in l) {
              oe.event.remove(e, f + n[p], a, o, !0);
            }continue;
          }for (c = oe.event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, u = l[f] || [], r = r[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), d = s = u.length; s--;) {
            t = u[s], (i || h === t.origType) && (!a || a.guid === t.guid) && (!r || r.test(t.namespace)) && (!o || o === t.selector || "**" === o && t.selector) && (u.splice(s, 1), t.selector && u.delegateCount--, c.remove && c.remove.call(e, t));
          }d && !u.length && ((!c.teardown || !1 === c.teardown.call(e, m, g.handle)) && oe.removeEvent(e, f, g.handle), delete l[f]);
        }oe.isEmptyObject(l) && (delete g.handle, he.remove(e, "events"));
      }
    }, trigger: function trigger(t, n, a, o) {
      var s,
          i,
          d,
          r,
          l,
          p,
          c,
          u = [a || X],
          f = ne.call(t, "type") ? t.type : t,
          m = ne.call(t, "namespace") ? t.namespace.split(".") : [];if ((i = d = a = a || X, 3 !== a.nodeType && 8 !== a.nodeType) && !ke.test(f + oe.event.triggered) && (0 <= f.indexOf(".") && (m = f.split("."), f = m.shift(), m.sort()), l = 0 > f.indexOf(":") && "on" + f, t = t[oe.expando] ? t : new oe.Event(f, "object" === ("undefined" === typeof t ? "undefined" : babelHelpers["typeof"](t)) && t), t.isTrigger = o ? 2 : 3, t.namespace = m.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = a), n = null == n ? [t] : oe.makeArray(n, [t]), c = oe.event.special[f] || {}, o || !c.trigger || !1 !== c.trigger.apply(a, n))) {
        if (!o && !c.noBubble && !oe.isWindow(a)) {
          for (r = c.delegateType || f, ke.test(r + f) || (i = i.parentNode); i; i = i.parentNode) {
            u.push(i), d = i;
          }d === (a.ownerDocument || X) && u.push(d.defaultView || d.parentWindow || e);
        }for (s = 0; (i = u[s++]) && !t.isPropagationStopped();) {
          t.type = 1 < s ? r : c.bindType || f, p = (he.get(i, "events") || {})[t.type] && he.get(i, "handle"), p && p.apply(i, n), p = l && i[l], p && oe.acceptData(i) && p.apply && !1 === p.apply(i, n) && t.preventDefault();
        }return t.type = f, o || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(u.pop(), n) || !oe.acceptData(a) || !l || !oe.isFunction(a[f]) || oe.isWindow(a) || (d = a[l], d && (a[l] = null), oe.event.triggered = f, a[f](), oe.event.triggered = void 0, d && (a[l] = d)), t.result;
      }
    }, dispatch: function dispatch(e) {
      e = oe.event.fix(e);var t,
          n,
          a,
          o,
          i,
          s = [],
          d = Z.call(arguments),
          r = (he.get(this, "events") || {})[e.type] || [],
          l = oe.event.special[e.type] || {};if (d[0] = e, e.delegateTarget = this, !(l.preDispatch && !1 === l.preDispatch.call(this, e))) {
        for (s = oe.event.handlers.call(this, e, r), t = 0; (o = s[t++]) && !e.isPropagationStopped();) {
          for (e.currentTarget = o.elem, n = 0; (i = o.handlers[n++]) && !e.isImmediatePropagationStopped();) {
            (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, a = ((oe.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, d), void 0 !== a && !1 === (e.result = a) && (e.preventDefault(), e.stopPropagation()));
          }
        }return l.postDispatch && l.postDispatch.call(this, e), e.result;
      }
    }, handlers: function handlers(e, t) {
      var n,
          a,
          o,
          i,
          s = [],
          d = t.delegateCount,
          r = e.target;if (d && r.nodeType && (!e.button || "click" !== e.type)) for (; r !== this; r = r.parentNode || this) {
        if (!0 !== r.disabled || "click" !== e.type) {
          for (a = [], n = 0; n < d; n++) {
            i = t[n], o = i.selector + " ", void 0 === a[o] && (a[o] = i.needsContext ? 0 <= oe(o, this).index(r) : oe.find(o, this, null, [r]).length), a[o] && a.push(i);
          }a.length && s.push({ elem: r, handlers: a });
        }
      }return d < t.length && s.push({ elem: this, handlers: t.slice(d) }), s;
    }, props: ["altKey", "bubbles", "cancelable", "ctrlKey", "currentTarget", "eventPhase", "metaKey", "relatedTarget", "shiftKey", "target", "timeStamp", "view", "which"], fixHooks: {}, keyHooks: { props: ["char", "charCode", "key", "keyCode"], filter: function filter(e, t) {
        return null == e.which && (e.which = null == t.charCode ? t.keyCode : t.charCode), e;
      } }, mouseHooks: { props: ["button", "buttons", "clientX", "clientY", "offsetX", "offsetY", "pageX", "pageY", "screenX", "screenY", "toElement"], filter: function filter(e, t) {
        var n,
            a,
            o,
            i = t.button;return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || X, a = n.documentElement, o = n.body, e.pageX = t.clientX + (a && a.scrollLeft || o && o.scrollLeft || 0) - (a && a.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (a && a.scrollTop || o && o.scrollTop || 0) - (a && a.clientTop || o && o.clientTop || 0)), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e;
      } }, fix: function fix(e) {
      if (e[oe.expando]) return e;var t,
          n,
          a,
          o = e.type,
          i = e,
          s = this.fixHooks[o];for (s || (this.fixHooks[o] = s = Ne.test(o) ? this.mouseHooks : Ce.test(o) ? this.keyHooks : {}), a = s.props ? this.props.concat(s.props) : this.props, e = new oe.Event(i), t = a.length; t--;) {
        n = a[t], e[n] = i[n];
      }return e.target || (e.target = X), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, i) : e;
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== d() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === d() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && oe.nodeName(this, "input")) return this.click(), !1;
        }, _default: function _default(e) {
          return oe.nodeName(e.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          e.result !== void 0 && (e.originalEvent.returnValue = e.result);
        } } }, simulate: function simulate(t, n, a, o) {
      var i = oe.extend(new oe.Event(), a, { type: t, isSimulated: !0, originalEvent: {} });o ? oe.event.trigger(i, null, n) : oe.event.dispatch.call(n, i), i.isDefaultPrevented() && a.preventDefault();
    } }, oe.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  }, oe.Event = function (e, t) {
    return this instanceof oe.Event ? void (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? i : s) : this.type = e, t && oe.extend(this, t), this.timeStamp = e && e.timeStamp || oe.now(), this[oe.expando] = !0) : new oe.Event(e, t);
  }, oe.Event.prototype = { isDefaultPrevented: s, isPropagationStopped: s, isImmediatePropagationStopped: s, preventDefault: function preventDefault() {
      var t = this.originalEvent;this.isDefaultPrevented = i, t && t.preventDefault && t.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var t = this.originalEvent;this.isPropagationStopped = i, t && t.stopPropagation && t.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      this.isImmediatePropagationStopped = i, this.stopPropagation();
    } }, oe.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (e, t) {
    oe.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            a = this,
            o = e.relatedTarget,
            i = e.handleObj;return o && (o === a || oe.contains(a, o)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n;
      } };
  }), oe.support.focusinBubbles || oe.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = 0,
        a = function a(e) {
      oe.event.simulate(t, e.target, oe.event.fix(e), !0);
    };oe.event.special[t] = { setup: function setup() {
        0 === n++ && X.addEventListener(e, a, !0);
      }, teardown: function teardown() {
        0 === --n && X.removeEventListener(e, a, !0);
      } };
  }), oe.fn.extend({ on: function on(e, t, n, a, o) {
      var i, d;if ("object" === ("undefined" === typeof e ? "undefined" : babelHelpers["typeof"](e))) {
        for (d in "string" !== typeof t && (n = n || t, t = void 0), e) {
          this.on(d, t, n, e[d], o);
        }return this;
      }if (null == n && null == a ? (a = t, n = t = void 0) : null == a && ("string" === typeof t ? (a = n, n = void 0) : (a = n, n = t, t = void 0)), !1 === a) a = s;else if (!a) return this;return 1 === o && (i = a, a = function a(e) {
        return oe().off(e), i.apply(this, arguments);
      }, a.guid = i.guid || (i.guid = oe.guid++)), this.each(function () {
        oe.event.add(this, e, a, n, t);
      });
    }, one: function one(e, t, n, a) {
      return this.on(e, t, n, a, 1);
    }, off: function off(e, t, n) {
      var a, o;if (e && e.preventDefault && e.handleObj) return a = e.handleObj, oe(e.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), this;if ("object" === ("undefined" === typeof e ? "undefined" : babelHelpers["typeof"](e))) {
        for (o in e) {
          this.off(o, t, e[o]);
        }return this;
      }return (!1 === t || "function" === typeof t) && (n = t, t = void 0), !1 === n && (n = s), this.each(function () {
        oe.event.remove(this, e, n, t);
      });
    }, trigger: function trigger(e, t) {
      return this.each(function () {
        oe.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      var n = this[0];if (n) return oe.event.trigger(e, t, n, !0);
    } });var Se = /^.[^:#\[\.,]*$/,
      De = /^(?:parents|prev(?:Until|All))/,
      Ee = oe.expr.match.needsContext,
      Ae = { children: !0, contents: !0, next: !0, prev: !0 };oe.fn.extend({ find: function find(e) {
      var t,
          n = [],
          a = this,
          o = a.length;if ("string" !== typeof e) return this.pushStack(oe(e).filter(function () {
        for (t = 0; t < o; t++) {
          if (oe.contains(a[t], this)) return !0;
        }
      }));for (t = 0; t < o; t++) {
        oe.find(e, a[t], n);
      }return n = this.pushStack(1 < o ? oe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n;
    }, has: function has(e) {
      var t = oe(e, this),
          n = t.length;return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (oe.contains(this, t[e])) return !0;
        }
      });
    }, not: function not(e) {
      return this.pushStack(l(this, e || [], !0));
    }, filter: function filter(e) {
      return this.pushStack(l(this, e || [], !1));
    }, is: function is(e) {
      return !!l(this, "string" === typeof e && Ee.test(e) ? oe(e) : e || [], !1).length;
    }, closest: function closest(e, t) {
      for (var n, a = 0, o = this.length, i = [], s = Ee.test(e) || "string" !== typeof e ? oe(e, t || this.context) : 0; a < o; a++) {
        for (n = this[a]; n && n !== t; n = n.parentNode) {
          if (11 > n.nodeType && (s ? -1 < s.index(n) : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
            n = i.push(n);break;
          }
        }
      }return this.pushStack(1 < i.length ? oe.unique(i) : i);
    }, index: function index(e) {
      return e ? "string" === typeof e ? ee.call(oe(e), this[0]) : ee.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      var n = "string" === typeof e ? oe(e, t) : oe.makeArray(e && e.nodeType ? [e] : e),
          a = oe.merge(this.get(), n);return this.pushStack(oe.unique(a));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } }), oe.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return oe.dir(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return oe.dir(e, "parentNode", n);
    }, next: function next(e) {
      return r(e, "nextSibling");
    }, prev: function prev(e) {
      return r(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return oe.dir(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return oe.dir(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return oe.dir(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return oe.dir(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return oe.sibling((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return oe.sibling(e.firstChild);
    }, contents: function contents(e) {
      return e.contentDocument || oe.merge([], e.childNodes);
    } }, function (e, t) {
    oe.fn[e] = function (n, a) {
      var o = oe.map(this, t, n);return "Until" !== e.slice(-5) && (a = n), a && "string" === typeof a && (o = oe.filter(a, o)), 1 < this.length && (!Ae[e] && oe.unique(o), De.test(e) && o.reverse()), this.pushStack(o);
    };
  }), oe.extend({ filter: function filter(e, t, n) {
      var a = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === a.nodeType ? oe.find.matchesSelector(a, e) ? [a] : [] : oe.find.matches(e, oe.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    }, dir: function dir(e, t, n) {
      for (var a = []; (e = e[t]) && 9 !== e.nodeType;) {
        if (1 === e.nodeType) {
          if (void 0 !== n && oe(e).is(n)) break;a.push(e);
        }
      }return a;
    }, sibling: function sibling(e, t) {
      for (var n = []; e; e = e.nextSibling) {
        1 === e.nodeType && e !== t && n.push(e);
      }return n;
    } });var Le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      He = /<([\w:]+)/,
      qe = /<|&#?\w+;/,
      Oe = /<(?:script|style|link)/i,
      Pe = /^(?:checkbox|radio)$/i,
      Fe = /checked\s*(?:[^=]|=\s*.checked.)/i,
      We = /^$|\/(?:java|ecma)script/i,
      Me = /^true\/(.*)/,
      Be = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Re = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };Re.optgroup = Re.option, Re.tbody = Re.tfoot = Re.colgroup = Re.caption = Re.thead, Re.th = Re.td, oe.fn.extend({ text: function text(e) {
      return oe.access(this, function (e) {
        return e === void 0 ? oe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || X).createTextNode(e));
      }, null, e, arguments.length);
    }, append: function append() {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = p(this, e);t.appendChild(e);
        }
      });
    }, prepend: function prepend() {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = p(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, remove: function remove(e, t) {
      for (var n, a = e ? oe.filter(e, this) : this, o = 0; null != (n = a[o]); o++) {
        t || 1 !== n.nodeType || oe.cleanData(h(n)), n.parentNode && (t && oe.contains(n.ownerDocument, n) && f(h(n, "script")), n.parentNode.removeChild(n));
      }return this;
    }, empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (oe.cleanData(h(e, !1)), e.textContent = "");
      }return this;
    }, clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return oe.clone(this, e, t);
      });
    }, html: function html(e) {
      return oe.access(this, function (e) {
        var t = this[0] || {},
            n = 0,
            a = this.length;if (e === void 0 && 1 === t.nodeType) return t.innerHTML;if ("string" === typeof e && !Oe.test(e) && !Re[(He.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = e.replace(Le, "<$1></$2>");try {
            for (; n < a; n++) {
              t = this[n] || {}, 1 === t.nodeType && (oe.cleanData(h(t, !1)), t.innerHTML = e);
            }t = 0;
          } catch (t) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = oe.map(this, function (e) {
        return [e.nextSibling, e.parentNode];
      }),
          t = 0;return this.domManip(arguments, function (n) {
        var a = e[t++],
            o = e[t++];o && (a && a.parentNode !== o && (a = this.nextSibling), oe(this).remove(), o.insertBefore(n, a));
      }, !0), t ? this : this.remove();
    }, detach: function detach(e) {
      return this.remove(e, !0);
    }, domManip: function domManip(e, t, n) {
      e = J.apply([], e);var a,
          o,
          s,
          d,
          r,
          p,
          f = 0,
          i = this.length,
          l = this,
          m = e[0],
          g = oe.isFunction(m);if (g || !(1 >= i || "string" !== typeof m || oe.support.checkClone || !Fe.test(m))) return this.each(function (a) {
        var o = l.eq(a);g && (e[0] = m.call(this, a, o.html())), o.domManip(e, t, n);
      });if (i && (a = oe.buildFragment(e, this[0].ownerDocument, !1, !n && this), o = a.firstChild, 1 === a.childNodes.length && (a = o), o)) {
        for (s = oe.map(h(a, "script"), c), d = s.length; f < i; f++) {
          r = a, f !== i - 1 && (r = oe.clone(r, !0, !0), d && oe.merge(s, h(r, "script"))), t.call(this[f], r, f);
        }if (d) for (p = s[s.length - 1].ownerDocument, oe.map(s, u), f = 0; f < d; f++) {
          r = s[f], We.test(r.type || "") && !he.access(r, "globalEval") && oe.contains(p, r) && (r.src ? oe._evalUrl(r.src) : oe.globalEval(r.textContent.replace(Be, "")));
        }
      }return this;
    } }), oe.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    oe.fn[e] = function (e) {
      for (var n, a = [], o = oe(e), s = o.length - 1, d = 0; d <= s; d++) {
        n = d === s ? this : this.clone(!0), oe(o[d])[t](n), K.apply(a, n.get());
      }return this.pushStack(a);
    };
  }), oe.extend({ clone: function clone(e, t, n) {
      var a,
          o,
          i,
          s,
          d = e.cloneNode(!0),
          r = oe.contains(e.ownerDocument, e);if (!oe.support.noCloneChecked && (1 === e.nodeType || 11 === e.nodeType) && !oe.isXMLDoc(e)) for (s = h(d), i = h(e), (a = 0, o = i.length); a < o; a++) {
        g(i[a], s[a]);
      }if (t) if (n) for (i = i || h(e), s = s || h(d), (a = 0, o = i.length); a < o; a++) {
        m(i[a], s[a]);
      } else m(e, d);return s = h(d, "script"), 0 < s.length && f(s, !r && h(e, "script")), d;
    }, buildFragment: function buildFragment(e, t, n, a) {
      for (var o, s, d, r, p, c, u = 0, i = e.length, l = t.createDocumentFragment(), m = []; u < i; u++) {
        if (o = e[u], o || 0 === o) if ("object" === oe.type(o)) oe.merge(m, o.nodeType ? [o] : o);else if (!qe.test(o)) m.push(t.createTextNode(o));else {
          for (s = s || l.appendChild(t.createElement("div")), d = (He.exec(o) || ["", ""])[1].toLowerCase(), r = Re[d] || Re._default, s.innerHTML = r[1] + o.replace(Le, "<$1></$2>") + r[2], c = r[0]; c--;) {
            s = s.lastChild;
          }oe.merge(m, s.childNodes), s = l.firstChild, s.textContent = "";
        }
      }for (l.textContent = "", u = 0; o = m[u++];) {
        if (!(a && -1 !== oe.inArray(o, a)) && (p = oe.contains(o.ownerDocument, o), s = h(l.appendChild(o), "script"), p && f(s), n)) for (c = 0; o = s[c++];) {
          We.test(o.type || "") && n.push(o);
        }
      }return l;
    }, cleanData: function cleanData(e) {
      for (var t, n, o, s, d, r, l = oe.event.special, p = 0; (n = e[p]) !== void 0; p++) {
        if (a.accepts(n) && (d = n[he.expando], d && (t = he.cache[d]))) {
          if (o = Object.keys(t.events || {}), o.length) for (r = 0; void 0 !== (s = o[r]); r++) {
            l[s] ? oe.event.remove(n, s) : oe.removeEvent(n, s, t.handle);
          }he.cache[d] && delete he.cache[d];
        }delete me.cache[n[me.expando]];
      }
    }, _evalUrl: function _evalUrl(e) {
      return oe.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
    } }), oe.fn.extend({ wrapAll: function wrapAll(e) {
      var t;return oe.isFunction(e) ? this.each(function (t) {
        oe(this).wrapAll(e.call(this, t));
      }) : (this[0] && (t = oe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) {
          e = e.firstElementChild;
        }return e;
      }).append(this)), this);
    }, wrapInner: function wrapInner(e) {
      return oe.isFunction(e) ? this.each(function (t) {
        oe(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = oe(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = oe.isFunction(e);return this.each(function (n) {
        oe(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap() {
      return this.parent().each(function () {
        oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes);
      }).end();
    } });var Ie,
      _e,
      ze = /^(none|table(?!-c[ea]).+)/,
      Xe = /^margin/,
      $e = new RegExp("^(" + ie + ")(.*)$", "i"),
      Ue = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
      Ye = new RegExp("^([+-])=(" + ie + ")", "i"),
      Ve = { BODY: "block" },
      Ge = { position: "absolute", visibility: "hidden", display: "block" },
      Qe = { letterSpacing: 0, fontWeight: 400 },
      Je = ["Top", "Right", "Bottom", "Left"],
      Ke = ["Webkit", "O", "Moz", "ms"];oe.fn.extend({ css: function css(e, t) {
      return oe.access(this, function (e, t, n) {
        var a,
            o,
            s = {},
            d = 0;if (oe.isArray(t)) {
          for (a = b(e), o = t.length; d < o; d++) {
            s[t[d]] = oe.css(e, t[d], !1, a);
          }return s;
        }return n === void 0 ? oe.css(e, t) : oe.style(e, t, n);
      }, e, t, 1 < arguments.length);
    }, show: function show() {
      return v(this, !0);
    }, hide: function hide() {
      return v(this);
    }, toggle: function toggle(e) {
      return "boolean" === typeof e ? e ? this.show() : this.hide() : this.each(function () {
        x(this) ? oe(this).show() : oe(this).hide();
      });
    } }), oe.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = Ie(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: "cssFloat" }, style: function style(e, t, n, a) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
            i,
            s,
            d = oe.camelCase(t),
            r = e.style;if (t = oe.cssProps[d] || (oe.cssProps[d] = y(r, d)), s = oe.cssHooks[t] || oe.cssHooks[d], void 0 !== n) {
          if (i = "undefined" === typeof n ? "undefined" : babelHelpers["typeof"](n), "string" === i && (o = Ye.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(oe.css(e, t)), i = "number"), null == n || "number" === i && isNaN(n)) return;"number" !== i || oe.cssNumber[d] || (n += "px"), oe.support.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (r[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, a)) || (r[t] = n);
        } else return s && "get" in s && void 0 !== (o = s.get(e, !1, a)) ? o : r[t];
      }
    }, css: function css(e, t, n, a) {
      var o,
          i,
          s,
          d = oe.camelCase(t);return t = oe.cssProps[d] || (oe.cssProps[d] = y(e.style, d)), s = oe.cssHooks[t] || oe.cssHooks[d], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = Ie(e, t, a)), "normal" === o && t in Qe && (o = Qe[t]), "" === n || n ? (i = parseFloat(o), !0 === n || oe.isNumeric(i) ? i || 0 : o) : o;
    } }), Ie = function Ie(e, t, n) {
    var a,
        o,
        i,
        s = n || b(e),
        d = s ? s.getPropertyValue(t) || s[t] : void 0,
        r = e.style;return s && ("" === d && !oe.contains(e.ownerDocument, e) && (d = oe.style(e, t)), Ue.test(d) && Xe.test(t) && (a = r.width, o = r.minWidth, i = r.maxWidth, r.minWidth = r.maxWidth = r.width = d, d = s.width, r.width = a, r.minWidth = o, r.maxWidth = i)), d;
  }, oe.each(["height", "width"], function (e, t) {
    oe.cssHooks[t] = { get: function get(e, n, a) {
        if (n) return 0 === e.offsetWidth && ze.test(oe.css(e, "display")) ? oe.swap(e, Ge, function () {
          return C(e, t, a);
        }) : C(e, t, a);
      }, set: function set(e, n, a) {
        var o = a && b(e);return T(e, n, a ? w(e, t, a, oe.support.boxSizing && "border-box" === oe.css(e, "boxSizing", !1, o), o) : 0);
      } };
  }), oe(function () {
    oe.support.reliableMarginRight || (oe.cssHooks.marginRight = { get: function get(e, t) {
        if (t) return oe.swap(e, { display: "inline-block" }, Ie, [e, "marginRight"]);
      } }), !oe.support.pixelPosition && oe.fn.position && oe.each(["top", "left"], function (e, t) {
      oe.cssHooks[t] = { get: function get(e, n) {
          if (n) return n = Ie(e, t), Ue.test(n) ? oe(e).position()[t] + "px" : n;
        } };
    });
  }), oe.expr && oe.expr.filters && (oe.expr.filters.hidden = function (e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight;
  }, oe.expr.filters.visible = function (e) {
    return !oe.expr.filters.hidden(e);
  }), oe.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    oe.cssHooks[e + t] = { expand: function expand(n) {
        for (var a = 0, o = {}, i = "string" === typeof n ? n.split(" ") : [n]; 4 > a; a++) {
          o[e + Je[a] + t] = i[a] || i[a - 2] || i[0];
        }return o;
      } }, Xe.test(e) || (oe.cssHooks[e + t].set = T);
  });var Ze = /%20/g,
      et = /\[\]$/,
      tt = /\r?\n/g,
      nt = /^(?:submit|button|image|reset|file)$/i,
      at = /^(?:input|select|textarea|keygen)/i;oe.fn.extend({ serialize: function serialize() {
      return oe.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = oe.prop(this, "elements");return e ? oe.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !oe(this).is(":disabled") && at.test(this.nodeName) && !nt.test(e) && (this.checked || !Pe.test(e));
      }).map(function (e, t) {
        var n = oe(this).val();return null == n ? null : oe.isArray(n) ? oe.map(n, function (e) {
          return { name: t.name, value: e.replace(tt, "\r\n") };
        }) : { name: t.name, value: n.replace(tt, "\r\n") };
      }).get();
    } }), oe.param = function (e, t) {
    var n,
        a = [],
        o = function o(e, t) {
      t = oe.isFunction(t) ? t() : null == t ? "" : t, a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    };if (void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || e.jquery && !oe.isPlainObject(e)) oe.each(e, function () {
      o(this.name, this.value);
    });else for (n in e) {
      j(n, e[n], t, o);
    }return a.join("&").replace(Ze, "+");
  }, oe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
    oe.fn[t] = function (e, n) {
      return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), oe.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }, bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, a) {
      return this.on(t, e, n, a);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } });var ot,
      it,
      st = oe.now(),
      dt = /\?/,
      rt = /#.*$/,
      lt = /([?&])_=[^&]*/,
      pt = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      ct = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      ut = /^(?:GET|HEAD)$/,
      ft = /^\/\//,
      mt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      ht = oe.fn.load,
      gt = {},
      yt = {},
      xt = "*/".concat("*");try {
    it = z.href;
  } catch (t) {
    it = X.createElement("a"), it.href = "", it = it.href;
  }ot = mt.exec(it.toLowerCase()) || [], oe.fn.load = function (e, t, n) {
    if ("string" !== typeof e && ht) return ht.apply(this, arguments);var a,
        o,
        i,
        s = this,
        d = e.indexOf(" ");return 0 <= d && (a = e.slice(d), e = e.slice(0, d)), oe.isFunction(t) ? (n = t, t = void 0) : t && "object" === ("undefined" === typeof t ? "undefined" : babelHelpers["typeof"](t)) && (o = "POST"), 0 < s.length && oe.ajax({ url: e, type: o, dataType: "html", data: t }).done(function (e) {
      i = arguments, s.html(a ? oe("<div>").append(oe.parseHTML(e)).find(a) : e);
    }).complete(n && function (e, t) {
      s.each(n, i || [e.responseText, t, e]);
    }), this;
  }, oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    oe.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), oe.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: it, type: "GET", isLocal: ct.test(ot[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": xt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": oe.parseJSON, "text xml": oe.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? E(E(e, oe.ajaxSettings), t) : E(oe.ajaxSettings, e);
    }, ajaxPrefilter: S(gt), ajaxTransport: S(yt), ajax: function ajax(e, t) {
      function n(e, t, n, r) {
        var p,
            u,
            y,
            x,
            v,
            w = t;2 === b || (b = 2, l && clearTimeout(l), a = void 0, d = r || "", T.readyState = 0 < e ? 4 : 0, p = 200 <= e && 300 > e || 304 === e, n && (x = A(i, T, n)), x = L(i, x, T, p), p ? (i.ifModified && (v = T.getResponseHeader("Last-Modified"), v && (oe.lastModified[o] = v), v = T.getResponseHeader("etag"), v && (oe.etag[o] = v)), 204 === e || "HEAD" === i.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = x.state, u = x.data, y = x.error, p = !y)) : (y = w, (e || !w) && (w = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (t || w) + "", p ? m.resolveWith(s, [u, w, T]) : m.rejectWith(s, [T, w, y]), T.statusCode(g), g = void 0, c && f.trigger(p ? "ajaxSuccess" : "ajaxError", [T, i, p ? u : y]), h.fireWith(s, [T, w]), c && (f.trigger("ajaxComplete", [T, i]), ! --oe.active && oe.event.trigger("ajaxStop")));
      }"object" === ("undefined" === typeof e ? "undefined" : babelHelpers["typeof"](e)) && (t = e, e = void 0), t = t || {};var a,
          o,
          d,
          r,
          l,
          p,
          c,
          u,
          i = oe.ajaxSetup({}, t),
          s = i.context || i,
          f = i.context && (s.nodeType || s.jquery) ? oe(s) : oe.event,
          m = oe.Deferred(),
          h = oe.Callbacks("once memory"),
          g = i.statusCode || {},
          y = {},
          x = {},
          b = 0,
          v = "canceled",
          T = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (2 === b) {
            if (!r) for (r = {}; t = pt.exec(d);) {
              r[t[1].toLowerCase()] = t[2];
            }t = r[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === b ? d : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          var n = e.toLowerCase();return b || (e = x[n] = x[n] || e, y[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return b || (i.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          if (e) if (2 > b) for (var t in e) {
            g[t] = [g[t], e[t]];
          } else T.always(e[T.status]);return this;
        }, abort: function abort(e) {
          var t = e || v;return a && a.abort(t), n(0, t), this;
        } };if (m.promise(T).complete = h.add, T.success = T.done, T.error = T.fail, i.url = ((e || i.url || it) + "").replace(rt, "").replace(ft, ot[1] + "//"), i.type = t.method || t.type || i.method || i.type, i.dataTypes = oe.trim(i.dataType || "*").toLowerCase().match(se) || [""], null == i.crossDomain && (p = mt.exec(i.url.toLowerCase()), i.crossDomain = !!(p && (p[1] !== ot[1] || p[2] !== ot[2] || (p[3] || ("http:" === p[1] ? "80" : "443")) !== (ot[3] || ("http:" === ot[1] ? "80" : "443"))))), i.data && i.processData && "string" !== typeof i.data && (i.data = oe.param(i.data, i.traditional)), D(gt, i, t, T), 2 === b) return T;for (u in c = i.global, c && 0 === oe.active++ && oe.event.trigger("ajaxStart"), i.type = i.type.toUpperCase(), i.hasContent = !ut.test(i.type), o = i.url, i.hasContent || (i.data && (o = i.url += (dt.test(o) ? "&" : "?") + i.data, delete i.data), !1 === i.cache && (i.url = lt.test(o) ? o.replace(lt, "$1_=" + st++) : o + (dt.test(o) ? "&" : "?") + "_=" + st++)), i.ifModified && (oe.lastModified[o] && T.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && T.setRequestHeader("If-None-Match", oe.etag[o])), (i.data && i.hasContent && !1 !== i.contentType || t.contentType) && T.setRequestHeader("Content-Type", i.contentType), T.setRequestHeader("Accept", i.dataTypes[0] && i.accepts[i.dataTypes[0]] ? i.accepts[i.dataTypes[0]] + ("*" === i.dataTypes[0] ? "" : ", " + xt + "; q=0.01") : i.accepts["*"]), i.headers) {
        T.setRequestHeader(u, i.headers[u]);
      }if (i.beforeSend && (!1 === i.beforeSend.call(s, T, i) || 2 === b)) return T.abort();for (u in v = "abort", { success: 1, error: 1, complete: 1 }) {
        T[u](i[u]);
      }if (a = D(yt, i, t, T), !a) n(-1, "No Transport");else {
        T.readyState = 1, c && f.trigger("ajaxSend", [T, i]), i.async && 0 < i.timeout && (l = setTimeout(function () {
          T.abort("timeout");
        }, i.timeout));try {
          b = 1, a.send(y, n);
        } catch (t) {
          if (2 > b) n(-1, t);else throw t;
        }
      }return T;
    }, getJSON: function getJSON(e, t, n) {
      return oe.get(e, t, n, "json");
    }, getScript: function getScript(e, t) {
      return oe.get(e, void 0, t, "script");
    } }), oe.each(["get", "post"], function (e, t) {
    oe[t] = function (e, n, a, o) {
      return oe.isFunction(n) && (o = o || a, a = n, n = void 0), oe.ajax({ url: e, type: t, dataType: o, data: n, success: a });
    };
  }), oe.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(e) {
        return oe.globalEval(e), e;
      } } }), oe.ajaxPrefilter("script", function (e) {
    e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), oe.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, _n;return { send: function send(a, o) {
          t = oe("<script>").prop({ async: !0, charset: e.scriptCharset, src: e.url }).on("load error", _n = function n(e) {
            t.remove(), _n = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), X.head.appendChild(t[0]);
        }, abort: function abort() {
          _n && _n();
        } };
    }
  });var bt = [],
      vt = /(=)\?(?=&|$)|\?\?/;oe.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = bt.pop() || oe.expando + "_" + st++;return this[e] = !0, e;
    } }), oe.ajaxPrefilter("json jsonp", function (t, n, a) {
    var o,
        i,
        s,
        d = !1 !== t.jsonp && (vt.test(t.url) ? "url" : "string" === typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && vt.test(t.data) && "data");if (d || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, d ? t[d] = t[d].replace(vt, "$1" + o) : !1 !== t.jsonp && (t.url += (dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
      return s || oe.error(o + " was not called"), s[0];
    }, t.dataTypes[0] = "json", i = e[o], e[o] = function () {
      s = arguments;
    }, a.always(function () {
      e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, bt.push(o)), s && oe.isFunction(i) && i(s[0]), s = i = void 0;
    }), "script";
  }), oe.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest();
    } catch (t) {}
  };var Tt = oe.ajaxSettings.xhr(),
      wt = { 0: 200, 1223: 204 },
      Ct = 0,
      Nt = {};e.ActiveXObject && oe(e).on("unload", function () {
    for (var e in Nt) {
      Nt[e]();
    }Nt = void 0;
  }), oe.support.cors = !!Tt && "withCredentials" in Tt, oe.support.ajax = Tt = !!Tt, oe.ajaxTransport(function (e) {
    var _t2;if (oe.support.cors || Tt && !e.crossDomain) return { send: function send(n, a) {
        var o,
            i,
            s = e.xhr();if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields) {
          s[o] = e.xhrFields[o];
        }for (o in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) {
          s.setRequestHeader(o, n[o]);
        }_t2 = function t(e) {
          return function () {
            _t2 && (delete Nt[i], _t2 = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? a(s.status || 404, s.statusText) : a(wt[s.status] || s.status, s.statusText, "string" === typeof s.responseText ? { text: s.responseText } : void 0, s.getAllResponseHeaders()));
          };
        }, s.onload = _t2(), s.onerror = _t2("error"), _t2 = Nt[i = Ct++] = _t2("abort"), s.send(e.hasContent && e.data || null);
      }, abort: function abort() {
        _t2 && _t2();
      } };
  });var kt,
      jt,
      St = /^(?:toggle|show|hide)$/,
      Dt = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
      Et = /queueHooks$/,
      At = [function (e, t, n) {
    var a,
        o,
        i,
        s,
        d,
        r,
        l = this,
        p = {},
        c = e.style,
        u = e.nodeType && x(e),
        f = he.get(e, "fxshow");for (a in n.queue || (d = oe._queueHooks(e, "fx"), null == d.unqueued && (d.unqueued = 0, r = d.empty.fire, d.empty.fire = function () {
      d.unqueued || r();
    }), d.unqueued++, l.always(function () {
      l.always(function () {
        d.unqueued--, oe.queue(e, "fx").length || d.empty.fire();
      });
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [c.overflow, c.overflowX, c.overflowY], "inline" === oe.css(e, "display") && "none" === oe.css(e, "float") && (c.display = "inline-block")), n.overflow && (c.overflow = "hidden", l.always(function () {
      c.overflow = n.overflow[0], c.overflowX = n.overflow[1], c.overflowY = n.overflow[2];
    })), t) {
      if (o = t[a], St.exec(o)) {
        if (delete t[a], i = i || "toggle" === o, o === (u ? "hide" : "show")) if ("show" === o && f && void 0 !== f[a]) u = !0;else continue;p[a] = f && f[a] || oe.style(e, a);
      }
    }if (!oe.isEmptyObject(p)) for (a in f ? "hidden" in f && (u = f.hidden) : f = he.access(e, "fxshow", {}), i && (f.hidden = !u), u ? oe(e).show() : l.done(function () {
      oe(e).hide();
    }), l.done(function () {
      for (var t in he.remove(e, "fxshow"), p) {
        oe.style(e, t, p[t]);
      }
    }), p) {
      s = q(u ? f[a] : 0, a, l), a in f || (f[a] = s.start, u && (s.end = s.start, s.start = "width" === a || "height" === a ? 1 : 0));
    }
  }],
      Lt = { "*": [function (e, t) {
      var n = this.createTween(e, t),
          a = n.cur(),
          o = Dt.exec(t),
          i = o && o[3] || (oe.cssNumber[e] ? "" : "px"),
          s = (oe.cssNumber[e] || "px" !== i && +a) && Dt.exec(oe.css(n.elem, e)),
          d = 1,
          r = 20;if (s && s[3] !== i) {
        i = i || s[3], o = o || [], s = +a || 1;do {
          d = d || ".5", s /= d, oe.style(n.elem, e, s + i);
        } while (d !== (d = n.cur() / a) && 1 !== d && --r);
      }return o && (s = n.start = +s || +a || 0, n.unit = i, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n;
    }] };oe.Animation = oe.extend(O, { tweener: function tweener(e, t) {
      oe.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");for (var n, a = 0, o = e.length; a < o; a++) {
        n = e[a], Lt[n] = Lt[n] || [], Lt[n].unshift(t);
      }
    }, prefilter: function prefilter(e, t) {
      t ? At.unshift(e) : At.push(e);
    } }), oe.Tween = F, F.prototype = { constructor: F, init: function init(e, t, n, a, o, i) {
      this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = a, this.unit = i || (oe.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var e = F.propHooks[this.prop];return e && e.get ? e.get(this) : F.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          n = F.propHooks[this.prop];return this.pos = this.options.duration ? t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this;
    } }, F.prototype.init.prototype = F.prototype, F.propHooks = { _default: { get: function get(e) {
        var t;return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = oe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop];
      }, set: function set(e) {
        oe.fx.step[e.prop] ? oe.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[oe.cssProps[e.prop]] || oe.cssHooks[e.prop]) ? oe.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
      } } }, F.propHooks.scrollTop = F.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, oe.each(["toggle", "show", "hide"], function (e, t) {
    var n = oe.fn[t];oe.fn[t] = function (e, a, o) {
      return null == e || "boolean" === typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, a, o);
    };
  }), oe.fn.extend({ fadeTo: function fadeTo(e, t, n, a) {
      return this.filter(x).css("opacity", 0).show().end().animate({ opacity: t }, e, n, a);
    }, animate: function animate(e, t, n, a) {
      var o = oe.isEmptyObject(e),
          i = oe.speed(t, n, a),
          s = function s() {
        var t = O(this, oe.extend({}, e), i);(o || he.get(this, "finish")) && t.stop(!0);
      };return s.finish = s, o || !1 === i.queue ? this.each(s) : this.queue(i.queue, s);
    }, stop: function stop(e, t, n) {
      var a = function a(e) {
        var t = e.stop;delete e.stop, t(n);
      };return "string" !== typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            o = null != e && e + "queueHooks",
            i = oe.timers,
            s = he.get(this);if (o) s[o] && s[o].stop && a(s[o]);else for (o in s) {
          s[o] && s[o].stop && Et.test(o) && a(s[o]);
        }for (o = i.length; o--;) {
          i[o].elem === this && (null == e || i[o].queue === e) && (i[o].anim.stop(n), t = !1, i.splice(o, 1));
        }(t || !n) && oe.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = he.get(this),
            a = n[e + "queue"],
            o = n[e + "queueHooks"],
            i = oe.timers,
            s = a ? a.length : 0;for (n.finish = !0, oe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) {
          i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
        }for (t = 0; t < s; t++) {
          a[t] && a[t].finish && a[t].finish.call(this);
        }delete n.finish;
      });
    } }), oe.each({ slideDown: W("show"), slideUp: W("hide"), slideToggle: W("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    oe.fn[e] = function (e, n, a) {
      return this.animate(t, e, n, a);
    };
  }), oe.speed = function (e, t, n) {
    var a = e && "object" === ("undefined" === typeof e ? "undefined" : babelHelpers["typeof"](e)) ? oe.extend({}, e) : { complete: n || !n && t || oe.isFunction(e) && e, duration: e, easing: n && t || t && !oe.isFunction(t) && t };return a.duration = oe.fx.off ? 0 : "number" === typeof a.duration ? a.duration : a.duration in oe.fx.speeds ? oe.fx.speeds[a.duration] : oe.fx.speeds._default, (null == a.queue || !0 === a.queue) && (a.queue = "fx"), a.old = a.complete, a.complete = function () {
      oe.isFunction(a.old) && a.old.call(this), a.queue && oe.dequeue(this, a.queue);
    }, a;
  }, oe.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return 0.5 - Math.cos(e * Math.PI) / 2;
    } }, oe.timers = [], oe.fx = F.prototype.init, oe.fx.tick = function () {
    var e,
        t = oe.timers,
        n = 0;for (kt = oe.now(); n < t.length; n++) {
      e = t[n], e() || t[n] !== e || t.splice(n--, 1);
    }t.length || oe.fx.stop(), kt = void 0;
  }, oe.fx.timer = function (e) {
    e() && oe.timers.push(e) && oe.fx.start();
  }, oe.fx.interval = 13, oe.fx.start = function () {
    jt || (jt = setInterval(oe.fx.tick, oe.fx.interval));
  }, oe.fx.stop = function () {
    clearInterval(jt), jt = null;
  }, oe.fx.speeds = { slow: 600, fast: 200, _default: 400 }, oe.fx.step = {}, oe.expr && oe.expr.filters && (oe.expr.filters.animated = function (e) {
    return oe.grep(oe.timers, function (t) {
      return e === t.elem;
    }).length;
  }), oe.fn.offset = function (e) {
    if (arguments.length) return void 0 === e ? this : this.each(function (t) {
      oe.offset.setOffset(this, e, t);
    });var t,
        n,
        a = this[0],
        o = { top: 0, left: 0 },
        i = a && a.ownerDocument;if (i) return (t = i.documentElement, !oe.contains(t, a)) ? o : (babelHelpers["typeof"](a.getBoundingClientRect) !== _ && (o = a.getBoundingClientRect()), n = M(i), { top: o.top + n.pageYOffset - t.clientTop, left: o.left + n.pageXOffset - t.clientLeft });
  }, oe.offset = { setOffset: function setOffset(e, t, n) {
      var a,
          o,
          i,
          s,
          d,
          r,
          l,
          p = oe.css(e, "position"),
          c = oe(e),
          u = {};"static" === p && (e.style.position = "relative"), d = c.offset(), i = oe.css(e, "top"), r = oe.css(e, "left"), l = ("absolute" === p || "fixed" === p) && -1 < (i + r).indexOf("auto"), l ? (a = c.position(), s = a.top, o = a.left) : (s = parseFloat(i) || 0, o = parseFloat(r) || 0), oe.isFunction(t) && (t = t.call(e, n, d)), null != t.top && (u.top = t.top - d.top + s), null != t.left && (u.left = t.left - d.left + o), "using" in t ? t.using.call(e, u) : c.css(u);
    } }, oe.fn.extend({ position: function position() {
      if (this[0]) {
        var e,
            t,
            n = this[0],
            a = { top: 0, left: 0 };return "fixed" === oe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), !oe.nodeName(e[0], "html") && (a = e.offset()), a.top += oe.css(e[0], "borderTopWidth", !0), a.left += oe.css(e[0], "borderLeftWidth", !0)), { top: t.top - a.top - oe.css(n, "marginTop", !0), left: t.left - a.left - oe.css(n, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        for (var e = this.offsetParent || $; e && !oe.nodeName(e, "html") && "static" === oe.css(e, "position");) {
          e = e.offsetParent;
        }return e || $;
      });
    } }), oe.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, n) {
    var a = "pageYOffset" === n;oe.fn[t] = function (o) {
      return oe.access(this, function (t, o, i) {
        var s = M(t);return void 0 === i ? s ? s[n] : t[o] : void (s ? s.scrollTo(a ? e.pageXOffset : i, a ? i : e.pageYOffset) : t[o] = i);
      }, t, o, arguments.length, null);
    };
  }), oe.each({ Height: "height", Width: "width" }, function (e, t) {
    oe.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, a) {
      oe.fn[a] = function (a, o) {
        var i = arguments.length && (n || "boolean" !== typeof a),
            s = n || (!0 === a || !0 === o ? "margin" : "border");return oe.access(this, function (t, n, a) {
          var o;return oe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, I(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : a === void 0 ? oe.css(t, n, s) : oe.style(t, n, a, s);
        }, t, i ? a : void 0, i, null);
      };
    });
  }), oe.fn.size = function () {
    return this.length;
  }, oe.fn.andSelf = oe.fn.addBack, "object" === ("undefined" === typeof module ? "undefined" : babelHelpers["typeof"](module)) && module && "object" === babelHelpers["typeof"](module.exports) && (module.exports = oe), "object" === ("undefined" === typeof e ? "undefined" : babelHelpers["typeof"](e)) && "object" === babelHelpers["typeof"](e.document) && (e.jQuery = e.$ = oe);
})(window);
"use notstrict";var InstallPageElement,
    __awaiter = undefined && undefined.__awaiter || function (a, b, c, d) {
  return new (c || (c = Promise))(function (e, f) {
    function g(a) {
      try {
        i(d.next(a));
      } catch (a) {
        f(a);
      }
    }function h(a) {
      try {
        i(d["throw"](a));
      } catch (a) {
        f(a);
      }
    }function i(a) {
      a.done ? e(a.value) : new c(function (b) {
        b(a.value);
      }).then(g, h);
    }i((d = d.apply(a, b || [])).next());
  });
},
    __generator = undefined && undefined.__generator || function (a, b) {
  function c(a) {
    return function (b) {
      return d([a, b]);
    };
  }function d(c) {
    if (e) throw new TypeError("Generator is already executing.");for (; g;) {
      try {
        if (e = 1, f && (h = f[2 & c[0] ? "return" : c[0] ? "throw" : "next"]) && !(h = h.call(f, c[1])).done) return h;switch ((f = 0, h) && (c = [0, h.value]), c[0]) {case 0:case 1:
            h = c;break;case 4:
            return g.label++, { value: c[1], done: !1 };case 5:
            g.label++, f = c[1], c = [0];continue;case 7:
            c = g.ops.pop(), g.trys.pop();continue;default:
            if ((h = g.trys, !(h = 0 < h.length && h[h.length - 1])) && (6 === c[0] || 2 === c[0])) {
              g = 0;continue;
            }if (3 === c[0] && (!h || c[1] > h[0] && c[1] < h[3])) {
              g.label = c[1];break;
            }if (6 === c[0] && g.label < h[1]) {
              g.label = h[1], h = c;break;
            }if (h && g.label < h[2]) {
              g.label = h[2], g.ops.push(c);break;
            }h[2] && g.ops.pop(), g.trys.pop();continue;}c = b.call(a, g);
      } catch (a) {
        c = [6, a], f = 0;
      } finally {
        e = h = 0;
      }
    }if (5 & c[0]) throw c[1];return { value: c[0] ? c[1] : void 0, done: !0 };
  }var e,
      f,
      h,
      i,
      g = { label: 0, sent: function sent() {
      if (1 & h[0]) throw h[1];return h[1];
    }, trys: [], ops: [] };return i = { next: c(0), "throw": c(1), "return": c(2) }, "function" === typeof Symbol && (i[Symbol.iterator] = function () {
    return this;
  }), i;
};(function (a) {
  a.installPageProperties = { fetchFailed: { type: Boolean, value: !1, notify: !0 }, fetchCompleted: { type: Boolean, value: !1, notify: !0 }, fetchedData: { type: String, value: "", notify: !0 }, userscriptUrlCalculated: { type: Boolean, notify: !1, value: !1 }, userscriptUrl: { type: String, computed: "getUserscriptUrl(userscriptUrlCalculated)" }, isLoading: { type: Boolean, value: !1, notify: !0, computed: "isPageLoading(fetchFailed, fetchCompleted)" } };var b = function () {
    function b() {}return b.isPageLoading = function (a, b) {
      return !a && !b;
    }, b.getInstallSource = function () {
      var a = this._getSearchParams(location.href);return a.s;
    }, b._getSearchParams = function (a) {
      for (var b = a.split("?").slice(1).join("?"), c = b.split("&").map(function (a) {
        var b = a.split("=");return { key: b[0], val: decodeURIComponent(b[1]) };
      }), d = {}, e = 0; e < c.length; e++) {
        d[c[e].key] = c[e].val;
      }return d;
    }, b.getUserscriptUrl = function () {
      this.userscriptUrlCalculated = !0;var a = this._getSearchParams(location.href);return a.i;
    }, b.displayFetchedUserscript = function (a) {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (b) {
          switch (b.label) {case 0:
              return [4, this.settingsReady];case 1:
              return b.sent(), this.fetchCompleted = !0, this.fetchedData = a, [2];}
        });
      });
    }, b.notifyFetchError = function (a) {
      var b = this;this.fetchFailed = !0, this.async(function () {
        b.$$("install-error").$.errCode.innerText = a + "";
      }, 50);
    }, b._xhr = function (a) {
      return new Promise(function (b, c) {
        var d = new window.XMLHttpRequest();d.open("GET", a), d.onreadystatechange = function () {
          d.readyState === window.XMLHttpRequest.DONE && (200 <= d.status && 300 > d.status ? b(d.responseText) : c(new Error("Failed XHR")));
        }, d.send();
      });
    }, b.fetchUserscript = function (a) {
      var b = this;this._xhr(a + "?noInstall").then(function (a) {
        b.displayFetchedUserscript(a);
      })["catch"](function (a) {
        b.notifyFetchError(a);
      });
    }, (b._createArray = function (a) {
      for (var b = [], c = 0; c < a; c++) {
        b[c] = void 0;
      }return b;
    }, b._initSettings = function () {
      var a = this;this.settingsReady = new Promise(function (b) {
        return __awaiter(a, void 0, void 0, function () {
          var a, c, d, e, f, g, h, d, i, f, g;return __generator(this, function (j) {
            switch (j.label) {case 0:
                return [4, browserAPI.storage.local.get()];case 1:
                return a = j.sent(), a.useStorageSync && "sync" in BrowserAPI.getSrc().storage && "get" in BrowserAPI.getSrc().storage.sync ? [4, browserAPI.storage.sync.get()] : [3, 3];case 2:
                return c = j.sent(), d = c.indexes, null === d || -1 === d || void 0 === d ? (browserAPI.storage.local.set({ useStorageSync: !1 }), this.settings = a.settings) : (e = [], f = "number" === typeof d ? d : Array.isArray(d) ? d.length : 0, this._createArray(f).forEach(function (a, b) {
                  e.push(c["section" + b]);
                }), g = e.join(""), this.settings = JSON.parse(g)), [3, 6];case 3:
                return a.settings ? [3, 5] : (browserAPI.storage.local.set({ useStorageSync: !0 }), [4, browserAPI.storage.sync.get()]);case 4:
                return h = j.sent(), d = h.indexes, i = [], f = "number" === typeof d ? d : Array.isArray(d) ? d.length : 0, this._createArray(f).forEach(function (a, b) {
                  i.push(h["section" + b]);
                }), g = i.join(""), this.settings = JSON.parse(g), [3, 6];case 5:
                this.settings = a.settings, j.label = 6;case 6:
                return b(null), [2];}
          });
        });
      });
    }, b.ready = function () {
      this.userscriptUrl = this.getUserscriptUrl(), this.$.title.innerHTML = "Installing userscript from " + this.userscriptUrl, this.fetchUserscript(this.userscriptUrl), window.installPage = this, this._initSettings();
    }, b.is = "install-page", b.properties = a.installPageProperties, b);
  }();a.IP = b, window.objectify ? window.register(b) : window.addEventListener("RegisterReady", function () {
    window.register(b);
  });
})(InstallPageElement || (InstallPageElement = {}));
'use notstrict';window.CRMLoaded = window.CRMLoaded || { listener: null, register: function register(a) {
    window.CRMLoaded.listener = a;
  } }, window.CRMLoaded.register(function () {
  function a(a) {
    var b = [],
        c = a.split('}');return c.slice(0, -1).forEach(function (a) {
      var c = a.indexOf('{'),
          d = a.slice(0, c).trim(),
          e = a.slice(c + 1).trim();b.push({ elements: d, ruleText: e });
    }), b;
  }function b(a) {
    if ('number' === typeof a) return a;var b = a.split('.'),
        c = ~~a;return 1 < b.length && (c += ~~b[1] / 10), c;
  }function c(a) {
    var d;return -1 < (d = a.indexOf('*')) ? c(a.slice(0, d - 1).concat([b(a[d - 1]) * b(a[d + 1])]).concat(a.slice(d + 2))) : -1 < (d = a.indexOf('/')) ? c(a.slice(0, d - 1).concat([b(a[d - 1]) / b(a[d + 1])]).concat(a.slice(d + 2))) : -1 < a.indexOf('-') || -1 < a.indexOf('+') ? (a.forEach(function (c, d) {
      '-' === c && (a[d + 1] = -1 * b(a[d + 1]), a[d] = '+');
    }), 0 === a.length ? 0 : 1 === a.length ? b(a[0]) : a.reduce(function (a, c) {
      return b(a) + b(c);
    })) : b(a[0]);
  }function d(a) {
    var b = 0;return -1 < (b = a.indexOf('+')) ? [].concat(d(a.slice(0, b))).concat(['+']).concat(d(a.slice(b + 1))) : -1 < (b = a.indexOf('-')) ? [].concat(d(a.slice(0, b))).concat(['-']).concat(d(a.slice(b + 1))) : -1 < (b = a.indexOf('*')) ? [].concat(d(a.slice(0, b))).concat(['*']).concat(d(a.slice(b + 1))) : -1 < (b = a.indexOf('/')) ? [].concat(d(a.slice(0, b))).concat(['/']).concat(d(a.slice(b + 1))) : [a];
  }function e(a) {
    var b = /\((.*)\)/,
        f = null;return (f = b.exec(a)) ? e(a.replace(f[0], e(f[1]) + '')) : c(d(a).map(function (a) {
      return a.trim();
    }));
  }function f() {
    if (o) return o;var a = document.documentElement;return o = [a].concat(i(a.children)), o;
  }function g(a) {
    return j(f().map(function (b) {
      return b.querySelectorAll(a);
    }));
  }function h(a, b) {
    if (b(a), a.children) for (var c = 0; c < a.children.length; c++) {
      h(a.children[c], b);
    }
  }function i(a) {
    for (var b = [], c = 0; c < a.length; c++) {
      h(a[c], function (a) {
        a.shadowRoot && b.push(a.shadowRoot);
      });
    }return b;
  }function j(a) {
    for (var b = [], c = 0; c < a.length; c++) {
      for (var d = 0; d < a[c].length; d++) {
        b.push(a[c][d]);
      }
    }return b;
  }function k(a) {
    for (var b = a.split(' '), c = g(b[0]), d = function d(a) {
      c = j(c.map(function (a) {
        return a.shadowRoot ? a.shadowRoot : a.shadowRoot;
      }).map(function (c) {
        return c.querySelectorAll(b[a]);
      }));
    }, e = 1; e < b.length; e++) {
      d(e);
    }return c;
  }function l(a) {
    return Array.prototype.slice.apply(a);
  }function m() {
    p.forEach(function (a) {
      var b = e(a.calculation.replace('vw', ' * ' + window.innerWidth / 100).replace('vh', ' * ' + window.innerHeight / 100).replace('em', ' * 16').replace('px', ''));a.elements.forEach(function (c) {
        'length' !== a.key && 'parentRule' !== a.key && (c.style[a.key] = b + 'px');
      });
    });
  }var n,
      o = null,
      p = [];window.addCalcFn = function (a, b, c, d) {
    if (n && !d && 'length' !== b && 'parentRule' !== b) return void (a.style[b] = 'calc(' + c + ')');for (var e = 0; e < p.length; e++) {
      if (-1 < p[e].elements.indexOf(a) && p[e].key === b) {
        p.splice(e, 1);break;
      }
    }if (!d) {
      p.push({ elements: [a], calculation: c, key: b }), m();
    }
  }, function () {
    var b = document.createElement('div');b.style.cssText = 'width: calc(100vw - 100px)', n = !!b.style.length, n || function (a) {
      a.forEach(function (a) {
        for (var b, c = a.key; -1 < (b = c.indexOf('-'));) {
          c = c.slice(0, b) + c[b + 1].toUpperCase() + c.slice(b + 2);
        }if (a.elements = k(a.elements), !a.elements) return null;var d = l(a.elements);(-1 < a.calculation.indexOf('vh') || -1 < a.calculation.indexOf('vw')) && p.push({ calculation: a.calculation, elements: d, key: c });var f = a.calculation.replace('vw', ' * ' + window.innerWidth / 100).replace('vh', ' * ' + window.innerHeight / 100).replace('em', ' * 16').replace('px', ''),
            g = e(f);d.forEach(function (a) {
          'length' !== c && 'parentRule' !== c && (a.style[c] = g + 'px');
        });
      }), window.onresize = function () {
        m();
      };
    }(function (a) {
      var b = [],
          c = /calc\((.+)\)/;return a.forEach(function (a) {
        a && a.rules && a.rules.forEach(function (d) {
          var e = null;(e = c.exec(d.value)) && (-1 < e[1].indexOf('vh') || -1 < e[1].indexOf('vw')) && b.push({ elements: a.elements, key: d.key, calculation: e[1] });
        });
      }), b;
    }(function (a) {
      var b = /(\s*)((\w|-)+)(\s*):(\s*)((\w|%|\/|\*|\+|\(|\)|-|,|\s)+);(\s*)/;return a.map(function (a) {
        if (-1 === a.ruleText.indexOf('calc') || -1 === a.ruleText.indexOf('vh') && -1 === a.ruleText.indexOf('vw')) return null;var c = [],
            d = a.ruleText.match(/(\s*)((\w|-)+)(\s*):(\s*)((\w|%|\/|\*|\+|\(|\)|-|,|\s)+);(\s*)/g);return d ? (d.forEach(function (a) {
          var d = a.match(b);c.push({ key: d[2], value: d[6] });
        }), { rules: c, elements: a.elements }) : null;
      }).filter(function (a) {
        return null !== a;
      });
    }(function (b) {
      var c = [];return b.forEach(function (b) {
        return -1 === b.indexOf('calc(') || -1 === b.indexOf('vh') && -1 === b.indexOf('vw') ? null : void (c = c.concat(a(b)));
      }), c;
    }(function (a) {
      return a.map(function (a) {
        if ('STYLE' === a.tagName) return a.textContent;var b = new XMLHttpRequest();return b.open('GET', a.sheet.href, !1), b.send(), 200 === b.status ? b.responseText : '';
      });
    }(g('style, link[rel="stylesheet"]')))))), b.remove();
  }();
});