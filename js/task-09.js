const ref = {
buttonEl: document.querySelector(".change-color"),
bodyEl: document.body,
spanEl: document.querySelector(".color")
}

ref.buttonEl.addEventListener('click', changeColor)
function changeColor () {
    const currentColor = ref.bodyEl.style.backgroundColor = getRandomHexColor()
    ref.spanEl.textContent = `- ${String(currentColor)}`
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
