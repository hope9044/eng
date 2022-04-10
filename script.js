let words = [{ //объявление переменной со словами
        word: 'overload',
        trans: 'перезагрузка'
    },
    {
        word: 'query',
        trans: 'запрос'
    },
    {
        word: 'storage',
        trans: 'хранение'
    },
    {
        word: 'to update',
        trans: 'обновить'
    },
    {
        word: 'user',
        trans: 'пользователь'
    },
    {
        word: 'games',
        trans: 'игры'
    },
    {
        word: 'notes',
        trans: 'заметки'
    },
    {
        word: 'memory',
        trans: 'память'
    },
    {
        word: 'available',
        trans: 'доступный'
    },
    {
        word: 'to count',
        trans: 'считать'
    },
    {
        word: 'to crack',
        trans: 'взломать'
    },
    {
        word: 'defense',
        trans: 'защита'
    },
    {
        word: 'to design',
        trans: 'разрабатывать'
    },
    {
        word: 'drive',
        trans: 'диск'
    },
    {
        word: 'floppy disk',
        trans: 'дискета'
    },

]

function speak(text) { //функция для озвучки слов
    const message = new SpeechSynthesisUtterance(); //объявление экземпляра объекта
    message.lang = "en-EN";
    message.text = text; //говорим, что озввучивать
    window.speechSynthesis.speak(message); //обращение к глобальному объекту браузера
}

function write() {
    $('.cards_container').empty() //затираем все карточки через метод jQuery
    var synth = window.speechSynthesis;
    var voices = synth.getVoices();
    for (let item = 0; item < words.length; item++) { //прохоимся по всем словам циклом
        console.log(words[item]) //с помощью функции jQ мы вставляем разметку в страницу
        $('.cards_container').append(` 
            <div class="cards_item">
                <div class="card_word">${words[item].word}</div>
                <div class="card_translate">${words[item].trans}</div>
                <button class="show btn">Show</button>
                <button class="sound btn">Speach</button>
            </div>
        `)
    }
    $('.cards_item').on('click', function(event) { //назначаем на клик функцию, которая будет показывать перевод по клику на кнопку
        if (event.target.classList.contains('show')) {
            jQuery(this).find('.card_translate').addClass('show');
        }
        if (event.target.classList.contains('sound')) {
            let txt = jQuery(this).find('.card_word').text()
            speak(txt);
        }

    });
    localStorage.setItem('words', JSON.stringify(words)) //запись в локальное хранилище
}

$(function() {
    if (localStorage.getItem('words')) {
        words = JSON.parse(localStorage.getItem('words')) //если в локальном хранилище есть слова, получаем их оттуда
    }
    write(); //вызов функции отрисовки
    $('#addW').on('click', function(event) { //при клике на кнопку добавить добавляем слова в массив слов
        words.unshift({
            word: $('#inputs_word').val(), //получаем значение с инпута в котором пишем само слово
            trans: $('#inputs_trans').val(), //значение с инпута в котором перевод
        }) //в начало массива добавляем слово
        write() //вызов функции отрисовки
    })

});