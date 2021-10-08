"use strict";
exports.id = 474;
exports.ids = [474];
exports.modules = {

/***/ 5990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W2": () => (/* reexport */ Container),
  "TR": () => (/* reexport */ logo/* Logo */.T)
});

// UNUSED EXPORTS: Button, Cards, Counter, Footer, Header, Main, Subscription

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/components/main/index.tsx




const Main = () => {
  return /*#__PURE__*/_jsx("div", {
    className: "text-center font-light py-5 bg-gray-700",
    children: /*#__PURE__*/_jsxs("div", {
      className: "container mx-auto",
      children: [/*#__PURE__*/_jsx("h1", {
        "data-test": "main-heading",
        className: "text-white text-8xl mb-2",
        children: "superplate"
      }), /*#__PURE__*/_jsx("p", {
        className: "text-lg text-white mb-3",
        children: "The frontend boilerplate with superpowers!"
      }), /*#__PURE__*/_jsx(Button, {
        type: "button",
        children: /*#__PURE__*/_jsx("a", {
          "data-test": "docs-btn-anchor",
          href: "https://pankod.github.io/superplate/",
          target: "_blank",
          children: "Docs"
        })
      })]
    })
  });
};
// EXTERNAL MODULE: ./src/components/layout/header/index.tsx + 3 modules
var header = __webpack_require__(1742);
// EXTERNAL MODULE: ./src/components/layout/footer/index.tsx + 1 modules
var footer = __webpack_require__(1572);
;// CONCATENATED MODULE: ./public/meta.json
const meta_namespaceObject = {};
;// CONCATENATED MODULE: ./src/components/common/cards/index.tsx




const Cards = () => {
  var _data$plugins;

  return /*#__PURE__*/_jsx("div", {
    className: "flex-1 container my-8 max-w-screen-lg mx-auto p-5",
    children: /*#__PURE__*/_jsx("div", {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
      children: ((_data$plugins = data === null || data === void 0 ? void 0 : data.plugins) !== null && _data$plugins !== void 0 ? _data$plugins : []).map(plugin => /*#__PURE__*/_jsxs("div", {
        className: "col-span-1 rounded-md border border-gray-300 p-5",
        children: [/*#__PURE__*/_jsx("h2", {
          className: "text-xl font-semibold mb-2",
          children: plugin.name
        }), /*#__PURE__*/_jsx("p", {
          className: "m-0",
          children: plugin.description
        })]
      }, plugin.name))
    })
  });
};
;// CONCATENATED MODULE: ./src/components/icons/minus-icon.tsx


const minus_icon_MinusIcon = ({
  color = "currentColor",
  width = "10px",
  height = "2px"
}) => {
  return /*#__PURE__*/_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 1.5",
    children: /*#__PURE__*/_jsx("rect", {
      "data-name": "Rectangle 970",
      width: width,
      height: height,
      fill: color
    })
  });
};

/* harmony default export */ const minus_icon = ((/* unused pure expression or super */ null && (minus_icon_MinusIcon)));
;// CONCATENATED MODULE: ./src/components/icons/plus-icon.tsx


const plus_icon_PlusIcon = ({
  color = "currentColor",
  width = "10px",
  height = "10px"
}) => {
  return /*#__PURE__*/_jsx("svg", {
    "data-name": "plus (2)",
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 12 12",
    children: /*#__PURE__*/_jsx("g", {
      "data-name": "Group 5367",
      children: /*#__PURE__*/_jsx("path", {
        "data-name": "Path 17138",
        d: "M6.749,5.251V0h-1.5V5.251H0v1.5H5.251V12h1.5V6.749H12v-1.5Z",
        fill: color
      })
    })
  });
};

/* harmony default export */ const plus_icon = ((/* unused pure expression or super */ null && (plus_icon_PlusIcon)));
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
;// CONCATENATED MODULE: ./src/components/common/counter.tsx






