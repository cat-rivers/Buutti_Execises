const numberOfPeople = 6;
let piecesOfCandy = 100;

const piecesLeftOver = piecesOfCandy % numberOfPeople;
piecesOfCandy -= piecesLeftOver;
const candyPerPerson = piecesOfCandy / numberOfPeople;

console.log(
  "Each person gets " +
    candyPerPerson +
    " pieces of candy, But I get " +
    piecesLeftOver +
    " extra because I bought the candy :)"
);
