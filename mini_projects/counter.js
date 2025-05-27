const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
}

document.getElementById('showSolution').onclick = function () {
    const solution = `

<!-- HTML code -->
<h1 style="text-align: center;">Digital Counter</h1>
    <label id="countLabel">0</label>
    <div id="btnContainer">
        <button id="decreaseBtn">decrease</button>
        <button id="resetBtn">reset</button>
        <button id="increaseBtn">increase</button>
    </div>

// JavaScript code
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
}`;
    const solutionBox = document.getElementById('solutionCode');
    solutionBox.textContent = solution.trim();
    solutionBox.style.display = "block";
};