const ageInput = document.getElementById("ageInput");
const submitButton = document.getElementById("submitButton");
const result = document.getElementById('result');
let age;

submitButton.onclick = function () {
    age = ageInput.value;
    age = Number(age);

    if (age >= 65) {
        result.textContent = "You are a senior";
    } else if (age >= 18) {
        result.textContent = "You are an adult";
    } else if (age <= 0) {
        result.textContent = "Age cannot be less than or equal to 0";
    } else if (age < 18) {
        result.textContent = "You are not an adult yet, kiddo";
    } else {
        result.textContent = "Age has to be a numerical value";
    }
}

