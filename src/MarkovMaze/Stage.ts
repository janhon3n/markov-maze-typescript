import GameState, { Position } from './GameState'
import StateError from '../PlanningAlgorithm/StateError'
import Enviroment from '../PlanningAlgorithm/Enviroment'
import Player from './Players/Player'
import arrayContainsObject from '../arrayContainsObject'
import * as deepEqual from 'deep-equal'

class Stage extends Enviroment implements StageData {

    public dimensions
    public wallPositions
    public state: GameState

    constructor(initialState: GameState, players: Player[], stageData: StageData) {
        super(initialState, players)
        this.dimensions = stageData.dimensions
        this.wallPositions = stageData.wallPositions
        if (!this.stateIsValid(this.state)) {
            throw new StateError('Stage was initialized with invalid initial state')
        }
    }

    public goalStateReached(): boolean {
        return (this.state.coinPositions.length === 0)
    }

    public stateIsValid(state: GameState): boolean {
        if (this.agents.length > this.state.playerPositions.length) {
            return false
        }
        for (const playerPosition of state.playerPositions) {
            if (!this.positionIsInsideStage(playerPosition) ||
                arrayContainsObject(this.wallPositions, playerPosition) ||
                arrayContainsObject(this.state.coinPositions, playerPosition)) {
                return false
            }
        }
        for (const coinPosition of state.coinPositions) {
            if (!this.positionIsInsideStage(coinPosition) ||
                arrayContainsObject(this.wallPositions, coinPosition)) {
                return false
            }
        }
        return true
    }

    public positionIsInsideStage(position: Position): boolean {
        if (position.row < 0 || position.row >= this.dimensions.rows) {
            return false
        }
        if (position.col < 0 || position.col >= this.dimensions.cols) {
            return false
        }
        return true
    }

    public getStageData(): StageData {
        return Object.assign({},
            { dimensions: this.dimensions },
            { wallPositions: this.wallPositions })
    }
}

export default Stage
export interface StageData {
    dimensions: {
        rows: number,
        cols: number,
    },
    wallPositions: Position[]
}