const Counter = ({
  quantity,
  onDecrement,
  onIncrement,
  disableIncrement = false,
  disableDecrement = false,
  variant = "default"
}) => {
  const size = variant === "dark" ? "12px" : "10px";
  return /*#__PURE__*/_jsxs("div", {
    className: cn("group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0", {
      "border h-11 md:h-12 border-gray-300": variant === "default",
      "h-8 md:h-9 shadow-navigation bg-heading": variant === "dark"
    }),
    children: [/*#__PURE__*/_jsx("button", {
      onClick: onDecrement,
      className: cn("flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none", {
        "w-10 md:w-12 text-heading border-e border-gray-300 hover:text-white hover:bg-heading": variant === "default",
        "w-8 md:w-9 text-white bg-heading hover:bg-gray-600 focus:outline-none": variant === "dark"
      }),
      disabled: disableDecrement,
      children: /*#__PURE__*/_jsx(MinusIcon, {
        width: size
      })
    }), /*#__PURE__*/_jsx("span", {
      className: cn("font-semibold flex items-center justify-center h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0", {
        "text-base text-heading w-12  md:w-20 xl:w-24": variant === "default",
        "text-sm text-white w-8 md:w-10 ": variant === "dark"
      }),
      children: quantity
    }), /*#__PURE__*/_jsx("button", {
      onClick: onIncrement,
      className: cn("flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none", {
        "w-10 md:w-12 text-heading border-s border-gray-300 hover:text-white hover:bg-heading": variant === "default",
        "w-8 md:w-9 text-white bg-heading hover:bg-gray-600 focus:outline-none": variant === "dark"
      }),
      disabled: disableIncrement,
      children: /*#__PURE__*/_jsx(PlusIcon, {
        width: size,
        height: size
      })
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/ui/text.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const text_Text = ({
  variant,
  className,
  style,
  children,
  html
}) => {
  // 1 cách map các type khác ngoài tuple
  const componentsMap = {
    body: "p",
    mediumHeading: "h3",
    heading: "h4",
    pageHeading: "h1",
    subHeading: "h2",
    jl: "h3",
    jlNormal: "h3"
  };
  const Component = componentsMap[variant];
  const htmlContentProps = html ? {
    dangerouselySetInnerHTML: {
      __html: html
    }
  } : {};
  return /*#__PURE__*/_jsx(Component, _objectSpread(_objectSpread({
    className: cn({
      "text-body text-sm sm:leading-6 leading-7": variant === "body",
      "text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold": variant === "mediumHeading",
      "text-heading text-sm md:text-base xl:text-lg font-semibold": variant === "heading",
      "text-2xl font-bold text-heading": variant === "pageHeading",
      "text-heading text-lg md:text-2xl xl:text-3xl 2xl:text-4xl  font-bold": variant === "subHeading",
      "text-heading font-brand text-2xl font-semibold leading-[1.333]": variant === "jl",
      "text-heading text-lg font-semibold leading-[1.333]": variant === "jlNormal"
    }, className),
    style: style
  }, htmlContentProps), {}, {
    children: children
  }));
};
// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(3977);
// EXTERNAL MODULE: ./src/components/ui/button/index.tsx
var ui_button = __webpack_require__(1175);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/common/subscription.tsx



function subscription_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function subscription_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { subscription_ownKeys(Object(source), true).forEach(function (key) { subscription_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { subscription_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function subscription_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const subscription_data = {
  title: "common:text-subscribe-heading",
  // description: "common:text-subscribe-description",
  description: "Cập nhật những thông tin mới nhất về xu hướng thời trang với Joolux. Đăng ký nhận thông tin bằng cách nhập email của bạn.",
  buttonText: "common:button-subscribe"
};
const defaultValues = {
  subscription_email: ""
};
const Subscription = ({
  className = "px-5 sm:px-8 md:px-16 2xl:px-24",
  hasTitle = false
}) => {
  var _errors$subscription_;

  const {
    0: show,
    1: setShow
  } = useState(true);
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm({
    defaultValues
  });
  const {
    t
  } = useTranslation();
  const {
    title,
    description,
    buttonText
  } = subscription_data;

  async function onSubmit(input) {}

  const closeBtnClasses = {
    center: "top-1 end-1",
    bottom: "top-1/4 start-1/2 transform -translate-y-1/2 -translate-x-1/2"
  };
  return show && /*#__PURE__*/_jsxs("div", {
    className: `${className} flex flex-col md:flex-row justify-center md:justify-between items-center bg-[#e7e7e7] py-5 md:py-8 lg:py-8 relative lg:max-h-[128px]`,
    children: [/*#__PURE__*/_jsx("button", {
      onClick: () => {
        setShow(false);
      },
      "aria-label": "Close panel",
      className: cn("absolute  z-10 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 bg-transparent shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md", closeBtnClasses["center"]),
      children: /*#__PURE__*/_jsx(IoClose, {
        className: "text-xl"
      })
    }), /*#__PURE__*/_jsxs("div", {
      className: "-mt-1.5 lg:-mt-2 xl:-mt-0.5 text-start mb-7 md:mb-4 lg:mb-5 xl:mb-0 lg:w-1/2",
      children: [hasTitle && /*#__PURE__*/_jsx(Text, {
        variant: "jl",
        className: "mb-2 md:mb-2.5 lg:mb-3 xl:mb-3.5",
        children: t(`${title}`)
      }), /*#__PURE__*/_jsx("h6", {
        className: "text-body text-xs font-normal md:text-sm leadin-5 typo-h6",
        children: t(`${description}`)
      })]
    }), /*#__PURE__*/_jsx("form", {
      onSubmit: handleSubmit(onSubmit),
      className: "flex-shrink-0 md:ml-4 w-full sm:w-[26rem] md:w-[475px]",
      noValidate: true,
      children: /*#__PURE__*/_jsxs("div", {
        className: "flex flex-col sm:flex-row items-start justify-end",
        children: [/*#__PURE__*/_jsx(Input, subscription_objectSpread(subscription_objectSpread({
          placeholderKey: "forms:placeholder-email-subscribe",
          type: "email",
          variant: "jl",
          className: "w-full",
          inputClassName: "px-4 lg:px-7 h-10 lg:h-12 text-center sm:text-start bg-white max-w-[400px]"
        }, register("subscription_email", {
          required: "forms:email-required",
          pattern: {
            // eslint-disable-next-line no-useless-escape
            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "forms:email-error"
          }
        })), {}, {
          errorKey: (_errors$subscription_ = errors.subscription_email) === null || _errors$subscription_ === void 0 ? void 0 : _errors$subscription_.message
        })), /*#__PURE__*/_jsx(Button, {
          variant: "jl",
          className: "mt-3 sm:mt-0 w-full sm:w-auto sm:ms-2 h-10 lg:h-12 flex-shrink-0",
          children: /*#__PURE__*/_jsx("span", {
            className: "lg:py-0.5",
            children: t(`${buttonText}`)
          })
        })]
      })
    })]
  });
};
;// CONCATENATED MODULE: ./src/containers/index.tsx

const Container = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("main", {
    className: "relative flex-grow",
    style: {
      minHeight: "-webkit-fill-available",
      WebkitOverflowScrolling: "touch"
    },
    children: children
  });
};
// EXTERNAL MODULE: ./src/components/ui/logo/index.tsx
var logo = __webpack_require__(7816);
;// CONCATENATED MODULE: ./src/components/index.ts
 // Layout


 // Common



 // Container

 // UI




/***/ }),

/***/ 1572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/ui/active-link.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    children,
    activeClassName,
    href,
    excludeQuery = false
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "activeClassName", "href", "excludeQuery"]);

  const {
    asPath
  } = (0,router_.useRouter)();
  const child = external_react_.Children.only(children);
  const childClassName = child.props.className || "";
  const queryToCompare = excludeQuery ? asPath.split("?")[0] : asPath;
  const className = queryToCompare === href ? `${childClassName} ${activeClassName}`.trim() : childClassName;
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, _objectSpread(_objectSpread({
    href: href
  }, props), {}, {
    children: /*#__PURE__*/external_react_default().cloneElement(child, {
      className: className || null
    })
  }));
};

/* harmony default export */ const active_link = (ActiveLink);
// EXTERNAL MODULE: ./src/utils/routes.ts
var routes = __webpack_require__(9524);
;// CONCATENATED MODULE: ./src/components/layout/footer/index.tsx



function footer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function footer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { footer_ownKeys(Object(source), true).forEach(function (key) { footer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { footer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function footer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // import {
//     PankodIcon,
//     GithubIcon,
//     TwitterIcon,
//     YoutubeIcon,
//     LinkedinIcon,
// } from "@components/icons";

const Footer = () => {
  var _errors$email, _errors$email2;

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,external_react_hook_form_.useForm)({
    mode: "all"
  });

  function onSubmit(input) {
    // Router.push(ROUTES.ORDER);
    console.log(input);
  }

  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    className: "bg-black text-white text-[15px] footer-container",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "footer-wrapper",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex lg:mb-6 md:mb-2 mb-0",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "hidden lg:block pr-12 mr-2px",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "/",
            "aria-label": "footer-logo",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
              width: "50px",
              height: "50px",
              className: "text-secondary",
              viewBox: "0 0 100 100",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M49.994 0C22.386 0 0 22.386 0 49.994s22.386 49.994 49.994 49.994 49.994-22.376 49.994-49.994S77.612 0 49.994 0zm0 96.228c-25.525 0-46.222-20.697-46.222-46.234 0-25.537 20.697-46.222 46.222-46.222 25.525 0 46.234 20.697 46.234 46.222 0 25.525-20.697 46.234-46.234 46.234z",
                fill: "currentColor"
              }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                d: "M64.266 34.93A13.708 13.708 0 0 0 53.4 40.242l-.151.202a1.634 1.634 0 0 0-.137 1.52 1.637 1.637 0 0 0 1.497.99c.061 0 .122-.005.182-.013h.056c.04-.005.08-.012.12-.022l.066-.016.105-.032.064-.022.1-.045.057-.028a1.08 1.08 0 0 0 .105-.06l.044-.027c.048-.031.094-.065.138-.102l.016-.014c.038-.033.074-.067.108-.101l.04-.045c.025-.026.051-.054.075-.084l.013-.014v-.012a10.555 10.555 0 1 1-.99 11.349l-1.327-2.875-4.07-8.773a13.894 13.894 0 0 0-4.435-4.777 13.863 13.863 0 1 0 3.27 20.01l.018-.021.012-.014v-.012a.206.206 0 0 0 .024-.035 1.912 1.912 0 0 0 .095-.147v-.016c.024-.042.044-.087.065-.13l.016-.041c.012-.032.024-.065.034-.097l.016-.052.024-.095.012-.054c0-.033.01-.067.015-.101.004-.034 0-.032 0-.049v-.155c0-.214-.043-.427-.125-.625l-.027-.056a1.625 1.625 0 0 0-2.689-.403l-.072.094a10.555 10.555 0 1 1 .673-11.974c.119.202.232.393.339.605l2.253 4.9v.014l1.412 3.042.32.684 1.145 2.49a13.91 13.91 0 0 0 4.741 5.271 13.822 13.822 0 1 0 7.62-25.346z",
                fill: "currentColor"
              })]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex-1 flex flex-wrap -mx-4",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "px-4 w-full md:w-1/3 lg:w-1/4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              className: "Typography__H6-sc-18cqegv-5 hnzrVF mb-4 font-semibold uppercase",
              children: "JOOLUX.COM"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "smJl:mb-10",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "mb-3",
                children: /*#__PURE__*/jsx_runtime_.jsx(active_link, {
                  activeClassName: "!text-secondary",
                  href: routes/* ROUTES.VE_CHUNG_TOI */.Z.VE_CHUNG_TOI,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary",
                    children: "V\u1EC1 ch\xFAng t\xF4i"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "mb-3",
                children: /*#__PURE__*/jsx_runtime_.jsx(active_link, {
                  activeClassName: "!text-secondary",
                  href: routes/* ROUTES.BLOG */.Z.BLOG,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary",
                    children: "Blog"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "mb-3",
                children: /*#__PURE__*/jsx_runtime_.jsx(active_link, {
                  activeClassName: "!text-secondary",
                  href: routes/* ROUTES.QUY_CHE_HOAT_DONG */.Z.QUY_CHE_HOAT_DONG,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary",
                    children: "Quy ch\u1EBF ho\u1EA1t \u0111\u1ED9ng"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "mb-3",
                children: /*#__PURE__*/jsx_runtime_.jsx(active_link, {
                  activeClassName: "!text-secondary",
                  href: routes/* ROUTES.CHINH_SACH_BAO_MAT */.Z.CHINH_SACH_BAO_MAT,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary",
                    children: "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt"
                  })
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "border-b border-gray-700 md:mb-10 mb-8 -mx-5 block md:hidden"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "px-4 w-full md:w-1/3 lg:w-1/4 order-2 md:order-none",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              className: "mb-4 font-semibold uppercase",
              children: "Th\u01B0\u01A1ng hi\u1EC7u n\u1ED5i ti\u1EBFng"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "smJl:mb-10 pb-0",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "mb-3",
                children: /*#__PURE__*/jsx_runtime_.jsx(active_link, {
                  activeClassName: "!text-secondary",
                  href: "/hang-moi-ve?brands=Louis+Vuitton",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "/hang-moi-ve?brands=Louis+Vuitton",
                    className: "transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary",
                    children: "Louis Vuitton"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "mb-3",
                children: /*#__PURE__*/jsx_runtime_.jsx(active_link, {
                  activeClassName: "!text-secondary",
                  href: "/hang-moi-ve?brands=Gucci",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary",
                    href: "/hang-moi-ve?brands=Gucci",
                    children: "Gucci"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "mb-3",
                children: /*#__PURE__*/jsx_runtime_.jsx(active_link, {
                  activeClassName: "!text-secondary",
                  href: "/hang-moi-ve?brands=Chanel",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary",
                    href: "/hang-moi-ve?brands=Chanel",
                    children: "Chanel"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "mb-3",
                children: /*#__PURE__*/jsx_runtime_.jsx(active_link, {
                  activeClassName: "!text-secondary",
                  href: "/hang-moi-ve?brands=Prada",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary",
                    href: "/hang-moi-ve?brands=Prada",
                    children: "Prada"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "mb-3",
                children: /*#__PURE__*/jsx_runtime_.jsx(active_link, {
                  activeClassName: "!text-secondary",
                  href: "/hang-moi-ve?brands=Burberry",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary",
                    href: "/hang-moi-ve?brands=Burberry",
                    children: "Burberry"
                  })
                })
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "px-4 w-full md:w-1/3 lg:w-1/4 order-3 md:order-none",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              className: "Typography__H6-sc-18cqegv-5 hnzrVF mb-4 font-semibold uppercase hidden md:block opacity-0 pointer-events-none",
              children: "Th\u01B0\u01A1ng hi\u1EC7u n\u1ED5i ti\u1EBFng"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "smJl:mb-10",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "mb-3",
                children: /*#__PURE__*/jsx_runtime_.jsx(active_link, {
                  activeClassName: "!text-secondary",
                  href: "/hang-moi-ve?brands=Longines",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary",
                    href: "/hang-moi-ve?brands=Longines",
                    children: "Longines"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "mb-3",
                children: /*#__PURE__*/jsx_runtime_.jsx(active_link, {
                  activeClassName: "!text-secondary",
                  href: "/hang-moi-ve?brands=Saint+Laurent",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary",
                    href: "/hang-moi-ve?brands=Saint+Laurent",
                    children: "Saint Laurent"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "mb-3",
                children: /*#__PURE__*/jsx_runtime_.jsx(active_link, {
                  activeClassName: "!text-secondary",
                  href: "/hang-moi-ve?brands=Fendi",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary",
                    href: "/hang-moi-ve?brands=Fendi",
                    children: "Fendi"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "mb-3",
                children: /*#__PURE__*/jsx_runtime_.jsx(active_link, {
                  activeClassName: "!text-secondary",
                  href: "/hang-moi-ve?brands=Celine",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary",
                    href: "/hang-moi-ve?brands=Celine",
                    children: "Celine"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "mb-3",
                children: /*#__PURE__*/jsx_runtime_.jsx(active_link, {
                  activeClassName: "!text-secondary",
                  href: "/hang-moi-ve?brands=Dior",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary",
                    href: "/hang-moi-ve?brands=Dior",
                    children: "Dior"
                  })
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "border-b border-gray-700 md:mb-10 mb-8 -mx-5 block md:hidden"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "px-4 w-full md:w-1/2 lg:w-1/4 order-6 md:order-4 lg:order-none",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex items-center mb-3",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "mr-6",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: "https://joolux.com/img/tradeStamp.png",
                  width: 56,
                  height: 56,
                  alt: "tradeStamp"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "footer-stamp-confirm",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                  src: "https://joolux.com/img/tradeStampConfirm.png",
                  layout: "fill",
                  alt: "Con d\u1EA5u \u0111\u0103ng k\xFD kinh doanh"
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "text-gray-500 text-xs mb-8",
              children: "\u0110\u0103ng k\xFD kinh doanh s\u1ED1 0313621164 do S\u1EDF K\u1EBF ho\u1EA1ch v\xE0 \u0110\u1EA7u t\u01B0 Th\xE0nh ph\u1ED1 H\u1ED3 Ch\xED Minh c\u1EA5p ng\xE0y 15/01/2016 \u0111\u01B0\u1EE3c s\u1EEDa \u0111\u1ED5i l\u1EA7n th\u1EE9 3 ng\xE0y 23/3/2018"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "px-4 w-full md:w-1/3 lg:w-1/4 order-1 md:order-1 lg:order-none",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              className: "mb-4 font-semibold uppercase",
              children: "d\u1ECBch v\u1EE5 c\u1EE7a joolux"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "smJl:mb-10",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "mb-3",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary",
                  href: "/dich-vu/ki-gui-hang-hieu",
                  children: "K\xFD g\u1EEDi h\xE0ng hi\u1EC7u"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "mb-3",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary",
                  href: "/dich-vu/kiem-dinh-hang-hieu",
                  children: "Ki\u1EC3m \u0111\u1ECBnh h\xE0ng hi\u1EC7u"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "mb-3",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary",
                  href: "/dich-vu/cham-soc-hang-hieu",
                  children: "Joolux Care"
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "border-b border-gray-700 md:mb-10 mb-8 -mx-5 block md:hidden"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "px-4 w-full md:w-1/3 lg:w-1/4 order-4 md:order-2 lg:order-none",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              className: "Typography__H6-sc-18cqegv-5 hnzrVF mb-4 font-semibold uppercase",
              children: "Ch\u0103m s\xF3c kh\xE1ch h\xE0ng"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "mb-0 pb-4",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "mb-3",
                children: /*#__PURE__*/jsx_runtime_.jsx(active_link, {
                  activeClassName: "!text-secondary",
                  href: routes/* ROUTES.CHINH_SACH_VAN_CHUYEN */.Z.CHINH_SACH_VAN_CHUYEN,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary",
                    href: routes/* ROUTES.CHINH_SACH_VAN_CHUYEN */.Z.CHINH_SACH_VAN_CHUYEN,
                    children: "Ch\xEDnh s\xE1ch v\u1EADn chuy\u1EC3n"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "mb-3",
                children: /*#__PURE__*/jsx_runtime_.jsx(active_link, {
                  activeClassName: "!text-secondary",
                  href: routes/* ROUTES.CHINH_SACH_BAO_HANH_DOI_TRA */.Z.CHINH_SACH_BAO_HANH_DOI_TRA,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary",
                    href: routes/* ROUTES.CHINH_SACH_BAO_HANH_DOI_TRA */.Z.CHINH_SACH_BAO_HANH_DOI_TRA,
                    children: "Ch\xEDnh s\xE1ch \u0111\u1ED5i tr\u1EA3"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "mb-3",
                children: /*#__PURE__*/jsx_runtime_.jsx(active_link, {
                  activeClassName: "!text-secondary",
                  href: routes/* ROUTES.CHINH_SACH_THANH_TOAN */.Z.CHINH_SACH_THANH_TOAN,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary",
                    href: routes/* ROUTES.CHINH_SACH_THANH_TOAN */.Z.CHINH_SACH_THANH_TOAN,
                    children: "Ch\xEDnh s\xE1ch thanh to\xE1n"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "mb-3",
                children: /*#__PURE__*/jsx_runtime_.jsx(active_link, {
                  activeClassName: "!text-secondary",
                  href: routes/* ROUTES.CAM_KET_TU_JOOLUX */.Z.CAM_KET_TU_JOOLUX,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "transition-colors duration-200 inline-block mb-2px text-white hover:text-secondary",
                    href: routes/* ROUTES.CAM_KET_TU_JOOLUX */.Z.CAM_KET_TU_JOOLUX,
                    children: "Cam k\u1EBFt t\u1EEB Joolux"
                  })
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "text-md mb-4 md:mb-10 font-light flex flex-col",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  className: "mb-1",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                    className: "font-semibold",
                    children: ["HOTLINE:", " "]
                  }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "tel:1900292984",
                    className: "hover:text-secondary transition-colors duration-200",
                    children: "1900 292984"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  className: "mb-1",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                    className: "font-semibold",
                    children: ["Th\u1EE9 hai - Th\u1EE9 s\xE1u:", " "]
                  }), "8H30 - 18H"]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  className: "mb-1",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                    className: "font-semibold",
                    children: ["Th\u1EE9 b\u1EA3y:", " "]
                  }), "8H30 - 12H", " "]
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  className: "text-xs my-2",
                  children: "(Ho\u1EB7c chat tr\u1EF1c tuy\u1EBFn)"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  className: "flex items-center mt-4",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "https://www.facebook.com/jooluxvn/",
                    target: "_blank",
                    "aria-label": "footer-facebook",
                    rel: "noreferrer noopener",
                    className: "mr-4 hover:text-secondary transition-colors duration-200",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "footer-icon-wrapper",
                      children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        strokeLinejoin: "round",
                        strokeMiterlimit: "1.414",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        preserveAspectRatio: "xMidYMid meet",
                        className: "footer-icon",
                        children: /*#__PURE__*/jsx_runtime_.jsx("g", {
                          fill: "none",
                          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
                            d: "M20.625 2.625H3.375C2.96016 2.625 2.625 2.96016 2.625 3.375V20.625C2.625 21.0398 2.96016 21.375 3.375 21.375H20.625C21.0398 21.375 21.375 21.0398 21.375 20.625V3.375C21.375 2.96016 21.0398 2.625 20.625 2.625ZM18.4594 8.09766H16.9617C15.7875 8.09766 15.5602 8.65547 15.5602 9.47578V11.2828H18.3633L17.9977 14.1117H15.5602V21.375H12.6375V14.1141H10.193V11.2828H12.6375V9.19687C12.6375 6.77578 14.1164 5.45625 16.2773 5.45625C17.3133 5.45625 18.2016 5.53359 18.4617 5.56875V8.09766H18.4594Z",
                            fill: "currentColor"
                          })
                        })
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "https://www.instagram.com/jooluxvn/",
                    target: "_blank",
                    rel: "noreferrer noopener",
                    "aria-label": "footer-instagram",
                    className: "hover:text-secondary transition-colors duration-200",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "footer-icon-wrapper",
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        strokeLinejoin: "round",
                        strokeMiterlimit: "1.414",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        preserveAspectRatio: "xMidYMid meet",
                        className: "footer-icon",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
                          d: "M16.3748 3.24984C17.5342 3.25331 18.6451 3.71539 19.4648 4.53517C20.2846 5.35495 20.7467 6.46582 20.7502 7.62516V16.3748C20.7467 17.5342 20.2846 18.6451 19.4648 19.4648C18.6451 20.2846 17.5342 20.7467 16.3748 20.7502H7.62516C6.46582 20.7467 5.35495 20.2846 4.53517 19.4648C3.71539 18.6451 3.25331 17.5342 3.24984 16.3748V7.62516C3.25331 6.46582 3.71539 5.35495 4.53517 4.53517C5.35495 3.71539 6.46582 3.25331 7.62516 3.24984H16.3748ZM16.3748 1.5H7.62516C4.25625 1.5 1.5 4.25625 1.5 7.62516V16.3748C1.5 19.7437 4.25625 22.5 7.62516 22.5H16.3748C19.7437 22.5 22.5 19.7437 22.5 16.3748V7.62516C22.5 4.25625 19.7437 1.5 16.3748 1.5Z",
                          fill: "currentcolor"
                        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                          d: "M17.6873 7.62515C17.4278 7.62515 17.174 7.54818 16.9582 7.40396C16.7423 7.25974 16.5741 7.05475 16.4748 6.81492C16.3754 6.5751 16.3494 6.3112 16.4001 6.0566C16.4507 5.802 16.5757 5.56813 16.7593 5.38458C16.9428 5.20102 17.1767 5.07602 17.4313 5.02537C17.6859 4.97473 17.9498 5.00072 18.1896 5.10006C18.4294 5.1994 18.6344 5.36763 18.7787 5.58347C18.9229 5.79931 18.9998 6.05306 18.9998 6.31265C19.0002 6.48512 18.9665 6.65596 18.9007 6.81536C18.8349 6.97477 18.7382 7.11961 18.6163 7.24156C18.4943 7.36351 18.3495 7.46017 18.1901 7.526C18.0307 7.59183 17.8598 7.62552 17.6873 7.62515Z",
                          fill: "currentcolor"
                        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
                          d: "M12 8.49984C12.6923 8.49984 13.369 8.70512 13.9446 9.08973C14.5202 9.47433 14.9688 10.021 15.2337 10.6605C15.4986 11.3001 15.568 12.0039 15.4329 12.6828C15.2978 13.3618 14.9645 13.9855 14.475 14.475C13.9855 14.9645 13.3618 15.2978 12.6828 15.4329C12.0039 15.568 11.3001 15.4986 10.6606 15.2337C10.021 14.9688 9.47433 14.5202 9.08973 13.9446C8.70513 13.369 8.49985 12.6923 8.49985 12C8.50084 11.072 8.86992 10.1823 9.52611 9.52611C10.1823 8.86992 11.072 8.50084 12 8.49984ZM12 6.75C10.9617 6.75 9.94662 7.05791 9.08326 7.63478C8.2199 8.21166 7.54699 9.0316 7.14963 9.99091C6.75227 10.9502 6.64831 12.0058 6.85088 13.0242C7.05345 14.0426 7.55347 14.9781 8.28769 15.7123C9.02192 16.4465 9.95738 16.9466 10.9758 17.1491C11.9942 17.3517 13.0498 17.2477 14.0091 16.8504C14.9684 16.453 15.7883 15.7801 16.3652 14.9167C16.9421 14.0534 17.25 13.0384 17.25 12C17.25 10.6076 16.6969 9.27226 15.7123 8.28769C14.7277 7.30312 13.3924 6.75 12 6.75Z",
                          fill: "currentcolor"
                        })]
                      })
                    })
                  })]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "border-b border-gray-700 md:mb-10 mb-8 -mx-5 block md:hidden"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "px-4 w-full md:w-1/3 lg:w-1/4 mb-10 font-light order-5 md:order-3 lg:order-none",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              className: "Typography__H6-sc-18cqegv-5 hnzrVF mb-4 font-semibold uppercase",
              children: "LI\xCAN H\u1EC6"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "text-md",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                className: "mb-3",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "font-semibold",
                  children: "Tr\u1EE5 s\u1EDF 1:"
                }), " ", "46 Nguy\u1EC5n Th\u1ECB Minh Khai, Ph\u01B0\u1EDDng \u0110akao, Qu\u1EADn 1, Tp. H\u1ED3 Ch\xED Minh"]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                className: "mb-3",
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "font-semibold",
                  children: "Tr\u1EE5 s\u1EDF 2:"
                }), " ", "Y-nest t\u1EA7ng 4 to\xE0 nh\xE0 Ho\xE0 B\xECnh Green, 505 Minh Khai, Ph\u01B0\u1EDDng V\u0129nh Ph\xFA, Qu\u1EADn Hai B\xE0 Tr\u01B0ng, H\xE0 N\u1ED9i"]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "font-semibold",
                  children: "Email:"
                }), " ", /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "mailto:info@joolux.com",
                  className: "hover:text-secondary transition-colors duration-200",
                  children: "info@joolux.com"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "px-4 w-full md:w-1/2 lg:w-1/4 mb-10 order-7 md:order-5 lg:order-none",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "font-semibold mb-3",
              children: "\u0110\u0103ng k\xED nh\u1EADn th\xF4ng tin"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
              onSubmit: handleSubmit(onSubmit),
              className: "flex w-full",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
                className: "block w-full mb-0",
                children: [/*#__PURE__*/jsx_runtime_.jsx("input", footer_objectSpread({
                  type: "text",
                  name: "email",
                  defaultValue: "",
                  className: "footer-email-input w-full border-white bg-transparent text-white h-10",
                  placeholder: "Nh\u1EADp email c\u1EE7a b\u1EA1n"
                }, register("email", {
                  required: "Thông tin bắt buộc",
                  pattern: {
                    // eslint-disable-next-line no-useless-escape
                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Email không hợp lệ"
                  }
                }))), ((_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message) && /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "step-form-input-error",
                  children: (_errors$email2 = errors.email) === null || _errors$email2 === void 0 ? void 0 : _errors$email2.message
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                type: "submit",
                className: "footer-submit-email-button flex-none px-7 bg-white text-black h-10",
                "data-testid": "email-subscription-button",
                children: "\u0110\u0103ng K\xFD"
              })]
            })]
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-center border-t border-gray-700 py-7",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h6", {
          className: "Typography__Paragraph-sc-18cqegv-6 aLuzu text-gray-500 font-light",
          children: ["Copyright \xA9 ", "2021", " Joolux.com"]
        })
      })]
    })
  });
};

