// Assignment Code
let lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
let upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numericCharacters = "0123456789";
let specialCharacters = "!@#$%^&*()`~{}[]:;<>,.?/|_-+=";

function passwordOptions() {
  let characterLength = window.prompt("Please select a length of characters");

  if (characterLength < 8 || characterLength > 128) {
    confirm("Please select a character lenght between 8-128")
    passwordOptions();

  }

  let isUpperCase = confirm("Would you like to include uppercase characters?");
  if (isUpperCase) {
    var isUpperCaseStr = upperCaseCharacters[Math.floor(Math.random() * upperCaseCharacters.length)];

  }

  let isLowerCase = confirm("Would you like to include lowercase characters?");
  if (isLowerCase) {
    var isLowerCaseStr = lowerCaseCharacters[Math.floor(Math.random() * lowerCaseCharacters.length)];
  }

  let isNumeric = confirm("Would you like to include numbers?");
  if (isNumeric) {
    var isNumericStr = numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
  }

  let isSpecial = confirm("Would you like to include special characters?");
  if (isSpecial) {
    var isSpecialStr = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
  }

  console.log(characterLength);
  console.log(isUpperCaseStr);
  console.log(isLowerCaseStr);
  console.log(isNumericStr);
  console.log(isSpecialStr);

}

passwordOptions();

// let generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   let password = generatePassword();
//   let passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
