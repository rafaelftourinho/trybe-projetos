require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const { fetchProducts } = require('../helpers/fetchProducts');
const item = require('../mocks/item');
const computadorSearch = require('../mocks/search');

describe('2 - Teste a função fetchItem', () => {
  it('should be a function', () => {
    expect(typeof(fetchItem)).toEqual('function');
  });
  
  it('chama a fetch quando a função "fetchItem" é chamada com "MLB1615760527"', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  })
  
  it('testa se ao chamar a função "fetchItem" com o argumento "MLB1615760527" se utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', () => {
    const url = "https://api.mercadolibre.com/items/MLB1615760527";
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url);
  });
  
  it('testa se o retorno da função "fetchItem" com o argumento "computador" é uma estrutura de dados igual ao objeto "item"', async () => {
    expect.assertions(1);
    const result = await fetchItem('MLB1615760527');
    expect(result).toBe(item);
  });
  
  it('testa se ao chamar a função "fetchItem" sem argumento, retorna um erro com a mensagem "You must provide an url"', async () => {
    expect.assertions(1);
    const result = fetchItem();
    await expect(result).rejects.toThrow('You must provide an url');
  });
  

});
