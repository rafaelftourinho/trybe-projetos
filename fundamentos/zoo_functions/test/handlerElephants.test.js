const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('returns undefined when nothing is passed in translation', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('deve retornar a frase "Parâmetro inválido, é necessário uma string" quando parâmetro for inexistente', () => {
    expect(handlerElephants(null)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('deve retornar o nome do animal quando passado o argumento "name"', () => {
    expect(handlerElephants('name')).toEqual('elephants');
  });

  it('deve retornar null quando nada for passado um parâmetro que não existe', () => {
    expect(handlerElephants('manga')).toBeNull();
  });

  it('deve retornar um número quando for passado "count"', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('deve retornar um array de nomes que contenha "Jefferson" caso seja passado o argumento "names"', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  it('deve retornar uma string caso seja passado o argumento "location"', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('deve retornar um número próxima a 10.5 caso seja pasado o argumento "averageAge"', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('deve retornar o número 5 quando for passado o parâmetro "popularity"', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  it('deve retornar um array de strings quando for passado o parâmetro "availability"', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(Array.isArray(handlerElephants('availability'))).toBe(true);
  });
});
