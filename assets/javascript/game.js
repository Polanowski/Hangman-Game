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
var guesses = [];
var start = true;
var end = false;
//Create an array of words that the computer will randomly pick from

var computerChoice = ["cat", "dog", "play", "horse", "cow", "egg", "lynx", "waltz", "hoax", "knight", "ghost", "spongy", "lizard", "wizard", "hymn", "spandex", "tea","slip","hat"];
var storeLetter = "";
var storeWord = "";

function computerWord () {
    var randWord = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    console.log(randWord); //randWord is local to the function computerWord
    for (var i = 0; i < randWord.length; i++) {
		$(".guess").append("<span class='"+ i +"'>");
	  	$("span").addClass("border-bottom");
	  	storeWord = randWord;
	}
}

// function letterChecker (){
// 	console.log("letter checker started");
// 	if ($(".letter")){

// 	}
// 	console.log("letter checker ended");
// }

/*for (var j = 0; j < storeWord.length; j++){
	$("span").addClass(storeWord[j]);
}*/


computerWord();
// letterChecker();
//storeWord.length;
var storeWord = storeWord.split(""); //storeWord.charAt(2).toUpperCase();
console.log(storeWord);
	$(".letter").click(function() {
		if($(".0").text(this.value) == $(".letter").value){
			$(".border-bottom").push(this.value);
		}


		// for (var i = 0; i < storeWord.length; i++) {
			
		// }
		// //storeLetter += this.value; //holds the letter that was selected
		// console.log(storeLetter);
		// var test = this.value;
		// console.log(test);
		// if (storeWord == test) {
		// 	console.log(test);

		// }

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
