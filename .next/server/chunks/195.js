"use strict";
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 2195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cart_button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/components/icons/cart-icon.tsx


const CartIcon = ({
  color,
  width = "18px",
  height = "18px",
  className = "md:w-4 xl:w-5 md:h-4 xl:h-5"
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 20 20",
    className: className,
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M5,4H19a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4ZM2,5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3V19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3Zm10,7C9.239,12,7,9.314,7,6H9c0,2.566,1.669,4,3,4s3-1.434,3-4h2C17,9.314,14.761,12,12,12Z",
      transform: "translate(-2 -2)",
      fill: color,
      fillRule: "evenodd"
    })
  });
};

/* harmony default export */ const cart_icon = (CartIcon);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/contexts/cart/cart.context.tsx + 3 modules
var cart_context = __webpack_require__(9745);
// EXTERNAL MODULE: ./src/contexts/ui.context.tsx
var ui_context = __webpack_require__(7014);
// EXTERNAL MODULE: ./src/framework/basic-rest/product/use-price.tsx
var use_price = __webpack_require__(4718);
// EXTERNAL MODULE: ./src/utils/routes.ts
var routes = __webpack_require__(9524);
// EXTERNAL MODULE: ./src/components/common/scrollbar.tsx
var scrollbar = __webpack_require__(4228);
// EXTERNAL MODULE: ./src/components/ui/link.tsx
var ui_link = __webpack_require__(3407);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: ./src/utils/motion/fade-in-out.ts
var fade_in_out = __webpack_require__(3719);
// EXTERNAL MODULE: ./node_modules/react-icons/io/index.esm.js
var index_esm = __webpack_require__(1649);
// EXTERNAL MODULE: external "lodash/isEmpty"
var isEmpty_ = __webpack_require__(8718);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty_);
// EXTERNAL MODULE: external "lodash/orderBy"
var orderBy_ = __webpack_require__(8110);
var orderBy_default = /*#__PURE__*/__webpack_require__.n(orderBy_);
;// CONCATENATED MODULE: ./src/utils/generate-cart-item-name.ts


function generateCartItemName(name, attributes) {
  if (!isEmpty_default()(attributes)) {
    const sortedAttributes = orderBy_default()(attributes);
    return `${name} - ${sortedAttributes.join(", ")}`;
  }

  return name;
}
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/cart/cart-item.tsx






 // import { Counter } from "@components/common/counter";







