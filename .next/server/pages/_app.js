(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: external "nextjs-progressbar"
const external_nextjs_progressbar_namespaceObject = require("nextjs-progressbar");
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_namespaceObject);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: external "react-query/devtools"
const devtools_namespaceObject = require("react-query/devtools");
;// CONCATENATED MODULE: external "react-query/hydration"
const hydration_namespaceObject = require("react-query/hydration");
;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
// EXTERNAL MODULE: ./src/contexts/ui.context.tsx
var ui_context = __webpack_require__(7014);
;// CONCATENATED MODULE: external "@reach/portal"
const portal_namespaceObject = require("@reach/portal");
var portal_default = /*#__PURE__*/__webpack_require__.n(portal_namespaceObject);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: external "body-scroll-lock"
var external_body_scroll_lock_ = __webpack_require__(8023);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.esm.js
var index_esm = __webpack_require__(155);
// EXTERNAL MODULE: ./src/utils/motion/fade-in-out.ts
var fade_in_out = __webpack_require__(3719);
;// CONCATENATED MODULE: ./src/utils/motion/zoom-out-in.ts
function zoomOutIn(duration = 0.2) {
  return {
    from: {
      scale: 1.1,
      transition: {
        type: "easeOut",
        duration: duration
      }
    },
    to: {
      scale: 1,
      transition: {
        type: "easeOut",
        duration: duration
      }
    }
  };
}
;// CONCATENATED MODULE: ./src/utils/use-click-outside.ts

function useOnClickOutside(ref, handler) {
  (0,external_react_.useEffect)(() => {
    const listener = event => {
      const el = ref === null || ref === void 0 ? void 0 : ref.current;

      if (!el || el.contains((event === null || event === void 0 ? void 0 : event.target) || null)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
;// CONCATENATED MODULE: ./src/components/common/modal/modal.tsx












// variant based classes for modal root, container & close btn
const rootClasses = {
  center: "p-4 md:p-5",
  bottom: "p-5 pb-0"
};
const containerClasses = {
  center: "h-1/2 max-h-1/2 bottom-1/4 -translate-y-1/2 rounded-lg",
  bottom: "h-full max-h-70vh bottom-0 rounded-ts-2xl rounded-te-2xl"
};
const closeBtnClasses = {
  center: "top-4 end-4",
  bottom: "top-1/4 start-1/2 transform -translate-y-1/2 -translate-x-1/2"
};

const Modal = ({
  open,
  children,
  onClose,
  rootClassName,
  useBlurBackdrop,
  containerClassName,
  variant = "center",
  hiddenClose
}) => {
  const {
    closeModal
  } = (0,ui_context/* useUI */.l8)();
  const modalRootRef = (0,external_react_.useRef)();
  const modalInnerRef = (0,external_react_.useRef)(); // Nếu click outside inner modal

  useOnClickOutside(modalInnerRef, () => closeModal());
  (0,external_react_.useEffect)(() => {
    if (modalInnerRef.current) {
      if (open) {
        (0,external_body_scroll_lock_.disableBodyScroll)(modalInnerRef.current);
      } else {
        (0,external_body_scroll_lock_.enableBodyScroll)(modalInnerRef.current);
      }
    }

    return () => {
      (0,external_body_scroll_lock_.clearAllBodyScrollLocks)();
    };
  }, [open]);
  return /*#__PURE__*/jsx_runtime_.jsx((portal_default()), {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
      children: open && /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.div, {
        ref: modalRootRef,
        initial: "from",
        animate: "to",
        exit: "from",
        variants: (0,fade_in_out/* fadeInOut */.I)(0.25),
        className: external_classnames_default()("modal-root fixed bg-black bg-opacity-70 inset-0 z-50", useBlurBackdrop && "backdrop-filter backdrop-blur-sm", rootClasses[variant], rootClassName),
        children: [!hiddenClose && /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: onClose,
          "aria-label": "Close panel",
          className: external_classnames_default()("fixed z-50 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md", closeBtnClasses[variant]),
          children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoClose */.bjh, {
            className: "text-xl"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
          initial: "from",
          animate: "to",
          exit: "from",
          variants: zoomOutIn(),
          className: "relative h-full mx-auto w-full",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: external_classnames_default()("w-full md:w-auto absolute left-1/2 transform -translate-x-1/2 shadow-xl", containerClasses[variant], containerClassName),
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              ref: modalInnerRef,
              className: "h-full rounded-lg",
              style: {
                maxHeight: "calc(100vh - 140px)"
              },
              children: children
            })
          })
        })]
      }, "modal")
    })
  });
};

