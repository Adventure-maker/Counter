const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

const countDisplay = document.getElementById('count')

var count = 0;

resetBtn.addEventListener('click', () => {
    count = 0;
    countDisplay.innerHTML = count;
})

increaseBtn.addEventListener('click', () => {
    count++;
    countDisplay.innerHTML = count;
})

decreaseBtn.addEventListener('click', () => {
    if (count == 0) {
        count = 0;
    } else if (count > 0) {
        count--;
    } 
    countDisplay.innerHTML = count;
})