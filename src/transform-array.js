const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  let arr1 = [];
  if ((Array.isArray(arr)) != true || arr.length != 0)  {
    return false ;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == '--double-next' && arr[i + 1]) {
        arr1.push(arr[i + 1]);
      } else if (arr[i] == '--discard-prev' && arr[i - 1]) {
        arr1.splice(i - 1, 2);
      } else if (arr[i] == '--discard-next' && arr[i + 1]) {
        arr1.splice(i,1);
        i++;
      } else if (arr[i] == '--double-prev' && arr[i - 2]) {
        arr1.push(arr1[arr1.length-1]);
        i++;
      } else {
        arr1.push(arr[i]);
      }
    }
    return arr1;
  }
}

module.exports = {
  transform
};
