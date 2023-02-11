const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
textEl.style.fontSize = "56px";

inputEl.addEventListener("input", () => {
  textEl.style.fontSize = inputEl.value + "px";
});
