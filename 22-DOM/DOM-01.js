document.getElementById("title").id;
document.getElementById("title").className;
document.getElementById("title").textContent;
document.getElementById("title").innerHTML;
document.getElementById("title").innerText;
// differenece b/w innerContent and innerText and innerHTML
//  { just display none the content and then see the diferenec ,
//  innerContnt will show also hiden content and innerText will only show the contenr that is not display none
//  and then innerHTML will return also the tags}
document.getElementById("title").getAttribute("class");
document.getElementById("title").getAttribute("id");
document.getElementById("title").setAttribute("class", "test");
document.getElementById("title").setAttribute("class", "test teat2");
document.getElementById("title").setAttribute("id", "test");
title.style.background = "red";
title.style.color = "brown";
title.style.padding = "10px";
title.style.margin = "10px";
document.querySelector("h2");
document.querySelectorAll("h2");
document.querySelectorAll("#title");
document.querySelectorAll(".heading");

// how to change the backgrpund color of li

const bgcolor = document.querySelector("ul");
bgcolor.querySelector("li");
const bgcolor2 = bgcolor.querySelector("li");
bgcolor2.style.background = "green";

// querySelectorALL
const list = document.querySelectorAll("li");
list[1].style.color = "green";

// Loop on List using DOM
const listS = document.querySelectorAll("li");
list.forEach((item) => {
  item.style.color = "yellow";
});

const hello = document.getElementsByClassName("listItem");
hello;
Array.from(hello);

document.querySelectorAll(".mw-headline");
const myh2 = document.querySelectorAll(".mw-headline");
myh2;
myh2[1].innerText;
myh2[1].style.background = "red";

myh2.forEach((item) => {
  item.style.color = "red";
  item.style.backgroundColor = "black";
  item.style.padding = "20px";
  item.innerText = "sadam";
});
