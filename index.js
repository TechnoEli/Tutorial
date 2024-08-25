const roll = document.getElementById("randomButton")
const displayRoll = document.getElementById("numberDisplay")

let min = 1;
let max = 10;
let randomNum;
console.log("am I connected")
roll.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min
    displayRoll.textContent = randomNum
    console.log(randomNum)
}