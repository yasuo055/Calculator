let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetInputs = false;

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.getElementById("equalsBtn");
const clearButton = document.getElementById("clearBtn");
const deleteButton = document.getElementById("deleteBtn");
const pointButton = document.getElementById("pointBtn");
const lastOperationInputs = document.getElementById("lastOperationInputs");
const currentOperationInputs = document.getElementById(
  "currentOperationInputs"
);

window.addEventListener("keydown", handleKeyboardInput);
equalsButton.addEventListener("click", evaluate);
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteNumber);
pointButton.addEventListener("click", appendPoint);

numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => setOperation(button.textContent))
);

function appendNumber(number) {
  if (currentOperationInputs.textContent === "0" || shouldResetInputs)
    resetInputs();
  currentOperationInputs.textContent += number;
}

function resetInputs() {
  currentOperationInputs.textContent = "";
  shouldResetInputs = false;
}

function clear() {
  currentOperationInputs.textContent = "0";
  lastOperationInputs.textContent = "";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
}

function appendPoint() {
  if (shouldResetInputs) resetInputs();
  if (currentOperationInputs.textContent === "")
    currentOperationInputs.textContent = "0";
  if (currentOperationInputs.textContent.includes(".")) return;
  currentOperationInputs.textContent += ".";
}

function deleteNumber() {
  currentOperationInputs.textContent = currentOperationInputs.textContent
    .toString()
    .slice(0, -1);
}

function setOperation(operator) {
  if (currentOperation !== null) evaluate();
  firstOperand = currentOperationInputs.textContent;
  currentOperation = operator;
  lastOperationInputs.textContent = `${firstOperand} ${currentOperation}`;
  shouldResetInputs = true;
}

function evaluate() {
  if (currentOperation === null || shouldResetInputs) return;
  if (currentOperation === "÷" && currentOperationInputs.textContent === "0") {
    alert("You can't divide by 0!");
    return;
  }
  secondOperand = currentOperationInputs.textContent;
  currentOperationInputs.textContent = roundResult(
    operate(currentOperation, firstOperand, secondOperand)
  );
  lastOperationInputs.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
  currentOperation = null;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function handleKeyboardInput(e) {
  if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
  if (e.key === ".") appendPoint();
  if (e.key === "=" || e.key === "Enter") evaluate();
  if (e.key === "Backspace") deleteNumber();
  if (e.key === "Escape") clear();
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
    setOperation(convertOperator(e.key));
}

function convertOperator(keyboardOperator) {
  if (keyboardOperator === "/") return "÷";
  if (keyboardOperator === "*") return "*";
  if (keyboardOperator === "+") return "+";
  if (keyboardOperator === "-") return "−";
}

function add(firstOperand, secondOperand) {
  return firstOperand + secondOperand;
}

function substract(firstOperand, secondOperand) {
  return firstOperand - secondOperand;
}

function multiply(a, secondOperand) {
  return firstOperand * secondOperand;
}

function divide(firstOperand, secondOperand) {
  return firstOperand / secondOperand;
}

function operate(operator, firstOperand, secondOperand) {
  firstOperand = Number(firstOperand);
  secondOperand = Number(secondOperand);
  switch (operator) {
    case "+":
      return add(firstOperand, secondOperand);
    case "−":
      return substract(firstOperand, secondOperand);
    case "*":
      return multiply(firstOperand, secondOperand);
    case "÷":
      if (secondOperand === 0) return null;
      else return divide(firstOperand, secondOperand);
    default:
      return null;
  }
}
