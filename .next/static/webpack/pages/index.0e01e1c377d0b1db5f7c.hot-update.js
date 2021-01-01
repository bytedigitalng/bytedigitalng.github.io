webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_Splash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/Splash */ "./layout/Splash.js");
/* harmony import */ var _components_SocialLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SocialLinks */ "./components/SocialLinks.js");


var _jsxFileName = "C:\\laragon\\www\\html\\bytereact\\pages\\index.js",
    _this = undefined;



var pageTitle = {
  title: "Byte Digital - Digital Creative Services"
};

var Home = function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_Splash__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: pageTitle,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container text-center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "hero-content style1",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "assets/img/logo/byte_logo_md.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: " text-blue",
            children: ["We are a digital ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 30
            }, _this), " creative agency"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            className: "text-lowercase text-blue font-weight-normal",
            children: "creating web and mobile services and solutions for businesses and brands."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "text-center"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }, _this);
};

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsicGFnZVRpdGxlIiwidGl0bGUiLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFJQSxTQUFTLEdBQUc7QUFDZEMsT0FBSyxFQUFFO0FBRE8sQ0FBaEI7O0FBSUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxzQkFDWCxxRUFBQyxzREFBRDtBQUFRLFFBQUksRUFBRUYsU0FBZDtBQUFBLDJCQUNFO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLHVCQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLHFCQUFmO0FBQUEsa0NBQ0U7QUFBQSxtQ0FBSTtBQUFLLGlCQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUkscUJBQVMsRUFBQyxZQUFkO0FBQUEseURBQ21CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUtFO0FBQUkscUJBQVMsRUFBQyw2Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRixlQVNFO0FBQUsscUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFc7QUFBQSxDQUFiOztLQUFNRSxJO0FBb0JTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wZTAxZTFjMzc3ZDBiMWRiNWY3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwbGFzaCBmcm9tIFwiLi4vbGF5b3V0L1NwbGFzaFwiO1xyXG5pbXBvcnQgU29jaWFsTGlua3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvU29jaWFsTGlua3NcIjtcclxuXHJcbmxldCBwYWdlVGl0bGUgPSB7XHJcbiAgdGl0bGU6IFwiQnl0ZSBEaWdpdGFsIC0gRGlnaXRhbCBDcmVhdGl2ZSBTZXJ2aWNlc1wiLFxyXG59O1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IChcclxuICA8U3BsYXNoIGRhdGE9e3BhZ2VUaXRsZX0+XHJcbiAgICA8bWFpbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tY29udGVudCBzdHlsZTFcIj5cclxuICAgICAgICAgIDxoMT48aW1nIHNyYz1cImFzc2V0cy9pbWcvbG9nby9ieXRlX2xvZ29fbWQuc3ZnXCIvPjwvaDE+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIHRleHQtYmx1ZVwiPlxyXG4gICAgICAgICAgICBXZSBhcmUgYSBkaWdpdGFsIDxiciAvPiBjcmVhdGl2ZSBhZ2VuY3lcclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1sb3dlcmNhc2UgdGV4dC1ibHVlIGZvbnQtd2VpZ2h0LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICBjcmVhdGluZyB3ZWIgYW5kIG1vYmlsZSBzZXJ2aWNlcyBhbmQgc29sdXRpb25zIGZvciBidXNpbmVzc2VzIGFuZFxyXG4gICAgICAgICAgICBicmFuZHMuXHJcbiAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICA8L1NwbGFzaD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=