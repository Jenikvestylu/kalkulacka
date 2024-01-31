function calculate() {
    var inputField1 = document.getElementById("inputField1");
    var inputField2 = document.getElementById("inputField2");
    var selectedOperation = document.getElementById("selectOperation").value;
    var resultElement = document.getElementById("result");
  
    var value1 = parseFloat(inputField1.value);
    var value2 = parseFloat(inputField2.value);
  
    if (isNaN(value1) || isNaN(value2)) {
      resultElement.textContent = "Zadejte platná čísla.";
      return;
    }
  
    var result;
    switch (selectedOperation) {
      case "add":
        result = value1 + value2;
        break;
      case "subtract":
        result = value1 - value2;
        break;
      case "multiply":
        result = value1 * value2;
        break;
      case "divide":
        if (value2 !== 0) {
          result = value1 / value2;
        } else {
          result = "Nelze dělit nulou.";
        }
        break;
      case "factorial":
        result = factorial(value1);
        break;
      case "fibonacci":
        result = fibonacci(value1);
        break;
      case "cos":
        result = Math.cos(value1);
        break;
      case "sin":
        result = Math.sin(value1);
        break;
      case "log":
        result = Math.log(value1);
        break;
      default:
        result = "Nepodporovaná operace";
    }
  
    // Zobrazení výsledku
    resultElement.textContent = "Výsledek: " + result;
  }
  
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  