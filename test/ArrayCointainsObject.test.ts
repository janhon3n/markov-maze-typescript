import { expect } from 'chai'
import arrayContainsObject from '../src/arrayContainsObject'
import * as deepEqual from 'deep-equal'
import 'mocha'

describe('arrayContainsObject test 1', () => {
    it('array should not contain the object', () => {
        const obj = {
            row: 5,
            col: 6,
        }
        const array = [
            {
                row: 1,
                col: 4,
            },
            {
                row: 2,
                col: 6,
            },
            {
                row: 5,
                col: 7,
            },
        ]
        const result = arrayContainsObject(array, obj)
        expect(result).to.equal(false)
    })
})

describe('arrayContainsObject test 2', () => {
    it('array should contain the object', () => {
        const obj = {
            row: 5,
            col: 6,
        }
        const array = [
            {
                row: 1,
                col: 4,
            },
            {
                row: 5,
                col: 6,
            },
            {
                row: 5,
                col: 7,
            },
        ]
        const result = arrayContainsObject(array, obj)
        expect(result).to.equal(true)
    })
})
