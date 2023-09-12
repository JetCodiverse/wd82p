//Problem 3: Reverse a String: Write a JavaScript function called reverseString that takes a string as input and returns the reversed string.

function reverseString(str) {
  let string = str.split("");
  string = string.reverse();
  string = string.join("");

  return string;
}

console.log(reverseString("Javascript"));
