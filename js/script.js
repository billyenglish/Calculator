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
let integer1 = '';
let integer2 = '';
let operatorValue = '';
let displayValue = '';
let finalValue = ''

calButtons.forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
        const button = e.target.value;

        if (button === button) {

            if (!isNaN(button) && operatorValue === '') {
                integer1 += button;
                mainScreen.textContent = integer1;
                console.log(integer1);
            } else {
                if (!isNaN(button)) {
                    integer2 += button;
                    mainScreen.textContent = integer2;
                    console.log(integer2);
                }
            }

            if (button === "+" || button === "-" || button === "*" || button === "/") {
                operatorValue = button;
                console.log(button);
            }

            if (button === '=') {
                finalValue = (operator(integer1, integer2, operatorValue));
                mainScreen.textContent = finalValue;
            }
        }
    });
});