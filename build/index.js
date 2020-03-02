'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactTransitionGroup = require('react-transition-group');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var sleep = function (time) { return new Promise(function (resolve) { return setTimeout(resolve, time); }); };
//# sourceMappingURL=sleep.js.map

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".animateur {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding: 0 12px 24px 12px;\n  transition: all 500ms cubic-bezier(0.78, 0.14, 0.15, 0.86); }\n  .animateur.entering {\n    margin-right: -400px; }\n  .animateur.exiting, .animateur.exited {\n    margin-left: -400px; }\n  .animateur.blur-fade {\n    opacity: 1; }\n    .animateur.blur-fade.entering, .animateur.blur-fade.exiting, .animateur.blur-fade.exited {\n      opacity: 0;\n      filter: blur(6px); }\n  .animateur.grow-fade {\n    opacity: 1;\n    transform: scale(1); }\n    .animateur.grow-fade.entering, .animateur.grow-fade.exiting, .animateur.grow-fade.exited {\n      opacity: 0;\n      transform: scale(0.4); }\n\n.content {\n  width: 100%; }\n";
styleInject(css);

var Questions = function (_a) {
    var questions = _a.questions, finishQuestionnaire = _a.finishQuestionnaire, children = _a.children, animation = _a.animation;
    var _b = React.useState(0), currentIndex = _b[0], setCurrentIndex = _b[1];
    var _c = React.useState(true), isIn = _c[0], setIsIn = _c[1];
    var currentQuestion = currentIndex < questions.length ? questions[currentIndex] : null;
    var inProgress = React.useRef(false);
    var nextCard = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (inProgress.current)
                        return [2 /*return*/];
                    // block the animation if animation is in progress
                    inProgress.current = true;
                    // delay of the submit
                    return [4 /*yield*/, sleep(250)];
                case 1:
                    // delay of the submit
                    _a.sent();
                    setIsIn(false);
                    // delay of the animation
                    return [4 /*yield*/, sleep(500)];
                case 2:
                    // delay of the animation
                    _a.sent();
                    setIsIn(true);
                    setNextQuestion(currentIndex);
                    inProgress.current = false;
                    return [2 /*return*/];
            }
        });
    }); };
    var setNextQuestion = function (index) {
        var nextQuestionIndex = index + 1;
        // are we done? finish it
        if (nextQuestionIndex >= questions.length) {
            onFinishQuestionnaire();
            return;
        }
        // finally update the index
        setCurrentIndex(nextQuestionIndex);
        window.scrollTo(0, 0);
    };
    var onFinishQuestionnaire = function () {
        finishQuestionnaire();
    };
    return (React__default.createElement("div", null, currentQuestion && (React__default.createElement(reactTransitionGroup.Transition, { in: isIn, timeout: 500 }, function (status) { return (React__default.createElement("div", { className: "animateur " + status + " " + (animation || "blur-fade") },
        React__default.createElement("div", { className: "content" }, children(nextCard, currentIndex)))); }))));
};
//# sourceMappingURL=Questions.js.map

module.exports = Questions;
