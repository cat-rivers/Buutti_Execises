const text = "this is a short sentence";

const reverseWords = (input) => {
  const sentence = input.split(" ");
  let n = " ";
  for (const word of sentence) {
    for (const i in word) {
      n += word[word.length - 1 - i];
    }
    n += " ";
  }
  console.log(n);
};

reverseWords(text);
reverseWords("this is a test");
reverseWords("this is also a test. with more text");
