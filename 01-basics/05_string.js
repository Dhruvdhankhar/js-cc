let nam = "Dhruv"
let repoCount = 5

console.log(`the person ${nam} has created ${repoCount} repositories`);
// ${} this is called string interpolation for better readability and to perform any operation eg. nam.lenght, etc

const gameName = "chess is the name of game";  // => chess only
const gameName1 = new String("chess"); // String with new returns a string wrapper object. => [String: 'chess']

console.log(gameName);
console.log(gameName1);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-5, 4)
console.log(anotherString);

const newStringOne = "   Dhruv    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://dhruv.com/dhruv%20dhankhar"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) // use to find if that keyword present in string or not
console.log(url.includes('dhruv'))

console.log(gameName.split(' ')); 
// split the string on the basis of input, her ' ' is input so split 
//every space and return in form of array