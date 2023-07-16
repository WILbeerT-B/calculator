let displayValue = '0',
    displayValue1 = '',
    firstOperand = null,
    secondOperand = null,
    operator = null,
    result = null,
    roundResult = null;
const buttons = document.querySelectorAll('button');

function operate(op, num1, num2) {
    if(op === "+") {
        return num1 + num2;
    } else if(op === "-") {
        return num1 - num2
    } else if(op === "/") {
        if(num2 === 0) {
            return 'ERROR';
        } else {
            return num1 / num2;
        }
    } else if(op === "*") {
        return num1 * num2;
    }
}

function updateDisplay() {
    const displayContainer = document.getElementById('display-container');
    displayContainer.innerText = displayValue;
    const displayContainer1 = document.getElementById('display-container1');
    displayContainer1.innerText = displayValue1;
    if(displayValue.length > 9) {
        displayContainer.textContent = displayValue.substring(0, 9);
    }
    if(displayValue1.length > 10) {
        displayContainer1.textContent = displayValue1.substring(0, 10);
    }
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
            } else if(buttons[i].classList.contains('decimal')) {
                inputDecimal(buttons[i].value);
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
            displayValue1 = operand;
        } else if(displayValue === firstOperand) {
            displayValue = operand;
            displayValue1 = operand;
        } else if(displayValue === result) {
            displayValue = operand;
        } else {
            displayValue += operand;
            displayValue1 += operand;
        }
    } else {
        if(displayValue === '0' || displayValue === 0) {
            displayValue = operand;
            displayValue1 += operand;
        } else if(displayValue === firstOperand) {
            displayValue = operand;
            displayValue1 += operand;
        } else if(displayValue === roundResult) {
            displayValue = operand;
            displayValue1 += operand;
        } else {
            displayValue += operand;
            displayValue1 += operand;
        }
    }
}

function inputOperator(op) {
    if(firstOperand === null) {
        firstOperand = displayValue;
        operator = op;
        displayValue1 = displayValue + operator;
    } else {
        secondOperand = displayValue;
        displayValue1 = displayValue + operator;
        result = operate(operator, Number(firstOperand), Number(secondOperand));
        operator = op;
        roundResult = roundNumber(result, 15).toString();
        displayValue = roundResult;
        displayValue1 = roundNumber(result, 15).toString() + operator;
        firstOperand = result;
    }
}

function inputEquals() {
    if(operator !== null) {
        secondOperand = displayValue;
        result = operate(operator, Number(firstOperand), Number(secondOperand));
        if(result === 'ERROR') {
            displayValue = 'ERROR';
            displayValue1 = '';
        } else {
            roundResult = roundNumber(result, 15).toString();
            displayValue = roundResult;
            firstOperand = null;
        }
    } else {
        displayValue = displayValue;
        displayValue1 = displayValue1;
    }
}

function clearDisplay() {
    displayValue = '0';
    displayValue1 = '';
    firstOperand = null;
    secondOperand = null;
    operator = null;
}
clearDisplay();

function inputDecimal(dot) {
    if(displayValue === firstOperand || displayValue === secondOperand) {
        displayValue = '0';
        displayValue1 = '0';
        displayValue += dot;
        displayValue1 += dot;
    } else if(!displayValue.includes(dot)) {
        displayValue += dot;
        displayValue1 += dot;
    }
}

function roundNumber(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}