"use strict";
exports.id = 559;
exports.ids = [559];
exports.modules = {

/***/ 8290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ facebook_auth)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/ui/button/index.tsx
var ui_button = __webpack_require__(1175);
// EXTERNAL MODULE: external "@greatsumini/react-facebook-login"
var react_facebook_login_ = __webpack_require__(3449);
var react_facebook_login_default = /*#__PURE__*/__webpack_require__.n(react_facebook_login_);
// EXTERNAL MODULE: ./node_modules/react-icons/si/index.esm.js
var index_esm = __webpack_require__(7735);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/contexts/ui.context.tsx
var ui_context = __webpack_require__(7014);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/api-endpoints.ts
var api_endpoints = __webpack_require__(3833);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/http.ts
var http = __webpack_require__(7235);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
// EXTERNAL MODULE: ./src/framework/basic-rest/product/use-favorite-product.tsx
var use_favorite_product = __webpack_require__(8592);
;// CONCATENATED MODULE: ./src/framework/basic-rest/auth/use-facebook-auth.tsx








async function facebookAuth(input) {
  const {
    data: {
      accessToken,
      refreshToken
    }
  } = await http/* default.post */.Z.post(`https://api.joolux-client.ml${api_endpoints/* API_ENDPOINTS.FACEBOOK_AUTH */.P.FACEBOOK_AUTH}`, input);
  return {
    accessToken,
    refreshToken
  };
}

const useFacebookAuthMutation = () => {
  const {
    authorize,
    closeModal,
    favoriteData,
    setFavoriteData
  } = (0,ui_context/* useUI */.l8)();
  const {
    mutate: favoriteProduct
  } = (0,use_favorite_product/* useFavoriteProductMutation */.w)();
  const queryClient = (0,external_react_query_.useQueryClient)();
  return (0,external_react_query_.useMutation)(async input => facebookAuth(input), {
    onSuccess: async data => {
      (0,external_react_toastify_.toast)("Đăng nhập Facebook thành công", {
        type: "dark",
        progressClassName: "fancy-progress-bar",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      });
      external_js_cookie_default().set("access_token", data.accessToken);
      external_js_cookie_default().set("refresh_token", data.refreshToken);
      await queryClient.resetQueries({
        active: true
      });
      authorize();
      closeModal();

      if (favoriteData) {
        favoriteProduct({
          product: favoriteData
        });
        setFavoriteData("");
      } // setTimeout(() => {
      //     window.location.href = window.location.origin;
      // }, 3000);

    },
    onError: error => {
      console.log(error.message, "Sign In error");
      (0,external_react_toastify_.toast)("Có lỗi đăng nhập với Facebook", {
        type: "dark",
        progressClassName: "fancy-progress-bar",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      }); // setTimeout(() => {
      //     window.location.href = window.location.origin;
      // }, 3000);
    }
  });
};
;// CONCATENATED MODULE: ./src/components/auth/facebook-auth.tsx









function FacebookAuth() {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)();
  const {
    mutate: authFacebook
  } = useFacebookAuthMutation();

  async function handleFacebookAuth(e) {
    authFacebook({
      email: e === null || e === void 0 ? void 0 : e.email,
      avatar: e === null || e === void 0 ? void 0 : e.picture,
      name: e === null || e === void 0 ? void 0 : e.name,
      tokenId: e === null || e === void 0 ? void 0 : e.accessToken
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx((react_facebook_login_default()), {
    appId: "879576332929657",
    onSuccess: handleFacebookAuth // autoLoad={true}
    ,
    fields: "name,email,picture",
    scope: "public_profile,email",
    onFail: handleFacebookAuth,
    render: ({
      onClick
    }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(ui_button/* Button */.z, {
      variant: "jl",
      className: "h-11 md:h-12 w-full mt-2.5 bg-white text-black hover:opacity-80 border-solid border-[1px] border-[#101010] hover:bg-white",
      onClick: onClick,
      children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* SiFacebook */.u5I, {
        className: "text-sm sm:text-base me-1.5 text-[#1877f2]"
      }), t("common:text-login-with-facebook")]
    })
  });
}

/* harmony default export */ const facebook_auth = (FacebookAuth);

/***/ }),

