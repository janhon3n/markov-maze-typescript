import GameState from '../src/MarkovMaze/GameState'
import * as deepEqual from 'deep-equal'
import { expect } from 'chai'
import 'mocha'
import Enviroment from 'PlanningAlgorithm/Enviroment'

describe('Deep Equality test 1', () => {
    it('states should be equal', () => {
        const gameState1 = {
            coinPositions: [
                {row: 5, col: 2},
                {row: 6, col: 3},
            ],
            playerPositions: [
                {row: 5, col: 6},
                {row: 7, col: 2},
            ],
        }
        const gameState2 = Object.assign({}, gameState1)
        const result = deepEqual(gameState1, gameState2)
        expect(result).to.equal(true)
    })
})

describe('Deep Equality test 2', () => {
    it('states should NOT be equal', () => {
        const gameState1 = {
            coinPositions: [
                {row: 3, col: 2},
                {row: 6, col: 3},
            ],
            playerPositions: [
                {row: 5, col: 6},
                {row: 7, col: 2},
            ],
        }
        const gameState2 = Object.assign({}, gameState1, {coinPositions: [
            {row: 1, col: 2},
            {row: 6, col: 3},
        ]})
        const result = deepEqual(gameState1, gameState2)
        expect(result).to.equal(false)
    })
})

describe('Deep Equality test 3', () => {
    it('states should NOT be equal', () => {
        const gameState1 = {
            coinPositions: [
                {row: 3, col: 2},
                {row: 6, col: 3},
            ],
            playerPositions: [
                {row: 5, col: 6},
                {row: 7, col: 2},
            ],
        }
        const gameState2 = {
            coinPositions: [
                {row: 3, col: 2},
                {row: 6, col: 3},
            ],
            playerPositions: [
                {row: 5, col: 6},
                {row: 7, col: 2},
                {row: 1, col: 2},
            ],
        }
        const result = deepEqual(gameState1, gameState2)
        expect(result).to.equal(false)
    })
})
