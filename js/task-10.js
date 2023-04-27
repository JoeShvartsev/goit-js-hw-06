
const  createBtn = document.querySelectorAll('button')[0]
const deleteBtn = document.querySelectorAll('button')[1]
const inputEl = document.querySelector("input")
const divEl = document.querySelector("#boxes")


createBtn.addEventListener("click", createBoxes)

function createBoxes (amount) {
  if (inputEl.value < 1 || inputEl.value > 50) {
    alert("fill in number in range of 1 to 50")
  }
  else if (inputEl.value >= 1 && inputEl.value <= 50) {
    amount = inputEl.value  
    let divSize= 0
    for (let i = 0; i < amount; i++) {
      const divCreated = document.createElement('div')
      divSize=30+i*10 +'px'
      divCreated.classList.add('color-block')
      divCreated.style.width = divSize
      divCreated.style.height = divSize
      divCreated.style.backgroundColor = getRandomHexColor()
      divEl.append(divCreated)
    }
  }
}

deleteBtn.addEventListener("click", destroyBoxes)

function destroyBoxes() {
  inputEl.value = '';
  divEl.innerHTML = '';
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
