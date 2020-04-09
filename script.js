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
  var str;

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


  str = makingRandomPaswword(passLength);


  return str;

}

function makingRandomPaswword(passLength) {

  var str = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < passLength; i++) {

    str += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return str;

}