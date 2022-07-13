// Desafio 11

const checker = (number) => {
  for (let value of number) {
    if (value > 9 || value < 0) return false;
    let counter = 0;
    for (let check in number) {
      if (number[value] === number[check]) {
        counter += 1;
      }
    }
    if (counter >= 3) {
      return false;
    }
  }
  return true;
};

function generatePhoneNumber(number) {
  let ddd = number.slice(0, 2).join('');
  let part1 = number.slice(2, 7).join('');
  let part2 = number.slice(-4).join('');

  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  } if (!checker(number)) {
    return 'não é possível gerar um número de telefone com esses valores';
  } if (checker(number)) {
    return `(${ddd}) ${part1}-${part2}`;
  }
}

// function generatePhoneNumber (number) {
//   if (number.length !== 11){
//     return 'Array com tamanho incorreto.';
//   }
//   for (let index in number){
//     if (number[index] > 9 || number[index] < 0) {
//       return 'não é possível gerar um número de telefone com esses valores';
//     }
//     let counter = 0;
//     for (let check in number) {
//       if (number[index] === number[check]) {
//         counter += 1;
//       }
//     }
//     if (counter >= 3) {
//       return 'não é possível gerar um número de telefone com esses valores';
//     }
//   }
//   let ddd = number.slice(0, 2).join('');
//   let part1 = number.slice(2, 7).join('');
//   let part2 = number.slice(-4).join('');

//   return `(${ddd}) ${part1}-${part2}`;
// }

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const conditionTriangle = [
    (lineA > (lineB + lineC) || lineA < Math.abs(lineB - lineC)),
    (lineB > (lineA + lineC) || lineB < Math.abs(lineA - lineC)),
    (lineC > (lineA + lineB) || lineC < Math.abs(lineA - lineB)),
  ];
  if (conditionTriangle.includes(true)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  string = string.match(/\d+/g);
  let soma = 0;
  string.map((item) => soma += Number(item));
  if (soma > 1) {
    return `${soma} copos de água`;
  }
  return `${soma} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
