import State from '../PlanningAlgorithm/State'

class GameState extends State {

    public playerPositions: Array<[number, number]> = []
    public coinPositions: Array<[number, number]> = []

    constructor() {
        super()
    }

    public copy(): GameState {
        const newGameState = new GameState()
        newGameState.playerPositions = this.playerPositions.slice()
        newGameState.coinPositions = this.coinPositions.slice()
        return newGameState
    }

    public equals(state: GameState) {
        if (this.playerPositions.length !== state.playerPositions.length
            || this.coinPositions.length !== state.coinPositions.length) {
            return false
        }
        for (let i = 0; i < this.playerPositions.length; i++) {
            if (this.playerPositions[i] !== state.playerPositions[i]) {
                return false
            }
        }
        for (let i = 0; i < this.coinPositions.length; i++) {
            if (this.coinPositions[i] !== state.coinPositions[i]) {
                return false
            }
        }
        return true
    }
}

export default GameState
