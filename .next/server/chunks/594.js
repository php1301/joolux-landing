"use strict";
exports.id = 594;
exports.ids = [594];
exports.modules = {

/***/ 4594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ refactor_sign_up_form)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/ui/input.tsx
var input = __webpack_require__(3977);
// EXTERNAL MODULE: ./src/components/ui/password-input.tsx + 2 modules
var password_input = __webpack_require__(3205);
// EXTERNAL MODULE: ./src/components/ui/button/index.tsx
var ui_button = __webpack_require__(1175);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: ./src/components/ui/logo/index.tsx
var logo = __webpack_require__(7816);
// EXTERNAL MODULE: ./src/contexts/ui.context.tsx
var ui_context = __webpack_require__(7014);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/api-endpoints.ts
var api_endpoints = __webpack_require__(3833);
// EXTERNAL MODULE: ./src/framework/basic-rest/utils/http.ts
var http = __webpack_require__(7235);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
// EXTERNAL MODULE: ./src/framework/basic-rest/product/use-favorite-product.tsx
var use_favorite_product = __webpack_require__(8592);
;// CONCATENATED MODULE: ./src/framework/basic-rest/auth/use-signup.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










async function signUp(input) {
  const {
    data: {
      accessToken,
      refreshToken
    }
  } = await http/* default.post */.Z.post(`https://api.joolux-client.ml${api_endpoints/* API_ENDPOINTS.SIGNUP */.P.SIGNUP}`, _objectSpread(_objectSpread({}, input), {}, {
    code: input.otp
  }));
  return {
    accessToken,
    refreshToken
  };
}

const useSignUpMutation = () => {
  const {
    authorize,
    closeModal,
    favoriteData,
    setFavoriteData
  } = (0,ui_context/* useUI */.l8)();
  const {
    mutate: favoriteProduct
  } = (0,use_favorite_product/* useFavoriteProductMutation */.w)();
  const queryClient = (0,external_react_query_.useQueryClient)(); // return useMutation<any, Error, LoginInputType>(

  return (0,external_react_query_.useMutation)(async input => signUp(input), {
    onSuccess: async data => {
      (0,external_react_toastify_.toast)("Đăng ký thành công bạn sẽ được chuyển hướng", {
        type: "dark",
        progressClassName: "fancy-progress-bar",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      });
      localStorage.removeItem("session_otp");
      external_js_cookie_default().set("access_token", data.accessToken);
      external_js_cookie_default().set("refresh_token", data.refreshToken);
      router_default().push("/my-account");
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
      console.log(error.response, "Sign Up error");
      localStorage.removeItem("session_otp");

      if (error.response.data.message.split(" ")[0] === "Email") {
        (0,external_react_toastify_.toast)("Email này đã được đăng ký", {
          type: "dark",
          progressClassName: "fancy-progress-bar",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        });
      } else if (error.response.data.message.split(" ")[0] === "Please") {
        (0,external_react_toastify_.toast)("Vui lòng nhập mã OTP hợp lệ", {
          type: "dark",
          progressClassName: "fancy-progress-bar",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        });
      } else {
        (0,external_react_toastify_.toast)("Có lỗi đăng ký", {
          type: "dark",
          progressClassName: "fancy-progress-bar",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        });
      }
    }
  });
};
// EXTERNAL MODULE: ./src/components/ui/link.tsx
var ui_link = __webpack_require__(3407);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.esm.js
var index_esm = __webpack_require__(155);
// EXTERNAL MODULE: ./src/utils/routes.ts
var routes = __webpack_require__(9524);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/components/auth/facebook-auth.tsx + 1 modules
var facebook_auth = __webpack_require__(8290);
// EXTERNAL MODULE: ./src/components/auth/google-auth.tsx + 1 modules
var google_auth = __webpack_require__(1640);
;// CONCATENATED MODULE: ./src/components/auth/refactor-sign-up-form.tsx




