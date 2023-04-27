const controlerEl = document.querySelector("#font-size-control")
const abraCadabra = document.querySelector("#text")
controlerEl.addEventListener("input", (event)=>{
   
    abraCadabra.style.fontSize = `${event.currentTarget.value}px`;
})

