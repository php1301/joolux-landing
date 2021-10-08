"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(2364);
// EXTERNAL MODULE: ./src/components/index.ts + 9 modules
var components = __webpack_require__(5990);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(3295);
;// CONCATENATED MODULE: external "lodash"
const external_lodash_namespaceObject = require("lodash");
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
// EXTERNAL MODULE: external "react-countdown"
var external_react_countdown_ = __webpack_require__(7183);
// EXTERNAL MODULE: ./src/components/ui/button/index.tsx
var ui_button = __webpack_require__(1175);
;// CONCATENATED MODULE: ./src/components/common/countdown.tsx




const Countdown = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 7183, 23)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7183)],
    modules: ["..\\components\\common\\countdown.tsx -> " + "react-countdown"]
  }
});



const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed
}) => {
  if (completed) {
    // Render a completed state
    return /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: "Time Over!"
    });
  } else {
    // Render a countdown
    const formattedDays = (0,external_react_countdown_.zeroPad)(days).length < 3 ? (0,external_react_countdown_.zeroPad)(days).split("") : (0,external_react_countdown_.zeroPad)(days);
    const formattedHours = (0,external_react_countdown_.zeroPad)(hours).length < 3 ? (0,external_react_countdown_.zeroPad)(hours).split("") : (0,external_react_countdown_.zeroPad)(hours);
    const formattedMinutes = (0,external_react_countdown_.zeroPad)(minutes).length < 3 ? (0,external_react_countdown_.zeroPad)(minutes).split("") : (0,external_react_countdown_.zeroPad)(minutes);
    const formattedSeconds = (0,external_react_countdown_.zeroPad)(seconds).length < 3 ? (0,external_react_countdown_.zeroPad)(seconds).split("") : (0,external_react_countdown_.zeroPad)(seconds);
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center space-s-1.5 md:space-s-2.5 justify-center",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "text-heading text-sm sm:text-lg md:text-md font-normal text-center uppercase",
        children: [(0,external_lodash_namespaceObject.isArray)(formattedDays) ? /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex",
          children: formattedDays.map(day => {
            return /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "countdown-item text-[#101010] text-xs sm:text-2xl md:text-6xl  w-6 h-6 sm:w-12 sm:h-14 md:w-16 md:h-20 flex items-center justify-center mb-3 mr-2 font-normal",
              children: day
            });
          })
        }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "countdown-item text-[#101010] sm:text-2xl md:text-6xl  w-6 h-6 sm:w-12 sm:h-14 md:w-16 md:h-20 flex items-center justify-center mb-3 font-normal",
          children: formattedDays
        }), "ng\xE0y"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "text-heading text-sm sm:text-lg md:text-md font-normal text-center uppercase",
        children: [(0,external_lodash_namespaceObject.isArray)(formattedHours) ? /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex",
          children: formattedHours.map(hour => {
            return /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "countdown-item text-[#101010] text-xs sm:text-2xl md:text-6xl  w-6 h-6 sm:w-12 sm:h-14 md:w-16 md:h-20 flex items-center justify-center mb-3 mr-2 font-normal",
              children: hour
            });
          })
        }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "countdown-item text-[#101010] text-xs sm:text-2xl md:text-6xl  w-6 h-6 sm:w-12 sm:h-14 md:w-16 md:h-20 flex items-center justify-center mb-3 font-normal",
          children: formattedHours
        }), "gi\u1EDD"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "text-heading text-sm sm:text-lg md:text-md font-normal text-center uppercase",
        children: [(0,external_lodash_namespaceObject.isArray)(formattedMinutes) ? /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex",
          children: formattedMinutes.map(minute => {
            return /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "countdown-item text-[#101010] text-xs sm:text-2xl md:text-6xl  w-6 h-6 sm:w-12 sm:h-14 md:w-16 md:h-20 flex items-center justify-center mb-3 mr-2 font-normal",
              children: minute
            });
          })
        }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "countdown-item text-[#101010] text-xs sm:text-2xl md:text-6xl  w-6 h-6 sm:w-12 sm:h-14 md:w-16 md:h-20 flex items-center justify-center mb-3 font-normal",
          children: formattedMinutes
        }), "ph\xFAt"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "text-heading text-sm sm:text-lg md:text-md font-normal text-center uppercase",
        children: [(0,external_lodash_namespaceObject.isArray)(formattedSeconds) ? /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex",
          children: formattedSeconds.map(second => {
            return /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "countdown-item text-[#101010] text-xs sm:text-2xl md:text-6xl  w-6 h-6 sm:w-12 sm:h-14 md:w-16 md:h-20 flex items-center justify-center mb-3 mr-2 font-normal",
              children: second
            });
          })
        }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "countdown-item text-[#101010] text-xs sm:text-2xl md:text-6xl  w-6 h-6 sm:w-12 sm:h-14 md:w-16 md:h-20 flex items-center justify-center mb-3 font-normal",
          children: formattedSeconds
        }), "gi\xE2y"]
      })]
    });
  }
};

const CountdownComponent = () => {
  const date = "2021-10-09T19:30:00+0700";
  const url = "https://www.facebook.com/events/806937079986486/?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22page%22%7D]%7D";

  function handleClick(url) {
    window.open(url, "_blank");
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "text-center mt-8",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Countdown, {
      date: date,
      intervalDelay: 1000,
      renderer: renderer
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* Button */.z, {
        className: "h-full w-1/2 md:w-1/4 mt-5  text-[#101010] text-xs md:text-md font-bold text-center uppercase countdown-button hover:text-[#101010]",
        onClick: () => handleClick(url),
        children: "Xem ch\u01B0\u01A1ng Tr\xECnh"
      })
    })]
  });
};

