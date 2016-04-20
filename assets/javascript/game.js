var song = [
	"GO THE DISTANCE",
	"EVERYBODY WANTS TO BE A CAT",
	"BEAUTY AND THE BEAST"
];

var wins = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var incorrectArray = [];

function chooseNewWord(){
	var str = song[Math.floor(Math.random() * song.length)];
	console.log(str);
	var res = str.split();
	var blankArray = [];
	for (i = 0; i < str.length; i++) {
		if(str[i] != " "){
			blankArray.push("_");
		}
		else {
			blankArray.push(" ");
		}
	}
	document.getElementById("game").innerHTML = blankArray.join("");

	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toUpperCase();

		for (i = 0; i < str.length; i++) {
			if (userGuess == str[i]) {
				blankArray[i] = userGuess;
				var guess = "correct";
				document.getElementById("game").innerHTML = blankArray.join("");
			}
		}
		if (blankArray.join("") == str) {
			alert("Correct!");
			location.reload();
		}

		if (guess != "correct") {
			guessesLeft--;
			var incorrectGuess = userGuess;
			incorrectArray.push(incorrectGuess);
		}
		console.log(incorrectArray.length);
		document.getElementById("guessesRemain").innerHTML = "# of Guesses Remaining: " + guessesLeft;
		document.getElementById("lettersGuessed").innerHTML = "Letters Already Guessed: " + incorrectArray;

		if (guessesLeft == 0) {
			location.reload();
			// document.getElementById("outcome").innerHTML = "Try Again";
		}

	}
}




