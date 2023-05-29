const displayContainer = document.querySelector('.display-container');
const d1 = document.createElement('p');
const d2 = document.createElement('p');

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

let num1 = "", 
    num2 = "",
    operator = "";

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
function populateDisplay() {
    const buttons = document.querySelectorAll('button');
    let input = "";
    let len = 0;
    buttons.forEach((button) => {
        button.addEventListener('click', event => {
            input += button.id;
            d1.textContent = input;
            if(button.id == "+" || button.id == "-" 
                || button.id == "/" || button.id == "*") {
                for (let i=0; i<input.length-1; i++) {
                    // console.log(getInputValue(num1.charAt(i)));
                    num1 += getInputValue(input.charAt(i));
                    console.log(num1);
                }
                len = input.length;
                operator = getInputValue(input.substring(len-1, len));
                console.log(operator);
                // console.log(len);
            }
            if(button.id == "=") {
                for (let i=len; i<input.length-1; i++) {
                    num2 += getInputValue(input.charAt(i));
                    console.log(num2); 
                }
                console.log(operate(operator, num1, num2));
            }
        });
        displayContainer.appendChild(d1);
    });
}
function getInputValue(num) {
    return num;
}

populateDisplay();