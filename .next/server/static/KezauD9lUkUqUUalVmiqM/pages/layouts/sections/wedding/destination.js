module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ZKRI");


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ZKRI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("XoMD");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js
var esm_extends = __webpack_require__("kOwS");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: ./database/layouts/wedding/database.js
var database = __webpack_require__("uPMW");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./pages/layouts/sections/wedding/destination.js








var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : get_own_property_descriptors_default.a ? define_properties_default()(target, get_own_property_descriptors_default()(source)) : ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } return target; }






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
    onClick: onClick
  }, __jsx("img", {
    src: "/assets/images/wedding-img/when/next.png",
    alt: "arrow_left"
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
    onClick: onClick
  }, __jsx("img", {
    src: "/assets/images/wedding-img/when/prev.png",
    alt: "arrow_left"
  }));
};

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  autoplay: true,
  prevArrow: __jsx(LeftNavButton, null),
  nextArrow: __jsx(RightNavButton, null),
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 992,
    settings: {
      slidesToShow: 1
    }
  }]
};

const Destination = () => __jsx("section", {
  className: "wedding pricing when-where-bg bg set-relative"
}, __jsx(external_reactstrap_["Container"], null, __jsx(external_reactstrap_["Row"], null, __jsx(external_reactstrap_["Col"], {
  md: "8",
  className: "offset-md-2"
}, __jsx("div", {
  className: "title"
}, __jsx("img", {
  alt: "",
  className: "img-fluid title-img",
  src: "/assets/images/wedding-img/bottom.png"
}), __jsx("div", {
  className: "main-title"
}, __jsx("h2", {
  className: "gradient-text"
}, "When And Where")), __jsx("div", {
  className: "sub-title"
}, __jsx("p", null, "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope."))))), __jsx(external_reactstrap_["Row"], null, __jsx(external_reactstrap_["Col"], {
  md: "8",
  className: "offset-md-2"
}, __jsx(external_react_slick_default.a, Object(esm_extends["a" /* default */])({
  className: "owl-carousel owl-theme when-slider",
  id: "when-slider"
}, settings), database["DestinationData"].map((item, i) => {
  return __jsx("div", {
    className: "item",
    key: i
  }, __jsx("div", {
    className: "price-container bg-white price-margin shadows text-center"
  }, __jsx("div", {
    className: "price-feature-container set-relative"
  }, __jsx("div", {
    className: "feature-text"
  }, __jsx("img", {
    alt: "",
    className: "img-fluid feature-icon",
    src: item.img
  }), __jsx("hr", {
    className: "set-border"
  }), __jsx("h3", {
    className: "feature-text-heading text-center bold gradient-text "
  }, item.title), __jsx("div", {
    className: "price-value"
  }, __jsx("h6", {
    className: "price text-center font-primary"
  }, item.timing))), __jsx("div", {
    className: "price-features font-primary"
  }, __jsx("h4", {
    className: "price-feature font-primary"
  }, item.feature1, " "), __jsx("h4", {
    className: "price-feature font-primary"
  }, item.feature2, " "), __jsx("h4", {
    className: "price-feature font-primary m-0"
  }, item.feature3)))));
}))))));

/* harmony default export */ var destination = __webpack_exports__["default"] = (Destination);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
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

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "uPMW":
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

/***/ })

/******/ });