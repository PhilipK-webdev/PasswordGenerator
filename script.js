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

  var passLength = 0;
  var theLengthPassword = 0;
  var flag = false;
  var passwordLocal;
  var type;

  alert("Welcome to our password generator !");
  alert("For your password there is a password criteria " + "\nthat you need to choice from");

  while (flag === false) {

    theLengthPassword = prompt("The first option is generate the password with the length criteria" + "\nchoice number between 8 and 128");

    if (theLengthPassword >= 8) {

      if (theLengthPassword <= 128) {

        passLength = Math.floor(Math.random() * theLengthPassword);

        flag = true;
      }
    }
  }


  flag = false;

  while (flag === false) {

    type = prompt("charachter types to include in the password" + "\nlowercase, uppercase, numeric and/or special character");
    if (type.toLocaleLowerCase() === "lowercase" ||
      type.toLocaleLowerCase() === "uppercase" ||
      type.toLocaleLowerCase() === "numeric" ||
      type.toLocaleLowerCase() === "special character") {

      flag = true;
    }

  }


  passwordLocal = makingRandomPaswword(passLength, type);

  return passwordLocal;

}

function makingRandomPaswword(passLength, type) {

  var str = "";
  var characters;

  if (type.toLocaleLowerCase() === "lowercase") {

    characters = "abcdefghijklmnopqrstuvwxyz";

  } else if (type.toLocaleLowerCase() === "uppercase") {

    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if (type.toLocaleLowerCase() === "numeric") {

    characters = "0123456789";
  } else {

    characters = "'#$%&()*+,-./:;<=>?@";
  }

  for (var i = 0; i < passLength; i++) {

    str += characters.charAt(Math.floor(Math.random() * characters.length));

  }

  return str;

}




