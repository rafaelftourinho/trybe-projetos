const ol = document.querySelector('.cart__items');

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const totalPrice = async () => {
  const div = document.querySelector('.total-price');
  const li = document.querySelectorAll('.cart__item');
  const price = Array.from(li);

  const value = price.reduce((acc, product) => {
    let acc1 = acc;
    acc1 += +product.innerHTML.split('$')[1];

    return acc1;
  }, 0);

  div.innerHTML = value;
};

const cartItemClickListener = ({ target }) => {
  target.remove();
  saveCartItems(ol.innerHTML);
  totalPrice();
};

const removeLi = () => {
  const li = document.querySelectorAll('.cart__item');
  li.forEach((product) => product.addEventListener('click', cartItemClickListener));
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addItemInCart = async ({ target }) => {
  const item = document.querySelector('.cart__items');
  const value = target.parentNode;
  const itemId = value.querySelector('.item__sku');
  const { id, title, thumbnail, price } = await fetchItem(itemId.innerText);

  const result = { 
    sku: id, 
    name: title, 
    image: thumbnail, 
    salePrice: price,
  };

  item.appendChild(createCartItemElement(result));
  saveCartItems(ol.innerHTML);
  totalPrice();
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  const btn = (createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  btn.addEventListener('click', addItemInCart);
  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(btn);

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const loadingAPI = () => {
  const section = document.querySelector('.items');
  const div = document.createElement('div');
  div.classList.add('loading');
  div.innerHTML = 'Carregando';
  section.appendChild(div);
};

const removeLoading = () => document.querySelector('.loading').remove();

const putItemsInHTML = async () => {
  loadingAPI();
  const list = document.querySelector('.items');
  const data = await fetchProducts('computador');
  const { results } = data;

  results.forEach(({ id, title, thumbnail }) => { 
    const products = { 
      sku: id, 
      name: title, 
      image: thumbnail,
    };

      list.appendChild(createProductItemElement(products));
  });
  removeLoading();
};

const cleanCart = () => {
  const btnEmpty = document.querySelector('.empty-cart');
  btnEmpty.addEventListener('click', () => {
    ol.innerHTML = '';
  });
};

window.onload = () => { 
  putItemsInHTML();
  ol.innerHTML = getSavedCartItems();
  removeLi();
  totalPrice();
  cleanCart();
};
