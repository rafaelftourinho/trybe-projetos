const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const count = {
    child: 0,
    adult: 0,
    senior: 0,
  };

  entrants.forEach(({ age }) => {
    if (age < 18) count.child += 1;
    else if (age < 50) count.adult += 1;
    else count.senior += 1;
  });
  return count;
}

function calculateEntry(entrants) {
  if (!entrants || !Object.values(entrants).length) return 0;

  const calc = Object.entries(countEntrants(entrants));
  return calc.reduce((acc, curr) => acc + prices[curr[0]] * curr[1], 0);
}

module.exports = { calculateEntry, countEntrants };
