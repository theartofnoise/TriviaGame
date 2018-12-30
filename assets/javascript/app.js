

$(document).ready (function () {
    var totalQuestions = 5;
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unansweredQuestions = 0;
    var answered = 0;
    gameStart();
    
    // hides results, main and shows start
    function gameStart(){
        $("#startButton").show();

        $("#timer").hide();
        $("#main").hide();
        $("#results").hide();
        var ele = document.getElementsByName("input");
        for(var i=0;i<ele.length;i++)
        ele[i].checked = false;
        
    };
    
    //starts trivia shows main, starts timer
    $("#startButton").on("click", function(){
        $("#startButton").hide();
        $("#main").show();
        $("#timer").show();
        //starts timers
        startTimer();

    });
    // how much time and timer
    function startTimer(){
        var time = 15;
        $("#timer").text("Time Left: "+time);
        var timer = setInterval(function(){
            time--;
            $("#timer").text("Time Left: "+time);
            if (time===0)
            {
                clearInterval(timer);
                alert("Times Up!");
                done();
            }
        }, 1000);

        //radio checker
        $('input[type="radio"]').change(function() {
            if($(this).val()=="correct"){
                correctAnswers++;
                answered++;
                console.log("right "+correctAnswers);
            } else {
                wrongAnswers++;
                answered++;
                console.log("wrong "+wrongAnswers);
            }

        });
        
        //done button
        $("#done").on("click", function(){
            done();
            
        });
        //done function
        function done() {
            clearInterval(timer);           
            $("#main").hide();
            $("#results").show();
            $("#rightAnswers").text(correctAnswers);
            $("#wrongAnswers").text(wrongAnswers);
            $("#unansweredQuestions").text(totalQuestions-answered);


        };
        $("#tryAgain").on("click", function(){
            //clear radios ****************
            $('input[type="radio"]').attr('checked',false);
            correctAnswers = 0;
            wrongAnswers = 0;
            answered = 0;
            gameStart();
        })
    };
    });