module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./containers/common/center-logo-header.js":
/*!*************************************************!*\
  !*** ./containers/common/center-logo-header.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\xampp\\htdocs\\vasooja\\containers\\common\\center-logo-header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CenterLogoHeader = props => {
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: sidebar,
    1: setSidebar
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const clickSidebar = () => {
    setSidebar(!sidebar);
    document.querySelector('.navbar').classList.add('openSidebar');
  };

  return __jsx("header", {
    className: `loding-header nav-abs custom-scroll header-rel ${props.themeClass}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (CenterLogoHeader);

/***/ }),

/***/ "./containers/common/countdown.js":
/*!****************************************!*\
  !*** ./containers/common/countdown.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countdown_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countdown-now */ "react-countdown-now");
/* harmony import */ var react_countdown_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countdown_now__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp\\htdocs\\vasooja\\containers\\common\\countdown.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CountdownComponent = props => {
  const {
    0: style,
    1: setStyle
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTimeout(function () {
      setStyle({
        style: {
          display: 'none'
        }
      });
    }.bind(undefined), 1000);
  }, []);

  const Completionist = () => __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 33
    }
  }, "You are good to go!");

  const renderer = ({
    total,
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
    completed
  }) => {
    if (completed) {
      // Render a completed state
      return __jsx(Completionist, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 20
        }
      });
    } else {
      // Render a countdown
      return __jsx("div", {
        className: "countdown",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 20
        }
      }, __jsx("ul", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 17
        }
      }, __jsx("li", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "event-counter",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 25
        }
      }, __jsx("h2", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 29
        }
      }, __jsx("span", {
        id: "days",
        className: "time digits",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 33
        }
      }, days), __jsx("span", {
        className: "title",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 86
        }
      }, "days")), __jsx("div", {
        className: "set-border-left",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 29
        }
      }), __jsx("div", {
        className: "set-border-bottom",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 29
        }
      }))), __jsx("li", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "event-counter",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }
      }, __jsx("h2", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 29
        }
      }, __jsx("span", {
        id: "hours",
        className: "time digits",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 33
        }
      }, hours), __jsx("span", {
        className: "title",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 88
        }
      }, "hours")), __jsx("div", {
        className: "set-border-left",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 29
        }
      }), __jsx("div", {
        className: "set-border-bottom",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 29
        }
      }))), __jsx("li", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "event-counter",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 25
        }
      }, __jsx("h2", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 30
        }
      }, __jsx("span", {
        id: "minutes",
        className: "time digits",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 33
        }
      }, minutes), __jsx("span", {
        className: "title",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 92
        }
      }, "minutes")), __jsx("div", {
        className: "set-border-left",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 29
        }
      }), __jsx("div", {
        className: "set-border-bottom",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 29
        }
      }))), __jsx("li", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "event-counter",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 25
        }
      }, __jsx("h2", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 29
        }
      }, __jsx("span", {
        id: "seconds",
        className: "time digits",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 33
        }
      }, seconds), __jsx("span", {
        className: "title",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 92
        }
      }, "seconds")), __jsx("div", {
        className: "set-border-left",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 29
        }
      }), __jsx("div", {
        className: "set-border-bottom",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 29
        }
      })))));
    }
  };

  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  var coundown = new Date(year, month, day + 27).getTime();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx(react_countdown_now__WEBPACK_IMPORTED_MODULE_1___default.a, {
    date: coundown,
    renderer: renderer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CountdownComponent);

/***/ }),

