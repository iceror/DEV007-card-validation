// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../docs/validator';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    it('debería retornar true para "4083952015263"', () => {
      expect(validator.isValid('4083952015263')).toBe(true);
    });

    it('debería retornar true para "79927398713"', () => {
      expect(validator.isValid('79927398713')).toBe(true);
    });

    it('debería retornar false para "1234567890"', () => {
      expect(validator.isValid('1234567890')).toBe(false);
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it('Debería retornar "############5616" para "4556364607935616"', () => {
      expect(validator.maskify('4556364607935616')).toBe('############5616');
    });

    it('Debería retornar "1" para "1"', () => {
      expect(validator.maskify('1')).toBe('1');
    });

  });

  describe('validator.getBank', () => {
    it('debería ser una función', () => {
      expect(typeof validator.getBank).toBe('function');
    });

    it('Debería retornar "Visa" para "4556364607935616"', () => {
      expect(validator.getBank('4556364607935616')).toBe('Visa');
    });

    it('Debería retornar "AmericanExpress" para "3456364607935616"', () => {
      expect(validator.getBank('3456364607935616')).toBe('AmericanExpress');
    })

    it('Debería retornar "AmericanExpress" para "3756364607935616"', () => {
      expect(validator.getBank('3756364607935616')).toBe('AmericanExpress');
    })

    it('Debería retornar "MasterCard" para "5156364607935616"', () => {
      expect(validator.getBank('5156364607935616')).toBe('MasterCard');
    })

    it('Debería retornar "MasterCard" para "5356364607935616"', () => {
      expect(validator.getBank('5356364607935616')).toBe('MasterCard');
    })

    it('Debería retornar "MasterCard" para "5556364607935616"', () => {
      expect(validator.getBank('5556364607935616')).toBe('MasterCard');
    })

    it('Debería retornar "banco-desconocido" para "6656364607935616"', () => {
      expect(validator.getBank('6656364607935616')).toBe('banco-desconocido');
    })
  });
});
