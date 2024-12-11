let currentInput = "";
let currentOperation = "";
let previousInput = "";

const display = document.getElementById("display");

function appendNumber(number) {
  currentInput += number.toString();
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  currentOperation = "";
  display.value = "0";
}

function setOperation(operator) {
  if (currentInput === "") return;

  if (previousInput !== "") {
    calculateResult();
  }

  currentOperation = operator;
  previousInput = currentInput;
  currentInput = "";
}

function calculateResult() {
  if (currentInput === "" || previousInput === "") return;

  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (currentOperation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      if (current === 0) {
        result = "Error";
      } else {
        result = prev / current;
      }
      break;
    default:
      return;
  }

  currentInput = result.toString();
  currentOperation = "";
  previousInput = "";
  display.value = currentInput;
}
