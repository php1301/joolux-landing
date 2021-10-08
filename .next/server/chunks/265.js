"use strict";
exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 1265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _settings_site_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8833);
/* harmony import */ var _components_common_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4228);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1649);
/* harmony import */ var _components_ui_logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7816);
/* harmony import */ var _contexts_ui_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7014);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(155);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);













const social = [{
  id: 0,
  link: "https://www.facebook.com/jooluxvn/",
  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_9__/* .IoLogoFacebook */ .egd, {}),
  className: "facebook",
  title: "text-facebook"
}, {
  id: 1,
  link: "https://www.youtube.com/channel/UCW9G9kC2-fM-Izb5eGgvSUg",
  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_9__/* .IoLogoYoutube */ .tPx, {}),
  className: "youtube",
  title: "text-youtube"
}, {
  id: 2,
  link: "https://www.instagram.com/jooluxvn/",
  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_9__/* .IoLogoInstagram */ .oVe, {}),
  className: "instagram",
  title: "text-instagram"
}];
function MobileMenu() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
  const {
    0: activeMenus,
    1: setActiveMenus
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    site_header
  } = _settings_site_settings__WEBPACK_IMPORTED_MODULE_3__/* .siteSettings */ .U;
  const {
    closeSidebar
  } = (0,_contexts_ui_context__WEBPACK_IMPORTED_MODULE_6__/* .useUI */ .l8)();
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)("menu");

  const handleArrowClick = (menuName, dept, path) => {
    const newActiveMenus = [...activeMenus];

    if (newActiveMenus.includes(menuName)) {
      const index = newActiveMenus.indexOf(menuName);

      if (index > -1) {
        newActiveMenus.splice(index, 1);
      }
    } else {
      newActiveMenus.push(menuName);
    }

    if (dept === 3) {
      router.push(path);
      return closeSidebar();
    }

    setActiveMenus(newActiveMenus);
  };

  const ListMenu = ({
    dept,
    data,
    hasSubMenu,
    menuName,
    menuIndex,
    className = "",
    path
  }) => data.label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
    className: `mb-0.5 ${className}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex items-center justify-between",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        onClick: () => handleArrowClick(menuName, dept, path),
        className: "w-full text-[15px] menu-item relative py-3 ps-5 md:ps-7 pe-4 transition duration-300 ease-in-out cursor-pointer",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("block w-full", {
            "font-semibold": data === null || data === void 0 ? void 0 : data.bold
          }),
          children: t(`${data.label}`)
        })
      }), hasSubMenu && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "cursor-pointer w-16 md:w-20 h-8 text-lg flex-shrink-0 flex items-center justify-center",
        onClick: () => handleArrowClick(menuName, dept, path),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_10__/* .IoIosArrowDown */ .OId, {
          className: `transition duration-200 ease-in-out transform text-heading ${activeMenus.includes(menuName) ? "-rotate-180" : "rotate-0"}`
        })
      })]
    }), hasSubMenu && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubMenu, {
      dept: dept,
      data: data.subMenu,
      toggle: activeMenus.includes(menuName),
      menuIndex: menuIndex
    })]
  });

  const SubMenu = ({
    dept,
    data,
    toggle,
    menuIndex
  }) => {
    if (!toggle) {
      return null;
    }

    dept = dept + 1;
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
      className: "pt-0.5",
      children: data === null || data === void 0 ? void 0 : data.map((menu, index) => {
        const menuName = `sidebar-submenu-${dept}-${menuIndex}-${index}`;
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListMenu, {
          dept: dept,
          data: menu,
          path: menu.path,
          hasSubMenu: menu.subMenu,
          menuName: menuName,
          menuIndex: index,
          className: dept > 1 && "ps-4"
        }, menuName);
      })
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex flex-col justify-between w-full h-full",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full border-b border-gray-100 flex justify-between items-center relative ps-5 md:ps-7 flex-shrink-0 py-0.5",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_logo__WEBPACK_IMPORTED_MODULE_5__/* .Logo */ .T, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
          className: "flex text-2xl items-center justify-center text-gray-500 px-4 md:px-5 py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60",
          onClick: closeSidebar,
          "aria-label": "close",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_io5__WEBPACK_IMPORTED_MODULE_9__/* .IoClose */ .bjh, {
            className: "text-black mt-1 md:mt-0.5"
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_common_scrollbar__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        className: "menu-scrollbar flex-grow mb-auto",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "flex flex-col py-7 px-0 lg:px-2 text-heading",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: "mobileMenu",
            children: site_header.mobileMenu.map((menu, index) => {
              const dept = 1;
              const menuName = `sidebar-menu-${dept}-${index}`;
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListMenu, {
                dept: dept,
                data: menu,
                hasSubMenu: menu.subMenu,
                menuName: menuName,
                menuIndex: index
              }, menuName);
            })
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex items-center justify-center bg-white border-t border-gray-100 px-7 flex-shrink-0 space-s-1",
        children: social === null || social === void 0 ? void 0 : social.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
          href: item.link,
          className: `text-heading p-5 opacity-60 first:-ms-4 transition duration-300 ease-in hover:opacity-100 ${item.className}`,
          target: "_blank",
          "aria-label": item.title,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "sr-only",
            children: t(`${item.title}`)
          }), item.icon]
        }, index))
      })]
    })
  });
}

/***/ })

};
;