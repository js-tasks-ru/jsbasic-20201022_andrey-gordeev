/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  const arr = [];
  for (const i of users) {
    arr.push(i.name);
  };
  return arr;
}
