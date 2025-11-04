// const btn = document.createElement("button");
// btn.classList.add("btN");
// btn.textContent = "Button";
// // console.log(btn);
// const wrap = document.querySelector(".wraper");
// // console.log(wrap);

// wrap.append(btn);
// btn.addEventListener("click", createElem);

// function createElem(event) {
//   const title = document.createElement("h2");
//   title.classList.add("title2");
//   title.textContent = "Мене створила кнопка Button";
//   wrap.prepend(title);
//   const btnDelete = document.createElement("button");
//   btnDelete.textContent = "Delete";
//   btnDelete.classList.add("btnDelete");
//   wrap.append(btnDelete);
//   console.log(event.type);
//   console.log(event.currentTarget);
//   const btnTogle = document.createElement("button");
//   btnTogle.textContent = "TogleColor";
//   btnTogle.classList.add("togle");
//   wrap.append(btnTogle);
//   btnTogle.addEventListener("click", togleColor);
//   function togleColor(event) {
//     title.classList.toggle("title2");
//   }
//   btnDelete.addEventListener("click", removeTitle);
//   function removeTitle(event) {
//     title.remove();
//     btnDelete.remove();
//     btnTogle.remove();
//   }
// }

// // document.addEventListener("keydown", (event) => {
// //   console.log("Keydown: ", event.code);
// // });

// // document.addEventListener("keyup", (event) => {
// //   console.log("Keyup: ", event.key);
// // });
// const forM = document.querySelector(".form");
// forM.classList.add("subForm");
// // console.log(forM);
// forM.addEventListener("submit", sub);

// function sub(event) {
//   event.preventDefault();
//   //   console.log(event.target);
//   //   console.log(event.currentTarget.elements.login.value);
//   //   console.log(event.currentTarget.elements.password.value);
//   //   console.log(event.target.children.login.value);
//   //   console.log(event.target.children.password.value);
//   //   console.log("form submit");
//   const dataUser = {
//     login: event.target.elements.login.value,
//     password: event.target.elements.password.value,
//   };
//   event.target.reset();
//   // forM.reset();
//   console.log(dataUser);
// }

// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// select.addEventListener("change", setOutput);

// function setOutput(event) {
//   const selectedOptionValue = event.currentTarget.value;
//   console.log(event.currentTarget.value);
//   console.log(event.target.value);

//   const selectedOptionIndex = event.currentTarget.selectedIndex;
//   // console.log(event.currentTarget.options);

//   const selectedOptionText =
//     event.currentTarget.options[selectedOptionIndex].text;
//   console.log(event.currentTarget.options[selectedOptionIndex]);
//   console.log(event.currentTarget.options[selectedOptionIndex].text);
//   console.log(event.currentTarget.options[selectedOptionIndex].value);

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }
