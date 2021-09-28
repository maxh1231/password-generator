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




  while (characterLength < 8 || characterLength > 128 || isNaN(characterLength)) {
    characterLength = window.prompt("Please chose between 8 and 128 characters");
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

  // if ONLY lowercase & Uppercase is selected
  if (isLowerCase && isUpperCase && isNumeric == false && isSpecial == false) {
    var isLowerAndUpper = lowerCase + upperCase;
    for (let i = 0; i <= characterLength; i++) {
      var random = Math.floor(Math.random() * isLowerAndUpper.length);
      randomPass += isLowerAndUpper.substring(random, random + 1);
      randomPass = randomPass.substring(0, characterLength);
    }
  }

  // if ONLY Lowercase & Numeric is selected
  if (isLowerCase && isUpperCase == false && isNumeric && isSpecial == false) {
    var isLowerAndNumeric = lowerCase + numbers;
    for (let i = 0; i <= characterLength; i++) {
      var random = Math.floor(Math.random() * isLowerAndNumeric.length);
      randomPass += isLowerAndNumeric.substring(random, random + 1);
      randomPass = randomPass.substring(0, characterLength);
    }
  }

  // if ONLY Lowercase & Special is selected
  if (isLowerCase && isUpperCase == false && isNumeric == false && isSpecial) {
    var isLowerAndSpecial = lowerCase + specialCharacters;
    for (let i = 0; i <= characterLength; i++) {
      var random = Math.floor(Math.random() * isLowerAndSpecial.length);
      randomPass += isLowerAndSpecial.substring(random, random + 1);
      randomPass = randomPass.substring(0, characterLength);
    }
  }

  // if ONLY Lowercase & Uppercase & Numeric is selected
  if (isLowerCase && isUpperCase && isNumeric && isSpecial == false) {
    var IsLowerAndUpperAndNumeric = lowerCase + upperCase + numbers;
    for (let i = 0; i <= characterLength; i++) {
      var random = Math.floor(Math.random() * IsLowerAndUpperAndNumeric.length);
      randomPass += IsLowerAndUpperAndNumeric.substring(random, random + 1);
      randomPass = randomPass.substring(0, characterLength);
    }
  }

  // if ONLY Lowercase & Uppercase & Special is selected
  if (isLowerCase && isUpperCase && isNumeric == false && isSpecial) {
    var IsLowerAndUpperAndSpecial = lowerCase + upperCase + specialCharacters;
    for (let i = 0; i <= characterLength; i++) {
      var random = Math.floor(Math.random() * IsLowerAndUpperAndSpecial.length);
      randomPass += IsLowerAndUpperAndSpecial.substring(random, random + 1);
      randomPass = randomPass.substring(0, characterLength);
    }
  }

  // if ONLY Lowercase & Numbers & Special is selected
  if (isLowerCase && isUpperCase == false && isNumeric && isSpecial) {
    var IsLowerAndNumericAndSpecial = lowerCase + numbers + specialCharacters;
    for (let i = 0; i <= characterLength; i++) {
      var random = Math.floor(Math.random() * IsLowerAndNumericAndSpecial.length);
      randomPass += IsLowerAndNumericAndSpecial.substring(random, random + 1);
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

  // if ONLY Uppercase & Numeric are selected
  if (isUpperCase && isLowerCase == false && isNumeric && isSpecial == false) {
    var isUpperAndNumeric = upperCase + numbers;
    for (let i = 0; i <= characterLength; i++) {
      var random = Math.floor(Math.random() * isUpperAndNumeric.length);
      randomPass += isUpperAndNumeric.substring(random, random + 1);
      randomPass = randomPass.substring(0, characterLength);

    }
  }

  // if ONLY Uppercase & Special are selected
  if (isUpperCase && isLowerCase == false && isNumeric == false && isSpecial) {
    var isUpperAndSpecial = upperCase + specialCharacters;
    for (let i = 0; i <= characterLength; i++) {
      var random = Math.floor(Math.random() * isUpperAndSpecial.length);
      randomPass += isUpperAndSpecial.substring(random, random + 1);
      randomPass = randomPass.substring(0, characterLength);

    }
  }

  // if ONLY Uppercase & Numeric & Special are selected
  if (isUpperCase && isLowerCase == false && isNumeric && isSpecial) {
    var isUpperAndNumericAndSpecial = upperCase + numbers + specialCharacters;
    for (let i = 0; i <= characterLength; i++) {
      var random = Math.floor(Math.random() * isUpperAndNumericAndSpecial.length);
      randomPass += isUpperAndNumericAndSpecial.substring(random, random + 1);
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

  // if ONLY numbers & Special are selected
  if (isNumeric && isUpperCase == false && isLowerCase == false && isSpecial) {
    var isNumericAndSpecial = numbers + specialCharacters;
    for (let i = 0; i <= characterLength; i++) {
      var random = Math.floor(Math.random() * isNumericAndSpecial.length);
      randomPass += isNumericAndSpecial.substring(random, random + 1);
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

  // if NONE
  if (!isLowerCase && !isUpperCase && !isNumeric && !isSpecial) {
    alert("Please choose atleast 1 option");
    
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
