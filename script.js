'use strict'
let min = Number(prompt('Введите от какого числа:'));
let max = Number(prompt('Введите до какого числа:'));
let n = Number(prompt('Введите кол-во значений:'));

for (let i = 0; i < n; i++) {

    let numRandom = min + (Math.random() * max - min);
    let numRandomRound = Math.round(numRandom);
    document.writeln(numRandomRound)

}
