

$(document).ready(function () {
    var totalQuestions = 10;
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var answered = 0;
    var timer;
    var time = 80;
    gameStart();

    // hides results, main and shows start
    function gameStart() {
        $("#startButton").show();
        $("#timer").hide();
        $("#main").hide();
        $("#results").hide();


    };

    //clear radios and answers****************
    function restart() {
        $('input:radio').prop('checked', false);
        correctAnswers = 0;
        wrongAnswers = 0;
        answered = 0;
    };

    //starts trivia shows main, starts timer
    $("#startButton").on("click", function () {
        $("#startButton").hide();
        $("#main").show(1000);
        $("#timer").show();
        //starts timers
        startTimer();
    });

    //try again button
    $("#tryAgain").on("click", function () {
        gameStart();
        restart();
    });

    //done button 
    $("#done").on("click", function () {
        //***checks answers
        $('input:radio').each(function () {
            if ($(this).is(':checked') && ($(this).val() == "correct")) {
                correctAnswers++;
                answered++;
                console.log("right " + correctAnswers);
            }
            else if ($(this).is(':checked')) {
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
        $("#rightAnswers").text(correctAnswers);
        $("#wrongAnswers").text(wrongAnswers);
        $("#unansweredQuestions").text(totalQuestions - answered);
        if (answered===totalQuestions) {
            $("#allQuestions").hide();
        }

    };

    // how much time and timer
    function startTimer() {
        $("#timer").text("Time Left: " + time);
        timer = setInterval(function () {
            time--;
            $("#timer").text("Time Left: " + time);
            if (time === 0) {
                clearInterval(timer);
                alert("Times Up!");
                done();
            }
        }, 1000);
    };
});