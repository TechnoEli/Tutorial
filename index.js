//These console logs are used to ensure that connection with our html is connected by displaying a message in the console
console.log("this is connected");
console.log("this is a repeat test");
//Here, we grab the elements by the id's we assigned in the html file and then input an output through appending textContent
document.getElementById("Hello").textContent = "Hello World";
document.getElementById("para1").textContent = "This is the start of my website"; 

//Here, we are declaring a variable that will later be occupied with the information typed into our input.
let visitorName;

/*Using a button, we grab our button element by its id. Then, we run an onClick event and have a function block run each
    time the button is clicked. Here, we have a console log first to determine that our variable is undefined.
    Then, we grab our variable and assign it the element of input by grabbing inputs id from our HTML.
    Finally, we use the .value property to give the variable the inputed information and run a final console log to confirm
    */
document.getElementById("nameButton").onclick = function(){
    console.log(visitorName)
    visitorName = document.getElementById("nameInput").value
    console.log(visitorName)
};
