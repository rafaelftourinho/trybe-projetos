const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const funcionario = employees.find((employee) => employee.id === id);
  const animal = funcionario.responsibleFor[0];

  const result = species.find((specie) => specie.id === animal).residents
    .reduce((acc, curr) => {
      if (curr.age > acc.age) return curr;
      return acc;
    });
  return Object.values(result);
}

module.exports = getOldestFromFirstSpecies;
