var readlineSync = require("readline-sync")
var baller = readlineSync.question("enter the ball no= ")
var score = 0
for (i = 1; i <= baller; i++) {
    var readlineSync = require("readline-sync")
    var ball = readlineSync.question("enter the ball wb/nb/lg_by?= ")
    
    if (ball == "wb") {
        score = score + 1
        i = i-1
        console.log(score, "oooooooooooo");
    }

    else if (ball == "nb") {
        score = score + 1
        i = i-1
        console.log(score, "kkkkkkkkkk");

    }
    else if (ball == "lg") {
        score = score + 1
        i = i-1
        console.log(score, "yyyyyyyyy");

    }
    else if (ball==1||ball ==2||ball==3||ball==4||ball==5||ball==6) {
        score = score + Number(ball)
        console.log(score, "yyyyyyyyy");
    }
    else if (ball == "out") {
        console.log("player is out");
        break

    }

}





