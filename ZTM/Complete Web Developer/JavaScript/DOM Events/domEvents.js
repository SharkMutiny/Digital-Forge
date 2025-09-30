// DOM Events exercise - Making a Shopping List App

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

// Original createListElement function without delete button
// function createListElement() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value = "";
// }

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


// New features: Marking items as done, deleting items and adding delete buttons

// Marking items as done
function toggleDone(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done"); 
    }
}

ul.addEventListener("click", toggleDone);

// Deleting items
function deleteItem(event) {
    if (event.target.tagName === "BUTTON") {    
        var li = event.target.parentElement;
        ul.removeChild(li);
    }
}

ul.addEventListener("click", deleteItem);

// Adding delete button to each new item
function createListElement() {
    var li = document.createElement("li"); 
    li.appendChild(document.createTextNode(input.value));
    var deleteButton = document.createElement("button"); 
    deleteButton.appendChild(document.createTextNode("Del")); 
    deleteButton.classList.add("delete"); 
    li.appendChild(deleteButton); 
    ul.appendChild(li); 
    input.value = ""; 
}