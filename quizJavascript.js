var timerStart = false;
var timeRemaining = 75;
var timerValue = document.getElementById("timerText");
var currentQuestion = document.getElementById("questionField");

var questionArray = ["Which of the following countries is located in the continent of Africa?", "Who was the first person to walk on the Moon?", "Is the earth actually flat?", "How many planets are in our Solar System?", "When calculating digital storage, which formula would correctly convert bits to bytes?", "Which essential resource do humans need in order to survive?", "What is the official animal of Scotland?", "Which of the following dog breeds is the largest?"];
var randomQuestionPicker = 0;
var question1choices = ["Angola", "Peru", "Iran", "Belgium"];
var question2choices = ["Albert Einstein", "Neil Armstrong", "Amelia Earhart", "Abraham Lincoln"];
var question3choices = ["No.", "Yes.", "--> YES. <--", "Of course it is."];
var question4choices = ["6", "7", "8", "9"];
var question5choices = ["Divide the value by 4.", "Multiply the value by itself.", "Multiply the value by 8.", "Divide the value by 8."];
var question6choices = ["Oxygen", "Carbon Dioxide", "Water", "All of the above."];
var question7choices = ["Unicorn", "Horse", "Donkey", "Mountain Lion"];
var question8choices = ["Labrador Retriever", "Pitbull", "Doberman", "English Mastiff"];
var oneWasPicked = false;
var twoWasPicked = false;
var threeWasPicked = false;
var fourWasPicked = false;
var score = 0;
var timeBasedScore = 0;



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
    if(randomQuestionPicker==0){
        $("#col-4-field1 button").text(question1choices[0])
        $("#col-4-field2 button").text(question1choices[1])
        $("#col-4-field3 button").text(question1choices[2])
        $("#col-4-field4 button").text(question1choices[3])
    }
    if(randomQuestionPicker==1){
        $("#col-4-field1 button").text(question2choices[0])
        $("#col-4-field2 button").text(question2choices[1])
        $("#col-4-field3 button").text(question2choices[2])
        $("#col-4-field4 button").text(question2choices[3])
    }
    if(randomQuestionPicker==2){
        $("#col-4-field1 button").text(question3choices[0])
        $("#col-4-field2 button").text(question3choices[1])
        $("#col-4-field3 button").text(question3choices[2])
        $("#col-4-field4 button").text(question3choices[3])
    }
    if(randomQuestionPicker==3){
        $("#col-4-field1 button").text(question4choices[0])
        $("#col-4-field2 button").text(question4choices[1])
        $("#col-4-field3 button").text(question4choices[2])
        $("#col-4-field4 button").text(question4choices[3])
    }
    if(randomQuestionPicker==4){
        $("#col-4-field1 button").text(question5choices[0])
        $("#col-4-field2 button").text(question5choices[1])
        $("#col-4-field3 button").text(question5choices[2])
        $("#col-4-field4 button").text(question5choices[3])
    }
    if(randomQuestionPicker==5){
        $("#col-4-field1 button").text(question6choices[0])
        $("#col-4-field2 button").text(question6choices[1])
        $("#col-4-field3 button").text(question6choices[2])
        $("#col-4-field4 button").text(question6choices[3])
    }
    if(randomQuestionPicker==6){
        $("#col-4-field1 button").text(question7choices[0])
        $("#col-4-field2 button").text(question7choices[1])
        $("#col-4-field3 button").text(question7choices[2])
        $("#col-4-field4 button").text(question7choices[3])
    }
    if(randomQuestionPicker==7){
        $("#col-4-field1 button").text(question8choices[0])
        $("#col-4-field2 button").text(question8choices[1])
        $("#col-4-field3 button").text(question8choices[2])
        $("#col-4-field4 button").text(question8choices[3])
    }
    
}

function countdown() {
    if(timeRemaining>0){
    setInterval('Decrement()', 1000);   
}
}

function Decrement(){
    timeRemaining--;
    timerValue.innerHTML = "Timer: " + timeRemaining;
}

//checks for correct answer, if correct, adds to score, but if subtracts 15 seconds if wrong
function answerChecker(){
    console.log("questionPicker is: " + randomQuestionPicker);
    
    if(randomQuestionPicker == 0){
        if(oneWasPicked == true){
            console.log("score added for question 1");
            score++;
        }else{
            timeRemaining-=15;
        }
    }

    if(randomQuestionPicker == 1){
        if(twoWasPicked == true){
            console.log("score added for question 1");
            score++;
        }else{
            timeRemaining-=15;
        }
    }

    if(randomQuestionPicker == 2){
        if(oneWasPicked == true){
            console.log("score added for question 1");
            score++;
        }else{
            timeRemaining-=15;
        }
    }

    if(randomQuestionPicker == 3){
        if(threeWasPicked == true){
            console.log("score added for question 1");
            score++;
        }else{
            timeRemaining-=15;
        }
    }

    if(randomQuestionPicker == 4){
        if(fourWasPicked == true){
            console.log("score added for question 1");
            score++;
        }else{
            timeRemaining-=15;
        }
    }

    if(randomQuestionPicker == 5){
        if(fourWasPicked == true){
            console.log("score added for question 1");
            score++;
        }else{
            timeRemaining-=15;
        }
    }

    if(randomQuestionPicker == 6){
        if(oneWasPicked == true){
            console.log("score added for question 1");
            score++;
        }else{
            timeRemaining-=15;
        }
    }

    if(randomQuestionPicker == 7){
        if(fourWasPicked == true){
            console.log("score added for question 1");
            score++;
        }else{
            timeRemaining-=15;
        }
    }

    console.log(score);
}

    
function winCondition(){
    if (score == 7){

    }
}

function lossCondition(){
    if (timeRemaining == 0){
        
    }
}


//timebasedscorefunction