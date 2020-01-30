'use strict';

let number = 50;

let askNumber = function () {
    let userNumber = prompt("Угадай число от 1 до 100");

    if (userNumber === null){
        return;
    }

    let isNumber = function () {
        return !isNaN(parseFloat(userNumber)) && isFinite(userNumber);
    };

    let resultIsNumber = isNumber();

    let compareNumber = function () {
        if (userNumber < number) {
            alert("Загаданное число меньше");
            askNumber();
        } else {
            alert("Загаданное число больше");
            askNumber();
        }
    };

    if (resultIsNumber === true) {
        compareNumber();
    } else {
        alert("Введите число!");
        askNumber();
    }

};
askNumber();


