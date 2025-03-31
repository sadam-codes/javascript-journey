const axios = require('axios');
// 1-: Create an object car with properties: make, model, year, and color.
// Access and print the make and model of the car.

// 2-: Add a method to the car object that returns a description of the car 
// (e.g., "This is a [color] [make] [model] from [year].").
// Call the method to print the car's description.

const car = [
    {
        make: "Honda",
        model: 'Civic',
        year: 2025,
        color: "Red",
        desc: () => {
            return `This is ${make}, with model ${model}, bought in ${year} in ${color} color.`;
        }
    }
]
const [{ make, model, year, color, desc }] = car
console.log(`Make : ${car[0]["make"]}`)
console.log(`Model : ${car[0]["model"]}`)
console.log(`Description : ${car[0].desc()}`)

// 3-:  Create an object person with properties: firstName, lastName, age.
// Use object destructuring to extract firstName and age into separate variables and print them.

const person =
{
    firstname: 'Sadam',
    lastName: "Muneer",
    age: 22,
}
const { firstname, age } = person
console.log(`My FirstName is ${firstname}`)
console.log(`My Age is ${age}`)

// 4 : Convert the person object from the previous exercise into a JSON string.
// Parse the JSON string back into a JavaScript object and print it.

const ObjectIntoString = JSON.stringify(person)
console.log(ObjectIntoString, typeof ObjectIntoString)

const stringIntoObject = JSON.parse(ObjectIntoString)
console.log(stringIntoObject, typeof stringIntoObject)

// 5: Create an array of numbers [1, 2, 3, 4, 5].
// Use forEach to print each element of the array squared.

const allNumbers = [1, 2, 3, 4, 5, 6, 7]
allNumbers.forEach(number => {
    console.log(Math.pow(number, 2))
});

// 6 -: Create an array of strings ["apple", "banana", "cherry"].
// Use map to create a new array where each string is capitalized, then print the new array.

const AllFruits = ["apple", "banana", "cherry"];
const newArrayOfFruits = AllFruits.map((fruit) => {
    return fruit.toUpperCase()
})
console.log(newArrayOfFruits)

// 7-: Create an array of numbers [5, 10, 15, 20, 25].
// Use filter to get all numbers that are greater than or equal to 15 and print them

const Numbers = [5, 10, 15, 20, 25, 30];
const FilteredNumbers = Numbers.filter((num) => {
    return num > 15
})
console.log(FilteredNumbers)

// 8-: Create an array of numbers [1, 2, 3, 4, 5].
// Use reduce to find the sum of the numbers in the array.

const sumOfAllNunbers = [1, 2, 3, 4, 5, 6, 7];
const totalSum = sumOfAllNunbers.reduce((total, currentValue) => {
    return total + currentValue
}, 5) // Also Add 5 into sumOfAllNunbers by-dafault
console.log(totalSum)

// 9-: Create an array of mixed numbers [10, 15, 20, 25, 30].
// Write a function that uses filter to return only the numbers divisible by 5 and print the result.
const MixedNumbers = [10, 15, 20, 25, 23];
const filterFun = () => {
    return MixedNumbers.filter(num => num % 5 === 0)
}
console.log(filterFun())


// Create an array of strings ["Sadam", "Hasnain", "Hamza"].
// Use map to convert each name to uppercase and print the new array.

const names = ["Sadam", "Hasnain", "Hamza"];
convertedNames = names.map((names) => {
    return names.toUpperCase()
})
console.log(convertedNames)

//  Create an array of numbers [2, 4, 6, 8].
// Use reduce to calculate the product of all the numbers and print the result.

const productUsingReduce = [2, 4, 6, 8];
const ProductResult = productUsingReduce.reduce((acc, curr) => {
    return acc * curr
})
console.log(ProductResult)

//Write a function that generates a random number between 50 and 100 and returns it.
// Round the number to the nearest integer using Math.round() and print the result.

const generateRandomNumbers = () => {
    const RandomNumbers = Math.random() * (100 - 50) + 50;
    return (Math.round(RandomNumbers))
}

// Write a function that takes a date string "2025-03-21" and returns the day of the week (e.g., "Monday").
// Convert the string date into a Date object and print it.

const getWeeks = (datestring) => {
    const date = new Date(datestring);
    console.log(`Date Object : ${date}`)
    return date.toLocaleString('en-US', { weekday: 'long' })
}
console.log(getWeeks("2025-03-23"))

// Write a function that calculates the difference between two dates and 
// returns the number of days between them.

const getDaysDifference = (date1, date2) => {
    return Math.abs((new Date(date2) - new Date(date1)) / 86400000); // 86400000 = 1000ms * 60s * 60m * 24h
};
console.log(getDaysDifference("2025-03-15", "2025-03-21"));

//Write a function that takes two numbers and divides them. Use a try-catch block to 
// handle any potential division by zero errors and return a message ("Cannot divide by zero") 
// in case of an error.

const TakesTwoNumbers = (num1, num2) => {
    try {
        if (num2 === 0) {
            throw new Error("Cannot divide by zero");
        }
        return num1 / num2
    } catch (error) {
        return error.message;
    }
}
console.log(TakesTwoNumbers(20, 2));
console.log(TakesTwoNumbers(20, 0));

// Write a function that checks whether an input number is positive. If the number is negative, 
// throw a custom error with the message: "Negative number not allowed".

const InputNumbers = (number) => {
    try {
        if (number < 0) {
            throw new Error("Negative number not allowed");
        }
        return "The Number is positive";
    } catch (error) {
        return error.message;
    }
}
console.log(InputNumbers(10));
console.log(InputNumbers(-10));



// 
const fetchData = async () => {
    try {
        let response = await fetch('https://api.github.com/users/sadam-codes')
        let data = await response.json()
        const { bio } = data
        console.log(`Github Bio using fetch method is : ${bio}`)
    } catch (error) {
        console.log(error)
    }
}
fetchData()

// 
const fetchGitHubData = async () => {
    try {
        let response = await axios.get('https://api.github.com/users/sadam-codes');
        let { bio } = response.data;
        console.log(`Github Bio using axios method is : ${bio}`)
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
};

fetchGitHubData();





