function displaySum() {
  let x = parseFloat(document.getElementById("var1").value);
  let y = parseFloat(document.getElementById("var2").value);
  let sum = x + y;
  document.getElementById("output1").innerHTML = "The sum is: " + sum;
}

// Function: Multiplication based on user input
function displayMultiplication() {
  let num1 = parseFloat(document.getElementById("func1").value);
  let num2 = parseFloat(document.getElementById("func2").value);
  let product = num1 * num2;
  document.getElementById("output2").innerHTML = "The product is: " + product;
}

// Condition (if...else): Check if user input is even or odd
function checkEvenOdd() {
  let number = parseInt(document.getElementById("conditionInput").value);
  let result = (number % 2 === 0) ? "even" : "odd";
  document.getElementById("output3").innerHTML = "The number is: " + result;
}


// Input Validation: Check if the input is between 1 and 10
function validateNumber() {
  let num = parseInt(document.getElementById("validateInput").value);
  let message = (num >= 1 && num <= 10) ? "Input OK" : "Input not valid";
  document.getElementById("output5").innerHTML = message;
}















/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Demo with User Input</title>
</head>
<body>
  <h2>JavaScript User Input Demonstrations</h2>

  <!-- JavaScript Variables with User Input -->
  <h3>Variables</h3>
  <p>Enter two numbers to add:</p>
  <input type="number" id="var1">
  <input type="number" id="var2">
  <button onclick="displaySum()">Calculate Sum</button>
  <p id="output1" class="output"></p>

  <!-- JavaScript Function with User Input -->
  <h3>Function</h3>
  <p>Enter two numbers to multiply:</p>
  <input type="number" id="func1">
  <input type="number" id="func2">
  <button onclick="displayMultiplication()">Multiply</button>
  <p id="output2" class="output"></p>

  <!-- JavaScript Condition (if...else) with User Input -->
  <h3>Condition (if...else)</h3>
  <p>Enter a number to check if it's even or odd:</p>
  <input type="number" id="conditionInput">
  <button onclick="checkEvenOdd()">Check</button>
  <p id="output3" class="output"></p>


  <!-- JavaScript Input Validation -->
  <h3>Input Validation</h3>
  <p>Enter a number between 1 and 10:</p>
  <input type="number" id="validateInput">
  <button onclick="validateNumber()">Validate</button>
  <p id="output5" class="output"></p>

  <script src="4.js"></script>
</body>
</html>


*/