/***/ "./database/layouts/wedding/database.js":
/*!**********************************************!*\
  !*** ./database/layouts/wedding/database.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  BrandData: [{
    invitee: 'Manabhai Dantani'
  }, {
    invitee: 'Laxmiben Dantani'
  }, {
    invitee: 'Dhanjibhai Dantani'
  }, {
    invitee: 'Lilaben Dantani'
  }, {
    invitee: 'Jayesh Dantani'
  }, {
    invitee: 'Sajna Dantani'
  }, {
    invitee: 'Prakash Dantani'
  }, {
    invitee: 'Sejal Dantani'
  }, {
    invitee: 'Parsottam Dantani'
  }, {
    invitee: 'Kokila Dantani'
  }],
  CounterData: [{
    img: '/assets/images/wedding-img/icon/1.png',
    title: 'Total Event',
    count: 14
  }, {
    img: '/assets/images/wedding-img/icon/2.png',
    title: 'Total Guest',
    count: 999
  }, {
    img: '/assets/images/wedding-img/icon/3.png',
    title: 'Invitation Card',
    count: 999
  }, {
    img: '/assets/images/wedding-img/icon/4.png',
    title: 'Total car',
    count: 1975
  }],
  DestinationData: [{
    img: '/assets/images/wedding-img/when/1.png',
    title: 'Ganesh Stapna',
    timing: '7 : 00 pm',
    feature1: 'Nr. Old School',
    feature2: 'Mujpur',
    feature3: 'Patan'
  }, {
    img: '/assets/images/wedding-img/when/1.png',
    title: 'Marriage Ceremony',
    timing: '2 : 00 pm to 3 : 00 pm',
    feature1: 'B-18/19 Madhavi Apartments',
    feature2: 'Krishnanagar',
    feature3: 'Ahmedabad'
  }, {
    img: '/assets/images/wedding-img/when/2.png',
    title: 'Reception',
    timing: '7 : 00 pm',
    feature1: 'Ghunghat Hotel',
    feature2: 'Pethapur, Randheja X',
    feature3: 'Gandhinagar'
  }],
  DesignImgData: [{
    img: '/assets/images/wedding-img/photo-album/1.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/2.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/3.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/4.jpg'
  }],
  GraphicsImgData: [{
    img: '/assets/images/wedding-img/photo-album/4.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/3.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/2.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/1.jpg'
  }],
  BrandingImgData: [{
    img: '/assets/images/wedding-img/photo-album/1.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/4.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/2.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/3.jpg'
  }],
  PhotoGraphyImgData: [{
    img: '/assets/images/wedding-img/photo-album/4.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/2.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/1.jpg'
  }],
  AllImgData: [{
    img: '/assets/images/wedding-img/photo-album/_VID0206.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/_VID0209.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/_VID0207.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/_VID0208.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/11.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/14.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/15.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/17.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/18.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/20.jpg'
  }]
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./pages/layouts/sections/wedding/about.js":
/*!*************************************************!*\
  !*** ./pages/layouts/sections/wedding/about.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp\\htdocs\\vasooja\\pages\\layouts\\sections\\wedding\\about.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const About = () => __jsx("section", {
  className: "wedding format",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "8",
  className: "offset-md-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 21
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid title-img",
  src: "/assets/images/wedding-img/bottom.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 25
  }
}), __jsx("div", {
  className: "main-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 25
  }
}, __jsx("h2", {
  className: "gradient-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 29
  }
}, "Meet Happy Couple")), __jsx("div", {
  className: "sub-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 25
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 29
  }
}, "A successful marriage requires falling in love many times, always with the same person.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  xl: "4",
  md: "6",
  className: "offset-xl-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 17
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid about-img",
  src: "/assets/images/wedding-img/t4kWPek.jpeg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 21
  }
})), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  xl: "4",
  lg: "6",
  md: "6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "center-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 21
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 25
  }
}, __jsx("div", {
  className: "format-small-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 29
  }
}, __jsx("h6", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 33
  }
}, "# Love Bird")), __jsx("div", {
  className: "format-head-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 29
  }
}, __jsx("h3", {
  className: "about-font-header gradient-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 33
  }
}, "about")), __jsx("div", {
  className: "format-sub-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 29
  }
}, __jsx("p", {
  className: "about-para",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 33
  }
}, __jsx("h6", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 37
  }
}, "#Vasudev + #Pooja = #Vasooja"), " \"On the day 24th September 2020 we engaged, lot's of happiness oh this day and lot's of beautiful memories.\""), __jsx("p", {
  className: "about-para",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 33
  }
}, __jsx("h6", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 37
  }
}, "# Vasudev"), " \"I want to create lot's of beautiful memories and good  moments, beacuse i think beautiful memories and every bit of good moments are true hapiness of our life.\""), __jsx("p", {
  className: "about-para",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 33
  }
}, __jsx("h6", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 37
  }
}, "# Pooja"), " \"I am a simple girl with good heart and too much addicted with education. Till now I am not travelled too much, because I want to travel with my husband and it's special for me.\""))))))));

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./pages/layouts/sections/wedding/banner.js":
/*!**************************************************!*\
  !*** ./pages/layouts/sections/wedding/banner.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp\\htdocs\\vasooja\\pages\\layouts\\sections\\wedding\\banner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Banner = () => __jsx("section", {
  className: "wedding banner jenny-bg bg set-relative",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  xs: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "wedding-banner",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 25
  }
}, __jsx("div", {
  className: "set-relative rightFadeInOut",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 29
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid frem",
  src: "/assets/images/wedding-img/jeny/frem.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 33
  }
})), __jsx("div", {
  className: "abs-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 29
  }
}, __jsx("div", {
  className: "text-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 33
  }
}, __jsx("div", {
  className: "couple-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 37
  }
}, __jsx("h2", {
  className: "banner-text gradient-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 41
  }
}, "Pooja"), __jsx("h2", {
  className: "banner-text gradient-text small",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 41
  }
}, "&"), __jsx("h2", {
  className: "banner-text gradient-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 41
  }
}, "Vasudev")), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 37
  }
}, __jsx("h3", {
  className: "text-uppercase place",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 41
  }
}, "Ahmedabad"), __jsx("h4", {
  className: "address",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 41
  }
}, "B-18 Madhavi Appartments Krishnanagar"))))))))));

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./pages/layouts/sections/wedding/blog.js":
/*!************************************************!*\
  !*** ./pages/layouts/sections/wedding/blog.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../database/layouts/wedding/database */ "./database/layouts/wedding/database.js");
