//Problem 2: Factorial of a Number: Write a JavaScript function called factorial that calculates the factorial of a given number. The factorial of a number n is the product of all positive integers from 1 to n.

function factorial(number) {
  if (number < 0) {
    return -1;
  } else if (number == 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(10));
