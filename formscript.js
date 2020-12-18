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

var isEmailValid = false;
function checkEmail() {
  var email = document.getElementById("email");
  var isValidateEmail = false;
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
var isEircodeValid = false;
function checkEircode() {
  var eircode = document.getElementById("eircode");
  var message = document.getElementById("eircodeValidation");
  var valid = "#619196";
  var invalid = "#DFC7C1";
  // Trim removes whitespace
  if (eircode.value.trim().length > 0) {
    isEircodeValid = true;
    message.style.color = "white";
    message.style.backgroundColor = valid;
    message.innerHTML = "Eircode Ok!";
  } else {
    isEircodeValid = false;

    message.style.color = "#969086";
    message.style.backgroundColor = invalid;
    message.innerHTML = "Eircode needed";
    return;
  }
}
var total;
window.onload = function () {
  total = localStorage.getItem("total");
  $("#total").text("€" + parseFloat(total).toFixed(2));

  $(".dropdown-item").click(function () {
    console.log("boobs");
    $("#dropdownMenuButton").html(
      $(this).text() + '<span class="caret"></span>'
    );
  });
};
var currencyPrices = new Array();
currencyPrices["Euro"] = 1.1;
currencyPrices["Pounds"] = 0.9;
function totalPayable() {
  var currentValue = total;
  if (document.getElementById("pounds").checked) {
    currentValue = total * 0.9;
    $("#total").text("£" + parseFloat(currentValue).toFixed(2));
  } else {
    $("#total").text("€" + parseFloat(currentValue).toFixed(2));
  }
}
var elem = document.getElementById("checkout");
function submitButton() {
  checkFirstname();
  checkLastname();
  checkEmail();
  checkAddress();
  checkAddress2();
  checkEircode();
  totalPayable();
  if (
    isUsernameValid == true &&
    isEmailValid == true &&
    isAddressValid == true &&
    isAddress2Valid == true &&
    isEircodeValid == true
  ) {
    $(".shownCheckout").hide();
    $(".form").hide();
    $("#hideCheckout").show();
  }
}
