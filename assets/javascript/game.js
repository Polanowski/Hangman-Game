var wins = 0;
var losses = 0;

//First ask the user if they want to play hangman in html or a prompt
//Create an array of words that the computer will randomly pick from
prompt("Would you like to play hangman");
var computerGuessEasy = ["cat", "dog", "lizard", "horse", "cow", "egg"];
var computerGuessHard = ["lynx", "waltz", "hoax", "knight", "ghost", "sponge"];
//Create an onkey.event that looks at the string that the user selects.
//Create a compare function that looks at the strings in the word that the computer picks and compare it to the users selected string
//If the user chooses incorrectly then have a piece of the body show up.
//If the user chooses correctly then a letter is filled in.