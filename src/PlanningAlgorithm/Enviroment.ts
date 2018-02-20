import State, { StateError } from './State'
import Agent from './Agent'
import Action from './Action'

abstract class Enviroment {
    public agents: Agent[]
    public state: State

    constructor(initialState: State) {
        this.state = initialState
        this.agents = []
    }

    public abstract goalStateReached(): boolean

    public executeAction(action: Action) {
        const newState = action.execute(this.state)
        if (!this.stateIsValid(newState)) {
            throw new StateError(
                'Agent ' + action.initiator.name +
                ' tried to execute an action that' +
                'would make the state invalid')
        }
    }

    public abstract stateIsValid(state: State): boolean
}

export default Enviroment
