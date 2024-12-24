// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);   ECMAscript take string "2" as number 2
// console.log("02" > 1);

console.log(null > 0); 
console.log(null == 0);
console.log(null >= 0); /* reason is equality == and comparison<,>, >=,etc is treated differently */

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===  strict check, checks datatype also

console.log("2" === 2); //now it is strict check => false