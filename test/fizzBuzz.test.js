const { TestScheduler } = require('jest');
const fizzBuzz = require('./../fizzBuzz/fizzBuzz.js');

test('fizzAndBuzz returns correct boolean depending on multiple', () => {
    expect(fizzBuzz.fizzAndBuzz(15)).toBe(true);
    expect(fizzBuzz.fizzAndBuzz(9)).toBe(false);
});

test('fizz returns correct boolean depending on multiple', () => {
    expect(fizzBuzz.fizz(3)).toBe(true);
    expect(fizzBuzz.fizz(1)).toBe(false);
});

test('buzz returns correct boolean depending on multiple', () => {
    expect(fizzBuzz.buzz(5)).toBe(true);
    expect(fizzBuzz.buzz(9)).toBe(false);
});

test('fizzBuzz.run returns correct matches', () => {
    expect(fizzBuzz.run(15)).toBe('FizzBuzz');
    expect(fizzBuzz.run(3)).toBe('Fizz');
    expect(fizzBuzz.run(5)).toBe('Buzz');
    expect(fizzBuzz.run(1)).toBe(1);
});