/* harmony default export */ const countdown = (CountdownComponent);
;// CONCATENATED MODULE: ./src/containers/campaigns/charity/charity-layout.tsx




 // import Timeline from "@components/ui/timeline";

const Timeline = dynamic_default()(() => __webpack_require__.e(/* import() */ 754).then(__webpack_require__.bind(__webpack_require__, 7754)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7754)],
    modules: ["..\\containers\\campaigns\\charity\\charity-layout.tsx -> " + "@components/ui/timeline"]
  }
});
const PageHeader = dynamic_default()(() => __webpack_require__.e(/* import() */ 722).then(__webpack_require__.bind(__webpack_require__, 6722)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6722)],
    modules: ["..\\containers\\campaigns\\charity\\charity-layout.tsx -> " + "@components/ui/page-header"]
  }
});

const CharityLayout = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "section-1",
    children: [/*#__PURE__*/jsx_runtime_.jsx(PageHeader, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mx-auto max-w-[1400px] text-center pt-8 smJl:pb-16 pb-10 px-8 overflow-hidden",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "800",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "font-brand text-black uppercase text-lg md:text-3xl",
          children: "S\u1EF1 ki\u1EC7n m\u1EDF b\xE1n g\xE2y qu\u1EF9"
        }), /*#__PURE__*/jsx_runtime_.jsx(countdown, {})]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        "data-aos": "fade-up",
        "data-aos-delay": "1000",
        className: "mt-16 relative section-timeline",
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          className: "mx-auto",
          src: "/assets/images/divider.jpg"
        }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "font-body text-[#18191f] text-lg md:text-3xl mt-6 font-medium",
          children: "Timeline ch\u01B0\u01A1ng tr\xECnh"
        }), /*#__PURE__*/jsx_runtime_.jsx(Timeline, {})]
      })]
    })]
  });
};

/* harmony default export */ const charity_layout = (CharityLayout);
;// CONCATENATED MODULE: ./src/containers/campaigns/charity/section-2.tsx




const SectionTwo = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    "data-aos": "fade-up",
    "data-aos-delay": "1000",
    className: "mx-auto max-w-[1400px] text-center pt-8 smJl:pb-16 pb-10 px-8 overflow-hidden",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: "font-brand text-black uppercase text-lg md:text-3xl",
      children: "Kh\u1EDFi ngu\u1ED3n y\xEAu th\u01B0\u01A1ng"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      className: "mt-4 font-light text-[18px] font-body text-justify md:text-center",
      children: ["Tuy d\u1ECBch b\u1EC7nh \u0111\xE3 \u0111\u01B0\u1EE3c ph\u1EA7n n\xE0o ki\u1EC3m so\xE1t nh\u01B0ng bao nhi\xEAu kh\xF3 kh\u0103n, \u1EA3nh h\u01B0\u1EDFng v\u1EABn c\xF2n \u0111\xF3, v\u1EDBi khao kh\xE1t \u0111\u01B0\u1EE3c \u0111\xF3ng g\xF3p v\xEC c\u1ED9ng \u0111\u1ED3ng trong s\u1EF1 nghi\u1EC7p ch\u1ED1ng d\u1ECBch. Ch\xEDnh \u0111\u1ED9ng l\u1EF1c \u0111\xF3 \u0111\xE3 th\xF4i th\xFAc Joolux kh\u1EDFi ngu\u1ED3n d\u1EF1 \xE1n \u201C Trao t\u1EE7 \u0111\u1ED3 y\xEAu th\u01B0\u01A1ng\u201D h\u1EE3p t\xE1c c\xF9ng nh\u1EEFng ng\u01B0\u1EDDi c\xF3 s\u1EE9c \u1EA3nh h\u01B0\u1EDFng, v\u1EDBi m\u1EE5c ti\xEAu d\xF9ng s\u1EE9c m\u1EA1nh c\u1EE7a nh\u1EEFng ng\u01B0\u1EDDi c\xF3 s\u1EE9c \u1EA3nh h\u01B0\u1EDFng, t\xE1c \u0111\u1ED9ng v\xE0 lan to\u1EA3 \u0111\u1EC3 c\xF9ng s\u1EBB chia.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " M\u1EE5c ti\xEAu g\xE2y qu\u1EF9 mua m\u1ED9t chi\u1EBFc xe c\u1EE9u th\u01B0\u01A1ng h\u1ED7 tr\u1EE3 \u0111\u1ED9i ng\u0169 y b\xE1c s\u0129, nh\u1EEFng c\xE1 nh\xE2n kh\xF3 kh\u0103n. S\u1ED1 ti\u1EC1n thu \u0111\u01B0\u1EE3c s\u1EBD \u0111\u01B0\u1EE3c \u0111\u01A1n v\u1ECB \u0111\u1ED3ng t\u1ED5 ch\u1EE9c qu\u1EF9 CTXH Anh H\xF9ng L\u1EF1c L\u01B0\u1EE3ng V\u0169 Trang Nh\xE2n D\xE2n Phan Tr\u1ECDng B\xECnh th\u1EF1c hi\u1EC7n trao t\u1EB7ng."]
    })]
  });
};

/* harmony default export */ const section_2 = (SectionTwo);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/containers/campaigns/charity/section-3.tsx





