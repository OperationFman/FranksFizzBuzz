const { TestScheduler } = require('jest');
const fizzBuzz = require('./../fizzBuzz/fizzBuzz.js');

test('FizzBuzz triggered when number is a multiple of 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
});

test('FizzBuzz triggered when number is a multiple of 15', () => {
    expect(fizzBuzz(9)).toBe(9);
});