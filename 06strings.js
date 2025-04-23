const name = "sadam";
const age = 18;
console.log(`Hello My Name is ${name} and my age is ${age}`); // tis method is called string interpolation
console.log(name[4]);
console.log(name.__proto__);
// All string methods // prototypes
console.log(name.length);
console.log(name.charAt(2));
console.log(name.indexOf("m"));
console.log(name.substring(0, 3)); // used to divide the string
console.log(name.slice(-4, 4)); // used to reverse the string

const trimmer = "      sadam Muneer   ";
console.log(trimmer);
console.log(trimmer.trim()); // used for remove the white spaces

const url = "https://sadammuneer.com/student%20ofbscs";
console.log(url.replace("%20", "-")); // replace any word from the string
console.log(url.includes("Ali")); // it return false bcz word "Ali" is not present in string

const splitMethod = "Sadam Muneer StudentOf BSCS";
console.log(splitMethod.split(" ")); // it will convert string into array based object, and we can split from any word

// print Capital Alphabets
const Heading = "Welcome to the Capital Alphabets";
console.log(Heading);
for (let a = 65; a <= 90; a++) {
  console.log(String.fromCharCode(a));
}

// print Small Alphabets
const Headingtwo = "Welcome to the Small Alphabets";
console.log(Headingtwo);
for (a = 97; a <= 122; a++) {
  console.log(String.fromCharCode(a));
}

const lengthstring = "Hello world";
console.log(lengthstring.length);

const fruits = ["A", "B", "C", "D", "E"];
const myBest = fruits.slice(-4, -1);
console.log(myBest);

const str = "Hello";
console.log(str.toLowerCase()); // Outputs: "hello"
console.log(str.toUpperCase()); // Outputs: "HELLO"

const str3 = "Hello, World!";
console.log(str3.indexOf("H")); // Outputs: 4
console.log(str3.endsWith("!")); // Outputs: true

const num = 42;
const num2 = String(num);
console.log(typeof num2); // Outputs: string

const mynameis = "sadam";
const myname2 = Number(mynameis);
console.log(typeof myname2); // output :  number