/* harmony default export */ const modal = (Modal);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
// EXTERNAL MODULE: ./src/components/ui/button/index.tsx
var ui_button = __webpack_require__(1175);
// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(3977);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/common/newsletter.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-useless-escape */






const defaultValues = {
  email: ""
};
function Newsletter() {
  var _popupBanner$, _errors$email;

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,external_react_hook_form_.useForm)({
    defaultValues
  });
  const {
    closeModal,
    popupBanner
  } = (0,ui_context/* useUI */.l8)();

  function onSubmit(values) {
    closeModal();
  }

  const {
    t
  } = (0,external_next_i18next_.useTranslation)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "flex items-center justify-center",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-full sm:w-[450px] md:w-[550px] lg:w-[980px] xl:w-[1170px] flex flex-col max-w-full max-h-full bg-white overflow-hidden rounded-md",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex-shrink-0 items-center justify-center bg-gray-200 hidden lg:flex lg:w-[520px] xl:w-auto",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: ((_popupBanner$ = popupBanner[0]) === null || _popupBanner$ === void 0 ? void 0 : _popupBanner$.image) || "https://i.imgur.com/j1w2lWH.jpeg",
            alt: "Thumbnail",
            width: 655,
            height: 655,
            className: "object-cover w-full h-full"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col px-5 py-7 sm:p-10 md:p-12 xl:p-14 text-center w-full",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            className: "uppercase font-semibold text-xs sm:text-sm text-body mb-2 lg:mb-4",
            children: t("common:text-subscribe-now")
          }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "text-heading text-lg sm:text-xl md:text-2xl leading-8 font-bold mb-5 sm:mb-7 md:mb-9",
            children: popupBanner[0].title
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-body text-sm leading-6 md:leading-7",
            children: popupBanner[0].description
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
            className: "pt-8 sm:pt-10 md:pt-14 mb-1 sm:mb-0",
            onSubmit: handleSubmit(onSubmit),
            children: [/*#__PURE__*/jsx_runtime_.jsx(input/* Input */.I, _objectSpread(_objectSpread({
              placeholderKey: "forms:placeholder-email-subscribe",
              type: "email",
              variant: "jl",
              className: "w-full",
              inputClassName: "px-4 lg:px-7 h-12 lg:h-14 text-center bg-gray-50"
            }, register("email", {
              required: "forms:email-required",
              pattern: {
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "forms:email-error"
              }
            })), {}, {
              errorKey: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message
            })), /*#__PURE__*/jsx_runtime_.jsx(ui_button/* Button */.z, {
              variant: "jl",
              className: "w-full h-12 lg:h-14 mt-3 sm:mt-4",
              children: t("common:button-subscribe")
            })]
          })]
        })]
      })
    })
  });
}
;// CONCATENATED MODULE: ./src/components/common/image-view.tsx


/* eslint-disable no-useless-escape */


function ImageView() {
  const {
    closeModal,
    imageView
  } = (0,ui_context/* useUI */.l8)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "flex items-center justify-center",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-full max-w-full max-h-full bg-[#fcf9f3] overflow-hidden rounded-md",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "items-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex-shrink-0 items-center justify-center bg-gray-200 flex lg:w-[520px] xl:w-auto p-4",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: imageView || "https://i.imgur.com/j1w2lWH.jpeg",
            alt: "Thumbnail",
            width: 755,
            height: 655,
            quality: 100,
            className: "object-cover w-full h-full"
          })
        })
      })
    })
  });
}
;// CONCATENATED MODULE: ./src/components/common/modal/managed-modal.tsx







