// Assignment Code
// lowercase 0-26   uppercase 26-52     numbers 52-62     special characters 62-89
let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{};':<>,./?";
let numbers = "1234567890";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let SpecialCharacters = "!@#$%^&*()_+-=[]{};':<>,./?";

function password() {
  let characterLength = window.prompt("How many characters would you like?");
  characterLength = parseInt(characterLength, 10);
  console.log(characterLength);
  let password = "";

  while (characterLength < 8 || characterLength > 128) {
    characterLength = window.prompt("Pleasse chose between 8 and 128 characters");
  }

  let isLowerCase = confirm("Would you like to include Lowercase characters?");
  let isUpperCase = confirm("Would you like to include Uppercase characters?");
  let isNumeric = confirm("Would you like to include Numeric characters?");
  let isSpecial = confirm("Would you like to include Special Characters?");

  if (isLowerCase && isUpperCase == false && isNumeric == false && isSpecial == false) {
    for (let i = 0; i <= characterLength; i++) {
      var random = Math.floor(Math.random() * lowerCase.length);
      password += lowerCase.substring(random, random + 1);
      password = password.substring(0, characterLength);
      console.log(password);
    }
  }

  if (isNumeric && isUpperCase == false && isLowerCase == false && isSpecial == false) {
    for (let i = 0; i <= characterLength; i++) {
      var random = Math.floor(Math.random() * numbers.length);
      password += numbers.substring(random, random + 1);
      password = password.substring(0, characterLength);
      console.log(password);
    }
  }

  if (isLowerCase && isUpperCase && isNumeric && isSpecial) {
    for (let i = 0; i <= characterLength; i++) {
      var random = Math.floor(Math.random() * characters.length);
      password += characters.substring(random, random + 1);
      password = password.substring(0, characterLength);
      console.log(password);
    }
  }
}

password();
// let generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   let password = generatePassword();
//   let passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
