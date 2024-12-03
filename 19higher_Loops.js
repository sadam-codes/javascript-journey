// for of Loop

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

const My_Name = "Sadam";
for (const name of My_Name) {
  console.log(`Each character is : ${name}`);
}

const my_Name = "Sadam";
for (const name of my_Name) {
  if (name == "d") {
    console.log(`d is detected and the loop has been ended`);
    break; // it will break the loop
  }
  console.log(`Each character is : ${name}`);
}

// Map
const map = new Map();
map.set("students01", "Sadam");
map.set("students02", "Ali");
map.set("students03", "Ahmad");
for (const [key, value] of map) {
  console.log(key, "-:", value);
}

// can we iterate the object as i iterate the map
// const myobject = {
//   students01: "Sadam",
//   students02: "Ali",
//   students03: "Ahmad",
// };
// for (const [key, value] of myobject) {
//   console.log(key, "-:", value);
// }
//  hense , we cant iterate the object as i iterate the map

const languages = {
  js: "javascript",
  py: "python",
  ja: "java",
  cpp: "c++",
};

for (const key in languages) {
  console.log(`${key} is the shortcut of ${languages[key]}`);
}

const myArrray = ["sadam", "python", "java", 4, 5];
for (const key in myArrray) {
  console.log(myArrray[key]);
}

// Map
const map2 = new Map();
map.set("students01", "Sadam");
map.set("students02", "Ali");
map.set("students03", "Ahmad");
for (const key in map2) {
  console.log(key);
}
// we cant iterate the map , because map is un iterateable

// for each Loop

const coding = ["JavaScript", "python", "java"];
// coding.forEach(function (item) {
//   console.log(item);
// });

// coding.forEach((item) => {
//   console.log(item);
// });

function pritme(item, index, arr) {
  console.log(item, index, arr);
}
coding.forEach(pritme);

const myCoding = [
  {
    languageName: "javaScript",
  },
  {
    languageName: "java",
  },
  {
    languageName: "c++",
  },
];
myCoding.forEach((item) => {
  console.log(item);
});
