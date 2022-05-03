'use strict'
function randomNumber(min, max) {
    return Math.random() * (max - min) + min
}
document.getElementById("number").innerHTML = randomNumber(88, 920);
