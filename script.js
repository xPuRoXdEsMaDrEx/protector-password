// Assignment code here

// console.log("I am linked")

// window.prompt("Enter a word")
// window.alert()
// window.confirm ()

var lowercase = [ "a","b","c","d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "?", "<", ">", "=", "+", ".", ",", "/", "|"];


howManyCharacters = prompt("How many characters would you like in you password? Choose between 8 and 128 characters."); 
if (howManyCharacters < 8 || howManyCharacters > 128) {
    prompt("You have NOT selected the appropriate amount of characters to be in your password, please choose between 8 and 128 characters.")
} else if (howManyCharacters); {
    alert("You have selected " + howManyCharacters + "characters to be in your password.")
} 
    
console.log(howManyCharacters)


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


