function calculate(parseEquation) {
    // Split the input string into an array of tokens
    const tokens = parseEquation.split(/\b/);
  
    // Initialize the stack for numbers and the stack for operators
    const numbers = [];
    const operators = [];
  
    // Define a map of operator precedences
    const precedences = {
      "x": 2,
      "/": 2,
      "+": 1,
      "-": 1
    };
  
    // Iterate through the tokens
    for (const token of tokens) {
      if (!isNaN(token)) {
        // If the token is a number, push it to the stack
        numbers.push(parseFloat(token));
      } else if (token in precedences) {
        // If the token is an operator,
        // check the precedence and perform the appropriate action
        while (operators.length > 0 && precedences[operators[operators.length - 1]] >= precedences[token]) {
          const op = operators.pop();
          const b = numbers.pop();
          const a = numbers.pop();
          numbers.push(eval(`${a} ${op} ${b}`));
        }
        operators.push(token);
      }
    }
  
    // Evaluate the remaining operators
    while (operators.length > 0) {
      const op = operators.pop();
      const b = numbers.pop();
      const a = numbers.pop();
      numbers.push(eval(`${a} ${op} ${b}`));
    }
  
    // Return the result
    console.log(typeof numbers[0])
    return numbers[0];
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

//Gets full equation
function getNumbers() {
    let sum='';
    let number=document.querySelectorAll('.current');
    for(let i=0; i<number.length; i++) {
        sum+=number[i].textContent;
    }
    return sum;
}

let parseEquation='';
const current= document.getElementById('current');
const equation= document.getElementById('equation');
const currentText= document.getElementsByClassName('current');
const equationText= document.getElementsByClassName('equation');
const buttonClick= document.getElementsByClassName('input');

//Gets number from equation
/*for(let i=0; i<equationText.length; i++) {
    parseEquation+=equationText[i].textContent;
}*/

for (let i=0; i<buttonClick.length; i++) {
    buttonClick[i].addEventListener('click', function(event) {
        const content= document.createElement('p');
        if ((buttonClick[i].textContent === '+') ||
            (buttonClick[i].textContent === '-') ||
            (buttonClick[i].textContent === 'x') ||
            (buttonClick[i].textContent === '/')) {
            content.classList.add('equation');
            content.textContent= getNumbers()+''+buttonClick[i].textContent+'';
            equation.appendChild(content);
            clear(currentText);
        }
        else if (buttonClick[i].textContent === '=') {
            for(let i=0; i<equationText.length; i++) {
                parseEquation+=equationText[i].textContent;
            }
            //clear(currentText);
            content.classList.add('current');
            content.textContent= ''+calculate(parseEquation);
            console.log(parseEquation);
            console.log(calculate(parseEquation));
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
            content.classList.add('equation','current');
            content.textContent= buttonClick[i].textContent;
            equation.appendChild(content);
        }
    });
}
