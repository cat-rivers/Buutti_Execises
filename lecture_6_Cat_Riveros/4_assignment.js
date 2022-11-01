//Logical operators

const score = 3;
const hoursPlayed = 100;
const price = 0;
const hoursToPriceRatio = hoursPlayed / price;
let isWorthPlaying =
  (score >= 4 && hoursToPriceRatio >= 4) ||
  (score >= 5 && hoursToPriceRatio >= 2);

if (isWorthPlaying) {
  console.log("Is worth paying");
} else {
  console.log("Is not worth it");
}

console.log(hoursToPriceRatio);
