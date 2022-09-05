let output = document.querySelector(".output");
let inputOne = document.querySelector("#input-one");

const h1Button = document.querySelector("#make-h1")
const h2Button = document.querySelector("#make-h2")
const h3Button = document.querySelector("#make-h3")



h1Button.addEventListener("click", () => {
    // console.log("Making H1")
    output.style.fontSize = "32px";
});

h2Button.addEventListener("click", () => {
    // console.log("Making H2")
    output.style.fontSize = "24px";
});

h3Button.addEventListener("click", () => {
    // console.log("Making H3")
    output.style.fontSize = "18.72px";
});

inputOne.addEventListener("input", function updateValue(e) {
    output.textContent = e.target.value;
});
