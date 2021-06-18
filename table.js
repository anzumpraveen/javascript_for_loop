var readlineSync=require("readline-sync")
var user=readlineSync.questionInt("Enter the number")
for (var i=1;i<=10;i++){
    x=i*user
console.log(x)
}
  
