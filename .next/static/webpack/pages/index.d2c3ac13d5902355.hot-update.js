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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/card.js */ \"./src/components/card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { errorCode , entries  } = param;\n    _s();\n    if (errorCode) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_4___default()), {\n            statusCode: 404\n        }, void 0, false, {\n            fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n            lineNumber: 10,\n            columnNumber: 12\n        }, this);\n    }\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(5);\n    const [cards, setCards] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(entries.slice(0, visible));\n    const loadMore = ()=>{\n        setVisible(visible + 5);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setCards(entries.slice(0, visible));\n    }, [\n        visible\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        cards.map((entry)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                title: entry.title,\n                                desc: entry.body,\n                                image: \"https://picsum.photos/2000/3000\"\n                            }, void 0, false, {\n                                fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, this)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            size: \"small\",\n                            variant: \"contained\",\n                            onClick: loadMore,\n                            children: \"Load More\"\n                        }, void 0, false, {\n                            fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"koJrep0snklRY/6eoz8FV04FLOU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDWTtBQUNJO0FBQ0Y7QUFDWDtBQUMrQjs7QUFFL0MsU0FBU08sS0FBTSxLQUFzQixFQUFFO1FBQXhCLEVBQUVDLFVBQVMsRUFBRUMsUUFBTyxFQUFFLEdBQXRCOztJQUM1QixJQUFJRCxXQUFXO1FBQ2IscUJBQU8sOERBQUNILG1EQUFLQTtZQUFDSyxZQUFZOzs7Ozs7SUFDNUIsQ0FBQztJQUVELE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUNPLFFBQVFNLEtBQUssQ0FBQyxHQUFHSjtJQUVwRCxNQUFNSyxXQUFXLElBQU07UUFDckJKLFdBQVdELFVBQVU7SUFDdkI7SUFFQVIsZ0RBQVNBLENBQUMsSUFBTTtRQUNaVyxTQUFTTCxRQUFRTSxLQUFLLENBQUMsR0FBR0o7SUFDNUIsR0FBRztRQUFDQTtLQUFRO0lBRWQscUJBQ0U7OzBCQUNFLDhEQUFDWCxrREFBSUE7O2tDQUNILDhEQUFDaUI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ0M7MEJBQ0MsNEVBQUNDOzt3QkFFR1osTUFBTWEsR0FBRyxDQUFDLENBQUNDLHNCQUNULDhEQUFDMUIsMkRBQUlBO2dDQUFDZ0IsT0FBT1UsTUFBTVYsS0FBSztnQ0FBRVcsTUFBTUQsTUFBTUUsSUFBSTtnQ0FBRUMsT0FBTTs7Ozs7O3NDQUV0RCw4REFBQzFCLDREQUFNQTs0QkFBQzJCLE1BQUs7NEJBQVFDLFNBQVE7NEJBQVlDLFNBQVNqQjtzQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt2RSxDQUFDO0dBbkN1QlQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkLmpzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgRXJyb3IgZnJvbSAnbmV4dC9lcnJvcic7XG5pbXBvcnQgeyBnZXRMaXN0SXRlbUF2YXRhclV0aWxpdHlDbGFzcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCB7IGVycm9yQ29kZSwgZW50cmllcyB9KSB7XG4gIGlmIChlcnJvckNvZGUpIHtcbiAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezQwNH0gLz5cbiAgfSBcblxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZSg1KTtcbiAgY29uc3QgW2NhcmRzLCBzZXRDYXJkc10gPSB1c2VTdGF0ZShlbnRyaWVzLnNsaWNlKDAsIHZpc2libGUpKTtcblxuICBjb25zdCBsb2FkTW9yZSA9ICgpID0+IHtcbiAgICBzZXRWaXNpYmxlKHZpc2libGUgKyA1KTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBzZXRDYXJkcyhlbnRyaWVzLnNsaWNlKDAsIHZpc2libGUpKTtcbiAgICB9LCBbdmlzaWJsZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBjYXJkcy5tYXAoKGVudHJ5KSA9PiAoXG4gICAgICAgICAgICAgIDxDYXJkIHRpdGxlPXtlbnRyeS50aXRsZX0gZGVzYz17ZW50cnkuYm9keX0gaW1hZ2U9XCJodHRwczovL3BpY3N1bS5waG90b3MvMjAwMC8zMDAwXCIgLz4gICAgICAgICAgICBcbiAgICAgICAgICApKX1cbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiBvbkNsaWNrPXtsb2FkTW9yZX0gPkxvYWQgTW9yZTwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKSBcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgbGV0IHJlc3BvbnNlO1xuICBsZXQgZGF0YTtcblxuICAgIC8vIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vbW9jay5jb2Rlcy80MDQnKTtcbiAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKTtcbiAgICBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIFxuXG5cbiAgaWYgKHJlc3BvbnNlPy5vaykge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczogeyBcbiAgICAgICAgZW50cmllczogZGF0YSxcbiAgICAgICAgZXJyb3JDb2RlOiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyBcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGVudHJpZXM6IFtdLCBcbiAgICAgICAgZXJyb3JDb2RlOiBkYXRhLnN0YXR1c0NvZGVcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG5cbiAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJyk7XG4gIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vbW9jay5jb2Rlcy80MDQnKTtcbiAgLy8gY29uc3QgZXJyb3JDb2RlID0gcmVzcG9uc2Uub2sgPyBmYWxzZSA6IHJlc3BvbnNlLnN0YXR1c0NvZGU7XG4gIC8vIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgLy8gaWYgKCFkYXRhKSB7XG4gIC8vICAgcmV0dXJuIHtcbiAgLy8gICAgIG5vdEZvdW5kOiB0cnVlLFxuICAvLyAgIH1cbiAgLy8gfVxuXG4gIC8vIHJldHVybiB7XG4gIC8vICAgcHJvcHM6IHtcbiAgLy8gICAgIGVycm9yczogZXJyb3JDb2RlLFxuICAvLyAgICAgZW50cmllczogZGF0YSxcbiAgLy8gICB9LFxuICAvLyB9XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkNhcmQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJ1dHRvbiIsIkVycm9yIiwiZ2V0TGlzdEl0ZW1BdmF0YXJVdGlsaXR5Q2xhc3MiLCJIb21lIiwiZXJyb3JDb2RlIiwiZW50cmllcyIsInN0YXR1c0NvZGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImNhcmRzIiwic2V0Q2FyZHMiLCJzbGljZSIsImxvYWRNb3JlIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJkaXYiLCJtYXAiLCJlbnRyeSIsImRlc2MiLCJib2R5IiwiaW1hZ2UiLCJzaXplIiwidmFyaWFudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});