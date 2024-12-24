console.log("Hello")
const a = "Dhruv"
let age = 21;
var ageNextYear = 22;
S = "Javascipt"

age = 23;
ageNextYear = 24;
S = "java";

/*
Prefer not to use var
because of issue in block scope and functional scope

block scope =>
{this region
    }
*/
console.table({a , age , ageNextYear , S});