const LoginForm = dynamic_default()(() => Promise.all(/* import() */[__webpack_require__.e(664), __webpack_require__.e(94), __webpack_require__.e(183), __webpack_require__.e(524), __webpack_require__.e(235), __webpack_require__.e(559), __webpack_require__.e(945)]).then(__webpack_require__.bind(__webpack_require__, 3945)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3945)],
    modules: ["..\\components\\common\\modal\\managed-modal.tsx -> " + "@components/auth/login-form"]
  }
});
const SignUpForm = dynamic_default()(() => Promise.all(/* import() */[__webpack_require__.e(664), __webpack_require__.e(94), __webpack_require__.e(183), __webpack_require__.e(524), __webpack_require__.e(235), __webpack_require__.e(559), __webpack_require__.e(594)]).then(__webpack_require__.bind(__webpack_require__, 4594)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4594)],
    modules: ["..\\components\\common\\modal\\managed-modal.tsx -> " + "@components/auth/refactor-sign-up-form"]
  }
});
const ForgetPasswordForm = dynamic_default()(() => Promise.all(/* import() */[__webpack_require__.e(664), __webpack_require__.e(583), __webpack_require__.e(183), __webpack_require__.e(436)]).then(__webpack_require__.bind(__webpack_require__, 9436)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9436)],
    modules: ["..\\components\\common\\modal\\managed-modal.tsx -> " + "@components/auth/forget-password-form"]
  }
});
const ConditionTooltip = dynamic_default()(() => __webpack_require__.e(/* import() */ 262).then(__webpack_require__.bind(__webpack_require__, 6262)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6262)],
    modules: ["..\\components\\common\\modal\\managed-modal.tsx -> " + "@components/common/condition-tooltip"]
  }
}); // const ProductPopup = dynamic(() => import("@components/product/product-popup"));

const ManagedModal = () => {
  const {
    displayModal,
    closeModal,
    modalView
  } = (0,ui_context/* useUI */.l8)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(modal, {
    open: displayModal,
    onClose: closeModal,
    hiddenClose: modalView === "LOGIN_VIEW" || modalView === "SIGN_UP_VIEW" || modalView === "IMAGE_VIEW",
    children: [modalView === "LOGIN_VIEW" && /*#__PURE__*/jsx_runtime_.jsx(LoginForm, {}), modalView === "SIGN_UP_VIEW" && /*#__PURE__*/jsx_runtime_.jsx(SignUpForm, {}), modalView === "FORGET_PASSWORD" && /*#__PURE__*/jsx_runtime_.jsx(ForgetPasswordForm, {}), modalView === "NEWSLETTER_VIEW" && /*#__PURE__*/jsx_runtime_.jsx(Newsletter, {}), modalView === "IMAGE_VIEW" && /*#__PURE__*/jsx_runtime_.jsx(ImageView, {}), modalView === "CONDITION_TOOLTIP_VIEW" && /*#__PURE__*/jsx_runtime_.jsx(ConditionTooltip, {
      mobile: false
    })]
  });
};

/* harmony default export */ const managed_modal = (ManagedModal);
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: ./src/redux/slices/counter/index.ts

const initialState = {
  count: 20
};
const counterSlice = (0,toolkit_namespaceObject.createSlice)({
  name: "counter",
  initialState,
  reducers: {
    increase: state => {
      state.count++;
    },
    decrease: state => {
      state.count--;
    }
  }
});
const {
  increase,
  decrease
} = counterSlice.actions;
/* harmony default export */ const counter = (counterSlice.reducer);
;// CONCATENATED MODULE: ./src/redux/reducers.ts


const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
  counter: counter
});
/* harmony default export */ const reducers = (rootReducer);
;// CONCATENATED MODULE: ./src/redux/store.ts



const store = (0,toolkit_namespaceObject.configureStore)({
  reducer: reducers
});
const useAppDispatch = () => useDispatch();
/* harmony default export */ const redux_store = (store);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
;// CONCATENATED MODULE: external "@apollo/client"
const client_namespaceObject = require("@apollo/client");
;// CONCATENATED MODULE: ./src/services/graphql/index.ts

let apolloClient = null;
const createApolloClient = new client_namespaceObject.ApolloClient({
  ssrMode: true,
  uri: "https://api.spacex.land/graphql/",
  cache: new client_namespaceObject.InMemoryCache()
});
const initializeApollo = () => {
  // For SSG and SSR always create a new Apollo Client
  if (true) {
    return createApolloClient;
  } // Create the Apollo Client once in the client


  if (!apolloClient) {
    apolloClient = createApolloClient;
  }

  return apolloClient;
};
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(2364);
// EXTERNAL MODULE: ./src/settings/site-settings.tsx + 6 modules
var site_settings = __webpack_require__(8833);
// EXTERNAL MODULE: ./src/settings/site-pages.tsx
var site_pages = __webpack_require__(3500);
;// CONCATENATED MODULE: ./src/components/common/default-seo.tsx





