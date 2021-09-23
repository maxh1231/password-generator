// Assignment Code
// lowercase 0-26   uppercase 26-52     numbers 52-62     special characters 62-89
let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{};':<>,./?";

function password() {
  let characterLength = window.prompt("How many characters would you like?");
  characterLength = parseInt(characterLength, 10);
  console.log(characterLength);
  let password = "";

  while (characterLength < 8 || characterLength > 128) {
    characterLength = window.prompt("Pleasse chose between 8 and 128 characters");
  }




  for (let i = 0; i <= characterLength; i++) {
    var random = Math.floor(Math.random() * characters.length);
    password += characters.substring(random, random + 1);
    password = password.substring(0, characterLength);
    console.log(password);
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
