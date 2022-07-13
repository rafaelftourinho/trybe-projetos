const boxSelected = document.getElementsByClassName('selected');
const pixel = document.getElementsByClassName('pixel');
const btn = document.querySelector('#clear-board');
const input = document.querySelector('#board-size');
const btnVQV = document.querySelector('#generate-board');
const colorPalette = document.getElementById('color-palette');
const btnRecharge = document.querySelector('#change-colors');
let painting;

// source https://www.codegrepper.com/code-examples/javascript/generate+random+rgb+color+javascript
const generateRandomColor = () => {
  const random = () => Math.random() * 256;
  const color = `rgb(${random()}, ${random()}, ${random()})`;
  return (color);
};

// Função para gerar cores aleatórias
const generateColors = () => {
  const color = document.querySelectorAll('.color');
  color.forEach((element) => {
    element.style.backgroundColor = generateRandomColor();
  });
};

// Função para pintar os quadrados da cor que desejamos verificando se o painting é true
const paintPixel = (e) => {
  const newColor = boxSelected[0].style.backgroundColor;
  if (painting) {
    e.target.style.backgroundColor = newColor;
  }
};

// Função para pintar os quadrados com click
const paintPixelWithoutCondition = (e) => {
  const newColor = boxSelected[0].style.backgroundColor;
  e.target.style.backgroundColor = newColor;
};

// Função para criar os pixels do quadro
const createPixelBox = () => {
  const divBoard = document.createElement('div');
  divBoard.className = 'pixel';
  divBoard.style.backgroundColor = 'white';
  divBoard.addEventListener('mouseover', paintPixel);
  divBoard.addEventListener('click', paintPixelWithoutCondition);
  return divBoard;
};

// Função para criar as linhas do quadro
const createLinesBoard = (width) => {
  const lineBoard = document.createElement('div');
  lineBoard.className = 'flex';
  for (let i = 1; i <= width; i += 1) {
    const createPixel = createPixelBox();
    lineBoard.appendChild(createPixel);
  }
  return lineBoard;
};

// Função para criar as colunas do quadro linkada com as duas anteriores
const createBoardBox = (height = 5) => {
  const locateBoard = document.querySelector('#pixel-board');
  locateBoard.innerHTML = '';
  for (let i = 1; i <= height; i += 1) {
    const linesInBoard = createLinesBoard(height);
    locateBoard.appendChild(linesInBoard);
  }
};

// Função para colocar e tirar a class selected
const selectedClassBox = (e) => {
  boxSelected[0].classList.remove('selected');
  e.target.classList.add('selected');
};

// Função para limpar os desenhos
const clearBoardColor = () => {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
};

// Função para adicionar o valor nos inputs
const checkInput = () => {
  if (!input.value) {
    alert('Board inválido!');
  } if (input.value > 50) {
    input.value = 50;
  } if (input.value < 5) {
    input.value = 5;
    createBoardBox(input.value);
  } else {
    createBoardBox(input.value);
  }
};

// Função para criar um botão de recarregar cores
const changeColors = () => {
  generateColors();
};

// Função que guarda todos os eventos de escuta
const eventListener = () => {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', paintPixel);
  }
  btn.addEventListener('click', clearBoardColor);
  input.addEventListener('keypress', (e) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      checkInput();
    }
  });
  window.addEventListener('mousedown', () => { painting = true; });
  window.addEventListener('mouseup', () => { painting = false; });
  btnVQV.addEventListener('click', checkInput);
  colorPalette.addEventListener('click', selectedClassBox);
  btnRecharge.addEventListener('click', changeColors);
};

window.onload = () => {
  generateColors();
  createPixelBox();
  createLinesBoard();
  createBoardBox();
  eventListener();
};
