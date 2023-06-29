let displayValue = '0',
    firstOperand = null,
    secondOperand = null,
    firstOperator = null,
    secondOperator = null,
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

function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(Number(num1), Number(num2));
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    }
}


function updateDisplay() {
    const displayContainer = document.querySelector('.display-container');
    displayContainer.textContent = displayValue;
}

updateDisplay();

function clickButton() {
    for(let i=0; i<buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if(buttons[i].classList.contains('operand')) {
                console.log(buttons[i].value);
                inputOperand(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('operator')) {
                console.log(buttons[i].value);
                inputOperator(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('equals')) {
                inputEquals();
                updateDisplay();
            }
        })
    }
}
clickButton()

function inputOperand(operand) {
//     if(displayValue === '0' || displayValue === 0) {
//         displayValue = operand;
//     } else {
//         displayValue += operand;
//     }
//     if(displayValue === firstOperand) {
//         displayValue = operand;
//     } else {
//         displayValue += operand;
//     }
// }
    if(firstOperator === null) {
        if(displayValue === '0' || displayValue === 0) {
            displayValue = operand;
        } else if(displayValue === firstOperand) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    } else {
        if(displayValue === firstOperand) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }

    }

}

function inputOperator(operator) {
    firstOperator = operator;
    firstOperand = displayValue;
    console.log(firstOperand, firstOperator);
    
}

function inputEquals() {
    secondOperand = displayValue;
    result = operate(firstOperator, firstOperand, secondOperand);
    displayValue = result;
    
    console.log(secondOperand, result);
}



