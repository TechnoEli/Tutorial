const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const displayNumbers = document.getElementById("numbers");

let numb = 0;


increaseBtn.onclick = function(){
    numb++;
    console.log(numb)
    displayNumbers.textContent = numb;
}
decreaseBtn.onclick = function(){
    numb--;
    console.log(numb)
    displayNumbers.textContent = numb;
}
resetBtn.onclick = function(){
    numb = 0;
    console.log(numb)
    displayNumbers.textContent = numb;
}