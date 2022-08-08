const displayResults = document.getElementById("display")
const numberBtns = document.querySelectorAll(".number")
const clearBtn = document.getElementById("clear")
const operatorBtns = document.querySelectorAll(".operator")
let storedValue = 0;
let value = 0;
let operator = "";

clearBtn.addEventListener("click", () => {
    displayResults.textContent = 0;
})

operatorBtns.forEach(btn = btn.addEventListener("click", () => {
    operator = btn.textContent
}))

numberBtns.forEach(btn => btn.addEventListener("click", () => {
    if (displayResults.textContent === "0") {
        displayResults.textContent = btn.textContent
    } else {
        displayResults.textContent += btn.textContent
    }
    value = parseInt(displayResults.textContent)
    console.log(value)
}));


function add(num1, num2) {
    return (num1 + num2)
}

function subtract(num1, num2) {
    return (num1 - num2)
}

function multiply(num1, num2) {
    return (num1 * num2)
}

function divide(num1, num2) {
    return (num1 / num2)
}

function operate(operator, num1, num2) {
    if (operator === "+") {
        add(num1, num2)
    } else if (operator === "-") {
        subtract(num1, num2)
    } else if (operator === "*") {
        multiply(num1, num2)
    } else if (operator === "/") {
        divide(num1, num2)
    }
}