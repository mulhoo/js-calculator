const addition = (num1, num2) => num1 + num2;
const subtraction = (num1, num2) => num1 - num2;
const multiplication = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

const calculator = function(input) {
  num1 = input.num1;
  num2 = input.num2;
  operator = input.operator;
  
  if (isNaN(num1) || isNaN(num2)) return "Cannot complete operation with given inputs. Please try again.";

  if(operator === "addition" || operator === "plus" || operator === "+" || operator === "add") {
    return addition(num1, num2);
  } else if (operator === "subtraction" || operator === "minus" || operator === "-" || operator === "subtract") {
    return subtraction(num1, num2);
  } else if (operator === "multiplication" || operator === "times" || operator === "*" || operator === "multiply") {
    return multiplication(num1, num2);
  } else if (operator === "division" || operator === "divided by" || operator === "/" || operator === "divide") {
    if (num2 === 0) return "Cannot divide by zero";
    return division(num1, num2); 
  } else { 
    return "Please input a valid operator";``
  }
}

const testAddition = {
  num1: 3,
  num2: 5,
  operator: "add",
}

const testAdditionDecimal = {
  num1: 3.4,
  num2: 5.2,
  operator: "+",
}

const testSubtraction = {
  num1: 3,
  num2: 5,
  operator: "subtraction",
}

const testSubtractionDecimal = {
  num1: 3.4,
  num2: 5.2,
  operator: "-",
}

const testMultiplication = {
  num1: 3,
  num2: 5,
  operator: "multiply",
}

const testMultiplicationDecimal = {
  num1: 3.4,
  num2: 5.2,
  operator: "*",
}

const testDivision = {
  num1: 3,
  num2: 3,
  operator: "/",
}

const testDivisionDecimal = {
  num1: 3.4,
  num2: 2.2,
  operator: "divide",
}

const testDivisionZero = {
  num1: 3,
  num2: 0,
  operator: "division",
}

console.log(calculator(testAddition));
console.log(calculator(testAdditionDecimal));
console.log(calculator(testSubtraction));
console.log(calculator(testSubtractionDecimal));
console.log(calculator(testMultiplication));
console.log(calculator(testMultiplicationDecimal));
console.log(calculator(testDivision));
console.log(calculator(testDivisionDecimal));
console.log(calculator(testDivisionZero));





