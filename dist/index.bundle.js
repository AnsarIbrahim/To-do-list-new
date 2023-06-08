/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: sans-serif;\r\n}\r\n\r\nli {\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\ninput,\r\ninput:active,\r\ninput:focus {\r\n  background-color: transparent;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\nbutton,\r\nbutton:active,\r\nbutton:focus {\r\n  background-color: transparent;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\nbutton:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.flex {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.section {\r\n  width: 100%;\r\n  margin-top: 5%;\r\n}\r\n\r\n.container {\r\n  width: 100%;\r\n  max-width: 500px;\r\n}\r\n\r\n.todolist_container {\r\n  width: 100%;\r\n  background-color: whitesmoke;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  row-gap: 1px;\r\n  box-shadow: 1px 1px 5px gray;\r\n}\r\n\r\nh2 {\r\n  padding: 2%;\r\n  background-color: white;\r\n  font-size: 20px;\r\n  font-weight: lighter;\r\n}\r\n\r\n.refresh {\r\n  float: right;\r\n  color: rgb(142, 147, 151);\r\n  cursor: pointer;\r\n  padding-right: 1%;\r\n  font-size: initial;\r\n  padding-top: 2%;\r\n}\r\n\r\ninput::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\n.input_list {\r\n  padding: 2%;\r\n  width: 100%;\r\n  background: white;\r\n  margin-top: -1%;\r\n  margin-bottom: 1%;\r\n}\r\n\r\n.input-todo {\r\n  width: 85%;\r\n  border: none;\r\n  padding: 5px;\r\n  cursor: pointer;\r\n  margin-top: -1%;\r\n}\r\n\r\n.input_btn {\r\n  padding-left: 10%;\r\n}\r\n\r\n.enter {\r\n  color: rgb(142, 147, 151);\r\n}\r\n\r\n.todo_list {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  background-color: whitesmoke;\r\n  row-gap: 5px;\r\n}\r\n\r\nul > li {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 20px;\r\n  padding: 2%;\r\n  background-color: white;\r\n}\r\n\r\n.input_todo {\r\n  padding: 2%;\r\n}\r\n\r\n.text_input {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.dots_btn {\r\n  width: 100%;\r\n}\r\n\r\n.dots {\r\n  float: right;\r\n  padding: 4%;\r\n}\r\n\r\n.clear_list {\r\n  text-align: center;\r\n  background-color: whitesmoke;\r\n  margin-top: -3%;\r\n}\r\n\r\n.clear_btn {\r\n  padding: 2%;\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n  font-weight: lighter;\r\n}\r\n\r\n.completed .text_input {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.selected {\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.delete_btn {\r\n  padding-right: 1%;\r\n}\r\n\r\n.input_todo_edit {\r\n  width: 85%;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-new/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-new/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list-new/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list-new/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list-new/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list-new/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list-new/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list-new/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list-new/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list-new/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/taskFunctions.js */ \"./src/modules/taskFunctions.js\");\n/* harmony import */ var _modules_renderFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderFunctions.js */ \"./src/modules/renderFunctions.js\");\n/* harmony import */ var _modules_addTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/addTask.js */ \"./src/modules/addTask.js\");\n/* harmony import */ var _modules_completeStatus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/completeStatus.js */ \"./src/modules/completeStatus.js\");\n\n\n\n\n\n\nconst taskForm = document.getElementById('task-form');\nconst clearAllBtn = document.getElementById('clear-all-btn');\n\ntaskForm.addEventListener('submit', (event) => {\n  event.preventDefault();\n  const inputTask = document.getElementById('new_task');\n  const description = inputTask.value.trim();\n\n  if (description !== '') {\n    (0,_modules_addTask_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(description);\n    inputTask.value = '';\n  }\n});\n\n(0,_modules_taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.loadTasks)();\n(0,_modules_renderFunctions_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nclearAllBtn.addEventListener('click', _modules_completeStatus_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\n\n//# sourceURL=webpack://to-do-list-new/./src/index.js?");

/***/ }),

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addTask)\n/* harmony export */ });\n/* harmony import */ var _taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskFunctions.js */ \"./src/modules/taskFunctions.js\");\n/* harmony import */ var _renderFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderFunctions.js */ \"./src/modules/renderFunctions.js\");\n\n\n\nfunction addTask(description) {\n  const newTask = {\n    description,\n    completed: false,\n    index: _taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.tasks.length + 1,\n  };\n\n  _taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.tasks.push(newTask);\n  (0,_taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.saveTasks)();\n  (0,_renderFunctions_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://to-do-list-new/./src/modules/addTask.js?");

/***/ }),

