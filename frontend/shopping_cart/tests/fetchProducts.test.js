require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const { fetchProducts } = require('../helpers/fetchProducts');
const item = require('../mocks/item');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('should be a function', () => {
    expect(typeof(fetchProducts)).toEqual('function');
  });

it('chama a fetch quando a função "fetchProducts" é chamada com "computador"', () => {
  fetchProducts('computador');
  expect(fetch).toHaveBeenCalledTimes(1);
});

  it('testa se ao chamar a função "fetchProducts" com o argumento "computador" se utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', () => {
    const url = "https://api.mercadolibre.com/sites/MLB/search?q=computador";
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('testa se o retorno da função "fetchProducts" com o argumento "computador" é uma estrutura de dados igual ao objeto "computadorSearch"', async () => {
    expect.assertions(1);
    const result = await fetchProducts('computador');
    expect(result).toBe(computadorSearch);
  });

  it('testa se ao chamar a função "fetchProducts" sem argumento, retorna um erro com a mensagem "You must provide an url"', async () => {
    expect.assertions(1);
    const result = fetchProducts();
    await expect(result).rejects.toThrow('You must provide an url');
  });

});
