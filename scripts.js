const displayResults = document.getElementById("display");
const numberBtns = document.querySelectorAll(".number");
const clearBtn = document.getElementById("clear");
const operatorBtns = document.querySelectorAll(".operator");
const equalsBtn = document.getElementById("equals");
let storedValue = 0;
let value = 0;
let operator = "";
let storedOperator = "";

equalsBtn.addEventListener("click", () => {
     operate(operator, storedValue, value);
     storedOperator = "";
     operator = "";
})

clearBtn.addEventListener("click", () => {
    displayResults.textContent = 0;
    storedValue = 0;
    value = 0;
    operator = "";
    storedOperator = "";
});

operatorBtns.forEach(btn => btn.addEventListener("click", () => {
    operator = btn.textContent;
    if (storedValue === "0" || storedValue === 0) {
        storedValue = parseInt(displayResults.textContent);
    } else {
        storedValue = parseInt(storedValue);
        operate(storedOperator, storedValue, value);
    }
    value = 0;
    storedOperator = operator;
}));

numberBtns.forEach(btn => btn.addEventListener("click", () => {
    if (value === 0) {
        displayResults.textContent = btn.textContent
    } else {
        displayResults.textContent += btn.textContent
    }
    value = parseInt(displayResults.textContent)
}));


function add(num1, num2) {
    return (num1 + num2)
};

function subtract(num1, num2) {
    return (num1 - num2)
};

function multiply(num1, num2) {
    return (num1 * num2)
};

function divide(num1, num2) {
    if (num2 === 0) {
        alert("Nice try.  No breaking the universe!")
    } else {
        return (num1 / num2)
    }
};

function operate(operator, num1, num2) {
    if (operator === "+") {
        displayResults.textContent = add(num1, num2);
    } else if (operator === "-") {
        displayResults.textContent = subtract(num1, num2);
    } else if (operator === "x") {
        displayResults.textContent = multiply(num1, num2);
    } else if (operator === "/") {
        displayResults.textContent = divide(num1, num2);
    }
    storedValue = parseInt(displayResults.textContent);
};