const addition = (num1, num2) => num1 + num2;
const subtraction = (num1, num2) => num1 - num2;
const multiplication = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

const calculator = function(num1, num2, operator) {
  
  if(isNaN(num1) || isNaN(num2)) return "Cannot complete operation with given inputs. Please try again.";

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

console.log(calculator(3, 9, "add"));
console.log(calculator(3.2, 9.4, "+"));
console.log(calculator(15, 9, "-"));
console.log(calculator(3, 9, "subtraction"));
console.log(calculator(4, 7, "times"))
console.log(calculator(2, 6, "*"))
console.log(calculator(81, 9, "divide"))
console.log(calculator(3, 0, "/"))