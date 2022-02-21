function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesQuantityField = document.querySelector('#controls input');
const createButton = document.querySelector("#controls button[data-create]");
const destroyButton = document.querySelector("#controls button[data-destroy]");
const boxesPlace = document.querySelector('div#boxes')

let amount = 0;

const getBoxesQuantity = (event) => {
  amount = event.currentTarget.value;
};

boxesQuantityField.addEventListener("input", getBoxesQuantity);


function createBoxes() {
  let widthAndHeight = 20;
  
  for (let i = 1; i <= amount; i++){
    let singleDiv = document.createElement("div");
    widthAndHeight += 10;
    singleDiv.style.width = `${widthAndHeight}px`;
    singleDiv.style.height = `${widthAndHeight}px`;
    singleDiv.style.backgroundColor = `${getRandomHexColor()}`;
    singleDiv.style.margin = '5px'
    boxesPlace.append(singleDiv);
  }
};

createButton.addEventListener("click", createBoxes);


function destroyBoxes() {
  boxesPlace.innerHTML = "";
};

destroyButton.addEventListener("click", destroyBoxes);