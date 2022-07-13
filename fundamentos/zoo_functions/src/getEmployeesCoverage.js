const data = require('../data/zoo_data');

const { species, employees } = data;

function checkEmployee(item) {
  if (item.name) {
    return employees.find(({ firstName, lastName, id }) =>
      [firstName, lastName].includes(item.name || item.id));
  } if (item.id) {
    return employees.find(({ id }) => id === item.id);
  }
}

function checkEmployeeCoverage(param) {
  const funcCheck = checkEmployee(param);
  if (!funcCheck) {
    throw new Error('Informações inválidas');
  }
  const resp = species.filter((item) => funcCheck.responsibleFor.includes(item.id));

  return {
    id: funcCheck.id,
    fullName: `${funcCheck.firstName} ${funcCheck.lastName}`,
    species: resp.map((item) => item.name),
    locations: resp.map((item) => item.location),
  };
}

function getEmployeesCoverage(employee) {
  if (!employee) {
    const arr = [];
    employees.forEach((item) => {
      const param = {
        name: item.firstName,
      };
      arr.push(checkEmployeeCoverage(param));
    });
    return arr;
  }
  return checkEmployeeCoverage(employee);
}

module.exports = getEmployeesCoverage;
