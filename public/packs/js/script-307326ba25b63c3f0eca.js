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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/script.js":
/*!****************************************!*\
  !*** ./app/javascript/packs/script.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var code = document.querySelector('#codigo');
var image = document.querySelector('#user-image');
var name = document.querySelector('#name');
var company = document.querySelector('#company');
var date = document.querySelector('#date');
var logText = document.querySelector('#log-text');
var logIcon = document.querySelector('#log-icon');
var locationText = document.querySelector('#location-text');
var authContainer = document.querySelector('.auth-status');
var authText = document.querySelector('#auth-text');
var urlParms = new URLSearchParams(window.location.search);
var locationParam = urlParms.get('location');
var loading = document.querySelector('.loading-container');
loading.style.display = 'none';

function reset() {
  code.value = '';
  image.src = 'https://image.flaticon.com/icons/svg/21/21104.svg';
  name.textContent = '';
  company.textContent = '';
  date.textContent = '';
  logText.textContent = '';
  authText.textContent = '';
  authContainer.classList.remove('unauthorized', 'autorized');
  logIcon.classList.remove('fa-sign-in', 'fa-sign-out');
}

locationText.textContent = capitalize(locationParam);

function onClick() {
  loading.style.display = 'flex';
  fetch('https://preprod.linkaform.com/api/infosync/scripts/run/', {
    method: 'POST',
    body: JSON.stringify({
      script_id: 55050,
      location: locationParam,
      code: code.value
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    if (res.success) {
      image.src = res.response.user_pic.file_url;
      name.textContent = res.response.user_name;
      company.textContent = res.response.company;
      date.textContent = res.response.date;

      if (res.response.log_type === 'check-in') {
        logText.textContent = 'Entrada';
        logIcon.classList.remove('fa-sign-out');
        logIcon.classList.add('fa-sign-in');
      } else {
        logText.textContent = 'Salida';
        logIcon.classList.remove('fa-sign-in');
        logIcon.classList.add('fa-sign-out');
      }

      if (res.response.status === 'Authorized') {
        authText.textContent = 'Autorizado';
        authContainer.classList.remove('unauthorized');
        authContainer.classList.add('autorized');
      } else {
        authText.textContent = 'Desautorizado';
        authContainer.classList.remove('autorized');
        authContainer.classList.add('unauthorized');
      }
    }
  })["finally"](function () {
    loading.style.display = 'none';
    setTimeout(function () {
      reset();
    }, 5000);
  });
}

;

function capitalize(string) {
  if (string) {
    return string.replace('_', ' ').split(' ').map(function (str) {
      return "".concat(str.charAt(0).toUpperCase()).concat(str.slice(1));
    }).join(' ');
  }

  return '';
}

;

/***/ })

/******/ });
//# sourceMappingURL=script-307326ba25b63c3f0eca.js.map