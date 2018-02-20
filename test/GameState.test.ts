import GameState from '../src/MarkovMaze/GameState'
import { expect } from 'chai'
import 'mocha'
import Enviroment from 'PlanningAlgorithm/Enviroment'

describe('GameState.equals() test 1', () => {
    it('states should be equal', () => {
        const gameState1 = new GameState()
        const gameState2 = new GameState()
        let positions: Array<[number, number]> = [[1, 2], [7, 4]]
        positions.forEach((pos) => {
            gameState1.playerPositions.push(pos)
            gameState2.playerPositions.push(pos)
        })
        positions = [[5, 2], [12, 1], [25, 1]]
        positions.forEach((pos) => {
            gameState1.coinPositions.push(pos)
            gameState2.coinPositions.push(pos)
        })
        const result = gameState1.equals(gameState2)
        expect(result).to.equal(true)
    })
})

describe('GameState.equals() test 2', () => {
    it('states should NOT be equal', () => {
        const gameState1 = new GameState()
        const gameState2 = new GameState()
        let positions: Array<[number, number]> = [[1, 2], [7, 4]]
        positions.forEach((pos) => {
            gameState1.playerPositions.push(pos)
        })
        positions = [[5, 2], [12, 1], [25, 1]]
        positions.forEach((pos) => {
            gameState2.playerPositions.push(pos)
            gameState1.coinPositions.push(pos)
            gameState2.coinPositions.push(pos)
        })
        const result = gameState1.equals(gameState2)
        expect(result).to.equal(false)
    })
})

describe('GameState.equals() test 3', () => {
    it('states should NOT be equal', () => {
        const gameState1 = new GameState()
        const gameState2 = new GameState()
        let positions: Array<[number, number]> = [[1, 2], [7, 4]]
        positions.forEach((pos) => {
            gameState1.playerPositions.push(pos)
        })
        positions = [[5, 2], [12, 1]]
        positions.forEach((pos) => {
            gameState2.playerPositions.push(pos)
            gameState1.coinPositions.push(pos)
            gameState2.coinPositions.push(pos)
        })
        const result = gameState1.equals(gameState2)
        expect(result).to.equal(false)
    })
})