/***/ "./src/modules/clearAll.js":
/*!*********************************!*\
  !*** ./src/modules/clearAll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ updateClearAllButton)\n/* harmony export */ });\n/* harmony import */ var _taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskFunctions.js */ \"./src/modules/taskFunctions.js\");\n\n\nconst clearAllBtn = document.getElementById('clear-all-btn');\n\nfunction updateClearAllButton() {\n  const completedTasks = _taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.tasks.some((task) => task.completed);\n  clearAllBtn.disabled = !completedTasks;\n}\n\n\n//# sourceURL=webpack://to-do-list-new/./src/modules/clearAll.js?");

/***/ }),

/***/ "./src/modules/completeStatus.js":
/*!***************************************!*\
  !*** ./src/modules/completeStatus.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearAllCompleted)\n/* harmony export */ });\n/* harmony import */ var _renderFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderFunctions.js */ \"./src/modules/renderFunctions.js\");\n/* harmony import */ var _taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskFunctions.js */ \"./src/modules/taskFunctions.js\");\n\n\n\nconst deleteTask = (index) => {\n  _taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.tasks.splice(index, 1);\n  (0,_taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.updateTaskIndexes)();\n  (0,_taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.saveTasks)();\n  (0,_renderFunctions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\nfunction clearAllCompleted() {\n  const completedTasks = _taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.tasks.filter((task) => task.completed);\n  completedTasks.forEach((task) => {\n    const taskIndex = _taskFunctions_js__WEBPACK_IMPORTED_MODULE_1__.tasks.findIndex((t) => t.index === task.index);\n    if (taskIndex !== -1) {\n      deleteTask(taskIndex);\n    }\n  });\n\n  (0,_renderFunctions_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://to-do-list-new/./src/modules/completeStatus.js?");

/***/ }),

/***/ "./src/modules/editTask.js":
/*!*********************************!*\
  !*** ./src/modules/editTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeTaskEditable)\n/* harmony export */ });\n/* harmony import */ var _taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskFunctions.js */ \"./src/modules/taskFunctions.js\");\n\n\nfunction makeTaskEditable(index, descriptionSpan) {\n  const input = document.createElement('input');\n  input.type = 'text';\n  input.className = 'input_todo_edit';\n  input.value = descriptionSpan.textContent;\n\n  const updateDescription = () => {\n    const newDescription = input.value.trim();\n    if (newDescription !== '') {\n      (0,_taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.updateTaskDescription)(index, newDescription);\n    }\n  };\n\n  input.addEventListener('keydown', (event) => {\n    if (event.key === 'Enter') {\n      updateDescription();\n    }\n  });\n\n  input.addEventListener('blur', () => {\n    updateDescription();\n  });\n\n  descriptionSpan.replaceWith(input);\n  input.focus();\n}\n\n\n//# sourceURL=webpack://to-do-list-new/./src/modules/editTask.js?");

/***/ }),

