var a, b, c;
var targetNumber;
var correctAnswer = "trump";

function init() {
    a = document.querySelector('#a');
    b = document.querySelector('#b');
    c = document.querySelector('#c');
    targetNumber = Math.round(Math.random() * 1000);
    console.log(targetNumber);
}

function deltaRoot() {
    var delta = Math.pow((b.value), 2) - 4 * (a.value) * (c.value);
    var root;
    if (delta >= 0) root = Math.sqrt(delta);
    document.getElementById('delta').innerHTML = root;
}

function checkNumber() {
    var guess = document.querySelector('#inputNumber').value;
    var guessResult = document.querySelector('#guessResult');
    if (guess === targetNumber) {
        guessResult.innerHTML = "Correct!";
    } else if (guess > targetNumber) {
        guessResult.innerHTML = "Too big!";
    } else if (guess < targetNumber) {
        guessResult.innerHTML = "Too small!";
    }
}

function checkAnswer() {
    var answers = document.getElementsByName('quiz1');
    var quizResult = document.querySelector('#quizResult');
    var flag = false;
    var arrayLength = answers.length;
    var i;
    for (i = 0; i < arrayLength; i++) {
        if (answers[i].checked) {
            if (answers[i].value == correctAnswer) flag = true;
            break;
        }
    }
    if(flag == true) quizResult.innerHTML = 'Correct!';
    else quizResult.innerHTML = 'Wrong!';
}