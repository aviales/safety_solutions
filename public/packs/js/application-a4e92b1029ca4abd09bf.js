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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/channels sync recursive _channel\\.js$":
/*!****************************************************!*\
  !*** ./app/javascript/channels sync _channel\.js$ ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./app/javascript/channels sync recursive _channel\\.js$";

/***/ }),

/***/ "./app/javascript/channels/index.js":
/*!******************************************!*\
  !*** ./app/javascript/channels/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.
var channels = __webpack_require__("./app/javascript/channels sync recursive _channel\\.js$");

channels.keys().forEach(channels);

/***/ }),

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/ujs */ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js");
/* harmony import */ var turbolinks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(turbolinks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rails/activestorage */ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js");
/* harmony import */ var _rails_activestorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! channels */ "./app/javascript/channels/index.js");
/* harmony import */ var channels__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(channels__WEBPACK_IMPORTED_MODULE_3__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'chartkick'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .
//= require popper
//= require chartkick
//= require Chart.bundle






window.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_5___default.a; //import  "../layouts/application.css"


window.$ = window.JQuery = jquery__WEBPACK_IMPORTED_MODULE_6___default.a; // import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel'

_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default.a.start();
turbolinks__WEBPACK_IMPORTED_MODULE_1___default.a.start();
_rails_activestorage__WEBPACK_IMPORTED_MODULE_2__["start"]();
console.log('hella');
addEventListener('DOMContentLoaded', function () {
  var btn_menu = document.querySelector('.btn_menu');

  if (btn_menu) {
    btn_menu.addEventListener('click', function () {
      var menu_items = document.querySelector('.navbar_menu_items');
      menu_items.classList.toggle('show');
    });
  }
});
/* Bad smooth scrolling with turbolinks
$(document).on('turbolinks:load', function() {
    $(document).on('click', '.scroll-button', function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 160
          }, 1000);
          return false;
        }
      }
    });
  });*/

window.onscroll = function (e) {
  $('.logo').hide();
};
/* ..............................................
Loader 
   ................................................. */


$(window).on('load', function () {
  $('.preloader').fadeOut();
  $('#preloader').delay(550).fadeOut('slow');
  $('body').delay(450).css({
    'overflow': 'visible'
  });
});

/***/ }),

/***/ "./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@rails/activestorage/app/assets/javascripts/activestorage.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === "object" && typeof module !== "undefined" ? factory(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function (exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return module = {
      exports: {}
    }, fn(module, module.exports), module.exports;
  }

  var sparkMd5 = createCommonjsModule(function (module, exports) {
    (function (factory) {
      {
        module.exports = factory();
      }
    })(function (undefined) {
      var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

      function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
      }

      function md5blk(s) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }

        return md5blks;
      }

      function md5blk_array(a) {
        var md5blks = [],
            i;

        for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }

        return md5blks;
      }

      function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
        }

        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
          md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= a[i] << (i % 4 << 3);
        }

        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(state, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state;
      }

      function rhex(n) {
        var s = "",
            j;

        for (j = 0; j < 4; j += 1) {
          s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
        }

        return s;
      }

      function hex(x) {
        var i;

        for (i = 0; i < x.length; i += 1) {
          x[i] = rhex(x[i]);
        }

        return x.join("");
      }

      if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;

      if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function clamp(val, length) {
            val = val | 0 || 0;

            if (val < 0) {
              return Math.max(val + length, 0);
            }

            return Math.min(val, length);
          }

          ArrayBuffer.prototype.slice = function (from, to) {
            var length = this.byteLength,
                begin = clamp(from, length),
                end = length,
                num,
                target,
                targetArray,
                sourceArray;

            if (to !== undefined) {
              end = clamp(to, length);
            }

            if (begin > end) {
              return new ArrayBuffer(0);
            }

            num = end - begin;
            target = new ArrayBuffer(num);
            targetArray = new Uint8Array(target);
            sourceArray = new Uint8Array(this, begin, num);
            targetArray.set(sourceArray);
            return target;
          };
        })();
      }

      function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
          str = unescape(encodeURIComponent(str));
        }

        return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
            buff = new ArrayBuffer(length),
            arr = new Uint8Array(buff),
            i;

        for (i = 0; i < length; i += 1) {
          arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
          bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
      }

      function SparkMD5() {
        this.reset();
      }

      SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this;
      };

      SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;
        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);
        return this;
      };

      SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      };

      SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;
        return this;
      };

      SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };

      SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);

        if (i > 55) {
          md5cycle(this._hash, tail);

          for (i = 0; i < 16; i += 1) {
            tail[i] = 0;
          }
        }

        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
      };

      SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      SparkMD5.ArrayBuffer = function () {
        this.reset();
      };

      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;
        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
          md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
          tail[i >> 2] |= buff[i] << (i % 4 << 3);
        }

        this._finish(tail, length);

        ret = hex(this._hash);

        if (raw) {
          ret = hexToBinaryString(ret);
        }

        this.reset();
        return ret;
      };

      SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };

      SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state;
      };

      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
    });
  });

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var fileSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

  var FileChecksum = function () {
    createClass(FileChecksum, null, [{
      key: "create",
      value: function create(file, callback) {
        var instance = new FileChecksum(file);
        instance.create(callback);
      }
    }]);

    function FileChecksum(file) {
      classCallCheck(this, FileChecksum);
      this.file = file;
      this.chunkSize = 2097152;
      this.chunkCount = Math.ceil(this.file.size / this.chunkSize);
      this.chunkIndex = 0;
    }

    createClass(FileChecksum, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        this.callback = callback;
        this.md5Buffer = new sparkMd5.ArrayBuffer();
        this.fileReader = new FileReader();
        this.fileReader.addEventListener("load", function (event) {
          return _this.fileReaderDidLoad(event);
        });
        this.fileReader.addEventListener("error", function (event) {
          return _this.fileReaderDidError(event);
        });
        this.readNextChunk();
      }
    }, {
      key: "fileReaderDidLoad",
      value: function fileReaderDidLoad(event) {
        this.md5Buffer.append(event.target.result);

        if (!this.readNextChunk()) {
          var binaryDigest = this.md5Buffer.end(true);
          var base64digest = btoa(binaryDigest);
          this.callback(null, base64digest);
        }
      }
    }, {
      key: "fileReaderDidError",
      value: function fileReaderDidError(event) {
        this.callback("Error reading " + this.file.name);
      }
    }, {
      key: "readNextChunk",
      value: function readNextChunk() {
        if (this.chunkIndex < this.chunkCount || this.chunkIndex == 0 && this.chunkCount == 0) {
          var start = this.chunkIndex * this.chunkSize;
          var end = Math.min(start + this.chunkSize, this.file.size);
          var bytes = fileSlice.call(this.file, start, end);
          this.fileReader.readAsArrayBuffer(bytes);
          this.chunkIndex++;
          return true;
        } else {
          return false;
        }
      }
    }]);
    return FileChecksum;
  }();

  function getMetaValue(name) {
    var element = findElement(document.head, 'meta[name="' + name + '"]');

    if (element) {
      return element.getAttribute("content");
    }
  }

  function findElements(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    var elements = root.querySelectorAll(selector);
    return toArray$1(elements);
  }

  function findElement(root, selector) {
    if (typeof root == "string") {
      selector = root;
      root = document;
    }

    return root.querySelector(selector);
  }

  function dispatchEvent(element, type) {
    var eventInit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var disabled = element.disabled;
    var bubbles = eventInit.bubbles,
        cancelable = eventInit.cancelable,
        detail = eventInit.detail;
    var event = document.createEvent("Event");
    event.initEvent(type, bubbles || true, cancelable || true);
    event.detail = detail || {};

    try {
      element.disabled = false;
      element.dispatchEvent(event);
    } finally {
      element.disabled = disabled;
    }

    return event;
  }

  function toArray$1(value) {
    if (Array.isArray(value)) {
      return value;
    } else if (Array.from) {
      return Array.from(value);
    } else {
      return [].slice.call(value);
    }
  }

  var BlobRecord = function () {
    function BlobRecord(file, checksum, url) {
      var _this = this;

      classCallCheck(this, BlobRecord);
      this.file = file;
      this.attributes = {
        filename: file.name,
        content_type: file.type || "application/octet-stream",
        byte_size: file.size,
        checksum: checksum
      };
      this.xhr = new XMLHttpRequest();
      this.xhr.open("POST", url, true);
      this.xhr.responseType = "json";
      this.xhr.setRequestHeader("Content-Type", "application/json");
      this.xhr.setRequestHeader("Accept", "application/json");
      this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      var csrfToken = getMetaValue("csrf-token");

      if (csrfToken != undefined) {
        this.xhr.setRequestHeader("X-CSRF-Token", csrfToken);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobRecord, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(JSON.stringify({
          blob: this.attributes
        }));
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        if (this.status >= 200 && this.status < 300) {
          var response = this.response;
          var direct_upload = response.direct_upload;
          delete response.direct_upload;
          this.attributes = response;
          this.directUploadData = direct_upload;
          this.callback(null, this.toJSON());
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
      }
    }, {
      key: "toJSON",
      value: function toJSON() {
        var result = {};

        for (var key in this.attributes) {
          result[key] = this.attributes[key];
        }

        return result;
      }
    }, {
      key: "status",
      get: function get$$1() {
        return this.xhr.status;
      }
    }, {
      key: "response",
      get: function get$$1() {
        var _xhr = this.xhr,
            responseType = _xhr.responseType,
            response = _xhr.response;

        if (responseType == "json") {
          return response;
        } else {
          return JSON.parse(response);
        }
      }
    }]);
    return BlobRecord;
  }();

  var BlobUpload = function () {
    function BlobUpload(blob) {
      var _this = this;

      classCallCheck(this, BlobUpload);
      this.blob = blob;
      this.file = blob.file;
      var _blob$directUploadDat = blob.directUploadData,
          url = _blob$directUploadDat.url,
          headers = _blob$directUploadDat.headers;
      this.xhr = new XMLHttpRequest();
      this.xhr.open("PUT", url, true);
      this.xhr.responseType = "text";

      for (var key in headers) {
        this.xhr.setRequestHeader(key, headers[key]);
      }

      this.xhr.addEventListener("load", function (event) {
        return _this.requestDidLoad(event);
      });
      this.xhr.addEventListener("error", function (event) {
        return _this.requestDidError(event);
      });
    }

    createClass(BlobUpload, [{
      key: "create",
      value: function create(callback) {
        this.callback = callback;
        this.xhr.send(this.file.slice());
      }
    }, {
      key: "requestDidLoad",
      value: function requestDidLoad(event) {
        var _xhr = this.xhr,
            status = _xhr.status,
            response = _xhr.response;

        if (status >= 200 && status < 300) {
          this.callback(null, response);
        } else {
          this.requestDidError(event);
        }
      }
    }, {
      key: "requestDidError",
      value: function requestDidError(event) {
        this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
      }
    }]);
    return BlobUpload;
  }();

  var id = 0;

  var DirectUpload = function () {
    function DirectUpload(file, url, delegate) {
      classCallCheck(this, DirectUpload);
      this.id = ++id;
      this.file = file;
      this.url = url;
      this.delegate = delegate;
    }

    createClass(DirectUpload, [{
      key: "create",
      value: function create(callback) {
        var _this = this;

        FileChecksum.create(this.file, function (error, checksum) {
          if (error) {
            callback(error);
            return;
          }

          var blob = new BlobRecord(_this.file, checksum, _this.url);
          notify(_this.delegate, "directUploadWillCreateBlobWithXHR", blob.xhr);
          blob.create(function (error) {
            if (error) {
              callback(error);
            } else {
              var upload = new BlobUpload(blob);
              notify(_this.delegate, "directUploadWillStoreFileWithXHR", upload.xhr);
              upload.create(function (error) {
                if (error) {
                  callback(error);
                } else {
                  callback(null, blob.toJSON());
                }
              });
            }
          });
        });
      }
    }]);
    return DirectUpload;
  }();

  function notify(object, methodName) {
    if (object && typeof object[methodName] == "function") {
      for (var _len = arguments.length, messages = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        messages[_key - 2] = arguments[_key];
      }

      return object[methodName].apply(object, messages);
    }
  }

  var DirectUploadController = function () {
    function DirectUploadController(input, file) {
      classCallCheck(this, DirectUploadController);
      this.input = input;
      this.file = file;
      this.directUpload = new DirectUpload(this.file, this.url, this);
      this.dispatch("initialize");
    }

    createClass(DirectUploadController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = this.input.name;
        this.input.insertAdjacentElement("beforebegin", hiddenInput);
        this.dispatch("start");
        this.directUpload.create(function (error, attributes) {
          if (error) {
            hiddenInput.parentNode.removeChild(hiddenInput);

            _this.dispatchError(error);
          } else {
            hiddenInput.value = attributes.signed_id;
          }

          _this.dispatch("end");

          callback(error);
        });
      }
    }, {
      key: "uploadRequestDidProgress",
      value: function uploadRequestDidProgress(event) {
        var progress = event.loaded / event.total * 100;

        if (progress) {
          this.dispatch("progress", {
            progress: progress
          });
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        detail.file = this.file;
        detail.id = this.directUpload.id;
        return dispatchEvent(this.input, "direct-upload:" + name, {
          detail: detail
        });
      }
    }, {
      key: "dispatchError",
      value: function dispatchError(error) {
        var event = this.dispatch("error", {
          error: error
        });

        if (!event.defaultPrevented) {
          alert(error);
        }
      }
    }, {
      key: "directUploadWillCreateBlobWithXHR",
      value: function directUploadWillCreateBlobWithXHR(xhr) {
        this.dispatch("before-blob-request", {
          xhr: xhr
        });
      }
    }, {
      key: "directUploadWillStoreFileWithXHR",
      value: function directUploadWillStoreFileWithXHR(xhr) {
        var _this2 = this;

        this.dispatch("before-storage-request", {
          xhr: xhr
        });
        xhr.upload.addEventListener("progress", function (event) {
          return _this2.uploadRequestDidProgress(event);
        });
      }
    }, {
      key: "url",
      get: function get$$1() {
        return this.input.getAttribute("data-direct-upload-url");
      }
    }]);
    return DirectUploadController;
  }();

  var inputSelector = "input[type=file][data-direct-upload-url]:not([disabled])";

  var DirectUploadsController = function () {
    function DirectUploadsController(form) {
      classCallCheck(this, DirectUploadsController);
      this.form = form;
      this.inputs = findElements(form, inputSelector).filter(function (input) {
        return input.files.length;
      });
    }

    createClass(DirectUploadsController, [{
      key: "start",
      value: function start(callback) {
        var _this = this;

        var controllers = this.createDirectUploadControllers();

        var startNextController = function startNextController() {
          var controller = controllers.shift();

          if (controller) {
            controller.start(function (error) {
              if (error) {
                callback(error);

                _this.dispatch("end");
              } else {
                startNextController();
              }
            });
          } else {
            callback();

            _this.dispatch("end");
          }
        };

        this.dispatch("start");
        startNextController();
      }
    }, {
      key: "createDirectUploadControllers",
      value: function createDirectUploadControllers() {
        var controllers = [];
        this.inputs.forEach(function (input) {
          toArray$1(input.files).forEach(function (file) {
            var controller = new DirectUploadController(input, file);
            controllers.push(controller);
          });
        });
        return controllers;
      }
    }, {
      key: "dispatch",
      value: function dispatch(name) {
        var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return dispatchEvent(this.form, "direct-uploads:" + name, {
          detail: detail
        });
      }
    }]);
    return DirectUploadsController;
  }();

  var processingAttribute = "data-direct-uploads-processing";
  var submitButtonsByForm = new WeakMap();
  var started = false;

  function start() {
    if (!started) {
      started = true;
      document.addEventListener("click", didClick, true);
      document.addEventListener("submit", didSubmitForm);
      document.addEventListener("ajax:before", didSubmitRemoteElement);
    }
  }

  function didClick(event) {
    var target = event.target;

    if ((target.tagName == "INPUT" || target.tagName == "BUTTON") && target.type == "submit" && target.form) {
      submitButtonsByForm.set(target.form, target);
    }
  }

  function didSubmitForm(event) {
    handleFormSubmissionEvent(event);
  }

  function didSubmitRemoteElement(event) {
    if (event.target.tagName == "FORM") {
      handleFormSubmissionEvent(event);
    }
  }

  function handleFormSubmissionEvent(event) {
    var form = event.target;

    if (form.hasAttribute(processingAttribute)) {
      event.preventDefault();
      return;
    }

    var controller = new DirectUploadsController(form);
    var inputs = controller.inputs;

    if (inputs.length) {
      event.preventDefault();
      form.setAttribute(processingAttribute, "");
      inputs.forEach(disable);
      controller.start(function (error) {
        form.removeAttribute(processingAttribute);

        if (error) {
          inputs.forEach(enable);
        } else {
          submitForm(form);
        }
      });
    }
  }

  function submitForm(form) {
    var button = submitButtonsByForm.get(form) || findElement(form, "input[type=submit], button[type=submit]");

    if (button) {
      var _button = button,
          disabled = _button.disabled;
      button.disabled = false;
      button.focus();
      button.click();
      button.disabled = disabled;
    } else {
      button = document.createElement("input");
      button.type = "submit";
      button.style.display = "none";
      form.appendChild(button);
      button.click();
      form.removeChild(button);
    }

    submitButtonsByForm.delete(form);
  }

  function disable(input) {
    input.disabled = true;
  }

  function enable(input) {
    input.disabled = false;
  }

  function autostart() {
    if (window.ActiveStorage) {
      start();
    }
  }

  setTimeout(autostart, 1);
  exports.start = start;
  exports.DirectUpload = DirectUpload;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!******************************************************************!*\
  !*** ./node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/main/actionview/app/assets/javascripts
Released under the MIT license
 */
;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function CustomEvent(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function get() {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function prepareOptions(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function createXHR(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
          CSRFProtection(xhr);
        }

        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function processResponse(response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function toArray(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function allowAction(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function disableLinkElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function enableLinkElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function disableFormElements(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function disableFormElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function enableFormElements(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function enableFormElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function isXhrRedirect(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function isRemote(element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function beforeSend(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function success() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function error() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function complete() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/highcharts/highcharts.js":
/*!***********************************************!*\
  !*** ./node_modules/highcharts/highcharts.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 Highcharts JS v9.1.0 (2021-05-03)

 (c) 2009-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (W, O) {
  "object" === ( false ? undefined : _typeof(module)) && module.exports ? (O["default"] = O, module.exports = W.document ? O(W) : O) :  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return O(W);
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})("undefined" !== typeof window ? window : this, function (W) {
  function O(D, b, e, z) {
    D.hasOwnProperty(b) || (D[b] = z.apply(null, e));
  }

  var e = {};
  O(e, "Core/Globals.js", [], function () {
    var D = "undefined" !== typeof W ? W : "undefined" !== typeof window ? window : {},
        b;

    (function (b) {
      b.SVG_NS = "http://www.w3.org/2000/svg";
      b.product = "Highcharts";
      b.version = "9.1.0";
      b.win = D;
      b.doc = b.win.document;
      b.svg = b.doc && b.doc.createElementNS && !!b.doc.createElementNS(b.SVG_NS, "svg").createSVGRect;
      b.userAgent = b.win.navigator && b.win.navigator.userAgent || "";
      b.isChrome = -1 !== b.userAgent.indexOf("Chrome");
      b.isFirefox = -1 !== b.userAgent.indexOf("Firefox");
      b.isMS = /(edge|msie|trident)/i.test(b.userAgent) && !b.win.opera;
      b.isSafari = !b.isChrome && -1 !== b.userAgent.indexOf("Safari");
      b.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(b.userAgent);
      b.isWebKit = -1 !== b.userAgent.indexOf("AppleWebKit");
      b.deg2rad = 2 * Math.PI / 360;
      b.hasBidiBug = b.isFirefox && 4 > parseInt(b.userAgent.split("Firefox/")[1], 10);
      b.hasTouch = !!b.win.TouchEvent;
      b.marginNames = ["plotTop", "marginRight", "marginBottom", "plotLeft"];

      b.noop = function () {};

      b.supportsPassiveEvents = function () {
        var D = !1;

        if (!b.isMS) {
          var e = Object.defineProperty({}, "passive", {
            get: function get() {
              D = !0;
            }
          });
          b.win.addEventListener && b.win.removeEventListener && (b.win.addEventListener("testPassive", b.noop, e), b.win.removeEventListener("testPassive", b.noop, e));
        }

        return D;
      }();

      b.charts = [];
      b.dateFormats = {};
      b.seriesTypes = {};
      b.symbolSizes = {};
    })(b || (b = {}));

    return b;
  });
  O(e, "Core/Utilities.js", [e["Core/Globals.js"]], function (D) {
    function b(a, c, h, r) {
      var y = c ? "Highcharts error" : "Highcharts warning";
      32 === a && (a = y + ": Deprecated member");
      var d = w(a),
          M = d ? y + " #" + a + ": www.highcharts.com/errors/" + a + "/" : a.toString();

      if ("undefined" !== typeof r) {
        var t = "";
        d && (M += "?");
        n(r, function (p, a) {
          t += "\n - " + a + ": " + p;
          d && (M += encodeURI(a) + "=" + encodeURI(p));
        });
        M += t;
      }

      E(Highcharts, "displayError", {
        chart: h,
        code: a,
        message: M,
        params: r
      }, function () {
        if (c) throw Error(M);
        g.console && -1 === b.messages.indexOf(M) && console.warn(M);
      });
      b.messages.push(M);
    }

    function e(a, c) {
      var y = {};
      n(a, function (g, h) {
        if (C(a[h], !0) && !a.nodeType && c[h]) g = e(a[h], c[h]), Object.keys(g).length && (y[h] = g);else if (C(a[h]) || a[h] !== c[h]) y[h] = a[h];
      });
      return y;
    }

    function z(a, c) {
      return parseInt(a, c || 10);
    }

    function H(a) {
      return "string" === typeof a;
    }

    function G(a) {
      a = Object.prototype.toString.call(a);
      return "[object Array]" === a || "[object Array Iterator]" === a;
    }

    function C(a, c) {
      return !!a && "object" === _typeof(a) && (!c || !G(a));
    }

    function B(a) {
      return C(a) && "number" === typeof a.nodeType;
    }

    function x(a) {
      var c = a && a.constructor;
      return !(!C(a, !0) || B(a) || !c || !c.name || "Object" === c.name);
    }

    function w(a) {
      return "number" === typeof a && !isNaN(a) && Infinity > a && -Infinity < a;
    }

    function v(a) {
      return "undefined" !== typeof a && null !== a;
    }

    function f(a, c, g) {
      var y;
      H(c) ? v(g) ? a.setAttribute(c, g) : a && a.getAttribute && ((y = a.getAttribute(c)) || "class" !== c || (y = a.getAttribute(c + "Name"))) : n(c, function (c, y) {
        a.setAttribute(y, c);
      });
      return y;
    }

    function d(a, c) {
      var y;
      a || (a = {});

      for (y in c) {
        a[y] = c[y];
      }

      return a;
    }

    function q() {
      for (var a = arguments, c = a.length, g = 0; g < c; g++) {
        var h = a[g];
        if ("undefined" !== typeof h && null !== h) return h;
      }
    }

    function k(a, c) {
      D.isMS && !D.svg && c && "undefined" !== typeof c.opacity && (c.filter = "alpha(opacity=" + 100 * c.opacity + ")");
      d(a.style, c);
    }

    function l(a, g, h, r, m) {
      a = c.createElement(a);
      g && d(a, g);
      m && k(a, {
        padding: "0",
        border: "none",
        margin: "0"
      });
      h && k(a, h);
      r && r.appendChild(a);
      return a;
    }

    function N(a, c) {
      return parseFloat(a.toPrecision(c || 14));
    }

    function u(a, c, h) {
      var y = D.getStyle || u;
      if ("width" === c) return c = Math.min(a.offsetWidth, a.scrollWidth), h = a.getBoundingClientRect && a.getBoundingClientRect().width, h < c && h >= c - 1 && (c = Math.floor(h)), Math.max(0, c - (y(a, "padding-left", !0) || 0) - (y(a, "padding-right", !0) || 0));
      if ("height" === c) return Math.max(0, Math.min(a.offsetHeight, a.scrollHeight) - (y(a, "padding-top", !0) || 0) - (y(a, "padding-bottom", !0) || 0));
      g.getComputedStyle || b(27, !0);

      if (a = g.getComputedStyle(a, void 0)) {
        var r = a.getPropertyValue(c);
        q(h, "opacity" !== c) && (r = z(r));
      }

      return r;
    }

    function n(a, c, g) {
      for (var h in a) {
        Object.hasOwnProperty.call(a, h) && c.call(g || a[h], a[h], h, a);
      }
    }

    function J(a, c, g) {
      function h(t, p) {
        var c = a.removeEventListener || D.removeEventListenerPolyfill;
        c && c.call(a, t, p, !1);
      }

      function y(t) {
        var p;

        if (a.nodeName) {
          if (c) {
            var g = {};
            g[c] = !0;
          } else g = t;

          n(g, function (a, c) {
            if (t[c]) for (p = t[c].length; p--;) {
              h(c, t[c][p].fn);
            }
          });
        }
      }

      var r = "function" === typeof a && a.prototype || a;

      if (Object.hasOwnProperty.call(r, "hcEvents")) {
        var M = r.hcEvents;
        c ? (r = M[c] || [], g ? (M[c] = r.filter(function (a) {
          return g !== a.fn;
        }), h(c, g)) : (y(M), M[c] = [])) : (y(M), delete r.hcEvents);
      }
    }

    function E(a, g, h, r) {
      h = h || {};

      if (c.createEvent && (a.dispatchEvent || a.fireEvent && a !== D)) {
        var y = c.createEvent("Events");
        y.initEvent(g, !0, !0);
        h = d(y, h);
        a.dispatchEvent ? a.dispatchEvent(h) : a.fireEvent(g, h);
      } else if (a.hcEvents) {
        h.target || d(h, {
          preventDefault: function preventDefault() {
            h.defaultPrevented = !0;
          },
          target: a,
          type: g
        });
        y = [];

        for (var m = a, M = !1; m.hcEvents;) {
          Object.hasOwnProperty.call(m, "hcEvents") && m.hcEvents[g] && (y.length && (M = !0), y.unshift.apply(y, m.hcEvents[g])), m = Object.getPrototypeOf(m);
        }

        M && y.sort(function (a, p) {
          return a.order - p.order;
        });
        y.forEach(function (t) {
          !1 === t.fn.call(a, h) && h.preventDefault();
        });
      }

      r && !h.defaultPrevented && r.call(a, h);
    }

    var m = D.charts,
        c = D.doc,
        g = D.win;
    "";
    (b || (b = {})).messages = [];
    var a;

    Math.easeInOutSine = function (a) {
      return -.5 * (Math.cos(Math.PI * a) - 1);
    };

    var h = Array.prototype.find ? function (a, c) {
      return a.find(c);
    } : function (a, c) {
      var g,
          h = a.length;

      for (g = 0; g < h; g++) {
        if (c(a[g], g)) return a[g];
      }
    };
    n({
      map: "map",
      each: "forEach",
      grep: "filter",
      reduce: "reduce",
      some: "some"
    }, function (a, c) {
      D[c] = function (g) {
        var h;
        b(32, !1, void 0, (h = {}, h["Highcharts." + c] = "use Array." + a, h));
        return Array.prototype[a].apply(g, [].slice.call(arguments, 1));
      };
    });

    var r,
        A = function () {
      var a = Math.random().toString(36).substring(2, 9) + "-",
          c = 0;
      return function () {
        return "highcharts-" + (r ? "" : a) + c++;
      };
    }();

    g.jQuery && (g.jQuery.fn.highcharts = function () {
      var a = [].slice.call(arguments);
      if (this[0]) return a[0] ? (new D[H(a[0]) ? a.shift() : "Chart"](this[0], a[0], a[1]), this) : m[f(this[0], "data-highcharts-chart")];
    });
    return {
      addEvent: function addEvent(a, c, g, h) {
        void 0 === h && (h = {});
        var r = "function" === typeof a && a.prototype || a;
        Object.hasOwnProperty.call(r, "hcEvents") || (r.hcEvents = {});
        r = r.hcEvents;
        D.Point && a instanceof D.Point && a.series && a.series.chart && (a.series.chart.runTrackerClick = !0);
        var y = a.addEventListener || D.addEventListenerPolyfill;
        y && y.call(a, c, g, D.supportsPassiveEvents ? {
          passive: void 0 === h.passive ? -1 !== c.indexOf("touch") : h.passive,
          capture: !1
        } : !1);
        r[c] || (r[c] = []);
        r[c].push({
          fn: g,
          order: "number" === typeof h.order ? h.order : Infinity
        });
        r[c].sort(function (a, t) {
          return a.order - t.order;
        });
        return function () {
          J(a, c, g);
        };
      },
      arrayMax: function arrayMax(a) {
        for (var c = a.length, g = a[0]; c--;) {
          a[c] > g && (g = a[c]);
        }

        return g;
      },
      arrayMin: function arrayMin(a) {
        for (var c = a.length, g = a[0]; c--;) {
          a[c] < g && (g = a[c]);
        }

        return g;
      },
      attr: f,
      clamp: function clamp(a, c, g) {
        return a > c ? a < g ? a : g : c;
      },
      cleanRecursively: e,
      clearTimeout: function (_clearTimeout) {
        function clearTimeout(_x) {
          return _clearTimeout.apply(this, arguments);
        }

        clearTimeout.toString = function () {
          return _clearTimeout.toString();
        };

        return clearTimeout;
      }(function (a) {
        v(a) && clearTimeout(a);
      }),
      correctFloat: N,
      createElement: l,
      css: k,
      defined: v,
      destroyObjectProperties: function destroyObjectProperties(a, c) {
        n(a, function (g, h) {
          g && g !== c && g.destroy && g.destroy();
          delete a[h];
        });
      },
      discardElement: function discardElement(c) {
        a || (a = l("div"));
        c && a.appendChild(c);
        a.innerHTML = "";
      },
      erase: function erase(a, c) {
        for (var g = a.length; g--;) {
          if (a[g] === c) {
            a.splice(g, 1);
            break;
          }
        }
      },
      error: b,
      extend: d,
      extendClass: function extendClass(a, c) {
        var g = function g() {};

        g.prototype = new a();
        d(g.prototype, c);
        return g;
      },
      find: h,
      fireEvent: E,
      getMagnitude: function getMagnitude(a) {
        return Math.pow(10, Math.floor(Math.log(a) / Math.LN10));
      },
      getNestedProperty: function getNestedProperty(a, c) {
        for (a = a.split("."); a.length && v(c);) {
          var h = a.shift();
          if ("undefined" === typeof h || "__proto__" === h) return;
          c = c[h];
          if (!v(c) || "function" === typeof c || "number" === typeof c.nodeType || c === g) return;
        }

        return c;
      },
      getStyle: u,
      inArray: function inArray(a, c, g) {
        b(32, !1, void 0, {
          "Highcharts.inArray": "use Array.indexOf"
        });
        return c.indexOf(a, g);
      },
      isArray: G,
      isClass: x,
      isDOMElement: B,
      isFunction: function isFunction(a) {
        return "function" === typeof a;
      },
      isNumber: w,
      isObject: C,
      isString: H,
      keys: function keys(a) {
        b(32, !1, void 0, {
          "Highcharts.keys": "use Object.keys"
        });
        return Object.keys(a);
      },
      merge: function merge() {
        var a,
            c = arguments,
            g = {},
            h = function h(a, c) {
          "object" !== _typeof(a) && (a = {});
          n(c, function (t, p) {
            "__proto__" !== p && "constructor" !== p && (!C(t, !0) || x(t) || B(t) ? a[p] = c[p] : a[p] = h(a[p] || {}, t));
          });
          return a;
        };

        !0 === c[0] && (g = c[1], c = Array.prototype.slice.call(c, 2));
        var r = c.length;

        for (a = 0; a < r; a++) {
          g = h(g, c[a]);
        }

        return g;
      },
      normalizeTickInterval: function normalizeTickInterval(a, c, g, h, r) {
        var d = a;
        g = q(g, 1);
        var M = a / g;
        c || (c = r ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === h && (1 === g ? c = c.filter(function (a) {
          return 0 === a % 1;
        }) : .1 >= g && (c = [1 / g])));

        for (h = 0; h < c.length && !(d = c[h], r && d * g >= a || !r && M <= (c[h] + (c[h + 1] || c[h])) / 2); h++) {
          ;
        }

        return d = N(d * g, -Math.round(Math.log(.001) / Math.LN10));
      },
      objectEach: n,
      offset: function offset(a) {
        var h = c.documentElement;
        a = a.parentElement || a.parentNode ? a.getBoundingClientRect() : {
          top: 0,
          left: 0,
          width: 0,
          height: 0
        };
        return {
          top: a.top + (g.pageYOffset || h.scrollTop) - (h.clientTop || 0),
          left: a.left + (g.pageXOffset || h.scrollLeft) - (h.clientLeft || 0),
          width: a.width,
          height: a.height
        };
      },
      pad: function pad(a, c, g) {
        return Array((c || 2) + 1 - String(a).replace("-", "").length).join(g || "0") + a;
      },
      pick: q,
      pInt: z,
      relativeLength: function relativeLength(a, c, g) {
        return /%$/.test(a) ? c * parseFloat(a) / 100 + (g || 0) : parseFloat(a);
      },
      removeEvent: J,
      splat: function splat(a) {
        return G(a) ? a : [a];
      },
      stableSort: function stableSort(a, c) {
        var g = a.length,
            h,
            r;

        for (r = 0; r < g; r++) {
          a[r].safeI = r;
        }

        a.sort(function (a, g) {
          h = c(a, g);
          return 0 === h ? a.safeI - g.safeI : h;
        });

        for (r = 0; r < g; r++) {
          delete a[r].safeI;
        }
      },
      syncTimeout: function syncTimeout(a, c, g) {
        if (0 < c) return setTimeout(a, c, g);
        a.call(0, g);
        return -1;
      },
      timeUnits: {
        millisecond: 1,
        second: 1E3,
        minute: 6E4,
        hour: 36E5,
        day: 864E5,
        week: 6048E5,
        month: 24192E5,
        year: 314496E5
      },
      uniqueKey: A,
      useSerialIds: function useSerialIds(a) {
        return r = q(a, r);
      },
      wrap: function wrap(a, c, g) {
        var h = a[c];

        a[c] = function () {
          var a = Array.prototype.slice.call(arguments),
              c = arguments,
              r = this;

          r.proceed = function () {
            h.apply(r, arguments.length ? arguments : c);
          };

          a.unshift(h);
          a = g.apply(this, a);
          r.proceed = null;
          return a;
        };
      }
    };
  });
  O(e, "Core/Color/Color.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function (D, b) {
    var e = b.isNumber,
        z = b.merge,
        H = b.pInt;
    "";

    b = function () {
      function b(e) {
        this.parsers = [{
          regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
          parse: function parse(b) {
            return [H(b[1]), H(b[2]), H(b[3]), parseFloat(b[4], 10)];
          }
        }, {
          regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
          parse: function parse(b) {
            return [H(b[1]), H(b[2]), H(b[3]), 1];
          }
        }];
        this.rgba = [];
        if (D.Color !== b) return new D.Color(e);
        if (!(this instanceof b)) return new b(e);
        this.init(e);
      }

      b.parse = function (e) {
        return new b(e);
      };

      b.prototype.init = function (e) {
        var B, x;
        if ((this.input = e = b.names[e && e.toLowerCase ? e.toLowerCase() : ""] || e) && e.stops) this.stops = e.stops.map(function (f) {
          return new b(f[1]);
        });else {
          if (e && e.charAt && "#" === e.charAt()) {
            var w = e.length;
            e = parseInt(e.substr(1), 16);
            7 === w ? B = [(e & 16711680) >> 16, (e & 65280) >> 8, e & 255, 1] : 4 === w && (B = [(e & 3840) >> 4 | (e & 3840) >> 8, (e & 240) >> 4 | e & 240, (e & 15) << 4 | e & 15, 1]);
          }

          if (!B) for (x = this.parsers.length; x-- && !B;) {
            var v = this.parsers[x];
            (w = v.regex.exec(e)) && (B = v.parse(w));
          }
        }
        this.rgba = B || [];
      };

      b.prototype.get = function (b) {
        var B = this.input,
            x = this.rgba;

        if ("undefined" !== typeof this.stops) {
          var w = z(B);
          w.stops = [].concat(w.stops);
          this.stops.forEach(function (v, f) {
            w.stops[f] = [w.stops[f][0], v.get(b)];
          });
        } else w = x && e(x[0]) ? "rgb" === b || !b && 1 === x[3] ? "rgb(" + x[0] + "," + x[1] + "," + x[2] + ")" : "a" === b ? x[3] : "rgba(" + x.join(",") + ")" : B;

        return w;
      };

      b.prototype.brighten = function (b) {
        var B,
            x = this.rgba;
        if (this.stops) this.stops.forEach(function (w) {
          w.brighten(b);
        });else if (e(b) && 0 !== b) for (B = 0; 3 > B; B++) {
          x[B] += H(255 * b), 0 > x[B] && (x[B] = 0), 255 < x[B] && (x[B] = 255);
        }
        return this;
      };

      b.prototype.setOpacity = function (b) {
        this.rgba[3] = b;
        return this;
      };

      b.prototype.tweenTo = function (b, e) {
        var x = this.rgba,
            w = b.rgba;
        w.length && x && x.length ? (b = 1 !== w[3] || 1 !== x[3], e = (b ? "rgba(" : "rgb(") + Math.round(w[0] + (x[0] - w[0]) * (1 - e)) + "," + Math.round(w[1] + (x[1] - w[1]) * (1 - e)) + "," + Math.round(w[2] + (x[2] - w[2]) * (1 - e)) + (b ? "," + (w[3] + (x[3] - w[3]) * (1 - e)) : "") + ")") : e = b.input || "none";
        return e;
      };

      b.names = {
        white: "#ffffff",
        black: "#000000"
      };
      return b;
    }();

    D.Color = b;
    D.color = b.parse;
    return b;
  });
  O(e, "Core/Color/Palette.js", [], function () {
    return {
      colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
      backgroundColor: "#ffffff",
      neutralColor100: "#000000",
      neutralColor80: "#333333",
      neutralColor60: "#666666",
      neutralColor40: "#999999",
      neutralColor20: "#cccccc",
      neutralColor10: "#e6e6e6",
      neutralColor5: "#f2f2f2",
      neutralColor3: "#f7f7f7",
      highlightColor100: "#003399",
      highlightColor80: "#335cad",
      highlightColor60: "#6685c2",
      highlightColor20: "#ccd6eb",
      highlightColor10: "#e6ebf5",
      positiveColor: "#06b535",
      negativeColor: "#f21313"
    };
  });
  O(e, "Core/Time.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function (e, b) {
    var D = e.win,
        z = b.defined,
        H = b.error,
        G = b.extend,
        C = b.isObject,
        B = b.merge,
        x = b.objectEach,
        w = b.pad,
        v = b.pick,
        f = b.splat,
        d = b.timeUnits;
    "";

    b = function () {
      function q(d) {
        this.options = {};
        this.variableTimezone = this.useUTC = !1;
        this.Date = D.Date;
        this.getTimezoneOffset = this.timezoneOffsetFunction();
        this.update(d);
      }

      q.prototype.get = function (d, l) {
        if (this.variableTimezone || this.timezoneOffset) {
          var k = l.getTime(),
              u = k - this.getTimezoneOffset(l);
          l.setTime(u);
          d = l["getUTC" + d]();
          l.setTime(k);
          return d;
        }

        return this.useUTC ? l["getUTC" + d]() : l["get" + d]();
      };

      q.prototype.set = function (d, l, f) {
        if (this.variableTimezone || this.timezoneOffset) {
          if ("Milliseconds" === d || "Seconds" === d || "Minutes" === d && 0 === this.getTimezoneOffset(l) % 36E5) return l["setUTC" + d](f);
          var u = this.getTimezoneOffset(l);
          u = l.getTime() - u;
          l.setTime(u);
          l["setUTC" + d](f);
          d = this.getTimezoneOffset(l);
          u = l.getTime() + d;
          return l.setTime(u);
        }

        return this.useUTC ? l["setUTC" + d](f) : l["set" + d](f);
      };

      q.prototype.update = function (d) {
        var l = v(d && d.useUTC, !0);
        this.options = d = B(!0, this.options || {}, d);
        this.Date = d.Date || D.Date || Date;
        this.timezoneOffset = (this.useUTC = l) && d.timezoneOffset;
        this.getTimezoneOffset = this.timezoneOffsetFunction();
        this.variableTimezone = l && !(!d.getTimezoneOffset && !d.timezone);
      };

      q.prototype.makeTime = function (d, l, f, u, n, q) {
        if (this.useUTC) {
          var k = this.Date.UTC.apply(0, arguments);
          var m = this.getTimezoneOffset(k);
          k += m;
          var c = this.getTimezoneOffset(k);
          m !== c ? k += c - m : m - 36E5 !== this.getTimezoneOffset(k - 36E5) || e.isSafari || (k -= 36E5);
        } else k = new this.Date(d, l, v(f, 1), v(u, 0), v(n, 0), v(q, 0)).getTime();

        return k;
      };

      q.prototype.timezoneOffsetFunction = function () {
        var d = this,
            l = this.options,
            f = l.moment || D.moment;
        if (!this.useUTC) return function (d) {
          return 6E4 * new Date(d.toString()).getTimezoneOffset();
        };

        if (l.timezone) {
          if (f) return function (d) {
            return 6E4 * -f.tz(d, l.timezone).utcOffset();
          };
          H(25);
        }

        return this.useUTC && l.getTimezoneOffset ? function (d) {
          return 6E4 * l.getTimezoneOffset(d.valueOf());
        } : function () {
          return 6E4 * (d.timezoneOffset || 0);
        };
      };

      q.prototype.dateFormat = function (d, f, q) {
        if (!z(f) || isNaN(f)) return e.defaultOptions.lang && e.defaultOptions.lang.invalidDate || "";
        d = v(d, "%Y-%m-%d %H:%M:%S");
        var l = this,
            n = new this.Date(f),
            k = this.get("Hours", n),
            N = this.get("Day", n),
            m = this.get("Date", n),
            c = this.get("Month", n),
            g = this.get("FullYear", n),
            a = e.defaultOptions.lang,
            h = a && a.weekdays,
            r = a && a.shortWeekdays;
        n = G({
          a: r ? r[N] : h[N].substr(0, 3),
          A: h[N],
          d: w(m),
          e: w(m, 2, " "),
          w: N,
          b: a.shortMonths[c],
          B: a.months[c],
          m: w(c + 1),
          o: c + 1,
          y: g.toString().substr(2, 2),
          Y: g,
          H: w(k),
          k: k,
          I: w(k % 12 || 12),
          l: k % 12 || 12,
          M: w(this.get("Minutes", n)),
          p: 12 > k ? "AM" : "PM",
          P: 12 > k ? "am" : "pm",
          S: w(n.getSeconds()),
          L: w(Math.floor(f % 1E3), 3)
        }, e.dateFormats);
        x(n, function (a, c) {
          for (; -1 !== d.indexOf("%" + c);) {
            d = d.replace("%" + c, "function" === typeof a ? a.call(l, f) : a);
          }
        });
        return q ? d.substr(0, 1).toUpperCase() + d.substr(1) : d;
      };

      q.prototype.resolveDTLFormat = function (d) {
        return C(d, !0) ? d : (d = f(d), {
          main: d[0],
          from: d[1],
          to: d[2]
        });
      };

      q.prototype.getTimeTicks = function (f, l, q, u) {
        var n = this,
            k = [],
            N = {};
        var m = new n.Date(l);
        var c = f.unitRange,
            g = f.count || 1,
            a;
        u = v(u, 1);

        if (z(l)) {
          n.set("Milliseconds", m, c >= d.second ? 0 : g * Math.floor(n.get("Milliseconds", m) / g));
          c >= d.second && n.set("Seconds", m, c >= d.minute ? 0 : g * Math.floor(n.get("Seconds", m) / g));
          c >= d.minute && n.set("Minutes", m, c >= d.hour ? 0 : g * Math.floor(n.get("Minutes", m) / g));
          c >= d.hour && n.set("Hours", m, c >= d.day ? 0 : g * Math.floor(n.get("Hours", m) / g));
          c >= d.day && n.set("Date", m, c >= d.month ? 1 : Math.max(1, g * Math.floor(n.get("Date", m) / g)));

          if (c >= d.month) {
            n.set("Month", m, c >= d.year ? 0 : g * Math.floor(n.get("Month", m) / g));
            var h = n.get("FullYear", m);
          }

          c >= d.year && n.set("FullYear", m, h - h % g);
          c === d.week && (h = n.get("Day", m), n.set("Date", m, n.get("Date", m) - h + u + (h < u ? -7 : 0)));
          h = n.get("FullYear", m);
          u = n.get("Month", m);
          var r = n.get("Date", m),
              A = n.get("Hours", m);
          l = m.getTime();
          !n.variableTimezone && n.useUTC || !z(q) || (a = q - l > 4 * d.month || n.getTimezoneOffset(l) !== n.getTimezoneOffset(q));
          l = m.getTime();

          for (m = 1; l < q;) {
            k.push(l), l = c === d.year ? n.makeTime(h + m * g, 0) : c === d.month ? n.makeTime(h, u + m * g) : !a || c !== d.day && c !== d.week ? a && c === d.hour && 1 < g ? n.makeTime(h, u, r, A + m * g) : l + c * g : n.makeTime(h, u, r + m * g * (c === d.day ? 1 : 7)), m++;
          }

          k.push(l);
          c <= d.hour && 1E4 > k.length && k.forEach(function (a) {
            0 === a % 18E5 && "000000000" === n.dateFormat("%H%M%S%L", a) && (N[a] = "day");
          });
        }

        k.info = G(f, {
          higherRanks: N,
          totalRange: c * g
        });
        return k;
      };

      return q;
    }();

    e.Time = b;
    return e.Time;
  });
  O(e, "Core/Options.js", [e["Core/Globals.js"], e["Core/Color/Color.js"], e["Core/Color/Palette.js"], e["Core/Time.js"], e["Core/Utilities.js"]], function (e, b, I, z, H) {
    var D = e.isTouchDevice,
        C = e.svg;
    b = b.parse;
    var B = H.merge;
    "";
    var x = {
      colors: I.colors,
      symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
      lang: {
        loading: "Loading...",
        months: "January February March April May June July August September October November December".split(" "),
        shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        decimalPoint: ".",
        numericSymbols: "kMGTPE".split(""),
        resetZoom: "Reset zoom",
        resetZoomTitle: "Reset zoom level 1:1",
        thousandsSep: " "
      },
      global: {},
      time: {
        Date: void 0,
        getTimezoneOffset: void 0,
        timezone: void 0,
        timezoneOffset: 0,
        useUTC: !0
      },
      chart: {
        panning: {
          enabled: !1,
          type: "x"
        },
        styledMode: !1,
        borderRadius: 0,
        colorCount: 10,
        defaultSeriesType: "line",
        ignoreHiddenSeries: !0,
        spacing: [10, 10, 15, 10],
        resetZoomButton: {
          theme: {
            zIndex: 6
          },
          position: {
            align: "right",
            x: -10,
            y: 10
          }
        },
        zoomBySingleTouch: !1,
        width: null,
        height: null,
        borderColor: I.highlightColor80,
        backgroundColor: I.backgroundColor,
        plotBorderColor: I.neutralColor20
      },
      title: {
        text: "Chart title",
        align: "center",
        margin: 15,
        widthAdjust: -44
      },
      subtitle: {
        text: "",
        align: "center",
        widthAdjust: -44
      },
      caption: {
        margin: 15,
        text: "",
        align: "left",
        verticalAlign: "bottom"
      },
      plotOptions: {},
      labels: {
        style: {
          position: "absolute",
          color: I.neutralColor80
        }
      },
      legend: {
        enabled: !0,
        align: "center",
        alignColumns: !0,
        layout: "horizontal",
        labelFormatter: function labelFormatter() {
          return this.name;
        },
        borderColor: I.neutralColor40,
        borderRadius: 0,
        navigation: {
          activeColor: I.highlightColor100,
          inactiveColor: I.neutralColor20
        },
        itemStyle: {
          color: I.neutralColor80,
          cursor: "pointer",
          fontSize: "12px",
          fontWeight: "bold",
          textOverflow: "ellipsis"
        },
        itemHoverStyle: {
          color: I.neutralColor100
        },
        itemHiddenStyle: {
          color: I.neutralColor20
        },
        shadow: !1,
        itemCheckboxStyle: {
          position: "absolute",
          width: "13px",
          height: "13px"
        },
        squareSymbol: !0,
        symbolPadding: 5,
        verticalAlign: "bottom",
        x: 0,
        y: 0,
        title: {
          style: {
            fontWeight: "bold"
          }
        }
      },
      loading: {
        labelStyle: {
          fontWeight: "bold",
          position: "relative",
          top: "45%"
        },
        style: {
          position: "absolute",
          backgroundColor: I.backgroundColor,
          opacity: .5,
          textAlign: "center"
        }
      },
      tooltip: {
        enabled: !0,
        animation: C,
        borderRadius: 3,
        dateTimeLabelFormats: {
          millisecond: "%A, %b %e, %H:%M:%S.%L",
          second: "%A, %b %e, %H:%M:%S",
          minute: "%A, %b %e, %H:%M",
          hour: "%A, %b %e, %H:%M",
          day: "%A, %b %e, %Y",
          week: "Week from %A, %b %e, %Y",
          month: "%B %Y",
          year: "%Y"
        },
        footerFormat: "",
        padding: 8,
        snap: D ? 25 : 10,
        headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
        pointFormat: "<span style=\"color:{point.color}\">\u25CF</span> {series.name}: <b>{point.y}</b><br/>",
        backgroundColor: b(I.neutralColor3).setOpacity(.85).get(),
        borderWidth: 1,
        shadow: !0,
        style: {
          color: I.neutralColor80,
          cursor: "default",
          fontSize: "12px",
          whiteSpace: "nowrap"
        }
      },
      credits: {
        enabled: !0,
        href: "https://www.highcharts.com?credits",
        position: {
          align: "right",
          x: -10,
          verticalAlign: "bottom",
          y: -5
        },
        style: {
          cursor: "pointer",
          color: I.neutralColor40,
          fontSize: "9px"
        },
        text: "Highcharts.com"
      }
    };
    x.chart.styledMode = !1;
    "";
    var w = new z(B(x.global, x.time));
    return {
      defaultOptions: x,
      defaultTime: w,
      getOptions: function getOptions() {
        return x;
      },
      setOptions: function setOptions(v) {
        B(!0, x, v);
        if (v.time || v.global) e.time ? e.time.update(B(x.global, x.time, v.global, v.time)) : e.time = w;
        return x;
      }
    };
  });
  O(e, "Core/Animation/Fx.js", [e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function (e, b, I) {
    var D = e.parse,
        H = b.win,
        G = I.isNumber,
        C = I.objectEach;
    return function () {
      function b(b, w, v) {
        this.pos = NaN;
        this.options = w;
        this.elem = b;
        this.prop = v;
      }

      b.prototype.dSetter = function () {
        var b = this.paths,
            w = b && b[0];
        b = b && b[1];
        var v = this.now || 0,
            f = [];
        if (1 !== v && w && b) {
          if (w.length === b.length && 1 > v) for (var d = 0; d < b.length; d++) {
            for (var q = w[d], k = b[d], l = [], N = 0; N < k.length; N++) {
              var u = q[N],
                  n = k[N];
              G(u) && G(n) && ("A" !== k[0] || 4 !== N && 5 !== N) ? l[N] = u + v * (n - u) : l[N] = n;
            }

            f.push(l);
          } else f = b;
        } else f = this.toD || [];
        this.elem.attr("d", f, void 0, !0);
      };

      b.prototype.update = function () {
        var b = this.elem,
            w = this.prop,
            v = this.now,
            f = this.options.step;
        if (this[w + "Setter"]) this[w + "Setter"]();else b.attr ? b.element && b.attr(w, v, null, !0) : b.style[w] = v + this.unit;
        f && f.call(b, v, this);
      };

      b.prototype.run = function (e, w, v) {
        var f = this,
            d = f.options,
            q = function q(d) {
          return q.stopped ? !1 : f.step(d);
        },
            k = H.requestAnimationFrame || function (d) {
          setTimeout(d, 13);
        },
            l = function l() {
          for (var d = 0; d < b.timers.length; d++) {
            b.timers[d]() || b.timers.splice(d--, 1);
          }

          b.timers.length && k(l);
        };

        e !== w || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date(), this.start = e, this.end = w, this.unit = v, this.now = this.start, this.pos = 0, q.elem = this.elem, q.prop = this.prop, q() && 1 === b.timers.push(q) && k(l)) : (delete d.curAnim[this.prop], d.complete && 0 === Object.keys(d.curAnim).length && d.complete.call(this.elem));
      };

      b.prototype.step = function (b) {
        var w = +new Date(),
            v = this.options,
            f = this.elem,
            d = v.complete,
            q = v.duration,
            k = v.curAnim;
        if (f.attr && !f.element) b = !1;else if (b || w >= q + this.startTime) {
          this.now = this.end;
          this.pos = 1;
          this.update();
          var l = k[this.prop] = !0;
          C(k, function (d) {
            !0 !== d && (l = !1);
          });
          l && d && d.call(f);
          b = !1;
        } else this.pos = v.easing((w - this.startTime) / q), this.now = this.start + (this.end - this.start) * this.pos, this.update(), b = !0;
        return b;
      };

      b.prototype.initPath = function (b, w, v) {
        function f(d, m) {
          for (; d.length < J;) {
            var c = d[0],
                g = m[J - d.length];
            g && "M" === c[0] && (d[0] = "C" === g[0] ? ["C", c[1], c[2], c[1], c[2], c[1], c[2]] : ["L", c[1], c[2]]);
            d.unshift(c);
            l && (c = d.pop(), d.push(d[d.length - 1], c));
          }
        }

        function d(d, m) {
          for (; d.length < J;) {
            if (m = d[Math.floor(d.length / N) - 1].slice(), "C" === m[0] && (m[1] = m[5], m[2] = m[6]), l) {
              var c = d[Math.floor(d.length / N)].slice();
              d.splice(d.length / 2, 0, m, c);
            } else d.push(m);
          }
        }

        var q = b.startX,
            k = b.endX;
        v = v.slice();
        var l = b.isArea,
            N = l ? 2 : 1;
        w = w && w.slice();
        if (!w) return [v, v];

        if (q && k && k.length) {
          for (b = 0; b < q.length; b++) {
            if (q[b] === k[0]) {
              var u = b;
              break;
            } else if (q[0] === k[k.length - q.length + b]) {
              u = b;
              var n = !0;
              break;
            } else if (q[q.length - 1] === k[k.length - q.length + b]) {
              u = q.length - b;
              break;
            }
          }

          "undefined" === typeof u && (w = []);
        }

        if (w.length && G(u)) {
          var J = v.length + u * N;
          n ? (f(w, v), d(v, w)) : (f(v, w), d(w, v));
        }

        return [w, v];
      };

      b.prototype.fillSetter = function () {
        b.prototype.strokeSetter.apply(this, arguments);
      };

      b.prototype.strokeSetter = function () {
        this.elem.attr(this.prop, D(this.start).tweenTo(D(this.end), this.pos), null, !0);
      };

      b.timers = [];
      return b;
    }();
  });
  O(e, "Core/Animation/AnimationUtilities.js", [e["Core/Animation/Fx.js"], e["Core/Utilities.js"]], function (e, b) {
    function D(d) {
      return x(d) ? w({
        duration: 500,
        defer: 0
      }, d) : {
        duration: d ? 500 : 0,
        defer: 0
      };
    }

    function z(d, f) {
      for (var q = e.timers.length; q--;) {
        e.timers[q].elem !== d || f && f !== e.timers[q].prop || (e.timers[q].stopped = !0);
      }
    }

    var H = b.defined,
        G = b.getStyle,
        C = b.isArray,
        B = b.isNumber,
        x = b.isObject,
        w = b.merge,
        v = b.objectEach,
        f = b.pick;
    return {
      animate: function animate(d, f, k) {
        var l,
            q = "",
            u,
            n;

        if (!x(k)) {
          var b = arguments;
          k = {
            duration: b[2],
            easing: b[3],
            complete: b[4]
          };
        }

        B(k.duration) || (k.duration = 400);
        k.easing = "function" === typeof k.easing ? k.easing : Math[k.easing] || Math.easeInOutSine;
        k.curAnim = w(f);
        v(f, function (b, m) {
          z(d, m);
          n = new e(d, k, m);
          u = void 0;
          "d" === m && C(f.d) ? (n.paths = n.initPath(d, d.pathArray, f.d), n.toD = f.d, l = 0, u = 1) : d.attr ? l = d.attr(m) : (l = parseFloat(G(d, m)) || 0, "opacity" !== m && (q = "px"));
          u || (u = b);
          "string" === typeof u && u.match("px") && (u = u.replace(/px/g, ""));
          n.run(l, u, q);
        });
      },
      animObject: D,
      getDeferredAnimation: function getDeferredAnimation(d, f, b) {
        var l = D(f),
            q = 0,
            u = 0;
        (b ? [b] : d.series).forEach(function (d) {
          d = D(d.options.animation);
          q = f && H(f.defer) ? l.defer : Math.max(q, d.duration + d.defer);
          u = Math.min(l.duration, d.duration);
        });
        d.renderer.forExport && (q = 0);
        return {
          defer: Math.max(0, q - u),
          duration: Math.min(q, u)
        };
      },
      setAnimation: function setAnimation(d, q) {
        q.renderer.globalAnimation = f(d, q.options.chart.animation, !0);
      },
      stop: z
    };
  });
  O(e, "Core/Renderer/HTML/AST.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function (e, b) {
    var D = e.SVG_NS,
        z = b.attr,
        H = b.createElement,
        G = b.discardElement,
        C = b.error,
        B = b.isString,
        x = b.objectEach,
        w = b.splat;
    "";
    var v = !1;

    try {
      v = !!new DOMParser().parseFromString("", "text/html");
    } catch (f) {}

    return function () {
      function f(d) {
        this.nodes = "string" === typeof d ? this.parseMarkup(d) : d;
      }

      f.filterUserAttributes = function (d) {
        x(d, function (q, b) {
          var l = !0;
          -1 === f.allowedAttributes.indexOf(b) && (l = !1);
          -1 !== ["background", "dynsrc", "href", "lowsrc", "src"].indexOf(b) && (l = B(q) && f.allowedReferences.some(function (d) {
            return 0 === q.indexOf(d);
          }));
          l || (C("Highcharts warning: Invalid attribute '" + b + "' in config"), delete d[b]);
        });
        return d;
      };

      f.setElementHTML = function (d, q) {
        d.innerHTML = "";
        q && new f(q).addToDOM(d);
      };

      f.prototype.addToDOM = function (d) {
        function q(d, l) {
          var b;
          w(d).forEach(function (d) {
            var n = d.tagName,
                u = d.textContent ? e.doc.createTextNode(d.textContent) : void 0;
            if (n) if ("#text" === n) var k = u;else if (-1 !== f.allowedTags.indexOf(n)) {
              n = e.doc.createElementNS("svg" === n ? D : l.namespaceURI || D, n);
              var m = d.attributes || {};
              x(d, function (c, g) {
                "tagName" !== g && "attributes" !== g && "children" !== g && "textContent" !== g && (m[g] = c);
              });
              z(n, f.filterUserAttributes(m));
              u && n.appendChild(u);
              q(d.children || [], n);
              k = n;
            } else C("Highcharts warning: Invalid tagName '" + n + "' in config");
            k && l.appendChild(k);
            b = k;
          });
          return b;
        }

        return q(this.nodes, d);
      };

      f.prototype.parseMarkup = function (d) {
        var f = [];
        if (v) d = new DOMParser().parseFromString(d, "text/html");else {
          var b = H("div");
          b.innerHTML = d;
          d = {
            body: b
          };
        }

        var l = function l(d, f) {
          var n = d.nodeName.toLowerCase(),
              b = {
            tagName: n
          };

          if ("#text" === n) {
            n = d.textContent || "";
            if (/^[\s]*$/.test(n)) return;
            b.textContent = n;
          }

          if (n = d.attributes) {
            var u = {};
            [].forEach.call(n, function (c) {
              u[c.name] = c.value;
            });
            b.attributes = u;
          }

          if (d.childNodes.length) {
            var m = [];
            [].forEach.call(d.childNodes, function (c) {
              l(c, m);
            });
            m.length && (b.children = m);
          }

          f.push(b);
        };

        [].forEach.call(d.body.childNodes, function (d) {
          return l(d, f);
        });
        b && G(b);
        return f;
      };

      f.allowedTags = "a b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text thead tbody tspan td th tr u ul #text".split(" ");
      f.allowedAttributes = "aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill height href id in markerHeight markerWidth offset opacity orient padding paddingLeft patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style result rowspan summary target tabindex text-align textAnchor textLength type valign width x x1 x2 y y1 y2 zIndex".split(" ");
      f.allowedReferences = "https:// http:// mailto: / ../ ./ #".split(" ");
      return f;
    }();
  });
  O(e, "Core/FormatUtilities.js", [e["Core/Options.js"], e["Core/Utilities.js"]], function (e, b) {
    function D(b, v, f, d) {
      b = +b || 0;
      v = +v;
      var q = z.lang,
          k = (b.toString().split(".")[1] || "").split("e")[0].length,
          l = b.toString().split("e"),
          N = v;
      if (-1 === v) v = Math.min(k, 20);else if (!C(v)) v = 2;else if (v && l[1] && 0 > l[1]) {
        var u = v + +l[1];
        0 <= u ? (l[0] = (+l[0]).toExponential(u).split("e")[0], v = u) : (l[0] = l[0].split(".")[0] || 0, b = 20 > v ? (l[0] * Math.pow(10, l[1])).toFixed(v) : 0, l[1] = 0);
      }
      u = (Math.abs(l[1] ? l[0] : b) + Math.pow(10, -Math.max(v, k) - 1)).toFixed(v);
      k = String(x(u));
      var n = 3 < k.length ? k.length % 3 : 0;
      f = B(f, q.decimalPoint);
      d = B(d, q.thousandsSep);
      b = (0 > b ? "-" : "") + (n ? k.substr(0, n) + d : "");
      b = 0 > +l[1] && !N ? "0" : b + k.substr(n).replace(/(\d{3})(?=\d)/g, "$1" + d);
      v && (b += f + u.slice(-v));
      l[1] && 0 !== +b && (b += "e" + l[1]);
      return b;
    }

    var z = e.defaultOptions,
        H = e.defaultTime,
        G = b.getNestedProperty,
        C = b.isNumber,
        B = b.pick,
        x = b.pInt;
    return {
      dateFormat: function dateFormat(b, v, f) {
        return H.dateFormat(b, v, f);
      },
      format: function format(b, v, f) {
        var d = "{",
            q = !1,
            k = /f$/,
            l = /\.([0-9])/,
            N = z.lang,
            u = f && f.time || H;
        f = f && f.numberFormatter || D;

        for (var n = []; b;) {
          var J = b.indexOf(d);
          if (-1 === J) break;
          var E = b.slice(0, J);

          if (q) {
            E = E.split(":");
            d = G(E.shift() || "", v);
            if (E.length && "number" === typeof d) if (E = E.join(":"), k.test(E)) {
              var m = parseInt((E.match(l) || ["", "-1"])[1], 10);
              null !== d && (d = f(d, m, N.decimalPoint, -1 < E.indexOf(",") ? N.thousandsSep : ""));
            } else d = u.dateFormat(E, d);
            n.push(d);
          } else n.push(E);

          b = b.slice(J + 1);
          d = (q = !q) ? "}" : "{";
        }

        n.push(b);
        return n.join("");
      },
      numberFormat: D
    };
  });
  O(e, "Core/Renderer/SVG/SVGElement.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Renderer/HTML/AST.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Color/Palette.js"], e["Core/Utilities.js"]], function (e, b, I, z, H, G) {
    var D = e.animate,
        B = e.animObject,
        x = e.stop,
        w = z.deg2rad,
        v = z.doc,
        f = z.noop,
        d = z.svg,
        q = z.SVG_NS,
        k = z.win,
        l = G.addEvent,
        N = G.attr,
        u = G.createElement,
        n = G.css,
        J = G.defined,
        E = G.erase,
        m = G.extend,
        c = G.fireEvent,
        g = G.isArray,
        a = G.isFunction,
        h = G.isNumber,
        r = G.isString,
        A = G.merge,
        y = G.objectEach,
        L = G.pick,
        P = G.pInt,
        R = G.syncTimeout,
        V = G.uniqueKey;

    e = function () {
      function e() {
        this.element = void 0;
        this.onEvents = {};
        this.opacity = 1;
        this.renderer = void 0;
        this.SVG_NS = q;
        this.symbolCustomAttribs = "x y width height r start end innerR anchorX anchorY rounded".split(" ");
      }

      e.prototype._defaultGetter = function (a) {
        a = L(this[a + "Value"], this[a], this.element ? this.element.getAttribute(a) : null, 0);
        /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));
        return a;
      };

      e.prototype._defaultSetter = function (a, t, p) {
        p.setAttribute(t, a);
      };

      e.prototype.add = function (a) {
        var t = this.renderer,
            p = this.element;
        a && (this.parentGroup = a);
        this.parentInverted = a && a.inverted;
        "undefined" !== typeof this.textStr && "text" === this.element.nodeName && t.buildText(this);
        this.added = !0;
        if (!a || a.handleZ || this.zIndex) var c = this.zIndexSetter();
        c || (a ? a.element : t.box).appendChild(p);
        if (this.onAdd) this.onAdd();
        return this;
      };

      e.prototype.addClass = function (a, t) {
        var p = t ? "" : this.attr("class") || "";
        a = (a || "").split(/ /g).reduce(function (a, t) {
          -1 === p.indexOf(t) && a.push(t);
          return a;
        }, p ? [p] : []).join(" ");
        a !== p && this.attr("class", a);
        return this;
      };

      e.prototype.afterSetters = function () {
        this.doTransform && (this.updateTransform(), this.doTransform = !1);
      };

      e.prototype.align = function (a, t, p) {
        var c = {},
            g = this.renderer,
            d = g.alignedObjects,
            F,
            h,
            K;

        if (a) {
          if (this.alignOptions = a, this.alignByTranslate = t, !p || r(p)) this.alignTo = F = p || "renderer", E(d, this), d.push(this), p = void 0;
        } else a = this.alignOptions, t = this.alignByTranslate, F = this.alignTo;

        p = L(p, g[F], "scrollablePlotBox" === F ? g.plotBox : void 0, g);
        F = a.align;
        var M = a.verticalAlign;
        g = (p.x || 0) + (a.x || 0);
        d = (p.y || 0) + (a.y || 0);
        "right" === F ? h = 1 : "center" === F && (h = 2);
        h && (g += (p.width - (a.width || 0)) / h);
        c[t ? "translateX" : "x"] = Math.round(g);
        "bottom" === M ? K = 1 : "middle" === M && (K = 2);
        K && (d += (p.height - (a.height || 0)) / K);
        c[t ? "translateY" : "y"] = Math.round(d);
        this[this.placed ? "animate" : "attr"](c);
        this.placed = !0;
        this.alignAttr = c;
        return this;
      };

      e.prototype.alignSetter = function (a) {
        var t = {
          left: "start",
          center: "middle",
          right: "end"
        };
        t[a] && (this.alignValue = a, this.element.setAttribute("text-anchor", t[a]));
      };

      e.prototype.animate = function (a, t, p) {
        var c = this,
            g = B(L(t, this.renderer.globalAnimation, !0));
        t = g.defer;
        L(v.hidden, v.msHidden, v.webkitHidden, !1) && (g.duration = 0);
        0 !== g.duration ? (p && (g.complete = p), R(function () {
          c.element && D(c, a, g);
        }, t)) : (this.attr(a, void 0, p), y(a, function (a, p) {
          g.step && g.step.call(this, a, {
            prop: p,
            pos: 1,
            elem: this
          });
        }, this));
        return this;
      };

      e.prototype.applyTextOutline = function (a) {
        var t = this.element;
        -1 !== a.indexOf("contrast") && (a = a.replace(/contrast/g, this.renderer.getContrast(t.style.fill)));
        var p = a.split(" ");
        a = p[p.length - 1];

        if ((p = p[0]) && "none" !== p && z.svg) {
          this.fakeTS = !0;
          this.ySetter = this.xSetter;
          p = p.replace(/(^[\d\.]+)(.*?)$/g, function (a, p, t) {
            return 2 * Number(p) + t;
          });
          this.removeTextOutline();
          var c = v.createElementNS(q, "tspan");
          N(c, {
            "class": "highcharts-text-outline",
            fill: a,
            stroke: a,
            "stroke-width": p,
            "stroke-linejoin": "round"
          });
          [].forEach.call(t.childNodes, function (a) {
            var p = a.cloneNode(!0);
            p.removeAttribute && ["fill", "stroke", "stroke-width", "stroke"].forEach(function (a) {
              return p.removeAttribute(a);
            });
            c.appendChild(p);
          });
          var g = v.createElementNS(q, "tspan");
          g.textContent = "\u200B";
          ["x", "y"].forEach(function (a) {
            var p = t.getAttribute(a);
            p && g.setAttribute(a, p);
          });
          c.appendChild(g);
          t.insertBefore(c, t.firstChild);
        }
      };

      e.prototype.attr = function (a, t, p, c) {
        var g = this.element,
            d = this.symbolCustomAttribs,
            h,
            r = this,
            K,
            m;

        if ("string" === typeof a && "undefined" !== typeof t) {
          var M = a;
          a = {};
          a[M] = t;
        }

        "string" === typeof a ? r = (this[a + "Getter"] || this._defaultGetter).call(this, a, g) : (y(a, function (p, t) {
          K = !1;
          c || x(this, t);
          this.symbolName && -1 !== d.indexOf(t) && (h || (this.symbolAttr(a), h = !0), K = !0);
          !this.rotation || "x" !== t && "y" !== t || (this.doTransform = !0);
          K || (m = this[t + "Setter"] || this._defaultSetter, m.call(this, p, t, g), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(t) && this.updateShadows(t, p, m));
        }, this), this.afterSetters());
        p && p.call(this);
        return r;
      };

      e.prototype.clip = function (a) {
        return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none");
      };

      e.prototype.crisp = function (a, t) {
        t = t || a.strokeWidth || 0;
        var p = Math.round(t) % 2 / 2;
        a.x = Math.floor(a.x || this.x || 0) + p;
        a.y = Math.floor(a.y || this.y || 0) + p;
        a.width = Math.floor((a.width || this.width || 0) - 2 * p);
        a.height = Math.floor((a.height || this.height || 0) - 2 * p);
        J(a.strokeWidth) && (a.strokeWidth = t);
        return a;
      };

      e.prototype.complexColor = function (a, t, p) {
        var d = this.renderer,
            h,
            r,
            F,
            m,
            K,
            M,
            f,
            b,
            l,
            n,
            u = [],
            q;
        c(this.renderer, "complexColor", {
          args: arguments
        }, function () {
          a.radialGradient ? r = "radialGradient" : a.linearGradient && (r = "linearGradient");

          if (r) {
            F = a[r];
            K = d.gradients;
            M = a.stops;
            l = p.radialReference;
            g(F) && (a[r] = F = {
              x1: F[0],
              y1: F[1],
              x2: F[2],
              y2: F[3],
              gradientUnits: "userSpaceOnUse"
            });
            "radialGradient" === r && l && !J(F.gradientUnits) && (m = F, F = A(F, d.getRadialAttr(l, m), {
              gradientUnits: "userSpaceOnUse"
            }));
            y(F, function (a, p) {
              "id" !== p && u.push(p, a);
            });
            y(M, function (a) {
              u.push(a);
            });
            u = u.join(",");
            if (K[u]) n = K[u].attr("id");else {
              F.id = n = V();
              var c = K[u] = d.createElement(r).attr(F).add(d.defs);
              c.radAttr = m;
              c.stops = [];
              M.forEach(function (a) {
                0 === a[1].indexOf("rgba") ? (h = I.parse(a[1]), f = h.get("rgb"), b = h.get("a")) : (f = a[1], b = 1);
                a = d.createElement("stop").attr({
                  offset: a[0],
                  "stop-color": f,
                  "stop-opacity": b
                }).add(c);
                c.stops.push(a);
              });
            }
            q = "url(" + d.url + "#" + n + ")";
            p.setAttribute(t, q);
            p.gradient = u;

            a.toString = function () {
              return q;
            };
          }
        });
      };

      e.prototype.css = function (a) {
        var t = this.styles,
            p = {},
            c = this.element,
            g = ["textOutline", "textOverflow", "width"],
            h = "",
            F = !t;
        a && a.color && (a.fill = a.color);
        t && y(a, function (a, c) {
          t && t[c] !== a && (p[c] = a, F = !0);
        });

        if (F) {
          t && (a = m(t, p));
          if (a) if (null === a.width || "auto" === a.width) delete this.textWidth;else if ("text" === c.nodeName.toLowerCase() && a.width) var r = this.textWidth = P(a.width);
          this.styles = a;
          r && !d && this.renderer.forExport && delete a.width;

          if (c.namespaceURI === this.SVG_NS) {
            var K = function K(a, p) {
              return "-" + p.toLowerCase();
            };

            y(a, function (a, p) {
              -1 === g.indexOf(p) && (h += p.replace(/([A-Z])/g, K) + ":" + a + ";");
            });
            h && N(c, "style", h);
          } else n(c, a);

          this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), a && a.textOutline && this.applyTextOutline(a.textOutline));
        }

        return this;
      };

      e.prototype.dashstyleSetter = function (a) {
        var t = this["stroke-width"];
        "inherit" === t && (t = 1);

        if (a = a && a.toLowerCase()) {
          var p = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");

          for (a = p.length; a--;) {
            p[a] = "" + P(p[a]) * L(t, NaN);
          }

          a = p.join(",").replace(/NaN/g, "none");
          this.element.setAttribute("stroke-dasharray", a);
        }
      };

      e.prototype.destroy = function () {
        var a = this,
            t = a.element || {},
            p = a.renderer,
            c = t.ownerSVGElement,
            g = p.isSVG && "SPAN" === t.nodeName && a.parentGroup || void 0;
        t.onclick = t.onmouseout = t.onmouseover = t.onmousemove = t.point = null;
        x(a);

        if (a.clipPath && c) {
          var d = a.clipPath;
          [].forEach.call(c.querySelectorAll("[clip-path],[CLIP-PATH]"), function (a) {
            -1 < a.getAttribute("clip-path").indexOf(d.element.id) && a.removeAttribute("clip-path");
          });
          a.clipPath = d.destroy();
        }

        if (a.stops) {
          for (c = 0; c < a.stops.length; c++) {
            a.stops[c].destroy();
          }

          a.stops.length = 0;
          a.stops = void 0;
        }

        a.safeRemoveChild(t);

        for (p.styledMode || a.destroyShadows(); g && g.div && 0 === g.div.childNodes.length;) {
          t = g.parentGroup, a.safeRemoveChild(g.div), delete g.div, g = t;
        }

        a.alignTo && E(p.alignedObjects, a);
        y(a, function (p, c) {
          a[c] && a[c].parentGroup === a && a[c].destroy && a[c].destroy();
          delete a[c];
        });
      };

      e.prototype.destroyShadows = function () {
        (this.shadows || []).forEach(function (a) {
          this.safeRemoveChild(a);
        }, this);
        this.shadows = void 0;
      };

      e.prototype.destroyTextPath = function (a, c) {
        var p = a.getElementsByTagName("text")[0];

        if (p) {
          if (p.removeAttribute("dx"), p.removeAttribute("dy"), c.element.setAttribute("id", ""), this.textPathWrapper && p.getElementsByTagName("textPath").length) {
            for (a = this.textPathWrapper.element.childNodes; a.length;) {
              p.appendChild(a[0]);
            }

            p.removeChild(this.textPathWrapper.element);
          }
        } else if (a.getAttribute("dx") || a.getAttribute("dy")) a.removeAttribute("dx"), a.removeAttribute("dy");

        this.textPathWrapper && (this.textPathWrapper = this.textPathWrapper.destroy());
      };

      e.prototype.dSetter = function (a, c, p) {
        g(a) && ("string" === typeof a[0] && (a = this.renderer.pathToSegments(a)), this.pathArray = a, a = a.reduce(function (a, p, c) {
          return p && p.join ? (c ? a + " " : "") + p.join(" ") : (p || "").toString();
        }, ""));
        /(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
        this[c] !== a && (p.setAttribute(c, a), this[c] = a);
      };

      e.prototype.fadeOut = function (a) {
        var c = this;
        c.animate({
          opacity: 0
        }, {
          duration: L(a, 150),
          complete: function complete() {
            c.attr({
              y: -9999
            }).hide();
          }
        });
      };

      e.prototype.fillSetter = function (a, c, p) {
        "string" === typeof a ? p.setAttribute(c, a) : a && this.complexColor(a, c, p);
      };

      e.prototype.getBBox = function (c, t) {
        var p = this.renderer,
            g = this.element,
            d = this.styles,
            h = this.textStr,
            F = p.cache,
            r = p.cacheKeys,
            K = g.namespaceURI === this.SVG_NS;
        t = L(t, this.rotation, 0);
        var A = p.styledMode ? g && e.prototype.getStyle.call(g, "font-size") : d && d.fontSize,
            f;

        if (J(h)) {
          var b = h.toString();
          -1 === b.indexOf("<") && (b = b.replace(/[0-9]/g, "0"));
          b += ["", t, A, this.textWidth, d && d.textOverflow, d && d.fontWeight].join();
        }

        b && !c && (f = F[b]);

        if (!f) {
          if (K || p.forExport) {
            try {
              var y = this.fakeTS && function (a) {
                var p = g.querySelector(".highcharts-text-outline");
                p && n(p, {
                  display: a
                });
              };

              a(y) && y("none");
              f = g.getBBox ? m({}, g.getBBox()) : {
                width: g.offsetWidth,
                height: g.offsetHeight
              };
              a(y) && y("");
            } catch (Y) {
              "";
            }

            if (!f || 0 > f.width) f = {
              width: 0,
              height: 0
            };
          } else f = this.htmlGetBBox();

          p.isSVG && (c = f.width, p = f.height, K && (f.height = p = {
            "11px,17": 14,
            "13px,20": 16
          }[d && d.fontSize + "," + Math.round(p)] || p), t && (d = t * w, f.width = Math.abs(p * Math.sin(d)) + Math.abs(c * Math.cos(d)), f.height = Math.abs(p * Math.cos(d)) + Math.abs(c * Math.sin(d))));

          if (b && 0 < f.height) {
            for (; 250 < r.length;) {
              delete F[r.shift()];
            }

            F[b] || r.push(b);
            F[b] = f;
          }
        }

        return f;
      };

      e.prototype.getStyle = function (a) {
        return k.getComputedStyle(this.element || this, "").getPropertyValue(a);
      };

      e.prototype.hasClass = function (a) {
        return -1 !== ("" + this.attr("class")).split(" ").indexOf(a);
      };

      e.prototype.hide = function (a) {
        a ? this.attr({
          y: -9999
        }) : this.attr({
          visibility: "hidden"
        });
        return this;
      };

      e.prototype.htmlGetBBox = function () {
        return {
          height: 0,
          width: 0,
          x: 0,
          y: 0
        };
      };

      e.prototype.init = function (a, t) {
        this.element = "span" === t ? u(t) : v.createElementNS(this.SVG_NS, t);
        this.renderer = a;
        c(this, "afterInit");
      };

      e.prototype.invert = function (a) {
        this.inverted = a;
        this.updateTransform();
        return this;
      };

      e.prototype.on = function (a, c) {
        var p = this.onEvents;
        if (p[a]) p[a]();
        p[a] = l(this.element, a, c);
        return this;
      };

      e.prototype.opacitySetter = function (a, c, p) {
        this.opacity = a = Number(Number(a).toFixed(3));
        p.setAttribute(c, a);
      };

      e.prototype.removeClass = function (a) {
        return this.attr("class", ("" + this.attr("class")).replace(r(a) ? new RegExp("(^| )" + a + "( |$)") : a, " ").replace(/ +/g, " ").trim());
      };

      e.prototype.removeTextOutline = function () {
        var a = this.element.querySelector("tspan.highcharts-text-outline");
        a && this.safeRemoveChild(a);
      };

      e.prototype.safeRemoveChild = function (a) {
        var c = a.parentNode;
        c && c.removeChild(a);
      };

      e.prototype.setRadialReference = function (a) {
        var c = this.element.gradient && this.renderer.gradients[this.element.gradient];
        this.element.radialReference = a;
        c && c.radAttr && c.animate(this.renderer.getRadialAttr(a, c.radAttr));
        return this;
      };

      e.prototype.setTextPath = function (a, c) {
        var p = this.element,
            t = this.text ? this.text.element : p,
            g = {
          textAnchor: "text-anchor"
        },
            d = !1,
            F = this.textPathWrapper,
            r = !F;
        c = A(!0, {
          enabled: !0,
          attributes: {
            dy: -5,
            startOffset: "50%",
            textAnchor: "middle"
          }
        }, c);
        var K = b.filterUserAttributes(c.attributes);

        if (a && c && c.enabled) {
          F && null === F.element.parentNode ? (r = !0, F = F.destroy()) : F && this.removeTextOutline.call(F.parentGroup);
          this.options && this.options.padding && (K.dx = -this.options.padding);
          F || (this.textPathWrapper = F = this.renderer.createElement("textPath"), d = !0);
          var m = F.element;
          (c = a.element.getAttribute("id")) || a.element.setAttribute("id", c = V());
          if (r) for (t.setAttribute("y", 0), h(K.dx) && t.setAttribute("x", -K.dx), a = [].slice.call(t.childNodes), r = 0; r < a.length; r++) {
            var l = a[r];
            l.nodeType !== Node.TEXT_NODE && "tspan" !== l.nodeName || m.appendChild(l);
          }
          d && F && F.add({
            element: t
          });
          m.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.renderer.url + "#" + c);
          J(K.dy) && (m.parentNode.setAttribute("dy", K.dy), delete K.dy);
          J(K.dx) && (m.parentNode.setAttribute("dx", K.dx), delete K.dx);
          y(K, function (a, p) {
            m.setAttribute(g[p] || p, a);
          });
          p.removeAttribute("transform");
          this.removeTextOutline.call(F);
          this.text && !this.renderer.styledMode && this.attr({
            fill: "none",
            "stroke-width": 0
          });
          this.applyTextOutline = this.updateTransform = f;
        } else F && (delete this.updateTransform, delete this.applyTextOutline, this.destroyTextPath(p, a), this.updateTransform(), this.options && this.options.rotation && this.applyTextOutline(this.options.style.textOutline));

        return this;
      };

      e.prototype.shadow = function (a, c, p) {
        var t = [],
            g = this.element,
            d = this.oldShadowOptions,
            h = {
          color: H.neutralColor100,
          offsetX: 1,
          offsetY: 1,
          opacity: .15,
          width: 3
        },
            r = !1,
            K;
        !0 === a ? K = h : "object" === _typeof(a) && (K = m(h, a));
        K && (K && d && y(K, function (a, p) {
          a !== d[p] && (r = !0);
        }), r && this.destroyShadows(), this.oldShadowOptions = K);
        if (!K) this.destroyShadows();else if (!this.shadows) {
          var A = K.opacity / K.width;
          var f = this.parentInverted ? "translate(-1,-1)" : "translate(" + K.offsetX + ", " + K.offsetY + ")";

          for (h = 1; h <= K.width; h++) {
            var b = g.cloneNode(!1);
            var l = 2 * K.width + 1 - 2 * h;
            N(b, {
              stroke: a.color || H.neutralColor100,
              "stroke-opacity": A * h,
              "stroke-width": l,
              transform: f,
              fill: "none"
            });
            b.setAttribute("class", (b.getAttribute("class") || "") + " highcharts-shadow");
            p && (N(b, "height", Math.max(N(b, "height") - l, 0)), b.cutHeight = l);
            c ? c.element.appendChild(b) : g.parentNode && g.parentNode.insertBefore(b, g);
            t.push(b);
          }

          this.shadows = t;
        }
        return this;
      };

      e.prototype.show = function (a) {
        return this.attr({
          visibility: a ? "inherit" : "visible"
        });
      };

      e.prototype.strokeSetter = function (a, c, p) {
        this[c] = a;
        this.stroke && this["stroke-width"] ? (e.prototype.fillSetter.call(this, this.stroke, "stroke", p), p.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === c && 0 === a && this.hasStroke ? (p.removeAttribute("stroke"), this.hasStroke = !1) : this.renderer.styledMode && this["stroke-width"] && (p.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0);
      };

      e.prototype.strokeWidth = function () {
        if (!this.renderer.styledMode) return this["stroke-width"] || 0;
        var a = this.getStyle("stroke-width"),
            c = 0;
        if (a.indexOf("px") === a.length - 2) c = P(a);else if ("" !== a) {
          var p = v.createElementNS(q, "rect");
          N(p, {
            width: a,
            "stroke-width": 0
          });
          this.element.parentNode.appendChild(p);
          c = p.getBBox().width;
          p.parentNode.removeChild(p);
        }
        return c;
      };

      e.prototype.symbolAttr = function (a) {
        var c = this;
        "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function (p) {
          c[p] = L(a[p], c[p]);
        });
        c.attr({
          d: c.renderer.symbols[c.symbolName](c.x, c.y, c.width, c.height, c)
        });
      };

      e.prototype.textSetter = function (a) {
        a !== this.textStr && (delete this.textPxLength, this.textStr = a, this.added && this.renderer.buildText(this));
      };

      e.prototype.titleSetter = function (a) {
        var c = this.element,
            p = c.getElementsByTagName("title")[0] || v.createElementNS(this.SVG_NS, "title");
        c.insertBefore ? c.insertBefore(p, c.firstChild) : c.appendChild(p);
        p.textContent = String(L(a, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
      };

      e.prototype.toFront = function () {
        var a = this.element;
        a.parentNode.appendChild(a);
        return this;
      };

      e.prototype.translate = function (a, c) {
        return this.attr({
          translateX: a,
          translateY: c
        });
      };

      e.prototype.updateShadows = function (a, c, p) {
        var t = this.shadows;
        if (t) for (var g = t.length; g--;) {
          p.call(t[g], "height" === a ? Math.max(c - (t[g].cutHeight || 0), 0) : "d" === a ? this.d : c, a, t[g]);
        }
      };

      e.prototype.updateTransform = function () {
        var a = this.scaleX,
            c = this.scaleY,
            p = this.inverted,
            g = this.rotation,
            d = this.matrix,
            h = this.element,
            F = this.translateX || 0,
            r = this.translateY || 0;
        p && (F += this.width, r += this.height);
        F = ["translate(" + F + "," + r + ")"];
        J(d) && F.push("matrix(" + d.join(",") + ")");
        p ? F.push("rotate(90) scale(-1,1)") : g && F.push("rotate(" + g + " " + L(this.rotationOriginX, h.getAttribute("x"), 0) + " " + L(this.rotationOriginY, h.getAttribute("y") || 0) + ")");
        (J(a) || J(c)) && F.push("scale(" + L(a, 1) + " " + L(c, 1) + ")");
        F.length && h.setAttribute("transform", F.join(" "));
      };

      e.prototype.visibilitySetter = function (a, c, p) {
        "inherit" === a ? p.removeAttribute(c) : this[c] !== a && p.setAttribute(c, a);
        this[c] = a;
      };

      e.prototype.xGetter = function (a) {
        "circle" === this.element.nodeName && ("x" === a ? a = "cx" : "y" === a && (a = "cy"));
        return this._defaultGetter(a);
      };

      e.prototype.zIndexSetter = function (a, c) {
        var p = this.renderer,
            g = this.parentGroup,
            t = (g || p).element || p.box,
            d = this.element;
        p = t === p.box;
        var h = !1;
        var r = this.added;
        var K;
        J(a) ? (d.setAttribute("data-z-index", a), a = +a, this[c] === a && (r = !1)) : J(this[c]) && d.removeAttribute("data-z-index");
        this[c] = a;

        if (r) {
          (a = this.zIndex) && g && (g.handleZ = !0);
          c = t.childNodes;

          for (K = c.length - 1; 0 <= K && !h; K--) {
            g = c[K];
            r = g.getAttribute("data-z-index");
            var m = !J(r);
            if (g !== d) if (0 > a && m && !p && !K) t.insertBefore(d, c[K]), h = !0;else if (P(r) <= a || m && (!J(a) || 0 <= a)) t.insertBefore(d, c[K + 1] || null), h = !0;
          }

          h || (t.insertBefore(d, c[p ? 3 : 0] || null), h = !0);
        }

        return h;
      };

      return e;
    }();

    e.prototype["stroke-widthSetter"] = e.prototype.strokeSetter;
    e.prototype.yGetter = e.prototype.xGetter;

    e.prototype.matrixSetter = e.prototype.rotationOriginXSetter = e.prototype.rotationOriginYSetter = e.prototype.rotationSetter = e.prototype.scaleXSetter = e.prototype.scaleYSetter = e.prototype.translateXSetter = e.prototype.translateYSetter = e.prototype.verticalAlignSetter = function (a, c) {
      this[c] = a;
      this.doTransform = !0;
    };

    "";
    return e;
  });
  O(e, "Core/Renderer/SVG/SVGLabel.js", [e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function (e, b) {
    function D(b, f) {
      C(b) ? b !== this[f] && (this[f] = b, this.updateTextPadding()) : this[f] = void 0;
    }

    var z = this && this.__extends || function () {
      var _b = function b(f, d) {
        _b = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var f in b) {
            b.hasOwnProperty(f) && (d[f] = b[f]);
          }
        };

        return _b(f, d);
      };

      return function (f, d) {
        function q() {
          this.constructor = f;
        }

        _b(f, d);

        f.prototype = null === d ? Object.create(d) : (q.prototype = d.prototype, new q());
      };
    }(),
        H = b.defined,
        G = b.extend,
        C = b.isNumber,
        B = b.merge,
        x = b.pick,
        w = b.removeEvent;

    return function (b) {
      function f(d, q, k, l, e, u, n, v, E, m) {
        var c = b.call(this) || this;
        c.paddingSetter = D;
        c.paddingLeftSetter = D;
        c.paddingRightSetter = D;
        c.init(d, "g");
        c.textStr = q;
        c.x = k;
        c.y = l;
        c.anchorX = u;
        c.anchorY = n;
        c.baseline = E;
        c.className = m;
        "button" !== m && c.addClass("highcharts-label");
        m && c.addClass("highcharts-" + m);
        c.text = d.text("", 0, 0, v).attr({
          zIndex: 1
        });

        if ("string" === typeof e) {
          var g = /^url\((.*?)\)$/.test(e);
          if (c.renderer.symbols[e] || g) c.symbolKey = e;
        }

        c.bBox = f.emptyBBox;
        c.padding = 3;
        c.baselineOffset = 0;
        c.needsBox = d.styledMode || g;
        c.deferredAttr = {};
        c.alignFactor = 0;
        return c;
      }

      z(f, b);

      f.prototype.alignSetter = function (d) {
        d = {
          left: 0,
          center: .5,
          right: 1
        }[d];
        d !== this.alignFactor && (this.alignFactor = d, this.bBox && C(this.xSetting) && this.attr({
          x: this.xSetting
        }));
      };

      f.prototype.anchorXSetter = function (d, b) {
        this.anchorX = d;
        this.boxAttr(b, Math.round(d) - this.getCrispAdjust() - this.xSetting);
      };

      f.prototype.anchorYSetter = function (d, b) {
        this.anchorY = d;
        this.boxAttr(b, d - this.ySetting);
      };

      f.prototype.boxAttr = function (d, b) {
        this.box ? this.box.attr(d, b) : this.deferredAttr[d] = b;
      };

      f.prototype.css = function (d) {
        if (d) {
          var b = {},
              k = void 0;
          d = B(d);
          f.textProps.forEach(function (f) {
            "undefined" !== typeof d[f] && (b[f] = d[f], delete d[f]);
          });
          this.text.css(b);
          k = "width" in b;
          "fontSize" in b || "fontWeight" in b ? this.updateTextPadding() : k && this.updateBoxSize();
        }

        return e.prototype.css.call(this, d);
      };

      f.prototype.destroy = function () {
        w(this.element, "mouseenter");
        w(this.element, "mouseleave");
        this.text && this.text.destroy();
        this.box && (this.box = this.box.destroy());
        e.prototype.destroy.call(this);
      };

      f.prototype.fillSetter = function (d, b) {
        d && (this.needsBox = !0);
        this.fill = d;
        this.boxAttr(b, d);
      };

      f.prototype.getBBox = function () {
        this.textStr && 0 === this.bBox.width && 0 === this.bBox.height && this.updateBoxSize();
        var d = this.padding,
            b = x(this.paddingLeft, d);
        return {
          width: this.width,
          height: this.height,
          x: this.bBox.x - b,
          y: this.bBox.y - d
        };
      };

      f.prototype.getCrispAdjust = function () {
        return this.renderer.styledMode && this.box ? this.box.strokeWidth() % 2 / 2 : (this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2;
      };

      f.prototype.heightSetter = function (d) {
        this.heightSetting = d;
      };

      f.prototype.on = function (d, b) {
        var f = this,
            l = f.text,
            q = l && "SPAN" === l.element.tagName ? l : void 0;

        if (q) {
          var u = function u(l) {
            ("mouseenter" === d || "mouseleave" === d) && l.relatedTarget instanceof Element && (f.element.compareDocumentPosition(l.relatedTarget) & Node.DOCUMENT_POSITION_CONTAINED_BY || q.element.compareDocumentPosition(l.relatedTarget) & Node.DOCUMENT_POSITION_CONTAINED_BY) || b.call(f.element, l);
          };

          q.on(d, u);
        }

        e.prototype.on.call(f, d, u || b);
        return f;
      };

      f.prototype.onAdd = function () {
        var d = this.textStr;
        this.text.add(this);
        this.attr({
          text: H(d) ? d : "",
          x: this.x,
          y: this.y
        });
        this.box && H(this.anchorX) && this.attr({
          anchorX: this.anchorX,
          anchorY: this.anchorY
        });
      };

      f.prototype.rSetter = function (d, b) {
        this.boxAttr(b, d);
      };

      f.prototype.shadow = function (d) {
        d && !this.renderer.styledMode && (this.updateBoxSize(), this.box && this.box.shadow(d));
        return this;
      };

      f.prototype.strokeSetter = function (d, b) {
        this.stroke = d;
        this.boxAttr(b, d);
      };

      f.prototype["stroke-widthSetter"] = function (d, b) {
        d && (this.needsBox = !0);
        this["stroke-width"] = d;
        this.boxAttr(b, d);
      };

      f.prototype["text-alignSetter"] = function (d) {
        this.textAlign = d;
      };

      f.prototype.textSetter = function (d) {
        "undefined" !== typeof d && this.text.attr({
          text: d
        });
        this.updateTextPadding();
      };

      f.prototype.updateBoxSize = function () {
        var d = this.text.element.style,
            b = {},
            e = this.padding,
            l = this.bBox = C(this.widthSetting) && C(this.heightSetting) && !this.textAlign || !H(this.text.textStr) ? f.emptyBBox : this.text.getBBox();
        this.width = this.getPaddedWidth();
        this.height = (this.heightSetting || l.height || 0) + 2 * e;
        this.baselineOffset = e + Math.min(this.renderer.fontMetrics(d && d.fontSize, this.text).b, l.height || Infinity);
        this.needsBox && (this.box || (d = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect(), d.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), d.add(this)), d = this.getCrispAdjust(), b.x = d, b.y = (this.baseline ? -this.baselineOffset : 0) + d, b.width = Math.round(this.width), b.height = Math.round(this.height), this.box.attr(G(b, this.deferredAttr)), this.deferredAttr = {});
      };

      f.prototype.updateTextPadding = function () {
        var d = this.text;
        this.updateBoxSize();
        var b = this.baseline ? 0 : this.baselineOffset,
            f = x(this.paddingLeft, this.padding);
        H(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (f += {
          center: .5,
          right: 1
        }[this.textAlign] * (this.widthSetting - this.bBox.width));
        if (f !== d.x || b !== d.y) d.attr("x", f), d.hasBoxWidthChanged && (this.bBox = d.getBBox(!0)), "undefined" !== typeof b && d.attr("y", b);
        d.x = f;
        d.y = b;
      };

      f.prototype.widthSetter = function (d) {
        this.widthSetting = C(d) ? d : void 0;
      };

      f.prototype.getPaddedWidth = function () {
        var d = this.padding,
            b = x(this.paddingLeft, d);
        d = x(this.paddingRight, d);
        return (this.widthSetting || this.bBox.width || 0) + b + d;
      };

      f.prototype.xSetter = function (d) {
        this.x = d;
        this.alignFactor && (d -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0);
        this.xSetting = Math.round(d);
        this.attr("translateX", this.xSetting);
      };

      f.prototype.ySetter = function (d) {
        this.ySetting = this.y = Math.round(d);
        this.attr("translateY", this.ySetting);
      };

      f.emptyBBox = {
        width: 0,
        height: 0,
        x: 0,
        y: 0
      };
      f.textProps = "color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" ");
      return f;
    }(e);
  });
  O(e, "Core/Renderer/SVG/TextBuilder.js", [e["Core/Globals.js"], e["Core/Utilities.js"], e["Core/Renderer/HTML/AST.js"]], function (e, b, I) {
    var D = e.doc,
        H = e.SVG_NS,
        G = b.attr,
        C = b.isString,
        B = b.objectEach,
        x = b.pick;
    return function () {
      function b(b) {
        var f = b.styles;
        this.renderer = b.renderer;
        this.svgElement = b;
        this.width = b.textWidth;
        this.textLineHeight = f && f.lineHeight;
        this.textOutline = f && f.textOutline;
        this.ellipsis = !(!f || "ellipsis" !== f.textOverflow);
        this.noWrap = !(!f || "nowrap" !== f.whiteSpace);
        this.fontSize = f && f.fontSize;
      }

      b.prototype.buildSVG = function () {
        var b = this.svgElement,
            f = b.element,
            d = b.renderer,
            e = x(b.textStr, "").toString(),
            k = -1 !== e.indexOf("<"),
            l = f.childNodes,
            N = l.length;
        d = this.width && !b.added && d.box;
        var u = /<br.*?>/g;
        var n = [e, this.ellipsis, this.noWrap, this.textLineHeight, this.textOutline, this.fontSize, this.width].join();

        if (n !== b.textCache) {
          b.textCache = n;

          for (delete b.actualWidth; N--;) {
            f.removeChild(l[N]);
          }

          k || this.ellipsis || this.width || -1 !== e.indexOf(" ") && (!this.noWrap || u.test(e)) ? "" !== e && (d && d.appendChild(f), e = new I(e), this.modifyTree(e.nodes), e.addToDOM(b.element), this.modifyDOM(), this.ellipsis && -1 !== (f.textContent || "").indexOf("\u2026") && b.attr("title", this.unescapeEntities(b.textStr || "", ["&lt;", "&gt;"])), d && d.removeChild(f)) : f.appendChild(D.createTextNode(this.unescapeEntities(e)));
          C(this.textOutline) && b.applyTextOutline && b.applyTextOutline(this.textOutline);
        }
      };

      b.prototype.modifyDOM = function () {
        var b = this,
            f = this.svgElement,
            d = G(f.element, "x");
        [].forEach.call(f.element.querySelectorAll("tspan.highcharts-br"), function (f) {
          f.nextSibling && f.previousSibling && G(f, {
            dy: b.getLineHeight(f.nextSibling),
            x: d
          });
        });
        var e = this.width || 0;

        if (e) {
          var k = function k(l, u) {
            var n = l.textContent || "",
                k = n.replace(/([^\^])-/g, "$1- ").split(" "),
                q = !b.noWrap && (1 < k.length || 1 < f.element.childNodes.length),
                m = b.getLineHeight(u),
                c = 0,
                g = f.actualWidth;
            if (b.ellipsis) n && b.truncate(l, n, void 0, 0, Math.max(0, e - parseInt(b.fontSize || 12, 10)), function (a, c) {
              return a.substring(0, c) + "\u2026";
            });else if (q) {
              n = [];

              for (q = []; u.firstChild && u.firstChild !== l;) {
                q.push(u.firstChild), u.removeChild(u.firstChild);
              }

              for (; k.length;) {
                k.length && !b.noWrap && 0 < c && (n.push(l.textContent || ""), l.textContent = k.join(" ").replace(/- /g, "-")), b.truncate(l, void 0, k, 0 === c ? g || 0 : 0, e, function (a, c) {
                  return k.slice(0, c).join(" ").replace(/- /g, "-");
                }), g = f.actualWidth, c++;
              }

              q.forEach(function (a) {
                u.insertBefore(a, l);
              });
              n.forEach(function (a) {
                u.insertBefore(D.createTextNode(a), l);
                a = D.createElementNS(H, "tspan");
                a.textContent = "\u200B";
                G(a, {
                  dy: m,
                  x: d
                });
                u.insertBefore(a, l);
              });
            }
          },
              l = function l(d) {
            [].slice.call(d.childNodes).forEach(function (b) {
              b.nodeType === Node.TEXT_NODE ? k(b, d) : (-1 !== b.className.baseVal.indexOf("highcharts-br") && (f.actualWidth = 0), l(b));
            });
          };

          l(f.element);
        }
      };

      b.prototype.getLineHeight = function (b) {
        var f;
        b = b.nodeType === Node.TEXT_NODE ? b.parentElement : b;
        this.renderer.styledMode || (f = b && /(px|em)$/.test(b.style.fontSize) ? b.style.fontSize : this.fontSize || this.renderer.style.fontSize || 12);
        return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(f, b || this.svgElement.element).h;
      };

      b.prototype.modifyTree = function (b) {
        var f = this,
            d = function d(e, k) {
          var l = e.tagName,
              q = f.renderer.styledMode,
              u = e.attributes || {};
          if ("b" === l || "strong" === l) q ? u["class"] = "highcharts-strong" : u.style = "font-weight:bold;" + (u.style || "");else if ("i" === l || "em" === l) q ? u["class"] = "highcharts-emphasized" : u.style = "font-style:italic;" + (u.style || "");
          C(u.style) && (u.style = u.style.replace(/(;| |^)color([ :])/, "$1fill$2"));
          "br" === l && (u["class"] = "highcharts-br", e.textContent = "\u200B", (k = b[k + 1]) && k.textContent && (k.textContent = k.textContent.replace(/^ +/gm, "")));
          "#text" !== l && "a" !== l && (e.tagName = "tspan");
          e.attributes = u;
          e.children && e.children.filter(function (d) {
            return "#text" !== d.tagName;
          }).forEach(d);
        };

        for (b.forEach(d); b[0] && "tspan" === b[0].tagName && !b[0].children;) {
          b.splice(0, 1);
        }
      };

      b.prototype.truncate = function (b, f, d, e, k, l) {
        var q = this.svgElement,
            u = q.renderer,
            n = q.rotation,
            J = [],
            E = d ? 1 : 0,
            m = (f || d || "").length,
            c = m,
            g,
            a = function a(_a, c) {
          c = c || _a;
          var g = b.parentNode;
          if (g && "undefined" === typeof J[c]) if (g.getSubStringLength) try {
            J[c] = e + g.getSubStringLength(0, d ? c + 1 : c);
          } catch (L) {
            "";
          } else u.getSpanWidth && (b.textContent = l(f || d, _a), J[c] = e + u.getSpanWidth(q, b));
          return J[c];
        };

        q.rotation = 0;
        var h = a(b.textContent.length);

        if (e + h > k) {
          for (; E <= m;) {
            c = Math.ceil((E + m) / 2), d && (g = l(d, c)), h = a(c, g && g.length - 1), E === m ? E = m + 1 : h > k ? m = c - 1 : E = c;
          }

          0 === m ? b.textContent = "" : f && m === f.length - 1 || (b.textContent = g || l(f || d, c));
        }

        d && d.splice(0, c);
        q.actualWidth = h;
        q.rotation = n;
      };

      b.prototype.unescapeEntities = function (b, f) {
        B(this.renderer.escapes, function (d, e) {
          f && -1 !== f.indexOf(d) || (b = b.toString().replace(new RegExp(d, "g"), e));
        });
        return b;
      };

      return b;
    }();
  });
  O(e, "Core/Renderer/SVG/SVGRenderer.js", [e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Color/Palette.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Renderer/SVG/SVGLabel.js"], e["Core/Renderer/HTML/AST.js"], e["Core/Renderer/SVG/TextBuilder.js"], e["Core/Utilities.js"]], function (e, b, I, z, H, G, C, B) {
    var x = B.addEvent,
        w = B.attr,
        v = B.createElement,
        f = B.css,
        d = B.defined,
        q = B.destroyObjectProperties,
        k = B.extend,
        l = B.isArray,
        N = B.isNumber,
        u = B.isObject,
        n = B.isString,
        J = B.merge,
        E = B.pick,
        m = B.pInt,
        c = B.uniqueKey,
        g = b.charts,
        a = b.deg2rad,
        h = b.doc,
        r = b.isFirefox,
        A = b.isMS,
        y = b.isWebKit,
        L = b.noop,
        P = b.SVG_NS,
        R = b.symbolSizes,
        V = b.win,
        Q;

    B = function () {
      function t(a, c, g, t, d, h, r) {
        this.width = this.url = this.style = this.isSVG = this.imgCount = this.height = this.gradients = this.globalAnimation = this.defs = this.chartIndex = this.cacheKeys = this.cache = this.boxWrapper = this.box = this.alignedObjects = void 0;
        this.init(a, c, g, t, d, h, r);
      }

      t.prototype.init = function (a, c, g, t, d, b, K) {
        var p = this.createElement("svg").attr({
          version: "1.1",
          "class": "highcharts-root"
        });
        K || p.css(this.getStyle(t));
        t = p.element;
        a.appendChild(t);
        w(a, "dir", "ltr");
        -1 === a.innerHTML.indexOf("xmlns") && w(t, "xmlns", this.SVG_NS);
        this.isSVG = !0;
        this.box = t;
        this.boxWrapper = p;
        this.alignedObjects = [];
        this.url = this.getReferenceURL();
        this.createElement("desc").add().element.appendChild(h.createTextNode("Created with Highcharts 9.1.0"));
        this.defs = this.createElement("defs").add();
        this.allowHTML = b;
        this.forExport = d;
        this.styledMode = K;
        this.gradients = {};
        this.cache = {};
        this.cacheKeys = [];
        this.imgCount = 0;
        this.setSize(c, g, !1);
        var F;
        r && a.getBoundingClientRect && (c = function c() {
          f(a, {
            left: 0,
            top: 0
          });
          F = a.getBoundingClientRect();
          f(a, {
            left: Math.ceil(F.left) - F.left + "px",
            top: Math.ceil(F.top) - F.top + "px"
          });
        }, c(), this.unSubPixelFix = x(V, "resize", c));
      };

      t.prototype.definition = function (a) {
        return new G([a]).addToDOM(this.defs.element);
      };

      t.prototype.getReferenceURL = function () {
        if ((r || y) && h.getElementsByTagName("base").length) {
          if (!d(Q)) {
            var a = c();
            a = new G([{
              tagName: "svg",
              attributes: {
                width: 8,
                height: 8
              },
              children: [{
                tagName: "defs",
                children: [{
                  tagName: "clipPath",
                  attributes: {
                    id: a
                  },
                  children: [{
                    tagName: "rect",
                    attributes: {
                      width: 4,
                      height: 4
                    }
                  }]
                }]
              }, {
                tagName: "rect",
                attributes: {
                  id: "hitme",
                  width: 8,
                  height: 8,
                  "clip-path": "url(#" + a + ")",
                  fill: "rgba(0,0,0,0.001)"
                }
              }]
            }]).addToDOM(h.body);
            f(a, {
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 9E5
            });
            var g = h.elementFromPoint(6, 6);
            Q = "hitme" === (g && g.id);
            h.body.removeChild(a);
          }

          if (Q) return V.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20");
        }

        return "";
      };

      t.prototype.getStyle = function (a) {
        return this.style = k({
          fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
          fontSize: "12px"
        }, a);
      };

      t.prototype.setStyle = function (a) {
        this.boxWrapper.css(this.getStyle(a));
      };

      t.prototype.isHidden = function () {
        return !this.boxWrapper.getBBox().width;
      };

      t.prototype.destroy = function () {
        var a = this.defs;
        this.box = null;
        this.boxWrapper = this.boxWrapper.destroy();
        q(this.gradients || {});
        this.gradients = null;
        a && (this.defs = a.destroy());
        this.unSubPixelFix && this.unSubPixelFix();
        return this.alignedObjects = null;
      };

      t.prototype.createElement = function (a) {
        var c = new this.Element();
        c.init(this, a);
        return c;
      };

      t.prototype.getRadialAttr = function (a, c) {
        return {
          cx: a[0] - a[2] / 2 + (c.cx || 0) * a[2],
          cy: a[1] - a[2] / 2 + (c.cy || 0) * a[2],
          r: (c.r || 0) * a[2]
        };
      };

      t.prototype.buildText = function (a) {
        new C(a).buildSVG();
      };

      t.prototype.getContrast = function (a) {
        a = e.parse(a).rgba;
        a[0] *= 1;
        a[1] *= 1.2;
        a[2] *= .5;
        return 459 < a[0] + a[1] + a[2] ? "#000000" : "#FFFFFF";
      };

      t.prototype.button = function (a, c, g, t, d, h, r, b, m, f) {
        var p = this.label(a, c, g, m, void 0, void 0, f, void 0, "button"),
            F = 0,
            K = this.styledMode,
            y = d ? J(d) : {};
        a = y && y.style || {};
        y = G.filterUserAttributes(y);
        p.attr(J({
          padding: 8,
          r: 2
        }, y));

        if (!K) {
          y = J({
            fill: I.neutralColor3,
            stroke: I.neutralColor20,
            "stroke-width": 1,
            style: {
              color: I.neutralColor80,
              cursor: "pointer",
              fontWeight: "normal"
            }
          }, {
            style: a
          }, y);
          var l = y.style;
          delete y.style;
          h = J(y, {
            fill: I.neutralColor10
          }, G.filterUserAttributes(h || {}));
          var S = h.style;
          delete h.style;
          r = J(y, {
            fill: I.highlightColor10,
            style: {
              color: I.neutralColor100,
              fontWeight: "bold"
            }
          }, G.filterUserAttributes(r || {}));
          var u = r.style;
          delete r.style;
          b = J(y, {
            style: {
              color: I.neutralColor20
            }
          }, G.filterUserAttributes(b || {}));
          var n = b.style;
          delete b.style;
        }

        x(p.element, A ? "mouseover" : "mouseenter", function () {
          3 !== F && p.setState(1);
        });
        x(p.element, A ? "mouseout" : "mouseleave", function () {
          3 !== F && p.setState(F);
        });

        p.setState = function (a) {
          1 !== a && (p.state = F = a);
          p.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][a || 0]);
          K || p.attr([y, h, r, b][a || 0]).css([l, S, u, n][a || 0]);
        };

        K || p.attr(y).css(k({
          cursor: "default"
        }, l));
        return p.on("touchstart", function (a) {
          return a.stopPropagation();
        }).on("click", function (a) {
          3 !== F && t.call(p, a);
        });
      };

      t.prototype.crispLine = function (a, c, g) {
        void 0 === g && (g = "round");
        var p = a[0],
            t = a[1];
        p[1] === t[1] && (p[1] = t[1] = Math[g](p[1]) - c % 2 / 2);
        p[2] === t[2] && (p[2] = t[2] = Math[g](p[2]) + c % 2 / 2);
        return a;
      };

      t.prototype.path = function (a) {
        var c = this.styledMode ? {} : {
          fill: "none"
        };
        l(a) ? c.d = a : u(a) && k(c, a);
        return this.createElement("path").attr(c);
      };

      t.prototype.circle = function (a, c, g) {
        a = u(a) ? a : "undefined" === typeof a ? {} : {
          x: a,
          y: c,
          r: g
        };
        c = this.createElement("circle");

        c.xSetter = c.ySetter = function (a, c, p) {
          p.setAttribute("c" + c, a);
        };

        return c.attr(a);
      };

      t.prototype.arc = function (a, c, g, t, d, h) {
        u(a) ? (t = a, c = t.y, g = t.r, a = t.x) : t = {
          innerR: t,
          start: d,
          end: h
        };
        a = this.symbol("arc", a, c, g, g, t);
        a.r = g;
        return a;
      };

      t.prototype.rect = function (a, c, g, t, d, h) {
        d = u(a) ? a.r : d;
        var p = this.createElement("rect");
        a = u(a) ? a : "undefined" === typeof a ? {} : {
          x: a,
          y: c,
          width: Math.max(g, 0),
          height: Math.max(t, 0)
        };
        this.styledMode || ("undefined" !== typeof h && (a["stroke-width"] = h, a = p.crisp(a)), a.fill = "none");
        d && (a.r = d);

        p.rSetter = function (a, c, g) {
          p.r = a;
          w(g, {
            rx: a,
            ry: a
          });
        };

        p.rGetter = function () {
          return p.r || 0;
        };

        return p.attr(a);
      };

      t.prototype.setSize = function (a, c, g) {
        this.width = a;
        this.height = c;
        this.boxWrapper.animate({
          width: a,
          height: c
        }, {
          step: function step() {
            this.attr({
              viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
            });
          },
          duration: E(g, !0) ? void 0 : 0
        });
        this.alignElements();
      };

      t.prototype.g = function (a) {
        var c = this.createElement("g");
        return a ? c.attr({
          "class": "highcharts-" + a
        }) : c;
      };

      t.prototype.image = function (a, c, g, t, d, h) {
        var p = {
          preserveAspectRatio: "none"
        },
            r = function r(a, c) {
          a.setAttributeNS ? a.setAttributeNS("http://www.w3.org/1999/xlink", "href", c) : a.setAttribute("hc-svg-href", c);
        },
            F = function F(c) {
          r(b.element, a);
          h.call(b, c);
        };

        1 < arguments.length && k(p, {
          x: c,
          y: g,
          width: t,
          height: d
        });
        var b = this.createElement("image").attr(p);
        h ? (r(b.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), p = new V.Image(), x(p, "load", F), p.src = a, p.complete && F({})) : r(b.element, a);
        return b;
      };

      t.prototype.symbol = function (a, c, t, r, F, b) {
        var p = this,
            m = /^url\((.*?)\)$/,
            A = m.test(a),
            y = !A && (this.symbols[a] ? a : "circle"),
            l = y && this.symbols[y],
            u;

        if (l) {
          "number" === typeof c && (u = l.call(this.symbols, Math.round(c || 0), Math.round(t || 0), r || 0, F || 0, b));
          var n = this.path(u);
          p.styledMode || n.attr("fill", "none");
          k(n, {
            symbolName: y,
            x: c,
            y: t,
            width: r,
            height: F
          });
          b && k(n, b);
        } else if (A) {
          var e = a.match(m)[1];
          n = this.image(e);
          n.imgwidth = E(R[e] && R[e].width, b && b.width);
          n.imgheight = E(R[e] && R[e].height, b && b.height);

          var S = function S() {
            n.attr({
              width: n.width,
              height: n.height
            });
          };

          ["width", "height"].forEach(function (a) {
            n[a + "Setter"] = function (a, c) {
              var p = this["img" + c];
              this[c] = a;
              d(p) && (b && "within" === b.backgroundSize && this.width && this.height && (p = Math.round(p * Math.min(this.width / this.imgwidth, this.height / this.imgheight))), this.element && this.element.setAttribute(c, p), this.alignByTranslate || (a = ((this[c] || 0) - p) / 2, this.attr("width" === c ? {
                translateX: a
              } : {
                translateY: a
              })));
            };
          });
          d(c) && n.attr({
            x: c,
            y: t
          });
          n.isImg = !0;
          d(n.imgwidth) && d(n.imgheight) ? S() : (n.attr({
            width: 0,
            height: 0
          }), v("img", {
            onload: function onload() {
              var a = g[p.chartIndex];
              0 === this.width && (f(this, {
                position: "absolute",
                top: "-999em"
              }), h.body.appendChild(this));
              R[e] = {
                width: this.width,
                height: this.height
              };
              n.imgwidth = this.width;
              n.imgheight = this.height;
              n.element && S();
              this.parentNode && this.parentNode.removeChild(this);
              p.imgCount--;
              if (!p.imgCount && a && !a.hasLoaded) a.onload();
            },
            src: e
          }), this.imgCount++);
        }

        return n;
      };

      t.prototype.clipRect = function (a, g, t, d) {
        var p = c() + "-",
            h = this.createElement("clipPath").attr({
          id: p
        }).add(this.defs);
        a = this.rect(a, g, t, d, 0).add(h);
        a.id = p;
        a.clipPath = h;
        a.count = 0;
        return a;
      };

      t.prototype.text = function (a, c, g, t) {
        var p = {};
        if (t && (this.allowHTML || !this.forExport)) return this.html(a, c, g);
        p.x = Math.round(c || 0);
        g && (p.y = Math.round(g));
        d(a) && (p.text = a);
        a = this.createElement("text").attr(p);
        t || (a.xSetter = function (a, c, p) {
          var g = p.getElementsByTagName("tspan"),
              t = p.getAttribute(c),
              d;

          for (d = 0; d < g.length; d++) {
            var h = g[d];
            h.getAttribute(c) === t && h.setAttribute(c, a);
          }

          p.setAttribute(c, a);
        });
        return a;
      };

      t.prototype.fontMetrics = function (a, c) {
        a = !this.styledMode && /px/.test(a) || !V.getComputedStyle ? a || c && c.style && c.style.fontSize || this.style && this.style.fontSize : c && z.prototype.getStyle.call(c, "font-size");
        a = /px/.test(a) ? m(a) : 12;
        c = 24 > a ? a + 3 : Math.round(1.2 * a);
        return {
          h: c,
          b: Math.round(.8 * c),
          f: a
        };
      };

      t.prototype.rotCorr = function (c, g, t) {
        var p = c;
        g && t && (p = Math.max(p * Math.cos(g * a), 4));
        return {
          x: -c / 3 * Math.sin(g * a),
          y: p
        };
      };

      t.prototype.pathToSegments = function (a) {
        for (var c = [], g = [], p = {
          A: 8,
          C: 7,
          H: 2,
          L: 3,
          M: 3,
          Q: 5,
          S: 5,
          T: 3,
          V: 2
        }, t = 0; t < a.length; t++) {
          n(g[0]) && N(a[t]) && g.length === p[g[0].toUpperCase()] && a.splice(t, 0, g[0].replace("M", "L").replace("m", "l")), "string" === typeof a[t] && (g.length && c.push(g.slice(0)), g.length = 0), g.push(a[t]);
        }

        c.push(g.slice(0));
        return c;
      };

      t.prototype.label = function (a, c, g, t, d, h, r, b, m) {
        return new H(this, a, c, g, t, d, h, r, b, m);
      };

      t.prototype.alignElements = function () {
        this.alignedObjects.forEach(function (a) {
          return a.align();
        });
      };

      return t;
    }();

    B.prototype.Element = z;
    B.prototype.SVG_NS = P;
    B.prototype.draw = L;
    B.prototype.escapes = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;"
    };

    var M = function M(a, c, g, d, h) {
      h = h && h.r || 0;
      return [["M", a + h, c], ["L", a + g - h, c], ["C", a + g, c, a + g, c, a + g, c + h], ["L", a + g, c + d - h], ["C", a + g, c + d, a + g, c + d, a + g - h, c + d], ["L", a + h, c + d], ["C", a, c + d, a, c + d, a, c + d - h], ["L", a, c + h], ["C", a, c, a, c, a + h, c]];
    };

    L = function L(a, c, g, d, h) {
      return h && h.r ? M(a, c, g, d, h) : [["M", a, c], ["L", a + g, c], ["L", a + g, c + d], ["L", a, c + d], ["Z"]];
    };

    B.prototype.symbols = {
      circle: function circle(a, c, g, d) {
        return this.arc(a + g / 2, c + d / 2, g / 2, d / 2, {
          start: .5 * Math.PI,
          end: 2.5 * Math.PI,
          open: !1
        });
      },
      rect: L,
      square: L,
      triangle: function triangle(a, c, g, d) {
        return [["M", a + g / 2, c], ["L", a + g, c + d], ["L", a, c + d], ["Z"]];
      },
      "triangle-down": function triangleDown(a, c, g, d) {
        return [["M", a, c], ["L", a + g, c], ["L", a + g / 2, c + d], ["Z"]];
      },
      diamond: function diamond(a, c, g, d) {
        return [["M", a + g / 2, c], ["L", a + g, c + d / 2], ["L", a + g / 2, c + d], ["L", a, c + d / 2], ["Z"]];
      },
      arc: function arc(a, c, g, h, r) {
        var t = [];

        if (r) {
          var p = r.start || 0,
              b = E(r.r, g);
          g = E(r.r, h || g);
          var m = (r.end || 0) - .001;
          h = r.innerR;
          var f = E(r.open, .001 > Math.abs((r.end || 0) - p - 2 * Math.PI)),
              A = Math.cos(p),
              y = Math.sin(p),
              l = Math.cos(m),
              n = Math.sin(m);
          p = E(r.longArc, .001 > m - p - Math.PI ? 0 : 1);
          t.push(["M", a + b * A, c + g * y], ["A", b, g, 0, p, E(r.clockwise, 1), a + b * l, c + g * n]);
          d(h) && t.push(f ? ["M", a + h * l, c + h * n] : ["L", a + h * l, c + h * n], ["A", h, h, 0, p, d(r.clockwise) ? 1 - r.clockwise : 0, a + h * A, c + h * y]);
          f || t.push(["Z"]);
        }

        return t;
      },
      callout: function callout(a, c, g, d, h) {
        var p = Math.min(h && h.r || 0, g, d),
            t = p + 6,
            r = h && h.anchorX;
        h = h && h.anchorY || 0;
        var b = M(a, c, g, d, {
          r: p
        });
        if (!N(r)) return b;
        a + r >= g ? h > c + t && h < c + d - t ? b.splice(3, 1, ["L", a + g, h - 6], ["L", a + g + 6, h], ["L", a + g, h + 6], ["L", a + g, c + d - p]) : b.splice(3, 1, ["L", a + g, d / 2], ["L", r, h], ["L", a + g, d / 2], ["L", a + g, c + d - p]) : 0 >= a + r ? h > c + t && h < c + d - t ? b.splice(7, 1, ["L", a, h + 6], ["L", a - 6, h], ["L", a, h - 6], ["L", a, c + p]) : b.splice(7, 1, ["L", a, d / 2], ["L", r, h], ["L", a, d / 2], ["L", a, c + p]) : h && h > d && r > a + t && r < a + g - t ? b.splice(5, 1, ["L", r + 6, c + d], ["L", r, c + d + 6], ["L", r - 6, c + d], ["L", a + p, c + d]) : h && 0 > h && r > a + t && r < a + g - t && b.splice(1, 1, ["L", r - 6, c], ["L", r, c - 6], ["L", r + 6, c], ["L", g - p, c]);
        return b;
      }
    };
    b.SVGRenderer = B;
    b.Renderer = b.SVGRenderer;
    return b.Renderer;
  });
  O(e, "Core/Renderer/HTML/HTMLElement.js", [e["Core/Globals.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function (e, b, I) {
    var D = e.isFirefox,
        H = e.isMS,
        G = e.isWebKit,
        C = e.win,
        B = I.css,
        x = I.defined,
        w = I.extend,
        v = I.pick,
        f = I.pInt;
    w(b.prototype, {
      htmlCss: function htmlCss(d) {
        var b = "SPAN" === this.element.tagName && d && "width" in d,
            f = v(b && d.width, void 0);

        if (b) {
          delete d.width;
          this.textWidth = f;
          var l = !0;
        }

        d && "ellipsis" === d.textOverflow && (d.whiteSpace = "nowrap", d.overflow = "hidden");
        this.styles = w(this.styles, d);
        B(this.element, d);
        l && this.htmlUpdateTransform();
        return this;
      },
      htmlGetBBox: function htmlGetBBox() {
        var d = this.element;
        return {
          x: d.offsetLeft,
          y: d.offsetTop,
          width: d.offsetWidth,
          height: d.offsetHeight
        };
      },
      htmlUpdateTransform: function htmlUpdateTransform() {
        if (this.added) {
          var d = this.renderer,
              b = this.element,
              e = this.translateX || 0,
              l = this.translateY || 0,
              N = this.x || 0,
              u = this.y || 0,
              n = this.textAlign || "left",
              J = {
            left: 0,
            center: .5,
            right: 1
          }[n],
              E = this.styles;
          E = E && E.whiteSpace;
          B(b, {
            marginLeft: e,
            marginTop: l
          });
          !d.styledMode && this.shadows && this.shadows.forEach(function (a) {
            B(a, {
              marginLeft: e + 1,
              marginTop: l + 1
            });
          });
          this.inverted && [].forEach.call(b.childNodes, function (a) {
            d.invertChild(a, b);
          });

          if ("SPAN" === b.tagName) {
            var m = this.rotation,
                c = void 0;
            c = this.textWidth && f(this.textWidth);
            var g = [m, n, b.innerHTML, this.textWidth, this.textAlign].join(),
                a;
            (a = c !== this.oldTextWidth) && !(a = c > this.oldTextWidth) && ((a = this.textPxLength) || (B(b, {
              width: "",
              whiteSpace: E || "nowrap"
            }), a = b.offsetWidth), a = a > c);
            a && (/[ \-]/.test(b.textContent || b.innerText) || "ellipsis" === b.style.textOverflow) ? (B(b, {
              width: c + "px",
              display: "block",
              whiteSpace: E || "normal"
            }), this.oldTextWidth = c, this.hasBoxWidthChanged = !0) : this.hasBoxWidthChanged = !1;
            g !== this.cTT && (c = d.fontMetrics(b.style.fontSize, b).b, !x(m) || m === (this.oldRotation || 0) && n === this.oldAlign || this.setSpanRotation(m, J, c), this.getSpanCorrection(!x(m) && this.textPxLength || b.offsetWidth, c, J, m, n));
            B(b, {
              left: N + (this.xCorr || 0) + "px",
              top: u + (this.yCorr || 0) + "px"
            });
            this.cTT = g;
            this.oldRotation = m;
            this.oldAlign = n;
          }
        } else this.alignOnAdd = !0;
      },
      setSpanRotation: function setSpanRotation(d, b, f) {
        var l = {},
            e = H && !/Edge/.test(C.navigator.userAgent) ? "-ms-transform" : G ? "-webkit-transform" : D ? "MozTransform" : C.opera ? "-o-transform" : void 0;
        e && (l[e] = l.transform = "rotate(" + d + "deg)", l[e + (D ? "Origin" : "-origin")] = l.transformOrigin = 100 * b + "% " + f + "px", B(this.element, l));
      },
      getSpanCorrection: function getSpanCorrection(d, b, f) {
        this.xCorr = -d * f;
        this.yCorr = -b;
      }
    });
    return b;
  });
  O(e, "Core/Renderer/HTML/HTMLRenderer.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Utilities.js"]], function (e, b, I, z) {
    var D = z.attr,
        G = z.createElement,
        C = z.extend,
        B = z.pick;
    C(I.prototype, {
      html: function html(x, w, v) {
        var f = this.createElement("span"),
            d = f.element,
            q = f.renderer,
            k = q.isSVG,
            l = function l(d, f) {
          ["opacity", "visibility"].forEach(function (l) {
            d[l + "Setter"] = function (n, e, m) {
              var c = d.div ? d.div.style : f;
              b.prototype[l + "Setter"].call(this, n, e, m);
              c && (c[e] = n);
            };
          });
          d.addedSetters = !0;
        };

        f.textSetter = function (d) {
          d !== this.textStr && (delete this.bBox, delete this.oldTextWidth, e.setElementHTML(this.element, B(d, "")), this.textStr = d, f.doTransform = !0);
        };

        k && l(f, f.element.style);

        f.xSetter = f.ySetter = f.alignSetter = f.rotationSetter = function (d, b) {
          "align" === b ? f.alignValue = f.textAlign = d : f[b] = d;
          f.doTransform = !0;
        };

        f.afterSetters = function () {
          this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1);
        };

        f.attr({
          text: x,
          x: Math.round(w),
          y: Math.round(v)
        }).css({
          position: "absolute"
        });
        q.styledMode || f.css({
          fontFamily: this.style.fontFamily,
          fontSize: this.style.fontSize
        });
        d.style.whiteSpace = "nowrap";
        f.css = f.htmlCss;
        k && (f.add = function (b) {
          var e = q.box.parentNode,
              n = [];

          if (this.parentGroup = b) {
            var k = b.div;

            if (!k) {
              for (; b;) {
                n.push(b), b = b.parentGroup;
              }

              n.reverse().forEach(function (d) {
                function b(c, g) {
                  d[g] = c;
                  "translateX" === g ? a.left = c + "px" : a.top = c + "px";
                  d.doTransform = !0;
                }

                var c = D(d.element, "class"),
                    g = d.styles || {};
                k = d.div = d.div || G("div", c ? {
                  className: c
                } : void 0, {
                  position: "absolute",
                  left: (d.translateX || 0) + "px",
                  top: (d.translateY || 0) + "px",
                  display: d.display,
                  opacity: d.opacity,
                  cursor: g.cursor,
                  pointerEvents: g.pointerEvents
                }, k || e);
                var a = k.style;
                C(d, {
                  classSetter: function (a) {
                    return function (c) {
                      this.element.setAttribute("class", c);
                      a.className = c;
                    };
                  }(k),
                  on: function on() {
                    n[0].div && f.on.apply({
                      element: n[0].div,
                      onEvents: f.onEvents
                    }, arguments);
                    return d;
                  },
                  translateXSetter: b,
                  translateYSetter: b
                });
                d.addedSetters || l(d);
              });
            }
          } else k = e;

          k.appendChild(d);
          f.added = !0;
          f.alignOnAdd && f.htmlUpdateTransform();
          return f;
        });
        return f;
      }
    });
    return I;
  });
  O(e, "Core/Axis/Tick.js", [e["Core/FormatUtilities.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function (e, b, I) {
    var D = b.deg2rad,
        H = I.clamp,
        G = I.correctFloat,
        C = I.defined,
        B = I.destroyObjectProperties,
        x = I.extend,
        w = I.fireEvent,
        v = I.isNumber,
        f = I.merge,
        d = I.objectEach,
        q = I.pick;
    "";

    I = function () {
      function b(d, b, f, e, k) {
        this.isNewLabel = this.isNew = !0;
        this.axis = d;
        this.pos = b;
        this.type = f || "";
        this.parameters = k || {};
        this.tickmarkOffset = this.parameters.tickmarkOffset;
        this.options = this.parameters.options;
        w(this, "init");
        f || e || this.addLabel();
      }

      b.prototype.addLabel = function () {
        var d = this,
            b = d.axis,
            f = b.options,
            n = b.chart,
            k = b.categories,
            E = b.logarithmic,
            m = b.names,
            c = d.pos,
            g = q(d.options && d.options.labels, f.labels),
            a = b.tickPositions,
            h = c === a[0],
            r = c === a[a.length - 1],
            A = d.label,
            y = (!g.step || 1 === g.step) && 1 === b.tickInterval;
        a = a.info;
        var L, P;
        k = this.parameters.category || (k ? q(k[c], m[c], c) : c);
        E && v(k) && (k = G(E.lin2log(k)));

        if (b.dateTime && a) {
          var R = n.time.resolveDTLFormat(f.dateTimeLabelFormats[!f.grid && a.higherRanks[c] || a.unitName]);
          var V = R.main;
        }

        d.isFirst = h;
        d.isLast = r;
        var Q = {
          axis: b,
          chart: n,
          dateTimeLabelFormat: V,
          isFirst: h,
          isLast: r,
          pos: c,
          tick: d,
          tickPositionInfo: a,
          value: k
        };
        w(this, "labelFormat", Q);

        var M = function M(a) {
          return g.formatter ? g.formatter.call(a, a) : g.format ? (a.text = b.defaultLabelFormatter.call(a), e.format(g.format, a, n)) : b.defaultLabelFormatter.call(a, a);
        };

        f = M.call(Q, Q);
        if (P = R && R.list) d.shortenLabel = function () {
          for (L = 0; L < P.length; L++) {
            if (x(Q, {
              dateTimeLabelFormat: P[L]
            }), A.attr({
              text: M.call(Q, Q)
            }), A.getBBox().width < b.getSlotWidth(d) - 2 * g.padding) return;
          }

          A.attr({
            text: ""
          });
        };
        y && b._addedPlotLB && d.moveLabel(f, g);
        C(A) || d.movedLabel ? A && A.textStr !== f && !y && (!A.textWidth || g.style.width || A.styles.width || A.css({
          width: null
        }), A.attr({
          text: f
        }), A.textPxLength = A.getBBox().width) : (d.label = A = d.createLabel({
          x: 0,
          y: 0
        }, f, g), d.rotation = 0);
      };

      b.prototype.createLabel = function (d, b, e) {
        var n = this.axis,
            l = n.chart;
        if (d = C(b) && e.enabled ? l.renderer.text(b, d.x, d.y, e.useHTML).add(n.labelGroup) : null) l.styledMode || d.css(f(e.style)), d.textPxLength = d.getBBox().width;
        return d;
      };

      b.prototype.destroy = function () {
        B(this, this.axis);
      };

      b.prototype.getPosition = function (d, b, f, e) {
        var n = this.axis,
            l = n.chart,
            m = e && l.oldChartHeight || l.chartHeight;
        d = {
          x: d ? G(n.translate(b + f, null, null, e) + n.transB) : n.left + n.offset + (n.opposite ? (e && l.oldChartWidth || l.chartWidth) - n.right - n.left : 0),
          y: d ? m - n.bottom + n.offset - (n.opposite ? n.height : 0) : G(m - n.translate(b + f, null, null, e) - n.transB)
        };
        d.y = H(d.y, -1E5, 1E5);
        w(this, "afterGetPosition", {
          pos: d
        });
        return d;
      };

      b.prototype.getLabelPosition = function (d, b, f, e, k, q, m, c) {
        var g = this.axis,
            a = g.transA,
            h = g.isLinked && g.linkedParent ? g.linkedParent.reversed : g.reversed,
            r = g.staggerLines,
            A = g.tickRotCorr || {
          x: 0,
          y: 0
        },
            y = k.y,
            n = e || g.reserveSpaceDefault ? 0 : -g.labelOffset * ("center" === g.labelAlign ? .5 : 1),
            l = {};
        C(y) || (y = 0 === g.side ? f.rotation ? -8 : -f.getBBox().height : 2 === g.side ? A.y + 8 : Math.cos(f.rotation * D) * (A.y - f.getBBox(!1, 0).height / 2));
        d = d + k.x + n + A.x - (q && e ? q * a * (h ? -1 : 1) : 0);
        b = b + y - (q && !e ? q * a * (h ? 1 : -1) : 0);
        r && (f = m / (c || 1) % r, g.opposite && (f = r - f - 1), b += g.labelOffset / r * f);
        l.x = d;
        l.y = Math.round(b);
        w(this, "afterGetLabelPosition", {
          pos: l,
          tickmarkOffset: q,
          index: m
        });
        return l;
      };

      b.prototype.getLabelSize = function () {
        return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
      };

      b.prototype.getMarkPath = function (d, b, f, e, k, q) {
        return q.crispLine([["M", d, b], ["L", d + (k ? 0 : -f), b + (k ? f : 0)]], e);
      };

      b.prototype.handleOverflow = function (d) {
        var b = this.axis,
            f = b.options.labels,
            e = d.x,
            l = b.chart.chartWidth,
            k = b.chart.spacing,
            m = q(b.labelLeft, Math.min(b.pos, k[3]));
        k = q(b.labelRight, Math.max(b.isRadial ? 0 : b.pos + b.len, l - k[1]));
        var c = this.label,
            g = this.rotation,
            a = {
          left: 0,
          center: .5,
          right: 1
        }[b.labelAlign || c.attr("align")],
            h = c.getBBox().width,
            r = b.getSlotWidth(this),
            A = r,
            y = 1,
            L,
            P = {};
        if (g || "justify" !== f.overflow) 0 > g && e - a * h < m ? L = Math.round(e / Math.cos(g * D) - m) : 0 < g && e + a * h > k && (L = Math.round((l - e) / Math.cos(g * D)));else if (l = e + (1 - a) * h, e - a * h < m ? A = d.x + A * (1 - a) - m : l > k && (A = k - d.x + A * a, y = -1), A = Math.min(r, A), A < r && "center" === b.labelAlign && (d.x += y * (r - A - a * (r - Math.min(h, A)))), h > A || b.autoRotation && (c.styles || {}).width) L = A;
        L && (this.shortenLabel ? this.shortenLabel() : (P.width = Math.floor(L) + "px", (f.style || {}).textOverflow || (P.textOverflow = "ellipsis"), c.css(P)));
      };

      b.prototype.moveLabel = function (b, f) {
        var e = this,
            n = e.label,
            l = !1,
            k = e.axis,
            m = k.reversed;
        n && n.textStr === b ? (e.movedLabel = n, l = !0, delete e.label) : d(k.ticks, function (c) {
          l || c.isNew || c === e || !c.label || c.label.textStr !== b || (e.movedLabel = c.label, l = !0, c.labelPos = e.movedLabel.xy, delete c.label);
        });

        if (!l && (e.labelPos || n)) {
          var c = e.labelPos || n.xy;
          n = k.horiz ? m ? 0 : k.width + k.left : c.x;
          k = k.horiz ? c.y : m ? k.width + k.left : 0;
          e.movedLabel = e.createLabel({
            x: n,
            y: k
          }, b, f);
          e.movedLabel && e.movedLabel.attr({
            opacity: 0
          });
        }
      };

      b.prototype.render = function (d, b, f) {
        var e = this.axis,
            l = e.horiz,
            k = this.pos,
            m = q(this.tickmarkOffset, e.tickmarkOffset);
        k = this.getPosition(l, k, m, b);
        m = k.x;
        var c = k.y;
        e = l && m === e.pos + e.len || !l && c === e.pos ? -1 : 1;
        l = q(f, this.label && this.label.newOpacity, 1);
        f = q(f, 1);
        this.isActive = !0;
        this.renderGridLine(b, f, e);
        this.renderMark(k, f, e);
        this.renderLabel(k, b, l, d);
        this.isNew = !1;
        w(this, "afterRender");
      };

      b.prototype.renderGridLine = function (d, b, f) {
        var e = this.axis,
            l = e.options,
            k = this.gridLine,
            m = {},
            c = this.pos,
            g = this.type,
            a = q(this.tickmarkOffset, e.tickmarkOffset),
            h = e.chart.renderer,
            r = l.gridLineWidth,
            A = l.gridLineColor,
            y = l.gridLineDashStyle;
        "minor" === this.type && (r = l.minorGridLineWidth, A = l.minorGridLineColor, y = l.minorGridLineDashStyle);
        k || (e.chart.styledMode || (m.stroke = A, m["stroke-width"] = r || 0, m.dashstyle = y), g || (m.zIndex = 1), d && (b = 0), this.gridLine = k = h.path().attr(m).addClass("highcharts-" + (g ? g + "-" : "") + "grid-line").add(e.gridGroup));
        if (k && (f = e.getPlotLinePath({
          value: c + a,
          lineWidth: k.strokeWidth() * f,
          force: "pass",
          old: d
        }))) k[d || this.isNew ? "attr" : "animate"]({
          d: f,
          opacity: b
        });
      };

      b.prototype.renderMark = function (d, b, f) {
        var e = this.axis,
            l = e.options,
            k = e.chart.renderer,
            m = this.type,
            c = e.tickSize(m ? m + "Tick" : "tick"),
            g = this.mark,
            a = !g,
            h = d.x;
        d = d.y;
        var r = q(l["minor" !== m ? "tickWidth" : "minorTickWidth"], !m && e.isXAxis ? 1 : 0);
        l = l["minor" !== m ? "tickColor" : "minorTickColor"];
        c && (e.opposite && (c[0] = -c[0]), a && (this.mark = g = k.path().addClass("highcharts-" + (m ? m + "-" : "") + "tick").add(e.axisGroup), e.chart.styledMode || g.attr({
          stroke: l,
          "stroke-width": r
        })), g[a ? "attr" : "animate"]({
          d: this.getMarkPath(h, d, c[0], g.strokeWidth() * f, e.horiz, k),
          opacity: b
        }));
      };

      b.prototype.renderLabel = function (d, b, f, e) {
        var l = this.axis,
            n = l.horiz,
            m = l.options,
            c = this.label,
            g = m.labels,
            a = g.step;
        l = q(this.tickmarkOffset, l.tickmarkOffset);
        var h = !0,
            r = d.x;
        d = d.y;
        c && v(r) && (c.xy = d = this.getLabelPosition(r, d, c, n, g, l, e, a), this.isFirst && !this.isLast && !m.showFirstLabel || this.isLast && !this.isFirst && !m.showLastLabel ? h = !1 : !n || g.step || g.rotation || b || 0 === f || this.handleOverflow(d), a && e % a && (h = !1), h && v(d.y) ? (d.opacity = f, c[this.isNewLabel ? "attr" : "animate"](d), this.isNewLabel = !1) : (c.attr("y", -9999), this.isNewLabel = !0));
      };

      b.prototype.replaceMovedLabel = function () {
        var d = this.label,
            b = this.axis,
            f = b.reversed;

        if (d && !this.isNew) {
          var e = b.horiz ? f ? b.left : b.width + b.left : d.xy.x;
          f = b.horiz ? d.xy.y : f ? b.width + b.top : b.top;
          d.animate({
            x: e,
            y: f,
            opacity: 0
          }, void 0, d.destroy);
          delete this.label;
        }

        b.isDirty = !0;
        this.label = this.movedLabel;
        delete this.movedLabel;
      };

      return b;
    }();

    b.Tick = I;
    return b.Tick;
  });
  O(e, "Core/Axis/Axis.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Color/Palette.js"], e["Core/Options.js"], e["Core/Axis/Tick.js"], e["Core/Utilities.js"]], function (e, b, I, z, H, G, C) {
    var B = e.animObject,
        x = H.defaultOptions,
        w = C.addEvent,
        v = C.arrayMax,
        f = C.arrayMin,
        d = C.clamp,
        q = C.correctFloat,
        k = C.defined,
        l = C.destroyObjectProperties,
        N = C.erase,
        u = C.error,
        n = C.extend,
        J = C.fireEvent,
        E = C.getMagnitude,
        m = C.isArray,
        c = C.isFunction,
        g = C.isNumber,
        a = C.isString,
        h = C.merge,
        r = C.normalizeTickInterval,
        A = C.objectEach,
        y = C.pick,
        L = C.relativeLength,
        P = C.removeEvent,
        R = C.splat,
        V = C.syncTimeout;
    "";
    var Q = I.deg2rad;

    e = function () {
      function e(a, c) {
        this.zoomEnabled = this.width = this.visible = this.userOptions = this.translationSlope = this.transB = this.transA = this.top = this.ticks = this.tickRotCorr = this.tickPositions = this.tickmarkOffset = this.tickInterval = this.tickAmount = this.side = this.series = this.right = this.positiveValuesOnly = this.pos = this.pointRangePadding = this.pointRange = this.plotLinesAndBandsGroups = this.plotLinesAndBands = this.paddedTicks = this.overlap = this.options = this.offset = this.names = this.minPixelPadding = this.minorTicks = this.minorTickInterval = this.min = this.maxLabelLength = this.max = this.len = this.left = this.labelFormatter = this.labelEdge = this.isLinked = this.height = this.hasVisibleSeries = this.hasNames = this.coll = this.closestPointRange = this.chart = this.categories = this.bottom = this.alternateBands = void 0;
        this.init(a, c);
      }

      e.prototype.init = function (a, d) {
        var b = d.isX,
            h = this;
        h.chart = a;
        h.horiz = a.inverted && !h.isZAxis ? !b : b;
        h.isXAxis = b;
        h.coll = h.coll || (b ? "xAxis" : "yAxis");
        J(this, "init", {
          userOptions: d
        });
        h.opposite = y(d.opposite, h.opposite);
        h.side = y(d.side, h.side, h.horiz ? h.opposite ? 0 : 2 : h.opposite ? 1 : 3);
        h.setOptions(d);
        var p = this.options,
            t = p.labels,
            r = p.type;
        h.userOptions = d;
        h.minPixelPadding = 0;
        h.reversed = y(p.reversed, h.reversed);
        h.visible = p.visible;
        h.zoomEnabled = p.zoomEnabled;
        h.hasNames = "category" === r || !0 === p.categories;
        h.categories = p.categories || h.hasNames;
        h.names || (h.names = [], h.names.keys = {});
        h.plotLinesAndBandsGroups = {};
        h.positiveValuesOnly = !!h.logarithmic;
        h.isLinked = k(p.linkedTo);
        h.ticks = {};
        h.labelEdge = [];
        h.minorTicks = {};
        h.plotLinesAndBands = [];
        h.alternateBands = {};
        h.len = 0;
        h.minRange = h.userMinRange = p.minRange || p.maxZoom;
        h.range = p.range;
        h.offset = p.offset || 0;
        h.max = null;
        h.min = null;
        d = y(p.crosshair, R(a.options.tooltip.crosshairs)[b ? 0 : 1]);
        h.crosshair = !0 === d ? {} : d;
        d = h.options.events;
        -1 === a.axes.indexOf(h) && (b ? a.axes.splice(a.xAxis.length, 0, h) : a.axes.push(h), a[h.coll].push(h));
        h.series = h.series || [];
        a.inverted && !h.isZAxis && b && "undefined" === typeof h.reversed && (h.reversed = !0);
        h.labelRotation = g(t.rotation) ? t.rotation : void 0;
        A(d, function (a, d) {
          c(a) && w(h, d, a);
        });
        J(this, "afterInit");
      };

      e.prototype.setOptions = function (a) {
        this.options = h(e.defaultOptions, "yAxis" === this.coll && e.defaultYAxisOptions, [e.defaultTopAxisOptions, e.defaultRightAxisOptions, e.defaultBottomAxisOptions, e.defaultLeftAxisOptions][this.side], h(x[this.coll], a));
        J(this, "afterSetOptions", {
          userOptions: a
        });
      };

      e.prototype.defaultLabelFormatter = function () {
        var a = this.axis,
            c = g(this.value) ? this.value : NaN,
            d = a.chart.time,
            h = this.dateTimeLabelFormat,
            b = x.lang,
            r = b.numericSymbols;
        b = b.numericSymbolMagnitude || 1E3;
        var e = r && r.length,
            f = a.logarithmic ? Math.abs(c) : a.tickInterval,
            m = this.chart.numberFormatter;
        if (a.categories) var A = "" + this.value;else if (h) A = d.dateFormat(h, c);else if (e && 1E3 <= f) for (; e-- && "undefined" === typeof A;) {
          a = Math.pow(b, e + 1), f >= a && 0 === 10 * c % a && null !== r[e] && 0 !== c && (A = m(c / a, -1) + r[e]);
        }
        "undefined" === typeof A && (A = 1E4 <= Math.abs(c) ? m(c, -1) : m(c, -1, void 0, ""));
        return A;
      };

      e.prototype.getSeriesExtremes = function () {
        var a = this,
            c = a.chart,
            d;
        J(this, "getSeriesExtremes", null, function () {
          a.hasVisibleSeries = !1;
          a.dataMin = a.dataMax = a.threshold = null;
          a.softThreshold = !a.isXAxis;
          a.stacking && a.stacking.buildStacks();
          a.series.forEach(function (h) {
            if (h.visible || !c.options.chart.ignoreHiddenSeries) {
              var b = h.options,
                  p = b.threshold;
              a.hasVisibleSeries = !0;
              a.positiveValuesOnly && 0 >= p && (p = null);

              if (a.isXAxis) {
                if (b = h.xData, b.length) {
                  b = a.logarithmic ? b.filter(a.validatePositiveValue) : b;
                  d = h.getXExtremes(b);
                  var t = d.min;
                  var r = d.max;
                  g(t) || t instanceof Date || (b = b.filter(g), d = h.getXExtremes(b), t = d.min, r = d.max);
                  b.length && (a.dataMin = Math.min(y(a.dataMin, t), t), a.dataMax = Math.max(y(a.dataMax, r), r));
                }
              } else if (h = h.applyExtremes(), g(h.dataMin) && (t = h.dataMin, a.dataMin = Math.min(y(a.dataMin, t), t)), g(h.dataMax) && (r = h.dataMax, a.dataMax = Math.max(y(a.dataMax, r), r)), k(p) && (a.threshold = p), !b.softThreshold || a.positiveValuesOnly) a.softThreshold = !1;
            }
          });
        });
        J(this, "afterGetSeriesExtremes");
      };

      e.prototype.translate = function (a, c, d, h, b, r) {
        var p = this.linkedParent || this,
            t = 1,
            e = 0,
            f = h && p.old ? p.old.transA : p.transA;
        h = h && p.old ? p.old.min : p.min;
        var F = p.minPixelPadding;
        b = (p.isOrdinal || p.brokenAxis && p.brokenAxis.hasBreaks || p.logarithmic && b) && p.lin2val;
        f || (f = p.transA);
        d && (t *= -1, e = p.len);
        p.reversed && (t *= -1, e -= t * (p.sector || p.len));
        c ? (a = (a * t + e - F) / f + h, b && (a = p.lin2val(a))) : (b && (a = p.val2lin(a)), a = g(h) ? t * (a - h) * f + e + t * F + (g(r) ? f * r : 0) : void 0);
        return a;
      };

      e.prototype.toPixels = function (a, c) {
        return this.translate(a, !1, !this.horiz, null, !0) + (c ? 0 : this.pos);
      };

      e.prototype.toValue = function (a, c) {
        return this.translate(a - (c ? 0 : this.pos), !0, !this.horiz, null, !0);
      };

      e.prototype.getPlotLinePath = function (a) {
        function c(a, c, g) {
          if ("pass" !== l && a < c || a > g) l ? a = d(a, c, g) : v = !0;
          return a;
        }

        var h = this,
            b = h.chart,
            t = h.left,
            r = h.top,
            e = a.old,
            f = a.value,
            m = a.translatedValue,
            A = a.lineWidth,
            l = a.force,
            n,
            k,
            u,
            L,
            q = e && b.oldChartHeight || b.chartHeight,
            P = e && b.oldChartWidth || b.chartWidth,
            v,
            da = h.transB;
        a = {
          value: f,
          lineWidth: A,
          old: e,
          force: l,
          acrossPanes: a.acrossPanes,
          translatedValue: m
        };
        J(this, "getPlotLinePath", a, function (a) {
          m = y(m, h.translate(f, null, null, e));
          m = d(m, -1E5, 1E5);
          n = u = Math.round(m + da);
          k = L = Math.round(q - m - da);
          g(m) ? h.horiz ? (k = r, L = q - h.bottom, n = u = c(n, t, t + h.width)) : (n = t, u = P - h.right, k = L = c(k, r, r + h.height)) : (v = !0, l = !1);
          a.path = v && !l ? null : b.renderer.crispLine([["M", n, k], ["L", u, L]], A || 1);
        });
        return a.path;
      };

      e.prototype.getLinearTickPositions = function (a, c, d) {
        var g = q(Math.floor(c / a) * a);
        d = q(Math.ceil(d / a) * a);
        var h = [],
            b;
        q(g + a) === g && (b = 20);
        if (this.single) return [c];

        for (c = g; c <= d;) {
          h.push(c);
          c = q(c + a, b);
          if (c === p) break;
          var p = c;
        }

        return h;
      };

      e.prototype.getMinorTickInterval = function () {
        var a = this.options;
        return !0 === a.minorTicks ? y(a.minorTickInterval, "auto") : !1 === a.minorTicks ? null : a.minorTickInterval;
      };

      e.prototype.getMinorTickPositions = function () {
        var a = this.options,
            c = this.tickPositions,
            d = this.minorTickInterval,
            g = [],
            h = this.pointRangePadding || 0,
            b = this.min - h;
        h = this.max + h;
        var r = h - b;

        if (r && r / d < this.len / 3) {
          var e = this.logarithmic;
          if (e) this.paddedTicks.forEach(function (a, c, h) {
            c && g.push.apply(g, e.getLogTickPositions(d, h[c - 1], h[c], !0));
          });else if (this.dateTime && "auto" === this.getMinorTickInterval()) g = g.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(d), b, h, a.startOfWeek));else for (a = b + (c[0] - b) % d; a <= h && a !== g[0]; a += d) {
            g.push(a);
          }
        }

        0 !== g.length && this.trimTicks(g);
        return g;
      };

      e.prototype.adjustForMinRange = function () {
        var a = this.options,
            c = this.min,
            d = this.max,
            g = this.logarithmic,
            h = 0,
            b,
            r,
            e,
            m;
        this.isXAxis && "undefined" === typeof this.minRange && !g && (k(a.min) || k(a.max) ? this.minRange = null : (this.series.forEach(function (a) {
          e = a.xData;
          m = a.xIncrement ? 1 : e.length - 1;
          if (1 < e.length) for (b = m; 0 < b; b--) {
            if (r = e[b] - e[b - 1], !h || r < h) h = r;
          }
        }), this.minRange = Math.min(5 * h, this.dataMax - this.dataMin)));

        if (d - c < this.minRange) {
          var A = this.dataMax - this.dataMin >= this.minRange;
          var l = this.minRange;
          var n = (l - d + c) / 2;
          n = [c - n, y(a.min, c - n)];
          A && (n[2] = this.logarithmic ? this.logarithmic.log2lin(this.dataMin) : this.dataMin);
          c = v(n);
          d = [c + l, y(a.max, c + l)];
          A && (d[2] = g ? g.log2lin(this.dataMax) : this.dataMax);
          d = f(d);
          d - c < l && (n[0] = d - l, n[1] = y(a.min, d - l), c = v(n));
        }

        this.min = c;
        this.max = d;
      };

      e.prototype.getClosest = function () {
        var a;
        this.categories ? a = 1 : this.series.forEach(function (c) {
          var d = c.closestPointRange,
              g = c.visible || !c.chart.options.chart.ignoreHiddenSeries;
          !c.noSharedTooltip && k(d) && g && (a = k(a) ? Math.min(a, d) : d);
        });
        return a;
      };

      e.prototype.nameToX = function (a) {
        var c = m(this.categories),
            d = c ? this.categories : this.names,
            g = a.options.x;
        a.series.requireSorting = !1;
        k(g) || (g = this.options.uniqueNames ? c ? d.indexOf(a.name) : y(d.keys[a.name], -1) : a.series.autoIncrement());

        if (-1 === g) {
          if (!c) var h = d.length;
        } else h = g;

        "undefined" !== typeof h && (this.names[h] = a.name, this.names.keys[a.name] = h);
        return h;
      };

      e.prototype.updateNames = function () {
        var a = this,
            c = this.names;
        0 < c.length && (Object.keys(c.keys).forEach(function (a) {
          delete c.keys[a];
        }), c.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function (c) {
          c.xIncrement = null;
          if (!c.points || c.isDirtyData) a.max = Math.max(a.max, c.xData.length - 1), c.processData(), c.generatePoints();
          c.data.forEach(function (d, g) {
            if (d && d.options && "undefined" !== typeof d.name) {
              var h = a.nameToX(d);
              "undefined" !== typeof h && h !== d.x && (d.x = h, c.xData[g] = h);
            }
          });
        }));
      };

      e.prototype.setAxisTranslation = function () {
        var c = this,
            d = c.max - c.min,
            g = c.axisPointRange || 0,
            h = 0,
            b = 0,
            r = c.linkedParent,
            e = !!c.categories,
            f = c.transA,
            m = c.isXAxis;

        if (m || e || g) {
          var A = c.getClosest();
          r ? (h = r.minPointOffset, b = r.pointRangePadding) : c.series.forEach(function (d) {
            var p = e ? 1 : m ? y(d.options.pointRange, A, 0) : c.axisPointRange || 0,
                r = d.options.pointPlacement;
            g = Math.max(g, p);
            if (!c.single || e) d = d.is("xrange") ? !m : m, h = Math.max(h, d && a(r) ? 0 : p / 2), b = Math.max(b, d && "on" === r ? 0 : p);
          });
          r = c.ordinal && c.ordinal.slope && A ? c.ordinal.slope / A : 1;
          c.minPointOffset = h *= r;
          c.pointRangePadding = b *= r;
          c.pointRange = Math.min(g, c.single && e ? 1 : d);
          m && (c.closestPointRange = A);
        }

        c.translationSlope = c.transA = f = c.staticScale || c.len / (d + b || 1);
        c.transB = c.horiz ? c.left : c.bottom;
        c.minPixelPadding = f * h;
        J(this, "afterSetAxisTranslation");
      };

      e.prototype.minFromRange = function () {
        return this.max - this.range;
      };

      e.prototype.setTickInterval = function (a) {
        var c = this,
            d = c.chart,
            h = c.logarithmic,
            b = c.options,
            e = c.isXAxis,
            t = c.isLinked,
            f = b.maxPadding,
            m = b.minPadding,
            A = b.tickInterval,
            l = b.tickPixelInterval,
            n = c.categories,
            L = g(c.threshold) ? c.threshold : null,
            P = c.softThreshold;
        c.dateTime || n || t || this.getTickAmount();
        var v = y(c.userMin, b.min);
        var w = y(c.userMax, b.max);

        if (t) {
          c.linkedParent = d[c.coll][b.linkedTo];
          var R = c.linkedParent.getExtremes();
          c.min = y(R.min, R.dataMin);
          c.max = y(R.max, R.dataMax);
          b.type !== c.linkedParent.options.type && u(11, 1, d);
        } else {
          if (P && k(L)) if (c.dataMin >= L) R = L, m = 0;else if (c.dataMax <= L) {
            var Q = L;
            f = 0;
          }
          c.min = y(v, R, c.dataMin);
          c.max = y(w, Q, c.dataMax);
        }

        h && (c.positiveValuesOnly && !a && 0 >= Math.min(c.min, y(c.dataMin, c.min)) && u(10, 1, d), c.min = q(h.log2lin(c.min), 16), c.max = q(h.log2lin(c.max), 16));
        c.range && k(c.max) && (c.userMin = c.min = v = Math.max(c.dataMin, c.minFromRange()), c.userMax = w = c.max, c.range = null);
        J(c, "foundExtremes");
        c.beforePadding && c.beforePadding();
        c.adjustForMinRange();
        !(n || c.axisPointRange || c.stacking && c.stacking.usePercentage || t) && k(c.min) && k(c.max) && (d = c.max - c.min) && (!k(v) && m && (c.min -= d * m), !k(w) && f && (c.max += d * f));
        g(c.userMin) || (g(b.softMin) && b.softMin < c.min && (c.min = v = b.softMin), g(b.floor) && (c.min = Math.max(c.min, b.floor)));
        g(c.userMax) || (g(b.softMax) && b.softMax > c.max && (c.max = w = b.softMax), g(b.ceiling) && (c.max = Math.min(c.max, b.ceiling)));
        P && k(c.dataMin) && (L = L || 0, !k(v) && c.min < L && c.dataMin >= L ? c.min = c.options.minRange ? Math.min(L, c.max - c.minRange) : L : !k(w) && c.max > L && c.dataMax <= L && (c.max = c.options.minRange ? Math.max(L, c.min + c.minRange) : L));
        g(c.min) && g(c.max) && !this.chart.polar && c.min > c.max && (k(c.options.min) ? c.max = c.min : k(c.options.max) && (c.min = c.max));
        c.tickInterval = c.min === c.max || "undefined" === typeof c.min || "undefined" === typeof c.max ? 1 : t && c.linkedParent && !A && l === c.linkedParent.options.tickPixelInterval ? A = c.linkedParent.tickInterval : y(A, this.tickAmount ? (c.max - c.min) / Math.max(this.tickAmount - 1, 1) : void 0, n ? 1 : (c.max - c.min) * l / Math.max(c.len, l));
        e && !a && c.series.forEach(function (a) {
          a.processData(c.min !== (c.old && c.old.min) || c.max !== (c.old && c.old.max));
        });
        c.setAxisTranslation();
        J(this, "initialAxisTranslation");
        c.pointRange && !A && (c.tickInterval = Math.max(c.pointRange, c.tickInterval));
        a = y(b.minTickInterval, c.dateTime && !c.series.some(function (a) {
          return a.noSharedTooltip;
        }) ? c.closestPointRange : 0);
        !A && c.tickInterval < a && (c.tickInterval = a);
        c.dateTime || c.logarithmic || A || (c.tickInterval = r(c.tickInterval, void 0, E(c.tickInterval), y(b.allowDecimals, .5 > c.tickInterval || void 0 !== this.tickAmount), !!this.tickAmount));
        this.tickAmount || (c.tickInterval = c.unsquish());
        this.setTickPositions();
      };

      e.prototype.setTickPositions = function () {
        var a = this.options,
            c = a.tickPositions;
        var d = this.getMinorTickInterval();
        var g = a.tickPositioner,
            h = this.hasVerticalPanning(),
            b = "colorAxis" === this.coll,
            r = (b || !h) && a.startOnTick;
        h = (b || !h) && a.endOnTick;
        this.tickmarkOffset = this.categories && "between" === a.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0;
        this.minorTickInterval = "auto" === d && this.tickInterval ? this.tickInterval / 5 : d;
        this.single = this.min === this.max && k(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== a.allowDecimals);
        this.tickPositions = d = c && c.slice();
        !d && (this.ordinal && this.ordinal.positions || !((this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) ? d = this.dateTime ? this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinal && this.ordinal.positions, this.closestPointRange, !0) : this.logarithmic ? this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max) : (d = [this.min, this.max], u(19, !1, this.chart)), d.length > this.len && (d = [d[0], d.pop()], d[0] === d[1] && (d.length = 1)), this.tickPositions = d, g && (g = g.apply(this, [this.min, this.max]))) && (this.tickPositions = d = g);
        this.paddedTicks = d.slice(0);
        this.trimTicks(d, r, h);
        this.isLinked || (this.single && 2 > d.length && !this.categories && !this.series.some(function (a) {
          return a.is("heatmap") && "between" === a.options.pointPlacement;
        }) && (this.min -= .5, this.max += .5), c || g || this.adjustTickAmount());
        J(this, "afterSetTickPositions");
      };

      e.prototype.trimTicks = function (a, c, d) {
        var g = a[0],
            h = a[a.length - 1],
            b = !this.isOrdinal && this.minPointOffset || 0;
        J(this, "trimTicks");

        if (!this.isLinked) {
          if (c && -Infinity !== g) this.min = g;else for (; this.min - b > a[0];) {
            a.shift();
          }
          if (d) this.max = h;else for (; this.max + b < a[a.length - 1];) {
            a.pop();
          }
          0 === a.length && k(g) && !this.options.tickPositions && a.push((h + g) / 2);
        }
      };

      e.prototype.alignToOthers = function () {
        var a = {},
            c,
            d = this.options;
        !1 !== this.chart.options.chart.alignTicks && d.alignTicks && !1 !== d.startOnTick && !1 !== d.endOnTick && !this.logarithmic && this.chart[this.coll].forEach(function (d) {
          var g = d.options;
          g = [d.horiz ? g.left : g.top, g.width, g.height, g.pane].join();
          d.series.length && (a[g] ? c = !0 : a[g] = 1);
        });
        return c;
      };

      e.prototype.getTickAmount = function () {
        var a = this.options,
            c = a.tickAmount,
            d = a.tickPixelInterval;
        !k(a.tickInterval) && !c && this.len < d && !this.isRadial && !this.logarithmic && a.startOnTick && a.endOnTick && (c = 2);
        !c && this.alignToOthers() && (c = Math.ceil(this.len / d) + 1);
        4 > c && (this.finalTickAmt = c, c = 5);
        this.tickAmount = c;
      };

      e.prototype.adjustTickAmount = function () {
        var a = this.options,
            c = this.tickInterval,
            d = this.tickPositions,
            h = this.tickAmount,
            b = this.finalTickAmt,
            r = d && d.length,
            e = y(this.threshold, this.softThreshold ? 0 : null);

        if (this.hasData() && g(this.min) && g(this.max)) {
          if (r < h) {
            for (; d.length < h;) {
              d.length % 2 || this.min === e ? d.push(q(d[d.length - 1] + c)) : d.unshift(q(d[0] - c));
            }

            this.transA *= (r - 1) / (h - 1);
            this.min = a.startOnTick ? d[0] : Math.min(this.min, d[0]);
            this.max = a.endOnTick ? d[d.length - 1] : Math.max(this.max, d[d.length - 1]);
          } else r > h && (this.tickInterval *= 2, this.setTickPositions());

          if (k(b)) {
            for (c = a = d.length; c--;) {
              (3 === b && 1 === c % 2 || 2 >= b && 0 < c && c < a - 1) && d.splice(c, 1);
            }

            this.finalTickAmt = void 0;
          }
        }
      };

      e.prototype.setScale = function () {
        var a,
            c = !1,
            d = !1;
        this.series.forEach(function (a) {
          c = c || a.isDirtyData || a.isDirty;
          d = d || a.xAxis && a.xAxis.isDirty || !1;
        });
        this.setAxisSize();
        (a = this.len !== (this.old && this.old.len)) || c || d || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ? (this.stacking && this.stacking.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.isDirty || (this.isDirty = a || this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max))) : this.stacking && this.stacking.cleanStacks();
        c && this.panningState && (this.panningState.isDirty = !0);
        J(this, "afterSetScale");
      };

      e.prototype.setExtremes = function (a, c, d, g, h) {
        var b = this,
            r = b.chart;
        d = y(d, !0);
        b.series.forEach(function (a) {
          delete a.kdTree;
        });
        h = n(h, {
          min: a,
          max: c
        });
        J(b, "setExtremes", h, function () {
          b.userMin = a;
          b.userMax = c;
          b.eventArgs = h;
          d && r.redraw(g);
        });
      };

      e.prototype.zoom = function (a, c) {
        var d = this,
            g = this.dataMin,
            h = this.dataMax,
            b = this.options,
            r = Math.min(g, y(b.min, g)),
            e = Math.max(h, y(b.max, h));
        a = {
          newMin: a,
          newMax: c
        };
        J(this, "zoom", a, function (a) {
          var c = a.newMin,
              b = a.newMax;
          if (c !== d.min || b !== d.max) d.allowZoomOutside || (k(g) && (c < r && (c = r), c > e && (c = e)), k(h) && (b < r && (b = r), b > e && (b = e))), d.displayBtn = "undefined" !== typeof c || "undefined" !== typeof b, d.setExtremes(c, b, !1, void 0, {
            trigger: "zoom"
          });
          a.zoomed = !0;
        });
        return a.zoomed;
      };

      e.prototype.setAxisSize = function () {
        var a = this.chart,
            c = this.options,
            d = c.offsets || [0, 0, 0, 0],
            g = this.horiz,
            h = this.width = Math.round(L(y(c.width, a.plotWidth - d[3] + d[1]), a.plotWidth)),
            b = this.height = Math.round(L(y(c.height, a.plotHeight - d[0] + d[2]), a.plotHeight)),
            r = this.top = Math.round(L(y(c.top, a.plotTop + d[0]), a.plotHeight, a.plotTop));
        c = this.left = Math.round(L(y(c.left, a.plotLeft + d[3]), a.plotWidth, a.plotLeft));
        this.bottom = a.chartHeight - b - r;
        this.right = a.chartWidth - h - c;
        this.len = Math.max(g ? h : b, 0);
        this.pos = g ? c : r;
      };

      e.prototype.getExtremes = function () {
        var a = this.logarithmic;
        return {
          min: a ? q(a.lin2log(this.min)) : this.min,
          max: a ? q(a.lin2log(this.max)) : this.max,
          dataMin: this.dataMin,
          dataMax: this.dataMax,
          userMin: this.userMin,
          userMax: this.userMax
        };
      };

      e.prototype.getThreshold = function (a) {
        var c = this.logarithmic,
            d = c ? c.lin2log(this.min) : this.min;
        c = c ? c.lin2log(this.max) : this.max;
        null === a || -Infinity === a ? a = d : Infinity === a ? a = c : d > a ? a = d : c < a && (a = c);
        return this.translate(a, 0, 1, 0, 1);
      };

      e.prototype.autoLabelAlign = function (a) {
        var c = (y(a, 0) - 90 * this.side + 720) % 360;
        a = {
          align: "center"
        };
        J(this, "autoLabelAlign", a, function (a) {
          15 < c && 165 > c ? a.align = "right" : 195 < c && 345 > c && (a.align = "left");
        });
        return a.align;
      };

      e.prototype.tickSize = function (a) {
        var c = this.options,
            d = c["tick" === a ? "tickLength" : "minorTickLength"],
            g = y(c["tick" === a ? "tickWidth" : "minorTickWidth"], "tick" === a && this.isXAxis && !this.categories ? 1 : 0);

        if (g && d) {
          "inside" === c[a + "Position"] && (d = -d);
          var h = [d, g];
        }

        a = {
          tickSize: h
        };
        J(this, "afterTickSize", a);
        return a.tickSize;
      };

      e.prototype.labelMetrics = function () {
        var a = this.tickPositions && this.tickPositions[0] || 0;
        return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize, this.ticks[a] && this.ticks[a].label);
      };

      e.prototype.unsquish = function () {
        var a = this.options.labels,
            c = this.horiz,
            d = this.tickInterval,
            h = d,
            b = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / d),
            r,
            e = a.rotation,
            f = this.labelMetrics(),
            m,
            A = Number.MAX_VALUE,
            l = Math.max(this.max - this.min, 0),
            n = function n(a) {
          var c = a / (b || 1);
          c = 1 < c ? Math.ceil(c) : 1;
          c * d > l && Infinity !== a && Infinity !== b && l && (c = Math.ceil(l / d));
          return q(c * d);
        };

        if (c) {
          if (!a.staggerLines && !a.step) if (g(e)) var k = [e];else b < a.autoRotationLimit && (k = a.autoRotation);
          k && k.forEach(function (a) {
            if (a === e || a && -90 <= a && 90 >= a) {
              m = n(Math.abs(f.h / Math.sin(Q * a)));
              var c = m + Math.abs(a / 360);
              c < A && (A = c, r = a, h = m);
            }
          });
        } else a.step || (h = n(f.h));

        this.autoRotation = k;
        this.labelRotation = y(r, g(e) ? e : 0);
        return h;
      };

      e.prototype.getSlotWidth = function (a) {
        var c = this.chart,
            d = this.horiz,
            h = this.options.labels,
            b = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
            r = c.margin[3];
        if (a && g(a.slotWidth)) return a.slotWidth;
        if (d && 2 > h.step) return h.rotation ? 0 : (this.staggerLines || 1) * this.len / b;

        if (!d) {
          a = h.style.width;
          if (void 0 !== a) return parseInt(String(a), 10);
          if (r) return r - c.spacing[3];
        }

        return .33 * c.chartWidth;
      };

      e.prototype.renderUnsquish = function () {
        var c = this.chart,
            d = c.renderer,
            g = this.tickPositions,
            h = this.ticks,
            b = this.options.labels,
            r = b.style,
            e = this.horiz,
            f = this.getSlotWidth(),
            m = Math.max(1, Math.round(f - 2 * b.padding)),
            A = {},
            y = this.labelMetrics(),
            l = r.textOverflow,
            n = 0;
        a(b.rotation) || (A.rotation = b.rotation || 0);
        g.forEach(function (a) {
          a = h[a];
          a.movedLabel && a.replaceMovedLabel();
          a && a.label && a.label.textPxLength > n && (n = a.label.textPxLength);
        });
        this.maxLabelLength = n;
        if (this.autoRotation) n > m && n > y.h ? A.rotation = this.labelRotation : this.labelRotation = 0;else if (f) {
          var k = m;

          if (!l) {
            var L = "clip";

            for (m = g.length; !e && m--;) {
              var u = g[m];
              if (u = h[u].label) u.styles && "ellipsis" === u.styles.textOverflow ? u.css({
                textOverflow: "clip"
              }) : u.textPxLength > f && u.css({
                width: f + "px"
              }), u.getBBox().height > this.len / g.length - (y.h - y.f) && (u.specificTextOverflow = "ellipsis");
            }
          }
        }
        A.rotation && (k = n > .5 * c.chartHeight ? .33 * c.chartHeight : n, l || (L = "ellipsis"));
        if (this.labelAlign = b.align || this.autoLabelAlign(this.labelRotation)) A.align = this.labelAlign;
        g.forEach(function (a) {
          var c = (a = h[a]) && a.label,
              d = r.width,
              g = {};
          c && (c.attr(A), a.shortenLabel ? a.shortenLabel() : k && !d && "nowrap" !== r.whiteSpace && (k < c.textPxLength || "SPAN" === c.element.tagName) ? (g.width = k + "px", l || (g.textOverflow = c.specificTextOverflow || L), c.css(g)) : c.styles && c.styles.width && !g.width && !d && c.css({
            width: null
          }), delete c.specificTextOverflow, a.rotation = A.rotation);
        }, this);
        this.tickRotCorr = d.rotCorr(y.b, this.labelRotation || 0, 0 !== this.side);
      };

      e.prototype.hasData = function () {
        return this.series.some(function (a) {
          return a.hasData();
        }) || this.options.showEmpty && k(this.min) && k(this.max);
      };

      e.prototype.addTitle = function (a) {
        var c = this.chart.renderer,
            d = this.horiz,
            g = this.opposite,
            b = this.options.title,
            r,
            e = this.chart.styledMode;
        this.axisTitle || ((r = b.textAlign) || (r = (d ? {
          low: "left",
          middle: "center",
          high: "right"
        } : {
          low: g ? "right" : "left",
          middle: "center",
          high: g ? "left" : "right"
        })[b.align]), this.axisTitle = c.text(b.text || "", 0, 0, b.useHTML).attr({
          zIndex: 7,
          rotation: b.rotation,
          align: r
        }).addClass("highcharts-axis-title"), e || this.axisTitle.css(h(b.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0);
        e || b.style.width || this.isRadial || this.axisTitle.css({
          width: this.len + "px"
        });
        this.axisTitle[a ? "show" : "hide"](a);
      };

      e.prototype.generateTick = function (a) {
        var c = this.ticks;
        c[a] ? c[a].addLabel() : c[a] = new G(this, a);
      };

      e.prototype.getOffset = function () {
        var a = this,
            c = this,
            d = c.chart,
            g = d.renderer,
            h = c.options,
            b = c.tickPositions,
            r = c.ticks,
            e = c.horiz,
            f = c.side,
            m = d.inverted && !c.isZAxis ? [1, 0, 3, 2][f] : f,
            l,
            n = 0,
            L = 0,
            u = h.title,
            P = h.labels,
            q = 0,
            v = d.axisOffset;
        d = d.clipOffset;
        var w = [-1, 1, 1, -1][f],
            da = h.className,
            ia = c.axisParent;
        var E = c.hasData();
        c.showAxis = l = E || h.showEmpty;
        c.staggerLines = c.horiz && P.staggerLines || void 0;

        if (!c.axisGroup) {
          var R = function R(c, d, h) {
            return g.g(c).attr({
              zIndex: h
            }).addClass("highcharts-" + a.coll.toLowerCase() + d + " " + (a.isRadial ? "highcharts-radial-axis" + d + " " : "") + (da || "")).add(ia);
          };

          c.gridGroup = R("grid", "-grid", h.gridZIndex);
          c.axisGroup = R("axis", "", h.zIndex);
          c.labelGroup = R("axis-labels", "-labels", P.zIndex);
        }

        E || c.isLinked ? (b.forEach(function (a, d) {
          c.generateTick(a, d);
        }), c.renderUnsquish(), c.reserveSpaceDefault = 0 === f || 2 === f || {
          1: "left",
          3: "right"
        }[f] === c.labelAlign, y(P.reserveSpace, "center" === c.labelAlign ? !0 : null, c.reserveSpaceDefault) && b.forEach(function (a) {
          q = Math.max(r[a].getLabelSize(), q);
        }), c.staggerLines && (q *= c.staggerLines), c.labelOffset = q * (c.opposite ? -1 : 1)) : A(r, function (a, c) {
          a.destroy();
          delete r[c];
        });

        if (u && u.text && !1 !== u.enabled && (c.addTitle(l), l && !1 !== u.reserveSpace)) {
          c.titleOffset = n = c.axisTitle.getBBox()[e ? "height" : "width"];
          var Q = u.offset;
          L = k(Q) ? 0 : y(u.margin, e ? 5 : 10);
        }

        c.renderLine();
        c.offset = w * y(h.offset, v[f] ? v[f] + (h.margin || 0) : 0);
        c.tickRotCorr = c.tickRotCorr || {
          x: 0,
          y: 0
        };
        u = 0 === f ? -c.labelMetrics().h : 2 === f ? c.tickRotCorr.y : 0;
        L = Math.abs(q) + L;
        q && (L = L - u + w * (e ? y(P.y, c.tickRotCorr.y + 8 * w) : P.x));
        c.axisTitleMargin = y(Q, L);
        c.getMaxLabelDimensions && (c.maxLabelDimensions = c.getMaxLabelDimensions(r, b));
        e = this.tickSize("tick");
        v[f] = Math.max(v[f], (c.axisTitleMargin || 0) + n + w * c.offset, L, b && b.length && e ? e[0] + w * c.offset : 0);
        h = h.offset ? 0 : 2 * Math.floor(c.axisLine.strokeWidth() / 2);
        d[m] = Math.max(d[m], h);
        J(this, "afterGetOffset");
      };

      e.prototype.getLinePath = function (a) {
        var c = this.chart,
            d = this.opposite,
            g = this.offset,
            h = this.horiz,
            b = this.left + (d ? this.width : 0) + g;
        g = c.chartHeight - this.bottom - (d ? this.height : 0) + g;
        d && (a *= -1);
        return c.renderer.crispLine([["M", h ? this.left : b, h ? g : this.top], ["L", h ? c.chartWidth - this.right : b, h ? g : c.chartHeight - this.bottom]], a);
      };

      e.prototype.renderLine = function () {
        this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({
          stroke: this.options.lineColor,
          "stroke-width": this.options.lineWidth,
          zIndex: 7
        }));
      };

      e.prototype.getTitlePosition = function () {
        var a = this.horiz,
            c = this.left,
            d = this.top,
            g = this.len,
            h = this.options.title,
            b = a ? c : d,
            r = this.opposite,
            e = this.offset,
            f = h.x,
            m = h.y,
            A = this.axisTitle,
            y = this.chart.renderer.fontMetrics(h.style.fontSize, A);
        A = Math.max(A.getBBox(null, 0).height - y.h - 1, 0);
        g = {
          low: b + (a ? 0 : g),
          middle: b + g / 2,
          high: b + (a ? g : 0)
        }[h.align];
        c = (a ? d + this.height : c) + (a ? 1 : -1) * (r ? -1 : 1) * this.axisTitleMargin + [-A, A, y.f, -A][this.side];
        a = {
          x: a ? g + f : c + (r ? this.width : 0) + e + f,
          y: a ? c + m - (r ? this.height : 0) + e : g + m
        };
        J(this, "afterGetTitlePosition", {
          titlePosition: a
        });
        return a;
      };

      e.prototype.renderMinorTick = function (a) {
        var c = this.chart.hasRendered && this.old,
            d = this.minorTicks;
        d[a] || (d[a] = new G(this, a, "minor"));
        c && d[a].isNew && d[a].render(null, !0);
        d[a].render(null, !1, 1);
      };

      e.prototype.renderTick = function (a, c) {
        var d = this.ticks,
            g = this.chart.hasRendered && this.old;
        if (!this.isLinked || a >= this.min && a <= this.max || this.grid && this.grid.isColumn) d[a] || (d[a] = new G(this, a)), g && d[a].isNew && d[a].render(c, !0, -1), d[a].render(c);
      };

      e.prototype.render = function () {
        var a = this,
            c = a.chart,
            d = a.logarithmic,
            h = a.options,
            b = a.isLinked,
            r = a.tickPositions,
            e = a.axisTitle,
            f = a.ticks,
            m = a.minorTicks,
            y = a.alternateBands,
            l = h.stackLabels,
            n = h.alternateGridColor,
            k = a.tickmarkOffset,
            L = a.axisLine,
            u = a.showAxis,
            q = B(c.renderer.globalAnimation),
            P,
            v;
        a.labelEdge.length = 0;
        a.overlap = !1;
        [f, m, y].forEach(function (a) {
          A(a, function (a) {
            a.isActive = !1;
          });
        });
        if (a.hasData() || b) a.minorTickInterval && !a.categories && a.getMinorTickPositions().forEach(function (c) {
          a.renderMinorTick(c);
        }), r.length && (r.forEach(function (c, d) {
          a.renderTick(c, d);
        }), k && (0 === a.min || a.single) && (f[-1] || (f[-1] = new G(a, -1, null, !0)), f[-1].render(-1))), n && r.forEach(function (g, h) {
          v = "undefined" !== typeof r[h + 1] ? r[h + 1] + k : a.max - k;
          0 === h % 2 && g < a.max && v <= a.max + (c.polar ? -k : k) && (y[g] || (y[g] = new I.PlotLineOrBand(a)), P = g + k, y[g].options = {
            from: d ? d.lin2log(P) : P,
            to: d ? d.lin2log(v) : v,
            color: n,
            className: "highcharts-alternate-grid"
          }, y[g].render(), y[g].isActive = !0);
        }), a._addedPlotLB || (a._addedPlotLB = !0, (h.plotLines || []).concat(h.plotBands || []).forEach(function (c) {
          a.addPlotBandOrLine(c);
        }));
        [f, m, y].forEach(function (a) {
          var d,
              g = [],
              h = q.duration;
          A(a, function (a, c) {
            a.isActive || (a.render(c, !1, 0), a.isActive = !1, g.push(c));
          });
          V(function () {
            for (d = g.length; d--;) {
              a[g[d]] && !a[g[d]].isActive && (a[g[d]].destroy(), delete a[g[d]]);
            }
          }, a !== y && c.hasRendered && h ? h : 0);
        });
        L && (L[L.isPlaced ? "animate" : "attr"]({
          d: this.getLinePath(L.strokeWidth())
        }), L.isPlaced = !0, L[u ? "show" : "hide"](u));
        e && u && (h = a.getTitlePosition(), g(h.y) ? (e[e.isNew ? "attr" : "animate"](h), e.isNew = !1) : (e.attr("y", -9999), e.isNew = !0));
        l && l.enabled && a.stacking && a.stacking.renderStackTotals();
        a.old = {
          len: a.len,
          max: a.max,
          min: a.min,
          transA: a.transA,
          userMax: a.userMax,
          userMin: a.userMin
        };
        a.isDirty = !1;
        J(this, "afterRender");
      };

      e.prototype.redraw = function () {
        this.visible && (this.render(), this.plotLinesAndBands.forEach(function (a) {
          a.render();
        }));
        this.series.forEach(function (a) {
          a.isDirty = !0;
        });
      };

      e.prototype.getKeepProps = function () {
        return this.keepProps || e.keepProps;
      };

      e.prototype.destroy = function (a) {
        var c = this,
            d = c.plotLinesAndBands,
            g;
        J(this, "destroy", {
          keepEvents: a
        });
        a || P(c);
        [c.ticks, c.minorTicks, c.alternateBands].forEach(function (a) {
          l(a);
        });
        if (d) for (a = d.length; a--;) {
          d[a].destroy();
        }
        "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function (a) {
          c[a] && (c[a] = c[a].destroy());
        });

        for (g in c.plotLinesAndBandsGroups) {
          c.plotLinesAndBandsGroups[g] = c.plotLinesAndBandsGroups[g].destroy();
        }

        A(c, function (a, d) {
          -1 === c.getKeepProps().indexOf(d) && delete c[d];
        });
      };

      e.prototype.drawCrosshair = function (a, c) {
        var d = this.crosshair,
            g = y(d && d.snap, !0),
            h,
            r = this.cross,
            e = this.chart;
        J(this, "drawCrosshair", {
          e: a,
          point: c
        });
        a || (a = this.cross && this.cross.e);

        if (d && !1 !== (k(c) || !g)) {
          g ? k(c) && (h = y("colorAxis" !== this.coll ? c.crosshairPos : null, this.isXAxis ? c.plotX : this.len - c.plotY)) : h = a && (this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos);

          if (k(h)) {
            var f = {
              value: c && (this.isXAxis ? c.x : y(c.stackY, c.y)),
              translatedValue: h
            };
            e.polar && n(f, {
              isCrosshair: !0,
              chartX: a && a.chartX,
              chartY: a && a.chartY,
              point: c
            });
            f = this.getPlotLinePath(f) || null;
          }

          if (!k(f)) {
            this.hideCrosshair();
            return;
          }

          g = this.categories && !this.isRadial;
          r || (this.cross = r = e.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (g ? "category " : "thin ") + (d.className || "")).attr({
            zIndex: y(d.zIndex, 2)
          }).add(), e.styledMode || (r.attr({
            stroke: d.color || (g ? b.parse(z.highlightColor20).setOpacity(.25).get() : z.neutralColor20),
            "stroke-width": y(d.width, 1)
          }).css({
            "pointer-events": "none"
          }), d.dashStyle && r.attr({
            dashstyle: d.dashStyle
          })));
          r.show().attr({
            d: f
          });
          g && !d.width && r.attr({
            "stroke-width": this.transA
          });
          this.cross.e = a;
        } else this.hideCrosshair();

        J(this, "afterDrawCrosshair", {
          e: a,
          point: c
        });
      };

      e.prototype.hideCrosshair = function () {
        this.cross && this.cross.hide();
        J(this, "afterHideCrosshair");
      };

      e.prototype.hasVerticalPanning = function () {
        var a = this.chart.options.chart.panning;
        return !!(a && a.enabled && /y/.test(a.type));
      };

      e.prototype.validatePositiveValue = function (a) {
        return g(a) && 0 < a;
      };

      e.prototype.update = function (a, c) {
        var d = this.chart,
            g = a && a.events || {};
        a = h(this.userOptions, a);
        A(d.options[this.coll].events, function (a, c) {
          "undefined" === typeof g[c] && (g[c] = void 0);
        });
        this.destroy(!0);
        this.init(d, n(a, {
          events: g
        }));
        d.isDirtyBox = !0;
        y(c, !0) && d.redraw();
      };

      e.prototype.remove = function (a) {
        for (var c = this.chart, d = this.coll, g = this.series, h = g.length; h--;) {
          g[h] && g[h].remove(!1);
        }

        N(c.axes, this);
        N(c[d], this);
        c[d].forEach(function (a, c) {
          a.options.index = a.userOptions.index = c;
        });
        this.destroy();
        c.isDirtyBox = !0;
        y(a, !0) && c.redraw();
      };

      e.prototype.setTitle = function (a, c) {
        this.update({
          title: a
        }, c);
      };

      e.prototype.setCategories = function (a, c) {
        this.update({
          categories: a
        }, c);
      };

      e.defaultOptions = {
        alignTicks: !0,
        allowDecimals: void 0,
        zIndex: 2,
        zoomEnabled: !0,
        dateTimeLabelFormats: {
          millisecond: {
            main: "%H:%M:%S.%L",
            range: !1
          },
          second: {
            main: "%H:%M:%S",
            range: !1
          },
          minute: {
            main: "%H:%M",
            range: !1
          },
          hour: {
            main: "%H:%M",
            range: !1
          },
          day: {
            main: "%e. %b"
          },
          week: {
            main: "%e. %b"
          },
          month: {
            main: "%b '%y"
          },
          year: {
            main: "%Y"
          }
        },
        endOnTick: !1,
        gridLineDashStyle: "Solid",
        gridZIndex: 1,
        labels: {
          autoRotation: void 0,
          autoRotationLimit: 80,
          distance: void 0,
          enabled: !0,
          indentation: 10,
          overflow: "justify",
          padding: 5,
          reserveSpace: void 0,
          rotation: void 0,
          staggerLines: 0,
          step: 0,
          useHTML: !1,
          x: 0,
          zIndex: 7,
          style: {
            color: z.neutralColor60,
            cursor: "default",
            fontSize: "11px"
          }
        },
        maxPadding: .01,
        minorGridLineDashStyle: "Solid",
        minorTickLength: 2,
        minorTickPosition: "outside",
        minPadding: .01,
        offset: void 0,
        opposite: !1,
        reversed: void 0,
        reversedStacks: !1,
        showEmpty: !0,
        showFirstLabel: !0,
        showLastLabel: !0,
        startOfWeek: 1,
        startOnTick: !1,
        tickLength: 10,
        tickPixelInterval: 100,
        tickmarkPlacement: "between",
        tickPosition: "outside",
        title: {
          align: "middle",
          rotation: 0,
          useHTML: !1,
          x: 0,
          y: 0,
          style: {
            color: z.neutralColor60
          }
        },
        type: "linear",
        uniqueNames: !0,
        visible: !0,
        minorGridLineColor: z.neutralColor5,
        minorGridLineWidth: 1,
        minorTickColor: z.neutralColor40,
        lineColor: z.highlightColor20,
        lineWidth: 1,
        gridLineColor: z.neutralColor10,
        gridLineWidth: void 0,
        tickColor: z.highlightColor20
      };
      e.defaultYAxisOptions = {
        reversedStacks: !0,
        endOnTick: !0,
        maxPadding: .05,
        minPadding: .05,
        tickPixelInterval: 72,
        showLastLabel: !0,
        labels: {
          x: -8
        },
        startOnTick: !0,
        title: {
          rotation: 270,
          text: "Values"
        },
        stackLabels: {
          animation: {},
          allowOverlap: !1,
          enabled: !1,
          crop: !0,
          overflow: "justify",
          formatter: function formatter() {
            var a = this.axis.chart.numberFormatter;
            return a(this.total, -1);
          },
          style: {
            color: z.neutralColor100,
            fontSize: "11px",
            fontWeight: "bold",
            textOutline: "1px contrast"
          }
        },
        gridLineWidth: 1,
        lineWidth: 0
      };
      e.defaultLeftAxisOptions = {
        labels: {
          x: -15
        },
        title: {
          rotation: 270
        }
      };
      e.defaultRightAxisOptions = {
        labels: {
          x: 15
        },
        title: {
          rotation: 90
        }
      };
      e.defaultBottomAxisOptions = {
        labels: {
          autoRotation: [-45],
          x: 0
        },
        margin: 15,
        title: {
          rotation: 0
        }
      };
      e.defaultTopAxisOptions = {
        labels: {
          autoRotation: [-45],
          x: 0
        },
        margin: 15,
        title: {
          rotation: 0
        }
      };
      e.keepProps = "extKey hcEvents names series userMax userMin".split(" ");
      return e;
    }();

    I.Axis = e;
    return I.Axis;
  });
  O(e, "Core/Axis/DateTimeAxis.js", [e["Core/Axis/Axis.js"], e["Core/Utilities.js"]], function (e, b) {
    var D = b.addEvent,
        z = b.getMagnitude,
        H = b.normalizeTickInterval,
        G = b.timeUnits,
        C = function () {
      function b(b) {
        this.axis = b;
      }

      b.prototype.normalizeTimeTickInterval = function (b, e) {
        var v = e || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]];
        e = v[v.length - 1];
        var f = G[e[0]],
            d = e[1],
            q;

        for (q = 0; q < v.length && !(e = v[q], f = G[e[0]], d = e[1], v[q + 1] && b <= (f * d[d.length - 1] + G[v[q + 1][0]]) / 2); q++) {
          ;
        }

        f === G.year && b < 5 * f && (d = [1, 2, 5]);
        b = H(b / f, d, "year" === e[0] ? Math.max(z(b / f), 1) : 1);
        return {
          unitRange: f,
          count: b,
          unitName: e[0]
        };
      };

      return b;
    }();

    b = function () {
      function b() {}

      b.compose = function (b) {
        b.keepProps.push("dateTime");

        b.prototype.getTimeTicks = function () {
          return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
        };

        D(b, "init", function (b) {
          "datetime" !== b.userOptions.type ? this.dateTime = void 0 : this.dateTime || (this.dateTime = new C(this));
        });
      };

      b.AdditionsClass = C;
      return b;
    }();

    b.compose(e);
    return b;
  });
  O(e, "Core/Axis/LogarithmicAxis.js", [e["Core/Axis/Axis.js"], e["Core/Utilities.js"]], function (e, b) {
    var D = b.addEvent,
        z = b.getMagnitude,
        H = b.normalizeTickInterval,
        G = b.pick,
        C = function () {
      function b(b) {
        this.axis = b;
      }

      b.prototype.getLogTickPositions = function (b, e, v, f) {
        var d = this.axis,
            q = d.len,
            k = d.options,
            l = [];
        f || (this.minorAutoInterval = void 0);
        if (.5 <= b) b = Math.round(b), l = d.getLinearTickPositions(b, e, v);else if (.08 <= b) {
          var w = Math.floor(e),
              u,
              n = k = void 0;

          for (q = .3 < b ? [1, 2, 4] : .15 < b ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; w < v + 1 && !n; w++) {
            var J = q.length;

            for (u = 0; u < J && !n; u++) {
              var E = this.log2lin(this.lin2log(w) * q[u]);
              E > e && (!f || k <= v) && "undefined" !== typeof k && l.push(k);
              k > v && (n = !0);
              k = E;
            }
          }
        } else e = this.lin2log(e), v = this.lin2log(v), b = f ? d.getMinorTickInterval() : k.tickInterval, b = G("auto" === b ? null : b, this.minorAutoInterval, k.tickPixelInterval / (f ? 5 : 1) * (v - e) / ((f ? q / d.tickPositions.length : q) || 1)), b = H(b, void 0, z(b)), l = d.getLinearTickPositions(b, e, v).map(this.log2lin), f || (this.minorAutoInterval = b / 5);
        f || (d.tickInterval = b);
        return l;
      };

      b.prototype.lin2log = function (b) {
        return Math.pow(10, b);
      };

      b.prototype.log2lin = function (b) {
        return Math.log(b) / Math.LN10;
      };

      return b;
    }();

    b = function () {
      function b() {}

      b.compose = function (b) {
        b.keepProps.push("logarithmic");
        D(b, "init", function (b) {
          var e = this.logarithmic;
          "logarithmic" !== b.userOptions.type ? this.logarithmic = void 0 : e || (this.logarithmic = new C(this));
        });
        D(b, "afterInit", function () {
          var b = this.logarithmic;
          b && (this.lin2val = function (e) {
            return b.lin2log(e);
          }, this.val2lin = function (e) {
            return b.log2lin(e);
          });
        });
      };

      return b;
    }();

    b.compose(e);
    return b;
  });
  O(e, "Core/Axis/PlotLineOrBand.js", [e["Core/Axis/Axis.js"], e["Core/Globals.js"], e["Core/Color/Palette.js"], e["Core/Utilities.js"]], function (e, b, I, z) {
    var D = z.arrayMax,
        G = z.arrayMin,
        C = z.defined,
        B = z.destroyObjectProperties,
        x = z.erase,
        w = z.extend,
        v = z.fireEvent,
        f = z.isNumber,
        d = z.merge,
        q = z.objectEach,
        k = z.pick;

    z = function () {
      function b(d, b) {
        this.axis = d;
        b && (this.options = b, this.id = b.id);
      }

      b.prototype.render = function () {
        v(this, "render");
        var b = this,
            e = b.axis,
            f = e.horiz,
            l = e.logarithmic,
            E = b.options,
            m = E.label,
            c = b.label,
            g = E.to,
            a = E.from,
            h = E.value,
            r = C(a) && C(g),
            A = C(h),
            y = b.svgElem,
            L = !y,
            P = [],
            R = E.color,
            w = k(E.zIndex, 0),
            Q = E.events;
        P = {
          "class": "highcharts-plot-" + (r ? "band " : "line ") + (E.className || "")
        };
        var M = {},
            t = e.chart.renderer,
            p = r ? "bands" : "lines";
        l && (a = l.log2lin(a), g = l.log2lin(g), h = l.log2lin(h));
        e.chart.styledMode || (A ? (P.stroke = R || I.neutralColor40, P["stroke-width"] = k(E.width, 1), E.dashStyle && (P.dashstyle = E.dashStyle)) : r && (P.fill = R || I.highlightColor10, E.borderWidth && (P.stroke = E.borderColor, P["stroke-width"] = E.borderWidth)));
        M.zIndex = w;
        p += "-" + w;
        (l = e.plotLinesAndBandsGroups[p]) || (e.plotLinesAndBandsGroups[p] = l = t.g("plot-" + p).attr(M).add());
        L && (b.svgElem = y = t.path().attr(P).add(l));
        if (A) P = e.getPlotLinePath({
          value: h,
          lineWidth: y.strokeWidth(),
          acrossPanes: E.acrossPanes
        });else if (r) P = e.getPlotBandPath(a, g, E);else return;
        !b.eventsAdded && Q && (q(Q, function (a, c) {
          y.on(c, function (a) {
            Q[c].apply(b, [a]);
          });
        }), b.eventsAdded = !0);
        (L || !y.d) && P && P.length ? y.attr({
          d: P
        }) : y && (P ? (y.show(!0), y.animate({
          d: P
        })) : y.d && (y.hide(), c && (b.label = c = c.destroy())));
        m && (C(m.text) || C(m.formatter)) && P && P.length && 0 < e.width && 0 < e.height && !P.isFlat ? (m = d({
          align: f && r && "center",
          x: f ? !r && 4 : 10,
          verticalAlign: !f && r && "middle",
          y: f ? r ? 16 : 10 : r ? 6 : -4,
          rotation: f && !r && 90
        }, m), this.renderLabel(m, P, r, w)) : c && c.hide();
        return b;
      };

      b.prototype.renderLabel = function (d, b, e, f) {
        var l = this.label,
            m = this.axis.chart.renderer;
        l || (l = {
          align: d.textAlign || d.align,
          rotation: d.rotation,
          "class": "highcharts-plot-" + (e ? "band" : "line") + "-label " + (d.className || "")
        }, l.zIndex = f, f = this.getLabelText(d), this.label = l = m.text(f, 0, 0, d.useHTML).attr(l).add(), this.axis.chart.styledMode || l.css(d.style));
        m = b.xBounds || [b[0][1], b[1][1], e ? b[2][1] : b[0][1]];
        b = b.yBounds || [b[0][2], b[1][2], e ? b[2][2] : b[0][2]];
        e = G(m);
        f = G(b);
        l.align(d, !1, {
          x: e,
          y: f,
          width: D(m) - e,
          height: D(b) - f
        });
        l.show(!0);
      };

      b.prototype.getLabelText = function (d) {
        return C(d.formatter) ? d.formatter.call(this) : d.text;
      };

      b.prototype.destroy = function () {
        x(this.axis.plotLinesAndBands, this);
        delete this.axis;
        B(this);
      };

      return b;
    }();

    w(e.prototype, {
      getPlotBandPath: function getPlotBandPath(d, b, e) {
        void 0 === e && (e = this.options);
        var l = this.getPlotLinePath({
          value: b,
          force: !0,
          acrossPanes: e.acrossPanes
        });
        e = this.getPlotLinePath({
          value: d,
          force: !0,
          acrossPanes: e.acrossPanes
        });
        var k = [],
            q = this.horiz,
            m = 1;
        d = !f(this.min) || !f(this.max) || d < this.min && b < this.min || d > this.max && b > this.max;

        if (e && l) {
          if (d) {
            var c = e.toString() === l.toString();
            m = 0;
          }

          for (d = 0; d < e.length; d += 2) {
            b = e[d];
            var g = e[d + 1],
                a = l[d],
                h = l[d + 1];
            "M" !== b[0] && "L" !== b[0] || "M" !== g[0] && "L" !== g[0] || "M" !== a[0] && "L" !== a[0] || "M" !== h[0] && "L" !== h[0] || (q && a[1] === b[1] ? (a[1] += m, h[1] += m) : q || a[2] !== b[2] || (a[2] += m, h[2] += m), k.push(["M", b[1], b[2]], ["L", g[1], g[2]], ["L", h[1], h[2]], ["L", a[1], a[2]], ["Z"]));
            k.isFlat = c;
          }
        }

        return k;
      },
      addPlotBand: function addPlotBand(d) {
        return this.addPlotBandOrLine(d, "plotBands");
      },
      addPlotLine: function addPlotLine(d) {
        return this.addPlotBandOrLine(d, "plotLines");
      },
      addPlotBandOrLine: function addPlotBandOrLine(d, e) {
        var f = this,
            l = new b.PlotLineOrBand(this, d),
            k = this.userOptions;
        this.visible && (l = l.render());

        if (l) {
          this._addedPlotLB || (this._addedPlotLB = !0, (k.plotLines || []).concat(k.plotBands || []).forEach(function (d) {
            f.addPlotBandOrLine(d);
          }));

          if (e) {
            var q = k[e] || [];
            q.push(d);
            k[e] = q;
          }

          this.plotLinesAndBands.push(l);
        }

        return l;
      },
      removePlotBandOrLine: function removePlotBandOrLine(d) {
        for (var b = this.plotLinesAndBands, e = this.options, f = this.userOptions, l = b.length; l--;) {
          b[l].id === d && b[l].destroy();
        }

        [e.plotLines || [], f.plotLines || [], e.plotBands || [], f.plotBands || []].forEach(function (b) {
          for (l = b.length; l--;) {
            (b[l] || {}).id === d && x(b, b[l]);
          }
        });
      },
      removePlotBand: function removePlotBand(d) {
        this.removePlotBandOrLine(d);
      },
      removePlotLine: function removePlotLine(d) {
        this.removePlotBandOrLine(d);
      }
    });
    b.PlotLineOrBand = z;
    return b.PlotLineOrBand;
  });
  O(e, "Core/Tooltip.js", [e["Core/FormatUtilities.js"], e["Core/Globals.js"], e["Core/Color/Palette.js"], e["Core/Utilities.js"]], function (e, b, I, z) {
    var D = e.format,
        G = b.doc,
        C = z.clamp,
        B = z.css,
        x = z.defined,
        w = z.discardElement,
        v = z.extend,
        f = z.fireEvent,
        d = z.isArray,
        q = z.isNumber,
        k = z.isString,
        l = z.merge,
        N = z.pick,
        u = z.splat,
        n = z.syncTimeout,
        J = z.timeUnits;
    "";

    e = function () {
      function e(d, c) {
        this.container = void 0;
        this.crosshairs = [];
        this.distance = 0;
        this.isHidden = !0;
        this.isSticky = !1;
        this.now = {};
        this.options = {};
        this.outside = !1;
        this.chart = d;
        this.init(d, c);
      }

      e.prototype.applyFilter = function () {
        var d = this.chart;
        d.renderer.definition({
          tagName: "filter",
          attributes: {
            id: "drop-shadow-" + d.index,
            opacity: .5
          },
          children: [{
            tagName: "feGaussianBlur",
            attributes: {
              "in": "SourceAlpha",
              stdDeviation: 1
            }
          }, {
            tagName: "feOffset",
            attributes: {
              dx: 1,
              dy: 1
            }
          }, {
            tagName: "feComponentTransfer",
            children: [{
              tagName: "feFuncA",
              attributes: {
                type: "linear",
                slope: .3
              }
            }]
          }, {
            tagName: "feMerge",
            children: [{
              tagName: "feMergeNode"
            }, {
              tagName: "feMergeNode",
              attributes: {
                "in": "SourceGraphic"
              }
            }]
          }]
        });
        d.renderer.definition({
          tagName: "style",
          textContent: ".highcharts-tooltip-" + d.index + "{filter:url(#drop-shadow-" + d.index + ")}"
        });
      };

      e.prototype.bodyFormatter = function (d) {
        return d.map(function (c) {
          var d = c.series.tooltipOptions;
          return (d[(c.point.formatPrefix || "point") + "Formatter"] || c.point.tooltipFormatter).call(c.point, d[(c.point.formatPrefix || "point") + "Format"] || "");
        });
      };

      e.prototype.cleanSplit = function (d) {
        this.chart.series.forEach(function (c) {
          var b = c && c.tt;
          b && (!b.isActive || d ? c.tt = b.destroy() : b.isActive = !1);
        });
      };

      e.prototype.defaultFormatter = function (d) {
        var c = this.points || u(this);
        var b = [d.tooltipFooterHeaderFormatter(c[0])];
        b = b.concat(d.bodyFormatter(c));
        b.push(d.tooltipFooterHeaderFormatter(c[0], !0));
        return b;
      };

      e.prototype.destroy = function () {
        this.label && (this.label = this.label.destroy());
        this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy());
        this.renderer && (this.renderer = this.renderer.destroy(), w(this.container));
        z.clearTimeout(this.hideTimer);
        z.clearTimeout(this.tooltipTimeout);
      };

      e.prototype.getAnchor = function (d, c) {
        var b = this.chart;
        var a = b.pointer;
        var h = b.inverted,
            e = b.plotTop,
            f = b.plotLeft,
            m = 0,
            l = 0,
            k,
            n;
        d = u(d);
        this.followPointer && c ? ("undefined" === typeof c.chartX && (c = a.normalize(c)), a = [c.chartX - f, c.chartY - e]) : d[0].tooltipPos ? a = d[0].tooltipPos : (d.forEach(function (a) {
          k = a.series.yAxis;
          n = a.series.xAxis;
          m += a.plotX || 0;
          l += a.plotLow ? (a.plotLow + (a.plotHigh || 0)) / 2 : a.plotY || 0;
          n && k && (h ? (m += e + b.plotHeight - n.len - n.pos, l += f + b.plotWidth - k.len - k.pos) : (m += n.pos - f, l += k.pos - e));
        }), m /= d.length, l /= d.length, a = [h ? b.plotWidth - l : m, h ? b.plotHeight - m : l], this.shared && 1 < d.length && c && (h ? a[0] = c.chartX - f : a[1] = c.chartY - e));
        return a.map(Math.round);
      };

      e.prototype.getDateFormat = function (d, c, b, a) {
        var h = this.chart.time,
            g = h.dateFormat("%m-%d %H:%M:%S.%L", c),
            e = {
          millisecond: 15,
          second: 12,
          minute: 9,
          hour: 6,
          day: 3
        },
            f = "millisecond";

        for (m in J) {
          if (d === J.week && +h.dateFormat("%w", c) === b && "00:00:00.000" === g.substr(6)) {
            var m = "week";
            break;
          }

          if (J[m] > d) {
            m = f;
            break;
          }

          if (e[m] && g.substr(e[m]) !== "01-01 00:00:00.000".substr(e[m])) break;
          "week" !== m && (f = m);
        }

        if (m) var l = h.resolveDTLFormat(a[m]).main;
        return l;
      };

      e.prototype.getLabel = function () {
        var d = this,
            c = this.chart.renderer,
            g = this.chart.styledMode,
            a = this.options,
            h = "tooltip" + (x(a.className) ? " " + a.className : ""),
            e = a.style && a.style.pointerEvents || (!this.followPointer && a.stickOnContact ? "auto" : "none"),
            f,
            y = function y() {
          d.inContact = !0;
        },
            l = function l() {
          var a = d.chart.hoverSeries;
          d.inContact = !1;
          if (a && a.onMouseOut) a.onMouseOut();
        };

        if (!this.label) {
          if (this.outside) {
            var k = this.chart.options.chart.style;
            this.container = f = b.doc.createElement("div");
            f.className = "highcharts-tooltip-container";
            B(f, {
              position: "absolute",
              top: "1px",
              pointerEvents: e,
              zIndex: Math.max(this.options.style && this.options.style.zIndex || 0, (k && k.zIndex || 0) + 3)
            });
            b.doc.body.appendChild(f);
            this.renderer = c = new b.Renderer(f, 0, 0, k, void 0, void 0, c.styledMode);
          }

          this.split ? this.label = c.g(h) : (this.label = c.label("", 0, 0, a.shape || "callout", null, null, a.useHTML, null, h).attr({
            padding: a.padding,
            r: a.borderRadius
          }), g || this.label.attr({
            fill: a.backgroundColor,
            "stroke-width": a.borderWidth
          }).css(a.style).css({
            pointerEvents: e
          }).shadow(a.shadow));
          g && (this.applyFilter(), this.label.addClass("highcharts-tooltip-" + this.chart.index));

          if (d.outside && !d.split) {
            var n = this.label,
                q = n.xSetter,
                u = n.ySetter;

            n.xSetter = function (a) {
              q.call(n, d.distance);
              f.style.left = a + "px";
            };

            n.ySetter = function (a) {
              u.call(n, d.distance);
              f.style.top = a + "px";
            };
          }

          this.label.on("mouseenter", y).on("mouseleave", l).attr({
            zIndex: 8
          }).add();
        }

        return this.label;
      };

      e.prototype.getPosition = function (d, c, b) {
        var a = this.chart,
            h = this.distance,
            g = {},
            e = a.inverted && b.h || 0,
            f,
            m = this.outside,
            l = m ? G.documentElement.clientWidth - 2 * h : a.chartWidth,
            k = m ? Math.max(G.body.scrollHeight, G.documentElement.scrollHeight, G.body.offsetHeight, G.documentElement.offsetHeight, G.documentElement.clientHeight) : a.chartHeight,
            n = a.pointer.getChartPosition(),
            q = function q(g) {
          var e = "x" === g;
          return [g, e ? l : k, e ? d : c].concat(m ? [e ? d * n.scaleX : c * n.scaleY, e ? n.left - h + (b.plotX + a.plotLeft) * n.scaleX : n.top - h + (b.plotY + a.plotTop) * n.scaleY, 0, e ? l : k] : [e ? d : c, e ? b.plotX + a.plotLeft : b.plotY + a.plotTop, e ? a.plotLeft : a.plotTop, e ? a.plotLeft + a.plotWidth : a.plotTop + a.plotHeight]);
        },
            u = q("y"),
            t = q("x"),
            p = !this.followPointer && N(b.ttBelow, !a.inverted === !!b.negative),
            v = function v(a, c, d, b, r, f, A) {
          var y = m ? "y" === a ? h * n.scaleY : h * n.scaleX : h,
              l = (d - b) / 2,
              F = b < r - h,
              k = r + h + b < c,
              K = r - y - d + l;
          r = r + y - l;
          if (p && k) g[a] = r;else if (!p && F) g[a] = K;else if (F) g[a] = Math.min(A - b, 0 > K - e ? K : K - e);else if (k) g[a] = Math.max(f, r + e + d > c ? r : r + e);else return !1;
        },
            w = function w(a, c, d, b, e) {
          var r;
          e < h || e > c - h ? r = !1 : g[a] = e < d / 2 ? 1 : e > c - b / 2 ? c - b - 2 : e - d / 2;
          return r;
        },
            E = function E(a) {
          var c = u;
          u = t;
          t = c;
          f = a;
        },
            F = function F() {
          !1 !== v.apply(0, u) ? !1 !== w.apply(0, t) || f || (E(!0), F()) : f ? g.x = g.y = 0 : (E(!0), F());
        };

        (a.inverted || 1 < this.len) && E();
        F();
        return g;
      };

      e.prototype.getXDateFormat = function (d, c, b) {
        c = c.dateTimeLabelFormats;
        var a = b && b.closestPointRange;
        return (a ? this.getDateFormat(a, d.x, b.options.startOfWeek, c) : c.day) || c.year;
      };

      e.prototype.hide = function (d) {
        var c = this;
        z.clearTimeout(this.hideTimer);
        d = N(d, this.options.hideDelay, 500);
        this.isHidden || (this.hideTimer = n(function () {
          c.getLabel().fadeOut(d ? void 0 : d);
          c.isHidden = !0;
        }, d));
      };

      e.prototype.init = function (d, c) {
        this.chart = d;
        this.options = c;
        this.crosshairs = [];
        this.now = {
          x: 0,
          y: 0
        };
        this.isHidden = !0;
        this.split = c.split && !d.inverted && !d.polar;
        this.shared = c.shared || this.split;
        this.outside = N(c.outside, !(!d.scrollablePixelsX && !d.scrollablePixelsY));
      };

      e.prototype.isStickyOnContact = function () {
        return !(this.followPointer || !this.options.stickOnContact || !this.inContact);
      };

      e.prototype.move = function (d, c, b, a) {
        var h = this,
            g = h.now,
            e = !1 !== h.options.animation && !h.isHidden && (1 < Math.abs(d - g.x) || 1 < Math.abs(c - g.y)),
            f = h.followPointer || 1 < h.len;
        v(g, {
          x: e ? (2 * g.x + d) / 3 : d,
          y: e ? (g.y + c) / 2 : c,
          anchorX: f ? void 0 : e ? (2 * g.anchorX + b) / 3 : b,
          anchorY: f ? void 0 : e ? (g.anchorY + a) / 2 : a
        });
        h.getLabel().attr(g);
        h.drawTracker();
        e && (z.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
          h && h.move(d, c, b, a);
        }, 32));
      };

      e.prototype.refresh = function (b, c) {
        var g = this.chart,
            a = this.options,
            h = u(b),
            e = h[0],
            m = {},
            y = [],
            l = a.formatter || this.defaultFormatter;
        m = this.shared;
        var k = g.styledMode;

        if (a.enabled) {
          z.clearTimeout(this.hideTimer);
          this.followPointer = !this.split && e.series.tooltipOptions.followPointer;
          var n = this.getAnchor(b, c);
          var q = n[0];
          var v = n[1];
          !m || !d(b) && b.series && b.series.noSharedTooltip ? m = e.getLabelConfig() : (g.pointer.applyInactiveState(h), h.forEach(function (a) {
            a.setState("hover");
            y.push(a.getLabelConfig());
          }), m = {
            x: e.category,
            y: e.y
          }, m.points = y);
          this.len = y.length;
          b = l.call(m, this);
          l = e.series;
          this.distance = N(l.tooltipOptions.distance, 16);
          if (!1 === b) this.hide();else {
            if (this.split) this.renderSplit(b, h);else if (h = q, m = v, c && g.pointer.isDirectTouch && (h = c.chartX - g.plotLeft, m = c.chartY - g.plotTop), g.polar || !1 === l.options.clip || l.shouldShowTooltip(h, m)) c = this.getLabel(), a.style.width && !k || c.css({
              width: this.chart.spacingBox.width + "px"
            }), c.attr({
              text: b && b.join ? b.join("") : b
            }), c.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + N(e.colorIndex, l.colorIndex)), k || c.attr({
              stroke: a.borderColor || e.color || l.color || I.neutralColor60
            }), this.updatePosition({
              plotX: q,
              plotY: v,
              negative: e.negative,
              ttBelow: e.ttBelow,
              h: n[2] || 0
            });else {
              this.hide();
              return;
            }
            this.isHidden && this.label && this.label.attr({
              opacity: 1
            }).show();
            this.isHidden = !1;
          }
          f(this, "refresh");
        }
      };

      e.prototype.renderSplit = function (d, c) {
        function g(c, d, b, g, h) {
          void 0 === h && (h = !0);
          b ? (d = X ? 0 : ba, c = C(c - g / 2, S.left, S.right - g - (a.outside ? U : 0))) : (d -= B, c = h ? c - g - J : c + J, c = C(c, h ? c : S.left, S.right));
          return {
            x: c,
            y: d
          };
        }

        var a = this,
            h = a.chart,
            e = a.chart,
            f = e.chartWidth,
            m = e.chartHeight,
            l = e.plotHeight,
            n = e.plotLeft,
            q = e.plotTop,
            u = e.pointer,
            w = e.scrollablePixelsY;
        w = void 0 === w ? 0 : w;
        var E = e.scrollablePixelsX,
            t = e.scrollingContainer;
        t = void 0 === t ? {
          scrollLeft: 0,
          scrollTop: 0
        } : t;
        var p = t.scrollLeft;
        t = t.scrollTop;
        var x = e.styledMode,
            J = a.distance,
            D = a.options,
            F = a.options.positioner,
            S = a.outside && "number" !== typeof E ? G.documentElement.getBoundingClientRect() : {
          left: p,
          right: p + f,
          top: t,
          bottom: t + m
        },
            K = a.getLabel(),
            T = this.renderer || h.renderer,
            X = !(!h.xAxis[0] || !h.xAxis[0].opposite);
        h = u.getChartPosition();
        var U = h.left;
        h = h.top;
        var B = q + t,
            z = 0,
            ba = l - w;
        k(d) && (d = [!1, d]);
        d = d.slice(0, c.length + 1).reduce(function (d, b, h) {
          if (!1 !== b && "" !== b) {
            h = c[h - 1] || {
              isHeader: !0,
              plotX: c[0].plotX,
              plotY: l,
              series: {}
            };
            var e = h.isHeader,
                r = e ? a : h.series;
            b = b.toString();
            var f = r.tt,
                m = h.isHeader;
            var A = h.series;
            var y = "highcharts-color-" + N(h.colorIndex, A.colorIndex, "none");
            f || (f = {
              padding: D.padding,
              r: D.borderRadius
            }, x || (f.fill = D.backgroundColor, f["stroke-width"] = D.borderWidth), f = T.label("", 0, 0, D[m ? "headerShape" : "shape"] || "callout", void 0, void 0, D.useHTML).addClass((m ? "highcharts-tooltip-header " : "") + "highcharts-tooltip-box " + y).attr(f).add(K));
            f.isActive = !0;
            f.attr({
              text: b
            });
            x || f.css(D.style).shadow(D.shadow).attr({
              stroke: D.borderColor || h.color || A.color || I.neutralColor80
            });
            r = r.tt = f;
            m = r.getBBox();
            b = m.width + r.strokeWidth();
            e && (z = m.height, ba += z, X && (B -= z));
            A = h.plotX;
            A = void 0 === A ? 0 : A;
            y = h.plotY;
            y = void 0 === y ? 0 : y;
            f = h.series;

            if (h.isHeader) {
              A = n + A;
              var k = q + l / 2;
            } else {
              var p = f.xAxis,
                  t = f.yAxis;
              A = p.pos + C(A, -J, p.len + J);
              f.shouldShowTooltip(0, t.pos - q + y, {
                ignoreX: !0
              }) && (k = t.pos + y);
            }

            A = C(A, S.left - J, S.right + J);
            "number" === typeof k ? (m = m.height + 1, y = F ? F.call(a, b, m, h) : g(A, k, e, b), d.push({
              align: F ? 0 : void 0,
              anchorX: A,
              anchorY: k,
              boxWidth: b,
              point: h,
              rank: N(y.rank, e ? 1 : 0),
              size: m,
              target: y.y,
              tt: r,
              x: y.x
            })) : r.isActive = !1;
          }

          return d;
        }, []);
        !F && d.some(function (c) {
          var d = (a.outside ? U : 0) + c.anchorX;
          return d < S.left && d + c.boxWidth < S.right ? !0 : d < U - S.left + c.boxWidth && S.right - d > d;
        }) && (d = d.map(function (a) {
          var c = g(a.anchorX, a.anchorY, a.point.isHeader, a.boxWidth, !1);
          return v(a, {
            target: c.y,
            x: c.x
          });
        }));
        a.cleanSplit();
        b.distribute(d, ba);
        var H = U,
            ca = U;
        d.forEach(function (c) {
          var d = c.x,
              b = c.boxWidth;
          c = c.isHeader;
          c || (a.outside && U + d < H && (H = U + d), !c && a.outside && H + b > ca && (ca = U + d));
        });
        d.forEach(function (c) {
          var d = c.x,
              b = c.anchorX,
              h = c.pos,
              g = c.point.isHeader;
          h = {
            visibility: "undefined" === typeof h ? "hidden" : "inherit",
            x: d,
            y: h + B,
            anchorX: b,
            anchorY: c.anchorY
          };

          if (a.outside && d < b) {
            var e = U - H;
            0 < e && (g || (h.x = d + e, h.anchorX = b + e), g && (h.x = (ca - H) / 2, h.anchorX = b + e));
          }

          c.tt.attr(h);
        });
        d = a.container;
        w = a.renderer;
        a.outside && d && w && (e = K.getBBox(), w.setSize(e.width + e.x, e.height + e.y, !1), d.style.left = H + "px", d.style.top = h + "px");
      };

      e.prototype.drawTracker = function () {
        if (this.followPointer || !this.options.stickOnContact) this.tracker && this.tracker.destroy();else {
          var d = this.chart,
              c = this.label,
              b = d.hoverPoint;

          if (c && b) {
            var a = {
              x: 0,
              y: 0,
              width: 0,
              height: 0
            };
            b = this.getAnchor(b);
            var h = c.getBBox();
            b[0] += d.plotLeft - c.translateX;
            b[1] += d.plotTop - c.translateY;
            a.x = Math.min(0, b[0]);
            a.y = Math.min(0, b[1]);
            a.width = 0 > b[0] ? Math.max(Math.abs(b[0]), h.width - b[0]) : Math.max(Math.abs(b[0]), h.width);
            a.height = 0 > b[1] ? Math.max(Math.abs(b[1]), h.height - Math.abs(b[1])) : Math.max(Math.abs(b[1]), h.height);
            this.tracker ? this.tracker.attr(a) : (this.tracker = c.renderer.rect(a).addClass("highcharts-tracker").add(c), d.styledMode || this.tracker.attr({
              fill: "rgba(0,0,0,0)"
            }));
          }
        }
      };

      e.prototype.styledModeFormat = function (d) {
        return d.replace('style="font-size: 10px"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex}"');
      };

      e.prototype.tooltipFooterHeaderFormatter = function (d, c) {
        var b = c ? "footer" : "header",
            a = d.series,
            h = a.tooltipOptions,
            e = h.xDateFormat,
            m = a.xAxis,
            l = m && "datetime" === m.options.type && q(d.key),
            k = h[b + "Format"];
        c = {
          isFooter: c,
          labelConfig: d
        };
        f(this, "headerFormatter", c, function (c) {
          l && !e && (e = this.getXDateFormat(d, h, m));
          l && e && (d.point && d.point.tooltipDateKeys || ["key"]).forEach(function (a) {
            k = k.replace("{point." + a + "}", "{point." + a + ":" + e + "}");
          });
          a.chart.styledMode && (k = this.styledModeFormat(k));
          c.text = D(k, {
            point: d,
            series: a
          }, this.chart);
        });
        return c.text;
      };

      e.prototype.update = function (d) {
        this.destroy();
        l(!0, this.chart.options.tooltip.userOptions, d);
        this.init(this.chart, l(!0, this.options, d));
      };

      e.prototype.updatePosition = function (d) {
        var c = this.chart,
            b = c.pointer,
            a = this.getLabel(),
            h = d.plotX + c.plotLeft;
        c = d.plotY + c.plotTop;
        b = b.getChartPosition();
        d = (this.options.positioner || this.getPosition).call(this, a.width, a.height, d);

        if (this.outside) {
          var e = (this.options.borderWidth || 0) + 2 * this.distance;
          this.renderer.setSize(a.width + e, a.height + e, !1);
          if (1 !== b.scaleX || 1 !== b.scaleY) B(this.container, {
            transform: "scale(" + b.scaleX + ", " + b.scaleY + ")"
          }), h *= b.scaleX, c *= b.scaleY;
          h += b.left - d.x;
          c += b.top - d.y;
        }

        this.move(Math.round(d.x), Math.round(d.y || 0), h, c);
      };

      return e;
    }();

    b.Tooltip = e;
    return b.Tooltip;
  });
  O(e, "Core/Pointer.js", [e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Color/Palette.js"], e["Core/Tooltip.js"], e["Core/Utilities.js"]], function (e, b, I, z, H) {
    var D = e.parse,
        C = b.charts,
        B = b.noop,
        x = H.addEvent,
        w = H.attr,
        v = H.css,
        f = H.defined,
        d = H.extend,
        q = H.find,
        k = H.fireEvent,
        l = H.isNumber,
        N = H.isObject,
        u = H.objectEach,
        n = H.offset,
        J = H.pick,
        E = H.splat;
    "";

    e = function () {
      function e(c, d) {
        this.lastValidTouch = {};
        this.pinchDown = [];
        this.runChartClick = !1;
        this.eventsToUnbind = [];
        this.chart = c;
        this.hasDragged = !1;
        this.options = d;
        this.init(c, d);
      }

      e.prototype.applyInactiveState = function (c) {
        var d = [],
            a;
        (c || []).forEach(function (c) {
          a = c.series;
          d.push(a);
          a.linkedParent && d.push(a.linkedParent);
          a.linkedSeries && (d = d.concat(a.linkedSeries));
          a.navigatorSeries && d.push(a.navigatorSeries);
        });
        this.chart.series.forEach(function (a) {
          -1 === d.indexOf(a) ? a.setState("inactive", !0) : a.options.inactiveOtherPoints && a.setAllPointsToState("inactive");
        });
      };

      e.prototype.destroy = function () {
        var c = this;
        this.eventsToUnbind.forEach(function (c) {
          return c();
        });
        this.eventsToUnbind = [];
        b.chartCount || (b.unbindDocumentMouseUp && (b.unbindDocumentMouseUp = b.unbindDocumentMouseUp()), b.unbindDocumentTouchEnd && (b.unbindDocumentTouchEnd = b.unbindDocumentTouchEnd()));
        clearInterval(c.tooltipTimeout);
        u(c, function (d, a) {
          c[a] = void 0;
        });
      };

      e.prototype.drag = function (c) {
        var d = this.chart,
            a = d.options.chart,
            b = c.chartX,
            e = c.chartY,
            f = this.zoomHor,
            l = this.zoomVert,
            m = d.plotLeft,
            k = d.plotTop,
            n = d.plotWidth,
            q = d.plotHeight,
            u = this.selectionMarker,
            v = this.mouseDownX || 0,
            t = this.mouseDownY || 0,
            p = N(a.panning) ? a.panning && a.panning.enabled : a.panning,
            w = a.panKey && c[a.panKey + "Key"];
        if (!u || !u.touch) if (b < m ? b = m : b > m + n && (b = m + n), e < k ? e = k : e > k + q && (e = k + q), this.hasDragged = Math.sqrt(Math.pow(v - b, 2) + Math.pow(t - e, 2)), 10 < this.hasDragged) {
          var E = d.isInsidePlot(v - m, t - k, {
            visiblePlotOnly: !0
          });
          d.hasCartesianSeries && (this.zoomX || this.zoomY) && E && !w && !u && (this.selectionMarker = u = d.renderer.rect(m, k, f ? 1 : n, l ? 1 : q, 0).attr({
            "class": "highcharts-selection-marker",
            zIndex: 7
          }).add(), d.styledMode || u.attr({
            fill: a.selectionMarkerFill || D(I.highlightColor80).setOpacity(.25).get()
          }));
          u && f && (b -= v, u.attr({
            width: Math.abs(b),
            x: (0 < b ? 0 : b) + v
          }));
          u && l && (b = e - t, u.attr({
            height: Math.abs(b),
            y: (0 < b ? 0 : b) + t
          }));
          E && !u && p && d.pan(c, a.panning);
        }
      };

      e.prototype.dragStart = function (c) {
        var d = this.chart;
        d.mouseIsDown = c.type;
        d.cancelClick = !1;
        d.mouseDownX = this.mouseDownX = c.chartX;
        d.mouseDownY = this.mouseDownY = c.chartY;
      };

      e.prototype.drop = function (c) {
        var b = this,
            a = this.chart,
            h = this.hasPinched;

        if (this.selectionMarker) {
          var e = {
            originalEvent: c,
            xAxis: [],
            yAxis: []
          },
              A = this.selectionMarker,
              m = A.attr ? A.attr("x") : A.x,
              n = A.attr ? A.attr("y") : A.y,
              q = A.attr ? A.attr("width") : A.width,
              u = A.attr ? A.attr("height") : A.height,
              w;
          if (this.hasDragged || h) a.axes.forEach(function (a) {
            if (a.zoomEnabled && f(a.min) && (h || b[{
              xAxis: "zoomX",
              yAxis: "zoomY"
            }[a.coll]]) && l(m) && l(n)) {
              var d = a.horiz,
                  g = "touchend" === c.type ? a.minPixelPadding : 0,
                  r = a.toValue((d ? m : n) + g);
              d = a.toValue((d ? m + q : n + u) - g);
              e[a.coll].push({
                axis: a,
                min: Math.min(r, d),
                max: Math.max(r, d)
              });
              w = !0;
            }
          }), w && k(a, "selection", e, function (c) {
            a.zoom(d(c, h ? {
              animation: !1
            } : null));
          });
          l(a.index) && (this.selectionMarker = this.selectionMarker.destroy());
          h && this.scaleGroups();
        }

        a && l(a.index) && (v(a.container, {
          cursor: a._cursor
        }), a.cancelClick = 10 < this.hasDragged, a.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []);
      };

      e.prototype.findNearestKDPoint = function (c, d, a) {
        var b = this.chart,
            g = b.hoverPoint;
        b = b.tooltip;
        if (g && b && b.isStickyOnContact()) return g;
        var e;
        c.forEach(function (c) {
          var b = !(c.noSharedTooltip && d) && 0 > c.options.findNearestPointBy.indexOf("y");
          c = c.searchPoint(a, b);

          if ((b = N(c, !0) && c.series) && !(b = !N(e, !0))) {
            b = e.distX - c.distX;
            var h = e.dist - c.dist,
                g = (c.series.group && c.series.group.zIndex) - (e.series.group && e.series.group.zIndex);
            b = 0 < (0 !== b && d ? b : 0 !== h ? h : 0 !== g ? g : e.series.index > c.series.index ? -1 : 1);
          }

          b && (e = c);
        });
        return e;
      };

      e.prototype.getChartCoordinatesFromPoint = function (c, d) {
        var a = c.series,
            b = a.xAxis;
        a = a.yAxis;
        var g = c.shapeArgs;

        if (b && a) {
          var e = J(c.clientX, c.plotX),
              f = c.plotY || 0;
          c.isNode && g && l(g.x) && l(g.y) && (e = g.x, f = g.y);
          return d ? {
            chartX: a.len + a.pos - f,
            chartY: b.len + b.pos - e
          } : {
            chartX: e + b.pos,
            chartY: f + a.pos
          };
        }

        if (g && g.x && g.y) return {
          chartX: g.x,
          chartY: g.y
        };
      };

      e.prototype.getChartPosition = function () {
        if (this.chartPosition) return this.chartPosition;
        var c = this.chart.container,
            d = n(c);
        this.chartPosition = {
          left: d.left,
          top: d.top,
          scaleX: 1,
          scaleY: 1
        };
        var a = c.offsetWidth;
        c = c.offsetHeight;
        2 < a && 2 < c && (this.chartPosition.scaleX = d.width / a, this.chartPosition.scaleY = d.height / c);
        return this.chartPosition;
      };

      e.prototype.getCoordinates = function (c) {
        var d = {
          xAxis: [],
          yAxis: []
        };
        this.chart.axes.forEach(function (a) {
          d[a.isXAxis ? "xAxis" : "yAxis"].push({
            axis: a,
            value: a.toValue(c[a.horiz ? "chartX" : "chartY"])
          });
        });
        return d;
      };

      e.prototype.getHoverData = function (c, d, a, b, e, f) {
        var h,
            g = [];
        b = !(!b || !c);
        var r = d && !d.stickyTracking,
            l = {
          chartX: f ? f.chartX : void 0,
          chartY: f ? f.chartY : void 0,
          shared: e
        };
        k(this, "beforeGetHoverData", l);
        r = r ? [d] : a.filter(function (a) {
          return l.filter ? l.filter(a) : a.visible && !(!e && a.directTouch) && J(a.options.enableMouseTracking, !0) && a.stickyTracking;
        });
        d = (h = b || !f ? c : this.findNearestKDPoint(r, e, f)) && h.series;
        h && (e && !d.noSharedTooltip ? (r = a.filter(function (a) {
          return l.filter ? l.filter(a) : a.visible && !(!e && a.directTouch) && J(a.options.enableMouseTracking, !0) && !a.noSharedTooltip;
        }), r.forEach(function (a) {
          var c = q(a.points, function (a) {
            return a.x === h.x && !a.isNull;
          });
          N(c) && (a.chart.isBoosting && (c = a.getPoint(c)), g.push(c));
        })) : g.push(h));
        l = {
          hoverPoint: h
        };
        k(this, "afterGetHoverData", l);
        return {
          hoverPoint: l.hoverPoint,
          hoverSeries: d,
          hoverPoints: g
        };
      };

      e.prototype.getPointFromEvent = function (c) {
        c = c.target;

        for (var d; c && !d;) {
          d = c.point, c = c.parentNode;
        }

        return d;
      };

      e.prototype.onTrackerMouseOut = function (c) {
        c = c.relatedTarget || c.toElement;
        var d = this.chart.hoverSeries;
        this.isDirectTouch = !1;
        if (!(!d || !c || d.stickyTracking || this.inClass(c, "highcharts-tooltip") || this.inClass(c, "highcharts-series-" + d.index) && this.inClass(c, "highcharts-tracker"))) d.onMouseOut();
      };

      e.prototype.inClass = function (c, d) {
        for (var a; c;) {
          if (a = w(c, "class")) {
            if (-1 !== a.indexOf(d)) return !0;
            if (-1 !== a.indexOf("highcharts-container")) return !1;
          }

          c = c.parentNode;
        }
      };

      e.prototype.init = function (c, d) {
        this.options = d;
        this.chart = c;
        this.runChartClick = !(!d.chart.events || !d.chart.events.click);
        this.pinchDown = [];
        this.lastValidTouch = {};
        z && (c.tooltip = new z(c, d.tooltip), this.followTouchMove = J(d.tooltip.followTouchMove, !0));
        this.setDOMEvents();
      };

      e.prototype.normalize = function (c, b) {
        var a = c.touches,
            h = a ? a.length ? a.item(0) : J(a.changedTouches, c.changedTouches)[0] : c;
        b || (b = this.getChartPosition());
        a = h.pageX - b.left;
        h = h.pageY - b.top;
        a /= b.scaleX;
        h /= b.scaleY;
        return d(c, {
          chartX: Math.round(a),
          chartY: Math.round(h)
        });
      };

      e.prototype.onContainerClick = function (c) {
        var b = this.chart,
            a = b.hoverPoint;
        c = this.normalize(c);
        var h = b.plotLeft,
            e = b.plotTop;
        b.cancelClick || (a && this.inClass(c.target, "highcharts-tracker") ? (k(a.series, "click", d(c, {
          point: a
        })), b.hoverPoint && a.firePointEvent("click", c)) : (d(c, this.getCoordinates(c)), b.isInsidePlot(c.chartX - h, c.chartY - e, {
          visiblePlotOnly: !0
        }) && k(b, "click", c)));
      };

      e.prototype.onContainerMouseDown = function (c) {
        var d = 1 === ((c.buttons || c.button) & 1);
        c = this.normalize(c);
        if (b.isFirefox && 0 !== c.button) this.onContainerMouseMove(c);
        if ("undefined" === typeof c.button || d) this.zoomOption(c), d && c.preventDefault && c.preventDefault(), this.dragStart(c);
      };

      e.prototype.onContainerMouseLeave = function (c) {
        var d = C[J(b.hoverChartIndex, -1)],
            a = this.chart.tooltip;
        c = this.normalize(c);
        d && (c.relatedTarget || c.toElement) && (d.pointer.reset(), d.pointer.chartPosition = void 0);
        a && !a.isHidden && this.reset();
      };

      e.prototype.onContainerMouseEnter = function (c) {
        delete this.chartPosition;
      };

      e.prototype.onContainerMouseMove = function (c) {
        var d = this.chart;
        c = this.normalize(c);
        this.setHoverChartIndex();
        c.preventDefault || (c.returnValue = !1);
        ("mousedown" === d.mouseIsDown || this.touchSelect(c)) && this.drag(c);
        d.openMenu || !this.inClass(c.target, "highcharts-tracker") && !d.isInsidePlot(c.chartX - d.plotLeft, c.chartY - d.plotTop, {
          visiblePlotOnly: !0
        }) || this.runPointActions(c);
      };

      e.prototype.onDocumentTouchEnd = function (c) {
        C[b.hoverChartIndex] && C[b.hoverChartIndex].pointer.drop(c);
      };

      e.prototype.onContainerTouchMove = function (c) {
        if (this.touchSelect(c)) this.onContainerMouseMove(c);else this.touch(c);
      };

      e.prototype.onContainerTouchStart = function (c) {
        if (this.touchSelect(c)) this.onContainerMouseDown(c);else this.zoomOption(c), this.touch(c, !0);
      };

      e.prototype.onDocumentMouseMove = function (c) {
        var d = this.chart,
            a = this.chartPosition;
        c = this.normalize(c, a);
        var b = d.tooltip;
        !a || b && b.isStickyOnContact() || d.isInsidePlot(c.chartX - d.plotLeft, c.chartY - d.plotTop, {
          visiblePlotOnly: !0
        }) || this.inClass(c.target, "highcharts-tracker") || this.reset();
      };

      e.prototype.onDocumentMouseUp = function (c) {
        var d = C[J(b.hoverChartIndex, -1)];
        d && d.pointer.drop(c);
      };

      e.prototype.pinch = function (c) {
        var b = this,
            a = b.chart,
            h = b.pinchDown,
            e = c.touches || [],
            f = e.length,
            l = b.lastValidTouch,
            m = b.hasZoom,
            k = b.selectionMarker,
            n = {},
            q = 1 === f && (b.inClass(c.target, "highcharts-tracker") && a.runTrackerClick || b.runChartClick),
            u = {};
        1 < f && (b.initiated = !0);
        m && b.initiated && !q && !1 !== c.cancelable && c.preventDefault();
        [].map.call(e, function (a) {
          return b.normalize(a);
        });
        "touchstart" === c.type ? ([].forEach.call(e, function (a, c) {
          h[c] = {
            chartX: a.chartX,
            chartY: a.chartY
          };
        }), l.x = [h[0].chartX, h[1] && h[1].chartX], l.y = [h[0].chartY, h[1] && h[1].chartY], a.axes.forEach(function (c) {
          if (c.zoomEnabled) {
            var d = a.bounds[c.horiz ? "h" : "v"],
                b = c.minPixelPadding,
                h = c.toPixels(Math.min(J(c.options.min, c.dataMin), c.dataMin)),
                e = c.toPixels(Math.max(J(c.options.max, c.dataMax), c.dataMax)),
                g = Math.max(h, e);
            d.min = Math.min(c.pos, Math.min(h, e) - b);
            d.max = Math.max(c.pos + c.len, g + b);
          }
        }), b.res = !0) : b.followTouchMove && 1 === f ? this.runPointActions(b.normalize(c)) : h.length && (k || (b.selectionMarker = k = d({
          destroy: B,
          touch: !0
        }, a.plotBox)), b.pinchTranslate(h, e, n, k, u, l), b.hasPinched = m, b.scaleGroups(n, u), b.res && (b.res = !1, this.reset(!1, 0)));
      };

      e.prototype.pinchTranslate = function (c, d, a, b, e, f) {
        this.zoomHor && this.pinchTranslateDirection(!0, c, d, a, b, e, f);
        this.zoomVert && this.pinchTranslateDirection(!1, c, d, a, b, e, f);
      };

      e.prototype.pinchTranslateDirection = function (c, d, a, b, e, f, l, m) {
        var h = this.chart,
            g = c ? "x" : "y",
            r = c ? "X" : "Y",
            k = "chart" + r,
            n = c ? "width" : "height",
            A = h["plot" + (c ? "Left" : "Top")],
            y,
            q,
            u = m || 1,
            L = h.inverted,
            F = h.bounds[c ? "h" : "v"],
            v = 1 === d.length,
            K = d[0][k],
            w = a[0][k],
            E = !v && d[1][k],
            x = !v && a[1][k];

        a = function a() {
          "number" === typeof x && 20 < Math.abs(K - E) && (u = m || Math.abs(w - x) / Math.abs(K - E));
          q = (A - w) / u + K;
          y = h["plot" + (c ? "Width" : "Height")] / u;
        };

        a();
        d = q;

        if (d < F.min) {
          d = F.min;
          var J = !0;
        } else d + y > F.max && (d = F.max - y, J = !0);

        J ? (w -= .8 * (w - l[g][0]), "number" === typeof x && (x -= .8 * (x - l[g][1])), a()) : l[g] = [w, x];
        L || (f[g] = q - A, f[n] = y);
        f = L ? 1 / u : u;
        e[n] = y;
        e[g] = d;
        b[L ? c ? "scaleY" : "scaleX" : "scale" + r] = u;
        b["translate" + r] = f * A + (w - f * K);
      };

      e.prototype.reset = function (c, d) {
        var a = this.chart,
            b = a.hoverSeries,
            e = a.hoverPoint,
            g = a.hoverPoints,
            f = a.tooltip,
            l = f && f.shared ? g : e;
        c && l && E(l).forEach(function (a) {
          a.series.isCartesian && "undefined" === typeof a.plotX && (c = !1);
        });
        if (c) f && l && E(l).length && (f.refresh(l), f.shared && g ? g.forEach(function (a) {
          a.setState(a.state, !0);
          a.series.isCartesian && (a.series.xAxis.crosshair && a.series.xAxis.drawCrosshair(null, a), a.series.yAxis.crosshair && a.series.yAxis.drawCrosshair(null, a));
        }) : e && (e.setState(e.state, !0), a.axes.forEach(function (a) {
          a.crosshair && e.series[a.coll] === a && a.drawCrosshair(null, e);
        })));else {
          if (e) e.onMouseOut();
          g && g.forEach(function (a) {
            a.setState();
          });
          if (b) b.onMouseOut();
          f && f.hide(d);
          this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());
          a.axes.forEach(function (a) {
            a.hideCrosshair();
          });
          this.hoverX = a.hoverPoints = a.hoverPoint = null;
        }
      };

      e.prototype.runPointActions = function (c, d) {
        var a = this.chart,
            h = a.tooltip && a.tooltip.options.enabled ? a.tooltip : void 0,
            e = h ? h.shared : !1,
            g = d || a.hoverPoint,
            f = g && g.series || a.hoverSeries;
        f = this.getHoverData(g, f, a.series, (!c || "touchmove" !== c.type) && (!!d || f && f.directTouch && this.isDirectTouch), e, c);
        g = f.hoverPoint;
        var l = f.hoverPoints;
        d = (f = f.hoverSeries) && f.tooltipOptions.followPointer && !f.tooltipOptions.split;
        e = e && f && !f.noSharedTooltip;

        if (g && (g !== a.hoverPoint || h && h.isHidden)) {
          (a.hoverPoints || []).forEach(function (a) {
            -1 === l.indexOf(a) && a.setState();
          });
          if (a.hoverSeries !== f) f.onMouseOver();
          this.applyInactiveState(l);
          (l || []).forEach(function (a) {
            a.setState("hover");
          });
          a.hoverPoint && a.hoverPoint.firePointEvent("mouseOut");
          if (!g.series) return;
          a.hoverPoints = l;
          a.hoverPoint = g;
          g.firePointEvent("mouseOver");
          h && h.refresh(e ? l : g, c);
        } else d && h && !h.isHidden && (g = h.getAnchor([{}], c), a.isInsidePlot(g[0], g[1], {
          visiblePlotOnly: !0
        }) && h.updatePosition({
          plotX: g[0],
          plotY: g[1]
        }));

        this.unDocMouseMove || (this.unDocMouseMove = x(a.container.ownerDocument, "mousemove", function (a) {
          var c = C[b.hoverChartIndex];
          if (c) c.pointer.onDocumentMouseMove(a);
        }), this.eventsToUnbind.push(this.unDocMouseMove));
        a.axes.forEach(function (d) {
          var b = J((d.crosshair || {}).snap, !0),
              h;
          b && ((h = a.hoverPoint) && h.series[d.coll] === d || (h = q(l, function (a) {
            return a.series[d.coll] === d;
          })));
          h || !b ? d.drawCrosshair(c, h) : d.hideCrosshair();
        });
      };

      e.prototype.scaleGroups = function (c, d) {
        var a = this.chart,
            b;
        a.series.forEach(function (h) {
          b = c || h.getPlotBox();
          h.xAxis && h.xAxis.zoomEnabled && h.group && (h.group.attr(b), h.markerGroup && (h.markerGroup.attr(b), h.markerGroup.clip(d ? a.clipRect : null)), h.dataLabelsGroup && h.dataLabelsGroup.attr(b));
        });
        a.clipRect.attr(d || a.clipBox);
      };

      e.prototype.setDOMEvents = function () {
        var c = this,
            d = this.chart.container,
            a = d.ownerDocument;
        d.onmousedown = this.onContainerMouseDown.bind(this);
        d.onmousemove = this.onContainerMouseMove.bind(this);
        d.onclick = this.onContainerClick.bind(this);
        this.eventsToUnbind.push(x(d, "mouseenter", this.onContainerMouseEnter.bind(this)));
        this.eventsToUnbind.push(x(d, "mouseleave", this.onContainerMouseLeave.bind(this)));
        b.unbindDocumentMouseUp || (b.unbindDocumentMouseUp = x(a, "mouseup", this.onDocumentMouseUp.bind(this)));

        for (var h = this.chart.renderTo.parentElement; h && "BODY" !== h.tagName;) {
          this.eventsToUnbind.push(x(h, "scroll", function () {
            delete c.chartPosition;
          })), h = h.parentElement;
        }

        b.hasTouch && (this.eventsToUnbind.push(x(d, "touchstart", this.onContainerTouchStart.bind(this), {
          passive: !1
        })), this.eventsToUnbind.push(x(d, "touchmove", this.onContainerTouchMove.bind(this), {
          passive: !1
        })), b.unbindDocumentTouchEnd || (b.unbindDocumentTouchEnd = x(a, "touchend", this.onDocumentTouchEnd.bind(this), {
          passive: !1
        })));
      };

      e.prototype.setHoverChartIndex = function () {
        var c = this.chart,
            d = b.charts[J(b.hoverChartIndex, -1)];
        if (d && d !== c) d.pointer.onContainerMouseLeave({
          relatedTarget: !0
        });
        d && d.mouseIsDown || (b.hoverChartIndex = c.index);
      };

      e.prototype.touch = function (c, d) {
        var a = this.chart,
            b;
        this.setHoverChartIndex();
        if (1 === c.touches.length) {
          if (c = this.normalize(c), (b = a.isInsidePlot(c.chartX - a.plotLeft, c.chartY - a.plotTop, {
            visiblePlotOnly: !0
          })) && !a.openMenu) {
            d && this.runPointActions(c);

            if ("touchmove" === c.type) {
              d = this.pinchDown;
              var e = d[0] ? 4 <= Math.sqrt(Math.pow(d[0].chartX - c.chartX, 2) + Math.pow(d[0].chartY - c.chartY, 2)) : !1;
            }

            J(e, !0) && this.pinch(c);
          } else d && this.reset();
        } else 2 === c.touches.length && this.pinch(c);
      };

      e.prototype.touchSelect = function (c) {
        return !(!this.chart.options.chart.zoomBySingleTouch || !c.touches || 1 !== c.touches.length);
      };

      e.prototype.zoomOption = function (c) {
        var d = this.chart,
            a = d.options.chart,
            b = a.zoomType || "";
        d = d.inverted;
        /touch/.test(c.type) && (b = J(a.pinchType, b));
        this.zoomX = c = /x/.test(b);
        this.zoomY = b = /y/.test(b);
        this.zoomHor = c && !d || b && d;
        this.zoomVert = b && !d || c && d;
        this.hasZoom = c || b;
      };

      return e;
    }();

    return b.Pointer = e;
  });
  O(e, "Core/MSPointer.js", [e["Core/Globals.js"], e["Core/Pointer.js"], e["Core/Utilities.js"]], function (e, b, I) {
    function D() {
      var d = [];

      d.item = function (d) {
        return this[d];
      };

      f(q, function (b) {
        d.push({
          pageX: b.pageX,
          pageY: b.pageY,
          target: b.target
        });
      });
      return d;
    }

    function H(d, b, f, k) {
      "touch" !== d.pointerType && d.pointerType !== d.MSPOINTER_TYPE_TOUCH || !C[e.hoverChartIndex] || (k(d), k = C[e.hoverChartIndex].pointer, k[b]({
        type: f,
        target: d.currentTarget,
        preventDefault: x,
        touches: D()
      }));
    }

    var G = this && this.__extends || function () {
      var _d = function d(b, e) {
        _d = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var e in b) {
            b.hasOwnProperty(e) && (d[e] = b[e]);
          }
        };

        return _d(b, e);
      };

      return function (b, e) {
        function f() {
          this.constructor = b;
        }

        _d(b, e);

        b.prototype = null === e ? Object.create(e) : (f.prototype = e.prototype, new f());
      };
    }(),
        C = e.charts,
        B = e.doc,
        x = e.noop,
        w = I.addEvent,
        v = I.css,
        f = I.objectEach,
        d = I.removeEvent,
        q = {},
        k = !!e.win.PointerEvent;

    return function (b) {
      function e() {
        return null !== b && b.apply(this, arguments) || this;
      }

      G(e, b);

      e.prototype.batchMSEvents = function (d) {
        d(this.chart.container, k ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
        d(this.chart.container, k ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
        d(B, k ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
      };

      e.prototype.destroy = function () {
        this.batchMSEvents(d);
        b.prototype.destroy.call(this);
      };

      e.prototype.init = function (d, e) {
        b.prototype.init.call(this, d, e);
        this.hasZoom && v(d.container, {
          "-ms-touch-action": "none",
          "touch-action": "none"
        });
      };

      e.prototype.onContainerPointerDown = function (d) {
        H(d, "onContainerTouchStart", "touchstart", function (d) {
          q[d.pointerId] = {
            pageX: d.pageX,
            pageY: d.pageY,
            target: d.currentTarget
          };
        });
      };

      e.prototype.onContainerPointerMove = function (d) {
        H(d, "onContainerTouchMove", "touchmove", function (d) {
          q[d.pointerId] = {
            pageX: d.pageX,
            pageY: d.pageY
          };
          q[d.pointerId].target || (q[d.pointerId].target = d.currentTarget);
        });
      };

      e.prototype.onDocumentPointerUp = function (d) {
        H(d, "onDocumentTouchEnd", "touchend", function (d) {
          delete q[d.pointerId];
        });
      };

      e.prototype.setDOMEvents = function () {
        b.prototype.setDOMEvents.call(this);
        (this.hasZoom || this.followTouchMove) && this.batchMSEvents(w);
      };

      return e;
    }(b);
  });
  O(e, "Core/Series/Point.js", [e["Core/Renderer/HTML/AST.js"], e["Core/Animation/AnimationUtilities.js"], e["Core/FormatUtilities.js"], e["Core/Globals.js"], e["Core/Options.js"], e["Core/Utilities.js"]], function (e, b, I, z, H, G) {
    var D = b.animObject,
        B = I.format,
        x = H.defaultOptions,
        w = G.addEvent,
        v = G.defined,
        f = G.erase,
        d = G.extend,
        q = G.fireEvent,
        k = G.getNestedProperty,
        l = G.isArray,
        N = G.isFunction,
        u = G.isNumber,
        n = G.isObject,
        J = G.merge,
        E = G.objectEach,
        m = G.pick,
        c = G.syncTimeout,
        g = G.removeEvent,
        a = G.uniqueKey;
    "";

    b = function () {
      function b() {
        this.colorIndex = this.category = void 0;
        this.formatPrefix = "point";
        this.id = void 0;
        this.isNull = !1;
        this.percentage = this.options = this.name = void 0;
        this.selected = !1;
        this.total = this.series = void 0;
        this.visible = !0;
        this.x = void 0;
      }

      b.prototype.animateBeforeDestroy = function () {
        var a = this,
            c = {
          x: a.startXPos,
          opacity: 0
        },
            b,
            e = a.getGraphicalProps();
        e.singular.forEach(function (d) {
          b = "dataLabel" === d;
          a[d] = a[d].animate(b ? {
            x: a[d].startXPos,
            y: a[d].startYPos,
            opacity: 0
          } : c);
        });
        e.plural.forEach(function (c) {
          a[c].forEach(function (c) {
            c.element && c.animate(d({
              x: a.startXPos
            }, c.startYPos ? {
              x: c.startXPos,
              y: c.startYPos
            } : {}));
          });
        });
      };

      b.prototype.applyOptions = function (a, c) {
        var e = this.series,
            h = e.options.pointValKey || e.pointValKey;
        a = b.prototype.optionsToObject.call(this, a);
        d(this, a);
        this.options = this.options ? d(this.options, a) : a;
        a.group && delete this.group;
        a.dataLabels && delete this.dataLabels;
        h && (this.y = b.prototype.getNestedProperty.call(this, h));
        this.formatPrefix = (this.isNull = m(this.isValid && !this.isValid(), null === this.x || !u(this.y))) ? "null" : "point";
        this.selected && (this.state = "select");
        "name" in this && "undefined" === typeof c && e.xAxis && e.xAxis.hasNames && (this.x = e.xAxis.nameToX(this));
        "undefined" === typeof this.x && e && (this.x = "undefined" === typeof c ? e.autoIncrement(this) : c);
        return this;
      };

      b.prototype.destroy = function () {
        function a() {
          if (d.graphic || d.dataLabel || d.dataLabels) g(d), d.destroyElements();

          for (m in d) {
            d[m] = null;
          }
        }

        var d = this,
            b = d.series,
            e = b.chart;
        b = b.options.dataSorting;
        var h = e.hoverPoints,
            l = D(d.series.chart.renderer.globalAnimation),
            m;
        d.legendItem && e.legend.destroyItem(d);
        h && (d.setState(), f(h, d), h.length || (e.hoverPoints = null));
        if (d === e.hoverPoint) d.onMouseOut();
        b && b.enabled ? (this.animateBeforeDestroy(), c(a, l.duration)) : a();
        e.pointCount--;
      };

      b.prototype.destroyElements = function (a) {
        var c = this;
        a = c.getGraphicalProps(a);
        a.singular.forEach(function (a) {
          c[a] = c[a].destroy();
        });
        a.plural.forEach(function (a) {
          c[a].forEach(function (a) {
            a.element && a.destroy();
          });
          delete c[a];
        });
      };

      b.prototype.firePointEvent = function (a, c, d) {
        var b = this,
            e = this.series.options;
        (e.point.events[a] || b.options && b.options.events && b.options.events[a]) && b.importEvents();
        "click" === a && e.allowPointSelect && (d = function d(a) {
          b.select && b.select(null, a.ctrlKey || a.metaKey || a.shiftKey);
        });
        q(b, a, c, d);
      };

      b.prototype.getClassName = function () {
        return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + ("undefined" !== typeof this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
      };

      b.prototype.getGraphicalProps = function (a) {
        var c = this,
            d = [],
            b,
            e = {
          singular: [],
          plural: []
        };
        a = a || {
          graphic: 1,
          dataLabel: 1
        };
        a.graphic && d.push("graphic", "upperGraphic", "shadowGroup");
        a.dataLabel && d.push("dataLabel", "dataLabelUpper", "connector");

        for (b = d.length; b--;) {
          var h = d[b];
          c[h] && e.singular.push(h);
        }

        ["dataLabel", "connector"].forEach(function (d) {
          var b = d + "s";
          a[d] && c[b] && e.plural.push(b);
        });
        return e;
      };

      b.prototype.getLabelConfig = function () {
        return {
          x: this.category,
          y: this.y,
          color: this.color,
          colorIndex: this.colorIndex,
          key: this.name || this.category,
          series: this.series,
          point: this,
          percentage: this.percentage,
          total: this.total || this.stackTotal
        };
      };

      b.prototype.getNestedProperty = function (a) {
        if (a) return 0 === a.indexOf("custom.") ? k(a, this.options) : this[a];
      };

      b.prototype.getZone = function () {
        var a = this.series,
            c = a.zones;
        a = a.zoneAxis || "y";
        var d = 0,
            b;

        for (b = c[d]; this[a] >= b.value;) {
          b = c[++d];
        }

        this.nonZonedColor || (this.nonZonedColor = this.color);
        this.color = b && b.color && !this.options.color ? b.color : this.nonZonedColor;
        return b;
      };

      b.prototype.hasNewShapeType = function () {
        return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType;
      };

      b.prototype.init = function (c, d, b) {
        this.series = c;
        this.applyOptions(d, b);
        this.id = v(this.id) ? this.id : a();
        this.resolveColor();
        c.chart.pointCount++;
        q(this, "afterInit");
        return this;
      };

      b.prototype.optionsToObject = function (a) {
        var c = {},
            d = this.series,
            e = d.options.keys,
            h = e || d.pointArrayMap || ["y"],
            g = h.length,
            f = 0,
            r = 0;
        if (u(a) || null === a) c[h[0]] = a;else if (l(a)) for (!e && a.length > g && (d = _typeof(a[0]), "string" === d ? c.name = a[0] : "number" === d && (c.x = a[0]), f++); r < g;) {
          e && "undefined" === typeof a[f] || (0 < h[r].indexOf(".") ? b.prototype.setNestedProperty(c, a[f], h[r]) : c[h[r]] = a[f]), f++, r++;
        } else "object" === _typeof(a) && (c = a, a.dataLabels && (d._hasPointLabels = !0), a.marker && (d._hasPointMarkers = !0));
        return c;
      };

      b.prototype.resolveColor = function () {
        var a = this.series;
        var c = a.chart.options.chart.colorCount;
        var d = a.chart.styledMode;
        delete this.nonZonedColor;

        if (a.options.colorByPoint) {
          if (!d) {
            c = a.options.colors || a.chart.options.colors;
            var b = c[a.colorCounter];
            c = c.length;
          }

          d = a.colorCounter;
          a.colorCounter++;
          a.colorCounter === c && (a.colorCounter = 0);
        } else d || (b = a.color), d = a.colorIndex;

        this.colorIndex = m(this.options.colorIndex, d);
        this.color = m(this.options.color, b);
      };

      b.prototype.setNestedProperty = function (a, c, d) {
        d.split(".").reduce(function (a, d, b, e) {
          a[d] = e.length - 1 === b ? c : n(a[d], !0) ? a[d] : {};
          return a[d];
        }, a);
        return a;
      };

      b.prototype.tooltipFormatter = function (a) {
        var c = this.series,
            d = c.tooltipOptions,
            b = m(d.valueDecimals, ""),
            e = d.valuePrefix || "",
            h = d.valueSuffix || "";
        c.chart.styledMode && (a = c.chart.tooltip.styledModeFormat(a));
        (c.pointArrayMap || ["y"]).forEach(function (c) {
          c = "{point." + c;
          if (e || h) a = a.replace(RegExp(c + "}", "g"), e + c + "}" + h);
          a = a.replace(RegExp(c + "}", "g"), c + ":,." + b + "f}");
        });
        return B(a, {
          point: this,
          series: this.series
        }, c.chart);
      };

      b.prototype.update = function (a, c, d, b) {
        function e() {
          h.applyOptions(a);
          var b = f && h.hasDummyGraphic;
          b = null === h.y ? !b : b;
          f && b && (h.graphic = f.destroy(), delete h.hasDummyGraphic);
          n(a, !0) && (f && f.element && a && a.marker && "undefined" !== typeof a.marker.symbol && (h.graphic = f.destroy()), a && a.dataLabels && h.dataLabel && (h.dataLabel = h.dataLabel.destroy()), h.connector && (h.connector = h.connector.destroy()));
          r = h.index;
          g.updateParallelArrays(h, r);
          k.data[r] = n(k.data[r], !0) || n(a, !0) ? h.options : m(a, k.data[r]);
          g.isDirty = g.isDirtyData = !0;
          !g.fixedBox && g.hasCartesianSeries && (l.isDirtyBox = !0);
          "point" === k.legendType && (l.isDirtyLegend = !0);
          c && l.redraw(d);
        }

        var h = this,
            g = h.series,
            f = h.graphic,
            r,
            l = g.chart,
            k = g.options;
        c = m(c, !0);
        !1 === b ? e() : h.firePointEvent("update", {
          options: a
        }, e);
      };

      b.prototype.remove = function (a, c) {
        this.series.removePoint(this.series.data.indexOf(this), a, c);
      };

      b.prototype.select = function (a, c) {
        var d = this,
            b = d.series,
            e = b.chart;
        this.selectedStaging = a = m(a, !d.selected);
        d.firePointEvent(a ? "select" : "unselect", {
          accumulate: c
        }, function () {
          d.selected = d.options.selected = a;
          b.options.data[b.data.indexOf(d)] = d.options;
          d.setState(a && "select");
          c || e.getSelectedPoints().forEach(function (a) {
            var c = a.series;
            a.selected && a !== d && (a.selected = a.options.selected = !1, c.options.data[c.data.indexOf(a)] = a.options, a.setState(e.hoverPoints && c.options.inactiveOtherPoints ? "inactive" : ""), a.firePointEvent("unselect"));
          });
        });
        delete this.selectedStaging;
      };

      b.prototype.onMouseOver = function (a) {
        var c = this.series.chart,
            d = c.pointer;
        a = a ? d.normalize(a) : d.getChartCoordinatesFromPoint(this, c.inverted);
        d.runPointActions(a, this);
      };

      b.prototype.onMouseOut = function () {
        var a = this.series.chart;
        this.firePointEvent("mouseOut");
        this.series.options.inactiveOtherPoints || (a.hoverPoints || []).forEach(function (a) {
          a.setState();
        });
        a.hoverPoints = a.hoverPoint = null;
      };

      b.prototype.importEvents = function () {
        if (!this.hasImportedEvents) {
          var a = this,
              c = J(a.series.options.point, a.options).events;
          a.events = c;
          E(c, function (c, d) {
            N(c) && w(a, d, c);
          });
          this.hasImportedEvents = !0;
        }
      };

      b.prototype.setState = function (a, c) {
        var b = this.series,
            h = this.state,
            g = b.options.states[a || "normal"] || {},
            f = x.plotOptions[b.type].marker && b.options.marker,
            r = f && !1 === f.enabled,
            l = f && f.states && f.states[a || "normal"] || {},
            k = !1 === l.enabled,
            n = b.stateMarkerGraphic,
            p = this.marker || {},
            A = b.chart,
            v = b.halo,
            w,
            F = f && b.markerAttribs;
        a = a || "";

        if (!(a === this.state && !c || this.selected && "select" !== a || !1 === g.enabled || a && (k || r && !1 === l.enabled) || a && p.states && p.states[a] && !1 === p.states[a].enabled)) {
          this.state = a;
          F && (w = b.markerAttribs(this, a));

          if (this.graphic && !this.hasDummyGraphic) {
            h && this.graphic.removeClass("highcharts-point-" + h);
            a && this.graphic.addClass("highcharts-point-" + a);

            if (!A.styledMode) {
              var S = b.pointAttribs(this, a);
              var K = m(A.options.chart.animation, g.animation);
              b.options.inactiveOtherPoints && u(S.opacity) && ((this.dataLabels || []).forEach(function (a) {
                a && a.animate({
                  opacity: S.opacity
                }, K);
              }), this.connector && this.connector.animate({
                opacity: S.opacity
              }, K));
              this.graphic.animate(S, K);
            }

            w && this.graphic.animate(w, m(A.options.chart.animation, l.animation, f.animation));
            n && n.hide();
          } else {
            if (a && l) {
              h = p.symbol || b.symbol;
              n && n.currentSymbol !== h && (n = n.destroy());
              if (w) if (n) n[c ? "animate" : "attr"]({
                x: w.x,
                y: w.y
              });else h && (b.stateMarkerGraphic = n = A.renderer.symbol(h, w.x, w.y, w.width, w.height).add(b.markerGroup), n.currentSymbol = h);
              !A.styledMode && n && n.attr(b.pointAttribs(this, a));
            }

            n && (n[a && this.isInside ? "show" : "hide"](), n.element.point = this);
          }

          g = g.halo;
          w = (n = this.graphic || n) && n.visibility || "inherit";
          g && g.size && n && "hidden" !== w && !this.isCluster ? (v || (b.halo = v = A.renderer.path().add(n.parentGroup)), v.show()[c ? "animate" : "attr"]({
            d: this.haloPath(g.size)
          }), v.attr({
            "class": "highcharts-halo highcharts-color-" + m(this.colorIndex, b.colorIndex) + (this.className ? " " + this.className : ""),
            visibility: w,
            zIndex: -1
          }), v.point = this, A.styledMode || v.attr(d({
            fill: this.color || b.color,
            "fill-opacity": g.opacity
          }, e.filterUserAttributes(g.attributes || {})))) : v && v.point && v.point.haloPath && v.animate({
            d: v.point.haloPath(0)
          }, null, v.hide);
          q(this, "afterSetState", {
            state: a
          });
        }
      };

      b.prototype.haloPath = function (a) {
        return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - a, this.plotY - a, 2 * a, 2 * a);
      };

      return b;
    }();

    return z.Point = b;
  });
  O(e, "Core/Legend.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/FormatUtilities.js"], e["Core/Globals.js"], e["Core/Series/Point.js"], e["Core/Utilities.js"]], function (e, b, I, z, H) {
    var D = e.animObject,
        C = e.setAnimation,
        B = b.format;
    e = I.isFirefox;
    var x = I.marginNames;
    b = I.win;
    var w = H.addEvent,
        v = H.createElement,
        f = H.css,
        d = H.defined,
        q = H.discardElement,
        k = H.find,
        l = H.fireEvent,
        N = H.isNumber,
        u = H.merge,
        n = H.pick,
        J = H.relativeLength,
        E = H.stableSort,
        m = H.syncTimeout;
    H = H.wrap;

    var c = function () {
      function c(a, c) {
        this.allItems = [];
        this.contentGroup = this.box = void 0;
        this.display = !1;
        this.group = void 0;
        this.offsetWidth = this.maxLegendWidth = this.maxItemWidth = this.legendWidth = this.legendHeight = this.lastLineHeight = this.lastItemY = this.itemY = this.itemX = this.itemMarginTop = this.itemMarginBottom = this.itemHeight = this.initialItemY = 0;
        this.options = {};
        this.padding = 0;
        this.pages = [];
        this.proximate = !1;
        this.scrollGroup = void 0;
        this.widthOption = this.totalItemWidth = this.titleHeight = this.symbolWidth = this.symbolHeight = 0;
        this.chart = a;
        this.init(a, c);
      }

      c.prototype.init = function (a, c) {
        this.chart = a;
        this.setOptions(c);
        c.enabled && (this.render(), w(this.chart, "endResize", function () {
          this.legend.positionCheckboxes();
        }), this.proximate ? this.unchartrender = w(this.chart, "render", function () {
          this.legend.proximatePositions();
          this.legend.positionItems();
        }) : this.unchartrender && this.unchartrender());
      };

      c.prototype.setOptions = function (a) {
        var c = n(a.padding, 8);
        this.options = a;
        this.chart.styledMode || (this.itemStyle = a.itemStyle, this.itemHiddenStyle = u(this.itemStyle, a.itemHiddenStyle));
        this.itemMarginTop = a.itemMarginTop || 0;
        this.itemMarginBottom = a.itemMarginBottom || 0;
        this.padding = c;
        this.initialItemY = c - 5;
        this.symbolWidth = n(a.symbolWidth, 16);
        this.pages = [];
        this.proximate = "proximate" === a.layout && !this.chart.inverted;
        this.baseline = void 0;
      };

      c.prototype.update = function (a, c) {
        var d = this.chart;
        this.setOptions(u(!0, this.options, a));
        this.destroy();
        d.isDirtyLegend = d.isDirtyBox = !0;
        n(c, !0) && d.redraw();
        l(this, "afterUpdate");
      };

      c.prototype.colorizeItem = function (a, c) {
        a.legendGroup[c ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");

        if (!this.chart.styledMode) {
          var d = this.options,
              b = a.legendItem,
              e = a.legendLine,
              h = a.legendSymbol,
              g = this.itemHiddenStyle.color;
          d = c ? d.itemStyle.color : g;
          var f = c ? a.color || g : g,
              m = a.options && a.options.marker,
              k = {
            fill: f
          };
          b && b.css({
            fill: d,
            color: d
          });
          e && e.attr({
            stroke: f
          });
          h && (m && h.isMarker && (k = a.pointAttribs(), c || (k.stroke = k.fill = g)), h.attr(k));
        }

        l(this, "afterColorizeItem", {
          item: a,
          visible: c
        });
      };

      c.prototype.positionItems = function () {
        this.allItems.forEach(this.positionItem, this);
        this.chart.isResizing || this.positionCheckboxes();
      };

      c.prototype.positionItem = function (a) {
        var c = this,
            b = this.options,
            e = b.symbolPadding,
            g = !b.rtl,
            f = a._legendItemPos;
        b = f[0];
        f = f[1];
        var k = a.checkbox,
            m = a.legendGroup;
        m && m.element && (e = {
          translateX: g ? b : this.legendWidth - b - 2 * e - 4,
          translateY: f
        }, g = function g() {
          l(c, "afterPositionItem", {
            item: a
          });
        }, d(m.translateY) ? m.animate(e, void 0, g) : (m.attr(e), g()));
        k && (k.x = b, k.y = f);
      };

      c.prototype.destroyItem = function (a) {
        var c = a.checkbox;
        ["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach(function (c) {
          a[c] && (a[c] = a[c].destroy());
        });
        c && q(a.checkbox);
      };

      c.prototype.destroy = function () {
        function a(a) {
          this[a] && (this[a] = this[a].destroy());
        }

        this.getAllItems().forEach(function (c) {
          ["legendItem", "legendGroup"].forEach(a, c);
        });
        "clipRect up down pager nav box title group".split(" ").forEach(a, this);
        this.display = null;
      };

      c.prototype.positionCheckboxes = function () {
        var a = this.group && this.group.alignAttr,
            c = this.clipHeight || this.legendHeight,
            d = this.titleHeight;

        if (a) {
          var b = a.translateY;
          this.allItems.forEach(function (e) {
            var h = e.checkbox;

            if (h) {
              var g = b + d + h.y + (this.scrollOffset || 0) + 3;
              f(h, {
                left: a.translateX + e.checkboxOffset + h.x - 20 + "px",
                top: g + "px",
                display: this.proximate || g > b - 6 && g < b + c - 6 ? "" : "none"
              });
            }
          }, this);
        }
      };

      c.prototype.renderTitle = function () {
        var a = this.options,
            c = this.padding,
            d = a.title,
            b = 0;
        d.text && (this.title || (this.title = this.chart.renderer.label(d.text, c - 3, c - 4, null, null, null, a.useHTML, null, "legend-title").attr({
          zIndex: 1
        }), this.chart.styledMode || this.title.css(d.style), this.title.add(this.group)), d.width || this.title.css({
          width: this.maxLegendWidth + "px"
        }), a = this.title.getBBox(), b = a.height, this.offsetWidth = a.width, this.contentGroup.attr({
          translateY: b
        }));
        this.titleHeight = b;
      };

      c.prototype.setText = function (a) {
        var c = this.options;
        a.legendItem.attr({
          text: c.labelFormat ? B(c.labelFormat, a, this.chart) : c.labelFormatter.call(a)
        });
      };

      c.prototype.renderItem = function (a) {
        var c = this.chart,
            d = c.renderer,
            b = this.options,
            e = this.symbolWidth,
            g = b.symbolPadding || 0,
            f = this.itemStyle,
            l = this.itemHiddenStyle,
            k = "horizontal" === b.layout ? n(b.itemDistance, 20) : 0,
            m = !b.rtl,
            q = a.legendItem,
            t = !a.series,
            p = !t && a.series.drawLegendSymbol ? a.series : a,
            v = p.options,
            w = this.createCheckboxForItem && v && v.showCheckbox;
        v = e + g + k + (w ? 20 : 0);
        var E = b.useHTML,
            F = a.options.className;
        q || (a.legendGroup = d.g("legend-item").addClass("highcharts-" + p.type + "-series highcharts-color-" + a.colorIndex + (F ? " " + F : "") + (t ? " highcharts-series-" + a.index : "")).attr({
          zIndex: 1
        }).add(this.scrollGroup), a.legendItem = q = d.text("", m ? e + g : -g, this.baseline || 0, E), c.styledMode || q.css(u(a.visible ? f : l)), q.attr({
          align: m ? "left" : "right",
          zIndex: 2
        }).add(a.legendGroup), this.baseline || (this.fontMetrics = d.fontMetrics(c.styledMode ? 12 : f.fontSize, q), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, q.attr("y", this.baseline), this.symbolHeight = b.symbolHeight || this.fontMetrics.f, b.squareSymbol && (this.symbolWidth = n(b.symbolWidth, Math.max(this.symbolHeight, 16)), v = this.symbolWidth + g + k + (w ? 20 : 0), m && q.attr("x", this.symbolWidth + g))), p.drawLegendSymbol(this, a), this.setItemEvents && this.setItemEvents(a, q, E));
        w && !a.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(a);
        this.colorizeItem(a, a.visible);
        !c.styledMode && f.width || q.css({
          width: (b.itemWidth || this.widthOption || c.spacingBox.width) - v + "px"
        });
        this.setText(a);
        c = q.getBBox();
        a.itemWidth = a.checkboxOffset = b.itemWidth || a.legendItemWidth || c.width + v;
        this.maxItemWidth = Math.max(this.maxItemWidth, a.itemWidth);
        this.totalItemWidth += a.itemWidth;
        this.itemHeight = a.itemHeight = Math.round(a.legendItemHeight || c.height || this.symbolHeight);
      };

      c.prototype.layoutItem = function (a) {
        var c = this.options,
            d = this.padding,
            b = "horizontal" === c.layout,
            e = a.itemHeight,
            g = this.itemMarginBottom,
            f = this.itemMarginTop,
            l = b ? n(c.itemDistance, 20) : 0,
            m = this.maxLegendWidth;
        c = c.alignColumns && this.totalItemWidth > m ? this.maxItemWidth : a.itemWidth;
        b && this.itemX - d + c > m && (this.itemX = d, this.lastLineHeight && (this.itemY += f + this.lastLineHeight + g), this.lastLineHeight = 0);
        this.lastItemY = f + this.itemY + g;
        this.lastLineHeight = Math.max(e, this.lastLineHeight);
        a._legendItemPos = [this.itemX, this.itemY];
        b ? this.itemX += c : (this.itemY += f + e + g, this.lastLineHeight = e);
        this.offsetWidth = this.widthOption || Math.max((b ? this.itemX - d - (a.checkbox ? 0 : l) : c) + d, this.offsetWidth);
      };

      c.prototype.getAllItems = function () {
        var a = [];
        this.chart.series.forEach(function (c) {
          var b = c && c.options;
          c && n(b.showInLegend, d(b.linkedTo) ? !1 : void 0, !0) && (a = a.concat(c.legendItems || ("point" === b.legendType ? c.data : c)));
        });
        l(this, "afterGetAllItems", {
          allItems: a
        });
        return a;
      };

      c.prototype.getAlignment = function () {
        var a = this.options;
        return this.proximate ? a.align.charAt(0) + "tv" : a.floating ? "" : a.align.charAt(0) + a.verticalAlign.charAt(0) + a.layout.charAt(0);
      };

      c.prototype.adjustMargins = function (a, c) {
        var b = this.chart,
            e = this.options,
            h = this.getAlignment();
        h && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function (g, f) {
          g.test(h) && !d(a[f]) && (b[x[f]] = Math.max(b[x[f]], b.legend[(f + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][f] * e[f % 2 ? "x" : "y"] + n(e.margin, 12) + c[f] + (b.titleOffset[f] || 0)));
        });
      };

      c.prototype.proximatePositions = function () {
        var a = this.chart,
            c = [],
            d = "left" === this.options.align;
        this.allItems.forEach(function (b) {
          var e;
          var h = d;

          if (b.yAxis) {
            b.xAxis.options.reversed && (h = !h);
            b.points && (e = k(h ? b.points : b.points.slice(0).reverse(), function (a) {
              return N(a.plotY);
            }));
            h = this.itemMarginTop + b.legendItem.getBBox().height + this.itemMarginBottom;
            var g = b.yAxis.top - a.plotTop;
            b.visible ? (e = e ? e.plotY : b.yAxis.height, e += g - .3 * h) : e = g + b.yAxis.height;
            c.push({
              target: e,
              size: h,
              item: b
            });
          }
        }, this);
        I.distribute(c, a.plotHeight);
        c.forEach(function (c) {
          c.item._legendItemPos[1] = a.plotTop - a.spacing[0] + c.pos;
        });
      };

      c.prototype.render = function () {
        var a = this.chart,
            c = a.renderer,
            d = this.group,
            b = this.box,
            e = this.options,
            g = this.padding;
        this.itemX = g;
        this.itemY = this.initialItemY;
        this.lastItemY = this.offsetWidth = 0;
        this.widthOption = J(e.width, a.spacingBox.width - g);
        var f = a.spacingBox.width - 2 * g - e.x;
        -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (f /= 2);
        this.maxLegendWidth = this.widthOption || f;
        d || (this.group = d = c.g("legend").attr({
          zIndex: 7
        }).add(), this.contentGroup = c.g().attr({
          zIndex: 1
        }).add(d), this.scrollGroup = c.g().add(this.contentGroup));
        this.renderTitle();
        var m = this.getAllItems();
        E(m, function (a, c) {
          return (a.options && a.options.legendIndex || 0) - (c.options && c.options.legendIndex || 0);
        });
        e.reversed && m.reverse();
        this.allItems = m;
        this.display = f = !!m.length;
        this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0;
        m.forEach(this.renderItem, this);
        m.forEach(this.layoutItem, this);
        m = (this.widthOption || this.offsetWidth) + g;
        var k = this.lastItemY + this.lastLineHeight + this.titleHeight;
        k = this.handleOverflow(k);
        k += g;
        b || (this.box = b = c.rect().addClass("highcharts-legend-box").attr({
          r: e.borderRadius
        }).add(d), b.isNew = !0);
        a.styledMode || b.attr({
          stroke: e.borderColor,
          "stroke-width": e.borderWidth || 0,
          fill: e.backgroundColor || "none"
        }).shadow(e.shadow);
        0 < m && 0 < k && (b[b.isNew ? "attr" : "animate"](b.crisp.call({}, {
          x: 0,
          y: 0,
          width: m,
          height: k
        }, b.strokeWidth())), b.isNew = !1);
        b[f ? "show" : "hide"]();
        a.styledMode && "none" === d.getStyle("display") && (m = k = 0);
        this.legendWidth = m;
        this.legendHeight = k;
        f && this.align();
        this.proximate || this.positionItems();
        l(this, "afterRender");
      };

      c.prototype.align = function (a) {
        void 0 === a && (a = this.chart.spacingBox);
        var c = this.chart,
            d = this.options,
            b = a.y;
        /(lth|ct|rth)/.test(this.getAlignment()) && 0 < c.titleOffset[0] ? b += c.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < c.titleOffset[2] && (b -= c.titleOffset[2]);
        b !== a.y && (a = u(a, {
          y: b
        }));
        this.group.align(u(d, {
          width: this.legendWidth,
          height: this.legendHeight,
          verticalAlign: this.proximate ? "top" : d.verticalAlign
        }), !0, a);
      };

      c.prototype.handleOverflow = function (a) {
        var c = this,
            d = this.chart,
            b = d.renderer,
            e = this.options,
            g = e.y,
            f = this.padding;
        g = d.spacingBox.height + ("top" === e.verticalAlign ? -g : g) - f;

        var m = e.maxHeight,
            k,
            l = this.clipRect,
            q = e.navigation,
            t = n(q.animation, !0),
            p = q.arrowSize || 12,
            u = this.nav,
            v = this.pages,
            w,
            F = this.allItems,
            S = function S(a) {
          "number" === typeof a ? l.attr({
            height: a
          }) : l && (c.clipRect = l.destroy(), c.contentGroup.clip());
          c.contentGroup.div && (c.contentGroup.div.style.clip = a ? "rect(" + f + "px,9999px," + (f + a) + "px,0)" : "auto");
        },
            K = function K(a) {
          c[a] = b.circle(0, 0, 1.3 * p).translate(p / 2, p / 2).add(u);
          d.styledMode || c[a].attr("fill", "rgba(0,0,0,0.0001)");
          return c[a];
        };

        "horizontal" !== e.layout || "middle" === e.verticalAlign || e.floating || (g /= 2);
        m && (g = Math.min(g, m));
        v.length = 0;
        a && 0 < g && a > g && !1 !== q.enabled ? (this.clipHeight = k = Math.max(g - 20 - this.titleHeight - f, 0), this.currentPage = n(this.currentPage, 1), this.fullHeight = a, F.forEach(function (a, c) {
          var d = a._legendItemPos[1],
              b = Math.round(a.legendItem.getBBox().height),
              e = v.length;
          if (!e || d - v[e - 1] > k && (w || d) !== v[e - 1]) v.push(w || d), e++;
          a.pageIx = e - 1;
          w && (F[c - 1].pageIx = e - 1);
          c === F.length - 1 && d + b - v[e - 1] > k && d !== w && (v.push(d), a.pageIx = e);
          d !== w && (w = d);
        }), l || (l = c.clipRect = b.clipRect(0, f, 9999, 0), c.contentGroup.clip(l)), S(k), u || (this.nav = u = b.g().attr({
          zIndex: 1
        }).add(this.group), this.up = b.symbol("triangle", 0, 0, p, p).add(u), K("upTracker").on("click", function () {
          c.scroll(-1, t);
        }), this.pager = b.text("", 15, 10).addClass("highcharts-legend-navigation"), d.styledMode || this.pager.css(q.style), this.pager.add(u), this.down = b.symbol("triangle-down", 0, 0, p, p).add(u), K("downTracker").on("click", function () {
          c.scroll(1, t);
        })), c.scroll(0), a = g) : u && (S(), this.nav = u.destroy(), this.scrollGroup.attr({
          translateY: 1
        }), this.clipHeight = 0);
        return a;
      };

      c.prototype.scroll = function (a, c) {
        var d = this,
            b = this.chart,
            e = this.pages,
            h = e.length,
            g = this.currentPage + a;
        a = this.clipHeight;
        var f = this.options.navigation,
            k = this.pager,
            q = this.padding;
        g > h && (g = h);
        0 < g && ("undefined" !== typeof c && C(c, b), this.nav.attr({
          translateX: q,
          translateY: a + this.padding + 7 + this.titleHeight,
          visibility: "visible"
        }), [this.up, this.upTracker].forEach(function (a) {
          a.attr({
            "class": 1 === g ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
          });
        }), k.attr({
          text: g + "/" + h
        }), [this.down, this.downTracker].forEach(function (a) {
          a.attr({
            x: 18 + this.pager.getBBox().width,
            "class": g === h ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
          });
        }, this), b.styledMode || (this.up.attr({
          fill: 1 === g ? f.inactiveColor : f.activeColor
        }), this.upTracker.css({
          cursor: 1 === g ? "default" : "pointer"
        }), this.down.attr({
          fill: g === h ? f.inactiveColor : f.activeColor
        }), this.downTracker.css({
          cursor: g === h ? "default" : "pointer"
        })), this.scrollOffset = -e[g - 1] + this.initialItemY, this.scrollGroup.animate({
          translateY: this.scrollOffset
        }), this.currentPage = g, this.positionCheckboxes(), c = D(n(c, b.renderer.globalAnimation, !0)), m(function () {
          l(d, "afterScroll", {
            currentPage: g
          });
        }, c.duration));
      };

      c.prototype.setItemEvents = function (a, c, d) {
        var b = this,
            e = b.chart.renderer.boxWrapper,
            h = a instanceof z,
            g = "highcharts-legend-" + (h ? "point" : "series") + "-active",
            f = b.chart.styledMode;
        (d ? [c, a.legendSymbol] : [a.legendGroup]).forEach(function (d) {
          if (d) d.on("mouseover", function () {
            a.visible && b.allItems.forEach(function (c) {
              a !== c && c.setState("inactive", !h);
            });
            a.setState("hover");
            a.visible && e.addClass(g);
            f || c.css(b.options.itemHoverStyle);
          }).on("mouseout", function () {
            b.chart.styledMode || c.css(u(a.visible ? b.itemStyle : b.itemHiddenStyle));
            b.allItems.forEach(function (c) {
              a !== c && c.setState("", !h);
            });
            e.removeClass(g);
            a.setState();
          }).on("click", function (c) {
            var d = function d() {
              a.setVisible && a.setVisible();
              b.allItems.forEach(function (c) {
                a !== c && c.setState(a.visible ? "inactive" : "", !h);
              });
            };

            e.removeClass(g);
            c = {
              browserEvent: c
            };
            a.firePointEvent ? a.firePointEvent("legendItemClick", c, d) : l(a, "legendItemClick", c, d);
          });
        });
      };

      c.prototype.createCheckboxForItem = function (a) {
        a.checkbox = v("input", {
          type: "checkbox",
          className: "highcharts-legend-checkbox",
          checked: a.selected,
          defaultChecked: a.selected
        }, this.options.itemCheckboxStyle, this.chart.container);
        w(a.checkbox, "click", function (c) {
          l(a.series || a, "checkboxClick", {
            checked: c.target.checked,
            item: a
          }, function () {
            a.select();
          });
        });
      };

      return c;
    }();

    (/Trident\/7\.0/.test(b.navigator && b.navigator.userAgent) || e) && H(c.prototype, "positionItem", function (c, a) {
      var d = this,
          b = function b() {
        a._legendItemPos && c.call(d, a);
      };

      b();
      d.bubbleLegend || setTimeout(b);
    });
    I.Legend = c;
    return I.Legend;
  });
  O(e, "Core/Series/SeriesRegistry.js", [e["Core/Globals.js"], e["Core/Options.js"], e["Core/Series/Point.js"], e["Core/Utilities.js"]], function (e, b, I, z) {
    var D = b.defaultOptions,
        G = z.error,
        C = z.extendClass,
        B = z.merge,
        x;

    (function (b) {
      function v(e, d) {
        var f = D.plotOptions || {},
            k = d.defaultOptions;
        d.prototype.pointClass || (d.prototype.pointClass = I);
        d.prototype.type = e;
        k && (f[e] = k);
        b.seriesTypes[e] = d;
      }

      b.seriesTypes = e.seriesTypes;

      b.getSeries = function (e, d) {
        void 0 === d && (d = {});
        var f = e.options.chart;
        f = d.type || f.type || f.defaultSeriesType || "";
        var k = b.seriesTypes[f];
        b || G(17, !0, e, {
          missingModuleFor: f
        });
        f = new k();
        "function" === typeof f.init && f.init(e, d);
        return f;
      };

      b.registerSeriesType = v;

      b.seriesType = function (e, d, q, k, l) {
        var f = D.plotOptions || {};
        d = d || "";
        f[e] = B(f[d], q);
        v(e, C(b.seriesTypes[d] || function () {}, k));
        b.seriesTypes[e].prototype.type = e;
        l && (b.seriesTypes[e].prototype.pointClass = C(I, l));
        return b.seriesTypes[e];
      };
    })(x || (x = {}));

    e.seriesType = x.seriesType;
    return x;
  });
  O(e, "Core/Chart/Chart.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Axis/Axis.js"], e["Core/FormatUtilities.js"], e["Core/Globals.js"], e["Core/Legend.js"], e["Core/MSPointer.js"], e["Core/Options.js"], e["Core/Color/Palette.js"], e["Core/Pointer.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Time.js"], e["Core/Utilities.js"], e["Core/Renderer/HTML/AST.js"]], function (e, b, I, z, H, G, C, B, x, w, v, f, d) {
    var q = e.animate,
        k = e.animObject,
        l = e.setAnimation,
        D = I.numberFormat,
        u = z.charts,
        n = z.doc,
        J = z.win,
        E = C.defaultOptions,
        m = C.defaultTime,
        c = w.seriesTypes,
        g = f.addEvent,
        a = f.attr,
        h = f.cleanRecursively,
        r = f.createElement,
        A = f.css,
        y = f.defined,
        L = f.discardElement,
        P = f.erase,
        R = f.error,
        V = f.extend,
        Q = f.find,
        M = f.fireEvent,
        t = f.getStyle,
        p = f.isArray,
        O = f.isFunction,
        Z = f.isNumber,
        ea = f.isObject,
        F = f.isString,
        S = f.merge,
        K = f.objectEach,
        T = f.pick,
        X = f.pInt,
        U = f.relativeLength,
        fa = f.removeEvent,
        Y = f.splat,
        ba = f.syncTimeout,
        ha = f.uniqueKey,
        ca = z.marginNames,
        aa = function () {
      function e(a, c, d) {
        this.series = this.renderTo = this.renderer = this.pointer = this.pointCount = this.plotWidth = this.plotTop = this.plotLeft = this.plotHeight = this.plotBox = this.options = this.numberFormatter = this.margin = this.legend = this.labelCollectors = this.isResizing = this.index = this.container = this.colorCounter = this.clipBox = this.chartWidth = this.chartHeight = this.bounds = this.axisOffset = this.axes = void 0;
        this.sharedClips = {};
        this.yAxis = this.xAxis = this.userOptions = this.titleOffset = this.time = this.symbolCounter = this.spacingBox = this.spacing = void 0;
        this.getArgs(a, c, d);
      }

      e.prototype.getArgs = function (a, c, d) {
        F(a) || a.nodeName ? (this.renderTo = a, this.init(c, d)) : this.init(a, c);
      };

      e.prototype.init = function (a, c) {
        var d = a.plotOptions || {};
        M(this, "init", {
          args: arguments
        }, function () {
          var b = S(E, a),
              e = b.chart;
          K(b.plotOptions, function (a, c) {
            ea(a) && (a.tooltip = d[c] && S(d[c].tooltip) || void 0);
          });
          b.tooltip.userOptions = a.chart && a.chart.forExport && a.tooltip.userOptions || a.tooltip;
          this.userOptions = a;
          var h = e.events;
          this.margin = [];
          this.spacing = [];
          this.bounds = {
            h: {},
            v: {}
          };
          this.labelCollectors = [];
          this.callback = c;
          this.isResizing = 0;
          this.options = b;
          this.axes = [];
          this.series = [];
          this.time = a.time && Object.keys(a.time).length ? new v(a.time) : z.time;
          this.numberFormatter = e.numberFormatter || D;
          this.styledMode = e.styledMode;
          this.hasCartesianSeries = e.showAxes;
          var f = this;
          f.index = u.length;
          u.push(f);
          z.chartCount++;
          h && K(h, function (a, c) {
            O(a) && g(f, c, a);
          });
          f.xAxis = [];
          f.yAxis = [];
          f.pointCount = f.colorCounter = f.symbolCounter = 0;
          M(f, "afterInit");
          f.firstRender();
        });
      };

      e.prototype.initSeries = function (a) {
        var d = this.options.chart;
        d = a.type || d.type || d.defaultSeriesType;
        var b = c[d];
        b || R(17, !0, this, {
          missingModuleFor: d
        });
        d = new b();
        "function" === typeof d.init && d.init(this, a);
        return d;
      };

      e.prototype.setSeriesData = function () {
        this.getSeriesOrderByLinks().forEach(function (a) {
          a.points || a.data || !a.enabledDataSorting || a.setData(a.options.data, !1);
        });
      };

      e.prototype.getSeriesOrderByLinks = function () {
        return this.series.concat().sort(function (a, c) {
          return a.linkedSeries.length || c.linkedSeries.length ? c.linkedSeries.length - a.linkedSeries.length : 0;
        });
      };

      e.prototype.orderSeries = function (a) {
        var c = this.series;

        for (a = a || 0; a < c.length; a++) {
          c[a] && (c[a].index = a, c[a].name = c[a].getName());
        }
      };

      e.prototype.isInsidePlot = function (a, c, d) {
        void 0 === d && (d = {});
        var b = this.inverted,
            e = this.plotBox,
            h = this.plotLeft,
            g = this.plotTop,
            f = this.scrollablePlotBox,
            m = this.scrollingContainer;
        m = void 0 === m ? {
          scrollLeft: 0,
          scrollTop: 0
        } : m;
        var k = m.scrollLeft;
        m = m.scrollTop;
        var l = d.series;
        e = d.visiblePlotOnly && f || e;
        f = d.inverted ? c : a;
        c = d.inverted ? a : c;
        a = {
          x: f,
          y: c,
          isInsidePlot: !0
        };

        if (!d.ignoreX) {
          var F = l && (b ? l.yAxis : l.xAxis) || {
            pos: h,
            len: Infinity
          };
          f = d.paneCoordinates ? F.pos + f : h + f;
          f >= Math.max(k + h, F.pos) && f <= Math.min(k + h + e.width, F.pos + F.len) || (a.isInsidePlot = !1);
        }

        !d.ignoreY && a.isInsidePlot && (b = l && (b ? l.xAxis : l.yAxis) || {
          pos: g,
          len: Infinity
        }, d = d.paneCoordinates ? b.pos + c : g + c, d >= Math.max(m + g, b.pos) && d <= Math.min(m + g + e.height, b.pos + b.len) || (a.isInsidePlot = !1));
        M(this, "afterIsInsidePlot", a);
        return a.isInsidePlot;
      };

      e.prototype.redraw = function (a) {
        M(this, "beforeRedraw");
        var c = this.hasCartesianSeries ? this.axes : this.colorAxis || [],
            d = this.series,
            b = this.pointer,
            e = this.legend,
            h = this.userOptions.legend,
            g = this.isDirtyLegend,
            f = this.isDirtyBox,
            m = this.renderer,
            k = m.isHidden(),
            F = [];
        this.setResponsive && this.setResponsive(!1);
        l(this.hasRendered ? a : !1, this);
        k && this.temporaryDisplay();
        this.layOutTitles();

        for (a = d.length; a--;) {
          var n = d[a];

          if (n.options.stacking || n.options.centerInCategory) {
            var r = !0;

            if (n.isDirty) {
              var K = !0;
              break;
            }
          }
        }

        if (K) for (a = d.length; a--;) {
          n = d[a], n.options.stacking && (n.isDirty = !0);
        }
        d.forEach(function (a) {
          a.isDirty && ("point" === a.options.legendType ? ("function" === typeof a.updateTotals && a.updateTotals(), g = !0) : h && (h.labelFormatter || h.labelFormat) && (g = !0));
          a.isDirtyData && M(a, "updatedData");
        });
        g && e && e.options.enabled && (e.render(), this.isDirtyLegend = !1);
        r && this.getStacks();
        c.forEach(function (a) {
          a.updateNames();
          a.setScale();
        });
        this.getMargins();
        c.forEach(function (a) {
          a.isDirty && (f = !0);
        });
        c.forEach(function (a) {
          var c = a.min + "," + a.max;
          a.extKey !== c && (a.extKey = c, F.push(function () {
            M(a, "afterSetExtremes", V(a.eventArgs, a.getExtremes()));
            delete a.eventArgs;
          }));
          (f || r) && a.redraw();
        });
        f && this.drawChartBox();
        M(this, "predraw");
        d.forEach(function (a) {
          (f || a.isDirty) && a.visible && a.redraw();
          a.isDirtyData = !1;
        });
        b && b.reset(!0);
        m.draw();
        M(this, "redraw");
        M(this, "render");
        k && this.temporaryDisplay(!0);
        F.forEach(function (a) {
          a.call();
        });
      };

      e.prototype.get = function (a) {
        function c(c) {
          return c.id === a || c.options && c.options.id === a;
        }

        var d = this.series,
            b;
        var e = Q(this.axes, c) || Q(this.series, c);

        for (b = 0; !e && b < d.length; b++) {
          e = Q(d[b].points || [], c);
        }

        return e;
      };

      e.prototype.getAxes = function () {
        var a = this,
            c = this.options,
            d = c.xAxis = Y(c.xAxis || {});
        c = c.yAxis = Y(c.yAxis || {});
        M(this, "getAxes");
        d.forEach(function (a, c) {
          a.index = c;
          a.isX = !0;
        });
        c.forEach(function (a, c) {
          a.index = c;
        });
        d.concat(c).forEach(function (c) {
          new b(a, c);
        });
        M(this, "afterGetAxes");
      };

      e.prototype.getSelectedPoints = function () {
        var a = [];
        this.series.forEach(function (c) {
          a = a.concat(c.getPointsCollection().filter(function (a) {
            return T(a.selectedStaging, a.selected);
          }));
        });
        return a;
      };

      e.prototype.getSelectedSeries = function () {
        return this.series.filter(function (a) {
          return a.selected;
        });
      };

      e.prototype.setTitle = function (a, c, d) {
        this.applyDescription("title", a);
        this.applyDescription("subtitle", c);
        this.applyDescription("caption", void 0);
        this.layOutTitles(d);
      };

      e.prototype.applyDescription = function (a, c) {
        var d = this,
            b = "title" === a ? {
          color: B.neutralColor80,
          fontSize: this.options.isStock ? "16px" : "18px"
        } : {
          color: B.neutralColor60
        };
        b = this.options[a] = S(!this.styledMode && {
          style: b
        }, this.options[a], c);
        var e = this[a];
        e && c && (this[a] = e = e.destroy());
        b && !e && (e = this.renderer.text(b.text, 0, 0, b.useHTML).attr({
          align: b.align,
          "class": "highcharts-" + a,
          zIndex: b.zIndex || 4
        }).add(), e.update = function (c) {
          d[{
            title: "setTitle",
            subtitle: "setSubtitle",
            caption: "setCaption"
          }[a]](c);
        }, this.styledMode || e.css(b.style), this[a] = e);
      };

      e.prototype.layOutTitles = function (a) {
        var c = [0, 0, 0],
            d = this.renderer,
            b = this.spacingBox;
        ["title", "subtitle", "caption"].forEach(function (a) {
          var e = this[a],
              h = this.options[a],
              g = h.verticalAlign || "top";
          a = "title" === a ? -3 : "top" === g ? c[0] + 2 : 0;

          if (e) {
            if (!this.styledMode) var f = h.style.fontSize;
            f = d.fontMetrics(f, e).b;
            e.css({
              width: (h.width || b.width + (h.widthAdjust || 0)) + "px"
            });
            var m = Math.round(e.getBBox(h.useHTML).height);
            e.align(V({
              y: "bottom" === g ? f : a + f,
              height: m
            }, h), !1, "spacingBox");
            h.floating || ("top" === g ? c[0] = Math.ceil(c[0] + m) : "bottom" === g && (c[2] = Math.ceil(c[2] + m)));
          }
        }, this);
        c[0] && "top" === (this.options.title.verticalAlign || "top") && (c[0] += this.options.title.margin);
        c[2] && "bottom" === this.options.caption.verticalAlign && (c[2] += this.options.caption.margin);
        var e = !this.titleOffset || this.titleOffset.join(",") !== c.join(",");
        this.titleOffset = c;
        M(this, "afterLayOutTitles");
        !this.isDirtyBox && e && (this.isDirtyBox = this.isDirtyLegend = e, this.hasRendered && T(a, !0) && this.isDirtyBox && this.redraw());
      };

      e.prototype.getChartSize = function () {
        var a = this.options.chart,
            c = a.width;
        a = a.height;
        var d = this.renderTo;
        y(c) || (this.containerWidth = t(d, "width"));
        y(a) || (this.containerHeight = t(d, "height"));
        this.chartWidth = Math.max(0, c || this.containerWidth || 600);
        this.chartHeight = Math.max(0, U(a, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400));
      };

      e.prototype.temporaryDisplay = function (a) {
        var c = this.renderTo;
        if (a) for (; c && c.style;) {
          c.hcOrigStyle && (A(c, c.hcOrigStyle), delete c.hcOrigStyle), c.hcOrigDetached && (n.body.removeChild(c), c.hcOrigDetached = !1), c = c.parentNode;
        } else for (; c && c.style;) {
          n.body.contains(c) || c.parentNode || (c.hcOrigDetached = !0, n.body.appendChild(c));
          if ("none" === t(c, "display", !1) || c.hcOricDetached) c.hcOrigStyle = {
            display: c.style.display,
            height: c.style.height,
            overflow: c.style.overflow
          }, a = {
            display: "block",
            overflow: "hidden"
          }, c !== this.renderTo && (a.height = 0), A(c, a), c.offsetWidth || c.style.setProperty("display", "block", "important");
          c = c.parentNode;
          if (c === n.body) break;
        }
      };

      e.prototype.setClassName = function (a) {
        this.container.className = "highcharts-container " + (a || "");
      };

      e.prototype.getContainer = function () {
        var c = this.options,
            d = c.chart;
        var b = this.renderTo;
        var e = ha(),
            h,
            g;
        b || (this.renderTo = b = d.renderTo);
        F(b) && (this.renderTo = b = n.getElementById(b));
        b || R(13, !0, this);
        var f = X(a(b, "data-highcharts-chart"));
        Z(f) && u[f] && u[f].hasRendered && u[f].destroy();
        a(b, "data-highcharts-chart", this.index);
        b.innerHTML = "";
        d.skipClone || b.offsetWidth || this.temporaryDisplay();
        this.getChartSize();
        f = this.chartWidth;
        var m = this.chartHeight;
        A(b, {
          overflow: "hidden"
        });
        this.styledMode || (h = V({
          position: "relative",
          overflow: "hidden",
          width: f + "px",
          height: m + "px",
          textAlign: "left",
          lineHeight: "normal",
          zIndex: 0,
          "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
          userSelect: "none",
          "touch-action": "manipulation",
          outline: "none"
        }, d.style || {}));
        this.container = b = r("div", {
          id: e
        }, h, b);
        this._cursor = b.style.cursor;
        this.renderer = new (z[d.renderer] || z.Renderer)(b, f, m, null, d.forExport, c.exporting && c.exporting.allowHTML, this.styledMode);
        l(void 0, this);
        this.setClassName(d.className);
        if (this.styledMode) for (g in c.defs) {
          this.renderer.definition(c.defs[g]);
        } else this.renderer.setStyle(d.style);
        this.renderer.chartIndex = this.index;
        M(this, "afterGetContainer");
      };

      e.prototype.getMargins = function (a) {
        var c = this.spacing,
            d = this.margin,
            b = this.titleOffset;
        this.resetMargins();
        b[0] && !y(d[0]) && (this.plotTop = Math.max(this.plotTop, b[0] + c[0]));
        b[2] && !y(d[2]) && (this.marginBottom = Math.max(this.marginBottom, b[2] + c[2]));
        this.legend && this.legend.display && this.legend.adjustMargins(d, c);
        M(this, "getMargins");
        a || this.getAxisMargins();
      };

      e.prototype.getAxisMargins = function () {
        var a = this,
            c = a.axisOffset = [0, 0, 0, 0],
            d = a.colorAxis,
            b = a.margin,
            e = function e(a) {
          a.forEach(function (a) {
            a.visible && a.getOffset();
          });
        };

        a.hasCartesianSeries ? e(a.axes) : d && d.length && e(d);
        ca.forEach(function (d, e) {
          y(b[e]) || (a[d] += c[e]);
        });
        a.setChartSize();
      };

      e.prototype.reflow = function (a) {
        var c = this,
            d = c.options.chart,
            b = c.renderTo,
            e = y(d.width) && y(d.height),
            h = d.width || t(b, "width");
        d = d.height || t(b, "height");
        b = a ? a.target : J;
        delete c.pointer.chartPosition;

        if (!e && !c.isPrinting && h && d && (b === J || b === n)) {
          if (h !== c.containerWidth || d !== c.containerHeight) f.clearTimeout(c.reflowTimeout), c.reflowTimeout = ba(function () {
            c.container && c.setSize(void 0, void 0, !1);
          }, a ? 100 : 0);
          c.containerWidth = h;
          c.containerHeight = d;
        }
      };

      e.prototype.setReflow = function (a) {
        var c = this;
        !1 === a || this.unbindReflow ? !1 === a && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = g(J, "resize", function (a) {
          c.options && c.reflow(a);
        }), g(this, "destroy", this.unbindReflow));
      };

      e.prototype.setSize = function (a, c, d) {
        var b = this,
            e = b.renderer;
        b.isResizing += 1;
        l(d, b);
        d = e.globalAnimation;
        b.oldChartHeight = b.chartHeight;
        b.oldChartWidth = b.chartWidth;
        "undefined" !== typeof a && (b.options.chart.width = a);
        "undefined" !== typeof c && (b.options.chart.height = c);
        b.getChartSize();
        b.styledMode || (d ? q : A)(b.container, {
          width: b.chartWidth + "px",
          height: b.chartHeight + "px"
        }, d);
        b.setChartSize(!0);
        e.setSize(b.chartWidth, b.chartHeight, d);
        b.axes.forEach(function (a) {
          a.isDirty = !0;
          a.setScale();
        });
        b.isDirtyLegend = !0;
        b.isDirtyBox = !0;
        b.layOutTitles();
        b.getMargins();
        b.redraw(d);
        b.oldChartHeight = null;
        M(b, "resize");
        ba(function () {
          b && M(b, "endResize", null, function () {
            --b.isResizing;
          });
        }, k(d).duration);
      };

      e.prototype.setChartSize = function (a) {
        var c = this.inverted,
            d = this.renderer,
            b = this.chartWidth,
            e = this.chartHeight,
            h = this.options.chart,
            g = this.spacing,
            f = this.clipOffset,
            m,
            l,
            k,
            F;
        this.plotLeft = m = Math.round(this.plotLeft);
        this.plotTop = l = Math.round(this.plotTop);
        this.plotWidth = k = Math.max(0, Math.round(b - m - this.marginRight));
        this.plotHeight = F = Math.max(0, Math.round(e - l - this.marginBottom));
        this.plotSizeX = c ? F : k;
        this.plotSizeY = c ? k : F;
        this.plotBorderWidth = h.plotBorderWidth || 0;
        this.spacingBox = d.spacingBox = {
          x: g[3],
          y: g[0],
          width: b - g[3] - g[1],
          height: e - g[0] - g[2]
        };
        this.plotBox = d.plotBox = {
          x: m,
          y: l,
          width: k,
          height: F
        };
        e = 2 * Math.floor(this.plotBorderWidth / 2);
        c = Math.ceil(Math.max(e, f[3]) / 2);
        b = Math.ceil(Math.max(e, f[0]) / 2);
        this.clipBox = {
          x: c,
          y: b,
          width: Math.floor(this.plotSizeX - Math.max(e, f[1]) / 2 - c),
          height: Math.max(0, Math.floor(this.plotSizeY - Math.max(e, f[2]) / 2 - b))
        };
        a || (this.axes.forEach(function (a) {
          a.setAxisSize();
          a.setAxisTranslation();
        }), d.alignElements());
        M(this, "afterSetChartSize", {
          skipAxes: a
        });
      };

      e.prototype.resetMargins = function () {
        M(this, "resetMargins");
        var a = this,
            c = a.options.chart;
        ["margin", "spacing"].forEach(function (d) {
          var b = c[d],
              e = ea(b) ? b : [b, b, b, b];
          ["Top", "Right", "Bottom", "Left"].forEach(function (b, h) {
            a[d][h] = T(c[d + b], e[h]);
          });
        });
        ca.forEach(function (c, d) {
          a[c] = T(a.margin[d], a.spacing[d]);
        });
        a.axisOffset = [0, 0, 0, 0];
        a.clipOffset = [0, 0, 0, 0];
      };

      e.prototype.drawChartBox = function () {
        var a = this.options.chart,
            c = this.renderer,
            d = this.chartWidth,
            b = this.chartHeight,
            e = this.chartBackground,
            h = this.plotBackground,
            g = this.plotBorder,
            f = this.styledMode,
            m = this.plotBGImage,
            k = a.backgroundColor,
            l = a.plotBackgroundColor,
            F = a.plotBackgroundImage,
            n,
            r = this.plotLeft,
            K = this.plotTop,
            q = this.plotWidth,
            p = this.plotHeight,
            u = this.plotBox,
            v = this.clipRect,
            t = this.clipBox,
            w = "animate";
        e || (this.chartBackground = e = c.rect().addClass("highcharts-background").add(), w = "attr");
        if (f) var y = n = e.strokeWidth();else {
          y = a.borderWidth || 0;
          n = y + (a.shadow ? 8 : 0);
          k = {
            fill: k || "none"
          };
          if (y || e["stroke-width"]) k.stroke = a.borderColor, k["stroke-width"] = y;
          e.attr(k).shadow(a.shadow);
        }
        e[w]({
          x: n / 2,
          y: n / 2,
          width: d - n - y % 2,
          height: b - n - y % 2,
          r: a.borderRadius
        });
        w = "animate";
        h || (w = "attr", this.plotBackground = h = c.rect().addClass("highcharts-plot-background").add());
        h[w](u);
        f || (h.attr({
          fill: l || "none"
        }).shadow(a.plotShadow), F && (m ? (F !== m.attr("href") && m.attr("href", F), m.animate(u)) : this.plotBGImage = c.image(F, r, K, q, p).add()));
        v ? v.animate({
          width: t.width,
          height: t.height
        }) : this.clipRect = c.clipRect(t);
        w = "animate";
        g || (w = "attr", this.plotBorder = g = c.rect().addClass("highcharts-plot-border").attr({
          zIndex: 1
        }).add());
        f || g.attr({
          stroke: a.plotBorderColor,
          "stroke-width": a.plotBorderWidth || 0,
          fill: "none"
        });
        g[w](g.crisp({
          x: r,
          y: K,
          width: q,
          height: p
        }, -g.strokeWidth()));
        this.isDirtyBox = !1;
        M(this, "afterDrawChartBox");
      };

      e.prototype.propFromSeries = function () {
        var a = this,
            d = a.options.chart,
            b,
            e = a.options.series,
            h,
            g;
        ["inverted", "angular", "polar"].forEach(function (f) {
          b = c[d.type || d.defaultSeriesType];
          g = d[f] || b && b.prototype[f];

          for (h = e && e.length; !g && h--;) {
            (b = c[e[h].type]) && b.prototype[f] && (g = !0);
          }

          a[f] = g;
        });
      };

      e.prototype.linkSeries = function () {
        var a = this,
            c = a.series;
        c.forEach(function (a) {
          a.linkedSeries.length = 0;
        });
        c.forEach(function (c) {
          var d = c.options.linkedTo;
          F(d) && (d = ":previous" === d ? a.series[c.index - 1] : a.get(d)) && d.linkedParent !== c && (d.linkedSeries.push(c), c.linkedParent = d, d.enabledDataSorting && c.setDataSortingOptions(), c.visible = T(c.options.visible, d.options.visible, c.visible));
        });
        M(this, "afterLinkSeries");
      };

      e.prototype.renderSeries = function () {
        this.series.forEach(function (a) {
          a.translate();
          a.render();
        });
      };

      e.prototype.renderLabels = function () {
        var a = this,
            c = a.options.labels;
        c.items && c.items.forEach(function (d) {
          var b = V(c.style, d.style),
              e = X(b.left) + a.plotLeft,
              h = X(b.top) + a.plotTop + 12;
          delete b.left;
          delete b.top;
          a.renderer.text(d.html, e, h).attr({
            zIndex: 2
          }).css(b).add();
        });
      };

      e.prototype.render = function () {
        var a = this.axes,
            c = this.colorAxis,
            d = this.renderer,
            b = this.options,
            e = 0,
            h = function h(a) {
          a.forEach(function (a) {
            a.visible && a.render();
          });
        };

        this.setTitle();
        this.legend = new H(this, b.legend);
        this.getStacks && this.getStacks();
        this.getMargins(!0);
        this.setChartSize();
        b = this.plotWidth;
        a.some(function (a) {
          if (a.horiz && a.visible && a.options.labels.enabled && a.series.length) return e = 21, !0;
        });
        var g = this.plotHeight = Math.max(this.plotHeight - e, 0);
        a.forEach(function (a) {
          a.setScale();
        });
        this.getAxisMargins();
        var f = 1.1 < b / this.plotWidth;
        var m = 1.05 < g / this.plotHeight;
        if (f || m) a.forEach(function (a) {
          (a.horiz && f || !a.horiz && m) && a.setTickInterval(!0);
        }), this.getMargins();
        this.drawChartBox();
        this.hasCartesianSeries ? h(a) : c && c.length && h(c);
        this.seriesGroup || (this.seriesGroup = d.g("series-group").attr({
          zIndex: 3
        }).add());
        this.renderSeries();
        this.renderLabels();
        this.addCredits();
        this.setResponsive && this.setResponsive();
        this.hasRendered = !0;
      };

      e.prototype.addCredits = function (a) {
        var c = this,
            d = S(!0, this.options.credits, a);
        d.enabled && !this.credits && (this.credits = this.renderer.text(d.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function () {
          d.href && (J.location.href = d.href);
        }).attr({
          align: d.position.align,
          zIndex: 8
        }), c.styledMode || this.credits.css(d.style), this.credits.add().align(d.position), this.credits.update = function (a) {
          c.credits = c.credits.destroy();
          c.addCredits(a);
        });
      };

      e.prototype.destroy = function () {
        var a = this,
            c = a.axes,
            d = a.series,
            b = a.container,
            e,
            h = b && b.parentNode;
        M(a, "destroy");
        a.renderer.forExport ? P(u, a) : u[a.index] = void 0;
        z.chartCount--;
        a.renderTo.removeAttribute("data-highcharts-chart");
        fa(a);

        for (e = c.length; e--;) {
          c[e] = c[e].destroy();
        }

        this.scroller && this.scroller.destroy && this.scroller.destroy();

        for (e = d.length; e--;) {
          d[e] = d[e].destroy();
        }

        "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function (c) {
          var d = a[c];
          d && d.destroy && (a[c] = d.destroy());
        });
        b && (b.innerHTML = "", fa(b), h && L(b));
        K(a, function (c, d) {
          delete a[d];
        });
      };

      e.prototype.firstRender = function () {
        var a = this,
            c = a.options;

        if (!a.isReadyToRender || a.isReadyToRender()) {
          a.getContainer();
          a.resetMargins();
          a.setChartSize();
          a.propFromSeries();
          a.getAxes();
          (p(c.series) ? c.series : []).forEach(function (c) {
            a.initSeries(c);
          });
          a.linkSeries();
          a.setSeriesData();
          M(a, "beforeRender");
          x && (a.pointer = z.hasTouch || !J.PointerEvent && !J.MSPointerEvent ? new x(a, c) : new G(a, c));
          a.render();
          a.pointer.getChartPosition();
          if (!a.renderer.imgCount && !a.hasLoaded) a.onload();
          a.temporaryDisplay(!0);
        }
      };

      e.prototype.onload = function () {
        this.callbacks.concat([this.callback]).forEach(function (a) {
          a && "undefined" !== typeof this.index && a.apply(this, [this]);
        }, this);
        M(this, "load");
        M(this, "render");
        y(this.index) && this.setReflow(this.options.chart.reflow);
        this.hasLoaded = !0;
      };

      e.prototype.addSeries = function (a, c, d) {
        var b,
            e = this;
        a && (c = T(c, !0), M(e, "addSeries", {
          options: a
        }, function () {
          b = e.initSeries(a);
          e.isDirtyLegend = !0;
          e.linkSeries();
          b.enabledDataSorting && b.setData(a.data, !1);
          M(e, "afterAddSeries", {
            series: b
          });
          c && e.redraw(d);
        }));
        return b;
      };

      e.prototype.addAxis = function (a, c, d, b) {
        return this.createAxis(c ? "xAxis" : "yAxis", {
          axis: a,
          redraw: d,
          animation: b
        });
      };

      e.prototype.addColorAxis = function (a, c, d) {
        return this.createAxis("colorAxis", {
          axis: a,
          redraw: c,
          animation: d
        });
      };

      e.prototype.createAxis = function (a, c) {
        var d = "colorAxis" === a,
            e = c.redraw,
            h = c.animation;
        a = S(c.axis, {
          index: this[a].length,
          isX: "xAxis" === a
        });
        a = d ? new z.ColorAxis(this, a) : new b(this, a);
        d && (this.isDirtyLegend = !0, this.axes.forEach(function (a) {
          a.series = [];
        }), this.series.forEach(function (a) {
          a.bindAxes();
          a.isDirtyData = !0;
        }));
        T(e, !0) && this.redraw(h);
        return a;
      };

      e.prototype.showLoading = function (a) {
        var c = this,
            b = c.options,
            e = c.loadingDiv,
            h = c.loadingSpan,
            f = b.loading,
            m = function m() {
          e && A(e, {
            left: c.plotLeft + "px",
            top: c.plotTop + "px",
            width: c.plotWidth + "px",
            height: c.plotHeight + "px"
          });
        };

        e || (c.loadingDiv = e = r("div", {
          className: "highcharts-loading highcharts-loading-hidden"
        }, null, c.container));
        h || (c.loadingSpan = h = r("span", {
          className: "highcharts-loading-inner"
        }, null, e), g(c, "redraw", m));
        e.className = "highcharts-loading";
        d.setElementHTML(h, T(a, b.lang.loading, ""));
        c.styledMode || (A(e, V(f.style, {
          zIndex: 10
        })), A(h, f.labelStyle), c.loadingShown || (A(e, {
          opacity: 0,
          display: ""
        }), q(e, {
          opacity: f.style.opacity || .5
        }, {
          duration: f.showDuration || 0
        })));
        c.loadingShown = !0;
        m();
      };

      e.prototype.hideLoading = function () {
        var a = this.options,
            c = this.loadingDiv;
        c && (c.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || q(c, {
          opacity: 0
        }, {
          duration: a.loading.hideDuration || 100,
          complete: function complete() {
            A(c, {
              display: "none"
            });
          }
        }));
        this.loadingShown = !1;
      };

      e.prototype.update = function (a, c, d, b) {
        var e = this,
            g = {
          credits: "addCredits",
          title: "setTitle",
          subtitle: "setSubtitle",
          caption: "setCaption"
        },
            f,
            k,
            l,
            n = a.isResponsiveOptions,
            r = [];
        M(e, "update", {
          options: a
        });
        n || e.setResponsive(!1, !0);
        a = h(a, e.options);
        e.userOptions = S(e.userOptions, a);

        if (f = a.chart) {
          S(!0, e.options.chart, f);
          "className" in f && e.setClassName(f.className);
          "reflow" in f && e.setReflow(f.reflow);

          if ("inverted" in f || "polar" in f || "type" in f) {
            e.propFromSeries();
            var q = !0;
          }

          "alignTicks" in f && (q = !0);
          K(f, function (a, c) {
            -1 !== e.propsRequireUpdateSeries.indexOf("chart." + c) && (k = !0);
            -1 !== e.propsRequireDirtyBox.indexOf(c) && (e.isDirtyBox = !0);
            -1 !== e.propsRequireReflow.indexOf(c) && (n ? e.isDirtyBox = !0 : l = !0);
          });
          !e.styledMode && "style" in f && e.renderer.setStyle(f.style);
        }

        !e.styledMode && a.colors && (this.options.colors = a.colors);
        a.time && (this.time === m && (this.time = new v(a.time)), S(!0, e.options.time, a.time));
        K(a, function (c, d) {
          if (e[d] && "function" === typeof e[d].update) e[d].update(c, !1);else if ("function" === typeof e[g[d]]) e[g[d]](c);else "colors" !== d && -1 === e.collectionsWithUpdate.indexOf(d) && S(!0, e.options[d], a[d]);
          "chart" !== d && -1 !== e.propsRequireUpdateSeries.indexOf(d) && (k = !0);
        });
        this.collectionsWithUpdate.forEach(function (c) {
          if (a[c]) {
            var b = [];
            e[c].forEach(function (a, c) {
              a.options.isInternal || b.push(T(a.options.index, c));
            });
            Y(a[c]).forEach(function (a, h) {
              var g = y(a.id),
                  f;
              g && (f = e.get(a.id));
              !f && e[c] && (f = e[c][b ? b[h] : h]) && g && y(f.options.id) && (f = void 0);
              f && f.coll === c && (f.update(a, !1), d && (f.touched = !0));
              !f && d && e.collectionsWithInit[c] && (e.collectionsWithInit[c][0].apply(e, [a].concat(e.collectionsWithInit[c][1] || []).concat([!1])).touched = !0);
            });
            d && e[c].forEach(function (a) {
              a.touched || a.options.isInternal ? delete a.touched : r.push(a);
            });
          }
        });
        r.forEach(function (a) {
          a.chart && a.remove(!1);
        });
        q && e.axes.forEach(function (a) {
          a.update({}, !1);
        });
        k && e.getSeriesOrderByLinks().forEach(function (a) {
          a.chart && a.update({}, !1);
        }, this);
        q = f && f.width;
        f = f && f.height;
        F(f) && (f = U(f, q || e.chartWidth));
        l || Z(q) && q !== e.chartWidth || Z(f) && f !== e.chartHeight ? e.setSize(q, f, b) : T(c, !0) && e.redraw(b);
        M(e, "afterUpdate", {
          options: a,
          redraw: c,
          animation: b
        });
      };

      e.prototype.setSubtitle = function (a, c) {
        this.applyDescription("subtitle", a);
        this.layOutTitles(c);
      };

      e.prototype.setCaption = function (a, c) {
        this.applyDescription("caption", a);
        this.layOutTitles(c);
      };

      e.prototype.showResetZoom = function () {
        function a() {
          c.zoomOut();
        }

        var c = this,
            d = E.lang,
            b = c.options.chart.resetZoomButton,
            e = b.theme,
            h = e.states,
            g = "chart" === b.relativeTo || "spacingBox" === b.relativeTo ? null : "scrollablePlotBox";
        M(this, "beforeShowResetZoom", null, function () {
          c.resetZoomButton = c.renderer.button(d.resetZoom, null, null, a, e, h && h.hover).attr({
            align: b.position.align,
            title: d.resetZoomTitle
          }).addClass("highcharts-reset-zoom").add().align(b.position, !1, g);
        });
        M(this, "afterShowResetZoom");
      };

      e.prototype.zoomOut = function () {
        M(this, "selection", {
          resetSelection: !0
        }, this.zoom);
      };

      e.prototype.zoom = function (a) {
        var c = this,
            d,
            b = c.pointer,
            e = !1,
            h = c.inverted ? b.mouseDownX : b.mouseDownY;
        !a || a.resetSelection ? (c.axes.forEach(function (a) {
          d = a.zoom();
        }), b.initiated = !1) : a.xAxis.concat(a.yAxis).forEach(function (a) {
          var g = a.axis,
              f = c.inverted ? g.left : g.top,
              m = c.inverted ? f + g.width : f + g.height,
              k = g.isXAxis,
              l = !1;
          if (!k && h >= f && h <= m || k || !y(h)) l = !0;
          b[k ? "zoomX" : "zoomY"] && l && (d = g.zoom(a.min, a.max), g.displayBtn && (e = !0));
        });
        var g = c.resetZoomButton;
        e && !g ? c.showResetZoom() : !e && ea(g) && (c.resetZoomButton = g.destroy());
        d && c.redraw(T(c.options.chart.animation, a && a.animation, 100 > c.pointCount));
      };

      e.prototype.pan = function (a, c) {
        var d = this,
            b = d.hoverPoints,
            e = d.options.chart,
            h = d.options.mapNavigation && d.options.mapNavigation.enabled,
            g;
        c = "object" === _typeof(c) ? c : {
          enabled: c,
          type: "x"
        };
        e && e.panning && (e.panning = c);
        var f = c.type;
        M(this, "pan", {
          originalEvent: a
        }, function () {
          b && b.forEach(function (a) {
            a.setState();
          });
          var c = [1];
          "xy" === f ? c = [1, 0] : "y" === f && (c = [0]);
          c.forEach(function (c) {
            var b = d[c ? "xAxis" : "yAxis"][0],
                e = b.horiz,
                m = a[e ? "chartX" : "chartY"];
            e = e ? "mouseDownX" : "mouseDownY";
            var k = d[e],
                l = (b.pointRange || 0) / 2,
                F = b.reversed && !d.inverted || !b.reversed && d.inverted ? -1 : 1,
                n = b.getExtremes(),
                r = b.toValue(k - m, !0) + l * F;
            F = b.toValue(k + b.len - m, !0) - l * F;
            var K = F < r;
            k = K ? F : r;
            r = K ? r : F;
            F = b.hasVerticalPanning();
            var q = b.panningState;
            !F || c || q && !q.isDirty || b.series.forEach(function (a) {
              var c = a.getProcessedData(!0);
              c = a.getExtremes(c.yData, !0);
              q || (q = {
                startMin: Number.MAX_VALUE,
                startMax: -Number.MAX_VALUE
              });
              Z(c.dataMin) && Z(c.dataMax) && (q.startMin = Math.min(T(a.options.threshold, Infinity), c.dataMin, q.startMin), q.startMax = Math.max(T(a.options.threshold, -Infinity), c.dataMax, q.startMax));
            });
            c = Math.min(T(q && q.startMin, n.dataMin), l ? n.min : b.toValue(b.toPixels(n.min) - b.minPixelPadding));
            l = Math.max(T(q && q.startMax, n.dataMax), l ? n.max : b.toValue(b.toPixels(n.max) + b.minPixelPadding));
            b.panningState = q;
            b.isOrdinal || (F = c - k, 0 < F && (r += F, k = c), F = r - l, 0 < F && (r = l, k -= F), b.series.length && k !== n.min && r !== n.max && k >= c && r <= l && (b.setExtremes(k, r, !1, !1, {
              trigger: "pan"
            }), d.resetZoomButton || h || k === c || r === l || !f.match("y") || (d.showResetZoom(), b.displayBtn = !1), g = !0), d[e] = m);
          });
          g && d.redraw(!1);
          A(d.container, {
            cursor: "move"
          });
        });
      };

      return e;
    }();

    V(aa.prototype, {
      callbacks: [],
      collectionsWithInit: {
        xAxis: [aa.prototype.addAxis, [!0]],
        yAxis: [aa.prototype.addAxis, [!1]],
        series: [aa.prototype.addSeries]
      },
      collectionsWithUpdate: ["xAxis", "yAxis", "zAxis", "series"],
      propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
      propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
      propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" ")
    });

    z.chart = function (a, c, d) {
      return new aa(a, c, d);
    };

    z.Chart = aa;
    "";
    return aa;
  });
  O(e, "Mixins/LegendSymbol.js", [e["Core/Globals.js"], e["Core/Utilities.js"]], function (e, b) {
    var D = b.merge,
        z = b.pick;
    return e.LegendSymbolMixin = {
      drawRectangle: function drawRectangle(b, e) {
        var D = b.symbolHeight,
            B = b.options.squareSymbol;
        e.legendSymbol = this.chart.renderer.rect(B ? (b.symbolWidth - D) / 2 : 0, b.baseline - D + 1, B ? D : b.symbolWidth, D, z(b.options.symbolRadius, D / 2)).addClass("highcharts-point").attr({
          zIndex: 3
        }).add(e.legendGroup);
      },
      drawLineMarker: function drawLineMarker(b) {
        var e = this.options,
            C = e.marker,
            B = b.symbolWidth,
            x = b.symbolHeight,
            w = x / 2,
            v = this.chart.renderer,
            f = this.legendGroup;
        b = b.baseline - Math.round(.3 * b.fontMetrics.b);
        var d = {};
        this.chart.styledMode || (d = {
          "stroke-width": e.lineWidth || 0
        }, e.dashStyle && (d.dashstyle = e.dashStyle));
        this.legendLine = v.path([["M", 0, b], ["L", B, b]]).addClass("highcharts-graph").attr(d).add(f);
        C && !1 !== C.enabled && B && (e = Math.min(z(C.radius, w), w), 0 === this.symbol.indexOf("url") && (C = D(C, {
          width: x,
          height: x
        }), e = 0), this.legendSymbol = C = v.symbol(this.symbol, B / 2 - e, b - e, 2 * e, 2 * e, C).addClass("highcharts-point").add(f), C.isMarker = !0);
      }
    };
  });
  O(e, "Core/Series/Series.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Globals.js"], e["Mixins/LegendSymbol.js"], e["Core/Options.js"], e["Core/Color/Palette.js"], e["Core/Series/Point.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Utilities.js"]], function (e, b, I, z, H, G, C, B, x) {
    var w = e.animObject,
        v = e.setAnimation,
        f = b.hasTouch,
        d = b.svg,
        q = b.win,
        k = z.defaultOptions,
        l = C.seriesTypes,
        D = x.addEvent,
        u = x.arrayMax,
        n = x.arrayMin,
        J = x.clamp,
        E = x.cleanRecursively,
        m = x.correctFloat,
        c = x.defined,
        g = x.erase,
        a = x.error,
        h = x.extend,
        r = x.find,
        A = x.fireEvent,
        y = x.getNestedProperty,
        L = x.isArray,
        P = x.isFunction,
        R = x.isNumber,
        V = x.isString,
        Q = x.merge,
        M = x.objectEach,
        t = x.pick,
        p = x.removeEvent,
        O = x.splat,
        Z = x.syncTimeout;

    e = function () {
      function b() {
        this.zones = this.yAxis = this.xAxis = this.userOptions = this.tooltipOptions = this.processedYData = this.processedXData = this.points = this.options = this.linkedSeries = this.index = this.eventsToUnbind = this.eventOptions = this.data = this.chart = this._i = void 0;
      }

      b.prototype.init = function (a, c) {
        A(this, "init", {
          options: c
        });
        var d = this,
            b = a.series,
            e;
        this.eventOptions = this.eventOptions || {};
        this.eventsToUnbind = [];
        d.chart = a;
        d.options = d.setOptions(c);
        var g = d.options;
        d.linkedSeries = [];
        d.bindAxes();
        h(d, {
          name: g.name,
          state: "",
          visible: !1 !== g.visible,
          selected: !0 === g.selected
        });
        c = g.events;
        M(c, function (a, c) {
          P(a) && d.eventOptions[c] !== a && (P(d.eventOptions[c]) && p(d, c, d.eventOptions[c]), d.eventOptions[c] = a, D(d, c, a));
        });
        if (c && c.click || g.point && g.point.events && g.point.events.click || g.allowPointSelect) a.runTrackerClick = !0;
        d.getColor();
        d.getSymbol();
        d.parallelArrays.forEach(function (a) {
          d[a + "Data"] || (d[a + "Data"] = []);
        });
        d.isCartesian && (a.hasCartesianSeries = !0);
        b.length && (e = b[b.length - 1]);
        d._i = t(e && e._i, -1) + 1;
        d.opacity = d.options.opacity;
        a.orderSeries(this.insert(b));
        g.dataSorting && g.dataSorting.enabled ? d.setDataSortingOptions() : d.points || d.data || d.setData(g.data, !1);
        A(this, "afterInit");
      };

      b.prototype.is = function (a) {
        return l[a] && this instanceof l[a];
      };

      b.prototype.insert = function (a) {
        var c = this.options.index,
            d;

        if (R(c)) {
          for (d = a.length; d--;) {
            if (c >= t(a[d].options.index, a[d]._i)) {
              a.splice(d + 1, 0, this);
              break;
            }
          }

          -1 === d && a.unshift(this);
          d += 1;
        } else a.push(this);

        return t(d, a.length - 1);
      };

      b.prototype.bindAxes = function () {
        var c = this,
            d = c.options,
            b = c.chart,
            e;
        A(this, "bindAxes", null, function () {
          (c.axisTypes || []).forEach(function (h) {
            var g = 0;
            b[h].forEach(function (a) {
              e = a.options;
              if (d[h] === g && !e.isInternal || "undefined" !== typeof d[h] && d[h] === e.id || "undefined" === typeof d[h] && 0 === e.index) c.insert(a.series), c[h] = a, a.isDirty = !0;
              e.isInternal || g++;
            });
            c[h] || c.optionalAxis === h || a(18, !0, b);
          });
        });
        A(this, "afterBindAxes");
      };

      b.prototype.updateParallelArrays = function (a, c) {
        var d = a.series,
            b = arguments,
            e = R(c) ? function (b) {
          var e = "y" === b && d.toYData ? d.toYData(a) : a[b];
          d[b + "Data"][c] = e;
        } : function (a) {
          Array.prototype[c].apply(d[a + "Data"], Array.prototype.slice.call(b, 2));
        };
        d.parallelArrays.forEach(e);
      };

      b.prototype.hasData = function () {
        return this.visible && "undefined" !== typeof this.dataMax && "undefined" !== typeof this.dataMin || this.visible && this.yData && 0 < this.yData.length;
      };

      b.prototype.autoIncrement = function () {
        var a = this.options,
            c = this.xIncrement,
            d,
            b = a.pointIntervalUnit,
            e = this.chart.time;
        c = t(c, a.pointStart, 0);
        this.pointInterval = d = t(this.pointInterval, a.pointInterval, 1);
        b && (a = new e.Date(c), "day" === b ? e.set("Date", a, e.get("Date", a) + d) : "month" === b ? e.set("Month", a, e.get("Month", a) + d) : "year" === b && e.set("FullYear", a, e.get("FullYear", a) + d), d = a.getTime() - c);
        this.xIncrement = c + d;
        return c;
      };

      b.prototype.setDataSortingOptions = function () {
        var a = this.options;
        h(this, {
          requireSorting: !1,
          sorted: !1,
          enabledDataSorting: !0,
          allowDG: !1
        });
        c(a.pointRange) || (a.pointRange = 1);
      };

      b.prototype.setOptions = function (a) {
        var d = this.chart,
            b = d.options,
            e = b.plotOptions,
            h = d.userOptions || {};
        a = Q(a);
        d = d.styledMode;
        var g = {
          plotOptions: e,
          userOptions: a
        };
        A(this, "setOptions", g);
        var f = g.plotOptions[this.type],
            m = h.plotOptions || {};
        this.userOptions = g.userOptions;
        h = Q(f, e.series, h.plotOptions && h.plotOptions[this.type], a);
        this.tooltipOptions = Q(k.tooltip, k.plotOptions.series && k.plotOptions.series.tooltip, k.plotOptions[this.type].tooltip, b.tooltip.userOptions, e.series && e.series.tooltip, e[this.type].tooltip, a.tooltip);
        this.stickyTracking = t(a.stickyTracking, m[this.type] && m[this.type].stickyTracking, m.series && m.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : h.stickyTracking);
        null === f.marker && delete h.marker;
        this.zoneAxis = h.zoneAxis;
        b = this.zones = (h.zones || []).slice();
        !h.negativeColor && !h.negativeFillColor || h.zones || (e = {
          value: h[this.zoneAxis + "Threshold"] || h.threshold || 0,
          className: "highcharts-negative"
        }, d || (e.color = h.negativeColor, e.fillColor = h.negativeFillColor), b.push(e));
        b.length && c(b[b.length - 1].value) && b.push(d ? {} : {
          color: this.color,
          fillColor: this.fillColor
        });
        A(this, "afterSetOptions", {
          options: h
        });
        return h;
      };

      b.prototype.getName = function () {
        return t(this.options.name, "Series " + (this.index + 1));
      };

      b.prototype.getCyclic = function (a, d, b) {
        var e = this.chart,
            h = this.userOptions,
            g = a + "Index",
            f = a + "Counter",
            m = b ? b.length : t(e.options.chart[a + "Count"], e[a + "Count"]);

        if (!d) {
          var k = t(h[g], h["_" + g]);
          c(k) || (e.series.length || (e[f] = 0), h["_" + g] = k = e[f] % m, e[f] += 1);
          b && (d = b[k]);
        }

        "undefined" !== typeof k && (this[g] = k);
        this[a] = d;
      };

      b.prototype.getColor = function () {
        this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = H.neutralColor20 : this.getCyclic("color", this.options.color || k.plotOptions[this.type].color, this.chart.options.colors);
      };

      b.prototype.getPointsCollection = function () {
        return (this.hasGroupedData ? this.points : this.data) || [];
      };

      b.prototype.getSymbol = function () {
        this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols);
      };

      b.prototype.findPointIndex = function (a, c) {
        var d = a.id,
            b = a.x,
            e = this.points,
            h,
            g = this.options.dataSorting;
        if (d) var f = this.chart.get(d);else if (this.linkedParent || this.enabledDataSorting) {
          var m = g && g.matchByName ? "name" : "index";
          f = r(e, function (c) {
            return !c.touched && c[m] === a[m];
          });
          if (!f) return;
        }

        if (f) {
          var k = f && f.index;
          "undefined" !== typeof k && (h = !0);
        }

        "undefined" === typeof k && R(b) && (k = this.xData.indexOf(b, c));
        -1 !== k && "undefined" !== typeof k && this.cropped && (k = k >= this.cropStart ? k - this.cropStart : k);
        !h && e[k] && e[k].touched && (k = void 0);
        return k;
      };

      b.prototype.updateData = function (a, d) {
        var b = this.options,
            e = b.dataSorting,
            h = this.points,
            g = [],
            f,
            k,
            m,
            l = this.requireSorting,
            n = a.length === h.length,
            r = !0;
        this.xIncrement = null;
        a.forEach(function (a, d) {
          var k = c(a) && this.pointClass.prototype.optionsToObject.call({
            series: this
          }, a) || {};
          var r = k.x;

          if (k.id || R(r)) {
            if (r = this.findPointIndex(k, m), -1 === r || "undefined" === typeof r ? g.push(a) : h[r] && a !== b.data[r] ? (h[r].update(a, !1, null, !1), h[r].touched = !0, l && (m = r + 1)) : h[r] && (h[r].touched = !0), !n || d !== r || e && e.enabled || this.hasDerivedData) f = !0;
          } else g.push(a);
        }, this);
        if (f) for (a = h.length; a--;) {
          (k = h[a]) && !k.touched && k.remove && k.remove(!1, d);
        } else !n || e && e.enabled ? r = !1 : (a.forEach(function (a, c) {
          h[c].update && a !== h[c].y && h[c].update(a, !1, null, !1);
        }), g.length = 0);
        h.forEach(function (a) {
          a && (a.touched = !1);
        });
        if (!r) return !1;
        g.forEach(function (a) {
          this.addPoint(a, !1, null, null, !1);
        }, this);
        null === this.xIncrement && this.xData && this.xData.length && (this.xIncrement = u(this.xData), this.autoIncrement());
        return !0;
      };

      b.prototype.setData = function (c, d, b, e) {
        var h = this,
            g = h.points,
            f = g && g.length || 0,
            k,
            m = h.options,
            l = h.chart,
            r = m.dataSorting,
            n = null,
            q = h.xAxis;
        n = m.turboThreshold;
        var F = this.xData,
            p = this.yData,
            u = (k = h.pointArrayMap) && k.length,
            v = m.keys,
            K = 0,
            w = 1,
            y;
        c = c || [];
        k = c.length;
        d = t(d, !0);
        r && r.enabled && (c = this.sortData(c));
        !1 !== e && k && f && !h.cropped && !h.hasGroupedData && h.visible && !h.isSeriesBoosting && (y = this.updateData(c, b));

        if (!y) {
          h.xIncrement = null;
          h.colorCounter = 0;
          this.parallelArrays.forEach(function (a) {
            h[a + "Data"].length = 0;
          });
          if (n && k > n) {
            if (n = h.getFirstValidPoint(c), R(n)) for (b = 0; b < k; b++) {
              F[b] = this.autoIncrement(), p[b] = c[b];
            } else if (L(n)) {
              if (u) for (b = 0; b < k; b++) {
                e = c[b], F[b] = e[0], p[b] = e.slice(1, u + 1);
              } else for (v && (K = v.indexOf("x"), w = v.indexOf("y"), K = 0 <= K ? K : 0, w = 0 <= w ? w : 1), b = 0; b < k; b++) {
                e = c[b], F[b] = e[K], p[b] = e[w];
              }
            } else a(12, !1, l);
          } else for (b = 0; b < k; b++) {
            "undefined" !== typeof c[b] && (e = {
              series: h
            }, h.pointClass.prototype.applyOptions.apply(e, [c[b]]), h.updateParallelArrays(e, b));
          }
          p && V(p[0]) && a(14, !0, l);
          h.data = [];
          h.options.data = h.userOptions.data = c;

          for (b = f; b--;) {
            g[b] && g[b].destroy && g[b].destroy();
          }

          q && (q.minRange = q.userMinRange);
          h.isDirty = l.isDirtyBox = !0;
          h.isDirtyData = !!g;
          b = !1;
        }

        "point" === m.legendType && (this.processData(), this.generatePoints());
        d && l.redraw(b);
      };

      b.prototype.sortData = function (a) {
        var d = this,
            b = d.options.dataSorting.sortKey || "y",
            e = function e(a, d) {
          return c(d) && a.pointClass.prototype.optionsToObject.call({
            series: a
          }, d) || {};
        };

        a.forEach(function (c, b) {
          a[b] = e(d, c);
          a[b].index = b;
        }, this);
        a.concat().sort(function (a, c) {
          a = y(b, a);
          c = y(b, c);
          return c < a ? -1 : c > a ? 1 : 0;
        }).forEach(function (a, c) {
          a.x = c;
        }, this);
        d.linkedSeries && d.linkedSeries.forEach(function (c) {
          var d = c.options,
              b = d.data;
          d.dataSorting && d.dataSorting.enabled || !b || (b.forEach(function (d, h) {
            b[h] = e(c, d);
            a[h] && (b[h].x = a[h].x, b[h].index = h);
          }), c.setData(b, !1));
        });
        return a;
      };

      b.prototype.getProcessedData = function (c) {
        var d = this.xData,
            b = this.yData,
            e = d.length;
        var h = 0;
        var g = this.xAxis,
            f = this.options;
        var k = f.cropThreshold;
        var m = c || this.getExtremesFromAll || f.getExtremesFromAll,
            l = this.isCartesian;
        c = g && g.val2lin;
        f = !(!g || !g.logarithmic);
        var n = this.requireSorting;

        if (g) {
          g = g.getExtremes();
          var r = g.min;
          var q = g.max;
        }

        if (l && this.sorted && !m && (!k || e > k || this.forceCrop)) if (d[e - 1] < r || d[0] > q) d = [], b = [];else if (this.yData && (d[0] < r || d[e - 1] > q)) {
          h = this.cropData(this.xData, this.yData, r, q);
          d = h.xData;
          b = h.yData;
          h = h.start;
          var F = !0;
        }

        for (k = d.length || 1; --k;) {
          if (e = f ? c(d[k]) - c(d[k - 1]) : d[k] - d[k - 1], 0 < e && ("undefined" === typeof p || e < p)) var p = e;else 0 > e && n && (a(15, !1, this.chart), n = !1);
        }

        return {
          xData: d,
          yData: b,
          cropped: F,
          cropStart: h,
          closestPointRange: p
        };
      };

      b.prototype.processData = function (a) {
        var c = this.xAxis;
        if (this.isCartesian && !this.isDirty && !c.isDirty && !this.yAxis.isDirty && !a) return !1;
        a = this.getProcessedData();
        this.cropped = a.cropped;
        this.cropStart = a.cropStart;
        this.processedXData = a.xData;
        this.processedYData = a.yData;
        this.closestPointRange = this.basePointRange = a.closestPointRange;
      };

      b.prototype.cropData = function (a, c, d, b, e) {
        var h = a.length,
            g = 0,
            f = h,
            k;
        e = t(e, this.cropShoulder);

        for (k = 0; k < h; k++) {
          if (a[k] >= d) {
            g = Math.max(0, k - e);
            break;
          }
        }

        for (d = k; d < h; d++) {
          if (a[d] > b) {
            f = d + e;
            break;
          }
        }

        return {
          xData: a.slice(g, f),
          yData: c.slice(g, f),
          start: g,
          end: f
        };
      };

      b.prototype.generatePoints = function () {
        var a = this.options,
            c = a.data,
            d = this.data,
            b,
            e = this.processedXData,
            g = this.processedYData,
            f = this.pointClass,
            k = e.length,
            m = this.cropStart || 0,
            l = this.hasGroupedData,
            n = a.keys,
            r = [],
            q;
        a = a.dataGrouping && a.dataGrouping.groupAll ? m : 0;
        d || l || (d = [], d.length = c.length, d = this.data = d);
        n && l && (this.options.keys = !1);

        for (q = 0; q < k; q++) {
          var p = m + q;

          if (l) {
            var u = new f().init(this, [e[q]].concat(O(g[q])));
            u.dataGroup = this.groupMap[a + q];
            u.dataGroup.options && (u.options = u.dataGroup.options, h(u, u.dataGroup.options), delete u.dataLabels);
          } else (u = d[p]) || "undefined" === typeof c[p] || (d[p] = u = new f().init(this, c[p], e[q]));

          u && (u.index = l ? a + q : p, r[q] = u);
        }

        this.options.keys = n;
        if (d && (k !== (b = d.length) || l)) for (q = 0; q < b; q++) {
          q !== m || l || (q += k), d[q] && (d[q].destroyElements(), d[q].plotX = void 0);
        }
        this.data = d;
        this.points = r;
        A(this, "afterGeneratePoints");
      };

      b.prototype.getXExtremes = function (a) {
        return {
          min: n(a),
          max: u(a)
        };
      };

      b.prototype.getExtremes = function (a, c) {
        var d = this.xAxis,
            b = this.yAxis,
            e = this.processedXData || this.xData,
            h = [],
            g = 0,
            f = 0;
        var k = 0;
        var m = this.requireSorting ? this.cropShoulder : 0,
            l = b ? b.positiveValuesOnly : !1,
            r;
        a = a || this.stackedYData || this.processedYData || [];
        b = a.length;
        d && (k = d.getExtremes(), f = k.min, k = k.max);

        for (r = 0; r < b; r++) {
          var q = e[r];
          var p = a[r];
          var F = (R(p) || L(p)) && (p.length || 0 < p || !l);
          q = c || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !d || (e[r + m] || q) >= f && (e[r - m] || q) <= k;
          if (F && q) if (F = p.length) for (; F--;) {
            R(p[F]) && (h[g++] = p[F]);
          } else h[g++] = p;
        }

        a = {
          dataMin: n(h),
          dataMax: u(h)
        };
        A(this, "afterGetExtremes", {
          dataExtremes: a
        });
        return a;
      };

      b.prototype.applyExtremes = function () {
        var a = this.getExtremes();
        this.dataMin = a.dataMin;
        this.dataMax = a.dataMax;
        return a;
      };

      b.prototype.getFirstValidPoint = function (a) {
        for (var c = null, d = a.length, b = 0; null === c && b < d;) {
          c = a[b], b++;
        }

        return c;
      };

      b.prototype.translate = function () {
        this.processedXData || this.processData();
        this.generatePoints();
        var a = this.options,
            d = a.stacking,
            b = this.xAxis,
            e = b.categories,
            h = this.enabledDataSorting,
            g = this.yAxis,
            f = this.points,
            k = f.length,
            l = !!this.modifyValue,
            r,
            n = this.pointPlacementToXValue(),
            q = !!n,
            p = a.threshold,
            u = a.startFromThreshold ? p : 0,
            v,
            w = this.zoneAxis || "y",
            y = Number.MAX_VALUE;

        for (r = 0; r < k; r++) {
          var E = f[r],
              x = E.x,
              D = E.y,
              B = E.low,
              P = d && g.stacking && g.stacking.stacks[(this.negStacks && D < (u ? 0 : p) ? "-" : "") + this.stackKey],
              N = void 0,
              C = void 0;
          if (g.positiveValuesOnly && !g.validatePositiveValue(D) || b.positiveValuesOnly && !b.validatePositiveValue(x)) E.isNull = !0;
          E.plotX = v = m(J(b.translate(x, 0, 0, 0, 1, n, "flags" === this.type), -1E5, 1E5));

          if (d && this.visible && P && P[x]) {
            var z = this.getStackIndicator(z, x, this.index);
            E.isNull || (N = P[x], C = N.points[z.key]);
          }

          L(C) && (B = C[0], D = C[1], B === u && z.key === P[x].base && (B = t(R(p) && p, g.min)), g.positiveValuesOnly && 0 >= B && (B = null), E.total = E.stackTotal = N.total, E.percentage = N.total && E.y / N.total * 100, E.stackY = D, this.irregularWidths || N.setOffset(this.pointXOffset || 0, this.barW || 0));
          E.yBottom = c(B) ? J(g.translate(B, 0, 1, 0, 1), -1E5, 1E5) : null;
          l && (D = this.modifyValue(D, E));
          E.plotY = void 0;
          R(D) && (D = g.translate(D, !1, !0, !1, !0), "undefined" !== typeof D && (E.plotY = J(D, -1E5, 1E5)));
          E.isInside = this.isPointInside(E);
          E.clientX = q ? m(b.translate(x, 0, 0, 0, 1, n)) : v;
          E.negative = E[w] < (a[w + "Threshold"] || p || 0);
          E.category = e && "undefined" !== typeof e[E.x] ? e[E.x] : E.x;

          if (!E.isNull && !1 !== E.visible) {
            "undefined" !== typeof M && (y = Math.min(y, Math.abs(v - M)));
            var M = v;
          }

          E.zone = this.zones.length && E.getZone();
          !E.graphic && this.group && h && (E.isNew = !0);
        }

        this.closestPointRangePx = y;
        A(this, "afterTranslate");
      };

      b.prototype.getValidPoints = function (a, c, d) {
        var b = this.chart;
        return (a || this.points || []).filter(function (a) {
          return c && !b.isInsidePlot(a.plotX, a.plotY, {
            inverted: b.inverted
          }) ? !1 : !1 !== a.visible && (d || !a.isNull);
        });
      };

      b.prototype.getClipBox = function (a, c) {
        var d = this.options,
            b = this.chart,
            e = b.inverted,
            h = this.xAxis,
            g = h && this.yAxis,
            f = b.options.chart.scrollablePlotArea || {};
        a && !1 === d.clip && g ? a = e ? {
          y: -b.chartWidth + g.len + g.pos,
          height: b.chartWidth,
          width: b.chartHeight,
          x: -b.chartHeight + h.len + h.pos
        } : {
          y: -g.pos,
          height: b.chartHeight,
          width: b.chartWidth,
          x: -h.pos
        } : (a = this.clipBox || b.clipBox, c && (a.width = b.plotSizeX, a.x = (b.scrollablePixelsX || 0) * (f.scrollPositionX || 0)));
        return c ? {
          width: a.width,
          x: a.x
        } : a;
      };

      b.prototype.getSharedClipKey = function (a) {
        if (this.sharedClipKey) return this.sharedClipKey;
        var c = [a && a.duration, a && a.easing, a && a.defer, this.getClipBox(a).height, this.options.xAxis, this.options.yAxis].join();
        if (!1 !== this.options.clip || a) this.sharedClipKey = c;
        return c;
      };

      b.prototype.setClip = function (a) {
        var c = this.chart,
            d = this.options,
            b = c.renderer,
            e = c.inverted,
            h = this.clipBox,
            g = this.getClipBox(a),
            f = this.getSharedClipKey(a),
            k = c.sharedClips[f],
            m = c.sharedClips[f + "m"];
        a && (g.width = 0, e && (g.x = c.plotHeight + (!1 !== d.clip ? 0 : c.plotTop)));
        k ? c.hasLoaded || k.attr(g) : (a && (c.sharedClips[f + "m"] = m = b.clipRect(e ? (c.plotSizeX || 0) + 99 : -99, e ? -c.plotLeft : -c.plotTop, 99, e ? c.chartWidth : c.chartHeight)), c.sharedClips[f] = k = b.clipRect(g), k.count = {
          length: 0
        });
        a && !k.count[this.index] && (k.count[this.index] = !0, k.count.length += 1);
        if (!1 !== d.clip || a) this.group.clip(a || h ? k : c.clipRect), this.markerGroup.clip(m);
        a || (k.count[this.index] && (delete k.count[this.index], --k.count.length), 0 === k.count.length && (h || (c.sharedClips[f] = k.destroy()), m && (c.sharedClips[f + "m"] = m.destroy())));
      };

      b.prototype.animate = function (a) {
        var c = this.chart,
            d = w(this.options.animation),
            b = this.sharedClipKey;
        if (a) this.setClip(d);else if (b) {
          a = c.sharedClips[b];
          b = c.sharedClips[b + "m"];
          var e = this.getClipBox(d, !0);
          a && a.animate(e, d);
          b && b.animate({
            width: e.width + 99,
            x: e.x - (c.inverted ? 0 : 99)
          }, d);
        }
      };

      b.prototype.afterAnimate = function () {
        this.setClip();
        A(this, "afterAnimate");
        this.finishedAnimating = !0;
      };

      b.prototype.drawPoints = function () {
        var a = this.points,
            c = this.chart,
            d,
            b,
            e = this.options.marker,
            h = this[this.specialGroup] || this.markerGroup,
            g = this.xAxis,
            f = t(e.enabled, !g || g.isRadial ? !0 : null, this.closestPointRangePx >= e.enabledThreshold * e.radius);
        if (!1 !== e.enabled || this._hasPointMarkers) for (d = 0; d < a.length; d++) {
          var k = a[d];
          var m = (b = k.graphic) ? "animate" : "attr";
          var l = k.marker || {};
          var r = !!k.marker;

          if ((f && "undefined" === typeof l.enabled || l.enabled) && !k.isNull && !1 !== k.visible) {
            var n = t(l.symbol, this.symbol);
            var q = this.markerAttribs(k, k.selected && "select");
            this.enabledDataSorting && (k.startXPos = g.reversed ? -(q.width || 0) : g.width);
            var p = !1 !== k.isInside;
            b ? b[p ? "show" : "hide"](p).animate(q) : p && (0 < (q.width || 0) || k.hasImage) && (k.graphic = b = c.renderer.symbol(n, q.x, q.y, q.width, q.height, r ? l : e).add(h), this.enabledDataSorting && c.hasRendered && (b.attr({
              x: k.startXPos
            }), m = "animate"));
            b && "animate" === m && b[p ? "show" : "hide"](p).animate(q);
            if (b && !c.styledMode) b[m](this.pointAttribs(k, k.selected && "select"));
            b && b.addClass(k.getClassName(), !0);
          } else b && (k.graphic = b.destroy());
        }
      };

      b.prototype.markerAttribs = function (a, c) {
        var d = this.options,
            b = d.marker,
            e = a.marker || {},
            h = e.symbol || b.symbol,
            g = t(e.radius, b.radius);
        c && (b = b.states[c], c = e.states && e.states[c], g = t(c && c.radius, b && b.radius, g + (b && b.radiusPlus || 0)));
        a.hasImage = h && 0 === h.indexOf("url");
        a.hasImage && (g = 0);
        a = {
          x: d.crisp ? Math.floor(a.plotX - g) : a.plotX - g,
          y: a.plotY - g
        };
        g && (a.width = a.height = 2 * g);
        return a;
      };

      b.prototype.pointAttribs = function (a, c) {
        var d = this.options.marker,
            b = a && a.options,
            e = b && b.marker || {},
            h = this.color,
            g = b && b.color,
            f = a && a.color;
        b = t(e.lineWidth, d.lineWidth);
        var k = a && a.zone && a.zone.color;
        a = 1;
        h = g || k || f || h;
        g = e.fillColor || d.fillColor || h;
        h = e.lineColor || d.lineColor || h;
        c = c || "normal";
        d = d.states[c];
        c = e.states && e.states[c] || {};
        b = t(c.lineWidth, d.lineWidth, b + t(c.lineWidthPlus, d.lineWidthPlus, 0));
        g = c.fillColor || d.fillColor || g;
        h = c.lineColor || d.lineColor || h;
        a = t(c.opacity, d.opacity, a);
        return {
          stroke: h,
          "stroke-width": b,
          fill: g,
          opacity: a
        };
      };

      b.prototype.destroy = function (a) {
        var c = this,
            d = c.chart,
            b = /AppleWebKit\/533/.test(q.navigator.userAgent),
            e,
            h,
            f = c.data || [],
            k,
            m;
        A(c, "destroy");
        this.removeEvents(a);
        (c.axisTypes || []).forEach(function (a) {
          (m = c[a]) && m.series && (g(m.series, c), m.isDirty = m.forceRedraw = !0);
        });
        c.legendItem && c.chart.legend.destroyItem(c);

        for (h = f.length; h--;) {
          (k = f[h]) && k.destroy && k.destroy();
        }

        c.clips && c.clips.forEach(function (a) {
          return a.destroy();
        });
        x.clearTimeout(c.animationTimeout);
        M(c, function (a, c) {
          a instanceof B && !a.survive && (e = b && "group" === c ? "hide" : "destroy", a[e]());
        });
        d.hoverSeries === c && (d.hoverSeries = void 0);
        g(d.series, c);
        d.orderSeries();
        M(c, function (d, b) {
          a && "hcEvents" === b || delete c[b];
        });
      };

      b.prototype.applyZones = function () {
        var a = this,
            c = this.chart,
            d = c.renderer,
            b = this.zones,
            e,
            h,
            g = this.clips || [],
            f,
            k = this.graph,
            m = this.area,
            l = Math.max(c.chartWidth, c.chartHeight),
            r = this[(this.zoneAxis || "y") + "Axis"],
            n = c.inverted,
            q,
            p,
            u,
            v = !1,
            w,
            y;

        if (b.length && (k || m) && r && "undefined" !== typeof r.min) {
          var E = r.reversed;
          var A = r.horiz;
          k && !this.showLine && k.hide();
          m && m.hide();
          var x = r.getExtremes();
          b.forEach(function (b, F) {
            e = E ? A ? c.plotWidth : 0 : A ? 0 : r.toPixels(x.min) || 0;
            e = J(t(h, e), 0, l);
            h = J(Math.round(r.toPixels(t(b.value, x.max), !0) || 0), 0, l);
            v && (e = h = r.toPixels(x.max));
            q = Math.abs(e - h);
            p = Math.min(e, h);
            u = Math.max(e, h);
            r.isXAxis ? (f = {
              x: n ? u : p,
              y: 0,
              width: q,
              height: l
            }, A || (f.x = c.plotHeight - f.x)) : (f = {
              x: 0,
              y: n ? u : p,
              width: l,
              height: q
            }, A && (f.y = c.plotWidth - f.y));
            n && d.isVML && (f = r.isXAxis ? {
              x: 0,
              y: E ? p : u,
              height: f.width,
              width: c.chartWidth
            } : {
              x: f.y - c.plotLeft - c.spacingBox.x,
              y: 0,
              width: f.height,
              height: c.chartHeight
            });
            g[F] ? g[F].animate(f) : g[F] = d.clipRect(f);
            w = a["zone-area-" + F];
            y = a["zone-graph-" + F];
            k && y && y.clip(g[F]);
            m && w && w.clip(g[F]);
            v = b.value > x.max;
            a.resetZones && 0 === h && (h = void 0);
          });
          this.clips = g;
        } else a.visible && (k && k.show(!0), m && m.show(!0));
      };

      b.prototype.invertGroups = function (a) {
        function c() {
          ["group", "markerGroup"].forEach(function (c) {
            d[c] && (b.renderer.isVML && d[c].attr({
              width: d.yAxis.len,
              height: d.xAxis.len
            }), d[c].width = d.yAxis.len, d[c].height = d.xAxis.len, d[c].invert(d.isRadialSeries ? !1 : a));
          });
        }

        var d = this,
            b = d.chart;
        d.xAxis && (d.eventsToUnbind.push(D(b, "resize", c)), c(), d.invertGroups = c);
      };

      b.prototype.plotGroup = function (a, d, b, e, h) {
        var g = this[a],
            f = !g;
        b = {
          visibility: b,
          zIndex: e || .1
        };
        "undefined" === typeof this.opacity || this.chart.styledMode || "inactive" === this.state || (b.opacity = this.opacity);
        f && (this[a] = g = this.chart.renderer.g().add(h));
        g.addClass("highcharts-" + d + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (c(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (g.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0);
        g.attr(b)[f ? "attr" : "animate"](this.getPlotBox());
        return g;
      };

      b.prototype.getPlotBox = function () {
        var a = this.chart,
            c = this.xAxis,
            d = this.yAxis;
        a.inverted && (c = d, d = this.xAxis);
        return {
          translateX: c ? c.left : a.plotLeft,
          translateY: d ? d.top : a.plotTop,
          scaleX: 1,
          scaleY: 1
        };
      };

      b.prototype.removeEvents = function (a) {
        a || p(this);
        this.eventsToUnbind.length && (this.eventsToUnbind.forEach(function (a) {
          a();
        }), this.eventsToUnbind.length = 0);
      };

      b.prototype.render = function () {
        var a = this,
            c = a.chart,
            d = a.options,
            b = w(d.animation),
            e = !a.finishedAnimating && c.renderer.isSVG && b.duration,
            h = a.visible ? "inherit" : "hidden",
            g = d.zIndex,
            f = a.hasRendered,
            k = c.seriesGroup,
            m = c.inverted;
        A(this, "render");
        var l = a.plotGroup("group", "series", h, g, k);
        a.markerGroup = a.plotGroup("markerGroup", "markers", h, g, k);
        e && a.animate && a.animate(!0);
        l.inverted = t(a.invertible, a.isCartesian) ? m : !1;
        a.drawGraph && (a.drawGraph(), a.applyZones());
        a.visible && a.drawPoints();
        a.drawDataLabels && a.drawDataLabels();
        a.redrawPoints && a.redrawPoints();
        a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker();
        a.invertGroups(m);
        !1 === d.clip || a.sharedClipKey || f || l.clip(c.clipRect);
        e && a.animate && a.animate();
        f || (e && b.defer && (e += b.defer), a.animationTimeout = Z(function () {
          a.afterAnimate();
        }, e || 0));
        a.isDirty = !1;
        a.hasRendered = !0;
        A(a, "afterRender");
      };

      b.prototype.redraw = function () {
        var a = this.chart,
            c = this.isDirty || this.isDirtyData,
            d = this.group,
            b = this.xAxis,
            e = this.yAxis;
        d && (a.inverted && d.attr({
          width: a.plotWidth,
          height: a.plotHeight
        }), d.animate({
          translateX: t(b && b.left, a.plotLeft),
          translateY: t(e && e.top, a.plotTop)
        }));
        this.translate();
        this.render();
        c && delete this.kdTree;
      };

      b.prototype.searchPoint = function (a, c) {
        var d = this.xAxis,
            b = this.yAxis,
            e = this.chart.inverted;
        return this.searchKDTree({
          clientX: e ? d.len - a.chartY + d.pos : a.chartX - d.pos,
          plotY: e ? b.len - a.chartX + b.pos : a.chartY - b.pos
        }, c, a);
      };

      b.prototype.buildKDTree = function (a) {
        function c(a, b, e) {
          var h;

          if (h = a && a.length) {
            var g = d.kdAxisArray[b % e];
            a.sort(function (a, c) {
              return a[g] - c[g];
            });
            h = Math.floor(h / 2);
            return {
              point: a[h],
              left: c(a.slice(0, h), b + 1, e),
              right: c(a.slice(h + 1), b + 1, e)
            };
          }
        }

        this.buildingKdTree = !0;
        var d = this,
            b = -1 < d.options.findNearestPointBy.indexOf("y") ? 2 : 1;
        delete d.kdTree;
        Z(function () {
          d.kdTree = c(d.getValidPoints(null, !d.directTouch), b, b);
          d.buildingKdTree = !1;
        }, d.options.kdNow || a && "touchstart" === a.type ? 0 : 1);
      };

      b.prototype.searchKDTree = function (a, d, b) {
        function e(a, d, b, m) {
          var l = d.point,
              r = h.kdAxisArray[b % m],
              n = l;
          var q = c(a[g]) && c(l[g]) ? Math.pow(a[g] - l[g], 2) : null;
          var p = c(a[f]) && c(l[f]) ? Math.pow(a[f] - l[f], 2) : null;
          p = (q || 0) + (p || 0);
          l.dist = c(p) ? Math.sqrt(p) : Number.MAX_VALUE;
          l.distX = c(q) ? Math.sqrt(q) : Number.MAX_VALUE;
          r = a[r] - l[r];
          p = 0 > r ? "left" : "right";
          q = 0 > r ? "right" : "left";
          d[p] && (p = e(a, d[p], b + 1, m), n = p[k] < n[k] ? p : l);
          d[q] && Math.sqrt(r * r) < n[k] && (a = e(a, d[q], b + 1, m), n = a[k] < n[k] ? a : n);
          return n;
        }

        var h = this,
            g = this.kdAxisArray[0],
            f = this.kdAxisArray[1],
            k = d ? "distX" : "dist";
        d = -1 < h.options.findNearestPointBy.indexOf("y") ? 2 : 1;
        this.kdTree || this.buildingKdTree || this.buildKDTree(b);
        if (this.kdTree) return e(a, this.kdTree, d, d);
      };

      b.prototype.pointPlacementToXValue = function () {
        var a = this.options,
            c = a.pointRange,
            d = this.xAxis;
        a = a.pointPlacement;
        "between" === a && (a = d.reversed ? -.5 : .5);
        return R(a) ? a * (c || d.pointRange) : 0;
      };

      b.prototype.isPointInside = function (a) {
        return "undefined" !== typeof a.plotY && "undefined" !== typeof a.plotX && 0 <= a.plotY && a.plotY <= this.yAxis.len && 0 <= a.plotX && a.plotX <= this.xAxis.len;
      };

      b.prototype.drawTracker = function () {
        var a = this,
            c = a.options,
            b = c.trackByArea,
            e = [].concat(b ? a.areaPath : a.graphPath),
            h = a.chart,
            g = h.pointer,
            k = h.renderer,
            m = h.options.tooltip.snap,
            l = a.tracker,
            r = function r(c) {
          if (h.hoverSeries !== a) a.onMouseOver();
        },
            n = "rgba(192,192,192," + (d ? .0001 : .002) + ")";

        l ? l.attr({
          d: e
        }) : a.graph && (a.tracker = k.path(e).attr({
          visibility: a.visible ? "visible" : "hidden",
          zIndex: 2
        }).addClass(b ? "highcharts-tracker-area" : "highcharts-tracker-line").add(a.group), h.styledMode || a.tracker.attr({
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          stroke: n,
          fill: b ? n : "none",
          "stroke-width": a.graph.strokeWidth() + (b ? 0 : 2 * m)
        }), [a.tracker, a.markerGroup, a.dataLabelsGroup].forEach(function (a) {
          if (a && (a.addClass("highcharts-tracker").on("mouseover", r).on("mouseout", function (a) {
            g.onTrackerMouseOut(a);
          }), c.cursor && !h.styledMode && a.css({
            cursor: c.cursor
          }), f)) a.on("touchstart", r);
        }));
        A(this, "afterDrawTracker");
      };

      b.prototype.addPoint = function (a, c, d, b, e) {
        var h = this.options,
            g = this.data,
            f = this.chart,
            k = this.xAxis;
        k = k && k.hasNames && k.names;
        var m = h.data,
            l = this.xData,
            r;
        c = t(c, !0);
        var n = {
          series: this
        };
        this.pointClass.prototype.applyOptions.apply(n, [a]);
        var q = n.x;
        var p = l.length;
        if (this.requireSorting && q < l[p - 1]) for (r = !0; p && l[p - 1] > q;) {
          p--;
        }
        this.updateParallelArrays(n, "splice", p, 0, 0);
        this.updateParallelArrays(n, p);
        k && n.name && (k[q] = n.name);
        m.splice(p, 0, a);
        r && (this.data.splice(p, 0, null), this.processData());
        "point" === h.legendType && this.generatePoints();
        d && (g[0] && g[0].remove ? g[0].remove(!1) : (g.shift(), this.updateParallelArrays(n, "shift"), m.shift()));
        !1 !== e && A(this, "addPoint", {
          point: n
        });
        this.isDirtyData = this.isDirty = !0;
        c && f.redraw(b);
      };

      b.prototype.removePoint = function (a, c, d) {
        var b = this,
            e = b.data,
            h = e[a],
            g = b.points,
            f = b.chart,
            k = function k() {
          g && g.length === e.length && g.splice(a, 1);
          e.splice(a, 1);
          b.options.data.splice(a, 1);
          b.updateParallelArrays(h || {
            series: b
          }, "splice", a, 1);
          h && h.destroy();
          b.isDirty = !0;
          b.isDirtyData = !0;
          c && f.redraw();
        };

        v(d, f);
        c = t(c, !0);
        h ? h.firePointEvent("remove", null, k) : k();
      };

      b.prototype.remove = function (a, c, d, b) {
        function e() {
          h.destroy(b);
          g.isDirtyLegend = g.isDirtyBox = !0;
          g.linkSeries();
          t(a, !0) && g.redraw(c);
        }

        var h = this,
            g = h.chart;
        !1 !== d ? A(h, "remove", null, e) : e();
      };

      b.prototype.update = function (c, d) {
        c = E(c, this.userOptions);
        A(this, "update", {
          options: c
        });
        var b = this,
            e = b.chart,
            g = b.userOptions,
            f = b.initialType || b.type,
            k = e.options.plotOptions,
            m = c.type || g.type || e.options.chart.type,
            r = !(this.hasDerivedData || m && m !== this.type || "undefined" !== typeof c.pointStart || "undefined" !== typeof c.pointInterval || b.hasOptionChanged("dataGrouping") || b.hasOptionChanged("pointStart") || b.hasOptionChanged("pointInterval") || b.hasOptionChanged("pointIntervalUnit") || b.hasOptionChanged("keys")),
            n = l[f].prototype,
            q,
            p = ["eventOptions", "navigatorSeries", "baseSeries"],
            u = b.finishedAnimating && {
          animation: !1
        },
            v = {};
        m = m || f;
        r && (p.push("data", "isDirtyData", "points", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "_hasPointLabels", "clips", "nodes", "layout", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), !1 !== c.visible && p.push("area", "graph"), b.parallelArrays.forEach(function (a) {
          p.push(a + "Data");
        }), c.data && (c.dataSorting && h(b.options.dataSorting, c.dataSorting), this.setData(c.data, !1)));
        c = Q(g, u, {
          index: "undefined" === typeof g.index ? b.index : g.index,
          pointStart: t(k && k.series && k.series.pointStart, g.pointStart, b.xData[0])
        }, !r && {
          data: b.options.data
        }, c);
        r && c.data && (c.data = b.options.data);
        p = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(p);
        p.forEach(function (a) {
          p[a] = b[a];
          delete b[a];
        });
        g = !1;

        if (l[m]) {
          if (g = m !== b.type, b.remove(!1, !1, !1, !0), g) if (Object.setPrototypeOf) Object.setPrototypeOf(b, l[m].prototype);else {
            k = Object.hasOwnProperty.call(b, "hcEvents") && b.hcEvents;

            for (q in n) {
              b[q] = void 0;
            }

            h(b, l[m].prototype);
            k ? b.hcEvents = k : delete b.hcEvents;
          }
        } else a(17, !0, e, {
          missingModuleFor: m
        });

        p.forEach(function (a) {
          b[a] = p[a];
        });
        b.init(e, c);

        if (r && this.points) {
          var w = b.options;
          !1 === w.visible ? (v.graphic = 1, v.dataLabel = 1) : b._hasPointLabels || (c = w.marker, m = w.dataLabels, c && (!1 === c.enabled || "symbol" in c) && (v.graphic = 1), m && !1 === m.enabled && (v.dataLabel = 1));
          this.points.forEach(function (a) {
            a && a.series && (a.resolveColor(), Object.keys(v).length && a.destroyElements(v), !1 === w.showInLegend && a.legendItem && e.legend.destroyItem(a));
          }, this);
        }

        b.initialType = f;
        e.linkSeries();
        g && b.linkedSeries.length && (b.isDirtyData = !0);
        A(this, "afterUpdate");
        t(d, !0) && e.redraw(r ? void 0 : !1);
      };

      b.prototype.setName = function (a) {
        this.name = this.options.name = this.userOptions.name = a;
        this.chart.isDirtyLegend = !0;
      };

      b.prototype.hasOptionChanged = function (a) {
        var c = this.options[a],
            d = this.chart.options.plotOptions,
            b = this.userOptions[a];
        return b ? c !== b : c !== t(d && d[this.type] && d[this.type][a], d && d.series && d.series[a], c);
      };

      b.prototype.onMouseOver = function () {
        var a = this.chart,
            c = a.hoverSeries;
        a.pointer.setHoverChartIndex();
        if (c && c !== this) c.onMouseOut();
        this.options.events.mouseOver && A(this, "mouseOver");
        this.setState("hover");
        a.hoverSeries = this;
      };

      b.prototype.onMouseOut = function () {
        var a = this.options,
            c = this.chart,
            d = c.tooltip,
            b = c.hoverPoint;
        c.hoverSeries = null;
        if (b) b.onMouseOut();
        this && a.events.mouseOut && A(this, "mouseOut");
        !d || this.stickyTracking || d.shared && !this.noSharedTooltip || d.hide();
        c.series.forEach(function (a) {
          a.setState("", !0);
        });
      };

      b.prototype.setState = function (a, c) {
        var d = this,
            b = d.options,
            e = d.graph,
            h = b.inactiveOtherPoints,
            g = b.states,
            f = b.lineWidth,
            k = b.opacity,
            m = t(g[a || "normal"] && g[a || "normal"].animation, d.chart.options.chart.animation);
        b = 0;
        a = a || "";

        if (d.state !== a && ([d.group, d.markerGroup, d.dataLabelsGroup].forEach(function (c) {
          c && (d.state && c.removeClass("highcharts-series-" + d.state), a && c.addClass("highcharts-series-" + a));
        }), d.state = a, !d.chart.styledMode)) {
          if (g[a] && !1 === g[a].enabled) return;
          a && (f = g[a].lineWidth || f + (g[a].lineWidthPlus || 0), k = t(g[a].opacity, k));
          if (e && !e.dashstyle) for (g = {
            "stroke-width": f
          }, e.animate(g, m); d["zone-graph-" + b];) {
            d["zone-graph-" + b].animate(g, m), b += 1;
          }
          h || [d.group, d.markerGroup, d.dataLabelsGroup, d.labelBySeries].forEach(function (a) {
            a && a.animate({
              opacity: k
            }, m);
          });
        }

        c && h && d.points && d.setAllPointsToState(a || void 0);
      };

      b.prototype.setAllPointsToState = function (a) {
        this.points.forEach(function (c) {
          c.setState && c.setState(a);
        });
      };

      b.prototype.setVisible = function (a, c) {
        var d = this,
            b = d.chart,
            e = d.legendItem,
            h = b.options.chart.ignoreHiddenSeries,
            g = d.visible;
        var f = (d.visible = a = d.options.visible = d.userOptions.visible = "undefined" === typeof a ? !g : a) ? "show" : "hide";
        ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function (a) {
          if (d[a]) d[a][f]();
        });
        if (b.hoverSeries === d || (b.hoverPoint && b.hoverPoint.series) === d) d.onMouseOut();
        e && b.legend.colorizeItem(d, a);
        d.isDirty = !0;
        d.options.stacking && b.series.forEach(function (a) {
          a.options.stacking && a.visible && (a.isDirty = !0);
        });
        d.linkedSeries.forEach(function (c) {
          c.setVisible(a, !1);
        });
        h && (b.isDirtyBox = !0);
        A(d, f);
        !1 !== c && b.redraw();
      };

      b.prototype.show = function () {
        this.setVisible(!0);
      };

      b.prototype.hide = function () {
        this.setVisible(!1);
      };

      b.prototype.select = function (a) {
        this.selected = a = this.options.selected = "undefined" === typeof a ? !this.selected : a;
        this.checkbox && (this.checkbox.checked = a);
        A(this, a ? "select" : "unselect");
      };

      b.prototype.shouldShowTooltip = function (a, c, d) {
        void 0 === d && (d = {});
        d.series = this;
        d.visiblePlotOnly = !0;
        return this.chart.isInsidePlot(a, c, d);
      };

      b.defaultOptions = {
        lineWidth: 2,
        allowPointSelect: !1,
        crisp: !0,
        showCheckbox: !1,
        animation: {
          duration: 1E3
        },
        events: {},
        marker: {
          enabledThreshold: 2,
          lineColor: H.backgroundColor,
          lineWidth: 0,
          radius: 4,
          states: {
            normal: {
              animation: !0
            },
            hover: {
              animation: {
                duration: 50
              },
              enabled: !0,
              radiusPlus: 2,
              lineWidthPlus: 1
            },
            select: {
              fillColor: H.neutralColor20,
              lineColor: H.neutralColor100,
              lineWidth: 2
            }
          }
        },
        point: {
          events: {}
        },
        dataLabels: {
          animation: {},
          align: "center",
          defer: !0,
          formatter: function formatter() {
            var a = this.series.chart.numberFormatter;
            return "number" !== typeof this.y ? "" : a(this.y, -1);
          },
          padding: 5,
          style: {
            fontSize: "11px",
            fontWeight: "bold",
            color: "contrast",
            textOutline: "1px contrast"
          },
          verticalAlign: "bottom",
          x: 0,
          y: 0
        },
        cropThreshold: 300,
        opacity: 1,
        pointRange: 0,
        softThreshold: !0,
        states: {
          normal: {
            animation: !0
          },
          hover: {
            animation: {
              duration: 50
            },
            lineWidthPlus: 1,
            marker: {},
            halo: {
              size: 10,
              opacity: .25
            }
          },
          select: {
            animation: {
              duration: 0
            }
          },
          inactive: {
            animation: {
              duration: 50
            },
            opacity: .2
          }
        },
        stickyTracking: !0,
        turboThreshold: 1E3,
        findNearestPointBy: "x"
      };
      return b;
    }();

    h(e.prototype, {
      axisTypes: ["xAxis", "yAxis"],
      coll: "series",
      colorCounter: 0,
      cropShoulder: 1,
      directTouch: !1,
      drawLegendSymbol: I.drawLineMarker,
      isCartesian: !0,
      kdAxisArray: ["clientX", "plotY"],
      parallelArrays: ["x", "y"],
      pointClass: G,
      requireSorting: !0,
      sorted: !0
    });
    C.series = e;
    "";
    "";
    return e;
  });
  O(e, "Extensions/ScrollablePlotArea.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Axis/Axis.js"], e["Core/Chart/Chart.js"], e["Core/Series/Series.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function (e, b, I, z, H, G) {
    var D = e.stop,
        B = G.addEvent,
        x = G.createElement,
        w = G.merge,
        v = G.pick;
    "";
    B(I, "afterSetChartSize", function (b) {
      var d = this.options.chart.scrollablePlotArea,
          e = d && d.minWidth;
      d = d && d.minHeight;

      if (!this.renderer.forExport) {
        if (e) {
          if (this.scrollablePixelsX = e = Math.max(0, e - this.chartWidth)) {
            this.scrollablePlotBox = this.renderer.scrollablePlotBox = w(this.plotBox);
            this.plotBox.width = this.plotWidth += e;
            this.inverted ? this.clipBox.height += e : this.clipBox.width += e;
            var f = {
              1: {
                name: "right",
                value: e
              }
            };
          }
        } else d && (this.scrollablePixelsY = e = Math.max(0, d - this.chartHeight)) && (this.scrollablePlotBox = this.renderer.scrollablePlotBox = w(this.plotBox), this.plotBox.height = this.plotHeight += e, this.inverted ? this.clipBox.width += e : this.clipBox.height += e, f = {
          2: {
            name: "bottom",
            value: e
          }
        });

        f && !b.skipAxes && this.axes.forEach(function (d) {
          f[d.side] ? d.getPlotLinePath = function () {
            var b = f[d.side].name,
                e = this[b];
            this[b] = e - f[d.side].value;
            var k = H.Axis.prototype.getPlotLinePath.apply(this, arguments);
            this[b] = e;
            return k;
          } : (d.setAxisSize(), d.setAxisTranslation());
        });
      }
    });
    B(I, "render", function () {
      this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed();
    });

    I.prototype.setUpScrolling = function () {
      var b = this,
          d = {
        WebkitOverflowScrolling: "touch",
        overflowX: "hidden",
        overflowY: "hidden"
      };
      this.scrollablePixelsX && (d.overflowX = "auto");
      this.scrollablePixelsY && (d.overflowY = "auto");
      this.scrollingParent = x("div", {
        className: "highcharts-scrolling-parent"
      }, {
        position: "relative"
      }, this.renderTo);
      this.scrollingContainer = x("div", {
        className: "highcharts-scrolling"
      }, d, this.scrollingParent);
      B(this.scrollingContainer, "scroll", function () {
        b.pointer && delete b.pointer.chartPosition;
      });
      this.innerContainer = x("div", {
        className: "highcharts-inner-container"
      }, null, this.scrollingContainer);
      this.innerContainer.appendChild(this.container);
      this.setUpScrolling = null;
    };

    I.prototype.moveFixedElements = function () {
      var b = this.container,
          d = this.fixedRenderer,
          e = ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "),
          k;
      this.scrollablePixelsX && !this.inverted ? k = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted ? k = ".highcharts-xaxis" : this.scrollablePixelsY && !this.inverted ? k = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (k = ".highcharts-yaxis");
      k && e.push(k + ":not(.highcharts-radial-axis)", k + "-labels:not(.highcharts-radial-axis-labels)");
      e.forEach(function (e) {
        [].forEach.call(b.querySelectorAll(e), function (b) {
          (b.namespaceURI === d.SVG_NS ? d.box : d.box.parentNode).appendChild(b);
          b.style.pointerEvents = "auto";
        });
      });
    };

    I.prototype.applyFixed = function () {
      var b = !this.fixedDiv;
      var d = this.options.chart;
      var e = d.scrollablePlotArea;
      b ? (this.fixedDiv = x("div", {
        className: "highcharts-fixed"
      }, {
        position: "absolute",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: (d.style && d.style.zIndex || 0) + 2,
        top: 0
      }, null, !0), this.scrollingContainer && this.scrollingContainer.parentNode.insertBefore(this.fixedDiv, this.scrollingContainer), this.renderTo.style.overflow = "visible", this.fixedRenderer = d = new H.Renderer(this.fixedDiv, this.chartWidth, this.chartHeight, this.options.chart.style), this.scrollableMask = d.path().attr({
        fill: this.options.chart.backgroundColor || "#fff",
        "fill-opacity": v(e.opacity, .85),
        zIndex: -1
      }).addClass("highcharts-scrollable-mask").add(), B(this, "afterShowResetZoom", this.moveFixedElements), B(this, "afterDrilldown", this.moveFixedElements), B(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight);
      if (this.scrollableDirty || b) this.scrollableDirty = !1, this.moveFixedElements();
      d = this.chartWidth + (this.scrollablePixelsX || 0);
      var k = this.chartHeight + (this.scrollablePixelsY || 0);
      D(this.container);
      this.container.style.width = d + "px";
      this.container.style.height = k + "px";
      this.renderer.boxWrapper.attr({
        width: d,
        height: k,
        viewBox: [0, 0, d, k].join(" ")
      });
      this.chartBackground.attr({
        width: d,
        height: k
      });
      this.scrollingContainer.style.height = this.chartHeight + "px";
      b && (e.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * e.scrollPositionX), e.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * e.scrollPositionY));
      k = this.axisOffset;
      b = this.plotTop - k[0] - 1;
      e = this.plotLeft - k[3] - 1;
      d = this.plotTop + this.plotHeight + k[2] + 1;
      k = this.plotLeft + this.plotWidth + k[1] + 1;
      var l = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0),
          w = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0);
      b = this.scrollablePixelsX ? [["M", 0, b], ["L", this.plotLeft - 1, b], ["L", this.plotLeft - 1, d], ["L", 0, d], ["Z"], ["M", l, b], ["L", this.chartWidth, b], ["L", this.chartWidth, d], ["L", l, d], ["Z"]] : this.scrollablePixelsY ? [["M", e, 0], ["L", e, this.plotTop - 1], ["L", k, this.plotTop - 1], ["L", k, 0], ["Z"], ["M", e, w], ["L", e, this.chartHeight], ["L", k, this.chartHeight], ["L", k, w], ["Z"]] : [["M", 0, 0]];
      "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({
        d: b
      });
    };

    B(b, "afterInit", function () {
      this.chart.scrollableDirty = !0;
    });
    B(z, "show", function () {
      this.chart.scrollableDirty = !0;
    });
  });
  O(e, "Core/Axis/StackingAxis.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Utilities.js"]], function (e, b) {
    var D = e.getDeferredAnimation,
        z = b.addEvent,
        H = b.destroyObjectProperties,
        G = b.fireEvent,
        C = b.isNumber,
        B = b.objectEach,
        x = function () {
      function b(b) {
        this.oldStacks = {};
        this.stacks = {};
        this.stacksTouched = 0;
        this.axis = b;
      }

      b.prototype.buildStacks = function () {
        var b = this.axis,
            e = b.series,
            d = b.options.reversedStacks,
            q = e.length,
            k;

        if (!b.isXAxis) {
          this.usePercentage = !1;

          for (k = q; k--;) {
            var l = e[d ? k : q - k - 1];
            l.setStackedPoints();
            l.setGroupedPoints();
          }

          for (k = 0; k < q; k++) {
            e[k].modifyStacks();
          }

          G(b, "afterBuildStacks");
        }
      };

      b.prototype.cleanStacks = function () {
        if (!this.axis.isXAxis) {
          if (this.oldStacks) var b = this.stacks = this.oldStacks;
          B(b, function (b) {
            B(b, function (d) {
              d.cumulative = d.total;
            });
          });
        }
      };

      b.prototype.resetStacks = function () {
        var b = this,
            e = this.stacks;
        this.axis.isXAxis || B(e, function (d) {
          B(d, function (e, f) {
            C(e.touched) && e.touched < b.stacksTouched ? (e.destroy(), delete d[f]) : (e.total = null, e.cumulative = null);
          });
        });
      };

      b.prototype.renderStackTotals = function () {
        var b = this.axis,
            e = b.chart,
            d = e.renderer,
            q = this.stacks;
        b = D(e, b.options.stackLabels && b.options.stackLabels.animation || !1);
        var k = this.stackTotalGroup = this.stackTotalGroup || d.g("stack-labels").attr({
          visibility: "visible",
          zIndex: 6,
          opacity: 0
        }).add();
        k.translate(e.plotLeft, e.plotTop);
        B(q, function (d) {
          B(d, function (d) {
            d.render(k);
          });
        });
        k.animate({
          opacity: 1
        }, b);
      };

      return b;
    }();

    return function () {
      function b() {}

      b.compose = function (e) {
        z(e, "init", b.onInit);
        z(e, "destroy", b.onDestroy);
      };

      b.onDestroy = function () {
        var b = this.stacking;

        if (b) {
          var e = b.stacks;
          B(e, function (d, b) {
            H(d);
            e[b] = null;
          });
          b && b.stackTotalGroup && b.stackTotalGroup.destroy();
        }
      };

      b.onInit = function () {
        this.stacking || (this.stacking = new x(this));
      };

      return b;
    }();
  });
  O(e, "Extensions/Stacking.js", [e["Core/Axis/Axis.js"], e["Core/Chart/Chart.js"], e["Core/FormatUtilities.js"], e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Axis/StackingAxis.js"], e["Core/Utilities.js"]], function (e, b, I, z, H, G, C) {
    var D = I.format,
        x = C.correctFloat,
        w = C.defined,
        v = C.destroyObjectProperties,
        f = C.isArray,
        d = C.isNumber,
        q = C.objectEach,
        k = C.pick;
    "";

    var l = function () {
      function b(d, b, e, f, k) {
        var c = d.chart.inverted;
        this.axis = d;
        this.isNegative = e;
        this.options = b = b || {};
        this.x = f;
        this.total = null;
        this.points = {};
        this.hasValidPoints = !1;
        this.stack = k;
        this.rightCliff = this.leftCliff = 0;
        this.alignOptions = {
          align: b.align || (c ? e ? "left" : "right" : "center"),
          verticalAlign: b.verticalAlign || (c ? "middle" : e ? "bottom" : "top"),
          y: b.y,
          x: b.x
        };
        this.textAlign = b.textAlign || (c ? e ? "right" : "left" : "center");
      }

      b.prototype.destroy = function () {
        v(this, this.axis);
      };

      b.prototype.render = function (d) {
        var b = this.axis.chart,
            e = this.options,
            f = e.format;
        f = f ? D(f, this, b) : e.formatter.call(this);
        this.label ? this.label.attr({
          text: f,
          visibility: "hidden"
        }) : (this.label = b.renderer.label(f, null, null, e.shape, null, null, e.useHTML, !1, "stack-labels"), f = {
          r: e.borderRadius || 0,
          text: f,
          rotation: e.rotation,
          padding: k(e.padding, 5),
          visibility: "hidden"
        }, b.styledMode || (f.fill = e.backgroundColor, f.stroke = e.borderColor, f["stroke-width"] = e.borderWidth, this.label.css(e.style)), this.label.attr(f), this.label.added || this.label.add(d));
        this.label.labelrank = b.plotSizeY;
      };

      b.prototype.setOffset = function (b, e, f, l, m) {
        var c = this.axis,
            g = c.chart;
        l = c.translate(c.stacking.usePercentage ? 100 : l ? l : this.total, 0, 0, 0, 1);
        f = c.translate(f ? f : 0);
        f = w(l) && Math.abs(l - f);
        b = k(m, g.xAxis[0].translate(this.x)) + b;
        c = w(l) && this.getStackBox(g, this, b, l, e, f, c);
        e = this.label;
        f = this.isNegative;
        b = "justify" === k(this.options.overflow, "justify");
        var a = this.textAlign;
        e && c && (m = e.getBBox(), l = e.padding, a = "left" === a ? g.inverted ? -l : l : "right" === a ? m.width : g.inverted && "center" === a ? m.width / 2 : g.inverted ? f ? m.width + l : -l : m.width / 2, f = g.inverted ? m.height / 2 : f ? -l : m.height, this.alignOptions.x = k(this.options.x, 0), this.alignOptions.y = k(this.options.y, 0), c.x -= a, c.y -= f, e.align(this.alignOptions, null, c), g.isInsidePlot(e.alignAttr.x + a - this.alignOptions.x, e.alignAttr.y + f - this.alignOptions.y) ? e.show() : (e.alignAttr.y = -9999, b = !1), b && H.prototype.justifyDataLabel.call(this.axis, e, this.alignOptions, e.alignAttr, m, c), e.attr({
          x: e.alignAttr.x,
          y: e.alignAttr.y
        }), k(!b && this.options.crop, !0) && ((g = d(e.x) && d(e.y) && g.isInsidePlot(e.x - l + e.width, e.y) && g.isInsidePlot(e.x + l, e.y)) || e.hide()));
      };

      b.prototype.getStackBox = function (d, b, e, f, k, c, g) {
        var a = b.axis.reversed,
            h = d.inverted,
            m = g.height + g.pos - (h ? d.plotLeft : d.plotTop);
        b = b.isNegative && !a || !b.isNegative && a;
        return {
          x: h ? b ? f - g.right : f - c + g.pos - d.plotLeft : e + d.xAxis[0].transB - d.plotLeft,
          y: h ? g.height - e - k : b ? m - f - c : m - f,
          width: h ? c : k,
          height: h ? k : c
        };
      };

      return b;
    }();

    b.prototype.getStacks = function () {
      var d = this,
          b = d.inverted;
      d.yAxis.forEach(function (d) {
        d.stacking && d.stacking.stacks && d.hasVisibleSeries && (d.stacking.oldStacks = d.stacking.stacks);
      });
      d.series.forEach(function (e) {
        var f = e.xAxis && e.xAxis.options || {};
        !e.options.stacking || !0 !== e.visible && !1 !== d.options.chart.ignoreHiddenSeries || (e.stackKey = [e.type, k(e.options.stack, ""), b ? f.top : f.left, b ? f.height : f.width].join());
      });
    };

    G.compose(e);

    H.prototype.setGroupedPoints = function () {
      var d = this.yAxis.stacking;
      this.options.centerInCategory && (this.is("column") || this.is("columnrange")) && !this.options.stacking && 1 < this.chart.series.length ? H.prototype.setStackedPoints.call(this, "group") : d && q(d.stacks, function (b, e) {
        "group" === e.slice(-5) && (q(b, function (d) {
          return d.destroy();
        }), delete d.stacks[e]);
      });
    };

    H.prototype.setStackedPoints = function (d) {
      var b = d || this.options.stacking;

      if (b && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
        var e = this.processedXData,
            q = this.processedYData,
            v = [],
            m = q.length,
            c = this.options,
            g = c.threshold,
            a = k(c.startFromThreshold && g, 0);
        c = c.stack;
        d = d ? this.type + "," + b : this.stackKey;
        var h = "-" + d,
            r = this.negStacks,
            A = this.yAxis,
            y = A.stacking.stacks,
            D = A.stacking.oldStacks,
            B,
            C;
        A.stacking.stacksTouched += 1;

        for (C = 0; C < m; C++) {
          var z = e[C];
          var Q = q[C];
          var M = this.getStackIndicator(M, z, this.index);
          var t = M.key;
          var p = (B = r && Q < (a ? 0 : g)) ? h : d;
          y[p] || (y[p] = {});
          y[p][z] || (D[p] && D[p][z] ? (y[p][z] = D[p][z], y[p][z].total = null) : y[p][z] = new l(A, A.options.stackLabels, B, z, c));
          p = y[p][z];
          null !== Q ? (p.points[t] = p.points[this.index] = [k(p.cumulative, a)], w(p.cumulative) || (p.base = t), p.touched = A.stacking.stacksTouched, 0 < M.index && !1 === this.singleStacks && (p.points[t][0] = p.points[this.index + "," + z + ",0"][0])) : p.points[t] = p.points[this.index] = null;
          "percent" === b ? (B = B ? d : h, r && y[B] && y[B][z] ? (B = y[B][z], p.total = B.total = Math.max(B.total, p.total) + Math.abs(Q) || 0) : p.total = x(p.total + (Math.abs(Q) || 0))) : "group" === b ? (f(Q) && (Q = Q[0]), null !== Q && (p.total = (p.total || 0) + 1)) : p.total = x(p.total + (Q || 0));
          p.cumulative = "group" === b ? (p.total || 1) - 1 : k(p.cumulative, a) + (Q || 0);
          null !== Q && (p.points[t].push(p.cumulative), v[C] = p.cumulative, p.hasValidPoints = !0);
        }

        "percent" === b && (A.stacking.usePercentage = !0);
        "group" !== b && (this.stackedYData = v);
        A.stacking.oldStacks = {};
      }
    };

    H.prototype.modifyStacks = function () {
      var d = this,
          b = d.stackKey,
          e = d.yAxis.stacking.stacks,
          f = d.processedXData,
          k,
          m = d.options.stacking;
      d[m + "Stacker"] && [b, "-" + b].forEach(function (c) {
        for (var b = f.length, a, h; b--;) {
          if (a = f[b], k = d.getStackIndicator(k, a, d.index, c), h = (a = e[c] && e[c][a]) && a.points[k.key]) d[m + "Stacker"](h, a, b);
        }
      });
    };

    H.prototype.percentStacker = function (d, b, e) {
      b = b.total ? 100 / b.total : 0;
      d[0] = x(d[0] * b);
      d[1] = x(d[1] * b);
      this.stackedYData[e] = d[1];
    };

    H.prototype.getStackIndicator = function (d, b, e, f) {
      !w(d) || d.x !== b || f && d.key !== f ? d = {
        x: b,
        index: 0,
        key: f
      } : d.index++;
      d.key = [e, b, d.index].join();
      return d;
    };

    z.StackItem = l;
    return z.StackItem;
  });
  O(e, "Series/Line/LineSeries.js", [e["Core/Color/Palette.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (e, b, I, z) {
    var D = this && this.__extends || function () {
      var _b2 = function b(e, w) {
        _b2 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (b, e) {
          b.__proto__ = e;
        } || function (b, e) {
          for (var d in e) {
            e.hasOwnProperty(d) && (b[d] = e[d]);
          }
        };

        return _b2(e, w);
      };

      return function (e, w) {
        function v() {
          this.constructor = e;
        }

        _b2(e, w);

        e.prototype = null === w ? Object.create(w) : (v.prototype = w.prototype, new v());
      };
    }(),
        G = z.defined,
        C = z.merge;

    z = function (B) {
      function x() {
        var b = null !== B && B.apply(this, arguments) || this;
        b.data = void 0;
        b.options = void 0;
        b.points = void 0;
        return b;
      }

      D(x, B);

      x.prototype.drawGraph = function () {
        var b = this,
            v = this.options,
            f = (this.gappedPath || this.getGraphPath).call(this),
            d = this.chart.styledMode,
            q = [["graph", "highcharts-graph"]];
        d || q[0].push(v.lineColor || this.color || e.neutralColor20, v.dashStyle);
        q = b.getZonesGraphs(q);
        q.forEach(function (e, l) {
          var k = e[0],
              q = b[k],
              n = q ? "animate" : "attr";
          q ? (q.endX = b.preventGraphAnimation ? null : f.xMap, q.animate({
            d: f
          })) : f.length && (b[k] = q = b.chart.renderer.path(f).addClass(e[1]).attr({
            zIndex: 1
          }).add(b.group));
          q && !d && (k = {
            stroke: e[2],
            "stroke-width": v.lineWidth,
            fill: b.fillGraph && b.color || "none"
          }, e[3] ? k.dashstyle = e[3] : "square" !== v.linecap && (k["stroke-linecap"] = k["stroke-linejoin"] = "round"), q[n](k).shadow(2 > l && v.shadow));
          q && (q.startX = f.xMap, q.isArea = f.isArea);
        });
      };

      x.prototype.getGraphPath = function (b, e, f) {
        var d = this,
            q = d.options,
            k = q.step,
            l,
            v = [],
            u = [],
            n;
        b = b || d.points;
        (l = b.reversed) && b.reverse();
        (k = {
          right: 1,
          center: 2
        }[k] || k && 3) && l && (k = 4 - k);
        b = this.getValidPoints(b, !1, !(q.connectNulls && !e && !f));
        b.forEach(function (l, w) {
          var m = l.plotX,
              c = l.plotY,
              g = b[w - 1];
          (l.leftCliff || g && g.rightCliff) && !f && (n = !0);
          l.isNull && !G(e) && 0 < w ? n = !q.connectNulls : l.isNull && !e ? n = !0 : (0 === w || n ? w = [["M", l.plotX, l.plotY]] : d.getPointSpline ? w = [d.getPointSpline(b, l, w)] : k ? (w = 1 === k ? [["L", g.plotX, c]] : 2 === k ? [["L", (g.plotX + m) / 2, g.plotY], ["L", (g.plotX + m) / 2, c]] : [["L", m, g.plotY]], w.push(["L", m, c])) : w = [["L", m, c]], u.push(l.x), k && (u.push(l.x), 2 === k && u.push(l.x)), v.push.apply(v, w), n = !1);
        });
        v.xMap = u;
        return d.graphPath = v;
      };

      x.prototype.getZonesGraphs = function (b) {
        this.zones.forEach(function (e, f) {
          f = ["zone-graph-" + f, "highcharts-graph highcharts-zone-graph-" + f + " " + (e.className || "")];
          this.chart.styledMode || f.push(e.color || this.color, e.dashStyle || this.options.dashStyle);
          b.push(f);
        }, this);
        return b;
      };

      x.defaultOptions = C(b.defaultOptions, {});
      return x;
    }(b);

    I.registerSeriesType("line", z);
    "";
    return z;
  });
  O(e, "Series/Area/AreaSeries.js", [e["Core/Color/Color.js"], e["Mixins/LegendSymbol.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (e, b, I, z) {
    var D = this && this.__extends || function () {
      var _b3 = function b(e, d) {
        _b3 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (b, d) {
          b.__proto__ = d;
        } || function (b, d) {
          for (var e in d) {
            d.hasOwnProperty(e) && (b[e] = d[e]);
          }
        };

        return _b3(e, d);
      };

      return function (e, d) {
        function f() {
          this.constructor = e;
        }

        _b3(e, d);

        e.prototype = null === d ? Object.create(d) : (f.prototype = d.prototype, new f());
      };
    }(),
        G = e.parse,
        C = I.seriesTypes.line;

    e = z.extend;
    var B = z.merge,
        x = z.objectEach,
        w = z.pick;

    z = function (b) {
      function e() {
        var d = null !== b && b.apply(this, arguments) || this;
        d.data = void 0;
        d.options = void 0;
        d.points = void 0;
        return d;
      }

      D(e, b);

      e.prototype.drawGraph = function () {
        this.areaPath = [];
        b.prototype.drawGraph.apply(this);
        var d = this,
            e = this.areaPath,
            f = this.options,
            l = [["area", "highcharts-area", this.color, f.fillColor]];
        this.zones.forEach(function (b, e) {
          l.push(["zone-area-" + e, "highcharts-area highcharts-zone-area-" + e + " " + b.className, b.color || d.color, b.fillColor || f.fillColor]);
        });
        l.forEach(function (b) {
          var k = b[0],
              l = d[k],
              q = l ? "animate" : "attr",
              v = {};
          l ? (l.endX = d.preventGraphAnimation ? null : e.xMap, l.animate({
            d: e
          })) : (v.zIndex = 0, l = d[k] = d.chart.renderer.path(e).addClass(b[1]).add(d.group), l.isArea = !0);
          d.chart.styledMode || (v.fill = w(b[3], G(b[2]).setOpacity(w(f.fillOpacity, .75)).get()));
          l[q](v);
          l.startX = e.xMap;
          l.shiftUnit = f.step ? 2 : 1;
        });
      };

      e.prototype.getGraphPath = function (b) {
        var d = C.prototype.getGraphPath,
            e = this.options,
            f = e.stacking,
            v = this.yAxis,
            u,
            n = [],
            x = [],
            E = this.index,
            m = v.stacking.stacks[this.stackKey],
            c = e.threshold,
            g = Math.round(v.getThreshold(e.threshold));
        e = w(e.connectNulls, "percent" === f);

        var a = function a(_a2, d, e) {
          var h = b[_a2];
          _a2 = f && m[h.x].points[E];
          var k = h[e + "Null"] || 0;
          e = h[e + "Cliff"] || 0;
          h = !0;

          if (e || k) {
            var l = (k ? _a2[0] : _a2[1]) + e;
            var q = _a2[0] + e;
            h = !!k;
          } else !f && b[d] && b[d].isNull && (l = q = c);

          "undefined" !== typeof l && (x.push({
            plotX: r,
            plotY: null === l ? g : v.getThreshold(l),
            isNull: h,
            isCliff: !0
          }), n.push({
            plotX: r,
            plotY: null === q ? g : v.getThreshold(q),
            doCurve: !1
          }));
        };

        b = b || this.points;
        f && (b = this.getStackPoints(b));

        for (u = 0; u < b.length; u++) {
          f || (b[u].leftCliff = b[u].rightCliff = b[u].leftNull = b[u].rightNull = void 0);
          var h = b[u].isNull;
          var r = w(b[u].rectPlotX, b[u].plotX);
          var A = f ? w(b[u].yBottom, g) : g;
          if (!h || e) e || a(u, u - 1, "left"), h && !f && e || (x.push(b[u]), n.push({
            x: u,
            plotX: r,
            plotY: A
          })), e || a(u, u + 1, "right");
        }

        u = d.call(this, x, !0, !0);
        n.reversed = !0;
        h = d.call(this, n, !0, !0);
        (A = h[0]) && "M" === A[0] && (h[0] = ["L", A[1], A[2]]);
        h = u.concat(h);
        h.length && h.push(["Z"]);
        d = d.call(this, x, !1, e);
        h.xMap = u.xMap;
        this.areaPath = h;
        return d;
      };

      e.prototype.getStackPoints = function (b) {
        var d = this,
            e = [],
            f = [],
            v = this.xAxis,
            u = this.yAxis,
            n = u.stacking.stacks[this.stackKey],
            D = {},
            E = u.series,
            m = E.length,
            c = u.options.reversedStacks ? 1 : -1,
            g = E.indexOf(d);
        b = b || this.points;

        if (this.options.stacking) {
          for (var a = 0; a < b.length; a++) {
            b[a].leftNull = b[a].rightNull = void 0, D[b[a].x] = b[a];
          }

          x(n, function (a, c) {
            null !== a.total && f.push(c);
          });
          f.sort(function (a, c) {
            return a - c;
          });
          var h = E.map(function (a) {
            return a.visible;
          });
          f.forEach(function (a, b) {
            var k = 0,
                l,
                r;
            if (D[a] && !D[a].isNull) e.push(D[a]), [-1, 1].forEach(function (e) {
              var k = 1 === e ? "rightNull" : "leftNull",
                  q = 0,
                  t = n[f[b + e]];
              if (t) for (var p = g; 0 <= p && p < m;) {
                var v = E[p].index;
                l = t.points[v];
                l || (v === d.index ? D[a][k] = !0 : h[p] && (r = n[a].points[v]) && (q -= r[1] - r[0]));
                p += c;
              }
              D[a][1 === e ? "rightCliff" : "leftCliff"] = q;
            });else {
              for (var q = g; 0 <= q && q < m;) {
                if (l = n[a].points[E[q].index]) {
                  k = l[1];
                  break;
                }

                q += c;
              }

              k = w(k, 0);
              k = u.translate(k, 0, 1, 0, 1);
              e.push({
                isNull: !0,
                plotX: v.translate(a, 0, 0, 0, 1),
                x: a,
                plotY: k,
                yBottom: k
              });
            }
          });
        }

        return e;
      };

      e.defaultOptions = B(C.defaultOptions, {
        threshold: 0
      });
      return e;
    }(C);

    e(z.prototype, {
      singleStacks: !1,
      drawLegendSymbol: b.drawRectangle
    });
    I.registerSeriesType("area", z);
    "";
    return z;
  });
  O(e, "Series/Spline/SplineSeries.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (e, b) {
    var D = this && this.__extends || function () {
      var _b4 = function b(e, x) {
        _b4 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (b, e) {
          b.__proto__ = e;
        } || function (b, e) {
          for (var f in e) {
            e.hasOwnProperty(f) && (b[f] = e[f]);
          }
        };

        return _b4(e, x);
      };

      return function (e, x) {
        function w() {
          this.constructor = e;
        }

        _b4(e, x);

        e.prototype = null === x ? Object.create(x) : (w.prototype = x.prototype, new w());
      };
    }(),
        z = e.seriesTypes.line,
        H = b.merge,
        G = b.pick;

    b = function (b) {
      function e() {
        var e = null !== b && b.apply(this, arguments) || this;
        e.data = void 0;
        e.options = void 0;
        e.points = void 0;
        return e;
      }

      D(e, b);

      e.prototype.getPointSpline = function (b, e, v) {
        var f = e.plotX || 0,
            d = e.plotY || 0,
            q = b[v - 1];
        v = b[v + 1];

        if (q && !q.isNull && !1 !== q.doCurve && !e.isCliff && v && !v.isNull && !1 !== v.doCurve && !e.isCliff) {
          b = q.plotY || 0;
          var k = v.plotX || 0;
          v = v.plotY || 0;
          var l = 0;
          var w = (1.5 * f + (q.plotX || 0)) / 2.5;
          var u = (1.5 * d + b) / 2.5;
          k = (1.5 * f + k) / 2.5;
          var n = (1.5 * d + v) / 2.5;
          k !== w && (l = (n - u) * (k - f) / (k - w) + d - n);
          u += l;
          n += l;
          u > b && u > d ? (u = Math.max(b, d), n = 2 * d - u) : u < b && u < d && (u = Math.min(b, d), n = 2 * d - u);
          n > v && n > d ? (n = Math.max(v, d), u = 2 * d - n) : n < v && n < d && (n = Math.min(v, d), u = 2 * d - n);
          e.rightContX = k;
          e.rightContY = n;
        }

        e = ["C", G(q.rightContX, q.plotX, 0), G(q.rightContY, q.plotY, 0), G(w, f, 0), G(u, d, 0), f, d];
        q.rightContX = q.rightContY = void 0;
        return e;
      };

      e.defaultOptions = H(z.defaultOptions);
      return e;
    }(z);

    e.registerSeriesType("spline", b);
    "";
    return b;
  });
  O(e, "Series/AreaSpline/AreaSplineSeries.js", [e["Series/Area/AreaSeries.js"], e["Series/Spline/SplineSeries.js"], e["Mixins/LegendSymbol.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (e, b, I, z, H) {
    var D = this && this.__extends || function () {
      var _b5 = function b(e, f) {
        _b5 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (b, e) {
          b.__proto__ = e;
        } || function (b, e) {
          for (var d in e) {
            e.hasOwnProperty(d) && (b[d] = e[d]);
          }
        };

        return _b5(e, f);
      };

      return function (e, f) {
        function d() {
          this.constructor = e;
        }

        _b5(e, f);

        e.prototype = null === f ? Object.create(f) : (d.prototype = f.prototype, new d());
      };
    }(),
        C = e.prototype,
        B = H.extend,
        x = H.merge;

    H = function (w) {
      function v() {
        var b = null !== w && w.apply(this, arguments) || this;
        b.data = void 0;
        b.points = void 0;
        b.options = void 0;
        return b;
      }

      D(v, w);
      v.defaultOptions = x(b.defaultOptions, e.defaultOptions);
      return v;
    }(b);

    B(H.prototype, {
      getGraphPath: C.getGraphPath,
      getStackPoints: C.getStackPoints,
      drawGraph: C.drawGraph,
      drawLegendSymbol: I.drawRectangle
    });
    z.registerSeriesType("areaspline", H);
    "";
    return H;
  });
  O(e, "Series/Column/ColumnSeries.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Color/Color.js"], e["Core/Globals.js"], e["Mixins/LegendSymbol.js"], e["Core/Color/Palette.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (e, b, I, z, H, G, C, B) {
    var x = this && this.__extends || function () {
      var _c = function c(b, a) {
        _c = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (a, c) {
          a.__proto__ = c;
        } || function (a, c) {
          for (var b in c) {
            c.hasOwnProperty(b) && (a[b] = c[b]);
          }
        };

        return _c(b, a);
      };

      return function (b, a) {
        function d() {
          this.constructor = b;
        }

        _c(b, a);

        b.prototype = null === a ? Object.create(a) : (d.prototype = a.prototype, new d());
      };
    }(),
        w = e.animObject,
        v = b.parse,
        f = I.hasTouch;

    e = I.noop;
    var d = B.clamp,
        q = B.css,
        k = B.defined,
        l = B.extend,
        D = B.fireEvent,
        u = B.isArray,
        n = B.isNumber,
        J = B.merge,
        E = B.pick,
        m = B.objectEach;

    B = function (c) {
      function b() {
        var a = null !== c && c.apply(this, arguments) || this;
        a.borderWidth = void 0;
        a.data = void 0;
        a.group = void 0;
        a.options = void 0;
        a.points = void 0;
        return a;
      }

      x(b, c);

      b.prototype.animate = function (a) {
        var c = this,
            b = this.yAxis,
            e = c.options,
            g = this.chart.inverted,
            f = {},
            k = g ? "translateX" : "translateY";
        if (a) f.scaleY = .001, a = d(b.toPixels(e.threshold), b.pos, b.pos + b.len), g ? f.translateX = a - b.len : f.translateY = a, c.clipBox && c.setClip(), c.group.attr(f);else {
          var m = Number(c.group.attr(k));
          c.group.animate({
            scaleY: 1
          }, l(w(c.options.animation), {
            step: function step(a, d) {
              c.group && (f[k] = m + d.pos * (b.pos - m), c.group.attr(f));
            }
          }));
        }
      };

      b.prototype.init = function (a, b) {
        c.prototype.init.apply(this, arguments);
        var d = this;
        a = d.chart;
        a.hasRendered && a.series.forEach(function (a) {
          a.type === d.type && (a.isDirty = !0);
        });
      };

      b.prototype.getColumnMetrics = function () {
        var a = this,
            c = a.options,
            b = a.xAxis,
            d = a.yAxis,
            e = b.options.reversedStacks;
        e = b.reversed && !e || !b.reversed && e;
        var g,
            f = {},
            k = 0;
        !1 === c.grouping ? k = 1 : a.chart.series.forEach(function (c) {
          var b = c.yAxis,
              e = c.options;

          if (c.type === a.type && (c.visible || !a.chart.options.chart.ignoreHiddenSeries) && d.len === b.len && d.pos === b.pos) {
            if (e.stacking && "group" !== e.stacking) {
              g = c.stackKey;
              "undefined" === typeof f[g] && (f[g] = k++);
              var h = f[g];
            } else !1 !== e.grouping && (h = k++);

            c.columnIndex = h;
          }
        });
        var m = Math.min(Math.abs(b.transA) * (b.ordinal && b.ordinal.slope || c.pointRange || b.closestPointRange || b.tickInterval || 1), b.len),
            l = m * c.groupPadding,
            n = (m - 2 * l) / (k || 1);
        c = Math.min(c.maxPointWidth || b.len, E(c.pointWidth, n * (1 - 2 * c.pointPadding)));
        a.columnMetrics = {
          width: c,
          offset: (n - c) / 2 + (l + ((a.columnIndex || 0) + (e ? 1 : 0)) * n - m / 2) * (e ? -1 : 1),
          paddedWidth: n,
          columnCount: k
        };
        return a.columnMetrics;
      };

      b.prototype.crispCol = function (a, c, b, d) {
        var e = this.chart,
            h = this.borderWidth,
            g = -(h % 2 ? .5 : 0);
        h = h % 2 ? .5 : 1;
        e.inverted && e.renderer.isVML && (h += 1);
        this.options.crisp && (b = Math.round(a + b) + g, a = Math.round(a) + g, b -= a);
        d = Math.round(c + d) + h;
        g = .5 >= Math.abs(c) && .5 < d;
        c = Math.round(c) + h;
        d -= c;
        g && d && (--c, d += 1);
        return {
          x: a,
          y: c,
          width: b,
          height: d
        };
      };

      b.prototype.adjustForMissingColumns = function (a, c, b, d) {
        var e = this,
            h = this.options.stacking;

        if (!b.isNull && 1 < d.columnCount) {
          var g = 0,
              f = 0;
          m(this.yAxis.stacking && this.yAxis.stacking.stacks, function (a) {
            if ("number" === typeof b.x && (a = a[b.x.toString()])) {
              var c = a.points[e.index],
                  d = a.total;
              h ? (c && (g = f), a.hasValidPoints && f++) : u(c) && (g = c[1], f = d || 0);
            }
          });
          a = (b.plotX || 0) + ((f - 1) * d.paddedWidth + c) / 2 - c - g * d.paddedWidth;
        }

        return a;
      };

      b.prototype.translate = function () {
        var a = this,
            c = a.chart,
            b = a.options,
            e = a.dense = 2 > a.closestPointRange * a.xAxis.transA;
        e = a.borderWidth = E(b.borderWidth, e ? 0 : 1);
        var g = a.xAxis,
            f = a.yAxis,
            m = b.threshold,
            l = a.translatedThreshold = f.getThreshold(m),
            q = E(b.minPointLength, 5),
            v = a.getColumnMetrics(),
            u = v.width,
            t = a.barW = Math.max(u, 1 + 2 * e),
            p = a.pointXOffset = v.offset,
            w = a.dataMin,
            x = a.dataMax;
        c.inverted && (l -= .5);
        b.pointPadding && (t = Math.ceil(t));
        G.prototype.translate.apply(a);
        a.points.forEach(function (e) {
          var h = E(e.yBottom, l),
              r = 999 + Math.abs(h),
              y = u,
              A = e.plotX || 0;
          r = d(e.plotY, -r, f.len + r);
          A += p;
          var D = t,
              B = Math.min(r, h),
              z = Math.max(r, h) - B;

          if (q && Math.abs(z) < q) {
            z = q;
            var C = !f.reversed && !e.negative || f.reversed && e.negative;
            n(m) && n(x) && e.y === m && x <= m && (f.min || 0) < m && (w !== x || (f.max || 0) <= m) && (C = !C);
            B = Math.abs(B - l) > q ? h - q : l - (C ? q : 0);
          }

          k(e.options.pointWidth) && (y = D = Math.ceil(e.options.pointWidth), A -= Math.round((y - u) / 2));
          b.centerInCategory && (A = a.adjustForMissingColumns(A, y, e, v));
          e.barX = A;
          e.pointWidth = y;
          e.tooltipPos = c.inverted ? [d(f.len + f.pos - c.plotLeft - r, f.pos - c.plotLeft, f.len + f.pos - c.plotLeft), g.len + g.pos - c.plotTop - A - D / 2, z] : [g.left - c.plotLeft + A + D / 2, d(r + f.pos - c.plotTop, f.pos - c.plotTop, f.len + f.pos - c.plotTop), z];
          e.shapeType = a.pointClass.prototype.shapeType || "rect";
          e.shapeArgs = a.crispCol.apply(a, e.isNull ? [A, l, D, 0] : [A, B, D, z]);
        });
      };

      b.prototype.drawGraph = function () {
        this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
      };

      b.prototype.pointAttribs = function (a, c) {
        var b = this.options,
            d = this.pointAttrToOptions || {};
        var e = d.stroke || "borderColor";
        var h = d["stroke-width"] || "borderWidth",
            g = a && a.color || this.color,
            f = a && a[e] || b[e] || g,
            k = a && a[h] || b[h] || this[h] || 0;
        d = a && a.options.dashStyle || b.dashStyle;
        var m = E(a && a.opacity, b.opacity, 1);

        if (a && this.zones.length) {
          var l = a.getZone();
          g = a.options.color || l && (l.color || a.nonZonedColor) || this.color;
          l && (f = l.borderColor || f, d = l.dashStyle || d, k = l.borderWidth || k);
        }

        c && a && (a = J(b.states[c], a.options.states && a.options.states[c] || {}), c = a.brightness, g = a.color || "undefined" !== typeof c && v(g).brighten(a.brightness).get() || g, f = a[e] || f, k = a[h] || k, d = a.dashStyle || d, m = E(a.opacity, m));
        e = {
          fill: g,
          stroke: f,
          "stroke-width": k,
          opacity: m
        };
        d && (e.dashstyle = d);
        return e;
      };

      b.prototype.drawPoints = function () {
        var a = this,
            c = this.chart,
            b = a.options,
            d = c.renderer,
            e = b.animationLimit || 250,
            g;
        a.points.forEach(function (h) {
          var f = h.graphic,
              k = !!f,
              m = f && c.pointCount < e ? "animate" : "attr";

          if (n(h.plotY) && null !== h.y) {
            g = h.shapeArgs;
            f && h.hasNewShapeType() && (f = f.destroy());
            a.enabledDataSorting && (h.startXPos = a.xAxis.reversed ? -(g ? g.width || 0 : 0) : a.xAxis.width);
            f || (h.graphic = f = d[h.shapeType](g).add(h.group || a.group)) && a.enabledDataSorting && c.hasRendered && c.pointCount < e && (f.attr({
              x: h.startXPos
            }), k = !0, m = "animate");
            if (f && k) f[m](J(g));
            if (b.borderRadius) f[m]({
              r: b.borderRadius
            });
            c.styledMode || f[m](a.pointAttribs(h, h.selected && "select")).shadow(!1 !== h.allowShadow && b.shadow, null, b.stacking && !b.borderRadius);
            f && (f.addClass(h.getClassName(), !0), f.attr({
              visibility: h.visible ? "inherit" : "hidden"
            }));
          } else f && (h.graphic = f.destroy());
        });
      };

      b.prototype.drawTracker = function () {
        var a = this,
            c = a.chart,
            b = c.pointer,
            d = function d(a) {
          var c = b.getPointFromEvent(a);
          "undefined" !== typeof c && (b.isDirectTouch = !0, c.onMouseOver(a));
        },
            e;

        a.points.forEach(function (a) {
          e = u(a.dataLabels) ? a.dataLabels : a.dataLabel ? [a.dataLabel] : [];
          a.graphic && (a.graphic.element.point = a);
          e.forEach(function (c) {
            c.div ? c.div.point = a : c.element.point = a;
          });
        });
        a._hasTracking || (a.trackerGroups.forEach(function (e) {
          if (a[e]) {
            a[e].addClass("highcharts-tracker").on("mouseover", d).on("mouseout", function (a) {
              b.onTrackerMouseOut(a);
            });
            if (f) a[e].on("touchstart", d);
            !c.styledMode && a.options.cursor && a[e].css(q).css({
              cursor: a.options.cursor
            });
          }
        }), a._hasTracking = !0);
        D(this, "afterDrawTracker");
      };

      b.prototype.remove = function () {
        var a = this,
            c = a.chart;
        c.hasRendered && c.series.forEach(function (c) {
          c.type === a.type && (c.isDirty = !0);
        });
        G.prototype.remove.apply(a, arguments);
      };

      b.defaultOptions = J(G.defaultOptions, {
        borderRadius: 0,
        centerInCategory: !1,
        groupPadding: .2,
        marker: null,
        pointPadding: .1,
        minPointLength: 0,
        cropThreshold: 50,
        pointRange: null,
        states: {
          hover: {
            halo: !1,
            brightness: .1
          },
          select: {
            color: H.neutralColor20,
            borderColor: H.neutralColor100
          }
        },
        dataLabels: {
          align: void 0,
          verticalAlign: void 0,
          y: void 0
        },
        startFromThreshold: !0,
        stickyTracking: !1,
        tooltip: {
          distance: 6
        },
        threshold: 0,
        borderColor: H.backgroundColor
      });
      return b;
    }(G);

    l(B.prototype, {
      cropShoulder: 0,
      directTouch: !0,
      drawLegendSymbol: z.drawRectangle,
      getSymbol: e,
      negStacks: !0,
      trackerGroups: ["group", "dataLabelsGroup"]
    });
    C.registerSeriesType("column", B);
    "";
    "";
    return B;
  });
  O(e, "Series/Bar/BarSeries.js", [e["Series/Column/ColumnSeries.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (e, b, I) {
    var D = this && this.__extends || function () {
      var _b6 = function b(e, x) {
        _b6 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (b, e) {
          b.__proto__ = e;
        } || function (b, e) {
          for (var f in e) {
            e.hasOwnProperty(f) && (b[f] = e[f]);
          }
        };

        return _b6(e, x);
      };

      return function (e, x) {
        function w() {
          this.constructor = e;
        }

        _b6(e, x);

        e.prototype = null === x ? Object.create(x) : (w.prototype = x.prototype, new w());
      };
    }(),
        H = I.extend,
        G = I.merge;

    I = function (b) {
      function B() {
        var e = null !== b && b.apply(this, arguments) || this;
        e.data = void 0;
        e.options = void 0;
        e.points = void 0;
        return e;
      }

      D(B, b);
      B.defaultOptions = G(e.defaultOptions, {});
      return B;
    }(e);

    H(I.prototype, {
      inverted: !0
    });
    b.registerSeriesType("bar", I);
    "";
    return I;
  });
  O(e, "Series/Scatter/ScatterSeries.js", [e["Series/Column/ColumnSeries.js"], e["Series/Line/LineSeries.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (e, b, I, z) {
    var D = this && this.__extends || function () {
      var _b7 = function b(e, v) {
        _b7 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (b, d) {
          b.__proto__ = d;
        } || function (b, d) {
          for (var e in d) {
            d.hasOwnProperty(e) && (b[e] = d[e]);
          }
        };

        return _b7(e, v);
      };

      return function (e, v) {
        function f() {
          this.constructor = e;
        }

        _b7(e, v);

        e.prototype = null === v ? Object.create(v) : (f.prototype = v.prototype, new f());
      };
    }(),
        G = z.addEvent,
        C = z.extend,
        B = z.merge;

    z = function (e) {
      function w() {
        var b = null !== e && e.apply(this, arguments) || this;
        b.data = void 0;
        b.options = void 0;
        b.points = void 0;
        return b;
      }

      D(w, e);

      w.prototype.applyJitter = function () {
        var b = this,
            e = this.options.jitter,
            d = this.points.length;
        e && this.points.forEach(function (f, k) {
          ["x", "y"].forEach(function (l, q) {
            var v = "plot" + l.toUpperCase();

            if (e[l] && !f.isNull) {
              var n = b[l + "Axis"];
              var w = e[l] * n.transA;

              if (n && !n.isLog) {
                var E = Math.max(0, f[v] - w);
                n = Math.min(n.len, f[v] + w);
                q = 1E4 * Math.sin(k + q * d);
                f[v] = E + (n - E) * (q - Math.floor(q));
                "x" === l && (f.clientX = f.plotX);
              }
            }
          });
        });
      };

      w.prototype.drawGraph = function () {
        (this.options.lineWidth || 0 === this.options.lineWidth && this.graph && this.graph.strokeWidth()) && e.prototype.drawGraph.call(this);
      };

      w.defaultOptions = B(b.defaultOptions, {
        lineWidth: 0,
        findNearestPointBy: "xy",
        jitter: {
          x: 0,
          y: 0
        },
        marker: {
          enabled: !0
        },
        tooltip: {
          headerFormat: "<span style=\"color:{point.color}\">\u25CF</span> <span style=\"font-size: 10px\"> {series.name}</span><br/>",
          pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
        }
      });
      return w;
    }(b);

    C(z.prototype, {
      drawTracker: e.prototype.drawTracker,
      sorted: !1,
      requireSorting: !1,
      noSharedTooltip: !0,
      trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
      takeOrdinalPosition: !1
    });
    G(z, "afterTranslate", function () {
      this.applyJitter();
    });
    I.registerSeriesType("scatter", z);
    "";
    return z;
  });
  O(e, "Mixins/CenteredSeries.js", [e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Utilities.js"]], function (e, b, I) {
    var D = I.isNumber,
        H = I.pick,
        G = I.relativeLength,
        C = e.deg2rad;
    return e.CenteredSeriesMixin = {
      getCenter: function getCenter() {
        var e = this.options,
            D = this.chart,
            w = 2 * (e.slicedOffset || 0),
            v = D.plotWidth - 2 * w,
            f = D.plotHeight - 2 * w,
            d = e.center,
            q = Math.min(v, f),
            k = e.size,
            l = e.innerSize || 0;
        "string" === typeof k && (k = parseFloat(k));
        "string" === typeof l && (l = parseFloat(l));
        e = [H(d[0], "50%"), H(d[1], "50%"), H(k && 0 > k ? void 0 : e.size, "100%"), H(l && 0 > l ? void 0 : e.innerSize || 0, "0%")];
        !D.angular || this instanceof b || (e[3] = 0);

        for (d = 0; 4 > d; ++d) {
          k = e[d], D = 2 > d || 2 === d && /%$/.test(k), e[d] = G(k, [v, f, q, e[2]][d]) + (D ? w : 0);
        }

        e[3] > e[2] && (e[3] = e[2]);
        return e;
      },
      getStartAndEndRadians: function getStartAndEndRadians(b, e) {
        b = D(b) ? b : 0;
        e = D(e) && e > b && 360 > e - b ? e : b + 360;
        return {
          start: C * (b + -90),
          end: C * (e + -90)
        };
      }
    };
  });
  O(e, "Series/Pie/PiePoint.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Series/Point.js"], e["Core/Utilities.js"]], function (e, b, I) {
    var D = this && this.__extends || function () {
      var _b8 = function b(e, d) {
        _b8 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (b, d) {
          b.__proto__ = d;
        } || function (b, d) {
          for (var e in d) {
            d.hasOwnProperty(e) && (b[e] = d[e]);
          }
        };

        return _b8(e, d);
      };

      return function (e, d) {
        function f() {
          this.constructor = e;
        }

        _b8(e, d);

        e.prototype = null === d ? Object.create(d) : (f.prototype = d.prototype, new f());
      };
    }(),
        H = e.setAnimation,
        G = I.addEvent,
        C = I.defined;

    e = I.extend;
    var B = I.isNumber,
        x = I.pick,
        w = I.relativeLength;

    I = function (e) {
      function f() {
        var b = null !== e && e.apply(this, arguments) || this;
        b.labelDistance = void 0;
        b.options = void 0;
        b.series = void 0;
        return b;
      }

      D(f, e);

      f.prototype.getConnectorPath = function () {
        var b = this.labelPosition,
            e = this.series.options.dataLabels,
            f = e.connectorShape,
            l = this.connectorShapes;
        l[f] && (f = l[f]);
        return f.call(this, {
          x: b.final.x,
          y: b.final.y,
          alignment: b.alignment
        }, b.connectorPosition, e);
      };

      f.prototype.getTranslate = function () {
        return this.sliced ? this.slicedTranslation : {
          translateX: 0,
          translateY: 0
        };
      };

      f.prototype.haloPath = function (b) {
        var d = this.shapeArgs;
        return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(d.x, d.y, d.r + b, d.r + b, {
          innerR: d.r - 1,
          start: d.start,
          end: d.end
        });
      };

      f.prototype.init = function () {
        b.prototype.init.apply(this, arguments);
        var d = this;
        d.name = x(d.name, "Slice");

        var e = function e(b) {
          d.slice("select" === b.type);
        };

        G(d, "select", e);
        G(d, "unselect", e);
        return d;
      };

      f.prototype.isValid = function () {
        return B(this.y) && 0 <= this.y;
      };

      f.prototype.setVisible = function (b, e) {
        var d = this,
            f = d.series,
            q = f.chart,
            v = f.options.ignoreHiddenPoint;
        e = x(e, v);
        b !== d.visible && (d.visible = d.options.visible = b = "undefined" === typeof b ? !d.visible : b, f.options.data[f.data.indexOf(d)] = d.options, ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(function (e) {
          if (d[e]) d[e][b ? "show" : "hide"](b);
        }), d.legendItem && q.legend.colorizeItem(d, b), b || "hover" !== d.state || d.setState(""), v && (f.isDirty = !0), e && q.redraw());
      };

      f.prototype.slice = function (b, e, f) {
        var d = this.series;
        H(f, d.chart);
        x(e, !0);
        this.sliced = this.options.sliced = C(b) ? b : !this.sliced;
        d.options.data[d.data.indexOf(this)] = this.options;
        this.graphic && this.graphic.animate(this.getTranslate());
        this.shadowGroup && this.shadowGroup.animate(this.getTranslate());
      };

      return f;
    }(b);

    e(I.prototype, {
      connectorShapes: {
        fixedOffset: function fixedOffset(b, e, d) {
          var f = e.breakAt;
          e = e.touchingSliceAt;
          return [["M", b.x, b.y], d.softConnector ? ["C", b.x + ("left" === b.alignment ? -5 : 5), b.y, 2 * f.x - e.x, 2 * f.y - e.y, f.x, f.y] : ["L", f.x, f.y], ["L", e.x, e.y]];
        },
        straight: function straight(b, e) {
          e = e.touchingSliceAt;
          return [["M", b.x, b.y], ["L", e.x, e.y]];
        },
        crookedLine: function crookedLine(b, e, d) {
          e = e.touchingSliceAt;
          var f = this.series,
              k = f.center[0],
              l = f.chart.plotWidth,
              v = f.chart.plotLeft;
          f = b.alignment;
          var u = this.shapeArgs.r;
          d = w(d.crookDistance, 1);
          l = "left" === f ? k + u + (l + v - k - u) * (1 - d) : v + (k - u) * d;
          d = ["L", l, b.y];
          k = !0;
          if ("left" === f ? l > b.x || l < e.x : l < b.x || l > e.x) k = !1;
          b = [["M", b.x, b.y]];
          k && b.push(d);
          b.push(["L", e.x, e.y]);
          return b;
        }
      }
    });
    return I;
  });
  O(e, "Series/Pie/PieSeries.js", [e["Mixins/CenteredSeries.js"], e["Series/Column/ColumnSeries.js"], e["Core/Globals.js"], e["Mixins/LegendSymbol.js"], e["Core/Color/Palette.js"], e["Series/Pie/PiePoint.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Utilities.js"]], function (e, b, I, z, H, G, C, B, x, w) {
    var v = this && this.__extends || function () {
      var _b9 = function b(d, e) {
        _b9 = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (b, c) {
          b.__proto__ = c;
        } || function (b, c) {
          for (var d in c) {
            c.hasOwnProperty(d) && (b[d] = c[d]);
          }
        };

        return _b9(d, e);
      };

      return function (d, e) {
        function f() {
          this.constructor = d;
        }

        _b9(d, e);

        d.prototype = null === e ? Object.create(e) : (f.prototype = e.prototype, new f());
      };
    }(),
        f = e.getStartAndEndRadians;

    I = I.noop;
    var d = w.clamp,
        q = w.extend,
        k = w.fireEvent,
        l = w.merge,
        D = w.pick,
        u = w.relativeLength;

    w = function (b) {
      function e() {
        var d = null !== b && b.apply(this, arguments) || this;
        d.center = void 0;
        d.data = void 0;
        d.maxLabelDistance = void 0;
        d.options = void 0;
        d.points = void 0;
        return d;
      }

      v(e, b);

      e.prototype.animate = function (b) {
        var d = this,
            c = d.points,
            e = d.startAngleRad;
        b || c.forEach(function (a) {
          var c = a.graphic,
              b = a.shapeArgs;
          c && b && (c.attr({
            r: D(a.startR, d.center && d.center[3] / 2),
            start: e,
            end: e
          }), c.animate({
            r: b.r,
            start: b.start,
            end: b.end
          }, d.options.animation));
        });
      };

      e.prototype.drawEmpty = function () {
        var b = this.startAngleRad,
            d = this.endAngleRad,
            c = this.options;

        if (0 === this.total && this.center) {
          var e = this.center[0];
          var a = this.center[1];
          this.graph || (this.graph = this.chart.renderer.arc(e, a, this.center[1] / 2, 0, b, d).addClass("highcharts-empty-series").add(this.group));
          this.graph.attr({
            d: x.prototype.symbols.arc(e, a, this.center[2] / 2, 0, {
              start: b,
              end: d,
              innerR: this.center[3] / 2
            })
          });
          this.chart.styledMode || this.graph.attr({
            "stroke-width": c.borderWidth,
            fill: c.fillColor || "none",
            stroke: c.color || H.neutralColor20
          });
        } else this.graph && (this.graph = this.graph.destroy());
      };

      e.prototype.drawPoints = function () {
        var b = this.chart.renderer;
        this.points.forEach(function (d) {
          d.graphic && d.hasNewShapeType() && (d.graphic = d.graphic.destroy());
          d.graphic || (d.graphic = b[d.shapeType](d.shapeArgs).add(d.series.group), d.delayedRendering = !0);
        });
      };

      e.prototype.generatePoints = function () {
        b.prototype.generatePoints.call(this);
        this.updateTotals();
      };

      e.prototype.getX = function (b, e, c) {
        var g = this.center,
            a = this.radii ? this.radii[c.index] || 0 : g[2] / 2;
        b = Math.asin(d((b - g[1]) / (a + c.labelDistance), -1, 1));
        return g[0] + (e ? -1 : 1) * Math.cos(b) * (a + c.labelDistance) + (0 < c.labelDistance ? (e ? -1 : 1) * this.options.dataLabels.padding : 0);
      };

      e.prototype.hasData = function () {
        return !!this.processedXData.length;
      };

      e.prototype.redrawPoints = function () {
        var b = this,
            d = b.chart,
            c = d.renderer,
            e,
            a,
            h,
            f,
            k = b.options.shadow;
        this.drawEmpty();
        !k || b.shadowGroup || d.styledMode || (b.shadowGroup = c.g("shadow").attr({
          zIndex: -1
        }).add(b.group));
        b.points.forEach(function (g) {
          var m = {};
          a = g.graphic;

          if (!g.isNull && a) {
            var r = void 0;
            f = g.shapeArgs;
            e = g.getTranslate();
            d.styledMode || (r = g.shadowGroup, k && !r && (r = g.shadowGroup = c.g("shadow").add(b.shadowGroup)), r && r.attr(e), h = b.pointAttribs(g, g.selected && "select"));
            g.delayedRendering ? (a.setRadialReference(b.center).attr(f).attr(e), d.styledMode || a.attr(h).attr({
              "stroke-linejoin": "round"
            }).shadow(k, r), g.delayedRendering = !1) : (a.setRadialReference(b.center), d.styledMode || l(!0, m, h), l(!0, m, f, e), a.animate(m));
            a.attr({
              visibility: g.visible ? "inherit" : "hidden"
            });
            a.addClass(g.getClassName(), !0);
          } else a && (g.graphic = a.destroy());
        });
      };

      e.prototype.sortByAngle = function (b, d) {
        b.sort(function (c, b) {
          return "undefined" !== typeof c.angle && (b.angle - c.angle) * d;
        });
      };

      e.prototype.translate = function (b) {
        this.generatePoints();
        var d = 0,
            c = this.options,
            e = c.slicedOffset,
            a = e + (c.borderWidth || 0),
            h = f(c.startAngle, c.endAngle),
            l = this.startAngleRad = h.start;
        h = (this.endAngleRad = h.end) - l;
        var n = this.points,
            q = c.dataLabels.distance;
        c = c.ignoreHiddenPoint;
        var v,
            w = n.length;
        b || (this.center = b = this.getCenter());

        for (v = 0; v < w; v++) {
          var x = n[v];
          var E = l + d * h;
          !x.isValid() || c && !x.visible || (d += x.percentage / 100);
          var z = l + d * h;
          var B = {
            x: b[0],
            y: b[1],
            r: b[2] / 2,
            innerR: b[3] / 2,
            start: Math.round(1E3 * E) / 1E3,
            end: Math.round(1E3 * z) / 1E3
          };
          x.shapeType = "arc";
          x.shapeArgs = B;
          x.labelDistance = D(x.options.dataLabels && x.options.dataLabels.distance, q);
          x.labelDistance = u(x.labelDistance, B.r);
          this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, x.labelDistance);
          z = (z + E) / 2;
          z > 1.5 * Math.PI ? z -= 2 * Math.PI : z < -Math.PI / 2 && (z += 2 * Math.PI);
          x.slicedTranslation = {
            translateX: Math.round(Math.cos(z) * e),
            translateY: Math.round(Math.sin(z) * e)
          };
          B = Math.cos(z) * b[2] / 2;
          var t = Math.sin(z) * b[2] / 2;
          x.tooltipPos = [b[0] + .7 * B, b[1] + .7 * t];
          x.half = z < -Math.PI / 2 || z > Math.PI / 2 ? 1 : 0;
          x.angle = z;
          E = Math.min(a, x.labelDistance / 5);
          x.labelPosition = {
            natural: {
              x: b[0] + B + Math.cos(z) * x.labelDistance,
              y: b[1] + t + Math.sin(z) * x.labelDistance
            },
            "final": {},
            alignment: 0 > x.labelDistance ? "center" : x.half ? "right" : "left",
            connectorPosition: {
              breakAt: {
                x: b[0] + B + Math.cos(z) * E,
                y: b[1] + t + Math.sin(z) * E
              },
              touchingSliceAt: {
                x: b[0] + B,
                y: b[1] + t
              }
            }
          };
        }

        k(this, "afterTranslate");
      };

      e.prototype.updateTotals = function () {
        var b,
            d = 0,
            c = this.points,
            e = c.length,
            a = this.options.ignoreHiddenPoint;

        for (b = 0; b < e; b++) {
          var h = c[b];
          !h.isValid() || a && !h.visible || (d += h.y);
        }

        this.total = d;

        for (b = 0; b < e; b++) {
          h = c[b], h.percentage = 0 < d && (h.visible || !a) ? h.y / d * 100 : 0, h.total = d;
        }
      };

      e.defaultOptions = l(C.defaultOptions, {
        center: [null, null],
        clip: !1,
        colorByPoint: !0,
        dataLabels: {
          allowOverlap: !0,
          connectorPadding: 5,
          connectorShape: "fixedOffset",
          crookDistance: "70%",
          distance: 30,
          enabled: !0,
          formatter: function formatter() {
            return this.point.isNull ? void 0 : this.point.name;
          },
          softConnector: !0,
          x: 0
        },
        fillColor: void 0,
        ignoreHiddenPoint: !0,
        inactiveOtherPoints: !0,
        legendType: "point",
        marker: null,
        size: null,
        showInLegend: !1,
        slicedOffset: 10,
        stickyTracking: !1,
        tooltip: {
          followPointer: !0
        },
        borderColor: H.backgroundColor,
        borderWidth: 1,
        lineWidth: void 0,
        states: {
          hover: {
            brightness: .1
          }
        }
      });
      return e;
    }(C);

    q(w.prototype, {
      axisTypes: [],
      directTouch: !0,
      drawGraph: void 0,
      drawLegendSymbol: z.drawRectangle,
      drawTracker: b.prototype.drawTracker,
      getCenter: e.getCenter,
      getSymbol: I,
      isCartesian: !1,
      noSharedTooltip: !0,
      pointAttribs: b.prototype.pointAttribs,
      pointClass: G,
      requireSorting: !1,
      searchPoint: I,
      trackerGroups: ["group", "dataLabelsGroup"]
    });
    B.registerSeriesType("pie", w);
    "";
    return w;
  });
  O(e, "Core/Series/DataLabels.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/FormatUtilities.js"], e["Core/Globals.js"], e["Core/Color/Palette.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function (e, b, I, z, H, G, C) {
    var D = e.getDeferredAnimation,
        x = b.format;
    e = I.noop;
    G = G.seriesTypes;
    var w = C.arrayMax,
        v = C.clamp,
        f = C.defined,
        d = C.extend,
        q = C.fireEvent,
        k = C.isArray,
        l = C.merge,
        N = C.objectEach,
        u = C.pick,
        n = C.relativeLength,
        J = C.splat,
        E = C.stableSort;
    "";

    I.distribute = function (b, c, d) {
      function a(a, c) {
        return a.target - c.target;
      }

      var e,
          g = !0,
          f = b,
          k = [];
      var l = 0;
      var m = f.reducedLen || c;

      for (e = b.length; e--;) {
        l += b[e].size;
      }

      if (l > m) {
        E(b, function (a, c) {
          return (c.rank || 0) - (a.rank || 0);
        });

        for (l = e = 0; l <= m;) {
          l += b[e].size, e++;
        }

        k = b.splice(e - 1, b.length);
      }

      E(b, a);

      for (b = b.map(function (a) {
        return {
          size: a.size,
          targets: [a.target],
          align: u(a.align, .5)
        };
      }); g;) {
        for (e = b.length; e--;) {
          g = b[e], l = (Math.min.apply(0, g.targets) + Math.max.apply(0, g.targets)) / 2, g.pos = v(l - g.size * g.align, 0, c - g.size);
        }

        e = b.length;

        for (g = !1; e--;) {
          0 < e && b[e - 1].pos + b[e - 1].size > b[e].pos && (b[e - 1].size += b[e].size, b[e - 1].targets = b[e - 1].targets.concat(b[e].targets), b[e - 1].align = .5, b[e - 1].pos + b[e - 1].size > c && (b[e - 1].pos = c - b[e - 1].size), b.splice(e, 1), g = !0);
        }
      }

      f.push.apply(f, k);
      e = 0;
      b.some(function (a) {
        var b = 0;
        if (a.targets.some(function () {
          f[e].pos = a.pos + b;
          if ("undefined" !== typeof d && Math.abs(f[e].pos - f[e].target) > d) return f.slice(0, e + 1).forEach(function (a) {
            delete a.pos;
          }), f.reducedLen = (f.reducedLen || c) - .1 * c, f.reducedLen > .1 * c && I.distribute(f, c, d), !0;
          b += f[e].size;
          e++;
        })) return !0;
      });
      E(f, a);
    };

    H.prototype.drawDataLabels = function () {
      function b(a, c) {
        var b = c.filter;
        return b ? (c = b.operator, a = a[b.property], b = b.value, ">" === c && a > b || "<" === c && a < b || ">=" === c && a >= b || "<=" === c && a <= b || "==" === c && a == b || "===" === c && a === b ? !0 : !1) : !0;
      }

      function c(a, c) {
        var b = [],
            d;
        if (k(a) && !k(c)) b = a.map(function (a) {
          return l(a, c);
        });else if (k(c) && !k(a)) b = c.map(function (c) {
          return l(a, c);
        });else if (k(a) || k(c)) for (d = Math.max(a.length, c.length); d--;) {
          b[d] = l(a[d], c[d]);
        } else b = l(a, c);
        return b;
      }

      var d = this,
          a = d.chart,
          e = d.options,
          r = e.dataLabels,
          n = d.points,
          v,
          w = d.hasRendered || 0,
          E = r.animation;
      E = r.defer ? D(a, E, d) : {
        defer: 0,
        duration: 0
      };
      var B = a.renderer;
      r = c(c(a.options.plotOptions && a.options.plotOptions.series && a.options.plotOptions.series.dataLabels, a.options.plotOptions && a.options.plotOptions[d.type] && a.options.plotOptions[d.type].dataLabels), r);
      q(this, "drawDataLabels");

      if (k(r) || r.enabled || d._hasPointLabels) {
        var C = d.plotGroup("dataLabelsGroup", "data-labels", w ? "inherit" : "hidden", r.zIndex || 6);
        C.attr({
          opacity: +w
        });
        !w && (w = d.dataLabelsGroup) && (d.visible && C.show(!0), w[e.animation ? "animate" : "attr"]({
          opacity: 1
        }, E));
        n.forEach(function (g) {
          v = J(c(r, g.dlOptions || g.options && g.options.dataLabels));
          v.forEach(function (c, h) {
            var k = c.enabled && (!g.isNull || g.dataLabelOnNull) && b(g, c),
                l = g.dataLabels ? g.dataLabels[h] : g.dataLabel,
                m = g.connectors ? g.connectors[h] : g.connector,
                r = u(c.distance, g.labelDistance),
                n = !l;

            if (k) {
              var q = g.getLabelConfig();
              var t = u(c[g.formatPrefix + "Format"], c.format);
              q = f(t) ? x(t, q, a) : (c[g.formatPrefix + "Formatter"] || c.formatter).call(q, c);
              t = c.style;
              var v = c.rotation;
              a.styledMode || (t.color = u(c.color, t.color, d.color, z.neutralColor100), "contrast" === t.color ? (g.contrastColor = B.getContrast(g.color || d.color), t.color = !f(r) && c.inside || 0 > r || e.stacking ? g.contrastColor : z.neutralColor100) : delete g.contrastColor, e.cursor && (t.cursor = e.cursor));
              var w = {
                r: c.borderRadius || 0,
                rotation: v,
                padding: c.padding,
                zIndex: 1
              };
              a.styledMode || (w.fill = c.backgroundColor, w.stroke = c.borderColor, w["stroke-width"] = c.borderWidth);
              N(w, function (a, c) {
                "undefined" === typeof a && delete w[c];
              });
            }

            !l || k && f(q) ? k && f(q) && (l ? w.text = q : (g.dataLabels = g.dataLabels || [], l = g.dataLabels[h] = v ? B.text(q, 0, -9999, c.useHTML).addClass("highcharts-data-label") : B.label(q, 0, -9999, c.shape, null, null, c.useHTML, null, "data-label"), h || (g.dataLabel = l), l.addClass(" highcharts-data-label-color-" + g.colorIndex + " " + (c.className || "") + (c.useHTML ? " highcharts-tracker" : ""))), l.options = c, l.attr(w), a.styledMode || l.css(t).shadow(c.shadow), l.added || l.add(C), c.textPath && !c.useHTML && (l.setTextPath(g.getDataLabelPath && g.getDataLabelPath(l) || g.graphic, c.textPath), g.dataLabelPath && !c.textPath.enabled && (g.dataLabelPath = g.dataLabelPath.destroy())), d.alignDataLabel(g, l, c, null, n)) : (g.dataLabel = g.dataLabel && g.dataLabel.destroy(), g.dataLabels && (1 === g.dataLabels.length ? delete g.dataLabels : delete g.dataLabels[h]), h || delete g.dataLabel, m && (g.connector = g.connector.destroy(), g.connectors && (1 === g.connectors.length ? delete g.connectors : delete g.connectors[h])));
          });
        });
      }

      q(this, "afterDrawDataLabels");
    };

    H.prototype.alignDataLabel = function (b, c, e, a, f) {
      var g = this,
          h = this.chart,
          k = this.isCartesian && h.inverted,
          l = this.enabledDataSorting,
          m = u(b.dlBox && b.dlBox.centerX, b.plotX, -9999),
          n = u(b.plotY, -9999),
          q = c.getBBox(),
          v = e.rotation,
          w = e.align,
          t = h.isInsidePlot(m, Math.round(n), {
        inverted: k,
        paneCoordinates: !0,
        series: g
      }),
          p = "justify" === u(e.overflow, l ? "none" : "justify"),
          D = this.visible && !1 !== b.visible && (b.series.forceDL || l && !p || t || u(e.inside, !!this.options.stacking) && a && h.isInsidePlot(m, k ? a.x + 1 : a.y + a.height - 1, {
        inverted: k,
        paneCoordinates: !0,
        series: g
      }));

      var x = function x(a) {
        l && g.xAxis && !p && g.setDataLabelStartPos(b, c, f, t, a);
      };

      if (D) {
        var z = h.renderer.fontMetrics(h.styledMode ? void 0 : e.style.fontSize, c).b;
        a = d({
          x: k ? this.yAxis.len - n : m,
          y: Math.round(k ? this.xAxis.len - m : n),
          width: 0,
          height: 0
        }, a);
        d(e, {
          width: q.width,
          height: q.height
        });
        v ? (p = !1, m = h.renderer.rotCorr(z, v), m = {
          x: a.x + (e.x || 0) + a.width / 2 + m.x,
          y: a.y + (e.y || 0) + {
            top: 0,
            middle: .5,
            bottom: 1
          }[e.verticalAlign] * a.height
        }, x(m), c[f ? "attr" : "animate"](m).attr({
          align: w
        }), x = (v + 720) % 360, x = 180 < x && 360 > x, "left" === w ? m.y -= x ? q.height : 0 : "center" === w ? (m.x -= q.width / 2, m.y -= q.height / 2) : "right" === w && (m.x -= q.width, m.y -= x ? 0 : q.height), c.placed = !0, c.alignAttr = m) : (x(a), c.align(e, void 0, a), m = c.alignAttr);
        p && 0 <= a.height ? this.justifyDataLabel(c, e, m, q, a, f) : u(e.crop, !0) && (D = h.isInsidePlot(m.x, m.y, {
          paneCoordinates: !0,
          series: g
        }) && h.isInsidePlot(m.x + q.width, m.y + q.height, {
          paneCoordinates: !0,
          series: g
        }));
        if (e.shape && !v) c[f ? "attr" : "animate"]({
          anchorX: k ? h.plotWidth - b.plotY : b.plotX,
          anchorY: k ? h.plotHeight - b.plotX : b.plotY
        });
      }

      f && l && (c.placed = !1);
      D || l && !p || (c.hide(!0), c.placed = !1);
    };

    H.prototype.setDataLabelStartPos = function (b, c, d, a, e) {
      var g = this.chart,
          f = g.inverted,
          h = this.xAxis,
          k = h.reversed,
          l = f ? c.height / 2 : c.width / 2;
      b = (b = b.pointWidth) ? b / 2 : 0;
      h = f ? e.x : k ? -l - b : h.width - l + b;
      e = f ? k ? this.yAxis.height - l + b : -l - b : e.y;
      c.startXPos = h;
      c.startYPos = e;
      a ? "hidden" === c.visibility && (c.show(), c.attr({
        opacity: 0
      }).animate({
        opacity: 1
      })) : c.attr({
        opacity: 1
      }).animate({
        opacity: 0
      }, void 0, c.hide);
      g.hasRendered && (d && c.attr({
        x: c.startXPos,
        y: c.startYPos
      }), c.placed = !0);
    };

    H.prototype.justifyDataLabel = function (b, c, d, a, e, f) {
      var g = this.chart,
          h = c.align,
          k = c.verticalAlign,
          l = b.box ? 0 : b.padding || 0,
          m = c.x;
      m = void 0 === m ? 0 : m;
      var n = c.y;
      var r = void 0 === n ? 0 : n;
      n = (d.x || 0) + l;

      if (0 > n) {
        "right" === h && 0 <= m ? (c.align = "left", c.inside = !0) : m -= n;
        var q = !0;
      }

      n = (d.x || 0) + a.width - l;
      n > g.plotWidth && ("left" === h && 0 >= m ? (c.align = "right", c.inside = !0) : m += g.plotWidth - n, q = !0);
      n = d.y + l;
      0 > n && ("bottom" === k && 0 <= r ? (c.verticalAlign = "top", c.inside = !0) : r -= n, q = !0);
      n = (d.y || 0) + a.height - l;
      n > g.plotHeight && ("top" === k && 0 >= r ? (c.verticalAlign = "bottom", c.inside = !0) : r += g.plotHeight - n, q = !0);
      q && (c.x = m, c.y = r, b.placed = !f, b.align(c, void 0, e));
      return q;
    };

    G.pie && (G.pie.prototype.dataLabelPositioners = {
      radialDistributionY: function radialDistributionY(b) {
        return b.top + b.distributeBox.pos;
      },
      radialDistributionX: function radialDistributionX(b, c, d, a) {
        return b.getX(d < c.top + 2 || d > c.bottom - 2 ? a : d, c.half, c);
      },
      justify: function justify(b, c, d) {
        return d[0] + (b.half ? -1 : 1) * (c + b.labelDistance);
      },
      alignToPlotEdges: function alignToPlotEdges(b, c, d, a) {
        b = b.getBBox().width;
        return c ? b + a : d - b - a;
      },
      alignToConnectors: function alignToConnectors(b, c, d, a) {
        var e = 0,
            g;
        b.forEach(function (a) {
          g = a.dataLabel.getBBox().width;
          g > e && (e = g);
        });
        return c ? e + a : d - e - a;
      }
    }, G.pie.prototype.drawDataLabels = function () {
      var b = this,
          c = b.data,
          d,
          a = b.chart,
          e = b.options.dataLabels || {},
          k = e.connectorPadding,
          n,
          q = a.plotWidth,
          v = a.plotHeight,
          x = a.plotLeft,
          D = Math.round(a.chartWidth / 3),
          E,
          B = b.center,
          C = B[2] / 2,
          t = B[1],
          p,
          G,
          J,
          N,
          F = [[], []],
          O,
          K,
          T,
          X,
          U = [0, 0, 0, 0],
          W = b.dataLabelPositioners,
          Y;
      b.visible && (e.enabled || b._hasPointLabels) && (c.forEach(function (a) {
        a.dataLabel && a.visible && a.dataLabel.shortened && (a.dataLabel.attr({
          width: "auto"
        }).css({
          width: "auto",
          textOverflow: "clip"
        }), a.dataLabel.shortened = !1);
      }), H.prototype.drawDataLabels.apply(b), c.forEach(function (a) {
        a.dataLabel && (a.visible ? (F[a.half].push(a), a.dataLabel._pos = null, !f(e.style.width) && !f(a.options.dataLabels && a.options.dataLabels.style && a.options.dataLabels.style.width) && a.dataLabel.getBBox().width > D && (a.dataLabel.css({
          width: Math.round(.7 * D) + "px"
        }), a.dataLabel.shortened = !0)) : (a.dataLabel = a.dataLabel.destroy(), a.dataLabels && 1 === a.dataLabels.length && delete a.dataLabels));
      }), F.forEach(function (c, g) {
        var h = c.length,
            l = [],
            m;

        if (h) {
          b.sortByAngle(c, g - .5);

          if (0 < b.maxLabelDistance) {
            var n = Math.max(0, t - C - b.maxLabelDistance);
            var r = Math.min(t + C + b.maxLabelDistance, a.plotHeight);
            c.forEach(function (b) {
              0 < b.labelDistance && b.dataLabel && (b.top = Math.max(0, t - C - b.labelDistance), b.bottom = Math.min(t + C + b.labelDistance, a.plotHeight), m = b.dataLabel.getBBox().height || 21, b.distributeBox = {
                target: b.labelPosition.natural.y - b.top + m / 2,
                size: m,
                rank: b.y
              }, l.push(b.distributeBox));
            });
            n = r + m - n;
            I.distribute(l, n, n / 5);
          }

          for (X = 0; X < h; X++) {
            d = c[X];
            J = d.labelPosition;
            p = d.dataLabel;
            T = !1 === d.visible ? "hidden" : "inherit";
            K = n = J.natural.y;
            l && f(d.distributeBox) && ("undefined" === typeof d.distributeBox.pos ? T = "hidden" : (N = d.distributeBox.size, K = W.radialDistributionY(d)));
            delete d.positionIndex;
            if (e.justify) O = W.justify(d, C, B);else switch (e.alignTo) {
              case "connectors":
                O = W.alignToConnectors(c, g, q, x);
                break;

              case "plotEdges":
                O = W.alignToPlotEdges(p, g, q, x);
                break;

              default:
                O = W.radialDistributionX(b, d, K, n);
            }
            p._attr = {
              visibility: T,
              align: J.alignment
            };
            Y = d.options.dataLabels || {};
            p._pos = {
              x: O + u(Y.x, e.x) + ({
                left: k,
                right: -k
              }[J.alignment] || 0),
              y: K + u(Y.y, e.y) - 10
            };
            J.final.x = O;
            J.final.y = K;
            u(e.crop, !0) && (G = p.getBBox().width, n = null, O - G < k && 1 === g ? (n = Math.round(G - O + k), U[3] = Math.max(n, U[3])) : O + G > q - k && 0 === g && (n = Math.round(O + G - q + k), U[1] = Math.max(n, U[1])), 0 > K - N / 2 ? U[0] = Math.max(Math.round(-K + N / 2), U[0]) : K + N / 2 > v && (U[2] = Math.max(Math.round(K + N / 2 - v), U[2])), p.sideOverflow = n);
          }
        }
      }), 0 === w(U) || this.verifyDataLabelOverflow(U)) && (this.placeDataLabels(), this.points.forEach(function (c) {
        Y = l(e, c.options.dataLabels);

        if (n = u(Y.connectorWidth, 1)) {
          var d;
          E = c.connector;

          if ((p = c.dataLabel) && p._pos && c.visible && 0 < c.labelDistance) {
            T = p._attr.visibility;
            if (d = !E) c.connector = E = a.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + c.colorIndex + (c.className ? " " + c.className : "")).add(b.dataLabelsGroup), a.styledMode || E.attr({
              "stroke-width": n,
              stroke: Y.connectorColor || c.color || z.neutralColor60
            });
            E[d ? "attr" : "animate"]({
              d: c.getConnectorPath()
            });
            E.attr("visibility", T);
          } else E && (c.connector = E.destroy());
        }
      }));
    }, G.pie.prototype.placeDataLabels = function () {
      this.points.forEach(function (b) {
        var c = b.dataLabel,
            d;
        c && b.visible && ((d = c._pos) ? (c.sideOverflow && (c._attr.width = Math.max(c.getBBox().width - c.sideOverflow, 0), c.css({
          width: c._attr.width + "px",
          textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis"
        }), c.shortened = !0), c.attr(c._attr), c[c.moved ? "animate" : "attr"](d), c.moved = !0) : c && c.attr({
          y: -9999
        }));
        delete b.distributeBox;
      }, this);
    }, G.pie.prototype.alignDataLabel = e, G.pie.prototype.verifyDataLabelOverflow = function (b) {
      var c = this.center,
          d = this.options,
          a = d.center,
          e = d.minSize || 80,
          f = null !== d.size;

      if (!f) {
        if (null !== a[0]) var k = Math.max(c[2] - Math.max(b[1], b[3]), e);else k = Math.max(c[2] - b[1] - b[3], e), c[0] += (b[3] - b[1]) / 2;
        null !== a[1] ? k = v(k, e, c[2] - Math.max(b[0], b[2])) : (k = v(k, e, c[2] - b[0] - b[2]), c[1] += (b[0] - b[2]) / 2);
        k < c[2] ? (c[2] = k, c[3] = Math.min(n(d.innerSize || 0, k), k), this.translate(c), this.drawDataLabels && this.drawDataLabels()) : f = !0;
      }

      return f;
    });
    G.column && (G.column.prototype.alignDataLabel = function (b, c, d, a, e) {
      var f = this.chart.inverted,
          g = b.series,
          h = b.dlBox || b.shapeArgs,
          k = u(b.below, b.plotY > u(this.translatedThreshold, g.yAxis.len)),
          m = u(d.inside, !!this.options.stacking);
      h && (a = l(h), 0 > a.y && (a.height += a.y, a.y = 0), h = a.y + a.height - g.yAxis.len, 0 < h && h < a.height && (a.height -= h), f && (a = {
        x: g.yAxis.len - a.y - a.height,
        y: g.xAxis.len - a.x - a.width,
        width: a.height,
        height: a.width
      }), m || (f ? (a.x += k ? 0 : a.width, a.width = 0) : (a.y += k ? a.height : 0, a.height = 0)));
      d.align = u(d.align, !f || m ? "center" : k ? "right" : "left");
      d.verticalAlign = u(d.verticalAlign, f || m ? "middle" : k ? "top" : "bottom");
      H.prototype.alignDataLabel.call(this, b, c, d, a, e);
      d.inside && b.contrastColor && c.css({
        color: b.contrastColor
      });
    });
  });
  O(e, "Extensions/OverlappingDataLabels.js", [e["Core/Chart/Chart.js"], e["Core/Utilities.js"]], function (e, b) {
    function D(b, e) {
      var f = !1;

      if (b) {
        var d = b.newOpacity;
        b.oldOpacity !== d && (b.alignAttr && b.placed ? (b[d ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), f = !0, b.alignAttr.opacity = d, b[b.isOld ? "animate" : "attr"](b.alignAttr, null, function () {
          e.styledMode || b.css({
            pointerEvents: d ? "auto" : "none"
          });
          b.visibility = d ? "inherit" : "hidden";
        }), H(e, "afterHideOverlappingLabel")) : b.attr({
          opacity: d
        }));
        b.isOld = !0;
      }

      return f;
    }

    var z = b.addEvent,
        H = b.fireEvent,
        G = b.isArray,
        C = b.isNumber,
        B = b.objectEach,
        x = b.pick;
    z(e, "render", function () {
      var b = this,
          e = [];
      (this.labelCollectors || []).forEach(function (b) {
        e = e.concat(b());
      });
      (this.yAxis || []).forEach(function (b) {
        b.stacking && b.options.stackLabels && !b.options.stackLabels.allowOverlap && B(b.stacking.stacks, function (b) {
          B(b, function (b) {
            e.push(b.label);
          });
        });
      });
      (this.series || []).forEach(function (f) {
        var d = f.options.dataLabels;
        f.visible && (!1 !== d.enabled || f._hasPointLabels) && (d = function d(_d2) {
          return _d2.forEach(function (d) {
            d.visible && (G(d.dataLabels) ? d.dataLabels : d.dataLabel ? [d.dataLabel] : []).forEach(function (f) {
              var k = f.options;
              f.labelrank = x(k.labelrank, d.labelrank, d.shapeArgs && d.shapeArgs.height);
              k.allowOverlap ? (f.oldOpacity = f.opacity, f.newOpacity = 1, D(f, b)) : e.push(f);
            });
          });
        }, d(f.nodes || []), d(f.points));
      });
      this.hideOverlappingLabels(e);
    });

    e.prototype.hideOverlappingLabels = function (b) {
      var e = this,
          f = b.length,
          d = e.renderer,
          q,
          k,
          l,
          w = !1;

      var u = function u(b) {
        var e,
            c = b.box ? 0 : b.padding || 0,
            f = e = 0,
            a;

        if (b && (!b.alignAttr || b.placed)) {
          var h = b.alignAttr || {
            x: b.attr("x"),
            y: b.attr("y")
          };
          var k = b.parentGroup;
          b.width || (e = b.getBBox(), b.width = e.width, b.height = e.height, e = d.fontMetrics(null, b.element).h);
          var l = b.width - 2 * c;
          (a = {
            left: "0",
            center: "0.5",
            right: "1"
          }[b.alignValue]) ? f = +a * l : C(b.x) && Math.round(b.x) !== b.translateX && (f = b.x - b.translateX);
          return {
            x: h.x + (k.translateX || 0) + c - (f || 0),
            y: h.y + (k.translateY || 0) + c - e,
            width: b.width - 2 * c,
            height: b.height - 2 * c
          };
        }
      };

      for (k = 0; k < f; k++) {
        if (q = b[k]) q.oldOpacity = q.opacity, q.newOpacity = 1, q.absoluteBox = u(q);
      }

      b.sort(function (b, d) {
        return (d.labelrank || 0) - (b.labelrank || 0);
      });

      for (k = 0; k < f; k++) {
        var n = (u = b[k]) && u.absoluteBox;

        for (q = k + 1; q < f; ++q) {
          var x = (l = b[q]) && l.absoluteBox;
          !n || !x || u === l || 0 === u.newOpacity || 0 === l.newOpacity || x.x >= n.x + n.width || x.x + x.width <= n.x || x.y >= n.y + n.height || x.y + x.height <= n.y || ((u.labelrank < l.labelrank ? u : l).newOpacity = 0);
        }
      }

      b.forEach(function (b) {
        D(b, e) && (w = !0);
      });
      w && H(e, "afterHideAllOverlappingLabels");
    };
  });
  O(e, "Core/Responsive.js", [e["Core/Chart/Chart.js"], e["Core/Utilities.js"]], function (e, b) {
    var D = b.find,
        z = b.isArray,
        H = b.isObject,
        G = b.merge,
        C = b.objectEach,
        B = b.pick,
        x = b.splat,
        w = b.uniqueKey;

    e.prototype.setResponsive = function (b, e) {
      var d = this.options.responsive,
          f = [],
          k = this.currentResponsive;
      !e && d && d.rules && d.rules.forEach(function (b) {
        "undefined" === typeof b._id && (b._id = w());
        this.matchResponsiveRule(b, f);
      }, this);
      e = G.apply(0, f.map(function (b) {
        return D(d.rules, function (d) {
          return d._id === b;
        }).chartOptions;
      }));
      e.isResponsiveOptions = !0;
      f = f.toString() || void 0;
      f !== (k && k.ruleIds) && (k && this.update(k.undoOptions, b, !0), f ? (k = this.currentOptions(e), k.isResponsiveOptions = !0, this.currentResponsive = {
        ruleIds: f,
        mergedOptions: e,
        undoOptions: k
      }, this.update(e, b, !0)) : this.currentResponsive = void 0);
    };

    e.prototype.matchResponsiveRule = function (b, e) {
      var d = b.condition;
      (d.callback || function () {
        return this.chartWidth <= B(d.maxWidth, Number.MAX_VALUE) && this.chartHeight <= B(d.maxHeight, Number.MAX_VALUE) && this.chartWidth >= B(d.minWidth, 0) && this.chartHeight >= B(d.minHeight, 0);
      }).call(this) && e.push(b._id);
    };

    e.prototype.currentOptions = function (b) {
      function e(b, f, q, u) {
        var k;
        C(b, function (b, l) {
          if (!u && -1 < d.collectionsWithUpdate.indexOf(l) && f[l]) for (b = x(b), q[l] = [], k = 0; k < Math.max(b.length, f[l].length); k++) {
            f[l][k] && (void 0 === b[k] ? q[l][k] = f[l][k] : (q[l][k] = {}, e(b[k], f[l][k], q[l][k], u + 1)));
          } else H(b) ? (q[l] = z(b) ? [] : {}, e(b, f[l] || {}, q[l], u + 1)) : q[l] = "undefined" === typeof f[l] ? null : f[l];
        });
      }

      var d = this,
          q = {};
      e(b, this.options, q, 0);
      return q;
    };
  });
  O(e, "masters/highcharts.src.js", [e["Core/Globals.js"], e["Core/Utilities.js"], e["Core/Options.js"], e["Core/Animation/Fx.js"], e["Core/Animation/AnimationUtilities.js"], e["Core/Renderer/HTML/AST.js"], e["Core/FormatUtilities.js"], e["Core/Renderer/SVG/SVGElement.js"], e["Core/Series/Series.js"]], function (e, b, I, z, H, G, C, B, x) {
    e.animate = H.animate;
    e.animObject = H.animObject;
    e.getDeferredAnimation = H.getDeferredAnimation;
    e.setAnimation = H.setAnimation;
    e.stop = H.stop;
    e.timers = z.timers;
    e.AST = G;
    e.Fx = z;
    e.Series = x;
    e.SVGElement = B;
    e.dateFormat = C.dateFormat;
    e.format = C.format;
    e.numberFormat = C.numberFormat;
    e.defaultOptions = I.defaultOptions;
    e.getOptions = I.getOptions;
    e.time = I.defaultTime;
    e.setOptions = I.setOptions;
    e.addEvent = b.addEvent;
    e.arrayMax = b.arrayMax;
    e.arrayMin = b.arrayMin;
    e.attr = b.attr;
    e.clearTimeout = b.clearTimeout;
    e.correctFloat = b.correctFloat;
    e.createElement = b.createElement;
    e.css = b.css;
    e.defined = b.defined;
    e.destroyObjectProperties = b.destroyObjectProperties;
    e.discardElement = b.discardElement;
    e.erase = b.erase;
    e.error = b.error;
    e.extend = b.extend;
    e.extendClass = b.extendClass;
    e.find = b.find;
    e.fireEvent = b.fireEvent;
    e.getMagnitude = b.getMagnitude;
    e.getStyle = b.getStyle;
    e.inArray = b.inArray;
    e.isArray = b.isArray;
    e.isClass = b.isClass;
    e.isDOMElement = b.isDOMElement;
    e.isFunction = b.isFunction;
    e.isNumber = b.isNumber;
    e.isObject = b.isObject;
    e.isString = b.isString;
    e.keys = b.keys;
    e.merge = b.merge;
    e.normalizeTickInterval = b.normalizeTickInterval;
    e.objectEach = b.objectEach;
    e.offset = b.offset;
    e.pad = b.pad;
    e.pick = b.pick;
    e.pInt = b.pInt;
    e.relativeLength = b.relativeLength;
    e.removeEvent = b.removeEvent;
    e.splat = b.splat;
    e.stableSort = b.stableSort;
    e.syncTimeout = b.syncTimeout;
    e.timeUnits = b.timeUnits;
    e.uniqueKey = b.uniqueKey;
    e.useSerialIds = b.useSerialIds;
    e.wrap = b.wrap;
    return e;
  });
  e["masters/highcharts.src.js"]._modules = e;
  return e["masters/highcharts.src.js"];
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
(function (global, factory) {
  "use strict";

  if (( false ? undefined : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info.
    module.exports = global.document ? factory(global, true) : function (w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }

      return factory(w);
    };
  } else {
    factory(global);
  } // Pass this if window is not defined yet

})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
  // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
  // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
  // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
  // enough that all such attempts are guarded in a try block.
  "use strict";

  var arr = [];
  var getProto = Object.getPrototypeOf;
  var _slice = arr.slice;
  var flat = arr.flat ? function (array) {
    return arr.flat.call(array);
  } : function (array) {
    return arr.concat.apply([], array);
  };
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var fnToString = hasOwn.toString;
  var ObjectFunctionString = fnToString.call(Object);
  var support = {};

  var isFunction = function isFunction(obj) {
    // Support: Chrome <=57, Firefox <=52
    // In some browsers, typeof returns "function" for HTML <object> elements
    // (i.e., `typeof document.createElement( "object" ) === "function"`).
    // We don't want to classify *any* DOM node as a function.
    // Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
    // Plus for old WebKit, typeof returns "function" for HTML collections
    // (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
    return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
  };

  var isWindow = function isWindow(obj) {
    return obj != null && obj === obj.window;
  };

  var document = window.document;
  var preservedScriptAttributes = {
    type: true,
    src: true,
    nonce: true,
    noModule: true
  };

  function DOMEval(code, node, doc) {
    doc = doc || document;
    var i,
        val,
        script = doc.createElement("script");
    script.text = code;

    if (node) {
      for (i in preservedScriptAttributes) {
        // Support: Firefox 64+, Edge 18+
        // Some browsers don't support the "nonce" property on scripts.
        // On the other hand, just using `getAttribute` is not enough as
        // the `nonce` attribute is reset to an empty string whenever it
        // becomes browsing-context connected.
        // See https://github.com/whatwg/html/issues/2369
        // See https://html.spec.whatwg.org/#nonce-attributes
        // The `node.getAttribute` check was added for the sake of
        // `jQuery.globalEval` so that it can fake a nonce-containing node
        // via an object.
        val = node[i] || node.getAttribute && node.getAttribute(i);

        if (val) {
          script.setAttribute(i, val);
        }
      }
    }

    doc.head.appendChild(script).parentNode.removeChild(script);
  }

  function toType(obj) {
    if (obj == null) {
      return obj + "";
    } // Support: Android <=2.3 only (functionish RegExp)


    return _typeof(obj) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : _typeof(obj);
  }
  /* global Symbol */
  // Defining this global in .eslintrc.json would create a danger of using the global
  // unguarded in another place, it seems safer to define global only for this module


  var version = "3.6.0",
      // Define a local copy of jQuery
  jQuery = function jQuery(selector, context) {
    // The jQuery object is actually just the init constructor 'enhanced'
    // Need init if jQuery is called (just allow error to be thrown if not included)
    return new jQuery.fn.init(selector, context);
  };

  jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: version,
    constructor: jQuery,
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function toArray() {
      return _slice.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function get(num) {
      // Return all the elements in a clean array
      if (num == null) {
        return _slice.call(this);
      } // Return just the one element from the set


      return num < 0 ? this[num + this.length] : this[num];
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function pushStack(elems) {
      // Build a new jQuery matched element set
      var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)

      ret.prevObject = this; // Return the newly-formed element set

      return ret;
    },
    // Execute a callback for every element in the matched set.
    each: function each(callback) {
      return jQuery.each(this, callback);
    },
    map: function map(callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function slice() {
      return this.pushStack(_slice.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(jQuery.grep(this, function (_elem, i) {
        return (i + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(jQuery.grep(this, function (_elem, i) {
        return i % 2;
      }));
    },
    eq: function eq(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };

  jQuery.extend = jQuery.fn.extend = function () {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false; // Handle a deep copy situation

    if (typeof target === "boolean") {
      deep = target; // Skip the boolean and the target

      target = arguments[i] || {};
      i++;
    } // Handle case when target is a string or something (possible in deep copy)


    if (_typeof(target) !== "object" && !isFunction(target)) {
      target = {};
    } // Extend jQuery itself if only one argument is passed


    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          copy = options[name]; // Prevent Object.prototype pollution
          // Prevent never-ending loop

          if (name === "__proto__" || target === copy) {
            continue;
          } // Recurse if we're merging plain objects or arrays


          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
            src = target[name]; // Ensure proper type for the source value

            if (copyIsArray && !Array.isArray(src)) {
              clone = [];
            } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
              clone = {};
            } else {
              clone = src;
            }

            copyIsArray = false; // Never move original objects, clone them

            target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    } // Return the modified object


    return target;
  };

  jQuery.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    // Assume jQuery is ready without the ready module
    isReady: true,
    error: function error(msg) {
      throw new Error(msg);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(obj) {
      var proto, Ctor; // Detect obvious negatives
      // Use toString instead of jQuery.type to catch host objects

      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }

      proto = getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain

      if (!proto) {
        return true;
      } // Objects with prototype are plain iff they were constructed by a global Object function


      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    isEmptyObject: function isEmptyObject(obj) {
      var name;

      for (name in obj) {
        return false;
      }

      return true;
    },
    // Evaluates a script in a provided context; falls back to the global one
    // if not specified.
    globalEval: function globalEval(code, options, doc) {
      DOMEval(code, {
        nonce: options && options.nonce
      }, doc);
    },
    each: function each(obj, callback) {
      var length,
          i = 0;

      if (isArrayLike(obj)) {
        length = obj.length;

        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }

      return obj;
    },
    // results is for internal usage only
    makeArray: function makeArray(arr, results) {
      var ret = results || [];

      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }

      return ret;
    },
    inArray: function inArray(elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    // Support: Android <=4.0 only, PhantomJS 1 only
    // push.apply(_, arraylike) throws on ancient WebKit
    merge: function merge(first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;

      for (; j < len; j++) {
        first[i++] = second[j];
      }

      first.length = i;
      return first;
    },
    grep: function grep(elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert; // Go through the array, only saving the items
      // that pass the validator function

      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);

        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }

      return matches;
    },
    // arg is for internal usage only
    map: function map(elems, callback, arg) {
      var length,
          value,
          i = 0,
          ret = []; // Go through the array, translating each of the items to their new values

      if (isArrayLike(elems)) {
        length = elems.length;

        for (; i < length; i++) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        } // Go through every key on the object,

      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        }
      } // Flatten any nested arrays


      return flat(ret);
    },
    // A global GUID counter for objects
    guid: 1,
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: support
  });

  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  } // Populate the class2type map


  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (_i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  function isArrayLike(obj) {
    // Support: real iOS 8.2 only (not reproducible in simulator)
    // `in` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    var length = !!obj && "length" in obj && obj.length,
        type = toType(obj);

    if (isFunction(obj) || isWindow(obj)) {
      return false;
    }

    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }

  var Sizzle =
  /*!
   * Sizzle CSS Selector Engine v2.3.6
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://js.foundation/
   *
   * Date: 2021-02-16
   */
  function (window) {
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        // Local document vars
    setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        // Instance-specific data
    expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        nonnativeSelectorCache = createCache(),
        sortOrder = function sortOrder(a, b) {
      if (a === b) {
        hasDuplicate = true;
      }

      return 0;
    },
        // Instance methods
    hasOwn = {}.hasOwnProperty,
        arr = [],
        pop = arr.pop,
        pushNative = arr.push,
        push = arr.push,
        slice = arr.slice,
        // Use a stripped-down indexOf as it's faster than native
    // https://jsperf.com/thor-indexof-vs-for/5
    indexOf = function indexOf(list, elem) {
      var i = 0,
          len = list.length;

      for (; i < len; i++) {
        if (list[i] === elem) {
          return i;
        }
      }

      return -1;
    },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" + "ismap|loop|multiple|open|readonly|required|scoped",
        // Regular expressions
    // http://www.w3.org/TR/css3-selectors/#whitespace
    whitespace = "[\\x20\\t\\r\\n\\f]",
        // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
    identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
    attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
    "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5]
    // or strings [capture 3 or capture 4]"
    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
    // 1. quoted (capture 3; capture 4 or capture 5)
    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
    ".*" + ")\\)|)",
        // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
    rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rdescend = new RegExp(whitespace + "|>"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
      "ID": new RegExp("^#(" + identifier + ")"),
      "CLASS": new RegExp("^\\.(" + identifier + ")"),
      "TAG": new RegExp("^(" + identifier + "|[*])"),
      "ATTR": new RegExp("^" + attributes),
      "PSEUDO": new RegExp("^" + pseudos),
      "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
      "bool": new RegExp("^(?:" + booleans + ")$", "i"),
      // For use in libraries implementing .is()
      // We use this for POS matching in `select`
      "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
    },
        rhtml = /HTML$/i,
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        // Easily-parseable/retrievable ID or TAG or CLASS selectors
    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        // CSS escapes
    // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
    runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"),
        funescape = function funescape(escape, nonHex) {
      var high = "0x" + escape.slice(1) - 0x10000;
      return nonHex ? // Strip the backslash prefix from a non-hex escape sequence
      nonHex : // Replace a hexadecimal escape sequence with the encoded Unicode code point
      // Support: IE <=11+
      // For values outside the Basic Multilingual Plane (BMP), manually construct a
      // surrogate pair
      high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
    },
        // CSS string/identifier serialization
    // https://drafts.csswg.org/cssom/#common-serializing-idioms
    rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        fcssescape = function fcssescape(ch, asCodePoint) {
      if (asCodePoint) {
        // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
        if (ch === "\0") {
          return "\uFFFD";
        } // Control characters and (dependent upon position) numbers get escaped as code points


        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
      } // Other potentially-special ASCII characters get backslash-escaped


      return "\\" + ch;
    },
        // Used for iframes
    // See setDocument()
    // Removing the function wrapper causes a "Permission Denied"
    // error in IE
    unloadHandler = function unloadHandler() {
      setDocument();
    },
        inDisabledFieldset = addCombinator(function (elem) {
      return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
    }, {
      dir: "parentNode",
      next: "legend"
    }); // Optimize for push.apply( _, NodeList )


    try {
      push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
      // Detect silently failing push.apply
      // eslint-disable-next-line no-unused-expressions

      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {
        apply: arr.length ? // Leverage slice if possible
        function (target, els) {
          pushNative.apply(target, slice.call(els));
        } : // Support: IE<9
        // Otherwise append directly
        function (target, els) {
          var j = target.length,
              i = 0; // Can't trust NodeList.length

          while (target[j++] = els[i++]) {}

          target.length = j - 1;
        }
      };
    }

    function Sizzle(selector, context, results, seed) {
      var m,
          i,
          elem,
          nid,
          match,
          groups,
          newSelector,
          newContext = context && context.ownerDocument,
          // nodeType defaults to 9, since context defaults to document
      nodeType = context ? context.nodeType : 9;
      results = results || []; // Return early from calls with invalid selector or context

      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      } // Try to shortcut find operations (as opposed to filters) in HTML documents


      if (!seed) {
        setDocument(context);
        context = context || document;

        if (documentIsHTML) {
          // If the selector is sufficiently simple, try using a "get*By*" DOM method
          // (excepting DocumentFragment context, where the methods don't exist)
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            // ID selector
            if (m = match[1]) {
              // Document context
              if (nodeType === 9) {
                if (elem = context.getElementById(m)) {
                  // Support: IE, Opera, Webkit
                  // TODO: identify versions
                  // getElementById can match elements by name instead of ID
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                } // Element context

              } else {
                // Support: IE, Opera, Webkit
                // TODO: identify versions
                // getElementById can match elements by name instead of ID
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  results.push(elem);
                  return results;
                }
              } // Type selector

            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results; // Class selector
            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          } // Take advantage of querySelectorAll


          if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && ( // Support: IE 8 only
          // Exclude object elements
          nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
            newSelector = selector;
            newContext = context; // qSA considers elements outside a scoping root when evaluating child or
            // descendant combinators, which is not what we want.
            // In such cases, we work around the behavior by prefixing every selector in the
            // list with an ID selector referencing the scope context.
            // The technique has to be used as well when a leading combinator is used
            // as such selectors are not recognized by querySelectorAll.
            // Thanks to Andrew Dupont for this technique.

            if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
              // Expand context for sibling selectors
              newContext = rsibling.test(selector) && testContext(context.parentNode) || context; // We can use :scope instead of the ID hack if the browser
              // supports it & if we're not changing the context.

              if (newContext !== context || !support.scope) {
                // Capture the context ID, setting it first if necessary
                if (nid = context.getAttribute("id")) {
                  nid = nid.replace(rcssescape, fcssescape);
                } else {
                  context.setAttribute("id", nid = expando);
                }
              } // Prefix every selector in the list


              groups = tokenize(selector);
              i = groups.length;

              while (i--) {
                groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
              }

              newSelector = groups.join(",");
            }

            try {
              push.apply(results, newContext.querySelectorAll(newSelector));
              return results;
            } catch (qsaError) {
              nonnativeSelectorCache(selector, true);
            } finally {
              if (nid === expando) {
                context.removeAttribute("id");
              }
            }
          }
        }
      } // All others


      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    /**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */


    function createCache() {
      var keys = [];

      function cache(key, value) {
        // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
        if (keys.push(key + " ") > Expr.cacheLength) {
          // Only keep the most recent entries
          delete cache[keys.shift()];
        }

        return cache[key + " "] = value;
      }

      return cache;
    }
    /**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */


    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    /**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */


    function assert(fn) {
      var el = document.createElement("fieldset");

      try {
        return !!fn(el);
      } catch (e) {
        return false;
      } finally {
        // Remove from its parent by default
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        } // release memory in IE


        el = null;
      }
    }
    /**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */


    function addHandle(attrs, handler) {
      var arr = attrs.split("|"),
          i = arr.length;

      while (i--) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    /**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */


    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex; // Use IE sourceIndex if available on both nodes

      if (diff) {
        return diff;
      } // Check if b follows a


      if (cur) {
        while (cur = cur.nextSibling) {
          if (cur === b) {
            return -1;
          }
        }
      }

      return a ? 1 : -1;
    }
    /**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */


    function createInputPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */


    function createButtonPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */


    function createDisabledPseudo(disabled) {
      // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
      return function (elem) {
        // Only certain elements can match :enabled or :disabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
        if ("form" in elem) {
          // Check for inherited disabledness on relevant non-disabled elements:
          // * listed form-associated elements in a disabled fieldset
          //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
          // * option elements in a disabled optgroup
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
          // All such elements have a "form" property.
          if (elem.parentNode && elem.disabled === false) {
            // Option elements defer to a parent optgroup if present
            if ("label" in elem) {
              if ("label" in elem.parentNode) {
                return elem.parentNode.disabled === disabled;
              } else {
                return elem.disabled === disabled;
              }
            } // Support: IE 6 - 11
            // Use the isDisabled shortcut property to check for disabled fieldset ancestors


            return elem.isDisabled === disabled || // Where there is no isDisabled, check manually

            /* jshint -W018 */
            elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
          }

          return elem.disabled === disabled; // Try to winnow out elements that can't be disabled before trusting the disabled property.
          // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
          // even exist on them, let alone have a boolean value.
        } else if ("label" in elem) {
          return elem.disabled === disabled;
        } // Remaining elements are neither :enabled nor :disabled


        return false;
      };
    }
    /**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */


    function createPositionalPseudo(fn) {
      return markFunction(function (argument) {
        argument = +argument;
        return markFunction(function (seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length; // Match elements found at the specified indexes

          while (i--) {
            if (seed[j = matchIndexes[i]]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    /**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */


    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    } // Expose support vars for convenience


    support = Sizzle.support = {};
    /**
     * Detects XML nodes
     * @param {Element|Object} elem An element or a document
     * @returns {Boolean} True iff elem is a non-HTML XML node
     */

    isXML = Sizzle.isXML = function (elem) {
      var namespace = elem && elem.namespaceURI,
          docElem = elem && (elem.ownerDocument || elem).documentElement; // Support: IE <=8
      // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
      // https://bugs.jquery.com/ticket/4833

      return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
    };
    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */


    setDocument = Sizzle.setDocument = function (node) {
      var hasCompare,
          subWindow,
          doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq

      if (doc == document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      } // Update global variables


      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML(document); // Support: IE 9 - 11+, Edge 12 - 18+
      // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq

      if (preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
        // Support: IE 11, Edge
        if (subWindow.addEventListener) {
          subWindow.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
        } else if (subWindow.attachEvent) {
          subWindow.attachEvent("onunload", unloadHandler);
        }
      } // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
      // Safari 4 - 5 only, Opera <=11.6 - 12.x only
      // IE/Edge & older browsers don't support the :scope pseudo-class.
      // Support: Safari 6.0 only
      // Safari 6.0 supports :scope but it's an alias of :root there.


      support.scope = assert(function (el) {
        docElem.appendChild(el).appendChild(document.createElement("div"));
        return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
      });
      /* Attributes
      ---------------------------------------------------------------------- */
      // Support: IE<8
      // Verify that getAttribute really returns attributes and not properties
      // (excepting IE8 booleans)

      support.attributes = assert(function (el) {
        el.className = "i";
        return !el.getAttribute("className");
      });
      /* getElement(s)By*
      ---------------------------------------------------------------------- */
      // Check if getElementsByTagName("*") returns only elements

      support.getElementsByTagName = assert(function (el) {
        el.appendChild(document.createComment(""));
        return !el.getElementsByTagName("*").length;
      }); // Support: IE<9

      support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
      // Check if getElementById returns elements by name
      // The broken getElementById methods don't pick up programmatically-set names,
      // so use a roundabout getElementsByName test

      support.getById = assert(function (el) {
        docElem.appendChild(el).id = expando;
        return !document.getElementsByName || !document.getElementsByName(expando).length;
      }); // ID filter and find

      if (support.getById) {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            return elem.getAttribute("id") === attrId;
          };
        };

        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var elem = context.getElementById(id);
            return elem ? [elem] : [];
          }
        };
      } else {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        }; // Support: IE 6 - 7 only
        // getElementById is not reliable as a find shortcut


        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var node,
                i,
                elems,
                elem = context.getElementById(id);

            if (elem) {
              // Verify the id attribute
              node = elem.getAttributeNode("id");

              if (node && node.value === id) {
                return [elem];
              } // Fall back on getElementsByName


              elems = context.getElementsByName(id);
              i = 0;

              while (elem = elems[i++]) {
                node = elem.getAttributeNode("id");

                if (node && node.value === id) {
                  return [elem];
                }
              }
            }

            return [];
          }
        };
      } // Tag


      Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
        } else if (support.qsa) {
          return context.querySelectorAll(tag);
        }
      } : function (tag, context) {
        var elem,
            tmp = [],
            i = 0,
            // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
        results = context.getElementsByTagName(tag); // Filter out possible comments

        if (tag === "*") {
          while (elem = results[i++]) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }

          return tmp;
        }

        return results;
      }; // Class

      Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };
      /* QSA/matchesSelector
      ---------------------------------------------------------------------- */
      // QSA and matchesSelector support
      // matchesSelector(:active) reports false when true (IE9/Opera 11.5)


      rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
      // We allow this because of a bug in IE8/9 that throws an error
      // whenever `document.activeElement` is accessed on an iframe
      // So, we allow :focus to pass through QSA all the time to avoid the IE error
      // See https://bugs.jquery.com/ticket/13378

      rbuggyQSA = [];

      if (support.qsa = rnative.test(document.querySelectorAll)) {
        // Build QSA regex
        // Regex strategy adopted from Diego Perini
        assert(function (el) {
          var input; // Select is set to empty string on purpose
          // This is to test IE's treatment of not explicitly
          // setting a boolean content attribute,
          // since its presence should be enough
          // https://bugs.jquery.com/ticket/12359

          docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
          // Nothing should be selected when empty strings follow ^= or $= or *=
          // The test attribute must be unknown in Opera but "safe" for WinRT
          // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section

          if (el.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          } // Support: IE8
          // Boolean attributes and "value" are not treated correctly


          if (!el.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+


          if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          } // Support: IE 11+, Edge 15 - 18+
          // IE 11/Edge don't find elements on a `[name='']` query in some cases.
          // Adding a temporary attribute to the document before the selection works
          // around the issue.
          // Interestingly, IE 10 & older don't seem to have the issue.


          input = document.createElement("input");
          input.setAttribute("name", "");
          el.appendChild(input);

          if (!el.querySelectorAll("[name='']").length) {
            rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
          } // Webkit/Opera - :checked should return selected option elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          // IE8 throws error here and will not see later tests


          if (!el.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          } // Support: Safari 8+, iOS 8+
          // https://bugs.webkit.org/show_bug.cgi?id=136851
          // In-page `selector#id sibling-combinator selector` fails


          if (!el.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          } // Support: Firefox <=3.6 - 5 only
          // Old Firefox doesn't throw on a badly-escaped identifier.


          el.querySelectorAll("\\\f");
          rbuggyQSA.push("[\\r\\n\\f]");
        });
        assert(function (el) {
          el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>"; // Support: Windows 8 Native Apps
          // The type and name attributes are restricted during .innerHTML assignment

          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          el.appendChild(input).setAttribute("name", "D"); // Support: IE8
          // Enforce case-sensitivity of name attribute

          if (el.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
          } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
          // IE8 throws error here and will not see later tests


          if (el.querySelectorAll(":enabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Support: IE9-11+
          // IE's :disabled selector does not pick up the children of disabled fieldsets


          docElem.appendChild(el).disabled = true;

          if (el.querySelectorAll(":disabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Support: Opera 10 - 11 only
          // Opera 10-11 does not throw on post-comma invalid pseudos


          el.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }

      if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
        assert(function (el) {
          // Check to see if it's possible to do matchesSelector
          // on a disconnected node (IE 9)
          support.disconnectedMatch = matches.call(el, "*"); // This should fail with an exception
          // Gecko does not error, returns false instead

          matches.call(el, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }

      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
      /* Contains
      ---------------------------------------------------------------------- */

      hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
      // Purposefully self-exclusive
      // As in, an element does not contain itself

      contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function (a, b) {
        if (b) {
          while (b = b.parentNode) {
            if (b === a) {
              return true;
            }
          }
        }

        return false;
      };
      /* Sorting
      ---------------------------------------------------------------------- */
      // Document order sorting

      sortOrder = hasCompare ? function (a, b) {
        // Flag for duplicate removal
        if (a === b) {
          hasDuplicate = true;
          return 0;
        } // Sort on method existence if only one input has compareDocumentPosition


        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;

        if (compare) {
          return compare;
        } // Calculate position if both inputs belong to the same document
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq


        compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
        1; // Disconnected nodes

        if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
          // Choose the first element that is related to our preferred document
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          if (a == document || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) {
            return -1;
          } // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq


          if (b == document || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) {
            return 1;
          } // Maintain original order


          return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
        }

        return compare & 4 ? -1 : 1;
      } : function (a, b) {
        // Exit early if the nodes are identical
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }

        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b]; // Parentless nodes are either documents or disconnected

        if (!aup || !bup) {
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.

          /* eslint-disable eqeqeq */
          return a == document ? -1 : b == document ? 1 :
          /* eslint-enable eqeqeq */
          aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
        } else if (aup === bup) {
          return siblingCheck(a, b);
        } // Otherwise we need full lists of their ancestors for comparison


        cur = a;

        while (cur = cur.parentNode) {
          ap.unshift(cur);
        }

        cur = b;

        while (cur = cur.parentNode) {
          bp.unshift(cur);
        } // Walk down the tree looking for a discrepancy


        while (ap[i] === bp[i]) {
          i++;
        }

        return i ? // Do a sibling check if the nodes have a common ancestor
        siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.

        /* eslint-disable eqeqeq */
        ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 :
        /* eslint-enable eqeqeq */
        0;
      };
      return document;
    };

    Sizzle.matches = function (expr, elements) {
      return Sizzle(expr, null, null, elements);
    };

    Sizzle.matchesSelector = function (elem, expr) {
      setDocument(elem);

      if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes

          if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {
          nonnativeSelectorCache(expr, true);
        }
      }

      return Sizzle(expr, document, null, [elem]).length > 0;
    };

    Sizzle.contains = function (context, elem) {
      // Set document vars if needed
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      if ((context.ownerDocument || context) != document) {
        setDocument(context);
      }

      return contains(context, elem);
    };

    Sizzle.attr = function (elem, name) {
      // Set document vars if needed
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      if ((elem.ownerDocument || elem) != document) {
        setDocument(elem);
      }

      var fn = Expr.attrHandle[name.toLowerCase()],
          // Don't get fooled by Object.prototype properties (jQuery #13807)
      val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };

    Sizzle.escape = function (sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };

    Sizzle.error = function (msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };
    /**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */


    Sizzle.uniqueSort = function (results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0; // Unless we *know* we can detect duplicates, assume their presence

      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0);
      results.sort(sortOrder);

      if (hasDuplicate) {
        while (elem = results[i++]) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }

        while (j--) {
          results.splice(duplicates[j], 1);
        }
      } // Clear input after sorting to release objects
      // See https://github.com/jquery/sizzle/pull/225


      sortInput = null;
      return results;
    };
    /**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */


    getText = Sizzle.getText = function (elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;

      if (!nodeType) {
        // If no nodeType, this is expected to be an array
        while (node = elem[i++]) {
          // Do not traverse comment nodes
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        // Use textContent for elements
        // innerText usage removed for consistency of new lines (jQuery #11153)
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          // Traverse its children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      } // Do not include comment or processing instruction nodes


      return ret;
    };

    Expr = Sizzle.selectors = {
      // Can be adjusted by the user
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        "ATTR": function ATTR(match) {
          match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted

          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }

          return match.slice(0, 4);
        },
        "CHILD": function CHILD(match) {
          /* matches from matchExpr["CHILD"]
          	1 type (only|nth|...)
          	2 what (child|of-type)
          	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
          	4 xn-component of xn+y argument ([+-]?\d*n|)
          	5 sign of xn-component
          	6 x of xn-component
          	7 sign of y-component
          	8 y of y-component
          */
          match[1] = match[1].toLowerCase();

          if (match[1].slice(0, 3) === "nth") {
            // nth-* requires argument
            if (!match[3]) {
              Sizzle.error(match[0]);
            } // numeric x and y parameters for Expr.filter.CHILD
            // remember that false/true cast respectively to 0/1


            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }

          return match;
        },
        "PSEUDO": function PSEUDO(match) {
          var excess,
              unquoted = !match[6] && match[2];

          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          } // Accept quoted arguments as-is


          if (match[3]) {
            match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
          } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
          excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
          excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            // excess is a negative index
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          } // Return only captures needed by the pseudo filter method (type and argument)


          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function TAG(nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function () {
            return true;
          } : function (elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function CLASS(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function ATTR(name, operator, check) {
          return function (elem) {
            var result = Sizzle.attr(elem, name);

            if (result == null) {
              return operator === "!=";
            }

            if (!operator) {
              return true;
            }

            result += "";
            /* eslint-disable max-len */

            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
            /* eslint-enable max-len */
          };
        },
        "CHILD": function CHILD(type, what, _argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";
          return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
          function (elem) {
            return !!elem.parentNode;
          } : function (elem, _context, xml) {
            var cache,
                uniqueCache,
                outerCache,
                node,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType,
                diff = false;

            if (parent) {
              // :(first|last|only)-(child|of-type)
              if (simple) {
                while (dir) {
                  node = elem;

                  while (node = node[dir]) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  } // Reverse direction for :only-* (if we haven't yet done so)


                  start = dir = type === "only" && !start && "nextSibling";
                }

                return true;
              }

              start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`

              if (forward && useCache) {
                // Seek `elem` from a previously-cached index
                // ...in a gzip-friendly way
                node = parent;
                outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)

                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];

                while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
                diff = nodeIndex = 0) || start.pop()) {
                  // When found, cache indexes on `parent` and break
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                // Use previously-cached element index if available
                if (useCache) {
                  // ...in a gzip-friendly way
                  node = elem;
                  outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                  // Defend against cloned attroperties (jQuery gh-1709)

                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                } // xml :nth-child(...)
                // or :nth-last-child(...) or :nth(-last)?-of-type(...)


                if (diff === false) {
                  // Use the same loop as above to seek `elem` from the start
                  while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                      // Cache the index of each encountered element
                      if (useCache) {
                        outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                        // Defend against cloned attroperties (jQuery gh-1709)

                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        uniqueCache[type] = [dirruns, diff];
                      }

                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              } // Incorporate the offset, then check against cycle size


              diff -= last;
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        "PSEUDO": function PSEUDO(pseudo, argument) {
          // pseudo-class names are case-insensitive
          // http://www.w3.org/TR/selectors/#pseudo-classes
          // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
          // Remember that setFilters inherits from pseudos
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
          // arguments are needed to create the filter function
          // just as Sizzle does

          if (fn[expando]) {
            return fn(argument);
          } // But maintain support for old signatures


          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;

              while (i--) {
                idx = indexOf(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function (elem) {
              return fn(elem, 0, args);
            };
          }

          return fn;
        }
      },
      pseudos: {
        // Potentially complex pseudos
        "not": markFunction(function (selector) {
          // Trim the selector passed to compile
          // to avoid treating leading and trailing
          // spaces as combinators
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function (seed, matches, _context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length; // Match elements unmatched by `matcher`

            while (i--) {
              if (elem = unmatched[i]) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function (elem, _context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results); // Don't keep the element (issue #299)

            input[0] = null;
            return !results.pop();
          };
        }),
        "has": markFunction(function (selector) {
          return function (elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        "contains": markFunction(function (text) {
          text = text.replace(runescape, funescape);
          return function (elem) {
            return (elem.textContent || getText(elem)).indexOf(text) > -1;
          };
        }),
        // "Whether an element is represented by a :lang() selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // http://www.w3.org/TR/selectors/#lang-pseudo
        "lang": markFunction(function (lang) {
          // lang value must be a valid identifier
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }

          lang = lang.replace(runescape, funescape).toLowerCase();
          return function (elem) {
            var elemLang;

            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);

            return false;
          };
        }),
        // Miscellaneous
        "target": function target(elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        "root": function root(elem) {
          return elem === docElem;
        },
        "focus": function focus(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        // Boolean properties
        "enabled": createDisabledPseudo(false),
        "disabled": createDisabledPseudo(true),
        "checked": function checked(elem) {
          // In CSS3, :checked should return both checked and selected elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          var nodeName = elem.nodeName.toLowerCase();
          return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
        },
        "selected": function selected(elem) {
          // Accessing this property makes selected-by-default
          // options in Safari work properly
          if (elem.parentNode) {
            // eslint-disable-next-line no-unused-expressions
            elem.parentNode.selectedIndex;
          }

          return elem.selected === true;
        },
        // Contents
        "empty": function empty(elem) {
          // http://www.w3.org/TR/selectors/#empty-pseudo
          // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
          //   but not by others (comment: 8; processing instruction: 7; etc.)
          // nodeType < 6 works because attributes (2) do not appear as children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }

          return true;
        },
        "parent": function parent(elem) {
          return !Expr.pseudos["empty"](elem);
        },
        // Element/input types
        "header": function header(elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function input(elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function button(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function text(elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
          // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
          (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        // Position-in-collection
        "first": createPositionalPseudo(function () {
          return [0];
        }),
        "last": createPositionalPseudo(function (_matchIndexes, length) {
          return [length - 1];
        }),
        "eq": createPositionalPseudo(function (_matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        "even": createPositionalPseudo(function (matchIndexes, length) {
          var i = 0;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "odd": createPositionalPseudo(function (matchIndexes, length) {
          var i = 1;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument > length ? length : argument;

          for (; --i >= 0;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;

          for (; ++i < length;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        })
      }
    };
    Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos

    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }

    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    } // Easy API for creating new setFilters


    function setFilters() {}

    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();

    tokenize = Sizzle.tokenize = function (selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];

      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }

      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;

      while (soFar) {
        // Comma and first run
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            // Don't consume trailing commas as valid
            soFar = soFar.slice(match[0].length) || soFar;
          }

          groups.push(tokens = []);
        }

        matched = false; // Combinators

        if (match = rcombinators.exec(soFar)) {
          matched = match.shift();
          tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        } // Filters


        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }

        if (!matched) {
          break;
        }
      } // Return the length of the invalid excess
      // if we're just parsing
      // Otherwise, throw an error or return tokens


      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
      tokenCache(selector, groups).slice(0);
    };

    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";

      for (; i < len; i++) {
        selector += tokens[i].value;
      }

      return selector;
    }

    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          skip = combinator.next,
          key = skip || dir,
          checkNonElements = base && key === "parentNode",
          doneName = done++;
      return combinator.first ? // Check against closest ancestor/preceding element
      function (elem, context, xml) {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }

        return false;
      } : // Check against all ancestor/preceding elements
      function (elem, context, xml) {
        var oldCache,
            uniqueCache,
            outerCache,
            newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching

        if (xml) {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)

              uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

              if (skip && skip === elem.nodeName.toLowerCase()) {
                elem = elem[dir] || elem;
              } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                // Assign to newCache so results back-propagate to previous elements
                return newCache[2] = oldCache[2];
              } else {
                // Reuse newcache so results back-propagate to previous elements
                uniqueCache[key] = newCache; // A match means we're done; a fail means we have to keep checking

                if (newCache[2] = matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          }
        }

        return false;
      };
    }

    function elementMatcher(matchers) {
      return matchers.length > 1 ? function (elem, context, xml) {
        var i = matchers.length;

        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }

        return true;
      } : matchers[0];
    }

    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;

      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }

      return results;
    }

    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;

      for (; i < len; i++) {
        if (elem = unmatched[i]) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);

            if (mapped) {
              map.push(i);
            }
          }
        }
      }

      return newUnmatched;
    }

    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }

      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }

      return markFunction(function (seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            // Get initial elements from seed or context
        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            // Prefilter to get matcher input, preserving a map for seed-results synchronization
        matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
        [] : // ...otherwise use results directly
        results : matcherIn; // Find primary matches

        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        } // Apply postFilter


        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn

          i = temp.length;

          while (i--) {
            if (elem = temp[i]) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }

        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              // Get the final matcherOut by condensing this intermediate into postFinder contexts
              temp = [];
              i = matcherOut.length;

              while (i--) {
                if (elem = matcherOut[i]) {
                  // Restore matcherIn since elem is not yet a final match
                  temp.push(matcherIn[i] = elem);
                }
              }

              postFinder(null, matcherOut = [], temp, xml);
            } // Move matched elements from seed to results to keep them synchronized


            i = matcherOut.length;

            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          } // Add elements to results, through postFinder if defined

        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);

          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }

    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          // The foundational matcher ensures that elements are reachable from top-level context(s)
      matchContext = addCombinator(function (elem) {
        return elem === checkContext;
      }, implicitRelative, true),
          matchAnyContext = addCombinator(function (elem) {
        return indexOf(checkContext, elem) > -1;
      }, implicitRelative, true),
          matchers = [function (elem, context, xml) {
        var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)

        checkContext = null;
        return ret;
      }];

      for (; i < len; i++) {
        if (matcher = Expr.relative[tokens[i].type]) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher

          if (matcher[expando]) {
            // Find the next relative operator (if any) for proper handling
            j = ++i;

            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }

            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
            tokens.slice(0, i - 1).concat({
              value: tokens[i - 2].type === " " ? "*" : ""
            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
          }

          matchers.push(matcher);
        }
      }

      return elementMatcher(matchers);
    }

    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function superMatcher(seed, context, xml, results, outermost) {
        var elem,
            j,
            matcher,
            matchedCount = 0,
            i = "0",
            unmatched = seed && [],
            setMatched = [],
            contextBackup = outermostContext,
            // We must always have either seed elements or outermost context
        elems = seed || byElement && Expr.find["TAG"]("*", outermost),
            // Use integer dirruns iff this is the outermost matcher
        dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
            len = elems.length;

        if (outermost) {
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          outermostContext = context == document || context || outermost;
        } // Add elements passing elementMatchers directly to results
        // Support: IE<9, Safari
        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id


        for (; i !== len && (elem = elems[i]) != null; i++) {
          if (byElement && elem) {
            j = 0; // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq

            if (!context && elem.ownerDocument != document) {
              setDocument(elem);
              xml = !documentIsHTML;
            }

            while (matcher = elementMatchers[j++]) {
              if (matcher(elem, context || document, xml)) {
                results.push(elem);
                break;
              }
            }

            if (outermost) {
              dirruns = dirrunsUnique;
            }
          } // Track unmatched elements for set filters


          if (bySet) {
            // They will have gone through all possible matchers
            if (elem = !matcher && elem) {
              matchedCount--;
            } // Lengthen the array for every element, matched or not


            if (seed) {
              unmatched.push(elem);
            }
          }
        } // `i` is now the count of elements visited above, and adding it to `matchedCount`
        // makes the latter nonnegative.


        matchedCount += i; // Apply set filters to unmatched elements
        // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
        // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
        // no element matchers and no seed.
        // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
        // case, which will result in a "00" `matchedCount` that differs from `i` but is also
        // numerically zero.

        if (bySet && i !== matchedCount) {
          j = 0;

          while (matcher = setMatchers[j++]) {
            matcher(unmatched, setMatched, context, xml);
          }

          if (seed) {
            // Reintegrate element matches to eliminate the need for sorting
            if (matchedCount > 0) {
              while (i--) {
                if (!(unmatched[i] || setMatched[i])) {
                  setMatched[i] = pop.call(results);
                }
              }
            } // Discard index placeholder values to get only actual matches


            setMatched = condense(setMatched);
          } // Add matches to results


          push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting

          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
            Sizzle.uniqueSort(results);
          }
        } // Override manipulation of globals by nested matchers


        if (outermost) {
          dirruns = dirrunsUnique;
          outermostContext = contextBackup;
        }

        return unmatched;
      };

      return bySet ? markFunction(superMatcher) : superMatcher;
    }

    compile = Sizzle.compile = function (selector, match
    /* Internal Use Only */
    ) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];

      if (!cached) {
        // Generate a function of recursive functions that can be used to check each element
        if (!match) {
          match = tokenize(selector);
        }

        i = match.length;

        while (i--) {
          cached = matcherFromTokens(match[i]);

          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        } // Cache the compiled function


        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization

        cached.selector = selector;
      }

      return cached;
    };
    /**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */


    select = Sizzle.select = function (selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize(selector = compiled.selector || selector);
      results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
      // (the latter of which guarantees us context)

      if (match.length === 1) {
        // Reduce context if the leading compound selector is an ID
        tokens = match[0] = match[0].slice(0);

        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];

          if (!context) {
            return results; // Precompiled matchers will still verify ancestry, so step up a level
          } else if (compiled) {
            context = context.parentNode;
          }

          selector = selector.slice(tokens.shift().value.length);
        } // Fetch a seed set for right-to-left matching


        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;

        while (i--) {
          token = tokens[i]; // Abort if we hit a combinator

          if (Expr.relative[type = token.type]) {
            break;
          }

          if (find = Expr.find[type]) {
            // Search, expanding context for leading sibling combinators
            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
              // If seed is empty or no tokens remain, we can return early
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);

              if (!selector) {
                push.apply(results, seed);
                return results;
              }

              break;
            }
          }
        }
      } // Compile and execute a filtering function if one is not provided
      // Provide `match` to avoid retokenization if we modified the selector above


      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    }; // One-time assignments
    // Sort stability


    support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
    // Always assume duplicates if they aren't passed to the comparison function

    support.detectDuplicates = !!hasDuplicate; // Initialize against the default document

    setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
    // Detached nodes confoundingly follow *each other*

    support.sortDetached = assert(function (el) {
      // Should return 1, but returns 4 (following)
      return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
    }); // Support: IE<8
    // Prevent attribute/property "interpolation"
    // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx

    if (!assert(function (el) {
      el.innerHTML = "<a href='#'></a>";
      return el.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function (elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    } // Support: IE<9
    // Use defaultValue in place of getAttribute("value")


    if (!support.attributes || !assert(function (el) {
      el.innerHTML = "<input/>";
      el.firstChild.setAttribute("value", "");
      return el.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function (elem, _name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    } // Support: IE<9
    // Use getAttributeNode to fetch booleans when getAttribute lies


    if (!assert(function (el) {
      return el.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function (elem, name, isXML) {
        var val;

        if (!isXML) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      });
    }

    return Sizzle;
  }(window);

  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors; // Deprecated

  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;

  var dir = function dir(elem, _dir, until) {
    var matched = [],
        truncate = until !== undefined;

    while ((elem = elem[_dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }

        matched.push(elem);
      }
    }

    return matched;
  };

  var _siblings = function siblings(n, elem) {
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }

    return matched;
  };

  var rneedsContext = jQuery.expr.match.needsContext;

  function nodeName(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }

  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // Implement the identical functionality for filter and not

  function winnow(elements, qualifier, not) {
    if (isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    } // Single element


    if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return elem === qualifier !== not;
      });
    } // Arraylike of elements (jQuery, arguments, Array)


    if (typeof qualifier !== "string") {
      return jQuery.grep(elements, function (elem) {
        return indexOf.call(qualifier, elem) > -1 !== not;
      });
    } // Filtered directly for both simple and complex selectors


    return jQuery.filter(qualifier, elements, not);
  }

  jQuery.filter = function (expr, elems, not) {
    var elem = elems[0];

    if (not) {
      expr = ":not(" + expr + ")";
    }

    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
    }

    return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
      return elem.nodeType === 1;
    }));
  };

  jQuery.fn.extend({
    find: function find(selector) {
      var i,
          ret,
          len = this.length,
          self = this;

      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }

      ret = this.pushStack([]);

      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }

      return len > 1 ? jQuery.uniqueSort(ret) : ret;
    },
    filter: function filter(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function not(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function is(selector) {
      return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  }); // Initialize a jQuery object
  // A central reference to the root jQuery(document)

  var rootjQuery,
      // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  // Shortcut simple #id case for speed
  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      init = jQuery.fn.init = function (selector, context, root) {
    var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)

    if (!selector) {
      return this;
    } // Method init() accepts an alternate rootjQuery
    // so migrate can support jQuery.sub (gh-2101)


    root = root || rootjQuery; // Handle HTML strings

    if (typeof selector === "string") {
      if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [null, selector, null];
      } else {
        match = rquickExpr.exec(selector);
      } // Match html or make sure no context is specified for #id


      if (match && (match[1] || !context)) {
        // HANDLE: $(html) -> $(array)
        if (match[1]) {
          context = context instanceof jQuery ? context[0] : context; // Option to run scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present

          jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)

          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              // Properties of context are called as methods if possible
              if (isFunction(this[match])) {
                this[match](context[match]); // ...and otherwise set as attributes
              } else {
                this.attr(match, context[match]);
              }
            }
          }

          return this; // HANDLE: $(#id)
        } else {
          elem = document.getElementById(match[2]);

          if (elem) {
            // Inject the element directly into the jQuery object
            this[0] = elem;
            this.length = 1;
          }

          return this;
        } // HANDLE: $(expr, $(...))

      } else if (!context || context.jquery) {
        return (context || root).find(selector); // HANDLE: $(expr, context)
        // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor(context).find(selector);
      } // HANDLE: $(DOMElement)

    } else if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this; // HANDLE: $(function)
      // Shortcut for document ready
    } else if (isFunction(selector)) {
      return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
      selector(jQuery);
    }

    return jQuery.makeArray(selector, this);
  }; // Give the init function the jQuery prototype for later instantiation


  init.prototype = jQuery.fn; // Initialize central reference

  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      // Methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  jQuery.fn.extend({
    has: function has(target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function () {
        var i = 0;

        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function closest(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          targets = typeof selectors !== "string" && jQuery(selectors); // Positional selectors never match, since there's no _selection_ context

      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            // Always skip document fragments
            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
            cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
              matched.push(cur);
              break;
            }
          }
        }
      }

      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    // Determine the position of an element within the set
    index: function index(elem) {
      // No argument, return index in parent
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      } // Index in selector


      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      } // Locate the position of the desired element


      return indexOf.call(this, // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem);
    },
    add: function add(selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function addBack(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });

  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}

    return cur;
  }

  jQuery.each({
    parent: function parent(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function parents(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function parentsUntil(elem, _i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function next(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function prev(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function nextAll(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function prevAll(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function nextUntil(elem, _i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function prevUntil(elem, _i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function siblings(elem) {
      return _siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function children(elem) {
      return _siblings(elem.firstChild);
    },
    contents: function contents(elem) {
      if (elem.contentDocument != null && // Support: IE 11+
      // <object> elements with no `data` attribute has an object
      // `contentDocument` with a `null` prototype.
      getProto(elem.contentDocument)) {
        return elem.contentDocument;
      } // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
      // Treat the template element as a regular one in browsers that
      // don't support it.


      if (nodeName(elem, "template")) {
        elem = elem.content || elem;
      }

      return jQuery.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      var matched = jQuery.map(this, fn, until);

      if (name.slice(-5) !== "Until") {
        selector = until;
      }

      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }

      if (this.length > 1) {
        // Remove duplicates
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched);
        } // Reverse order for parents* and prev-derivatives


        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }

      return this.pushStack(matched);
    };
  });
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g; // Convert String-formatted options into Object-formatted ones

  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
      object[flag] = true;
    });
    return object;
  }
  /*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */


  jQuery.Callbacks = function (options) {
    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

    var // Flag to know if list is currently firing
    firing,
        // Last fire value for non-forgettable lists
    memory,
        // Flag to know if list was already fired
    _fired,
        // Flag to prevent firing
    _locked,
        // Actual callback list
    list = [],
        // Queue of execution data for repeatable lists
    queue = [],
        // Index of currently firing callback (modified by add/remove as needed)
    firingIndex = -1,
        // Fire callbacks
    fire = function fire() {
      // Enforce single-firing
      _locked = _locked || options.once; // Execute callbacks for all pending executions,
      // respecting firingIndex overrides and runtime changes

      _fired = firing = true;

      for (; queue.length; firingIndex = -1) {
        memory = queue.shift();

        while (++firingIndex < list.length) {
          // Run callback and check for early termination
          if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
            // Jump to end and forget the data so .add doesn't re-fire
            firingIndex = list.length;
            memory = false;
          }
        }
      } // Forget the data if we're done with it


      if (!options.memory) {
        memory = false;
      }

      firing = false; // Clean up if we're done firing for good

      if (_locked) {
        // Keep an empty list if we have data for future add calls
        if (memory) {
          list = []; // Otherwise, this object is spent
        } else {
          list = "";
        }
      }
    },
        // Actual Callbacks object
    self = {
      // Add a callback or a collection of callbacks to the list
      add: function add() {
        if (list) {
          // If we have memory from a past run, we should fire after adding
          if (memory && !firing) {
            firingIndex = list.length - 1;
            queue.push(memory);
          }

          (function add(args) {
            jQuery.each(args, function (_, arg) {
              if (isFunction(arg)) {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && toType(arg) !== "string") {
                // Inspect recursively
                add(arg);
              }
            });
          })(arguments);

          if (memory && !firing) {
            fire();
          }
        }

        return this;
      },
      // Remove a callback from the list
      remove: function remove() {
        jQuery.each(arguments, function (_, arg) {
          var index;

          while ((index = jQuery.inArray(arg, list, index)) > -1) {
            list.splice(index, 1); // Handle firing indexes

            if (index <= firingIndex) {
              firingIndex--;
            }
          }
        });
        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function has(fn) {
        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
      },
      // Remove all callbacks from the list
      empty: function empty() {
        if (list) {
          list = [];
        }

        return this;
      },
      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function disable() {
        _locked = queue = [];
        list = memory = "";
        return this;
      },
      disabled: function disabled() {
        return !list;
      },
      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function lock() {
        _locked = queue = [];

        if (!memory && !firing) {
          list = memory = "";
        }

        return this;
      },
      locked: function locked() {
        return !!_locked;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function fireWith(context, args) {
        if (!_locked) {
          args = args || [];
          args = [context, args.slice ? args.slice() : args];
          queue.push(args);

          if (!firing) {
            fire();
          }
        }

        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function fire() {
        self.fireWith(this, arguments);
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function fired() {
        return !!_fired;
      }
    };

    return self;
  };

  function Identity(v) {
    return v;
  }

  function Thrower(ex) {
    throw ex;
  }

  function adoptValue(value, resolve, reject, noValue) {
    var method;

    try {
      // Check for promise aspect first to privilege synchronous behavior
      if (value && isFunction(method = value.promise)) {
        method.call(value).done(resolve).fail(reject); // Other thenables
      } else if (value && isFunction(method = value.then)) {
        method.call(value, resolve, reject); // Other non-thenables
      } else {
        // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
        // * false: [ value ].slice( 0 ) => resolve( value )
        // * true: [ value ].slice( 1 ) => resolve()
        resolve.apply(undefined, [value].slice(noValue));
      } // For Promises/A+, convert exceptions into rejections
      // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
      // Deferred#then to conditionally suppress rejection.

    } catch (value) {
      // Support: Android 4.0 only
      // Strict mode functions invoked without .call/.apply get global-object context
      reject.apply(undefined, [value]);
    }
  }

  jQuery.extend({
    Deferred: function Deferred(func) {
      var tuples = [// action, add listener, callbacks,
      // ... .then handlers, argument index, [final state]
      ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
          _state = "pending",
          _promise = {
        state: function state() {
          return _state;
        },
        always: function always() {
          deferred.done(arguments).fail(arguments);
          return this;
        },
        "catch": function _catch(fn) {
          return _promise.then(null, fn);
        },
        // Keep pipe for back-compat
        pipe: function pipe()
        /* fnDone, fnFail, fnProgress */
        {
          var fns = arguments;
          return jQuery.Deferred(function (newDefer) {
            jQuery.each(tuples, function (_i, tuple) {
              // Map tuples (progress, done, fail) to arguments (done, fail, progress)
              var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]; // deferred.progress(function() { bind to newDefer or newDefer.notify })
              // deferred.done(function() { bind to newDefer or newDefer.resolve })
              // deferred.fail(function() { bind to newDefer or newDefer.reject })

              deferred[tuple[1]](function () {
                var returned = fn && fn.apply(this, arguments);

                if (returned && isFunction(returned.promise)) {
                  returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                } else {
                  newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                }
              });
            });
            fns = null;
          }).promise();
        },
        then: function then(onFulfilled, onRejected, onProgress) {
          var maxDepth = 0;

          function resolve(depth, deferred, handler, special) {
            return function () {
              var that = this,
                  args = arguments,
                  mightThrow = function mightThrow() {
                var returned, then; // Support: Promises/A+ section 2.3.3.3.3
                // https://promisesaplus.com/#point-59
                // Ignore double-resolution attempts

                if (depth < maxDepth) {
                  return;
                }

                returned = handler.apply(that, args); // Support: Promises/A+ section 2.3.1
                // https://promisesaplus.com/#point-48

                if (returned === deferred.promise()) {
                  throw new TypeError("Thenable self-resolution");
                } // Support: Promises/A+ sections 2.3.3.1, 3.5
                // https://promisesaplus.com/#point-54
                // https://promisesaplus.com/#point-75
                // Retrieve `then` only once


                then = returned && ( // Support: Promises/A+ section 2.3.4
                // https://promisesaplus.com/#point-64
                // Only check objects and functions for thenability
                _typeof(returned) === "object" || typeof returned === "function") && returned.then; // Handle a returned thenable

                if (isFunction(then)) {
                  // Special processors (notify) just wait for resolution
                  if (special) {
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); // Normal processors (resolve) also hook into progress
                  } else {
                    // ...and disregard older resolution values
                    maxDepth++;
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                  } // Handle all other returned values

                } else {
                  // Only substitute handlers pass on context
                  // and multiple values (non-spec behavior)
                  if (handler !== Identity) {
                    that = undefined;
                    args = [returned];
                  } // Process the value(s)
                  // Default process is resolve


                  (special || deferred.resolveWith)(that, args);
                }
              },
                  // Only normal processors (resolve) catch and reject exceptions
              process = special ? mightThrow : function () {
                try {
                  mightThrow();
                } catch (e) {
                  if (jQuery.Deferred.exceptionHook) {
                    jQuery.Deferred.exceptionHook(e, process.stackTrace);
                  } // Support: Promises/A+ section 2.3.3.3.4.1
                  // https://promisesaplus.com/#point-61
                  // Ignore post-resolution exceptions


                  if (depth + 1 >= maxDepth) {
                    // Only substitute handlers pass on context
                    // and multiple values (non-spec behavior)
                    if (handler !== Thrower) {
                      that = undefined;
                      args = [e];
                    }

                    deferred.rejectWith(that, args);
                  }
                }
              }; // Support: Promises/A+ section 2.3.3.3.1
              // https://promisesaplus.com/#point-57
              // Re-resolve promises immediately to dodge false rejection from
              // subsequent errors


              if (depth) {
                process();
              } else {
                // Call an optional hook to record the stack, in case of exception
                // since it's otherwise lost when execution goes async
                if (jQuery.Deferred.getStackHook) {
                  process.stackTrace = jQuery.Deferred.getStackHook();
                }

                window.setTimeout(process);
              }
            };
          }

          return jQuery.Deferred(function (newDefer) {
            // progress_handlers.add( ... )
            tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)); // fulfilled_handlers.add( ... )

            tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)); // rejected_handlers.add( ... )

            tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function promise(obj) {
          return obj != null ? jQuery.extend(obj, _promise) : _promise;
        }
      },
          deferred = {}; // Add list-specific methods

      jQuery.each(tuples, function (i, tuple) {
        var list = tuple[2],
            stateString = tuple[5]; // promise.progress = list.add
        // promise.done = list.add
        // promise.fail = list.add

        _promise[tuple[1]] = list.add; // Handle state

        if (stateString) {
          list.add(function () {
            // state = "resolved" (i.e., fulfilled)
            // state = "rejected"
            _state = stateString;
          }, // rejected_callbacks.disable
          // fulfilled_callbacks.disable
          tuples[3 - i][2].disable, // rejected_handlers.disable
          // fulfilled_handlers.disable
          tuples[3 - i][3].disable, // progress_callbacks.lock
          tuples[0][2].lock, // progress_handlers.lock
          tuples[0][3].lock);
        } // progress_handlers.fire
        // fulfilled_handlers.fire
        // rejected_handlers.fire


        list.add(tuple[3].fire); // deferred.notify = function() { deferred.notifyWith(...) }
        // deferred.resolve = function() { deferred.resolveWith(...) }
        // deferred.reject = function() { deferred.rejectWith(...) }

        deferred[tuple[0]] = function () {
          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
          return this;
        }; // deferred.notifyWith = list.fireWith
        // deferred.resolveWith = list.fireWith
        // deferred.rejectWith = list.fireWith


        deferred[tuple[0] + "With"] = list.fireWith;
      }); // Make the deferred a promise

      _promise.promise(deferred); // Call given func if any


      if (func) {
        func.call(deferred, deferred);
      } // All done!


      return deferred;
    },
    // Deferred helper
    when: function when(singleValue) {
      var // count of uncompleted subordinates
      remaining = arguments.length,
          // count of unprocessed arguments
      i = remaining,
          // subordinate fulfillment data
      resolveContexts = Array(i),
          resolveValues = _slice.call(arguments),
          // the primary Deferred
      primary = jQuery.Deferred(),
          // subordinate callback factory
      updateFunc = function updateFunc(i) {
        return function (value) {
          resolveContexts[i] = this;
          resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;

          if (! --remaining) {
            primary.resolveWith(resolveContexts, resolveValues);
          }
        };
      }; // Single- and empty arguments are adopted like Promise.resolve


      if (remaining <= 1) {
        adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining); // Use .then() to unwrap secondary thenables (cf. gh-3000)

        if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
          return primary.then();
        }
      } // Multiple arguments are aggregated like Promise.all array elements


      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), primary.reject);
      }

      return primary.promise();
    }
  }); // These usually indicate a programmer mistake during development,
  // warn about them ASAP rather than swallowing them by default.

  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

  jQuery.Deferred.exceptionHook = function (error, stack) {
    // Support: IE 8 - 9 only
    // Console exists when dev tools are open, which can happen at any time
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    }
  };

  jQuery.readyException = function (error) {
    window.setTimeout(function () {
      throw error;
    });
  }; // The deferred used on DOM ready


  var readyList = jQuery.Deferred();

  jQuery.fn.ready = function (fn) {
    readyList.then(fn) // Wrap jQuery.readyException in a function so that the lookup
    // happens at the time of error handling instead of callback
    // registration.
    .catch(function (error) {
      jQuery.readyException(error);
    });
    return this;
  };

  jQuery.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,
    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,
    // Handle when the DOM is ready
    ready: function ready(wait) {
      // Abort if there are pending holds or we're already ready
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      } // Remember that the DOM is ready


      jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be

      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      } // If there are functions bound, to execute


      readyList.resolveWith(document, [jQuery]);
    }
  });
  jQuery.ready.then = readyList.then; // The ready event handler and self cleanup method

  function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    jQuery.ready();
  } // Catch cases where $(document).ready() is called
  // after the browser event has already occurred.
  // Support: IE <=9 - 10 only
  // Older IE sometimes signals "interactive" too soon


  if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
    // Handle it asynchronously to allow scripts the opportunity to delay ready
    window.setTimeout(jQuery.ready);
  } else {
    // Use the handy event callback
    document.addEventListener("DOMContentLoaded", completed); // A fallback to window.onload, that will always work

    window.addEventListener("load", completed);
  } // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function


  var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null; // Sets many values

    if (toType(key) === "object") {
      chainable = true;

      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      } // Sets one value

    } else if (value !== undefined) {
      chainable = true;

      if (!isFunction(value)) {
        raw = true;
      }

      if (bulk) {
        // Bulk operations run against the entire set
        if (raw) {
          fn.call(elems, value);
          fn = null; // ...except when executing function values
        } else {
          bulk = fn;

          fn = function fn(elem, _key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }

      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }

    if (chainable) {
      return elems;
    } // Gets


    if (bulk) {
      return fn.call(elems);
    }

    return len ? fn(elems[0], key) : emptyGet;
  }; // Matches dashed string for camelizing


  var rmsPrefix = /^-ms-/,
      rdashAlpha = /-([a-z])/g; // Used by camelCase as callback to replace()

  function fcamelCase(_all, letter) {
    return letter.toUpperCase();
  } // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 15
  // Microsoft forgot to hump their vendor prefix (#9572)


  function camelCase(string) {
    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
  }

  var acceptData = function acceptData(owner) {
    // Accepts only:
    //  - Node
    //    - Node.ELEMENT_NODE
    //    - Node.DOCUMENT_NODE
    //  - Object
    //    - Any
    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
  };

  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }

  Data.uid = 1;
  Data.prototype = {
    cache: function cache(owner) {
      // Check if the owner object already has a cache
      var value = owner[this.expando]; // If not, create one

      if (!value) {
        value = {}; // We can accept data for non-element nodes in modern browsers,
        // but we should not, see #8335.
        // Always return an empty object.

        if (acceptData(owner)) {
          // If it is a node unlikely to be stringify-ed or looped over
          // use plain assignment
          if (owner.nodeType) {
            owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
            // configurable must be true to allow the property to be
            // deleted when data is removed
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            });
          }
        }
      }

      return value;
    },
    set: function set(owner, data, value) {
      var prop,
          cache = this.cache(owner); // Handle: [ owner, key, value ] args
      // Always use camelCase key (gh-2257)

      if (typeof data === "string") {
        cache[camelCase(data)] = value; // Handle: [ owner, { properties } ] args
      } else {
        // Copy the properties one-by-one to the cache object
        for (prop in data) {
          cache[camelCase(prop)] = data[prop];
        }
      }

      return cache;
    },
    get: function get(owner, key) {
      return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
      owner[this.expando] && owner[this.expando][camelCase(key)];
    },
    access: function access(owner, key, value) {
      // In cases where either:
      //
      //   1. No key was specified
      //   2. A string key was specified, but no value provided
      //
      // Take the "read" path and allow the get method to determine
      // which value to return, respectively either:
      //
      //   1. The entire cache object
      //   2. The data stored at the key
      //
      if (key === undefined || key && typeof key === "string" && value === undefined) {
        return this.get(owner, key);
      } // When the key is not a string, or both a key and value
      // are specified, set or extend (existing objects) with either:
      //
      //   1. An object of properties
      //   2. A key and value
      //


      this.set(owner, key, value); // Since the "set" path can have two possible entry points
      // return the expected data based on which path was taken[*]

      return value !== undefined ? value : key;
    },
    remove: function remove(owner, key) {
      var i,
          cache = owner[this.expando];

      if (cache === undefined) {
        return;
      }

      if (key !== undefined) {
        // Support array or space separated string of keys
        if (Array.isArray(key)) {
          // If key is an array of keys...
          // We always set camelCase keys, so remove that.
          key = key.map(camelCase);
        } else {
          key = camelCase(key); // If a key with the spaces exists, use it.
          // Otherwise, create an array by matching non-whitespace

          key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
        }

        i = key.length;

        while (i--) {
          delete cache[key[i]];
        }
      } // Remove the expando if there's no more data


      if (key === undefined || jQuery.isEmptyObject(cache)) {
        // Support: Chrome <=35 - 45
        // Webkit & Blink performance suffers when deleting properties
        // from DOM nodes, so set to undefined instead
        // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function hasData(owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data();
  var dataUser = new Data(); //	Implementation Summary
  //
  //	1. Enforce API surface and semantic compatibility with 1.9.x branch
  //	2. Improve the module's maintainability by reducing the storage
  //		paths to a single mechanism.
  //	3. Use the same single mechanism to support "private" and "user" data.
  //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
  //	5. Avoid exposing implementation details on user objects (eg. expando properties)
  //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;

  function getData(data) {
    if (data === "true") {
      return true;
    }

    if (data === "false") {
      return false;
    }

    if (data === "null") {
      return null;
    } // Only convert to a number if it doesn't change the string


    if (data === +data + "") {
      return +data;
    }

    if (rbrace.test(data)) {
      return JSON.parse(data);
    }

    return data;
  }

  function dataAttr(elem, key, data) {
    var name; // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute

    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);

      if (typeof data === "string") {
        try {
          data = getData(data);
        } catch (e) {} // Make sure we set the data so it isn't changed later


        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }

    return data;
  }

  jQuery.extend({
    hasData: function hasData(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function data(elem, name, _data) {
      return dataUser.access(elem, name, _data);
    },
    removeData: function removeData(elem, name) {
      dataUser.remove(elem, name);
    },
    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function _data(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function _removeData(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function data(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes; // Gets all values

      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);

          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i = attrs.length;

            while (i--) {
              // Support: IE 11 only
              // The attrs elements can be null (#14894)
              if (attrs[i]) {
                name = attrs[i].name;

                if (name.indexOf("data-") === 0) {
                  name = camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }

            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }

        return data;
      } // Sets multiple values


      if (_typeof(key) === "object") {
        return this.each(function () {
          dataUser.set(this, key);
        });
      }

      return access(this, function (value) {
        var data; // The calling jQuery object (element matches) is not empty
        // (and therefore has an element appears at this[ 0 ]) and the
        // `value` parameter was not undefined. An empty jQuery object
        // will result in `undefined` for elem = this[ 0 ] which will
        // throw an exception if an attempt to read a data cache is made.

        if (elem && value === undefined) {
          // Attempt to get data from the cache
          // The key will always be camelCased in Data
          data = dataUser.get(elem, key);

          if (data !== undefined) {
            return data;
          } // Attempt to "discover" the data in
          // HTML5 custom data-* attrs


          data = dataAttr(elem, key);

          if (data !== undefined) {
            return data;
          } // We tried really hard, but the data doesn't exist.


          return;
        } // Set the data...


        this.each(function () {
          // We always store the camelCased key
          dataUser.set(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function removeData(key) {
      return this.each(function () {
        dataUser.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function queue(elem, type, data) {
      var queue;

      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup

        if (data) {
          if (!queue || Array.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }

        return queue || [];
      }
    },
    dequeue: function dequeue(elem, type) {
      type = type || "fx";

      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function next() {
        jQuery.dequeue(elem, type);
      }; // If the fx queue is dequeued, always remove the progress sentinel


      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }

      if (fn) {
        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === "fx") {
          queue.unshift("inprogress");
        } // Clear up the last queue stop function


        delete hooks.stop;
        fn.call(elem, next, hooks);
      }

      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function _queueHooks(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
        empty: jQuery.Callbacks("once memory").add(function () {
          dataPriv.remove(elem, [type + "queue", key]);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue: function queue(type, data) {
      var setter = 2;

      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }

      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }

      return data === undefined ? this : this.each(function () {
        var queue = jQuery.queue(this, type, data); // Ensure a hooks for this queue

        jQuery._queueHooks(this, type);

        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function dequeue(type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function clearQueue(type) {
      return this.queue(type || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function promise(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function resolve() {
        if (! --count) {
          defer.resolveWith(elements, [elements]);
        }
      };

      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }

      type = type || "fx";

      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");

        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }

      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var documentElement = document.documentElement;

  var isAttached = function isAttached(elem) {
    return jQuery.contains(elem.ownerDocument, elem);
  },
      composed = {
    composed: true
  }; // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
  // Check attachment across shadow DOM boundaries when possible (gh-3504)
  // Support: iOS 10.0-10.2 only
  // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
  // leading to errors. We need to check for `getRootNode`.


  if (documentElement.getRootNode) {
    isAttached = function isAttached(elem) {
      return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    };
  }

  var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {
    // isHiddenWithinTree might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem; // Inline style trumps all

    return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
    // Support: Firefox <=43 - 45
    // Disconnected elements can have computed display: none, so first confirm that elem is
    // in the document.
    isAttached(elem) && jQuery.css(elem, "display") === "none";
  };

  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
        scale,
        maxIterations = 20,
        currentValue = tween ? function () {
      return tween.cur();
    } : function () {
      return jQuery.css(elem, prop, "");
    },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
        // Starting value computation is required for potential unit mismatches
    initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

    if (initialInUnit && initialInUnit[3] !== unit) {
      // Support: Firefox <=54
      // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
      initial = initial / 2; // Trust units reported by jQuery.css

      unit = unit || initialInUnit[3]; // Iteratively approximate from a nonzero starting point

      initialInUnit = +initial || 1;

      while (maxIterations--) {
        // Evaluate and update our best guess (doubling guesses that zero out).
        // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
        jQuery.style(elem, prop, initialInUnit + unit);

        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
          maxIterations = 0;
        }

        initialInUnit = initialInUnit / scale;
      }

      initialInUnit = initialInUnit * 2;
      jQuery.style(elem, prop, initialInUnit + unit); // Make sure we update the tween properties later on

      valueParts = valueParts || [];
    }

    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified

      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];

      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }

    return adjusted;
  }

  var defaultDisplayMap = {};

  function getDefaultDisplay(elem) {
    var temp,
        doc = elem.ownerDocument,
        nodeName = elem.nodeName,
        display = defaultDisplayMap[nodeName];

    if (display) {
      return display;
    }

    temp = doc.body.appendChild(doc.createElement(nodeName));
    display = jQuery.css(temp, "display");
    temp.parentNode.removeChild(temp);

    if (display === "none") {
      display = "block";
    }

    defaultDisplayMap[nodeName] = display;
    return display;
  }

  function showHide(elements, show) {
    var display,
        elem,
        values = [],
        index = 0,
        length = elements.length; // Determine new display value for elements that need to change

    for (; index < length; index++) {
      elem = elements[index];

      if (!elem.style) {
        continue;
      }

      display = elem.style.display;

      if (show) {
        // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
        // check is required in this first loop unless we have a nonempty display value (either
        // inline or about-to-be-restored)
        if (display === "none") {
          values[index] = dataPriv.get(elem, "display") || null;

          if (!values[index]) {
            elem.style.display = "";
          }
        }

        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem);
        }
      } else {
        if (display !== "none") {
          values[index] = "none"; // Remember what we're overwriting

          dataPriv.set(elem, "display", display);
        }
      }
    } // Set the display of the elements in a second loop to avoid constant reflow


    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }

    return elements;
  }

  jQuery.fn.extend({
    show: function show() {
      return showHide(this, true);
    },
    hide: function hide() {
      return showHide(this);
    },
    toggle: function toggle(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }

      return this.each(function () {
        if (isHiddenWithinTree(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  var rcheckableType = /^(?:checkbox|radio)$/i;
  var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
  var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;

  (function () {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input"); // Support: Android 4.0 - 4.3 only
    // Check state lost if the name is set (#11217)
    // Support: Windows Web Apps (WWA)
    // `name` and `type` must use .setAttribute for WWA (#14901)

    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input); // Support: Android <=4.1 only
    // Older WebKit doesn't clone checked state correctly in fragments

    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE <=11 only
    // Make sure textarea (and checkbox) defaultValue is properly cloned

    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue; // Support: IE <=9 only
    // IE <=9 replaces <option> tags with their contents when inserted outside of
    // the select element.

    div.innerHTML = "<option></option>";
    support.option = !!div.lastChild;
  })(); // We have to close these tags to support XHTML (#13200)


  var wrapMap = {
    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do. So we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td; // Support: IE <=9 only

  if (!support.option) {
    wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
  }

  function getAll(context, tag) {
    // Support: IE <=9 - 11 only
    // Use typeof to avoid zero-argument method invocation on host objects (#15151)
    var ret;

    if (typeof context.getElementsByTagName !== "undefined") {
      ret = context.getElementsByTagName(tag || "*");
    } else if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag || "*");
    } else {
      ret = [];
    }

    if (tag === undefined || tag && nodeName(context, tag)) {
      return jQuery.merge([context], ret);
    }

    return ret;
  } // Mark scripts as having already been evaluated


  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;

    for (; i < l; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }

  var rhtml = /<|&#?\w+;/;

  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem,
        tmp,
        tag,
        wrap,
        attached,
        j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;

    for (; i < l; i++) {
      elem = elems[i];

      if (elem || elem === 0) {
        // Add nodes directly
        if (toType(elem) === "object") {
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation

          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content

          j = wrap[0];

          while (j--) {
            tmp = tmp.lastChild;
          } // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit


          jQuery.merge(nodes, tmp.childNodes); // Remember the top-level container

          tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)

          tmp.textContent = "";
        }
      }
    } // Remove wrapper from fragment


    fragment.textContent = "";
    i = 0;

    while (elem = nodes[i++]) {
      // Skip elements already in the context collection (trac-4087)
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }

        continue;
      }

      attached = isAttached(elem); // Append to fragment

      tmp = getAll(fragment.appendChild(elem), "script"); // Preserve script evaluation history

      if (attached) {
        setGlobalEval(tmp);
      } // Capture executables


      if (scripts) {
        j = 0;

        while (elem = tmp[j++]) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }

    return fragment;
  }

  var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

  function returnTrue() {
    return true;
  }

  function returnFalse() {
    return false;
  } // Support: IE <=9 - 11+
  // focus() and blur() are asynchronous, except when they are no-op.
  // So expect focus to be synchronous when the element is already active,
  // and blur to be synchronous when the element is not already active.
  // (focus and blur are always synchronous in other supported browsers,
  // this just defines when we can count on it).


  function expectSync(elem, type) {
    return elem === safeActiveElement() === (type === "focus");
  } // Support: IE <=9 only
  // Accessing document.activeElement can throw unexpectedly
  // https://bugs.jquery.com/ticket/13393


  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }

  function _on(elem, types, selector, data, fn, one) {
    var origFn, type; // Types can be a map of types/handlers

    if (_typeof(types) === "object") {
      // ( types-Object, selector, data )
      if (typeof selector !== "string") {
        // ( types-Object, data )
        data = data || selector;
        selector = undefined;
      }

      for (type in types) {
        _on(elem, type, selector, data, types[type], one);
      }

      return elem;
    }

    if (data == null && fn == null) {
      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {
        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }

    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }

    if (one === 1) {
      origFn = fn;

      fn = function fn(event) {
        // Can use an empty set, since event contains the info
        jQuery().off(event);
        return origFn.apply(this, arguments);
      }; // Use same guid so caller can remove using origFn


      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }

    return elem.each(function () {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */


  jQuery.event = {
    global: {},
    add: function add(elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.get(elem); // Only attach events to objects that accept data

      if (!acceptData(elem)) {
        return;
      } // Caller can pass in an object of custom data in lieu of the handler


      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      } // Ensure that invalid selectors throw exceptions at attach time
      // Evaluate against documentElement in case elem is a non-element node (e.g., document)


      if (selector) {
        jQuery.find.matchesSelector(documentElement, selector);
      } // Make sure that the handler has a unique ID, used to find/remove it later


      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      } // Init the element's event structure and main handler, if this is the first


      if (!(events = elemData.events)) {
        events = elemData.events = Object.create(null);
      }

      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      } // Handle multiple events separated by a space


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers

        if (!type) {
          continue;
        } // If event changes its type, use the special event handlers for the changed type


        special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type

        type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type

        special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers

        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn); // Init the event handler queue if we're the first

        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false

          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }

        if (special.add) {
          special.add.call(elem, handleObj);

          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        } // Add to the element's handler list, delegates in front


        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        } // Keep track of which events have ever been used, for event optimization


        jQuery.event.global[type] = true;
      }
    },
    // Detach an event or set of events from an element
    remove: function remove(elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

      if (!elemData || !(events = elemData.events)) {
        return;
      } // Once for each type.namespace in types; type may be omitted


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element

        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }

          continue;
        }

        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events

        origCount = j = handlers.length;

        while (j--) {
          handleObj = handlers[j];

          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);

            if (handleObj.selector) {
              handlers.delegateCount--;
            }

            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        } // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers)


        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }

          delete events[type];
        }
      } // Remove data and the expando if it's no longer used


      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function dispatch(nativeEvent) {
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue,
          args = new Array(arguments.length),
          // Make a writable jQuery.Event from the native event object
      event = jQuery.event.fix(nativeEvent),
          handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [],
          special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event

      args[0] = event;

      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
      }

      event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired

      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      } // Determine handlers


      handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us

      i = 0;

      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;

        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          // If the event is namespaced, then each handler is only invoked if it is
          // specially universal or its namespaces are a superset of the event's.
          if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      } // Call the postDispatch hook for the mapped type


      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }

      return event.result;
    },
    handlers: function handlers(event, _handlers) {
      var i,
          handleObj,
          sel,
          matchedHandlers,
          matchedSelectors,
          handlerQueue = [],
          delegateCount = _handlers.delegateCount,
          cur = event.target; // Find delegate handlers

      if (delegateCount && // Support: IE <=9
      // Black-hole SVG <use> instance trees (trac-13180)
      cur.nodeType && // Support: Firefox <=42
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11 only
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !(event.type === "click" && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          // Don't check non-elements (#13208)
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};

            for (i = 0; i < delegateCount; i++) {
              handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)

              sel = handleObj.selector + " ";

              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }

              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }

            if (matchedHandlers.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matchedHandlers
              });
            }
          }
        }
      } // Add the remaining (directly-bound) handlers


      cur = this;

      if (delegateCount < _handlers.length) {
        handlerQueue.push({
          elem: cur,
          handlers: _handlers.slice(delegateCount)
        });
      }

      return handlerQueue;
    },
    addProp: function addProp(name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: isFunction(hook) ? function () {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function () {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set: function set(value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          });
        }
      });
    },
    fix: function fix(originalEvent) {
      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
    },
    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      click: {
        // Utilize native event to ensure correct state for checkable inputs
        setup: function setup(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Claim the first handler

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            // dataPriv.set( el, "click", ... )
            leverageNative(el, "click", returnTrue);
          } // Return false to allow normal processing in the caller


          return false;
        },
        trigger: function trigger(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Force setup before triggering a click

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            leverageNative(el, "click");
          } // Return non-false to allow normal event-path propagation


          return true;
        },
        // For cross-browser consistency, suppress native .click() on links
        // Also prevent it if we're currently inside a leveraged native-event stack
        _default: function _default(event) {
          var target = event.target;
          return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(event) {
          // Support: Firefox 20+
          // Firefox doesn't alert if the returnValue field is not set.
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    }
  }; // Ensure the presence of an event listener that handles manually-triggered
  // synthetic events by interrupting progress until reinvoked in response to
  // *native* events that it fires directly, ensuring that state changes have
  // already occurred before other listeners are invoked.

  function leverageNative(el, type, expectSync) {
    // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
    if (!expectSync) {
      if (dataPriv.get(el, type) === undefined) {
        jQuery.event.add(el, type, returnTrue);
      }

      return;
    } // Register the controller as a special universal handler for all event namespaces


    dataPriv.set(el, type, false);
    jQuery.event.add(el, type, {
      namespace: false,
      handler: function handler(event) {
        var notAsync,
            result,
            saved = dataPriv.get(this, type);

        if (event.isTrigger & 1 && this[type]) {
          // Interrupt processing of the outer synthetic .trigger()ed event
          // Saved data should be false in such cases, but might be a leftover capture object
          // from an async native handler (gh-4350)
          if (!saved.length) {
            // Store arguments for use when handling the inner native event
            // There will always be at least one argument (an event object), so this array
            // will not be confused with a leftover capture object.
            saved = _slice.call(arguments);
            dataPriv.set(this, type, saved); // Trigger the native event and capture its result
            // Support: IE <=9 - 11+
            // focus() and blur() are asynchronous

            notAsync = expectSync(this, type);
            this[type]();
            result = dataPriv.get(this, type);

            if (saved !== result || notAsync) {
              dataPriv.set(this, type, false);
            } else {
              result = {};
            }

            if (saved !== result) {
              // Cancel the outer synthetic event
              event.stopImmediatePropagation();
              event.preventDefault(); // Support: Chrome 86+
              // In Chrome, if an element having a focusout handler is blurred by
              // clicking outside of it, it invokes the handler synchronously. If
              // that handler calls `.remove()` on the element, the data is cleared,
              // leaving `result` undefined. We need to guard against this.

              return result && result.value;
            } // If this is an inner synthetic event for an event with a bubbling surrogate
            // (focus or blur), assume that the surrogate already propagated from triggering the
            // native event and prevent that from happening again here.
            // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
            // bubbling surrogate propagates *after* the non-bubbling base), but that seems
            // less bad than duplication.

          } else if ((jQuery.event.special[type] || {}).delegateType) {
            event.stopPropagation();
          } // If this is a native event triggered above, everything is now in order
          // Fire an inner synthetic event with the original arguments

        } else if (saved.length) {
          // ...and capture the result
          dataPriv.set(this, type, {
            value: jQuery.event.trigger( // Support: IE <=9 - 11+
            // Extend with the prototype to reset the above stopImmediatePropagation()
            jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
          }); // Abort handling of the native event

          event.stopImmediatePropagation();
        }
      }
    });
  }

  jQuery.removeEvent = function (elem, type, handle) {
    // This "if" is needed for plain objects
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };

  jQuery.Event = function (src, props) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    } // Event object


    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type; // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.

      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
      src.returnValue === false ? returnTrue : returnFalse; // Create target properties
      // Support: Safari <=6 - 7 only
      // Target should not be a text node (#504, #13143)

      this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget; // Event type
    } else {
      this.type = src;
    } // Put explicitly provided properties onto the event object


    if (props) {
      jQuery.extend(this, props);
    } // Create a timestamp if incoming event doesn't have one


    this.timeStamp = src && src.timeStamp || Date.now(); // Mark it as fixed

    this[jQuery.expando] = true;
  }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html


  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;

      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }

      this.stopPropagation();
    }
  }; // Includes all common event props including KeyEvent and MouseEvent specific props

  jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    code: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: true
  }, jQuery.event.addProp);
  jQuery.each({
    focus: "focusin",
    blur: "focusout"
  }, function (type, delegateType) {
    jQuery.event.special[type] = {
      // Utilize native event if possible so blur/focus sequence is correct
      setup: function setup() {
        // Claim the first handler
        // dataPriv.set( this, "focus", ... )
        // dataPriv.set( this, "blur", ... )
        leverageNative(this, type, expectSync); // Return false to allow normal processing in the caller

        return false;
      },
      trigger: function trigger() {
        // Force setup before trigger
        leverageNative(this, type); // Return non-false to allow normal event-path propagation

        return true;
      },
      // Suppress native focus or blur as it's already being fired
      // in leverageNative.
      _default: function _default() {
        return true;
      },
      delegateType: delegateType
    };
  }); // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well).

  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function handle(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window

        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }

        return ret;
      }
    };
  });
  jQuery.fn.extend({
    on: function on(types, selector, data, fn) {
      return _on(this, types, selector, data, fn);
    },
    one: function one(types, selector, data, fn) {
      return _on(this, types, selector, data, fn, 1);
    },
    off: function off(types, selector, fn) {
      var handleObj, type;

      if (types && types.preventDefault && types.handleObj) {
        // ( event )  dispatched jQuery.Event
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }

      if (_typeof(types) === "object") {
        // ( types-object [, selector] )
        for (type in types) {
          this.off(type, selector, types[type]);
        }

        return this;
      }

      if (selector === false || typeof selector === "function") {
        // ( types [, fn] )
        fn = selector;
        selector = undefined;
      }

      if (fn === false) {
        fn = returnFalse;
      }

      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    }
  });
  var // Support: IE <=10 - 11, Edge 12 - 13 only
  // In IE/Edge using regex groups here causes severe slowdowns.
  // See https://connect.microsoft.com/IE/feedback/details/1736512/
  rnoInnerhtml = /<script|<style|<link/i,
      // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Prefer a tbody over its parent table for containing new rows

  function manipulationTarget(elem, content) {
    if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return jQuery(elem).children("tbody")[0] || elem;
    }

    return elem;
  } // Replace/restore the type attribute of script elements for safe DOM manipulation


  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }

  function restoreScript(elem) {
    if ((elem.type || "").slice(0, 5) === "true/") {
      elem.type = elem.type.slice(5);
    } else {
      elem.removeAttribute("type");
    }

    return elem;
  }

  function cloneCopyEvent(src, dest) {
    var i, l, type, pdataOld, udataOld, udataCur, events;

    if (dest.nodeType !== 1) {
      return;
    } // 1. Copy private data: events, handlers, etc.


    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.get(src);
      events = pdataOld.events;

      if (events) {
        dataPriv.remove(dest, "handle events");

        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    } // 2. Copy user data


    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  } // Fix IE bugs, see support tests


  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.

    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }

  function domManip(collection, args, callback, ignored) {
    // Flatten any nested arrays
    args = flat(args);
    var fragment,
        first,
        scripts,
        hasScripts,
        node,
        doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        valueIsFunction = isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit

    if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
      return collection.each(function (index) {
        var self = collection.eq(index);

        if (valueIsFunction) {
          args[0] = value.call(this, index, self.html());
        }

        domManip(self, args, callback, ignored);
      });
    }

    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;

      if (fragment.childNodes.length === 1) {
        fragment = first;
      } // Require either new content or an interest in ignored elements to invoke the callback


      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length; // Use the original fragment for the last item
        // instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070).

        for (; i < l; i++) {
          node = fragment;

          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration

            if (hasScripts) {
              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }

          callback.call(collection[i], node, i);
        }

        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts

          jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion

          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];

            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src && (node.type || "").toLowerCase() !== "module") {
                // Optional AJAX dependency, but won't run scripts if not present
                if (jQuery._evalUrl && !node.noModule) {
                  jQuery._evalUrl(node.src, {
                    nonce: node.nonce || node.getAttribute("nonce")
                  }, doc);
                }
              } else {
                DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
              }
            }
          }
        }
      }
    }

    return collection;
  }

  function _remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;

    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }

      if (node.parentNode) {
        if (keepData && isAttached(node)) {
          setGlobalEval(getAll(node, "script"));
        }

        node.parentNode.removeChild(node);
      }
    }

    return elem;
  }

  jQuery.extend({
    htmlPrefilter: function htmlPrefilter(html) {
      return html;
    },
    clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = isAttached(elem); // Fix IE cloning issues

      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone);
        srcElements = getAll(elem);

        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      } // Copy the events from the original to the clone


      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);

          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      } // Preserve script evaluation history


      destElements = getAll(clone, "script");

      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      } // Return the cloned set


      return clone;
    },
    cleanData: function cleanData(elems) {
      var data,
          elem,
          type,
          special = jQuery.event.special,
          i = 0;

      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if (data = elem[dataPriv.expando]) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            } // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove


            elem[dataPriv.expando] = undefined;
          }

          if (elem[dataUser.expando]) {
            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    detach: function detach(selector) {
      return _remove(this, selector, true);
    },
    remove: function remove(selector) {
      return _remove(this, selector);
    },
    text: function text(value) {
      return access(this, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function () {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function append() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function prepend() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function before() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function after() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function empty() {
      var elem,
          i = 0;

      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          // Prevent memory leaks
          jQuery.cleanData(getAll(elem, false)); // Remove any remaining nodes

          elem.textContent = "";
        }
      }

      return this;
    },
    clone: function clone(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function html(value) {
      return access(this, function (value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;

        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        } // See if we can take a shortcut and just use innerHTML


        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);

          try {
            for (; i < l; i++) {
              elem = this[i] || {}; // Remove element nodes and prevent memory leaks

              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }

            elem = 0; // If using innerHTML throws an exception, use the fallback method
          } catch (e) {}
        }

        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function replaceWith() {
      var ignored = []; // Make the changes, replacing each non-ignored context element with the new content

      return domManip(this, arguments, function (elem) {
        var parent = this.parentNode;

        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));

          if (parent) {
            parent.replaceChild(elem, this);
          }
        } // Force callback invocation

      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;

      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems); // Support: Android <=4.0 only, PhantomJS 1 only
        // .get() because push.apply(_, arraylike) throws on ancient WebKit

        push.apply(ret, elems.get());
      }

      return this.pushStack(ret);
    };
  });
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

  var getStyles = function getStyles(elem) {
    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;

    if (!view || !view.opener) {
      view = window;
    }

    return view.getComputedStyle(elem);
  };

  var swap = function swap(elem, options, callback) {
    var ret,
        name,
        old = {}; // Remember the old values, and insert the new ones

    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }

    ret = callback.call(elem); // Revert the old values

    for (name in options) {
      elem.style[name] = old[name];
    }

    return ret;
  };

  var rboxStyle = new RegExp(cssExpand.join("|"), "i");

  (function () {
    // Executing both pixelPosition & boxSizingReliable tests require only one layout
    // so they're executed at the same time to save the second computation.
    function computeStyleTests() {
      // This is a singleton, we need to execute it only once
      if (!div) {
        return;
      }

      container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
      div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
      documentElement.appendChild(container).appendChild(div);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%"; // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44

      reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12; // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
      // Some styles come back with percentage values, even though they shouldn't

      div.style.right = "60%";
      pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36; // Support: IE 9 - 11 only
      // Detect misreporting of content dimensions for box-sizing:border-box elements

      boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36; // Support: IE 9 only
      // Detect overflow:scroll screwiness (gh-3699)
      // Support: Chrome <=64
      // Don't get tricked when zoom affects offsetWidth (gh-4029)

      div.style.position = "absolute";
      scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
      documentElement.removeChild(container); // Nullify the div so it wouldn't be stored in the memory and
      // it will also be a sign that checks already performed

      div = null;
    }

    function roundPixelMeasures(measure) {
      return Math.round(parseFloat(measure));
    }

    var pixelPositionVal,
        boxSizingReliableVal,
        scrollboxSizeVal,
        pixelBoxStylesVal,
        reliableTrDimensionsVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div"); // Finish early in limited (non-browser) environments

    if (!div.style) {
      return;
    } // Support: IE <=9 - 11 only
    // Style of cloned element affects source element cloned (#8908)


    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    jQuery.extend(support, {
      boxSizingReliable: function boxSizingReliable() {
        computeStyleTests();
        return boxSizingReliableVal;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        computeStyleTests();
        return pixelBoxStylesVal;
      },
      pixelPosition: function pixelPosition() {
        computeStyleTests();
        return pixelPositionVal;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        computeStyleTests();
        return reliableMarginLeftVal;
      },
      scrollboxSize: function scrollboxSize() {
        computeStyleTests();
        return scrollboxSizeVal;
      },
      // Support: IE 9 - 11+, Edge 15 - 18+
      // IE/Edge misreport `getComputedStyle` of table rows with width/height
      // set in CSS while `offset*` properties report correct values.
      // Behavior in IE 9 is more subtle than in newer versions & it passes
      // some versions of this test; make sure not to make it pass there!
      //
      // Support: Firefox 70+
      // Only Firefox includes border widths
      // in computed dimensions. (gh-4529)
      reliableTrDimensions: function reliableTrDimensions() {
        var table, tr, trChild, trStyle;

        if (reliableTrDimensionsVal == null) {
          table = document.createElement("table");
          tr = document.createElement("tr");
          trChild = document.createElement("div");
          table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
          tr.style.cssText = "border:1px solid"; // Support: Chrome 86+
          // Height set through cssText does not get applied.
          // Computed height then comes back as 0.

          tr.style.height = "1px";
          trChild.style.height = "9px"; // Support: Android 8 Chrome 86+
          // In our bodyBackground.html iframe,
          // display for all div elements is set to "inline",
          // which causes a problem only in Android 8 Chrome 86.
          // Ensuring the div is display: block
          // gets around this issue.

          trChild.style.display = "block";
          documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
          trStyle = window.getComputedStyle(tr);
          reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
          documentElement.removeChild(table);
        }

        return reliableTrDimensionsVal;
      }
    });
  })();

  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        // Support: Firefox 51+
    // Retrieving style before computed somehow
    // fixes an issue with getting wrong values
    // on detached elements
    style = elem.style;
    computed = computed || getStyles(elem); // getPropertyValue is needed for:
    //   .css('filter') (IE 9 only, #12537)
    //   .css('--customProperty) (#3144)

    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];

      if (ret === "" && !isAttached(elem)) {
        ret = jQuery.style(elem, name);
      } // A tribute to the "awesome hack by Dean Edwards"
      // Android Browser returns percentage for some values,
      // but width seems to be reliably pixels.
      // This is against the CSSOM draft spec:
      // https://drafts.csswg.org/cssom/#resolved-values


      if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
        // Remember the original values
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth; // Put in the new values to get a computed value out

        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width; // Revert the changed values

        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }

    return ret !== undefined ? // Support: IE <=9 - 11 only
    // IE returns zIndex value as an integer.
    ret + "" : ret;
  }

  function addGetHookIf(conditionFn, hookFn) {
    // Define the hook, we'll check on the first run if it's really needed.
    return {
      get: function get() {
        if (conditionFn()) {
          // Hook not needed (or it's not possible to use it due
          // to missing dependency), remove it.
          delete this.get;
          return;
        } // Hook needed; redefine it so that the support test is not executed again.


        return (this.get = hookFn).apply(this, arguments);
      }
    };
  }

  var cssPrefixes = ["Webkit", "Moz", "ms"],
      emptyStyle = document.createElement("div").style,
      vendorProps = {}; // Return a vendor-prefixed property or undefined

  function vendorPropName(name) {
    // Check for vendor prefixed names
    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;

    while (i--) {
      name = cssPrefixes[i] + capName;

      if (name in emptyStyle) {
        return name;
      }
    }
  } // Return a potentially-mapped jQuery.cssProps or vendor prefixed property


  function finalPropName(name) {
    var final = jQuery.cssProps[name] || vendorProps[name];

    if (final) {
      return final;
    }

    if (name in emptyStyle) {
      return name;
    }

    return vendorProps[name] = vendorPropName(name) || name;
  }

  var // Swappable if display is none or starts with table
  // except "table", "table-cell", or "table-caption"
  // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rcustomProp = /^--/,
      cssShow = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function setPositiveNumber(_elem, value, subtract) {
    // Any relative (+/-) values have already been
    // normalized at this point
    var matches = rcssNum.exec(value);
    return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
  }

  function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
    var i = dimension === "width" ? 1 : 0,
        extra = 0,
        delta = 0; // Adjustment may not be necessary

    if (box === (isBorderBox ? "border" : "content")) {
      return 0;
    }

    for (; i < 4; i += 2) {
      // Both box models exclude margin
      if (box === "margin") {
        delta += jQuery.css(elem, box + cssExpand[i], true, styles);
      } // If we get here with a content-box, we're seeking "padding" or "border" or "margin"


      if (!isBorderBox) {
        // Add padding
        delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // For "border" or "margin", add border

        if (box !== "padding") {
          delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); // But still keep track of it otherwise
        } else {
          extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        } // If we get here with a border-box (content + padding + border), we're seeking "content" or
        // "padding" or "margin"

      } else {
        // For "content", subtract padding
        if (box === "content") {
          delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        } // For "content" or "padding", subtract border


        if (box !== "margin") {
          delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    } // Account for positive content-box scroll gutter when requested by providing computedVal


    if (!isBorderBox && computedVal >= 0) {
      // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
      // Assuming integer scroll gutter, subtract the rest and round down
      delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5 // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
      // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0;
    }

    return delta;
  }

  function getWidthOrHeight(elem, dimension, extra) {
    // Start with computed style
    var styles = getStyles(elem),
        // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
    // Fake content-box until we know it's needed to know the true value.
    boxSizingNeeded = !support.boxSizingReliable() || extra,
        isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
        valueIsBorderBox = isBorderBox,
        val = curCSS(elem, dimension, styles),
        offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1); // Support: Firefox <=54
    // Return a confounding non-pixel value or feign ignorance, as appropriate.

    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val;
      }

      val = "auto";
    } // Support: IE 9 - 11 only
    // Use offsetWidth/offsetHeight for when box sizing is unreliable.
    // In those cases, the computed value can be trusted to be border-box.


    if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
    // IE/Edge misreport `getComputedStyle` of table rows with width/height
    // set in CSS while `offset*` properties report correct values.
    // Interestingly, in some cases IE 9 doesn't suffer from this issue.
    !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
    // This happens for inline elements with no explicit setting (gh-3571)
    val === "auto" || // Support: Android <=4.1 - 4.3 only
    // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
    !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
    elem.getClientRects().length) {
      isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box"; // Where available, offsetWidth/offsetHeight approximate border box dimensions.
      // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
      // retrieved value as a content box dimension.

      valueIsBorderBox = offsetProp in elem;

      if (valueIsBorderBox) {
        val = elem[offsetProp];
      }
    } // Normalize "" and auto


    val = parseFloat(val) || 0; // Adjust for the element's box model

    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
    val) + "px";
  }

  jQuery.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function get(elem, computed) {
          if (computed) {
            // We should always get a number back from opacity
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },
    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "gridArea": true,
      "gridColumn": true,
      "gridColumnEnd": true,
      "gridColumnStart": true,
      "gridRow": true,
      "gridRowEnd": true,
      "gridRowStart": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {},
    // Get and set the style property on a DOM Node
    style: function style(elem, name, value, extra) {
      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      } // Make sure that we're working with the right name


      var ret,
          type,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name),
          style = elem.style; // Make sure that we're working with the right name. We don't
      // want to query the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Gets hook for the prefixed version, then unprefixed version


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value

      if (value !== undefined) {
        type = _typeof(value); // Convert "+=" or "-=" to relative numbers (#7345)

        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret); // Fixes bug #9237

          type = "number";
        } // Make sure that null and NaN values aren't set (#7116)


        if (value == null || value !== value) {
          return;
        } // If a number was passed in, add the unit (except for certain CSS properties)
        // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
        // "px" to a few hardcoded values.


        if (type === "number" && !isCustomProp) {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
        } // background-* props affect original clone's values


        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        } // If a hook was provided, use that value, otherwise just set the specified value


        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          if (isCustomProp) {
            style.setProperty(name, value);
          } else {
            style[name] = value;
          }
        }
      } else {
        // If a hook was provided get the non-computed value from there
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        } // Otherwise just get the value from the style object


        return style[name];
      }
    },
    css: function css(elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name); // Make sure that we're working with the right name. We don't
      // want to modify the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Try prefixed name followed by the unprefixed name


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there

      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      } // Otherwise, if a way to get the computed value exists, use that


      if (val === undefined) {
        val = curCSS(elem, name, styles);
      } // Convert "normal" to computed value


      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      } // Make numeric if forced or a qualifier was provided and val looks numeric


      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }

      return val;
    }
  });
  jQuery.each(["height", "width"], function (_i, dimension) {
    jQuery.cssHooks[dimension] = {
      get: function get(elem, computed, extra) {
        if (computed) {
          // Certain elements can have dimension info if we invisibly show them
          // but it must have a current display style that would benefit
          return rdisplayswap.test(jQuery.css(elem, "display")) && ( // Support: Safari 8+
          // Table columns in Safari have non-zero offsetWidth & zero
          // getBoundingClientRect().width unless display is changed.
          // Support: IE <=11 only
          // Running getBoundingClientRect on a disconnected node
          // in IE throws an error.
          !elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, dimension, extra);
          }) : getWidthOrHeight(elem, dimension, extra);
        }
      },
      set: function set(elem, value, extra) {
        var matches,
            styles = getStyles(elem),
            // Only read styles.position if the test has a chance to fail
        // to avoid forcing a reflow.
        scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute",
            // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
        boxSizingNeeded = scrollboxSizeBuggy || extra,
            isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
            subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0; // Account for unreliable border-box dimensions by comparing offset* to computed and
        // faking a content-box to get border and padding (gh-3699)

        if (isBorderBox && scrollboxSizeBuggy) {
          subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
        } // Convert to pixels if value adjustment is needed


        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
          elem.style[dimension] = value;
          value = jQuery.css(elem, dimension);
        }

        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
    if (computed) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
        marginLeft: 0
      }, function () {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  }); // These hooks are used by animate to expand properties

  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function expand(value) {
        var i = 0,
            expanded = {},
            // Assumes a single number if not a string
        parts = typeof value === "string" ? value.split(" ") : [value];

        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }

        return expanded;
      }
    };

    if (prefix !== "margin") {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css: function css(name, value) {
      return access(this, function (elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;

        if (Array.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;

          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }

          return map;
        }

        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    }
  });

  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }

  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function init(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function cur() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function run(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];

      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }

      this.now = (this.end - this.start) * eased + this.start;

      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }

      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }

      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function get(tween) {
        var result; // Use a property on the element directly when it is not a DOM element,
        // or when there is no matching style property that exists.

        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        } // Passing an empty string as a 3rd parameter to .css will automatically
        // attempt a parseFloat and fallback to a string if the parse fails.
        // Simple values such as "10px" are parsed to Float;
        // complex values such as "rotate(1rad)" are returned as-is.


        result = jQuery.css(tween.elem, tween.prop, ""); // Empty strings, null, undefined and "auto" are converted to 0.

        return !result || result === "auto" ? 0 : result;
      },
      set: function set(tween) {
        // Use step hook for back compat.
        // Use cssHook if its there.
        // Use .style if available and use plain properties where available.
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  }; // Support: IE <=9 only
  // Panic based approach to setting things on disconnected nodes

  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function set(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };
  jQuery.easing = {
    linear: function linear(p) {
      return p;
    },
    swing: function swing(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery.fx = Tween.prototype.init; // Back compat <1.8 extension point

  jQuery.fx.step = {};
  var fxNow,
      inProgress,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;

  function schedule() {
    if (inProgress) {
      if (document.hidden === false && window.requestAnimationFrame) {
        window.requestAnimationFrame(schedule);
      } else {
        window.setTimeout(schedule, jQuery.fx.interval);
      }

      jQuery.fx.tick();
    }
  } // Animations created synchronously will run synchronously


  function createFxNow() {
    window.setTimeout(function () {
      fxNow = undefined;
    });
    return fxNow = Date.now();
  } // Generate parameters to create a standard animation


  function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = {
      height: type
    }; // If we include width, step value is 1 to do all cssExpand values,
    // otherwise step value is 2 to skip over Left and Right

    includeWidth = includeWidth ? 1 : 0;

    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }

    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }

    return attrs;
  }

  function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;

    for (; index < length; index++) {
      if (tween = collection[index].call(animation, prop, value)) {
        // We're done with this property
        return tween;
      }
    }
  }

  function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        hooks,
        oldfire,
        propTween,
        restoreDisplay,
        display,
        isBox = "width" in props || "height" in props,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHiddenWithinTree(elem),
        dataShow = dataPriv.get(elem, "fxshow"); // Queue-skipping animations hijack the fx hooks

    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");

      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;

        hooks.empty.fire = function () {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }

      hooks.unqueued++;
      anim.always(function () {
        // Ensure the complete handler is called before this completes
        anim.always(function () {
          hooks.unqueued--;

          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    } // Detect show/hide animations


    for (prop in props) {
      value = props[prop];

      if (rfxtypes.test(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";

        if (value === (hidden ? "hide" : "show")) {
          // Pretend to be hidden if this is a "show" and
          // there is still data from a stopped show/hide
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true; // Ignore all other no-op show/hide data
          } else {
            continue;
          }
        }

        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      }
    } // Bail out if this is a no-op like .hide().hide()


    propTween = !jQuery.isEmptyObject(props);

    if (!propTween && jQuery.isEmptyObject(orig)) {
      return;
    } // Restrict "overflow" and "display" styles during box animations


    if (isBox && elem.nodeType === 1) {
      // Support: IE <=9 - 11, Edge 12 - 15
      // Record all 3 overflow attributes because IE does not infer the shorthand
      // from identically-valued overflowX and overflowY and Edge just mirrors
      // the overflowX value there.
      opts.overflow = [style.overflow, style.overflowX, style.overflowY]; // Identify a display type, preferring old show/hide data over the CSS cascade

      restoreDisplay = dataShow && dataShow.display;

      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, "display");
      }

      display = jQuery.css(elem, "display");

      if (display === "none") {
        if (restoreDisplay) {
          display = restoreDisplay;
        } else {
          // Get nonempty value(s) by temporarily forcing visibility
          showHide([elem], true);
          restoreDisplay = elem.style.display || restoreDisplay;
          display = jQuery.css(elem, "display");
          showHide([elem]);
        }
      } // Animate inline elements as inline-block


      if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
        if (jQuery.css(elem, "float") === "none") {
          // Restore the original display value at the end of pure show/hide animations
          if (!propTween) {
            anim.done(function () {
              style.display = restoreDisplay;
            });

            if (restoreDisplay == null) {
              display = style.display;
              restoreDisplay = display === "none" ? "" : display;
            }
          }

          style.display = "inline-block";
        }
      }
    }

    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function () {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    } // Implement show/hide animations


    propTween = false;

    for (prop in orig) {
      // General show/hide setup for this element animation
      if (!propTween) {
        if (dataShow) {
          if ("hidden" in dataShow) {
            hidden = dataShow.hidden;
          }
        } else {
          dataShow = dataPriv.access(elem, "fxshow", {
            display: restoreDisplay
          });
        } // Store hidden/visible for toggle so `.stop().toggle()` "reverses"


        if (toggle) {
          dataShow.hidden = !hidden;
        } // Show elements before animating them


        if (hidden) {
          showHide([elem], true);
        }
        /* eslint-disable no-loop-func */


        anim.done(function () {
          /* eslint-enable no-loop-func */
          // The final step of a "hide" animation is actually hiding the element
          if (!hidden) {
            showHide([elem]);
          }

          dataPriv.remove(elem, "fxshow");

          for (prop in orig) {
            jQuery.style(elem, prop, orig[prop]);
          }
        });
      } // Per-property setup


      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start;

        if (hidden) {
          propTween.end = propTween.start;
          propTween.start = 0;
        }
      }
    }
  }

  function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks; // camelCase, specialEasing and expand cssHook pass

    for (index in props) {
      name = camelCase(index);
      easing = specialEasing[name];
      value = props[index];

      if (Array.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }

      if (index !== name) {
        props[name] = value;
        delete props[index];
      }

      hooks = jQuery.cssHooks[name];

      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
        // Reusing 'index' because we have the correct "name"

        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }

  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function () {
      // Don't match elem in the :animated selector
      delete tick.elem;
    }),
        tick = function tick() {
      if (stopped) {
        return false;
      }

      var currentTime = fxNow || createFxNow(),
          remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
          // Support: Android 2.3 only
      // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
      temp = remaining / animation.duration || 0,
          percent = 1 - temp,
          index = 0,
          length = animation.tweens.length;

      for (; index < length; index++) {
        animation.tweens[index].run(percent);
      }

      deferred.notifyWith(elem, [animation, percent, remaining]); // If there's more to do, yield

      if (percent < 1 && length) {
        return remaining;
      } // If this was an empty animation, synthesize a final progress notification


      if (!length) {
        deferred.notifyWith(elem, [animation, 1, 0]);
      } // Resolve the animation and report its conclusion


      deferred.resolveWith(elem, [animation]);
      return false;
    },
        animation = deferred.promise({
      elem: elem,
      props: jQuery.extend({}, properties),
      opts: jQuery.extend(true, {
        specialEasing: {},
        easing: jQuery.easing._default
      }, options),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function createTween(prop, end) {
        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        animation.tweens.push(tween);
        return tween;
      },
      stop: function stop(gotoEnd) {
        var index = 0,
            // If we are going to the end, we want to run all the tweens
        // otherwise we skip this part
        length = gotoEnd ? animation.tweens.length : 0;

        if (stopped) {
          return this;
        }

        stopped = true;

        for (; index < length; index++) {
          animation.tweens[index].run(1);
        } // Resolve when we played the last frame; otherwise, reject


        if (gotoEnd) {
          deferred.notifyWith(elem, [animation, 1, 0]);
          deferred.resolveWith(elem, [animation, gotoEnd]);
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd]);
        }

        return this;
      }
    }),
        props = animation.props;

    propFilter(props, animation.opts.specialEasing);

    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);

      if (result) {
        if (isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
        }

        return result;
      }
    }

    jQuery.map(props, createTween, animation);

    if (isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    } // Attach callbacks from options


    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation;
  }

  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {
      "*": [function (prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]
    },
    tweener: function tweener(props, callback) {
      if (isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnothtmlwhite);
      }

      var prop,
          index = 0,
          length = props.length;

      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function prefilter(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });

  jQuery.speed = function (speed, easing, fn) {
    var opt = speed && _typeof(speed) === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !isFunction(easing) && easing
    }; // Go to the end state if fx are off

    if (jQuery.fx.off) {
      opt.duration = 0;
    } else {
      if (typeof opt.duration !== "number") {
        if (opt.duration in jQuery.fx.speeds) {
          opt.duration = jQuery.fx.speeds[opt.duration];
        } else {
          opt.duration = jQuery.fx.speeds._default;
        }
      }
    } // Normalize opt.queue - true/undefined/null -> "fx"


    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    } // Queueing


    opt.old = opt.complete;

    opt.complete = function () {
      if (isFunction(opt.old)) {
        opt.old.call(this);
      }

      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };

    return opt;
  };

  jQuery.fn.extend({
    fadeTo: function fadeTo(speed, to, easing, callback) {
      // Show any hidden elements after setting opacity to 0
      return this.filter(isHiddenWithinTree).css("opacity", 0).show() // Animate to the value specified
      .end().animate({
        opacity: to
      }, speed, easing, callback);
    },
    animate: function animate(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function doAnimation() {
        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation(this, jQuery.extend({}, prop), optall); // Empty animations, or finishing resolves immediately

        if (empty || dataPriv.get(this, "finish")) {
          anim.stop(true);
        }
      };

      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function stop(type, clearQueue, gotoEnd) {
      var stopQueue = function stopQueue(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };

      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }

      if (clearQueue) {
        this.queue(type || "fx", []);
      }

      return this.each(function () {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = dataPriv.get(this);

        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }

        for (index = timers.length; index--;) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        } // Start the next in the queue if the last step wasn't forced.
        // Timers currently will call their complete callbacks, which
        // will dequeue but only if they were gotoEnd.


        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function finish(type) {
      if (type !== false) {
        type = type || "fx";
      }

      return this.each(function () {
        var index,
            data = dataPriv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0; // Enable finishing flag on private data

        data.finish = true; // Empty the queue first

        jQuery.queue(this, type, []);

        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        } // Look for any active animations, and finish them


        for (index = timers.length; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        } // Look for any animations in the old queue and finish them


        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        } // Turn off finishing flag


        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function (_i, name) {
    var cssFn = jQuery.fn[name];

    jQuery.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  }); // Generate shortcuts for custom animations

  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];

  jQuery.fx.tick = function () {
    var timer,
        i = 0,
        timers = jQuery.timers;
    fxNow = Date.now();

    for (; i < timers.length; i++) {
      timer = timers[i]; // Run the timer and safely remove it when done (allowing for external removal)

      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }

    if (!timers.length) {
      jQuery.fx.stop();
    }

    fxNow = undefined;
  };

  jQuery.fx.timer = function (timer) {
    jQuery.timers.push(timer);
    jQuery.fx.start();
  };

  jQuery.fx.interval = 13;

  jQuery.fx.start = function () {
    if (inProgress) {
      return;
    }

    inProgress = true;
    schedule();
  };

  jQuery.fx.stop = function () {
    inProgress = null;
  };

  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    // Default speed
    _default: 400
  }; // Based off of the plugin by Clint Helfers, with permission.
  // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/

  jQuery.fn.delay = function (time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function (next, hooks) {
      var timeout = window.setTimeout(next, time);

      hooks.stop = function () {
        window.clearTimeout(timeout);
      };
    });
  };

  (function () {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox"; // Support: Android <=4.3 only
    // Default value for a checkbox should be "on"

    support.checkOn = input.value !== ""; // Support: IE <=11 only
    // Must access selectedIndex to make default options select

    support.optSelected = opt.selected; // Support: IE <=11 only
    // An input loses its value after becoming a radio

    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();

  var boolHook,
      attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function attr(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function removeAttr(name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function attr(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      } // Fallback to prop when attributes are not supported


      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      } // Attribute hooks are determined by the lowercase version
      // Grab necessary hook if one is defined


      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
      }

      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }

        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        elem.setAttribute(name, value + "");
        return value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      ret = jQuery.find.attr(elem, name); // Non-existent attributes return null, we normalize to undefined

      return ret == null ? undefined : ret;
    },
    attrHooks: {
      type: {
        set: function set(elem, value) {
          if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);

            if (val) {
              elem.value = val;
            }

            return value;
          }
        }
      }
    },
    removeAttr: function removeAttr(elem, value) {
      var name,
          i = 0,
          // Attribute names can contain non-HTML whitespace characters
      // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
      attrNames = value && value.match(rnothtmlwhite);

      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i++]) {
          elem.removeAttribute(name);
        }
      }
    }
  }); // Hooks for boolean attributes

  boolHook = {
    set: function set(elem, value, name) {
      if (value === false) {
        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }

      return name;
    }
  };
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (_i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;

    attrHandle[name] = function (elem, name, isXML) {
      var ret,
          handle,
          lowercaseName = name.toLowerCase();

      if (!isXML) {
        // Avoid an infinite loop by temporarily removing this function from the getter
        handle = attrHandle[lowercaseName];
        attrHandle[lowercaseName] = ret;
        ret = getter(elem, name, isXML) != null ? lowercaseName : null;
        attrHandle[lowercaseName] = handle;
      }

      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i,
      rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function prop(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function removeProp(name) {
      return this.each(function () {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop: function prop(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set properties on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }

      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        // Fix name and attach hooks
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }

      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        return elem[name] = value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      return elem[name];
    },
    propHooks: {
      tabIndex: {
        get: function get(elem) {
          // Support: IE <=9 - 11 only
          // elem.tabIndex doesn't always return the
          // correct value when it hasn't been explicitly set
          // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
          // Use proper attribute retrieval(#12072)
          var tabindex = jQuery.find.attr(elem, "tabindex");

          if (tabindex) {
            return parseInt(tabindex, 10);
          }

          if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
            return 0;
          }

          return -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }); // Support: IE <=11 only
  // Accessing the selectedIndex property
  // forces the browser to respect setting selected
  // on the option
  // The getter ensures a default option is selected
  // when in an optgroup
  // eslint rule "no-unused-expressions" is disabled for this code
  // since it considers such accessions noop

  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function get(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }

        return null;
      },
      set: function set(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent) {
          parent.selectedIndex;

          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }

  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    jQuery.propFix[this.toLowerCase()] = this;
  }); // Strip and collapse whitespace according to HTML spec
  // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace

  function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
  }

  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }

  function classesToArray(value) {
    if (Array.isArray(value)) {
      return value;
    }

    if (typeof value === "string") {
      return value.match(rnothtmlwhite) || [];
    }

    return [];
  }

  jQuery.fn.extend({
    addClass: function addClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }

      if (!arguments.length) {
        return this.attr("class", "");
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem); // This expression is here for better compressibility (see addClass)

          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              // Remove *all* instances
              while (cur.indexOf(" " + clazz + " ") > -1) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(value, stateVal) {
      var type = _typeof(value),
          isValidValue = type === "string" || Array.isArray(value);

      if (typeof stateVal === "boolean" && isValidValue) {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }

      if (isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        });
      }

      return this.each(function () {
        var className, i, self, classNames;

        if (isValidValue) {
          // Toggle individual class names
          i = 0;
          self = jQuery(this);
          classNames = classesToArray(value);

          while (className = classNames[i++]) {
            // Check each className given, space separated list
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          } // Toggle whole class name

        } else if (value === undefined || type === "boolean") {
          className = getClass(this);

          if (className) {
            // Store className if set
            dataPriv.set(this, "__className__", className);
          } // If the element has a class name or if we're passed `false`,
          // then remove the whole classname (if there was one, the above saved it).
          // Otherwise bring back whatever was previously saved (if anything),
          // falling back to the empty string if nothing was stored.


          if (this.setAttribute) {
            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
          }
        }
      });
    },
    hasClass: function hasClass(selector) {
      var className,
          elem,
          i = 0;
      className = " " + selector + " ";

      while (elem = this[i++]) {
        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
          return true;
        }
      }

      return false;
    }
  });
  var rreturn = /\r/g;
  jQuery.fn.extend({
    val: function val(value) {
      var hooks,
          ret,
          valueIsFunction,
          elem = this[0];

      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }

          ret = elem.value; // Handle most common string cases

          if (typeof ret === "string") {
            return ret.replace(rreturn, "");
          } // Handle cases where value is null/undef or number


          return ret == null ? "" : ret;
        }

        return;
      }

      valueIsFunction = isFunction(value);
      return this.each(function (i) {
        var val;

        if (this.nodeType !== 1) {
          return;
        }

        if (valueIsFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        } // Treat null/undefined as ""; convert numbers to string


        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (Array.isArray(val)) {
          val = jQuery.map(val, function (value) {
            return value == null ? "" : value + "";
          });
        }

        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting

        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }
  });
  jQuery.extend({
    valHooks: {
      option: {
        get: function get(elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ? val : // Support: IE <=10 - 11 only
          // option.text throws exceptions (#14686, #14858)
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
          stripAndCollapse(jQuery.text(elem));
        }
      },
      select: {
        get: function get(elem) {
          var value,
              option,
              i,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one",
              values = one ? null : [],
              max = one ? index + 1 : options.length;

          if (index < 0) {
            i = max;
          } else {
            i = one ? index : 0;
          } // Loop through all the selected options


          for (; i < max; i++) {
            option = options[i]; // Support: IE <=9 only
            // IE8-9 doesn't update selected after form reset (#2551)

            if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
            !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
              // Get the specific value for the option
              value = jQuery(option).val(); // We don't need an array for one selects

              if (one) {
                return value;
              } // Multi-Selects return an array


              values.push(value);
            }
          }

          return values;
        },
        set: function set(elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;

          while (i--) {
            option = options[i];
            /* eslint-disable no-cond-assign */

            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
              optionSet = true;
            }
            /* eslint-enable no-cond-assign */

          } // Force browsers to behave consistently when non-matching value is set


          if (!optionSet) {
            elem.selectedIndex = -1;
          }

          return values;
        }
      }
    }
  }); // Radios and checkboxes getter/setter

  jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = {
      set: function set(elem, value) {
        if (Array.isArray(value)) {
          return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
        }
      }
    };

    if (!support.checkOn) {
      jQuery.valHooks[this].get = function (elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  }); // Return jQuery for attributes-only inclusion

  support.focusin = "onfocusin" in window;

  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      stopPropagationCallback = function stopPropagationCallback(e) {
    e.stopPropagation();
  };

  jQuery.extend(jQuery.event, {
    trigger: function trigger(event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          lastElement,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = lastElement = tmp = elem = elem || document; // Don't do events on text and comment nodes

      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      } // focus/blur morphs to focusin/out; ensure we're not firing them right now


      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }

      if (type.indexOf(".") > -1) {
        // Namespaced trigger; create a regexp to match event type in handle()
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }

      ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string

      event = event[jQuery.expando] ? event : new jQuery.Event(type, _typeof(event) === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)

      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused

      event.result = undefined;

      if (!event.target) {
        event.target = elem;
      } // Clone any incoming data and prepend the event, creating the handler arg list


      data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines

      special = jQuery.event.special[type] || {};

      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      } // Determine event propagation path in advance, per W3C events spec (#9951)
      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)


      if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
        bubbleType = special.delegateType || type;

        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }

        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        } // Only add window if we got to document (e.g., not plain obj or detached DOM)


        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      } // Fire handlers on the event path


      i = 0;

      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        lastElement = cur;
        event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler

        handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");

        if (handle) {
          handle.apply(cur, data);
        } // Native handler


        handle = ontype && cur[ontype];

        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);

          if (event.result === false) {
            event.preventDefault();
          }
        }
      }

      event.type = type; // If nobody prevented the default action, do it now

      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          // Call a native DOM method on the target with the same name as the event.
          // Don't do default actions on window, that's where global variables be (#6170)
          if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
            // Don't re-trigger an onFOO event when we call its FOO() method
            tmp = elem[ontype];

            if (tmp) {
              elem[ontype] = null;
            } // Prevent re-triggering of the same event, since we already bubbled it above


            jQuery.event.triggered = type;

            if (event.isPropagationStopped()) {
              lastElement.addEventListener(type, stopPropagationCallback);
            }

            elem[type]();

            if (event.isPropagationStopped()) {
              lastElement.removeEventListener(type, stopPropagationCallback);
            }

            jQuery.event.triggered = undefined;

            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }

      return event.result;
    },
    // Piggyback on a donor event to simulate a different one
    // Used only for `focus(in | out)` events
    simulate: function simulate(type, elem, event) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true
      });
      jQuery.event.trigger(e, null, elem);
    }
  });
  jQuery.fn.extend({
    trigger: function trigger(type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function triggerHandler(type, data) {
      var elem = this[0];

      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  }); // Support: Firefox <=44
  // Firefox doesn't have focus(in | out) events
  // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
  //
  // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
  // focus(in | out) events fire after focus & blur events,
  // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
  // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857

  if (!support.focusin) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function (orig, fix) {
      // Attach a single capturing handler on the document while someone wants focusin/focusout
      var handler = function handler(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };

      jQuery.event.special[fix] = {
        setup: function setup() {
          // Handle: regular nodes (via `this.ownerDocument`), window
          // (via `this.document`) & document (via `this`).
          var doc = this.ownerDocument || this.document || this,
              attaches = dataPriv.access(doc, fix);

          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }

          dataPriv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function teardown() {
          var doc = this.ownerDocument || this.document || this,
              attaches = dataPriv.access(doc, fix) - 1;

          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            dataPriv.remove(doc, fix);
          } else {
            dataPriv.access(doc, fix, attaches);
          }
        }
      };
    });
  }

  var location = window.location;
  var nonce = {
    guid: Date.now()
  };
  var rquery = /\?/; // Cross-browser xml parsing

  jQuery.parseXML = function (data) {
    var xml, parserErrorElem;

    if (!data || typeof data !== "string") {
      return null;
    } // Support: IE 9 - 11 only
    // IE throws on parseFromString with invalid input.


    try {
      xml = new window.DOMParser().parseFromString(data, "text/xml");
    } catch (e) {}

    parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];

    if (!xml || parserErrorElem) {
      jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function (el) {
        return el.textContent;
      }).join("\n") : data));
    }

    return xml;
  };

  var rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;

  function buildParams(prefix, obj, traditional, add) {
    var name;

    if (Array.isArray(obj)) {
      // Serialize array item.
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v);
        } else {
          // Item is non-scalar (array or object), encode its numeric index.
          buildParams(prefix + "[" + (_typeof(v) === "object" && v != null ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && toType(obj) === "object") {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  } // Serialize an array of form elements or a set of
  // key/values into a query string


  jQuery.param = function (a, traditional) {
    var prefix,
        s = [],
        add = function add(key, valueOrFunction) {
      // If value is a function, invoke it and use its return value
      var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
    };

    if (a == null) {
      return "";
    } // If an array was passed in, assume that it is an array of form elements.


    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      // Serialize the form elements
      jQuery.each(a, function () {
        add(this.name, this.value);
      });
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    } // Return the resulting serialization


    return s.join("&");
  };

  jQuery.fn.extend({
    serialize: function serialize() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        // Can add propHook for "elements" to filter or add form elements
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function () {
        var type = this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works

        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function (_i, elem) {
        var val = jQuery(this).val();

        if (val == null) {
          return null;
        }

        if (Array.isArray(val)) {
          return jQuery.map(val, function (val) {
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          });
        }

        return {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  var r20 = /%20/g,
      rhash = /#.*$/,
      rantiCache = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,

  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},

  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},
      // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = "*/".concat("*"),
      // Anchor tag for parsing the document origin
  originAnchor = document.createElement("a");
  originAnchor.href = location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport

  function addToPrefiltersOrTransports(structure) {
    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }

      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

      if (isFunction(func)) {
        // For each dataType in the dataTypeExpression
        while (dataType = dataTypes[i++]) {
          // Prepend if requested
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  } // Base inspection function for prefilters and transports


  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = structure === transports;

    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);

        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }

    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  } // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes #9887


  function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};

    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }

    if (deep) {
      jQuery.extend(true, target, deep);
    }

    return target;
  }
  /* Handles responses to an ajax request:
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */


  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
        type,
        finalDataType,
        firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes; // Remove auto dataType and get content-type in the process

    while (dataTypes[0] === "*") {
      dataTypes.shift();

      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    } // Check if we're dealing with a known content-type


    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    } // Check to see if we have a response for the expected dataType


    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      // Try convertible dataTypes
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }

        if (!firstDataType) {
          firstDataType = type;
        }
      } // Or just use first one


      finalDataType = finalDataType || firstDataType;
    } // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response


    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }

      return responses[finalDataType];
    }
  }
  /* Chain conversions given the request and the original response
   * Also sets the responseXXX fields on the jqXHR instance
   */


  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice(); // Create converters map with lowercased keys

    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }

    current = dataTypes.shift(); // Convert to each sequential dataType

    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      } // Apply the dataFilter if provided


      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }

      prev = current;
      current = dataTypes.shift();

      if (current) {
        // There's only work to do if current dataType is non-auto
        if (current === "*") {
          current = prev; // Convert response if prev dataType is non-auto and differs from current
        } else if (prev !== "*" && prev !== current) {
          // Seek a direct converter
          conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair

          if (!conv) {
            for (conv2 in converters) {
              // If conv2 outputs current
              tmp = conv2.split(" ");

              if (tmp[1] === current) {
                // If prev can be converted to accepted input
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];

                if (conv) {
                  // Condense equivalence converters
                  if (conv === true) {
                    conv = converters[conv2]; // Otherwise, insert the intermediate dataType
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }

                  break;
                }
              }
            }
          } // Apply converter (if not an equivalence)


          if (conv !== true) {
            // Unless errors are allowed to bubble, catch and return them
            if (conv && s.throws) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }

    return {
      state: "success",
      data: response
    };
  }

  jQuery.extend({
    // Counter for holding the number of active queries
    active: 0,
    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",

      /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {},
      */
      accepts: {
        "*": allTypes,
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
      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {
        // Convert anything to text
        "* text": String,
        // Text to html (true = no transformation)
        "text html": true,
        // Evaluate text as a json expression
        "text json": JSON.parse,
        // Parse text as xml
        "text xml": jQuery.parseXML
      },
      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: true,
        context: true
      }
    },
    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function ajaxSetup(target, settings) {
      return settings ? // Building a settings object
      ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
      ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    // Main method
    ajax: function ajax(url, options) {
      // If url is an object, simulate pre-1.5 signature
      if (_typeof(url) === "object") {
        options = url;
        url = undefined;
      } // Force options to be an object


      options = options || {};

      var transport,
          // URL without anti-cache param
      cacheURL,
          // Response headers
      responseHeadersString,
          responseHeaders,
          // timeout handle
      timeoutTimer,
          // Url cleanup var
      urlAnchor,
          // Request state (becomes false upon send and true upon completion)
      completed,
          // To know if global events are to be dispatched
      fireGlobals,
          // Loop variable
      i,
          // uncached part of the url
      uncached,
          // Create the final options object
      s = jQuery.ajaxSetup({}, options),
          // Callbacks context
      callbackContext = s.context || s,
          // Context for global events is callbackContext if it is a DOM node or jQuery collection
      globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          // Deferreds
      deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          // Status-dependent callbacks
      _statusCode = s.statusCode || {},
          // Headers (they are sent all at once)
      requestHeaders = {},
          requestHeadersNames = {},
          // Default abort message
      strAbort = "canceled",
          // Fake xhr
      jqXHR = {
        readyState: 0,
        // Builds headers hashtable if needed
        getResponseHeader: function getResponseHeader(key) {
          var match;

          if (completed) {
            if (!responseHeaders) {
              responseHeaders = {};

              while (match = rheaders.exec(responseHeadersString)) {
                responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
              }
            }

            match = responseHeaders[key.toLowerCase() + " "];
          }

          return match == null ? null : match.join(", ");
        },
        // Raw string
        getAllResponseHeaders: function getAllResponseHeaders() {
          return completed ? responseHeadersString : null;
        },
        // Caches the header
        setRequestHeader: function setRequestHeader(name, value) {
          if (completed == null) {
            name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
            requestHeaders[name] = value;
          }

          return this;
        },
        // Overrides response content-type header
        overrideMimeType: function overrideMimeType(type) {
          if (completed == null) {
            s.mimeType = type;
          }

          return this;
        },
        // Status-dependent callbacks
        statusCode: function statusCode(map) {
          var code;

          if (map) {
            if (completed) {
              // Execute the appropriate callbacks
              jqXHR.always(map[jqXHR.status]);
            } else {
              // Lazy-add the new callbacks in a way that preserves old ones
              for (code in map) {
                _statusCode[code] = [_statusCode[code], map[code]];
              }
            }
          }

          return this;
        },
        // Cancel the request
        abort: function abort(statusText) {
          var finalText = statusText || strAbort;

          if (transport) {
            transport.abort(finalText);
          }

          done(0, finalText);
          return this;
        }
      }; // Attach deferreds


      deferred.promise(jqXHR); // Add protocol if not provided (prefilters might expect it)
      // Handle falsy url in the settings object (#10093: consistency with old signature)
      // We also use the url parameter if available

      s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"); // Alias method option to type as per ticket #12004

      s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list

      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""]; // A cross-domain request is in order when the origin doesn't match the current origin.

      if (s.crossDomain == null) {
        urlAnchor = document.createElement("a"); // Support: IE <=8 - 11, Edge 12 - 15
        // IE throws exception on accessing the href property if url is malformed,
        // e.g. http://example.com:80x/

        try {
          urlAnchor.href = s.url; // Support: IE <=8 - 11 only
          // Anchor's host property isn't correctly set when s.url is relative

          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          // If there is an error parsing the URL, assume it is crossDomain,
          // it can be rejected by the transport if it is invalid
          s.crossDomain = true;
        }
      } // Convert data if not already a string


      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      } // Apply prefilters


      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there

      if (completed) {
        return jqXHR;
      } // We can fire global events as of now if asked to
      // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)


      fireGlobals = jQuery.event && s.global; // Watch for a new set of requests

      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      } // Uppercase the type


      s.type = s.type.toUpperCase(); // Determine if request has content

      s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
      // and/or If-None-Match header later on
      // Remove hash to simplify url manipulation

      cacheURL = s.url.replace(rhash, ""); // More options handling for requests with no content

      if (!s.hasContent) {
        // Remember the hash so we can put it back
        uncached = s.url.slice(cacheURL.length); // If data is available and should be processed, append data to url

        if (s.data && (s.processData || typeof s.data === "string")) {
          cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data; // #9682: remove data so that it's not used in an eventual retry

          delete s.data;
        } // Add or update anti-cache param if needed


        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, "$1");
          uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
        } // Put hash and anti-cache on the URL that will be requested (gh-1732)


        s.url = cacheURL + uncached; // Change '%20' to '+' if this is encoded form body content (gh-2658)
      } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
        s.data = s.data.replace(r20, "+");
      } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.


      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }

        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      } // Set the correct header, if data is being sent


      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      } // Set the Accepts header for the server, depending on the dataType


      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option

      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      } // Allow custom headers/mimetypes and early abort


      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
        // Abort if not done already and return
        return jqXHR.abort();
      } // Aborting is no longer a cancellation


      strAbort = "abort"; // Install callbacks on deferreds

      completeDeferred.add(s.complete);
      jqXHR.done(s.success);
      jqXHR.fail(s.error); // Get transport

      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR); // If no transport, we auto-abort

      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1; // Send global event

        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        } // If request was aborted inside ajaxSend, stop there


        if (completed) {
          return jqXHR;
        } // Timeout


        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function () {
            jqXHR.abort("timeout");
          }, s.timeout);
        }

        try {
          completed = false;
          transport.send(requestHeaders, done);
        } catch (e) {
          // Rethrow post-completion exceptions
          if (completed) {
            throw e;
          } // Propagate others as results


          done(-1, e);
        }
      } // Callback for when everything is done


      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText; // Ignore repeat invocations

        if (completed) {
          return;
        }

        completed = true; // Clear timeout if it exists

        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        } // Dereference transport for early garbage collection
        // (no matter how long the jqXHR object will be used)


        transport = undefined; // Cache response headers

        responseHeadersString = headers || ""; // Set readyState

        jqXHR.readyState = status > 0 ? 4 : 0; // Determine if successful

        isSuccess = status >= 200 && status < 300 || status === 304; // Get response data

        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        } // Use a noop converter for missing script but not if jsonp


        if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) {
          s.converters["text script"] = function () {};
        } // Convert no matter what (that way responseXXX fields are always set)


        response = ajaxConvert(s, response, jqXHR, isSuccess); // If successful, handle type chaining

        if (isSuccess) {
          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");

            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }

            modified = jqXHR.getResponseHeader("etag");

            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          } // if no content


          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent"; // if not modified
          } else if (status === 304) {
            statusText = "notmodified"; // If we have data, let's convert it
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          // Extract error from statusText and normalize for non-aborts
          error = statusText;

          if (status || !statusText) {
            statusText = "error";

            if (status < 0) {
              status = 0;
            }
          }
        } // Set data for the fake xhr object


        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error

        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        } // Status-dependent callbacks


        jqXHR.statusCode(_statusCode);
        _statusCode = undefined;

        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        } // Complete


        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter

          if (! --jQuery.active) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }

      return jqXHR;
    },
    getJSON: function getJSON(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function getScript(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function (_i, method) {
    jQuery[method] = function (url, data, callback, type) {
      // Shift arguments if data argument was omitted
      if (isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      } // The url can be an options object (which then must have .url)


      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });
  jQuery.ajaxPrefilter(function (s) {
    var i;

    for (i in s.headers) {
      if (i.toLowerCase() === "content-type") {
        s.contentType = s.headers[i] || "";
      }
    }
  });

  jQuery._evalUrl = function (url, options, doc) {
    return jQuery.ajax({
      url: url,
      // Make this explicit, since user can override this through ajaxSetup (#11264)
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      // Only evaluate the response if it is successful (gh-4126)
      // dataFilter is not invoked for failure responses, so using it instead
      // of the default converter is kludgy but it works.
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(response) {
        jQuery.globalEval(response, options, doc);
      }
    });
  };

  jQuery.fn.extend({
    wrapAll: function wrapAll(html) {
      var wrap;

      if (this[0]) {
        if (isFunction(html)) {
          html = html.call(this[0]);
        } // The elements to wrap the target around


        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }

        wrap.map(function () {
          var elem = this;

          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }

          return elem;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(html) {
      if (isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }

      return this.each(function () {
        var self = jQuery(this),
            contents = self.contents();

        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function wrap(html) {
      var htmlIsFunction = isFunction(html);
      return this.each(function (i) {
        jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function unwrap(selector) {
      this.parent(selector).not("body").each(function () {
        jQuery(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });

  jQuery.expr.pseudos.hidden = function (elem) {
    return !jQuery.expr.pseudos.visible(elem);
  };

  jQuery.expr.pseudos.visible = function (elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };

  jQuery.ajaxSettings.xhr = function () {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  };

  var xhrSuccessStatus = {
    // File protocol always yields status code 0, assume 200
    0: 200,
    // Support: IE <=9 only
    // #1450: sometimes IE returns 1223 when it should be 204
    1223: 204
  },
      xhrSupported = jQuery.ajaxSettings.xhr();
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function (options) {
    var _callback, errorCallback; // Cross domain only allowed if supported through XMLHttpRequest


    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function send(headers, complete) {
          var i,
              xhr = options.xhr();
          xhr.open(options.type, options.url, options.async, options.username, options.password); // Apply custom fields if provided

          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          } // Override mime type if needed


          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          } // X-Requested-With header
          // For cross-domain requests, seeing as conditions for a preflight are
          // akin to a jigsaw puzzle, we simply never set it to be sure.
          // (it can always be set on a per-request basis or even using ajaxSetup)
          // For same-domain requests, won't change header if already provided.


          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          } // Set headers


          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          } // Callback


          _callback = function callback(type) {
            return function () {
              if (_callback) {
                _callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  // Support: IE <=9 only
                  // On a manual native abort, IE9 throws
                  // errors on any property access that is not readyState
                  if (typeof xhr.status !== "number") {
                    complete(0, "error");
                  } else {
                    complete( // File: protocol always yields status 0; see #8605, #14207
                    xhr.status, xhr.statusText);
                  }
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                    binary: xhr.response
                  } : {
                    text: xhr.responseText
                  }, xhr.getAllResponseHeaders());
                }
              }
            };
          }; // Listen to events


          xhr.onload = _callback();
          errorCallback = xhr.onerror = xhr.ontimeout = _callback("error"); // Support: IE 9 only
          // Use onreadystatechange to replace onabort
          // to handle uncaught aborts

          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback;
          } else {
            xhr.onreadystatechange = function () {
              // Check readyState before timeout as it changes
              if (xhr.readyState === 4) {
                // Allow onerror to be called first,
                // but that will not handle a native abort
                // Also, save errorCallback to a variable
                // as xhr.onerror cannot be accessed
                window.setTimeout(function () {
                  if (_callback) {
                    errorCallback();
                  }
                });
              }
            };
          } // Create the abort callback


          _callback = _callback("abort");

          try {
            // Do send the request (this may raise an exception)
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            // #14683: Only rethrow if this hasn't been notified as an error yet
            if (_callback) {
              throw e;
            }
          }
        },
        abort: function abort() {
          if (_callback) {
            _callback();
          }
        }
      };
    }
  }); // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)

  jQuery.ajaxPrefilter(function (s) {
    if (s.crossDomain) {
      s.contents.script = false;
    }
  }); // Install script dataType

  jQuery.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  }); // Handle cache's special case and crossDomain

  jQuery.ajaxPrefilter("script", function (s) {
    if (s.cache === undefined) {
      s.cache = false;
    }

    if (s.crossDomain) {
      s.type = "GET";
    }
  }); // Bind script tag hack transport

  jQuery.ajaxTransport("script", function (s) {
    // This transport only deals with cross domain or forced-by-attrs requests
    if (s.crossDomain || s.scriptAttrs) {
      var script, _callback2;

      return {
        send: function send(_, complete) {
          script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", _callback2 = function callback(evt) {
            script.remove();
            _callback2 = null;

            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          }); // Use native DOM manipulation to avoid our domManip AJAX trickery

          document.head.appendChild(script[0]);
        },
        abort: function abort() {
          if (_callback2) {
            _callback2();
          }
        }
      };
    }
  });
  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/; // Default jsonp settings

  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
      this[callback] = true;
      return callback;
    }
  }); // Detect, normalize options and install callbacks for jsonp requests

  jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set

    if (jsonProp || s.dataTypes[0] === "jsonp") {
      // Get callback name, remembering preexisting value associated with it
      callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; // Insert callback into url or form data

      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      } // Use data converter to retrieve json after script execution


      s.converters["script json"] = function () {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }

        return responseContainer[0];
      }; // Force json dataType


      s.dataTypes[0] = "json"; // Install callback

      overwritten = window[callbackName];

      window[callbackName] = function () {
        responseContainer = arguments;
      }; // Clean-up function (fires after converters)


      jqXHR.always(function () {
        // If previous value didn't exist - remove it
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
        } else {
          window[callbackName] = overwritten;
        } // Save back as free


        if (s[callbackName]) {
          // Make sure that re-using the options doesn't screw things around
          s.jsonpCallback = originalSettings.jsonpCallback; // Save the callback name for future use

          oldCallbacks.push(callbackName);
        } // Call if it was a function and we have a response


        if (responseContainer && isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }

        responseContainer = overwritten = undefined;
      }); // Delegate to script

      return "script";
    }
  }); // Support: Safari 8 only
  // In Safari 8 documents created via document.implementation.createHTMLDocument
  // collapse sibling forms: the second one becomes a child of the first one.
  // Because of that, this security measure has to be disabled in Safari 8.
  // https://bugs.webkit.org/show_bug.cgi?id=137337

  support.createHTMLDocument = function () {
    var body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
  }(); // Argument "data" should be string of html
  // context (optional): If specified, the fragment will be created in this context,
  // defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string


  jQuery.parseHTML = function (data, context, keepScripts) {
    if (typeof data !== "string") {
      return [];
    }

    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }

    var base, parsed, scripts;

    if (!context) {
      // Stop scripts or inline event handlers from being executed immediately
      // by using document.implementation
      if (support.createHTMLDocument) {
        context = document.implementation.createHTMLDocument(""); // Set the base href for the created document
        // so any parsed elements with URLs
        // are based on the document's URL (gh-2965)

        base = context.createElement("base");
        base.href = document.location.href;
        context.head.appendChild(base);
      } else {
        context = document;
      }
    }

    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && []; // Single tag

    if (parsed) {
      return [context.createElement(parsed[1])];
    }

    parsed = buildFragment([data], context, scripts);

    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }

    return jQuery.merge([], parsed.childNodes);
  };
  /**
   * Load a url into a page
   */


  jQuery.fn.load = function (url, params, callback) {
    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");

    if (off > -1) {
      selector = stripAndCollapse(url.slice(off));
      url = url.slice(0, off);
    } // If it's a function


    if (isFunction(params)) {
      // We assume that it's the callback
      callback = params;
      params = undefined; // Otherwise, build a param string
    } else if (params && _typeof(params) === "object") {
      type = "POST";
    } // If we have elements to modify, make the request


    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function (responseText) {
        // Save response for use in complete callback
        response = arguments;
        self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
        responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
      }).always(callback && function (jqXHR, status) {
        self.each(function () {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }

    return this;
  };

  jQuery.expr.pseudos.animated = function (elem) {
    return jQuery.grep(jQuery.timers, function (fn) {
      return elem === fn.elem;
    }).length;
  };

  jQuery.offset = {
    setOffset: function setOffset(elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {}; // Set position first, in-case top/left are set even on static elem

      if (position === "static") {
        elem.style.position = "relative";
      }

      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
      // top or left is auto and position is either absolute or fixed

      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }

      if (isFunction(options)) {
        // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
        options = options.call(elem, i, jQuery.extend({}, curOffset));
      }

      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }

      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }

      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }
  };
  jQuery.fn.extend({
    // offset() relates an element's border box to the document origin
    offset: function offset(options) {
      // Preserve chaining for setter
      if (arguments.length) {
        return options === undefined ? this : this.each(function (i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }

      var rect,
          win,
          elem = this[0];

      if (!elem) {
        return;
      } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error


      if (!elem.getClientRects().length) {
        return {
          top: 0,
          left: 0
        };
      } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


      rect = elem.getBoundingClientRect();
      win = elem.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },
    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function position() {
      if (!this[0]) {
        return;
      }

      var offsetParent,
          offset,
          doc,
          elem = this[0],
          parentOffset = {
        top: 0,
        left: 0
      }; // position:fixed elements are offset from the viewport, which itself always has zero offset

      if (jQuery.css(elem, "position") === "fixed") {
        // Assume position:fixed implies availability of getBoundingClientRect
        offset = elem.getBoundingClientRect();
      } else {
        offset = this.offset(); // Account for the *real* offset parent, which can be the document or its root element
        // when a statically positioned element is identified

        doc = elem.ownerDocument;
        offsetParent = elem.offsetParent || doc.documentElement;

        while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.parentNode;
        }

        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
          // Incorporate borders into its offset, since they are outside its content origin
          parentOffset = jQuery(offsetParent).offset();
          parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
          parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
        }
      } // Subtract parent offsets and element margins


      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    // This method will return documentElement in the following cases:
    // 1) For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2) For the hidden or detached element
    // 3) For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function offsetParent() {
      return this.map(function () {
        var offsetParent = this.offsetParent;

        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || documentElement;
      });
    }
  }); // Create scrollLeft and scrollTop methods

  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (method, prop) {
    var top = "pageYOffset" === prop;

    jQuery.fn[method] = function (val) {
      return access(this, function (elem, method, val) {
        // Coalesce documents and windows
        var win;

        if (isWindow(elem)) {
          win = elem;
        } else if (elem.nodeType === 9) {
          win = elem.defaultView;
        }

        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }

        if (win) {
          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length);
    };
  }); // Support: Safari <=7 - 9.1, Chrome <=37 - 49
  // Add the top/left cssHooks using jQuery.fn.position
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
  // getComputedStyle returns percent when specified for top/left/bottom/right;
  // rather than make the css module depend on the offset module, just check for it here

  jQuery.each(["top", "left"], function (_i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop); // If curCSS returns percentage, fallback to offset

        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  }); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods

  jQuery.each({
    Height: "height",
    Width: "width"
  }, function (name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function (defaultExtra, funcName) {
      // Margin is only for outerHeight, outerWidth
      jQuery.fn[funcName] = function (margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function (elem, type, value) {
          var doc;

          if (isWindow(elem)) {
            // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
          } // Get document width or height


          if (elem.nodeType === 9) {
            doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
            // whichever is greatest

            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }

          return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css(elem, type, extra) : // Set width or height on the element
          jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable);
      };
    });
  });
  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (_i, type) {
    jQuery.fn[type] = function (fn) {
      return this.on(type, fn);
    };
  });
  jQuery.fn.extend({
    bind: function bind(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function unbind(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function delegate(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function undelegate(selector, types, fn) {
      // ( namespace ) or ( selector, types [, fn] )
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    },
    hover: function hover(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }
  });
  jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (_i, name) {
    // Handle event binding
    jQuery.fn[name] = function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  }); // Support: Android <=4.0 only
  // Make sure we trim BOM and NBSP

  var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; // Bind a function to a context, optionally partially applying any
  // arguments.
  // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
  // However, it is not slated for removal any time soon

  jQuery.proxy = function (fn, context) {
    var tmp, args, proxy;

    if (typeof context === "string") {
      tmp = fn[context];
      context = fn;
      fn = tmp;
    } // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.


    if (!isFunction(fn)) {
      return undefined;
    } // Simulated bind


    args = _slice.call(arguments, 2);

    proxy = function proxy() {
      return fn.apply(context || this, args.concat(_slice.call(arguments)));
    }; // Set the guid of unique handler to the same of original handler, so it can be removed


    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
    return proxy;
  };

  jQuery.holdReady = function (hold) {
    if (hold) {
      jQuery.readyWait++;
    } else {
      jQuery.ready(true);
    }
  };

  jQuery.isArray = Array.isArray;
  jQuery.parseJSON = JSON.parse;
  jQuery.nodeName = nodeName;
  jQuery.isFunction = isFunction;
  jQuery.isWindow = isWindow;
  jQuery.camelCase = camelCase;
  jQuery.type = toType;
  jQuery.now = Date.now;

  jQuery.isNumeric = function (obj) {
    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects)
    // that can be coerced to finite numbers (gh-2662)
    var type = jQuery.type(obj);
    return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    !isNaN(obj - parseFloat(obj));
  };

  jQuery.trim = function (text) {
    return text == null ? "" : (text + "").replace(rtrim, "");
  }; // Register as a named AMD module, since jQuery can be concatenated with other
  // files that may use define, but not via a proper concatenation script that
  // understands anonymous AMD modules. A named AMD is safest and most robust
  // way to register. Lowercase jquery is used because AMD module names are
  // derived from file names, and jQuery is normally delivered in a lowercase
  // file name. Do this after creating the global so that if an AMD module wants
  // to call noConflict to hide this version of jQuery, it will work.
  // Note that for maximum portability, libraries that are not jQuery should
  // declare themselves as anonymous modules, and avoid setting a global if an
  // AMD loader is present. jQuery is a special case. For more information, see
  // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon


  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return jQuery;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  var // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,
      // Map over the $ in case of overwrite
  _$ = window.$;

  jQuery.noConflict = function (deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }

    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }

    return jQuery;
  }; // Expose jQuery and $ identifiers, even in AMD
  // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)


  if (typeof noGlobal === "undefined") {
    window.jQuery = window.$ = jQuery;
  }

  return jQuery;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function () {
  var t = this;
  (function () {
    (function () {
      this.Turbolinks = {
        supported: function () {
          return null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener;
        }(),
        visit: function visit(t, r) {
          return e.controller.visit(t, r);
        },
        clearCache: function clearCache() {
          return e.controller.clearCache();
        },
        setProgressBarDelay: function setProgressBarDelay(t) {
          return e.controller.setProgressBarDelay(t);
        }
      };
    }).call(this);
  }).call(t);
  var e = t.Turbolinks;
  (function () {
    (function () {
      var t,
          r,
          n,
          o = [].slice;
      e.copyObject = function (t) {
        var e, r, n;
        r = {};

        for (e in t) {
          n = t[e], r[e] = n;
        }

        return r;
      }, e.closest = function (e, r) {
        return t.call(e, r);
      }, t = function () {
        var t, e;
        return t = document.documentElement, null != (e = t.closest) ? e : function (t) {
          var e;

          for (e = this; e;) {
            if (e.nodeType === Node.ELEMENT_NODE && r.call(e, t)) return e;
            e = e.parentNode;
          }
        };
      }(), e.defer = function (t) {
        return setTimeout(t, 1);
      }, e.throttle = function (t) {
        var e;
        return e = null, function () {
          var r;
          return r = 1 <= arguments.length ? o.call(arguments, 0) : [], null != e ? e : e = requestAnimationFrame(function (n) {
            return function () {
              return e = null, t.apply(n, r);
            };
          }(this));
        };
      }, e.dispatch = function (t, e) {
        var r, o, i, s, a, u;
        return a = null != e ? e : {}, u = a.target, r = a.cancelable, o = a.data, i = document.createEvent("Events"), i.initEvent(t, !0, r === !0), i.data = null != o ? o : {}, i.cancelable && !n && (s = i.preventDefault, i.preventDefault = function () {
          return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
            get: function get() {
              return !0;
            }
          }), s.call(this);
        }), (null != u ? u : document).dispatchEvent(i), i;
      }, n = function () {
        var t;
        return t = document.createEvent("Events"), t.initEvent("test", !0, !0), t.preventDefault(), t.defaultPrevented;
      }(), e.match = function (t, e) {
        return r.call(t, e);
      }, r = function () {
        var t, e, r, n;
        return t = document.documentElement, null != (e = null != (r = null != (n = t.matchesSelector) ? n : t.webkitMatchesSelector) ? r : t.msMatchesSelector) ? e : t.mozMatchesSelector;
      }(), e.uuid = function () {
        var t, e, r;

        for (r = "", t = e = 1; 36 >= e; t = ++e) {
          r += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
        }

        return r;
      };
    }).call(this), function () {
      e.Location = function () {
        function t(t) {
          var e, r;
          null == t && (t = ""), r = document.createElement("a"), r.href = t.toString(), this.absoluteURL = r.href, e = r.hash.length, 2 > e ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = r.hash.slice(1));
        }

        var e, r, n, o;
        return t.wrap = function (t) {
          return t instanceof this ? t : new this(t);
        }, t.prototype.getOrigin = function () {
          return this.absoluteURL.split("/", 3).join("/");
        }, t.prototype.getPath = function () {
          var t, e;
          return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/";
        }, t.prototype.getPathComponents = function () {
          return this.getPath().split("/").slice(1);
        }, t.prototype.getLastPathComponent = function () {
          return this.getPathComponents().slice(-1)[0];
        }, t.prototype.getExtension = function () {
          var t, e;
          return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : "";
        }, t.prototype.isHTML = function () {
          return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/);
        }, t.prototype.isPrefixedBy = function (t) {
          var e;
          return e = r(t), this.isEqualTo(t) || o(this.absoluteURL, e);
        }, t.prototype.isEqualTo = function (t) {
          return this.absoluteURL === (null != t ? t.absoluteURL : void 0);
        }, t.prototype.toCacheKey = function () {
          return this.requestURL;
        }, t.prototype.toJSON = function () {
          return this.absoluteURL;
        }, t.prototype.toString = function () {
          return this.absoluteURL;
        }, t.prototype.valueOf = function () {
          return this.absoluteURL;
        }, r = function r(t) {
          return e(t.getOrigin() + t.getPath());
        }, e = function e(t) {
          return n(t, "/") ? t : t + "/";
        }, o = function o(t, e) {
          return t.slice(0, e.length) === e;
        }, n = function n(t, e) {
          return t.slice(-e.length) === e;
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t, e) {
        return function () {
          return _t.apply(e, arguments);
        };
      };

      e.HttpRequest = function () {
        function r(r, n, o) {
          this.delegate = r, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(n).requestURL, this.referrer = e.Location.wrap(o).absoluteURL, this.createXHR();
        }

        return r.NETWORK_FAILURE = 0, r.TIMEOUT_FAILURE = -1, r.timeout = 60, r.prototype.send = function () {
          var t;
          return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0;
        }, r.prototype.cancel = function () {
          return this.xhr && this.sent ? this.xhr.abort() : void 0;
        }, r.prototype.requestProgressed = function (t) {
          return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0;
        }, r.prototype.requestLoaded = function () {
          return this.endRequest(function (t) {
            return function () {
              var e;
              return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText));
            };
          }(this));
        }, r.prototype.requestFailed = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE);
            };
          }(this));
        }, r.prototype.requestTimedOut = function () {
          return this.endRequest(function (t) {
            return function () {
              return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE);
            };
          }(this));
        }, r.prototype.requestCanceled = function () {
          return this.endRequest();
        }, r.prototype.notifyApplicationBeforeRequestStart = function () {
          return e.dispatch("turbolinks:request-start", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.notifyApplicationAfterRequestEnd = function () {
          return e.dispatch("turbolinks:request-end", {
            data: {
              url: this.url,
              xhr: this.xhr
            }
          });
        }, r.prototype.createXHR = function () {
          return this.xhr = new XMLHttpRequest(), this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled;
        }, r.prototype.endRequest = function (t) {
          return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0;
        }, r.prototype.setProgress = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0;
        }, r.prototype.destroy = function () {
          var t;
          return this.setProgress(1), "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t2, e) {
        return function () {
          return _t2.apply(e, arguments);
        };
      };

      e.ProgressBar = function () {
        function e() {
          this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement();
        }

        var r;
        return r = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + r + "ms ease-out, opacity " + r / 2 + "ms " + r / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function () {
          return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling());
        }, e.prototype.hide = function () {
          return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function (t) {
            return function () {
              return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1;
            };
          }(this))) : void 0;
        }, e.prototype.setValue = function (t) {
          return this.value = t, this.refresh();
        }, e.prototype.installStylesheetElement = function () {
          return document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
        }, e.prototype.installProgressElement = function () {
          return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh();
        }, e.prototype.fadeProgressElement = function (t) {
          return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * r);
        }, e.prototype.uninstallProgressElement = function () {
          return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0;
        }, e.prototype.startTrickling = function () {
          return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, r);
        }, e.prototype.stopTrickling = function () {
          return clearInterval(this.trickleInterval), this.trickleInterval = null;
        }, e.prototype.trickle = function () {
          return this.setValue(this.value + Math.random() / 100);
        }, e.prototype.refresh = function () {
          return requestAnimationFrame(function (t) {
            return function () {
              return t.progressElement.style.width = 10 + 90 * t.value + "%";
            };
          }(this));
        }, e.prototype.createStylesheetElement = function () {
          var t;
          return t = document.createElement("style"), t.type = "text/css", t.textContent = this.constructor.defaultCSS, t;
        }, e.prototype.createProgressElement = function () {
          var t;
          return t = document.createElement("div"), t.className = "turbolinks-progress-bar", t;
        }, e;
      }();
    }.call(this), function () {
      var t = function t(_t3, e) {
        return function () {
          return _t3.apply(e, arguments);
        };
      };

      e.BrowserAdapter = function () {
        function r(r) {
          this.controller = r, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar();
        }

        var n, o, i;
        return i = e.HttpRequest, n = i.NETWORK_FAILURE, o = i.TIMEOUT_FAILURE, r.prototype.visitProposedToLocationWithAction = function (t, e) {
          return this.controller.startVisitToLocationWithAction(t, e);
        }, r.prototype.visitStarted = function (t) {
          return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot();
        }, r.prototype.visitRequestStarted = function (t) {
          return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar();
        }, r.prototype.visitRequestProgressed = function (t) {
          return this.progressBar.setValue(t.progress);
        }, r.prototype.visitRequestCompleted = function (t) {
          return t.loadResponse();
        }, r.prototype.visitRequestFailedWithStatusCode = function (t, e) {
          switch (e) {
            case n:
            case o:
              return this.reload();

            default:
              return t.loadResponse();
          }
        }, r.prototype.visitRequestFinished = function (t) {
          return this.hideProgressBar();
        }, r.prototype.visitCompleted = function (t) {
          return t.followRedirect();
        }, r.prototype.pageInvalidated = function () {
          return this.reload();
        }, r.prototype.showProgressBarAfterDelay = function () {
          return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay);
        }, r.prototype.showProgressBar = function () {
          return this.progressBar.show();
        }, r.prototype.hideProgressBar = function () {
          return this.progressBar.hide(), clearTimeout(this.progressBarTimeout);
        }, r.prototype.reload = function () {
          return window.location.reload();
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t4, e) {
        return function () {
          return _t4.apply(e, arguments);
        };
      };

      e.History = function () {
        function r(e) {
          this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0;
        }, r.prototype.push = function (t, r) {
          return t = e.Location.wrap(t), this.update("push", t, r);
        }, r.prototype.replace = function (t, r) {
          return t = e.Location.wrap(t), this.update("replace", t, r);
        }, r.prototype.onPopState = function (t) {
          var r, n, o, i;
          return this.shouldHandlePopState() && (i = null != (n = t.state) ? n.turbolinks : void 0) ? (r = e.Location.wrap(window.location), o = i.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(r, o)) : void 0;
        }, r.prototype.onPageLoad = function (t) {
          return e.defer(function (t) {
            return function () {
              return t.pageLoaded = !0;
            };
          }(this));
        }, r.prototype.shouldHandlePopState = function () {
          return this.pageIsLoaded();
        }, r.prototype.pageIsLoaded = function () {
          return this.pageLoaded || "complete" === document.readyState;
        }, r.prototype.update = function (t, e, r) {
          var n;
          return n = {
            turbolinks: {
              restorationIdentifier: r
            }
          }, history[t + "State"](n, null, e);
        }, r;
      }();
    }.call(this), function () {
      e.HeadDetails = function () {
        function t(t) {
          var e, r, n, s, a, u;

          for (this.elements = {}, n = 0, a = t.length; a > n; n++) {
            u = t[n], u.nodeType === Node.ELEMENT_NODE && (s = u.outerHTML, r = null != (e = this.elements)[s] ? e[s] : e[s] = {
              type: i(u),
              tracked: o(u),
              elements: []
            }, r.elements.push(u));
          }
        }

        var e, r, n, o, i;
        return t.fromHeadElement = function (t) {
          var e;
          return new this(null != (e = null != t ? t.childNodes : void 0) ? e : []);
        }, t.prototype.hasElementWithKey = function (t) {
          return t in this.elements;
        }, t.prototype.getTrackedElementSignature = function () {
          var t, e;
          return function () {
            var r, n;
            r = this.elements, n = [];

            for (t in r) {
              e = r[t].tracked, e && n.push(t);
            }

            return n;
          }.call(this).join("");
        }, t.prototype.getScriptElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("script", t);
        }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
          return this.getElementsMatchingTypeNotInDetails("stylesheet", t);
        }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
          var r, n, o, i, s, a;
          o = this.elements, s = [];

          for (n in o) {
            i = o[n], a = i.type, r = i.elements, a !== t || e.hasElementWithKey(n) || s.push(r[0]);
          }

          return s;
        }, t.prototype.getProvisionalElements = function () {
          var t, e, r, n, o, i, s;
          r = [], n = this.elements;

          for (e in n) {
            o = n[e], s = o.type, i = o.tracked, t = o.elements, null != s || i ? t.length > 1 && r.push.apply(r, t.slice(1)) : r.push.apply(r, t);
          }

          return r;
        }, t.prototype.getMetaValue = function (t) {
          var e;
          return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0;
        }, t.prototype.findMetaElementByName = function (t) {
          var r, n, o, i;
          r = void 0, i = this.elements;

          for (o in i) {
            n = i[o].elements, e(n[0], t) && (r = n[0]);
          }

          return r;
        }, i = function i(t) {
          return r(t) ? "script" : n(t) ? "stylesheet" : void 0;
        }, o = function o(t) {
          return "reload" === t.getAttribute("data-turbolinks-track");
        }, r = function r(t) {
          var e;
          return e = t.tagName.toLowerCase(), "script" === e;
        }, n = function n(t) {
          var e;
          return e = t.tagName.toLowerCase(), "style" === e || "link" === e && "stylesheet" === t.getAttribute("rel");
        }, e = function e(t, _e) {
          var r;
          return r = t.tagName.toLowerCase(), "meta" === r && t.getAttribute("name") === _e;
        }, t;
      }();
    }.call(this), function () {
      e.Snapshot = function () {
        function t(t, e) {
          this.headDetails = t, this.bodyElement = e;
        }

        return t.wrap = function (t) {
          return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t);
        }, t.fromHTMLString = function (t) {
          var e;
          return e = document.createElement("html"), e.innerHTML = t, this.fromHTMLElement(e);
        }, t.fromHTMLElement = function (t) {
          var r, n, o, i;
          return o = t.querySelector("head"), r = null != (i = t.querySelector("body")) ? i : document.createElement("body"), n = e.HeadDetails.fromHeadElement(o), new this(n, r);
        }, t.prototype.clone = function () {
          return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0));
        }, t.prototype.getRootLocation = function () {
          var t, r;
          return r = null != (t = this.getSetting("root")) ? t : "/", new e.Location(r);
        }, t.prototype.getCacheControlValue = function () {
          return this.getSetting("cache-control");
        }, t.prototype.getElementForAnchor = function (t) {
          try {
            return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']");
          } catch (e) {}
        }, t.prototype.getPermanentElements = function () {
          return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementById = function (t) {
          return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]");
        }, t.prototype.getPermanentElementsPresentInSnapshot = function (t) {
          var e, r, n, o, i;

          for (o = this.getPermanentElements(), i = [], r = 0, n = o.length; n > r; r++) {
            e = o[r], t.getPermanentElementById(e.id) && i.push(e);
          }

          return i;
        }, t.prototype.findFirstAutofocusableElement = function () {
          return this.bodyElement.querySelector("[autofocus]");
        }, t.prototype.hasAnchor = function (t) {
          return null != this.getElementForAnchor(t);
        }, t.prototype.isPreviewable = function () {
          return "no-preview" !== this.getCacheControlValue();
        }, t.prototype.isCacheable = function () {
          return "no-cache" !== this.getCacheControlValue();
        }, t.prototype.isVisitable = function () {
          return "reload" !== this.getSetting("visit-control");
        }, t.prototype.getSetting = function (t) {
          return this.headDetails.getMetaValue("turbolinks-" + t);
        }, t;
      }();
    }.call(this), function () {
      var t = [].slice;

      e.Renderer = function () {
        function e() {}

        var r;
        return e.render = function () {
          var e, r, n, o;
          return n = arguments[0], r = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], o = function (t, e, r) {
            r.prototype = t.prototype;
            var n = new r(),
                o = t.apply(n, e);
            return Object(o) === o ? o : n;
          }(this, e, function () {}), o.delegate = n, o.render(r), o;
        }, e.prototype.renderView = function (t) {
          return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody);
        }, e.prototype.invalidateView = function () {
          return this.delegate.viewInvalidated();
        }, e.prototype.createScriptElement = function (t) {
          var e;
          return "false" === t.getAttribute("data-turbolinks-eval") ? t : (e = document.createElement("script"), e.textContent = t.textContent, e.async = !1, r(e, t), e);
        }, r = function r(t, e) {
          var r, n, o, i, s, a, u;

          for (i = e.attributes, a = [], r = 0, n = i.length; n > r; r++) {
            s = i[r], o = s.name, u = s.value, a.push(t.setAttribute(o, u));
          }

          return a;
        }, e;
      }();
    }.call(this), function () {
      var t,
          r,
          n = function n(t, e) {
        function r() {
          this.constructor = t;
        }

        for (var n in e) {
          o.call(e, n) && (t[n] = e[n]);
        }

        return r.prototype = e.prototype, t.prototype = new r(), t.__super__ = e.prototype, t;
      },
          o = {}.hasOwnProperty;

      e.SnapshotRenderer = function (e) {
        function o(t, e, r) {
          this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = r, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement;
        }

        return n(o, e), o.prototype.render = function (t) {
          return this.shouldRender() ? (this.mergeHead(), this.renderView(function (e) {
            return function () {
              return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t();
            };
          }(this))) : this.invalidateView();
        }, o.prototype.mergeHead = function () {
          return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements();
        }, o.prototype.replaceBody = function () {
          var t;
          return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t);
        }, o.prototype.shouldRender = function () {
          return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical();
        }, o.prototype.trackedElementsAreIdentical = function () {
          return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature();
        }, o.prototype.copyNewHeadStylesheetElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadStylesheetElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadScriptElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadScriptElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(this.createScriptElement(t)));
          }

          return o;
        }, o.prototype.removeCurrentHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getCurrentHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.removeChild(t));
          }

          return o;
        }, o.prototype.copyNewHeadProvisionalElements = function () {
          var t, e, r, n, o;

          for (n = this.getNewHeadProvisionalElements(), o = [], e = 0, r = n.length; r > e; e++) {
            t = n[e], o.push(document.head.appendChild(t));
          }

          return o;
        }, o.prototype.relocateCurrentBodyPermanentElements = function () {
          var e, n, o, i, s, a, u;

          for (a = this.getCurrentBodyPermanentElements(), u = [], e = 0, n = a.length; n > e; e++) {
            i = a[e], s = t(i), o = this.newSnapshot.getPermanentElementById(i.id), r(i, s.element), r(o, i), u.push(s);
          }

          return u;
        }, o.prototype.replacePlaceholderElementsWithClonedPermanentElements = function (t) {
          var e, n, o, i, s, a, u;

          for (u = [], o = 0, i = t.length; i > o; o++) {
            a = t[o], n = a.element, s = a.permanentElement, e = s.cloneNode(!0), u.push(r(n, e));
          }

          return u;
        }, o.prototype.activateNewBodyScriptElements = function () {
          var t, e, n, o, i, s;

          for (i = this.getNewBodyScriptElements(), s = [], e = 0, o = i.length; o > e; e++) {
            n = i[e], t = this.createScriptElement(n), s.push(r(n, t));
          }

          return s;
        }, o.prototype.assignNewBody = function () {
          return document.body = this.newBody;
        }, o.prototype.focusFirstAutofocusableElement = function () {
          var t;
          return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0;
        }, o.prototype.getNewHeadStylesheetElements = function () {
          return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getNewHeadScriptElements = function () {
          return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails);
        }, o.prototype.getCurrentHeadProvisionalElements = function () {
          return this.currentHeadDetails.getProvisionalElements();
        }, o.prototype.getNewHeadProvisionalElements = function () {
          return this.newHeadDetails.getProvisionalElements();
        }, o.prototype.getCurrentBodyPermanentElements = function () {
          return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot);
        }, o.prototype.getNewBodyScriptElements = function () {
          return this.newBody.querySelectorAll("script");
        }, o;
      }(e.Renderer), t = function t(_t5) {
        var e;
        return e = document.createElement("meta"), e.setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", _t5.id), {
          element: e,
          permanentElement: _t5
        };
      }, r = function r(t, e) {
        var r;
        return (r = t.parentNode) ? r.replaceChild(e, t) : void 0;
      };
    }.call(this), function () {
      var t = function t(_t6, e) {
        function n() {
          this.constructor = _t6;
        }

        for (var o in e) {
          r.call(e, o) && (_t6[o] = e[o]);
        }

        return n.prototype = e.prototype, _t6.prototype = new n(), _t6.__super__ = e.prototype, _t6;
      },
          r = {}.hasOwnProperty;

      e.ErrorRenderer = function (e) {
        function r(t) {
          var e;
          e = document.createElement("html"), e.innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body");
        }

        return t(r, e), r.prototype.render = function (t) {
          return this.renderView(function (e) {
            return function () {
              return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t();
            };
          }(this));
        }, r.prototype.replaceHeadAndBody = function () {
          var t, e;
          return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t);
        }, r.prototype.activateBodyScriptElements = function () {
          var t, e, r, n, o, i;

          for (n = this.getScriptElements(), i = [], e = 0, r = n.length; r > e; e++) {
            o = n[e], t = this.createScriptElement(o), i.push(o.parentNode.replaceChild(t, o));
          }

          return i;
        }, r.prototype.getScriptElements = function () {
          return document.documentElement.querySelectorAll("script");
        }, r;
      }(e.Renderer);
    }.call(this), function () {
      e.View = function () {
        function t(t) {
          this.delegate = t, this.htmlElement = document.documentElement;
        }

        return t.prototype.getRootLocation = function () {
          return this.getSnapshot().getRootLocation();
        }, t.prototype.getElementForAnchor = function (t) {
          return this.getSnapshot().getElementForAnchor(t);
        }, t.prototype.getSnapshot = function () {
          return e.Snapshot.fromHTMLElement(this.htmlElement);
        }, t.prototype.render = function (t, e) {
          var r, n, o;
          return o = t.snapshot, r = t.error, n = t.isPreview, this.markAsPreview(n), null != o ? this.renderSnapshot(o, n, e) : this.renderError(r, e);
        }, t.prototype.markAsPreview = function (t) {
          return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview");
        }, t.prototype.renderSnapshot = function (t, r, n) {
          return e.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), e.Snapshot.wrap(t), r);
        }, t.prototype.renderError = function (t, r) {
          return e.ErrorRenderer.render(this.delegate, r, t);
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t7, e) {
        return function () {
          return _t7.apply(e, arguments);
        };
      };

      e.ScrollManager = function () {
        function r(r) {
          this.delegate = r, this.onScroll = t(this.onScroll, this), this.onScroll = e.throttle(this.onScroll);
        }

        return r.prototype.start = function () {
          return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0);
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0;
        }, r.prototype.scrollToElement = function (t) {
          return t.scrollIntoView();
        }, r.prototype.scrollToPosition = function (t) {
          var e, r;
          return e = t.x, r = t.y, window.scrollTo(e, r);
        }, r.prototype.onScroll = function (t) {
          return this.updatePosition({
            x: window.pageXOffset,
            y: window.pageYOffset
          });
        }, r.prototype.updatePosition = function (t) {
          var e;
          return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0;
        }, r;
      }();
    }.call(this), function () {
      e.SnapshotCache = function () {
        function t(t) {
          this.size = t, this.keys = [], this.snapshots = {};
        }

        var r;
        return t.prototype.has = function (t) {
          var e;
          return e = r(t), e in this.snapshots;
        }, t.prototype.get = function (t) {
          var e;
          if (this.has(t)) return e = this.read(t), this.touch(t), e;
        }, t.prototype.put = function (t, e) {
          return this.write(t, e), this.touch(t), e;
        }, t.prototype.read = function (t) {
          var e;
          return e = r(t), this.snapshots[e];
        }, t.prototype.write = function (t, e) {
          var n;
          return n = r(t), this.snapshots[n] = e;
        }, t.prototype.touch = function (t) {
          var e, n;
          return n = r(t), e = this.keys.indexOf(n), e > -1 && this.keys.splice(e, 1), this.keys.unshift(n), this.trim();
        }, t.prototype.trim = function () {
          var t, e, r, n, o;

          for (n = this.keys.splice(this.size), o = [], t = 0, r = n.length; r > t; t++) {
            e = n[t], o.push(delete this.snapshots[e]);
          }

          return o;
        }, r = function r(t) {
          return e.Location.wrap(t).toCacheKey();
        }, t;
      }();
    }.call(this), function () {
      var t = function t(_t8, e) {
        return function () {
          return _t8.apply(e, arguments);
        };
      };

      e.Visit = function () {
        function r(r, n, o) {
          this.controller = r, this.action = o, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(n), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {};
        }

        var n;
        return r.prototype.start = function () {
          return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0;
        }, r.prototype.cancel = function () {
          var t;
          return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0;
        }, r.prototype.complete = function () {
          var t;
          return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0;
        }, r.prototype.fail = function () {
          var t;
          return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0;
        }, r.prototype.changeHistory = function () {
          var t, e;
          return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0);
        }, r.prototype.issueRequest = function () {
          return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0;
        }, r.prototype.getCachedSnapshot = function () {
          var t;
          return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t;
        }, r.prototype.hasCachedSnapshot = function () {
          return null != this.getCachedSnapshot();
        }, r.prototype.loadCachedSnapshot = function () {
          var t, e;
          return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function () {
            var r;
            return this.cacheSnapshot(), this.controller.render({
              snapshot: e,
              isPreview: t
            }, this.performScroll), "function" == typeof (r = this.adapter).visitRendered && r.visitRendered(this), t ? void 0 : this.complete();
          })) : void 0;
        }, r.prototype.loadResponse = function () {
          return null != this.response ? this.render(function () {
            var t, e;
            return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
              error: this.response
            }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
              snapshot: this.response
            }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.complete());
          }) : void 0;
        }, r.prototype.followRedirect = function () {
          return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0;
        }, r.prototype.requestStarted = function () {
          var t;
          return this.recordTimingMetric("requestStart"), "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0;
        }, r.prototype.requestProgressed = function (t) {
          var e;
          return this.progress = t, "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0;
        }, r.prototype.requestCompletedWithResponse = function (t, r) {
          return this.response = t, null != r && (this.redirectedToLocation = e.Location.wrap(r)), this.adapter.visitRequestCompleted(this);
        }, r.prototype.requestFailedWithStatusCode = function (t, e) {
          return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t);
        }, r.prototype.requestFinished = function () {
          var t;
          return this.recordTimingMetric("requestEnd"), "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0;
        }, r.prototype.performScroll = function () {
          return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0);
        }, r.prototype.scrollToRestoredPosition = function () {
          var t, e;
          return t = null != (e = this.restorationData) ? e.scrollPosition : void 0, null != t ? (this.controller.scrollToPosition(t), !0) : void 0;
        }, r.prototype.scrollToAnchor = function () {
          return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0;
        }, r.prototype.scrollToTop = function () {
          return this.controller.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.recordTimingMetric = function (t) {
          var e;
          return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = new Date().getTime();
        }, r.prototype.getTimingMetrics = function () {
          return e.copyObject(this.timingMetrics);
        }, n = function n(t) {
          switch (t) {
            case "replace":
              return "replaceHistoryWithLocationAndRestorationIdentifier";

            case "advance":
            case "restore":
              return "pushHistoryWithLocationAndRestorationIdentifier";
          }
        }, r.prototype.shouldIssueRequest = function () {
          return "restore" === this.action ? !this.hasCachedSnapshot() : !0;
        }, r.prototype.cacheSnapshot = function () {
          return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0);
        }, r.prototype.render = function (t) {
          return this.cancelRender(), this.frame = requestAnimationFrame(function (e) {
            return function () {
              return e.frame = null, t.call(e);
            };
          }(this));
        }, r.prototype.cancelRender = function () {
          return this.frame ? cancelAnimationFrame(this.frame) : void 0;
        }, r;
      }();
    }.call(this), function () {
      var t = function t(_t9, e) {
        return function () {
          return _t9.apply(e, arguments);
        };
      };

      e.Controller = function () {
        function r() {
          this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500);
        }

        return r.prototype.start = function () {
          return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0;
        }, r.prototype.disable = function () {
          return this.enabled = !1;
        }, r.prototype.stop = function () {
          return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0;
        }, r.prototype.clearCache = function () {
          return this.cache = new e.SnapshotCache(10);
        }, r.prototype.visit = function (t, r) {
          var n, o;
          return null == r && (r = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (o = r.action) ? o : "advance", this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0;
        }, r.prototype.startVisitToLocationWithAction = function (t, r, n) {
          var o;
          return e.supported ? (o = this.getRestorationDataForIdentifier(n), this.startVisit(t, r, {
            restorationData: o
          })) : window.location = t;
        }, r.prototype.setProgressBarDelay = function (t) {
          return this.progressBarDelay = t;
        }, r.prototype.startHistory = function () {
          return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.stopHistory = function () {
          return this.history.stop();
        }, r.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier);
        }, r.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, r) {
          return this.restorationIdentifier = r, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier);
        }, r.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, r) {
          var n;
          return this.restorationIdentifier = r, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
            restorationIdentifier: this.restorationIdentifier,
            restorationData: n,
            historyChanged: !0
          }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated();
        }, r.prototype.getCachedSnapshotForLocation = function (t) {
          var e;
          return null != (e = this.cache.get(t)) ? e.clone() : void 0;
        }, r.prototype.shouldCacheSnapshot = function () {
          return this.view.getSnapshot().isCacheable();
        }, r.prototype.cacheSnapshot = function () {
          var t, r;
          return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), r = this.view.getSnapshot(), t = this.lastRenderedLocation, e.defer(function (e) {
            return function () {
              return e.cache.put(t, r.clone());
            };
          }(this))) : void 0;
        }, r.prototype.scrollToAnchor = function (t) {
          var e;
          return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
            x: 0,
            y: 0
          });
        }, r.prototype.scrollToElement = function (t) {
          return this.scrollManager.scrollToElement(t);
        }, r.prototype.scrollToPosition = function (t) {
          return this.scrollManager.scrollToPosition(t);
        }, r.prototype.scrollPositionChanged = function (t) {
          var e;
          return e = this.getCurrentRestorationData(), e.scrollPosition = t;
        }, r.prototype.render = function (t, e) {
          return this.view.render(t, e);
        }, r.prototype.viewInvalidated = function () {
          return this.adapter.pageInvalidated();
        }, r.prototype.viewWillRender = function (t) {
          return this.notifyApplicationBeforeRender(t);
        }, r.prototype.viewRendered = function () {
          return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender();
        }, r.prototype.pageLoaded = function () {
          return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad();
        }, r.prototype.clickCaptured = function () {
          return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1);
        }, r.prototype.clickBubbled = function (t) {
          var e, r, n;
          return this.enabled && this.clickEventIsSignificant(t) && (r = this.getVisitableLinkForNode(t.target)) && (n = this.getVisitableLocationForLink(r)) && this.applicationAllowsFollowingLinkToLocation(r, n) ? (t.preventDefault(), e = this.getActionForLink(r), this.visit(n, {
            action: e
          })) : void 0;
        }, r.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
          var r;
          return r = this.notifyApplicationAfterClickingLinkToLocation(t, e), !r.defaultPrevented;
        }, r.prototype.applicationAllowsVisitingLocation = function (t) {
          var e;
          return e = this.notifyApplicationBeforeVisitingLocation(t), !e.defaultPrevented;
        }, r.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, r) {
          return e.dispatch("turbolinks:click", {
            target: t,
            data: {
              url: r.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
          return e.dispatch("turbolinks:before-visit", {
            data: {
              url: t.absoluteURL
            },
            cancelable: !0
          });
        }, r.prototype.notifyApplicationAfterVisitingLocation = function (t) {
          return e.dispatch("turbolinks:visit", {
            data: {
              url: t.absoluteURL
            }
          });
        }, r.prototype.notifyApplicationBeforeCachingSnapshot = function () {
          return e.dispatch("turbolinks:before-cache");
        }, r.prototype.notifyApplicationBeforeRender = function (t) {
          return e.dispatch("turbolinks:before-render", {
            data: {
              newBody: t
            }
          });
        }, r.prototype.notifyApplicationAfterRender = function () {
          return e.dispatch("turbolinks:render");
        }, r.prototype.notifyApplicationAfterPageLoad = function (t) {
          return null == t && (t = {}), e.dispatch("turbolinks:load", {
            data: {
              url: this.location.absoluteURL,
              timing: t
            }
          });
        }, r.prototype.startVisit = function (t, e, r) {
          var n;
          return null != (n = this.currentVisit) && n.cancel(), this.currentVisit = this.createVisit(t, e, r), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t);
        }, r.prototype.createVisit = function (t, r, n) {
          var o, i, s, a, u;
          return i = null != n ? n : {}, a = i.restorationIdentifier, s = i.restorationData, o = i.historyChanged, u = new e.Visit(this, t, r), u.restorationIdentifier = null != a ? a : e.uuid(), u.restorationData = e.copyObject(s), u.historyChanged = o, u.referrer = this.location, u;
        }, r.prototype.visitCompleted = function (t) {
          return this.notifyApplicationAfterPageLoad(t.getTimingMetrics());
        }, r.prototype.clickEventIsSignificant = function (t) {
          return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey);
        }, r.prototype.getVisitableLinkForNode = function (t) {
          return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target]):not([download])") : void 0;
        }, r.prototype.getVisitableLocationForLink = function (t) {
          var r;
          return r = new e.Location(t.getAttribute("href")), this.locationIsVisitable(r) ? r : void 0;
        }, r.prototype.getActionForLink = function (t) {
          var e;
          return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance";
        }, r.prototype.nodeIsVisitable = function (t) {
          var r;
          return (r = e.closest(t, "[data-turbolinks]")) ? "false" !== r.getAttribute("data-turbolinks") : !0;
        }, r.prototype.locationIsVisitable = function (t) {
          return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML();
        }, r.prototype.getCurrentRestorationData = function () {
          return this.getRestorationDataForIdentifier(this.restorationIdentifier);
        }, r.prototype.getRestorationDataForIdentifier = function (t) {
          var e;
          return null != (e = this.restorationData)[t] ? e[t] : e[t] = {};
        }, r;
      }();
    }.call(this), function () {
      !function () {
        var t, e;
        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning")) for (; t = t.parentNode;) {
          if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML);
        }
      }();
    }.call(this), function () {
      var t, r, n;
      e.start = function () {
        return r() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0;
      }, r = function r() {
        return null == window.Turbolinks && (window.Turbolinks = e), n();
      }, t = function t() {
        var t;
        return t = new e.Controller(), t.adapter = new e.BrowserAdapter(t), t;
      }, n = function n() {
        return window.Turbolinks === e;
      }, n() && e.start();
    }.call(this);
  }).call(this), "object" == ( false ? undefined : _typeof(module)) && module.exports ? module.exports = e :  true && !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=application-a4e92b1029ca4abd09bf.js.map