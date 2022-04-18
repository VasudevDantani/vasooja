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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+/C2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uPMW");
/* harmony import */ var _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);

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
  className: "wedding brand-sliders"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
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
}, "invitee")), __jsx("div", {
  className: "sub-title"
}, __jsx("p", null, "\"With warm heart we are invite you all, make our ceremony delighful and memorable with your presence\" - Dantani Family")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  xs: "12"
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
  className: "owl-carousel owl-theme brand-slider",
  id: "brand-slider"
}, settings), _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3__["BrandData"].map((item, i) => {
  return __jsx("div", {
    className: "item",
    key: i
  }, __jsx("h4", null, item.invitee));
})))), __jsx("div", null)));

/* harmony default export */ __webpack_exports__["default"] = (Brand);

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("EFl/");


/***/ }),

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

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "6l3p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Banner = () => __jsx("section", {
  className: "wedding banner jenny-bg bg set-relative"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  xs: "12"
}, __jsx("div", {
  className: "text-center"
}, __jsx("div", {
  className: "wedding-banner"
}, __jsx("div", {
  className: "set-relative rightFadeInOut"
}, __jsx("img", {
  alt: "",
  className: "img-fluid frem",
  src: "/assets/images/wedding-img/jeny/frem.png"
})), __jsx("div", {
  className: "abs-center"
}, __jsx("div", {
  className: "text-container"
}, __jsx("div", {
  className: "couple-text"
}, __jsx("h2", {
  className: "banner-text gradient-text"
}, "Pooja"), __jsx("h2", {
  className: "banner-text gradient-text small"
}, "&"), __jsx("h2", {
  className: "banner-text gradient-text"
}, "Vasudev")), __jsx("div", null, __jsx("h3", {
  className: "text-uppercase place"
}, "Ahmedabad"), __jsx("h4", {
  className: "address"
}, "B-18 Madhavi Appartments Krishnanagar"))))))))));

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "EFl/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./containers/common/center-logo-header.js
var __jsx = external_react_default.a.createElement;


const CenterLogoHeader = props => {
  const {
    0: show,
    1: setShow
  } = Object(external_react_["useState"])(false);
  const {
    0: sidebar,
    1: setSidebar
  } = Object(external_react_["useState"])(false);

  const clickSidebar = () => {
    setSidebar(!sidebar);
    document.querySelector('.navbar').classList.add('openSidebar');
  };

  return __jsx("header", {
    className: `loding-header nav-abs custom-scroll header-rel ${props.themeClass}`
  });
};

/* harmony default export */ var center_logo_header = (CenterLogoHeader);
// EXTERNAL MODULE: ./pages/layouts/sections/wedding/header.js
var header = __webpack_require__("rpdq");

// EXTERNAL MODULE: ./pages/layouts/sections/wedding/about.js
var about = __webpack_require__("oHTN");

// EXTERNAL MODULE: ./pages/layouts/sections/wedding/banner.js
var banner = __webpack_require__("6l3p");

// EXTERNAL MODULE: ./pages/layouts/sections/wedding/gallery.js
var gallery = __webpack_require__("vpxC");

// EXTERNAL MODULE: ./pages/layouts/sections/wedding/countdown.js + 1 modules
var countdown = __webpack_require__("xs8h");

// EXTERNAL MODULE: ./pages/layouts/sections/wedding/blog.js
var blog = __webpack_require__("1QBK");

// EXTERNAL MODULE: ./pages/layouts/sections/wedding/destination.js + 1 modules
var destination = __webpack_require__("ZKRI");

// EXTERNAL MODULE: ./pages/layouts/sections/wedding/counter.js
var counter = __webpack_require__("jSKi");

// EXTERNAL MODULE: ./pages/layouts/sections/wedding/testimonial.js
var testimonial = __webpack_require__("VX5/");

// EXTERNAL MODULE: ./pages/layouts/sections/wedding/brand.js
var brand = __webpack_require__("+/C2");

// EXTERNAL MODULE: ./pages/layouts/sections/wedding/subscribe.js
var subscribe = __webpack_require__("WLhp");

