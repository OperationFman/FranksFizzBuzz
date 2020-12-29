const { TestScheduler } = require('jest');
const fizzBuzz = require('./../fizzBuzz/fizzBuzz.js');

test('FizzBuzz triggered when number is a multiple of 15', () => {
    expect(fizzBuzz.fizzAndBuzz(15)).toBe('FizzBuzz');
});

test('FizzBuzz successfully not triggered', () => {
    expect(fizzBuzz.fizzAndBuzz(9)).toBe(9);
});

test('Fizz triggered when number is a multiple of 3', () => {
    expect(fizzBuzz.fizz(3)).toBe('Fizz');
});

test('Fizz successfully not triggered', () => {
    expect(fizzBuzz.fizz(1)).toBe(1);
});

test('Buzz triggered when number is a multiple of 5', () => {
    expect(fizzBuzz.buzz(5)).toBe('Buzz');
});

test('Buzz successfully not triggered', () => {
    expect(fizzBuzz.buzz(9)).toBe(9);
});