/* harmony import */ var _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  autoplay: true,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1
    }
  }]
};

const Blog = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null) // <section className="wedding blog">
//     <Container>
//         <Row>
//             <Col md="8" className="offset-md-2">
//                 <div className="title">
//                     <img alt="" className="img-fluid title-img"
//                         src="/assets/images/wedding-img/bottom.png" />
//                     <div className="main-title">
//                         <h2 className="gradient-text">Our Beautiful Story</h2>
//                     </div>
//                     <div className="sub-title">
//                         <p>A beautiful app for consectetur adipisicing elit, sed do eiusmod tempor incididunt ut mollit
//                         anim id est laborum. Sedut perspiciatis unde omnis.</p>
//                     </div>
//                 </div>
//             </Col>
//         </Row>
//     </Container>
//     <Container fluid={true}>
//         <div></div>
//         <Row>
//             <Col xs="12">
//                 <Slider className="owl-carousel owl-theme" id="blog-slider" {...settings}>
//                     {BlogData.map((item, i) => {
//                         return (
//                             <div className="item" key={i}>
//                                 <div className="blog-container">
//                                     <Row>
//                                         <Col md="6" sm="8" xs="12"  className="offset-sm-2 offset-md-0">
//                                             <div className="set-skew">
//                                                 <img alt="" className="img-fluid" src={item.img} />
//                                             </div>
//                                         </Col>
//                                         <Col md="6" sm="8" xs="12" className="offset-sm-2 offset-md-0">
//                                             <div className="center-text">
//                                                 <div>
//                                                     <h3 className="blog-text gradient-text"> {item.title}</h3>
//                                                     <h6 className="blog-date">{item.date}</h6>
//                                                     <h6 className="blog-place">{item.place}</h6>
//                                                     <p className="blog-para">{item.desc}</p>
//                                                     <button className="btn btn-blog">read more</button>
//                                                 </div>
//                                             </div>
//                                         </Col>
//                                     </Row>
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </Slider>
//             </Col>
//         </Row>
//     </Container>
// </section>
;

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ }),

