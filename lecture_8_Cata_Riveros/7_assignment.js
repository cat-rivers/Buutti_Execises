let totalVowelCount = 0;

const countOfVowels = (vowel, sentence) => {
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i).toLowerCase() === vowel) {
      count++;
      totalVowelCount++;
    }
  }
  console.log(` count of ${vowel.toUpperCase()} is ${count}`);
};

function checkSentenceVowels(sentence) {
  // Check how many different vowels we have in the sentence
  countOfVowels("a", sentence);
  countOfVowels("e", sentence);
  countOfVowels("i", sentence);
  countOfVowels("o", sentence);
  countOfVowels("u", sentence);
  countOfVowels("y", sentence);
  console.log("total vowel count: " + totalVowelCount);
}

checkSentenceVowels("A wizard's job is to vex chumps quickly in fog.");
