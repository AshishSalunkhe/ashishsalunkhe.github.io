self["webpackHotUpdate_N_E"]("pages/blog/[...slug]",{

/***/ "./pages/blog/[...slug].js":
/*!*********************************!*\
  !*** ./pages/blog/[...slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Blog; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MDXComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/MDXComponents */ "./components/MDXComponents.js");
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/PageTitle */ "./components/PageTitle.js");
/* harmony import */ var _layouts_PostLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/layouts/PostLayout */ "./layouts/PostLayout.js");
/* harmony import */ var next_mdx_remote_hydrate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-mdx-remote/hydrate */ "./node_modules/next-mdx-remote/hydrate.js");
/* harmony import */ var next_mdx_remote_hydrate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote_hydrate__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\My Projects\\ashishsalunkhe.github.io\\pages\\blog\\[...slug].js";




var __N_SSG = true;
function Blog(_ref) {
  var post = _ref.post,
      prev = _ref.prev,
      next = _ref.next;
  var mdxSource = post.mdxSource,
      frontMatter = post.frontMatter;
  var content = next_mdx_remote_hydrate__WEBPACK_IMPORTED_MODULE_4___default()(mdxSource, {
    components: _components_MDXComponents__WEBPACK_IMPORTED_MODULE_1__.default
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: frontMatter.draft !== true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_PostLayout__WEBPACK_IMPORTED_MODULE_3__.default, {
      frontMatter: frontMatter,
      prev: prev,
      next: next,
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mt-24 text-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageTitle__WEBPACK_IMPORTED_MODULE_2__.default, {
        children: ["Under Construction", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          role: "img",
          "aria-label": "roadwork sign",
          children: "\uD83D\uDEA7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }, this)
  }, void 0, false);
}
_c = Blog;

var _c;

$RefreshReg$(_c, "Blog");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9bLi4uc2x1Z10uanMiXSwibmFtZXMiOlsiQmxvZyIsInBvc3QiLCJwcmV2IiwibmV4dCIsIm1keFNvdXJjZSIsImZyb250TWF0dGVyIiwiY29udGVudCIsImh5ZHJhdGUiLCJjb21wb25lbnRzIiwiTURYQ29tcG9uZW50cyIsImRyYWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUE7O0FBNkJlLFNBQVNBLElBQVQsT0FBb0M7QUFBQSxNQUFwQkMsSUFBb0IsUUFBcEJBLElBQW9CO0FBQUEsTUFBZEMsSUFBYyxRQUFkQSxJQUFjO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQUEsTUFDekNDLFNBRHlDLEdBQ2RILElBRGMsQ0FDekNHLFNBRHlDO0FBQUEsTUFDOUJDLFdBRDhCLEdBQ2RKLElBRGMsQ0FDOUJJLFdBRDhCO0FBRWpELE1BQU1DLE9BQU8sR0FBR0MsOERBQU8sQ0FBQ0gsU0FBRCxFQUFZO0FBQ2pDSSxjQUFVLEVBQUVDLDhEQUFhQTtBQURRLEdBQVosQ0FBdkI7QUFJQSxzQkFDRTtBQUFBLGNBQ0dKLFdBQVcsQ0FBQ0ssS0FBWixLQUFzQixJQUF0QixnQkFDQyw4REFBQyx3REFBRDtBQUFZLGlCQUFXLEVBQUVMLFdBQXpCO0FBQXNDLFVBQUksRUFBRUgsSUFBNUM7QUFBa0QsVUFBSSxFQUFFQyxJQUF4RDtBQUFBLGdCQUNHRztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxnQkFLQztBQUFLLGVBQVMsRUFBQyxtQkFBZjtBQUFBLDZCQUNFLDhEQUFDLDBEQUFEO0FBQUEseUNBQ3FCLEdBRHJCLGVBRUU7QUFBTSxjQUFJLEVBQUMsS0FBWDtBQUFpQix3QkFBVyxlQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkosbUJBREY7QUFrQkQ7S0F4QnVCTixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cvWy4uLnNsdWddLjEyYmE0MTJhYmFhOTM0MGM0ZWE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTURYQ29tcG9uZW50cyBmcm9tICdAL2NvbXBvbmVudHMvTURYQ29tcG9uZW50cydcbmltcG9ydCBQYWdlVGl0bGUgZnJvbSAnQC9jb21wb25lbnRzL1BhZ2VUaXRsZSdcbmltcG9ydCBQb3N0TGF5b3V0IGZyb20gJ0AvbGF5b3V0cy9Qb3N0TGF5b3V0J1xuaW1wb3J0IGdlbmVyYXRlUnNzIGZyb20gJ0AvbGliL2dlbmVyYXRlLXJzcydcbmltcG9ydCB7IGZvcm1hdFNsdWcsIGdldEFsbEZpbGVzRnJvbnRNYXR0ZXIsIGdldEZpbGVCeVNsdWcsIGdldEZpbGVzIH0gZnJvbSAnQC9saWIvbWR4J1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IGh5ZHJhdGUgZnJvbSAnbmV4dC1tZHgtcmVtb3RlL2h5ZHJhdGUnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcG9zdHMgPSBnZXRGaWxlcygnYmxvZycpXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHBvc3RzLm1hcCgocCkgPT4gKHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBzbHVnOiBmb3JtYXRTbHVnKHApLnNwbGl0KCcvJyksXG4gICAgICB9LFxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxGaWxlc0Zyb250TWF0dGVyKCdibG9nJylcbiAgY29uc29sZS5sb2coYWxsUG9zdHMpXG4gIGNvbnN0IHBvc3RJbmRleCA9IGFsbFBvc3RzLmZpbmRJbmRleCgocG9zdCkgPT4gZm9ybWF0U2x1Zyhwb3N0LnNsdWcpID09PSBwYXJhbXMuc2x1Zy5qb2luKCcvJykpXG4gIGNvbnN0IHByZXYgPSBhbGxQb3N0c1twb3N0SW5kZXggKyAxXSB8fCBudWxsXG4gIGNvbnN0IG5leHQgPSBhbGxQb3N0c1twb3N0SW5kZXggLSAxXSB8fCBudWxsXG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBnZXRGaWxlQnlTbHVnKCdibG9nJywgcGFyYW1zLnNsdWcpXG5cbiAgLy8gcnNzXG4gIGNvbnN0IHJzcyA9IGdlbmVyYXRlUnNzKGFsbFBvc3RzKVxuICBmcy53cml0ZUZpbGVTeW5jKCcuL3B1YmxpYy9pbmRleC54bWwnLCByc3MpXG5cbiAgcmV0dXJuIHsgcHJvcHM6IHsgcG9zdCwgcHJldiwgbmV4dCB9IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZyh7IHBvc3QsIHByZXYsIG5leHQgfSkge1xuICBjb25zdCB7IG1keFNvdXJjZSwgZnJvbnRNYXR0ZXIgfSA9IHBvc3RcbiAgY29uc3QgY29udGVudCA9IGh5ZHJhdGUobWR4U291cmNlLCB7XG4gICAgY29tcG9uZW50czogTURYQ29tcG9uZW50cyxcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7ZnJvbnRNYXR0ZXIuZHJhZnQgIT09IHRydWUgPyAoXG4gICAgICAgIDxQb3N0TGF5b3V0IGZyb250TWF0dGVyPXtmcm9udE1hdHRlcn0gcHJldj17cHJldn0gbmV4dD17bmV4dH0+XG4gICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgIDwvUG9zdExheW91dD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMjQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8UGFnZVRpdGxlPlxuICAgICAgICAgICAgVW5kZXIgQ29uc3RydWN0aW9ueycgJ31cbiAgICAgICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwicm9hZHdvcmsgc2lnblwiPlxuICAgICAgICAgICAgICDwn5qnXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9QYWdlVGl0bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==