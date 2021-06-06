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

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/app/javascript/packs/application.js: Unexpected token (12:0)\n\n  10 | import * as ActiveStorage from \"@rails/activestorage\"\n  11 | import \"channels\"\n> 12 | <<<<<<< HEAD\n     | ^\n  13 | import  \"../layouts/application.css\";\n  14 | <<<<<<< HEAD\n  15 | ;\n    at Parser._raise (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/parser/lib/index.js:776:17)\n    at Parser.raiseWithData (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/parser/lib/index.js:769:17)\n    at Parser.raise (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/parser/lib/index.js:737:17)\n    at Parser.unexpected (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/parser/lib/index.js:9735:16)\n    at Parser.parseExprAtom (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/parser/lib/index.js:11131:20)\n    at Parser.parseExprSubscripts (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/parser/lib/index.js:10708:23)\n    at Parser.parseUpdate (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/parser/lib/index.js:10688:21)\n    at Parser.parseMaybeUnary (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/parser/lib/index.js:10666:23)\n    at Parser.parseExprOps (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/parser/lib/index.js:10523:23)\n    at Parser.parseMaybeConditional (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/parser/lib/index.js:10497:23)\n    at Parser.parseMaybeAssign (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/parser/lib/index.js:10460:21)\n    at Parser.parseExpressionBase (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/parser/lib/index.js:10405:23)\n    at /home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/parser/lib/index.js:10399:39\n    at Parser.allowInAnd (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/parser/lib/index.js:12098:16)\n    at Parser.parseExpression (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/parser/lib/index.js:10399:17)\n    at Parser.parseStatementContent (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/parser/lib/index.js:12390:23)\n    at Parser.parseStatement (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/parser/lib/index.js:12259:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/parser/lib/index.js:12845:25)\n    at Parser.parseBlockBody (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/parser/lib/index.js:12836:10)\n    at Parser.parseProgram (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/parser/lib/index.js:12190:10)\n    at Parser.parseTopLevel (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/parser/lib/index.js:12181:25)\n    at Parser.parse (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/parser/lib/index.js:13892:10)\n    at parse (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/parser/lib/index.js:13944:38)\n    at parser (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/core/lib/transformation/normalize-file.js:55:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/home/alonso/curso_full_stack/prueba_final/app_safety_solutioncr/node_modules/@babel/core/lib/transform.js:19:41)");

/***/ })

/******/ });
//# sourceMappingURL=application-1bdbe8aa8bc60468cf77.js.map