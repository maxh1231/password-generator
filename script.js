// Assignment Code
var generateBtn = document.querySelector("#generate");

let lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"

];

let upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"

];

let numbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
];

let specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "=",
  ";",
  ",",
  ".",
  "/",
  "`",
  "~",
];






let userInputCharacterAmount = window.prompt("Please select a character amount");

while (userInputCharacterAmount < 8 || userInputCharacterAmount > 128) {
  userInputCharacterAmount = window.prompt("Please select a character amount between 8 and 128");
}




let userInputSpecialCharacter = window.prompt("Please select character type. IE. lowercase, uppercase, numeric, and/or special characters");




function numberPassword() {
  let number = numbers[Math.floor(Math.random() * numbers.length)];
  console.log(number);
  userInputCharacterAmount = parseInt(userInputCharacterAmount, 10);
  console.log(number + userInputCharacterAmount);
}

while (numberPassword() > 128) {
  numberPassword();
}



// if (isNaN(userInputSpecialCharacter)) {
//   console.log("is NOT a number");
// } else {
//   numberPassword();
//   console.log(number);
// }

// if (userInputCharacterAmount < 8 || userInputCharacterAmount > 128) {
//   userInputCharacterAmount = window.prompt("Please select a password between 8 and 128 characters");
// } else {
//   userInputCharacterAmount = window.prompt("Please select a password between 8 and 128 characters")
// };


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
