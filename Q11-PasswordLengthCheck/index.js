const inputText = document.querySelector("#input")
const submitButton = document.querySelector("#submit-btn")
const messageText = document.querySelector(".message")

submitButton.disabled = true;
inputText.style.outline = "#f55a5a"

inputText.addEventListener("input", function checkInputText(e) {
    e.preventDefault()

    let inputPassword = e.target.value

    if (inputPassword == "") {
        messageText.innerText = "Please create a password greater than 10 letters"
        messageText.style.color = "black"
        defaultColor()
    }
    else if (inputPassword.length > 10) {
        submitButton.disabled = false;
        console.log("Good")
        makeGreen()
        messageText.innerText = "Success"
        messageText.style.color = "#25c600"
    } else {
        submitButton.disabled = true;
        console.log("Bad")
        makeRed()
        messageText.innerText = "Please create a password greater than 10 letters"
        messageText.style.color = "#f55a5a"
    }

})

function makeGreen() {
    inputText.style.border = "none"
    inputText.style.outline = "3px solid #25c600"
}

function makeRed() {
    inputText.style.border = "none"
    inputText.style.outline = "3px solid #f55a5a"
}

function defaultColor() {
    // inputText.style.border = "none"
    inputText.style.outline = "1px solid black"
}

submitButton.addEventListener('click', () => {
    messageText.innerText = "Your Password has been submitted"
})