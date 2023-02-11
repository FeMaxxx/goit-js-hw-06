const listEl = document.querySelectorAll("ul#categories > li.item");
console.log("Number of categories:", listEl.length);

listEl.forEach((element) => {
  console.log("\nCategory:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.children.length);
});
