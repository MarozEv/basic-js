const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let namesArr = [];
  let nameTeam = '';
  if ((Array.isArray(members)) != true) {
    return false;
  } else {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        namesArr.push((members[i].replace(/ /g, "").split(''))[0]);
      }
    }
    namesArr.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < namesArr.length; i++) {

      nameTeam = nameTeam + (namesArr[i]).toUpperCase();
    }
    return nameTeam
  }
}

module.exports = {
  createDreamTeam
};
