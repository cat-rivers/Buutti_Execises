// How many days

const days30 = [4, 6, 9, 11];
const days31 = [1, 3, 5, 7, 8, 10, 12];
const month = 12;

if (days30.includes(month)) {
  console.log(`Month ${month} has 30 days`);
} else if (days31.includes(month)) {
  console.log(`Month ${month} has 31 days`);
} else {
  console.log("The month has 28 days");
}
