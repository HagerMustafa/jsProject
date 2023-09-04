//validation of conact us
var form = document.getElementById("form");
var userName = document.getElementById("username");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var message = document.getElementById("message");

// Show input error message
function showError(input, message) {
  var formControl = input.parentElement;
  formControl.className = "form-control error";
  var small = formControl.querySelector("small");
  small.innerText = message;
}
function showSuccess(input) {
  var formControl = input.parentElement;
  formControl.className = "form-control success";
}

//email
function checkEmail(input) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}
function chekName(input) {
  var re = /^[A-Za-z]+$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "letters only");
  }
}

//reqired
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}
//length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//pass
form.addEventListener("submit", function (e) {
  e.preventDefault();
  chekName(userName);
  checkRequired([userName, email, phone, message]);
  checkLength(userName, 3, 15);
  checkLength(phone, 11);
  checkEmail(email);
});
