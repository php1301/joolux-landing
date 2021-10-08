"use strict";
exports.id = 436;
exports.ids = [436];
exports.modules = {

/***/ 9436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3977);
/* harmony import */ var _components_ui_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7816);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2662);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_ui_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7014);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9583);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-useless-escape */








const defaultValues = {
  email: ""
};

const ForgetPasswordForm = () => {
  var _errors$email;

  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)();
  const {
    0: request,
    1: setRequest
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    setModalView,
    openModal,
    closeModal
  } = (0,_contexts_ui_context__WEBPACK_IMPORTED_MODULE_6__/* .useUI */ .l8)();
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    defaultValues
  });

  function handleSignIn() {
    setModalView("LOGIN_VIEW");
    return openModal();
  }

  const onSubmit = values => {
    setRequest(true);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "py-6 px-5 sm:p-8 bg-white mx-auto w-full sm:w-96 md:w-450px border border-gray-300",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "text-center mb-9 pt-2.5",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        onClick: closeModal,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_logo__WEBPACK_IMPORTED_MODULE_4__/* .Logo */ .T, {})
      }), !request && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "text-sm md:text-base text-body mt-3 sm:mt-4 mb-8 sm:mb-10",
        children: t("common:forgot-password-helper")
      })]
    }), !request ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
      onSubmit: handleSubmit(data => onSubmit(data)),
      className: "flex flex-col justify-center",
      noValidate: true,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_input__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .I, _objectSpread(_objectSpread({
        labelKey: "forms:label-email",
        type: "email",
        variant: "solid",
        className: "mb-4"
      }, register("email", {
        required: `${t("forms:email-required")}`,
        pattern: {
          value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: t("forms:email-error")
        }
      })), {}, {
        errorKey: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message
      })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
        type: "submit",
        className: "h-11 md:h-12 w-full mt-2",
        children: t("common:text-reset-password")
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex flex-col justify-center items-center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__/* .FaRegCheckCircle */ .wO, {
        className: "w-1/4 h-1/4 text-green-400"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "text-sm",
        children: "Ch\xFAng t\xF4i \u0111\xE3 g\u1EEDi m\u1ED9t email h\u01B0\u1EDBng d\u1EABn kh\xF4i ph\u1EE5c"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex flex-col items-center justify-center relative text-sm text-heading mt-8 sm:mt-10 mb-6 sm:mb-7",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
        className: "w-full border-gray-300"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "absolute -top-2.5 px-2 bg-white",
        children: t("common:text-or")
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "text-sm sm:text-base text-body text-center",
      children: [t("common:text-back-to"), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        className: "text-sm sm:text-base text-heading underline font-bold hover:no-underline focus:outline-none",
        onClick: handleSignIn,
        children: t("common:text-login")
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgetPasswordForm);

/***/ })

};
;