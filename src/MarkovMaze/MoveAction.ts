import Action from '../PlanningAlgorithm/Action'
import GameState from './GameState'
import Player from './Players/Player'

class MoveAction extends Action {
    public static directions: string[] = ['Left', 'Right', 'Up', 'Down']

    public direction: string

    constructor(initiator: Player, direction: string) {
        super(initiator)
        this.direction = direction
    }

    public execute(state: GameState): GameState {
        const newState = Object.assign({}, state)
        switch (this.direction) {
            case 'Left':
                newState.playerPositions[this.initiator.index].col -= 1
                break
            case 'Right':
                newState.playerPositions[this.initiator.index].col += 1
                break
            case 'Up':
                newState.playerPositions[this.initiator.index].row -= 1
                break
            case 'Down':
                newState.playerPositions[this.initiator.index].row += 1
                break
        }
        return newState
    }
}
export default MoveAction