/***/ "./pages/layouts/sections/wedding/brand.js":
/*!*************************************************!*\
  !*** ./pages/layouts/sections/wedding/brand.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../database/layouts/wedding/database */ "./database/layouts/wedding/database.js");
/* harmony import */ var _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\xampp\\htdocs\\vasooja\\pages\\layouts\\sections\\wedding\\brand.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 5,
  autoplay: true,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 320,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 420,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 1199,
    settings: {
      slidesToShow: 4
    }
  }]
};

const Brand = () => __jsx("section", {
  className: "wedding brand-sliders",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  md: "8",
  className: "offset-md-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 21
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid title-img",
  src: "/assets/images/wedding-img/bottom.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 25
  }
}), __jsx("div", {
  className: "main-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 25
  }
}, __jsx("h2", {
  className: "gradient-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 29
  }
}, "invitee")), __jsx("div", {
  className: "sub-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 25
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 29
  }
}, "\"With warm heart we are invite you all, make our ceremony delighful and memorable with your presence\" - Dantani Family")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  xs: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 17
  }
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  className: "owl-carousel owl-theme brand-slider",
  id: "brand-slider"
}, settings, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 21
  }
}), _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3__["BrandData"].map((item, i) => {
  return __jsx("div", {
    className: "item",
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 37
    }
  }, item.invitee));
})))), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 13
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (Brand);

/***/ }),

/***/ "./pages/layouts/sections/wedding/countdown.js":
/*!*****************************************************!*\
  !*** ./pages/layouts/sections/wedding/countdown.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_common_countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../containers/common/countdown */ "./containers/common/countdown.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\xampp\\htdocs\\vasooja\\pages\\layouts\\sections\\wedding\\countdown.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Countdown = () => __jsx("section", {
  className: "wedding countdown-bg bg set-relative",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  md: "8",
  className: "offset-md-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 21
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid title-img",
  src: "/assets/images/wedding-img/bottom.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 25
  }
}), __jsx("div", {
  className: "main-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 25
  }
}, __jsx("h2", {
  className: "gradient-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 29
  }
}, "count down")), __jsx("div", {
  className: "sub-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 25
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 29
  }
}, "Everything around looks so bright and so lovely; guess why? Simply because we are getting married in days from now. We are so delighted. Thinking about how we\u2019ll look together as a married couple gives me an amazing feeling that I love to wake up to each day to our big day. Countdown begins!"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
  xl: "8",
  className: "offset-xl-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "wedding-time ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 21
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 25
  }
}, __jsx("div", {
  className: "timimg-wedding",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 29
  }
}, __jsx(_containers_common_countdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 33
  }
})))), __jsx("div", {
  className: "schedule text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 21
  }
}, __jsx("h3", {
  className: "m-b-15 zexson-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 25
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-map-marker m-r-10",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 29
  }
}), " B-18/19 Madhavi Apartments, Krishnanagar, Ahmedabad 382345"), __jsx("h4", {
  className: "schedule-date",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 25
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-calendar m-r-10",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 29
  }
}), "12", __jsx("sup", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 91
  }
}, "th"), " May 2022"))))));

/* harmony default export */ __webpack_exports__["default"] = (Countdown);

/***/ }),

/***/ "./pages/layouts/sections/wedding/counter.js":
/*!***************************************************!*\
  !*** ./pages/layouts/sections/wedding/counter.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../database/layouts/wedding/database */ "./database/layouts/wedding/database.js");
/* harmony import */ var _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Counter = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null) // <section className="wedding counter">
//     <Container>
//         <Row>
//             {CounterData.map((item,i) => {
//                 return (
//                     <Col md="3" xs="6"  className="counter-container" key={i}>
//                     <div className="counters">
//                         <img alt="" className="img-fluid counter-img" src={item.img} />
//                         <div className="counter-text">
//                             <div className="count-number">
//                                 <h2 className="counts text-center">
//                                     <CountUp end={item.count} />
//                                 </h2>
//                             </div>
//                             <h6 className="count-desc text-center">{item.title}</h6>
//                         </div>
//                     </div>
//                 </Col>
//                 )
//             })}
//         </Row>
//     </Container>
// </section>
;

