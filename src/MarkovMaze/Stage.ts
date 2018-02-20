import GameState from './GameState'
import Enviroment from '../PlanningAlgorithm/Enviroment'

class Stage extends Enviroment {

    public dimensions: [number, number]

    public state: GameState
    constructor(dimensions: [number, number], initialState: GameState) {
        super(initialState)
        this.dimensions = dimensions
    }

    public goalStateReached(): boolean {
        return (this.state.coinPositions.length === 0)
    }

    public stateIsValid(state: GameState): boolean {
        // TODO
        return false
    }
}

export default Stage
