//Problem 5: Palindrome Checker: Write a JavaScript function called isPalindrome that checks if a given string is a palindrome. A palindrome is a word, phrase, or sequence of characters that reads the same forwards and backwards, ignoring spaces, punctuation, and capitalization.

function isPalindrome(str) {
  let noSpecialStr = /[\W_]/g;
  let smallStr = str.toLowerCase();
  smallStr = smallStr.replace(noSpecialStr, "");

  let reverseStr = smallStr.split("");
  reverseStr = reverseStr.reverse();
  reverseStr = reverseStr.join("");

  return reverseStr === smallStr;
}

console.log(isPalindrome("race car"));
console.log(isPalindrome("A man, a plan, a canal. Panama"));
console.log(isPalindrome("My age is 0, 0 si ega ym."));
console.log(isPalindrome("0_0 (: /- :) 0–0"));
console.log(isPalindrome("not a palindrome"));
console.log(isPalindrome("nope"));
console.log(isPalindrome("almostomla"));
console.log(isPalindrome("1 eye for of 1 eye."));
