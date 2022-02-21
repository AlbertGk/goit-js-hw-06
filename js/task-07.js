const fontBar = document.querySelector("input#font-size-control");
const changeableText = document.querySelector("span#text");

const fontSizeChange = (element) => {
    changeableText.style.fontSize = `${element.currentTarget.value}px`;
}


fontBar.addEventListener('input', fontSizeChange)