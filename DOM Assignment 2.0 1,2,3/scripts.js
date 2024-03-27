//First task
let val = document.getElementsByClassName("tech");
val[2].innerHTML = "Projects "

//Second Task
const elm = document.getElementById("list");
const li = document.createElement("li");
let text = document.createTextNode("Hire me");
li.appendChild(text);
elm.appendChild(li);

document.getElementsByName("change")[0].placeholder = "Search my projects";

//Third task
var newButton = document.createElement("button");
newButton.textContent = "Contact Me";
var parentDiv = document.querySelector(".hero-right-section-btns");
parentDiv.appendChild(newButton);

//Fourth task

var imageElement = document.querySelector(".hero-right-section img");
      imageElement="./hero....png" ;