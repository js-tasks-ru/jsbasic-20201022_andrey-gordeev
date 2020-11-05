/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  const stopWords = ['1xBet', 'XXX'];

  str = str.toLowerCase();

  let result = false;

  for (const item of stopWords) {
    if (str.includes(item.toLowerCase())) {
      result = true;
      break;
    }
  }

  return result;
}
