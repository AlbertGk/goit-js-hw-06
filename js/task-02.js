const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayWithTags = []

ingredients.forEach((el) => {
  const listElement = document.createElement("li");
  listElement.textContent = el;
  listElement.classList.add("item");
  arrayWithTags.push(listElement);
});


const parentElement = document.querySelector("ul#ingredients")
parentElement.append(...arrayWithTags);