/* harmony default export */ __webpack_exports__["default"] = (Counter);

/***/ }),

/***/ "./pages/layouts/sections/wedding/destination.js":
/*!*******************************************************!*\
  !*** ./pages/layouts/sections/wedding/destination.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../database/layouts/wedding/database */ "./database/layouts/wedding/database.js");
/* harmony import */ var _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_11__);








var _jsxFileName = "C:\\xampp\\htdocs\\vasooja\\pages\\layouts\\sections\\wedding\\destination.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a ? _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)) : ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } return target; }






const LeftNavButton = props => {
  const {
    style,
    onClick
  } = props;
  return __jsx("div", {
    className: "slick-arrow",
    style: _objectSpread({}, style, {
      display: 'block',
      position: 'absolute',
      bottom: '50%',
      marginLeft: '-10%'
    }),
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/wedding-img/when/next.png",
    alt: "arrow_left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }));
};

const RightNavButton = props => {
  const {
    style,
    onClick
  } = props;
  return __jsx("div", {
    className: "slick-arrow",
    style: _objectSpread({}, style, {
      display: 'block',
      position: 'absolute',
      bottom: '50%',
      marginLeft: '105%'
    }),
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/assets/images/wedding-img/when/prev.png",
    alt: "arrow_left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }));
};

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  autoplay: true,
  prevArrow: __jsx(LeftNavButton, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 16
    }
  }),
  nextArrow: __jsx(RightNavButton, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 16
    }
  }),
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 992,
    settings: {
      slidesToShow: 1
    }
  }]
};

const Destination = () => __jsx("section", {
  className: "wedding pricing when-where-bg bg set-relative",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
  md: "8",
  className: "offset-md-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 21
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid title-img",
  src: "/assets/images/wedding-img/bottom.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 25
  }
}), __jsx("div", {
  className: "main-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 25
  }
}, __jsx("h2", {
  className: "gradient-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 29
  }
}, "When And Where")), __jsx("div", {
  className: "sub-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 25
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 29
  }
}, "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope."))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
  md: "8",
  className: "offset-md-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 17
  }
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({
  className: "owl-carousel owl-theme when-slider",
  id: "when-slider"
}, settings, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 21
  }
}), _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_10__["DestinationData"].map((item, i) => {
  return __jsx("div", {
    className: "item",
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "price-container bg-white price-margin shadows text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "price-feature-container set-relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "feature-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 45
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid feature-icon",
    src: item.img,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 49
    }
  }), __jsx("hr", {
    className: "set-border",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 49
    }
  }), __jsx("h3", {
    className: "feature-text-heading text-center bold gradient-text ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 49
    }
  }, item.title), __jsx("div", {
    className: "price-value",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 49
    }
  }, __jsx("h6", {
    className: "price text-center font-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 53
    }
  }, item.timing))), __jsx("div", {
    className: "price-features font-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 45
    }
  }, __jsx("h4", {
    className: "price-feature font-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 49
    }
  }, item.feature1, " "), __jsx("h4", {
    className: "price-feature font-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 49
    }
  }, item.feature2, " "), __jsx("h4", {
    className: "price-feature font-primary m-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 49
    }
  }, item.feature3)))));
}))))));

/* harmony default export */ __webpack_exports__["default"] = (Destination);

/***/ }),

