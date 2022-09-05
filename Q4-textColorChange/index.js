const inputText = document.querySelector(".input-1")
const outputText = document.querySelector("#output")
const sampleText = document.querySelector(".text")

const redButton = document.querySelector("#red-btn")
const greenButton = document.querySelector("#green-btn")
const blueButton = document.querySelector("#blue-btn")

inputText.addEventListener("input", function handleText(e) {
    outputText.innerHTML = e.target.value
})

redButton.addEventListener("click", function textToRed() {
    sampleText.style.color = "Red"
    outputText.style.color = "Red"

})

greenButton.addEventListener("click", function textToGreen() {
    sampleText.style.color = "Green"
    outputText.style.color = "Green"
})

blueButton.addEventListener("click", function textToBlue() {
    sampleText.style.color = "Blue"
    outputText.style.color = "Blue"
})
