let score = 0; //start off with zero score.
let scorebox = document.getElementById("score"); //scorebox is going to refer to ID "score"
let questionbox = document.getElementById("question"); //questionbox is going to refer to ID "question"
let answerform = document.getElementById("myForm"); //answerform is going to refer to ID "myForm"

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
        alert("Hey! You got it right :)");
        score++;
    } else {
        alert("Awww...wrong this time :(");
    }
    answerform["answer"].value = ""; //because the page isn't reloading (cf. 'return false in HTML'), this line removes the content for the next question.
    scorebox.textContent = score; //updates the span with ID "score" to current score.
    if(gametype == "addition") {
        additionQuiz();
    } else if(gametype == "subtraction") {
        subtractionQuiz();
    } else if(gametype == "multiplication") {
        multiplicationQuiz();
    }
    return false;
}

function additionQuiz() {
    let num1 = Math.floor(Math.random() * 50); //generating a random number using the Math attribute and multiplying it by 50. The random() function returns a float, so multiplying it by 50 gives you a  number between 1 and 50. The Math.floor function rounds down to the nearest whole number.
    let num2 = Math.floor(Math.random() * 50);
    questionbox.textContent = "What is: " + num1 + " + " + num2 + "?";
    answerform["rightAnswer"].value = (num1 + num2); //This is the validator for the input.
}

additionQuiz();