/***/ "./pages/layouts/sections/wedding/footer.js":
/*!**************************************************!*\
  !*** ./pages/layouts/sections/wedding/footer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null) // <footer className="wedding copyright copyright-bg">
//     <Container>
//         <Row>
//             <Col xl="3" sm="12">
//                 <div className="text-center">
//                     <div className="link-horizontal">
//                         <ul>
//                             <li>
//                                 <a className="copyright-text" href="#">
//                                     <i aria-hidden="true" className="fa fa-facebook gradient-text"></i>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a className="copyright-text" href="#">
//                                     <i aria-hidden="true" className="fa fa-twitter gradient-text"></i>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a className="copyright-text" href="#">
//                                     <i aria-hidden="true" className="fa fa-google gradient-text"></i>
//                                 </a>
//                             </li>
//                             <li>
//                                 <a className="copyright-text " href="#">
//                                     <i aria-hidden="true" className="fa fa-instagram gradient-text"></i>
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </Col>
//             <Col xl="6" sm="12">
//                 <div className="link-horizontal">
//                     <ul className="link justify-content-center footer-contants">
//                         <li>
//                             <a className="copyright-text" href="#">home</a>
//                         </li>
//                         <li>
//                             <a className="copyright-text" href="#">couple</a>
//                         </li>
//                         <li>
//                             <a className="copyright-text" href="#">invitation</a>
//                         </li>
//                         <li>
//                             <a className="copyright-text" href="#">album </a>
//                         </li>
//                         <li>
//                             <a className="copyright-text" href="#">friends say</a>
//                         </li>
//                         <li>
//                             <a className="copyright-text" href="#">gift</a>
//                         </li>
//                     </ul>
//                 </div>
//             </Col>
//             <Col xl="3" sm="12" className="p-0">
//                 <div className="m-l-auto center-para">
//                     <h6 className="copyright-text text-right">© 2020 Unice powered by Pixelstrap</h6>
//                 </div>
//             </Col>
//         </Row>
//     </Container>
// </footer>
;

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./pages/layouts/sections/wedding/gallery.js":
/*!***************************************************!*\
  !*** ./pages/layouts/sections/wedding/gallery.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-masonry-css */ "react-masonry-css");
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_masonry_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../database/layouts/wedding/database */ "./database/layouts/wedding/database.js");
/* harmony import */ var _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp\\htdocs\\vasooja\\pages\\layouts\\sections\\wedding\\gallery.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Gallery = () => {
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('1');
  return __jsx("section", {
    className: "wedding portfolio-section zoom-gallery",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: "8",
    className: "offset-md-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid title-img",
    src: "/assets/images/wedding-img/bottom.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "main-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 29
    }
  }, __jsx("h2", {
    className: "gradient-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 33
    }
  }, "beautiful memories")), __jsx("div", {
    className: "sub-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 33
    }
  }, "One of the best ways to make yourself happy in the present is to recall happy times from the past. Photos are a great memory-prompt, and because we tend to take photos of happy occasions, they weight our memories to the good."))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabContent"], {
    className: "isotopeContainer",
    activeTab: activeTab,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabPane"], {
    tabId: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx(react_masonry_css__WEBPACK_IMPORTED_MODULE_1___default.a, {
    breakpointCols: 3,
    className: "my-masonry-grid row",
    columnClassName: "my-masonry-grid_column col-lg-4 col-md-6 col-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3__["AllImgData"].map((imgItem, i) => {
    return __jsx("div", {
      className: "isotopeSelector",
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "overlay",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "border-portfolio",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 45
      }
    }, __jsx("a", {
      className: "zoom_gallery",
      "data-source": "",
      href: imgItem.img,
      title: "",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 49
      }
    }, __jsx("div", {
      className: "overlay-background",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 53
      }
    }, __jsx("i", {
      "aria-hidden": "true",
      className: "fa fa-plus",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 57
      }
    })), __jsx("img", {
      alt: "",
      className: "img-fluid blur-up",
      src: imgItem.img,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 53
      }
    })))));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),

