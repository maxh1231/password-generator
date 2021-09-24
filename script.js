// Assignment Code
// lowercase 0-26   uppercase 26-52     numbers 52-62     special characters 62-89
let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{};':<>,./?";
let numbers = "1234567890";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let specialCharacters = "!@#$%^&*()_+-=[]{};':<>,./?";

function generatePassword() {
  let characterLength = window.prompt("How many characters would you like?");
  characterLength = parseInt(characterLength, 10);
  console.log(characterLength);
  let randomPass = "";


  while (characterLength < 8 || characterLength > 128) {
    characterLength = window.prompt("Pleasse chose between 8 and 128 characters");
  }

  let isLowerCase = confirm("Would you like to include Lowercase characters?");
  let isUpperCase = confirm("Would you like to include Uppercase characters?");
  let isNumeric = confirm("Would you like to include Numeric characters?");
  let isSpecial = confirm("Would you like to include Special Characters?");


  // if ONLY lowercase characters are selected
  if (isLowerCase && isUpperCase == false && isNumeric == false && isSpecial == false) {
    for (let i = 0; i <= characterLength; i++) {
      var random = Math.floor(Math.random() * lowerCase.length);
      randomPass += lowerCase.substring(random, random + 1);
      randomPass = randomPass.substring(0, characterLength);

    }
  }

  // if ONLY Uppercase characters are selected
  if (isUpperCase && isLowerCase == false && isNumeric == false && isSpecial == false) {
    for (let i = 0; i <= characterLength; i++) {
      var random = Math.floor(Math.random() * upperCase.length);
      randomPass += upperCase.substring(random, random + 1);
      randomPass = randomPass.substring(0, characterLength);

    }
  }

  // if ONLY numbers are selected
  if (isNumeric && isUpperCase == false && isLowerCase == false && isSpecial == false) {
    for (let i = 0; i <= characterLength; i++) {
      var random = Math.floor(Math.random() * numbers.length);
      randomPass += numbers.substring(random, random + 1);
      randomPass = randomPass.substring(0, characterLength);

    }
  }

  // if ONLY Special Characters are selected
  if (isSpecial && isUpperCase == false && isLowerCase == false && isNumeric == false) {
    for (let i = 0; i <= characterLength; i++) {
      var random = Math.floor(Math.random() * specialCharacters.length);
      randomPass += specialCharacters.substring(random, random + 1);
      randomPass = randomPass.substring(0, characterLength);

    }
  }


  // if ALL options are selected
  if (isLowerCase && isUpperCase && isNumeric && isSpecial) {
    for (let i = 0; i <= characterLength; i++) {
      var random = Math.floor(Math.random() * characters.length);
      randomPass += characters.substring(random, random + 1);
      randomPass = randomPass.substring(0, characterLength);


    }
  }
  return randomPass;
  console.log(randomPass);
}


let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
