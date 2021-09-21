const {test, expect} = require('@jest/globals') //core does not work
const {returnTwo,greeting,add,multiply,divide,subtract} = require('./functions')
const {describe} = require('@jest/globals')

test('should return the number two', () => {
    expect(returnTwo()).toBe(2)
})

test('should return the greeting', () => {
    expect(greeting('James')).toEqual(`Hello, James!`)
    expect(greeting('Jill')).toEqual(`Hello, Jill!`)
})

describe("Math functions", () => {
    
    test('should return the sum', () => {
        expect(add(1, 2)).toEqual(3)
        expect(add(5, 9)).toEqual(14)
    })

    test('should return and multiply', () => {
        expect(multiply(2, 2)).toEqual(4)
    })

    test('should return and divide', () => {
        expect(divide(100, 10)).toEqual(10)
    })

    test('should return the difference', () => {
        expect(subtract(2, 5)).toEqual(-3)
    })

})
