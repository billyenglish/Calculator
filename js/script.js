// create function add, subtraction, multiplication, division.
// create operator function.
// There should be two variables num1 and num2.

// If the user input is a number and the operator variable is empty.
// It goes to the first variable it can only be numbers or it fails the conditions.
// It should go to the second variable and store the number.
// The condition is met and should have variable with the operator value.
// There should be if conditions for plus/minus, decimal, and percentage.

/*
    If zero is the only number selected disable the zero
*/

const add = (num1, num2) => {
    return Number(num1) + Number(num2);
}

const subtract = (num1, num2) => {
    return Number(num1) - Number(num2);
}

const divide = (num1, num2) => {
    if (num2 === 0) {
        return "Cannot divide by Zero";
    } else {
        return Number(num1) / Number(num2);
    }
}

const product = (num1, num2) => {
    return Number(num1) * Number(num2);
}

const operators = (num1, num2, operator) => {

    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '/':
            return divide(num1, num2);
        case '*':
            return product(num1, num2);
    }

}

const topScreen = document.querySelector('.upper-screen');
const bottomScreen = document.querySelector('.main-screen');
const calculatorButton = document.querySelectorAll("button");
let firstOperand = '';
let secondOperand = '';
let operatorValue = '';
let displayValue = '';
let finalValue = '';
let plusMinusValue = '';


calculatorButton.forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
        const calculationButtons = e.target.value;

        topScreenDisplay(calculationButtons);
        mainScreenDisplay(calculationButtons);
    });
});

const topScreenDisplay = (buttons) => {

    if (buttons === "clear") {
        topScreen.textContent = "";
    }

    if (buttons === "=" && finalValue) {
        topScreen.textContent = `${firstOperand} ${operatorValue} ${secondOperand} =`;
    } else if (["+", "-", "/", "*"].includes(buttons)) {
        topScreen.textContent = `${firstOperand} ${buttons}`;
    }

}

const mainScreenDisplay = (buttons) => {

    if ((!isNaN(buttons) || buttons === ".") && operatorValue === "") {
        displayFirstOperand(buttons);
    }

    if (buttons === "percent" && firstOperand) {
        firstOperand = (parseFloat(firstOperand) * 0.01).toString();
        displayValue = firstOperand;
        bottomScreen.textContent = displayValue;
    }

    if (buttons === "plus-minus" && firstOperand) {
        firstOperand = (parseFloat(-firstOperand)).toString();
        displayValue = firstOperand;
        bottomScreen.textContent = displayValue;
    }

    if (buttons === "delete" && firstOperand) {
        firstOperand = firstOperand.slice(0, -1);
        if (firstOperand === "") {
            displayValue = "0";
        } else {
            displayValue = firstOperand;
        }
        bottomScreen.textContent = displayValue;
    }

    if (["+", "-", "/", "*"].includes(buttons)) {
        operatorValue = buttons;
    }

    if ((!isNaN(buttons) || buttons === ".") && operatorValue !== "") {
        displaySecondOperand(buttons);
    }

    if (buttons === "percent" && secondOperand) {
        secondOperand *= .01;
        displayValue = secondOperand;
        bottomScreen.textContent = displayValue;
    }

    if (buttons === "plus-minus" && secondOperand && firstOperand !== undefined) {
        secondOperand = -secondOperand;
        displayValue = secondOperand;
        bottomScreen.textContent = displayValue;
    }

    if (buttons === "delete" && secondOperand !== "") {
        secondOperand = secondOperand.slice(0, -1);
        if (firstOperand === "") {
            displayValue = "0";
        } else {
            displayValue = secondOperand;
        }
        bottomScreen.textContent = displayValue;
    }

    if (buttons === "=" && firstOperand && secondOperand) {
        displayFinalValue(buttons);
    }

    if (buttons === "clear") {
        clearScreen();
    }

}

const displayFirstOperand = function (buttons) {

    if (buttons === "0" && firstOperand === "") {
        return;
    } else if (buttons === "." && firstOperand === "") {
        firstOperand = "0.";
    } else if (buttons === "." && firstOperand.includes(".")) {
        return;
    } else {
        firstOperand += buttons;
    }

    displayValue = firstOperand;
    bottomScreen.textContent = displayValue;

}

const displaySecondOperand = function (buttons) {

    if (buttons === "0" && secondOperand === "") {
        return;
    } else if (buttons === "." && secondOperand === "") {
        secondOperand = "0.";
    } else if (buttons === "." && secondOperand.includes(".")) {
        return;
    } else {
        secondOperand += buttons;
    }

    displayValue = secondOperand;
    bottomScreen.textContent = displayValue;

}

const displayFinalValue = function () {
    finalValue = operators(firstOperand, secondOperand, operatorValue);
    displayValue = finalValue;
    bottomScreen.textContent = displayValue
    firstOperand = finalValue ;
    secondOperand = '';
    operatorValue = '';
}

const clearScreen = () => {

    firstOperand = '';
    secondOperand = '';
    operatorValue = '';
    displayValue = ''; 
    finalValue = '';
    bottomScreen.textContent = "0";

}


// Create Screen Display Function
// Create Display First Number Function
// Create Display Second Number Function
// Create Display Final Number Value Function
// Create Clear Display Function
// Create Percent Display Function
// Create Decimal Display Function
// Create Delete Display Function

/*
    User enter in the first Number it can be a decimal point!
*/