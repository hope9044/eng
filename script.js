let words =[
    {
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
function write(){
    $('.cards_container').empty()

    for (let item = 0; item<words.length; item++){
        console.log(words[item])
        $('.cards_container').append(`
            <div class="cards_item">
                <div class="card_word">${words[item].word}</div>
                <div class="card_translate">${words[item].trans}</div>
                <button class="btn">Show</button>
            </div>
        `)
    }
    $('.cards_item').on('click', function(event){
        console.log(event.target.classList)
        if(event.target.classList.contains('btn')){
            console.log('yea')
            jQuery(this).find('.card_translate').addClass('show');
        }
        
    });
    localStorage.setItem('words', JSON.stringify(words))
}

$(function() {
    if (localStorage.getItem('words')){
        words = JSON.parse(localStorage.getItem('words'))
    }
    write();
    $('#addW').on('click', function(event){
        words.push({
            word: $('#inputs_word').val(),
            trans: $('#inputs_trans').val(),
        })
        write()
        console.log(words)
    })
    
});