"use strict";
exports.id = 267;
exports.ids = [267];
exports.modules = {

/***/ 1175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Button = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((props, ref) => {
  const {
    className,
    variant = "flat",
    children,
    active,
    loading = false,
    disabled = false,
    iconCart = false
  } = props,
        rest = _objectWithoutProperties(props, ["className", "variant", "children", "active", "loading", "disabled", "iconCart"]);

  const rootClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    "text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none": variant !== "jl"
  }, {
    "bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart": variant === "flat",
    "h-11 md:h-12 px-5 bg-heading text-white py-2 transform-none normal-case hover:text-white hover:bg-gray-600 hover:shadow-cart": variant === "slim",
    "step-form-button-submit": variant === "jl",
    "cursor-not-allowed": loading,
    "cursor-not-allowed hover:cursor-not-allowed": disabled
  }, className);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", _objectSpread(_objectSpread({
    "aria-pressed": active,
    "data-variant": variant,
    ref: ref,
    className: rootClassName,
    disabled: disabled
  }, rest), {}, {
    children: [iconCart && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
      className: "createIconSvgWrapper w-6 h-6 min-w-[24px] min-h-[24px] mr-1",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: "1.414",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        preserveAspectRatio: "xMidYMid meet",
        className: "createIconSvg",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
          fill: "none",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M8.25 20.25C8.66421 20.25 9 19.9142 9 19.5C9 19.0858 8.66421 18.75 8.25 18.75C7.83579 18.75 7.5 19.0858 7.5 19.5C7.5 19.9142 7.83579 20.25 8.25 20.25Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M18.75 20.25C19.1642 20.25 19.5 19.9142 19.5 19.5C19.5 19.0858 19.1642 18.75 18.75 18.75C18.3358 18.75 18 19.0858 18 19.5C18 19.9142 18.3358 20.25 18.75 20.25Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M2.25 3.75H5.25L7.5 16.5H19.5",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M7.5 13.5H19.1925C19.2792 13.5001 19.3633 13.4701 19.4304 13.4151C19.4975 13.3601 19.5434 13.2836 19.5605 13.1986L20.9105 6.44859C20.9214 6.39417 20.92 6.338 20.9066 6.28414C20.8931 6.23029 20.8679 6.18009 20.8327 6.13717C20.7975 6.09426 20.7532 6.05969 20.703 6.03597C20.6528 6.01225 20.598 5.99996 20.5425 6H6",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })]
        })
      })
    }), children, loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
      className: `animate-spin -me-1 ms-3 h-5 w-5 ${iconCart ? "text-[#101010]" : "text-white"}`,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
        className: "opacity-25",
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "4"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
        className: "opacity-75",
        fill: "currentColor",
        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      })]
    })]
  }));
});

/***/ }),

/***/ 3977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



 // Thay vì Props & thì ta extends luôn

const tuple = (...args) => args;

const inputTuple = tuple("normal", "solid", "outline", "jl");
const classes = {
  root: "py-2 px-4 md:px-5 w-full appearance-none transition duration-150 ease-in-out border text-input text-xs lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out",
  normal: "bg-gray-100 border-gray-300 focus:shadow focus:bg-white focus:border-primary",
  solid: "bg-white border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12",
  outline: "border-gray-300 focus:border-primary",
  jlInput: "step-form-input border-black w-full",
  shadow: "focus:shadow"
};
const Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef((_ref, ref) => {
  let {
    className = "block",
    labelKey,
    name,
    errorKey,
    placeholderKey,
    variant = "normal",
    shadow = false,
    type = "text",
    inputClassName,
    labelClass = "mb-3",
    hasIcon = false
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["className", "labelKey", "name", "errorKey", "placeholderKey", "variant", "shadow", "type", "inputClassName", "labelClass", "hasIcon"]);

  const rootClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
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
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: className,
    children: [labelKey && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
      htmlFor: name,
      className: `block text-gray-600 font-semibold text-sm leading-none cursor-pointer ${labelClass}`,
      children: t(labelKey)
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", _objectSpread({
      id: name,
      name: name,
      type: type,
      ref: ref // @ts-ignore
      ,
      placeholder: t(placeholderKey),
      className: rootClassName,
      autoComplete: "off",
      spellCheck: "false",
      "aria-invalid": errorKey ? "true" : "false"
    }, rest)), errorKey && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
      className: "my-2 text-xs text-red-500",
      children: t(errorKey)
    }), hasIcon && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "absolute top-0 left-0 h-full flex items-center px-2",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "createIconSvgWrapper",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: "1.414",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          preserveAspectRatio: "xMidYMid meet",
          className: "createIconSvg",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M21.4073 19.7527L16.9969 15.3422C18.0587 13.9286 18.6319 12.208 18.63 10.44C18.63 5.92406 14.9559 2.25 10.44 2.25C5.92406 2.25 2.25 5.92406 2.25 10.44C2.25 14.9559 5.92406 18.63 10.44 18.63C12.208 18.6319 13.9286 18.0587 15.3422 16.9969L19.7527 21.4073C19.9759 21.6069 20.2671 21.7135 20.5664 21.7051C20.8658 21.6967 21.1506 21.574 21.3623 21.3623C21.574 21.1506 21.6967 20.8658 21.7051 20.5664C21.7135 20.2671 21.6069 19.9759 21.4073 19.7527ZM4.59 10.44C4.59 9.28298 4.9331 8.15194 5.5759 7.18991C6.21871 6.22789 7.13235 5.47808 8.2013 5.03531C9.27025 4.59253 10.4465 4.47668 11.5813 4.70241C12.7161 4.92813 13.7584 5.48529 14.5766 6.30343C15.3947 7.12156 15.9519 8.16393 16.1776 9.29872C16.4033 10.4335 16.2875 11.6098 15.8447 12.6787C15.4019 13.7476 14.6521 14.6613 13.6901 15.3041C12.7281 15.9469 11.597 16.29 10.44 16.29C8.88906 16.2881 7.40217 15.6712 6.30548 14.5745C5.2088 13.4778 4.59186 11.9909 4.59 10.44Z",
            fill: "currentColor"
          })
        })
      })
    })]
  });
});

/***/ }),

/***/ 9745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Zl": () => (/* binding */ CartProvider),
  "jD": () => (/* binding */ useCart)
});

// UNUSED EXPORTS: cartContext

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/contexts/cart/cart.utils.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function addItemWithQuantity(items, item, quantity) {
  if (quantity <= 0) throw new Error("cartQuantity can't be zero or less than zero");
  const existingItemIndex = items.findIndex(existingItem => existingItem.id === item.id);

  if (existingItemIndex > -1) {
    const newItems = [...items];
    newItems[existingItemIndex].quantity += quantity;
    return newItems;
  }

  return [...items, _objectSpread(_objectSpread({}, item), {}, {
    quantity
  })];
}
function removeItemOrQuantity(items, id, quantity) {
  return items.reduce((acc, item) => {
    if (item.id === id) {
      if (item.quantity === 0) {
        return [...acc];
      }

      const newQuantity = item.quantity - quantity;
      return newQuantity > 0 ? [...acc, _objectSpread(_objectSpread({}, item), {}, {
        quantity: newQuantity
      })] : [...acc, _objectSpread(_objectSpread({}, item), {}, {
        quantity: 0
      })];
    }

    return [...acc, item];
  }, []);
} // Simple CRUD for Item

function addItem(items, item) {
  return [...items, item];
}
function getItem(items, id) {
  return items.find(item => item.id === id);
}
function updateItem(items, id, item) {
  return items.map(existingItem => existingItem.id === id ? _objectSpread(_objectSpread({}, existingItem), item) : existingItem);
}
function removeItem(items, id) {
  return items.filter(existingItem => existingItem.id !== id);
}
const calculateItemTotals = items => items.map(item => _objectSpread(_objectSpread({}, item), {}, {
  itemTotal: item.price * item.quantity
}));
const calculateSpecialPricetotal = items => items.reduce((total, item) => total + item.quantity * item.specialPrice || 0, 0);
const calculateTotal = items => items.reduce((total, item) => total + item.quantity * item.price, 0);
const calculateTotalItems = items => items.reduce((sum, item) => sum + item.quantity, 0);
const calculateUniqueItems = items => items.length;
;// CONCATENATED MODULE: ./src/contexts/cart/cart.reducer.tsx
function cart_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function cart_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cart_reducer_ownKeys(Object(source), true).forEach(function (key) { cart_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cart_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function cart_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  items: [],
  isEmpty: true,
  totalItems: 0,
  totalUniqueItems: 0,
  total: 0,
  specialPriceTotal: 0,
  meta: null
};
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM_WITH_QUANTITY":
      {
        const items = addItemWithQuantity(state.items, action.item, action.quantity);
        return generateFinalState(state, items);
      }

    case "REMOVE_ITEM_OR_QUANTITY":
      {
        const items = removeItemOrQuantity(state.items, action.id, action.quantity = 1);
        return generateFinalState(state, items);
      }

    case "ADD_ITEM":
      {
        const items = addItem(state.items, action.item);
        return generateFinalState(state, items);
      }

    case "REMOVE_ITEM":
      {
        const items = removeItem(state.items, action.id);
        return generateFinalState(state, items);
      }

    case "UPDATE_ITEM":
      {
        const items = updateItem(state.items, action.id, action.item);
        return generateFinalState(state, items);
      }

    case "RESET_CART":
      return initialState;

    default:
      return state;
  }
}

const generateFinalState = (state, items) => {
  const totalUniqueItems = calculateUniqueItems(items);
  return cart_reducer_objectSpread(cart_reducer_objectSpread({}, state), {}, {
    items: calculateItemTotals(items),
    totalItems: calculateTotalItems(items),
    totalUniqueItems,
    total: calculateTotal(items),
    specialPriceTotal: calculateSpecialPricetotal(items),
    isEmpty: totalUniqueItems === 0
  });
};
// EXTERNAL MODULE: external "react-use/lib/useLocalStorage"
var useLocalStorage_ = __webpack_require__(173);
var useLocalStorage_default = /*#__PURE__*/__webpack_require__.n(useLocalStorage_);
;// CONCATENATED MODULE: ./src/utils/use-local-storage.ts

;// CONCATENATED MODULE: ./src/contexts/cart/cart.context.tsx


function cart_context_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function cart_context_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cart_context_ownKeys(Object(source), true).forEach(function (key) { cart_context_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cart_context_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function cart_context_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const cartContext = /*#__PURE__*/external_react_default().createContext(undefined);
cartContext.displayName = "CartContext";
const useCart = () => {
  const context = external_react_default().useContext(cartContext);

  if (context === undefined) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
};
const CartProvider = props => {
  const [savedCart, saveCart] = useLocalStorage_default()(`joolux-cart`, JSON.stringify(initialState));
  const [state, dispatch] = external_react_default().useReducer(cartReducer, JSON.parse(savedCart));
  external_react_default().useEffect(() => {
    saveCart(JSON.stringify(state));
  }, [state, saveCart]);

  const addItemToCart = (item, quantity) => dispatch({
    type: "ADD_ITEM_WITH_QUANTITY",
    item,
    quantity
  });

  const removeItemFromCart = id => dispatch({
    type: "REMOVE_ITEM_OR_QUANTITY",
    id
  });

  const clearItemFromCart = id => dispatch({
    type: "REMOVE_ITEM",
    id
  });

  const isInCart = id => !!getItem(state.items, id);

  const getItemFromCart = id => getItem(state.items, id);

  const clearCart = items => {
    items.map(i => {
      dispatch({
        type: "REMOVE_ITEM_OR_QUANTITY",
        id: i["id"]
      });
    });
    localStorage.removeItem("joolux-cart");
  }; // const inStock=()=>{}


  const value = external_react_default().useMemo(() => cart_context_objectSpread(cart_context_objectSpread({}, state), {}, {
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    getItemFromCart,
    isInCart,
    clearCart
  }), [state]);
  return /*#__PURE__*/jsx_runtime_.jsx(cartContext.Provider, cart_context_objectSpread({
    value: value
  }, props));
};

/***/ }),

/***/ 7014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l8": () => (/* binding */ useUI),
/* harmony export */   "DA": () => (/* binding */ ManagedUIContext)
/* harmony export */ });
/* unused harmony exports UIContext, UIProvider */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _framework_utils_get_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(608);
/* harmony import */ var _cart_cart_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9745);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  isAuthorized: (0,_framework_utils_get_token__WEBPACK_IMPORTED_MODULE_2__/* .getAccessToken */ .h)() ? true : false,
  displaySidebar: false,
  displayFilter: false,
  displayModal: false,
  displayCart: false,
  displaySearch: false,
  modalView: "LOGIN_VIEW",
  drawerView: null,
  modalData: null,
  toastText: "",
  popupBanner: null,
  favoriteData: "",
  displaySuccess: false,
  imageView: null
};
const UIContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext(initialState);
UIContext.displayName = "UIContext";

function uiReducer(state, action) {
  switch (action.type) {
    case "SET_AUTHORIZED":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isAuthorized: true
        });
      }

    case "SET_UNAUTHORIZED":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isAuthorized: false
        });
      }

    case "OPEN_SIDEBAR":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          displaySidebar: true
        });
      }

    case "CLOSE_SIDEBAR":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          displaySidebar: false,
          drawerView: null
        });
      }

    case "OPEN_CART":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          displayCart: true
        });
      }

    case "CLOSE_CART":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          displayCart: false
        });
      }

    case "OPEN_SEARCH":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          displaySearch: true
        });
      }

    case "CLOSE_SEARCH":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          displaySearch: false
        });
      }

    case "OPEN_FILTER":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          displayFilter: true
        });
      }

    case "CLOSE_FILTER":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          displayFilter: false
        });
      }

    case "OPEN_MODAL":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          displayModal: true,
          displaySidebar: false
        });
      }

    case "CLOSE_MODAL":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          displayModal: false
        });
      }

    case "SET_MODAL_VIEW":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          modalView: action.view
        });
      }

    case "SET_POPUP_BANNER":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          popupBanner: action.value
        });
      }

    case "SET_IMAGE_VIEW":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          imageView: action.value
        });
      }

    case "SET_DRAWER_VIEW":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          drawerView: action.view
        });
      }

    case "SET_MODAL_DATA":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          modalData: action.data
        });
      }

    case "SET_FAVORITE_DATA":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          favoriteData: action.value
        });
      }

    case "SET_TOAST_TEXT":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          toastText: action.text
        });
      }

    case "SET_USER_AVATAR":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          userAvatar: action.value
        });
      }

    case "SET_DISPLAY_SUCCESS":
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          displaySuccess: action.value
        });
      }
  }
}

const UIProvider = props => {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_1___default().useReducer(uiReducer, initialState);

  const authorize = () => dispatch({
    type: "SET_AUTHORIZED"
  });

  const unauthorize = () => dispatch({
    type: "SET_UNAUTHORIZED"
  });

  const openSidebar = () => dispatch({
    type: "OPEN_SIDEBAR"
  });

  const closeSidebar = () => dispatch({
    type: "CLOSE_SIDEBAR"
  });

  const toggleSidebar = () => state.displaySidebar ? dispatch({
    type: "CLOSE_SIDEBAR"
  }) : dispatch({
    type: "OPEN_SIDEBAR"
  });

  const closeSidebarIfPresent = () => state.displaySidebar && dispatch({
    type: "CLOSE_CART"
  });

  const openCart = () => dispatch({
    type: "OPEN_CART"
  });

  const closeCart = () => dispatch({
    type: "CLOSE_CART"
  });

  const toggleCart = () => state.displaySidebar ? dispatch({
    type: "CLOSE_CART"
  }) : dispatch({
    type: "OPEN_CART"
  });

  const closeCartIfPresent = () => state.displaySidebar && dispatch({
    type: "CLOSE_CART"
  });

  const openFilter = () => dispatch({
    type: "OPEN_FILTER"
  });

  const closeFilter = () => dispatch({
    type: "CLOSE_FILTER"
  });

  const openModal = () => dispatch({
    type: "OPEN_MODAL"
  });

  const closeModal = () => dispatch({
    type: "CLOSE_MODAL"
  });

  const openSearch = () => dispatch({
    type: "OPEN_SEARCH"
  });

  const closeSearch = () => dispatch({
    type: "CLOSE_SEARCH"
  });

  const setUserAvatar = _value => dispatch({
    type: "SET_USER_AVATAR",
    value: _value
  });

  const setPopupBanner = _value => dispatch({
    type: "SET_POPUP_BANNER",
    value: _value
  });

  const setImageView = _value => dispatch({
    type: "SET_IMAGE_VIEW",
    value: _value
  });

  const setModalView = view => dispatch({
    type: "SET_MODAL_VIEW",
    view
  });

  const setDrawerView = view => dispatch({
    type: "SET_DRAWER_VIEW",
    view
  });

  const setModalData = data => dispatch({
    type: "SET_MODAL_DATA",
    data
  });

  const setFavoriteData = data => dispatch({
    type: "SET_FAVORITE_DATA",
    value: data
  });

  const setDisplaySuccess = data => dispatch({
    type: "SET_DISPLAY_SUCCESS",
    value: data
  });

  const value = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => _objectSpread(_objectSpread({}, state), {}, {
    authorize,
    unauthorize,
    openSidebar,
    closeSidebar,
    toggleSidebar,
    closeSidebarIfPresent,
    openCart,
    closeCart,
    toggleCart,
    closeCartIfPresent,
    openFilter,
    closeFilter,
    openModal,
    closeModal,
    openSearch,
    closeSearch,
    setModalView,
    setDrawerView,
    setUserAvatar,
    setModalData,
    setPopupBanner,
    setFavoriteData,
    setDisplaySuccess,
    setImageView
  }), [state]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UIContext.Provider, _objectSpread({
    value: value
  }, props));
};
const useUI = () => {
  const context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(UIContext);

  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }

  return context;
};
const ManagedUIContext = ({
  children
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_cart_cart_context__WEBPACK_IMPORTED_MODULE_3__/* .CartProvider */ .Zl, {
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UIProvider, {
    children: children
  })
});

/***/ }),

/***/ 608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ getAccessToken),
/* harmony export */   "Y": () => (/* binding */ getRefreshToken)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);

const getAccessToken = () => {
  if (false) {}

  return js_cookie__WEBPACK_IMPORTED_MODULE_0___default().get("access_token");
};
const getRefreshToken = () => {
  if (false) {}

  return js_cookie__WEBPACK_IMPORTED_MODULE_0___default().get("refresh_token");
};

/***/ }),

/***/ 8833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ siteSettings)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/icons/ILFlag.tsx


