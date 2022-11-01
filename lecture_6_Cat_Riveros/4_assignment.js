//Logical operators

const score = 3;
const hoursPlayed = 100;
const price = 0;
const hoursToPriceRatio = hoursPlayed / price;
let isWorthPlaying =
  (score >= 4 && hoursToPriceRatio >= 4) ||
  (score >= 5 && hoursToPriceRatio >= 2);

const result = isWorthPlaying ? "Is worth paying" : "Is not worth it";

console.log(hoursToPriceRatio);
console.log(result);
