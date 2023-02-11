function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const colorEl = document.querySelector(".color");
const changeColorBtnEl = document.querySelector(".change-color");

const changeColor = () => {
  const color = getRandomHexColor();

  bodyEl.style.backgroundColor = color;
  colorEl.textContent = color;
};

changeColorBtnEl.addEventListener("click", changeColor);
