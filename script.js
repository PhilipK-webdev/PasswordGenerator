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

  var theLengthPassword = 0;
  var creatiriaFlag = false;
  var answerType = [];
  var passwordLocal;
  var lengthType;
  var i = 0;




  alert("Welcome to our password generator !");
  alert("To generate a new password there is 2 Acceptance Criteria: " +
    "\n1: Length of the password" +
    "\n2: Character types to include in the password");

  while (creatiriaFlag === false) {

    theLengthPassword = prompt("The first option is generate the password with the length criteria." + "\nChoose number between 8 and 128");


    if (Number.isInteger(+theLengthPassword) === true) {

      if (theLengthPassword >= 8 && theLengthPassword <= 128) {
        creatiriaFlag = true;
        alert("The length of the password that you choose is : " + "\n" + theLengthPassword);
      }

    } else {

      alert("The Number Supposed to be an Integer between " + "\n8 and 128");
    }
  }


  creatiriaFlag = false;
  lengthType = prompt("The second option is how many types of character you want in your password ?"
    + "\n1,2,3,4 ?");

  while (creatiriaFlag === false) {

    if (Number.isInteger(+lengthType) === true) {

      if (lengthType > 0 && lengthType <= 4) {

        creatiriaFlag = true;

      }

    } else {

      alert("The Number Supposed to be an Integer between ");
      lengthType = prompt("The second option is how many types of character you want in your password ?"
        + "\n1,2,3,4 ?");

    }

  }


  answerType.length = lengthType;



  while (i < lengthType) {

    answerType[i] = prompt("Which character you want ? " +
      "\nlowercase, uppercase, numeric or special character ");

    if ((answerType[i].toLocaleLowerCase() !== "lowercase") &&
      (answerType[i].toLocaleLowerCase() !== "uppercase") &&
      (answerType[i].toLocaleLowerCase() !== "numeric") &&
      (answerType[i].toLocaleLowerCase() !== "special character")) {

      //if the input is not valid then we come inside here
      alert("Wrong input, let's try again.");

    } else {
      //if the input is good then we come inside here and incremet i
      i++;
    }

  }


  passwordLocal = makingRandomPassword(theLengthPassword, answerType);

  return passwordLocal;

}

function makingRandomPassword(theLengthPassword, andswerType) {

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
  var j = 0;
  while (j < theLengthPassword) {
    str += characters.charAt(Math.floor(Math.random() * characters.length));
    j++;
  }
  return str;


}