/***/ }),

/***/ 1742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/components/index.ts + 9 modules
var components = __webpack_require__(5990);
// EXTERNAL MODULE: ./src/components/icons/index.tsx + 11 modules
var icons = __webpack_require__(761);
// EXTERNAL MODULE: ./src/contexts/ui.context.tsx
var ui_context = __webpack_require__(7014);
;// CONCATENATED MODULE: ./src/utils/add-active-scroll.ts

function addActiveScroll(ref, topOffset = 80) {
  (0,external_react_.useEffect)(() => {
    const element = ref === null || ref === void 0 ? void 0 : ref.current;

    const listener = () => {
      if (window.scrollY > topOffset) {
        element === null || element === void 0 ? void 0 : element.classList.add("is-scrolling");
      } else {
        element === null || element === void 0 ? void 0 : element.classList.remove("is-scrolling");
      }
    };

    document.addEventListener("scroll", listener);
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, []);
}
// EXTERNAL MODULE: ./src/utils/routes.ts
var routes = __webpack_require__(9524);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: ./src/framework/basic-rest/auth/use-logout.tsx
 // import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
// import http from "@framework/utils/http";





async function logout() {
  // return http.post(API_ENDPOINTS.LOGIN, input);
  return {
    ok: true,
    message: "Logout Successful!"
  };
}

const useLogoutMutation = () => {
  const {
    unauthorize
  } = (0,ui_context/* useUI */.l8)();
  return (0,external_react_query_.useMutation)(() => logout(), {
    onSuccess: _data => {
      external_js_cookie_default().remove("access_token");
      router_default().push("/");
      unauthorize();
    },
    onError: data => {
      console.log(data, "logout error response");
    }
  });
};
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.esm.js
var index_esm = __webpack_require__(155);
;// CONCATENATED MODULE: ./src/components/my-account/account-dropdown.tsx



/* This example requires Tailwind CSS v2.0+ */





function ExaAccountDropdownmple() {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  const {
    mutate: logout
  } = useLogoutMutation();
  const accountMenu = [{
    slug: routes/* ROUTES.ACCOUNT */.Z.ACCOUNT,
    name: "text-dashboard",
    icon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoHomeOutline */.yl6, {
      className: "w-4 h-4"
    })
  }, {
    slug: routes/* ROUTES.ORDERS */.Z.ORDERS,
    name: "text-orders",
    icon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoCartOutline */.toq, {
      className: "w-4 h-4"
    })
  }, {
    slug: routes/* ROUTES.ACCOUNT_DETAILS */.Z.ACCOUNT_DETAILS,
    name: "text-account-details",
    icon: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoPersonOutline */.FJ3, {
      className: "w-4 h-4"
    })
  }];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "group inline-block relative",
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoPersonCircleSharp */.umg, {
        className: "w-7 h-7 text-white"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "hidden group-hover:block arrow bg-white top-[38px] left-4 z-50"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: "absolute hidden text-gray-700 group-hover:block min-w-[170px] right-[-72px] top-7 bg-white mt-3",
      style: {
        boxShadow: "0 2px 4px #999",
        border: "1px solid #666",
        padding: "1.07em 1.43em 1.43em"
      },
      children: [accountMenu.map(item => {
        return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: item.slug,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: "flex items-center cursor-pointer text-xs text-heading font-normal py-2.5 px-2 lg:px-3 hover:underline",
            children: [item.icon, /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "ps-2",
              children: t(`${item === null || item === void 0 ? void 0 : item.name}`)
            })]
          })
        }, item.slug);
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        className: "flex items-center cursor-pointer text-xs text-heading font-normal py-2.5 px-2 lg:px-3 hover:underline focus:outline-none w-full",
        onClick: () => logout(),
        children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoLogOutOutline */.qgu, {
          className: "w-4 h-4"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "ps-2",
          children: "\u0110\u0103ng xu\u1EA5t"
        })]
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/layout/header/index.tsx











