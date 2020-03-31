// Assignment Code
var caseArray = [];
var lowerCase = [
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
var upperCase = [
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
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var choice;
var passLength;
var generate = document.getElementById("generate");


generate.addEventListener('click', function () {
  pass = generatePass();
  document.getElementById('password').placeholder = pass;
});

function generatePass() {
  passLength = parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters."));
  if (!passLength) {
    alert('You must enter a valid value.');
  } else if (passLength < 8 || passLength > 128 || typeof passLength != "number" || passLength === NaN || passLength === null) {
    alert("Please choose a number that is at least 8 characters and less than 128 characters");
  } else {
    var useLowerCase = confirm("Do you want to include lowercase characters?");

    var useUpperCase = confirm("Do you want to include uppercase characters?");

    var useNum = confirm("Do you want to include numeric characters?");

    var useSpec = confirm("Do you want to include special characters?");
  };

  if (!useLowerCase && !useUpperCase && !useNum && !useSpec) {
    choice = alert("Please select one type of character");
  } else if (useLowerCase && useUpperCase && useNum && useSpec) {
    choice = specChar.concat(lowerCase, upperCase, numbers);
  }
  else if (useSpec && useNum && useUpperCase) {
    choice = specChar.concat(numbers, upperCase);
  } else if (useSpec && useNum && useLowerCase) {
    choice = specChar.concat(numbers, lowerCase);
  } else if (useSpec && useLowerCase && useUpperCase) {
    choice = specChar.concat(lowerCase, upperCase);
  } else if (useNum && useLowerCase && useUpperCase) {
    choice = numbers.concat(lowerCase, upperCase);
  }
  else if (useSpec && useNum) {
    choice = specChar.concat(numbers);
  } else if (useSpec && useLowerCase) {
    choice = specChar.concat(lowerCase);
  } else if (useSpec && useUpperCase) {
    choice = specChar.concat(upperCase);
  } else if (useLowerCase && useNum) {
    choice = lowerCase.concat(numbers);
  } else if (useLowerCase && useUpperCase) {
    choice = lowerCase.concat(upperCase);
  } else if (useNum && useUpperCase) {
    choice = numbers.concat(upperCase);
  }
  else if (useSpec) {
    choice = specChar;
  } else if (useNum) {
    choice = numbers;
  } else if (useLowerCase) {
    choice = lowerCase;
  } else if (useUpperCase) {
    choice = upperCase;
  }

  var passwordString = [];

  for (var i = 0; i < passLength; i++) {
    var selectedCharArray = choice[Math.floor(Math.random() * choice.length)];
    passwordString.push(selectedCharArray);
  }
  var pass = passwordString.join('');
  UserInput(pass);
  return pass;
}

function UserInput(pass) {
  document.getElementById('password').textContent = pass;
}

