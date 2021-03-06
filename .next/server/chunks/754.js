"use strict";
exports.id = 754;
exports.ids = [754];
exports.modules = {

/***/ 7754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ timeline)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/utils/use-window-size.ts
var use_window_size = __webpack_require__(2558);
;// CONCATENATED MODULE: ./src/components/ui/vertical-timeline.tsx




const VerticalTimeline = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container mx-auto w-full h-1/2",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "relative wrap overflow-hidden p-10 h-1/2 vertical-timeline-wrapper ",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "absolute h-[58%] vertical-timeline-line left-[32%] sm:left-[32.5%] smJl:left-[33%]",
          style: {
            top: "20%"
          }
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "mb-1 flex justify-end items-center w-full right-timeline",
          "data-aos": "fade-right",
          "data-aos-delay": "800",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "z-20 flex items-center order-1 shadow-xl w-8 h-8 rounded-full vertical-timeline-date"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "order-1  rounded-lg shadow-xl w-8/12 pl-3 py-4 text-center vertical-timeline-text ",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "!text-[#E5C289] text-sm sm:!text-[22px]",
              children: "07/10"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "text-xs leading-snug tracking-wide text-gray-900 text-opacity-100",
              children: "Nh\u1EEFng th\u01B0\u01A1ng hi\u1EC7u g\xF3p m\u1EB7t t\u1EA1i ch\u01B0\u01A1ng tr\xECnh"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "mb-1 flex justify-end items-center w-full right-timeline",
          "data-aos": "fade-right",
          "data-aos-delay": "900",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "z-20 flex items-center order-1 shadow-xl w-8 h-8 rounded-full vertical-timeline-date"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "order-1  rounded-lg shadow-xl w-8/12 pl-3 py-4  text-center vertical-timeline-text ",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "!text-[#E5C289] text-sm sm:!text-[22px]",
              children: "09/10"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "text-xs leading-snug tracking-wide text-gray-900 text-opacity-100",
              children: "Livestream \u0111\u1EA5u gi\xE1 v\xE0 m\u1EDF b\xE1n ch\xEDnh th\u1EE9c - L\u1EA7n 1"
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "mb-1 flex justify-end items-center w-full right-timeline",
          "data-aos": "fade-right",
          "data-aos-delay": "1000",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "z-20 flex items-center order-1 shadow-xl w-8 h-8 rounded-full vertical-timeline-date"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "order-1  rounded-lg shadow-xl w-8/12 pl-3 py-4  text-center vertical-timeline-text ",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "!text-[#E5C289] text-sm sm:!text-[22px]",
              children: "30/10"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "text-xs leading-snug tracking-wide text-gray-900 text-opacity-100",
              children: "Livestream \u0111\u1EA5u gi\xE1 v\xE0 m\u1EDF b\xE1n ch\xEDnh th\u1EE9c - L\u1EA7n 2"
            })]
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const vertical_timeline = (VerticalTimeline);
;// CONCATENATED MODULE: ./src/components/ui/timeline.tsx





const VALUES = (/* unused pure expression or super */ null && (["2008-06-01", "2010-06-01", "2013-06-01", "2015-03-01", "2019-01-01", "2019-06-17", "2019-08-01"]));

const Timeline = () => {
  // const [value, setValue] = useState<any>({ value: 0, previous: 0 });
  // const dates = [
  //     "6/12/2015",
  //     "8/15/2015",
  //     "10/22/2015",
  //     "11/2/2015",
  //     "12/22/2015",
  // ];
  const {
    width
  } = (0,use_window_size/* useWindowSize */.i)();
  return width < 780 ? /*#__PURE__*/jsx_runtime_.jsx(vertical_timeline, {}) : /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "timeline-wrapper",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "middle-line"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "box box-bottom",
        "data-aos": "fade-up",
        "data-aos-delay": "800",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "date"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "box-content",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "!text-[#E5C289] !text-[22px]",
            children: "07/10"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Nh\u1EEFng th\u01B0\u01A1ng hi\u1EC7u g\xF3p m\u1EB7t t\u1EA1i ch\u01B0\u01A1ng tr\xECnh "
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "box box-bottom",
        "data-aos": "fade-up",
        "data-aos-delay": "900",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "date"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "box-content",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "!text-[#E5C289] !text-[22px]",
            children: "09/10"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Livestream \u0111\u1EA5u gi\xE1 v\xE0 m\u1EDF b\xE1n ch\xEDnh th\u1EE9c - L\u1EA7n 1"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "box box-bottom",
        "data-aos": "fade-up",
        "data-aos-delay": "1000",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "date"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "box-content",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "!text-[#E5C289] !text-[22px]",
            children: "30/10"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Livestream \u0111\u1EA5u gi\xE1 v\xE0 m\u1EDF b\xE1n ch\xEDnh th\u1EE9c - L\u1EA7n 2"
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const timeline = (Timeline);

/***/ }),

/***/ 2558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* reexport default from dynamic */ react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5319);
/* harmony import */ var react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_use_lib_useWindowSize__WEBPACK_IMPORTED_MODULE_0__);


/***/ })

};
;