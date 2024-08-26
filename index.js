const checkBox = document.getElementById("paymentType")
const visa = document.getElementById("visa")
const masterCard = document.getElementById("masterCard")
const cash = document.getElementById("cash")

const payBtn = document.getElementById("submit")
const displayChoice = document.getElementById("paymentChoice")
const finalize = document.getElementById("endResult")

payBtn.onclick = function(){
    if(checkBox.checked){
        displayChoice.textContent = "Great!"
    } else{
        displayChoice.textContent = "Please choose cash or card."
    }
    if(visa.checked){
        finalize.textContent = "Great. We cover Visa!"
    } else if(masterCard.checked){
        finalize.textContent = "Awesome! We cover MasterCard!"
    } else if(cash.checked) {
        finalize.textContent = "Sure, we accept Cash as well!"
    } else{
        finalize.textContent = "Please choose from one of the above payment choices."
    }
}