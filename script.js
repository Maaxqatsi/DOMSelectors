let button = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");

function addListItem () {
    if (input.value.length > 0){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    }
}
button.addEventListener("click", addListItem);
input.addEventListener("keypress", function(event){
    if (event.key==='Enter')
    addListItem();


})