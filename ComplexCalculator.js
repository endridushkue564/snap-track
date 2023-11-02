/* 
   Filename: ComplexCalculator.js
   Description: A complex calculator that performs advanced mathematical operations.
*/

// Define a class for the calculator
class ComplexCalculator {
  constructor() {
    this.memory = 0; // Variable to store the memory value
  }

  // Method to add two numbers
  add(a, b) {
    return a + b;
  }

  // Method to subtract two numbers
  subtract(a, b) {
    return a - b;
  }

  // Method to multiply two numbers
  multiply(a, b) {
    return a * b;
  }

  // Method to divide two numbers
  divide(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      throw new Error("Cannot divide by zero");
    }
  }

  // Method to power a number to a given exponent
  power(base, exponent) {
    return Math.pow(base, exponent);
  }

  // Method to calculate the factorial of a number
  factorial(n) {
    if (n < 0) {
      throw new Error("Factorial of a negative number is undefined");
    }
    if (n == 0 || n == 1) {
      return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  // Method to calculate the square root of a number
  squareRoot(n) {
    if (n < 0) {
      throw new Error("Square root of a negative number is undefined");
    }
    return Math.sqrt(n);
  }

  // Method to store a value in memory
  storeInMemory(value) {
    this.memory = value;
  }

  // Method to retrieve the value stored in memory
  recallMemory() {
    return this.memory;
  }
}

// Example usage:
const calculator = new ComplexCalculator();
console.log("Result:", calculator.add(5, 10)); // Output: 15
console.log("Result:", calculator.subtract(10, 5)); // Output: 5
console.log("Result:", calculator.multiply(5, 10)); // Output: 50
console.log("Result:", calculator.divide(10, 5)); // Output: 2
console.log("Result:", calculator.power(2, 4)); // Output: 16
console.log("Result:", calculator.factorial(5)); // Output: 120
console.log("Result:", calculator.squareRoot(25)); // Output: 5
calculator.storeInMemory(100);
console.log("Memory:", calculator.recallMemory()); // Output: 100