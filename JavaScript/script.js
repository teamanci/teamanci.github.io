// This interpolates
var buttonValidation = false;
function animateButton() {
  var $elem = $("#animationButton");
  var footer = $("#footerAnimation");
  if (buttonValidation == false) {
    buttonValidation = true;
    $({ deg: 180 }).animate(
      { deg: 0 },
      {
        duration: 400,
        step: function (now) {
          $elem.css({
            transform:
              "translate(0px," +
              (now - 180) +
              "px) rotate(" +
              (-now - 180) +
              "deg)",
          });
          footer.css({
            transform: "translate(0px," + now + "px)",
          });
        },
      }
    );
  } else {
    buttonValidation = false;
    $({ deg: 0 }).animate(
      { deg: 180 },
      {
        duration: 400,
        step: function (now) {
          $elem.css({
            transform:
              "translate(0px," +
              (now - 180) +
              "px) rotate(" +
              (-now - 180) +
              "deg)",
          });
          footer.css({
            transform: "translate(0px," + now + "px)",
          });
        },
      }
    );
  }
}
var isCheckboxChecked = false;
function termsValidation() {
  var $elem = $("#termsConditions");
  if (!$elem.is(":checked")) {
    $("#modalTermsConditions").modal("show");
    isCheckboxChecked = false;
  } else {
    isCheckboxChecked = true;
  }
}
var isEmailValid = false;
function checkEmail() {
  var email = document.getElementById("email");
  var valid = "#619196";
  var invalid = "#DFC7C1";
  // Trim removes whitespace
  if (email.value.indexOf("@") > 0) {
    isEmailValid = true;
    email.style.backgroundColor = valid;
  } else {
    isEmailValid = false;
    email.style.backgroundColor = invalid;
    return;
  }
}
function animateRotate() {
  var $elem = $("#starImg");
  $({ deg: 0 }).animate(
    { deg: 360 },
    {
      duration: 2000,
      step: function (now) {
        $elem.css({
          transform: "rotate(" + now + "deg)",
        });
      },
    }
  );
}
function submitForm() {
  termsValidation();
  checkEmail();
  animateRotate();
  if (isEmailValid == true && isCheckboxChecked == true) {
    $("#email").blur();
    $("#hideFooter").hide();
    $("#heading2").show();
  }
}
