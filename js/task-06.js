const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  inputEl.value.length <= inputEl.getAttribute("data-length") &&
  inputEl.value.length > 0
    ? (inputEl.classList.remove("invalid"), inputEl.classList.add("valid"))
    : inputEl.classList.add("invalid");

  if (inputEl.value.length === 0) {
    inputEl.classList.remove("invalid");
    inputEl.classList.remove("valid");
  }
});
