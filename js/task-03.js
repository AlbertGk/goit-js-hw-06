const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const markup = images.map((image) => `<li><img src = '${image.url}' alt = '${image.alt}' class = "image-styling"></>`);

const parentElement = document.querySelector('ul.gallery');

parentElement.insertAdjacentHTML('afterbegin', markup);


parentElement.classList.add("list-styling");


/*const changeDisplayButton = parentElement.insertAdjacentHTML(
  'beforebegin', '<button type="button">Change display</button>'
);*/

const changeDisplayButton = document.createElement("button");
changeDisplayButton.type = "button";
changeDisplayButton.textContent = "Change display";
parentElement.before(changeDisplayButton);

const changeFlexDir = () => {
  if (parentElement.classList.contains("list-styling--flex-change")) {
    parentElement.classList.remove("list-styling--flex-change");
  } else {
    parentElement.classList.add("list-styling--flex-change");
  }
};

changeDisplayButton.addEventListener("click", changeFlexDir);




