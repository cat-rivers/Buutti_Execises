const numbers = [4, 7, 1, 8, 5];

// a) Increment

const incrementAll = (array) => {
  const result = [];
  for (const i in array) {
    result[i] = array[i] + 1;
  }
  return result;
};

const numbersIncremented = incrementAll(numbers);
console.log(numbersIncremented);

// b) Decrement

const decrementAll = (array) => {
  const result = [];
  for (const i in array) {
    result[i] = array[i] - 1;
  }
  return result;
};

const numbersDecreased = decrementAll(numbers);
console.log(numbersDecreased);
