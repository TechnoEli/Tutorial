const text = document.getElementById("text")
let submissionAge = document.getElementById("age")
const btnSubmit = document.getElementById("enter")
const familiar = document.getElementById("boolean")
let age;




btnSubmit.onclick = function(){
    age = submissionAge.value
    age = Number(age)
    console.log(age)
    if(age > 18){
       
        text.textContent = "Hey. Welcome!"
    }
     else {
        text.textContent = "Please leave."
    } 
}