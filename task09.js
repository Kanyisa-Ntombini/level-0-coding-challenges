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

  if (vowelsInWord.length > 0) {
    return vowelsInWord.join(', ');
  } else {
    return 'There are no vowels';
  }
  
  //return vowelsInWord;
}

//Tests
console.log(printVowels('Umuzi'));
console.log(printVowels('Autumn'));
console.log(printVowels('oRanGes'));
console.log(printVowels('Rythymn'));