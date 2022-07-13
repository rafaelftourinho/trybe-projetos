const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // Source https://youtu.be/NiLUGy1Mh4U?t=946
  const speciesCount = species
    .reduce((acc, specie) => ({ ...acc, [specie.name]: specie.residents.length }), {});
  if (!animal) return speciesCount;

  return species.find(({ name }) => name === animal.specie).residents
    .filter((resident) => (!animal.sex ? true : resident.sex === animal.sex)).length;
}

module.exports = countAnimals;
