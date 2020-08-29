let tralivali;
let data;

const courses = document.querySelectorAll('#exampleFormControlSelect1 option');

if (localStorage.getItem("data") != null) {
    data = JSON.parse(localStorage.getItem('data'));
        
} else {
    data = [{
            id: 0,
            question: 'телосложение',
            answer: 'la fatezza',

        }, {
            id: 2,
            question: 'гобелен',
            answer: 'l arazzo'
        }, {
            id: 3,
            question: 'спасение',
            answer: 'lo scampo'

        }, {
            id: 4,
            question: 'молния',
            answers: 'il timulto'
        }];
    localStorage.setItem('data', JSON.stringify(data));
}

// localStorage.setItem('data', JSON.stringify(data));

document.querySelector('#bid-form').addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.querySelector('#question').value;
    let answer = document.querySelector('#answer').value;
//    debugger
    let ID; 
    if (data.length > 0) {
        //если есть, то находим индекс последнего эл-та в массиве
        var lastIndex = data.length - 1;
        //получаем по этому индексу сам элемент, берем его id и увеличиваем на единицу, чтобы получить ID
        //для нового элемента (последний элемент в массиве будет иметь последний ID)
        ID = data[lastIndex].id + 1;
    } else {
        ID = 0;
    }
    let userData = {
        "id": ID,
        "question": name,
        "answer": answer
    }

    data.push(userData);
    localStorage.setItem('data', JSON.stringify(data));

    clearFields();
})

function clearFields() {
    document.querySelector('#question').value = "";
    document.querySelector('#question').focus();
    document.querySelector('#answer').value = "";
}



