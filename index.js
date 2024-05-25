let IncludeLowerCase = document.querySelector(".Include-LowerCase");
let IncludeUpperCase = document.querySelector(".Include-UpperCase");
let IncludeNumber = document.querySelector(".Include-Number");
let IncludeSymbol = document.querySelector(".Include-Symbol");
let h1Output = document.querySelector(".h1-output");
document.querySelector(".button").addEventListener("click", function () {
  var length = 16;
  let a = true;
  if (
    !IncludeLowerCase.checked &&
    !IncludeUpperCase.checked &&
    !IncludeNumber.checked &&
    !IncludeSymbol.checked
  ) {
    h1Output.textContent = "At least one type of char required! ";
    a = false;
  }
  if (IncludeLowerCase.checked) {
    var islower = true;
  }
  if (IncludeUpperCase.checked) {
    var isupper = true;
  }
  if (IncludeNumber.checked) {
    var isnumber = true;
  }
  if (IncludeSymbol.checked) {
    var issymbol = true;
  }

  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var symbol = "!@#$%^&*()_+";
  var number = "123456789";
  var allchar = "";
  var final_password = "";
  allchar += isupper ? upper : "";
  allchar += islower ? lower : "";
  allchar += issymbol ? symbol : "";
  allchar += isnumber ? number : "";
  for (var i = 0; i <= length; i++) {
    var randomIndex = Math.floor(Math.random() * allchar.length);
    var final_password = final_password + allchar[randomIndex];
  }
  //   return final_password;
  if (a === true) {
    h1Output.textContent = final_password;
    console.log(final_password);
  }
});

// console.log(work(length, isupper, islower, issymbol, isnumber));
