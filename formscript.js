/*Validates First name and Last name input and displays appropriate message.*/
function checkFirstname() {
  var username = document.getElementById("firstName");
  var message = document.getElementById("firstNameValidation");
  checkName(username, message, "First Name");
}
function checkLastname() {
  var username = document.getElementById("lastName");
  var message = document.getElementById("lastNameValidation");
  checkName(username, message, "Last Name");
}
function checkName(username, message, typeName) {
  var valid = "#619196";
  var invalid = "#DFC7C1";
  message.style.display = "block";
  // Trim removes whitespace
  if (username.value.trim().length > 0) {
    isUsernameValid = true;

    message.style.color = "white";
    message.style.backgroundColor = valid;
    message.innerHTML = typeName + " OK!";
  } else {
    isUsernameValid = false;
    message.style.color = "#969086";
    message.style.backgroundColor = invalid;
    message.innerHTML = typeName + " needed";
  }
}

/*Validates email input and displays appropriate message.*/
var isEmailValid = false;
function checkEmail() {
  var email = document.getElementById("email");
  var isValidateEmail = false;
  // Ensures that a '@' is included in the text in a position that is more than 0 (i.e the first character) if not it does not validate
  if (email.value.indexOf("@") > 0) {
    isValidateEmail = true;
  } else {
    isValidateEmail = false;
  }
  var message = document.getElementById("emailValidation");
  var valid = "#619196";
  var invalid = "#DFC7C1";
  // Trim removes whitespace
  if (email.value.trim().length > 0 && isValidateEmail == true) {
    isEmailValid = true;

    message.style.color = "white";
    message.style.backgroundColor = valid;
    message.innerHTML = "Email Ok!";
  } else {
    isEmailValid = false;

    message.style.color = "#969086";
    message.style.backgroundColor = invalid;
    message.innerHTML = "Email needed";
    return;
  }
}
/*Validates Address input and displays appropriate message.*/
var isAddressValid = false;
function checkAddress() {
  var address = document.getElementById("address1");
  var message = document.getElementById("addressValidation");
  var valid = "#619196";
  var invalid = "#DFC7C1";
  // Trim removes whitespace
  if (address.value.trim().length > 0) {
    isAddressValid = true;
    message.style.color = "white";
    message.style.backgroundColor = valid;
    message.innerHTML = "Address Ok!";
  } else {
    isAddressValid = false;

    message.style.color = "#969086";
    message.style.backgroundColor = invalid;
    message.innerHTML = "Address needed";
    return;
  }
}
/*Validates Address input and displays appropriate message.*/
var isAddress2Valid = false;
function checkAddress2() {
  var address2 = document.getElementById("address2");
  var message = document.getElementById("address2Validation");
  var valid = "#619196";
  var invalid = "#DFC7C1";
  // Trim removes whitespace
  if (address2.value.trim().length > 0) {
    isAddress2Valid = true;

    message.style.color = "white";
    message.style.backgroundColor = valid;
    message.innerHTML = "Address Ok!";
  } else {
    isAddress2Valid = false;

    message.style.color = "#969086";
    message.style.backgroundColor = invalid;
    message.innerHTML = "Address needed";
    return;
  }
}
/*Validates Eircode input and displays appropriate message.*/
var isEircodeValid = false;
function checkEircode() {
  var eircode = document.getElementById("eircode");
  var message = document.getElementById("eircodeValidation");
  var valid = "#619196";
  var invalid = "#DFC7C1";
  // Trim removes whitespace
  if (eircode.value.trim().length == 7) {
    isEircodeValid = true;
    message.style.color = "white";
    message.style.backgroundColor = valid;
    message.innerHTML = "Eircode Ok!";
  } else {
    isEircodeValid = false;

    message.style.color = "#969086";
    message.style.backgroundColor = invalid;
    message.innerHTML = "Eircode needed (7 Characters)";
    return;
  }
}
var isCardSelected = false;
function checkCard() {
  var visa = document.getElementById("visa");
  var masterCard = document.getElementById("masterCard");
  var message = document.getElementById("cardValidation");
  var valid = "#619196";
  var invalid = "#DFC7C1";
  if (document.getElementById("visa").checked) {
    isCardSelected = true;
    message.style.color = "white";
    message.style.backgroundColor = valid;
    message.innerHTML = "Visa Selected!";
  } else if (document.getElementById("masterCard").checked) {
    isCardSelected = true;
    message.style.color = "white";
    message.style.backgroundColor = valid;
    message.innerHTML = "Mastercard Selected!";
  } else {
    isCardSelected = false;
    message.style.color = "#969086";
    message.style.backgroundColor = invalid;
    message.innerHTML = "Card must be selected";
  }
}
var isCurrencySelected = false;
function checkCurrency() {
  var euro = document.getElementById("euro");
  var pound = document.getElementById("pounds");
  var message = document.getElementById("currencyValidation");
  var valid = "#619196";
  var invalid = "#DFC7C1";
  if (document.getElementById("euro").checked) {
    isCurrencySelected = true;
    message.style.color = "white";
    message.style.backgroundColor = valid;
    message.innerHTML = "Euro Selected!";
  } else if (document.getElementById("pounds").checked) {
    isCurrencySelected = true;
    message.style.color = "white";
    message.style.backgroundColor = valid;
    message.innerHTML = "Pounds Selected!";
  } else {
    isCurrencySelected = false;
    message.style.color = "#969086";
    message.style.backgroundColor = invalid;
    message.innerHTML = "Currency must be selected";
  }
}
// This function pulls the value we put into Local Storage on the Menu JS page and places it into our function here
var total;
var provinceChecked = false;
window.onload = function () {
  total = localStorage.getItem("total");
  // An alert if a user goes to checkout without selecting items. This is to keep the field from displaying 'Null'
  if (total == null) {
    alert("No Items Selected On Menu Page, Defaulting To €10");
    total = 10;
  }
  // fixed to 2 decimal places for readablilty
  $("#total").text("€" + parseFloat(total).toFixed(2));
  // An example of a JQuery click listener
  $(".dropdown-item").click(function () {
    var message = document.getElementById("provinceValidation");
    var valid = "#619196";
    $("#dropdownMenuButton").html(
      // Keeps the arrow upon text change
      $(this).text() + '<span class="caret"></span>'
    );
    provinceChecked = true;
    message.style.color = "white";
    message.style.backgroundColor = valid;
    message.innerHTML = "Province Ok!";
  });
};
// An function to calculate the conversion of our newly pulled total value,
// Where Euro is the default state and pound conversion is assumed to be 1:0.9
function totalPayable() {
  checkCurrency();
  var currentValue = total;
  if (document.getElementById("pounds").checked) {
    currentValue = total * 0.9;
    $("#total").text("£" + parseFloat(currentValue).toFixed(2));
  } else {
    $("#total").text("€" + parseFloat(currentValue).toFixed(2));
  }
}
// A function to confirm all fields have been successfully completed before showing the Thank You screen upon submit button press
var elem = document.getElementById("checkout");
function submitButton() {
  var message = document.getElementById("provinceValidation");
  var invalid = "#DFC7C1";
  if (provinceChecked == false) {
    message.style.color = "#969086";
    message.style.backgroundColor = invalid;
    message.innerHTML = "Province needed";
  }
  checkFirstname();
  checkLastname();
  checkEmail();
  checkAddress();
  checkAddress2();
  checkEircode();
  totalPayable();
  checkCard();
  checkCurrency();
  if (
    isUsernameValid == true &&
    isEmailValid == true &&
    isAddressValid == true &&
    isAddress2Valid == true &&
    isEircodeValid == true &&
    provinceChecked == true &&
    isCardSelected == true &&
    isCurrencySelected == true
  ) {
    $(".shownCheckout").hide();
    $(".form").hide();
    $("#hideCheckout").show();
  }
}
