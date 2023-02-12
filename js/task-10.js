function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector("#controls");
const inputEl = controlsEl.firstElementChild;
const createBtnEl = controlsEl.querySelector("button[data-create]");
const destroyBtnEl = controlsEl.querySelector("button[data-destroy]");
const listBoxEl = controlsEl.nextElementSibling;

listBoxEl.style.cssText = "display: flex; flex-wrap: wrap;";

const controlBoxes = {
  create() {
    for (let i = 0; i < inputEl.value; i += 1) {
      const boxSize = 30 + i * 10;
      const fontSize = 20 + i * 2;
      const textBordercolor = getRandomHexColor();

      listBoxEl.innerHTML += `<div style="color: ${textBordercolor}; font-size: ${fontSize}px; display: flex; justify-content: center; align-items: center; border-radius: 25%; border: 5px solid ${textBordercolor}; width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}">${
        i + 1
      }</div>`;
    }
  },

  destroy() {
    listBoxEl.innerHTML = "";
  },
};

createBtnEl.addEventListener("click", controlBoxes.create);
destroyBtnEl.addEventListener("click", controlBoxes.destroy);
