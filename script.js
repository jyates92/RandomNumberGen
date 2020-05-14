let generateBtn = document.querySelector("#generate");
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYXZ";
let numbers = "0123456789";
let allsymbols = "!@#$%^&*()_+~";

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
};


function askLength() {
  let passwordLength = prompt("How many characters would you like your password to contain? Must be between 8-128.");

  if (Number.isInteger(parseInt(passwordLength))) {
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
  const length = askLength();
  let useableCharacters = returnUseableCharacters(useUppercase, useLowercase, useSymbols, useIntegers);
  let passwordString = "";
  let i = 0;
  while (i < length) {
    let randomCharacter = useableCharacters[Math.floor(Math.random() * useableCharacters.length)];
    passwordString += randomCharacter;
    console.log(randomCharacter);
    i++;
  }
  console.log(passwordString);
  return passwordString;
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
  return characters;
};