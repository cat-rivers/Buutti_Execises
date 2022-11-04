// How many days

const days30 = [4, 6, 9, 11];
const days31 = [1, 3, 5, 7, 8, 10, 12];
const months = 
    ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const month = 4;


if(month > 0 && month <= 12)
{
  if (days30.includes(month)) {
    console.log(`${months[month-1]} has 30 days`);
  } 
  if (days31.includes(month)) {
    console.log(`${month[months-1]} has 31 days`);
  }
  if (month === 2) {
    console.log("has 28 days");
  }
}
else{console.log("not valid month")}



//______Switch case_________

const monthNum = 12;


switch (monthNum) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log(`${months[monthNum-1]} has 31 days`)
   
    break;

  case 4:
  case 6:
  case 9:
  case 11:
    console.log(`${months[monthNum-1]} has 30 days`)
    break;

  case 2:
    console.log(`${months[monthNum-1]} has 28 days`)
    break;

  default:
    console.log("Invalid month");
}

