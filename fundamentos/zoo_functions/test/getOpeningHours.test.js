const getOpeningHours = require('../src/getOpeningHours');

const closed = 'The zoo is closed';

describe('Testes da função getOpeningHours', () => {
  it('retorna o objeto "hour" se a função não receber parâmetros', () => {
    const hours = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(hours);
  });

  it('retorna que está fechado caso seja passado um dia inválido', () => {
    expect(getOpeningHours('Monday', '10:13-AM')).toBe(closed);
  });

  it('retorna que está fechado caso seja passado um dia inválido', () => {
    expect(getOpeningHours('Tuesday', '07:00-AM')).toBe(closed);
  });

  it('retorna que está fechado caso uma hora além do progamado seja passado como parâmetro', () => {
    expect(getOpeningHours('Wednesday', '11:00-PM')).toBe(closed);
  });

  it('retorna erro caso o valor passado não seja numérico para horas e minutos', () => {
    expect(() => getOpeningHours('Wednesday', '')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Monday', '-30:0-AM')).toThrow('The hour should represent a number');
  });

  it('retorna um erro caso o valor da abreviação passada seja inválido', () => {
    expect(() => getOpeningHours('Wednesday', '10:00-DM')).toThrow(Error);
  });

  it('retorna um erro caso o horário naõ esteja entre 0 e 12', () => {
    expect(() => getOpeningHours('Wednesday', '13:00-AM')).toThrow(Error);
  });

  it('retorna um erro caso os minutos naõ estejam entre 0 e 59', () => {
    expect(() => getOpeningHours('Wednesday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });

  it('retorna erro se o dia passado não for um dia válido', () => {
    expect(() => getOpeningHours('Manga', '11:00-PM')).toThrow(Error);
  });

  it('retorna que o zoo estará aberto', () => {
    expect(getOpeningHours('Wednesday', '01:00-PM')).toMatch('The zoo is open');
  });
});
