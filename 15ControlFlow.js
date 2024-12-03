// operators
// >,<,<=,>=,==,===, !=,!==

// Example
if (false) {
  const a = 3;
  const b = 4;
  console.log(`The answer of addition is: ${a + b}`);
} else {
  console.log("Condition is false");
}

// Example
const temperature = 37;
if (temperature <= 40) {
  console.log("temperature is less than 37");
} else {
  console.log("temperature is less than 37");
}

// Example
const score = 200;
if (score > 100) {
  const power = "Fly";
  console.log(`Power is ${power}`);
}

// Example
// impleset return in if-else, but this method is not valid in companies

// const balance = 1000;
// if (balance > 900)console.log(`Balance is Low`),
//     console.log(`And Also Balance is Less than 900`);

// Example
const balance = 1000;
if (balance < 500) {
  console.log(`Balance is less than 500`);
} else if (balance < 600) {
  console.log(`Balance is less than 600`);
} else if (balance < 700) {
  console.log(`Balance is less than 700`);
} else if (balance < 800) {
  console.log(`Balance is less than 800`);
} else if (balance < 900) {
  console.log(`Balance is less than 900`);
} else if (balance < 1000) {
  console.log(`Balance is less than 1000`);
} else {
  console.log(`Balance is less than 1100`);
}

// Example
const isLoggedIn = true;
const isLoggedInFromGoogle = true;
const isLoggedInFromFacebook = false;
const creditCard = true;
if (isLoggedIn && creditCard) {
  console.log(`you can shop`);
} else {
  console.log(`you can't shop`);
}
if (isLoggedInFromGoogle || isLoggedInFromFacebook) {
  console.log(`you can Login `);
} else {
  console.log(`you are not Login`);
}
