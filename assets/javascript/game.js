

//declare the variables

var wins=0;
var loss=0;
var guesses=9;
var guessChoices=[];

//declare the choices for the game (computer) with an array

var choiceArray=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var computerChoice = choiceArray[Math.floor(Math.random()* choiceArray.length)];

//we need to reference the elements in html for wins, losses, guesses remaining, and probably letters already guessed
var userGuessElement=document.getElementById("user-guess");
var winsScoreElement=document.getElementById("winScore");
var lossesScoreElement=document.getElementById("lossScore");
var guessesRemainingElement=document.getElementById("guessRemain");
var guessedElement=document.getElementById("guessed");

winsScoreElement.textContent=" " +wins;
lossesScoreElement.textContent=" " +loss;
guessesRemainingElement.textContent=" " +guesses;

//next, create a function that will handle the key press events

function keyPressEvent(event) {
var userGuess = event.key;

//update text content of elements for the guess/choice with textContent

userGuessElement.textContent=" " + userGuess;
guessedElement.textContent=" " + guessChoices;
winsScoreElement.textContent=" " +wins;
lossesScoreElement.textContent=" " +loss;
guessesRemainingElement.textContent=" " +guesses;


//create a conditional to declare what to do with each result

if (choiceArray.indexOf(userGuess)=== -1){
           alert("Please choose a key between a - z");
       }

if (userGuess === computerChoice){
wins++;
guessChoices=[];
guesses=9;
alert("Zoltar Speaks: You guessed it - your wish is granted!");
}

else if (userGuess != computerChoice){
guesses-- ;
console.log(guesses);
guessChoices.push(userGuess);
}

if (guesses === -1){
    guesses=9;
    loss++;
    guessChoices=[];
    alert("Zoltar Speaks:Your wish is not granted. Try again.");
}
}
//link it to key event

document.onkeydown = keyPressEvent;

