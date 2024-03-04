var _jsxFileName = "src\\login.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { latihan, master } from "./main.js";
import { setUser } from "./user.js";

export var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Login);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.masuk = function () {
            var namaUser = document.querySelector('#username').value;
            if (namaUser == 'admin') {
                master();
            } else {
                setUser(namaUser);
                latihan();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Login, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                    },
                    __self: this
                },
                React.createElement("br", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                    },
                    __self: this
                }),
                React.createElement(
                    "h1",
                    { className: "display-5 fw-bold", align: "center", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        },
                        __self: this
                    },
                    "LOGIN"
                ),
                React.createElement("hr", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    },
                    __self: this
                }),
                React.createElement(
                    "div",
                    { className: "container", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 22
                        },
                        __self: this
                    },
                    React.createElement(
                        "div",
                        { className: "col-12", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 23
                            },
                            __self: this
                        },
                        React.createElement("input", { type: "text", className: "form-control", id: "username", placeholder: "Enter your username", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 24
                            },
                            __self: this
                        }),
                        React.createElement("br", {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 25
                            },
                            __self: this
                        }),
                        React.createElement(
                            "button",
                            { type: "submit", className: "btn btn-primary", onClick: function onClick() {
                                    _this2.masuk();
                                }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 26
                                },
                                __self: this
                            },
                            "Login"
                        )
                    )
                )
            );
        }
    }]);

    return Login;
}(React.Component);