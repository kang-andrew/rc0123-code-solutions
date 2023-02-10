/* exported capitalizeWords */

/*
  Create function named `capitalizeWords` with one parameter `string`
    assign an empty string to a new variable `result`
    make first letter capital and concatenate it to the variable `result`
    For each index in the string starting at 1
      if there is a space before the letter
        make the letter uppercase and concatenate it to variable `result`
      if there is no pace before the letter
      make the letter lowercase and concatenate it to variable `result`
*/

function capitalizeWords(string) {
  var result = '';
  result += string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      result += string[i].toUpperCase();
    } else {
      result += string[i].toLowerCase();
    }
  }
  return result;
}
