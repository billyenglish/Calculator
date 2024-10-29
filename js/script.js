// create function add, subtraction, multiplication, division.
// create operator function.
// There should be two variables num1 and num2.

// If the user input is a number and the operator variable is empty.
// It goes to the first variable it can only be numbers or it fails the conditions.
// It should go to the second variable and store the number.
// The condition is met and should have variable with the operator value.
// There should be if conditions for plus/minus, decimal, and percentage

const add = (num1, num2) => {
    return Number(num1) + Number(num2);
}

const subtract = (num1, num2) => {
    return Number(num1) - Number(num2);
}

const divide = (num1, num2) => {
    return Number(num1) / Number(num2);
}

const multiple = (num1, num2) => {
    return Number(num1) * Number(num2);
}

const operator = (num1, num2, operator) => {

    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '/':
            return divide(num1, num2);
        case '*':
            return multiple(num1, num2);
    }
}

const mainScreen = document.querySelector('.screen-value');
const calButtons = document.querySelectorAll('button');
let firstOperand = '';
let secondOperand = '';
let operatorOperand = '';
let displayValue = '';
let finalValue = ''

calButtons.forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
        const button = e.target.value;
        screenDisplay(button);
    });
});

const screenDisplay = function (buttons) {

    if ((!isNaN(buttons))) {
        displayFirstNumber(buttons);
    }

    if (buttons === "+" || buttons === "-" || buttons === "/" || buttons === "*") {
        selectedOperator(buttons);
    }

    if ((!isNaN(buttons)) && operatorOperand !== "") {
        displaySecondNumber(buttons);
    }

    if (buttons.includes("AC")) {
        clearDisplay();
    }
}

const displayFirstNumber = function (numericalButtons) {

    firstOperand += numericalButtons;
    displayValue = firstOperand;
    mainScreen.textContent = displayValue;

}

const selectedOperator = function (operatorButtons) {

    operatorOperand = operatorButtons;

}

const displaySecondNumber = function (numericalButtons) {

    secondOperand += numericalButtons;
    displayValue = secondOperand;
    mainScreen.textContent = displayValue;

}

const updateDisplay = function () {
}

const clearDisplay = function () {

    firstOperand = '';
    secondOperand = '';
    operatorOperand = '';
    displayValue = '';
    finalValue = '';
    mainScreen.textContent = 0;

}

// Create Screen Display Function
// Create Display First Number Function
// Create Display Second Number Function
// Create Display Final Number Value Function
// Create Clear Display Function

/*
    User enter in the first Number it can be a decimal point!
    If operator Operand
*/