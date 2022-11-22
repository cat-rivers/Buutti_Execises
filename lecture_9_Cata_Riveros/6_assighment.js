const numbers = [4, 19, 7, 1, 9, 22, 6, 13];

//with loops from class

function versionA() {
  const findLargest = (array) => {
    let temp = 0;
    for (const num of array) {
      temp = num > temp ? num : temp;
    }
    return temp;
  };

  const largestOfArray = findLargest(numbers);
  console.log(largestOfArray);
}

versionA();

//With reduce

function versionB() {
  const findBiggest = (array) => {
    const biggest = array.reduce((a, b) => (a > b ? a : b));
    return biggest;
  };

  console.log(findBiggest(numbers));
}
versionB();
