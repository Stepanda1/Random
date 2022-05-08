'use strict'
let min = 0;
let max = 0;
let n = 0;
min = Number(prompt('Введите от какого числа:'));
max = Number(prompt('Введите до какого числа:'));
n = Number(prompt('Введите кол-во значений:'));

for (let i = 0; i < n; i) {

    let numRandom = min + (Math.random() * max - min);
    let numRandomRound = Math.round(numRandom);
    document.writeln(numRandomRound)

}
