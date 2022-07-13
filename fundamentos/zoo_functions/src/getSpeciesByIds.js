const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  return species.filter((item) => ids.includes(item.id));
}

module.exports = getSpeciesByIds;
