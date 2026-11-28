const name = "lakshay"
const repoCount = 566

// console.log( name + repoCount + " 7 Value"); /* This is the old way of write code. There are new way, that we are gone use

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('lakshay-da')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(5));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(3,7)
console.log(newString);

const anotherString = gameName.slice(1, 6)
console.log(anotherString);

const newStringOne = "  lakshay "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://lakshay.com/lakshay%20dhanda"

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))

console.log(gameName.split("-"));
