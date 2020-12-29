const { TestScheduler } = require('jest');
const FizzBuzz = require('./../fizzBuzz/fizzBuzz.js');
const fizzBuzz = FizzBuzz.fizzBuzz

test('FizzBuzz triggered when number is a multiple of 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
});

test('FizzBuzz triggered when number is a multiple of 15', () => {
    expect(FizzBuzz.fizzBuzz(9)).toBe(9);
});