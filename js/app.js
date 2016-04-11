$(document).ready(function(){


    var answerNumber = function() {
            computerNumber = Math.floor(Math.random() * 101);
                console.log(computerNumber);
                return computerNumber;
    };

    answerNumber();

    var counter = 0;
    var counting = function(){
        counter += 1;
        $('#count').replaceWith("<span id='count'>" + counter + "</span>");
    };

    
    //Start new game

    function gamePlay() { 

        var guessNumber = $("#userGuess").val();
            console.log(guessNumber);   

        computerNumber;

        var guessChecker = (Math.abs(guessNumber - computerNumber));
            console.log(guessChecker);




        if(guessChecker === 0) {
            $("#feedback").replaceWith("<h2 id='feedback'>" + "You got it right - press the New Game button to start again!" + "</h2>");
        }

        else if(guessChecker >= 30 && guessChecker <=49) {
            $("#feedback").replaceWith("<h2 id='feedback'>" + "You're cold!" + "</h2>");
        }

        else if(guessChecker >= 20 && guessChecker <=29) {
            $("#feedback").replaceWith("<h2 id='feedback'>" + "You're warm!" + "</h2>");
        }

        else if(guessChecker >= 10 && guessChecker <=19) {
            $("#feedback").replaceWith("<h2 id='feedback'>" + "You're hot!" + "</h2>");
        }

        else if(guessChecker >= 1 && guessChecker <=9) {
            $("#feedback").replaceWith("<h2 id='feedback'>" + "You're burning up!" + "</h2>");
        }

        else if (guessChecker === 10 ) {
            document.getElementById("gameMessage").innerHTML =  "Sorry you didnt guess the number, your streak has been reset. Try again. I'm thinking of a number between 1 and 100...";
            streak = 0;
            document.getElementById("score").innerHTML = streak;
            guessTrack = 0;
            ranNum = getRandomNum();
            }     


        else {
            $("#feedback").replaceWith("<h2 id='feedback'>" + "You're freezing!" + "</h2>");
        }

        

    };

    //Guess button function

    $("#guessButton").on("click", function(){
        
        event.preventDefault();

        var guessNumber = $("#userGuess").val();
            if(guessNumber > 0 && guessNumber < 101) {
                $("#guessList").append("<li>" + guessNumber + "</li>");
                gamePlay();
                counting();
            } else {
            alert("Not a valid number, try again!")
            }
            $("#userGuess").val(" ");
        
    }); 

    //New Game selection

    $(".new").on("click", function() {
        $("#guessList").empty();
        answerNumber();
        var counter = 0;
        $("#feedback").replaceWith("<h2 id='feedback'>" + "Make your Guess!" + "</h2>");
        $('#count').replaceWith("<span id='count'>" + 0 + "</span>");

    })

    /*--- Display information modal box ---*/

    $(".what").click(function(){
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/

    $("a.close").click(function(){
        $(".overlay").fadeOut(1000);
    });

});


  	
  	
