const commonCharacters = (word1, word2) => {
  let commonArr = [];

  for (let letter1 of word1) {
    for (let letter2 of word2) {
      if (letter1 == letter2) {
        commonArr.push(letter1);
      }
    }
  }

  console.log(`Common letters: ${commonArr.join(', ')}`);
}

//Tests
/*commonCharacters('house', 'computers');
commonCharacters('sheep', 'guitar');*/