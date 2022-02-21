function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyElem = document.querySelector("body");
const colorName = document.querySelector('span.color')
const colorChangeButton = document.querySelector("button.change-color");

const colorChanger = () => {
  colorName.textContent = getRandomHexColor();
  bodyElem.style.backgroundColor = `${getRandomHexColor()}`;
}

colorChangeButton.addEventListener('click', colorChanger);