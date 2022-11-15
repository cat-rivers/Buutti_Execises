const months = [
  {month: "January", days: 31},
  {month: "February", days: 28},
  {month: "March", days: 31},
  {month: "April", days: 30},
  {month: "May", days: 31},
  {month: "June", days: 30},
  {month: "July", days: 31},
  {month: "August", days: 31},
  {month: "September", days: 30},
  {month: "October", days: 31},
  {month: "November", days: 30},
  {month: "December", days: 31},
];

const howManyDaysInMonth = (num) => {
  if (months[num - 1] === undefined) {
    console.log("error, not valid month");
  } else {
    console.log(`${months[num - 1].month} has ${months[num - 1].days} days`);
  }
};

howManyDaysInMonth(1);
howManyDaysInMonth(10);
howManyDaysInMonth(20);
