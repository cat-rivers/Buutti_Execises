const text = "saippuakivikauppias";

const palindromChecker = (input) => {
  const string = input.toString().toLowerCase();
  let isPAlindrom = true;
  for (let i = 0; i < string.length / 2; i++) {
    let j = string.length - i - 1;
    if (string[i] !== string[j]) {
      isPAlindrom = false;
    }
  }
  return isPAlindrom;
};

console.log(palindromChecker(text));
