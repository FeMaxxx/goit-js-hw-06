const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
  if (inputEl.value === "") {
    nameEl.textContent = "Anonymous";
  } else {
    nameEl.textContent = inputEl.value;
  }
});
