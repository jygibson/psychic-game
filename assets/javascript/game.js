

//declare the variables

var wins=0;
var loss=0;
var guesses=9;

//declare the choices for the game (computer) with an array

var choiceArray=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//we need to reference the elements in html for wins, losses, guesses remaining, and probably letters already guessed
var userGuessElement=document.getElementById("user-guess");
var compChoiceElement=document.getElementById("zoltar-choice");
var winsScoreElement=document.getElementById("winScore");
var lossesScoreElement=document.getElementById("lossScore");
var guessesRemainingElement=document.getElementById("guessRemain");
var guessedElement=document.getElementById("guessed");

//next, create a function that will handle the key press events

function keyPressEvent(event) {
    var userGuess = event.key;
    var computerChoice = choiceArray[Math.floor(Math.random()* choiceArray.length)];

    //update text content of elements for the guess/choice with textContent

userGuessElement.textContent=userGuess;
compChoiceElement.textContent=computerChoice;
guessedElement.textContent=userGuess;
winsScoreElement.textContent=wins;
lossesScoreElement.textContent=loss;
guessesRemainingElement.textContent=guesses;

//create a for loop to declare what to do with each result

if (userGuess === computerChoice)
wins++;

else if (userGuess !== computerChoice)
losses++ ;
guesses-- ;
}

//link it to key event

document.onkeyup = keyPressEvent;


