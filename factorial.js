var readlineSync = require('readline-sync') 
var number= readlineSync.questionInt('enter the number=');

if (number < 0) {
    console.log('Error!');
}
else if (number === 0) {
    console.log("The factorial of",number, "is 1.");
}
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log("The factorial of",number,"is",fact)}