let i = 0;
let sum = 0;
while (true) {
  sum += i;
  if (sum > 10000) {
    break;
  }
  i++;
}
console.log("last number added: " , i);

