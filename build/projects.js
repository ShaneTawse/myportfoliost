"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Projects;
require("../src/project.css");
var _Screenshot = _interopRequireDefault(require("../src/assets/Screenshot 2024-05-29 191704.png"));
var _Screenshot2 = _interopRequireDefault(require("../src/assets/Screenshot 2024-05-29 191620.png"));
var _Screenshot3 = _interopRequireDefault(require("../src/assets/Screenshot 2024-05-29 192150.png"));
var _Screenshot4 = _interopRequireDefault(require("../src/assets/Screenshot 2024-05-29 192016.png"));
var _Screenshot5 = _interopRequireDefault(require("../src/assets/Screenshot 2024-05-29 191740.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//Shane Tawse, #301319122, Date: May 31, 2024

function Projects() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("h1", null, "Projects Page"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h3", null, "What Skills I Bring"), /*#__PURE__*/React.createElement("span", {
    className: "skillDesc"
  }, "I am a skilled and passionate Software Engineering student with the love for learning. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript,C#, Java Programming, Python, SQL and Linux."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", null, "My List of Projects"), /*#__PURE__*/React.createElement("div", {
    id: "myProjects"
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#kat"
  }, "Go to Kitty Cat Selector")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#doctor"
  }, "Go to Medical Alert Application")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#ladyBug"
  }, "Go to Jumping Bug Game Application")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#oracle"
  }, "Go to E-Commerce DataBase")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "#pictureThis"
  }, "Go to Photo Selecter")))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h2", null, "My Favourite Projects"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "worksImgs"
  }, /*#__PURE__*/React.createElement("h3", {
    id: "ladyBug"
  }, "Jumping Bug Game"), /*#__PURE__*/React.createElement("p", null, "This was an individual project that I had finished for Web Developement.  I found it to be very challenging at first but by the end it helped to broaden my knowledge on how to set the attributes intervals, taught me how to create and automatically update a leaderboard as an extra feature I encorporated into the project."), /*#__PURE__*/React.createElement("img", {
    src: _Screenshot["default"],
    alt: "project1",
    className: "projectImg"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h3", {
    id: "kat"
  }, "Kitty Cat Selector"), /*#__PURE__*/React.createElement("p", null, "This was a very fun individual project for me as I am a natural lover of pets and animals.  This project taught me how to create a lightbox scroller that allowed the user to scroll through n array of images, which also allowed for the user to click the thumnail to reveal a zoomed in image of the cat. If the user decided they liked the cat image they then were able to click a button that allowed then to add the cat to there favourites section with a set limit allowed. If limit was reached the user would be promted to remove a cat to continue to add to their favourites list."), /*#__PURE__*/React.createElement("img", {
    src: _Screenshot2["default"],
    alt: "project2",
    className: "projectImg"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h3", {
    id: "oracle"
  }, "SQL E-Commerce Database"), /*#__PURE__*/React.createElement("p", null, "This was a very mind bending team of 2 project that I really enjoyed constructing. Being able to construct a database from the ground up allowed me to turn my focus to strict detailed work. As a team we construced a e-commerce database and were able to go through a rigorous testing phase running queryies to provide the desired outcome.  I was able to see a e-commerce company from supplier to consumer and was able to see how the relationship between shipping, bussiness, and consumer through table manipulation. It was also fun to see how the tables could be joined through primary  and forieng keys, and I found it very benifical to learn how a shopping cart can be created."), /*#__PURE__*/React.createElement("img", {
    src: _Screenshot3["default"],
    alt: "project3",
    className: "projectImg"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h3", {
    id: "doctor"
  }, "Medical Alerts Application"), /*#__PURE__*/React.createElement("p", null, "This was a team project that I also really enjoyed and was able to take on a leadership role to accomplish our goal. Being able to be the one setting up meetings and laing out the teams goals every week taught me the art of being organized. I found my major takeaway from this project was the importance of accessibility. Making your application not only usable by your average person but rather taking into consideration those who may have disabilities or imparements. It also forced us to dive into what type of programs we would need to Maker it compatible on different platforms and divices."), /*#__PURE__*/React.createElement("img", {
    src: _Screenshot4["default"],
    alt: "project4",
    className: "projectImg"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h3", {
    id: "pictureThis"
  }, "API Photo Selector"), /*#__PURE__*/React.createElement("p", null, "This was a small solo project that was fun and challenging for me to accomplish. By the end of this project I found my understanding for debbugging was taken to another level and I was able to learn how to fetch images from an external API for the first time."), /*#__PURE__*/React.createElement("img", {
    src: _Screenshot5["default"],
    alt: "project5",
    className: "projectImg"
  })), /*#__PURE__*/React.createElement("button", {
    id: "pipelineBtn",
    alt: "myWork"
  }, /*#__PURE__*/React.createElement("a", {
    href: "./components/contact"
  }, "See Whats To Come")))));
}