import 'core-js';
import "regenerator-runtime/runtime";
import {range} from '../func';

describe('range', () => {
  test('basic use', () => {
    expect([...range(3)]).toStrictEqual([0, 1, 2]);
  });
  test('range with start and end provided', () => {
    expect([...range(2,5)]).toStrictEqual([2, 3, 4]);
  });
  test('range spanning negative interval', () => {
    expect([...range(-3, 3)]).toStrictEqual([-3, -2, -1, 0, 1, 2]);
  });
  test('range with step set', () => {
    expect([...range(0, 5, 2)]).toStrictEqual([0, 2, 4]);
  });
  test('reversed range with negative step', () => {
    expect([...range(3, -1, -1)]).toStrictEqual([3, 2, 1, 0]);
  });
  test('greater start than end with positive step', () => {
    expect([...range(3, 0)]).toStrictEqual([]);
  });
  test('greater end than start with negative step', () => {
    expect([...range(0, 3, -1)]).toStrictEqual([]);
  });
  test('greater step than range span', () => {
    expect([...range(0, 3, 4)]).toStrictEqual([0]);
  });
});
