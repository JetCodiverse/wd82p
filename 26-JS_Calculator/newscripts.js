const displayHistory = document.getElementById("history");
const mainDisplay = document.getElementById("display");

const clearAllButton = document.querySelector(".all-clear-btn");
const clearButton = document.querySelector(".clear-btn");
const numberButtons = document.querySelectorAll(".num-btns");
const operationButtons = document.querySelectorAll(".oper-btns");
const equalsButton = document.querySelector(".equals-btn");

let currentNumber = "";
let previousNumber = "";
let operation = "";
let history = "";

function updateDisplay() {
  if (previousNumber !== "" && operation !== "" && currentNumber !== "") {
    mainDisplay.value = `${previousNumber}${operation}${currentNumber}`;
  } else {
    mainDisplay.value = currentNumber;
  }
  displayHistory.value = history;
}

clearAllButton.addEventListener("click", function () {
  currentNumber = "";
  previousNumber = "";
  operation = "";
  history = "";

  updateDisplay();
});

clearButton.addEventListener("click", function () {
  if (currentNumber !== "") {
    currentNumber = currentNumber.slice(0, 1);
  }
  updateDisplay();
});

numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", function (e) {
    console.log("number buttons has been clicked!");
  });
});

operationButtons.forEach((operationButton) => {
  operationButton.addEventListener("click", function (e) {
    console.log("operation buttons has been clicked!");
  });
});

equalsButton.addEventListener("click", function (e) {
  console.log("An equal button has been clicked!");
});
