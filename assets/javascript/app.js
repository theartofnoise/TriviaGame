$(document).ready(function() {
  var totalQuestions = 10;
  var correctAnswers = 0;
  var wrongAnswers = 0;
  var answered = 0;
  var timer;
  var startTime = 120;
  var time = startTime;
  var cheater = false;
  gameStart();

  // hides results, main and shows start
  function gameStart() {
    $("#startButton").show();
    $("#timer").hide();
    $("#main").hide();
    $("#results").hide();
    $("#winning").hide();
  }

  //clear radios and answers****************
  function restart() {
    $("input:radio").prop("checked", false);
    correctAnswers = 0;
    wrongAnswers = 0;
    answered = 0;
  }

  //starts trivia shows main, starts timer
  $("#startButton").on("click", function() {
    //$(".facts").hide();
    if (cheater === true) {
      $(".facts").show(1000);
      $("#timer").text("No Timer");
    } else {
      $(".facts").hide();
      time = startTime;
      startTimer();
    }
    $("#timer").show();
    $("#startButton").hide();
    $("#main").show(1000);
    //starts timers
  });

  //try again button
  $("#tryAgain").on("click", function() {
    gameStart();
    restart();
  });

  //show answers button
  $("#seeAnswers").on("click", function() {
    $("#seeAnswers").hide();
    cheater = true;
    gameStart();
    restart();
  });

  // how much time and timer
  function startTimer() {
    $("#timer").text("Time Left: " + time);
    timer = setInterval(function() {
      time--;
      $("#timer").text("Time Left: " + time);
      if (time === 0) {
        clearInterval(timer);
        alert("Times Up!");
        done();
      }
    }, 1000);
  }
  //done button
  $("#done").on("click", function() {
    //***checks answers
    $("input:radio").each(function() {
      if ($(this).is(":checked") && $(this).val() == "correct") {
        correctAnswers++;
        answered++;
        console.log("right " + correctAnswers);
      } else if ($(this).is(":checked")) {
        wrongAnswers++;
        answered++;
        console.log("wrong " + wrongAnswers);
      }
    });
    done();
  });

  //done function
  function done() {
    clearInterval(timer);
    $("#main").hide();
    $("#results").show();
    $("#seeAnswers").show();
    $("#rightAnswers").text(correctAnswers);
    $("#wrongAnswers").text(wrongAnswers);
    $("#unansweredQuestions").text(totalQuestions - answered);
    if (answered === totalQuestions) {
      $("#allQuestions").hide();
    }
    if (correctAnswers === 10) {
      //alert("You got them all correct!!!! You must have played this before! lol");
      $("#winning").show();
    }
  }
});
