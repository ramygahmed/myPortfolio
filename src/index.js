"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
var other_1 = require("./other");
var math_1 = require("./math");
function component() {
    var element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = lodash_1["default"].join(['Hello', 'webpack']);
    return element;
}
document.body.appendChild(component());
console.log(other_1["default"]);
console.log(math_1["default"]);
