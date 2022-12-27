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

//Clears class of all elements
function clear(element) {
    for(let i=element.length-1; i>=0; i--) {
        element[i].remove();
    }
}

//Deletes last input number
function deleteNumber(element) {
    element[element.length-1].remove();
}

//Gets full number input
function getNumber() {
    let sum='';
    let number=document.querySelectorAll('.current');
    for(let i=0; i<number.length; i++) {
        sum+=number[i].textContent;
    }
    return sum;
}

const current= document.getElementById('current');
const equation= document.getElementById('equation');
const currentText= document.getElementsByClassName('current');
const equationText= document.getElementsByClassName('equation');
const buttonClick= document.getElementsByClassName('input');
for (let i=0; i<buttonClick.length; i++) {
    buttonClick[i].addEventListener('click', function(event) {
        const content= document.createElement('p');
        if ((buttonClick[i].textContent === '+') ||
            (buttonClick[i].textContent === '-') ||
            (buttonClick[i].textContent === 'x') ||
            (buttonClick[i].textContent === '/')) {
            content.classList.add('equation');
            content.textContent= getNumber()+buttonClick[i].textContent;
            equation.appendChild(content);
            clear(currentText);
        }
        else if (buttonClick[i].textContent === '=') {
            content.classList.add('current');
            content.textContent= buttonClick[i].textContent;
            current.appendChild(content);
        }
        else if (buttonClick[i].textContent === 'CLEAR') {
            clear(currentText);
            clear(equationText);
        }
        else if (buttonClick[i].textContent === 'DELETE') {
            deleteNumber(currentText);
        }
        else {
            content.classList.add('current');
            content.textContent= buttonClick[i].textContent;
            current.appendChild(content);
        }
    });
}
console.log(getNumber());
