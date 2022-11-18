// IGNORE THIS EXERCISE... Not happy with this  :)

const charIndex = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

const text = "a black cat";

// **************
const counts = {...charIndex};
Object.keys(counts).forEach((key) => {
  //makes new object with values of 0
  counts[key] = 0;
});

// this is to include only letter, ignore spaces commas, etc
for (const l of text) {
  if (l.charCodeAt(0) >= 65 && l.charCodeAt(0) <= 122) {
    counts[l]++; //incerase count if letter is found
  }
}

// console.log(Object.values(counts)); // returns the object as array of values
// **************

// **************

const result1 = [];
for (const i in charIndex) {
  result1.push(0);
}

for (const letter of text) {
  if (Object.keys(charIndex).includes(letter)) {
    result1[charIndex[letter] - 1]++;
  }
}
// console.log(result1);

// **************
//This one is mine from Friday morning
const myArr = new Array(26).fill(0);

for (l of text) {
  if (Object.keys(charIndex).includes(l)) {
    myArr[charIndex[l] - 1]++;
  }
}

console.log(myArr);
