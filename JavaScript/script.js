// This interpolates the rotation of the arrow button on the sliding footer
var buttonValidation = false;
function animateButton() {
  var $elem = $("#animationButton");
  var footer = $("#footerAnimation");
  if (buttonValidation == false) {
    buttonValidation = true;
    // moves arrow button from an upward rotation to a downward rotation over 400 miliseconds
    $({ deg: 180 }).animate(
      { deg: 0 },
      {
        duration: 400,
        // This ensures that the button moves with the footer as it slides up
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
    // moves arrow button from a downward rotation to an upward rotation over 400 miliseconds
  } else {
    buttonValidation = false;
    $({ deg: 0 }).animate(
      { deg: 180 },
      {
        duration: 400,
        // This ensures that the button moves with the footer as it slides down
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
// makes sure that the terms and conditions box is checked -
// shows a modal if not checked on submit
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
  // Goes through the word chracter by character ensuring '@' is included
  // It also ensures that it is not placed at first position
  if (email.value.indexOf("@") > 0) {
    isEmailValid = true;
    email.style.backgroundColor = valid;
  } else {
    isEmailValid = false;
    email.style.backgroundColor = invalid;
    return;
  }
}
// Rotates a star image 360 degrees at submit
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
// Checks all validation at submit, hides original footer and shows 'Submitted' footer
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
