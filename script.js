let displayValue = '0',
    firstOperand = null,
    secondOperand = null,
    operator = null,
    result = null;
const buttons = document.querySelectorAll('button');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function operate(op, num1, num2) {
    if (op === "+") {
        return add(Number(num1), Number(num2));
    } else if (op === "-") {
        return subtract(num1, num2);
    } else if (op === "/") {
        return divide(num1, num2);
    } else if (op === "*") {
        return multiply(num1, num2);
    }
}

function updateDisplay() {
    const displayContainer2 = document.querySelector('.display-container2');
    displayContainer2.textContent = displayValue;
}
updateDisplay();

function clickButton() {
    for(let i=0; i<buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if(buttons[i].classList.contains('operand')) {
                inputOperand(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('operator')) {
                inputOperator(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('equals')) {
                inputEquals();
                updateDisplay();
            } else if(buttons[i].classList.contains('clear')) {
                clearDisplay();
                updateDisplay();
            }
        })
    }
}
clickButton()

function inputOperand(operand) {
    if(firstOperand === null) {
        if(displayValue === '0' || displayValue === 0) {
            displayValue = operand;
        } else if(displayValue === firstOperand) {
            displayValue = operand;
        } else if(displayValue === result) {
            displayValue = operand; 
        } else {
            displayValue += operand;
        }
    } else {
        if(displayValue === '0' || displayValue === 0) {
            displayValue = operand;
        } else if(displayValue === firstOperand) {
            displayValue = operand;
        } else if(displayValue === result) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    }
}

function inputOperator(op) {
    if(firstOperand === null) {
        firstOperand = displayValue;
        operator = op;
    } else {
        secondOperand = displayValue;
        result = operate(operator, firstOperand, secondOperand);
        displayValue = result;
        operator = op;
        firstOperand = result;
    }
}

function inputEquals() {
    if(operator !== null) {
        secondOperand = displayValue;
        result = operate(operator, firstOperand, secondOperand);
        displayValue = result;
        firstOperand = null;
    } else {
        displayValue = '0';
    }
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    operator = null;
}
clearDisplay();