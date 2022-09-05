const increaseButton = document.querySelector("#increase-btn");
const decreaseButton = document.querySelector("#decrease-btn");
const text = document.querySelector("#text");

// output.innerHTML = "Hello"
// console.log(output)
console.log(text.textContent) //Hi My name is Rushi.

let number = 16;

function makeLarge() {
    text.style.color = "Red"
    number = number + 1;
    text.style.fontSize = `${number}px`

}

function makeSmall() {
    text.style.color = "Blue"
    number = number - 1;
    text.style.fontSize = `${number}px`

}

increaseButton.addEventListener("click", makeLarge)
decreaseButton.addEventListener("click", makeSmall)