const pageForm = document.querySelector("input#validation-input");

const formValidation = (event) => {
    if (event.currentTarget.value.length === Number(pageForm.dataset.length)) {
      pageForm.classList.add("valid");
      pageForm.classList.remove("invalid");
    } else {
      pageForm.classList.add("invalid");
      pageForm.classList.remove("valid");
    }
}

pageForm.addEventListener('blur', formValidation);