let day = 8;

switch (day) {
    case 1:
        console.log("It is monday");
        break;
    case 2:
        console.log("It is tuesday");
        break;
    case 3:
        console.log("It is wednesday");
        break;
    case 4:
        console.log("It is thursday");
        break;
    case 5:
        console.log("It is friday");
        break;
    case 6:
        console.log("It is saturday");
        break;
    case 7:
        console.log("It is sunday");
        break;
    default:
        console.log(`${day} is not a day`)
}

let grade = 76;
let letterGrade;

switch (true) {
    case grade >= 90:
        letterGrade = 'A';
        break;
    case grade >= 80:
        letterGrade = 'B';
    case grade >= 70:
        letterGrade = 'C';
}

console.log(letterGrade);