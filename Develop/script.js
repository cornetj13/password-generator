// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate a password following the criteria given by the user.
function generatePassword() {
  // Ask user for the number of characters the generated password should have.
  var asciiArray = [];
  var generatedPassword = ""
  var numberOfCharactersString = window.prompt("How many characters would you like?");
  var numberOfCharacters = Number(numberOfCharactersString);
  
  // Check that the input is a valid number.
  if (!numberOfCharacters) {
    // Popup to tell user of their error and reprompt.
    window.alert("This is not a number... Try again.");
    return generatePassword()
  }

  // Check that the input is within the acceptable range.
  if (numberOfCharacters < 8) {
    // Password is too short, reprompt user.
    window.alert("This password is too short... Try again.");
    return generatePassword()
  } else if (numberOfCharacters > 128) {
    // Password is too long, reprompt user.
    window.alert("This password is too long... Try again.");
    return generatePassword()
  } else {
    // Password meets acceptable criteria.
    window.alert("Perfect, let's see what type of characters you want!");
  }

  // Ask for special characters.
  var includeSpecial = confirm("Should the password contain special characters?\nEnter OK to include or Cancel to omit.")

  // Ask for numbers.
  var includeNumbers = confirm("Should the password contain numerical characters?\nEnter OK to include or Cancel to omit.")

  // Ask for lower case characters.
  var includeLower = confirm("Should the password contain lower case characters?\nEnter OK to include or Cancel to omit.")

  // Ask for upper case characters.
  var includeUpper = confirm("Should the password contain upper case characters?\nEnter OK to include or Cancel to omit.")

  // If all user input is no, reprompt.
  if (includeSpecial === false && includeNumbers === false && includeLower === false && includeUpper === false) {
    // Popup to tell user of their error and reprompt.
    window.alert("The password needs SOME characters... Try again.");
    return generatePassword()
  }

  // Add appropriate values to ASCII array.
  if (includeSpecial) {
    for (let i = 33; i < 48; i++) {
      asciiArray.push(i)
    }
    for (let i = 58; i < 65; i++) {
      asciiArray.push(i)
    }
    for (let i = 91; i < 97; i++) {
      asciiArray.push(i)
    }
    for (let i = 123; i < 127; i++) {
      asciiArray.push(i)
    }
  }
  if (includeNumbers) {
    for (let i = 48; i < 58; i++) {
      asciiArray.push(i)
    }
  }
  if (includeLower) {
    for (let i = 97; i < 123; i++) {
      asciiArray.push(i)
    }
  }
  if (includeUpper) {
    for (let i = 65; i < 91; i++) {
      asciiArray.push(i)
    }
  }

  // Using appropriate ASCII ranges, generate a random password using the characters specified above.
  for (let i = 0; i < numberOfCharacters; i++) {
    var randomValue = Math.floor(Math.random() * asciiArray.length);
    var randomChar = String.fromCharCode(asciiArray[randomValue]);
    generatedPassword += randomChar;
  }

  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
