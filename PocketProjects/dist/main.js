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

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/***/ (() => {

eval("const clockElement = document.getElementById('clock');\nclass Clock {\n    constructor() {\n        let time = new Date();\n        this.hours = time.getHours();\n        this.minutes = time.getMinutes();\n        this.seconds = time.getSeconds();\n        this.tick();\n    }\n\n    printTime() {\n        var minutes = this.minutes;\n        if (this.minutes < 10) \n            var minutes = `0${this.minutes}`\n        var seconds = this.seconds;\n        if (this.seconds < 10) \n            var seconds = `0${this.seconds}`\n        return `${this.hours}:${minutes}:${seconds}`;\n    }\n\n    tick() {\n        let that = this;\n        setInterval(function() {\n            clockElement.innerText = that.printTime();\n            that.seconds += 1;\n            if (that.seconds === 60) {\n                that.minutes += 1;\n                that.seconds = 0;\n            } if (that.minutes === 60) {\n                that.hours += 1;\n                that.minutes = 0;\n            } \n            if (that.hours === 24) {\n                that.hours = 0;\n            }\n            \n        }, 1000);\n    }\n}\n\nconst clock = new Clock();\n\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/***/ (() => {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\n\n// Create an a tag\n// Set the a tag's innerHTML to be the dog's name\n// Set the a tag's href to be the dog's information link\n// Create a li tag\n// Give the li tag the class of 'dog-link'\n// Append the a tag to the li tag\n// Push the completed li into an array of the dog links completed so far.\n\nfunction dogLinkCreator() {\n  let dogLinks = [];\n  let names = Object.keys(dogs);\n  let links = Object.values(dogs);\n  for(let i =0; i < names.length; i++){\n    let aTag = document.createElement('a');  \n    aTag.innerHTML = names[i];\n    aTag.href = links[i];\n    let li = document.createElement('li')\n    li.appendChild(aTag)\n    li.className = 'dog-link';\n    dogLinks.push(li)\n  }\n  return dogLinks\n}\n \n\n\nlet dropDown = document.getElementsByClassName(\"drop-down-dog-list\")[0];\ndropDown.className = \"drop-down-dog-list hidden\";\n\nfunction attachDogLinks(){\n  let dogLinks = dogLinkCreator();  \n  for(let dog of dogLinks){\n    dropDown.append(dog);\n  }\n}\nattachDogLinks();\n\nfunction dropDownEffect(){\n  let nav = document.getElementsByClassName(\"drop-down-dog-nav\")[0]\n  nav.addEventListener('mouseout', function(){\n    //make the stuff disappear essentially\n    dropDown.className = \"drop-down-dog-list hidden\";\n  })\n\n  nav.addEventListener('mouseover', function() {\n    dropDown.className = \"drop-down-dog-list\";\n  })\n}\n\ndropDownEffect();\n\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_clock__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/***/ (() => {

eval("let todos = []\nlet ul = document.getElementsByClassName(\"todos\")[0]    \nlet form = document.getElementsByClassName(\"add-todo-form\")[0]\n\nfunction addTodo() {\n    form.addEventListener('submit', function(e) {\n        e.preventDefault();\n        let value = form.children[0].value;\n        form.children[0].value = '';\n        let newTodo = {value: value, done : false};\n        localStorage.setItem(value, JSON.stringify(newTodo));\n        todos.push(newTodo)\n        populateList();\n    })\n\n    if (todos.length === 0) {\n        for (let i = 0; i < localStorage.length; i++) {\n            const key = localStorage.key(i);\n            todos.push(JSON.parse(localStorage.getItem(key)));\n            populateList();\n        }\n    }\n}\n\n// <input type=\"checkbox\" name=\"\" id=\"\" />\naddTodo();\nfunction populateList() {\n    if (todos.length > 0) {\n        let todo = todos[todos.length-1]\n        let label = document.createElement('label');\n        label.innerText = todo.value;\n        let checkbox = document.createElement(\"INPUT\");\n        checkbox.setAttribute(\"type\", \"checkbox\");\n        let li = document.createElement('li');\n        li.append(label);\n        li.append(checkbox);\n        ul.append(li);\n    }\n}\n\npopulateList();\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlGenerator\": () => (/* binding */ htmlGenerator)\n/* harmony export */ });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    let myP = document.createElement(\"p\");\n    myP.innerText = string;\n    htmlElement.appendChild(myP) \n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;