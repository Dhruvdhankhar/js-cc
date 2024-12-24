let number = 33;
let string = String(number)
let boolean1 = Boolean(number)
//console.log(boolean1);


//console.log(typeof string)
//console.log(string);

let boolean = true;
let number1 = Number(boolean);
//console.log(typeof number1)
//console.log(number1);

// some results of conversion is as follow

// FOR STRING/BOOLEAN TO NUMBER

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

// STRING/NUMBER TO BOOLEAN 

// 1 => true; 0 => false
// "" => false (empty string)
// "hitesh" => true

/***** Operations******* */

let str1 = "Hello"
let str2 = " World"
let str3 = str1 + str2;
//console.log(str3);

console.log(1 + "2"); // =>12
console.log(1 + "2" + 2); // =>122
console.log(1 + 2 + "2"); // =>32

// console.log(+true); =>1  + in prefix converse the boolean into Number
// console.log(+""); =>0
