

$(document).ready (function () {
    
    // hides start
    var correctAnswers = 0;
    var wrongAnswers = 0;
    gameStart();
    
    function gameStart(){
        $("#startButton").show();
        $("#main").hide();
        $("#results").hide();
        
    };
    
    //starts trivia
    $("#startButton").on("click", function(){
        $("#startButton").hide();
        $("#main").show();
        //starts timers
        startTimer();

    });
    // how much time and timer
    
    function startTimer(){
        var time = 15;
        $("#timer").text("Time Left: "+time);
        var timer = setInterval(function(){
            time--;
            console.log(time);
            $("#timer").text("Time Left: "+time);
            if (time===0)
            {
                clearInterval(timer);
                alert("Times Up!");
                done();
            }
        }, 1000);
        
        
        //done button
        $("#done").on("click", function(){
            done();
            
        });
        //done function
        function done() {
            clearInterval(timer);
            var radioValue = $("input[data-type='correct']:checked").val();
    
            if(radioValue){
                correctAnswers++;
                console.log("right "+correctAnswers);
            } else {
                wrongAnswers++;
                console.log("wrong "+wrongAnswers);
            }
            
            $("#main").hide();
            $("#results").show();


        };
        $("#tryAgain").on("click", function(){
            gameStart();
        })
    };
    });