/***/ "./pages/layouts/sections/wedding/header.js":
/*!**************************************************!*\
  !*** ./pages/layouts/sections/wedding/header.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp\\htdocs\\vasooja\\pages\\layouts\\sections\\wedding\\header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const HeaderSection = () => __jsx("section", {
  className: "wedding header",
  id: "header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "decore",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/wedding-img/backgrounds/top-pattern.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 13
  }
}), __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/wedding-img/backgrounds/bottom-pattern.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
})), __jsx("div", {
  className: "wedding-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "wedding bg slider-bg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "bottom-0 set-abs girl",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 17
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  id: "girl",
  src: "/assets/images/wedding-img/slider/girl.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 56
  }
})), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 17
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 21
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "5",
  className: "offset-lg-7",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 25
  }
}, __jsx("div", {
  className: "center-text m-t-50",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 29
  }
}, __jsx("div", {
  className: "simple-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 33
  }
}, __jsx("div", {
  className: "set-relative rightFadeInOut header-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 37
  }
}, __jsx("img", {
  alt: "",
  className: "logo-h1",
  src: "/assets/images/wedding-img/logo-h1.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 41
  }
})), __jsx("p", {
  className: "header-sub-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 37
  }
}, "You don't marry the person you can live with \u2014 you marry the person you can't live without. "), __jsx("div", {
  className: "rightfadediv",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 37
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 41
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid bottom-img",
  src: "/assets/images/wedding-img/bottom.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 45
  }
})))))))))));

/* harmony default export */ __webpack_exports__["default"] = (HeaderSection);

/***/ }),

/***/ "./pages/layouts/sections/wedding/subscribe.js":
/*!*****************************************************!*\
  !*** ./pages/layouts/sections/wedding/subscribe.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp\\htdocs\\vasooja\\pages\\layouts\\sections\\wedding\\subscribe.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Subscribe = () => __jsx("section", {
  className: "wedding subscribe attend-bg bg set-relative",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "6",
  md: "8",
  className: "offset-md-2 offset-lg-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 21
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid title-img",
  src: "/assets/images/wedding-img/bottom.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 25
  }
}), __jsx("div", {
  className: "main-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 25
  }
}, __jsx("h2", {
  className: "gradient-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 29
  }
}, "Tahuko")), __jsx("div", {
  className: "sub-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 25
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 29
  }
}, "\"We are little litle prince, princess and doll, invite you in wedding all\""), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 29
  }
}, "\"Please come and give your blessing\""))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  className: "p-b-50 m-b-50",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "6",
  className: "offset-lg-3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "subscribe",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "center-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 25
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 29
  }
}, "- Rajal, Paresh, Jyoti, Janki, Kinjal, Bhoomi, Dhruvi, Khooshi, Dev")))))));

/* harmony default export */ __webpack_exports__["default"] = (Subscribe);

/***/ }),

/***/ "./pages/layouts/sections/wedding/testimonial.js":
/*!*******************************************************!*\
  !*** ./pages/layouts/sections/wedding/testimonial.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  swipeToSlide: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Testimonial = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null) // <section className="wedding testimonial wishes-bg bg set-relative">
//     <Container>
//         <Row>
//             <Col md="8"  className="offset-md-2">
//                 <div className="title">
//                     <img alt="" className="img-fluid title-img"
//                         src="/assets/images/wedding-img/bottom.png" />
//                     <div className="main-title">
//                         <h2 className="gradient-text">friends wishes</h2>
//                     </div>
//                     <div className="sub-title">
//                         <p>A beautiful app for consectetur adipisicing elit, sed do eiusmod tempor incididunt ut mollit
//                         anim id est laborum. Sedut perspiciatis unde omnis.</p>
//                     </div>
//                 </div>
//             </Col>
//         </Row>
//         <Row>
//             <Col lg="8" className="offset-lg-2">
//                 <Slider {...settings}>
//                     <div className="item">
//                         <div className="testimonial-container">
//                             <div className="border-around">
//                                 <img alt="" className="img-fluid m-auto"
//                                     src="/assets/images/wedding-img/testimonial/quote.png" />
//                                 <div className="text-center testimonial-info">
//                                     <p className="testimonial-para">
//                                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
//                                         Ipsum
//                                         has been the industry's standard dummy text ever since the 1500s, when an
//                                         unknown
//                                         printer took a galley of type and scrambled it to.
//                                 </p>
//                                     <h4>Alan Lakor</h4>
//                                     <h6>CEO OF SC.</h6>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="item">
//                         <div className="testimonial-container">
//                             <div className="border-around">
//                                 <img alt="" className="img-fluid m-auto"
//                                     src="/assets/images/wedding-img/testimonial/quote.png" />
//                                 <div className="text-center testimonial-info">
//                                     <p className="testimonial-para">
//                                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
//                                         Ipsum
//                                         has been the industry's standard dummy text ever since the 1500s, when an
//                                         unknown
//                                         printer took a galley of type and scrambled it to.
//                                 </p>
//                                     <h4>Alan Lakor</h4>
//                                     <h6>CEO OF SC.</h6>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </Slider>
//             </Col>
//         </Row>
//     </Container>
// </section>
;

/* harmony default export */ __webpack_exports__["default"] = (Testimonial);

