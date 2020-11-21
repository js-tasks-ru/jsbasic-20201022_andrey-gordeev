/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  const splittedString = str.split('');
  return splittedString.map((item, index, array) => {
    if (item !== '-') {
      return item;
    } else {
      const nextIndex = ++index;
      array[nextIndex] = array[nextIndex].toUpperCase();
    }
  }).join('');
}
