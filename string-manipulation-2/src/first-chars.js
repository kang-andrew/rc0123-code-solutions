/* exported firstChars */

/*
  Create function named `firstChars` with two parameters `length` and `string`
    assign an empty string to a new variable `result`
    For each index in the string up to the `length` value
      if the letter is a string
        concatenate the letter to variable `result`
      return the value result
*/

function firstChars(length, string) {
  var result = '';
  for (var i = 0; i < length; i++) {
    if (typeof string[i] === 'string') {
      result += string[i];
    }
  }
  return result;
}
