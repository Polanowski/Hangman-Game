/*---------------------|
|                      |
|      Hang Man        |
|                      |
|     6 guesses        |
|                      |
|                      |
|                      |
----------------------*/
//Reference the other example like the fridge Activities week 4 activity 11
$(document).ready(function(){


//Defined variables
var wins = 0;
var losses = 0;
var play = 0;
var start = true;
var end = false;
//Create an array of words that the computer will randomly pick from

var computerChoice = ["cat", "dog", "play", "horse", "cow", "egg", "lynx", "waltz", "hoax", "knight", "ghost", "spongy", "lizard", "wizard", "hymn", "spandex", "tea","slip","hat"];
var storeLetter = "";
var storeWord = 0;

function computerWord () {
    var randWord = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    console.log(randWord); //randWord is local to the function computerWord
    for (var i = 0; i < randWord.length; i++) {
		$(".guess").append("<span>");
	  	$("span").addClass("border-bottom");
	  	console.log(randWord);
	}
}
computerWord();

$(".letter").click(function() {
	if (true) {
	  $(".border-bottom").text(this.value);
	  storeLetter += this.value; //holds the letter that was selected press
	  console.log(storeLetter);


	} else {
		
	}
});






/*Clear out the previous guesses


    $("#clear").on("click", function(){

        $("#display").empty();


    });*/

//Create an onkey.event that looks at the string that the user selects.
//Create a compare function that looks at the strings in the word that the computer picks and compare it to the users selected string
//If the user chooses incorrectly then have a piece of the body show up.
//If the user chooses correctly then a letter is filled in.
});//Ends Document.ready