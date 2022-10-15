const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let compareArray = [];
  let numberOnce = String(n);
  for (let i = 0; i < numberOnce.length; i++) {
    let numberArray = numberOnce
    numberArray = numberOnce.split('');
    numberArray.splice(i, 1);
    compareArray.push((numberArray).join(''));
  }
  compareArray.sort((a, b) => b - a);
  return Number(compareArray[0])
}

module.exports = {
  deleteDigit
};