function refactor_sign_up_form_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function refactor_sign_up_form_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { refactor_sign_up_form_ownKeys(Object(source), true).forEach(function (key) { refactor_sign_up_form_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { refactor_sign_up_form_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function refactor_sign_up_form_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-useless-escape */
















const SignUpForm = () => {
  var _errors$email, _errors$password, _errors$confirmPasswo;

  const {
    t
  } = (0,external_next_i18next_.useTranslation)();
  const {
    mutate: signUp,
    isLoading
  } = useSignUpMutation();
  const {
    setModalView,
    openModal,
    closeModal
  } = (0,ui_context/* useUI */.l8)();
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    watch
  } = (0,external_react_hook_form_.useForm)({
    mode: "all"
  });
  const newPassword = (0,external_react_.useRef)({});
  newPassword.current = watch("password", "");

  function handleSignIn() {
    setModalView("LOGIN_VIEW");
    return openModal();
  }

  function onSubmit({
    name,
    email,
    password,
    confirmPassword,
    phone,
    otp,
    captcha
  }) {
    signUp({
      name,
      email,
      password,
      confirmPassword,
      phone,
      otp,
      captcha,
      sessionInfo: localStorage.getItem("session_otp")
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "overflow-hidden pt-5 px-5 sm:px-8 bg-white mx-auto w-full sm:w-96 md:w-450px border border-gray-300 relative",
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      onClick: closeModal,
      "aria-label": "Close panel",
      className: external_classnames_default()("fixed z-50 inline-flex items-center justify-center w-7 h-7 md:w-8 md:h-8 rounded-full bg-white shadow text-gray-600 transition duration-200 focus:outline-none focus:text-gray-800 focus:shadow-md hover:text-gray-800 hover:shadow-md", "top-4 end-4"),
      children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoClose */.bjh, {
        className: "text-xl"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "text-center mb-6 pt-2.5",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        onClick: closeModal,
        children: /*#__PURE__*/jsx_runtime_.jsx(logo/* Logo */.T, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "p-2 mb-[10px] text-xs text-black bg-[#f5f5f5] -mx-5 sm:-mx-8",
        children: "Authenticated Luxury Consignment"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "text-lg md:text-base text-black font-bold uppercase mt-2 mb-8 sm:mb-10",
        children: [t("common:registration-helper"), " "]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("form", {
      onSubmit: handleSubmit(onSubmit),
      className: "flex flex-col justify-center",
      noValidate: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col space-y-4",
        children: [/*#__PURE__*/jsx_runtime_.jsx(input/* Input */.I, refactor_sign_up_form_objectSpread(refactor_sign_up_form_objectSpread({
          placeholderKey: "forms:label-email",
          type: "email",
          variant: "jl"
        }, register("email", {
          required: `${t("Thông tin bắt buộc")}`,
          pattern: {
            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: t("forms:email-error")
          }
        })), {}, {
          errorKey: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message
        })), /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [" ", /*#__PURE__*/jsx_runtime_.jsx(password_input/* default */.Z, refactor_sign_up_form_objectSpread({
            placeholderKey: "M\u1EADt kh\u1EA9u",
            variant: "jl",
            errorKey: (_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.message
          }, register("password", {
            required: `${t("Thông tin bắt buộc")}`,
            minLength: {
              value: 8,
              message: "Mật khẩu phải có ít nhất 8 kí tự"
            }
          }))), /*#__PURE__*/jsx_runtime_.jsx(password_input/* default */.Z, refactor_sign_up_form_objectSpread({
            placeholderKey: "X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u",
            variant: "jl",
            errorKey: (_errors$confirmPasswo = errors.confirmPassword) === null || _errors$confirmPasswo === void 0 ? void 0 : _errors$confirmPasswo.message
          }, register("confirmPassword", {
            required: `${t("Thông tin bắt buộc")}`,
            validate: value => value === newPassword.current || "Mật khẩu xác nhận chưa giống"
          })))]
        }), /*#__PURE__*/jsx_runtime_.jsx(ui_button/* Button */.z, {
          type: "submit",
          loading: isLoading,
          variant: "jl",
          disabled: isLoading,
          className: "h-11 md:h-12 w-full mt-1.5",
          children: t("common:text-register")
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col items-center justify-center relative text-sm text-heading mt-6 mb-3.5",
        children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {
          className: "w-full border-gray-300"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "absolute -top-2.5 px-2 bg-white",
          children: t("common:text-or")
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(facebook_auth/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(google_auth/* default */.Z, {})]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      className: "text-[9.8px] md:text-[9px] text-body mt-2 mb-8 sm:mb-10 text-center",
      children: ["By joining into Joolux, you agree to the", " ", /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
        href: routes/* ROUTES.TERMS */.Z.TERMS,
        className: "text-heading underline hover:no-underline focus:outline-none",
        children: t("common:text-terms")
      }), " ", "&", " ", /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
        href: routes/* ROUTES.POLICY */.Z.POLICY,
        className: "text-heading underline hover:no-underline focus:outline-none",
        children: t("common:text-policy")
      }), " ", "and to receive promotional emails."]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "bg-[#eee] mt-2 -mx-5 sm:-mx-8",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "inline-block text-xs text-body text-center my-2 w-1/2 border-solid border-r-[1px] border-[#333]",
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          className: "text-xs text-heading underline font-extralight hover:no-underline focus:outline-none",
          onClick: handleSignIn,
          children: "Member sign in"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "inline-block text-xs text-body text-center my-2 w-1/2",
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          type: "button",
          className: "text-xs text-heading underline font-extralight hover:no-underline focus:outline-none",
          onClick: handleSignIn,
          children: "Sell with us"
        })
      })]
    }), " "]
  });
};

/* harmony default export */ const refactor_sign_up_form = (SignUpForm);

/***/ })

};
;