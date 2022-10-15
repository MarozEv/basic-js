const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let numberMatrix = [];
  let sum = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    let nextMatrix = [];
    for (let j = 0; j < matrix.length; j++) {
      nextMatrix.push(matrix[j][i]);
    }
    numberMatrix.push(nextMatrix);
    nextMatrix = [];
  }
  for (let i = 0; i < numberMatrix.length; i++) {
    for (let j = 0; j < numberMatrix[i].length; j++) {
      if (numberMatrix[i][j] !== 0) {
        sum += numberMatrix[i][j];
      } else {
        break;
      }
    }
  }
  return sum;
}


module.exports = {
  getMatrixElementsSum
};