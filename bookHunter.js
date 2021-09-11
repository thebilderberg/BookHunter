"use strict";



function enterUserText() {
    let clickButtonFoot = document.querySelector('.buttonFoot');
    clickButtonFoot.addEventListener('click', () => {
        let userText = document.querySelector('.inputWindow');
        if (userText.value === 'Достоевский') {
            alert('Отлично, вы получаете ключ!');
            let buttonOneKey = document.querySelector('.buttonHeaderOne');
            buttonOneKey.addEventListener('click', () => {
                alert('Промокод на маленький хуй');
            });
        } else if (userText.value === ''){
            alert('Нужно что-то ввести, чел!');
        } else {
            alert('Нет! Тебе стоит подучить русскую литературу, малой!')
        }
        userText.value = '';
    });
}

enterUserText();