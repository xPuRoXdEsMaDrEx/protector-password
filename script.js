// Assignment code here

console.info("This is a random password generator uses between 8 and 128 characters, which includes Symbols, Numbers, UPPERCASE and lowercase characters");
// console.log();
// console.dir();
// window.prompt(); returns input value from user if pressed ok otherwise null is cancel
// window.alert(); displays message only
// window.confirm(); boolean ok = true, cancel = false
// isNaN() method returns true if a value is Not-a-Number.

// Problem 1: 
// WHEN the user DOES NOT make a valid section of numbers
// THEN send a prompt with message
// WHEN the user does not enter a number
// THEN send a promt with message
// WHEN the user DOES make a valid selection of numbers prompt an alert tell him the length they picked
// Problem 2:
// WHEN the user is prompted to pick if they want lowercase letters in their password
// THEN the user is alerted(prompt) that they will NOT have lowercase letters in their password; The array list is not added.
// Same for Uppercase, numeric, and special character
// Problem 3:
// 


var generateBtn = document.querySelector("#generate");


function generatePassword () {

  var lowercase = [ "a","b","c","d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "?", "<", ">", "=", "+", ".", ",", "/", "|"];

  var userLengthPass = window.prompt('Select a password length from 8 to 128 characters only!');
  // console.log(userLengthPass)

  if  (userLengthPass < 8 || userLengthPass > 128) {
    return 'That is a terrible choice';
  } else if (isNaN(userLengthPass)) {
    return window.prompt('Please make a valid choice from 8 to 128 characters only!🤬');
  } else { window.alert('Your password length will be ' + userLengthPass + ' character long.')
  } 
    
  var userAddLowercase = window.confirm('Would you like to have lowercase letters in your password?');
  console.log(userAddLowercase)

  if (userAddLowercase === true)

  
}

// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// function maxOut (min, max) {
//   if (min > max) {
//     return min
//   } else {return y}
// }