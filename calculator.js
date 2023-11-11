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
    document.getElementById("display").value = Math.sqrt(eval(document.getElementById("display").value));
}

function calculatePower() {
    document.getElementById("display").value = Math.pow(eval(document.getElementById("display").value), 2);
}

function calculateSin() {
    document.getElementById("display").value = Math.sin(eval(document.getElementById("display").value));
}

function calculateCos() {
    document.getElementById("display").value = Math.cos(eval(document.getElementById("display").value));
}

function calculateTan() {
    document.getElementById("display").value = Math.tan(eval(document.getElementById("display").value));
}
