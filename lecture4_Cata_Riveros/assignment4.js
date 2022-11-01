// Seconds in a Year

const daysInYear = 365;
const hoursInDay = 24;
const secondsInHour = 3600;
const secondsInYear = secondsInHour * hoursInDay * daysInYear;
const numberToDisplay = new Intl.NumberFormat().format(secondsInYear);
console.log("Seconds in a year =", numberToDisplay);
