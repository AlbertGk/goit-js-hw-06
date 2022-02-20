let counterValue = 0;

const pageCounter = document.querySelector("#counter span#value")/*.textContent*/;


const decrementButton = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  '#counter button[data-action="increment"]'
);

const decreaseValue = () => { counterValue -= 1; pageCounter.innerHTML = counterValue;};
const increaseValue = () => { counterValue += 1; pageCounter.innerHTML = counterValue;};


decrementButton.addEventListener('click', decreaseValue);
incrementButton.addEventListener('click', increaseValue);