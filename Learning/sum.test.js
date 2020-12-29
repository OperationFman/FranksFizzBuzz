const { TestScheduler } = require('jest');
const sum = require('./sum')
const stringy = require('./sum')

test('Properly Adds Two Numbers', () => {
    expect(sum(1, 2)).toBe(3)
})

test('Properly adds two strings together', () => {
    expect(stringy('Hello ', 'World')).toBe('Hello World')
})