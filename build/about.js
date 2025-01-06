"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = About;
var _thumbnail_IMG_ = _interopRequireDefault(require("../src/assets/thumbnail_IMG_3041.jpg"));
var _shane_res = _interopRequireDefault(require("../src/assets/shane_res.pdf"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//Shane Tawse, #301319122, Date: May 31, 2024

function About() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    id: "aboutMe"
  }, /*#__PURE__*/React.createElement("h1", null, "About Page"), /*#__PURE__*/React.createElement("p", null, "Hello, my name is ", /*#__PURE__*/React.createElement("strong", null, "Shane Tawse")), /*#__PURE__*/React.createElement("img", {
    src: _thumbnail_IMG_["default"],
    alt: "headShot",
    className: "portrait",
    width: "640px",
    height: "497px"
  }), /*#__PURE__*/React.createElement("p", null, "During my Software Engineering journey I have had the pleasure of tackling many challenging projects.  My education has allowed me to learn from some of the great programming minds available in the industry, and I've enjoyed working on complex issues with my peers. I set to become a recent graduate with a Software Engineering Technition degree with a robust foundation in computer programming prinnciples and a passion for developing innovative software solutions. My journey through college has been marked by a commitment to learning and growth, both academically and through hands-on projects.", /*#__PURE__*/React.createElement("n", null), "Throughout my studies, I have honed my skills in various programming launguages, developmentale framework, and software developement methodologies. I have had the opportunety to work on diverse projects, ranging from web applications to mobile apps, which have allowed me to apply my knowledge in real-world scenarios and collaborate effectively within team environments."), /*#__PURE__*/React.createElement("h2", {
    className: "hardWork"
  }, "Check Me Out"), /*#__PURE__*/React.createElement("span", {
    className: "workPride"
  }, "I am driven, and take pride in my work.  I look forward to bringing my skills and experience to help businesses achieve their goals."), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    src: _shane_res["default"],
    alt: "resume",
    className: "resumeBtn",
    onclick: _shane_res["default"],
    width: "612px",
    height: "791px"
  }, /*#__PURE__*/React.createElement("a", {
    href: "../src/assets/shane_res.pdf"
  }, " Click here to check out my resume")), /*#__PURE__*/React.createElement("div", {
    id: "pdfContainer"
  })), /*#__PURE__*/React.createElement("script", null));
}