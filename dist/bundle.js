/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class Collapsible {\r\n  constructor(element) {\r\n    this.element = element;\r\n    this.header = this.element.querySelector(\".collapsible-header\");\r\n    this.content = this.element.querySelector(\".collapsible-content\");\r\n\r\n    this.header.addEventListener(\"click\", () => this.toggle());\r\n  }\r\n\r\n  toggle() {\r\n    this.content.classList.toggle(\"active\");\r\n    if (this.content.classList.contains(\"active\")) {\r\n      this.content.style.maxHeight = this.content.scrollHeight + \"px\"; // Устанавливаем высоту\r\n    } else {\r\n      this.content.style.maxHeight = null; // Сбрасываем высоту\r\n    }\r\n  }\r\n}\r\n\r\ndocument.querySelectorAll(\".collapsible\").forEach((collapsible) => {\r\n  new Collapsible(collapsible);\r\n});\r\n\n\n//# sourceURL=webpack://peredelka7/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;