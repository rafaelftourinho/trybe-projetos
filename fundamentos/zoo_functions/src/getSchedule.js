const data = require('../data/zoo_data');

const { species, hours } = data;

function animalDays(animals) {
  return species.find(({ name }) => name === animals).availability;
}

function checkDateOrName(param) {
  const date = Object.keys(hours).find((item) => item === param);
  const animal = species.map(({ name }) => name).find((item) => item === param);
  if (param === date) return date;
  if (param === animal) return animal;
}

function OpenOrClosed(day) {
  if (day === 'Monday') return 'CLOSED';
  return `Open from ${hours[day].open}am until ${hours[day].close}pm`;
}

function animalInTheDays(day) {
  const animal = species.reduce((acc, { name, availability }) => {
    if (availability.includes(day)) acc.push(name);

    return acc;
  }, []);

  if (animal.length) return animal;
  return 'The zoo will be closed!';
}

function scheduleDays(day) {
  return ({
    [day]: {
      officeHour: OpenOrClosed(day),
      exhibition: animalInTheDays(day),
    },
  });
}

function generateObjectList() {
  return Object.keys(hours)
    .reduce((acc, curr) => Object.assign(acc, { ...scheduleDays(curr) }), {});
}

function getSchedule(scheduleTarget) {
  if (!scheduleTarget || !checkDateOrName(scheduleTarget)) {
    return generateObjectList();
  } if (Object.keys(hours).includes(scheduleTarget)) {
    return scheduleDays(scheduleTarget);
  } if (species.map(({ name }) => name)) {
    return animalDays(scheduleTarget);
  }
}

console.log(getSchedule());

module.exports = getSchedule;
