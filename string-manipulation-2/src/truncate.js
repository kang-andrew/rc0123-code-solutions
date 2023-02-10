/* exported truncate */

/*
  Create function named `truncate` with two parameters `length` and `string`
    assign an empty string to a new variable `truncatedString`
    For each index in the string
      if the letter is a string
        concatenate the letter to variable `truncatedString`
      if the letter is not a string
      break from loop
*/

function truncate(length, string) {
  var truncatedString = '';
  for (var i = 0; i < length; i++) {
    if (typeof string[i] === 'string') {
      truncatedString += string[i];
    } else if (typeof string[i] !== 'string') {
      break;
    }
  }
  return truncatedString + '...';
}
