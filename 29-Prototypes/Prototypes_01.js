// defiine Prototype in JS ?

// In JavaScript, prototypes are the mechanism by which objects inherit features from other objects.
// Every JavaScript object has a prototype, which is also an object. When you access a property on an object,
// JavaScript first checks if that property exists on the object itself. \
// If it doesn't, it looks at the object's prototype, and if the property is found there, it is used.
// Prototypes are used to implement inheritance in JavaScript. When you create an object in JavaScript using a
//  constructor function or a class, the object inherits properties and methods from its prototype.

// Example -:

// Constructor function
function user(username, age) {
  this.username = username;
  this.age = age;
}
user.prototype.greet = function () {
  return `Hello my name is ${this.username} and my age is ${this.age} `;
};
let UserData = new user("sadam", 20);
console.log(UserData.greet());

const multipply = (num) => {
  return num * 5;
};
multipply.power = 4;
console.log(multipply(5));
console.log(multipply.power);
console.log(multipply.prototype);

function createUser(username, price) {
  this.username = username;
  this.price = price;
}
createUser.prototype.increment = function () {
  this.price++;
};
createUser.prototype.printMe = function () {
  console.log(`price is ${this.price}`);
};
const userOne = new createUser("sadam", 30);
const usertwo = new createUser("Ali", 40);
userOne.printMe();

// Notes

// what happens behind the scene when the new keyword is used ?
// A new object is created : The new keyword initiates the creation of a new javaScript object.

// A prototype is linked : The newly created object gets linked to the prototype property of the
//  constructor function.This means that it has access to the properties and methods defined
//  on the constructor's prototype.

// The  constructor is called : The constructor function is called with the specified argument and this
// is bound to the newly created object .
// if no explicit return value is specified from the constructor . JavaScript assumes this, the newly created object,
// to be the intended return value.
//
// The new object is returned : After the constructor function has been called , if it does't return a non-primitive
// value (object , array , function , e.t.c), the newly created object is returned.
