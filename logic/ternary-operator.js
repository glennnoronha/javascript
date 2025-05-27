let age = 21;
let message;

if (age >= 18) { message = "You are an adult";}
else { message = "You are not an adult"}

console.log(message);

let message2 = age >= 18 ? "You're an adult" : "You're not an adult";
console.log(message2);

age = 15;
message = age >= 65 ? "You're a senior" :
    age >= 18 ? "You're an adult" :
        "You're a minor";

console.log(message);