// How many days

const days30 = [4, 6, 9, 11];
const days31 = [1, 3, 5, 7, 8, 10, 12];
const month = 12;

if (days30.includes(month)) {
  console.log(`Month ${month} has 30 days`);
} else if (days31.includes(month)) {
  console.log(`Month ${month} has 31 days`);
} else if (month === 2) {
  console.log("The month has 28 days");
}

//Switch case

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log(`Month ${month} has 31 days`);
    break;

  case 4:
  case 6:
  case 9:
  case 11:
    console.log(`Month ${month} has 30 days`);
    break;

  case 2:
    console.log("The month has 28 days");
    break;

  default:
    console.log("Invalid month");
}
