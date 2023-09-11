const add7 = (num) => num + 7;
console.log(add7(20));

const multiply = (num1, num2) => num1 * num2;
console.log(multiply(3, 4));

const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
console.log(capitalize("jeter"));
console.log(capitalize("traJanO"));
console.log(capitalize("rEwSF"));

const lastLetter = (str) => str.charAt(str.length - 1);
console.log(lastLetter("qwerty"));
