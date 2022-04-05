const commonCharacters = (word1, word2) => {
  let commonArr = [];

  for (let letter1 of word1) {
    for (let letter2 of word2) {
      if (letter1 == letter2) {
        commonArr.push(letter1);
      }
    }
  }

  if (commonArr.length > 0) {
    return commonArr.join(', ');
  } else {
    return 'There are no common letters or characters';
  }
}

//Tests
console.log(commonCharacters('house', 'computers'))
console.log(commonCharacters('sheep', 'guitar'))