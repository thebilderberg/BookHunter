"use strict";



function enterUserText(buttonEnter, window, buttonKeyOne, buttonKeyTwo, buttonKeyThree) {
    let clickButtonFoot = document.querySelector(buttonEnter);
    clickButtonFoot.addEventListener('click', () => {
        let userText = document.querySelector(window);
        if (userText.value === 'Достоевский') {
            alert('Отлично, вы получаете ключ!');
            let buttonOneKey = document.querySelector(buttonKeyOne);
            buttonOneKey.addEventListener('click', () => {
                alert('Промокод на маленький хуй');
            });

            let buttonTwoKey = document.querySelector(buttonKeyTwo);
            buttonTwoKey.addEventListener('click', () => {
                alert('Промокод на огурец');
            });

            let buttonThreeKey = document.querySelector(buttonKeyThree);
            buttonThreeKey.addEventListener('click', () => {
                alert('Промокод на пельмень');
            });
        } else if (userText.value === ''){
            alert('Нужно что-то ввести, чел!');
        } else {
            alert('Нет! Тебе стоит подучить русскую литературу, малой!')
        }
        userText.value = '';
    });
}

enterUserText('.buttonFoot', '.inputWindow', '.buttonHeaderOne', '.buttonHeaderTwo', '.buttonHeaderThree');