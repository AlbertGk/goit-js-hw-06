const pageForm = document.querySelector('form.login-form');

function formHandler(event) {
    event.preventDefault();

    const {
      elements: { email, password },
    } = event.currentTarget;


    if (email.value === "" || password.value === "") {
        alert("Proszę uzupełnić wszystkie pola");
    } else {
        console.log(`Email: ${email.value}, Password: ${password.value}`);
        event.currentTarget.reset();
    }
}

pageForm.addEventListener('submit', formHandler);