const DefaultSeo = () => {
  var _sitePages$pathname$s, _sitePages$pathname$s2, _sitePages$pathname$s3;

  const {
    name,
    description
  } = site_settings/* siteSettings */.U;
  const {
    pathname,
    query,
    asPath
  } = (0,router_.useRouter)();
  const seoTitle = (site_pages/* sitePages */.s === null || site_pages/* sitePages */.s === void 0 ? void 0 : (_sitePages$pathname$s = site_pages/* sitePages */.s[pathname.substring(1)]) === null || _sitePages$pathname$s === void 0 ? void 0 : _sitePages$pathname$s["page_title"]) || name;
  const seoDescription = (site_pages/* sitePages */.s === null || site_pages/* sitePages */.s === void 0 ? void 0 : (_sitePages$pathname$s2 = site_pages/* sitePages */.s[pathname.substring(1)]) === null || _sitePages$pathname$s2 === void 0 ? void 0 : _sitePages$pathname$s2["page_description"]) || description;
  const seoOgBanner = (site_pages/* sitePages */.s === null || site_pages/* sitePages */.s === void 0 ? void 0 : (_sitePages$pathname$s3 = site_pages/* sitePages */.s[pathname.substring(1)]) === null || _sitePages$pathname$s3 === void 0 ? void 0 : _sitePages$pathname$s3["banner"]) || "https://joolux.com/og-image.jpg";
  return /*#__PURE__*/jsx_runtime_.jsx(external_next_seo_.DefaultSeo, {
    title: query.search && `${query.search} | Joolux` || "Trao Tủ Đồ Yêu Thương",
    description: "Góp xe cứu thương - Rút Ngắn Đại Dịch",
    canonical: `${"https://joolux-client.ml"}${asPath}`,
    openGraph: {
      type: "website",
      description: "Góp xe cứu thương - Rút Ngắn Đại Dịch",
      locale: "en_IE",
      site_name: seoTitle,
      title: "Trao Tủ Đồ Yêu Thương",
      images: [{
        url: "/assets/images/banner/Cover-Event-Charity.png",
        width: 800,
        height: 600,
        alt: "Og Image Alt"
      }, {
        url: "/assets/images/banner/Mobile-Landing-Page.png",
        width: 900,
        height: 800,
        alt: "Og Image Alt Second"
      }]
    },
    twitter: {
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image"
    },
    additionalMetaTags: [{
      name: "viewport",
      content: "width=device-width, initial-scale=1 maximum-scale=1"
    }, {
      name: "apple-mobile-web-app-capable",
      content: "yes"
    }, {
      name: "theme-color",
      content: "#ffffff"
    }],
    additionalLinkTags: [{
      rel: "apple-touch-icon",
      href: "icons/apple-icon-180.png"
    }, {
      rel: "manifest",
      href: "/manifest.json"
    }]
  });
};
;// CONCATENATED MODULE: external "aos"
const external_aos_namespaceObject = require("aos");
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_namespaceObject);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: ./src/utils/get-direction.ts
var get_direction = __webpack_require__(991);
;// CONCATENATED MODULE: external "react-use"
const external_react_use_namespaceObject = require("react-use");
;// CONCATENATED MODULE: ./src/components/common/scroll-to-top.tsx





const ScrollToTop = () => {
  // const {} = useWindowSize();
  const {
    y
  } = (0,external_react_use_namespaceObject.useWindowScroll)();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleScrollToSection = () => {
    const section2 = document.querySelector(".section-timeline");
    section2.scrollIntoView({
      behavior: "smooth"
    });
  };

  return y < 400 ? /*#__PURE__*/jsx_runtime_.jsx("div", {
    onClick: handleScrollToSection,
    className: external_classnames_default()("go-next-button", {
      hidden: y > 400
    }),
    children: "Xem th\xEAm"
  }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
    onClick: handleScrollToTop,
    className: external_classnames_default()("go-top-button", {
      hidden: y < 400
    }),
    children: "TOP"
  });
};

/* harmony default export */ const scroll_to_top = (ScrollToTop);
;// CONCATENATED MODULE: ./src/pages/_app.tsx





