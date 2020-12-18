//see references for 3rd party code
//this calculates the total of each checkbox as they are selected or unselected. It also includes the delivery charge.
//start off with value total and as each is changed adds it in or takes it away. The total is fixed to 2 decimal places
var total = 0.0;
$(document).on("change", ".checks", function () {
  var checked = $(".checks:checked"),
    sum = checked.get().reduce(function (prev, item) {
      return prev + parseFloat(item.getAttribute("data-price"));
    }, 0);
  localStorage.setItem("total", sum.toFixed(2));
  $("#tots").text(sum.toFixed(2));
});

var expanded = false;
function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

var expanded = false;
function showCheckboxes1() {
  var checkboxes1 = document.getElementById("checkboxes1");
  if (!expanded) {
    checkboxes1.style.display = "block";
    expanded = true;
  } else {
    checkboxes1.style.display = "none";
    expanded = false;
  }
}

var expanded = false;
function showCheckboxes2() {
  var checkboxes2 = document.getElementById("checkboxes2");
  if (!expanded) {
    checkboxes2.style.display = "block";
    expanded = true;
  } else {
    checkboxes2.style.display = "none";
    expanded = false;
  }
}

var expanded = false;
function showCheckboxes3() {
  var checkboxes3 = document.getElementById("checkboxes3");
  if (!expanded) {
    checkboxes3.style.display = "block";
    expanded = true;
  } else {
    checkboxes3.style.display = "none";
    expanded = false;
  }
}

var expanded = false;
function showCheckboxes4() {
  var checkboxes4 = document.getElementById("checkboxes4");
  if (!expanded) {
    checkboxes4.style.display = "block";
    expanded = true;
  } else {
    checkboxes4.style.display = "none";
    expanded = false;
  }
}

var expanded = false;
function showCheckboxes5() {
  var checkboxes4 = document.getElementById("checkboxes5");
  if (!expanded) {
    checkboxes5.style.display = "block";
    expanded = true;
  } else {
    checkboxes5.style.display = "none";
    expanded = false;
  }
}
