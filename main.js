var answers = ["la fattezze", "l'arazzo", "lo scampo", "il lampo", "il tramonto"];
var answersNext = ["afflievolire", "raccapezzarsi", "togliere", "architettare", "gabbare"];
var answersNextTo = ["la dabbengaggine", "la cilecca", "il fiato", "l'anta", "il timulto"];
// var answersNextToNext = ["", "", "", "", ""];
// var answersNextToNextTo = ["", "", "", "", ""];
// var answersFive = ["", "", "", "", ""];
// var answers = ["", "", "", "", ""];

var button = document.querySelector('button');
button.disabled = true;

var tralivali = [{
        question: 'телосложение',
        answers: answers,
        correct: 0
    }, {
        question: 'гобелен',
        answers: answers,
        correct: 1
    }, {
        question: 'спасение',
        answers: answers,
        correct: 2
    }, {
        question: 'молния',
        answers: answers,
        correct: 3
    }, {
        question: 'закат',
        answers: answers,
        correct: 4
    //
    }, {
        question: 'ослаблять',
        answers: answersNext,
        correct: 0

    }, {
        question: 'разбираться',
        answers: answersNext,
        correct: 1
    }, {
        question: 'отнимать',
        answers: answersNext,
        correct: 2
    }, {
        question: 'проектировать',
        answers: answersNext,
        correct: 3
    }, {
        question: 'обманывать',
        answers: answersNext,
        correct: 4
    //
    }, {
        question: 'простодушие',
        answers: answersNextTo,
        correct: 0

    }, {
        question: 'насмешка',
        answers: answersNextTo,
        correct: 1
    }, {
        question: 'дыхание',
        answers: answersNextTo,
        correct: 2
    }, {
        question: 'створка шкафа',
        answers: answersNextTo,
        correct: 3
    }, {
        question: 'волнение',
        answers: answersNextTo,
        correct: 4
   //
//    }, {
//        question: '',
//        answers: answersNextToNextTo,
//        correct: 0

//    }, {
//        question: '',
//        answers: answersNextToNextTo,
//        correct: 1
//    }, {
//        question: '',
//        answers: answersNextToNextTo,
//        correct: 2
//    }, {
//        question: '',
//        answers: answersNextToNextTo,
//        correct: 3
//    }, {
//        question: '',
//        answers: answersNextToNextTo,
//        correct: 4
//    //
//    }, {
//        question: '',
//        answers: answersFive,
//        correct: 0

//    }, {
//        question: '',
//        answers: answersFive,
//        correct: 1
//    }, {
//        question: '',
//        answers: answersFive,
//        correct: 2
//    }, {
//        question: '',
//        answers: answersFive,
//        correct: 3
//    }, {
//        question: '',
//        answers: answersFive,
//        correct: 4
   }
];

var currentQuestionIndex = 0;
var expressionNumber = document.querySelector('.expression-number');
expressionNumber.innerText = `Слово: ${currentQuestionIndex + 1} из ${tralivali.length}`;


// var correctAnswer = 0;
// var result = {
//     correct: 0,
//     incorrect: 0
// }

var questionToShow;

function showQuestion() {
    var questionToShow = selectQuestion();
    button.disabled = true;
    addQuestionToSite(questionToShow);
}

//тасование фишера-йетса
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
        [array[i], array[j]] = [array[j], array[i]];
    };
    return array;
}

var tralivaliShuffled = shuffle(tralivali);

function selectQuestion() {
    return tralivaliShuffled[currentQuestionIndex];
}

var nextButton = document.querySelector('button.nextButton')



function nextQuestion(correct, index) {
    checkVisibility();
    document.querySelector('.question').innerHTML = tralivaliShuffled[currentQuestionIndex].question;

    if (correct == index) {
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
}

function addQuestionToSite(item) {
    document.querySelector('.question').innerHTML = item.question;
    item.answers.forEach(function (answer, index) {
        document.querySelector('.answers').insertAdjacentHTML("beforeend", "<button onClick='nextQuestion(" + item.correct + ", " + index + ")'>" + answer + "</button> &nbsp;")
    })
}

function checkVisibility() {
    document.querySelectorAll('.checking').forEach(function (item) {
        if (item.style.display == 'block') {
            item.style.display = 'none';
        }
    });
}

function nextButtonClickHandler() {
    if (currentQuestionIndex === tralivali.length - 1) {
        clearAnswersHTML();
        if (document.querySelector('.checking-correct').style.display == 'block') {
            document.querySelector('.checking-correct').style.display = 'none';
        }
        document.querySelector('.nextButton').style.display = 'none';

        document.querySelector('.question').innerHTML = `Поздравляем!!! Вы справились))). Хотите продолжить?<button style="color: black; background-color: #ffffff;  " onClick="location.reload()">Повторить</button>`;
    } else {
        clearAnswersHTML();
        currentQuestionIndex++;
        document.querySelector('.expression-number').innerText = `Номер слова: ${currentQuestionIndex + 1} из ${tralivali.length}`;
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
// //
//     }, {
//         question: '',
//         answers: answersNextToNextTo,
//         correct: 0

//     }, {
//         question: '',
//         answers: answersNextToNextTo,
//         correct: 1
//     }, {
//         question: '',
//         answers: answersNextToNextTo,
//         correct: 2
//     }, {
//         question: '',
//         answers: answersNextToNextTo,
//         correct: 3
//     }, {
//         question: '',
//         answers: answersNextToNextTo,
//         correct: 4
//     }