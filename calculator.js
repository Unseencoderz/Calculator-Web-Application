function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculateResult() {
  try {
    document.getElementById("display").value = eval(document.getElementById("display").value);
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function calculateSquareRoot() {
  try {
    document.getElementById("display").value = Math.sqrt(eval(document.getElementById("display").value));
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function calculatePower() {
  try {
    document.getElementById("display").value = Math.pow(eval(document.getElementById("display").value), 2);
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function calculateSin() {
  try {
    document.getElementById("display").value = Math.sin(eval(document.getElementById("display").value)).toFixed(4);
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function calculateCos() {
  try {
    document.getElementById("display").value = Math.cos(eval(document.getElementById("display").value)).toFixed(4);
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function calculateTan() {
  try {
    document.getElementById("display").value = Math.tan(eval(document.getElementById("display").value)).toFixed(4);
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
