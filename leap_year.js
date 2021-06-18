var readlineSync = require('readline-sync') 
var number= readlineSync.questionInt('enter the number=');
let i=1
for (i=1;i<=number;i++){
    if(number%400==0 & number%100!=0 ||number%4==0){
        console.log(number,"leap year")
        break
    }
    else{
        console.log(number,"not leap year")
        break
    }
}