/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  const usersToReport = [];

  for (const item in users) {
    if (users[item].age <= age) {
      usersToReport.push(`${users[item].name}, ${users[item].balance}`)
    }
  }

  return usersToReport.join('\n');
}
