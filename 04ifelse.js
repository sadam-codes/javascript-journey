const compareNumbers = (a, b) => {
  if (a < b) {
    return "B is greater";
  } else {
    return "A is greater";
  }
};

let a = 18;
let b = 50;
let result = compareNumbers(a, b);
console.log(result);

// age lies b/w 10 and 20 or not ??
let c = 10;
let d = 20;
if (c >= 10 && d <= 20) {
  console.log("Age is b/w 10 to 20");
} else {
  console.log("Age is not valid");
}

// switch statement to print the week days

let day = 5;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid key");
    break;
}

//to find that the number is divided by 2 and 3 or no
let findNumber = 6;
if (findNumber % 2 == 0 && findNumber % 3 == 0) {
  console.log("divide able");
} else {
  console.log("Not divide able");
}

// Allow driving if age is greater than 18 or not
function hello() {
  prompt("enter your ege");
}
let age = 15;
if (age > 18) {
  console.log(`"Your age is ${age} so you can drive"`);
} else {
  console.log(`"Your age is less than ${age} so you can't drive"`);
}
