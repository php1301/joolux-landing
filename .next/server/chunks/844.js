"use strict";
exports.id = 844;
exports.ids = [844];
exports.modules = {

/***/ 4228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1958);
/* harmony import */ var overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Scrollbar = (_ref) => {
  let {
    options,
    children,
    style,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["options", "children", "style", "className"]);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_2__.OverlayScrollbarsComponent, _objectSpread(_objectSpread({
    options: _objectSpread({
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("os-theme-thin", className),
      scrollbars: {
        autoHide: "scroll"
      }
    }, options),
    style: style
  }, props), {}, {
    children: children
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scrollbar);

/***/ }),

/***/ 4718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ usePrice)
/* harmony export */ });
/* unused harmony exports formatPrice, formatVariantPrice */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function formatPrice({
  amount,
  currencyCode,
  locale
}) {
  // Format price với built-in Intl
  const formatCurrency = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode
  });
  return formatCurrency.format(amount);
}
function formatVariantPrice({
  amount,
  baseAmount,
  currencyCode,
  locale
}) {
  const hasDiscount = baseAmount > amount;
  const formatDiscount = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode
  });
  const discount = hasDiscount ? formatDiscount.format(baseAmount - amount).replace(/[,]/g, ".").replace(/[£$₫]/g, "") : null;
  const price = formatPrice({
    amount,
    currencyCode,
    locale
  }).replace(/[,]/g, ".").replace(/[£$₫]/g, "");
  const basePrice = hasDiscount ? formatPrice({
    amount: baseAmount,
    currencyCode,
    locale
  }).replace(/[,]/g, ".").replace(/[£$₫]/g, "") : null;
  return {
    price,
    basePrice,
    discount
  };
}
function usePrice(data) {
  const {
    amount,
    baseAmount,
    currencyCode
  } = data !== null && data !== void 0 ? data : {};
  const locale = "en";
  const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (typeof amount !== "number" || !currencyCode) return "";
    return baseAmount ? formatVariantPrice({
      amount,
      baseAmount,
      currencyCode,
      locale
    }) : formatPrice({
      amount,
      currencyCode,
      locale
    });
  }, [amount, baseAmount, currencyCode]);
  return typeof value === "string" ? {
    price: value,
    basePrice: null,
    discount: null
  } : value;
}

/***/ })

};
;