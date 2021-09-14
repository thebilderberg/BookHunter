"use strict";



function enterUserText(buttonEnter, window, buttonKey) {
    let clickButtonFoot = document.querySelector(buttonEnter);
    clickButtonFoot.addEventListener('click', () => {
        let userText = document.querySelector(window);
        if (userText.value === 'Достоевский') {
            alert('Отлично, вы получаете ключ!');
            let buttonOneKey = document.querySelector(buttonKey);
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

enterUserText('.buttonFoot', '.inputWindow', '.buttonHeaderOne');