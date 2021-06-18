
var readlineSync = require('readline-sync') 
var user= readlineSync.questionInt('enter the number=');
for (var n = 1; n<=user; n++){
    var sum=0
    for(var i=1;i<n;i++){
        if (n%i==0){
            sum+=i
        }
    }
    if(n==sum){
        console.log(n,"perfect")
    }
    
}

