const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('should be a function', () => {
    expect(typeof (saveCartItems)).toBe('function');
  });

  it('testa se ao executar "saveCartItems" com o argumento "<ol><li>Item</li></ol>" o método "localStorage.setItem" é chamado', () => {
    const argument = "<ol><li>Item</li></ol>";
    saveCartItems(argument);
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('testa se ao execuar o "saveCartItems" com o argumento "<ol><li>Item</li></ol>" o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro "cartItem" e o segundo sendo o valor passado como argumento para a função', () => {
    const argument = "<ol><li>Item</li></ol>";
    saveCartItems(argument);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', argument);
  });

});
