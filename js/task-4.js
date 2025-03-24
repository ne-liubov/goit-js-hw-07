const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const emailValue = loginForm.elements.email.value.trim();
    const passwordValue = loginForm.elements.password.value.trim();

    if (emailValue === '' || passwordValue === '') {
        alert('All form fields must be filled in');
        return;
    };

    const loginData = {
        [loginForm.elements.email.name]: emailValue,
        [loginForm.elements.password.name]: passwordValue,
    };

    console.log(loginData);

    loginForm.reset();
});
