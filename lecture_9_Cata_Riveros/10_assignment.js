// IGNORE THIS EXERCISE... DID NOT SOLVE THIS :)

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
const arr = text.split("");

// const res = [...text].reduce((a, v) => {
//   return {...a, [v]: a[v] ? a[v] + 1 : 1};
// });
// console.log(res);
// AHHHGGGGGGGGGGGGGG
const result = new Array(26).fill(0);
console.log(result);
const index = Object.keys(charIndex);
console.log(index);