/***/ }),

/***/ "./pages/layouts/wedding.js":
/*!**********************************!*\
  !*** ./pages/layouts/wedding.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_common_center_logo_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/common/center-logo-header */ "./containers/common/center-logo-header.js");
/* harmony import */ var _sections_wedding_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/wedding/header */ "./pages/layouts/sections/wedding/header.js");
/* harmony import */ var _layouts_sections_wedding_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/sections/wedding/about */ "./pages/layouts/sections/wedding/about.js");
/* harmony import */ var _layouts_sections_wedding_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/sections/wedding/banner */ "./pages/layouts/sections/wedding/banner.js");
/* harmony import */ var _layouts_sections_wedding_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/sections/wedding/gallery */ "./pages/layouts/sections/wedding/gallery.js");
/* harmony import */ var _sections_wedding_countdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/wedding/countdown */ "./pages/layouts/sections/wedding/countdown.js");
/* harmony import */ var _layouts_sections_wedding_blog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layouts/sections/wedding/blog */ "./pages/layouts/sections/wedding/blog.js");
/* harmony import */ var _layouts_sections_wedding_destination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layouts/sections/wedding/destination */ "./pages/layouts/sections/wedding/destination.js");
/* harmony import */ var _layouts_sections_wedding_counter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layouts/sections/wedding/counter */ "./pages/layouts/sections/wedding/counter.js");
/* harmony import */ var _layouts_sections_wedding_testimonial__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../layouts/sections/wedding/testimonial */ "./pages/layouts/sections/wedding/testimonial.js");
/* harmony import */ var _layouts_sections_wedding_brand__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../layouts/sections/wedding/brand */ "./pages/layouts/sections/wedding/brand.js");
/* harmony import */ var _layouts_sections_wedding_subscribe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../layouts/sections/wedding/subscribe */ "./pages/layouts/sections/wedding/subscribe.js");
/* harmony import */ var _layouts_sections_wedding_footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../layouts/sections/wedding/footer */ "./pages/layouts/sections/wedding/footer.js");
var _jsxFileName = "C:\\xampp\\htdocs\\vasooja\\pages\\layouts\\wedding.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import Custom Components















const Wedding = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.body.style.setProperty('--primary', '#c0882f');
    document.body.style.setProperty('--secondary', '#595959');
    document.body.style.setProperty('--light', '#BF862D');
    document.body.style.setProperty('--dark', '#ECC878');
  });
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, "Wedding Layout ")), __jsx(_containers_common_center_logo_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    themeClass: "wedding",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx(_sections_wedding_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_wedding_about__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_wedding_banner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_wedding_gallery__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }), __jsx(_sections_wedding_countdown__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_wedding_blog__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_wedding_destination__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_wedding_counter__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_wedding_testimonial__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_wedding_brand__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_wedding_subscribe__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_wedding_footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Wedding);

/***/ }),

/***/ 4:
/*!****************************************!*\
  !*** multi ./pages/layouts/wedding.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\vasooja\pages\layouts\wedding.js */"./pages/layouts/wedding.js");


/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-countdown-now":
/*!**************************************!*\
  !*** external "react-countdown-now" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countdown-now");

/***/ }),

/***/ "react-countup":
/*!********************************!*\
  !*** external "react-countup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "react-masonry-css":
/*!************************************!*\
  !*** external "react-masonry-css" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-masonry-css");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=wedding.js.map