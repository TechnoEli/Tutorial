const actionMovie = document.getElementById("action")
const horrorMovie = document.getElementById("horror")
const dramaMovie = document.getElementById("drama")
const comedyMovie = document.getElementById("comedy")

const results = document.getElementById("result")

// switch(true){
//     case actionMovie.checked: 
//         results.textContent = "Action Movies are pretty cool!" 
//         break;
    
// }

actionMovie.onclick = function(){
    switch(true){
        case actionMovie.checked:
            results.textContent = "Action Movies are pretty cool!"
            break
    }
}

horrorMovie.onclick = function(){
    switch(true){
        case horrorMovie.checked:
            results.textContent = "Oooh, scary movies?"
            break;
    }
}

dramaMovie.onclick = function(){
    switch(true){
        case dramaMovie.checked:
            results.textContent = "Who doesn't enjoy a good drama?"
            break;
    }
}

comedyMovie.onclick = function(){
    switch(true){
        case comedyMovie.checked:
            results.textContent = "Heavily underrated movies!"
            break;
    }
}