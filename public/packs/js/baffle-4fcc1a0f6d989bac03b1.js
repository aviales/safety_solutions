/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/baffle.min.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/baffle.min.js":
/*!********************************************!*\
  !*** ./app/javascript/packs/baffle.min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * baffle 0.3.6 - A tiny javascript library for obfuscating and revealing text in DOM elements.
 * Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/baffle
 * License: MIT
 */
!function (t, e) {
   true ? module.exports = e() : undefined;
}(this, function () {
  return function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;
      var i = n[r] = {
        exports: {},
        id: r,
        loaded: !1
      };
      return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
    }

    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0);
  }([function (t, e, n) {
    "use strict";

    function r(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    var i = n(2),
        o = r(i);
    t.exports = o["default"];
  }, function (t, e) {
    "use strict";

    function n(t, e) {
      for (var n in e) {
        e.hasOwnProperty(n) && (t[n] = e[n]);
      }

      return t;
    }

    function r(t, e) {
      return t.split("").map(e).join("");
    }

    function i(t) {
      return t[Math.floor(Math.random() * t.length)];
    }

    function o(t, e) {
      for (var n = 0, r = t.length; n < r; n++) {
        e(t[n], n);
      }
    }

    function u(t) {
      return t.map(function (t, e) {
        return !!t && e;
      }).filter(function (t) {
        return t !== !1;
      });
    }

    function s(t) {
      return "string" == typeof t ? [].slice.call(document.querySelectorAll(t)) : [NodeList, HTMLCollection].some(function (e) {
        return t instanceof e;
      }) ? [].slice.call(t) : t.nodeType ? [t] : t;
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.extend = n, e.mapString = r, e.sample = i, e.each = o, e.getTruthyIndices = u, e.getElements = s;
  }, function (t, e, n) {
    "use strict";

    function r(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var o = n(1),
        u = n(3),
        s = r(u),
        c = {
      characters: "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?",
      exclude: [" "],
      speed: 50
    },
        a = function () {
      function t(e, n) {
        i(this, t), this.options = (0, o.extend)(Object.create(c), n), this.elements = (0, o.getElements)(e).map(s["default"]), this.running = !1;
      }

      return t.prototype.once = function () {
        var t = this;
        return (0, o.each)(this.elements, function (e) {
          return e.write(t.options.characters, t.options.exclude);
        }), this.running = !0, this;
      }, t.prototype.start = function () {
        var t = this;
        return clearInterval(this.interval), (0, o.each)(this.elements, function (t) {
          return t.init();
        }), this.interval = setInterval(function () {
          return t.once();
        }, this.options.speed), this.running = !0, this;
      }, t.prototype.stop = function () {
        return clearInterval(this.interval), this.running = !1, this;
      }, t.prototype.set = function (t) {
        return (0, o.extend)(this.options, t), this.running && this.start(), this;
      }, t.prototype.text = function (t) {
        var e = this;
        return (0, o.each)(this.elements, function (n) {
          n.text(t(n.value)), e.running || n.write();
        }), this;
      }, t.prototype.reveal = function () {
        var t = this,
            e = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
            n = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
            r = e / this.options.speed || 1,
            i = function i() {
          clearInterval(t.interval), t.running = !0, t.interval = setInterval(function () {
            var e = t.elements.filter(function (t) {
              return !t.bitmap.every(function (t) {
                return !t;
              });
            });
            (0, o.each)(e, function (e) {
              var n = Math.ceil(e.value.length / r);
              e.decay(n).write(t.options.characters, t.options.exclude);
            }), e.length || (t.stop(), (0, o.each)(t.elements, function (t) {
              return t.init();
            }));
          }, t.options.speed);
        };

        return setTimeout(i, n), this;
      }, t;
    }();

    e["default"] = function (t, e) {
      return new a(t, e);
    };
  }, function (t, e, n) {
    "use strict";

    function r(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != typeof e && "function" != typeof e ? t : e;
    }

    function i(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }

    function o(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var u = n(1),
        s = function () {
      function t(e) {
        o(this, t), this.value = e, this.init();
      }

      return t.prototype.init = function () {
        return this.bitmap = this.value.split("").map(function () {
          return 1;
        }), this;
      }, t.prototype.render = function () {
        var t = this,
            e = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0],
            n = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1];
        return e.length ? (0, u.mapString)(this.value, function (r, i) {
          return n.indexOf(r) > -1 ? r : t.bitmap[i] ? (0, u.sample)(e) : r;
        }) : this.value;
      }, t.prototype.decay = function () {
        for (var t = arguments.length <= 0 || void 0 === arguments[0] ? 1 : arguments[0]; t--;) {
          var e = (0, u.getTruthyIndices)(this.bitmap);
          this.bitmap[(0, u.sample)(e)] = 0;
        }

        return this;
      }, t.prototype.text = function () {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? this.value : arguments[0];
        return this.value = t, this.init(), this;
      }, t;
    }(),
        c = function (t) {
      function e(n) {
        o(this, e);
        var i = r(this, t.call(this, n.textContent));
        return i.element = n, i;
      }

      return i(e, t), e.prototype.write = function (t, e) {
        return this.element.textContent = this.render(t, e), this;
      }, e;
    }(s);

    e["default"] = function (t) {
      return new c(t);
    };
  }]);
});

/***/ })

/******/ });
//# sourceMappingURL=baffle-4fcc1a0f6d989bac03b1.js.map