/***/ 1640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ google_auth)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/ui/button/index.tsx
var ui_button = __webpack_require__(1175);
// EXTERNAL MODULE: external "react-google-login"
var external_react_google_login_ = __webpack_require__(7496);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/contexts/ui.context.tsx
var ui_context = __webpack_require__(7014);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/api-endpoints.ts
var api_endpoints = __webpack_require__(3833);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/http.ts
var http = __webpack_require__(7235);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
// EXTERNAL MODULE: ./src/framework/basic-rest/product/use-favorite-product.tsx
var use_favorite_product = __webpack_require__(8592);
;// CONCATENATED MODULE: ./src/framework/basic-rest/auth/use-google-auth.tsx








async function googleAuth(input) {
  const {
    data: {
      accessToken,
      refreshToken
    }
  } = await http/* default.post */.Z.post(`https://api.joolux-client.ml${api_endpoints/* API_ENDPOINTS.GOOGLE_AUTH */.P.GOOGLE_AUTH}`, input);
  return {
    accessToken,
    refreshToken
  };
}

const useGoogleAuthMutation = () => {
  const {
    authorize,
    closeModal,
    favoriteData,
    setFavoriteData
  } = (0,ui_context/* useUI */.l8)();
  const {
    mutate: favoriteProduct
  } = (0,use_favorite_product/* useFavoriteProductMutation */.w)();
  const queryClient = (0,external_react_query_.useQueryClient)();
  return (0,external_react_query_.useMutation)(async input => googleAuth(input), {
    onSuccess: async data => {
      (0,external_react_toastify_.toast)("Đăng nhập Google thành công", {
        type: "dark",
        progressClassName: "fancy-progress-bar",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      });
      external_js_cookie_default().set("access_token", data.accessToken);
      external_js_cookie_default().set("refresh_token", data.refreshToken);
      await queryClient.resetQueries({
        active: true
      });
      authorize();
      closeModal();

      if (favoriteData) {
        favoriteProduct({
          product: favoriteData
        });
        setFavoriteData("");
      }
    },
    onError: error => {
      console.log(error.message, "Sign In error");
      (0,external_react_toastify_.toast)("Có lỗi đăng nhập với Google", {
        type: "dark",
        progressClassName: "fancy-progress-bar",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      });
    }
  });
};
// EXTERNAL MODULE: ./node_modules/react-icons/fc/index.esm.js
var index_esm = __webpack_require__(1872);
;// CONCATENATED MODULE: ./src/components/auth/google-auth.tsx









function GoogleAuth() {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)();
  const {
    mutate: authGoogle
  } = useGoogleAuthMutation();

  function handleGoogleAuth(e) {
    authGoogle({
      tokenId: e === null || e === void 0 ? void 0 : e.tokenId
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(external_react_google_login_.GoogleLogin, {
    clientId: "501515580965-up4k48hs2mf2md3bllgj2r5ges98ff94.apps.googleusercontent.com",
    render: renderProps => /*#__PURE__*/(0,jsx_runtime_.jsxs)(ui_button/* Button */.z, {
      variant: "jl",
      className: "h-11 md:h-12 w-full mt-2.5 bg-white text-black hover:opacity-80 border-solid border-[1px] border-[#101010] hover:bg-white",
      onClick: renderProps.onClick,
      children: [/*#__PURE__*/jsx_runtime_.jsx(index_esm/* FcGoogle */.JM8, {
        className: "text-sm sm:text-base me-1.5"
      }), t("common:text-login-with-google")]
    }),
    onSuccess: handleGoogleAuth,
    onFailure: handleGoogleAuth,
    cookiePolicy: "single_host_origin"
  });
}

/* harmony default export */ const google_auth = (GoogleAuth);

/***/ }),

/***/ 3205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ password_input)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/components/icons/eye-icon.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Eye = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", _objectSpread(_objectSpread({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, props), {}, {
  children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
  })]
}));
;// CONCATENATED MODULE: ./src/components/icons/eye-off-icon.tsx


