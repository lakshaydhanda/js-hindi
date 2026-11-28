// Primitive 

// 7 types : string, Number, Boolean, null, undefined, Symbol, BigInt

// JS is a dynamically typed language.

const score = "100" // Datatype is {string} by using (typeof) for string.
const scoreValue = 100.4 // Datatype is {number} by using (typeof) for number.

const isLoggedIn = false // Datatype is {boolean} by using (typeof) for boolean.
const outsideTemp = null // Datatype is {object} by using (typeof) for null.
let userEmail; // Datatype is {undefined} by using (typeof) for undefined.

const id = Symbol('123') // Datatype is {symbol} by using (typeof) for Symbol.
const anotherId = Symbol('123') // Datatype is {symbol} by using (typeof) for symbol.
// console.log(id === anotherId); 

const bigNumber = 67857638937487963789n // Datatype is {Bigint} by using (typeof) for Bigint


// Reference [Non primitive]

// Array, Objects, Functions

const heros = ["Saktiman", "naagraj", "dogga"] // Datatype is {object} by using (typeof) for array
let myObj = {
    name:"Lakshay",
    age:44,
} // Datatype is {object} by using (typeof) for object

const myFunction = function(){
    console.log("Hello world");
}  // Datatype is {function} by using (typeof) for function but it is [object]

// console.log(typeof score);

// *******************************************************************************************

// Satck(Primitive), Heap(Non-Primitive)

let myYoutubename = "lakshaydhanda@gmail.com"

let anothername = myYoutubename;
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@upi"
}

let userTwo = userOne

userTwo.email = "lakshay@google.com"

console.log(userOne);
console.log(userTwo);
