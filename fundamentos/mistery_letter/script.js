const paragraph = document.querySelector('#carta-gerada');
const btnCreate = document.querySelector('#criar-carta');
const input = document.querySelector('#carta-texto');
const count = document.querySelector('#carta-contador');
const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const seizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const inclinationGroup = ['skewleft', 'skewright'];

// Função para deletar os elementos da tag input (que são span)
const deleteInput = () => {
  while (paragraph.hasChildNodes()) paragraph.removeChild(paragraph.firstChild);
};

// Função para sorteito da class
const randomClass = () => {
  const style1 = Math.floor(Math.random() * styleGroup.length);
  const style2 = Math.floor(Math.random() * seizeGroup.length);
  const style3 = Math.floor(Math.random() * rotationGroup.length);
  const style4 = Math.floor(Math.random() * inclinationGroup.length);
  return [style1, style2, style3, style4];
};

// Função para mudar o estilo do paragrafo
const styleChanging = () => {
  const span = document.querySelectorAll('span');
  for (let i = 0; i < span.length; i += 1) {
    const styleArray = randomClass();
    span[i].classList.add(styleGroup[styleArray[0]]);
    span[i].classList.add(seizeGroup[styleArray[1]]);
    span[i].classList.add(rotationGroup[styleArray[2]]);
    span[i].classList.add(inclinationGroup[styleArray[3]]);
    for (let k = i + 1; k < i; k += 1) {
      while (styleArray[i] === styleArray[k]) styleArray[i] = randomClass();
    }
  }
};

// Função para criar as tags span e checar o contador
const createSpan = () => {
  deleteInput();
  const word = input.value.trim().split(' ');
  if (word[0] === '') {
    paragraph.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let index = 0; index < word.length; index += 1) {
      const span = document.createElement('span');
      span.innerText = `${word[index]}`;
      paragraph.appendChild(span);
      count.innerText = word.length;
    }
  }
};

// Função para remover as classes existentes
const removeStyleWhenClick = (e) => {
  const span = document.querySelectorAll('span');
  for (let i = 0; i < span.length; i += 1) {
    while (e.target.classList.length > 0) e.target.classList.remove(e.target.classList[0]);
    const styleArray = randomClass();
    e.target.classList.add(styleGroup[styleArray[0]]);
    e.target.classList.add(seizeGroup[styleArray[1]]);
    e.target.classList.add(rotationGroup[styleArray[2]]);
    e.target.classList.add(inclinationGroup[styleArray[3]]);
    console.log(span[i].classList);
    for (let k = i + 1; k < i; k += 1) {
      while (styleArray[i] === styleArray[k]) styleArray[i] = randomClass();
    }
  }
};

// Função para mudar o estilo ao clicar
const changeClickStyle = () => {
  const span = document.querySelectorAll('span');
  for (let i = 0; i < span.length; i += 1) {
    span[i].addEventListener('click', removeStyleWhenClick);
  }
};

const letter = () => {
  deleteInput();
  createSpan();
  styleChanging();
  changeClickStyle();
};

btnCreate.addEventListener('click', letter);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') createSpan();
});
