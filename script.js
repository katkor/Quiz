//all questions in array
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

//hide questions at the beginning
$(document).ready(function() {
  var usersChoices = [];
  var questionNumber = 0;
  $('.questions').hide();


var displayQuestion = function (questionNumber){
    $('h2').text(allQuestions[questionNumber].question);
    for (var i=0; i<allQuestions[questionNumber].choices.length; i++) {
      var selector = 'label[for=ans'+ (i + 1) + ']';
      $(selector).text(allQuestions[questionNumber].choices[i]);
    }
}

displayQuestion(questionNumber);

//click next = go to next question
$('form' ).submit(function( event ) {
  event.preventDefault();
    if (questionNumber < allQuestions.length-1) {
    questionNumber++;
    displayQuestion(questionNumber);
    }
  else {
    $(document).ready(function() {
      $('.questions').hide();
      });
      $('#end').append("Koniec quizu. Liczba uzyskanych punktów: " + getCurrentPoints());
      
  }
});



//get chosen values
$(document).ready(function(){
        $("input[type='submit']").click(function(){
            var radioValue = $("input[name='pyt1']:checked").val();
            //radioValue is a string!
            usersChoices.push(radioValue);
        });
        
    });

//count points
var getCurrentPoints = function () {
    var points= 0;
    //compare choices
    for(var i =0; i <usersChoices.length; i++){
        if (usersChoices[i] == allQuestions[i].correctAnswer){
            points++;
        }
    }
    return points;
}
}); //document ready sie konczy

//start quiz = show questions
$('#start').click(function() {
  $(this).hide();
  $('.questions').show();
});
