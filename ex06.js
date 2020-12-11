var readlineSync = require('readline-sync')
var askingTheUser = readlineSync.question('Is your hometown is in Bhopal? If not I would love to know city right it down your city name')
var score = 0;
if(askingTheUser==='yes')
{
    score++;
    console.log('Your score is ' +score+ '!!')
    console.log('Lets meet some time')
}
else
console.log('Its good to know you are from '+askingTheUser+ '!!')
