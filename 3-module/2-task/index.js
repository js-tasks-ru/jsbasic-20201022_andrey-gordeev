/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  const result = [];
  for (const item of arr) {
    if (item >= a && item <= b) {
      result.push(item);
    }
  }
  return result;
}