const SectionThree = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "section-1",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "1000",
      className: "mx-auto max-w-[1400px] text-center pt-8 smJl:pb-16 pb-10 px-4 sm:px-8 overflow-hidden",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "font-brand text-black uppercase text-lg md:text-3xl",
        children: "\"T\u1EE7 \u0110\u1ED3 Y\xEAu Th\u01B0\u01A1ng\""
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between md:flex-row flex-col mt-10 items-center md:items-stretch",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "section-three-card w-full md:w-1/3 max-w-[400px] p-4 flex flex-col items-center px-4 mb-10",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/assets/images/Group.svg",
            width: 70,
            height: 90
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "font-normal text-[22px] text-heading",
            children: "Trao y\xEAu th\u01B0\u01A1ng"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-[#231F20]",
            children: "N\u01A1i b\u1EA1n c\xF3 th\u1EC3 \u0111\xF3ng g\xF3p nh\u1EEFng m\xF3n h\xE0ng hi\u1EC7u ( t\xFAi x\xE1ch, \xE1o qu\u1EA7n, gi\xE0y d\xE9p\u2026) cho qu\u1EF9. M\u1ED7i m\xF3n \u0111\u1ED3 trao t\u1EB7ng kh\xF4ng ch\u1EC9 v\u1EC1 gi\xE1 tr\u1ECB v\u1EADt ch\u1EA5t m\xE0 n\xF3 c\xF2n mang trong m\xECnh t\xECnh y\xEAu th\u01B0\u01A1ng g\u1EEDi v\xE0o chuy\u1EBFn xe c\u1EA5p c\u1EE9u ng\xE0y \u0111\xEAm c\u1EE9u t\u1EEBng sinh m\u1EC7nh."
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "section-three-card w-full md:w-1/3 max-w-[400px] p-4 flex flex-col items-center px-4 mb-10",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/assets/images/heart.svg",
            width: 70,
            height: 90
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "font-normal text-[22px] text-heading",
            children: "Nh\u1EADn y\xEAu th\u01B0\u01A1ng"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-[#231F20]",
            children: "N\u01A1i b\u1EA1n c\xF3 th\u1EC3 \u0111\u1EB7t mua nh\u1EEFng s\u1EA3n ph\u1EA9m nh\u01B0 m\u1ED9t c\xE1ch \u0111\u1EC3 \u0111\u1ED3ng h\xE0nh c\xF9ng Joolux tr\xEAn h\xE0nh tr\xECnh g\xF3p s\u1EE9c v\xEC c\u1ED9ng \u0111\u1ED3ng. \u201CTrao gi\xE1 tr\u1ECB - l\xE3i y\xEAu th\u01B0\u01A1ng\u201D, khi c\u1EA7m tr\xEAn tay nh\u1EEFng m\xF3n \u0111\u1ED3 \u0111\u1EA5u gi\xE1, nh\u1EEFng m\xF3n \u0111\u1ED3 mang nh\u1EEFng c\xE2u chuy\u1EC7n \u0111\u1EB7c bi\u1EC7t v\u1EC1 t\xECnh ng\u01B0\u1EDDi, v\u1EC1 s\u1EF1 s\u1EBB chia."
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "section-three-card  w-full md:w-1/3 max-w-[400px]  p-4 flex flex-col items-center px-4 mb-10",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/assets/images/heart-share.svg",
            width: 70,
            height: 100
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "font-normal text-[22px] text-heading",
            children: "Lan to\u1EA3 \u0111i\u1EC1u t\xEDch c\u1EF1c"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-[#231F20]",
            children: "N\u01A1i b\u1EA1n c\xF3 th\u1EC3 chia s\u1EBB v\xE0 lan t\u1ECFa nh\u1EEFng \u0111i\u1EC1u nh\u1EAFn g\u1EEDi \xFD ngh\u0129a; m\u1ED7i c\xE1 nh\xE2n d\xF9ng s\u1EE9c \u1EA3nh h\u01B0\u1EDFng c\u1EE7a m\xECnh lan t\u1ECFa, mang ch\u01B0\u01A1ng tr\xECnh c\xF3 th\u1EC3 ph\u1EE7 s\xF3ng r\u1ED9ng r\xE3i \u0111\u1EBFn nhi\u1EC1u h\u01A1n nh\u1EEFng t\u1EA5m l\xF2ng thi\u1EC7n nguy\xEAn, mong mu\u1ED1n g\xF3p s\u1EE9c v\xEC c\u1ED9ng \u0111\u1ED3ng."
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const section_3 = (SectionThree);
// EXTERNAL MODULE: ./src/utils/toBase64.ts
var toBase64 = __webpack_require__(6027);
// EXTERNAL MODULE: ./src/utils/shimmer.ts
var shimmer = __webpack_require__(281);
// EXTERNAL MODULE: ./src/contexts/ui.context.tsx
var ui_context = __webpack_require__(7014);
;// CONCATENATED MODULE: ./src/containers/campaigns/charity/section-4.tsx








const SectionFour = () => {
  const {
    setModalView,
    setImageView,
    openModal
  } = (0,ui_context/* useUI */.l8)();

  const openModalView = url => {
    console.log(url);
    setImageView(url);
    setModalView("IMAGE_VIEW");
    openModal();
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      "data-aos": "fade-right",
      "data-aos-delay": "1000",
      className: "mx-auto max-w-[1400px] text-center pt-8 pb-4 px-2 md:px-8 overflow-hidden",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "font-brand text-black uppercase text-lg md:text-3xl mb-6",
        children: "S\u1EA3n ph\u1EA9m \u0111\u1EA5u gi\xE1"
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        className: "mx-auto",
        src: "/assets/images/divider.jpg"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "grid grid-cols-2 md:grid-cols-3 mt-10 justify-items-center sm:items-center md:items-stretch auction-grid",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          onClick: () => {
            openModalView("/assets/images/popup1.png");
          },
          className: "w-full max-w-[400px] p-1 px-3 mb-10 text-left auction-item",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/assets/images/sp-1.jpg",
            width: 350,
            placeholder: "blur",
            blurDataURL: `data:image/svg+xml;base64,${(0,toBase64/* toBase64 */.s)((0,shimmer/* shimmer */.f)(565, 275))}`,
            height: 450,
            quality: 100
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "font-bold text-[14px] text-gray-400 uppercase mt-6 mb-2",
            children: "S\xF4ng Th\u01B0\u01A1ng"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0",
            children: "C\u1EB7p \u0111\xE1 qu\xFD Natural swiss topaz & peridot"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "text-[#231f20] font-medium text-[16px] smJl:text-[20px] mb-0",
            children: ["Gi\xE1 kh\u1EDFi \u0111i\u1EC3m:", " ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: "text-[20px] smJl:text-[26px]",
              children: [" ", "3.000.000\u0111"]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "w-[400px] lg:w-[500px]] h-[500px] bg-[#fcf9f3] overflow-hidden rounded-md auction-item-hover",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "items-center",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "flex-shrink-0 items-center justify-center bg-gray-200 flex lg:w-[520px] xl:w-auto",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: "/assets/images/popup1.png",
                  alt: "Thumbnail",
                  width: 755,
                  height: 655,
                  quality: 100,
                  className: "object-cover w-full h-full"
                })
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          onClick: () => {
            openModalView("/assets/images/popup3.png");
          },
          className: "w-full max-w-[400px] p-1 px-3 mb-10 text-left auction-item",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/assets/images/sp-2.jpg",
            width: 350,
            placeholder: "blur",
            blurDataURL: `data:image/svg+xml;base64,${(0,toBase64/* toBase64 */.s)((0,shimmer/* shimmer */.f)(565, 275))}`,
            height: 450,
            quality: 100
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "font-bold text-[14px] text-gray-400 uppercase mt-6 mb-2",
            children: "The Greenery Art"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0",
            children: "T\xE1c ph\u1EA9m tranh s\u01A1n d\u1EA7u \u0110\u1ED3ng B\u1EB1ng (n\u0103m 2018)"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "text-[#231f20] font-medium text-[16px] smJl:text-[20px] mb-0",
            children: ["Gi\xE1 kh\u1EDFi \u0111i\u1EC3m:", " ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: "text-[20px] smJl:text-[26px]",
              children: [" ", "2.000.000\u0111"]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "w-[400px] lg:w-[500px]] h-[500px] bg-[#fcf9f3] overflow-hidden rounded-md auction-item-hover",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "items-center",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "flex-shrink-0 items-center justify-center bg-gray-200 flex lg:w-[520px] xl:w-auto",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: "/assets/images/popup3.png",
                  alt: "Thumbnail",
                  width: 755,
                  height: 655,
                  quality: 100,
                  className: "object-cover w-full h-full"
                })
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          onClick: () => {
            openModalView("/assets/images/popup2.png");
          },
          className: "w-full max-w-[400px] p-1 items-start px-3 mb-10 text-left auction-item",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/assets/images/sp-10.png",
            width: 350,
            placeholder: "blur",
            blurDataURL: `data:image/svg+xml;base64,${(0,toBase64/* toBase64 */.s)((0,shimmer/* shimmer */.f)(565, 275))}`,
            height: 450,
            quality: 100
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "font-bold text-[14px] text-gray-400 uppercase mt-6 mb-2",
            children: "S\xF4ng Th\u01B0\u01A1ng"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0",
            children: "Khuy\xEAn tai v\xE0ng 14K"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "text-[#231f20] font-medium text-[16px] smJl:text-[20px] mb-0",
            children: ["Gi\xE1 kh\u1EDFi \u0111i\u1EC3m:", " ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: "text-[20px] smJl:text-[26px]",
              children: [" ", "6.500.000\u0111"]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "w-[400px] lg:w-[500px]] h-[500px] bg-[#fcf9f3] overflow-hidden rounded-md auction-item-hover-right",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "items-center",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "flex-shrink-0 items-center justify-center bg-gray-200 flex lg:w-[520px] xl:w-auto",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: "/assets/images/popup2.png",
                  alt: "Thumbnail",
                  width: 755,
                  height: 655,
                  quality: 100,
                  className: "object-cover w-full h-full"
                })
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "w-full max-w-[400px] p-1  items-start px-3 mb-10 text-left",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/assets/images/sp-13.png",
            width: 350,
            placeholder: "blur",
            blurDataURL: `data:image/svg+xml;base64,${(0,toBase64/* toBase64 */.s)((0,shimmer/* shimmer */.f)(565, 275))}`,
            height: 450,
            quality: 100
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "font-bold text-[14px] text-gray-400 uppercase mt-6 mb-2",
            children: "Brand"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0",
            children: "S\u1EA3n ph\u1EA9m \u0111\u1EB7c bi\u1EC7t"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-[#231f20] font-medium text-[16px] smJl:text-[20px] mb-0",
            children: "Gi\xE1 kh\u1EDFi \u0111i\u1EC3m: c\xF4ng b\u1ED1 v\xE0o 09.10.2021"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "w-full max-w-[400px] p-1  items-start px-3 mb-10 text-left",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/assets/images/sp-13.png",
            width: 350,
            placeholder: "blur",
            blurDataURL: `data:image/svg+xml;base64,${(0,toBase64/* toBase64 */.s)((0,shimmer/* shimmer */.f)(565, 275))}`,
            height: 450,
            quality: 100
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "font-bold text-[14px] text-gray-400 uppercase mt-6 mb-2",
            children: "Brand"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0",
            children: "S\u1EA3n ph\u1EA9m \u0111\u1EB7c bi\u1EC7t"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-[#231f20] font-medium text-[16px] smJl:text-[20px] mb-0",
            children: "Gi\xE1 kh\u1EDFi \u0111i\u1EC3m: c\xF4ng b\u1ED1 v\xE0o 09.10.2021"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "w-full smJl:w-1/3 max-w-[400px] p-1  items-start px-3 mb-10 text-left"
        })]
      })]
    })
  });
};

