// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = finalPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//between 8 and 128 characters
//can be written in an alert or written on the page itself

var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var options = ["Yes", "No"];
var random = (array) => {
  var randomIndex = Math.floor(Math.random() * array.length);
  var indexValue = array[randomIndex];
  return indexValue;
}
var genPass = function () {
  // Ask user for their choice
  var userChoice = window.confirm("Generate random password?");

  if (userChoice === false) {
    window.alert("Bummer..")
    return;
  }
  var passwordLength = window.prompt("How long would you like your password to be?");

  var confirmLowercase = window.confirm("Would you like to have lowercase letters?");

  var confirmUppercase = window.confirm("Would you like to have uppercase letters?");

  var confirmSpecial = window.confirm("Would you like to have special characters?");

  var confirmNumbers = window.confirm("Would you like to have numbers?");

  var userConfirm = {
    length: passwordLength,
    lowers: confirmLowercase,
    uppers: confirmUppercase,
    special: confirmSpecial,
    number: confirmNumbers
  }
  console.log(userConfirm);
  return userConfirm;
}

var finalPassword = function () {
  var userResponse = genPass();
  var potentialCharacters = [];
  var randomPassword = [];

  if (userResponse.lowers === true) {
    potentialCharacters = potentialCharacters.concat(lowerCase)
  }
  if (userResponse.uppers === true) {
    potentialCharacters = potentialCharacters.concat(upperCase)
  }
  if (userResponse.special === true) {
    potentialCharacters = potentialCharacters.concat(specialCharacters)
  }
  if (userResponse.number === true) {
    potentialCharacters = potentialCharacters.concat(numbers)
  }
  for (var i = 0; i < userResponse.length; i++) {
    var singleRandomCharacter = random(potentialCharacters)
    randomPassword.push(singleRandomCharacter)
  }
  console.log(randomPassword);
  return randomPassword.join("")
}