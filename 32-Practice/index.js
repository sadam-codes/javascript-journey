// Declare a variable age and calculate your birth year. Output both.
const age = 22;
const getYear = new Date().getFullYear();
const result = (getYear - age)
console.log(`Birth year is ${result}`)
console.log(`Age is ${age}`)

// Declare a variable x inside a function and try to access it outside. What happens?

// function sadam() {
//     const a = 10
// }
// console.log(a)

// output =>  ReferenceError: x is not defined

// Calculate the sum, difference, product, and quotient of two numbers.
const number1 = 20;
const number2 = 5
console.log(number1 + number2)
console.log(number1 - number2)
console.log(number1 * number2)
console.log(number1 / number2)

// Convert a string "123" to a number and back to a string. Print both.
const stringOne = '123'
console.log(typeof stringOne) //  Output: string
// 
const stringtwo = '123';
console.log(typeof Number(stringtwo)); // Output: number

// Check if a number is even or odd using the modulo operator.
let number = 8;
if (number % 2 === 0) {
    console.log("Number is Even")
}
else {
    console.log("Number is Odd")
}

// Write a program that checks if a person is a child, teenager, adult, or senior based on age.
const person = 15
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
// Use a ternary operator to check if a number is positive, negative, or zero.
const checkNumber = 15;
const resultAfterChecking = (checkNumber > 0) ? "Number is Positive" : (checkNumber < 0) ? "Number is  Negative" : "Number is Zero"
console.log(resultAfterChecking)

// Simulate a traffic light with a switch statement: "Stop", "Ready", or "Go".
const trafficLight = "Ready";
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

// Print the numbers 1 to 10 using a for loop.

for (let index = 1; index <= 10; index++) {
    console.log(`The Numbers is ${index}`)
}

// Create a while loop that asks the user for input until they type "stop" ?
//  (Run in HTML file)

// let stop = "";
// while (stop !== "stop") {
//   stop = prompt("enter word stop to end this loop");
//   console.log(stop);
// }
// alert("Loop Stoped");


// Print the multiplication table of 5 using a do-while loop.
let num = 5
let i = 1
do {
    console.log(`Table is ${num} * ${i} = ${num * i}`)
    i++
} while (i <= 10);

// Write a greet function that takes a name and prints a greeting.
function greetOne(username = "Sadam") {
    return `Aoa ${username}`
}
console.log(greetOne())

// Convert the greet function into an arrow function.
const greet = (username = "Sadam") => {
    return `Aoa ${username}`
}
console.log(greet("Sadam"))

// Create a function that returns the sum of two numbers.
const sumOfTwoNumbers = (a, b) => {
    return a + b
}
console.log(sumOfTwoNumbers(4, 5))

// Write a function that returns the highest number from a list of numbers.
const highestNumber = () => {
    let allNumbers = [10, 20, 30, 40, 50]
    return Math.max(...allNumbers)
}
console.log(highestNumber())

// Write an arrow function square that returns the square of a number.
const square = () => {
    let number = 36;
    return Math.sqrt(number)
}
console.log(square())

// Write an arrow function that returns the first string longer than 5 characters from a list.
const firstString = (string) => {
    const Storeresult = string.find(newstring => newstring.length >= 5)
    return Storeresult ? Storeresult : "No matching string"
}
const words = ['Sadam', 'Ali', 'Ahmad']
console.log(firstString(words))

// Create an array of numbers and sum all the elements using a loop.
const arrayOfNumbers = [10, 20, 30]
let element = 0
for (let index = 0; index < arrayOfNumbers.length; index++) {
    element += arrayOfNumbers[index];
}
console.log(`Sum of all numbers is : ${element}`);

// Remove duplicates from an array of numbers manually.
// its not manually , due to optimization
let arr = [2, 2, 3, 5, 5, 3, 4]
const removeDuplicates = () => {
    return [...new Set(arr)]
}
console.log(removeDuplicates())

// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
const createHelloWorld = () => {
    const name = 'Sadam Muneer'
    return () => {
        return `Hello ${name}`
    }
}
console.log(createHelloWorld()())
// const results = createHelloWorld();
// console.log(results());

var a = 2;
function test() {
    console.log(a);
    var a = 5;
    console.log(a);
}
test();

// undefined
// 5
console.log(addNumber(3))
function addNumber(add) {
    return add + 1
}


// setTimeout and setInterval difference ?
// setTimeout ? Runs once after the specified delay
// setInterval ? Runs repeatedly at the specified interval

const y = setInterval(() => {
    console.log("Run after every 2 seconds")
}, 2000);

setTimeout(() => {
    clearInterval(y)
}, 7000);