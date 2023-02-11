const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const makeCard = (el) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = el;

  return itemEl;
};

const cards = ingredients.map((card) => makeCard(card));

listEl.append(...cards);
