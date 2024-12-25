// primitive type datatype
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // =>false as symbol give unique symbol value each time

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    for(let i=0; i<5;i++){
        console.log(i); 
    }
}

console.log(typeof anotherId);

/* Heap and stack memory
Stack --> all primitive type uses stack memory means when recall it uses a copy of primitive not directly use it
Heap --> all non-primitive/reference datatype uses heap memory means will use direct refernce. 
 */

let user1 = "Dhruv";

let user2 = user1;

user2 = "Dhankhar";

console.log(user1); // => Dhruv, as it uses stack memory(copy memory), change user2 doesnt change it
console.log(user2); // => Dhankhar 

let type1 = {
    email: "xyz@gamil.com",
    upi: "type1@ybl"
}
let type2 = type1;

type2.email = "abc@gmail.com"

console.log(type1.email); // => since it use heap memory, change reflects in each other.
console.log(type2.email);
