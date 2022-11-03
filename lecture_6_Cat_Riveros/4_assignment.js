//Logical operators

const score = 5;
const hoursPlayed = 200;
const price = 100;
const hoursToPriceRatio = hoursPlayed / price;
let isWorthPlaying =
  (score >= 4 && hoursToPriceRatio >= 4) ||
  (score >= 5 && hoursToPriceRatio >= 2);

const result = isWorthPlaying 
    ? "Is worth paying" 
    : "Is not worth it";
    
console.log(result);
