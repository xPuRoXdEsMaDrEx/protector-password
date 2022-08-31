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


var generateBtn = document.querySelector("#generate");


function generatePassword () {

  var lowercase = [ "a","b","c","d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "?", "<", ">", "=", "+", ".", ",", "/", "|"];
  var userSelect = [];
  var defaultSelect = [];

  var userLengthPass = window.prompt('Select a password length from 8 to 128 characters only!');
  console.log(userLengthPass)
  // value from window.prompt that was entered is used in the following statement
  if  (userLengthPass < 8 || userLengthPass > 128) {
    return 'That is a terrible choice';
  } else if (isNaN(userLengthPass)) {
    return window.alert('Please try again and make a valid choice from 8 to 128 characters only!🤬');
  } else {
    window.alert('Your password length will be ' + userLengthPass + ' character long.');
  } 
    
  var userAddLowercase = window.confirm('Would you like to have lowercase letters in your password?');
  console.log(userAddLowercase)
  // The value from window.confirm that is returned is used to validate the statement below
  
  
  // if (userAddLowercase === true) {
  //   return window.alert('You have choosen to use lowercase letters in your password.');
  // } else {
  //   window.alert('You have choosen NOT to use lowercase letters in your password.');
  // }
  
  var userAddUppercase = window.confirm('Would you like to have UPPERCASE letters used in your password?');
  console.log(userAddUppercase)
  
  if (userAddUppercase === true) {
    return window.alert('You have choosen to use UPPERCASE letters in your password');
  } else {
    window.alert('You have choosen NOT to use UPPERCASE letters in your password');
  }

  var userAddNumeric = window.confirm('Would you like to have numeric characters in your password?');
  console.log(userAddNumeric)
  
  if (userAddNumeric === true) {
    return window.alert('You have choosen to use numeric characters in your password');
  } else {
    window.alert('You have choosen NOT to use numberic characters in your password');
  }

  var userAddSpecial = window.confirm('Would you like to have special characters in your password?');
  console.log(userAddSpecial)
  
  if (userAddSpecial === true) {
    return window.alert('You have choosen to use special characters in your password');
  } else {
    window.alert('You have choosen NOT to use special characters in your password');
  }






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