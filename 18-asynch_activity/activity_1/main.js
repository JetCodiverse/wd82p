let balance = 1000;

let transaction1 = 500;
let balanceUpdate1 = balance + transaction1;

let transaction2 = 200;
let balanceUpdate2 = balanceUpdate1 - transaction2;

let transaction3 = 1000;
let finalBalance = balanceUpdate2 - transaction3;

console.log(balance);
console.log(balanceUpdate1);
console.log(balanceUpdate2);
console.log(finalBalance);
