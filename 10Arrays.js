//Following Methods of declaring an array
// 1st method
const myarray = [1, 2, 3, 4, 5, 6, true, "sadam"];
console.table(myarray);
// 2nd method
const myfruits = ["Apple", "Banana", "Mango", "Oragne"];
console.log(myfruits[1]);
// 3rd method
const newarray = new Array(1, 2, 3, 4, 23, 2, 1);
console.table(newarray);

// Methods of Array;
const arrayMethods = [0, 1, 2, 3, 4, 5];
arrayMethods.push(5); // Add any value in array
arrayMethods.pop(); // remove the last element from array
arrayMethods.unshift(9); // Add 9 into the start of array
arrayMethods.shift(); // Remove starting element from array
console.table(arrayMethods);
console.table(arrayMethods.includes(7)); // it will return false , bcz 7 not exist in arrray
console.table(arrayMethods.indexOf(7)); // it will return -1 , bcz 7 not exist in array
console.table(arrayMethods.indexOf(3)); // This will return 2 , bcz in array 3 have index(2)

const joinarray = arrayMethods.join();
console.log(arrayMethods); // join()=> it will convert my array (Object) into string
console.log(joinarray, typeof joinarray);

// interview question
// difference b/w slice and aplice

const originalArrray = [0, 1, 2, 3, 4, 5];
console.log("Original Array", originalArrray);

const changedValue = originalArrray.slice(1, 3);
console.log("Slice", changedValue);

const changedValue2 = originalArrray.splice(1, 3);
console.log("Splice", originalArrray);
console.log(changedValue2);
// .................................................
// slice
const arra1 = [0, 1, 2, 3, 4, 5];
console.log("Original Array", arra1);
const arra2 = arra1.slice(3, 5);
console.log(arra2);

// splice but also check original array
const arra3 = arra1.splice(3, 5);
console.log("splice", arra3);
console.log("Original Array", arra1);

// Merge two arrays
const alphabets = ["A", "B", "C"];
const newalphabets = ["D", "E", "F"];
// alphabets.push(newalphabets);
// console.log(alphabets);

// But this method return array in array , so we use concate
const new3 = alphabets.concat(newalphabets);
console.log(new3);

// concate
const myname = ["sadam Muneer"];
const fatherName = ["Muneer Abbas"];
console.log(myname);
const store = `Hello My Name is ${myname} and My Father Name is ${fatherName}`;
const store2 = myname.concat(fatherName);
console.table(store, store2);

// Now use of spread operator insted of concat , and this is best method
const allDataStored = [...alphabets, ...newalphabets];
console.log(allDataStored);

const anothrArray = [1, 2, 3, [4, 5, 6], 7, [8, 9], [10, 11]];
const realAnotherArray = anothrArray.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray("sadam"));
console.log(Array.from("sadam"));

// convert into Array
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));

// Destructuring of Array with example

const newArray = [1, 2, 3, 4, 5];
const [one, two, three, four, five] = newArray;
console.log(two);

let x = true + true; // it will return 2
let y = true;
+false; //
console.log(x, y);
