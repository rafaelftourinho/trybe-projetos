// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  } return false;
}

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

// Desafio 3
const splitSentence = (string) => string.split(' ');

// Desafio 4
function concatName(item) {
  return `${item[item.length - 1]}, ${item[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victoryPoints = wins * 3;
  let tiesPoints = ties * 1;
  let finalPoints = victoryPoints + tiesPoints;
  return finalPoints;
}

// Desafio 6
function highestCount(nums) {
  let highNumber = nums[0];
  let counter = 0;

  for (let index in nums) {
    if (highNumber < nums[index]) {
      highNumber = nums[index];
      counter = 1;
    } else if (highNumber === nums[index]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(mouse - cat1);
  let positionCat2 = Math.abs(mouse - cat2);

  if (positionCat2 > positionCat1) {
    return 'cat1';
  } if (positionCat1 > positionCat2) {
    return 'cat2';
  } if (positionCat1 === positionCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
// function fizzBuzz(arr) {
//   let imprimeMessage = [];

//   for (let index = 0; index < arr.length; index += 1) {
//     if (arr[index] % 3 === 0 && arr[index] % 5 === 0) {
//       imprimeMessage.push('fizzBuzz');
//     } else if (arr[index] % 3 === 0) {
//       imprimeMessage.push('fizz');
//     } else if (arr[index] % 5 === 0) {
//       imprimeMessage.push('buzz');
//     } else if (arr[index] % 3 !== 0 && arr[index] % 5 !== 0) {
//       imprimeMessage.push('bug!');
//     }
//   }
//   return imprimeMessage;
// }

const conditionFizzBuzz = (nums) => {
  if (nums % 3 === 0 && nums % 5 === 0) {
    return ('fizzBuzz');
  } if (nums % 5 === 0) {
    return ('buzz');
  } if (nums % 3 === 0) {
    return ('fizz');
  }
  return ('bug!');
};

const fizzBuzz = (array) => {
  let imprimeArray = [];

  for (let index = 0; index < array.length; index += 1) {
    imprimeArray.push(conditionFizzBuzz(array[index]));
  }
  return imprimeArray;
};

// Desafio 9
function encode(string) {
  string = string.replaceAll('a', '1');
  string = string.replaceAll('e', '2');
  string = string.replaceAll('i', '3');
  string = string.replaceAll('o', '4');
  string = string.replaceAll('u', '5');
  return string;
}
function decode(string) {
  string = string.replaceAll('1', 'a');
  string = string.replaceAll('2', 'e');
  string = string.replaceAll('3', 'i');
  string = string.replaceAll('4', 'o');
  string = string.replaceAll('5', 'u');
  return string;
}

// Desafio 10
function techList(array, name) {
  let result = [];
  array.sort();

  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < array.length; index += 1) {
    let list = {
      tech: undefined,
      name: undefined,
    };
    list.tech = array[index];
    list.name = name;
    result.push(list);
  }

  return result;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
