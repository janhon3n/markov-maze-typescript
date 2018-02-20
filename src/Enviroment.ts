import State, {StateError} from './State'
import Agent from './Agent'
import Action from './Action'

abstract class Enviroment {
   state: State
   agents: Agent[]
   
   abstract goalStateReached(): Boolean
   
   executeAction(action: Action) {
      let newState = action.execute(this.state)
      if(!this.stateIsValid(newState))
         throw new StateError(
            "Agent "+action.initiator.name+
            " tried to execute an action that"+
            "would make the state invalid")
   }

   abstract stateIsValid(state: State): Boolean
}

export default Enviroment