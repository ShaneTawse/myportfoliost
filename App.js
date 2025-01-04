"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("./App.css");
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _MainRouter = _interopRequireDefault(require("../MainRouter.jsx"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//Shane Tawse, #301319122, Date: May 31, 2024

var App = function App() {
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_MainRouter["default"], null));
};
var _default = exports["default"] = App;