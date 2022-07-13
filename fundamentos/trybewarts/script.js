// Função geral para sintaxe mais limpa
const $ = (attribute) => document.querySelector(attribute);
const $$ = (attribute) => document.querySelectorAll(attribute);

const nome = $('#input-name');
const lastname = $('#input-lastname');
const house = $('#house');
const observation = $('#textarea');
const formUser = $('#evaluation-form');
const btnSubmit = $('#submit-btn');
const emailForm = $('#input-email');

// Função de checar os dados
// const checarDados = () => {
//   const senha = $('#senha');
//   const email = $('#email');
//   if (email.value === 'tryber@teste.com' && senha.value === '123456') {
//     alert('Olá, Tryber!');
//   } else {
//     alert('Email ou senha inválidos.');
//   }
// };

const checarDados = () => {
  const senha = $('#senha');
  const email = $('#email');
  email.value === 'tryber@teste.com' && senha.value === '123456' ? alert('Olá, Tryber!') : alert('Email e senha inválidos.');
};

// Função para habiliar o submit ao clicar no checkbox
/** Função para habilitar o botão quando clicko no checkbox
 * @param eventos
 * @returns X
*/
const enableSubmit = () => {
  const agree = $('#agreement');
  btnSubmit.disabled = !agree.checked;
};

// Função para criar o contador da textarea
const createCount = () => {
  const counter = document.createElement('div');
  const span = $('#counter');
  counter.id = 'counter';
  counter.innerText = 500;
  span.appendChild(counter);
};

// Função para checar o tamanho da textarea
const checkCounter = () => {
  const textarea = $('#textarea');
  const divCount = $('#counter');
  const maxChars = textarea.getAttribute('maxlength');
  const text = textarea.value.length;
  const rest = maxChars - text;
  divCount.innerText = `${rest}/500`;
};

// Função para captar as escolhas do usuário
const formAvaliation = (e) => {
  e.preventDefault();

  const family = $('input[name=family]:checked');
  const contents = $$('.subject:checked');
  const note = $('input[name=rate]:checked');
  const result = $('#form-data');

  formUser.style.display = 'none';
  result.classList.toggle('display');
  result.innerText = `
  Nome: ${nome.value} ${lastname.value}
  Email: ${emailForm.value}
  Casa: ${house.value}
  Família: ${family.value}
  Matérias: ${[...contents].map((content) => content.value).join(', ')}
  Avaliação: ${note.value}
  Observações: ${observation.value};
  `;
};

// Função de escuta dos eventos
const eventListener = () => {
  const agree = $('#agreement');
  const textarea = $('#textarea');
  const btnForm = $('#btn-form');
  btnForm.addEventListener('click', checarDados);
  agree.addEventListener('change', enableSubmit);
  textarea.addEventListener('input', checkCounter);
  formUser.addEventListener('submit', formAvaliation);
};

window.onload = () => {
  eventListener();
  createCount();
};
