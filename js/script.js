const add = function(firstInteger, secondInteger) {
    return parseFloat(firstInteger) + parseFloat(secondInteger);
}

const subtract = function(firstInteger, secondInteger) {
    return parseFloat(firstInteger) - parseFloat(secondInteger);

}

const divide = function(firstInteger, secondInteger) {
    return secondInteger === "0" ? "Error" : parseFloat(firstInteger) / parseFloat(secondInteger);
}

const multiply = function(firstInteger, secondInteger) {
    return parseFloat(firstInteger) * parseFloat(secondInteger);

}

const equal = function(operand, firstInteger, secondNumber) {

    switch (operand) {
        case '+': return add(firstInteger, secondNumber);
        case '-': return subtract(firstInteger, secondNumber);
        case '/': return divide(firstInteger, secondNumber);
        case '*': return multiply(firstInteger, secondNumber);
        default: return "";
    }

}

const calculatorButtons = document.querySelectorAll('button');
const secondaryScreenDisplay = document.querySelector('.upper-screen');
const primaryScreenDisplay = document.querySelector('.main-screen');
let firstNumber = '';
let secondNumber = '';
let operatorSign = '';
let displayValue = '';
let finalValue = '';

calculatorButtons.forEach((button) => {
    button.addEventListener("click", (e) => {

        const button = e.target.value;

        switch (true) {
            case ((!isNaN(button)) || button === "."):
                getInputOperands(button);
                break;
            case ["+", "-", "/", "*"].includes(button):
                getInputOperator(button);
                break;
            case button === "=":
                getInputResult();
                break;
            case button === "AC":
                getClearScreen();
                break;
            case button === "plus-minus":
                togglePlusMinus();
                break;
            case button === "delete":
                deleteInputResult();
                break;
            case button === "Shift %":
                getInputPercent();
                break;
        }

    });
});

const getInputOperands = function (button) {
    let currentOperand = operatorSign === "" ? firstNumber : secondNumber;

    if (button === "." && currentOperand.includes(".")) return;
    if (button === "0" && currentOperand === "") return;
    if (button === "." && currentOperand === "") currentOperand = "0";

    currentOperand += button;

    if (operatorSign === "") {
        firstNumber = currentOperand;
    } else {
        secondNumber = currentOperand;
    }

    displayValue = currentOperand;
    primaryScreenDisplay.textContent = displayValue;
}

const getInputOperator = function (button) {

    if (firstNumber === "") return;

    if (secondNumber !== "") {
        getInputResult();
    }

    operatorSign = button;
    secondaryScreenDisplay.textContent = `${firstNumber} ${operatorSign}`;
}

const getInputResult = function () {

    if (firstNumber !== "" && secondNumber !== "") {
        finalValue = equal(operatorSign, firstNumber, secondNumber);

        if (!isFinite(finalValue)) {
            displayValue = 'Error';
            getClearScreen();
        } else{
            displayValue = finalValue;
            primaryScreenDisplay.textContent = displayValue;
            secondaryScreenDisplay.textContent = `${firstNumber} ${operatorSign} ${secondNumber}`;

            firstNumber = finalValue;
            secondNumber = '';
            operatorSign = '';
        }
    }
}

const getClearScreen = function () {

    firstNumber = '';
    secondNumber = '';
    operatorSign = '';
    displayValue = '';
    finalValue = '';
    secondaryScreenDisplay.textContent = '';
    primaryScreenDisplay.textContent = '0';

}

const togglePlusMinus = function () {

    if (operatorSign === "") {
        if (firstNumber === "") return;
        firstNumber = firstNumber.startsWith("-") ? firstNumber.slice(1) : "-" + firstNumber;
        displayValue = firstNumber;
    } else {
        if (secondNumber === "") return;
        secondNumber = secondNumber.startsWith("-") ? secondNumber.slice(1) : "-" + secondNumber;
        displayValue = `(${secondNumber})`;
    }

    primaryScreenDisplay.textContent = displayValue;
}

const deleteInputResult = function () {
    let currentNumber = operatorSign === "" ? firstNumber : secondNumber;

    if (currentNumber.length === 1) {
        currentNumber = "";
    } else {
        currentNumber = currentNumber.slice(0, -1);
    }

    if (operatorSign === "") {
        firstNumber = currentNumber;
    } else {
        secondNumber = currentNumber;
    }

    displayValue = currentNumber || "0";
    primaryScreenDisplay.textContent = displayValue;
}

const getInputPercent = function () {

    if (operatorSign === "") {
        if (firstNumber === "") return;
        firstNumber = firstNumber / 100;
        displayValue = firstNumber;
    } else {
        if (secondNumber === "") return;
        secondNumber = secondNumber / 100;
        displayValue = secondNumber;
    }

    primaryScreenDisplay.textContent = displayValue;
}