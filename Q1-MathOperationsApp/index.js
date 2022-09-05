let inputOne = document.querySelector("#input-one");
let inputTwo = document.querySelector("#input-two");

let addButton = document.querySelector("#add");
let subButton = document.querySelector("#sub");
let mulButton = document.querySelector("#mul");
let diviButton = document.querySelector("#divi");

let output = document.querySelector(".output");

// console.log(output);

addButton.addEventListener("click", function add() {
    let sum = Number(inputOne.value) + Number(inputTwo.value);
    output.innerText = sum;
    // output.style.fontSize = "2px"
});

subButton.addEventListener("click", function add() {
    let sum = Number(inputOne.value) - Number(inputTwo.value);
    output.innerText = sum;
});

mulButton.addEventListener("click", function add() {
    let sum = Number(inputOne.value) * Number(inputTwo.value);
    output.innerText = sum;
});

diviButton.addEventListener("click", function add() {
    let sum = Number(inputOne.value) / Number(inputTwo.value);
    output.innerText = sum;
});