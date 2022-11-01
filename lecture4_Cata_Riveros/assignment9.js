//Game income

let playerIncome1 = 120;
let playerIncome2 = 2500;

const differenceInIncome = playerIncome2 - playerIncome1;
console.log(
  "Difference between incomes before exponentiation : " + differenceInIncome
);

//After applying exponentiation  we print the new difference
const tax = 0.8;
playerIncome1 = playerIncome1 ** tax;
playerIncome2 = playerIncome2 ** tax;
const differenceAfterTax = playerIncome2 - playerIncome1;
console.log(
  "Difference between incomes after exponentiation : ",
  differenceAfterTax.toFixed(2)
);
