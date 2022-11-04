const number1 = 14;
const number2 = 10;
const number3 = 1;

const numberChecker = (t1, t2, t3) => {
  console.log(
    "largest number is: ",
    t1,
    "smallest number is: ",
    t2 > t3 ? t3 : t2
  );
};

if (number1 === number2 && number2 === number3) {
  console.log("They are the same");
} 
else if (number1 > number2 && number1 > number3) {
  numberChecker(number1, number2, number3);
} 
else if (number2 > number1 && number2 > number3) {
  numberChecker(number2, number1, number3);
} 
else {
  numberChecker(number3, number1, number2);
}

/*_________different method without if/else 
but also not using Math.min or max_________


const arr = [number1, number2, number3];
const minNumber = arr.reduce((a, b) => {
  return a < b ? a : b;
});
const maxNumber = arr.reduce((a, b) => {
  return a > b ? a : b;
});
console.log(maxNumber, minNumber);

*/
