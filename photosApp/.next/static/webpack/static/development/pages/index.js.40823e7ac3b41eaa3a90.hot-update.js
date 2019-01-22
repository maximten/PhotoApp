webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_pages_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/pages.css */ "./css/pages.css");
/* harmony import */ var _css_pages_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_pages_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");

var _jsxFileName = "/home/nazym/Desktop/Task/Assignment/photosApp/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var API = 'https://api.unsplash.com/photos/?client_id=7b42abfc5344bebed9c68152fa09309914b18c8a40af0ae2c44be28eb1294a8d';
var d = [];

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "loadData",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fetch(API).then(function (data) {
                return data.json();
              }).then(function (data) {
                _this.setState({
                  photos: data,
                  filteredPhoto: data
                });
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _this.state = {
      photos: null,
      filterePhoto: null,
      search: null
    };
    _this.doSearch = _this.doSearch.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "doSearch",
    value: function doSearch() {
      console.log(this.refs.name.value);
      this.setState({
        search: this.refs.name.value //.substr(0,15)

      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var filtered = this.state.filteredPhoto.filter(function (item, i) {
        return item.user.username.toLowerCase().indexOf(_this2.state.search.toLowerCase()) !== -1;
      });
      console.log(this.state.photos);

      if (this.state.photos == null) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, "loading");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "searchBar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
          id: "SearchItem",
          className: "SearchItem",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          class: "ui action left icon input",
          id: "search",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          placeholder: "Search...",
          ref: "name",
          onInput: this.doSearch,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
          className: "search link icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          className: "ui primary button",
          id: "btn1",
          onClick: this.doSearchs,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, "Search")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "card-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, filtered.map(function (item, key) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "card",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
            src: item.urls.raw,
            className: "img",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
            className: "container",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          }, item.user.username)));
        })));
      }
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.40823e7ac3b41eaa3a90.hot-update.js.map