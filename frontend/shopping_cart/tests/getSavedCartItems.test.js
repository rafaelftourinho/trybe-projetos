const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('should be a function', () => {
    expect(typeof(getSavedCartItems)).toBe('function');
  });

  it('testa se ao executar a função "getSavedCartItems" o método "localStorage.getItem" é chamado', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('teste se ao executar a função "getSavedCartItems" o método "localStorage.getItem" é chamado com o "cartItems" como parâmetro', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });
});
