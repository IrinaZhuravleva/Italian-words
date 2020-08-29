var button = document.querySelector('button');
var nextButton = document.querySelector('button.nextButton');
var expressionNumber = document.querySelector('.expression-number');

button.disabled = true;

var currentQuestionIndex = 0;

expressionNumber.innerText = `Слово: ${currentQuestionIndex + 1} из ${data.length}`;

function showQuestion() {
    var questionToShow = selectQuestion();
    button.disabled = true;

    //функция добавления вопроса на сайт, принимающая слово для показа
    addQuestionToSite(questionToShow);
}





//проверка, если индекс вопроса == индекс ответа

let tralivaliShuffled = shuffle(data);

let questions = tralivaliShuffled.map(function (item, i) {
    return tralivaliShuffled[i].question;
});
let answers = tralivaliShuffled.map(function (item, i) {
    return tralivaliShuffled[i].answer;
});

console.log(questions, answers);

function selectQuestion() {
    return tralivaliShuffled[currentQuestionIndex];
}


let correct;

function addQuestionToSite(item) {
    document.querySelector('.question').innerHTML = item.question;
    // document.querySelector('.answers').innerHTML = item.answer;
    correct = item.answer;
    let shuffledAnswers = shuffle(answers);
    console.log('shuffledAnswers: ', shuffledAnswers);

    let readyAnswers = shuffledAnswers.length > 5 ? shuffledAnswers.slice(1, 5) : shuffledAnswers;
  
    if (!readyAnswers.includes(item.answer)) {
        readyAnswers.push(item.answer);
        readyAnswers.splice(0, 1);
        readyAnswers = shuffle(readyAnswers);
    }
    
    readyAnswers.forEach(function (answer, index) {
        document.querySelector('.answers').insertAdjacentHTML("beforeend", "<button>" + answer + "</button> &nbsp;")
    })
}

// let flag = false;

document.querySelector('.answers').addEventListener('click', (e) => {
     let target = e.target;
    // console.log('e.target: ', target.value);
    console.log('e.target: ', target.innerText);
    // if (correct == target.innerText) {
    //     console.log('ok');
    //     flag = true;
    // }

    if (correct == target.innerText) {
        document.querySelector('.checking-correct').style.display = 'block';
        if (nextButton.disabled) {
            nextButton.disabled = false;
        }

    } else {
        document.querySelector('.checking-incorrect').style.display = 'block';
        if (!nextButton.disabled) {
            nextButton.disabled = true;
        }
    }
})

// function nextQuestion(correct, index) {
function nextQuestion() {
    checkVisibility();
    document.querySelector('.question').innerHTML = tralivaliShuffled[currentQuestionIndex].question;

    // if (flag) {
    //     document.querySelector('.checking-correct').style.display = 'block';
    //     if (nextButton.disabled) {
    //         nextButton.disabled = false;
    //     }

    // } else {
    //     document.querySelector('.checking-incorrect').style.display = 'block';
    //     if (!nextButton.disabled) {
    //         nextButton.disabled = true;
    //     }
    // }
}
tralivaliShuffled
function nextButtonClickHandler() {
    if (currentQuestionIndex === tralivaliShuffled.length - 1) {
        clearAnswersHTML();
        if (document.querySelector('.checking-correct').style.display == 'block') {
            document.querySelector('.checking-correct').style.display = 'none';
        }
        document.querySelector('.nextButton').style.display = 'none';

        document.querySelector('.question').innerHTML = `Поздравляем!!! Вы справились))). Хотите продолжить?<button style="color: black; background-color: #ffffff;  " onClick="location.reload()">Повторить</button>`;
        
    } else {
        clearAnswersHTML();
        currentQuestionIndex++;
     
        document.querySelector('.expression-number').innerText = `Номер слова: ${currentQuestionIndex + 1} из ${tralivaliShuffled.length}`;
        checkVisibility()
        showQuestion();
    }
}

function clearAnswersHTML() {
    document.querySelector('.answers').innerHTML = "";
}

nextButton.addEventListener('click', function () {
    nextButtonClickHandler();
})

showQuestion();



//вспомогат функции
//тасование фишера-йетса
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
        [array[i], array[j]] = [array[j], array[i]];
    };
    return array;
}

function checkVisibility() {
    document.querySelectorAll('.checking').forEach(function (item) {
        if (item.style.display == 'block') {
            item.style.display = 'none';
        }
    });
}

//случайное число от 0 до tralivaliShuffled.length - это индекс вопроса/ответа
function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}