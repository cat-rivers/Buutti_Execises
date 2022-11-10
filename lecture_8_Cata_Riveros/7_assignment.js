

function checkSentenceVowels(sentence) {
  let totalVowelCount = 0;
  // Check how many different vowels we have in the sentence
  const countOfVowels = (vowel) => {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
      if (sentence.charAt(i).toLowerCase() === vowel) {
        count++;
        totalVowelCount++;
      }
    }
    console.log(` count of ${vowel.toUpperCase()} is ${count}`);
  };
  countOfVowels("a");
  countOfVowels("e");
  countOfVowels("i");
  countOfVowels("o");
  countOfVowels("u");
  countOfVowels("y");
  console.log("total vowel count: " + totalVowelCount);
}

checkSentenceVowels("A wizard's job is to vex chumps quickly in fog.");

checkSentenceVowels("aaaa bbb ccc eeee")
