const PI = 3.14159;
console.log(PI);

// Trying to reassign a constant will cause an error
//PI = 3.14;
//console.log(PI); 

let radius;
let circ

document.getElementById('mySubmit').onclick = function() {
    radius = Number(document.getElementById('myText').value);
    circ = 2 * PI * radius;
    document.getElementById('circ').textContent = `Circumference: ${circ} cm`
}

document.getElementById('showSolution').onclick = function () {
    const solution = `

<!-- HTML code -->
<h2>Circumference Calculator</h2>
<p>Let's use what we have learned so far to make a simple circumference calculator</p>
<p>Enter the radius of a circle (cm): </p>
<label>Radius:</label>
<input id="myText" type="text">
<button id="mySubmit">Submit</button>
<h3 id="circ"></h3>

// JavaScript code
let radius;
let circ;

document.getElementById('mySubmit').onclick = function() {
    radius = Number(document.getElementById('myText').value);
    circ = 2 * PI * radius;
    document.getElementById('circ').textContent = \`Circumference: \${circ} cm\`;
};`;
    const solutionBox = document.getElementById('solutionCode');
    solutionBox.textContent = solution.trim();
    solutionBox.style.display = "block";
};

// Declaring a constant object
const person = {
  name: "Glenn",
  age: 22
};
console.log(person);

// Modifying a property of a constant object (allowed)
person.age = 23;
console.log(person);

// Trying to reassign the object itself (not allowed)
//person = { name: "John" }; 