// EXTERNAL MODULE: ./pages/layouts/sections/wedding/footer.js
var footer = __webpack_require__("J47q");

// CONCATENATED MODULE: ./pages/layouts/wedding.js
var wedding_jsx = external_react_default.a.createElement;

 // import Custom Components















const Wedding = () => {
  Object(external_react_["useEffect"])(() => {
    document.body.style.setProperty('--primary', '#c0882f');
    document.body.style.setProperty('--secondary', '#595959');
    document.body.style.setProperty('--light', '#BF862D');
    document.body.style.setProperty('--dark', '#ECC878');
  });
  return wedding_jsx("div", null, wedding_jsx(head_default.a, null, wedding_jsx("title", null, "Wedding Layout ")), wedding_jsx(center_logo_header, {
    themeClass: "wedding"
  }), wedding_jsx(header["default"], null), wedding_jsx(about["default"], null), wedding_jsx(banner["default"], null), wedding_jsx(gallery["default"], null), wedding_jsx(countdown["default"], null), wedding_jsx(blog["default"], null), wedding_jsx(destination["default"], null), wedding_jsx(counter["default"], null), wedding_jsx(testimonial["default"], null), wedding_jsx(brand["default"], null), wedding_jsx(subscribe["default"], null), wedding_jsx(footer["default"], null));
};

/* harmony default export */ var wedding = __webpack_exports__["default"] = (Wedding);

/***/ }),

/***/ "J47q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
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

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "NHP8":
/***/ (function(module, exports) {

module.exports = require("react-countup");

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

/***/ "VX5/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O/hg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
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

/***/ "WLhp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Subscribe = () => __jsx("section", {
  className: "wedding subscribe attend-bg bg set-relative"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "6",
  md: "8",
  className: "offset-md-2 offset-lg-3"
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
}, "Tahuko")), __jsx("div", {
  className: "sub-title"
}, __jsx("p", null, "\"We are little litle prince, princess and doll, invite you in wedding all\""), __jsx("p", null, "\"Please come and give your blessing\""))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  className: "p-b-50 m-b-50"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "6",
  className: "offset-lg-3"
}, __jsx("div", {
  className: "subscribe"
}, __jsx("div", {
  className: "center-content"
}, __jsx("p", null, "- Rajal, Paresh, Jyoti, Janki, Kinjal, Bhoomi, Dhruvi, Khooshi, Dev")))))));

/* harmony default export */ __webpack_exports__["default"] = (Subscribe);

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

/***/ "jSKi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("NHP8");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uPMW");
/* harmony import */ var _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oL/c");
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

/***/ "oHTN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const About = () => __jsx("section", {
  className: "wedding format"
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
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
}, "Meet Happy Couple")), __jsx("div", {
  className: "sub-title"
}, __jsx("p", null, "A successful marriage requires falling in love many times, always with the same person.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  xl: "4",
  md: "6",
  className: "offset-xl-2"
}, __jsx("img", {
  alt: "",
  className: "img-fluid about-img",
  src: "/assets/images/wedding-img/t4kWPek.jpeg"
})), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  xl: "4",
  lg: "6",
  md: "6"
}, __jsx("div", {
  className: "center-text"
}, __jsx("div", null, __jsx("div", {
  className: "format-small-text"
}, __jsx("h6", null, "# Love Bird")), __jsx("div", {
  className: "format-head-text"
}, __jsx("h3", {
  className: "about-font-header gradient-text"
}, "about")), __jsx("div", {
  className: "format-sub-text"
}, __jsx("p", {
  className: "about-para"
}, __jsx("h6", null, "#Vasudev + #Pooja = #Vasooja"), " \"On the day 24th September 2020 we engaged, lot's of happiness oh this day and lot's of beautiful memories.\""), __jsx("p", {
  className: "about-para"
}, __jsx("h6", null, "# Vasudev"), " \"I want to create lot's of beautiful memories and good  moments, beacuse i think beautiful memories and every bit of good moments are true hapiness of our life.\""), __jsx("p", {
  className: "about-para"
}, __jsx("h6", null, "# Pooja"), " \"I am a simple girl with good heart and too much addicted with education. Till now I am not travelled too much, because I want to travel with my husband and it's special for me.\""))))))));

