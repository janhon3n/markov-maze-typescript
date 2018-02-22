import Agent from './Agent'

class Action {
   public initiator: Agent
   constructor(initiator: Agent) {
       this.initiator = initiator
   }
   public execute(state: any): any {
       return Object.assign({}, state)
   }
}

export default Action
