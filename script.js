// Assignment code here
// Final generated password
function generatePassword () {

  // Possible characters list to be selected at random
  var lowercase = [ "a","b","c","d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "?", "<", ">", "=", "+", ".", ",", "/", "|"];
  var userSelect = [];

  // User input selection
  var userPassLength = window.prompt('Select a password length from 8 to 128 characters only!');
  console.log(userPassLength)
  if  (userPassLength < 8 || userPassLength > 128) {
    return 'Would you like to try again? Press the button below.'
  } if (isNaN(userPassLength)) {
    return 'Please try again and make a valid choice from 8 to 128 characters only!🤬';
  }

  // User character choice
  var userAddLowercase = window.confirm('Would you like to have lowercase letters in your password?');
  if (userAddLowercase === true) {
    userSelect.push(lowercase)
  } 
  
  var userAddUppercase = window.confirm('Would you like to have UPPERCASE letters used in your password?');
  if (userAddUppercase === true) {
    userSelect.push(uppercase)
  }

  var userAddNumeric = window.confirm('Would you like to have numeric characters in your password?');
  if (userAddNumeric === true) {
    userSelect.push(numeric)
  }

  var userAddSpecial = window.confirm('Would you like to have special characters in your password?');
  if (userAddSpecial === true) {
    userSelect.push(special)
  }
  
  // User default selection if no characters are choosen
  var defaultSelect = window.alert('Your password will be displayed shortly below.');
  if (userAddLowercase === false && userAddUppercase === false && userAddNumeric === false && userAddSpecial === false) {
   userSelect.push(lowercase) + userSelect.push(uppercase) + userSelect.push(numeric) + userSelect.push(special)
  }

  // Random character selector from random array list
  var Password = ""

  for (var i = 0; i < userPassLength; i++) {
    var randomList = usersRanCho(userSelect)
    var randomCharacter = usersRanCho(randomList)
    Password += randomCharacter
  }

  return Password
}

// Random number generator to apply to array list index
function indexNumGen(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var integer = Math.random()
  return Math.floor(max * integer + min*(integer - 1))
}

function usersRanCho(index) {
  return index[indexNumGen(index.length)]
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