/* harmony default export */ __webpack_exports__["default"] = (About);

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

/***/ "rpdq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const HeaderSection = () => __jsx("section", {
  className: "wedding header",
  id: "header"
}, __jsx("div", {
  className: "decore"
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/wedding-img/backgrounds/top-pattern.png"
}), __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/wedding-img/backgrounds/bottom-pattern.png"
})), __jsx("div", {
  className: "wedding-content"
}, __jsx("div", {
  className: "wedding bg slider-bg"
}, __jsx("div", {
  className: "bottom-0 set-abs girl"
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  id: "girl",
  src: "/assets/images/wedding-img/slider/girl.png"
})), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "5",
  className: "offset-lg-7"
}, __jsx("div", {
  className: "center-text m-t-50"
}, __jsx("div", {
  className: "simple-text"
}, __jsx("div", {
  className: "set-relative rightFadeInOut header-text"
}, __jsx("img", {
  alt: "",
  className: "logo-h1",
  src: "/assets/images/wedding-img/logo-h1.png"
})), __jsx("p", {
  className: "header-sub-text"
}, "You don't marry the person you can live with \u2014 you marry the person you can't live without. "), __jsx("div", {
  className: "rightfadediv"
}, __jsx("div", null, __jsx("img", {
  alt: "",
  className: "img-fluid bottom-img",
  src: "/assets/images/wedding-img/bottom.png"
})))))))))));

/* harmony default export */ __webpack_exports__["default"] = (HeaderSection);

/***/ }),

/***/ "tq2Q":
/***/ (function(module, exports) {

module.exports = require("react-masonry-css");

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

/***/ }),

/***/ "upKs":
/***/ (function(module, exports) {

module.exports = require("react-countdown-now");

/***/ }),

