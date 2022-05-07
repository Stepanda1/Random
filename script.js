// сделать зачёт min и max
// сделать ввод min
// сделать ввод max
// сделать цикл
// cделать ввод кол-ва повторений
// сделать работающий html
// поработать с css 
'use strict'
let min = Number(prompt('Введите от какого числа:'));
let max = Number(prompt('Введите до какого числа:'));
let n = Number(prompt('Введите кол-во значений:'));

for (let i = 0; i <= n; i++) {

    let numRandom = min + (Math.random() * max - min);
    let numRandomRound = Math.round(numRandom);
    document.writeln(numRandomRound)

}

// (function () {

//     let a = '';

//     function b(d) {

//         let c = true;

//         if (d > 1) {
//             for (let i = 1; i < d; i++) {
//                 if (d % i == 0 && i != 1) {
//                     c = false;
//                 }
//             }
//         }
//         return c;
//     }

//     function mnog(p) {
//         let k = 2;

//         while (p != 1) {

//             if (p % k == 0 && b(k)) {

//                 a += k + ', ';

//                 p /= k;
//             } else {
//                 k++;
//             }
//         }
//     }

//     mnog = Number(prompt('Введите число для разложения:'));
//     document.write(a);
// })();