let score = 0;
let scorebox = document.getElementById("score");
let questionbox = document.getElementById("question");
let answerform = document.getElementById("myForm");

function setAdditionGame() {
    answerform.setAttribute("data-gametype", "addition");
    additionQuiz();
}

function setSubtractionGame() {
    answerform.setAttribute("data-gametype", "subtraction");
    subtractionQuiz();
}

function setMultiplicationGame() {
    answerform.setAttribute("data-gametype", "multiplication");
    multiplicationQuiz();
}

function checkAnswer() {
    let gametype = answerform.getAttribute("data-gametype");
    if (answerform["answer"].value == answerform["rightAnswer"].value) {
        // alert("Hey! You got it right :)");
        document.getElementById("status").innerHTML="<i class='fas fa-check'></i><p>Clever you, try another.</p>";
        score++;
    } else {
        // alert("Awww...wrong this time :(");
        document.getElementById("status").innerHTML="<i class='fas fa-times'></i><p>Wrong this time, try another.</p>";
    }
    answerform["answer"].value = "";
    scorebox.textContent = score;
    if(gametype == "addition") {
        additionQuiz();
    } else if(gametype == "subtraction") {
        subtractionQuiz();
    } else if(gametype == "multiplication") {
        multiplicationQuiz();
    }
    return false;
}

function gameStart() {
    document.getElementById("section1").style.display="block";
    document.getElementById("section2").style.display="none";
}

function gameDisplay() {
    document.getElementById("section2").style.display="block";
    document.getElementById("section1").style.display="none";
}

function additionQuiz() {
    gameDisplay();
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    questionbox.textContent = "What is: " + num1 + " + " + num2 + "?";
    answerform["rightAnswer"].value = (num1 + num2);
}

function subtractionQuiz() {
    gameDisplay();
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    if (num1 > num2) {
        questionbox.textContent = "What is: " + num1 + " - " + num2 + "?";
        answerform["rightAnswer"].value = (num1 - num2);
    }
    else{
        questionbox.textContent = "What is: " + num2 + " - " + num1 + "?";
        answerform["rightAnswer"].value = (num2 - num1);
    }
}

function multiplicationQuiz() {
    gameDisplay();
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    questionbox.textContent = "What is: " + num1 + " * " + num2 + "?";
    answerform["rightAnswer"].value = (num1 * num2);
}

gameStart();