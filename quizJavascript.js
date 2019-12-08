var timerStart = false;
var timeRemaining = 75;
var timerValue = document.getElementById("timerText");
var currentQuestion = document.getElementById("questionField");

var questionArray = ["Which of the following countries is located in the continent of Africa?", "Who was the first person to walk on the Moon?", "Is the earth actually flat?", "How many planets are in our Solar System?", "When calculating digital storage, which formula would correctly convert bits to bytes?", "Which essential resource do humans need in order to survive?", "What is the official animal of Scotland?", "Which of the following dog breeds is the largest?"];
var randomQuestionPicker = 0;
var choicesArray = [
    ['question1choices', "Angola", "Peru", "Iran", "Belgium"],
    ['question2choices', "Albert Einstein", "Neil Armstrong", "Amelia Earhart", "Abraham Lincoln"],
    ['question3choices', "No.", "Yes.", "--> YES. <--", "Of course it is."],
    ['question4choices', "6", "7", "8", "9"],
    ['question5choices', "Divide the value by 4.", "Multiply the value by itself.", "Multiply the value by 8.", "Divide the value by 8."],
    ['question6choices', "Oxygen", "Carbon Dioxide", "Water", "All of the above."],
    ['question7choices', "Unicorn", "Horse", "Donkey", "Mountain Lion"],
    ['question8choices', "Labrador Retriever", "Pitbull", "Doberman", "English Mastiff"],
];

var oneWasPicked = false;
var twoWasPicked = false;
var threeWasPicked = false;
var fourWasPicked = false;
var score = 0;
var timeBasedScore = 0;
var scoreOnScreen = document.getElementById("scoreText");


window.onload = function(){
    
 
}



//clicking starts the quiz, disables quiz button, starts timer, updates timer field, starts coundown and spawn question
$(".btn-primary").click(function(){
    $(this).prop("disabled",true);
    timerStart = true;
    timerValue.innerHTML = "Timer: " + timeRemaining;
    countdown();
    pickQuestion();   
});

//clicking choices invokes pickQuestion as well, after a short delay 
$(".btn-secondary").click(function(){
    setTimeout('pickQuestion()', 100); 
});

//clicking choices sets value to true briefly to enable scoring, then back to false
$("#col-4-field1").click(function(){
    oneWasPicked = true;
    console.log("choice one is: " + oneWasPicked);  
    answerChecker();
    oneWasPicked = false;
});

$("#col-4-field2").click(function(){
    twoWasPicked = true;
    console.log("choice two is: " + twoWasPicked);
    answerChecker();
    twoWasPicked = false;
});

$("#col-4-field3").click(function(){
    threeWasPicked = true;
    console.log("choice three is: " + threeWasPicked);
    answerChecker();
    threeWasPicked = false;
});

$("#col-4-field4").click(function(){
    fourWasPicked = true;
    console.log("choice four is: " + fourWasPicked);
    answerChecker();
    fourWasPicked = false;
});



//picks questions and choices when invoked
function pickQuestion(){
  
    randomQuestionPicker = Math.floor(Math.random() * questionArray.length);
    currentQuestion.innerHTML = questionArray[randomQuestionPicker];
    
    for (var i = 0; i<questionArray.length; i++){
        if(i==randomQuestionPicker){
            $("#col-4-field1 button").text(choicesArray[i][1])
            $("#col-4-field2 button").text(choicesArray[i][2])
            $("#col-4-field3 button").text(choicesArray[i][3])
            $("#col-4-field4 button").text(choicesArray[i][4]) 
        }
    }
    
    
    
}

function countdown() {
    setInterval('Decrement()', 1000);   
}


function Decrement(){
    if(currentQuestion.innerHTML == "All done!"){
        timerValue.innerHTML = "Time's up!"; 
        return;
    }
    if(timeRemaining>1){
    console.log (timeRemaining);
    timeRemaining--;
    timerValue.innerHTML = "Timer: " + timeRemaining;
    }else{
        timerValue.innerHTML = "Time's up!";
        lossCondition();
    }
    
}

//checks for correct answer, if correct, adds to score, but if subtracts 15 seconds if wrong... also checks for win/loss conditions
function answerChecker(){
    
   
    console.log("questionPicker is: " + randomQuestionPicker);
    
    if(oneWasPicked == true){
        if(randomQuestionPicker == (0 || 2 || 6)){
            console.log("score added");
            score++; 
        }else{
            timeRemaining-=15;
        }
    }

    if(twoWasPicked == true){
        if(randomQuestionPicker == 1){
            console.log("score added");
            score++; 
        }else{
            timeRemaining-=15;
        }
    }
    
    if(threeWasPicked == true){
        if(randomQuestionPicker == 3){
            console.log("score added");
            score++; 
        }else{
            timeRemaining-=15;
        }
    }

    if(fourWasPicked == true){
        if(randomQuestionPicker == 4 || 5 || 7){
            console.log("score added");
            score++; 
        }else{
            timeRemaining-=15;
        }
    }

    console.log("score is now: " + score);

    if (score == 7){
        winCondition();
    }  
}


//functions run when win/loss is detected and calculates timebasedScoring 
function winCondition(){
    $(".choicesContainer").remove();
    console.log("win");
    timeBasedScore = score + timeRemaining;
    console.log("Your score was " + score + " and you had " + timeRemaining + " seconds left, therefore your " + timeBasedScore + " is your timeBasedScore");
    setTimeout('endScreen()', 100);
    
}

function lossCondition(){
    $(".choicesContainer").remove();  
    console.log("loss");
    timeBasedScore = score;
    console.log ("Your losing score was " + timeBasedScore);
    setTimeout('endScreen()', 100);
}



function endScreen(){
    var locallyStoredScore = [];
    locallyStoredScore.push(timeBasedScore);
    console.log(locallyStoredScore);
    localStorage.setItem("highscore", JSON.stringify(locallyStoredScore));
    currentQuestion.innerHTML = "All done!";
    scoreOnScreen.innerHTML = "Your final score is: " + timeBasedScore;
    timeBasedScore = 0;
}



$("#highScoreHolder").click(function(){
    
    
    var highscoreGet = localStorage.getItem("highscore");
    $(".highscoreContainer").append(highscoreGet);  
    
    
})