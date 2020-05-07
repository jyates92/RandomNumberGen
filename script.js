let generateBtn = document.querySelector("#generate");
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYXZ";
let numbers = "0123456789";
let allsymbols = "!@#$%^&*()_+~";

generateBtn.addEventListener("click", generatePassword);

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log();
}

// if ((parseInt(passwordLength) >= 8) && (parseInt(passwordLength) <= 128)) {
//   // return passwordLength;
// } else {
//   askLength()
// }

function askLength() {
  let passwordLength = prompt("How many characters would you like your password to contain? Must be between 8-128.");

  if (Number.isInteger(passwordLength)) {
    console.log(passwordLength);
    if ((passwordLength >= 8) && (passwordLength <= 128)) {
      return passwordLength;
    }    
  } else {
    alert("Please enter a valid length!")
    askLength();
  }
}

  function generatePassword() {
    let useUppercase = confirm("Use uppercase?");
    let useLowercase = confirm("Use lowercase?");
    let useSymbols = confirm("Use symbols?");
    let useIntegers = confirm("Use integers?");
    let length = askLength();
    let useableCharacters = returnUseableCharacters(useUppercase, useLowercase, useSymbols, useIntegers);
    // is it a number
    // if it is how do I check it against me parameters
    // if that's all true then what
    // } RETURNING ENTIRE COMBINATION OF STRINGS
  }


  function returnUseableCharacters(upper, lower, symbols, numeric) {
    let characters = "";
    if (upper) {
      characters += uppercase
    }
    if (lower) {
      characters += lowercase
    }
    if (symbols) {
      characters += allsymbols
    }
    if (numeric) {
      characters += numbers
    }
    console.log(characters);
    return characters;

  } 