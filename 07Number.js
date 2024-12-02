const number = 100;
console.log(number);

const score = new String(200);
console.log(score);
console.log(score.toString().length);

// mostly used in E-Commerce Websites for rate Fixing
const score2 = new Number(300);
console.log(score2.toFixed(2));

// precision Method

const OtherNumber0 = 46.5869321;
console.log(OtherNumber0.toPrecision(3));

const OtherNumber1 = 46.5869321;
console.log(OtherNumber1.toPrecision(2)); //

const OtherNumber = 4644.5869321; // other value will be show in exponential
console.log(OtherNumber.toPrecision(2));

// localeString
const hundred = 100000000;
console.log(hundred.toLocaleString("en-IN")); // Outputs: 100,000,000


