const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
  nameEl.textContent = inputEl.value;
});
