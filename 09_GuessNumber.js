//Use guess number as a parameter for the function (1 to 10)
//Function returns if guess number is wrong or correct
//random number return value less than (0 incl and 1 exclu)

function guessNum(digit){

//value between 1 and 10
let compGuess = Math.floor(Math.random()*10) +1 ;

if(compGuess === digit){

    return "Your guessed value of " + digit + " is correct!";
}

return "Your guessed value of " + digit + " is incorrect!";

}

console.log(guessNum(9));
