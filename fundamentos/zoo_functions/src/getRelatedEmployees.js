const data = require('../data/zoo_data');

const { employees } = data;
// console.log(employees);

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter(({ managers }) => managers.includes(managerId))
    .map((item) => `${item.firstName} ${item.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
