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
    if (num2 == 0) {
        return "Cannot Divide By Zero";
    } else {
        return Number(num1) / Number(num2);
    }
}

const multiply = (num1, num2) => {
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
            return multiply(num1, num2);
    }
}

const mainScreen = document.querySelector('.screen-value');
const calButtons = document.querySelectorAll('button');
let firstOperand = '';
let secondOperand = '';
let selectOperator = '';
let displayValue = '';
let finalValue = '';

calButtons.forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
        const buttons = e.target.value;

        mainScreenDisplay(buttons)
    });
});

const mainScreenDisplay = function (calculatorButtons) {

    /* Variable for all the buttons on the container */

    const selectButton = calculatorButtons;

    if (((!isNaN(selectButton)) || selectButton === ".") && selectOperator === "") {
        displayFirstNumber(selectButton);
    }

    if (selectButton === "%" && firstOperand) {
        firstOperand *= .01;
        mainScreen.textContent = firstOperand;
    }

    if ((selectButton === "+") || (selectButton === "-") || (selectButton === "*") || (selectButton === "/")) {
        selectOperator = selectButton;
    }

    if (((!isNaN(selectButton)) || selectButton === ".") && selectOperator !== "") {
        displaySecondNumber(selectButton);
        return;
    }

    if (selectButton === "=" && firstOperand !== "" && secondOperand !== "") {
        updateScreenDisplay(firstOperand, secondOperand, selectOperator);
    }

    if (selectButton === "AC") {
        clearScreenDisplay();
    }
}

// If the decimal button is selected it should create a leading zero ahead of the decimal. It should be limited to one decimal.

const displayFirstNumber = (selectButton) => {

    if (selectButton === "0" && firstOperand === "") {
        return;
    } else if (selectButton === "." && firstOperand === "") {
        firstOperand = "0.";
    } else if (selectButton === "." && firstOperand.includes(".")) {
        return;
    } else {
        firstOperand += selectButton;
    }

    displayValue = firstOperand;
    mainScreen.textContent = displayValue;

}

const displaySecondNumber = (selectButton) => {

    if (selectButton === "0" && secondOperand === "") {
        return;
    } else if (selectButton === "." && secondOperand === "") {
        secondOperand = "0.";
    } else if (selectButton === "." && secondOperand.includes(".")) {
        return;
    } else {
        secondOperand += selectButton;
    }

    displayValue = secondOperand;
    mainScreen.textContent = displayValue;

}

const displayPercentValue = (firstOperand) => {
    console.log(firstOperand);
}

const updateScreenDisplay = (firstNumber, secondNumber, operatorValue) => {

    finalValue = operator(firstNumber, secondNumber, operatorValue);
    mainScreen.textContent = finalValue;
    firstOperand = finalValue;
    secondOperand = '';
    selectOperator = '';

}

const deleteScreenDisplay = function () {

}

const clearScreenDisplay = function () {

    firstOperand = '';
    secondOperand = '';
    selectOperator = '';
    displayValue = '';
    finalValue = '';
    mainScreen.textContent = 0;

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