const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const inputImg = document.querySelector('#meme-insert');
const memeImage = document.querySelector('#meme-image');
const boardBtn = document.querySelector('#board-btn');
const containerImage = document.querySelector('#meme-image-container');
const containerMemes = document.querySelector('#container-memes');

// Evento de input para colocar o valor do escrito no texto
inputText.addEventListener('input', () => {
  memeText.innerText = inputText.value;
});

// Evento de input com object destructuring utilizando o método de criar URL como descrito abaixo
// source https://www.webtrickshome.com/forum/how-to-display-uploaded-image-in-html-using-javascript (ainda não 100% entendida)
inputImg.addEventListener('input', ({ target }) => {
  memeImage.src = URL.createObjectURL(target.files[0]);
});

// Evento de click para mudar a borda através do pai dos botões
boardBtn.addEventListener('click', ({ target }) => {
  const newBorders = window.getComputedStyle(target);
  containerImage.style.border = newBorders.border;
});

// Evento de click para colocar a imagem dentro da área de imagem
containerMemes.onclick = ({ target }) => { memeImage.src = target.src; };
