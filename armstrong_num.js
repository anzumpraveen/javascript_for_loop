let sum = 0;
var readlineSync = require('readline-sync') 
var user= readlineSync.questionInt('enter the number=');
var temp=user
for(i=1;temp>0;i++){
    let remainder = temp % 10;

    sum += remainder **3
    temp = parseInt(temp / 10);
}
if (sum == user) {
    console.log(user,"is an Armstrong number");
}
else {
    console.log(user ,"is not an Armstrong number.");
}
