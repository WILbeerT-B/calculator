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

let numOne = 0, 
    numTwo = 0, 
    operator;

function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    }
}

console.log(operate("-", 3, 6));