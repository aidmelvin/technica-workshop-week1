// Importing JS into HTML
console.log("JavaScript is connected!");

// Variables and Data Types
let message = "Hello, world!";
let number = 42;
let isJavaScriptFun = true;

console.log(message);
console.log(number);
console.log(isJavaScriptFun);

// Functions
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Student"));

// Document Object Model (DOM)
// Manipulating HTML elements with document.getElementById
document.addEventListener("DOMContentLoaded", function() {
    let heading = document.getElementById("uniqueElement");
    heading.textContent = "This is a modified heading!";
});