function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











 // import "tailwindcss/tailwind.css";



 // import { ReactQueryDevtools } from "react-query/devtools";




 // Load Open Sans and satisfy typeface font
// import "@fontsource/open-sans";








 // import "@fontsource/open-sans/600.css";
// import "@fontsource/open-sans/700.css";
// import "@fontsource/satisfy";

 // external

 // base css file








const Noop = ({
  children
}) => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
  children: children
});

function handleExitComplete() {
  if (false) {}
}

function MyApp({
  Component,
  pageProps
}) {
  const apolloClient = initializeApollo();
  const queryClient = new external_react_query_.QueryClient();
  const queryClientRef = (0,external_react_.useRef)();

  if (!queryClientRef.current) {
    queryClientRef.current = new external_react_query_.QueryClient();
  }

  const router = (0,router_.useRouter)(); // const dir = getDirection(router.locale);

  (0,external_react_.useEffect)(() => {
    if (false) {}

    external_aos_default().init();
    external_aos_default().refresh();
  }, []);
  const dir = (0,get_direction/* getDirection */.M)(router.locale);
  (0,external_react_.useEffect)(() => {
    document.documentElement.dir = dir;
  }, [dir]);
  const Layout = Component.Layout || Noop;
  return /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
    exitBeforeEnter: true,
    onExitComplete: handleExitComplete,
    children: /*#__PURE__*/jsx_runtime_.jsx(client_namespaceObject.ApolloProvider, {
      client: apolloClient,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_query_.QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(hydration_namespaceObject.Hydrate, {
          state: pageProps.dehydratedState,
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_redux_namespaceObject.Provider, {
            store: redux_store,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ui_context/* ManagedUIContext */.DA, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout, {
                pageProps: pageProps,
                children: [/*#__PURE__*/jsx_runtime_.jsx(DefaultSeo, {}), /*#__PURE__*/jsx_runtime_.jsx((external_nextjs_progressbar_default()), {
                  color: "#d0af66",
                  startPosition: 0.3,
                  stopDelayMs: 200,
                  height: 3,
                  showOnShallow: true,
                  options: {
                    easing: "ease",
                    speed: 500
                  }
                }), /*#__PURE__*/(0,external_react_.createElement)(Component, _app_objectSpread(_app_objectSpread({}, pageProps), {}, {
                  key: router.route
                })), /*#__PURE__*/jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {}), /*#__PURE__*/jsx_runtime_.jsx(scroll_to_top, {})]
              }), " ", /*#__PURE__*/jsx_runtime_.jsx(managed_modal, {})]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(devtools_namespaceObject.ReactQueryDevtools, {
            initialIsOpen: false
          })]
        })
      })
    })
  });
} // MyApp.getInitialProps = async (appContext) => {
//     const appProps = await App.getInitialProps(appContext);
//     return { ...appProps };
// };


/* harmony default export */ const _app = ((0,external_next_i18next_.appWithTranslation)(MyApp));

/***/ }),

/***/ 3719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ fadeInOut)
/* harmony export */ });
function fadeInOut(duration = 0.2) {
  return {
    from: {
      opacity: 0,
      transition: {
        type: "easeInOut",
        duration: duration
      }
    },
    to: {
      opacity: 1,
      transition: {
        type: "easeInOut",
        duration: duration
      }
    }
  };
}

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 3449:
/***/ ((module) => {

"use strict";
module.exports = require("@greatsumini/react-facebook-login");

/***/ }),

/***/ 2376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 8023:
/***/ ((module) => {

"use strict";
module.exports = require("body-scroll-lock");

/***/ }),

/***/ 4058:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 762:
/***/ ((module) => {

"use strict";
module.exports = require("framer-motion");

/***/ }),

/***/ 6155:
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ 8475:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 2364:
/***/ ((module) => {

"use strict";
module.exports = require("next-seo");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 8300:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9639:
/***/ ((module) => {

"use strict";
module.exports = require("next/dynamic");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 7496:
/***/ ((module) => {

"use strict";
module.exports = require("react-google-login");

/***/ }),

/***/ 2662:
/***/ ((module) => {

"use strict";
module.exports = require("react-hook-form");

/***/ }),

/***/ 2585:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 2034:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 173:
/***/ ((module) => {

"use strict";
module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [575,267,635], () => (__webpack_exec__(9992)));
module.exports = __webpack_exports__;

})();