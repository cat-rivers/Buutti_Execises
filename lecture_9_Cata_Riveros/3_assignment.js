//Insertion

const numbers = [1, 3, 4, 7, 11];

const numberInserter = (array, n) => {
  for (const i in array) {
    if (n < array[i]) {
      array.splice(i, 0, n);
      break;
    }
    if (n > array[array.length - 1]) {
      array.splice(array.length - i, 0, n);
    }
  }
  return numbers;
};

console.log(numberInserter(numbers, -2));
