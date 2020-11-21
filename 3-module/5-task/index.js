/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  const entries = str.split(',').join(' ').split(' ');
  const numbers = [];

  let min = 0;
  let max = 0;

  for (const item of entries) {
    if (isFinite(item)) {
      numbers.push(item);
    }
  }

  numbers.forEach((item) => {
    const num = +item;

    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
  })

  return {
    min,
    max,
  }
}
