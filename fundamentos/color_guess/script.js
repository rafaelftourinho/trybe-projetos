const sectionBalls = document.querySelector('#section-balls');
const span = document.querySelector('#rgb-color');
const resposta = document.querySelector('#answer');
const resetBtn = document.querySelector('#reset-game');
const score = document.querySelector('#placar');
let array = [];

// Função para criar cores randômicas
const generateRandomColor = () => {
  const random = () => parseInt(Math.random() * 256, 10);
  const color = `rgb(${random()}, ${random()}, ${random()})`;
  return (color);
};

// Função para criar as bolas e colocar as cores randômicas
const divBalls = () => {
  for (let index = 1; index <= 6; index += 1) {
    const div = document.createElement('div');
    div.classList.add('ball');
    div.style.backgroundColor = generateRandomColor();
    sectionBalls.appendChild(div);
    array.push(div);
  }
};

// Função para retornar o texto de acordo com a cor
const spanTextRGB = () => {
  const aleatoryIndex = parseInt(Math.random() * array.length, 10);
  for (let i = 0; i < array.length; i += 1) {
    if (aleatoryIndex === i) {
      span.innerText = array[i].style.backgroundColor.split('rgb')[1];
    }
  }
};

sectionBalls.addEventListener('click', ({ target }) => {
  const verifyClick = window.getComputedStyle(target).backgroundColor.split('rgb')[1];
  let newScore = parseInt(score.innerText, 10);
  array = [];
  if (verifyClick === span.innerText) {
    resposta.innerText = 'Acertou!';
    newScore += 3;
    score.innerText = newScore;
  } else {
    resposta.innerText = 'Errou! Tente novamente!';
  }
});

const resetGame = () => {
  sectionBalls.innerHTML = '';
  divBalls();
  spanTextRGB();
};

resetBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', () => {
  resposta.innerHTML = 'Escolha uma cor';
});

window.onload = () => {
  divBalls();
  spanTextRGB();
};
