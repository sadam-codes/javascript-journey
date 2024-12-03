// This keyword is used to refer the current context

const user = {
  username: "sadam",
  age: "20",
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to our website`);
    console.log(`The user ${this.username} have age ${this.age}, `);
    // console.log(this); will show all the content
  },
};
user.welcomeMessage();
user.username = "Ali";
user.welcomeMessage();
{
  console.log(this);
}
// now run this statement in node envirionemt and also in inspect
// browser k andr sb se globel object knsa hai ? window object

// Errow function and why we use this keyword in it
// importannt question ( differenece b.w arrow function and normal function)

const welcome = function welcome() {
  let username3 = "sadam";
  return this; // undefiend bcz this statement only works in objects , not functions
};
console.log(welcome());

const welcome2 = () => {
  const username4 = "Ali";
  return this;
};
console.log(welcome2());

// Pure errow functions

const addtwo = (num3, num4) => {
  return num3 + num4;
};

console.log(addtwo(4, 5));

//  impleset return
const addthree = (num3, num4) => num3 + num4;
console.log(addthree(4, 5));

// //  impleset return
// const addfour = (num3, num4) => (num3 + num4);
// console.log(addfour(4, 5));

// how to return object
const returnobject = () => ({
  username5: "sadam",
});
console.log(returnobject.call());

// immediately invoked function expression (IIFE)

// Named IIFI
(function CONNECTED() {
  console.log(`DB Connected`);
})();

// in arrow function
(() => {
  console.log(`DB connected two`);
})();

((name) => {
  console.log(`${name} your DB is connected`);
})("sadam");
// why we use IIFI ??
// 1) Isolation: IIFE allows you to execute a block of code immediately without having to call it explicitly later in the code.
// 2) kayi baar global scope k pollution se problem hti hai to us global scope k variables ya pollution ko hatane k liye IIFI use kiya hai
