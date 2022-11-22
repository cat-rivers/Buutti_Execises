const numbers = [4, 7, 1, 8, 5];

// a) Increment

const incrementAll = (array) => {
  const result = array.map( element => element+1)
   return result;
};

console.log(incrementAll(numbers));

// b) Decrement

const decrementAll = (array) => {
  const result = array.map(element => element - 1)
  return result;
};

console.log( decrementAll(numbers));