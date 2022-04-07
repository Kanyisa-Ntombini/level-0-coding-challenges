const printVowels = word => {
  word = word.toLowerCase();
  const vowels = 'aeiou';
  const vowelsInWord = [];

  for (let letter of word) {
    if (vowels.indexOf(letter) >= 0 && vowelsInWord.indexOf(letter) < 0) {
      vowelsInWord.push(letter);
    }
  }

  console.log(`Vowels: ${vowelsInWord.join(', ')}`);
}

//Tests
/*printVowels('Umuzi');
printVowels('Autumn');
printVowels('oRanGes');
printVowels('Rythymn');*/