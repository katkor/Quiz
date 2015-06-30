var allQuestions = [
	{question: "W którym wieku panowała caryca Katarzyna II Wielka?",
		choices: ["XVI", "XVII", "XVIII"],
		correctAnswer:2},
	{question: "Ile dzielników ma liczba pierwsza?",
		choices: ["1", "2", "nieskończoność"],
		correctAnswer:1},
	{question: "Ile kwintali liczy jedna decytona?",
		choices: ["100", "10", "1"],
		correctAnswer:2},
	{question: "Co robią koty?",
		choices: ["miauczą", "skakają", "czczą Szatana"],
		correctAnswer:1},
	{question: "Czym można otworzyć piwo?",
		choices: ["wszystkim", "otwieraczem", "zębami"],
		correctAnswer:0},
	{question: "Więcej niż jedno zwierzę to:",
		choices: ["owca", "lama", "stado"],
		correctAnswer:0}
];

$(document).ready(function() {
	var usersChoices = [];
	var questionNumber = 0;
	$('.questions').hide();
	//start quiz = show questions
	$('#start').click(function() {
		$(this).hide();
		$('.questions').show();
	});
	var displayQuestion = function (questionNumber){
		$('h2').text(allQuestions[questionNumber].question);
		for (var i=0; i<allQuestions[questionNumber].choices.length; i++) {
			var selector = 'label[for=ans'+ (i + 1) + ']';
			$(selector).text(allQuestions[questionNumber].choices[i]);
		}
	};
	//display first question
	displayQuestion(questionNumber);
	//click next = go to next question
	$('.next' ).on('click', function( event ) {
		if (usersChoices[questionNumber] === undefined ){
			var radioValue = $("input[name='pyt1']:checked").val();
			usersChoices[questionNumber] = radioValue;
		}
		else{
			$('input:radio[name="pyt1"][value=' + usersChoices[questionNumber] + ']').prop('checked',true);
		}
		event.preventDefault();
		if (questionNumber < allQuestions.length-1) {
			questionNumber++;
			displayQuestion(questionNumber);
		}
		else { //deleted the document ready in document ready
			$('.questions').hide();
			$('#end').append("Koniec quizu. Liczba uzyskanych punktów: " + getCurrentPoints());
		}
	});

$('.back' ).on('click', function( event ) {
		event.preventDefault();
		if (questionNumber < allQuestions.length && questionNumber > 0) {
			questionNumber--;
			displayQuestion(questionNumber);
			$('input:radio[name="pyt1"][value=' + usersChoices[questionNumber] + ']').prop('checked',true);
		}
	});



	//functions
	var getCurrentPoints = function () {
		var points= 0;
		//compare choices
		for(var i = 0; i <usersChoices.length; i++){
			if (usersChoices[i] == allQuestions[i].correctAnswer){
				points++;
				}
		}
		return points;
	};
}); //document ready sie konczy
