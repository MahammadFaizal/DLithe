function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
        default:
            result = "Invalid Operation";
    }
    
    document.getElementById("result").innerText = `Result: ${result}`;
}
function convertToCelsius() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    if (fahrenheit === "") {
        document.getElementById("tempResult").innerText = "Please enter a value";
        return;
    }
    let celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("tempResult").innerText = `Celsius: ${celsius.toFixed(2)}°C`;
}
function convertToBinary() {
    let decimal = document.getElementById("decimal").value;
    if (decimal === "" || isNaN(decimal)) {
        document.getElementById("binaryResult").innerText = "Please enter a valid decimal number";
        return;
    }
    let binary = (parseInt(decimal, 10) >>> 0).toString(2);
    document.getElementById("binaryResult").innerText = `Binary: ${binary}`;
}
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function checkPrime() {
    let num = parseInt(document.getElementById("number").value);
    if (isNaN(num)) {
        document.getElementById("primeResult").innerText = "Please enter a valid number";
        return;
    }
    let message = isPrime(num) ? `${num} is a Prime Number` : `${num} is not a Prime Number`;
    document.getElementById("primeResult").innerText = message;
}

