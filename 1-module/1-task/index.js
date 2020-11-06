/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (n < 0) {
    return null;
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    let num = n;
    for (let i = --n; i > 1; --i) {
      num = num *= i;
    }
    return num;
  }
}
