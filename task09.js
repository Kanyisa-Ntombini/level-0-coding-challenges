const printVowels = word => {
  word = word.toLowerCase();
  let vowels = 'aeiou';
  //let vowelsInWord = '';
  let vowelsInWord = [];

  for (let letter of word) {
    if (vowels.indexOf(letter) >= 0 && vowelsInWord.indexOf(letter) < 0) {
      //vowelsInWord = vowelsInWord + letter + ', ';
      vowelsInWord.push(letter);
    }
  }

  return vowelsInWord.join(',');
  //return vowelsInWord;
}

console.log(printVowels('Umuzi'));