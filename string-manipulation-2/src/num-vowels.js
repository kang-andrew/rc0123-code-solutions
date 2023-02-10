/* exported numVowels */

/*
  Create function named `numVowels` with one parameter `string`
    assign the value 0 to a new variable `vowelCounter`
    For each index in the string
      if the lowercased letter is equal to a vowel
        incement vowelCounter by 1
      return the value vowelCounter
*/

function numVowels(string) {
  var vowelCounter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' || string[i].toLowerCase() === 'i' || string[i].toLowerCase() === 'o' || string[i].toLowerCase() === 'u') {
      vowelCounter++;
    }
  }
  return vowelCounter;
}
