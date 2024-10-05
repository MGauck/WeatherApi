import { describe, expect, test } from '@jest/globals';
import { isValidLatitude, isValidLongitude } from '../../app/validators/number.validator';

describe('Number Validators', () => {
  describe('Latitude validator', () => {
    test('isValidLatitude returns true for correct latitude(60)', () => {
      expect(isValidLatitude(60)).toBeTruthy();
    });

    test('isValidLatitude returns false for to low latitude number(-120)', () => {
      expect(isValidLatitude(-120)).toBeFalsy();
    });

    test('isValidLatitude returns false for to high latitude number(144)', () => {
      expect(isValidLatitude(144)).toBeFalsy();
    });

    test('isValidLatitude returns false for invalid number', () => {
      expect(isValidLatitude("some number")).toBeFalsy();
    });
  });
  describe('Longitude validator', () => {
    test('isValidLongitude returns true for correct latitude(100)', () => {
      expect(isValidLongitude(100)).toBeTruthy();
    });

    test('isValidLongitude returns false for to low latitude number(-203)', () => {
      expect(isValidLongitude(-203)).toBeFalsy();
    });

    test('isValidLongitude returns false for to high latitude number(600)', () => {
      expect(isValidLongitude(600)).toBeFalsy();
    });

    test('isValidLongitude returns false for invalid number', () => {
      expect(isValidLongitude("some number")).toBeFalsy();
    });
  });
});