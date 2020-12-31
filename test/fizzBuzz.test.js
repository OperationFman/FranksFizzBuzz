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

test('fizzBuzz.check returns correct strings or the number', () => {
    expect(fizzBuzz.check(30)).toBe('FizzBuzz');
    expect(fizzBuzz.check(93)).toBe('Fizz');
    expect(fizzBuzz.check(65)).toBe('Buzz');
    expect(fizzBuzz.check(22)).toBe(22);
});

test('Final 0-100 output matches and is correct', () => {
    expect(new Set(fizzBuzz.run())).toEqual(new Set([
        1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz',
        19, 'Buzz', 'Fizz', 22, 23, 'Fizz', 'Buzz', 26, 'Fizz', 28, 29, 'FizzBuzz', 31, 32, 'Fizz', 34, 'Buzz', 'Fizz',
        37, 38, 'Fizz', 'Buzz', 41, 'Fizz', 43, 44, 'FizzBuzz', 46, 47, 'Fizz', 49, 'Buzz', 'Fizz', 52, 53, 'Fizz',
        'Buzz', 56, 'Fizz', 58, 59, 'FizzBuzz', 61, 62, 'Fizz', 64, 'Buzz', 'Fizz', 67, 68, 'Fizz', 'Buzz', 71, 'Fizz',
        73, 74, 'FizzBuzz', 76, 77, 'Fizz', 79, 'Buzz', 'Fizz', 82, 83, 'Fizz', 'Buzz', 86, 'Fizz', 88, 89, 'FizzBuzz',
        91, 92, 'Fizz', 94, 'Buzz', 'Fizz', 97, 98, 'Fizz'
    ]));
});