var _jsxFileName = "src\\main.js",
    _this = this;

import { Latihan } from "./latihan.js";
import { Master } from "./master.js";
import { Login } from "./login.js";
import { loadData } from "./soal.js";

loadData();

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Login, {
    __source: {
        fileName: _jsxFileName,
        lineNumber: 9
    },
    __self: this
}));

export var login = function login() {
    return root.render(React.createElement(Login, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        },
        __self: _this
    }));
};
export var master = function master() {
    return root.render(React.createElement(Master, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        },
        __self: _this
    }));
};
export var latihan = function latihan() {
    return root.render(React.createElement(Latihan, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        },
        __self: _this
    }));
};