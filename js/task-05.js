const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value.length === 0) {
        return output.textContent = "Anonimus"
    }
    return output.textContent = event.currentTarget.value;
});