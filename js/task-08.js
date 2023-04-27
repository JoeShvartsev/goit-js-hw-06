const rightEmail = "";
const rightPassword = "";
const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const emailValue = event.currentTarget.elements.email.value;
    const passwordValue = event.currentTarget.elements.password.value;
    if (emailValue === "" || passwordValue == "") {
        alert("Fill up all the forms")
    } else  {
        const userData = {
        email: emailValue,
        password: passwordValue
        }
        console.log (userData)
        loginForm.reset()
    }
}