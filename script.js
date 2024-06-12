let firstNumber = '';
let secondNumber = '';
let currentOperation = null
let shouldResetDisplay = false

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelector('equalsBtn')
const clearButton = document.querySelector('clearBtn')
const deleteButton = document.querySelector('deleteBtn')
const pointButton = document.querySelector('pointBtn')
const lastOperationDisplay = document.querySelector('lastOperationDisplay')
const currentOperationDisplay = document.querySelector('currentOperationDisplay')

function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '÷'
    if (keyboardOperator === '*') return '*'
    if (keyboardOperator === '-') return '−'
    if (keyboardOperator === '+') return '+'
  }


function getAddition(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}

function getSubtraction(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}

function getMultiplication(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}

function getDivide(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}

function operate(operator,firstNumber, secondNumber){
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    switch(operator){
        case '+':
            return getAddition(firstNumber, secondNumber)
        case '-':
            return getSubtraction(firstNumber, secondNumber)
        case '*':
            return getMultiplication(firstNumber, secondNumber)
        case '÷':
            if(b === 0) return null
            else return getDivide(firstNumber, secondNumber)
        default:
            return null
    }
}