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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/t.min.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/t.min.js":
/*!***************************************!*\
  !*** ./app/javascript/packs/t.min.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*t.js-1.5.3;(c)2014-2018 - Mntn(r) <https://mn.tn/> c/o Benjamin Lips <g--[AT]--mn.tn>;MIT-Licensed <https://mit-license.org/>;For documentation, see <https://mntn-dev.github.io/t.js/>*/
;

(function (c) {
  c.fn.t = function (l, I) {
    return this.each(function () {
      var a = I,
          k = l,
          b = c(this),
          q = b,
          u,
          n,
          t,
          m,
          w,
          x = -1,
          p = !1,
          A = 0,
          B = 0,
          D = -1,
          y = "12qwertyuiop[]asdfghjkl;zxcvbnm,./~!@#$%^&*()_+:1234567890-=op".split([]),
          e = function e(a, b) {
        return c.type(a)[0] == (b || "n");
      },
          E = function E() {
        _g = c.grep(g, function (a) {
          return "&" == a[0] || !a[1];
        }).length - 1;
        return -1 < _g ? _g : 0;
      },
          z = function z(b) {
        D != b && a.blink && (a.blink_perm || q.data("blinking", D = b ? 1 : 0));
      },
          f = {
        c: 0,
        beep: function beep() {
          0 == f.c && (f.c = c("html").data().__TAC);
          f.o && f.o.stop();
          f.o = f.c.createOscillator();
          f.o.frequency.setValueAtTime(1, f.c.currentTime);
          f.g = f.c.createGain();
          f.o.connect(f.g);
          f.g.connect(f.c.destination);
          f.o.start();
          f.o.stop(f.c.currentTime + .03);
        }
      };

      if ("beep" == k && !b.data().is_typing && c("html").data().__TAC) return f.beep(), this;
      if ("speed" == k && e(a) && 9 < a) return b.data("speed", a).data("blink", Math.max(100, a + b.data().ssbs)), this;
      "" === k && (k = "<del>*</del>");
      if (b.data().is_typing) return k == "paused".slice(0, -1) && (b.data("paused", e(a, "b") ? oo_ = a : b.data("paused") ? oo_ = !1 : oo_ = !0), b.data().blink && b.data("blinking", oo_)), this;
      if (k == "paused".slice(0, -1)) return this;
      b.data("is_typing", 1);
      e(k, "o") && (a = k);
      if (/t\-/.test(b.attr("class"))) return this;

      if ("add" == k && b.data().t) {
        var r = a;
        a = c.extend({}, b.data());
        var F = b = c(":first", b),
            G = e(a.typing, "f");
        r = "<" + a.tag + ' class="typing-add">' + r + "</" + a.tag + ">";
      } else {
        "add" == k && (k = a, a = {});
        a = c.extend({
          t: !0,
          delay: !1,
          speed: 50,
          speed_vary: !1,
          caret: "\u258E",
          tag: "span",
          blink: !0,
          beep: !1,
          blink_perm: !1,
          repeat: -3,
          pause_on_click: !1,
          pause_on_tab_switch: 0,
          wrap: !1,
          mistype: !1,
          locale: "en",
          init: !1,
          typing: !1,
          fin: !1
        }, a ? a : b.data());
        r = w = !1;
        var d, H;
        b.data().t || (b.wrapInner(c("<" + a.tag + "/>", {
          "class": "t-container",
          style: "top:auto;bottom:auto;"
        })), /^[ar]/.test(b.css("position")) || b.css({
          position: "relative"
        }), b.css({
          overflow: "hidden"
        }));
        a.wrap && !b.parent().data().t_wrap && (b.wrap(c("<div/>", /[.#]/.test(a.wrap[0]) ? "#" == a.wrap[0] ? {
          id: a.wrap.substr(1)
        } : {
          "class": a.wrap.substr(1)
        } : {
          style: a.wrap
        })), b.parent().data("t_wrap", 1));
        e(a.beep, "b") || (a.beep = !1);
        !0 === a.beep && e(c("html").data().__TAC, "u") && (c("html").data("__TAC", __TAC = (window.AudioContext = window.AudioContext || window.webkitAudioContext) ? new AudioContext() : !1), __TAC || (a.beep = !1));
        !1 === a.repeat && (a.repeat = -3);
        !0 === a.blink && (a.blink = 3 * a.speed);
        e(a.blink) && 100 > a.blink && (a.blink = 100);
        !0 === a.caret && (a.caret = "\u258E");
        e(a.caret, "s") && !c(".t-caret", b)[0] && (!e(a.blink) && (a.blink = !1), w = c("<" + a.tag + "/>", {
          "class": "t-caret",
          html: a.caret
        }).appendTo(b), a.blink && b.append("\u200B") && b.data("bi", setInterval(function () {
          if (0 == q.length) return clearInterval(q.data("bi"));
          ++B >= q.data().blink / 10 && (B = 0, (q.data().blinking | (v = "h" == w.css("visibility")[0]) || a.blink_perm) && w.css({
            visibility: v ? "visible" : "hidden"
          }));
        }, 10)));
        a.blink || b.data().bi && clearInterval(b.data().bi) && b.removeData("bi");
        !e(a.blink_perm, "b") && (a.blink_perm = !0);
        a.speed = !e(a.speed) || 10 > a.speed ? 10 : a.speed;
        a.speed_vary && (a.speed /= 2.5);
        1 < a.mistype || (a.mistype = !1);
        a.ssbs = Math.abs(a.blink - a.speed);
        b.data(a);
        c(".typing-0", b).replaceWith(function () {
          return this.childNodes;
        });
        c(".typing-add", b).remove();
        F = b = c(":first", b);
        var g = e(k, "s") ? k : b.html();
        "" == g && (g = "\u200B");
        b.empty();
        q.show().css({
          visibility: "visible"
        });
        e(a.delay) && 0 < a.delay && (d = ~~(1E3 * a.delay / a.speed)) && a.blink_perm || z(1);
        G = e(a.typing, "f");
        !0 === a.pause_on_click && b.parent().off("click").click(function (a) {
          "1" != c(a.target).data().click && c(this).t("pause");
        });
        !0 === a.pause_on_tab_switch ? e(c("html").data().__TAB, "u") && (c("html").data("__TAB", 1), c(document).on("visibilitychange", function () {
          c(".t-container").parent().each(function () {
            h = c(document).attr("visibilityState").charAt(0);
            "h" == h && c(this).data().paused && c(this).data("keep_paused", 1);
            c(this).p("h" == h ? !0 : c(this).data().keep_paused && c(this).removeData("keep_paused") ? !0 : !1);
          });
        })) : !1 === a.pause_on_tab_switch && c("html").data().__TAB && (c("html").removeData("__TAB"), c(document).off("visibilitychange"));
      }

      /<kbd.*?>/i.test(g = String(r || g)) && b.parent().data("kbd", j_ = 1) && b.parent().data("mistype", b.parent().data("mistype") ? _j = b.parent().data().mistype : _j = 10) && (a.mistype = _j) && (a.kbd = j_ ? j_ : !1);
      g = g.replace(/(.*?)[\u200b]+$/, "$1").replace(/<!\-\-([\s\S]+?)\-\->/g, "$1").replace(/<ins>([^0-9])<\/ins>/g, "$1").replace(/<(embed|command|col|wbr|img|br|input|hr|area|source|track|keygen|param)(.*?)[\/]?>/g, "<#$1$2/>").replace(/<ins>\s*(\d*[.]?\d*)\s*(<\/ins>)/g, '<ins data-ins="$1"></ins>').replace(/<ins(.*?)>([\s\S]*?)(<\/ins>)/g, function (a, b, c) {
        return "<#ins" + b + ">" + c.replace(/<(?!#)/g, "<#") + "<#/ins>" + (c ? "" : "</ins>");
      }).replace(/<(del.*?data-del=")(.*?)(".*?)><\/(del>)/g, "<#$1$2$3><#/$4$2</$4").replace(/<del(.*?)>([\s\S]*?)<\/del>/g, function (a, b, c, d) {
        m = (m = c.match(/<s>\s*(.*?)\s*<\/s>/i)) && m[0] ? ' data-s="' + (m[1] || "1") + '"' : "";
        t = (t = c.match(/data-ins="(.*?)"/)) && t[1] ? t[1] : "" == m ? .25 : .75;
        c = c.replace(/(<s>.*?<\/s>|<[\/]?.*?>)/g, "");
        return "<del" + b + m + ' data-del="' + c.replace(/\n/, "\\n") + '" data-ins="' + t + '">' + ("*" != c ? c : "") + "</del>";
      }).replace(/<s>\s*(\d+)\s*<\/s>/g, '<s data-speed="$1"></s>').replace(/<(\w+)(.*?)>/g, "<$1$2><#/$1>").replace(/<\/(\w+)>/g, "</> ($1)").replace(/<[#]+/g, "<").replace(/(\/del>)\*</g, "$1<").match(/<ins.*?>[\s\S]*?<\/ins>|<[^<]+\/>|<\/> \(\w+\)|<[\s\S]+?><\/\w+>|&[#x]?[a-z0-9]+;|\r|\n|\t|\S|\s/ig);
      !e(d) && (d = g.shift());
      g.push("\u200B");
      "de" == a.locale && (y = "12qwertzuiop\xFC+asdfghjkl\xF6\xE4#<yxcvbnm,.-!\"\xA7$%&/(()=?1234567890\xDF*p+");
      var J = E() + 1;
      !r && e(a.init, "f") && a.init(q);
      q.data("ti", H = setInterval(function () {
        n = q;
        if (++A >= n.data("speed") / 10) if (A = 0, n.data("paused")) x = 1;else if (!p) {
          p = !p;

          if (e(d)) {
            if (0 < --d) {
              p = !p;
              z(.25 >= b.data().ins ? 0 : 1 == x ? x = -1 : 1);
              return;
            }

            d = b.data().ins ? "</>" : g.shift();
          } else if (a.speed_vary && ~~(4 * Math.random())) {
            p = !p;
            return;
          }

          z(0);

          if (b.data().del && (!0 === n.data().beep && f.beep(), b.data().s && !d[0] && b.text(""), u = String(b.data().del), !e(d, "a") && "/" == d[1] && (d = u.replace(/\\n/g, "\n").split([])), e(d, "a"))) {
            if (x = d.pop()) {
              b.data().s ? b.html(d.join([]) + "<mark " + ("." == (m = String(b.data().s))[0] ? 'class="' + m.substr(1) + '"' : 'style="background:' + ("1" == m ? "yellow" : m.split(",")[0]) + ((m = m.split(",")[1]) ? ";color:" + m : "") + ';"') + ">" + b.data().del.substr(d.length) + "</mark>") : b.text(d.join([]));
              p = !p;
              return;
            }

            "*" == u && (F.wrapInner(c("<" + a.tag + "/>", {
              "class": "typing-0",
              style: "display:none;"
            })), b = b.parent(), r && (g = c.merge(["<" + a.tag + ' class="typing-add"></' + a.tag + ">"], g, ["</" + a.tag + ">"]), b = b.parent()));
            b = b.parent();
            "\u200B" == u && b.find(":last").remove();
            d = "";
          }

          for (; "/" == d[1];) {
            b = b.parent(), d = g.shift() || "";
          }

          for (;;) {
            if (!0 === n.data().beep && f.beep(), b.append(d), G && a.typing(n, d, E(), J), !/<ins.*?>[\s\S]+</.test(d) && /></.test(d) && (b = b.find(":last")), (_ss = b.data("speed")) && n.s(_ss), g[0] && /<\w+/.test(g[0])) d = g.shift();else break;
          }

          (d = g.shift()) ? ((a.mistype && !a.kbd || a.kbd && /kbd/i.test(b.prop("tagName"))) && d && !d[1] && "\u200B" != b.data().del && " " != d && !~~(Math.random() * a.mistype) && -1 < (__ = c.inArray(d.toLowerCase(), y, 2)) && (__ += ~~(2 * Math.random()) + 1, ~~(2 * Math.random()) && (__ -= 3), g = c.merge([90 > d.charCodeAt(0) ? y[__].toUpperCase() : y[__], "</del>", d], g), d = "<del data-ins=\".25\" data-del=\"\u200B\"></del>"), d && "/" == d[1] && b.data().ins && (d = ~~(1E3 * Number(b.data().ins) / n.data().speed)), p = !p) : (clearInterval(H), n.removeData(["is_typing", "paused", "ti"]), e(a.repeat) && --a.repeat, -1 < a.repeat ? (a.init = !1, n.t(e(k, "o") ? a : k, a)) : (z(1), e(a.fin, "f") && a.fin(n)));
        }
      }, 10));
    });
  };

  c.fn.a = function (l) {
    return this.each(function () {
      c(this).data().t && c(this).t("add", l);
    });
  };

  c.fn.p = function (l) {
    return this.each(function () {
      c(this).data().is_typing && c(this).t("pause", l ? !1 === l || !0 === l ? l : void 0 : void 0);
    });
  };

  c.fn.b = function (l) {
    return this.each(function () {
      c(this).data().t && c(this).t("beep");
    });
  };

  c.fn.s = function (l) {
    return this.each(function () {
      c(this).data().t && c(this).t("speed", l);
    });
  };

  c.fn.t_off = function (l) {
    return this.each(function () {
      c(this).data().t && ((ti = C.data("ti")) && clearInterval(ti), (bi = C.data("bi")) && clearInterval(bi), C.removeData(), c(".t-container", C).replaceWith(function () {
        return this.childNodes;
      }), c(".t-caret", C).remove());
      !0 === l && C.text("");
    });
  };
})(jQuery);

/***/ })

/******/ });
//# sourceMappingURL=t-1911fc96d078047389a2.js.map