let nam = "Dhruv"
let repoCount = 5

console.log(`the person ${nam} has created ${repoCount} repositories`);
// ${} this is called string interpolation for better readability and to perform any operation eg. nam.lenght, etc

const gameName = "chess";  // => chess only
const gameName1 = new String("chess"); // String with new returns a string wrapper object. => [String: 'chess']

console.log(gameName);
console.log(gameName1);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
