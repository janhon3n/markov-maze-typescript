import Stage from '../src/MarkovMaze/Stage'
import StateError from '../src/PlanningAlgorithm/StateError'
import Player from '../src/MarkovMaze/Players/Player'
import { expect } from 'chai'
import 'mocha'

const initialState = {
    playerPositions: [
    ],
    coinPositions: [
    ],
}
const players = [
    new Player(0),
    new Player(1),
]
const stageData = {
    dimensions: {
        rows: 10,
        cols: 10,
    },
    wallPositions: [],
}

describe('Stage creation test 1', () => {
    it('Stage constructor should throw error', () => {
        const testFunction = () => {
            const testStage = new Stage(initialState, players, stageData)
        }
        expect(testFunction).to.throw(StateError)
    })
})
