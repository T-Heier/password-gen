// These are all the characters to be used in arrays put into strings.
var specialSymbols = ("!#$%&'()*+,-./:;<=>?@^_`{|}~")
var characterString = ("abcdefghijklmnopqrstuvwxyz")
var upperChar = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
var numberString = ("1234567890")
// These are all the characters for potential passwords split into 3 main arrays.
var numberArray = numberString.split("")
var symbolArray = specialSymbols.split("")
var characterArray = characterString.split("")
var upperArray = upperChar.split("")
// Main array to pull all characters.
var passwordSet  = []
// characterArray.concat(numberArray).concat(symbolArray)
// function to convert an array to uppercase



// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




function generatePassword() {
  passwordSet = []
  var lengthPassword = prompt("Enter length of password");

  if (lengthPassword < 8 || lengthPassword > 128)  {

    return alert("Password must have more than 8 characters or less than 129 characters")
  }

  var passwordNumbers = confirm("Do you want to include numbers?")

  if (passwordNumbers == true) {
    passwordSet = passwordSet.concat(numberArray)
  }

  // if passwordNumbers = true, then add numbers to generated password
  var passwordUppercase = confirm("Do you want to include uppercase letters?")
  if (passwordUppercase == true) {
    passwordSet = passwordSet.concat(upperArray)
  }

  var passwordLowercase = confirm("Do you want to include lowercase letters?")
  if (passwordLowercase == true) {
    passwordSet = passwordSet.concat(characterArray)
  }

  var passwordSymbols = confirm("Do you want to include special characters?")
  if (passwordSymbols == true) {
    passwordSet = passwordSet.concat(symbolArray)
    console.log(passwordSet)
  }

  for (var i = 0; i < lengthPassword; i++) {
    
    var password = passwordSet[Math.floor(Math.random()*lengthPassword)];
    
  }
  return(password)
}