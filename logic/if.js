let age = 22;

if (age > 18) {
    console.log("You are an adult")
}

age = 15;

if (age > 18) {
    console.log("You are an adult")
} else {
    console.log("You are not an adult")
}

let temperature = 30;

if (temperature > 30) {
    console.log("It's hot outside.");
} else if (temperature > 20) {
    console.log("The weather is warm.");
} else {
    console.log("It's cold outside.");
}

age = 20;
let hasTicket = true;

if (age >= 18) {
    if (hasTicket) {
        console.log("You can enter the concert.");
    } else {
        console.log("You need a ticket to enter the concert.");
    }
} else {
    console.log("You are too young to attend the concert.");
}
