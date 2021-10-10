const increaseBtn = document.getElementById(`increase-btn`)
const resetBtn = document.getElementById(`reset-btn`)
const decreaseBtn = document.getElementById(`decrease-btn`)
const numberCounter = document.getElementById(`number-counter`)

let num = 0

increaseBtn.addEventListener(`click`, () => {
   num++
   numberCounter.textContent = num
   changeNumberColor()
})

resetBtn.addEventListener(`click`, () => {
   num = 0
   numberCounter.textContent = num
   changeNumberColor()
})

decreaseBtn.addEventListener(`click`, () => {
   num--
   numberCounter.textContent = num
   changeNumberColor()
})

function changeNumberColor() {
   if (num === 0) {
      numberCounter.style.color = `black`
   }
   else if (num < 0) {
      numberCounter.style.color = `red`
   } 
   else {
      numberCounter.style.color = `green`
   } 
}