//var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

//for (var i = 0; i < letters.length; i++) {

//var letterBtn = document.createElement("BUTTON");

	//	letterBtn.className += "letter-button letter letter-button-color";

	//	letterBtn.createAttribute("data-letter", letters[i]);

    //    letterBtn.text(letters[i]);

     //   document.getElementByID("buttons").appendChild(letterBtn);

      
     // 	document.getElementsByClass("letter-button").onclick = function() {

    //  };


var list = ["cuzco", "bangkok", "rome", "savannah", "barcelona", "kyoto", 					//array to hold the word bank
			"florence", "charleston", "tokyo", "orlando", "prague", "charlotte"];			
var underLine =[];																			//array to generate underlines
var correctGuess =[];																		//this array stores the letter of the word that is generated

var lives = 5;	
var wrong = 0;																				//stores the number of lives															/
var Line =" _ ";																			//the line variable
var word ="";																				//variable for the generated word

function reset(){
	window.location.reload();
}

function clicked(){			
	var entry = event.entry || event.srcElement;	
	var lower = entry.id;																	//this is to register the value of the key when clicked
    var value = document.getElementById(lower).getAttribute('value');
    console.log(value);
    alert(value);
}

function RandomWord(){ 																		//generates a random word from the word bank
	word = list[(Math.floor(Math.random()*list.length))];
}

function UnderLine(){
	RandomWord();																			//takes the characters from the generated word and adds it int the array
	for(var i = 0; i < word.length; i++){													//loops based on the number of characters in the word
	correctGuess[i] = word.charAt(i);														
	underLine[i] = " _ ";
	}
																							//creates underlines based on the number of charachters
	document.getElementById("guessWord").innerHTML = Line;
}

