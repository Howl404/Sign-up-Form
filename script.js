const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const error = document.getElementById("error-message");

const check = function () {
  if (
    password1.value === password2.value &&
    password1.value !== "" &&
    password2.value !== ""
  ) {
    password1.classList.remove("error");
    password2.classList.remove("error");
    error.style.display = "none";
  } else {
    password2.classList.add("error");
    password1.classList.add("error");
    error.style.display = "block";
  }
};
