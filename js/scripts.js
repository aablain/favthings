$(document).ready(function() {

  $("form#quiz").submit(function(event) {
    debugger;
    var foodInput = $("#food").val();
    var movieInput = $("#movie").val();
    var animalInput = $("#animal").val();
    var answers = [foodInput, movieInput, animalInput];
    var newanswers = [];
    newanswers.push(answers[1], answers[0], answers[2]);

    $(".1").text(newanswers[0]);
    $(".2").text(newanswers[1]);
    $(".3").text(newanswers[2]);

    event.preventDefault();
  });


});
