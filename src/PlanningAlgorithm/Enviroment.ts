import Agent from './Agent'
import Action from './Action'
import StateError from './StateError'

abstract class Enviroment {
    public agents: Agent[]
    public state: any

    constructor(initialState: any, agents: Agent[]) {
        this.state = initialState
        this.agents = agents
        agents.forEach((agent) => agent.enviroment = this)
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
        this.state = newState
    }

    public abstract stateIsValid(state: any): boolean
}

export default Enviroment
