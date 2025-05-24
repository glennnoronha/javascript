let battingAvg = 0.333;
console.log(battingAvg, typeof battingAvg);

battingAvg = String(battingAvg);
console.log(battingAvg, typeof battingAvg);

battingAvg = Boolean(battingAvg);
console.log(battingAvg, typeof battingAvg);

let food = 'pizza';
console.log(food, typeof food);

food = Number(food);
console.log(food, typeof food);

// parseInt and parseFloat
let score = "123.45";
console.log(parseInt(score), typeof parseInt(score));   // 123 number
console.log(parseFloat(score), typeof parseFloat(score)); // 123.45 number

// Falsy values
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false

// null and undefined to Number
console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN

// Implicit conversion
console.log("5" * 2);  // 10 (string "5" becomes number)
console.log("10" + 1); // "101" (number 1 becomes string)

// Using toString()
let num = 42;
console.log(num.toString(), typeof num.toString()); // "42" string