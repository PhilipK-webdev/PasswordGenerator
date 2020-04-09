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
  var creatiriaFlag = false;
  var passwordLocal;
  var answerType = [];
  var lengthType;



  alert("Welcome to our password generator !");
  alert("For your password there is a password criteria " + "\nthat you need to choice from");

  while (creatiriaFlag === false) {

    theLengthPassword = prompt("The first option is generate the password with the length criteria" + "\nchoice number between 8 and 128");

    if (theLengthPassword >= 8 && theLengthPassword <= 128) {
      creatiriaFlag = true;
    }
  }

  creatiriaFlag = false;

  lengthType = prompt("How many types of characters you want ? " + "/n1,2,3,4 ?");

  for (var i = 0; i < lengthType; i++) {

    answerType[i] = prompt("Which character you want ? " + "lowercase, uppercase, numeric or special ");

    while (creatiriaFlag === false) {

      if ((answerType[i].toLocaleLowerCase() !== "lowercase") &&
        (answerType[i].toLocaleLowerCase() !== "uppercase") &&
        (answerType[i].toLocaleLowerCase() !== "numeric") &&
        (answerType[i].toLocaleLowerCase() !== "special")) {
        answerType[i] = prompt("Which character you want ? " + "lowercase, uppercase, numeric or special ");

      } else {
        creatiriaFlag = true;
      }

    }

    creatiriaFlag = false;

  }

  passwordLocal = makingRandomPaswword(theLengthPassword, answerType);

  return passwordLocal;

}

function makingRandomPaswword(theLengthPassword, andswerType) {

  var str = "";
  var characters = "";

  for (var i = 0; i < andswerType.length; i++) {

    if (andswerType[i].toLocaleLowerCase() === "lowercase") {
      characters += "abcdefghijklmnopqrstuvwxyz";

    } else if (andswerType[i].toLocaleLowerCase() === "uppercase") {

      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (andswerType[i].toLocaleLowerCase() === "numeric") {

      characters += "0123456789";
    } else {

      characters += "'#$%&()*+,-./:;<=>?@";
    }
  }
  for (var i = 0; i < theLengthPassword; i++) {

    str += characters.charAt(Math.floor(Math.random() * characters.length));

  }
  return str;


}



