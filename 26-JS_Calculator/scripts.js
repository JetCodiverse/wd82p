const display = document.getElementById("display");
const historyDisplay = document.getElementById("history");
const allClearBtn = document.querySelector(".all-clear-btn");
const clearBtn = document.querySelector(".clear-btn");
const equalsBtn = document.querySelector(".equals-btn");
const numBtns = document.querySelectorAll(".num-btns");
const operBtns = document.querySelectorAll(".oper-btns");

let currentNumber = "";
let prevNumber = "";
let operation = "";
let history = "";

function getComputation(prevNum, currentNum, operator) {
  const prev = parseFloat(prevNum);
  const current = parseFloat(currentNum);

  switch (operator) {
    case "+":
      return prev + current;
    case "-":
      return prev - current;
    case "*":
      return prev * current;
    case "/":
      return prev / current;
    default:
      return NaN;
  }
}

function updateDisplay() {
  if (prevNumber !== "" && operation !== "" && currentNumber !== "") {
    display.value = `${prevNumber} ${operation} ${currentNumber}`;
  } else {
    display.value = currentNumber;
  }
  historyDisplay.value = history;
}

function handleEqualsClick() {
  if (currentNumber !== "" && prevNumber !== "" && operation !== "") {
    const result = getComputation(prevNumber, currentNumber, operation);
    if (!isNaN(result)) {
      history = `${prevNumber} ${operation} ${currentNumber} = ${result}`;
      currentNumber = result.toString();
      prevNumber = "";
      operation = "";
      updateDisplay();
    }
  }
}

equalsBtn.addEventListener("click", handleEqualsClick);

allClearBtn.addEventListener("click", function () {
  prevNumber = "";
  currentNumber = "";
  operation = "";
  history = "";
  updateDisplay();
});

clearBtn.addEventListener("click", function () {
  if (currentNumber !== "") {
    currentNumber = currentNumber.slice(0, -1);
    updateDisplay();
  }
});

numBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", function (e) {
    if (currentNumber === "" || currentNumber === "0") {
      currentNumber = e.target.value;
    } else if (!currentNumber.includes(".") || e.target.value !== ".") {
      currentNumber += e.target.value;
    }
    updateDisplay();
  });
});

operBtns.forEach((operBtn) => {
  operBtn.addEventListener("click", function (e) {
    if (prevNumber === "" && currentNumber !== "") {
      prevNumber = currentNumber;
      currentNumber = "";
    }
    operation = e.target.value;
    updateDisplay();
  });
});
