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
}else{
  console.log("not a valid month")
}

//Switch case

const monthNum = 3;
let days;

switch (monthNum) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31
    break;

  case 4:
  case 6:
  case 9:
  case 11:
    days =30;
    break;

  case 2:
    days = 28;
    break;

  default:
    console.log("Invalid month");
}
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
console.log(`${months[monthNum-1]} has ${days} days`)