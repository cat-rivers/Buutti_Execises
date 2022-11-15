// make a function that prints a range of numbers

const rangePrinter = (a, b) => {
  if (a < b) {
    for (let i = a; i <= b; i++) {
      console.log(i);
    }
  } else {
    for (let i = a; i >= b; i--) {
      console.log(i);
    }
  }
};

rangePrinter(10, 5);
