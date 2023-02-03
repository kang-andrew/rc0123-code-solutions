/* exported capitalize */

/*
  create a variable and assign it to capitalize the first letter of a word
  create a variable with an empty string value;
  being a loop that iterates through the word, where
    for each letter after the first letter
    lowercase that letter and assign it to the empty string
  return the word by adding the first variable to the second one
*/

function capitalize(word) {
  var capitalLetter = word[0].toUpperCase();
  var lowerCaseLetters = '';
  for (var i = 1; i < word.length; i++) {
    lowerCaseLetters += word[i].toLowerCase();
  }
  return capitalLetter + lowerCaseLetters;
}