const AuthMenu = dynamic_default()(() => __webpack_require__.e(/* import() */ 642).then(__webpack_require__.bind(__webpack_require__, 3642)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3642)],
    modules: ["..\\components\\layout\\header\\index.tsx -> " + "./auth-menu"]
  }
});
const CartButton = dynamic_default()(() => Promise.all(/* import() */[__webpack_require__.e(649), __webpack_require__.e(195), __webpack_require__.e(844)]).then(__webpack_require__.bind(__webpack_require__, 2195)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2195)],
    modules: ["..\\components\\layout\\header\\index.tsx -> " + "@components/cart/cart-button"]
  }
});
const Header = () => {
  const {
    openSidebar,
    setDrawerView,
    openSearch,
    openModal,
    setModalView,
    isAuthorized
  } = (0,ui_context/* useUI */.l8)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  const siteHeaderRef = (0,external_react_.useRef)();
  addActiveScroll(siteHeaderRef);

  function handleLogin() {
    setModalView("LOGIN_VIEW");
    return openModal();
  }

  function handleMobileMenu() {
    setDrawerView("MOBILE_MENU");
    return openSidebar();
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "bg-black",
    children: /*#__PURE__*/jsx_runtime_.jsx("header", {
      id: "siteHeader",
      ref: siteHeaderRef,
      className: "w-full h-16 sm:h-20 lg:h-24 relative z-20 px-8 lg:mx-auto",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "innerSticky text-gray-700 body-font w-full h-16 sm:h-20 lg:h-24 z-20 ps-4 md:ps-0 lg:ps-14 pe-4 lg:pe-6 transition duration-200 ease-in-out",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center justify-center mx-auto h-full w-full",
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            "aria-label": "Menu",
            className: "menuBtn hidden md:flex lg:hidden flex-col items-center justify-center px-5 2xl:px-7 flex-shrink-0 h-full outline-none focus:outline-none transform -translate-x-7",
            onClick: handleMobileMenu,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: "menuIcon",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "bar"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "bar"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "bar"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(components/* Logo */.TR, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "hidden md:flex justify-end items-center space-s-6 lg:space-s-5 xl:space-s-8 2xl:space-s-10 ms-auto flex-shrink-0",
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              className: "flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform",
              onClick: openSearch,
              "aria-label": "search-button",
              children: /*#__PURE__*/jsx_runtime_.jsx(icons/* SearchIcon */.W1, {})
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex-shrink-0 h-7",
              children: /*#__PURE__*/jsx_runtime_.jsx(AuthMenu, {
                href: routes/* ROUTES.ACCOUNT */.Z.ACCOUNT,
                isAuthorized: isAuthorized,
                className: "text-sm xl:text-base text-white font-semibold",
                btnProps: {
                  className: "text-sm xl:text-base text-white font-semibold focus:outeline-none",
                  children: t("text-sign-in"),
                  onClick: handleLogin
                },
                children: /*#__PURE__*/jsx_runtime_.jsx(ExaAccountDropdownmple, {})
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(CartButton, {
              backgroundCart: "white",
              className: "bg-white text-heading"
            })]
          })]
        })
      })
    })
  });
};

/***/ })

};
;