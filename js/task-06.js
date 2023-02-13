const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  inputEl.value.length !== 6
    ? inputEl.classList.add("invalid")
    : inputEl.classList.remove("invalid"),
    inputEl.classList.add("valid");
});
