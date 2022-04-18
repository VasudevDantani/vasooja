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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1QBK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uPMW");
/* harmony import */ var _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
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

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1QBK");


/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

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