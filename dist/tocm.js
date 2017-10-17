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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    var init = function init() {
        var toc = document.getElementById("toc");
        if (toc) {
            console.log("test");
            buildToc(toc);
        }
    };
    var buildToc = function buildToc(element) {
        var headers = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
        var tocDatas = [];
        var id = 0;

        var createArray = function createArray(elem, index, array) {
            tocDatas.push({
                level: parseInt(elem.tagName.replace(/h/, ""), 10),
                id: id
            });
            id++;
        };
        Array.prototype.forEach.call(headers, createArray);

        //const fragment = document.createDocumentFragment();

        var renderer = function renderer(data, index, array) {
            console.log(data);
            //const ul = fragment.appendChild(document.createElement("ul"));
            //const li = ul.appendChild(document.createElement("li"));
            //li.appendChild(document.createTextNode(elem.textContent));
        };
        Array.prototype.forEach.call(tocDatas, renderer);
        //element.appendChild(fragment);
    };

    var timer = void 0;

    var domCheck = function domCheck() {
        var toc = document.getElementById("toc");
        if (toc) {
            init();
            clearInterval(timer);
            return;
        }
    };

    var load = function load() {
        timer = window.setInterval(domCheck, 100);
    };

    document.addEventListener("DOMContentLoaded", load, false);
})();

/***/ })
/******/ ]);