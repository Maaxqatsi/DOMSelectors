let button = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");
button.addEventListener("click",function () {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
} )