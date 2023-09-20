import validator from '../src/utilities/validator';

describe('Validator', () => {
  describe('isInteger', () => {
    it('should be passed if value is integer', async () => {
      expect(validator.isInteger('123')).toBe(true);
      expect(validator.isInteger('+123')).toBe(true);
      expect(validator.isInteger('-123')).toBe(true);
    });

    it('shouldn\'t be passed if value is not integer', async () => {
      expect(validator.isInteger('one')).toBe(false);
      expect(validator.isInteger('456+')).toBe(false);
      expect(validator.isInteger('456-')).toBe(false);
      expect(validator.isInteger('')).toBe(false);
    });
  });

  describe('isIsoDate', () => {
    it('should be passed if value is ISO date', async () => {
      expect(validator.isIsoDate('2023-09-19T17:01:01')).toBe(true);
      expect(validator.isIsoDate('2023-09-19T17:01:01Z')).toBe(true);
      expect(validator.isIsoDate('2023-09-20T01:01:01+08:00')).toBe(true);
      expect(validator.isIsoDate('2023-09-20T01:01:01-08:00')).toBe(true);
    });

    it('shouldn\'t be passed if value is not ISO date', async () => {
      expect(validator.isIsoDate('')).toBe(false);
      expect(validator.isIsoDate('2023-09-19 17:01:01Z')).toBe(false);
      expect(validator.isIsoDate('2023-19-19T17:01:01Z')).toBe(false);
      expect(validator.isIsoDate('2023-09-39T17:01:01Z')).toBe(false);
      expect(validator.isIsoDate('2023-09-19T27:01:01Z')).toBe(false);
      expect(validator.isIsoDate('2023-09-19T17:61:01Z')).toBe(false);
      expect(validator.isIsoDate('2023-09-19T17:01:61Z')).toBe(false);
      expect(validator.isIsoDate('2023-09-20T01:01:01+08')).toBe(false);
      expect(validator.isIsoDate('2023-09-20T01:01:01+24:00')).toBe(false);
      expect(validator.isIsoDate('2023-09-20T01:01:01+08:60')).toBe(false);
    });
  });
});
