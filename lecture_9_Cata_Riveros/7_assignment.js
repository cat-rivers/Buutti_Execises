const numbers = [4, 19, 7, 1, 9, 22, 6, 13];

const sortNumberArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++)
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        console.log(numbers);
      }
  }
  return numbers;
};

console.log(sortNumberArray(numbers));
