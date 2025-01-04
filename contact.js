"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Contact;
require("../src/contact.css");
//Shane Tawse, #301319122, Date: May 31, 2024

function Contact() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("h1", {
    id: "page"
  }, "Contacts Page"), /*#__PURE__*/React.createElement("p", null, "I'm only an email, phone call or text message away. Lets start a conversation!.  Feel free to contact me for more information"), /*#__PURE__*/React.createElement("h2", {
    id: "social"
  }, "My Contact and Socials"), /*#__PURE__*/React.createElement("div", {
    id: "contactPanel"
  }, /*#__PURE__*/React.createElement("p", null, "A list of available contact options. Please take the time and reach out"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "My Name:"), "  Shane Tawse"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "My Email:"), " shanetawse@msn.com"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "My Phone #:"), " 905-407-6029"))), /*#__PURE__*/React.createElement("div", {
    "class": "contact-form"
  }, /*#__PURE__*/React.createElement("h2", null, "Contact Form"), /*#__PURE__*/React.createElement("form", {
    id: "contactForm"
  }, /*#__PURE__*/React.createElement("label", {
    "for": "name"
  }, "Name:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    "for": "email"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    "for": "message"
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    id: "message",
    name: "message",
    rows: "4",
    required: true
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    alt: "contactMe",
    "class": "button",
    width: "612px",
    height: "791px"
  }, /*#__PURE__*/React.createElement("a", {
    href: "./components/about.jsx"
  }, "Click To Submit"), " "), /*#__PURE__*/React.createElement("div", {
    id: "letsTalkContainer"
  }));
}