const CartItem = ({
  item,
  className
}) => {
  var _ref;

  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  const {
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart
  } = (0,cart_context/* useCart */.jD)();
  const {
    price: unitPrice,
    basePrice
  } = (0,use_price/* default */.ZP)({
    amount: (item === null || item === void 0 ? void 0 : item.specialPrice) && parseInt(item === null || item === void 0 ? void 0 : item.specialPrice),
    baseAmount: (item === null || item === void 0 ? void 0 : item.price) && parseInt(item === null || item === void 0 ? void 0 : item.price),
    currencyCode: "VND"
  }); // const { price: totalPrice } = usePrice({
  //     amount:
  //         item?.itemTotal && parseInt(item?.itemTotal as unknown as string),
  //     baseAmount:
  //         item?.itemTotal && parseInt(item?.itemTotal as unknown as string),
  //     currencyCode: "VND",
  // });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.div, {
    layout: true,
    initial: "from",
    animate: "to",
    exit: "from",
    variants: (0,fade_in_out/* fadeInOut */.I)(0.25),
    className: `group w-full h-auto flex justify-start items-center bg-white py-4 md:py-7 border-b border-gray-100 relative last:border-b-0 ${className}`,
    title: item === null || item === void 0 ? void 0 : item.name,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "relative flex w-24 md:w-28 h-24 md:h-28 rounded-md overflow-hidden bg-gray-200 flex-shrink-0 cursor-pointer me-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: (_ref = (item === null || item === void 0 ? void 0 : item.image) && `${"https://old.joolux.com/media/catalog/product"}${item === null || item === void 0 ? void 0 : item.image}`) !== null && _ref !== void 0 ? _ref : "/assets/placeholder/cart-item.svg",
        width: 112,
        height: 112,
        loading: "eager",
        alt: (item === null || item === void 0 ? void 0 : item.name) || "Product Image",
        className: "bg-gray-300 object-cover"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "absolute top-0 start-0 h-full w-full bg-black bg-opacity-30 md:bg-opacity-0 flex justify-center items-center transition duration-200 ease-in-out md:group-hover:bg-opacity-30",
        onClick: () => clearItemFromCart(item.id),
        role: "button",
        children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* IoIosCloseCircle */.FMH, {
          className: "relative text-white text-2xl transform md:scale-0 md:opacity-0 transition duration-300 ease-in-out md:group-hover:scale-100 md:group-hover:opacity-100"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col w-full overflow-hidden",
      children: [/*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
        href: `${routes/* ROUTES.PRODUCT */.Z.PRODUCT}/${item === null || item === void 0 ? void 0 : item.slug}/${item === null || item === void 0 ? void 0 : item.id}`,
        className: "truncate text-sm text-heading mb-1.5 -mt-1",
        children: generateCartItemName(item === null || item === void 0 ? void 0 : item.name, item === null || item === void 0 ? void 0 : item.attributes)
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex items-end justify-between",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "font-semibold text-sm md:text-base text-heading leading-5",
          children: [unitPrice, "\xA0\u20AB"]
        })
      })]
    })]
  });
};

/* harmony default export */ const cart_item = (CartItem);
;// CONCATENATED MODULE: ./src/components/cart/cart-empty.tsx




const EmptyCart = ({
  width = 180,
  height = 309.722,
  className
}) => /*#__PURE__*/jsx_runtime_.jsx("svg", {
  width: width,
  height: height,
  className: className,
  viewBox: "0 0 180 309.722",
  children: /*#__PURE__*/jsx_runtime_.jsx("g", {
    id: "no_cart_in_bag",
    "data-name": "no cart in bag",
    transform: "translate(-988 -7673)",
    children: /*#__PURE__*/jsx_runtime_.jsx("g", {
      id: "no_cart",
      "data-name": "no cart",
      transform: "translate(988 7673)",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
        id: "Group_5970",
        "data-name": "Group 5970",
        transform: "translate(0 0)",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
          id: "Group_5967",
          "data-name": "Group 5967",
          transform: "translate(17.408 92.119)",
          children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
            id: "Path_17743",
            "data-name": "Path 17743",
            d: "M405.506,794.581l63.621-36.762L418.2,724.274Z",
            transform: "translate(-323.428 -576.978)",
            fill: "#ba8064"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            id: "Path_17744",
            "data-name": "Path 17744",
            d: "M135.711,140.727l32.918-.12,1.287-20.225,79.451,45.843-34.42,1.084v19.165Z",
            transform: "translate(-118.988 -119.373)",
            fill: "#dba480"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            id: "Path_17745",
            "data-name": "Path 17745",
            d: "M314.4,206.341,272,124.761l-2.279,22.008,1.4,59.572Z",
            transform: "translate(-220.537 -122.691)",
            fill: "#460100",
            opacity: "0.1"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            id: "Path_17746",
            "data-name": "Path 17746",
            d: "M141.237,253.056l-10.26-47.388,34.59-.126v37.243Z",
            transform: "translate(-115.402 -183.904)",
            fill: "#995b47"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            id: "Path_17747",
            "data-name": "Path 17747",
            d: "M511.029,445.295l-49.136-22.179L460.8,385.489l1.089-72.515,35.954-1.133Z",
            transform: "translate(-365.33 -264.454)",
            fill: "#a96e56"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            id: "Path_17748",
            "data-name": "Path 17748",
            d: "M148.755,398.756l9.58-70.307,4.9-79.149L81.161,201.911,66.677,351.368Z",
            transform: "translate(-66.677 -181.153)",
            fill: "#dba480"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            id: "Path_17749",
            "data-name": "Path 17749",
            d: "M349.459,429.379c-.415,1.942-2.182,2.6-3.948,1.46a5.753,5.753,0,0,1-2.446-5.572c.414-1.942,2.182-2.6,3.948-1.46A5.753,5.753,0,0,1,349.459,429.379Z",
            transform: "translate(-276.046 -348.874)",
            fill: "#67251d"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            id: "Path_17750",
            "data-name": "Path 17750",
            d: "M209.819,348.753c-.415,1.942-2.182,2.6-3.948,1.46a5.753,5.753,0,0,1-2.446-5.572c.415-1.942,2.182-2.6,3.948-1.46A5.753,5.753,0,0,1,209.819,348.753Z",
            transform: "translate(-170.233 -287.779)",
            fill: "#67251d"
          }), /*#__PURE__*/jsx_runtime_.jsx("g", {
            id: "Group_5965",
            "data-name": "Group 5965",
            transform: "translate(31.503 60.166)",
            opacity: "0.2",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              id: "Path_17751",
              "data-name": "Path 17751",
              d: "M219.35,441.507a16.861,16.861,0,0,1-8.439-2.272A28.35,28.35,0,0,1,196.858,412l4.383-45.226a2.414,2.414,0,0,1,4.806.467l-4.383,45.226a23.483,23.483,0,0,0,11.608,22.554,12.055,12.055,0,0,0,18.081-9.247l3.819-39.41a2.414,2.414,0,0,1,4.806.467l-3.819,39.41a16.912,16.912,0,0,1-16.809,15.266Z",
              transform: "translate(-196.727 -364.591)",
              fill: "#460100"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            id: "Path_17752",
            "data-name": "Path 17752",
            d: "M162.373,116.218,161.06,136.85l-34.59.126,82.078,47.388V164.738l35.954-1.132Zm44.968,47.351v18.7l-76.395-44.106,31.247-.113,1.261-19.819,76.774,44.3Z",
            transform: "translate(-111.986 -116.218)",
            fill: "#fcc89d"
          }), /*#__PURE__*/jsx_runtime_.jsx("g", {
            id: "Group_5966",
            "data-name": "Group 5966",
            transform: "translate(29.24 57.45)",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              id: "Path_17753",
              "data-name": "Path 17753",
              d: "M210.007,430.3a16.864,16.864,0,0,1-8.438-2.271,28.35,28.35,0,0,1-14.054-27.235l4.383-45.226a2.414,2.414,0,0,1,4.806.467l-4.383,45.226a23.483,23.483,0,0,0,11.608,22.554,12.055,12.055,0,0,0,18.081-9.247l3.819-39.41a2.414,2.414,0,0,1,4.806.467l-3.819,39.41A16.912,16.912,0,0,1,210.007,430.3Z",
              transform: "translate(-187.384 -353.38)",
              fill: "#995b47"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            id: "Path_17754",
            "data-name": "Path 17754",
            d: "M405.506,546.991,419.99,488.05V397.534Z",
            transform: "translate(-323.428 -329.388)",
            fill: "#995b47"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
          id: "Group_5968",
          "data-name": "Group 5968",
          transform: "translate(0 0)",
          children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
            id: "Path_17755",
            "data-name": "Path 17755",
            d: "M394.573,120.6c-.142-.5.244-.855.5-1.088a1.4,1.4,0,0,0,.271-.293,0,0,0,0,0,0,0,1.39,1.39,0,0,0-.384-.107c-.34-.065-.853-.162-1-.665s.244-.855.5-1.088a1.39,1.39,0,0,0,.271-.293,0,0,0,0,0,0,0,1.4,1.4,0,0,0-.384-.107c-.34-.064-.853-.162-1-.664s.244-.855.5-1.088l.009-.008a.9.9,0,0,0,.259-.482.391.391,0,0,1,.276-.292.41.41,0,0,1,.5.316,1.122,1.122,0,0,1-.51,1.046,1.4,1.4,0,0,0-.271.292,0,0,0,0,0,0,0,1.4,1.4,0,0,0,.384.107c.34.065.853.162,1,.665s-.244.855-.5,1.088a1.4,1.4,0,0,0-.271.293,0,0,0,0,0,0,0,1.391,1.391,0,0,0,.384.107c.34.065.853.162,1,.665s-.244.855-.5,1.088a1.257,1.257,0,0,0-.273.3,0,0,0,0,0,0,0,1.641,1.641,0,0,0,.387.1c.331.063.826.157.983.625a.416.416,0,0,1-.21.507.392.392,0,0,1-.456-.109.789.789,0,0,0-.464-.253h0C395.229,121.2,394.716,121.1,394.573,120.6Z",
            transform: "translate(-349.075 -37.518)",
            fill: "#212121",
            opacity: "0.3"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            id: "Path_17765",
            "data-name": "Path 17765",
            d: "M395.468,120.6c.142-.5-.244-.855-.5-1.088a1.4,1.4,0,0,1-.271-.293,0,0,0,0,1,0,0,1.39,1.39,0,0,1,.384-.107c.34-.065.853-.162,1-.665s-.244-.855-.5-1.088a1.389,1.389,0,0,1-.271-.293,0,0,0,0,1,0,0,1.4,1.4,0,0,1,.384-.107c.34-.064.853-.162,1-.664s-.244-.855-.5-1.088l-.009-.008a.9.9,0,0,1-.259-.482.391.391,0,0,0-.276-.292.41.41,0,0,0-.5.316,1.122,1.122,0,0,0,.51,1.046,1.4,1.4,0,0,1,.271.292,0,0,0,0,1,0,0,1.4,1.4,0,0,1-.384.107c-.34.065-.853.162-1,.664s.244.855.5,1.088a1.4,1.4,0,0,1,.271.293,0,0,0,0,1,0,0,1.39,1.39,0,0,1-.384.107c-.34.065-.853.162-1,.665s.244.855.5,1.088a1.257,1.257,0,0,1,.273.3,0,0,0,0,1,0,0,1.641,1.641,0,0,1-.387.1c-.331.063-.826.157-.983.625a.416.416,0,0,0,.21.507.392.392,0,0,0,.456-.109.789.789,0,0,1,.464-.253h0C394.812,121.2,395.326,121.1,395.468,120.6Z",
            transform: "translate(-262.76 -23.736)",
            fill: "#212121",
            opacity: "0.3"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            id: "Path_17756",
            "data-name": "Path 17756",
            d: "M375.447,179.277a2.539,2.539,0,1,1,3.346,1.3A2.542,2.542,0,0,1,375.447,179.277Zm3.737-1.643a1.543,1.543,0,1,0-.791,2.034A1.545,1.545,0,0,0,379.184,177.634Z",
            transform: "translate(-375.232 -52.408)",
            fill: "#212121",
            opacity: "0.3"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            id: "Path_17764",
            "data-name": "Path 17764",
            d: "M375.447,179.277a2.539,2.539,0,1,1,3.346,1.3A2.542,2.542,0,0,1,375.447,179.277Zm3.737-1.643a1.543,1.543,0,1,0-.791,2.034A1.545,1.545,0,0,0,379.184,177.634Z",
            transform: "translate(-333.888 -175.716)",
            fill: "#212121",
            opacity: "0.3"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            id: "Path_17757",
            "data-name": "Path 17757",
            d: "M350.086,264.8a1.852,1.852,0,0,1-2.682-2.547l-.868-.823a3.047,3.047,0,0,0,4.417,4.194Z",
            transform: "translate(-253.642 -206.302)",
            fill: "#212121",
            opacity: "0.3"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            id: "Path_17766",
            "data-name": "Path 17766",
            d: "M346.628,264.8a1.852,1.852,0,0,0,2.682-2.547l.867-.823a3.047,3.047,0,0,1-4.417,4.194Z",
            transform: "translate(-170.953 -110.557)",
            fill: "#212121",
            opacity: "0.15"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            id: "Union_11",
            "data-name": "Union 11",
            d: "M2.059,6.97l.989-3.048L0,2.933.283,2.06l3.049.989L4.321,0,5.2.284l-.99,3.048,3.047.989L6.97,5.2l-3.048-.99-.99,3.049Z",
            transform: "translate(6.528 48.598)",
            fill: "#212121",
            stroke: "rgba(0,0,0,0)",
            strokeMiterlimit: "10",
            strokeWidth: "1",
            opacity: "0.3"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            id: "Union_13",
            "data-name": "Union 13",
            d: "M2.059,6.97l.989-3.048L0,2.933.283,2.06l3.049.989L4.321,0,5.2.284l-.99,3.048,3.047.989L6.97,5.2l-3.048-.99-.99,3.049Z",
            transform: "translate(94.294 121.132)",
            fill: "#212121",
            stroke: "rgba(0,0,0,0)",
            strokeMiterlimit: "10",
            strokeWidth: "1",
            opacity: "0.3"
          }), /*#__PURE__*/jsx_runtime_.jsx("path", {
            id: "Union_12",
            "data-name": "Union 12",
            d: "M1.235,4.182l.593-1.829L0,1.759l.17-.524L2,1.829,2.592,0l.525.17L2.523,2l1.828.594-.17.523L2.353,2.523,1.759,4.352Z",
            transform: "translate(107.351 6.528)",
            fill: "#212121",
            stroke: "rgba(0,0,0,0)",
            strokeMiterlimit: "10",
            strokeWidth: "1",
            opacity: "0.3"
          })]
        })]
      })
    })
  })
});

/* harmony default export */ const cart_empty = (EmptyCart);
// EXTERNAL MODULE: external "react-popper"
var external_react_popper_ = __webpack_require__(7755);
;// CONCATENATED MODULE: ./src/utils/use-is-mount.tsx

const useIsMount = () => {
  const isMountRef = (0,external_react_.useRef)(true);
  (0,external_react_.useEffect)(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};
;// CONCATENATED MODULE: ./src/components/cart/cart-button.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const CartButton = ({
  className,
  backgroundCart
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  const isMount = useIsMount();
  const {
    displaySuccess
  } = (0,ui_context/* useUI */.l8)();
  const {
    items,
    total,
    isEmpty,
    totalItems,
    specialPriceTotal
  } = (0,cart_context/* useCart */.jD)();
  const {
    price: cartTotal
  } = (0,use_price/* default */.ZP)({
    amount: specialPriceTotal || total,
    baseAmount: total,
    currencyCode: "VND"
  });
  const {
    0: referenceElement,
    1: setReferenceElement
  } = (0,external_react_.useState)(null);
  const {
    0: popperElement,
    1: setPopperElement
  } = (0,external_react_.useState)(null);
  const {
    0: arrowElement,
    1: setArrowElement
  } = (0,external_react_.useState)(null);
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);
  const {
    styles,
    attributes
  } = (0,external_react_popper_.usePopper)(referenceElement, popperElement, {
    modifiers: [{
      name: "arrow",
      options: {
        element: arrowElement
      }
    }, {
      name: "offset",
      options: {
        offset: [25, -20]
      }
    }],
    placement: "left-end"
  });
  const router = (0,router_.useRouter)();

  const handleOpenCart = () => {
    router.push(routes/* ROUTES.CART */.Z.CART, undefined, {
      locale: router.locale
    });
  };

  const timer = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(() => {
    if (!isMount) {
      if (totalItems !== 0 && !displaySuccess) {
        setShow(true);
      }
    }
  }, [totalItems]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      className: "cart-button-hover flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform",
      onClick: handleOpenCart,
      ref: setReferenceElement,
      onMouseEnter: () => {
        clearTimeout(timer.current);
        setShow(true);
      },
      onMouseLeave: () => {
        timer.current = setTimeout(() => {
          setShow(false);
        }, 500);
      },
      "aria-label": "cart-button",
      children: [/*#__PURE__*/jsx_runtime_.jsx(cart_icon, {
        color: backgroundCart
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: `cart-counter-badge flex items-center justify-center absolute -top-2.5 xl:-top-3 -end-2.5 xl:-end-3 rounded-full font-bold ${className}`,
        children: totalItems
      })]
    }), show && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", _objectSpread(_objectSpread({
      ref: setPopperElement,
      style: styles.popper,
      className: "cart-dropdown-item bg-white shadow-cart max-w-[600px]"
    }, attributes.popper), {}, {
      onMouseEnter: () => {
        clearTimeout(timer.current);
        setShow(true);
      },
      onMouseLeave: () => {
        timer.current = setTimeout(() => {
          setShow(false);
        }, 500);
      },
      children: [!isEmpty ? /*#__PURE__*/jsx_runtime_.jsx(scrollbar/* default */.Z, {
        className: "cart-scrollbar w-full flex-grow overflow-hidden",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "w-full px-5 md:px-7 h-[350px]",
          children: items === null || items === void 0 ? void 0 : items.map(item => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/jsx_runtime_.jsx(cart_item, {
              item: item
            }, item.id)
          }))
        })
      }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "px-5 md:px-7 pt-8 pb-5 flex justify-center flex-col items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(cart_empty, {}), /*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: "text-lg text-heading font-bold pt-8",
          children: t("text-empty-cart")
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        ref: setArrowElement,
        style: _objectSpread(_objectSpread({}, styles.arrow), {}, {
          transform: `translate(-6px, -4px)`
        }),
        className: "arrow"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ui_link/* default */.Z, {
        href: isEmpty === false ? routes/* ROUTES.CART */.Z.CART : "/",
        className: external_classnames_default()("w-full px-5 py-3 md:py-4 flex items-center justify-center bg-heading rounded-md text-sm sm:text-base text-white focus:outline-none transition duration-300 hover:bg-gray-600", {
          "cursor-not-allowed bg-gray-400 hover:bg-gray-400": isEmpty
        }),
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "w-full pe-5 -mt-0.5 py-0.5",
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            className: "font-semibold",
            children: t("Đến trang giỏ hàng")
          })
        }), !isEmpty && /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "ms-auto flex-shrink-0 -mt-0.5 py-0.5",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "border-s border-white pe-5 py-0.5"
          }), cartTotal, "\xA0\u20AB"]
        })]
      })]
    }))]
  });
};

/* harmony default export */ const cart_button = (CartButton);

/***/ }),

/***/ 3719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

};
;