/***/ "vpxC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tq2Q");
/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_masonry_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uPMW");
/* harmony import */ var _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Gallery = () => {
  const {
    0: activeTab,
    1: setActiveTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('1');
  return __jsx("section", {
    className: "wedding portfolio-section zoom-gallery"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
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
  }, "beautiful memories")), __jsx("div", {
    className: "sub-title"
  }, __jsx("p", null, "One of the best ways to make yourself happy in the present is to recall happy times from the past. Photos are a great memory-prompt, and because we tend to take photos of happy occasions, they weight our memories to the good."))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabContent"], {
    className: "isotopeContainer",
    activeTab: activeTab
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["TabPane"], {
    tabId: "1"
  }, __jsx(react_masonry_css__WEBPACK_IMPORTED_MODULE_1___default.a, {
    breakpointCols: 3,
    className: "my-masonry-grid row",
    columnClassName: "my-masonry-grid_column col-lg-4 col-md-6 col-12"
  }, _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3__["AllImgData"].map((imgItem, i) => {
    return __jsx("div", {
      className: "isotopeSelector",
      key: i
    }, __jsx("div", {
      className: "overlay"
    }, __jsx("div", {
      className: "border-portfolio"
    }, __jsx("a", {
      className: "zoom_gallery",
      "data-source": "",
      href: imgItem.img,
      title: ""
    }, __jsx("div", {
      className: "overlay-background"
    }, __jsx("i", {
      "aria-hidden": "true",
      className: "fa fa-plus"
    })), __jsx("img", {
      alt: "",
      className: "img-fluid blur-up",
      src: imgItem.img
    })))));
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xs8h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-countdown-now"
var external_react_countdown_now_ = __webpack_require__("upKs");
var external_react_countdown_now_default = /*#__PURE__*/__webpack_require__.n(external_react_countdown_now_);

// CONCATENATED MODULE: ./containers/common/countdown.js
var __jsx = external_react_default.a.createElement;



const CountdownComponent = props => {
  const {
    0: style,
    1: setStyle
  } = Object(external_react_["useState"])();
  Object(external_react_["useEffect"])(() => {
    setTimeout(function () {
      setStyle({
        style: {
          display: 'none'
        }
      });
    }.bind(undefined), 1000);
  }, []);

  const Completionist = () => __jsx("span", null, "You are good to go!");

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
      return __jsx(Completionist, null);
    } else {
      // Render a countdown
      return __jsx("div", {
        className: "countdown"
      }, __jsx("ul", null, __jsx("li", null, __jsx("div", {
        className: "event-counter"
      }, __jsx("h2", null, __jsx("span", {
        id: "days",
        className: "time digits"
      }, days), __jsx("span", {
        className: "title"
      }, "days")), __jsx("div", {
        className: "set-border-left"
      }), __jsx("div", {
        className: "set-border-bottom"
      }))), __jsx("li", null, __jsx("div", {
        className: "event-counter"
      }, __jsx("h2", null, __jsx("span", {
        id: "hours",
        className: "time digits"
      }, hours), __jsx("span", {
        className: "title"
      }, "hours")), __jsx("div", {
        className: "set-border-left"
      }), __jsx("div", {
        className: "set-border-bottom"
      }))), __jsx("li", null, __jsx("div", {
        className: "event-counter"
      }, __jsx("h2", null, __jsx("span", {
        id: "minutes",
        className: "time digits"
      }, minutes), __jsx("span", {
        className: "title"
      }, "minutes")), __jsx("div", {
        className: "set-border-left"
      }), __jsx("div", {
        className: "set-border-bottom"
      }))), __jsx("li", null, __jsx("div", {
        className: "event-counter"
      }, __jsx("h2", null, __jsx("span", {
        id: "seconds",
        className: "time digits"
      }, seconds), __jsx("span", {
        className: "title"
      }, "seconds")), __jsx("div", {
        className: "set-border-left"
      }), __jsx("div", {
        className: "set-border-bottom"
      })))));
    }
  };

  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  var coundown = new Date(year, month, day + 27).getTime();
  return __jsx(external_react_["Fragment"], null, __jsx(external_react_countdown_now_default.a, {
    date: coundown,
    renderer: renderer
  }));
};

/* harmony default export */ var countdown = (CountdownComponent);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./pages/layouts/sections/wedding/countdown.js
var countdown_jsx = external_react_default.a.createElement;




const Countdown = () => countdown_jsx("section", {
  className: "wedding countdown-bg bg set-relative"
}, countdown_jsx(external_reactstrap_["Container"], null, countdown_jsx(external_reactstrap_["Row"], null, countdown_jsx(external_reactstrap_["Col"], {
  md: "8",
  className: "offset-md-2"
}, countdown_jsx("div", {
  className: "title"
}, countdown_jsx("img", {
  alt: "",
  className: "img-fluid title-img",
  src: "/assets/images/wedding-img/bottom.png"
}), countdown_jsx("div", {
  className: "main-title"
}, countdown_jsx("h2", {
  className: "gradient-text"
}, "count down")), countdown_jsx("div", {
  className: "sub-title"
}, countdown_jsx("p", null, "Everything around looks so bright and so lovely; guess why? Simply because we are getting married in days from now. We are so delighted. Thinking about how we\u2019ll look together as a married couple gives me an amazing feeling that I love to wake up to each day to our big day. Countdown begins!"))))), countdown_jsx(external_reactstrap_["Row"], null, countdown_jsx(external_reactstrap_["Col"], {
  xl: "8",
  className: "offset-xl-2"
}, countdown_jsx("div", {
  className: "wedding-time "
}, countdown_jsx("div", null, countdown_jsx("div", {
  className: "timimg-wedding"
}, countdown_jsx(countdown, null)))), countdown_jsx("div", {
  className: "schedule text-center"
}, countdown_jsx("h3", {
  className: "m-b-15 zexson-text"
}, countdown_jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-map-marker m-r-10"
}), " B-18/19 Madhavi Apartments, Krishnanagar, Ahmedabad 382345"), countdown_jsx("h4", {
  className: "schedule-date"
}, countdown_jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-calendar m-r-10"
}), "12", countdown_jsx("sup", null, "th"), " May 2022"))))));

/* harmony default export */ var wedding_countdown = __webpack_exports__["default"] = (Countdown);

/***/ })

/******/ });