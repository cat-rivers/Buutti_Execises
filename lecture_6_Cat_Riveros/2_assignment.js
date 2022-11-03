const number1 = 2;
const number2 = 10;
const number3 = 4;

const compileText = (t1, t2, t3) => {
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
  compileText(number1, number2, number3);
} 
else if (number2 > number1 && number2 > number3) {
  compileText(number2, number1, number3);
} 
else {
  compileText(number3, number1, number2);
}

/*_________different method without if/else_________


const arr = [number1, number2, number3];
const minNumber = arr.reduce((a, b) => {
  return a < b ? a : b;
});
const maxNumber = arr.reduce((a, b) => {
  return a > b ? a : b;
});
console.log(maxNumber, minNumber);

*/