/***/ "./src/modules/renderFunctions.js":
/*!****************************************!*\
  !*** ./src/modules/renderFunctions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderTaskList)\n/* harmony export */ });\n/* harmony import */ var _taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskFunctions.js */ \"./src/modules/taskFunctions.js\");\n/* harmony import */ var _editTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editTask.js */ \"./src/modules/editTask.js\");\n/* harmony import */ var _clearAll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearAll.js */ \"./src/modules/clearAll.js\");\n\n\n\n\nconst taskList = document.getElementById('task-list');\n\nfunction renderTaskList() {\n  taskList.innerHTML = '';\n\n  const deleteTask = (index) => {\n    _taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.tasks.splice(index, 1);\n    (0,_taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.updateTaskIndexes)();\n    (0,_taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.saveTasks)();\n    renderTaskList();\n  };\n\n  _taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.tasks.forEach(({ index, description, completed }) => {\n    const listItem = document.createElement('li');\n    listItem.id = index;\n    listItem.className = completed ? 'completed' : '';\n\n    const checkbox = document.createElement('input');\n    checkbox.type = 'checkbox';\n    checkbox.className = 'input_todo';\n    checkbox.checked = completed;\n\n    const toggleTaskCompleted = (index) => {\n      if (_taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.tasks[index]) {\n        _taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.tasks[index].completed = !_taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.tasks[index].completed;\n        (0,_taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.saveTasks)();\n        renderTaskList();\n      }\n    };\n\n    checkbox.addEventListener('click', () => {\n      const taskIndex = index - 1;\n      toggleTaskCompleted(taskIndex);\n    });\n\n    const descriptionSpan = document.createElement('span');\n    descriptionSpan.className = 'text_input';\n    descriptionSpan.textContent = description;\n\n    descriptionSpan.addEventListener('click', () => {\n      (0,_editTask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(index - 1, descriptionSpan);\n    });\n\n    const deleteButton = document.createElement('button');\n    deleteButton.className = 'delete_btn';\n    deleteButton.innerHTML = '<i class=\"fa-regular fa-trash-can\"></i>';\n    deleteButton.addEventListener('click', (event) => {\n      const listItem = event.target.parentNode;\n      const isSelected = listItem.classList.contains('selected');\n      const task = _taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.tasks.find((task) => task.index === index);\n\n      if (isSelected || (task && task.completed)) {\n        const taskIndex = _taskFunctions_js__WEBPACK_IMPORTED_MODULE_0__.tasks.findIndex((task) => task.index === index);\n        if (taskIndex !== -1) {\n          deleteTask(taskIndex);\n        }\n      }\n    });\n\n    if (completed) {\n      descriptionSpan.classList.add('completed-text');\n    }\n\n    listItem.appendChild(checkbox);\n    listItem.appendChild(descriptionSpan);\n    listItem.appendChild(deleteButton);\n\n    taskList.appendChild(listItem);\n  });\n\n  (0,_clearAll_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://to-do-list-new/./src/modules/renderFunctions.js?");

/***/ }),

/***/ "./src/modules/taskFunctions.js":
/*!**************************************!*\
  !*** ./src/modules/taskFunctions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadTasks: () => (/* binding */ loadTasks),\n/* harmony export */   saveTasks: () => (/* binding */ saveTasks),\n/* harmony export */   tasks: () => (/* binding */ tasks),\n/* harmony export */   updateTaskDescription: () => (/* binding */ updateTaskDescription),\n/* harmony export */   updateTaskIndexes: () => (/* binding */ updateTaskIndexes)\n/* harmony export */ });\n// eslint-disable-next-line import/no-mutable-exports\nlet tasks = [];\n\nconst saveTasks = () => {\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n};\n\nconst loadTasks = () => {\n  const savedTasks = localStorage.getItem('tasks');\n  tasks = savedTasks ? JSON.parse(savedTasks) : [];\n};\n\nconst updateTaskIndexes = () => {\n  tasks.forEach((task, index) => {\n    task.index = index + 1;\n  });\n};\n\nconst updateTaskDescription = (index, description) => {\n  if (tasks[index]) {\n    tasks[index].description = description;\n    saveTasks();\n  }\n};\n\n\n\n\n//# sourceURL=webpack://to-do-list-new/./src/modules/taskFunctions.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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