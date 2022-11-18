const numbers = [8, 12, 17, 9, 16, 24, 16, 25, 35, 27, 38, 50];

// a)

for (num of numbers) {
  if (num > 20) {
    console.log(num);
    break;
  }
}

// b)

const overTwenty = numbers.find((number) => number > 20);
console.log(overTwenty);

// c)

let index = numbers.findIndex((number) => number > 20);
console.log(index);

// d) elements that come after the index <<-- this means index 6? or was it including the index?

numbers.splice(index + 1);
console.log(numbers);
