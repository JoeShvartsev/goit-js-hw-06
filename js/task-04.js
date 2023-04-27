const incrementCounterBtn = document.querySelector('[data-action="increment"]');
const decrementCounterBtn = document.querySelector('[data-action="decrement"]');
const counterEl = document.querySelector('#value');


const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

incrementCounterBtn.addEventListener("click",() =>{
    counterValue.increment();
    counterEl.textContent = counterValue.value;
}
)
decrementCounterBtn.addEventListener("click",() =>{
    counterValue.decrement();
    counterEl.textContent = counterValue.value;
})


