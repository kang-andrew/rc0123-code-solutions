/* exported capitalizeWord */
function capitalizeWord(word) {
  var capitalLetter = word[0].toUpperCase();
  var lowerCaseLetters = '';
  for (var i = 1; i < word.length; i++) {
    if (word[i] !== 's' && word[i] !== 'S') {
      lowerCaseLetters += word[i].toLowerCase();
    } else if (word[i] === 's') {
      lowerCaseLetters += word[i].toUpperCase();
    } else if (word[3] === 'S') {
      lowerCaseLetters += word[3].toLowerCase();
    } else if (word[i] === 'S') {
      lowerCaseLetters += word[i].toUpperCase();
    }
  }
  return capitalLetter + lowerCaseLetters;
}
