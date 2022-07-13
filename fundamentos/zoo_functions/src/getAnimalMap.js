const { species } = require('../data/zoo_data');

function generateArrayAnimal({ residents }, sexy) {
  const array = [];
  residents
    .forEach(({ name, sex }) => {
      if (sexy) {
        if (sexy === sex) array.push(name);
      } else {
        array.push(name);
      }
    });
  return array;
}

function verifyNames(param) {
  const object = { NE: [], NW: [], SE: [], SW: [] };
  if (!param || !param.includeNames) {
    species
      .forEach(({ location, name }) => object[location].push(name));
    return object;
  }
  species
    .forEach((specie) => {
      const secondObject = {};
      secondObject[specie.name] = generateArrayAnimal(specie, param.sex);
      if (param.sorted) secondObject[specie.name].sort();
      object[specie.location].push(secondObject);
    });
  return object;
}

function getAnimalMap(options) {
  return verifyNames(options);
}

module.exports = getAnimalMap;
