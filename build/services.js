"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Services;
var _programming = _interopRequireDefault(require("../src/assets/programming.gif"));
var _dataArchitecture = _interopRequireDefault(require("../src/assets/data-architecture.gif"));
var _structure = _interopRequireDefault(require("../src/assets/structure.gif"));
var _student = _interopRequireDefault(require("../src/assets/student.gif"));
var _paintBrush = _interopRequireDefault(require("../src/assets/paint-brush.gif"));
require("../src/services.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//Shane Tawse, #301319122, Date: May 31, 2024

function Services() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Services Page"), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    id: "skills"
  }, /*#__PURE__*/React.createElement("li", null, "Programming Knowledge\xA0", /*#__PURE__*/React.createElement("img", {
    src: _programming["default"],
    alt: "comp",
    className: "mySkills",
    width: "50px",
    height: "50px"
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "From front-end to Back-end and everything in between."), /*#__PURE__*/React.createElement("li", null, "Data-Architecture\xA0", /*#__PURE__*/React.createElement("img", {
    src: _dataArchitecture["default"],
    alt: "sql",
    className: "mySkills",
    width: "50px",
    height: "50px"
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "Structure and maintain databases"), /*#__PURE__*/React.createElement("li", null, "Structured, with Leadership Qualities, and Values Teamwork\xA0", /*#__PURE__*/React.createElement("img", {
    src: _structure["default"],
    alt: "medal",
    className: "mySkills",
    width: "50px",
    height: "50px"
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "The go to when problems need solving"), /*#__PURE__*/React.createElement("li", null, "Constant Learner\xA0", /*#__PURE__*/React.createElement("img", {
    src: _student["default"],
    alt: "question",
    className: "mySkills",
    width: "50px",
    height: "50px"
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "From new technologies to new software programs, I can learn them all."), /*#__PURE__*/React.createElement("li", null, "Eye for deatail\xA0", /*#__PURE__*/React.createElement("img", {
    src: _paintBrush["default"],
    alt: "focus",
    className: "mySkills",
    width: "50px",
    height: "50px"
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "Leaves no stone unturned when assessing and solving business solutions."))));
}