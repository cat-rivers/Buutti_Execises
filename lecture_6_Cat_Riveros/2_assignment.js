const number1 = 0;
const number2 = 10;
const number3 = 1;

const minAndMaxChecker = (n1, n2, n3) => {
  let largest = n1;
  let smallest = n1;
  let result = "";
  let same = (n1==n2 && n1===n3)
  if(!same){
      if(n2 > largest){largest = n2}
      if(n3 > largest){largest = n3}
      if(n2 < smallest){smallest = n2}
      if(n3 < smallest){ smallest= n3}
      result = (`smallest: ${smallest}, largest: ${largest}`)
      return result
  }else{
      result = ("they are the same")
      return result
  }
};

console.log(minAndMaxChecker(number1,number2,number3))

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
