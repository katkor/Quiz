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


$('h2').text(allQuestions[0].question);
for (var i=0; i<allQuestions[0].choices.length; i++) {
	$('input[name="pyt1"]').val(allQuestions[0].choices[i]);
	$('input[name="pyt1"]').after(allQuestions[0].choices[i]);
}