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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/card.js */ \"./src/components/card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { errorCode , entries  } = param;\n    _s();\n    // Handle errors in API call\n    if (errorCode) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_4___default()), {\n            statusCode: errorCode\n        }, void 0, false, {\n            fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n            lineNumber: 11,\n            columnNumber: 12\n        }, this);\n    }\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(5);\n    const [cards, setCards] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(entries.slice(0, visible));\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setCards(entries.slice(0, visible));\n    }, [\n        visible\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        cards.map((entry)=>// <div className=\"card\"> \n                            //   <Card className=\"card\" title={entry.title} desc={entry.description} image={entry.url} />     \n                            // </div>\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                container: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    item: true,\n                                    xs: 4\n                                }, void 0, false, {\n                                    fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, this)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            size: \"small\",\n                            variant: \"contained\",\n                            onClick: ()=>setVisible(visible + 5),\n                            children: \"Load More\"\n                        }, void 0, false, {\n                            fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/eric/PersonalProjects/Studeo-Technical/src/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"koJrep0snklRY/6eoz8FV04FLOU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ1k7QUFDSTtBQUNGO0FBQ0o7QUFDUDs7QUFFaEIsU0FBU08sS0FBTSxLQUFzQixFQUFFO1FBQXhCLEVBQUVDLFVBQVMsRUFBRUMsUUFBTyxFQUFFLEdBQXRCOztJQUM1Qiw0QkFBNEI7SUFDNUIsSUFBSUQsV0FBVztRQUNiLHFCQUFPLDhEQUFDRixtREFBS0E7WUFBQ0ksWUFBWUY7Ozs7OztJQUM1QixDQUFDO0lBRUQsTUFBTSxDQUFDRyxTQUFTQyxXQUFXLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQ08sUUFBUU0sS0FBSyxDQUFDLEdBQUdKO0lBRXBEUixnREFBU0EsQ0FBQyxJQUFNO1FBQ1pXLFNBQVNMLFFBQVFNLEtBQUssQ0FBQyxHQUFHSjtJQUM1QixHQUFHO1FBQUNBO0tBQVE7SUFFZCxxQkFDRTs7MEJBQ0UsOERBQUNYLGtEQUFJQTs7a0NBQ0gsOERBQUNnQjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDQzswQkFDQyw0RUFBQ0M7O3dCQUVHWCxNQUFNWSxHQUFHLENBQUMsQ0FBQ0MsUUFDVCwwQkFBMEI7NEJBQzFCLGtHQUFrRzs0QkFDbEcsU0FBUzswQ0FDVCw4REFBQ3JCLDBEQUFJQTtnQ0FBQ3NCLFNBQVM7MENBQ2IsNEVBQUN0QiwwREFBSUE7b0NBQUN1QixJQUFJO29DQUFDQyxJQUFJOzs7Ozs7Ozs7OztzQ0FLckIsOERBQUN6Qiw0REFBTUE7NEJBQ0wwQixNQUFLOzRCQUNMQyxTQUFROzRCQUNSQyxTQUFTLElBQU1wQixXQUFXRCxVQUFVO3NDQUNyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YLENBQUM7R0E3Q3VCSjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2NhcmQuanMnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvR3JpZCc7XG5pbXBvcnQgRXJyb3IgZnJvbSAnbmV4dC9lcnJvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoIHsgZXJyb3JDb2RlLCBlbnRyaWVzIH0pIHtcbiAgLy8gSGFuZGxlIGVycm9ycyBpbiBBUEkgY2FsbFxuICBpZiAoZXJyb3JDb2RlKSB7XG4gICAgcmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXtlcnJvckNvZGV9IC8+XG4gIH0gXG5cbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoNSk7XG4gIGNvbnN0IFtjYXJkcywgc2V0Q2FyZHNdID0gdXNlU3RhdGUoZW50cmllcy5zbGljZSgwLCB2aXNpYmxlKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHNldENhcmRzKGVudHJpZXMuc2xpY2UoMCwgdmlzaWJsZSkpO1xuICAgIH0sIFt2aXNpYmxlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNhcmRzLm1hcCgoZW50cnkpID0+IChcbiAgICAgICAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+IFxuICAgICAgICAgICAgICAvLyAgIDxDYXJkIGNsYXNzTmFtZT1cImNhcmRcIiB0aXRsZT17ZW50cnkudGl0bGV9IGRlc2M9e2VudHJ5LmRlc2NyaXB0aW9ufSBpbWFnZT17ZW50cnkudXJsfSAvPiAgICAgXG4gICAgICAgICAgICAgIC8vIDwvZGl2PlxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDwvR3JpZD4gICAgICAgXG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiIFxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiIFxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSh2aXNpYmxlICsgNSl9IFxuICAgICAgICAgID4gXG4gICAgICAgICAgICBMb2FkIE1vcmVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICkgXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vbW9jay5jb2Rlcy81MDAnKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuc2xpbmdhY2FkZW15LmNvbS92MS9zYW1wbGUtZGF0YS9waG90b3M/bGltaXQ9NTAnKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgaWYgKHJlc3BvbnNlPy5vaykge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczogeyBcbiAgICAgICAgZW50cmllczogZGF0YS5waG90b3MsXG4gICAgICAgIGVycm9yQ29kZTogZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgXG4gICAgICBwcm9wczoge1xuICAgICAgICBlbnRyaWVzOiBbXSwgXG4gICAgICAgIGVycm9yQ29kZTogZGF0YS5zdGF0dXNDb2RlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkNhcmQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJ1dHRvbiIsIkdyaWQiLCJFcnJvciIsIkhvbWUiLCJlcnJvckNvZGUiLCJlbnRyaWVzIiwic3RhdHVzQ29kZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiY2FyZHMiLCJzZXRDYXJkcyIsInNsaWNlIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJkaXYiLCJtYXAiLCJlbnRyeSIsImNvbnRhaW5lciIsIml0ZW0iLCJ4cyIsInNpemUiLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});