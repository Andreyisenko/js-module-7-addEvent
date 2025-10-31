const btn = document.createElement("button");
btn.classList.add("btN");
btn.textContent = "Button";
// console.log(btn);
const wrap = document.querySelector(".wraper");
// console.log(wrap);

wrap.append(btn);
btn.addEventListener("click", createElem);

function createElem(event) {
  const title = document.createElement("h2");
  title.classList.add("title2");
  title.textContent = "Мене створила кнопка Button";
  wrap.prepend(title);
  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Delete";
  btnDelete.classList.add("btnDelete");
  wrap.append(btnDelete);
  //   console.log(event);
  //   console.log(event.currentTarget);
  const btnTogle = document.createElement("button");
  btnTogle.textContent = "TogleColor";
  btnTogle.classList.add("togle");
  wrap.append(btnTogle);
  btnTogle.addEventListener("click", togleColor);
  function togleColor(event) {
    title.classList.toggle("title2");
  }
  btnDelete.addEventListener("click", removeTitle);
  function removeTitle(event) {
    title.remove();
    btnDelete.remove();
    btnTogle.remove();
  }
}
