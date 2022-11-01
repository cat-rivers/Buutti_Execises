const number1 = 10;
const number2 = 10;
const number3 = 11;

// if (number1 === number2 && number1 === number3){
//     console.log("they are all the same number")
// }else if(number1 > number2 && number1 > number3){

// }

const largestNumber = Math.max(number1, number2, number3);
const smallestNumber = Math.min(number1, number2, number3);

if (largestNumber > smallestNumber) {
  console.log(`${largestNumber} is the largest.`);
  if (smallestNumber < largestNumber) {
    console.log(`${smallestNumber} is the smallest.`);
  }
} else {
  console.log(`All numbers are equal.`);
}
