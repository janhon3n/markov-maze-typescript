import State from './State'
import Agent from './Agent'

class Action {
   public initiator: Agent
   constructor(initiator: Agent) {
       this.initiator = initiator
   }
   public execute(state: State): State {
       return state.copy()
   }
}

export default Action
