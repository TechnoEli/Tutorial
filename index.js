
//First String Method: .charAt() method
//.charAt() can be used to find a specific character at a specific index. Remember: index starts from 0.
let stringTest = document.getElementById("testing")

myName = "Elijah Prosperie";
stringTest.textContent = myName

//This output would be j. E would be 0, l is 1, i is 2, and j is 3. 
console.log(myName.charAt(3))

//Second String Method:  .indexOf()
//.indexOf() returns the index of the first occurence of a character. 

/*This output in our console would be 2. Note that it only returns the first index a character is discovered. So the second in 
my last name isn't shown.
*/
console.log(myName.indexOf("i"));

//The third string method:  .lastIndexOf()
//This method is the exact same as indexOf, however it looks for the LAST index the character is called. So here, "i" would be 14

console.log(myName.lastIndexOf("i"))

//Fourth String method*: .length.
//.length is not an official method, however it operates similarly. .length is simple in that all it does is tell you how many indexes your string has.

//This would give us a string length of 16 indexes.
console.log(myName.length)

//Next String Method:  .trim()
//.trim() eliminates any white space in a string.

//because I don't have any white space, it will do nothing. However, if you add it before or after, it will trim it away.
console.log(myName.trim());

//Next String Method:  .toUpperCase()
//This method simply turns your entire string to uppercase.

console.log(myName.toUpperCase())

//Next String method: .toLowerCase()
//This one does the exact opposite of .toUpperCase() and just makes the string lowercase

//next string method:  .repeat()
//this method will repeat the appended string however many times told.

//this will repeat the string five times.
console.log(myName.repeat(5))

//Next string method: .startsWith()
//this method acts as a boolean to determine if a string starts with whatever is passed through the parameters.

//this would return a true statement as the string starts with E. If I changed it to an I, it would be false.
console.log(myName.startsWith("E"));

//Next String method:  .endsWith()
//This method is the same as .startsWith(). A boolean that searches for the parameters given and gives a true or false answer.

//next String Method:  .includes()
//similar to .startsWith() and .endsWith(), .includes() is a boolean that checks if your string contains the given parameters anywhere.

//next stirng method: .replaceAll()
//This method has two parameters. The first is the part of the string you are replacing, and the second is what it will be replaced with.

//Note that all LOWER CASE e's are replaced with a p in the string. However, the first E in Elijah remains. This is because E and e are different characters entirely.
console.log(myName.replaceAll("e", "p"))

//next string method:  .padStart()
/*This is another two parameter method. The first input is a number that you tell it how long you want the next length of your string to be. The second
is the character you want to be added to the start of the string. This character will be added until the designated string has reached the padding length */

//Here I tell it to add "0" to pad my string up to an index of 20. So, since our original string is already 16 indexes, it adds 4 0's at the start to increase it.
console.log(myName.padStart(20, "0"))

//Next String Method: .padEnd()
//Similar to the above method. .padEnd() does the same as .padStart(), however it adds the padding to the end of the string instead.

 //Now, we can get into String Slicing.
 //string slicing, .slice() is a two parameter method that creates a substring from a portion of another string.

 /* this is a basic use of string slicing. on line 84, I am telling it to look at index 0 of myName and include everything between index 0 and index 6. I am then
 doing the same on line 86 with the last name. The issue is these are static and if we were to change our initial string, we would not get the same results.
 To change this, we can use other string methods to make the search dynamic.
 */
//  let firstName = myName.slice(0, 6)
//  let lastName = myName.slice(7, 17)
//  console.log(firstName)
//  console.log(lastName)


/*these lines of code do the same as the ones above. However instead of giving static start and stopping points, it searches for the index of desired outcomes. 
In this case, that is an empty space between Elijah and Prosperie. The +1 in the lastName is to erase the whitespace and pick up after the initial indexOf() method.
*/
 let firstName = myName.slice(0, myName.indexOf(" "))
 let lastName = myName.slice(myName.indexOf(" ")+ 1)
 console.log(firstName)
 console.log(lastName)