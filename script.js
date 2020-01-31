'use strict';

let playGame = function () {
    let number;
    let minNumber = 1;
    let maxNumber = 100;

    function randomInteger() {

        let rand = minNumber + Math.random() * (maxNumber - minNumber);
        number =  Math.floor(rand);
        console.log(number);
    }
    randomInteger();

    let askNumber = function() {

        let userNumber = prompt(`Угадай число от ` + minNumber + ` до ` + maxNumber);

        if (userNumber === null) {
            return alert("Игра завершена");
        }


        let isNumber = function () {
            return !isNaN(parseFloat(userNumber)) && isFinite(userNumber);
        };

        let resultIsNumber = isNumber();

        let compareNumber = function () {
            if (number == userNumber) {
                alert("Вы угадали!!!");
            } else if (userNumber < number) {
                alert("Загаданное число больше");
                askNumber();
            } else {
                alert("Загаданное число меньше");
                askNumber();
            }
        };

        if (resultIsNumber === true) {
            compareNumber();
        } else {
            alert('Введите число в диапазоне от ' + minNumber + ' до ' + maxNumber + ' !');
            askNumber();
        }
    }
    askNumber()
};
playGame();


