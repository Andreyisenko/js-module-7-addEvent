const inpt = document.querySelector(".form");
inpt.addEventListener("submit", changeInpit);

function changeInpit(event) {
  event.preventDefault();
  const iNput = event.target;
  console.log(iNput);
  console.log(event.target.elements.login.value);
  console.log(event.target.elements.password.value);
  inpt.reset();
}
const loginInpt = document.querySelector(".formInput");
console.log(loginInpt);
const allInpt = document.querySelectorAll(".formInput");
allInpt.forEach((elem) => elem.addEventListener("input", changePress));

// inpt.addEventListener("keypress", changePress);
// inpt.addEventListener("keyup", changePress);
// loginInpt.addEventListener("keydown", changePress);

function changePress(event) {
  console.log(event.target.value);
}

loginInpt.addEventListener("change", foo);

function foo(event) {
  console.log("ok");
}
