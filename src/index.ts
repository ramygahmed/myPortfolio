import * as $ from "jquery";
import * as mod1 from './module1';
import * as mod2 from './module2';
console.log(mod1.default);
console.log(mod2.default);
$(function(){
    $("body").html("Hello World guys");
});
function echo<T>(data:T){
    return data;
}
console.log(echo("Hello").length);
console.log(echo(27).toString().length);
//   console.log(f);
//   console.log(z);

let someArray = [1, "string", false];
for(let i in someArray){
    console.log(`${parseInt(i) + 1}-${someArray[i]} is the number ${parseInt(i) + 1} value `);
}
for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}

let fly = () => {console.log("flying");}
let swim = () => {console.log("swimming");}
let cry = () => {console.log("crying");}
let die = () => {console.log("dieing");}
fly();swim();
cry();die();

interface standards{
    className:string;
    numOfStudents:number;
    anyDisabilities?:boolean;
    howMany?:number;
    namesOfStudents:string[];
}
class first implements standards{
    className="first";
    numOfStudents=15;
    anyDisabilities:false;
    howMany:0;
    namesOfStudents=["mike","john","jack","sophia"]
}