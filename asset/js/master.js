var _jsxFileName = "src\\master.jsx";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { login } from "./main.js";
import { addSoal, getSoal } from "./soal.js";

export var Master = function (_React$Component) {
    _inherits(Master, _React$Component);

    function Master(p) {
        _classCallCheck(this, Master);

        var _this = _possibleConstructorReturn(this, (Master.__proto__ || Object.getPrototypeOf(Master)).call(this, p));

        _this.keluar = function () {
            login();
        };

        _this.ubahStatus = function (e) {
            if (e.code == 'Space') {
                document.querySelector('#status').innerHTML = 'Status : Inputan tidak boleh ada spasi';
                e.target.value = '';
            } else if (e.code == 'Enter') {
                document.querySelector('#status').innerHTML = 'Status : Inputan berhasil di inputkan';
                addSoal(e.target.value);
                _this.serialisasi(e.target.value);
                _this.setState({
                    soal: getSoal()
                });
                return;
            } else {
                document.querySelector('#status').innerHTML = 'Status : Menerima Inputan';
            }
            e.target.value = e.target.value.trim();
            _this.lowercase(e);
        };

        _this.lowercase = function (e) {
            e.target.value = e.target.value.toLowerCase();
        };

        _this.isiPenampung = function () {
            var show = document.querySelector('#penampung');
            show.innerHTML = '';
            _this.state.soal.forEach(function (e) {
                show.innerHTML += e + ' ';
            });
        };

        _this.serialisasi = function (inp) {
            var dataLocalStorage = localStorage.getItem('data');
            if (dataLocalStorage == null) dataLocalStorage = '[]';
            var arrayOfData = JSON.parse(dataLocalStorage);
            var data = {
                kata: inp
            };
            arrayOfData.push(data);

            var dataString = JSON.stringify(arrayOfData);
            localStorage.setItem('data', dataString);
        };

        _this.state = {
            soal: []
        };
        return _this;
    }

    _createClass(Master, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.setState({
                soal: getSoal()
            });
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            document.querySelector('#isi').value = '';
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
                        lineNumber: 74
                    },
                    __self: this
                },
                React.createElement("br", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                    },
                    __self: this
                }),
                React.createElement(
                    "h2",
                    { align: "center", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 76
                        },
                        __self: this
                    },
                    "Welcome Master"
                ),
                React.createElement("br", {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 77
                    },
                    __self: this
                }),
                React.createElement(
                    "div",
                    { className: "container", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 78
                        },
                        __self: this
                    },
                    React.createElement(
                        "button",
                        { type: "submit", className: "btn btn-primary", onClick: function onClick() {
                                _this2.keluar();
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 79
                            },
                            __self: this
                        },
                        "Logout"
                    ),
                    React.createElement("br", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 80
                        },
                        __self: this
                    }),
                    React.createElement("hr", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 81
                        },
                        __self: this
                    }),
                    React.createElement("br", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 82
                        },
                        __self: this
                    }),
                    React.createElement(
                        "div",
                        { className: "col-12", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 83
                            },
                            __self: this
                        },
                        React.createElement("input", { type: "text", className: "form-control", id: "isi", placeholder: "Masukan Kata, Tekan 'Enter' Untuk memasukan text", onKeyDown: function onKeyDown(e) {
                                _this2.ubahStatus(e);
                            }, onKeyUp: function onKeyUp(e) {
                                _this2.lowercase(e);
                            }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 84
                            },
                            __self: this
                        }),
                        React.createElement(
                            "p",
                            { id: "status", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 85
                                },
                                __self: this
                            },
                            "Status : Menunggu Inputan"
                        ),
                        React.createElement("br", {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 86
                            },
                            __self: this
                        }),
                        React.createElement(
                            "h3",
                            { align: "center", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 87
                                },
                                __self: this
                            },
                            "List Kata"
                        ),
                        React.createElement("hr", {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 88
                            },
                            __self: this
                        }),
                        React.createElement("p", { id: "penampung", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 89
                            },
                            __self: this
                        })
                    )
                )
            );
        }
    }]);

    return Master;
}(React.Component);