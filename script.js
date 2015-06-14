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

//for (var i=0; i<allQuestions[0].choices.length; i++) {
//  $(answers[i]).val(allQuestions[0].choices[i]);
  //$(answers[i]).after(allQuestions[0].choices[i]);
    //$(answers[i]).text(allQuestions[0].choices[i]);
  //$('input').append(allQuestions[0].choices[i]);
    //$(":radio[name=pyt1]").append(allQuestions[0].choices[i]);
//}
$('label[for=ans1]').text(allQuestions[counter].choices[0]);
$('label[for=ans2]').text(allQuestions[counter].choices[1]);
$('label[for=ans3]').text(allQuestions[counter].choices[2]);
    //jak robię to w pętli jedną linijką zamiast trzech to wszędzie wpisana jest trzecia odpowiedz


$('form' ).submit(function( event ) {
  event.preventDefault();
    if (counter < allQuestions.length-1) {
    counter++;
    $('h2').text(allQuestions[counter].question);
    //nic sie nie zmienia, dlaczego???
    $('label[for=ans1]').text(allQuestions[counter].choices[0]);
    $('label[for=ans2]').text(allQuestions[counter].choices[1]);
    $('label[for=ans3]').text(allQuestions[counter].choices[2]);
    }
  else {
    $(document).ready(function() {
      $('.questions').hide();
      });
      var result = compare();
      $('#end').append("Koniec quizu. Liczba uzyskanych punktów: " + result);
      
  }
});

usersChoices = [];
//get chosen value
$(document).ready(function(){
        $("input[type='submit']").click(function(){
            var radioValue = $("input[name='pyt1']:checked").val();
            //radioValue is a string!
            usersChoices.push(radioValue);
        });
        
    });


var compare = function () {
    var points= 0;
    //compare choices
    for(var i =0; i <usersChoices.length; i++){
        if (usersChoices[i] == allQuestions[i].correctAnswer){
            points++;
        }
    }
    return points;
}