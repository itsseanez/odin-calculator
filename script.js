let operation = '';
const add= (a, b) => a + b;
const subtract= (a, b) => a - b;
const multiply= (a, b) => a * b;
const divide= (a, b) => a / b;
function operate(operation, a, b) {
    if(operation === '+') {
        return add(a, b);
    }
    else if(operation === '-') {
        return subtract(a, b);
    }
    else if(operation === '*') {
        return multiply(a, b);
    }
    else if(operation === '/') {
        return divide(a, b);
    }
}
