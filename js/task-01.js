const allCategories = document.querySelectorAll('li.item');

console.log(`Number of categories: ${allCategories.length}`);

const categoriesArray = [...allCategories];

for (const categoryArray of categoriesArray) {
  console.log(`Category: ${categoryArray.firstElementChild.textContent}`);
  console.log(`Elements: ${categoryArray.lastElementChild.children.length}`);
};
