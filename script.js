var specialSymbols = ("!#$%&'()*+,-./:;<=>?@[\]^_`{|}~")
var characterString = ("abcdefghijklmnopqrstuvwxyz")
var numberString = ("1234567890")

var numberArray = numberString.split("")
var symbolArray = specialSymbols.split("")
var characterArray = characterString.split("")

console.log(symbolArray)
console.log(numberArray)
console.log(characterArray)



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

  var lengthPassword = prompt("Enter length of password");

  if (lengthPassword < 8 || lengthPassword > 128)  {

    return alert("Password must have more than 8 characters or less than 129 characters")
  }

  var passwordNumbers = confirm("Do you want to include numbers?")
  // if passwordNumbers = true, then add numbers to generated password
  var passowrdUppercase = confirm("Do you want to include uppercase letters?")
  var passowrdLowercase = confirm("Do you want to include lowercase letters?")
  var passwordSymbols = confirm("Do you want to include special characters?")

  console.log(passwordNumbers);


  console.log(lengthPassword);




}