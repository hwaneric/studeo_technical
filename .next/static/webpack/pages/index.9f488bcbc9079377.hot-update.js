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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/card.js */ \"./src/components/card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { errorCode , entries  } = param;\n    _s();\n    // Handle errors in API call\n    if (errorCode) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_4___default()), {\n            statusCode: errorCode\n        }, void 0, false, {\n            fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n            lineNumber: 11,\n            columnNumber: 12\n        }, this);\n    }\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(5);\n    const [cards, setCards] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(entries.slice(0, visible));\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setCards(entries.slice(0, visible));\n    }, [\n        visible\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        container: true,\n                        spacing: 2,\n                        children: cards.map((entry)=>// <div className=\"card\"> \n                            //   <Card className=\"card\" title={entry.title} desc={entry.description} image={entry.url} />     \n                            // </div>\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                item: true,\n                                xs: 4,\n                                md: 3,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_card_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    className: \"card\",\n                                    title: entry.title,\n                                    desc: entry.description,\n                                    image: entry.url\n                                }, void 0, false, {\n                                    fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                                lineNumber: 38,\n                                columnNumber: 17\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        size: \"small\",\n                        variant: \"contained\",\n                        onClick: ()=>setVisible(visible + 5),\n                        justifyContent: \"center\",\n                        children: \"Load More\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"koJrep0snklRY/6eoz8FV04FLOU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ1k7QUFDSTtBQUNGO0FBQ0o7QUFDUDs7QUFFaEIsU0FBU08sS0FBTSxLQUFzQixFQUFFO1FBQXhCLEVBQUVDLFVBQVMsRUFBRUMsUUFBTyxFQUFFLEdBQXRCOztJQUM1Qiw0QkFBNEI7SUFDNUIsSUFBSUQsV0FBVztRQUNiLHFCQUFPLDhEQUFDRixtREFBS0E7WUFBQ0ksWUFBWUY7Ozs7OztJQUM1QixDQUFDO0lBRUQsTUFBTSxDQUFDRyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQ08sUUFBUU0sS0FBSyxDQUFDLEdBQUdKO0lBRXBEUixnREFBU0EsQ0FBQyxJQUFNO1FBQ1pXLFNBQVNMLFFBQVFNLEtBQUssQ0FBQyxHQUFHSjtJQUM1QixHQUFHO1FBQUNBO0tBQVE7SUFFZCxxQkFDRTs7MEJBQ0UsOERBQUNYLGtEQUFJQTs7a0NBQ0gsOERBQUNnQjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQzs7a0NBRUMsOERBQUNsQiwwREFBSUE7d0JBQUNtQixTQUFTO3dCQUFDQyxTQUFTO2tDQUVyQlosTUFBTWEsR0FBRyxDQUFDLENBQUNDLFFBQ1QsMEJBQTBCOzRCQUMxQixrR0FBa0c7NEJBQ2xHLFNBQVM7MENBRVAsOERBQUN0QiwwREFBSUE7Z0NBQUN1QixJQUFJO2dDQUFDQyxJQUFJO2dDQUFHQyxJQUFJOzBDQUNwQiw0RUFBQzdCLDJEQUFJQTtvQ0FBQzhCLFdBQVU7b0NBQU9mLE9BQU9XLE1BQU1YLEtBQUs7b0NBQUVnQixNQUFNTCxNQUFNTSxXQUFXO29DQUFFQyxPQUFPUCxNQUFNUSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUs1Riw4REFBQy9CLDREQUFNQTt3QkFDTGdDLE1BQUs7d0JBQ0xDLFNBQVE7d0JBQ1JDLFNBQVMsSUFBTTFCLFdBQVdELFVBQVU7d0JBQ3BDNEIsZ0JBQWU7a0NBQ2hCOzs7Ozs7Ozs7Ozs7OztBQU1YLENBQUM7R0EvQ3VCaEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJkLmpzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnO1xuaW1wb3J0IEVycm9yIGZyb20gJ25leHQvZXJyb3InO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCB7IGVycm9yQ29kZSwgZW50cmllcyB9KSB7XG4gIC8vIEhhbmRsZSBlcnJvcnMgaW4gQVBJIGNhbGxcbiAgaWYgKGVycm9yQ29kZSkge1xuICAgIHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17ZXJyb3JDb2RlfSAvPlxuICB9IFxuXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKDUpO1xuICBjb25zdCBbY2FyZHMsIHNldENhcmRzXSA9IHVzZVN0YXRlKGVudHJpZXMuc2xpY2UoMCwgdmlzaWJsZSkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBzZXRDYXJkcyhlbnRyaWVzLnNsaWNlKDAsIHZpc2libGUpKTtcbiAgICB9LCBbdmlzaWJsZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgXG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBjYXJkcy5tYXAoKGVudHJ5KSA9PiAoXG4gICAgICAgICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPiBcbiAgICAgICAgICAgICAgLy8gICA8Q2FyZCBjbGFzc05hbWU9XCJjYXJkXCIgdGl0bGU9e2VudHJ5LnRpdGxlfSBkZXNjPXtlbnRyeS5kZXNjcmlwdGlvbn0gaW1hZ2U9e2VudHJ5LnVybH0gLz4gICAgIFxuICAgICAgICAgICAgICAvLyA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0gbWQ9ezN9PlxuICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiY2FyZFwiIHRpdGxlPXtlbnRyeS50aXRsZX0gZGVzYz17ZW50cnkuZGVzY3JpcHRpb259IGltYWdlPXtlbnRyeS51cmx9IC8+ICAgICBcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+IFxuICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIiBcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIiBcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUodmlzaWJsZSArIDUpfSBcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PSdjZW50ZXInXG4gICAgICAgICAgPiBcbiAgICAgICAgICAgIExvYWQgTW9yZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApIFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL21vY2suY29kZXMvNTAwJyk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnNsaW5nYWNhZGVteS5jb20vdjEvc2FtcGxlLWRhdGEvcGhvdG9zP2xpbWl0PTUwJyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGlmIChyZXNwb25zZT8ub2spIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHsgXG4gICAgICAgIGVudHJpZXM6IGRhdGEucGhvdG9zLFxuICAgICAgICBlcnJvckNvZGU6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB7IFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgZW50cmllczogW10sIFxuICAgICAgICBlcnJvckNvZGU6IGRhdGEuc3RhdHVzQ29kZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJDYXJkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJHcmlkIiwiRXJyb3IiLCJIb21lIiwiZXJyb3JDb2RlIiwiZW50cmllcyIsInN0YXR1c0NvZGUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImNhcmRzIiwic2V0Q2FyZHMiLCJzbGljZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY29udGFpbmVyIiwic3BhY2luZyIsIm1hcCIsImVudHJ5IiwiaXRlbSIsInhzIiwibWQiLCJjbGFzc05hbWUiLCJkZXNjIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInVybCIsInNpemUiLCJ2YXJpYW50Iiwib25DbGljayIsImp1c3RpZnlDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});