/* harmony default export */ const section_4 = (SectionFour);
;// CONCATENATED MODULE: ./src/containers/campaigns/charity/section-5.tsx








const SectionFive = () => {
  function handleClick(url) {
    window.open(url, "_blank");
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    "data-aos": "fade-right",
    "data-aos-delay": "1000",
    className: "mx-auto max-w-[1400px] text-center pt-4 smJl:pb-16 pb-10 px-8 overflow-hidden",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: "font-brand text-black uppercase text-lg md:text-3xl mb-6",
      children: "S\u1EA3n ph\u1EA9m b\xE1n"
    }), /*#__PURE__*/jsx_runtime_.jsx("img", {
      className: "mx-auto",
      src: "/assets/images/divider.jpg"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "grid grid-cols-2 md:grid-cols-3 mt-10 justify-items-center smJl:items-center md:items-stretch",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        onClick: () => handleClick("https://joolux.com/i/thi-t-k-anna-house-ba01/18929"),
        className: "w-full  max-w-[400px] p-4  px-4 mb-10 text-left cursor-pointer",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/assets/images/sp-4.jpg",
          width: 350,
          placeholder: "blur",
          blurDataURL: `data:image/svg+xml;base64,${(0,toBase64/* toBase64 */.s)((0,shimmer/* shimmer */.f)(565, 275))}`,
          height: 450,
          quality: 100
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "font-bold text-[14px] text-gray-400 uppercase mt-6 mb-0",
          children: "Anna House"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0",
          children: "Anna House BA01"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0",
          children: ["Gi\xE1 g\u1ED1c:", " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "line-through",
            children: " 2.280.000\u0111"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "text-[#231f20] font-medium text-[16px] smJl:text-[20px] mb-0",
          children: ["Gi\xE1 b\xE1n:", " ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "text-[20px] smJl:text-[23px]",
            children: [" ", "1.280.000\u0111"]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        onClick: () => handleClick("https://joolux.com/i/nh-n-saphire-bc02/18934"),
        className: "w-full max-w-[400px] p-4  px-4 mb-10 text-left cursor-pointer",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/assets/images/sp-9.png",
          width: 350,
          placeholder: "blur",
          blurDataURL: `data:image/svg+xml;base64,${(0,toBase64/* toBase64 */.s)((0,shimmer/* shimmer */.f)(565, 275))}`,
          height: 450,
          quality: 100
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "font-bold text-[14px] text-gray-400 uppercase mt-6 mb-0",
          children: "The Mien"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0",
          children: "Nh\u1EABn Sapphire"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0",
          children: ["Gi\xE1 g\u1ED1c:", " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "line-through",
            children: " 7.000.000\u0111"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "text-[#231f20] font-medium text-[16px] smJl:text-[20px] mb-0",
          children: ["Gi\xE1 b\xE1n:", " ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "text-[20px] smJl:text-[23px]",
            children: [" ", "3.900.000\u0111"]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        onClick: () => handleClick("https://joolux.com/i/versace-wallet/18948."),
        className: "w-full  max-w-[400px] p-4  px-4 mb-10 text-left cursor-pointer",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/assets/images/sp-3.png",
          width: 350,
          placeholder: "blur",
          blurDataURL: `data:image/svg+xml;base64,${(0,toBase64/* toBase64 */.s)((0,shimmer/* shimmer */.f)(565, 275))}`,
          height: 450,
          quality: 100
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "font-bold text-[14px] text-gray-400 uppercase mt-6 mb-0",
          children: "MVIO"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0",
          children: "V\xED Versace"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0",
          children: ["Gi\xE1 g\u1ED1c:", " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "line-through",
            children: " 5.700.000\u0111"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "text-[#231f20] font-medium text-[16px] smJl:text-[20px] mb-0",
          children: ["Gi\xE1 b\xE1n:", " ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "text-[20px] smJl:text-[23px]",
            children: [" ", "3.000.000\u0111"]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        onClick: () => handleClick("https://joolux.com/i/d-m-den-h-a-ti-t-hoa-bc04/18936"),
        className: "w-full max-w-[400px] p-4  px-4 mb-10 text-left cursor-pointer",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/assets/images/sp-11.png",
          width: 350,
          placeholder: "blur",
          blurDataURL: `data:image/svg+xml;base64,${(0,toBase64/* toBase64 */.s)((0,shimmer/* shimmer */.f)(565, 275))}`,
          height: 450,
          quality: 100
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "font-bold text-[14px] text-gray-400 uppercase mt-6 mb-0",
          children: "The Mien"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0",
          children: "\u0110\u1EA7m h\u1ECDa ti\u1EBFt in hoa BC04"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0",
          children: ["Gi\xE1 g\u1ED1c:", " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "line-through",
            children: " 5.900.000\u0111"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "text-[#231f20] font-medium text-[16px] smJl:text-[20px] mb-0",
          children: ["Gi\xE1 b\xE1n:", " ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "text-[20px] smJl:text-[23px]",
            children: [" ", "2.900.000\u0111"]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        onClick: () => handleClick("https://joolux.com/i/giay-cao-got-trinnie-bt01/18937"),
        className: "w-full  max-w-[400px] p-4  px-4 mb-10 text-left cursor-pointer",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/assets/images/sp-7.png",
          width: 350,
          placeholder: "blur",
          blurDataURL: `data:image/svg+xml;base64,${(0,toBase64/* toBase64 */.s)((0,shimmer/* shimmer */.f)(565, 275))}`,
          height: 450,
          quality: 100
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "font-bold text-[14px] text-gray-400 uppercase mt-6 mb-0",
          children: "Trinnie"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0",
          children: "Gi\xE0y Cao G\xF3t BT01"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0",
          children: ["Gi\xE1 g\u1ED1c:", " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "line-through",
            children: " 3.890.000\u0111"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "text-[#231f20] font-medium text-[16px] smJl:text-[20px] mb-0",
          children: ["Gi\xE1 b\xE1n:", " ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "text-[20px] smJl:text-[23px]",
            children: [" ", "2.000.000\u0111"]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        onClick: () => handleClick("https://joolux.com/i/nh-n-saphire-bc01/18933"),
        className: "w-full  max-w-[400px] p-4  px-4 mb-10 text-left cursor-pointer",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/assets/images/sp-12.png",
          width: 350,
          placeholder: "blur",
          blurDataURL: `data:image/svg+xml;base64,${(0,toBase64/* toBase64 */.s)((0,shimmer/* shimmer */.f)(565, 275))}`,
          height: 450,
          quality: 100
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "font-bold text-[14px] text-gray-400 uppercase mt-6 mb-0",
          children: "The Mien"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0",
          children: "Nh\u1EABn Sapphire"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "text-[#231f20] font-normal text-[16px] smJl:text-[20px] mb-0",
          children: ["Gi\xE1 g\u1ED1c:", " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "line-through",
            children: " 5.000.000\u0111"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "text-[#231f20] font-medium text-[16px] smJl:text-[20px] mb-0",
          children: ["Gi\xE1 b\xE1n:", " ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "text-[20px] smJl:text-[23px]",
            children: [" ", "2.500.000\u0111"]
          })]
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(ui_button/* Button */.z, {
      className: "h-full w-1/2 md:w-1/4 mt-5  text-white text-xs md:text-md font-medium text-center uppercase countdown-button hover:text-[#101010]",
      onClick: () => handleClick("https://joolux.com/promotion/tu-do-trao-yeu-thuong"),
      children: "Xem th\xEAm"
    })]
  });
};

/* harmony default export */ const section_5 = (SectionFive);
// EXTERNAL MODULE: ./src/utils/use-window-size.ts + 1 modules
var use_window_size = __webpack_require__(2410);
;// CONCATENATED MODULE: ./src/containers/campaigns/charity/section-6.tsx




 // import { toBase64 } from "@utils/toBase64";
// import { Button } from "@components/ui/button";
// import { shimmer } from "@utils/shimmer";

const fundersImg = [{
  id: 1,
  image: {
    mobile: {
      width: 84.83,
      height: 84.83
    },
    desktop: {
      width: 139,
      height: 139
    }
  }
}, {
  id: 2,
  image: {
    mobile: {
      width: 200.88,
      height: 41.5
    },
    desktop: {
      width: 339,
      height: 68
    }
  }
}, {
  id: 3,
  image: {
    mobile: {
      width: 97,
      height: 39
    },
    desktop: {
      width: 160,
      height: 64
    }
  }
}, {
  id: 4,
  image: {
    mobile: {
      width: 80,
      height: 39
    },
    desktop: {
      width: 132,
      height: 65
    }
  }
}, {
  id: 5,
  image: {
    mobile: {
      width: 83,
      height: 38
    },
    desktop: {
      width: 137,
      height: 63
    }
  }
}, {
  id: 6,
  image: {
    mobile: {
      width: 73,
      height: 84
    },
    desktop: {
      width: 121,
      height: 121
    }
  }
}, {
  id: 7,
  image: {
    mobile: {
      width: 133.65,
      height: 86.66
    },
    desktop: {
      width: 219,
      height: 142
    }
  }
}, {
  id: 8,
  image: {
    mobile: {
      width: 68.35,
      height: 34.78
    },
    desktop: {
      width: 112,
      height: 57
    }
  }
}, {
  id: 9,
  image: {
    mobile: {
      width: 172,
      height: 178
    },
    desktop: {
      width: 172,
      height: 178
    }
  }
}, {
  id: 10,
  image: {
    mobile: {
      width: 107.41,
      height: 68.96
    },
    desktop: {
      width: 250,
      height: 200
    }
  }
}, {
  id: 11,
  image: {
    mobile: {
      width: 84.83,
      height: 10.98
    },
    desktop: {
      width: 139,
      height: 18
    }
  }
}, {
  id: 12,
  image: {
    mobile: {
      width: 89.1,
      height: 17.09
    },
    desktop: {
      width: 146,
      height: 28
    }
  }
}, {
  id: 13,
  image: {
    mobile: {
      width: 57.97,
      height: 37.84
    },
    desktop: {
      width: 145,
      height: 67
    }
  }
}, {
  id: 14,
  image: {
    mobile: {
      width: 77.5,
      height: 38.45
    },
    desktop: {
      width: 127,
      height: 63
    }
  }
}, {
  id: 15,
  image: {
    mobile: {
      width: 101.91,
      height: 10.37
    },
    desktop: {
      width: 167,
      height: 17
    }
  }
}, {
  id: 16,
  image: {
    mobile: {
      width: 127,
      height: 63
    },
    desktop: {
      width: 55,
      height: 55
    }
  }
}, {
  id: 17,
  image: {
    mobile: {
      width: 84.83,
      height: 26.85
    },
    desktop: {
      width: 139,
      height: 44
    }
  }
}];

function getImage(deviceWidth, imgIndex) {
  const imgObj = fundersImg.filter(img => img.id == imgIndex)[0];

  if (imgIndex === 2) {
    return deviceWidth < 942 ? {
      width: imgObj.image.mobile.width,
      height: imgObj.image.mobile.height
    } : {
      width: imgObj.image.desktop.width,
      height: imgObj.image.desktop.height
    };
  }

  return deviceWidth < 640 ? {
    width: imgObj.image.desktop.width,
    height: imgObj.image.desktop.height
  } : {
    width: imgObj.image.desktop.width,
    height: imgObj.image.desktop.height
  };
}

const SectionSix = () => {
  const {
    width
  } = (0,use_window_size/* useWindowSize */.i)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "section-1",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      "data-aos": "fade-up",
      "data-aos-delay": "1000",
      className: "mx-auto max-w-[1400px] text-center pt-2 lg:pb-12 pb-10 px-2 md:px-12 overflow-hidden",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "grid grid-cols-1 md:grid-cols-2 mt-10 items-center md:auto-cols-[170px] md:items-stretch",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "w-full p-4 flex flex-col items-start px-4",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-[#231f20] font-medium smJl:font-normal smJl:text-[16px] lg:text-[28px] pt-0 pb-4 px-0",
            children: "\u0110\u01A1n v\u1ECB t\u1ED5 ch\u1EE9c"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "grid grid-cols-3 justify-items-between lg:justify-items-start gap-4 w-full overflow-hidden",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                className: "",
                src: "/assets/images/funder-v2/f1.png",
                width: getImage(width, 1).width,
                height: getImage(width, 1).height,
                quality: 100
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-span-2 flex sm:justify-center items-center w-[255px] h-[102px] px-1 lg:h-[170px] lg:w-[380px] bg-white rounded-lg",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                className: "",
                src: "/assets/images/funder-v2/f2.png",
                width: getImage(width, 2).width,
                height: getImage(width, 2).height,
                quality: 100
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "w-full p-4 flex flex-col items-start text-left",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-[#231f20] font-medium smJl:font-normal smJl:text-[16px] lg:text-[28px] pt-0 pb-4 px-0",
            children: "B\u1EA3o tr\u1EE3 truy\u1EC1n th\xF4ng"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "grid grid-cols-3 justify-items-start gap-4 w-full",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                className: "",
                src: "/assets/images/funder-v2/f3.png",
                width: getImage(width, 3).width,
                height: getImage(width, 3).height,
                quality: 100
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                className: "",
                src: "/assets/images/funder-v2/f4.png",
                width: getImage(width, 4).width,
                height: getImage(width, 4).height,
                quality: 100
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                className: "",
                src: "/assets/images/funder-v2/f5.png",
                width: getImage(width, 5).width,
                height: getImage(width, 5).height,
                quality: 100
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "w-full p-4 flex flex-col items-start px-4 text-left",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-[#231f20] font-medium smJl:font-normal smJl:text-[16px] lg:text-[28px] pt-0 pb-4 px-0",
            children: "\u0110\u01A1n v\u1ECB t\xE0i tr\u1EE3"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "grid grid-cols-3 justify-items-start gap-4 lg:gap-y-8 w-full",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                className: "",
                src: "/assets/images/funder-v2/f6.png",
                width: getImage(width, 6).width,
                height: getImage(width, 6).height,
                quality: 100
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                className: "",
                src: "/assets/images/funder-v2/f7.png",
                width: getImage(width, 7).width,
                height: getImage(width, 7).height,
                quality: 100
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                className: "",
                src: "/assets/images/funder-v2/f8.jpg",
                width: getImage(width, 8).width,
                height: getImage(width, 8).height,
                quality: 100
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                className: "",
                src: "/assets/images/funder-v2/f9.jpg",
                width: getImage(width, 9).width,
                height: getImage(width, 9).height,
                quality: 100
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex justify-center items-center pl-5 h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                className: "",
                src: "/assets/images/funder-v2/f10.png",
                width: getImage(width, 10).width,
                height: getImage(width, 10).height,
                quality: 100
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                className: "",
                src: "/assets/images/funder-v2/f11.jpg",
                width: getImage(width, 11).width,
                height: getImage(width, 11).height,
                quality: 100
              })
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "w-full p-4 flex flex-col items-start px-4 text-left",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-[#231f20] font-medium smJl:font-normal smJl:text-[16px] lg:text-[28px] pt-0 pb-4 px-0",
            children: "\u0110\u01A1n v\u1ECB t\u1ED5 ch\u1EE9c"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "grid grid-cols-3 justify-items-start gap-4 lg:gap-x-0 lg:gap-y-8 w-full",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                className: "",
                src: "/assets/images/funder-v2/f12.png",
                width: getImage(width, 12).width,
                height: getImage(width, 12).height,
                quality: 100
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                className: "",
                src: "/assets/images/funder-v2/f13.png",
                width: getImage(width, 13).width,
                height: getImage(width, 13).height,
                quality: 100
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                className: "",
                src: "/assets/images/funder-v2/f14.jpg",
                width: getImage(width, 14).width,
                height: getImage(width, 14).height,
                quality: 100
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                className: "",
                src: "/assets/images/funder-v2/f15.svg",
                width: getImage(width, 15).width,
                height: getImage(width, 15).height,
                quality: 100
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                className: "",
                src: "/assets/images/funder-v2/f16.png",
                width: getImage(width, 16).width,
                height: getImage(width, 16).height,
                quality: 100
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex justify-center items-center h-[102px] px-2 w-[102px] lg:h-[170px] lg:w-[170px] bg-white rounded-lg overflow-hidden",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                className: "",
                src: "/assets/images/funder-v2/f17.jpeg",
                width: getImage(width, 17).width,
                height: getImage(width, 17).height,
                quality: 100
              })
            })]
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const section_6 = (SectionSix);
;// CONCATENATED MODULE: ./src/containers/campaigns/charity/section-7.tsx



 // import { toBase64 } from "@utils/toBase64";
// import { Button } from "@components/ui/button";
// import { shimmer } from "@utils/shimmer";

const SectionSeven = () => {
  function handleClick(url) {
    window.open(url, "_blank");
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    "data-aos": "fade-up",
    "data-aos-delay": "1000",
    className: "mx-auto max-w-[1400px] text-center pt-2 lg:pb-12 pb-10 px-8 overflow-hidden",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex justify-between md:flex-row flex-col mt-10 items-center md:items-stretch",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "w-full lg:w-1/2 max-w-full p-4 flex flex-col items-center px-4 mb-10 text-left",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          className: "mx-auto bg-white",
          src: "/assets/images/joolux-logo.png",
          width: 336,
          height: 118.92,
          quality: 100
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: "w-full text-center text-[#231f20] font-normal text-[16px] tracking-wider px-0",
          children: ["S\xE0n giao d\u1ECBch h\xE0ng hi\u1EC7u", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "ch\xEDnh h\xE3ng \u0111\xE3 qua s\u1EED d\u1EE5ng"]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-full lg:w-1/2 max-w-full flex justify-center p-4 px-4 mb-10",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "h-full flex flex-col justify-between items-start",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-row items-center justify-between mt-4 cursor-pointer",
            onClick: () => handleClick("https://www.facebook.com/jooluxvn"),
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              className: "bg-white",
              src: "/assets/images/contact/g1.png",
              width: 40.45,
              height: 37.58,
              quality: 100
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "w-full text-center text-[body] text-[#231f20] font-normal text-[13px] tracking-wider px-4",
              children: "fb.com/joolux"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-row items-center justify-between mt-4 cursor-pointer",
            onClick: () => handleClick("https://joolux.com"),
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              className: "bg-white",
              src: "/assets/images/contact/g2.png",
              width: 40.45,
              height: 37.58,
              quality: 100
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "w-full text-center text-[#231f20] font-normal text-[13px] tracking-wider px-4",
              children: "www.joolux.com"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-row items-center justify-between mt-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              className: "bg-white",
              src: "/assets/images/contact/g3.png",
              width: 40.45,
              height: 37.58,
              quality: 100
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "w-full text-center text-[body] text-[#231f20] font-normal text-[13px] tracking-wider px-4",
              children: "1900 292984"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-row items-center justify-between mt-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              className: "bg-white",
              src: "/assets/images/contact/g4.png",
              width: 40.45,
              height: 37.58,
              quality: 100
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "w-full text-center text-[body] text-[#231f20] font-normal text-[13px] tracking-wider px-4",
              children: "info@joolux.com"
            })]
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const section_7 = (SectionSeven);
;// CONCATENATED MODULE: ./src/pages/index.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import { useAmp } from "next/amp";

const config = {
  amp: false,
  hybrid: false
}; // import { Layout } from "@components/layout/layout";

 // import { I18NExample } from "@components/examples/translate";








 // Các pages sẽ không cần gắn types như :React.FC

const Home = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_next_seo_.SiteLinksSearchBoxJsonLd, {
      url: "https://joolux-client.ml",
      potentialActions: [{
        target: `${"https://joolux-client.ml"}/hang-moi-ve?q`,
        queryInput: "Search"
      }, {
        target: `android-app://com.example/https/${"https://joolux-client.ml".substring(8)}/hang-moi-ve?q`,
        queryInput: "Search"
      }]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(components/* Container */.W2, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(charity_layout, {}), /*#__PURE__*/jsx_runtime_.jsx(section_2, {}), /*#__PURE__*/jsx_runtime_.jsx(section_3, {}), /*#__PURE__*/jsx_runtime_.jsx(section_4, {}), /*#__PURE__*/jsx_runtime_.jsx(section_5, {}), /*#__PURE__*/jsx_runtime_.jsx(section_6, {}), /*#__PURE__*/jsx_runtime_.jsx(section_7, {})]
    })]
  });
};

