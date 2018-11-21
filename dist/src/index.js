import * as $ from "jquery";
import * as mod1 from './module1';
import * as mod2 from './module2';
console.log(mod1.default);
console.log(mod2.default);
$(function () {
    $("body").html("Hello World guys");
});
function echo(data) {
    return data;
}
console.log(echo("Hello").length);
console.log(echo(27).toString().length);
//   console.log(f);
//   console.log(z);
var someArray = [1, "string", false];
for (var i in someArray) {
    console.log(parseInt(i) + 1 + "-" + someArray[i] + " is the number " + (parseInt(i) + 1) + " value ");
}
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var entry = someArray_1[_i];
    console.log(entry); // 1, "string", false
}
var fly = function () { console.log("flying"); };
var swim = function () { console.log("swimming"); };
var cry = function () { console.log("crying"); };
var die = function () { console.log("dieing"); };
fly();
swim();
cry();
die();
var first = /** @class */ (function () {
    function first() {
        this.className = "first";
        this.numOfStudents = 15;
        this.namesOfStudents = ["mike", "john", "jack", "sophia"];
    }
    return first;
}());
//# sourceMappingURL=index.js.map