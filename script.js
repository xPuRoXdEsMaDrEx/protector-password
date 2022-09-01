// Assignment code here
// DO NOT put a RETURN after the ELSE statement in a function!!!!!!!!!!!!
console.info("This is a random password generator uses between 8 and 128 characters, which includes Symbols, Numbers, UPPERCASE and lowercase characters");
// console.log();
// console.dir();
// window.prompt(); returns input value from user if pressed ok otherwise null is cancel
// window.alert(); displays message only
// window.confirm(); boolean ok = true, cancel = false
// return ; the value to be returned if nothing is entered it is omitted and it returns undefined
// isNaN() method returns true if a value is Not-a-Number

// Problem 1: 
// WHEN the user DOES NOT make a valid section of numbers
// THEN send a prompt with message
// WHEN the user does not enter a number
// THEN send a promt with message
// WHEN the user DOES make a valid selection of numbers prompt an alert tell him the length they picked
// Problem 2:
// WHEN the user is prompted to pick if they want lowercase letters in their password
// THEN the user is alerted(prompt) that they will or will NOT have lowercase letters in their password; The array list is either added or not.
// Same for Uppercase, numeric, and special character
// Problem 3:
// 


function generatePassword () {

  var lowercase = [ "a","b","c","d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "?", "<", ">", "=", "+", ".", ",", "/", "|"];
  var userSelect = [];

  console.log(userSelect)
  console.log(defaultSelect)

  var userPassLength = window.prompt('Select a password length from 8 to 128 characters only!');
  // console.log(userPassLength)
  // value from window.prompt that was entered is used in the following statement
  if  (userPassLength < 8 || userPassLength > 128) {
    return
  } if (isNaN(userPassLength)) {
    return window.alert('Please try again and make a valid choice from 8 to 128 characters only!🤬');
  } else {}
    
  var userAddLowercase = window.confirm('Would you like to have lowercase letters in your password?');
  // console.log(userAddLowercase)

  if (userAddLowercase === true) {
    userSelect.push(lowercase)
  } 
  
  var userAddUppercase = window.confirm('Would you like to have UPPERCASE letters used in your password?');
  // console.log(userAddUppercase)
  
  if (userAddUppercase === true) {
    userSelect.push(uppercase)
  }

  var userAddNumeric = window.confirm('Would you like to have numeric characters in your password?');
  // console.log(userAddNumeric)
  
  if (userAddNumeric === true) {
    userSelect.push(numeric)
  }

  var userAddSpecial = window.confirm('Would you like to have special characters in your password?');
  // console.log(userAddSpecial)
  
  if (userAddSpecial === true) {
    userSelect.push(special)
  }
  
  var defaultSelect = window.alert('Your password will be displayed shortly below.');
  // console.log(defaultSelect)

  if (userAddLowercase === false && userAddUppercase === false && userAddNumeric === false && userAddSpecial === false) {
   userSelect.push(lowercase + uppercase + numeric + special)
  }

  var generatedPassByUser = ""

  for (var i = 0; i < userSelect.length; i++) {
    userSelect[i] = 
  }





}

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






// function maxOut (min, max) {
//   if (min > max) {
//     return min
//   } else {return y}
// }