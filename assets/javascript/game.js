

//declare the variables

var wins=0;
var loss=0;
var guesses=9;
var guessChoices=[];

//declare the choices for the game (computer) with an array

var choiceArray=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//we need to reference the elements in html for wins, losses, guesses remaining, and probably letters already guessed
var userGuessElement=document.getElementById("user-guess");
var winsScoreElement=document.getElementById("winScore");
var lossesScoreElement=document.getElementById("lossScore");
var guessesRemainingElement=document.getElementById("guessRemain");
var guessedElement=document.getElementById("guessed");

//next, create a function that will handle the key press events

function keyPressEvent(event) {
    var userGuess = event.key;
    var computerChoice = choiceArray[Math.floor(Math.random()* choiceArray.length)];

    //update text content of elements for the guess/choice with textContent

userGuessElement.textContent=" " + userGuess;
guessedElement.textContent=" " + guessChoices;
winsScoreElement.textContent=" " +wins;
lossesScoreElement.textContent=" " +loss;
guessesRemainingElement.textContent=" " +guesses;

//create a conditional to declare what to do with each result


if (userGuess === computerChoice){
wins++;
guessChoices=[];
guesses=9;
alert("Zoltar Speaks: You guessed it - your wish is granted!");
}

else if (userGuess != computerChoice){
guesses-- ;
guessChoices.push(userGuess);
}

if (guesses === 0){
    guesses=9;
    loss++;
    guessChoices=[];
    alert("Zoltar Speaks:Your wish is not granted. Try again.");
}
}
//link it to key event

document.onkeyup = keyPressEvent;

