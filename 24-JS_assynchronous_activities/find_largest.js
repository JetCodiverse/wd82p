//Problem 4: Find the Largest Number in an Array: Write a JavaScript function called findLargestNumber that takes an array of numbers as input and returns the largest number in the array.

// function findLargestNumber(arrNumbers) {
//   let largestNumber = arrNumbers[0];

//   for (let i = 0; i < arrNumbers.length; i++) {
//     if (arrNumbers[i] > largestNumber) {
//       largestNumber = arrNumbers[i];
//     }
//   }
//   return largestNumber;
// }

// console.log(findLargestNumber([1, 12, 31, 47, 51]));

function findLargestNumber(arr) {
  return Math.max(...arr);
}

console.log(findLargestNumber([5, 1, 55, 1123, 123]));
