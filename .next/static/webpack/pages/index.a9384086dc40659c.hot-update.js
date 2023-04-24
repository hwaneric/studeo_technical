"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/card.js */ \"./src/components/card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { errorCode , data  } = param;\n    _s();\n    // Handle errors in API call\n    if (errorCode) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_4___default()), {\n            statusCode: errorCode\n        }, void 0, false, {\n            fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n            lineNumber: 11,\n            columnNumber: 12\n        }, this);\n    }\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(5);\n    const [cards, setCards] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(data.slice(0, visible));\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setCards(data.slice(0, visible));\n    }, [\n        visible\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Studeo Technical Project\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Displays grid of cards called from test API with option to load more cards\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        container: true,\n                        spacing: 2,\n                        children: cards.map((card)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                item: true,\n                                xs: 6,\n                                md: 3,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    title: card.title,\n                                    desc: card.description,\n                                    image: 5\n                                }, void 0, false, {\n                                    fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 17\n                                }, this)\n                            }, card.id, false, {\n                                fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"show-more\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            size: \"medium\",\n                            variant: \"contained\",\n                            onClick: ()=>setVisible(visible + 5),\n                            children: \"Show More\"\n                        }, void 0, false, {\n                            fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"zZoqdh2fa9sGAKmPi4o8CQdiy3g=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ1k7QUFDSTtBQUNGO0FBQ0o7QUFDUDs7QUFFaEIsU0FBU08sS0FBTSxLQUFtQixFQUFFO1FBQXJCLEVBQUVDLFVBQVMsRUFBRUMsS0FBSSxFQUFFLEdBQW5COztJQUM1Qiw0QkFBNEI7SUFDNUIsSUFBSUQsV0FBVztRQUNiLHFCQUFPLDhEQUFDRixtREFBS0E7WUFBQ0ksWUFBWUY7Ozs7OztJQUM1QixDQUFDO0lBRUQsTUFBTSxDQUFDRyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQ08sS0FBS00sS0FBSyxDQUFDLEdBQUdKO0lBRWpEUixnREFBU0EsQ0FBQyxJQUFNO1FBQ1pXLFNBQVNMLEtBQUtNLEtBQUssQ0FBQyxHQUFHSjtJQUN6QixHQUFHO1FBQUNBO0tBQVE7SUFFZCxxQkFDRTs7MEJBQ0UsOERBQUNYLGtEQUFJQTs7a0NBQ0gsOERBQUNnQjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUVuQyw4REFBQ0M7O2tDQUNDLDhEQUFDZiwwREFBSUE7d0JBQUNnQixTQUFTO3dCQUFDQyxTQUFTO2tDQUVyQlQsTUFBTVUsR0FBRyxDQUFDLENBQUNDLHFCQUNULDhEQUFDbkIsMERBQUlBO2dDQUFlb0IsSUFBSTtnQ0FBQ0MsSUFBSTtnQ0FBR0MsSUFBSTswQ0FFbEMsNEVBQUMxQiwyREFBSUE7b0NBQUNlLE9BQU9RLEtBQUtSLEtBQUs7b0NBQUVZLE1BQU1KLEtBQUtLLFdBQVc7b0NBQUVDLE9BQU87Ozs7OzsrQkFGL0NOLEtBQUtPLEVBQUU7Ozs7Ozs7Ozs7a0NBTXhCLDhEQUFDQzt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQzdCLDREQUFNQTs0QkFDTDhCLE1BQUs7NEJBQ0xDLFNBQVE7NEJBQ1JDLFNBQVMsSUFBTXhCLFdBQVdELFVBQVU7c0NBQ3JDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1gsQ0FBQztHQXpDdUJKO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZC5qcydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcbmltcG9ydCBFcnJvciBmcm9tICduZXh0L2Vycm9yJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSggeyBlcnJvckNvZGUsIGRhdGEgfSkge1xuICAvLyBIYW5kbGUgZXJyb3JzIGluIEFQSSBjYWxsXG4gIGlmIChlcnJvckNvZGUpIHtcbiAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9e2Vycm9yQ29kZX0gLz5cbiAgfSBcblxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZSg1KTtcbiAgY29uc3QgW2NhcmRzLCBzZXRDYXJkc10gPSB1c2VTdGF0ZShkYXRhLnNsaWNlKDAsIHZpc2libGUpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0Q2FyZHMoZGF0YS5zbGljZSgwLCB2aXNpYmxlKSk7XG4gICAgfSwgW3Zpc2libGVdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlN0dWRlbyBUZWNobmljYWwgUHJvamVjdDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJEaXNwbGF5cyBncmlkIG9mIGNhcmRzIGNhbGxlZCBmcm9tIHRlc3QgQVBJIHdpdGggb3B0aW9uIHRvIGxvYWQgbW9yZSBjYXJkc1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNhcmRzLm1hcCgoY2FyZCkgPT4gKFxuICAgICAgICAgICAgICA8R3JpZCBrZXk9e2NhcmQuaWR9IGl0ZW0geHM9ezZ9IG1kPXszfT5cbiAgICAgICAgICAgICAgICB7LyogPENhcmQgdGl0bGU9e2NhcmQudGl0bGV9IGRlc2M9e2NhcmQuZGVzY3JpcHRpb259IGltYWdlPXtjYXJkLnVybH0gLz4gKi99XG4gICAgICAgICAgICAgICAgPENhcmQgdGl0bGU9e2NhcmQudGl0bGV9IGRlc2M9e2NhcmQuZGVzY3JpcHRpb259IGltYWdlPXs1fSAvPiAgICAgXG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPiAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1tb3JlXCI+XG4gICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIiBcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIiBcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUodmlzaWJsZSArIDUpfSBcbiAgICAgICAgICA+IFxuICAgICAgICAgICAgU2hvdyBNb3JlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApIFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBsZXQgcmVzcG9uc2U7XG4gIGxldCBkYXRhO1xuICB0cnkge1xuICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnNsaW5nYWNhZGVteS5jb20vdjEvc2FtcGxlLWRhdGEvcGhvdG9zP2xpbWl0PTUwJyk7XG4gICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgfSBjYXRjaCB7XG4gICAgY29uc29sZS5sb2coXCJUaGVyZSB3YXMgYSBwcm9ibGVtIGluIHRoZSBBUEkgY2FsbC5cIilcbiAgfVxuXG4gIGlmIChyZXNwb25zZT8ub2spIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHsgXG4gICAgICAgIGRhdGE6IGRhdGEucGhvdG9zLFxuICAgICAgICBlcnJvckNvZGU6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHJlc3BvbnNlID09PSB1bmRlZmluZWQpe1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgZXJyb3JDb2RlOiA1MDJcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgXG4gICAgICBwcm9wczoge1xuICAgICAgICBkYXRhOiBbXSwgXG4gICAgICAgIGVycm9yQ29kZTogZGF0YS5zdGF0dXNDb2RlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkNhcmQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJ1dHRvbiIsIkdyaWQiLCJFcnJvciIsIkhvbWUiLCJlcnJvckNvZGUiLCJkYXRhIiwic3RhdHVzQ29kZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiY2FyZHMiLCJzZXRDYXJkcyIsInNsaWNlIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJtYWluIiwiY29udGFpbmVyIiwic3BhY2luZyIsIm1hcCIsImNhcmQiLCJpdGVtIiwieHMiLCJtZCIsImRlc2MiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJzaXplIiwidmFyaWFudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});