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
	$('.questions').hide();
});

$('#start').click(function() {
	$(this).hide();
	$('.questions').show();
});


var counter = 0;
$('h2').text(allQuestions[counter].question);

var answers = document.getElementsByClassName('answer');

for (var i=0; i<allQuestions[counter].choices.length; i++) {
	$(answers[i]).val(allQuestions[counter].choices[i]);
	$(answers[i]).text(allQuestions[counter].choices[i]);
	
}

$('form' ).submit(function( event ) {
  event.preventDefault();
  if (counter < allQuestions.length-1) {
    counter++;
    $('h2').text(allQuestions[counter].question);
    for (var i=0; i<allQuestions[counter].choices.length; i++) {
	$(answers[i]).val(allQuestions[counter].choices[i]);
	$(answers[i]).text(allQuestions[counter].choices[i]);
    }
}
  else {
    $(document).ready(function() {
      $('.questions').hide();
      });
    $('#end').append("Koniec quizu.");
  }
});