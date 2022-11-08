const fruits = [
  {fruitName: "pear", weight: 178},
  {fruitName: "lemon", weight: 120},
  {fruitName: "apple", weight: 90},
  {fruitName: "mango", weight: 150},
];

// calculate average weight of fruits
const average = (fruits) => {
    let sum = 0
    let i = 0
    while(i < fruits.length){
      sum = sum + fruits[i].weight
      i++
    }
    const avg = sum/fruits.length
    return avg
}

//calculate  difference between weights and average 

for (i = 0; i < fruits.length; i++) {
  const diff = Math.abs(fruits[i].weight - average(fruits));
  fruits[i].differenceFromAverage = diff;
}


//use reduce to find the smallest difference
const smallestDiff = fruits.reduce((a, b) => {
  return  a.differenceFromAverage < b.differenceFromAverage 
          ? a 
          : b;
});

console.log(fruits)
console.log(`average weight of fruit: ${average(fruits)}`)
console.log(`Closest fruit to average weight: ${smallestDiff.fruitName}`);
