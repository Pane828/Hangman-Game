//var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

//for (var i = 0; i < letters.length; i++) {

//var letterBtn = document.createElement("BUTTON");

	//	letterBtn.className += "letter-button letter letter-button-color";

	//	letterBtn.createAttribute("data-letter", letters[i]);

    //    letterBtn.text(letters[i]);

     //   document.getElementByID("buttons").appendChild(letterBtn);

      
     // 	document.getElementsByClass("letter-button").onclick = function() {

    //  };

var guess = {};
var list = ["cuzco", "bangkok", "rome", "savannah", "barcelona", "kyoto", 
			"florence", "charleston", "tokyo", "orlando", "prague", "charlotte"];
var underLine =[];
var correctGuess =[];

var lives = 5;
var numberWord = list.length;

var Line ="_";
var word ="";

function RandomWord(){ 
	word = list[(Math.floor(Math.random()*list.length))];
}

function UnderLine(){
	RandomWord();
for(var i = 0; i < word.length; i++){
	correctGuess[i] = word.charAt(i);
	underLine[i] = "_";

	}

	Line = underLine.join("");
	document.getElementById("guessWord").innerHTML = Line;
}

Update = function(letter){
	changes = 0;

	for(var i = 0; i < word.length; i++){
		list[i] = word.charAt(i);

	if(word.charAt(i) == letter){
		underLine = letter;
		changes++;
	}
}
}

guess.length = list.length