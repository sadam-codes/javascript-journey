const age = 22;
const getYear = new Date().getFullYear();
const result = (getYear - age)
console.log(`Birth year is ${result}`)
console.log(`Age is ${age}`)
///////////////////////////////////

// function sadam() {
//     const x = 10
// }
// console.log(x)

// output =>  ReferenceError: x is not defined
//////////////////////////////////
const number1 = 10;
const number2 = 5
console.log(number1 + number2)
console.log(number1 - number2)
console.log(number1 * number2)
console.log(number1 / number2)

/////////////////////////////
const stringOne = '123'
console.log(typeof stringOne) //  Output: string
// 
const stringtwo = '123';
console.log(typeof Number(stringtwo)); // Output: number
////////////////////////////

let number = 8;
if (number % 2 === 0) {
    console.log("Number is even")
}
else {
    console.log("Number is Odd")
}
//////////////////////////
const person = 12
if (person >= 20) {
    console.log("Person is Senior")
}
else if (person <= 19 && person >= 15) {
    console.log("Person is Adult");
}
else if (person <= 14 && person >= 12) {
    console.log("Person is teenager")
}
else {
    console.log("Person is child")
}
///////////////////////////
const checkNumber = 10;
const resultAfterChecking = (checkNumber > 0) ? "Number is Positive" : (checkNumber < 0) ? "Number is  Negative" : "Number is Zero"
console.log(resultAfterChecking)
/////////////////////////
const trafficLight = "Go";
switch (trafficLight) {
    case "Go":
        console.log("Green Light - You can go!");
        break;
    case "Ready":
        console.log("Yellow Light - Get Ready!");
        break;
    case "Stop":
        console.log("Red Light - Stop!");
        break;
    default:
        console.log("Invalid traffic light signal");
}
///////////////////////////////

for (let index = 1; index <= 10; index++) {
    console.log(index)
}

/////////////////////////////

let num = 5
let i = 1
do {
    console.log(`Table is ${num} * ${i} = ${num * i}`)
    i++
} while (i <= 10);

///////////////////////////
// with normal function
function greetOne(username = "ss") {
    return `Aoa ${username}`
}
console.log(greetOne())
/////////////////////////
// with arrow function
const greet = (username = "Ali") => {
    return `Aoa ${username}`
}
console.log(greet("Sadam"))
//////////////////////////////
const sumOfTwoNumbers = (a, b) => {
    return a + b
}
console.log(sumOfTwoNumbers(2, 3))

//////////////////////////////