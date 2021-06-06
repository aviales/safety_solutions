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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/carousel.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/carousel.js":
/*!******************************************!*\
  !*** ./app/javascript/packs/carousel.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// (function(window) {
//   let blocks;
//   let currentStage = 1;
//   // Initialize and setup carousel when DOM is ready
//   document.addEventListener("DOMContentLoaded", () => {
//     const carousel = document.getElementById("carousel");
//     const carouselStage = document.getElementById("carousel-stage");
//     const carouselItems = document.getElementsByClassName("carousel-item");
//     // carousel control buttons
//     const prevButton =  document.getElementById("prev-button");
//     const nextButton =  document.getElementById("next-button");
//     const carouselItemWidth = carouselItems[0].clientWidth
//       + parseInt(window.getComputedStyle(carouselItems[0]).getPropertyValue("margin-right").replace("px",""));
//     const carouselWidth = carousel.clientWidth;
//     const carouselItemsLength = carouselItems.length;
//     // setup carousel
//     setupCarousel();
//     prevButton.addEventListener("click", function () {
//       if (currentStage !== 1) {
//         const prevValue = currentStage - 1;
//         moveCarousel(prevValue);
//         return prevValue === 1
//           ? disableButton(prevButton)
//           : enableButton(prevButton);
//       }
//     });
//     nextButton.addEventListener("click", function () {
//       if (currentStage + 1 <= blocks) {
//         const nextValue = currentStage + 1;
//         moveCarousel(nextValue);
//         return nextValue >= blocks
//           ? disableButton(nextButton)
//           : enableButton(nextButton);
//       }
//     });
//     // setting up carousel
//     function setupCarousel () {
//       const itemsPerBlock = carouselWidth / carouselItemWidth;
//       blocks = Math.ceil(carouselItemsLength / itemsPerBlock);
//       const stageLeftValue = Math.abs(
//         parseInt(window.getComputedStyle(carouselStage).getPropertyValue("left").replace("px",""))
//       );
//       if (stageLeftValue === 0) {
//         currentStage = 1;
//       } else {
//         currentStage = Math.round((stageLeftValue / carouselWidth) + 1);
//       }
//       prevButton.disabled = false;
//       nextButton.disabled = false;
//     }
//     // move carousel function from left to right
//     function moveCarousel (blocks) {
//       const currentValue = parseInt(window.getComputedStyle(carouselStage).getPropertyValue("left").replace("px",""));
//       if (blocks < currentStage) {
//         carouselStage.style.left = `${currentValue + carouselWidth}px`;
//       } else {
//         carouselStage.style.left = `${currentValue - carouselWidth}px`;
//       }
//       setupCarousel();
//     }
//     // utility function for disabling a button
//     function disableButton (button) {
//       return button.disabled = true;
//     }
//     // utility function for enabling a button
//     function enableButton (button) {
//       return button.disabled = false;
//     }
//   });
// })(window);

/***/ })

/******/ });
//# sourceMappingURL=carousel-0e8400257f26d194ce33.js.map