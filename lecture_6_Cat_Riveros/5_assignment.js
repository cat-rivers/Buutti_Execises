// String length comparison

const n1 = "ana";
const n2 = "monica";
const n3 = "lina";

let first;
let second;
let third;
let result = "";

if (n1.length > n2.length && n1.length > n3.length) {
  first = n1;
  if (n2.length > n3.length) {
    second = n2;
    third = n3;
  } else {
    second = n3;
    third = n2;
  }
  result = first + " " + second + " " + third;
} else if (n2.length > n1.length && n2.length > n3.length) {
  first = n2;
  if (n1.length > n3.length) {
    second = n1;
    third = n3;
  } else {
    second = n3;
    third = n1;
  }
  result = first + " " + second + " " + third;
} else if (n3.length > n1.length && n3.length > n2.length) {
  first = n3;
  if (n2.length > n1.length) {
    second = n2;
    third = n1;
  } else {
    second = n1;
    third = n2;
  }
  result = first + " " + second + " " + third;
}

console.log(result);
