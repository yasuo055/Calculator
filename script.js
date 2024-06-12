let firstNumber = '';
let secondNumber = '';
let operator = '';


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

function operate(){
    let result = `${firstNumber} ${operator} ${secondNumber}`
    return result;
}