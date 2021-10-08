"use strict";
exports.id = 722;
exports.ids = [722];
exports.modules = {

/***/ 6722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var _utils_toBase64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6027);
/* harmony import */ var _utils_shimmer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(281);
/* harmony import */ var _utils_use_window_size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2410);






const PageHeader = ({
  pageSubHeader = "",
  pageHeader = ""
}) => {
  const {
    width
  } = (0,_utils_use_window_size__WEBPACK_IMPORTED_MODULE_2__/* .useWindowSize */ .i)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    "data-aos": "fade-up",
    "data-aos-delay": "1000",
    className: "flex justify-center relative bg-no-repeat bg-center bg-cover h-full page-header" // style={{
    //     backgroundImage:
    //         "url(/assets/images/banner/banner-charity.png)",
    // }}
    ,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
      src: width < 520 ? "/assets/images/banner/Mobile-Landing-Page.png" : "/assets/images/banner/Cover-Event-Charity.png",
      quality: 100,
      placeholder: "blur",
      blurDataURL: `data:image/svg+xml;base64,${(0,_utils_toBase64__WEBPACK_IMPORTED_MODULE_3__/* .toBase64 */ .s)((0,_utils_shimmer__WEBPACK_IMPORTED_MODULE_4__/* .shimmer */ .f)(565, 275))}`,
      width: width < 520 ? 500 : 1600,
      height: width < 520 ? 850 : 700
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);

/***/ })

};
;