{
  /* <amp-img
  alt="Mountains"
  width="550"
  height="368"
  layout="responsive"
  src="https://amp.dev/static/inline-examples/images/mountains.webp"
  >
  <amp-img
  alt="Mountains"
  fallback=""
  width="550"
  height="368"
  layout="responsive"
  src="https://amp.dev/static/inline-examples/images/mountains.jpg"
  ></amp-img>
  </amp-img> */
} // Home.Layout = Layout;

/* harmony default export */ const pages = (Home);
const getStaticProps = async ({
  locale
}) => {
  return {
    props: _objectSpread({}, await (0,serverSideTranslations_.serverSideTranslations)(locale, ["common", "forms", "menu", "footer"]))
  };
};

/***/ }),

/***/ 281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ shimmer)
/* harmony export */ });
const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
    <stop stop-color="#cfcfcf" offset="20%" />
    <stop stop-color="#fff" offset="50%" />
    <stop stop-color="#fff" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#cfcfcf" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

/***/ }),

/***/ 6027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ toBase64)
/* harmony export */ });
const toBase64 = str =>  true ? Buffer.from(str).toString("base64") : 0;

/***/ }),

/***/ 2410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* reexport */ (useWindowSize_default()))
});

;// CONCATENATED MODULE: external "react-use/lib/useWindowSize"
const useWindowSize_namespaceObject = require("react-use/lib/useWindowSize");
var useWindowSize_default = /*#__PURE__*/__webpack_require__.n(useWindowSize_namespaceObject);
;// CONCATENATED MODULE: ./src/utils/use-window-size.ts


/***/ }),

/***/ 4058:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 762:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 6155:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 8718:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 8110:
/***/ ((module) => {

module.exports = require("lodash/orderBy");

/***/ }),

/***/ 8475:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 3295:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 2364:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 8300:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9639:
/***/ ((module) => {

module.exports = require("next/dynamic");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 1958:
/***/ ((module) => {

module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7183:
/***/ ((module) => {

module.exports = require("react-countdown");

/***/ }),

/***/ 2662:
/***/ ((module) => {

module.exports = require("react-hook-form");

/***/ }),

/***/ 7755:
/***/ ((module) => {

module.exports = require("react-popper");

/***/ }),

/***/ 2585:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 173:
/***/ ((module) => {

module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,575,183,524,267,474], () => (__webpack_exec__(6730)));
module.exports = __webpack_exports__;

})();