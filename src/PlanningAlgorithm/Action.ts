import State from './State'
import Agent from './Agent'

abstract class Action {
   initiator: Agent
   abstract execute(state: State): State
}

export default Action