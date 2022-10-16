const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatSrt = str;
  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
  let repeatSrtTimes = repeatTimes || 1;
  let separatorStr = separator || '+';
  let addStrTimes = additionRepeatTimes || 1;
  let separatorAddStr = additionSeparator || '|';
  if (addition !== undefined) {
    addition = String(addition);
  } else {
    addition = '';
  }
  let additionWithSeparator = '';
  let finalStr = '';
  if (addition) {
    for (let i = 0; i < addStrTimes - 1; i++) {
      additionWithSeparator += addition + separatorAddStr;
    }
    additionWithSeparator += addition;
  };
  repeatSrt += additionWithSeparator;
  for (let i = 0; i < repeatSrtTimes - 1; i++) {
    finalStr += repeatSrt + separatorStr;
  }
  finalStr += repeatSrt;
  return finalStr;
}

module.exports = {
  repeater
};
