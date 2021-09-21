const {test, expect} = require('@jest/globals') //core does not work
const {returnTwo,greeting,add} = require('./functions')

test('should return the number two', () => {
    expect(returnTwo()).toBe(2)
})

test('should return the greeting', () => {
    expect(greeting('James')).toEqual(`Hello, James!`)
    expect(greeting('Jill')).toEqual(`Hello, Jill!`)
})

test('should return the sum', () => {
    expect(add(1, 2)).toEqual(3)
    expect(add(5, 9)).toEqual(14)
})