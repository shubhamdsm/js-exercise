var readlineSync = require('readline-sync')

function play(question,answer){
    var userAnswer = readlineSync.question(question)
    if(userAnswer===answer){
        console.log('Your are right ')
    }else{
        console.log('Your are wrong')
    }
}

play('Are you neogcamp??','yes')