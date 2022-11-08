const fruits = [
  {fruitName: "pear", weight: 178},
  {fruitName: "lemon", weight: 120},
  {fruitName: "apple", weight: 90},
  {fruitName: "mango", weight: 150},
];

// Calculate average weight of fruits

const avgWeight = fruits.reduce((a,b) => a + b.weight, 0)/ fruits.length;


//calculate  difference between weights and average 

for (i = 0; i < fruits.length; i++) {
  const diff = Math.abs(fruits[i].weight - avgWeight);
  fruits[i].differenceFromAverage = diff;
}

//find the smallest difference

const smallestDiff = fruits.reduce((a, b) => {
  return  a.differenceFromAverage < b.differenceFromAverage 
          ? a 
          : b;
});

console.log(fruits)
console.log(`average weight of fruit: ${avgWeight}`)
console.log(`Closest fruit to average weight: ${smallestDiff.fruitName}`);
