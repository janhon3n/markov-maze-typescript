import State from './State'
import Agent from './Agent'

abstract class Action {
   public initiator: Agent
   public abstract execute(state: State): State
}

export default Action