function eye_off_icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function eye_off_icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { eye_off_icon_ownKeys(Object(source), true).forEach(function (key) { eye_off_icon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { eye_off_icon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function eye_off_icon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const EyeOff = props => /*#__PURE__*/jsx_runtime_.jsx("svg", eye_off_icon_objectSpread(eye_off_icon_objectSpread({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, props), {}, {
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
  })
}));
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/ui/password-input.tsx



function password_input_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function password_input_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { password_input_ownKeys(Object(source), true).forEach(function (key) { password_input_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { password_input_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function password_input_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const classes = {
  root: "py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border border-gray-500 text-input text-xs lg:text-sm font-body rounded-md placeholder-gray-600  transition duration-200 ease-in-out bg-white border border-gray-100 focus:outline-none focus:border-heading h-11 md:h-12",
  normal: "bg-gray-100 border-gray-300 focus:shadow focus:bg-white focus:border-primary",
  solid: "bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12",
  outline: "border-gray-300 focus:border-primary",
  jlInput: "step-form-input border-black w-full",
  shadow: "focus:shadow"
};
const PasswordInput = /*#__PURE__*/external_react_default().forwardRef((_ref, ref) => {
  let {
    className = "block",
    inputClassName,
    variant = "normal",
    labelKey,
    placeholderKey,
    name,
    shadow = "false",
    errorKey
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "inputClassName", "variant", "labelKey", "placeholderKey", "name", "shadow", "errorKey"]);

  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);
  const rootClassName = external_classnames_default()({
    [classes.root]: variant !== "jl"
  }, {
    [classes.normal]: variant === "normal",
    [classes.solid]: variant === "solid",
    [classes.outline]: variant === "outline",
    [classes.jlInput]: variant === "jl"
  }, {
    [classes.shadow]: shadow
  }, inputClassName);
  const {
    t
  } = (0,external_next_i18next_.useTranslation)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className,
    children: [labelKey && /*#__PURE__*/jsx_runtime_.jsx("label", {
      htmlFor: name,
      className: "block text-gray-600 font-semibold text-sm leading-none mb-3 cursor-pointer",
      children: t(labelKey)
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "relative",
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", password_input_objectSpread({
        id: name,
        name: name,
        type: show ? "text" : "password",
        ref: ref,
        className: rootClassName,
        placeholder: t(placeholderKey),
        autoComplete: "off",
        autoCapitalize: "off",
        spellCheck: "false"
      }, rest)), /*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: name,
        className: "absolute end-4 top-5 -mt-2 text-gray-500 cursor-pointer",
        onClick: () => setShow(prev => !prev),
        children: show ? /*#__PURE__*/jsx_runtime_.jsx(EyeOff, {
          className: "w-6 h-6"
        }) : /*#__PURE__*/jsx_runtime_.jsx(Eye, {
          className: "w-6 h-6"
        })
      })]
    }), errorKey && /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "my-2 text-xs text-red-500",
      children: t(errorKey)
    })]
  });
});
/* harmony default export */ const password_input = (PasswordInput);

/***/ }),

/***/ 8592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ useFavoriteProductMutation)
/* harmony export */ });
/* harmony import */ var _framework_utils_api_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3833);
/* harmony import */ var _contexts_ui_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7014);
/* harmony import */ var _framework_utils_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7235);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
// import http from "@framework/utils/http";





async function favoriteProduct(input) {
  return await _framework_utils_http__WEBPACK_IMPORTED_MODULE_2__/* .default.post */ .Z.post(`https://api.joolux-client.ml${_framework_utils_api_endpoints__WEBPACK_IMPORTED_MODULE_0__/* .API_ENDPOINTS.FAVORITE */ .P.FAVORITE}`, input);
}

const useFavoriteProductMutation = () => {
  const {
    favoriteData
  } = (0,_contexts_ui_context__WEBPACK_IMPORTED_MODULE_1__/* .useUI */ .l8)();
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQueryClient)();
  return (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)(async input => await favoriteProduct(input), {
    onSuccess: async data => {
      if (favoriteData) await queryClient.resetQueries({
        active: true
      });
    },
    onError: data => {
      console.log(data, "FavoriteProduct error response");
    }
  });
};

/***/ })

};
;