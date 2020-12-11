var readlineSync = require('readline-sync');
var yourAge = readlineSync.question('Hey Whats your age?')
if(yourAge>25){
    console.log('right')
}
else
console.log('wrong')