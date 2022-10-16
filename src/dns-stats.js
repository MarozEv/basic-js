const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domainObj = {};
  let domainArr = [];
  domains.forEach((el) => {
    el = el.split('.').reverse()
    let newArr = [];
    let newStr = '';
    for (let i = 0; i < el.length; i++) {
      newArr.push(el[i]);
      newStr = newArr.join('.');
      domainArr.push(newStr);
    }
  });
  for (let i = 0; i < domainArr.length; i++) {
    if (!domainObj.hasOwnProperty(`.${domainArr[i]}`)) {
      domainObj[`.${domainArr[i]}`] = 1;
    } else {
      domainObj[`.${domainArr[i]}`]++;
    }
  }
  return domainObj
}
module.exports = {
  getDNSStats
};
