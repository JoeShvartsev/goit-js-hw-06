const inputEl = document.querySelector("#validation-input")
inputEl.addEventListener("blur", (event) => {
    if (inputEl.value.length === Number(event.currentTarget.dataset.length))  {
        event.currentTarget.classList.add("valid")
        event.currentTarget.classList.remove("invalid")
    }
    else {
        event.currentTarget.classList.add("invalid")
        event.currentTarget.classList.remove("valid")
    }

});


