const { TestScheduler } = require('jest');
const fizzBuzz = require('./../fizzBuzz/fizzBuzz.js');

test('FizzBuzz triggered when number is a multiple of 15', () => {
    expect(fizzBuzz.fizzAndBuzz(15)).toBe(true);
});

test('FizzBuzz successfully not triggered', () => {
    expect(fizzBuzz.fizzAndBuzz(9)).toBe(false);
});

test('Fizz triggered when number is a multiple of 3', () => {
    expect(fizzBuzz.fizz(3)).toBe(true);
});

test('Fizz successfully not triggered', () => {
    expect(fizzBuzz.fizz(1)).toBe(false);
});

test('Buzz triggered when number is a multiple of 5', () => {
    expect(fizzBuzz.buzz(5)).toBe(true);
});

test('Buzz successfully not triggered', () => {
    expect(fizzBuzz.buzz(9)).toBe(false);
});

test('fizzBuzz.run returns correct matches', () => {
    expect(fizzBuzz.run(15)).toBe('FizzBuzz');
    expect(fizzBuzz.run(3)).toBe('Fizz');
    expect(fizzBuzz.run(5)).toBe('Buzz');
    expect(fizzBuzz.run(1)).toBe(1);
});