var _jsxFileName = "src\\latihan.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { login } from "./main.js";
import { getSoal } from "./soal.js";
import { getUser } from "./user.js";

export var Latihan = function (_React$Component) {
    _inherits(Latihan, _React$Component);

    function Latihan(p) {
        _classCallCheck(this, Latihan);

        var _this = _possibleConstructorReturn(this, (Latihan.__proto__ || Object.getPrototypeOf(Latihan)).call(this, p));

        _this.keluar = function () {
            login();
        };

        _this.isiPenampung = function () {
            var show = document.querySelector('#penampung');
            show.innerHTML = '';
            _this.state.soal.forEach(function (e) {
                show.innerHTML += e + ' ';
            });
        };

        _this.pencetSpasi = function (e) {
            var isi = e.target;
            if (e.code == 'Space') {
                if (isi.value == _this.state.soal[0]) {
                    var new_skor = _this.state.score + 1;
                    var new_soal = _this.state.soal.filter(function (e) {
                        return e != _this.state.soal[0];
                    });
                    _this.setState({
                        score: new_skor,
                        soal: new_soal
                    });
                } else {
                    var _new_skor = _this.state.score - 2;
                    _this.setState({
                        score: _new_skor
                    });
                }
                isi.value = '';
            }
            e.target.value = e.target.value.trim();
        };

        _this.restart = function () {
            _this.setState({
                soal: getSoal()
            });
        };

        _this.state = {
            user: "",
            score: 0,
            soal: []
        };
        return _this;
    }

    _createClass(Latihan, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.setState({
                user: getUser(),
                soal: getSoal()
            });
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this.isiPenampung();
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                    },
                    __self: this
                },
                React.createElement("br", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 69
                    },
                    __self: this
                }),
                React.createElement(
                    "h2",
                    { align: "center", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 70
                        },
                        __self: this
                    },
                    "Welcome User - ",
                    this.state.user
                ),
                React.createElement("br", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 71
                    },
                    __self: this
                }),
                React.createElement(
                    "div",
                    { className: "container", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 72
                        },
                        __self: this
                    },
                    React.createElement(
                        "button",
                        { type: "submit", className: "btn btn-primary", onClick: function onClick() {
                                _this2.keluar();
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 73
                            },
                            __self: this
                        },
                        "Logout"
                    ),
                    React.createElement("br", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 74
                        },
                        __self: this
                    }),
                    "Point : ",
                    this.state.score,
                    React.createElement("hr", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 76
                        },
                        __self: this
                    }),
                    React.createElement("br", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 77
                        },
                        __self: this
                    }),
                    React.createElement(
                        "div",
                        { className: "col-12", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 78
                            },
                            __self: this
                        },
                        React.createElement("p", { id: "penampung", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 79
                            },
                            __self: this
                        }),
                        React.createElement("input", { type: "text", className: "form-control", id: "isi", placeholder: "Tekan 'Spasi' untuk memasukan kata", onKeyDown: function onKeyDown(e) {
                                _this2.pencetSpasi(e);
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 80
                            },
                            __self: this
                        }),
                        React.createElement(
                            "button",
                            { type: "submit", className: "btn btn-warning", onClick: function onClick() {
                                    _this2.restart();
                                }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 81
                                },
                                __self: this
                            },
                            "Restart"
                        )
                    )
                )
            );
        }
    }]);

    return Latihan;
}(React.Component);