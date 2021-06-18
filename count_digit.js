var readlineSync = require('readline-sync') 
var number= readlineSync.questionInt('enter the number=');
var count=0
for (i=0;number>0;i++){
    count+=1
    number=parseInt(number/10)
}
console.log("digit"+"="+count)