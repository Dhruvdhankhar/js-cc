const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); => change to string
console.log(balance.toFixed(1)); //=> add precision upto 1 decimal i.e. 100.1

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4)); // =>123.9 give precision till 4 digits priority is left side of dot

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // => converts into readible string, 'en-IN' into indian standards (10,00,000)

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math.min(4, 3, 6, 8)); // => can call many math property using 'Math' function.
console.log(Math.max(4, 3, 6, 8));

console.log(Math.round(4.6));

console.log(Math.random()); // => gives random no.