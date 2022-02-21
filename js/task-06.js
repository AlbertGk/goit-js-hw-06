const pageForm = document.querySelector("input#validation-input");

const formValidation = (event) => {
    if (event.currentTarget.value.length === 6) {
        pageForm.classList.add('valid');
        pageForm.classList.remove("invalid");
    } else {
        pageForm.classList.add('invalid');
        pageForm.classList.remove("valid");
    }
}

pageForm.addEventListener('blur', formValidation);