const ILFlag = ({
  width = "640px",
  height = "480px"
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480",
    width: width,
    height: height,
    children: [/*#__PURE__*/jsx_runtime_.jsx("defs", {
      children: /*#__PURE__*/jsx_runtime_.jsx("clipPath", {
        id: "il-a",
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          fillOpacity: ".7",
          d: "M-87.6 0H595v512H-87.6z"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      fillRule: "evenodd",
      clipPath: "url(#il-a)",
      transform: "translate(82.1) scale(.94)",
      children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#fff",
        d: "M619.4 512H-112V0h731.4z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#00c",
        d: "M619.4 115.2H-112V48h731.4zm0 350.5H-112v-67.2h731.4zm-483-275l110.1 191.6L359 191.6l-222.6-.8z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#fff",
        d: "M225.8 317.8l20.9 35.5 21.4-35.3-42.4-.2z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#00c",
        d: "M136 320.6L246.2 129l112.4 190.8-222.6.8z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#fff",
        d: "M225.8 191.6l20.9-35.5 21.4 35.4-42.4.1zM182 271.1l-21.7 36 41-.1-19.3-36zm-21.3-66.5l41.2.3-19.8 36.3-21.4-36.6zm151.2 67l20.9 35.5-41.7-.5 20.8-35zm20.5-67l-41.2.3 19.8 36.3 21.4-36.6zm-114.3 0L189.7 256l28.8 50.3 52.8 1.2 32-51.5-29.6-52-55.6.5z"
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/icons/SAFlag.tsx


const SAFlag = ({
  width = "640px",
  height = "480px"
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "flag-icon-css-sa",
    viewBox: "0 0 640 480",
    width: width,
    height: height,
    children: [/*#__PURE__*/jsx_runtime_.jsx("defs", {
      children: /*#__PURE__*/jsx_runtime_.jsx("clipPath", {
        id: "sa-a",
        children: /*#__PURE__*/jsx_runtime_.jsx("path", {
          fillOpacity: ".7",
          d: "M-85.3 0h682.6v512H-85.3z"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      fillRule: "evenodd",
      clipPath: "url(#sa-a)",
      transform: "translate(80) scale(.9375)",
      children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#199d00",
        d: "M-128 0h768v512h-768z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#fff",
        d: "M65.5 145.1c-.8 12-2 33 8.3 35.2 12.3 1.2 5.5-20.8 10-24.8.8-2 2.3-2 2.4.5v18.7c0 6 4 7.8 7 9 3.2-.2 5.4 0 6.6 3l1.6 32.3s7.4 2.2 7.8-18.1c.3-12-2.4-21.9-.8-24.2 0-2.3 3-2.4 5-1.3 3.2 2.2 4.6 5 9.6 4 7.6-2.2 12.2-5.9 12.3-11.7a47 47 0 00-3.5-16.6c.4-1-1.4-3.7-1-4.7 1.3 2.2 3.4 2 3.8 0-1.3-4.2-3.3-8.3-6.5-10-2.7-2.4-6.7-2-8 3-.8 5.7 2 12.4 6.1 18 .9 2.1 2.1 5.7 1.6 8.9-2.2 1.3-4.4.7-6.3-1.2 0 0-6-4.5-6-5.6 1.6-10.2.3-11.4-.6-14.3-.6-3.9-2.5-5.2-4-7.8-1.5-1.6-3.5-1.6-4.5 0-2.7 4.6-1.4 14.5.5 19 1.4 4.1 3.5 6.7 2.5 6.7-.8 2.3-2.5 1.7-3.8-1a66.6 66.6 0 01-2.1-17.4c-.5-4.6-1.1-14.4-4.2-17-1.8-2.4-4.5-1.2-5.5 1a82.4 82.4 0 00.3 13.4c2 7.4 2.7 14 3.7 21.5.3 10.1-5.8 4.4-5.5-.7a45 45 0 00-.3-19.4c-1-2.6-2.1-3.2-4.6-2.8-1.9 0-6.8 5.3-8.2 14.3 0 0-1.2 4.6-1.7 8.7-.7 4.6-3.7 8-5.9-.6-1.8-6.3-3-21.6-6-18z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#fff",
        d: "M99 194.2l-32 15.4c.3-7.3 15.1-20.4 25.3-20.5 6.5.1 4.9 2.5 6.6 5.1z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#fff",
        d: "M93.3 204.2c-16.8 43.5 39.5 49.6 45.8 1.8.6-2 3-3.9 3.4-.7-1.3 43.3-43.6 46.2-50.8 32.6a41.9 41.9 0 01-2.5-14.6c-1-8.5-5.5-5.2-6.2 3.2-.7 4.7-.5 6-.5 10.5 2.2 34.2 56.7 19.5 65.6-8.7 4.7-15.6-.8-27.1 1.7-27.1 5.4 5.8 13 .8 14.7-1.2.7-1 2.5-1.7 3.7-.4 4.2 3 11.6 1.6 13.2-3.7.9-5.3 1.6-10.7 1.8-16.2-3.5 1-6 1.7-6.3 3.2l-.7 4.6c-.3 1.5-3.2 1.5-3.4-.4-1.3-6-6.7-6.7-10 2.5-2.1 1.8-6.1 2.2-6.5-.5.5-6.2-2-7-7-4.1l-4.8-36.2c2 0 4 1.5 5.9-.9-2-6.5-6.5-19.7-9-20.7-1.1-1.4-2.1-.5-3.7-.1-2.6.8-5 3-4.2 7.4 3 18.8 5 33.1 8.1 52 .5 2.1-1.3 5-3.7 4.7-4-2.7-5-8.2-12-8-5 0-10.6 5.5-11.3 10.7-.9 4.2-1.2 8.7 0 12.3 3.5 4.2 7.7 3.8 11.4 2.9 3-1.3 5.5-4.3 6.6-3.6.7.9.1 10.9-14.3 18.5-8.7 4-15.7 4.8-19.4-2.3-2.3-4.5.2-21.4-5.6-17.5z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#fff",
        d: "M165 160c3.3-1.2 19.3-19.6 19.3-19.6l-2.4-2c-.9-.7-.8-1.5 0-2.2 4-2.4 2.7-7.4.7-9.8a9.7 9.7 0 00-8.7.1c-2.8 2.7-3.4 7-1.2 9.6 2.1 1 4.2 3.2 2.8 4.4-6.6 7-24.5 19.1-22.4 19.5.4.6 11.5.6 11.8 0zm-97 65c-6 9.6-6.5 23.9-3.2 28.2 1.8 2 4.7 2.9 6.8 2.2 3.8-1.6 5.5-9.3 4.6-12-1.3-2-2.3-2.3-3.6-.7-2.6 5.4-3.7 1.7-4-1.3a70 70 0 01.8-15.2c.7-4.2 0-3-1.4-1.2zm257.1-15.3c-5.8-12.6-13.9-25-16.4-29.7a557.6 557.6 0 00-24.8-36c-6.2-7.4 10.2 3.1-2-11.7l-8.9-7.5c-2-1.4-6.8-4-7.6.2-.4 3.8-.2 5.8.4 8.9.5 2 3.5 5.5 5 7.5a565 565 0 0153.8 86.5c2.6-1.3 2-16.1.5-18.2z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#fff",
        d: "M299.6 251.5c-1.2 1.3 2.8 6.8 8 6.8 8.6-1 16.2-5.8 23.2-18.6a33 33 0 005.3-14.2 317 317 0 00-5.8-72.4c-.3-2 0-4.4.2-5 .6-.7 2.5 0 3.5-1.7 1.5-1.5-4-14-7-18.7-1-2.2-1.5-3.6-3.3.2a27 27 0 00-3 13.6c4.1 28.5 5.4 53.4 8 81.9.3 2.8-.1 6.8-2 8.4a80.2 80.2 0 01-27.1 19.7zm116.5-.1c-6.2 3.6-6.2 7.7-1.2 7.8 8.6-1 18.8-1.7 25.8-12.3a41 41 0 004.2-16 303 303 0 00-4.7-71.4c-.2-2-1.1-6.7-.8-7.3.6-1.4 3.4.1 4.4-1.5 1.4-1.5-7.3-12.7-10.4-17.5-1-2.2-1.4-3.6-3.3.2a22.3 22.3 0 00-1.8 13.6c4.6 31 8 54.2 8.7 81.6-.4 2.6-.5 4-1.7 7.3-2.7 3.4-5.7 7.8-8.5 9.9-2.8 2-8.8 4-10.7 5.6z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#fff",
        d: "M420.7 223.7c0-7.3.1-13.5-.1-19a34 34 0 00-3-13.5c-1.8-4.1-.7-7.4-1.6-11.8-.8-4.4-.6-11-1.8-16.1-.4-2-1.4-8.5-1.1-9.2.5-1.4 2.4 0 3.4-1.6 1.4-1.5-5-18-8.2-22.7-1.1-2.1-3.3-1.4-5.8 2-2.5 2.3-1.6 7.4-.6 12.3 6.1 32.3 10.8 61.6 9.8 92.3-.4 2.6 9-7.8 9-12.7zm-45.7-40c-3.9-.2-12-7.7-14.4-12a8 8 0 01.4-6.5c1.5-1 3.7-2 5.4-1 0 0 1.7 2.4 1.4 2.7 2 1 3 .5 3.2-.4.1-1.5-.6-2.4-.6-4 .9-4.6 6-5.3 8-2.4 1.4 1.8 2 5.5 2.1 8 0 1.3-2-.2-3.3 0-1.1.4-1.4 1.8-1.5 3-.2 3.3-.6 8.6-.7 12.5zm-71.8 48c1-9.8-.4-27.3-.5-33.1A477 477 0 00299 154c-1.2-8.4 3.4.9 2.8-4-1.5-8.3-6.1-14-11.6-21.5-1.7-2.5-1.7-3-4.4.6-3 6.7-.4 11.4.4 16.7 3.9 17.2 6.2 33 7.3 48.7a393.4 393.4 0 01.4 49c3 .1 7.6-4.7 9.3-11.8z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#fff",
        d: "M434 216c-6.9-11.6-17.2-24-20-28.7a658 658 0 00-29.2-37.8c-8.5-9 4-1.5-1.6-8.5-4.7-5.1-6-6.8-10.1-9.9-2-1.3-3.2-3.8-4 .5a83 83 0 00-.2 11.2c0 1.7 1.8 5 3.4 7 20.7 25.5 43.4 51.5 61.6 84.2 2.6-1.3 1.7-16 0-18z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#1ba400",
        d: "M122.6 194.7c-.5.9-1.6 2-1.2 3.1.7 1 1.4 1.3 2.6 1.3 1.1 0 2.7.3 3-.3.6-.7 1-2 .6-3.3-1.2-3-4.4-1.8-5-.8z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#fff",
        d: "M354.2 362.5c9.2.4 15.2.5 23.3 1.4l9.6-1c10.6-1 11 15.1 11 15.1 0 9.5-3.7 10-8.4 11-2.7.4-4-1.6-5.5-3.6a14 14 0 01-7 .4c-3.9-.2-7.7-.2-11.5-.5-4-.3-6.2.5-10.3.1-.8 1.3-2 3.1-4.4 2.6-2-.3-4.5-6-3.8-10.5 1.5-3.2 1-2.1 1-3.5-37.6-1-75.5-2.7-112.3-2.2-28.8.1-57.2 1.3-85.7 2.5-15.2-.2-26.8-2.6-34.8-14.3.8 0 38.8 2.1 49.9 1.4 20.5-.2 39.3-1.9 60.2-2.5 41.2.7 82.1.7 123.3 3.6-4-2.7-4-9 2-10.6.5-.4.8 3.1 1.7 3 4.9-.3 2.7 6.3 1.7 7.6zM188.6 135.3c-6.2 17.8 3.6 37.4 10.4 35.5 5 2 8-7.4 10-17.6 1.5-2.9 2.5-3.2 3.2-1.7-.2 13.6 1 16.7 4.5 20.8 7.8 6 14.3.8 14.8.3l6-6.1c1.4-1.5 3.2-1.5 5.1-.3 1.9 1.7 1.6 4.6 5.6 6.6 3.4 1.4 10.5.4 12.2-2.5 2.2-3.9 2.8-5.2 3.8-6.6 1.6-2.1 4.3-1.2 4.3-.5-.3 1.2-1.9 2.3-.8 4.5 2 1.4 2.4.5 3.5.2 4-2 7-10.6 7-10.6.1-3.2-1.7-3-2.9-2.2l-3.1 2.1c-2 .3-5.7 1.6-7.6-1.3-1.9-3.4-1.9-8.3-3.3-11.8 0-.2-2.6-5.5-.2-5.8 1.2.2 3.7.9 4.1-1.2 1.2-2.1-2.6-8-5.3-11-2.3-2.5-5.5-2.8-8.6-.2-2.2 2-1.9 4.2-2.3 6.3a9.8 9.8 0 002 8.7c2.2 4.2 6.1 9.7 4.8 17.5 0 0-2.3 3.6-6.3 3.1-1.7-.3-4.4-1-5.8-11.8-1.1-8 .2-19.4-3.2-24.7-1.3-3.3-2.2-6.4-5.2-.9-.8 2.2-4.3 5.5-1.8 12.2a36 36 0 012 19c-1.5 2.2-1.8 2.9-3.7 5-2.6 3-5.5 2.2-7.7 1.1-2-1.3-3.6-2-4.6-6.5.2-7 .6-18.5-.7-20.9-1.9-3.8-5-2.4-6.3-1.2a47.7 47.7 0 00-11.5 23.5c-1.8 5.8-3.7 4.1-5 1.8-3.2-3-3.5-26.7-7.4-22.8z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#fff",
        d: "M207.4 174.1c2.9-2 1.6-3.4 5.8.8a72 72 0 019.2 31.3c-.2 2.6 1.6 4.2 2.5 3.6.4-6 15.1-14.4 28.6-15.6 2-.5 1-4.4 1.3-6.4-.8-7.5 4.2-14.3 11.2-14.8 9.6 1.4 12.8 6.5 13 14.2-1.1 15-16.7 17.5-25.4 18.7-1.3.5-1.9 1.1 0 1.8l36.6.2 1.9 1c.2 1-.6.2-2 2.6a29.5 29.5 0 00-3.7 11.5c-10.9 3.6-22.2 5-33.6 6.5-4 2-6 4.7-5.2 7.7 1.4 3.3 10.2 6.7 10.2 6.8 1.7 1 3.6 3.5-.5 8.6-17.8-.8-31.7-8.4-36.5-19.1-1.4-1.1-3 0-4 1.4-7 9-13.8 17-25.7 21.4-7 1.8-14.3-1.1-17.7-5.7-2.3-2.7-2.2-5.6-3-6.2-3.9 1.7-36.9 15.7-32.7 9.1 8-8.5 22-14.9 34.2-23.3.9-2.9 2.5-12.5 7.3-15.6.3 0-.7 5.6-.6 8 0 2-.2 2.7.2 2.2.9-.5 15.7-12.2 17-15.8 1.4-2 .3-7.2.3-7.4-2.8-7.2-6.7-7.8-8.1-11.4-1.3-4.7-.7-10.1 2-11.7 2.4-2.1 5.2-1.9 7.9.5 3 2.7 5.6 8 6.4 11.9-.5 1.5-4-1-5-.3a16 16 0 013.7 7.8c2 8.2 1.4 11.4-.6 16.7-6.6 13.9-15 18-22.4 23.2-.2 0-.3 3.5 2.4 5.4 1 1 4.9 1.5 9.4 0a54.5 54.5 0 0022.3-23.3 51 51 0 00-2.4-22.2c-2.9-6.7-6.3-16.2-6.3-16.4-.1-4.2.2-5.6 2-7.7zm-95.8-38.6c4.2 2 12.2 1.1 11.8-5.7l-.2-3.1c-.8-2-3.2-1.5-3.7.5-.2.7.3 1.8-.3 2.1-.4.4-1.7.2-1.7-1.7 0-.6-.4-1.2-.7-1.6-.2-.2-.4-.2-.9-.2-.6 0-.6.1-.9.6-.1.5-.3 1-.3 1.6 0 .7-.4.9-.8 1-.6 0-.5 0-1-.2-.2-.3-.5-.4-.5-1l-.3-1.6c-.2-.3-.6-.5-1-.6-2.3 0-2.5 2.7-2.3 3.7-.2.2-.3 4.9 2.8 6.2z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#fff",
        d: "M235.1 187.7c4.2 2 14.3.9 11.8-5.6l-.2-3.2c-.9-2-3.2-1.5-3.7.6-.2.6.3 1.7-.4 2-.3.4-1.7.2-1.6-1.6 0-.6-.4-1.3-.7-1.7-.3-.1-.4-.2-1-.2-.5 0-.5.2-.8.7-.2.5-.3 1-.3 1.6-.1.6-.4.8-.9 1-.5 0-.4 0-.8-.3-.3-.3-.6-.4-.6-.9l-.3-1.6c-.2-.3-.6-.5-1-.6-2.3 0-2.5 2.6-2.4 3.6-.1.2-.2 5 3 6.2zm72-21.6c4.2 2 12.1 1.1 11.8-5.6l-.2-3.2c-.9-2-3.2-1.5-3.7.5-.2.7.3 1.8-.4 2.2-.3.3-1.7.1-1.6-1.8 0-.6-.4-1.2-.7-1.6-.3-.2-.4-.2-1-.2-.5 0-.5.2-.8.7l-.3 1.5c-.1.7-.4 1-.9 1s-.4 0-.8-.2c-.3-.3-.6-.4-.6-.9s-.1-1.3-.3-1.7c-.2-.3-.6-.4-1-.5-2.3 0-2.5 2.6-2.4 3.6-.1.2-.2 4.9 3 6.2zm37.3 54.3c-7.3 8.3-4.1 22-2.4 25 2.4 4.8 4.3 7.9 9 10.3 4.3 3.1 7.7 1.2 9.5-1 4.3-4.5 4.4-16 6.4-18.2 1.4-4.2 5-3.5 6.7-1.6a16.5 16.5 0 006.2 5.3c4 3.5 8.8 4.2 13.6 1 3.2-1.9 5.3-4.2 7.2-8.9 2-5.6 1-31.6.5-47l-4.2-21.5c0-.2-.5-10.2-1-12.5 0-1-.3-1.3.7-1.2 1.1 1 1.2 1 2 1.3 1 .2 2-1.7 1.3-3.3l-10-18.6c-.8-.8-1.9-1.6-3.2.2a7.3 7.3 0 00-2.4 5.5c.3 4.4 1 8.9 1.3 13.3l4 22.6c1.3 16 1.6 29.2 2.9 45.3-.2 6.8-2.3 12.7-4.3 13.6 0 0-3 1.7-5-.2-1.5-.6-7.4-9.9-7.4-9.9-3-2.7-5-2-7.1 0-6 5.8-8.6 16.4-12.7 23.8-1 1.7-4 3-7.2-.1-8.2-11.3-3.4-27.3-4.4-23.2zM309 126.7c3.8 1.5 6.4 9.2 5.6 13-.8 4.5-2.8 9.5-4.2 8.9-1.6-.6 1-4.6-.5-8.8-.8-2.8-6-7.8-5.4-9.2-1-3.1 2.2-4.5 4.5-4z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#fff",
        d: "M356.6 225c.7-9.2-.6-14.8-.8-20.2s-6.1-46.6-7.3-50.6c-1.5-7.8 5.7-1 4.9-5.6-2.5-5.6-8.6-13.9-10.5-18.8-1.2-2-.7-4-3.3-.5a42.3 42.3 0 00-2.3 19.2c6.2 32.3 12.5 59.1 11.5 89.8 3 0 6.3-6.7 7.8-13.3zm64.4-85.3c3.5 1.7 5.5 11.3 5.1 14-.7 5-2.5 10.4-3.8 9.7-1.5-.6.3-7.4-.4-9.5-.8-3-5.5-8.4-5-10-1-3.4 2-4.8 4.1-4.2zm-255.7 67.9c3.3 1.3 5.3 8.3 5 10.3-.8 3.7-2.5 7.7-3.8 7.1-1.3-.4.3-5.4-.3-7-.3-3.7-4.9-5.7-4.8-7.3-.8-3 2-3.5 4-3.1z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#1b9d00",
        d: "M244.9 218.2c4.2.2 6.3 3.6 2.4 5-4 1.3-7.7 2.4-7.8 8 1.5 8-2 5.2-4 4.2-2.4-1.8-9.2-6-10.2-15-.1-2.1 1.6-4 4.3-4 4 1.1 10 1.2 15.3 1.8z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#fff",
        d: "M77.4 124.4c4.8 1.4 5.1 8.6 4.8 10.7-.7 3.8-2.4 7.9-3.6 7.4-1.4-.5 0-5.7-.7-7.3-.7-2.2-4.8-6.4-4.4-7.6-.9-2.5 2-3.7 3.9-3.2zm95.9 33.6c-3.8 2-5.2 8-2.9 11.6 2.2 3 5.6 1.9 6 1.9 3.7.4 5.9-6.9 5.9-6.9s.1-2-4.2 1.9c-1.9.3-2-.4-2.5-1.4a9 9 0 01.5-5.7c.7-1.8-.7-2.6-2.8-1.4zm28-36.4c-2 1.3-5.7 5.2-5.8 9.6-.1 2.5-.6 2.5 1 4 1.3 1.8 2.4 1.7 4.8.4a5.1 5.1 0 002.3-3.4c.6-2.8-3 1.4-3.4-1.8-.8-3 1.5-4.2 3.7-7 0-2 0-3.3-2.7-1.8zm22.4 4a59.5 59.5 0 00-1.6 11.1c-.6 2.8 3 4 4.5.4 2.4-6.5 2.4-9.3 2.6-12-.7-4.3-3.6-4.2-5.5.5zm142 72.3c.4-.5 20-14.4 20-14.4 2-.7 1.5 7.2.6 7.1a77.8 77.8 0 01-20.7 14.3c-1 .7-1.9-5.3 0-7zm17.7-.2c3.5 1.7 4.9 11.8 4.5 14.5 0 5.4-3.3 9.6-4.7 9-1.4-.7.2-6.7-.5-8.8-.8-3-3.7-8.5-3.2-10.1-1-3.4 1.8-5.2 4-4.6zm-116 43.4a26 26 0 015.6-4.9c2-1 3.8.8 3.7.7.3 2-1.2 3.7-.7 6.3.4 1 .7 2.2 2.6 1.8 3.1-2.5 6-2.7 9-2.8 2.5.1 2.6 4.2 1 4.2-5.7 1.2-8.2 2.8-12.3 4.3-2 1.2-3.6-.3-3.6-.4s-1.1-1.1-.4-3.7c.2-2-.6-3.2-2.4-3-1.2.8-2.4 1.2-3-.3-.3-1-.4-1.6.5-2.2zm136.6 5.4c.8 1 1.4 2-.1 3.8l-3.7 3.2c-.6 1-1 2.8 1 3.3 3.6 1 12-4.5 12-4.6 1.4-1 1-3 .8-3-.8-.9-2.6-.3-3.8-.5-.6 0-2.5-.2-1.6-2a11.4 11.4 0 001.6-2.9c.5-1.2 0-2-2-2.7-2.1-.4-3-.2-5.3 0-1.2.2-1.6.8-1.9 2.3.1 2.3 1.5 2.2 3 3z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#259f00",
        d: "M268.1 189.7c-.5 1-2.3 1-4 0s-2.7-2.6-2.1-3.5 2.3-.9 4 0 2.6 2.6 2.1 3.5zm-89-53.6c-1 .3-2.4-.6-3-2s-.3-2.6.7-2.9 2.3.7 3 2 .3 2.7-.8 3z"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#209000",
        d: "M355.2 375c9.4.4 18.2 0 27.5.5 1.7 1.5.5 5-.6 4.8l-7.8-.3c-.1-3-7.7-2.5-7.5.1-4.1.5-7.8-.1-12-.3-1.2-1.5-1-4.2.4-4.8z"
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/icons/CNFlag.tsx


const CNFlag = ({
  width = "640px",
  height = "480px"
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480",
    width: width,
    height: height,
    children: [/*#__PURE__*/jsx_runtime_.jsx("defs", {
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        id: "a",
        fill: "#ffde00",
        d: "M-.6.8L0-1 .6.8-1-.3h2z"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#de2910",
      d: "M0 0h640v480H0z"
    }), /*#__PURE__*/jsx_runtime_.jsx("use", {
      width: "30",
      height: "20",
      transform: "matrix(71.9991 0 0 72 120 120)",
      xlinkHref: "#a"
    }), /*#__PURE__*/jsx_runtime_.jsx("use", {
      width: "30",
      height: "20",
      transform: "matrix(-12.33562 -20.5871 20.58684 -12.33577 240.3 48)",
      xlinkHref: "#a"
    }), /*#__PURE__*/jsx_runtime_.jsx("use", {
      width: "30",
      height: "20",
      transform: "matrix(-3.38573 -23.75998 23.75968 -3.38578 288 95.8)",
      xlinkHref: "#a"
    }), /*#__PURE__*/jsx_runtime_.jsx("use", {
      width: "30",
      height: "20",
      transform: "matrix(6.5991 -23.0749 23.0746 6.59919 288 168)",
      xlinkHref: "#a"
    }), /*#__PURE__*/jsx_runtime_.jsx("use", {
      width: "30",
      height: "20",
      transform: "matrix(14.9991 -18.73557 18.73533 14.99929 240 216)",
      xlinkHref: "#a"
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/icons/USFlag.tsx


const USFlag = ({
  width = "640px",
  height = "480px"
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "flag-icon-css-us",
    viewBox: "0 0 640 480",
    width: width,
    height: height,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      fillRule: "evenodd",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
        strokeWidth: "1pt",
        children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#bd3d44",
          d: "M0 0h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8V197H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8V512H0z",
          transform: "scale(.9375)"
        }), /*#__PURE__*/jsx_runtime_.jsx("path", {
          fill: "#fff",
          d: "M0 39.4h972.8v39.4H0zm0 78.8h972.8v39.3H0zm0 78.7h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.8h972.8v39.4H0zm0 78.7h972.8v39.4H0z",
          transform: "scale(.9375)"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#192f5d",
        d: "M0 0h389.1v275.7H0z",
        transform: "scale(.9375)"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        fill: "#fff",
        d: "M32.4 11.8L36 22.7h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 39.4l3.5 10.9h11.5L70.6 57 74 67.9l-9-6.7-9.3 6.7L59 57l-9-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7L124 57l-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5L330 57l3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 66.9L36 78h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zM64.9 94.5l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 122.1L36 133h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.7-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9H177l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 149.7l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 10.9-9.3-6.8-9.3 6.8 3.6-11-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.8-9.2 6.8 3.5-11-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 10.9-9.2-6.8-9.3 6.8 3.5-11-9.2-6.7h11.4zM32.4 177.2l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7H29zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11H177l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.3-6.7h11.5zm64.9 0l3.5 11H242l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.4zm64.8 0l3.6 11h11.4l-9.2 6.7 3.5 10.8-9.3-6.7-9.2 6.7 3.5-10.9-9.2-6.7h11.4zm64.9 0l3.5 11h11.5l-9.3 6.7 3.6 10.8-9.3-6.7-9.3 6.7 3.6-10.9-9.3-6.7h11.5zM64.9 204.8l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.3 6.7 3.6 11-9.3-6.8-9.3 6.7 3.6-10.9-9.3-6.7h11.5zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7H191zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 11-9.3-6.8-9.2 6.7 3.5-10.9-9.3-6.7H256zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.5 11-9.2-6.8-9.3 6.7 3.5-10.9-9.2-6.7h11.4zM32.4 232.4l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7H29zm64.9 0l3.5 10.9h11.5L103 250l3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9H177l-9 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.3-6.7h11.5zm64.9 0l3.5 10.9H242l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.4zm64.8 0l3.6 10.9h11.4l-9.2 6.7 3.5 10.9-9.3-6.7-9.2 6.7 3.5-11-9.2-6.7h11.4zm64.9 0l3.5 10.9h11.5l-9.3 6.7 3.6 10.9-9.3-6.7-9.3 6.7 3.6-11-9.3-6.7h11.5z",
        transform: "scale(.9375)"
      })]
    })
  });
};
;// CONCATENATED MODULE: ./src/components/icons/DEFlag.tsx


const DEFlag = ({
  width = "640px",
  height = "480px"
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 640 480",
    width: width,
    height: height,
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ffce00",
      d: "M0 320h640v160H0z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M0 0h640v160H0z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#d00",
      d: "M0 160h640v160H0z"
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/icons/ESFlag.tsx


const ESFlag = ({
  width = "640px",
  height = "480px"
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "flag-icon-css-es",
    viewBox: "0 0 640 480",
    width: width,
    height: height,
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#AA151B",
      d: "M0 0h640v480H0z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#F1BF00",
      d: "M0 120h640v240H0z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M127.3 213.3l-.8-.1-1-1-.7-.4-.6-.8s-.7-1.1-.4-2c.3-.9.9-1.2 1.4-1.5a12 12 0 011.5-.5l1-.4 1.3-.3.5-.3c.2 0 .7 0 1-.2l1-.2 1.6.1h4.8c.4 0 1.2.3 1.4.4a35 35 0 002 .7c.5.1 1.6.3 2.2.6.5.3.9.7 1.1 1l.5 1v1.1l-.5.8-.6 1-.8.6s-.5.5-1 .4c-.4 0-4.8-.8-7.6-.8s-7.3.9-7.3.9"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".3",
      d: "M127.3 213.3l-.8-.1-1-1-.7-.4-.6-.8s-.7-1.1-.4-2c.3-.9.9-1.2 1.4-1.5a12 12 0 011.5-.5l1-.4 1.3-.3.5-.3c.2 0 .7 0 1-.2l1-.2 1.6.1h4.8c.4 0 1.2.3 1.4.4a35 35 0 002 .7c.5.1 1.6.3 2.2.6.5.3.9.7 1.1 1l.5 1v1.1l-.5.8-.6 1-.8.6s-.5.5-1 .4c-.4 0-4.8-.8-7.6-.8s-7.3.9-7.3.9z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M133.3 207c0-1.3.6-2.3 1.3-2.3.8 0 1.4 1 1.4 2.4 0 1.3-.6 2.4-1.4 2.4s-1.3-1.1-1.3-2.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M133.3 207c0-1.3.6-2.3 1.3-2.3.8 0 1.4 1 1.4 2.4 0 1.3-.6 2.4-1.4 2.4s-1.3-1.1-1.3-2.5z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M134 207c0-1.2.3-2.1.7-2.1.3 0 .6 1 .6 2.1 0 1.3-.3 2.2-.6 2.2-.4 0-.6-1-.6-2.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M134 207c0-1.2.3-2.1.7-2.1.3 0 .6 1 .6 2.1 0 1.3-.3 2.2-.6 2.2-.4 0-.6-1-.6-2.2z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M133.8 204.5c0-.4.4-.8.8-.8s1 .4 1 .8c0 .5-.5.9-1 .9s-.8-.4-.8-.9"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M135.3 204.2v.6h-1.4v-.6h.5V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M135.3 204.2v.6h-1.4v-.6h.5V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M135.9 204.2v.6h-2.5v-.6h1V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M135.9 204.2v.6h-2.5v-.6h1V203h-.7v-.6h.7v-.5h.5v.5h.6v.6h-.6v1.2h1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M134.9 203.7c.4.1.6.4.6.8 0 .5-.4.9-.8.9s-1-.4-1-.9c0-.4.3-.7.7-.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M134.7 213.2H130v-1.1l-.3-1.2-.2-1.5c-1.3-1.7-2.5-2.8-2.9-2.5.1-.3.2-.6.5-.7 1.1-.7 3.5 1 5.2 3.6l.5.7h3.8l.4-.7c1.8-2.7 4.1-4.3 5.2-3.6.3.1.4.4.5.7-.4-.3-1.6.8-2.9 2.5l-.2 1.5-.2 1.2-.1 1.1h-4.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M134.7 213.2H130v-1.1l-.3-1.2-.2-1.5c-1.3-1.7-2.5-2.8-2.9-2.5.1-.3.2-.6.5-.7 1.1-.7 3.5 1 5.2 3.6l.5.7h3.8l.4-.7c1.8-2.7 4.1-4.3 5.2-3.6.3.1.4.4.5.7-.4-.3-1.6.8-2.9 2.5l-.2 1.5-.2 1.2-.1 1.1h-4.7z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M126.8 206.8c1-.5 3 1.1 4.6 3.6m11-3.6c-.8-.5-2.8 1.1-4.5 3.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M127.8 215.3l-.5-1a27.3 27.3 0 0114.7 0l-.5.8a5.7 5.7 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.5.8l-.3-.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M127.8 215.3l-.5-1a27.3 27.3 0 0114.7 0l-.5.8a5.7 5.7 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.5.8l-.3-.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M134.6 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4-1.4-.5-4-.8-6.5-.8s-5 .3-6.4.8c-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M134.6 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4-1.4-.5-4-.8-6.5-.8s-5 .3-6.4.8c-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M142.1 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.4.6-1.1.7-1.4-.6-1.4-.6-.5.7-1 1c-.5 0-1.2-.4-1.2-.4l-.2.5-.3.1.2.5a27 27 0 017.2-.9c3 0 5.5.4 7.4 1l.2-.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M142.1 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.4.6-1.1.7-1.4-.6-1.4-.6-.5.7-1 1c-.5 0-1.2-.4-1.2-.4l-.2.5-.3.1.2.5a27 27 0 017.2-.9c3 0 5.5.4 7.4 1l.2-.6z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M134.7 210.7h.2a1 1 0 000 .4c0 .6.4 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1v-.1l.4-.4.2.5a.9.9 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4l.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6-.2.2-.4.2-.7.2-.6 0-1.2-.3-1.4-.8-.3.3-.7.5-1.1.5a1.6 1.6 0 01-1.2-.6 1.6 1.6 0 01-1 .4 1.6 1.6 0 01-1.3-.6 1.6 1.6 0 01-2.4.2 1.6 1.6 0 01-1.2.6 1.5 1.5 0 01-1.1-.5c-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2l-1-1 .1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 .9.9 0 000-.4v-.5l.4.4a.7.7 0 000 .1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.7 0 1.1-.4 1.1-1a1 1 0 000-.3h.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M134.7 210.7h.2a1 1 0 000 .4c0 .6.4 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1v-.1l.4-.4.2.5a.9.9 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4l.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6-.2.2-.4.2-.7.2-.6 0-1.2-.3-1.4-.8-.3.3-.7.5-1.1.5a1.6 1.6 0 01-1.2-.6 1.6 1.6 0 01-1 .4 1.6 1.6 0 01-1.3-.6 1.6 1.6 0 01-2.4.2 1.6 1.6 0 01-1.2.6 1.5 1.5 0 01-1.1-.5c-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2l-1-1 .1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 .9.9 0 000-.4v-.5l.4.4a.7.7 0 000 .1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.7 0 1.1-.4 1.1-1a1 1 0 000-.3h.3z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M134.6 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3a27 27 0 017.5-1c3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27.3 27.3 0 00-7.4-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".3",
      d: "M134.6 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3a27 27 0 017.5-1c3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27.3 27.3 0 00-7.4-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M131.8 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.5-.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M131.8 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.5-.4z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M134.7 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M134.7 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#058e6e",
      d: "M130 214.9h-.7c-.1 0-.3 0-.3-.2a.3.3 0 01.2-.3l.7-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M130 214.9h-.7c-.1 0-.3 0-.3-.2a.3.3 0 01.2-.3l.7-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M127.3 215.3l.3-.4h.7l-.4.6-.6-.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M127.3 215.3l.3-.4h.7l-.4.6-.6-.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M136.6 214.4c0-.3.2-.4.4-.4a.4.4 0 01.5.4.4.4 0 01-.5.4.4.4 0 01-.4-.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M136.6 214.4c0-.3.2-.4.4-.4a.4.4 0 01.5.4.4.4 0 01-.5.4.4.4 0 01-.4-.4z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#058e6e",
      d: "M139.3 214.9h.6a.3.3 0 00.4-.2.3.3 0 00-.3-.3l-.6-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M139.3 214.9h.6a.3.3 0 00.4-.2.3.3 0 00-.3-.3l-.6-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M142 215.4l-.3-.5h-.7l.3.6.6-.1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M142 215.4l-.3-.5h-.7l.3.6.6-.1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M134.6 217.1a25 25 0 01-6-.6 25.5 25.5 0 0112.1 0c-1.6.4-3.7.6-6 .6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".3",
      d: "M134.6 217.1a25 25 0 01-6-.6 25.5 25.5 0 0112.1 0c-1.6.4-3.7.6-6 .6z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M142 212l-.1-.3c-.2 0-.3 0-.4.2 0 .2 0 .4.2.4 0 0 .2 0 .3-.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M142 212l-.1-.3c-.2 0-.3 0-.4.2 0 .2 0 .4.2.4 0 0 .2 0 .3-.3z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M137.3 211.2c0-.2 0-.4-.2-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M137.3 211.2c0-.2 0-.4-.2-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M132 211.2l.1-.4c.2 0 .3.1.3.3 0 .2 0 .4-.2.4l-.2-.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M132 211.2l.1-.4c.2 0 .3.1.3.3 0 .2 0 .4-.2.4l-.2-.3z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M127.3 212l.1-.3c.2 0 .3 0 .4.2 0 .2 0 .4-.2.4 0 0-.2 0-.3-.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M127.3 212l.1-.3c.2 0 .3 0 .4.2 0 .2 0 .4-.2.4 0 0-.2 0-.3-.3z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M134.6 208.5l-.8.5.6 1.3.2.1.2-.1.7-1.3-.9-.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M134.6 208.5l-.8.5.6 1.3.2.1.2-.1.7-1.3-.9-.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M132.8 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M132.8 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M136.4 210.5l-.3.5-1.3-.4-.2-.2.2-.2 1.3-.3.3.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M136.4 210.5l-.3.5-1.3-.4-.2-.2.2-.2 1.3-.3.3.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M129.3 209l-.7.7.9 1 .2.1.1-.1.3-1.3-.8-.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M129.3 209l-.7.7.9 1 .2.1.1-.1.3-1.3-.8-.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M128 211.2l.4.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M128 211.2l.4.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M131.5 210.5l-.3.6H130l-.2-.2.1-.3 1.2-.6.5.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M131.5 210.5l-.3.6H130l-.2-.2.1-.3 1.2-.6.5.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M126.6 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M126.6 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M129.2 210.9c0-.3.2-.5.5-.5s.5.2.5.5a.5.5 0 01-.5.4.5.5 0 01-.5-.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M129.2 210.9c0-.3.2-.5.5-.5s.5.2.5.5a.5.5 0 01-.5.4.5.5 0 01-.5-.4z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M140 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M140 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M141.4 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M141.4 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M137.8 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M137.8 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M142.5 211.4l.1.6 1.3.2.2-.1v-.2l-1-.9-.6.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M142.5 211.4l.1.6 1.3.2.2-.1v-.2l-1-.9-.6.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M134.2 210.4a.5.5 0 01.4-.4c.3 0 .5.2.5.4a.5.5 0 01-.5.5.5.5 0 01-.4-.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M134.2 210.4a.5.5 0 01.4-.4c.3 0 .5.2.5.4a.5.5 0 01-.5.5.5.5 0 01-.4-.5z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M139.1 210.9c0-.3.3-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M139.1 210.9c0-.3.3-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M124.8 212.2l-.6-.7c-.2-.2-.7-.3-.7-.3 0-.1.3-.3.6-.3a.5.5 0 01.4.2v-.2s.3 0 .4.3v1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M124.8 212.2l-.6-.7c-.2-.2-.7-.3-.7-.3 0-.1.3-.3.6-.3a.5.5 0 01.4.2v-.2s.3 0 .4.3v1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M124.8 212c.1-.2.4-.2.5 0 .2.1.3.3.2.5l-.5-.1c-.2-.1-.3-.4-.2-.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M124.8 212c.1-.2.4-.2.5 0 .2.1.3.3.2.5l-.5-.1c-.2-.1-.3-.4-.2-.5z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M144.3 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M144.3 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M144.3 212c0-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M144.3 212c0-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M124 223h21.4v-5.5H124v5.6z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M124 223h21.4v-5.5H124v5.6z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M126.2 226.8a1 1 0 01.4 0h16.5a1.4 1.4 0 01-1-1.2c0-.6.5-1.1 1-1.3a1.7 1.7 0 01-.4 0h-16a1.4 1.4 0 01-.5 0c.6.2 1 .7 1 1.3a1.3 1.3 0 01-1 1.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".4",
      d: "M126.2 226.8a1 1 0 01.4 0h16.5a1.4 1.4 0 01-1-1.2c0-.6.5-1.1 1-1.3a1.7 1.7 0 01-.4 0h-16a1.4 1.4 0 01-.5 0c.6.2 1 .7 1 1.3a1.3 1.3 0 01-1 1.2z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M126.6 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.5 0-1-.4-1-.8s.5-.8 1-.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M126.6 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.5 0-1-.4-1-.8s.5-.8 1-.8z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M126.6 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.5 0-1-.2-1-.6 0-.3.5-.6 1-.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M126.6 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.5 0-1-.2-1-.6 0-.3.5-.6 1-.6z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#005bbf",
      d: "M149.6 317.4c-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8a8.3 8.3 0 01-3.8.8c-1.5 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8 8.3 8.3 0 01-3.8.8v2.4c1.5 0 2.8-.4 3.8-.9a8.2 8.2 0 013.7-.8c1.4 0 2.7.3 3.7.8s2.2.9 3.7.9a8.4 8.4 0 003.8-.9c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.9 3.7.9v-2.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M149.6 317.4c-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8a8.3 8.3 0 01-3.8.8c-1.5 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8 8.3 8.3 0 01-3.8.8v2.4c1.5 0 2.8-.4 3.8-.9a8.2 8.2 0 013.7-.8c1.4 0 2.7.3 3.7.8s2.2.9 3.7.9a8.4 8.4 0 003.8-.9c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.9 3.7.9v-2.4z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ccc",
      d: "M149.6 319.8a8 8 0 01-3.7-.9 8.3 8.3 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8s-2.3.9-3.8.9-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8.2 8.2 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.4 3.8-.9a8.1 8.1 0 013.7-.7c1.4 0 2.7.2 3.7.7a8.3 8.3 0 007.5 0 8.5 8.5 0 017.5.1 8.1 8.1 0 003.7.8v-2.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M149.6 319.8a8 8 0 01-3.7-.9 8.3 8.3 0 00-3.8-.8c-1.4 0-2.7.3-3.7.8s-2.3.9-3.8.9-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8.2 8.2 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.4 3.8-.9a8.1 8.1 0 013.7-.7c1.4 0 2.7.2 3.7.7a8.3 8.3 0 007.5 0 8.5 8.5 0 017.5.1 8.1 8.1 0 003.7.8v-2.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#005bbf",
      d: "M149.6 322a7 7 0 01-3.7-.8 8.3 8.3 0 00-3.8-.7c-1.4 0-2.7.2-3.7.7-1 .6-2.3.9-3.8.9s-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.3 3.8-.9a10.2 10.2 0 017.4 0 7 7 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.8 3.7.8V322"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M149.6 322a7 7 0 01-3.7-.8 8.3 8.3 0 00-3.8-.7c-1.4 0-2.7.2-3.7.7-1 .6-2.3.9-3.8.9s-2.8-.4-3.7-.9a8.4 8.4 0 00-3.7-.8 8 8 0 00-3.7.8c-1 .5-2.3.9-3.8.9v2.3c1.5 0 2.8-.3 3.8-.9a10.2 10.2 0 017.4 0 7 7 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.5 0 2.8.3 3.8.8s2.2.8 3.7.8V322"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ccc",
      d: "M149.6 326.7a8 8 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.9 10.2 10.2 0 017.4 0 8 8 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.8-.8 1.4 0 2.7.3 3.7.8s2.3.8 3.7.8v2.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M149.6 326.7a8 8 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.9 10.2 10.2 0 017.4 0 8 8 0 003.7.9 8.4 8.4 0 003.8-.8c1-.5 2.3-.8 3.8-.8 1.4 0 2.7.3 3.7.8s2.3.8 3.7.8v2.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#005bbf",
      d: "M149.6 329a8.1 8.1 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.7.3 3.7.7a8.4 8.4 0 007.5 0c1-.4 2.3-.7 3.8-.7 1.4 0 2.7.3 3.7.8s2.2.8 3.7.8v2.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M149.6 329a8.1 8.1 0 01-3.7-.8c-1-.5-2.3-.8-3.7-.8a8.4 8.4 0 00-3.8.8c-1 .5-2.3.8-3.8.8a7 7 0 01-3.7-.9 8.4 8.4 0 00-3.7-.7c-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v-2.3a8.3 8.3 0 003.8-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.7.3 3.7.7a8.4 8.4 0 007.5 0c1-.4 2.3-.7 3.8-.7 1.4 0 2.7.3 3.7.8s2.2.8 3.7.8v2.3z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M126.2 308l.2.5c0 1.5-1.3 2.6-2.7 2.6h22a2.7 2.7 0 01-2.7-2.6v-.5a1.3 1.3 0 01-.3 0h-16a1.4 1.4 0 01-.5 0"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".4",
      d: "M126.2 308l.2.5c0 1.5-1.3 2.6-2.7 2.6h22a2.7 2.7 0 01-2.7-2.6v-.5a1.3 1.3 0 01-.3 0h-16a1.4 1.4 0 01-.5 0z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M126.6 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.5 0-1-.3-1-.8 0-.4.5-.7 1-.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M126.6 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.5 0-1-.3-1-.8 0-.4.5-.7 1-.7z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M123.7 316.7h22V311h-22v5.6z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M123.7 316.7h22V311h-22v5.6z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M122 286.7c-2.2 1.2-3.7 2.5-3.4 3.2 0 .6.8 1 1.8 1.6 1.5 1.1 2.5 3 1.7 4a5.5 5.5 0 00-.1-8.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M122 286.7c-2.2 1.2-3.7 2.5-3.4 3.2 0 .6.8 1 1.8 1.6 1.5 1.1 2.5 3 1.7 4a5.5 5.5 0 00-.1-8.8z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ccc",
      d: "M126.8 305.6h15.6V229h-15.6v76.5z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M138 229.2v76.3m1.7-76.3v76.3m-12.9 0h15.6v-76.4h-15.6v76.5z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M158.4 257.7a49.6 49.6 0 00-23.3-2c-9.4 1.6-16.5 5.3-15.9 8.4v.2l-3.5-8.2c-.6-3.3 7.2-7.5 17.6-9.2a43 43 0 019.2-.7c6.6 0 12.4.8 15.8 2.1v9.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".4",
      d: "M158.4 257.7a49.6 49.6 0 00-23.3-2c-9.4 1.6-16.5 5.3-15.9 8.4v.2l-3.5-8.2c-.6-3.3 7.2-7.5 17.6-9.2a43 43 0 019.2-.7c6.6 0 12.4.8 15.8 2.1v9.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M126.8 267.3c-4.3-.3-7.3-1.4-7.6-3.2-.3-1.5 1.2-3 3.8-4.5 1.2.1 2.5.3 3.8.3v7.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M126.8 267.3c-4.3-.3-7.3-1.4-7.6-3.2-.3-1.5 1.2-3 3.8-4.5 1.2.1 2.5.3 3.8.3v7.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M142.5 261.5c2.7.4 4.7 1 5.7 1.9l.1.2c.5 1-1.9 3-5.9 5.4v-7.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M142.5 261.5c2.7.4 4.7 1 5.7 1.9l.1.2c.5 1-1.9 3-5.9 5.4v-7.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M117.1 282c-.4-1.2 3.8-3.6 9.8-5.8l7.8-3.2c8.3-3.7 14.4-7.9 13.6-9.4v-.2c.4.4 1 8 1 8 .8 1.3-4.8 5.5-12.4 9.1-2.5 1.2-7.6 3-10 4-4.4 1.4-8.7 4.3-8.3 5.3l-1.5-7.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".4",
      d: "M117.1 282c-.4-1.2 3.8-3.6 9.8-5.8l7.8-3.2c8.3-3.7 14.4-7.9 13.6-9.4v-.2c.4.4 1 8 1 8 .8 1.3-4.8 5.5-12.4 9.1-2.5 1.2-7.6 3-10 4-4.4 1.4-8.7 4.3-8.3 5.3l-1.5-7.7z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M125.8 254c1.9-.6 3.1-1.5 2.5-3-.4-1-1.4-1-2.8-.6l-2.6 1 2.3 5.8.8-.3.8-.3-1-2.5zm-1.2-2.7l.7-.3c.5-.2 1.2.1 1.4.8.2.5.2 1-.5 1.5a4.4 4.4 0 01-.6.3l-1-2.3m7.3-2.5l-.9.3h-.8l1.3 6.1 4.3-.8-.2-.4v-.4l-2.5.6-1.2-5.3m8.4 5.2c.8-2.2 1.7-4.3 2.7-6.4a5.3 5.3 0 01-1 0 54.8 54.8 0 01-1.8 4.6l-2.4-4.3-1 .1h-1a131.4 131.4 0 013.5 6h1m8.8-4.7l.4-.9a3.4 3.4 0 00-1.7-.6c-1.7-.1-2.7.6-2.8 1.7-.2 2.1 3.2 2 3 3.4 0 .6-.7.9-1.4.8-.8 0-1.4-.5-1.4-1.2h-.3a7.3 7.3 0 01-.4 1.1 4 4 0 001.8.6c1.7.2 3-.5 3.2-1.7.2-2-3.3-2.1-3.1-3.4 0-.5.4-.8 1.3-.7.7 0 1 .4 1.2.9h.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M277.9 211.6s-.7.8-1.3.9c-.5 0-1.1-.5-1.1-.5s-.5.5-1 .6c-.6.1-1.4-.6-1.4-.6l-1 1c-.6 0-1.1-.3-1.1-.3s-.3.4-.7.6h-.4l-.6-.4-.7-.7-.5-.3-.4-1v-.5c-.1-.6.8-1.4 2.2-1.7a3.9 3.9 0 012 0c.5-.5 1.7-.8 3-.8s2.4.3 3 .7a5.5 5.5 0 012.9-.7c1.3 0 2.5.3 3 .8.5-.2 1.2-.2 2 0 1.4.3 2.3 1 2.2 1.7v.5l-.4 1-.6.3-.6.7-.6.3s-.3.2-.4 0c-.4-.1-.7-.5-.7-.5s-.6.4-1 .2c-.5-.2-1-1-1-1s-.9.8-1.4.7c-.6-.1-1-.6-1-.6s-.7.6-1.2.5c-.5-.1-1.2-.9-1.2-.9"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M277.9 211.6s-.7.8-1.3.9c-.5 0-1.1-.5-1.1-.5s-.5.5-1 .6c-.6.1-1.4-.6-1.4-.6l-1 1c-.6 0-1.1-.3-1.1-.3s-.3.4-.7.6h-.4l-.6-.4-.7-.7-.5-.3-.4-1v-.5c-.1-.6.8-1.4 2.2-1.7a3.9 3.9 0 012 0c.5-.5 1.7-.8 3-.8s2.4.3 3 .7a5.5 5.5 0 012.9-.7c1.3 0 2.5.3 3 .8.5-.2 1.2-.2 2 0 1.4.3 2.3 1 2.2 1.7v.5l-.4 1-.6.3-.6.7-.6.3s-.3.2-.4 0c-.4-.1-.7-.5-.7-.5s-.6.4-1 .2c-.5-.2-1-1-1-1s-.9.8-1.4.7c-.6-.1-1-.6-1-.6s-.7.6-1.2.5c-.5-.1-1.2-.9-1.2-.9z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M276.5 207.6c0-1 .6-2 1.3-2 .8 0 1.3 1 1.3 2s-.5 1.8-1.3 1.8c-.7 0-1.3-.8-1.3-1.9"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M276.5 207.6c0-1 .6-2 1.3-2 .8 0 1.3 1 1.3 2s-.5 1.8-1.3 1.8c-.7 0-1.3-.8-1.3-1.9z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M277.3 207.6c0-1 .2-1.8.5-1.8.4 0 .7.8.7 1.8s-.3 1.7-.6 1.7c-.4 0-.6-.8-.6-1.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M277.3 207.6c0-1 .2-1.8.5-1.8.4 0 .7.8.7 1.8s-.3 1.7-.6 1.7c-.4 0-.6-.8-.6-1.8z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M271 215.3a4.5 4.5 0 00-.5-1 27.4 27.4 0 0114.8 0l-.6.8a5.2 5.2 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.6.8l-.2-.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M271 215.3a4.5 4.5 0 00-.5-1 27.4 27.4 0 0114.8 0l-.6.8a5.2 5.2 0 00-.3.8 22.9 22.9 0 00-6.6-.8c-2.6 0-5.2.3-6.6.8l-.2-.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M277.8 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4a24.1 24.1 0 00-6.5-.8c-2.5 0-5 .3-6.4.8-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M277.8 217.7c2.4 0 5-.4 5.9-.6.6-.2 1-.5 1-.8 0-.2-.2-.3-.4-.4a24.1 24.1 0 00-6.5-.8c-2.5 0-5 .3-6.4.8-.2 0-.3.2-.4.3 0 .4.3.7 1 .9 1 .2 3.5.6 5.8.6z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M283.5 208.4c0-.2.2-.4.4-.4s.5.2.5.4-.2.4-.5.4a.4.4 0 01-.4-.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".2",
      d: "M283.5 208.4c0-.2.2-.4.4-.4s.5.2.5.4-.2.4-.5.4a.4.4 0 01-.4-.4zm-.2-1.4a.4.4 0 01.4-.4c.2 0 .4.1.4.4s-.2.4-.4.4a.4.4 0 01-.4-.4zm-1.1-1c0-.2.2-.3.4-.3s.4.1.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.4-.5zm-1.4-.4c0-.2.2-.4.4-.4.3 0 .5.2.5.4s-.2.4-.4.4-.5-.2-.5-.4zm-1.4 0c0-.2.2-.3.5-.3s.4.1.4.4c0 .2-.2.4-.4.4a.4.4 0 01-.5-.4z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: ".3",
      d: "M287.8 211.2l.2-1a2.7 2.7 0 00-2.7-2.8c-.5 0-1 .1-1.3.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M283 209.2l.2-.8c0-1.1-1.1-2-2.5-2-.6 0-1.2.2-1.6.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".2",
      d: "M288.2 210c0-.3.2-.5.4-.5s.4.2.4.4c0 .3-.2.4-.4.4s-.4-.1-.4-.4zm-.2-1.6c0-.2.2-.4.4-.4a.4.4 0 01.5.4c0 .2-.2.4-.4.4-.3 0-.5-.2-.5-.4zm-1-1.1a.4.4 0 01.5-.4c.2 0 .4.1.4.4a.4.4 0 01-.4.4.4.4 0 01-.5-.4zm-1.3-.7c0-.2.2-.4.5-.4s.4.2.4.4c0 .3-.2.5-.4.5a.4.4 0 01-.5-.5zm-1.4.1c0-.2.2-.4.5-.4s.4.2.4.4-.2.4-.4.4-.5-.2-.5-.4z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M285.3 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.3.6-1.1.7-1.4-.6-1.4-.6-.4.7-1 1c-.5 0-1.2-.4-1.2-.4l-.1.5-.3.1.1.5a27 27 0 017.3-.9c2.8 0 5.4.4 7.3 1l.2-.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M285.3 213.2l-.5-.5s-.6.3-1.3.2c-.6 0-.9-1-.9-1s-.7.7-1.3.7c-.7 0-1-.6-1-.6s-.7.5-1.3.4c-.6 0-1.2-.8-1.2-.8s-.6.8-1.2.8c-.6.1-1-.5-1-.5s-.3.6-1.1.7-1.4-.6-1.4-.6-.4.7-1 1c-.5 0-1.2-.4-1.2-.4l-.1.5-.3.1.1.5a27 27 0 017.3-.9c2.8 0 5.4.4 7.3 1l.2-.6z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M271.3 208.4c0-.2.2-.4.4-.4s.4.2.4.4a.4.4 0 01-.4.4.4.4 0 01-.4-.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".2",
      d: "M271.3 208.4c0-.2.2-.4.4-.4s.4.2.4.4a.4.4 0 01-.4.4.4.4 0 01-.4-.4zm.2-1.4c0-.3.2-.4.4-.4s.5.1.5.4-.2.4-.5.4a.4.4 0 01-.4-.4zm1-1c0-.2.3-.3.5-.3s.5.1.5.4c0 .2-.2.4-.5.4a.4.4 0 01-.4-.5zm1.4-.4c0-.2.2-.4.5-.4s.4.2.4.4-.2.4-.4.4-.5-.2-.5-.4zm1.4 0c0-.2.2-.3.5-.3.2 0 .4.1.4.4 0 .2-.2.4-.4.4a.4.4 0 01-.5-.4z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeWidth: ".3",
      d: "M267.8 211.2a2.8 2.8 0 01-.2-1 2.7 2.7 0 012.7-2.8c.5 0 1 .1 1.4.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M272.7 209.2a1.7 1.7 0 01-.3-.8c0-1 1.2-2 2.6-2a3 3 0 011.5.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".2",
      d: "M266.6 210c0-.3.2-.5.4-.5.3 0 .4.2.4.4a.4.4 0 01-.4.4c-.2 0-.4-.1-.4-.4zm.1-1.6c0-.2.3-.4.5-.4s.4.2.4.4-.2.4-.4.4-.4-.2-.4-.4zm1-1.1c0-.3.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4.4.4 0 01-.5-.4zm1.3-.7c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.4.4 0 01-.5-.5zm1.4.1c0-.2.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4c-.3 0-.5-.2-.5-.4z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M277.9 210.7h.2a1 1 0 000 .4c0 .6.5 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1a.7.7 0 000-.1l.4-.4.2.5a1 1 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4s.7-.7.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6a1.5 1.5 0 01-.7.2c-.6 0-1.2-.3-1.4-.8a1.5 1.5 0 01-1.1.5c-.5 0-1-.2-1.2-.6a1.5 1.5 0 01-1 .4c-.6 0-1-.2-1.4-.6-.2.4-.7.6-1.2.6-.4 0-.8-.1-1-.4a1.6 1.6 0 01-1.3.6c-.4 0-.8-.2-1.1-.5-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2a4.2 4.2 0 01-1-1l.1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 1 1 0 000-.4v-.5l.4.4v.1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.6 0 1.1-.4 1.1-1a1 1 0 000-.3h.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M277.9 210.7h.2a1 1 0 000 .4c0 .6.5 1 1 1a1 1 0 001-.7l.2-.3v.4c.1.5.6.8 1.1.8.6 0 1-.4 1-1a.7.7 0 000-.1l.4-.4.2.5a1 1 0 00-.1.4 1 1 0 001 1c.4 0 .7-.2.9-.5l.2-.2v.3c0 .3.1.6.4.7 0 0 .4 0 1-.4s.7-.7.7-.7v.4s-.5.8-1 1c-.2.2-.5.4-.8.3-.3 0-.6-.3-.7-.6a1.5 1.5 0 01-.7.2c-.6 0-1.2-.3-1.4-.8a1.5 1.5 0 01-1.1.5c-.5 0-1-.2-1.2-.6a1.5 1.5 0 01-1 .4c-.6 0-1-.2-1.4-.6-.2.4-.7.6-1.2.6-.4 0-.8-.1-1-.4a1.6 1.6 0 01-1.3.6c-.4 0-.8-.2-1.1-.5-.2.5-.8.8-1.4.8-.2 0-.5 0-.7-.2-.1.3-.4.6-.7.6-.3 0-.6 0-.9-.2a4.2 4.2 0 01-1-1l.1-.5.8.7c.5.4.9.4.9.4.3 0 .4-.4.4-.7v-.3l.2.2c.2.3.5.5.9.5a1 1 0 001-1 1 1 0 000-.4v-.5l.4.4v.1c0 .6.5 1 1 1 .6 0 1-.3 1.1-.9v-.3l.2.3c.2.4.6.7 1 .7.6 0 1.1-.4 1.1-1a1 1 0 000-.3h.2z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M277.8 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3c2-.6 4.6-1 7.5-1 3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27 27 0 00-7.4-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M277.8 213.3c-2.9 0-5.5.4-7.3 1l-.3-.2.1-.3c2-.6 4.6-1 7.5-1 3 0 5.7.4 7.6 1 0 0 .2.2.1.3l-.3.2a27 27 0 00-7.4-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M275 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4c-.3 0-.5-.2-.5-.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M275 214.4c0-.3.2-.4.5-.4a.4.4 0 01.4.4.4.4 0 01-.4.4c-.3 0-.5-.2-.5-.4z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M277.9 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M277.9 214.5h-1c-.1 0-.3 0-.3-.3l.3-.3h2a.3.3 0 01.2.3.3.3 0 01-.3.3h-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#058e6e",
      d: "M273.2 214.9h-.6a.3.3 0 01-.4-.2.3.3 0 01.3-.3l.6-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M273.2 214.9h-.6a.3.3 0 01-.4-.2.3.3 0 01.3-.3l.6-.1.7-.1c.2 0 .3 0 .4.2a.3.3 0 01-.3.4h-.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M270.5 215.3l.3-.4h.7l-.4.6-.6-.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M270.5 215.3l.3-.4h.7l-.4.6-.6-.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M279.8 214.4c0-.3.2-.4.4-.4.3 0 .5.1.5.4 0 .2-.2.4-.5.4a.4.4 0 01-.4-.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M279.8 214.4c0-.3.2-.4.4-.4.3 0 .5.1.5.4 0 .2-.2.4-.5.4a.4.4 0 01-.4-.4z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#058e6e",
      d: "M282.5 214.9h.7a.3.3 0 00.3-.2.3.3 0 00-.2-.3l-.7-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M282.5 214.9h.7a.3.3 0 00.3-.2.3.3 0 00-.2-.3l-.7-.1-.7-.1c-.2 0-.3 0-.4.2 0 .2.1.3.3.4h.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M285.1 215.4l-.2-.5h-.7l.3.6.6-.1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M285.1 215.4l-.2-.5h-.7l.3.6.6-.1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M277.8 217.1a25 25 0 01-6-.6 25.4 25.4 0 016-.7c2.4 0 4.5.3 6.1.7-1.6.4-3.7.6-6 .6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".3",
      d: "M277.8 217.1a25 25 0 01-6-.6 25.4 25.4 0 016-.7c2.4 0 4.5.3 6.1.7-1.6.4-3.7.6-6 .6z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M285.2 212l-.1-.3c-.2 0-.3 0-.4.2l.1.4c.2 0 .3 0 .4-.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M285.2 212l-.1-.3c-.2 0-.3 0-.4.2l.1.4c.2 0 .3 0 .4-.3z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M280.6 211.2c0-.2-.1-.4-.3-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M280.6 211.2c0-.2-.1-.4-.3-.4 0 0-.2.1-.2.3 0 .2 0 .4.2.4l.3-.3z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M275.2 211.2c0-.2 0-.4.2-.4l.3.3-.2.4c-.2 0-.3-.2-.3-.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M275.2 211.2c0-.2 0-.4.2-.4l.3.3-.2.4c-.2 0-.3-.2-.3-.3z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M270.5 212l.1-.3c.2 0 .3 0 .4.2l-.1.4c-.2 0-.3 0-.4-.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M270.5 212l.1-.3c.2 0 .3 0 .4.2l-.1.4c-.2 0-.3 0-.4-.3z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M277.8 208.5l-.8.5.6 1.3.2.1.3-.1.6-1.3-.9-.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M277.8 208.5l-.8.5.6 1.3.2.1.3-.1.6-1.3-.9-.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M276 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M276 210.5l.4.5 1.3-.4.1-.2-.1-.2-1.3-.3-.4.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M279.6 210.5l-.3.5-1.3-.4-.1-.2v-.2l1.4-.3.4.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M279.6 210.5l-.3.5-1.3-.4-.1-.2v-.2l1.4-.3.4.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M272.5 209l-.7.7.9 1 .2.1.2-.1.2-1.3-.8-.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M272.5 209l-.7.7.9 1 .2.1.2-.1.2-1.3-.8-.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M271.1 211.2l.5.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M271.1 211.2l.5.5 1.2-.6v-.2l-.1-.2-1.3-.1-.3.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M274.7 210.5l-.3.6h-1.3l-.2-.2.1-.3 1.2-.6.5.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M274.7 210.5l-.3.6h-1.3l-.2-.2.1-.3 1.2-.6.5.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M269.8 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M269.8 211.4v.6l-1.4.2-.2-.1v-.2l1-.9.6.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M272.4 210.9c0-.3.2-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M272.4 210.9c0-.3.2-.5.5-.5a.5.5 0 01.5.5.5.5 0 01-.5.4.5.5 0 01-.5-.4z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M283.2 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M283.2 209l.7.7-.9 1-.2.1-.1-.1-.3-1.3.8-.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M284.6 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M284.6 211.2l-.5.5-1.2-.6v-.2l.1-.2 1.3-.1.3.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M281 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M281 210.5l.3.6h1.3l.2-.2-.1-.3-1.2-.6-.5.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M285.7 211.4v.6l1.4.2.2-.1v-.2l-1-.9-.6.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M285.7 211.4v.6l1.4.2.2-.1v-.2l-1-.9-.6.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M277.4 210.4c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.5.5 0 01-.5-.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M277.4 210.4c0-.2.2-.4.5-.4.2 0 .4.2.4.4 0 .3-.2.5-.4.5a.5.5 0 01-.5-.5z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M282.3 210.9c0-.3.3-.5.5-.5.3 0 .5.2.5.5s-.2.4-.5.4a.5.5 0 01-.5-.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M282.3 210.9c0-.3.3-.5.5-.5.3 0 .5.2.5.5s-.2.4-.5.4a.5.5 0 01-.5-.4z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M277 205.4c0-.5.4-.8.8-.8s1 .3 1 .8-.5.8-1 .8a.9.9 0 01-.8-.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M278.5 205.1v.6H277v-.6h.4v-1.3h-.5v-.5h.5v-.6h.6v.6h.6v.6h-.6v1.2h.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M278.5 205.1v.6H277v-.6h.4v-1.3h-.5v-.5h.5v-.6h.6v.6h.6v.6h-.6v1.2h.4z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M279 205.1v.6h-2.4v-.6h1v-1.3h-.7v-.5h.6v-.6h.6v.6h.6v.6h-.6v1.2h1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M278.1 204.6c.4 0 .6.4.6.8 0 .5-.4.8-.9.8a.9.9 0 01-.8-.8c0-.4.2-.7.6-.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M268 212.2l-.6-.7a2.3 2.3 0 00-.7-.3c0-.1.3-.3.6-.3.2 0 .3 0 .4.2v-.2s.3 0 .4.3v1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M268 212.2l-.6-.7a2.3 2.3 0 00-.7-.3c0-.1.3-.3.6-.3.2 0 .3 0 .4.2v-.2s.3 0 .4.3v1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M268 212c.1-.2.4-.2.5 0 .2.1.3.3.1.5l-.5-.1c-.1-.1-.2-.4 0-.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M268 212c.1-.2.4-.2.5 0 .2.1.3.3.1.5l-.5-.1c-.1-.1-.2-.4 0-.5z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M287.5 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M287.5 212.2l.6-.7c.2-.2.7-.3.7-.3 0-.1-.3-.3-.6-.3a.6.6 0 00-.4.2v-.2s-.3 0-.4.3v.7l.1.3z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M287.5 212c-.1-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M287.5 212c-.1-.2-.3-.2-.5 0-.2.1-.2.3-.1.5l.5-.1c.2-.1.2-.4.1-.5z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M267.2 223h21.4v-5.5h-21.4v5.6z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M267.2 223h21.4v-5.5h-21.4v5.6z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M286.3 226.8a1 1 0 00-.4 0h-16.5c.6-.2 1-.7 1-1.2 0-.6-.4-1.1-1-1.3h17-.1c-.6.2-1 .7-1 1.3 0 .5.4 1 1 1.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".4",
      d: "M286.3 226.8a1 1 0 00-.4 0h-16.5c.6-.2 1-.7 1-1.2 0-.6-.4-1.1-1-1.3h17-.1c-.6.2-1 .7-1 1.3 0 .5.4 1 1 1.2z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M269.9 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.6 0-1-.4-1-.8s.5-.8 1-.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M269.9 226.8h16c.6 0 1 .3 1 .7 0 .4-.4.8-1 .8h-16c-.6 0-1-.4-1-.8s.5-.8 1-.8z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M269.9 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.6 0-1-.2-1-.6 0-.3.4-.6 1-.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M269.9 223h16c.6 0 1 .4 1 .7 0 .4-.4.6-1 .6h-16c-.6 0-1-.2-1-.6 0-.3.4-.6 1-.6z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#005bbf",
      d: "M263 317.4c1.4 0 2.7-.3 3.7-.8a8.4 8.4 0 013.7-.8c1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.8a8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.8 3.8.8v2.4a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.8c-1.4 0-2.7.3-3.6.8-1 .5-2.3.9-3.8.9a8 8 0 01-3.7-.9 8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.9-3.8.9v-2.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M263 317.4c1.4 0 2.7-.3 3.7-.8a8.4 8.4 0 013.7-.8c1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.8a8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.8 3.8.8v2.4a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.8c-1.4 0-2.7.3-3.6.8-1 .5-2.3.9-3.8.9a8 8 0 01-3.7-.9 8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.9-3.8.9v-2.4z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ccc",
      d: "M263 319.8c1.4 0 2.7-.4 3.7-.9s2.3-.8 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8c1.5 0 2.8.3 3.7.8 1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.1 8.1 0 00-3.7-.7c-1.4 0-2.7.2-3.6.7-1 .5-2.3.9-3.8.9a7 7 0 01-3.7-.9c-1-.4-2.3-.7-3.8-.7a8.3 8.3 0 00-3.7.7 8.1 8.1 0 01-3.8.9v-2.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M263 319.8c1.4 0 2.7-.4 3.7-.9s2.3-.8 3.7-.8c1.4 0 2.8.3 3.8.8s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8c1.5 0 2.8.3 3.7.8 1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.1 8.1 0 00-3.7-.7c-1.4 0-2.7.2-3.6.7-1 .5-2.3.9-3.8.9a7 7 0 01-3.7-.9c-1-.4-2.3-.7-3.8-.7a8.3 8.3 0 00-3.7.7 8.1 8.1 0 01-3.8.9v-2.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#005bbf",
      d: "M263 322c1.4 0 2.7-.2 3.7-.8 1-.4 2.3-.7 3.7-.7 1.4 0 2.8.2 3.8.7s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .6-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8V322"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M263 322c1.4 0 2.7-.2 3.7-.8 1-.4 2.3-.7 3.7-.7 1.4 0 2.8.2 3.8.7s2.3.9 3.7.9a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.8 8 8 0 013.7.8c1 .5 2.4.9 3.8.9v2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .6-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8V322"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ccc",
      d: "M263 326.7a8 8 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.9a8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8a8.3 8.3 0 003.8.8v-2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .5-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8v2.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M263 326.7a8 8 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8c1.5 0 2.8-.3 3.8-.9a8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8a8.3 8.3 0 003.8.8v-2.3a8.3 8.3 0 01-3.8-.9 8.2 8.2 0 00-3.7-.7c-1.4 0-2.7.3-3.6.7-1 .5-2.3.9-3.8.9-1.4 0-2.8-.3-3.7-.8a8.4 8.4 0 00-3.8-.8 8.3 8.3 0 00-3.7.8c-1 .5-2.3.8-3.8.8v2.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#005bbf",
      d: "M263 329a8.1 8.1 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8 1 .5 2.4.8 3.8.8v-2.3a8.3 8.3 0 01-3.8-.8 8.2 8.2 0 00-3.7-.8 8.4 8.4 0 00-3.6.7 8.2 8.2 0 01-3.8.9c-1.4 0-2.8-.3-3.7-.8-1-.5-2.3-.8-3.8-.8-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v2.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M263 329a8.1 8.1 0 003.7-.8c1-.5 2.3-.8 3.7-.8 1.4 0 2.8.3 3.8.8s2.3.8 3.7.8a8.2 8.2 0 003.8-.9 8.4 8.4 0 013.6-.7c1.5 0 2.8.3 3.7.8 1 .5 2.4.8 3.8.8v-2.3a8.3 8.3 0 01-3.8-.8 8.2 8.2 0 00-3.7-.8 8.4 8.4 0 00-3.6.7 8.2 8.2 0 01-3.8.9c-1.4 0-2.8-.3-3.7-.8-1-.5-2.3-.8-3.8-.8-1.4 0-2.7.3-3.7.8s-2.3.8-3.8.8v2.3z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M286.3 308l-.1.5c0 1.5 1.2 2.6 2.7 2.6h-22c1.5 0 2.7-1.2 2.7-2.6l-.1-.5h16.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".4",
      d: "M286.3 308l-.1.5c0 1.5 1.2 2.6 2.7 2.6h-22c1.5 0 2.7-1.2 2.7-2.6l-.1-.5h16.8z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M269.9 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.6 0-1-.3-1-.8 0-.4.5-.7 1-.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M269.9 306.5h16c.6 0 1 .3 1 .8 0 .4-.4.7-1 .7h-16c-.6 0-1-.3-1-.8 0-.4.5-.7 1-.7z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M266.9 316.7h22V311h-22v5.6z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M266.9 316.7h22V311h-22v5.6z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M290.6 286.7c2.1 1.2 3.6 2.5 3.4 3.2-.1.6-.8 1-1.8 1.6-1.6 1.1-2.5 3-1.8 4a5.5 5.5 0 01.2-8.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M290.6 286.7c2.1 1.2 3.6 2.5 3.4 3.2-.1.6-.8 1-1.8 1.6-1.6 1.1-2.5 3-1.8 4a5.5 5.5 0 01.2-8.8z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ccc",
      d: "M270.1 305.6h15.6V229h-15.6v76.5z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M281.4 229.1v76.3m1.8-76.3v76.3m-13 .2h15.5V229h-15.6v76.5z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M254.2 257.7a49.6 49.6 0 0123.3-2c9.3 1.6 16.4 5.3 15.9 8.4v.2l3.5-8.2c.6-3.3-7.3-7.5-17.6-9.2a53.5 53.5 0 00-9.2-.7c-6.7 0-12.4.8-15.9 2.1v9.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".4",
      d: "M254.2 257.7a49.6 49.6 0 0123.3-2c9.3 1.6 16.4 5.3 15.9 8.4v.2l3.5-8.2c.6-3.3-7.3-7.5-17.6-9.2a53.5 53.5 0 00-9.2-.7c-6.7 0-12.4.8-15.9 2.1v9.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M285.7 267.3c4.4-.3 7.3-1.4 7.7-3.2.2-1.5-1.2-3-3.8-4.5-1.2.1-2.5.3-3.9.3v7.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M285.7 267.3c4.4-.3 7.3-1.4 7.7-3.2.2-1.5-1.2-3-3.8-4.5-1.2.1-2.5.3-3.9.3v7.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M270 261.5a13 13 0 00-5.7 1.9v.2c-.5 1 1.8 3 5.8 5.4v-7.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M270 261.5a13 13 0 00-5.7 1.9v.2c-.5 1 1.8 3 5.8 5.4v-7.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M295.4 282c.4-1.2-3.8-3.6-9.7-5.8-2.8-1-5-2-7.8-3.2-8.3-3.7-14.4-7.9-13.6-9.4v-.2c-.4.4-1 8-1 8-.8 1.3 4.8 5.5 12.4 9.1 2.4 1.2 7.6 3 10 4 4.3 1.4 8.7 4.3 8.3 5.3l1.4-7.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".4",
      d: "M295.4 282c.4-1.2-3.8-3.6-9.7-5.8-2.8-1-5-2-7.8-3.2-8.3-3.7-14.4-7.9-13.6-9.4v-.2c-.4.4-1 8-1 8-.8 1.3 4.8 5.5 12.4 9.1 2.4 1.2 7.6 3 10 4 4.3 1.4 8.7 4.3 8.3 5.3l1.4-7.7z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M263.9 254.4c.6-2.3 1.4-4.4 2.1-6.6h-.5a5.2 5.2 0 01-.5.1 52.8 52.8 0 01-1.4 4.8c-1-1.4-2-2.7-2.7-4.1l-1 .2h-1a131.3 131.3 0 014 5.7h.5l.5-.1m6-6.6h-1a8 8 0 01-.8 0v6.2h4.2v-.7h-2.6l.1-5.5m6.8 1l2 .3v-.7l-5.8-.5v.8a19.3 19.3 0 012 0l-.4 5.6h1.6l.5-5.4m2.4 6c.3 0 .5 0 .8.2l.8.2.7-2.9.6 1.2.8 2.1 1 .2c.4 0 .7.2 1 .3l-.3-.7c-.4-1-1-1.9-1.3-2.9 1 0 1.9-.3 2.1-1.2.1-.6 0-1-.7-1.5-.4-.3-1.2-.4-1.7-.5l-2.4-.5-1.4 6m3-5.2c.7.2 1.5.3 1.5 1v.5c-.3.9-1 1.2-2 .9l.5-2.4m8 7l-.2 2 .8.5.9.5.5-7a3.4 3.4 0 01-.7-.3l-6.1 3.8.5.3.4.2 1.7-1.2 2.3 1.3zm-1.7-1.5l2-1.4-.2 2.3-1.8-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M182.2 192.4c0-1 1-2 2-2s2.2 1 2.2 2c0 1.1-1 2-2.1 2a2 2 0 01-2.1-2z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M205.7 175.4c6.3 0 12 1 15.7 2.4a31.7 31.7 0 0014.6 2.3c2.7 0 6.5.8 10.3 2.4a27.3 27.3 0 017.4 4.7l-1.5 1.4-.4 3.8-4.1 4.7-2 1.8-5 3.9-2.5.2-.7 2.1-31.6-3.7-31.7 3.7-.8-2.1-2.5-.2-4.9-4-2-1.7-4.1-4.7-.5-3.8-1.5-1.4a27.6 27.6 0 017.5-4.7 26 26 0 0110.2-2.4c2 .2 4.2.1 6.6-.2a30 30 0 008-2c3.7-1.5 9-2.5 15.5-2.5z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M206.2 217.1c-11.8 0-22.4-1.4-29.9-3.6a1.1 1.1 0 01-.8-1.2c0-.5.3-1 .8-1.2a109 109 0 0129.9-3.6c11.7 0 22.3 1.4 29.8 3.6a1.3 1.3 0 010 2.4c-7.5 2.2-18 3.6-29.8 3.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M206.1 215.6c-10.6 0-20.2-1.2-27.5-3.1 7.3-2 16.9-3 27.5-3.1a115 115 0 0127.6 3c-7.3 2-17 3.2-27.6 3.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M206.9 215.7v-6.3m-1.7 6.3v-6.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".2",
      d: "M203.6 215.7v-6.3m-1.6 6.3v-6.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M200.6 215.7v-6.3m-2.8 5.9v-5.7m1.3 5.8v-6m-3.8 5.6v-5.2m1.3 5.4v-5.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M192 214.8V210m1 4.7V210m1.2 5v-5m-3.4 4.7v-4.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M189.7 214.5v-4.2m-1.2 4.1v-4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".6",
      d: "M186 214v-3m1.3 3.2v-3.5m-2.5 3.1V211"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".7",
      d: "M183.7 213.6v-2.3m-1.3 2v-1.8m-1.2 1.6v-1.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".9",
      d: "M179.8 212.8v-.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M213.7 215.3v-5.8m-2.9 6v-6.1m-2.1 6.2v-6.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M206 207.4a108 108 0 00-30 3.9c.6-.3.5-1-.3-3-1-2.5-2.4-2.4-2.4-2.4 8.3-2.5 20-4 32.8-4a123 123 0 0133 4s-1.5-.1-2.5 2.3c-.8 2-.8 2.8-.2 3-7.5-2.2-18.4-3.7-30.3-3.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M206.1 201.9c-12.9 0-24.5 1.5-32.8 4a1 1 0 01-1.3-.6 1 1 0 01.7-1.3 121 121 0 0133.4-4.2c13.2 0 25.2 1.7 33.5 4.2.6.2.9.8.7 1.3-.2.5-.8.8-1.3.6-8.4-2.5-20-4-32.9-4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".4",
      d: "M206.1 215.6c-10.6 0-20.2-1.2-27.5-3.1 7.3-2 16.9-3 27.5-3.1a115 115 0 0127.6 3c-7.3 2-17 3.2-27.6 3.2z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M197 204.8c0-.5.4-1 1-1 .5 0 1 .5 1 1s-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M206.1 205.6H203a1 1 0 010-2h6.4c.5 0 1 .5 1 1s-.5 1-1 1h-3.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#058e6e",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M190.3 206.5l-2.3.2c-.6.1-1-.3-1.2-.8a1 1 0 011-1.1l2.2-.3 2.4-.3c.5 0 1 .3 1.1.9.1.5-.3 1-.9 1l-2.3.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M181 206.7c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M174 208.5l1.2-1.6 3.3.4-2.6 2-1.8-.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#058e6e",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M222 206.5l2.3.2c.5.1 1-.3 1.1-.8a1 1 0 00-.9-1.1l-2.2-.3-2.4-.3a1 1 0 00-1.1.9c-.1.5.3 1 .9 1l2.3.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M213.3 204.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1m15.8 1.9c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M238.2 208.5l-1.1-1.6-3.3.4 2.6 2 1.8-.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M177.3 212.8c7.4-2.1 17.6-3.4 28.8-3.4 11.3 0 21.4 1.3 28.9 3.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M182.3 183.8l1.4 1 2-3.2a7.4 7.4 0 01-3.6-7.2c.2-4.1 5.2-7.6 11.7-7.6 3.3 0 6.3 1 8.5 2.4 0-.6 0-1.2.2-1.8a17.4 17.4 0 00-8.7-2.1c-7.4 0-13.2 4.1-13.5 9.1a8.9 8.9 0 003 7.6l-1 1.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M182.3 183.8l1.4 1 2-3.2a7.4 7.4 0 01-3.6-7.2c.2-4.1 5.2-7.6 11.7-7.6 3.3 0 6.3 1 8.5 2.4 0-.6 0-1.2.2-1.8a17.4 17.4 0 00-8.7-2.1c-7.4 0-13.2 4.1-13.5 9.1a8.9 8.9 0 003 7.6l-1 1.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M182.4 183.8a9.3 9.3 0 01-4-7.3c0-3.2 2-6.1 5.3-8a8.5 8.5 0 00-3.4 6.8 8.9 8.9 0 003 6.7l-.9 1.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M182.4 183.8a9.3 9.3 0 01-4-7.3c0-3.2 2-6.1 5.3-8a8.5 8.5 0 00-3.4 6.8 8.9 8.9 0 003 6.7l-.9 1.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M160.1 187.1a8.8 8.8 0 01-2.3-5.9c0-1.3.3-2.6 1-3.8 2-4.2 8.4-7.2 16-7.2 2 0 4 .2 5.9.6l-1 1.4a25.5 25.5 0 00-4.9-.4c-7 0-12.8 2.7-14.5 6.3a7 7 0 00-.7 3.1 7.3 7.3 0 002.7 5.6l-2.6 4.1-1.3-1 1.7-2.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M160.1 187.1a8.8 8.8 0 01-2.3-5.9c0-1.3.3-2.6 1-3.8 2-4.2 8.4-7.2 16-7.2 2 0 4 .2 5.9.6l-1 1.4a25.5 25.5 0 00-4.9-.4c-7 0-12.8 2.7-14.5 6.3a7 7 0 00-.7 3.1 7.3 7.3 0 002.7 5.6l-2.6 4.1-1.3-1 1.7-2.8z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M162.7 173.3a10.5 10.5 0 00-4 4.1 8.6 8.6 0 00-.9 3.8c0 2.3.9 4.3 2.3 5.9l-1.5 2.5a10.4 10.4 0 01-2.3-6.5c0-4 2.5-7.5 6.4-9.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M162.7 173.3a10.5 10.5 0 00-4 4.1 8.6 8.6 0 00-.9 3.8c0 2.3.9 4.3 2.3 5.9l-1.5 2.5a10.4 10.4 0 01-2.3-6.5c0-4 2.5-7.5 6.4-9.8z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M206 164.4c1.7 0 3.2 1.1 3.5 2.6.3 1.4.4 2.9.4 4.5v1.1c.1 3.3.6 6.3 1.3 8.1l-5.2 5-5.2-5c.7-1.8 1.2-4.8 1.3-8.1v-1.1c0-1.6.2-3.1.4-4.5.3-1.5 1.8-2.6 3.5-2.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M206 164.4c1.7 0 3.2 1.1 3.5 2.6.3 1.4.4 2.9.4 4.5v1.1c.1 3.3.6 6.3 1.3 8.1l-5.2 5-5.2-5c.7-1.8 1.2-4.8 1.3-8.1v-1.1c0-1.6.2-3.1.4-4.5.3-1.5 1.8-2.6 3.5-2.6z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M206 166c1 0 1.7.6 1.8 1.4.2 1.2.4 2.6.4 4.2v1c.1 3.2.6 6 1.2 7.7l-3.4 3.2-3.4-3.2c.7-1.7 1.1-4.5 1.2-7.7v-1a28.1 28.1 0 01.4-4.2 2 2 0 011.8-1.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M206 166c1 0 1.7.6 1.8 1.4.2 1.2.4 2.6.4 4.2v1c.1 3.2.6 6 1.2 7.7l-3.4 3.2-3.4-3.2c.7-1.7 1.1-4.5 1.2-7.7v-1a28.1 28.1 0 01.4-4.2 2 2 0 011.8-1.4z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M229.7 183.8l-1.3 1-2-3.2a7.4 7.4 0 003.6-6.3 7 7 0 000-.9c-.2-4.1-5.3-7.6-11.7-7.6a15 15 0 00-8.5 2.4 23 23 0 00-.2-1.8 17.4 17.4 0 018.7-2.1c7.4 0 13.2 4.1 13.4 9.1a8.9 8.9 0 01-3 7.6l1 1.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M229.7 183.8l-1.3 1-2-3.2a7.4 7.4 0 003.6-6.3 7 7 0 000-.9c-.2-4.1-5.3-7.6-11.7-7.6a15 15 0 00-8.5 2.4 23 23 0 00-.2-1.8 17.4 17.4 0 018.7-2.1c7.4 0 13.2 4.1 13.4 9.1a8.9 8.9 0 01-3 7.6l1 1.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M229.6 183.8a9.1 9.1 0 004.1-7.3c0-3.2-2.1-6.1-5.3-8a8.5 8.5 0 013.4 6.8 8.9 8.9 0 01-3.2 6.7l1 1.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M229.6 183.8a9.1 9.1 0 004.1-7.3c0-3.2-2.1-6.1-5.3-8a8.5 8.5 0 013.4 6.8 8.9 8.9 0 01-3.2 6.7l1 1.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M252 187.1a8.8 8.8 0 002.2-5.9 8.7 8.7 0 00-.9-3.8c-2-4.2-8.4-7.2-16-7.2a29 29 0 00-6 .6l1 1.4a25.4 25.4 0 015-.4c7 0 12.8 2.7 14.4 6.3.5 1 .7 2 .7 3.1a7.3 7.3 0 01-2.6 5.6l2.5 4.1 1.3-1-1.7-2.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M252 187.1a8.8 8.8 0 002.2-5.9 8.7 8.7 0 00-.9-3.8c-2-4.2-8.4-7.2-16-7.2a29 29 0 00-6 .6l1 1.4a25.4 25.4 0 015-.4c7 0 12.8 2.7 14.4 6.3.5 1 .7 2 .7 3.1a7.3 7.3 0 01-2.6 5.6l2.5 4.1 1.3-1-1.7-2.8z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M249.3 173.3a10.6 10.6 0 014 4.1 8.7 8.7 0 01.9 3.8 8.8 8.8 0 01-2.3 5.9l1.6 2.5a10.4 10.4 0 002.3-6.5c0-4-2.6-7.5-6.5-9.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M249.3 173.3a10.6 10.6 0 014 4.1 8.7 8.7 0 01.9 3.8 8.8 8.8 0 01-2.3 5.9l1.6 2.5a10.4 10.4 0 002.3-6.5c0-4-2.6-7.5-6.5-9.8z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M204.2 181.4c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 01-1.8-1.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M204.2 181.4c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 01-1.8-1.7z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M204.2 178c0-1 .8-1.8 1.8-1.8s1.9.8 1.9 1.8-.9 1.7-1.9 1.7a1.8 1.8 0 01-1.8-1.7m.4-3.7c0-.7.6-1.3 1.4-1.3.8 0 1.5.6 1.5 1.3 0 .8-.7 1.4-1.5 1.4s-1.4-.6-1.4-1.4m.4-3.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1m.2-2.8c0-.5.4-.8.8-.8.5 0 .9.3.9.8 0 .4-.4.8-.9.8a.8.8 0 01-.8-.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M206.2 191.8l1.2.2a4.6 4.6 0 004.5 6 4.7 4.7 0 004.4-3c.1 0 .5-1.7.7-1.7.2 0 .1 1.8.2 1.7.3 2.3 2.4 3.8 4.7 3.8a4.6 4.6 0 004.7-5l1.5-1.5.7 2a4 4 0 00-.4 1.9 4.4 4.4 0 004.5 4.2c1.6 0 3-.7 3.8-1.9l.9-1.2v1.5c0 1.5.6 2.8 2 3 0 0 1.7.1 4-1.6 2.1-1.7 3.3-3.1 3.3-3.1l.2 1.7s-1.8 2.8-3.8 4c-1 .6-2.7 1.3-4 1-1.4-.2-2.4-1.3-3-2.6a6.7 6.7 0 01-3.3 1 6.5 6.5 0 01-6.1-3.7 7 7 0 01-10.4-.3 7 7 0 01-4.6 1.8 6.9 6.9 0 01-5.7-3 6.9 6.9 0 01-5.7 3 7 7 0 01-4.7-1.8 7 7 0 01-10.4.3 6.5 6.5 0 01-6 3.7 6.7 6.7 0 01-3.4-1c-.6 1.3-1.5 2.4-3 2.7-1.2.2-2.9-.5-4-1.1-2-1.2-3.8-4-3.8-4l.2-1.7s1.2 1.4 3.4 3.1c2.2 1.8 3.9 1.6 3.9 1.6 1.4-.2 2-1.5 2-3v-1.5l1 1.2a4.6 4.6 0 003.7 2c2.5 0 4.5-2 4.5-4.3a4 4 0 00-.4-2l.8-1.9 1.5 1.5a4.4 4.4 0 000 .6c0 2.4 2 4.4 4.6 4.4 2.4 0 4.4-1.5 4.7-3.8 0 0 0-1.6.2-1.7.2 0 .6 1.7.7 1.6a4.7 4.7 0 004.5 3.1 4.6 4.6 0 004.5-6l1.2-.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M238.6 197.7c.3-.8 0-1.6-.6-1.8-.5-.2-1.2.3-1.5 1.1-.3.8 0 1.6.6 1.8.5.2 1.2-.3 1.5-1.1m-20.5-4c0-.8-.3-1.6-1-1.6-.5-.1-1 .5-1.2 1.4-.1.8.3 1.5.9 1.6.6 0 1.2-.6 1.3-1.4m-23.9 0c0-.8.4-1.6 1-1.6.6-.1 1.1.5 1.2 1.4.1.8-.3 1.5-.9 1.6-.6 0-1.1-.6-1.2-1.4m-20.6 4c-.2-.8 0-1.6.6-1.8.6-.2 1.2.3 1.5 1.1.3.8 0 1.6-.5 1.8-.6.2-1.3-.3-1.6-1.1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M182.7 184a5.1 5.1 0 012.2 2.9s0-.3.6-.6 1-.3 1-.3l-.1 1.3-.3 2.2a7.4 7.4 0 01-.7 1.6 1.9 1.9 0 00-1.5-.4 1.8 1.8 0 00-1.2.9s-.7-.6-1.2-1.3l-1.1-2-.7-1.1s.5-.2 1.1 0c.6 0 .8.2.8.2a4.9 4.9 0 011-3.4m.4 9.8a1.8 1.8 0 01-.6-1c0-.5 0-.9.3-1.2 0 0-.9-.5-1.8-.7-.7-.2-2-.2-2.3-.2h-1l.2.5c.2.5.5.7.5.7a5 5 0 00-3 2 5.3 5.3 0 003.5 1l-.2.8v.6l1-.4c.3-.1 1.5-.5 2-1 .8-.4 1.5-1.1 1.5-1.1m2.7-.5a1.6 1.6 0 00.2-1.1 1.7 1.7 0 00-.6-1l1.4-1.3a10 10 0 012-.9l1.1-.4v.6a5.7 5.7 0 01-.2.8 5 5 0 013.4 1 5 5 0 01-2.9 2 6.4 6.4 0 00.7 1.2h-1c-.4 0-1.6 0-2.3-.2a11 11 0 01-1.8-.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M182.2 192.4c0-1 1-2 2-2s2.2 1 2.2 2c0 1.1-1 2-2.1 2a2 2 0 01-2.1-2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M206.1 180.8a5.7 5.7 0 011.9 3.7s.2-.3.9-.5c.7-.3 1.2-.2 1.2-.2l-.5 1.4-.8 2.4a8.2 8.2 0 01-1 1.7 2.1 2.1 0 00-1.7-.7c-.6 0-1.2.3-1.6.7 0 0-.6-.7-1-1.7l-.8-2.4-.5-1.4 1.2.2c.7.2.9.5.9.5 0-1.4.8-2.8 1.8-3.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M204.6 191.8a2 2 0 01-.5-1.2c0-.5.1-1 .4-1.3 0 0-.8-.7-1.8-1-.7-.4-2-.7-2.5-.7l-1.2-.2.2.6.4.9a5.9 5.9 0 00-3.7 1.7c1 .9 2.3 1.6 3.7 1.6l-.4 1-.2.6 1.2-.2c.4-.1 1.8-.4 2.5-.7 1-.4 1.9-1 1.9-1m3 0a1.9 1.9 0 00.1-2.6s.9-.7 1.8-1a8 8 0 012.5-.7l1.2-.3-.1.7-.4.9c1.4 0 2.7.8 3.6 1.7a5.9 5.9 0 01-3.6 1.6 6.9 6.9 0 00.5 1.6l-1.2-.2-2.5-.7c-1-.4-1.8-1-1.8-1m22-8a5.2 5.2 0 00-2.2 3l-.7-.6c-.6-.3-1-.3-1-.3l.2 1.3c0 .3 0 1.3.3 2.2.2 1 .6 1.6.6 1.6a2 2 0 011.5-.4c.6.1 1 .5 1.3.9l1.1-1.3c.6-.8 1-1.7 1.1-2l.7-1.1s-.4-.2-1 0c-.7 0-1 .2-1 .2a4.9 4.9 0 00-1-3.4m-.3 9.8c.3-.3.5-.6.6-1a1.6 1.6 0 00-.2-1.2s.8-.5 1.7-.7c.7-.2 2-.2 2.3-.2h1.1l-.3.5a6.2 6.2 0 01-.4.7 5 5 0 012.9 2 5.3 5.3 0 01-3.5 1l.2.8v.6l-1-.4c-.3-.1-1.4-.5-2-1-.8-.4-1.4-1.1-1.4-1.1m-2.8-.5a1.7 1.7 0 01-.2-1.1c0-.5.3-.8.6-1 0 0-.6-.8-1.4-1.3-.6-.4-1.7-.8-2-.9a171.4 171.4 0 01-1-.4v.6c0 .5.2.8.2.8a5.2 5.2 0 00-3.5 1c.7.9 1.7 1.7 3 2 0 0-.3.2-.5.7l-.3.5h1c.4 0 1.7 0 2.3-.2a11.1 11.1 0 001.8-.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M226 192.4c0-1 1-2 2-2s2.1 1 2.1 2a2 2 0 01-2 2 2 2 0 01-2.1-2m23.2 4.4c-.4-.5-1.4-.4-2.2.2-.8.7-1 1.6-.5 2.2.5.5 1.5.4 2.3-.3.7-.6 1-1.6.5-2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M246.3 198l.7-1c.7-.6 1.8-.7 2.3-.2l.1.2s1-2 2.3-2.6c1.3-.7 3.4-.5 3.4-.5a2.8 2.8 0 00-2.9-2.8 3 3 0 00-2.4 1l-.2-1s-1.3.3-1.9 1.8c-.6 1.5 0 3.6 0 3.6s-.3-.9-.7-1.5a8 8 0 00-2.4-1.6l-1.3-.7-.1.5a5 5 0 000 .8 7.9 7.9 0 00-3.7.5 4.7 4.7 0 002.5 2.2l-.8.7a4 4 0 00-.4.5l1.3.2 2.5.2a14.5 14.5 0 001.7-.2m-80.3 0c0-.4-.3-.7-.7-1-.7-.7-1.7-.8-2.2-.3l-.2.3s-1-2-2.3-2.7c-1.2-.7-3.3-.5-3.3-.5a2.8 2.8 0 012.8-2.8c1 0 1.9.4 2.4 1l.2-1s1.3.3 2 1.8c.5 1.5-.1 3.6-.1 3.6s.3-.9.8-1.5a8 8 0 012.4-1.6l1.3-.7v1.3a7.9 7.9 0 013.7.5 4.7 4.7 0 01-2.5 2.2l.8.7.4.5-1.2.2-2.6.2a14.7 14.7 0 01-1.7-.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M163 196.8c.6-.5 1.6-.4 2.4.3.7.6 1 1.5.4 2-.5.6-1.5.5-2.2-.2-.8-.6-1-1.6-.5-2m41-6.3c0-1.1.9-2 2-2s2.1.9 2.1 2c0 1-1 2-2 2a2 2 0 01-2.1-2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#005bbf",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M201.8 160.6c0-2.2 1.9-4 4.3-4s4.2 1.8 4.2 4-1.9 4-4.3 4a4.1 4.1 0 01-4.2-4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M205 149.3v2.2h-2.4v2.2h2.3v6.3H202l-.2.6c0 .6.1 1.1.3 1.6h7.9c.2-.5.3-1 .3-1.6l-.2-.6h-2.8v-6.3h2.3v-2.2h-2.3v-2.2h-2.4z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ccc",
      d: "M206.5 330.6a82 82 0 01-35.5-8.2 22.7 22.7 0 01-12.8-20.4v-32h96.4v32a22.7 22.7 0 01-12.8 20.4 81 81 0 01-35.3 8.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M206.5 330.6a82 82 0 01-35.5-8.2 22.7 22.7 0 01-12.8-20.4v-32h96.4v32a22.7 22.7 0 01-12.8 20.4 81 81 0 01-35.3 8.2z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ccc",
      d: "M206.3 270h48.3v-53.5h-48.3V270z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M206.3 270h48.3v-53.5h-48.3V270z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M206.3 302c0 12.6-10.7 22.9-24 22.9s-24.2-10.3-24.2-23v-32h48.2v32"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M168.6 320.9c1.5.8 3.6 2 5.8 2.6l-.1-54.7h-5.7v52z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".5",
      d: "M158 301.6a24.4 24.4 0 005.5 15v-47.5h-5.4v32.5z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c7b500",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M179.4 324.7a26.6 26.6 0 005.6 0v-55.9h-5.6v56z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M190 323.5a19 19 0 005.8-2.5v-52.2H190l-.1 54.7z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M158.1 270h48.2v-53.5H158V270z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M158.1 270h48.2v-53.5H158V270z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M201 316c2.4-2 4.6-6.8 5.4-12.2l.1-35H201l.1 47.3z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M206.3 302c0 12.6-10.7 22.9-24 22.9s-24.2-10.3-24.2-23v-32h48.2v32"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M254.6 270v32c0 12.6-10.8 22.9-24.1 22.9s-24.2-10.3-24.2-23v-32h48.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M254.6 270v32c0 12.6-10.8 22.9-24.1 22.9s-24.2-10.3-24.2-23v-32h48.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M215.1 294.1l.1.5c0 .6-.5 1-1.1 1a1 1 0 01-1.1-1v-.5h-1.5a2.5 2.5 0 001.8 2.9v3.9h1.6V297a2.6 2.6 0 001.7-1.6h4.4v-1.2h-6m21.8 0v1.2h-4a2.5 2.5 0 01-.3.6l4.6 5.2-1.2 1-4.6-5.3-.2.1v8.7h-1.6V297h-.2l-4.8 5.2-1.2-1 4.7-5.3a2.1 2.1 0 01-.2-.4h-4V294h13zm2.6 0v1.2h4.4c.3.8.9 1.4 1.7 1.6v3.9h1.6V297a2.5 2.5 0 001.8-2.4 2 2 0 000-.5h-1.6l.1.5c0 .6-.5 1-1 1-.7 0-1.2-.4-1.2-1a1 1 0 01.1-.5h-5.9m-6.7 22.1a15.6 15.6 0 003.7-1l.8 1.4a17.6 17.6 0 01-4.3 1.2 2.6 2.6 0 01-2.6 2 2.6 2.6 0 01-2.5-2 17.5 17.5 0 01-4.6-1.2l.8-1.4c1.3.5 2.6.9 4 1a2.5 2.5 0 011.5-1.3v-6.7h1.6v6.7c.7.2 1.3.7 1.6 1.4zm-11-2.2l-.8 1.4a16.6 16.6 0 01-3.6-3.1c-.9.2-1.8 0-2.5-.5a2.4 2.4 0 01-.3-3.5l.1-.1a15.3 15.3 0 01-1.3-4.8h1.7a13.1 13.1 0 001 4c.5 0 1 0 1.4.2l4.1-4.5 1.3 1-4.1 4.5c.5.9.5 2-.1 2.8a15.2 15.2 0 003.1 2.6zm-6-4.8c.3-.4 1-.5 1.5 0s.5 1 .1 1.4a1.2 1.2 0 01-1.6.1 1 1 0 010-1.5zm-2.2-4.5l-1.6-.3-.3-4.3 1.7-.6v2.5c0 1 0 1.8.2 2.7zm1.4-5.3l1.7.4v2.2c0-.8.3 2.1.3 2.1l-1.7.6a14 14 0 01-.3-2.7v-2.6zm5.6 13.7a15.7 15.7 0 004.8 2.6l.4-1.6a13.7 13.7 0 01-4-2l-1.2 1m-.8 1.4a17.4 17.4 0 004.8 2.6l-1.2 1.1a18.7 18.7 0 01-4-2l.4-1.7m2.2-9.4l1.6.7 3-3.3-1-1.4-3.6 4m-1.3-1l-1-1.4 3-3.3 1.6.7-3.6 4m18.1 9.9l.8 1.4a16.7 16.7 0 003.6-3.1c.9.2 1.8 0 2.5-.5a2.4 2.4 0 00.3-3.5l-.1-.1a15 15 0 001.3-4.8h-1.7a13.3 13.3 0 01-1 4 3 3 0 00-1.4.2l-4.1-4.5-1.3 1 4.1 4.5a2.4 2.4 0 00.1 2.8 15 15 0 01-3.1 2.6zm6-4.8a1.2 1.2 0 00-1.5 0 1 1 0 00-.1 1.4 1.2 1.2 0 001.6.1 1 1 0 000-1.5zm2.2-4.5l1.6-.3.3-4.3-1.7-.6v2.5c0 1 0 1.9-.2 2.8zm-1.4-5.3l-1.7.4v2.2c0-.8-.3 2.1-.3 2.1l1.7.6.3-2.7v-2.6m-5.6 13.7a15.7 15.7 0 01-4.8 2.6l-.4-1.6a13.7 13.7 0 004-2l1.2 1m.8 1.4a17.4 17.4 0 01-4.8 2.6l1.2 1.1a18.6 18.6 0 004-2l-.4-1.7m-2.2-9.4l-1.6.7-2.9-3.3 1-1.4 3.5 4m1.3-1l1-1.4-3-3.3-1.6.7 3.6 4m-20.1-8.7l.5 1.6h4.5l.5-1.6h-5.5m21.1 0l-.5 1.6h-4.5l-.5-1.6h5.5m-11.6 21.9c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm1.9-7.8l1.7-.4v-4.3l-1.7-.5v5.2m-1.6 0l-1.7-.4v-4.3l1.7-.5v5.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M211.5 294.2c.2-1 1-1.6 1.8-2V287h1.6v5.3c.8.3 1.5.9 1.7 1.6h4.4v.3h-6a1.2 1.2 0 00-1-.6c-.4 0-.7.3-1 .6h-1.5m12.2 0v-.3h4.1a2.4 2.4 0 01.2-.3l-5-5.7 1.2-1 5 5.6.2-.1V285h1.6v7.3h.3l4.9-5.5 1.2 1-4.9 5.5.3.6h4v.3h-13zm21.6 0a1.1 1.1 0 011-.6c.5 0 .8.3 1 .6h1.6c-.2-1-.9-1.6-1.8-2V287h-1.6v5.3c-.8.3-1.4.8-1.7 1.6h-4.4v.3h6m-30.2-15l6 6.8 1.3-1-6.1-6.7.3-.6h4.4V276h-4.4a2.6 2.6 0 00-2.5-1.7 2.6 2.6 0 00-2.7 2.5 2.5 2.5 0 001.8 2.4v5.2h1.6v-5.2h.3zm32 0v5.3h-1.7v-5.2a2.5 2.5 0 01-.4-.2l-6 6.8-1.3-1 6.2-6.9-.1-.3h-4.5V276h4.5a2.6 2.6 0 012.4-1.7 2.6 2.6 0 012.7 2.5 2.5 2.5 0 01-1.9 2.4zm-16.1 0v3.3h-1.7v-3.2a2.6 2.6 0 01-1.7-1.6h-4V276h4a2.6 2.6 0 012.5-1.7c1.2 0 2.2.7 2.5 1.7h4v1.6h-4a2.5 2.5 0 01-1.6 1.6zm-17.8 4l-1.7.4v4.3l1.7.5v-5.2m1.6 0l1.7.4v4.3l-1.7.5v-5.2m30.6 0l-1.7.4v4.3l1.7.5v-5.2m1.6 0l1.7.4v4.3l-1.7.5v-5.2m-25.5.8l1.6-.7 2.9 3.3-1 1.4-3.5-4m-1.3 1l-1 1.4 3 3.3 1.6-.7-3.6-4m18.5-1.1l-1.6-.7-3 3.3 1 1.4 3.6-4m1.2 1l1 1.4-3 3.3-1.5-.7 3.5-4m-20.3 9l.5-1.6h4.5l.5 1.6h-5.5m-6.7-17c0-.6.5-1 1.2-1a1 1 0 011 1c0 .6-.4 1-1 1a1.1 1.1 0 01-1.2-1zm12.1.8l-.5 1.6h-4.5l-.5-1.6h5.5m0-1.6l-.5-1.6h-4.5l-.5 1.6h5.5m15.7 17.8l-.5-1.6h-4.5l-.5 1.6h5.5m4.4-17c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm-16.1 0c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1.1 1a1.1 1.1 0 01-1.1-1zm6.2.8l.5 1.6h4.6l.5-1.6h-5.6m0-1.6l.5-1.6h4.6l.5 1.6h-5.6m-5.9 5l-1.7.5v4.3l1.7.5V281m1.7 0l1.6.5v4.3l-1.6.5V281"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#c8b100",
      strokeWidth: ".3",
      d: "M232.7 316.3a15.6 15.6 0 003.7-1.1l.8 1.4a17.6 17.6 0 01-4.3 1.2 2.6 2.6 0 01-2.6 2 2.6 2.6 0 01-2.5-2 17.5 17.5 0 01-4.6-1.2l.8-1.4c1.3.5 2.6.9 4 1a2.5 2.5 0 011.5-1.3v-6.7h1.6v6.7c.7.2 1.3.7 1.6 1.4zm-4.7-20.4a2.3 2.3 0 01-.2-.5h-4V294h4a2.6 2.6 0 01.2-.4l-5-5.6 1.2-1 5 5.5a2.2 2.2 0 01.2 0V285h1.7v7.3h.2l4.9-5.5 1.2 1-4.9 5.5.3.6h4v1.5h-4c0 .2-.2.4-.3.5l4.7 5.3-1.3 1-4.6-5.3-.2.1v8.7h-1.6V297l-.2-.1-4.8 5.3-1.2-1 4.7-5.3m-12.8-16.7l6 6.8 1.3-1-6.1-6.7.3-.6h4.4V276h-4.4a2.6 2.6 0 00-2.5-1.7 2.6 2.6 0 00-2.6 2.5 2.5 2.5 0 001.7 2.4v5.2h1.6v-5.2h.3zm6.5 34.8l-.8 1.4a16.6 16.6 0 01-3.6-3.1c-.9.2-1.8 0-2.5-.5a2.4 2.4 0 01-.3-3.5l.1-.1a15.3 15.3 0 01-1.2-4.8h1.6a13.1 13.1 0 001 4c.5 0 1 0 1.4.2l4.1-4.5 1.3 1-4.1 4.5c.6.9.5 2-.1 2.8a15.2 15.2 0 003.1 2.6zm-8.4-13.1V297a2.5 2.5 0 01-1.8-2.4c0-1 .8-2 1.8-2.4V287h1.6v5.3c.8.2 1.5.8 1.7 1.6h4.4v1.5h-4.4a2.6 2.6 0 01-1.6 1.6v3.9h-1.7m2.3 8.3c.4-.4 1.1-.5 1.6 0s.5 1 .1 1.4a1.2 1.2 0 01-1.6.1 1 1 0 010-1.5zm-2-4.5l-1.7-.3-.3-4.3 1.7-.6v2.5c0 1 0 1.8.3 2.7zm1.4-5.3l1.6.4v2.2c0-.8.3 2.1.3 2.1l-1.7.6-.3-2.7v-2.6zm5.5 13.7a15.7 15.7 0 004.8 2.6l.4-1.6a13.7 13.7 0 01-4-2l-1.2 1m-.8 1.4a17.4 17.4 0 004.8 2.6l-1.2 1.1a18.7 18.7 0 01-4-2l.4-1.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#c8b100",
      strokeWidth: ".3",
      d: "M221.9 305.1l1.6.7 3-3.3-1-1.4-3.6 4m-1.3-1l-1-1.4 3-3.3 1.6.7-3.6 4m-7.6-9.5c0-.6.5-1 1-1 .7 0 1.2.5 1.2 1 0 .6-.5 1.1-1.1 1.1a1 1 0 01-1.1-1zm25.7 19.4l.8 1.4a16.7 16.7 0 003.6-3.1c.9.2 1.8 0 2.6-.5a2.4 2.4 0 00.2-3.5l-.1-.1a15 15 0 001.3-4.8h-1.7a13.3 13.3 0 01-1 4 3 3 0 00-1.4.2l-4.1-4.5-1.3 1 4.1 4.5a2.4 2.4 0 00.1 2.8 15 15 0 01-3 2.6zm8.4-13.1V297a2.5 2.5 0 001.8-2.4c0-1-.7-2-1.8-2.4V287h-1.6v5.3c-.8.2-1.4.8-1.7 1.6h-4.4v1.5h4.4c.3.8.9 1.3 1.7 1.6v3.9h1.6zm-2.3 8.3a1.2 1.2 0 00-1.6 0 1 1 0 00-.1 1.4 1.2 1.2 0 001.6.1 1 1 0 000-1.5zm2-4.5l1.7-.3.3-4.3-1.7-.6v2.5c0 1 0 1.8-.2 2.7zm-1.3-5.3l-1.7.4v2.2c0-.8-.3 2.1-.3 2.1l1.7.6.3-2.7v-2.6m1.6-20.1v5.2h-1.6v-5.2a2.3 2.3 0 01-.4-.2l-6 6.8-1.2-1 6-7v-.2h-4.5V276h4.4a2.6 2.6 0 012.5-1.7 2.6 2.6 0 012.6 2.5 2.5 2.5 0 01-1.8 2.4zm-16 0v3.2h-1.7v-3.2a2.6 2.6 0 01-1.7-1.6h-4V276h4c.4-1 1.3-1.7 2.5-1.7s2.2.7 2.5 1.7h4v1.6h-4a2.5 2.5 0 01-1.6 1.6zm8.8 33.8a15.7 15.7 0 01-4.8 2.6l-.4-1.6a13.7 13.7 0 004-2l1.2 1m.8 1.4a17.4 17.4 0 01-4.8 2.6l1.2 1.1a18.7 18.7 0 004-2l-.4-1.7m-27.4-31.4l-1.7.5v4.3l1.7.5v-5.2m1.7 0l1.6.4v4.3l-1.6.5V283m30.5 0l-1.7.5v4.3l1.7.5V283"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#c8b100",
      strokeWidth: ".3",
      d: "M247.1 283.1l1.7.5v4.3l-1.7.5V283m-8.6 22l-1.6.7-2.9-3.3 1-1.4 3.5 4m1.3-1l1-1.4-3-3.3-1.6.7 3.6 4m-18.2-20l1.6-.7 3 3.3-1 1.4-3.6-4m-1.3 1l-1 1.4 3 3.3 1.6-.7-3.6-4m18.5-1.1l-1.6-.7-3 3.3 1 1.4 3.6-4m1.2 1l1 1.4-3 3.2-1.5-.6 3.5-4m-20.3 9l.5-1.6h4.5l.5 1.6h-5.5m0 1.5l.5 1.6h4.5l.5-1.6h-5.5M213 277c0-.6.5-1 1.2-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1.2-1zm12.1.8l-.5 1.6h-4.5l-.5-1.6h5.5m0-1.6l-.5-1.6h-4.5l-.5 1.6h5.5m20.1 18.5c0-.5.5-1 1.1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1.1-1 1.1a1 1 0 01-1.2-1zm-4.4-.7l-.5-1.6h-4.5l-.5 1.6h5.5m0 1.5l-.5 1.6h-4.5l-.5-1.6h5.5m-11.6 21.9c0-.6.5-1 1.1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1.1 1.1 0 01-1.2-1zm1.9-7.8l1.7-.4v-4.3l-1.7-.5v5.2m-1.6 0l-1.7-.4v-4.3l1.7-.5v5.2m15.7-32.6c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm-16.1 0c0-.6.5-1 1.1-1a1 1 0 011.1 1c0 .6-.5 1-1 1a1.1 1.1 0 01-1.2-1zm6.2.8l.5 1.6h4.6l.5-1.6h-5.5m0-1.6l.4-1.6h4.6l.5 1.6h-5.5m-6 5l-1.6.5v4.3l1.6.5V281m1.7 0l1.6.5v4.3l-1.6.5V281"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#058e6e",
      d: "M227.7 294.7a2.6 2.6 0 012.6-2.5 2.6 2.6 0 012.6 2.5 2.6 2.6 0 01-2.6 2.4c-1.4 0-2.6-1-2.6-2.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#db4446",
      d: "M230.9 229.7v-.6l.1-.3-2.3-.1a5.9 5.9 0 01-2.3-1.2c-.8-.7-1.1-1-1.6-1.2-1.3-.2-2.3.4-2.3.4s1 .4 1.7 1.3 1.5 1.3 1.8 1.4c.6.2 2.6 0 3.1.1l1.8.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M230.9 229.7v-.6l.1-.3-2.3-.1a5.9 5.9 0 01-2.3-1.2c-.8-.7-1.1-1-1.6-1.2-1.3-.2-2.3.4-2.3.4s1 .4 1.7 1.3 1.5 1.3 1.8 1.4c.6.2 2.6 0 3.1.1l1.8.2z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ed72aa",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M238.1 227.5v1.4c.2.6-.1 1.2 0 1.5 0 .4.1.6.3.9l.2.9-.7-.5-.6-.4v1c.1.2.3.8.6 1.1l1 1.3c.2.5.1 1.4.1 1.4s-.4-.7-.8-.8l-1.2-.7s.7.8.7 1.5c0 .8-.3 1.6-.3 1.6s-.3-.7-.8-1.1l-1-.9s.4 1.2.4 2v2.3l-.9-1-1-.7c0-.2.5.6.6 1.1 0 .5.3 2.3 1.8 4.5 1 1.3 2.3 3.6 5.3 2.9 3-.8 1.9-4.8 1.3-6.7a16.8 16.8 0 01-1-4.6c0-.8.6-2.9.5-3.3a8 8 0 01.2-3.1c.4-1.3.7-1.8.9-2.3.2-.6.4-.9.4-1.3l.1-1.3.7 1.3.1 1.5s.1-1 1-1.6c.8-.6 1.8-1.1 2-1.4.3-.3.3-.5.3-.5s0 1.8-.6 2.6l-1.7 2s.7-.3 1.2-.3h.9s-.6.4-1.4 1.6c-.8 1-.5 1.2-1 2.1-.6 1-1 1-1.7 1.5-1 .8-.5 4.2-.4 4.7.2.5 2 4.5 2 5.5s.2 3.2-1.5 4.6c-1.1 1-3 1-3.4 1.2-.4.3-1.2 1.1-1.2 2.8 0 1.7.6 2 1 2.4.6.5 1.2.2 1.3.6.2.3.2.5.5.7.2.2.3.4.2.8 0 .3-.8 1.1-1.1 1.7l-.8 2.4c0 .2-.1 1 .1 1.3 0 0 .9 1 .3 1.2-.4.2-.8-.2-1-.2l-.9.5c-.3-.1-.3-.3-.4-.8l-.1-.7c-.2 0-.3.2-.4.5 0 .2 0 .8-.3.8-.2 0-.5-.4-.8-.5-.2 0-.8-.2-.8-.4 0-.3.4-.9.7-1 .4 0 .8-.3.5-.5s-.5-.2-.7 0-.8 0-.7-.2v-.8c0-.2-.4-.5.1-.8.6-.3.8.2 1.4.1.6 0 .8-.3 1-.6.2-.3.2-1-.2-1.4-.4-.5-.7-.5-.9-.8l-.3-.9v2.2l-.7-.8c-.3-.3-.6-1.3-.6-1.3v1.3c0 .4.3.7.2.8-.1.1-.8-.7-1-.8a3.7 3.7 0 01-1-1l-.4-1.4a4.2 4.2 0 010-1.5l.4-1h-1.4c-.7 0-1.2-.3-1.5.2-.3.5-.2 1.5.2 2.8.3 1.2.5 1.9.4 2.1a3 3 0 01-.7.8h-.9a2.5 2.5 0 00-1.2-.3h-1.3l-1.1-.3c-.3.1-.8.3-.6.7.2.6-.2.7-.5.7l-.9-.2c-.4-.1-.9 0-.8-.4 0-.4.2-.4.4-.7.2-.3.2-.5 0-.5h-.6c-.2.2-.5.5-.8.4-.2-.1-.4-.4-.4-1s-.7-1.2 0-1.1c.5 0 1.3.4 1.4 0 .2-.3 0-.4-.2-.7s-.8-.4-.3-.7l.7-.5c.1-.2.4-.8.7-.6.6.2 0 .7.6 1.3.6.7 1 1 2 .8 1 0 1.3-.2 1.3-.5l-.1-1v-1s-.4.3-.5.6l-.4.8v-2a8 8 0 00-.2-.8l-.3.9-.1 1s-.7-.5-.5-1.5c.1-.7-.1-1.6.1-2 .2-.3.7-1.5 2-1.6h2.6l2-.3s-2.8-1.4-3.5-1.9a9.5 9.5 0 01-2-2l-.6-1.6s-.5 0-1 .3a5 5 0 00-1.2 1l-.7 1 .1-1.2v-.8s-.4 1.2-1 1.7l-1.4 1v-.8l.2-1s-.4.8-1.1 1c-.7 0-1.8 0-1.9.4 0 .5.2 1 0 1.4 0 .3-.4.5-.4.5l-.8-.4c-.4 0-.7.2-.7.2s-.3-.4-.2-.7c.1-.2.7-.6.5-.8l-.8.2c-.3.1-.8.3-.8-.2 0-.4.2-.7 0-1 0-.3 0-.5.2-.6l1.2-.1c0-.2-.2-.5-.8-.6-.6-.1-.8-.5-.5-.8.3-.2.3-.3.5-.6.1-.2.2-.7.7-.5.5.3.4.8 1 1a4 4 0 002-.2l1.5-1 1.5-1-1-.8c-.3-.3-.7-.9-1-1a8.3 8.3 0 00-1.8-.6 9 9 0 01-1.7-.5l.8-.3c.2-.2.6-.6.8-.6h.3-1.4c-.3-.1-1-.6-1.3-.6l-.8.1s.8-.4 1.4-.5l1-.1s-.9-.3-1.1-.6l-.6-1c-.2-.1-.3-.5-.6-.5l-1 .3c-.4 0-.6-.2-.6-.6l-.1-.5c-.2-.3-.6-.8-.2-1h1.4c0-.2-.5-.6-.8-.8-.4-.2-1-.5-.7-.8l.8-.5c.2-.3.3-1 .7-.7.4.2.8 1.2 1.1 1.1.3 0 .3-.8.3-1 0-.4 0-1 .2-.9.3 0 .5.4 1 .5.4 0 1-.1 1 .2 0 .3-.3.7-.6 1-.3.3-.4 1-.3 1.4.2.5.7 1.2 1.2 1.4.4.3 1.2.5 1.7.9.5.3 1.7 1.2 2.1 1.3l.8.4s.5-.2 1.1-.2c.7 0 2.1 0 2.6-.2.6-.2 1.3-.6 1-1-.1-.6-1.3-1-1.2-1.4 0-.4.5-.4 1.2-.4.8 0 1.8.1 2-1 .2-1 .2-1.5-.8-1.8-1-.2-1.8-.2-2-1-.2-.7-.4-.9-.2-1.1.3-.2.6-.3 1.4-.4.8 0 1.6 0 1.9-.2.2-.2.3-.7.6-.9.3-.2 1.4-.4 1.4-.4s1.4.7 2.7 1.7a15 15 0 012.2 2.1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M228.1 226.8l-.2-.6v-.3s.8 0 .7.3c0 .2-.2.2-.3.3l-.2.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M228.1 226.8l-.2-.6v-.3s.8 0 .7.3c0 .2-.2.2-.3.3l-.2.3z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M232 225.4v-.4s.7 0 1 .3c.5.4.9 1 .9 1l-.8-.4h-.5l-.3-.1v-.3h-.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M232 225.4v-.4s.7 0 1 .3c.5.4.9 1 .9 1l-.8-.4h-.5l-.3-.1v-.3h-.3z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M237.3 231.3l-.4-.7a8 8 0 01-.3-.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#db4446",
      d: "M217.4 226.6s.5.4.8.4h.8s.2-.5.1-.8c-.2-1.2-1.2-1.4-1.2-1.4s.3.7.1 1a2 2 0 01-.6.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M217.4 226.6s.5.4.8.4h.8s.2-.5.1-.8c-.2-1.2-1.2-1.4-1.2-1.4s.3.7.1 1a2 2 0 01-.6.8z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#db4446",
      d: "M215.2 227.6s-.4-.7-1.3-.6c-.8 0-1.4.8-1.4.8h1.2c.3.3.4 1 .4 1l.7-.6a7.2 7.2 0 00.4-.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M215.2 227.6s-.4-.7-1.3-.6c-.8 0-1.4.8-1.4.8h1.2c.3.3.4 1 .4 1l.7-.6a7.2 7.2 0 00.4-.6z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#db4446",
      d: "M214.2 230.6s-.8.1-1.2.6c-.4.5-.3 1.3-.3 1.3s.4-.5.9-.5l1 .2-.1-.8-.3-.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M214.2 230.6s-.8.1-1.2.6c-.4.5-.3 1.3-.3 1.3s.4-.5.9-.5l1 .2-.1-.8-.3-.8z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M228.2 230.5l.3-.5.3.5h-.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M228.2 230.5l.3-.5.3.5h-.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M229 230.5l.3-.5.4.5h-.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M229 230.5l.3-.5.4.5h-.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M228.6 227.3l.8.3-.7.4-.1-.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M228.6 227.3l.8.3-.7.4-.1-.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M229.5 227.6l.7.2-.5.4-.2-.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M229.5 227.6l.7.2-.5.4-.2-.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M224.2 233.7s-.7.2-1 .6c-.4.5-.3 1-.3 1s.6-.5 1.5-.3l1.2.3 1.3-.3s-.7.8-.7 1.3l.2 1.1c0 .7-.6 1.6-.6 1.6l1-.3a4.6 4.6 0 001.7-.8l.9-1s-.2 1 0 1.4l.2 1.6.8-.6c.2-.1.7-.4.9-.7l.3-1s0 .8.4 1.3l.6 1.6s.3-.8.6-1.1c.3-.4.7-.8.7-1a4.3 4.3 0 00-.1-.9l.4.8m-11 .6s.5-.8 1-1l1.1-.8.9-.4m1 5l1.3-.8a4 4 0 001-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#db4446",
      d: "M216.6 240.4s-.4-.5-1.1-.3c-.7 0-1.2.9-1.2.9s.6-.2 1-.1.6.4.6.4l.4-.4.3-.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M216.6 240.4s-.4-.5-1.1-.3c-.7 0-1.2.9-1.2.9s.6-.2 1-.1.6.4.6.4l.4-.4.3-.6z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#db4446",
      d: "M215.8 243.2s-.6 0-1.1.3c-.5.4-.5 1.2-.5 1.2s.4-.4.8-.3l.9.2v-.6c.2-.4-.1-.8-.1-.8"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M215.8 243.2s-.6 0-1.1.3c-.5.4-.5 1.2-.5 1.2s.4-.4.8-.3l.9.2v-.6c.2-.4-.1-.8-.1-.8z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#db4446",
      d: "M217.2 245.8s0 .8.3 1.3c.4.5 1.1.5 1.1.5l-.3-.7c0-.4.3-.8.3-.8s-.3-.3-.7-.3h-.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M217.2 245.8s0 .8.3 1.3c.4.5 1.1.5 1.1.5l-.3-.7c0-.4.3-.8.3-.8s-.3-.3-.7-.3h-.7zm16 1.3s2 1.2 1.9 2.2c0 1-1 2.3-1 2.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#db4446",
      d: "M224.2 252.6s-.4-.6-1.1-.6c-.7 0-1.4.7-1.4.7s.8-.1 1 .2l.5.6.5-.3.5-.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M224.2 252.6s-.4-.6-1.1-.6c-.7 0-1.4.7-1.4.7s.8-.1 1 .2l.5.6.5-.3.5-.6z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#db4446",
      d: "M222.2 255.3s-1-.1-1.4.3c-.4.5-.4 1.3-.4 1.3s.6-.6 1-.5c.5 0 1 .3 1 .3v-.7l-.3-.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M222.2 255.3s-1-.1-1.4.3c-.4.5-.4 1.3-.4 1.3s.6-.6 1-.5c.5 0 1 .3 1 .3v-.7l-.3-.7z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#db4446",
      d: "M224 258.1s-.3.7 0 1.1c.3.5 1 .8 1 .8s-.3-.4-.2-.8c.1-.3.7-.8.7-.8l-1.4-.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M224 258.1s-.3.7 0 1.1c.3.5 1 .8 1 .8s-.3-.4-.2-.8c.1-.3.7-.8.7-.8l-1.4-.2z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#db4446",
      d: "M236 259.3s-.8-.2-1.2 0c-.5.3-.8 1.4-.8 1.4s.7-.6 1.2-.5c.5 0 1 .3 1 .3v-.8l-.2-.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M236 259.3s-.8-.2-1.2 0c-.5.3-.8 1.4-.8 1.4s.7-.6 1.2-.5c.5 0 1 .3 1 .3v-.8l-.2-.4z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#db4446",
      d: "M236.4 262.2s-.6.6-.4 1.1l.6 1s0-.7.2-1l1-.3-.7-.5a15.8 15.8 0 01-.7-.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M236.4 262.2s-.6.6-.4 1.1l.6 1s0-.7.2-1l1-.3-.7-.5a15.8 15.8 0 01-.7-.3z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#db4446",
      d: "M239.4 263s-.3.8.2 1.3c.6.5 1 .5 1 .5s-.3-.7-.2-1.1c.1-.5.5-.7.5-.7l-.8-.2-.7.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M239.4 263s-.3.8.2 1.3c.6.5 1 .5 1 .5s-.3-.7-.2-1.1c.1-.5.5-.7.5-.7l-.8-.2-.7.3z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ffd691",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M208.8 316.4c2 .6 3 2 3 3.8 0 2.3-2.2 4-5 4-3 0-5.3-1.7-5.3-4 0-1.7 1-3.6 3-3.8l-.2-.4-.7-.7h1.2l.8.5.5-.7c.3-.4.6-.5.6-.5l.6.6.3.5.7-.4.8-.3s0 .4-.2.7l-.1.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#058e6e",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M206.3 326.7s-3.8-2.6-5.5-3c-2-.4-4.5 0-5.5 0 0 0 1.2.8 1.8 1.4.5.5 2.3 1.5 3.3 1.8 3 .8 6-.2 6-.2m1 .2s2.4-2.5 5-2.9c3-.4 5 .3 6.2.6l-1.5.8c-.5.3-2 1.5-4 1.6-2 0-4.4-.3-4.8-.2l-.9.1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M206.7 323.8a4.8 4.8 0 010-7.1 4.8 4.8 0 011.5 3.5 4.9 4.9 0 01-1.5 3.6"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#058e6e",
      stroke: "#000",
      strokeWidth: ".5",
      d: "M205.7 329s.6-1.5.6-2.7l-.1-2.1h.8s.3 1.1.3 2l-.1 2.4-.7.1-.8.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M254 190.7c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M254 190.7c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M255.4 188.2c0-.6.5-1 1.1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M255.4 188.2c0-.6.5-1 1.1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M256.4 185.2c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M256.4 185.2c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M256.5 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M256.5 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M255.7 179c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M255.7 179c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M254.1 176.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M254.1 176.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M252 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M252 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M249.4 171.8c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M249.4 171.8c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M246.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M246.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M243.3 169.1c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M243.3 169.1c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M239.9 168.5c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M239.9 168.5c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M236.6 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M236.6 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M233.3 168.5c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M233.3 168.5c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M230.1 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M230.1 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M231.7 171.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1m.6 3.1c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1m0 3c0-.5.6-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1m-1 2.8c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1 0 .6-.4 1-1 1a1 1 0 01-1-1m-1.9 2.6c0-.5.5-1 1-1 .7 0 1.2.5 1.2 1s-.5 1-1.1 1c-.6 0-1-.4-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M227.6 166.5c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M227.6 166.5c0-.5.5-1 1.1-1a1 1 0 010 2 1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M224.8 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M224.8 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M221.6 164c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.5 1-1 1-.6 0-1.1-.5-1.1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M221.6 164c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1 0 .5-.5 1-1 1-.6 0-1.1-.5-1.1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M218.3 163.4c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M218.3 163.4c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M215 163.5c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M215 163.5c0-.6.5-1 1.1-1 .6 0 1 .4 1 1 0 .5-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M211.7 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M211.7 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M208.6 165.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M208.6 165.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M156 190.7c0-.5.4-1 1-1s1 .5 1 1c0 .6-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M156 190.7c0-.5.4-1 1-1s1 .5 1 1c0 .6-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M154.5 188.2c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M154.5 188.2c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M153.5 185.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M153.5 185.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M153.4 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M153.4 182c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M154.2 179c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M154.2 179c0-.6.5-1 1-1 .6 0 1 .4 1 1s-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M155.8 176.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M155.8 176.1c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1s-.5 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M158 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M158 173.8c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M160.5 171.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M160.5 171.8c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M163.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M163.5 170.3c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M166.6 169.1c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M166.6 169.1c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M170 168.5c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M170 168.5c0-.5.5-1 1.1-1a1 1 0 010 2c-.6 0-1-.4-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M173.4 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M173.4 168.3c0-.5.4-1 1-1s1 .5 1 1-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M176.6 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M176.6 168.5c0-.6.5-1 1-1 .6 0 1.1.4 1.1 1s-.5 1-1 1a1 1 0 01-1.1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M179.8 168.5c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M179.8 168.5c0-.6.5-1 1-1 .7 0 1.2.4 1.2 1s-.5 1-1.1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M178.2 171.2c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1m-.7 3.1c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1m-.2 3c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1m.9 2.8c0-.5.5-1 1-1 .6 0 1.1.5 1.1 1 0 .6-.5 1-1 1a1 1 0 01-1.1-1m1.8 2.6c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M182.3 166.5c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M182.3 166.5c0-.5.5-1 1-1a1 1 0 010 2 1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M185.2 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M185.2 165c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M188.3 164c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1 0 .5-.4 1-1 1s-1-.5-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M188.3 164c0-.6.5-1 1-1 .7 0 1.1.4 1.1 1 0 .5-.4 1-1 1s-1-.5-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M191.6 163.4c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M191.6 163.4c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M194.9 163.5c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M194.9 163.5c0-.6.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M198.2 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M198.2 164c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#fff",
      d: "M201.3 165.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M201.3 165.1c0-.5.5-1 1-1 .7 0 1.1.5 1.1 1s-.4 1-1 1a1 1 0 01-1-1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M174.7 228.9h-1v-1h-1.5v3.6h1.6v2.5h-3.4v7h1.8v14.3h-3.5v7.3h27.2v-7.3h-3.5V241h1.8v-7h-3.4v-2.5h1.6V228h-1.6v.9h-.8v-1h-1.6v1h-1.1v-1h-1.6v3.6h1.6v2.5H184v-7.8h1.7v-3.5H184v.9h-1v-1h-1.5v1h-.9v-1H179v3.6h1.7v7.8h-3.3v-2.5h1.6V228h-1.6v.9h-.9v-1h-1.8v1zm-6 33.7H196m-27.3-1.8H196m-27.3-1.8H196m-27.3-1.7H196m-27.3-2H196m-23.8-1.6h20.2m-20.2-1.8h20.2m-20.2-2h20.2m-20.2-1.7h20.2m-20.2-1.8h20.2m-20.2-1.8h20.2m-20.2-1.7h20.2m-22-1.8h23.8m-23.8-1.8h23.8m-23.8-1.8h23.8m-23.8-1.8h23.8m-20.4-1.7h17m-10.2-1.8h3.4m-3.4-1.8h3.4m-3.4-1.8h3.4m-3.4-1.7h3.4m-5.1-2.2h6.8m-12 7.5h3.6m-5-2.2h6.6m-6.7 32.6v-1.8m0-1.8v-1.7m-1.8 1.7v1.8m3.4 0V259m1.7 3.6v-1.8m0-1.8v-1.7m0-2v-1.6m0-1.8v-2m-1.7 7.4v-2m-3.4 2v-2m7 0v2m1.5-2v-1.6m-5.1-1.8v1.8m3.5-1.8v1.8m3.3-1.8v1.8M179 252v-2m1.7-1.7v1.7m0-5.3v1.8m-1.7-3.6v1.8m1.7-3.5v1.7m-3.3-1.7v1.7m-3.5-1.7v1.7m-1.6-3.5v1.8m3.3-1.8v1.8m3.4-1.8v1.8m1.7-3.6v1.8m-3.3-1.8v1.8m-3.5-1.8v1.8m-1.6-3.6v1.8m6.7-1.8v1.8m-3.4-5.3v1.8m15.3-1.8h-3.5m5-2.2h-6.6m6.7 32.6v-1.8m0-1.8v-1.7m1.8 1.7v1.8m-3.4 0V259m-1.7 3.6v-1.8m0-1.8v-1.7m0-2v-1.6m0-1.8v-2m1.7 7.4v-2m3.4 2v-2m-7 0v2m-1.5-2v-1.6m5.1-1.8v1.8m-3.5-1.8v1.8m-3.3-1.8v1.8m1.7-1.8v-2m-1.7-1.7v1.7m0-5.3v1.8m1.7-3.6v1.8m-1.7-3.5v1.7m3.3-1.7v1.7m3.5-1.7v1.7m1.6-3.5v1.8m-3.3-1.8v1.8m-3.4-1.8v1.8m-1.7-3.6v1.8m3.3-1.8v1.8m3.5-1.8v1.8m1.6-3.6v1.8m-6.7-1.8v1.8m3.4-5.3v1.8m-7 18v-2m0-5.4v-1.8m0 5.4v-1.8m0-5.3v-1.8m0-1.8v-1.7m0-3.6v-1.8m0-1.7v-1.8m-8.3 4.6h3.5m3.3-5.3h3.4m3.3 5.3h3.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M186.8 262.6v-4.7c0-.8-.4-3.5-4.6-3.5-4 0-4.4 2.7-4.4 3.5v4.7h9z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      stroke: "#000",
      strokeWidth: ".4",
      d: "M179.3 258.2l-2.2-.3c0-.9.2-2.2.9-2.6l2 1.5c-.3.2-.7 1-.7 1.4zm6 0l2.2-.3c0-.9-.2-2.2-.9-2.6l-2 1.5c.3.2.7 1 .7 1.4zm-2.2-2.3l1-2a5.3 5.3 0 00-2-.4l-1.7.4 1.1 2h1.6zm-4.2-5.5v-4.9c0-1.3-1-2.4-2.5-2.4s-2.4 1-2.4 2.4v4.9h4.9zm6.8 0v-4.9c0-1.3 1-2.4 2.5-2.4s2.4 1 2.4 2.4v4.9h-4.9zm-1.7-12l.4-4.4h-4.2l.2 4.4h3.6zm3.3 0l-.4-4.4h4.4l-.5 4.4h-3.5zm-10 0l.2-4.4h-4.2l.5 4.4h3.5z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#0039f0",
      d: "M185.3 262.6v-4c0-.7-.5-2.7-3.1-2.7-2.4 0-2.9 2-2.9 2.7v4h6zm-6.9-12.7v-4.2c0-1-.6-2.2-2-2.2s-2 1.1-2 2.2v4.3h4zm7.8 0v-4.2c0-1 .7-2.2 2-2.2s2 1.1 2 2.2v4.3h-4z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#ad1519",
      d: "M190.8 269.8c0-9.7 7-17.6 15.6-17.6s15.6 7.9 15.6 17.6-7 17.5-15.6 17.5-15.6-7.8-15.6-17.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".6",
      d: "M190.8 269.8c0-9.7 7-17.6 15.6-17.6s15.6 7.9 15.6 17.6-7 17.5-15.6 17.5-15.6-7.8-15.6-17.5z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#005bbf",
      d: "M195.4 269.7c0-7 5-12.8 11-12.8s11 5.7 11 12.8c0 7.2-5 13-11 13s-11-5.8-11-13"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".6",
      d: "M195.4 269.7c0-7 5-12.8 11-12.8s11 5.7 11 12.8c0 7.2-5 13-11 13s-11-5.8-11-13z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M201.2 260.9s-1.3 1.4-1.3 2.7a6 6 0 00.6 2.4c-.2-.5-.8-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.1-.3.5-.5 1-.5s1 .4 1 1a.9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.7 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".3",
      d: "M201.2 260.9s-1.3 1.4-1.3 2.7a6 6 0 00.6 2.4c-.2-.5-.8-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.1-.3.5-.5 1-.5s1 .4 1 1a.9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.7 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M199.2 269.9h4.1v-1h-4.1v1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M199.2 269.9h4.1v-1h-4.1v1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M211.4 260.9s-1.3 1.4-1.3 2.7c0 1.3.6 2.4.6 2.4-.2-.5-.7-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.2-.3.5-.5 1-.5a1 1 0 011 1 .9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.8.8 0 010-.3 1 1 0 011-1c.4 0 .8.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.6 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".3",
      d: "M211.4 260.9s-1.3 1.4-1.3 2.7c0 1.3.6 2.4.6 2.4-.2-.5-.7-.8-1.4-.8-.8 0-1.4.6-1.4 1.3l.2.8.5.9c.2-.3.5-.5 1-.5a1 1 0 011 1 .9.9 0 010 .2h-1.2v1h1l-.8 1.5 1-.4.8.9.8-.9 1 .4-.7-1.5h1v-1h-1.1a.8.8 0 010-.3 1 1 0 011-1c.4 0 .8.3 1 .6l.4-1 .2-.7a1.4 1.4 0 00-1.4-1.3c-.6 0-1.2.3-1.4.9 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M209.4 269.9h4.1v-1h-4.1v1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M209.4 269.9h4.1v-1h-4.1v1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M206.3 269.6s-1.3 1.5-1.3 2.8.6 2.4.6 2.4c-.2-.5-.7-.9-1.4-.9-.8 0-1.4.6-1.4 1.4l.2.7.5 1c.1-.4.5-.6 1-.6a1 1 0 011 1 .9.9 0 010 .3h-1.2v1h1l-.8 1.5 1-.4.8.9.8-1 1 .5-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.2.9.6l.5-1 .2-.7a1.4 1.4 0 00-1.4-1.4c-.7 0-1.2.4-1.4 1 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeLinejoin: "round",
      strokeWidth: ".3",
      d: "M206.3 269.6s-1.3 1.5-1.3 2.8.6 2.4.6 2.4c-.2-.5-.7-.9-1.4-.9-.8 0-1.4.6-1.4 1.4l.2.7.5 1c.1-.4.5-.6 1-.6a1 1 0 011 1 .9.9 0 010 .3h-1.2v1h1l-.8 1.5 1-.4.8.9.8-1 1 .5-.7-1.5h1v-1h-1.1a.9.9 0 010-.3 1 1 0 011-1c.4 0 .7.2.9.6l.5-1 .2-.7a1.4 1.4 0 00-1.4-1.4c-.7 0-1.2.4-1.4 1 0 0 .6-1.2.6-2.5s-1.4-2.7-1.4-2.7z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M204.3 278.6h4.1v-1h-4.1v1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M204.3 278.6h4.1v-1h-4.1v1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M237.6 223.4h-.3a1.5 1.5 0 01-.3.4c-.2.2-.6.2-.8 0a.5.5 0 01-.1-.4.5.5 0 01-.5 0c-.3-.1-.3-.5-.1-.7v-.5h-.3l-.1.2c-.2.3-.5.3-.7.2a.6.6 0 010-.2h-.3c-.5.2-.7-1-.7-1.2l-.2.2s.2.7.1 1.2c0 .6-.3 1.2-.3 1.2a9 9 0 012.9 1.6 9 9 0 012.2 2.3l1.2-.5c.6-.2 1.3-.2 1.3-.2l.2-.2c-.3 0-1.5.1-1.5-.4v-.2a.7.7 0 01-.2 0c-.2-.2-.2-.4 0-.7l.2-.1v-.3h-.3l-.2.1c-.2.3-.6.3-.8 0a.4.4 0 01-.1-.4.6.6 0 01-.5 0c-.2-.2-.3-.5 0-.8l.2-.3v-.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M237.6 223.4h-.3a1.5 1.5 0 01-.3.4c-.2.2-.6.2-.8 0a.5.5 0 01-.1-.4.5.5 0 01-.5 0c-.3-.1-.3-.5-.1-.7v-.5h-.3l-.1.2c-.2.3-.5.3-.7.2a.6.6 0 010-.2h-.3c-.5.2-.7-1-.7-1.2l-.2.2s.2.7.1 1.2c0 .6-.3 1.2-.3 1.2a9 9 0 012.9 1.6 9 9 0 012.2 2.3l1.2-.5c.6-.2 1.3-.2 1.3-.2l.2-.2c-.3 0-1.5.1-1.5-.4v-.2a.7.7 0 01-.2 0c-.2-.2-.2-.4 0-.7l.2-.1v-.3h-.3l-.2.1c-.2.3-.6.3-.8 0a.4.4 0 01-.1-.4.6.6 0 01-.5 0c-.2-.2-.3-.5 0-.8l.2-.3v-.3z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M235.4 224h.2v.3h-.1c-.1 0-.1-.2 0-.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M235.4 224h.2v.3h-.1c-.1 0-.1-.2 0-.2z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M236.3 224.8l-.3-.2v-.2h.1l.4.3.3.2v.2h-.2l-.3-.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M236.3 224.8l-.3-.2v-.2h.1l.4.3.3.2v.2h-.2l-.3-.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M234.6 223.7l-.2-.2s-.1 0 0-.1l.3.1.3.1v.2h-.1l-.3-.1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M234.6 223.7l-.2-.2s-.1 0 0-.1l.3.1.3.1v.2h-.1l-.3-.1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M233.7 223h.2v.2h-.2s-.1-.1 0-.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M233.7 223h.2v.2h-.2s-.1-.1 0-.2z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M237.3 225.5v-.2h-.3l.1.2h.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M237.3 225.5v-.2h-.3l.1.2h.2z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M237.9 226.2l.2.2h.1c.1 0 0-.1 0-.2l-.2-.2-.2-.2h-.1v.2l.2.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M237.9 226.2l.2.2h.1c.1 0 0-.1 0-.2l-.2-.2-.2-.2h-.1v.2l.2.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M238.8 227v-.3h-.3v.2h.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M238.8 227v-.3h-.3v.2h.3z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M236.2 221.1h-.6l-.1.9v.1h.2l.7-.5-.3-.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M236.2 221.1h-.6l-.1.9v.1h.2l.7-.5-.3-.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M234.6 221.6v.5l.9.1h.1v-.2l-.5-.7-.5.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M234.6 221.6v.5l.9.1h.1v-.2l-.5-.7-.5.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M236.4 222.6l-.4.3-.6-.7v-.1h1.1v.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M236.4 222.6l-.4.3-.6-.7v-.1h1.1v.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M235.3 222a.3.3 0 01.4 0 .3.3 0 010 .3.3.3 0 01-.3 0 .3.3 0 01-.1-.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M235.3 222a.3.3 0 01.4 0 .3.3 0 010 .3.3.3 0 01-.3 0 .3.3 0 01-.1-.3z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M233.2 221.1l-.2-.7-.4-.4s.4-.2.8.1c.4.3 0 .9 0 .9l-.2.1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M233.2 221.1l-.2-.7-.4-.4s.4-.2.8.1c.4.3 0 .9 0 .9l-.2.1z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M234.2 221.4l-.4.4-.6-.6v-.2h1v.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M234.2 221.4l-.4.4-.6-.6v-.2h1v.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M233.1 221l.3-.1v.3c0 .2-.1.2-.2.2l-.1-.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M233.1 221l.3-.1v.3c0 .2-.1.2-.2.2l-.1-.3z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M238.3 222.5h-.5l-.3.7v.2h.2l.8-.4-.2-.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M238.3 222.5h-.5l-.3.7v.2h.2l.8-.4-.2-.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M236.7 222.8v.5l.8.2h.1v-.2l-.4-.7-.5.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M236.7 222.8v.5l.8.2h.1v-.2l-.4-.7-.5.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M238.4 224l-.5.2-.4-.7v-.2h.1l.9.2-.1.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M238.4 224l-.5.2-.4-.7v-.2h.1l.9.2-.1.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M237.3 223.2h.4a.3.3 0 010 .4.3.3 0 01-.3 0 .3.3 0 010-.4"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M237.3 223.2h.4a.3.3 0 010 .4.3.3 0 01-.3 0 .3.3 0 010-.4z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M240.2 224.3l.1.5-.8.3h-.2v-.2l.4-.8.5.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M240.2 224.3l.1.5-.8.3h-.2v-.2l.4-.8.5.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M240 225.8l-.5.1-.3-.8v-.1h.2l.8.3-.1.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M240 225.8l-.5.1-.3-.8v-.1h.2l.8.3-.1.5"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M238.6 224.3l-.2.5.9.3h.1v-.1l-.3-.8-.5.1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M238.6 224.3l-.2.5.9.3h.1v-.1l-.3-.8-.5.1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M239.5 225.2a.3.3 0 000-.3.3.3 0 00-.4 0 .3.3 0 000 .3.3.3 0 00.4 0"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M239.5 225.2a.3.3 0 000-.3.3.3 0 00-.4 0 .3.3 0 000 .3.3.3 0 00.4 0z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M240.8 227h.8l.5.3s.1-.4-.3-.7c-.3-.3-.8.2-.8.2l-.2.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M240.8 227h.8l.5.3s.1-.4-.3-.7c-.3-.3-.8.2-.8.2l-.2.2z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M240.3 226.1l-.3.5.8.5v-.1h.2l-.1-1-.6.1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M240.3 226.1l-.3.5.8.5v-.1h.2l-.1-1-.6.1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "#c8b100",
      d: "M241 227s.1-.1 0-.2h-.3c-.2 0-.2.1-.1.2h.3"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".3",
      d: "M241 227s.1-.1 0-.2h-.3c-.2 0-.2.1-.1.2h.3zm38-21.9v.6h-2.4v-.6h1v-1.3h-.7v-.5h.6v-.6h.6v.6h.6v.6h-.6v1.2h1"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "0",
      d: "M134.4 217.1v-1.2m-.4 1.2v-1.2m-.2 1.2v-1.2m-.3 1.2v-1.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M133.2 217.1v-1.2m-.5 1.1v-1m.2 1v-1m-.7 1v-1m.2 1v-1m-.9 1v-1m.2 1v-1m.3 1v-1m-.7 1v-1m-.3.9v-.8m-.1.8v-.8m-.5.7v-.6m.2.6v-.6m-.4.5v-.5m-.2.5v-.4m-.3.3v-.3m-.3.3v-.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".2",
      d: "M129.2 216.6v-.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "0",
      d: "M135.7 217v-1m-.5 1v-1m-.4 1.2V216m143 1.1V216m-.4 1.1V216m-.3 1.1V216m-.3 1.2V216"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".1",
      d: "M276.6 217.1V216m-.6 1v-1m.3 1v-1m-.8 1v-1m.3 1v-1m-.9 1v-1m.2 1v-1m.2 1v-1m-.6 1v-1m-.3.9v-.8m-.2.8v-.8m-.4.7v-.6m.2.6v-.6m-.5.6v-.6m-.2.5v-.4m-.3.4v-.4m-.2.3v-.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: ".2",
      d: "M272.6 216.6v-.2"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      fill: "none",
      stroke: "#000",
      strokeWidth: "0",
      d: "M279.1 217v-1m-.6 1v-1m-.4 1.1V216"
    })]
  });
};
;// CONCATENATED MODULE: ./src/settings/site-settings.tsx







const siteSettings = {
  name: "Joolux",
  description: "Sàn mua bán và ký gửi đồ hiệu, hàng hiệu chính hãng mới cũ chuyên nghiệp. Mua bán chuyên nghiệp phí tốt, an toàn. Dịch vụ nhanh chóng đảm bảo.",
  author: {
    name: "Webdev Studios",
    websiteUrl: "https://joolux-client.ml",
    address: ""
  },
  logo: {
    url: "/assets/images/logo.svg",
    alt: "Webdev",
    href: "/",
    width: 95,
    height: 30
  },
  defaultLanguage: "en",
  currencyCode: "USD",
  site_header: {
    menu: [{
      id: 1,
      path: "/hang-moi-ve",
      label: "Hàng mới về",
      menuImage: "https://joolux.com/img/menu/mega-1.jpg",
      menuImageUrl: "/hang-moi-ve",
      numOfCols: 5,
      columns: [{
        id: 1,
        columnItems: [{
          id: 1,
          path: "/hang-moi-ve",
          label: "Thương hiệu",
          columnItemItems: [{
            id: 1,
            path: "/hang-moi-ve?brands=Louis+Vuitton",
            label: "Louis Vuitton"
          }, {
            id: 2,
            path: "/hang-moi-ve?brands=Gucci",
            label: "Gucci"
          }, {
            id: 3,
            path: "/hang-moi-ve?brands=Chanel",
            label: "Chanel"
          }, {
            id: 4,
            path: "/hang-moi-ve?brands=Prada",
            label: "Prada"
          }, {
            id: 5,
            path: "/hang-moi-ve?brands=Burberry",
            label: "Burberry"
          }, {
            id: 6,
            path: "/hang-moi-ve?brands=Bottega+Veneta",
            label: "Bottega Veneta"
          }, {
            id: 7,
            path: "/hang-moi-ve?brands=Balenciaga",
            label: "Balenciaga"
          }, {
            id: 8,
            path: "/hang-moi-ve?brands=Dior",
            label: "Dior"
          }, {
            id: 9,
            path: "/hang-moi-ve?brands=Saint+Laurent",
            label: "Saint Laurent"
          }, {
            id: 10,
            path: "/hang-moi-ve?brands=Fendi",
            label: "Fendi"
          }, {
            id: 11,
            path: "/hang-moi-ve?brands=Celine",
            label: "Celine"
          }, {
            id: 12,
            path: "/brands",
            bold: true,
            label: "Xem tất cả"
          }]
        }]
      }, {
        id: 2,
        columnItems: [{
          id: 1,
          path: "/hang-moi-ve?genders=Nam",
          label: "Nam",
          columnItemItems: [{
            id: 1,
            path: "/hang-moi-ve?genders=Nam",
            bold: true,
            label: "Tất cả"
          }, {
            id: 2,
            path: "/categories/tui-xach?genders=Nam",
            label: "Túi xách"
          }, {
            id: 3,
            path: "/categories/giay-sneaker?genders=Nam",
            label: "Giày & Sneaker"
          }, {
            id: 4,
            path: "/categories/dong-ho-cao-cap?genders=Nam",
            label: "Đồng hồ"
          }, {
            id: 5,
            path: "/categories/phu-kien?genders=Nam",
            label: "Phụ kiện"
          }]
        }]
      }, {
        id: 3,
        columnItems: [{
          id: 1,
          path: "/hang-moi-ve?genders=Nữ",
          label: "Nữ",
          columnItemItems: [{
            id: 1,
            path: "/hang-moi-ve?genders=Nữ",
            bold: true,
            label: "Tất cả"
          }, {
            id: 2,
            path: "/categories/tui-xach?genders=Nữ",
            label: "Túi xách"
          }, {
            id: 3,
            path: "/categories/giay-sneaker?genders=Nữ",
            label: "Giày & Sneaker"
          }, {
            id: 4,
            path: "/categories/dong-ho-cao-cap?genders=Nữ",
            label: "Đồng hồ"
          }, {
            id: 5,
            path: "/categories/phu-kien?genders=Nữ",
            label: "Phụ kiện"
          }]
        }]
      }]
    }, {
      id: 2,
      path: "/dich-vu",
      label: "Dịch vụ khác",
      subMenu: [{
        id: 1,
        path: "/dich-vu/kiem-dinh-hang-hieu",
        label: "Kiểm định hàng hiệu"
      }, {
        id: 2,
        path: "/dich-vu/cham-soc-hang-hieu",
        label: "Chăm sóc và chế tác hàng hiệu"
      }, {
        id: 3,
        path: "/minimal",
        label: "Cho thuê hàng hiệu (upcoming)"
      }]
    }, {
      id: 3,
      path: "/hang-moi-ve",
      label: "Thương hiệu",
      menuImage: "https://joolux.com/img/menu/mega-1.jpg",
      menuImageUrl: "/hang-moi-ve",
      numOfCols: 4,
      columns: [{
        id: 1,
        columnItems: [{
          id: 1,
          path: "/hang-moi-ve",
          label: "Thương hiệu nổi tiếng",
          columnItemItems: [{
            id: 1,
            path: "/hang-moi-ve?brands=Louis+Vuitton",
            label: "Louis Vuitton"
          }, {
            id: 2,
            path: "/hang-moi-ve?brands=Gucci",
            label: "Gucci"
          }, {
            id: 3,
            path: "/hang-moi-ve?brands=Chanel",
            label: "Chanel"
          }, {
            id: 4,
            path: "/hang-moi-ve?brands=Prada",
            label: "Prada"
          }, {
            id: 5,
            path: "/hang-moi-ve?brands=Burberry",
            label: "Burberry"
          }, {
            id: 6,
            path: "/hang-moi-ve?brands=Bottega+Veneta",
            label: "Bottega Veneta"
          }, {
            id: 7,
            path: "/hang-moi-ve?brands=Balenciaga",
            label: "Balenciaga"
          }, {
            id: 8,
            path: "/hang-moi-ve?brands=Dior",
            label: "Dior"
          }]
        }]
      }, {
        id: 2,
        columnItems: [{
          id: 1,
          path: "/hang-moi-ve",
          label: "",
          columnItemItems: [{
            id: 1,
            path: "/hang-moi-ve?brands=Goyard",
            label: "Goyard"
          }, {
            id: 2,
            path: "/hang-moi-ve?brands=Saint+Laurent",
            label: "Saint Laurent"
          }, {
            id: 3,
            path: "/hang-moi-ve?brands=Fendi",
            label: "Fendi"
          }, {
            id: 4,
            path: "/hang-moi-ve?brands=Celine",
            label: "Celine"
          }, {
            id: 5,
            path: "/hang-moi-ve?brands=Longines",
            label: "Longines"
          }, {
            id: 6,
            path: "/hang-moi-ve?brands=Chloé",
            label: "Chloé"
          }, {
            id: 7,
            path: "/hang-moi-ve?brands=Alexander+McQueen",
            label: "Alexander McQueen"
          }, {
            id: 8,
            path: "/brands",
            bold: true,
            label: "Xem tất cả"
          }]
        }]
      }]
    }, {
      id: 4,
      path: "/hang-moi-ve?genders=Nam",
      label: "Nam",
      menuImage: "https://joolux.com/img/menu/mega-1.jpg",
      menuImageUrl: "/hang-moi-ve?genders=Nam",
      numOfCols: 4,
      columns: [{
        id: 1,
        columnItems: [{
          id: 1,
          path: "/hang-moi-ve?genders=Nam",
          label: "Thương hiệu",
          columnItemItems: [{
            id: 1,
            path: "/hang-moi-ve?brands=Louis+Vuitton&genders=Nam",
            label: "Louis Vuitton"
          }, {
            id: 2,
            path: "/hang-moi-ve?brands=Gucci&genders=Nam",
            label: "Gucci"
          }, {
            id: 3,
            path: "/hang-moi-ve?brands=Chanel&genders=Nam",
            label: "Chanel"
          }, {
            id: 4,
            path: "/hang-moi-ve?brands=Prada&genders=Nam",
            label: "Prada"
          }, {
            id: 5,
            path: "/hang-moi-ve?brands=Burberry&genders=Nam",
            label: "Burberry"
          }, {
            id: 6,
            path: "/hang-moi-ve?brands=Bottega+Veneta&genders=Nam",
            label: "Bottega Veneta"
          }, {
            id: 7,
            path: "/hang-moi-ve?brands=Balenciaga&genders=Nam",
            label: "Balenciaga"
          }, {
            id: 8,
            path: "/hang-moi-ve?brands=Dior&genders=Nam",
            label: "Dior"
          }, {
            id: 9,
            path: "/hang-moi-ve?brands=Saint+Laurent&genders=Nam",
            label: "Saint Laurent"
          }, {
            id: 10,
            path: "/hang-moi-ve?brands=Fendi&genders=Nam",
            label: "Fendi"
          }, {
            id: 11,
            path: "/hang-moi-ve?brands=Celine&genders=Nam",
            label: "Celine"
          }, {
            id: 12,
            path: "/brands",
            bold: true,
            label: "Xem tất cả"
          }]
        }]
      }, {
        id: 2,
        columnItems: [{
          id: 1,
          path: "/hang-moi-ve?genders=Nam",
          label: "Danh mục",
          columnItemItems: [{
            id: 1,
            path: "/hang-moi-ve?genders=Nam",
            bold: true,
            label: "Tất cả"
          }, {
            id: 2,
            path: "/categories/tui-xach?genders=Nam",
            label: "Túi xách"
          }, {
            id: 3,
            path: "/categories/giay-sneaker?genders=Nam",
            label: "Giày & Sneaker"
          }, {
            id: 4,
            path: "/categories/dong-ho-cao-cap?genders=Nam",
            label: "Đồng hồ"
          }, {
            id: 5,
            path: "/categories/phu-kien?genders=Nam",
            label: "Phụ kiện"
          }]
        }]
      }]
    }, {
      id: 5,
      path: "/hang-moi-ve?genders=Nữ",
      label: "Nữ",
      menuImage: "https://joolux.com/img/menu/mega-1.jpg",
      menuImageUrl: "/hang-moi-ve?genders=Nữ",
      numOfCols: 4,
      columns: [{
        id: 1,
        columnItems: [{
          id: 1,
          path: "/hang-moi-ve?genders=Nữ",
          label: "Thương hiệu",
          columnItemItems: [{
            id: 1,
            path: "/hang-moi-ve?brands=Louis+Vuitton&genders=Nữ",
            label: "Louis Vuitton"
          }, {
            id: 2,
            path: "/hang-moi-ve?brands=Gucci&genders=Nữ",
            label: "Gucci"
          }, {
            id: 3,
            path: "/hang-moi-ve?brands=Chanel&genders=Nữ",
            label: "Chanel"
          }, {
            id: 4,
            path: "/hang-moi-ve?brands=Prada&genders=Nữ",
            label: "Prada"
          }, {
            id: 5,
            path: "/hang-moi-ve?brands=Burberry&genders=Nữ",
            label: "Burberry"
          }, {
            id: 6,
            path: "/hang-moi-ve?brands=Bottega+Veneta&genders=Nữ",
            label: "Bottega Veneta"
          }, {
            id: 7,
            path: "/hang-moi-ve?brands=Balenciaga&genders=Nữ",
            label: "Balenciaga"
          }, {
            id: 8,
            path: "/hang-moi-ve?brands=Dior&genders=Nữ",
            label: "Dior"
          }, {
            id: 9,
            path: "/hang-moi-ve?brands=Saint+Laurent&genders=Nữ",
            label: "Saint Laurent"
          }, {
            id: 10,
            path: "/hang-moi-ve?brands=Fendi&genders=Nữ",
            label: "Fendi"
          }, {
            id: 11,
            path: "/hang-moi-ve?brands=Celine&genders=Nữ",
            label: "Celine"
          }, {
            id: 12,
            path: "/brands",
            bold: true,
            label: "Xem tất cả"
          }]
        }]
      }, {
        id: 2,
        columnItems: [{
          id: 1,
          path: "/hang-moi-ve?genders=Nữ",
          label: "Danh mục",
          columnItemItems: [{
            id: 1,
            path: "/hang-moi-ve?genders=Nữ",
            bold: true,
            label: "Tất cả"
          }, {
            id: 2,
            path: "/categories/tui-xach?genders=Nữ",
            label: "Túi xách"
          }, {
            id: 3,
            path: "/categories/giay-sneaker?genders=Nữ",
            label: "Giày & Sneaker"
          }, {
            id: 4,
            path: "/categories/dong-ho-cao-cap?genders=Nữ",
            label: "Đồng hồ"
          }, {
            id: 5,
            path: "/categories/phu-kien?genders=Nữ",
            label: "Phụ kiện"
          }]
        }]
      }]
    }, {
      id: 6,
      path: "/categories/tui-xach",
      label: "Túi xách",
      menuImage: "https://joolux.com/img/menu/mega-2.jpg",
      menuImageUrl: "/categories/tui-xach",
      numOfCols: 5,
      columns: [{
        id: 1,
        columnItems: [{
          id: 1,
          path: "/categories/tui-xach",
          label: "Thương hiệu",
          columnItemItems: [{
            id: 1,
            path: "/categories/tui-xach?brands=Louis+Vuitton",
            label: "Louis Vuitton"
          }, {
            id: 2,
            path: "/categories/tui-xach?brands=Gucci",
            label: "Gucci"
          }, {
            id: 3,
            path: "/categories/tui-xach?brands=Chanel",
            label: "Chanel"
          }, {
            id: 4,
            path: "/categories/tui-xach?brands=Prada",
            label: "Prada"
          }, {
            id: 5,
            path: "/categories/tui-xach?brands=Burberry",
            label: "Burberry"
          }, {
            id: 6,
            path: "/categories/tui-xach?brands=Bottega+Veneta",
            label: "Bottega Veneta"
          }, {
            id: 7,
            path: "/categories/tui-xach?brands=Balenciaga",
            label: "Balenciaga"
          }, {
            id: 8,
            path: "/categories/tui-xach?brands=Dior",
            label: "Dior"
          }, {
            id: 9,
            path: "/categories/tui-xach?brands=Saint+Laurent",
            label: "Saint Laurent"
          }, {
            id: 10,
            path: "/categories/tui-xach?brands=Fendi",
            label: "Fendi"
          }, {
            id: 11,
            path: "/categories/tui-xach?brands=Celine",
            label: "Celine"
          }, {
            id: 12,
            path: "/categories/tui-xach",
            bold: true,
            label: "Xem tất cả"
          }]
        }]
      }, {
        id: 2,
        columnItems: [{
          id: 1,
          path: "/categories/tui-xach?genders=Nam",
          label: "Nam",
          columnItemItems: [{
            id: 1,
            path: "/categories/tui-xach?genders=Nam",
            bold: true,
            label: "Tất cả"
          }, {
            id: 2,
            path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Đeo+Chéo",
            label: "Túi Đeo Chéo"
          }, {
            id: 3,
            path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Xách+Tay",
            label: "Túi Xách Tay"
          }, {
            id: 4,
            path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Đeo+Hông",
            label: "Túi Đeo Hông"
          }, {
            id: 5,
            path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Đeo+Vai",
            label: "Túi Đeo Vai"
          }, {
            id: 6,
            path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Clutch",
            label: "Túi Clutch"
          }, {
            id: 7,
            path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Tote",
            label: "Túi Tote"
          }, {
            id: 8,
            path: "/categories/tui-xach?genders=Nam&subCategory=Ví",
            label: "Ví"
          }, {
            id: 9,
            path: "/categories/tui-xach?genders=Nam&subCategory=Cặp+Hồ+Sơ",
            label: "Cặp Hồ Sơ"
          }, {
            id: 10,
            path: "/categories/tui-xach?genders=Nam&subCategory=Ba+Lô",
            label: "Ba Lô"
          }, {
            id: 11,
            path: "/categories/tui-xach?genders=Nam&subCategory=Vali",
            label: "Vali"
          }, {
            id: 12,
            path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Du+Lịch",
            label: "Túi Du Lịch"
          }]
        }]
      }, {
        id: 3,
        columnItems: [{
          id: 1,
          path: "/categories/tui-xach?genders=Nữ",
          label: "Nữ",
          columnItemItems: [{
            id: 1,
            path: "/categories/tui-xach?genders=Nữ",
            bold: true,
            label: "Tất cả"
          }, {
            id: 2,
            path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Đeo+Chéo",
            label: "Túi Đeo Chéo"
          }, {
            id: 3,
            path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Xách+Tay",
            label: "Túi Xách Tay"
          }, {
            id: 4,
            path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Đeo+Hông",
            label: "Túi Đeo Hông"
          }, {
            id: 5,
            path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Đeo+Vai",
            label: "Túi Đeo Vai"
          }, {
            id: 6,
            path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Clutch",
            label: "Túi Clutch"
          }, {
            id: 7,
            path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Tote",
            label: "Túi Tote"
          }, {
            id: 8,
            path: "/categories/tui-xach?genders=Nữ&subCategory=Ví",
            label: "Ví"
          }, {
            id: 9,
            path: "/categories/tui-xach?genders=Nữ&subCategory=Ba+Lô",
            label: "Ba Lô"
          }, {
            id: 10,
            path: "/categories/tui-xach?genders=Nữ&subCategory=Vali",
            label: "Vali"
          }, {
            id: 11,
            path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Du+Lịch",
            label: "Túi Du Lịch"
          }]
        }]
      }]
    }, {
      id: 7,
      path: "/categories/giay-sneaker",
      label: "GIÀY & SNEAKER",
      menuImage: "https://joolux.com/img/menu/mega-3.jpg",
      menuImageUrl: "/categories/giay-sneaker",
      numOfCols: 5,
      columns: [{
        id: 1,
        columnItems: [{
          id: 1,
          path: "/categories/giay-sneaker",
          label: "Thương hiệu",
          columnItemItems: [{
            id: 1,
            path: "/categories/giay-sneaker?brands=Louis+Vuitton",
            label: "Louis Vuitton"
          }, {
            id: 2,
            path: "/categories/giay-sneaker?brands=Gucci",
            label: "Gucci"
          }, {
            id: 3,
            path: "/categories/giay-sneaker?brands=Chanel",
            label: "Chanel"
          }, {
            id: 4,
            path: "/categories/giay-sneaker?brands=Prada",
            label: "Prada"
          }, {
            id: 5,
            path: "/categories/giay-sneaker?brands=Burberry",
            label: "Burberry"
          }, {
            id: 6,
            path: "/categories/giay-sneaker?brands=Bottega+Veneta",
            label: "Bottega Veneta"
          }, {
            id: 7,
            path: "/categories/giay-sneaker?brands=Balenciaga",
            label: "Balenciaga"
          }, {
            id: 8,
            path: "/categories/giay-sneaker?brands=Dior",
            label: "Dior"
          }, {
            id: 9,
            path: "/categories/giay-sneaker?brands=Saint+Laurent",
            label: "Saint Laurent"
          }, {
            id: 10,
            path: "/categories/giay-sneaker?brands=Fendi",
            label: "Fendi"
          }, {
            id: 11,
            path: "/categories/giay-sneaker?brands=Celine",
            label: "Celine"
          }, {
            id: 12,
            path: "/categories/giay-sneaker",
            bold: true,
            label: "Xem tất cả"
          }]
        }]
      }, {
        id: 2,
        columnItems: [{
          id: 1,
          path: "/categories/giay-sneaker?genders=Nam",
          label: "Nam",
          columnItemItems: [{
            id: 1,
            path: "/categories/giay-sneaker?genders=Nam",
            bold: true,
            label: "Tất cả"
          }, {
            id: 2,
            path: "/categories/giay-sneaker?genders=Nam&subCategory=Sneaker",
            label: "Sneaker"
          }, {
            id: 3,
            path: "/categories/giay-sneaker?genders=Nam&subCategory=Dép",
            label: "Dép"
          }, {
            id: 4,
            path: "/categories/giay-sneaker?genders=Nam&subCategory=Sandal",
            label: "Sandal"
          }, {
            id: 5,
            path: "/categories/giay-sneaker?genders=Nam&subCategory=Giày+Loafer",
            label: "Giày Loafer"
          }, {
            id: 6,
            path: "/categories/giay-sneaker?genders=Nam&subCategory=Giày+Tây",
            label: "Giày Tây"
          }]
        }]
      }, {
        id: 3,
        columnItems: [{
          id: 1,
          path: "/categories/giay-sneaker?genders=Nữ",
          label: "Nữ",
          columnItemItems: [{
            id: 1,
            path: "/categories/giay-sneaker?genders=Nữ",
            bold: true,
            label: "Tất cả"
          }, {
            id: 2,
            path: "/categories/giay-sneaker?genders=Nữ&subCategory=Sneaker",
            label: "Sneaker"
          }, {
            id: 3,
            path: "/categories/giay-sneaker?genders=Nữ&subCategory=Dép",
            label: "Dép"
          }, {
            id: 4,
            path: "/categories/giay-sneaker?genders=Nữ&subCategory=Giày+Boots",
            label: "Giày Boots"
          }, {
            id: 5,
            path: "/categories/giay-sneaker?genders=Nữ&subCategory=Giày+Cao+Gót",
            label: "Giày Cao Gót"
          }, {
            id: 6,
            path: "/categories/giay-sneaker?genders=Nữ&subCategory=Giày+Búp+Bê",
            label: "Giày Búp Bê"
          }, {
            id: 7,
            path: "/categories/giay-sneaker?genders=Nữ&subCategory=Giày+Sandal",
            label: "Sandal"
          }, {
            id: 8,
            path: "/categories/giay-sneaker?genders=Nữ&subCategory=Giày+Loafer",
            label: "Giày Loafer"
          }]
        }]
      }]
    }, {
      id: 8,
      path: "/categories/dong-ho-cao-cap",
      label: "Đồng hồ",
      menuImage: "https://joolux.com/img/menu/mega-4.jpg",
      menuImageUrl: "/categories/dong-ho-cao-cap",
      numOfCols: 5,
      columns: [{
        id: 1,
        columnItems: [{
          id: 1,
          path: "/categories/dong-ho-cao-cap",
          label: "Thương hiệu",
          columnItemItems: [{
            id: 1,
            path: "/categories/dong-ho-cao-cap?brands=Louis+Vuitton",
            label: "Rolex"
          }, {
            id: 2,
            path: "/categories/dong-ho-cao-cap?brands=Frederique+Constant",
            label: "Frederique Constant"
          }, {
            id: 3,
            path: "/categories/dong-ho-cao-cap?brands=Maurice+Lacroix",
            label: "Maurice Lacroix"
          }, {
            id: 4,
            path: "/categories/dong-ho-cao-cap?brands=Longines",
            label: "Longines"
          }, {
            id: 5,
            path: "/categories/dong-ho-cao-cap?brands=Tissot",
            label: "Tissot"
          }, {
            id: 6,
            path: "/categories/dong-ho-cao-cap?brands=Montblanc",
            label: "Montblanc"
          }, {
            id: 7,
            path: "/categories/dong-ho-cao-cap?brands=Chopard",
            label: "Chopard"
          }, {
            id: 8,
            path: "/categories/dong-ho-cao-cap?brands=Edox",
            label: "Edox"
          }, {
            id: 9,
            path: "/categories/dong-ho-cao-cap?brands=Omega",
            label: "Omega"
          }, {
            id: 10,
            path: "/categories/dong-ho-cao-cap",
            bold: true,
            label: "Xem tất cả"
          }]
        }]
      }, {
        id: 2,
        columnItems: [{
          id: 1,
          path: "/categories/dong-ho-cao-cap?genders=Nam",
          label: "Nam",
          columnItemItems: [{
            id: 1,
            path: "/categories/dong-ho-cao-cap?genders=Nam",
            bold: true,
            label: "Tất cả"
          }, {
            id: 2,
            path: "/categories/dong-ho-cao-cap?genders=Nam&subCategory=Quartz",
            label: "Quartz"
          }, {
            id: 3,
            path: "/categories/dong-ho-cao-cap?genders=Nam&subCategory=Automatic",
            label: "Automatic"
          }, {
            id: 4,
            path: "/categories/dong-ho-cao-cap?genders=Nam&subCategory=Eco-Drive",
            label: "Eco-Drive"
          }]
        }]
      }, {
        id: 3,
        columnItems: [{
          id: 1,
          path: "/categories/dong-ho-cao-cap?genders=Nữ",
          label: "Nữ",
          columnItemItems: [{
            id: 1,
            path: "/categories/dong-ho-cao-cap?genders=Nữ",
            bold: true,
            label: "Tất cả"
          }, {
            id: 2,
            path: "/categories/dong-ho-cao-cap?genders=Nữ&subCategory=Quartz",
            label: "Quartz"
          }, {
            id: 3,
            path: "/categories/dong-ho-cao-capr?genders=Nữ&subCategory=Automatic",
            label: "Automatic"
          }, {
            id: 4,
            path: "/categories/dong-ho-cao-cap?genders=Nữ&subCategory=Eco-Drive",
            label: "Eco-Drive"
          }]
        }]
      }]
    }, {
      id: 9,
      path: "/categories/phu-kien",
      label: "Phụ kiện",
      menuImage: "https://joolux.com/img/menu/mega-5.jpg",
      menuImageUrl: "/categories/phu-kien",
      numOfCols: 5,
      columns: [{
        id: 1,
        columnItems: [{
          id: 1,
          path: "/categories/phu-kien",
          label: "Thương hiệu",
          columnItemItems: [{
            id: 1,
            path: "/categories/phu-kien?brands=Louis+Vuitton",
            label: "Louis Vuitton"
          }, {
            id: 2,
            path: "/categories/phu-kien?brands=Gucci",
            label: "Gucci"
          }, {
            id: 3,
            path: "/categories/phu-kien?brands=Chanel",
            label: "Chanel"
          }, {
            id: 4,
            path: "/categories/phu-kien?brands=Prada",
            label: "Prada"
          }, {
            id: 5,
            path: "/categories/phu-kien?brands=Burberry",
            label: "Burberry"
          }, {
            id: 6,
            path: "/categories/phu-kien?brands=Bottega+Veneta",
            label: "Bottega Veneta"
          }, {
            id: 7,
            path: "/categories/phu-kien?brands=Balenciaga",
            label: "Balenciaga"
          }, {
            id: 8,
            path: "/categories/phu-kien?brands=Dior",
            label: "Dior"
          }, {
            id: 9,
            path: "/categories/phu-kien?brands=Saint+Laurent",
            label: "Saint Laurent"
          }, {
            id: 10,
            path: "/categories/phu-kien?brands=Fendi",
            label: "Fendi"
          }, {
            id: 11,
            path: "/categories/phu-kien?brands=Celine",
            label: "Celine"
          }, {
            id: 12,
            path: "/categories/phu-kien",
            bold: true,
            label: "Xem tất cả"
          }]
        }]
      }, {
        id: 2,
        columnItems: [{
          id: 1,
          path: "/categories/phu-kien?genders=Nam",
          label: "Nam",
          columnItemItems: [{
            id: 1,
            path: "/categories/phu-kien?genders=Nam",
            bold: true,
            label: "Tất cả"
          }, {
            id: 2,
            path: "/categories/phu-kien?genders=Nam&subCategory=Kính+mát",
            label: "Kính Mát"
          }, {
            id: 3,
            path: "/categories/phu-kien?genders=Nam&subCategory=Thắt+lưng",
            label: "Thắt Lưng"
          }, {
            id: 4,
            path: "/categories/phu-kien?genders=Nam&subCategory=Mũ",
            label: "Mũ"
          }, {
            id: 5,
            path: "/categories/phu-kien?genders=Nam&subCategory=Khăn",
            label: "Khăn"
          }]
        }]
      }, {
        id: 3,
        columnItems: [{
          id: 1,
          path: "/categories/phu-kien?genders=Nữ",
          label: "Nữ",
          columnItemItems: [{
            id: 1,
            path: "/categories/phu-kien?genders=Nữ",
            bold: true,
            label: "Tất cả"
          }, {
            id: 2,
            path: "/categories/phu-kien?genders=Nữ&subCategory=Kính+mát",
            label: "Kính Mát"
          }, {
            id: 3,
            path: "/categories/phu-kien?genders=Nữ&subCategory=Thắt+lưng",
            label: "Thắt Lưng"
          }, {
            id: 4,
            path: "/categories/phu-kien?genders=Nữ&subCategory=Mũ",
            label: "Mũ"
          }, {
            id: 5,
            path: "/categories/phu-kien?genders=Nữ&subCategory=Khăn",
            label: "Khăn"
          }]
        }]
      }]
    }],
    mobileMenu: [{
      id: 1,
      path: "/hang-moi-ve",
      label: "Hàng mới về",
      subMenu: [{
        id: 1,
        path: "/hang-moi-ve",
        label: "Thương hiệu",
        subMenu: [{
          id: 1,
          path: "/hang-moi-ve?brands=Louis+Vuitton",
          label: "Louis Vuitton"
        }, {
          id: 2,
          path: "/hang-moi-ve?brands=Gucci",
          label: "Gucci"
        }, {
          id: 3,
          path: "/hang-moi-ve?brands=Chanel",
          label: "Chanel"
        }, {
          id: 4,
          path: "/hang-moi-ve?brands=Prada",
          label: "Prada"
        }, {
          id: 5,
          path: "/hang-moi-ve?brands=Burberry",
          label: "Burberry"
        }, {
          id: 6,
          path: "/hang-moi-ve?brands=Bottega+Veneta",
          label: "Bottega Veneta"
        }, {
          id: 7,
          path: "/hang-moi-ve?brands=Balenciaga",
          label: "Balenciaga"
        }, {
          id: 8,
          path: "/hang-moi-ve?brands=Dior",
          label: "Dior"
        }, {
          id: 9,
          path: "/hang-moi-ve?brands=Saint+Laurent",
          label: "Saint Laurent"
        }, {
          id: 10,
          path: "/hang-moi-ve?brands=Fendi",
          label: "Fendi"
        }, {
          id: 11,
          path: "/hang-moi-ve?brands=Celine",
          label: "Celine"
        }, {
          id: 12,
          path: "/brands",
          bold: true,
          label: "Xem tất cả"
        }]
      }, {
        id: 2,
        path: "/hang-moi-ve?genders=Nam",
        label: "Nam",
        subMenu: [{
          id: 1,
          path: "/hang-moi-ve?genders=Nam",
          bold: true,
          label: "Tất cả"
        }, {
          id: 2,
          path: "/categories/tui-xach?genders=Nam",
          label: "Túi xách"
        }, {
          id: 3,
          path: "/categories/giay-sneaker?genders=Nam",
          label: "Giày & Sneaker"
        }, {
          id: 4,
          path: "/categories/dong-ho-cao-cap?genders=Nam",
          label: "Đồng hồ"
        }, {
          id: 5,
          path: "/categories/phu-kien?genders=Nam",
          label: "Phụ kiện"
        }]
      }, {
        id: 3,
        path: "/hang-moi-ve?genders=Nữ",
        label: "Nữ",
        subMenu: [{
          id: 1,
          path: "/hang-moi-ve?genders=Nữ",
          bold: true,
          label: "Tất cả"
        }, {
          id: 2,
          path: "/categories/tui-xach?genders=Nữ",
          label: "Túi xách"
        }, {
          id: 3,
          path: "/categories/giay-sneaker?genders=Nữ",
          label: "Giày & Sneaker"
        }, {
          id: 4,
          path: "/categories/dong-ho-cao-cap?genders=Nữ",
          label: "Đồng hồ"
        }, {
          id: 5,
          path: "/categories/phu-kien?genders=Nữ",
          label: "Phụ kiện"
        }]
      }]
    }, {
      id: 2,
      path: "/dich-vu",
      label: "Dịch vụ khác",
      subMenu: [{
        id: 1,
        path: "/dich-vu/kiem-dinh-hang-hieu",
        label: "Kiểm định hàng hiệu"
      }, {
        id: 2,
        path: "/dich-vu/cham-soc-hang-hieu",
        label: "Chăm sóc và chế tác hàng hiệu"
      }, {
        id: 3,
        path: "/minimal",
        label: "Cho thuê hàng hiệu (upcoming)"
      }]
    }, {
      id: 3,
      path: "/categories/hang-moi-ve",
      label: "Thương hiệu",
      menuImage: "https://joolux.com/img/menu/mega-1.jpg",
      subMenu: [{
        id: 1,
        path: "/hang-moi-ve",
        label: "Thương hiệu nổi tiếng",
        subMenu: [{
          id: 1,
          path: "/hang-moi-ve?brands=Louis+Vuitton",
          label: "Louis Vuitton"
        }, {
          id: 2,
          path: "/hang-moi-ve?brands=Gucci",
          label: "Gucci"
        }, {
          id: 3,
          path: "/hang-moi-ve?brands=Chanel",
          label: "Chanel"
        }, {
          id: 4,
          path: "/hang-moi-ve?brands=Prada",
          label: "Prada"
        }, {
          id: 5,
          path: "/hang-moi-ve?brands=Burberry",
          label: "Burberry"
        }, {
          id: 6,
          path: "/hang-moi-ve?brands=Bottega+Veneta",
          label: "Bottega Veneta"
        }, {
          id: 7,
          path: "/hang-moi-ve?brands=Balenciaga",
          label: "Balenciaga"
        }, {
          id: 8,
          path: "/hang-moi-ve?brands=Dior",
          label: "Dior"
        }, {
          id: 9,
          path: "/hang-moi-ve?brands=Goyard",
          label: "Goyard"
        }, {
          id: 10,
          path: "/hang-moi-ve?brands=Saint+Laurent",
          label: "Saint Laurent"
        }, {
          id: 11,
          path: "/hang-moi-ve?brands=Fendi",
          label: "Fendi"
        }, {
          id: 12,
          path: "/hang-moi-ve?brands=Celine",
          label: "Celine"
        }, {
          id: 13,
          path: "/hang-moi-ve?brands=Longines",
          label: "Longines"
        }, {
          id: 14,
          path: "/hang-moi-ve?brands=Chloé",
          label: "Chloé"
        }, {
          id: 15,
          path: "/hang-moi-ve?brands=Alexander+McQueen",
          label: "Alexander McQueen"
        }, {
          id: 16,
          path: "/brands",
          bold: true,
          label: "Xem tất cả"
        }]
      }]
    }, {
      id: 4,
      path: "/hang-moi-ve?genders=Nam",
      label: "Nam",
      menuImage: "https://joolux.com/img/menu/mega-1.jpg",
      subMenu: [{
        id: 1,
        path: "/hang-moi-ve?genders=Nam",
        label: "Thương hiệu",
        subMenu: [{
          id: 1,
          path: "/hang-moi-ve?brands=Louis+Vuitton&genders=Nam",
          label: "Louis Vuitton"
        }, {
          id: 2,
          path: "/hang-moi-ve?brands=Gucci&genders=Nam",
          label: "Gucci"
        }, {
          id: 3,
          path: "/hang-moi-ve?brands=Chanel&genders=Nam",
          label: "Chanel"
        }, {
          id: 4,
          path: "/hang-moi-ve?brands=Prada&genders=Nam",
          label: "Prada"
        }, {
          id: 5,
          path: "/hang-moi-ve?brands=Burberry&genders=Nam",
          label: "Burberry"
        }, {
          id: 6,
          path: "/hang-moi-ve?brands=Bottega+Veneta&genders=Nam",
          label: "Bottega Veneta"
        }, {
          id: 7,
          path: "/hang-moi-ve?brands=Balenciaga&genders=Nam",
          label: "Balenciaga"
        }, {
          id: 8,
          path: "/hang-moi-ve?brands=Dior&genders=Nam",
          label: "Dior"
        }, {
          id: 9,
          path: "/hang-moi-ve?brands=Saint+Laurent&genders=Nam",
          label: "Saint Laurent"
        }, {
          id: 10,
          path: "/hang-moi-ve?brands=Fendi&genders=Nam",
          label: "Fendi"
        }, {
          id: 11,
          path: "/hang-moi-ve?brands=Celine&genders=Nam",
          label: "Celine"
        }, {
          id: 12,
          path: "/brands",
          bold: true,
          label: "Xem tất cả"
        }]
      }, {
        id: 2,
        path: "/hang-moi-ve?genders=Nam",
        label: "Danh mục",
        subMenu: [{
          id: 1,
          path: "/hang-moi-ve?genders=Nam",
          bold: true,
          label: "Tất cả"
        }, {
          id: 2,
          path: "/categories/tui-xach?genders=Nam",
          label: "Túi xách"
        }, {
          id: 3,
          path: "/categories/giay-sneaker?genders=Nam",
          label: "Giày & Sneaker"
        }, {
          id: 4,
          path: "/categories/dong-ho-cao-cap?genders=Nam",
          label: "Đồng hồ"
        }, {
          id: 5,
          path: "/categories/phu-kien?genders=Nam",
          label: "Phụ kiện"
        }]
      }]
    }, {
      id: 5,
      path: "/hang-moi-ve?genders=Nữ",
      label: "Nữ",
      menuImage: "https://joolux.com/img/menu/mega-1.jpg",
      subMenu: [{
        id: 1,
        path: "/hang-moi-ve?genders=Nữ",
        label: "Thương hiệu",
        subMenu: [{
          id: 1,
          path: "/hang-moi-ve?brands=Louis+Vuitton&genders=Nữ",
          label: "Louis Vuitton"
        }, {
          id: 2,
          path: "/hang-moi-ve?brands=Gucci&genders=Nữ",
          label: "Gucci"
        }, {
          id: 3,
          path: "/hang-moi-ve?brands=Chanel&genders=Nữ",
          label: "Chanel"
        }, {
          id: 4,
          path: "/hang-moi-ve?brands=Prada&genders=Nữ",
          label: "Prada"
        }, {
          id: 5,
          path: "/hang-moi-ve?brands=Burberry&genders=Nữ",
          label: "Burberry"
        }, {
          id: 6,
          path: "/hang-moi-ve?brands=Bottega+Veneta&genders=Nữ",
          label: "Bottega Veneta"
        }, {
          id: 7,
          path: "/hang-moi-ve?brands=Balenciaga&genders=Nữ",
          label: "Balenciaga"
        }, {
          id: 8,
          path: "/hang-moi-ve?brands=Dior&genders=Nữ",
          label: "Dior"
        }, {
          id: 9,
          path: "/hang-moi-ve?brands=Saint+Laurent&genders=Nữ",
          label: "Saint Laurent"
        }, {
          id: 10,
          path: "/hang-moi-ve?brands=Fendi&genders=Nữ",
          label: "Fendi"
        }, {
          id: 11,
          path: "/hang-moi-ve?brands=Celine&genders=Nữ",
          label: "Celine"
        }, {
          id: 12,
          path: "/brands",
          bold: true,
          label: "Xem tất cả"
        }]
      }, {
        id: 2,
        path: "/hang-moi-ve?genders=Nữ",
        label: "Danh mục",
        subMenu: [{
          id: 1,
          path: "/hang-moi-ve?genders=Nữ",
          bold: true,
          label: "Tất cả"
        }, {
          id: 2,
          path: "/categories/tui-xach?genders=Nữ",
          label: "Túi xách"
        }, {
          id: 3,
          path: "/categories/giay-sneaker?genders=Nữ",
          label: "Giày & Sneaker"
        }, {
          id: 4,
          path: "/categories/dong-ho-cao-cap?genders=Nữ",
          label: "Đồng hồ"
        }, {
          id: 5,
          path: "/categories/phu-kien?genders=Nữ",
          label: "Phụ kiện"
        }]
      }]
    }, {
      id: 6,
      path: "/categories/tui-xach",
      label: "Túi xách",
      menuImage: "https://joolux.com/img/menu/mega-1.jpg",
      subMenu: [{
        id: 1,
        path: "/categories/tui-xach",
        label: "Thương hiệu",
        subMenu: [{
          id: 1,
          path: "/categories/tui-xach?brands=Louis+Vuitton",
          label: "Louis Vuitton"
        }, {
          id: 2,
          path: "/categories/tui-xach?brands=Gucci",
          label: "Gucci"
        }, {
          id: 3,
          path: "/categories/tui-xach?brands=Chanel",
          label: "Chanel"
        }, {
          id: 4,
          path: "/categories/tui-xach?brands=Prada",
          label: "Prada"
        }, {
          id: 5,
          path: "/categories/tui-xach?brands=Burberry",
          label: "Burberry"
        }, {
          id: 6,
          path: "/categories/tui-xach?brands=Bottega+Veneta",
          label: "Bottega Veneta"
        }, {
          id: 7,
          path: "/categories/tui-xach?brands=Balenciaga",
          label: "Balenciaga"
        }, {
          id: 8,
          path: "/categories/tui-xach?brands=Dior",
          label: "Dior"
        }, {
          id: 9,
          path: "/categories/tui-xach?brands=Saint+Laurent",
          label: "Saint Laurent"
        }, {
          id: 10,
          path: "/categories/tui-xach?brands=Fendi",
          label: "Fendi"
        }, {
          id: 11,
          path: "/categories/tui-xach?brands=Celine",
          label: "Celine"
        }, {
          id: 12,
          path: "/categories/tui-xach",
          bold: true,
          label: "Xem tất cả"
        }]
      }, {
        id: 2,
        path: "/categories/tui-xach?genders=Nam",
        label: "Nam",
        subMenu: [{
          id: 1,
          path: "/categories/tui-xach?genders=Nam",
          bold: true,
          label: "Tất cả"
        }, {
          id: 2,
          path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Đeo+Chéo",
          label: "Túi Đeo Chéo"
        }, {
          id: 3,
          path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Xách+Tay",
          label: "Túi Xách Tay"
        }, {
          id: 4,
          path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Đeo+Hông",
          label: "Túi Đeo Hông"
        }, {
          id: 5,
          path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Đeo+Vai",
          label: "Túi Đeo Vai"
        }, {
          id: 6,
          path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Clutch",
          label: "Túi Clutch"
        }, {
          id: 7,
          path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Tote",
          label: "Túi Tote"
        }, {
          id: 8,
          path: "/categories/tui-xach?genders=Nam&subCategory=Ví",
          label: "Ví"
        }, {
          id: 9,
          path: "/categories/tui-xach?genders=Nam&subCategory=Cặp+Hồ+Sơ",
          label: "Cặp Hồ Sơ"
        }, {
          id: 10,
          path: "/categories/tui-xach?genders=Nam&subCategory=Ba+Lô",
          label: "Ba Lô"
        }, {
          id: 11,
          path: "/categories/tui-xach?genders=Nam&subCategory=Vali",
          label: "Vali"
        }, {
          id: 12,
          path: "/categories/tui-xach?genders=Nam&subCategory=Túi+Du+Lịch",
          label: "Túi Du Lịch"
        }]
      }, {
        id: 3,
        path: "/categories/tui-xach?genders=Nữ",
        label: "Nữ",
        subMenu: [{
          id: 1,
          path: "/categories/tui-xach?genders=Nữ",
          bold: true,
          label: "Tất cả"
        }, {
          id: 2,
          path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Đeo+Chéo",
          label: "Túi Đeo Chéo"
        }, {
          id: 3,
          path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Xách+Tay",
          label: "Túi Xách Tay"
        }, {
          id: 4,
          path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Đeo+Hông",
          label: "Túi Đeo Hông"
        }, {
          id: 5,
          path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Đeo+Vai",
          label: "Túi Đeo Vai"
        }, {
          id: 6,
          path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Clutch",
          label: "Túi Clutch"
        }, {
          id: 7,
          path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Tote",
          label: "Túi Tote"
        }, {
          id: 8,
          path: "/categories/tui-xach?genders=Nữ&subCategory=Ví",
          label: "Ví"
        }, {
          id: 9,
          path: "/categories/tui-xach?genders=Nữ&subCategory=Ba+Lô",
          label: "Ba Lô"
        }, {
          id: 10,
          path: "/categories/tui-xach?genders=Nữ&subCategory=Vali",
          label: "Vali"
        }, {
          id: 11,
          path: "/categories/tui-xach?genders=Nữ&subCategory=Túi+Du+Lịch",
          label: "Túi Du Lịch"
        }]
      }]
    }, {
      id: 7,
      path: "/categories/giay-sneaker",
      label: "Giày & Sneaker",
      menuImage: "https://joolux.com/img/menu/mega-1.jpg",
      subMenu: [{
        id: 1,
        path: "/categories/giay-sneaker",
        label: "Thương hiệu",
        subMenu: [{
          id: 1,
          path: "/categories/giay-sneaker?brands=Louis+Vuitton",
          label: "Louis Vuitton"
        }, {
          id: 2,
          path: "/categories/giay-sneaker?brands=Gucci",
          label: "Gucci"
        }, {
          id: 3,
          path: "/categories/giay-sneaker?brands=Chanel",
          label: "Chanel"
        }, {
          id: 4,
          path: "/categories/giay-sneaker?brands=Prada",
          label: "Prada"
        }, {
          id: 5,
          path: "/categories/giay-sneaker?brands=Burberry",
          label: "Burberry"
        }, {
          id: 6,
          path: "/categories/giay-sneaker?brands=Bottega+Veneta",
          label: "Bottega Veneta"
        }, {
          id: 7,
          path: "/categories/giay-sneaker?brands=Balenciaga",
          label: "Balenciaga"
        }, {
          id: 8,
          path: "/categories/giay-sneaker?brands=Dior",
          label: "Dior"
        }, {
          id: 9,
          path: "/categories/giay-sneaker?brands=Saint+Laurent",
          label: "Saint Laurent"
        }, {
          id: 10,
          path: "/categories/giay-sneaker?brands=Fendi",
          label: "Fendi"
        }, {
          id: 11,
          path: "/categories/giay-sneaker?brands=Celine",
          label: "Celine"
        }, {
          id: 12,
          path: "/categories/giay-sneaker",
          bold: true,
          label: "Xem tất cả"
        }]
      }, {
        id: 2,
        path: "/categories/giay-sneaker?genders=Nam",
        label: "Nam",
        subMenu: [{
          id: 1,
          path: "/categories/giay-sneaker?genders=Nam",
          bold: true,
          label: "Tất cả"
        }, {
          id: 2,
          path: "/categories/giay-sneaker?genders=Nam&subCategory=Sneaker",
          label: "Sneaker"
        }, {
          id: 3,
          path: "/categories/giay-sneaker?genders=Nam&subCategory=Dép",
          label: "Dép"
        }, {
          id: 4,
          path: "/categories/giay-sneaker?genders=Nam&subCategory=Sandal",
          label: "Sandal"
        }, {
          id: 5,
          path: "/categories/giay-sneaker?genders=Nam&subCategory=Giày+Loafer",
          label: "Giày Loafer"
        }, {
          id: 6,
          path: "/categories/giay-sneaker?genders=Nam&subCategory=Giày+Tây",
          label: "Giày Tây"
        }]
      }, {
        id: 3,
        path: "/categories/giay-sneaker?genders=Nữ",
        label: "Nữ",
        subMenu: [{
          id: 1,
          path: "/categories/giay-sneaker?genders=Nữ",
          bold: true,
          label: "Tất cả"
        }, {
          id: 2,
          path: "/categories/giay-sneaker?genders=Nữ&subCategory=Sneaker",
          label: "Sneaker"
        }, {
          id: 3,
          path: "/categories/giay-sneaker?genders=Nữ&subCategory=Dép",
          label: "Dép"
        }, {
          id: 4,
          path: "/categories/giay-sneaker?genders=Nữ&subCategory=Giày+Boots",
          label: "Giày Boots"
        }, {
          id: 5,
          path: "/categories/giay-sneaker?genders=Nữ&subCategory=Giày+Cao+Gót",
          label: "Giày Cao Gót"
        }, {
          id: 6,
          path: "/categories/giay-sneaker?genders=Nữ&subCategory=Giày+Búp+Bê",
          label: "Giày Búp Bê"
        }, {
          id: 7,
          path: "/categories/giay-sneaker?genders=Nữ&subCategory=Sandal",
          label: "Sandal"
        }, {
          id: 8,
          path: "/categories/giay-sneaker?genders=Nữ&subCategory=Giày+Loafer",
          label: "Giày Loafer"
        }]
      }]
    }, {
      id: 8,
      path: "/categories/dong-ho-cao-cap",
      label: "Đồng hồ",
      subMenu: [{
        id: 1,
        path: "/categories/dong-ho-cao-cap",
        label: "Thương hiệu",
        subMenu: [{
          id: 1,
          path: "/categories/dong-ho-cao-cap?brands=Louis+Vuitton",
          label: "Rolex"
        }, {
          id: 2,
          path: "/categories/dong-ho-cao-cap?brands=Frederique+Constant",
          label: "Frederique Constant"
        }, {
          id: 3,
          path: "/categories/dong-ho-cao-cap?brands=Maurice+Lacroix",
          label: "Maurice Lacroix"
        }, {
          id: 4,
          path: "/categories/dong-ho-cao-cap?brands=Longines",
          label: "Longines"
        }, {
          id: 5,
          path: "/categories/dong-ho-cao-cap?brands=Tissot",
          label: "Tissot"
        }, {
          id: 6,
          path: "/categories/dong-ho-cao-cap?brands=Montblanc",
          label: "Montblanc"
        }, {
          id: 7,
          path: "/categories/dong-ho-cao-cap?brands=Chopard",
          label: "Chopard"
        }, {
          id: 8,
          path: "/categories/dong-ho-cao-cap?brands=Edox",
          label: "Edox"
        }, {
          id: 9,
          path: "/categories/dong-ho-cao-cap?brands=Omega",
          label: "Omega"
        }, {
          id: 10,
          path: "/categories/dong-ho-cao-cap",
          bold: true,
          label: "Xem tất cả"
        }]
      }, {
        id: 2,
        path: "/categories/dong-ho-cao-cap?genders=Nam",
        label: "Nam",
        subMenu: [{
          id: 1,
          path: "/categories/dong-ho-cao-cap?genders=Nam",
          bold: true,
          label: "Tất cả"
        }, {
          id: 2,
          path: "/categories/dong-ho-cao-cap?genders=Nam&subCategory=Quartz",
          label: "Quartz"
        }, {
          id: 3,
          path: "/categories/dong-ho-cao-cap?genders=Nam&subCategory=Automatic",
          label: "Automatic"
        }, {
          id: 4,
          path: "/categories/dong-ho-cao-cap?genders=Nam&subCategory=Eco-Drive",
          label: "Eco-Drive"
        }]
      }, {
        id: 3,
        path: "/categories/dong-ho-cao-cap?genders=Nữ",
        label: "Nữ",
        subMenu: [{
          id: 1,
          path: "/categories/dong-ho-cao-cap?genders=Nữ",
          bold: true,
          label: "Tất cả"
        }, {
          id: 2,
          path: "/categories/dong-ho-cao-cap?genders=Nữ&subCategory=Quartz",
          label: "Quartz"
        }, {
          id: 3,
          path: "/categories/dong-ho-cao-capr?genders=Nữ&subCategory=Automatic",
          label: "Automatic"
        }, {
          id: 4,
          path: "/categories/dong-ho-cao-cap?genders=Nữ&subCategory=Eco-Drive",
          label: "Eco-Drive"
        }]
      }]
    }, {
      id: 9,
      path: "/categories/phu-kien",
      label: "Phụ kiện",
      subMenu: [{
        id: 1,
        path: "/categories/phu-kien",
        label: "Thương hiệu",
        subMenu: [{
          id: 1,
          path: "/categories/phu-kien?brands=Louis+Vuitton",
          label: "Louis Vuitton"
        }, {
          id: 2,
          path: "/categories/phu-kien?brands=Gucci",
          label: "Gucci"
        }, {
          id: 3,
          path: "/categories/phu-kien?brands=Chanel",
          label: "Chanel"
        }, {
          id: 4,
          path: "/categories/phu-kien?brands=Prada",
          label: "Prada"
        }, {
          id: 5,
          path: "/categories/phu-kien?brands=Burberry",
          label: "Burberry"
        }, {
          id: 6,
          path: "/categories/phu-kien?brands=Bottega+Veneta",
          label: "Bottega Veneta"
        }, {
          id: 7,
          path: "/categories/phu-kien?brands=Balenciaga",
          label: "Balenciaga"
        }, {
          id: 8,
          path: "/categories/phu-kien?brands=Dior",
          label: "Dior"
        }, {
          id: 9,
          path: "/categories/phu-kien?brands=Saint+Laurent",
          label: "Saint Laurent"
        }, {
          id: 10,
          path: "/categories/phu-kien?brands=Fendi",
          label: "Fendi"
        }, {
          id: 11,
          path: "/categories/phu-kien?brands=Celine",
          label: "Celine"
        }, {
          id: 12,
          path: "/categories/phu-kien",
          bold: true,
          label: "Xem tất cả"
        }]
      }, {
        id: 2,
        path: "/categories/phu-kien?genders=Nam",
        label: "Nam",
        subMenu: [{
          id: 1,
          path: "/categories/phu-kien?genders=Nam",
          bold: true,
          label: "Tất cả"
        }, {
          id: 2,
          path: "/categories/phu-kien?genders=Nam&subCategory=Kính+mát",
          label: "Kính Mát"
        }, {
          id: 3,
          path: "/categories/phu-kien?genders=Nam&subCategory=Thắt+lưng",
          label: "Thắt Lưng"
        }, {
          id: 4,
          path: "/categories/phu-kien?genders=Nam&subCategory=Mũ",
          label: "Mũ"
        }, {
          id: 5,
          path: "/categories/phu-kien?genders=Nam&subCategory=Khăn",
          label: "Khăn"
        }]
      }, {
        id: 3,
        path: "/categories/phu-kien?genders=Nữ",
        label: "Nữ",
        subMenu: [{
          id: 1,
          path: "/categories/mat-kinh?genders=Nữ",
          bold: true,
          label: "Tất cả"
        }, {
          id: 2,
          path: "/categories/phu-kien?genders=Nữ&subCategory=Kính+mát",
          label: "Kính Mát"
        }, {
          id: 3,
          path: "/categories/phu-kien?genders=Nữ&subCategory=Thắt+lưng",
          label: "Thắt Lưng"
        }, {
          id: 4,
          path: "/categories/phu-kien?genders=Nữ&subCategory=Mũ",
          label: "Mũ"
        }, {
          id: 5,
          path: "/categories/phu-kien?genders=Nữ&subCategory=Khăn",
          label: "Khăn"
        }]
      }]
    }],
    languageMenu: [{
      id: "ar",
      name: "عربى - AR",
      value: "ar",
      icon: /*#__PURE__*/jsx_runtime_.jsx(SAFlag, {
        width: "20px",
        height: "15px"
      })
    }, {
      id: "zh",
      name: "中国人 - ZH",
      value: "zh",
      icon: /*#__PURE__*/jsx_runtime_.jsx(CNFlag, {
        width: "20px",
        height: "15px"
      })
    }, {
      id: "en",
      name: "English - EN",
      value: "en",
      icon: /*#__PURE__*/jsx_runtime_.jsx(USFlag, {
        width: "20px",
        height: "15px"
      })
    }, {
      id: "de",
      name: "Deutsch - DE",
      value: "de",
      icon: /*#__PURE__*/jsx_runtime_.jsx(DEFlag, {
        width: "20px",
        height: "15px"
      })
    }, {
      id: "he",
      name: "rעברית - HE",
      value: "he",
      icon: /*#__PURE__*/jsx_runtime_.jsx(ILFlag, {
        width: "20px",
        height: "15px"
      })
    }, {
      id: "es",
      name: "Español - ES",
      value: "es",
      icon: /*#__PURE__*/jsx_runtime_.jsx(ESFlag, {
        width: "20px",
        height: "15px"
      })
    }]
  }
};

/***/ })

};
;